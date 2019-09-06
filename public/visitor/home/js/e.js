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

var E = function (selector, area, error, success) {
    this.cfg = {};
    this.cfg.area = document;
    this.cfg.selector = selector;
    this.cfg.exist = false;

    this.success = function (elem) {
        console.log("Element elem: ", elem);
    };

    this.error = function (elem) {
        console.error("! Element elem: ", elem);
    };

    if (typeof success === 'function') {
        this.success = success;
    }

    if (typeof error === 'function') {
        this.error = error;
    }


    var self = this;

    this.selector = function (selector) {
        self.cfg.selector = selector;
        return this;
    }

    this.first = function (error, success) {
        if (typeof success !== 'function') {
            success = self.success;
        }
        if (typeof error !== 'function') {
            error = self.error;
        }

        const elem = document.querySelector(self.cfg.selector);

        console.log('E first self.cfg.selector', self.cfg.selector);
        console.log('E first elem', elem);

        if (elem !== null) {
            self.cfg.exist = true;
            success(elem);
            return elem;
        } else {
            self.cfg.exist = false;
            error();
        }

        return elem;
    }

    this.all = function (error, success) {
        if (typeof success !== 'function') {
            success = self.success;
        }
        if (typeof error !== 'function') {
            error = self.error;
        }

        const elem = document.querySelectorAll(self.cfg.selector);

        console.log('E all self.cfg.selector', self.cfg.selector);
        console.log('E all elem', elem);

        if (elem !== null) {
            self.cfg.exist = true;
            success(elem);
        } else {
            self.cfg.exist = false;
            error(elem);
        }

        return elem;
    }
};

//
// function getElement(id) {
//     if (document.getElementById) {
//         return document.getElementById(id);
//     } else if (document.all) {
//         return window.document.all[id];
//     } else if (document.layers) {
//         return window.document.layers[id];
//     }
// }
//
// function getElement() {
//     const element = document.querySelector("#box");
//
//     element.classList.contains("highlighted");
//
//     return element;
// }
//
//
// function getElement() {
//     const element = document.querySelector("#box");
//
//     element.classList.contains("highlighted");
//
//     return element;
// }
