$(document).ready(function () {
   //Contenteditable div remove placeholder when focus
    var editable = $('.writting .input');
    editable.on('focus', function () {
        if($(this).html()==='Write a message'){
            $(this).html('');
        }
    });
    editable.on('blur', function () {
        if($(this).html()===''){
            $(this).html('Write a message');
        }
    });
});