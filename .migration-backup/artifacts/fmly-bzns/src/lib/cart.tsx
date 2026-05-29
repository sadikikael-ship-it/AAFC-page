import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItemKind = "ticket" | "merch";

export interface CartItem {
  /** Stable unique id within the cart (e.g. `event:the-gathering:ga-weekend`). */
  id: string;
  kind: CartItemKind;
  name: string;
  /** Subtitle line (e.g. event name for tickets, collection for merch). */
  subtitle?: string;
  priceCents: number;
  qty: number;
  image?: string;
  /** Free-form metadata — useful when handing off to a checkout provider. */
  metadata?: Record<string, string>;
}

interface CartState {
  items: CartItem[];
  count: number;
  totalCents: number;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
}

const STORAGE_KEY = "fmlybzns:cart:v1";

const CartContext = createContext<CartState | null>(null);

function readStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (it): it is CartItem =>
        !!it &&
        typeof it === "object" &&
        typeof (it as CartItem).id === "string" &&
        typeof (it as CartItem).priceCents === "number" &&
        typeof (it as CartItem).qty === "number",
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readStorage());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore quota / private-mode errors.
    }
  }, [items]);

  const add = useCallback(
    (item: Omit<CartItem, "qty">, qty = 1) => {
      if (qty <= 0) return;
      setItems((prev) => {
        const existing = prev.find((p) => p.id === item.id);
        if (existing) {
          return prev.map((p) =>
            p.id === item.id ? { ...p, qty: p.qty + qty } : p,
          );
        }
        return [...prev, { ...item, qty }];
      });
    },
    [],
  );

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((p) => p.id !== id);
      return prev.map((p) => (p.id === id ? { ...p, qty } : p));
    });
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartState>(() => {
    const count = items.reduce((acc, it) => acc + it.qty, 0);
    const totalCents = items.reduce(
      (acc, it) => acc + it.priceCents * it.qty,
      0,
    );
    return { items, count, totalCents, add, remove, setQty, clear };
  }, [items, add, remove, setQty, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartState {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}
