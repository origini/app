function includeUrl(file, separator, error, success) {
    var xhttp;

    var el = new E(separator);
    var elmnt = el.first();

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
            console.log('el_id', separator);

            if (this.readyState == 4) {
                if (this.status == 200) {
                    // console.log('elmnt', elmnt);
                    // console.log('responseText', this.responseText);
                    // elmnt.innerHTML = this.responseText;
                    // elmnt.appendChild(this.responseText);
                    // elmnt.insertAdjacentHTML('beforeend', this.responseText);
                    // var e = document.createElement('div');
                    // e.innerHTML = this.responseText;
                    // while(e.firstChild) {
                    // elmnt.appendChild(e);
                    // }

                    // elmnt.insertAdjacentHTML('afterend', this.responseText);
                    elmnt.insertAdjacentHTML('beforeend', this.responseText);

                    success(this);
                }
                if (this.status == 404) {
                    elmnt.innerHTML = "Page not found.";
                    error(this);
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
