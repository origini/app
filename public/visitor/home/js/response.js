function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
}


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function Response(xhr, error, success) {
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
};
