// includeScript = function (src) {
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = src;
//     head.appendChild(script);
// };
// var script = document.createElement('script');
// script.onload = function () {
//     //do stuff with the script
// };
// script.src = something;
//
// document.head.appendChild(script); //or something of the likes


var includeScript = function(url, target, success, error){
    //url is URL of external file, success is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.type = 'text/javascript';

    scriptTag.onerror = error;
    scriptTag.onload = success;
    scriptTag.onreadystatechange = success;

    target.appendChild(scriptTag);
};
