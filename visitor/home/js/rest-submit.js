function restSubmit(modulename, method, data, error, success) {
    var url = '/origini-app/visitor/' + modulename + '/php/index.php';

    // var Newsletter = new Rest(url, '?', function (data) {
    //     console.error(data);
    // }, function (data) {
    //     console.table(data);
    // });
    var RestHandle = new Rest(url, '?', error, success);

    console.log(this);

    delete data.method;
    delete data.submit;

    console.log(method);

    RestHandle.byMethod(method, data);
    console.log(data);
}

// restSubmit('auth','GET',{'id': 1,' name':'tom'});
// restSubmit('auth','PUT',{'id': 1,' name':'tom'});