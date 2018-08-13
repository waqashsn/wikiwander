//get the read article btn
let readBtn = document.getElementById("read_article");

readBtn.onclick = function() {
  //get currently active tab in browser window
  browser.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    //tabs object contains info about active tab

    //get the full url of the tab
    var fullUrl = tabs[0].url;

    //check if the current page is a Wikipedia article page
    if (
      fullUrl.substr(0, 30) == "https://en.wikipedia.org/wiki/" &&
      fullUrl != "https://en.wikipedia.org/wiki/Main_Page"
    ) {
      //do if page is Wikipedia article
      alert("Yes, its a Wikipedia article.");
    } else {
      //do if page is NOT Wikipedia article
      alert("No. This page is not a Wikipedia article.");
    }
  });
};
