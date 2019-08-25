function includeUrl(file, el_id, success, error) {
    var xhttp;
    var elmnt = document.getElementById(el_id);

    if (typeof success !== 'function') {
        success = function () {
            console.log('success', "included");
        }
    }

    if (typeof error !== 'function') {
        error = function () {
            console.log('error', "Page not found.");
        }
    }
    console.log('file', file);

    if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log('el_id', el_id);

            if (this.readyState == 4) {
                if (this.status == 200) {
                    // console.log('elmnt', elmnt);
                    // console.log('responseText', this.responseText);
                    elmnt.innerHTML = this.responseText;
                    success();
                }
                if (this.status == 404) {
                    elmnt.innerHTML = "Page not found.";

                    error();

                }
                /* Remove the attribute, and call this function once more: */
                // includeUrl(file, success, error);
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
    }
}
