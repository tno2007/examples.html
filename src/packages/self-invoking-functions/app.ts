(function initialize(timeout, enableDebug) {
  const debug = (...data: any) => enableDebug && console.log("DEBUG:", data);

  let didInitialize = false;

  const addScript = (src: string) => {
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");

      s.setAttribute("src", src);
      s.setAttribute("type", "module");
      s.addEventListener("load", resolve);
      s.addEventListener("error", reject);

      document.body.appendChild(s);
    });
  };

  const init = async () => {
    if (didInitialize) {
      debug("init already executed. Returning to exit function");
      return false;
    }

    debug("Setting didInitialize to true");
    didInitialize = true;

    debug("Running initialization code...");

    // gtm
    // cdns

    //window.Defer.js("https://cdn.twind.style");
    // addScript("https://cdn.twind.style");

    // your custom js comes here
    //await import("./helo");
    //addScript("helo.js");
    console.log("ash");
  };

  const onEvent = (event: Event) => {
    if (!event.currentTarget) return;
    debug("init was triggered by event: ", event.type);
    init();
    event.currentTarget.removeEventListener(event.type, onEvent);
  };

  document.addEventListener("DOMContentLoaded", () =>
    setTimeout(init, timeout)
  );
  document.addEventListener("scroll", onEvent);
  document.addEventListener("mousemove", onEvent);
  document.addEventListener("touchstart", onEvent);
})(2500, true);
