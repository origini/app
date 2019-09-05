
var newsletterPlugin = new RestCruds(
    'newsletter',
    function () {
        var message = 'success';
        AddMessage(message);

        console.table(data);

        // var x = document.getElementsByClassName("example");
        // var i;
        // for (i = 0; i < x.length; i++) {
        //     x[i].style.backgroundColor = "red";
        // }
    },
    function () {
        var message = 'error';
        AddMessage(message);

        console.error(data);
    });


var data = {'firstname': "Tomasz", 'name': 'Tom Sap'};
newsletterPlugin.create(data);
newsletterPlugin.read(1);
newsletterPlugin.update(1, data);
newsletterPlugin.delete(1);
newsletterPlugin.status(1);

// restSubmit('auth','GET',{'id': 1,' name':'tom'});
// restSubmit('auth','PUT',{'id': 1,' name':'tom'});