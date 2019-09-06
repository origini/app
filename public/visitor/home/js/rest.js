// var url = "http://localhost:8080/api/v1/users";
// url = "http://localhost:8080/api/v1/users";

// Get all users


var Rest = function (url, separator, response, error, success) {

    this.url = url;
    this.separator = '/';
    this.response = response;
    if (separator !== undefined) {
        // this.selector = selector + 'id=';
        this.separator = separator;
    }
    // this.error = {};
    // this.success = {};
    this.error = error;
    this.success = success;

    var rest = this;

    this.setUrl = function (url) {
        rest.url = url;
    };

    this.setSeparator = function (separator) {
        rest.separator = separator;
    };


    this.setResponse = function (response) {
        rest.response = response;
    };


    this.byMethod = function (method, data) {


        if (method === 'GET') {
            var id = data.id;
            rest.get(id);
        }
        if (method === 'POST') {
            rest.post(data);
        }
        if (method === 'PUT') {
            var id = data.id;
            rest.put(id, data);
        }
        if (method === 'DELETE') {
            var id = data.id;
            rest.delete(id);
        }

    }

    this.all = function () {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', rest.url, true);
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        xhr.send(null);
    }


    this.get = function (id) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', rest.url + rest.separator + id, true);
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        xhr.send(null);
    }

    // create
    this.post = function (data) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", rest.url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        xhr.send(rest.getJson(data));
    }

    // update
    this.put = function (id, data) {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", rest.url + rest.separator + id, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        xhr.send(rest.getJson(data));
    }

    this.delete = function (id) {
        var xhr = new XMLHttpRequest();

        xhr.open("DELETE", rest.url + rest.separator + id, true);
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        xhr.send(null);
    }

    this.getJson = function(data){
        var json = JSON.stringify(data);
        return json;
    }

    return this;
}

