(function () {
    'use strict';
    
    window.addIframe = function(container){
    var iframe = document.createElement("iframe");
    iframe.setAttribute("id", "iframe_id");
    iframe.height = "100%";
    iframe.width = "100%";
    container.appendChild(iframe);
    }
    
    window.insertURL = function(url){
    document.getElementById("iframe_id").src = url;
    }
    
}());