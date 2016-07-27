requirejs.config({
     paths: {
         jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.3/jquery'
     },
     shim: {
         jquery : {
             exports: 'jQuery'
         }
     } 
});

require (
        ["statCount", "htmlModule", "jquery"],

        function(s1) {
            var arr = [-11, -43, 14, 2, 6];
            console.log(s1.negative(arr));
            console.log(s1.even(arr));
            console.log(s1.average(arr));
        }
 );