define("htmlModule", ['jquery'], function() {
    $(document).ready(function () {
        $('div').append('<div>Added by jquery</div>');
    });
});