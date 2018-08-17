//get the read article btn
let readBtn = document.getElementById("read_article");

//get url of current tab
browser.tabs.query({ currentWindow: true, active: true}, function(tabs){
    var fullUrl = tabs[0].url;
    
    //check if the page is a Wikipedia article
    if(fullUrl.substr(11, 19) == "wikipedia.org/wiki/"){
        //assign click event to button to open Wikiwand article in current tab
        readBtn.onclick = function(){
            articleTopic = fullUrl.substring(30);
            browser.tabs.update({
                url: "https://www.wikiwand.com/"+ fullUrl.substr(8,2) +"/"+ articleTopic            
            });
        }
    } else {
        //disbale the read article button if not a Wikipedia article page
        readBtn.disabled = true;
    }
});
