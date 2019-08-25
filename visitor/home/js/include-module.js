function includeModule(module, plugin, el_id, success, error) {
    var elmnt = document.getElementById(el_id);

    var domain = '/origini-app/visitor/';
    var filename = '/';
    var file = domain + '' + module + '/plugin/' + plugin + '.html'; // + filename;
    var xhttp;

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
            if (this.readyState == 4) {
                if (this.status == 200) {

                    elmnt.innerHTML = this.responseText;

                    restModule(module,  '', '', '', function (data) {
                        console.error(data);
                        AddMessage(data.message.error);
                    }, function (data) {
                        console.table(data);
                        AddMessage(data.message.info);
                    });

                    success();
                }
                if (this.status == 404) {
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
