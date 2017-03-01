

function setup() {
  console.clear();
  console.info("Testing compabillity & settings...");

if (typeof(Storage) !== "undefined") {
  navigator.env = (() => {
    const ua = navigator.userAgent;
    M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    console.info(`detecting browser... ${M[1]}: ${M[2]}`);
  })();

console.info('ok!');

  navigator.cookieParty = (() => {
    if(navigator.cookieEnabled) {
      document.getElementById('btn-submit').addEventListener('click', submit_lstorage_item);
      document.getElementById('btn-clear').addEventListener('click', clear_lstorage);
    } else {
      console.warn("settings: NOT ok!");
      alert("check console");
    }
  })();


} else {
  console.warn("browser does not seem to support local storage!" +
    "\n Checkout: https://updatemybrowser.org/" );
    //window.close();
  }
}
