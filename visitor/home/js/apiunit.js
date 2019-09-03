var Apiunit = function () {

    this.included = [];

    this.success = function (elem) {
        console.log("Api Unit Success");
    };

    this.error = function () {
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

    this.json = function (obj, error, success) {
        if (typeof success !== 'function') {
            success = this.success;
        }
        if (typeof error !== 'function') {
            error = this.error;
        }
        apiunit.loadPlugin(obj);
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

        var loadToHeader = {};

        for (var target in obj) {

            //type = obj[target];
            //value = obj[target][type];


            //console.log(typeof obj[target]);
            //console.log(obj[target]);
            //console.log('target:', target);

            loadToHeader = new IncludeToId(target, error, success);

            if (typeof obj[target] === 'object') {
                //console.log('obj[target]:', obj[target]);

                for (var source in obj[target]) {

                    //console.log('source:', source);
                    //console.log('obj[target][source]:', typeof obj[target][source]);
                    //console.log('obj[target][source]:', obj[target][source]);
                    //for (i = 0; i < obj[target].length; i++) {

                    // console.log(typeof obj[target][source]);
                    // console.log(obj[target][source]);
                    if (typeof obj[target][source] !== 'object') {
                        obj[target][source] = [obj[target][source]];
                    }

                    for (var i in obj[target][source]) {
                        var url = obj[target][source][i];

                        //console.log(target, source, url);

                        var exist_in_apiunit = apiunit.included.indexOf(url) !== -1;

                        if (source === 'docs') {
                            // for (var doc_name in url) {
                            //     var doc_val = obj[target][source][i][doc_name];
                            loadToHeader.comment(i, url);
                            // }
                        } else if (source === 'image') {
                            if (!exist_in_apiunit) {
                                loadToHeader.image(url);
                                apiunit.included.push(url);
                            } else {
                                console.error('!exist: ', url);
                            }
                        } else if (source === 'html') {
                            if (!exist_in_apiunit) {
                                loadToHeader.html(url);
                                apiunit.included.push(url);
                            } else {
                                console.error('!exist: ', url);
                            }
                        } else if (source === 'script') {
                            if (!exist_in_apiunit) {
                                loadToHeader.script(url);
                                apiunit.included.push(url);
                            } else {
                                console.error('!exist: ', url);
                            }

                        } else if (source === 'script-onload') {
                            if (!exist_in_apiunit) {
                                loadToHeader.script_onload(url);
                                apiunit.included.push(url);
                            } else {
                                console.error('!exist: ', url);
                            }

                        } else if (source === 'style') {
                            if (!exist_in_apiunit) {
                                loadToHeader.style(url);
                                apiunit.included.push(url);
                            } else {
                                console.error('!exist: ', url);
                            }

                        } else if (source === 'style-onload') {
                            if (!exist_in_apiunit) {
                                loadToHeader.style_onload(url);
                                apiunit.included.push(url);
                            } else {
                                console.error('!exist: ', url);
                            }

                        } else {

                        }
                    }
                    //console.log(target, type, value);
                }
            }
            // console.log(target, type, value);
        }

        //return output;

        // for(i = 0; i < obj.length; i++) {
        //out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
        //var loadToHeader = new IncludeToId('home-plugins');
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
    addScriptToHead(src);

    // var delay = 100;
    // document.addEventListener("DOMContentLoaded", function () {
    //     setTimeout(function () {
    //             addScriptToHead(src)
    //         },
    //         delay)
    // });
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

var IncludeToId = function (separator, error, success) {
    this.separator = separator;
    //this.included = {};


    if (typeof error !== 'function') {
        error = function (data) {
            console.log('error', "Page not found.");
            // console.error(data);
            // AddMessage(data.message.error);
        }
    }

    if (typeof success !== 'function') {
        success = function (data) {
            console.log('success', "included");
            // console.table(data);
            // AddMessage(data.message.info);
        }
    }

    this.error = error;
    this.success = success;


    // var obj = this;
    this.comment = function (name, value) {
        console.log('apiunit: ', name, value);
        //includeUrl(file, this.separator, this.error, this.success);
        // return this;
    };

    this.image = function (file) {
        //includeImg(file, this.separator, this.error, this.success);
        includeImg(file, this.separator, this.error, this.success);
        //this.included.push(file);

        // return this;
    };

    // let img = new Image;
    //
    // img.onload = function() {
    //     console.log ("Bild geladen");
    //     elem.appendChild (img);
    // }
    // img.src = "../img/apiunit.png";  // erst nach dem Event Listener!
    //
    // window.onunload = function() {
    //     alert('bye bye Honey')
    // };
    //
    // window.onload = function () {
    //     console.log('Dokument geladen');
    // }
    //
    this.html = function (file) {
        includeUrl(file, this.separator, this.error, this.success);
        //this.included.push(file);

        // return this;
    };

    this.script = function (file) {
        // addScriptToHeadDelayed(file);
        addScriptToHead(file);
        //this.included.push(file);
        // return this;
    };
    this.script_onload = function (file) {
        // addScriptToHeadDelayed(file);
        window.onload = function () {
            addScriptToHead(file);
        };
        //this.included.push(file);
        // return this;
    };
    this.styleString = function (file) {
        // addStyleStringToHeadDelayed(file);
        addStyleStringToHead(file);
        //this.included.push(file);

        // return this;
    };
    this.style = function (file) {
        console.log('addStyleToHeadDelayed', file);
        addStyleToHead(file);
        //this.included.push(file);
        // return this;
    };
    this.style_onload = function (file) {
        window.onload = function () {
            console.log('style_onload', file);
            addStyleToHead(file);
        }
        //this.included.push(file);
        // return this;
    };

    // return this;
};

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


