// formToObject
// Rest
function restModule(modulename, classname_prefix, domain, restfile, error, success) {

    if (classname_prefix === undefined || classname_prefix.length < 1) {
        classname_prefix = 'module-';
    }

    if (domain === undefined || domain.length < 1) {
        domain = '/origini-app/visitor/';
    }

    if (restfile === undefined || restfile.length < 1) {
        restfile = '/php/index.php';
    }

    var url = domain + modulename + restfile;

    var Newsletter = new Rest(url, '?', error, success);


    // var forms = document.getElementsByTagName('form');
    var testElements = document.getElementsByClassName(classname_prefix + modulename);
    var forms = Array.prototype.filter.call(testElements, function (testElement) {
        return testElement.nodeName === 'FORM';
    });

    // console.log(forms);
    for (var i = 0; i < forms.length; i++) {

        console.log(forms[i]);

        forms[i].addEventListener("submit", function (event) {
            console.log(this);

            var data = formToObject(this);
            var method = data.method;
            delete data.method;
            delete data.submit;

            console.log(method);

            Newsletter.byMethod(method, data);
            console.log(data);

            event.preventDefault();
        });
    }
}
