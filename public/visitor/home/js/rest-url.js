// Rest
// formEvent
function restUrl(url, classname, error, success) {

    var rest_form = new Rest(url, '?', error, success);

    var forms = document.getElementsByTagName('form');

    // console.log(forms);
    for (var i = 0; i < forms.length; i++) {
        formEvent(forms[i], rest_form, error, success);
    }
}
