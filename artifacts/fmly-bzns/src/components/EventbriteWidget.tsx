import { useEffect } from "react";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (options: {
        widgetType: string;
        eventId: string;
        iframeContainerId: string;
        iframeContainerHeight?: number;
        onOrderComplete?: () => void;
      }) => void;
    };
  }
}

export function EventbriteWidget({ eventId }: { eventId: string }) {
  const containerId = `eb-widget-${eventId}`;

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const init = () => {
      if (window.EBWidgets) {
        window.EBWidgets.createWidget({
          widgetType: "checkout",
          eventId,
          iframeContainerId: containerId,
          iframeContainerHeight: 450,
        });
      }
    };

    if (window.EBWidgets) {
      init();
    } else {
      script = document.createElement("script");
      script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
    }

    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [eventId, containerId]);

  return (
    <div
      id={containerId}
      style={{ minHeight: 420, borderRadius: 8, overflow: "hidden" }}
    />
  );
}
