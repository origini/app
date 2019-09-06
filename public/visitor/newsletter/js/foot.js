restUrl('/visitor/newsletter/php/index.php', 'newsletter',    function (data) {
    console.error('restUrl', data);
    AddMessage(data.message.error);
}, function (data) {
    console.log('restUrl', data);
    console.table(data);
    AddMessage(data.message.info);
});
