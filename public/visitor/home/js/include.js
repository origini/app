var Include = function (error, success) {
    //
    this.cfg = {};
    // this.cfg.target = target;

    var include = this;

    this.addScriptToHead = function (src) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        head.appendChild(script);
    };

    this.addScriptToHeadDelayed = function (src) {
        var delay = 100;
        setTimeout(function () {
                addScriptToHead(src)
            },
            delay);
    };

    this.addStyleStringToHead = function (string) {
        var head = document.getElementsByTagName('head')[0];
        var linkElement = this.document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('type', 'text/css');
        linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(string));
        head.appendChild(linkElement);
    };

//
// function addStyleStringToHeadDelayed(string) {
//     var delay = 50;
//     document.addEventListener("DOMContentLoaded", function () {
//         setTimeout(function () {
//                 addStyleStringToHead(string)
//             },
//             delay)
//     });
// }


    this.addStyleToHead = function (src) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = src;
        head.appendChild(link);

        // var linkElement = this.document.createElement('link');
        // linkElement.setAttribute('rel', 'stylesheet');
        // linkElement.setAttribute('type', 'text/css');
        // linkElement.setAttribute('href', src);
        // head.appendChild(linkElement);
    };

    this.addStyleToHeadDelayed = function (src) {
        addStyleToHead(src);
        //
        // var delay = 1;
        // setTimeout(function () {
        //         addStyleToHead(src);
        //     },
        //     delay);
    };

// <a href="/path/to/image.jpg" download="FileName.jpg">
    this.includeImgA = function (url, fileName) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
    };

    this.includeImg = function (url, selector) {
        console.log('apiunit / image / ', url);
        var el = new E(selector);
        var elmnt = el.first();

        let img = new Image;
        img.onload = function () {
            console.log("Including IMG:", url);
            elmnt.appendChild(img);
        };
        img.src = url;  // erst nach dem Event Listener!

        // var image = document.images[0];
        // var downloadingImage = new Image();
        // downloadingImage.onload = function () {
        //     image.src = this.src;
        // };
        // downloadingImage.src = url;
    };

    this.includeUrl = function (file, selector, error, success) {
        var xhttp;

        var el = new E(selector);

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
                console.log('el_id', selector);

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
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
        }
        return this;
    }

};
