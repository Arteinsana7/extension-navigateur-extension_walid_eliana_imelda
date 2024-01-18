chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'applyChanges') {
    applyChanges(request.selectedFontFamily);
  }
});

function applyChanges(selectedFontFamily) {
  let OpenDi           = document.createElement ("style");
 OpenDi.type          = "text/css";
OpenDi.textContent   = "@font-face { font-family: YOUR_FONT; src: url('"
                          + chrome.extension.getURL ("OpenDysleric.otf")
                          + "'); }"
                          ;
  document.head.appendChild (OpenDi);

  document.querySelectorAll('*').forEach(element => {
    element.style.fontFamily = selectedFontFamily;
  });
}


