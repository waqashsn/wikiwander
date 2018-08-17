var url = document.location.href;
//check if current tab is not a Wikipedia article page
if (url.indexOf("wikipedia.org/wiki") === -1) {
  //update and send inactive icons
  browser.runtime.sendMessage({
    iconPath20: "/images/wikiwand_inactive20.png",
    iconPath40: "/images/wikiwand_inactive40.png",
    iconPath25: "/images/wikiwand_inactive25.png",
    iconPath48: "/images/wikiwand_inactive48.png"
  });
}
