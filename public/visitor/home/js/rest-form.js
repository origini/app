/**
 * Rest
 * formToObject
 */
var RestForm = function (separator, error, success) {

    this.cfg = {};
    this.cfg.element = new E(separator);
    // var elmnt = el.first();

    var restform = this;

    this.submit = function (cfg) {
        cfg.event = "submit";
        // cfg.target = "form";

        var config = restform.cfg;
        // config.event = cfg.event;
        // config.target = cfg.event;
        restform.cfg.element.all('',function () {

            var rest_form = new Rest(config.url, '?', error, success);

            var forms = element.getElementsByTagName('form');
            // var forms = element.getElementsByTagName('form');

            for (var i = 0; i < forms.length; i++) {

                var form = forms[i];
                //formEvent(forms[i], rest_form, error, success);
                form.addEventListener(config.event, function (event) {
                    console.log(this);

                    var data = formToObject(this);
                    var method = data.method;
                    delete data.method;
                    delete data.submit;

                    console.log(method);

                    rest_form.byMethod(method, data);
                    console.log(data);

                    event.preventDefault();
                });
            }
        });
        // cfg.url;
        // cfg.method;




    }

}
