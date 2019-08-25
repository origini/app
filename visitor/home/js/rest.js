// var url = "http://localhost:8080/api/v1/users";
// url = "http://localhost:8080/api/v1/users";

// Get all users


function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function getElement(id) {
    if (document.getElementById) {
        return document.getElementById(id);
    } else if (document.all) {
        return window.document.all[id];
    } else if (document.layers) {
        return window.document.layers[id];
    }
}

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

var Response = function (xhr, error, success) {
    if (!isJson(xhr.responseText)) {
        console.error('Response give not JSON Data');
        // alert('Response give not JSON Data');
        console.log(xhr.responseText);
        return false;
    }
    var data = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        // console.table(data);
        success(data, xhr);
    } else {
        // console.error(data);
        error(data, xhr);
    }
}


function Rest(url, selector, error, success) {

    this.url = url;
    this.selector = '/';
    if (selector !== undefined) {
        // this.selector = selector + 'id=';
        this.selector = selector;
    }
    // this.error = {};
    // this.success = {};
    this.error = error;
    this.success = success;

    this.byMethod = function (method, data) {


        if (method === 'GET') {
            var id = data.id;
            this.get(id);
        }
        if (method === 'POST') {
            this.post(data);
        }
        if (method === 'PUT') {
            var id = data.id;
            this.put(id, data);
        }
        if (method === 'DELETE') {
            var id = data.id;
            this.delete(id);
        }

    }

    this.all = function () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.url, true);
        xhr.onload = function () {
            Response(xhr, error, success);
        }
        xhr.send(null);
    }


    this.get = function (id) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.url + this.selector + id, true);
        xhr.onload = function () {
            Response(xhr, error, success);
        }
        xhr.send(null);
    }

    // create
    this.post = function (data) {
        var json = JSON.stringify(data);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", this.url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            Response(xhr, error, success);
        }
        xhr.send(json);
    }

    // update
    this.put = function (id, data) {
        var json = JSON.stringify(data);

        var xhr = new XMLHttpRequest();
        xhr.open("PUT", this.url + this.selector + id, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            Response(xhr, error, success);
        }
        xhr.send(json);
    }

    this.delete = function (id) {
        var xhr = new XMLHttpRequest();

        xhr.open("DELETE", this.url + this.selector + id, true);
        xhr.onload = function () {
            Response(xhr, error, success);
        }
        xhr.send(null);
    }

    return this;
}

