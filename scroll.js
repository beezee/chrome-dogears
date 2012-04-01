var hashStr = window.location.hash+'';
var scrollPos = hashStr.match(/^#de_scroll_([0-9]+)$/);
if (scrollPos && scrollPos[1]) {
  window.scroll(0, parseInt(scrollPos[1]));
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        var vscroll = (document.all ? document.scrollTop : window.pageYOffset);
        sendResponse({scroll: vscroll});
    }
);