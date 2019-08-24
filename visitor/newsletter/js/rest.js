// var url = "http://localhost:8080/api/v1/users";
// url = "http://localhost:8080/api/v1/users";

// Get all users


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

var Response = function (xhr) {
    if (!isJson(xhr.responseText)) {
        console.error('Response give not JSON Data');
        console.log(xhr.responseText);
        return false;
    }
    var data = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(data);
    } else {
        console.error(data);
    }
}

function Rest(url, selector) {

    this.url = url;
    this.selector = '/';
    if (selector !== undefined) {
        // this.selector = selector + 'id=';
        this.selector = selector;
    }


    this.all = function () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.url, true);
        xhr.onload = function () {
            Response(xhr);
        }
        xhr.send(null);
    }


    this.get = function (id) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.url + this.selector + id, true);
        xhr.onload = function () {
            Response(xhr);
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
            Response(xhr);
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
            Response(xhr);
        }
        xhr.send(json);
    }

    this.delete = function (id) {
        var xhr = new XMLHttpRequest();

        xhr.open("DELETE", this.url + this.selector + id, true);
        xhr.onload = function () {
            Response(xhr);
        }
        xhr.send(null);
    }

    return this;
}

