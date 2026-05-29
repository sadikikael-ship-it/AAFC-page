import fungusUrl from "@assets/Fungus_1777077019582.otf?url";

if (typeof document !== "undefined" && "fonts" in document) {
  const fungus = new FontFace("Fungus", `url(${fungusUrl}) format("opentype")`, {
    style: "normal",
    weight: "400",
    display: "swap",
  });
  fungus
    .load()
    .then((loaded) => {
      (document as Document).fonts.add(loaded);
      document.documentElement.classList.add("fontsLoaded");
    })
    .catch(() => {
      // ignore — fallback fonts will be used
    });
}
