
var error = function (data) {
    console.error('restUrl', data);
    AddMessage(data.message.error);
};

var success = function (data) {
    console.log('restUrl', data);
    console.table(data);
    AddMessage(data.message.info);
};


// var form = new RestForm(document, error, success);

var incl = new Include();

var rout = new Router(incl);

// router, config, listener, config
var web = new Apiunit();
// web.target("#home-plugins");

web.router(rout);
//         "domain": "http://localhost:88",
//             "/visitor/home/js/rest.js",
//             "/visitor/home/js/form-event.js",
//     "script_delay": [
//     "/visitor/newsletter/js/foot.js"
//     ]
//     "/visitor/home/js/rest-url.js"
//     "/visitor/home/js/formToObject.min.js",


web.json({
    "docs": {
        "version": "0.0.1",
        "author": "Tom Sapletta",
        "company": "Softreck",
        "name": "Newsletter",
        "tags": "Newsletter, Create, Read, Update, Delete"
    },
    "target": "#home-plugins",
    "image": [
        "/visitor/home/img/apiunit.png"
    ],
    "html": [
        "/visitor/home/plugin/messages.html",
        "/visitor/newsletter/plugin/create.html"
    ],
    "style": [
        "/visitor/newsletter/css/black.css",
        "/visitor/home/css/mobile.css"
    ],
    "script": [
        "/visitor/home/js/message.js",
    ]
});


var elem = new E();
// var resp = new Response();

var rout = new Listener(elem, Response);

var event = new Apiunit();
event.router(rout);
event.json({
    "submit": {
        "target": "form",
        "url": "/visitor/newsletter/php/index.php",
        "method": "get"
    },
}, 200);

//
//
// var environment = new Apiunit();
//
// environment.router(form);
//
// environment.json({
//     "local": {
//         "domain": "/visitor/newsletter/php/index.php",
//         "method": "get"
//     },
// });

// apiunit.event({
//         "target": "form",
//         "event": "submit",
//         "url": ""
// });
