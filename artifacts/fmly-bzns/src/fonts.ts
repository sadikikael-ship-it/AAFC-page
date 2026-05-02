if (typeof document !== "undefined" && "fonts" in document) {
  const fungus = new FontFace("Fungus", `url(/fonts/Fungus.otf) format("opentype")`, {
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
