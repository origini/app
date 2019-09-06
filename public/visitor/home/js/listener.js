/**
 * Element
 * Rest
 * formToObject
 *
 * @param error
 * @param success
 * @constructor
 */
var Listener = function (element, response, error, success) {

    this.cfg = {};
    this.cfg.selector = 'body';
    this.element = element;
    this.response = response;

    // this.element = new E(selector);
    // var elmnt = el.first();
    this.included = [];

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

    var listener = this;

    this.setSelector = function (selector) {
        listener.selector = selector;

        return this;
    };

    this.setResponse = function (response) {
        listener.response = response;
        // listener.selector
        return this;
    };

    this.setElement = function (element) {
        listener.element = element;

        return this;
    };

    this.submit = function (cfg) {
        // console.log('Listener submit:', cfg);

        // var exist_in_apiunit = router.included.indexOf(files[i]) !== -1;
        //
        // console.log('exist_in_apiunit ', exist_in_apiunit);
        //
        //
        // if (!exist_in_apiunit) {
        //     includeImg(files[i], router.cfg.target, this.error, this.success);
        //     router.included.push(files[i]);
        //
        // } else {
        //     console.error('!exist: ', files[i]);
        // }

        cfg.event = "submit";

        if (typeof cfg.method !== 'string') {
            cfg.method = "get";
        }
        if (typeof cfg.target === 'string') {
            listener.element.selector(cfg.target);
        } else {
            // cfg.element = restform.element;
            listener.element.selector(listener.selector);
        }

        // cfg.target = "form";

        // var config = restform.cfg;
        console.log('Listener cfg.target ', cfg.target);
        console.log('Listener config ', cfg);
        console.log('Listener listener.element.cfg ', listener.element.cfg);


        // config.event = cfg.event;
        // config.target = cfg.event;
        listener.element.all('',
            function (forms) {

                console.log('Listener forms ', forms, forms.length);

                // cfg.url;
                // cfg.method;

                var rest_form = new Rest(cfg.url, '?', listener.response, error, success);

                // var forms = element.getElementsByTagName('form');
                var data = {};
                var method = '';

                for (var i = 0; i < forms.length; i++) {

                    var form = forms[i];
                    console.log('Listener addEventListener form', form);

                    //formEvent(forms[i], rest_form, error, success);
                    form.addEventListener(cfg.event, function (event) {
                        console.log('Listener addEventListener this', this);

                        data = formToObject(this);
                        // TODO: method replace if not exist
                        if (typeof data.method === 'string') {
                            method = data.method;
                            delete data.method;
                        } else {
                            method = cfg.method;
                        }

                        if (typeof data.submit === 'string') {
                            delete data.submit;
                        }

                        console.log(method);

                        rest_form.byMethod(method, data);
                        console.log(data);

                        event.preventDefault();
                    });
                }
            }
        );


        return this;
    }

}
