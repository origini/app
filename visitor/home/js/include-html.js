function includeHTML(classname, success, error) {
    var z, i, elmnt, file, xhttp;

    if(typeof success !== 'function'){
        success = function(){
            console.log('success', "included");
        }
    }

    if(typeof error !== 'function'){
        error = function(){
            console.log('error', "Page not found.");
        }
    }

    /* Loop through a collection of all HTML elements: */
    if(typeof classname === 'undefined' || classname.length <1){
        // z = document.getElementsByTagName("*");
        z = document.getElementsByTagName("div");
        console.log('tag', "div");

    } else {
        z = document.getElementsByClassName(classname);
        console.log('classname', "classname");

    }
    // z = document.getElementsByTagName("div");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        // console.log('elmnt', elmnt);

        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        console.log('file', file);

        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                        success();
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                        error();

                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML(classname, success, error);
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
