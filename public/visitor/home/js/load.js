function load(target, success, error) {
    //url is URL of external file, success is the code
    //to be called from the file, location is the location to
    //insert the <script> element


    this.js = function (url) {
        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = loadJs(url[i], target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            loadJs(url, target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };


    this.html = function (url) {
        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = loadHtml(url[i], target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            loadHtml(url, target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };

    this.style = function (url) {
        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = loadHtml(url[i], target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            loadHtml(url, target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };

    this.image = function (url) {
        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = loadHtml(url[i], target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            loadHtml(url, target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };
    return this;
};

function loadJs(url, target, success, error) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.type = 'text/javascript';

    scriptTag.onerror = error;
    scriptTag.onload = success;
    scriptTag.onreadystatechange = success;

    target.appendChild(scriptTag);
}

function loadHtml(url, target, success, error) {

}
function loadStyle(url, target, success, error) {

}
function loadImage(url, target, success, error) {

}
