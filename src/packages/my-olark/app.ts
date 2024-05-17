//
/**
(function (_win, _doc, _url, _misc1, k, _misc2) {
  if (_win.olark) return;
  _misc1 = "script";
  _misc2 = _doc.createElement(_misc1);
  _misc1 = _doc.getElementsByTagName(_misc1)[0];
  _misc2.async = 1;
  _misc2.src = "//" + _url;
  _misc1.parentNode.insertBefore(y, r);
  _misc2 = _win.olark = function () {
    k.s.push(arguments);
    k.t.push(+new Date());
  };
  _misc2.extend = function (i, j) {
    _misc2("extend", i, j);
  };
  _misc2.identify = function (i) {
    _misc2("identify", (k.i = i));
  };
  _misc2.configure = function (i, j) {
    _misc2("configure", i, j);
    k.c[i] = j;
  };
  k = _misc2._ = {
    s: [],
    t: [+new Date()],
    c: {},
    l: _url,
  };
})(window, document, "test.js");
// Add configuration calls below this comment
window.olark.identify("YOUR_SITE_ID");
window.olark.configure("SETTING_1", 1);
*/
// **********************
// **********************
// gtm
// **********************
/*
(function (w, d, s, l, i) {
  // Define the function and its arguments:
  // w: the global window object
  // d: the global document object
  // s: a string representing the name of an HTML element (in this case, "script")
  // l: a string representing the name of the data layer (in this case, "dataLayer")
  // i: a string representing the GTM container ID

  // Set up the data layer array in the global window object:
  w[l] = w[l] || []; // If the data layer array does not exist, create a new empty array
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  // Create a new script element:
  var f = d.getElementsByTagName(s)[0]; // Get the first script element in the document
  var j = d.createElement(s); // Create a new script element
  var dl = l != "dataLayer" ? "&l=" + l : ""; // If the data layer name is not "dataLayer", append it to the URL as a query parameter

  // Set the script element's attributes:
  j.async = true; // Set the async attribute to true, which means that the script will be executed asynchronously
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl; // Set the src attribute to the URL of the GTM JavaScript file, including the GTM container ID and the data layer name (if applicable) as query parameters

  // Insert the script element before the first script element in the document:
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-XXXXXX");
*/

// const script = HTMLScriptElement



// mine!
(function (w, d, s, u, l, i) {
  // Define the function and its arguments:
  // w: the global window object
  // d: the global document object
  // s: a string representing the name of an HTML element (in this case, "script")
  // u: the url of the js script file
  // l: a string representing the name of the data layer (in this case, "dataLayer")
  // i: a string representing the GTM container ID

  // Set up the data layer array in the global window object:
  w[l] = w[l] || []; // If the data layer array does not exist, create a new empty array
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  // Create a new script element:
  const f = d.getElementsByTagName(s)[0]; // Get the first script element in the document
  const j = d.createElement(s) as HTMLScriptElement; // Create a new script element
  const dl = l !== "dataLayer" ? `&l=${l}`: ""; // If the data layer name is not "dataLayer", append it to the URL as a query parameter

  // Set the script element's attributes:
  j.async = true; // Set the async attribute to true, which means that the script will be executed asynchronously
  // Set the src attribute to the URL of the GTM JavaScript file, including the GTM container ID and the data layer name (if applicable) as query parameters
  //j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  //j.src = w.location + u; // + "?id=" + i + dl;
  j.src = u;

  // Insert the script element before the first script element in the document:
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "https://cdn.jsdelivr.net/npm/@twind/core@1", "dataLayer", "GTM-XXXXXX");
