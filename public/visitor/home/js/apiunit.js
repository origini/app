var Apiunit = function () {

    // this.router = router;
    this.cfg = {};
    this.cfg.router = {};

    // this.config = config;

    this.included = [];

    this.success = function (elem) {
        console.log("Api Unit Success".elem);
    };

    this.error = function (elem) {
        console.error("Api Unit Problem");
    };

    var apiunit = this;

    this.url = function (path, error, success) {
        if (typeof success !== 'function') {
            success = this.success;
        }
        if (typeof error !== 'function') {
            error = this.error;
        }
        if (typeof path === 'string') {
            this.loadJSON(path, function (obj) {
                // Parse JSON string into object
                // console.log('obj', obj);
                apiunit.loadPlugin(obj);
            });
        } else {
            for (var i in path) {
                this.loadJSON(path[i], function (obj) {
                    // Parse JSON string into object
                    // console.log('obj', obj);
                    apiunit.loadPlugin(obj);
                });
                // apiunit.loadPlugin(obj[i]);
            }
        }

        return this;
    };

    this.router = function (router, error, success) {
        // if (typeof success !== 'function') {
        //     success = this.success;
        // }
        // if (typeof error !== 'function') {
        //     error = this.error;
        // }
        this.cfg.router = router;

        return this;
    };


    this.json = function (obj, error, success) {
        // if (typeof success !== 'function') {
        //     success = this.success;
        // }
        // if (typeof error !== 'function') {
        //     error = this.error;
        // }
        apiunit.loadPlugin(obj, error, success);

        return this;
    };


    this.loadJSON = function (file, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', file, true);
        // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState === 4 && xobj.status === 200) {
                // Required use of an anonymous callback
                // as .open() will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            } else {
                console.error(file, xobj);
            }
        };
        xobj.send(null);
        return this;
    };


    this.loadPlugin = function (obj, error, success) {

        if (typeof success !== 'function') {
            success = this.success;
        }
        if (typeof error !== 'function') {
            error = this.error;
        }

        obj = this.fromJsonStringToObj(obj);

        var router = this.cfg.router;
        var exe = {};
        // for (var target in obj) {

        //type = obj[target];
        //value = obj[target][type];


        //console.log(typeof obj[target]);
        //console.log(obj[target]);
        //console.log('target:', target);

        // router = new Router(target, error, success);

        if (typeof obj === 'object') {
            //console.log('obj:', obj);

            for (var source in obj) {

                //console.log('source:', source);
                //console.log('obj[source]:', typeof obj[source]);
                //console.log('obj[source]:', obj[source]);
                //for (i = 0; i < obj.length; i++) {

                // console.log(typeof obj[source]);
                // console.log(obj[source]);

                if (typeof obj[source] !== 'object') {
                    obj[source] = [obj[source]];
                }


                for (var i in obj[source]) {

                    var data = obj[source][i];

                    //console.log(target, source, data);

                        try {
                            exe = router[source](data);
                            console.log('router[source] =', exe);
                        } catch (err) {
                            console.error('!router[source]', err, obj);
                        }


                }
                //console.log(target, type, value);
            }
        } else {
            console.error('apiunit obj: is not object:', obj);
        }
        // console.log(target, type, value);
        // }
        console.log('apiunit.included:', apiunit.included);

        //return output;

        // for(i = 0; i < obj.length; i++) {
        //out += '<a href="' + arr[i].data + '">' + arr[i].display + '</a><br>';
        //var router = new IncludeToId('home-plugins');
        // console.log(obj[i]);
        // }
        //document.getElementById("id01").innerHTML = out;
        return this;
    };


    this.fromJsonStringToObj = function (obj) {
        if (typeof obj === 'string') {
            try {
                //const user = JSON.parse(data)
                //console.log('fromJsonStringToObj before', obj);
                obj = JSON.parse(obj);
                console.log('fromJsonStringToObj after', obj);
            } catch (err) {
                console.error('!fromJsonStringToObj błąd formatu JSON, sprawdź czy nie ma przecinka na koncu ostatniego elementu listy', err, obj);
            }
        }
        return obj;
    };


};


function addScriptToHead(src) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    head.appendChild(script);
}


function addScriptToHeadDelayed(src) {
    var delay = 100;
    setTimeout(function () {
            addScriptToHead(src)
        },
        delay);
}


function addStyleStringToHead(string) {
    var head = document.getElementsByTagName('head')[0];
    var linkElement = this.document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(string));
    head.appendChild(linkElement);
}

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


function addStyleToHead(src) {
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
}

function addStyleToHeadDelayed(src) {
    addStyleToHead(src);
    //
    // var delay = 1;
    // setTimeout(function () {
    //         addStyleToHead(src);
    //     },
    //     delay);
}

// <a href="/path/to/image.jpg" download="FileName.jpg">
function includeImgA(url, fileName) {
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
}

function includeImg(url, separator) {
    console.log('apiunit / image / ' + url);
    var el = new Element(separator);
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
}

//var loadToHeader = new IncludeToId('home-plugins');
/*
var setting = {
    "id": "home-plugins",
    "style": ["/visitor/newsletter/css/black.css"],
    "script": ["/visitor/newsletter/js/foot.js"],
    "html": ["/visitor/newsletter/plugin/create.html", "/visitor/newsletter/plugin/delete.html"],
};
*/
// TODO : id / tag, class
// var setting = {
//     "head": {
//         "style": "/visitor/newsletter/css/black.css",
//         "script": "/visitor/newsletter/js/foot.js"
//     },
//     "home-plugins": {
//         "html": [
//             "/visitor/home/plugin/messages.html",
//             "/visitor/newsletter/plugin/create.html",
//             "/visitor/newsletter/plugin/delete.html"
//         ]
//     },
// };


/*
if (source === 'docs') {
    // for (var doc_name in url) {
    //     var doc_val = obj[source][i][doc_name];
    router.comment(i, url);
    // }
} else if (source === 'image') {
    if (!exist_in_apiunit) {
        router.image(url);
        apiunit.included.push(url);
    } else {
        console.error('!exist: ', url);
    }
} else if (source === 'html') {
    if (!exist_in_apiunit) {
        router.html(url);
        apiunit.included.push(url);
    } else {
        console.error('!exist: ', url);
    }
} else if (source === 'script') {
    if (!exist_in_apiunit) {
        router.script(url);
        apiunit.included.push(url);
    } else {
        console.error('!exist: ', url);
    }

} else if (source === 'script-onload') {
    if (!exist_in_apiunit) {
        router.script_onload(url);
        apiunit.included.push(url);
    } else {
        console.error('!exist: ', url);
    }

} else if (source === 'script-delay') {
    if (!exist_in_apiunit) {
        router.script_delay(url);
        apiunit.included.push(url);
    } else {
        console.error('!exist: ', url);
    }

} else if (source === 'style') {
    if (!exist_in_apiunit) {
        router.style(url);
        apiunit.included.push(url);
    } else {
        console.error('!exist: ', url);
    }

} else if (source === 'style-onload') {
    if (!exist_in_apiunit) {
        router.style_onload(url);
        apiunit.included.push(url);
    } else {
        console.error('!exist: ', url);
    }

} else {

}
*/

