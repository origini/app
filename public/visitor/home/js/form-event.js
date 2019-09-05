// formToObject
function formEvent(form, rest_form, error, success) {
    console.log(form);

    form.addEventListener("submit", function (event) {
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
