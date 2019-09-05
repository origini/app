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


var Message = function (selector) {
    this.selector = selector;


    this.add = function (message) {
        console.log(message);
        var classname = null;

        if (typeof classname !== 'string') {
            classname = 'home-messages';
        }
        handle = document.getElementsByClassName(classname)
        if (handle)

            var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(message);         // Create a text node
        node.appendChild(textnode);
        document.getElementsByClassName(classname)[0].appendChild(node);
    }
}


function AddMessage(text, classname) {
    var message = new Message(classname);
    message.add(text);
}
