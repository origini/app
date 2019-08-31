// var HomeMessage = function (name, success, error) {
//     this.name = name;
//     this.success = success;
//     this.error = error;
//
//     this.create = function (data) {
//         restSubmit(this.name, 'GET', data, this.success, this.error);
//     }
//
// };

// example: element('body').first().

var Element = function element(selector, area, error, success) {
    this.area = document;
    this.selector = selector;
    this.exist = false;

    this.success = function (elem) {
        console.log("Hier gibts den Verweis auf auf ein " + elem.tagName + " mit CSS-Klasse selector");
    };

    this.error = function () {
        console.error("Auf dieser Seite ist kein Element mit CSS-Klasse selector");
    };

    if (typeof success === 'function') {
        this.success = success;
    }

    if (typeof error === 'function') {
        this.error = error;
    }


    this.first = function (error, success) {
        if (typeof success !== 'function') {
            success = this.success;
        }
        if (typeof error !== 'function') {
            error = this.error;
        }

        const elem = document.querySelector(this.selector);

        console.log(this.selector);
        console.log(elem);

        if (elem !== null) {
            this.exist = true;
            success(elem);
            return elem;
        } else {
            this.exist = false;
            error();
        }
        return this;
    }

    this.all = function (error, success) {
        if (typeof success !== 'function') {
            success = this.success;
        }
        if (typeof error !== 'function') {
            error = this.error;
        }

        const elem = document.querySelectorAll(this.selector);
        if (elem !== null) {
            this.exist = true;
            success(elem);
        } else {
            this.exist = false;
            error();
        }
        return this;
    }
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

function getElement() {
    const element = document.querySelector("#box");

    element.classList.contains("highlighted");

    return element;
}


function getElement() {
    const element = document.querySelector("#box");

    element.classList.contains("highlighted");

    return element;
}
