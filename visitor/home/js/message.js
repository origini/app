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

function AddMessage(message, classname) {
    console.log(message);

    if (typeof classname !== 'string') {
        classname = 'home-messages';
    }

    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(message);         // Create a text node
    node.appendChild(textnode);
    document.getElementsByClassName(classname)[0].appendChild(node);
}
