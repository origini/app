var Router = function (target, error, success) {
    //
    this.cfg = {};
    this.cfg.target = {};
    this.target = target;
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
    this.docs = function (obj) {
        if (typeof obj !== 'object') {
            console.error('apiunit.docs: is not object:', obj);
            return this;
        }

        for (var i in obj) {
            console.log('apiunit.docs: ', i, obj[i]);

            for (var name in obj[i]) {
                console.log('apiunit.docs: ', name, obj[i][name]);
            }
        }
        return this;
    };

    this.image = function (files, target) {
        if (typeof files !== 'object') {
            files = [files];
        }

        for (var i in files) {
            includeImg(files[i], target, this.error, this.success);
        }

        this.included.push(file);

        return this;
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
    this.target = function (target) {
        this.cfg.target = target;

        return this;
    };

    this.html = function (files, target) {

        if (typeof files !== 'object') {
            files = [files];
        }

        for (var i in files) {
            includeUrl(files[i], target, this.error, this.success);
        }

        this.included.push(file);

        return this;
    };

    this.script = function (files, target) {
        if (typeof files !== 'object') {
            files = [files];
        }

        for (var i in files) {

            var exist_in_apiunit = apiunit.included.indexOf(files[i]) !== -1;

            if (!exist_in_apiunit) {
                addScriptToHead(files[i], target, this.error, this.success);
            } else {
                console.error('!exist: ', files[i]);
            }
        }

        this.included.push(files[i]);

        return this;
    };
    this.script_onload = function (files) {
        // addScriptToHeadDelayed(file);
        window.onload = function () {
            addScriptToHead(file);
        };
        //this.included.push(file);
        // return this;
    };
    this.script_delay = function (file) {
        addScriptToHeadDelayed(file);
    };


    this.style = function (files, target) {
        if (typeof files !== 'object') {
            files = [files];
        }

        for (var i in files) {
            addStyleToHead(files[i], target, this.error, this.success);
        }

        this.included.push(file);
        // return this;
    };
    this.style_string = function (file) {
        // addStyleStringToHeadDelayed(file);
        addStyleStringToHead(file);
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
