var button = document.querySelector('button');
var result = document.querySelector('div.response');
var url = "http://jsonplaceholder.typicode.com/";

button.addEventListener('click', jQueryAjaxRequest);

//cинхронный GET запрос
function getRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + 'posts', false);
    xhr.send();
    var posts = JSON.parse(xhr.responseText);
    showOutput(posts);
}

//аcинхронный GET запрос c параметром userId
function getAsyncRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url + 'posts?userId=1');
    xhr.send();
    var posts;
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState !== 4)
            return;
        if (xhr.status === 200) {
            try {
                posts = JSON.parse(xhr.responseText);
                showOutput(posts);
            }
            catch (e) {
                alert("Error occured: " + e.message);
            }
        }
        else {
            result.innerHTML = xhr.status + ": " + xhr.statusText;
        }
    };
}

function showOutput(posts) {
    for (var i = 0; i < posts.length; i++) {
        var p = document.createElement('p');
        p.innerHTML = (i+1) + ". " + posts[i].title;
        result.appendChild(p);
    }
}

//аcинхронный POST запрос c параметром userId
function postAsyncRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url + 'posts');
    xhr.send("userId=1");
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState !== 4)
            return;
        //запрос создает новый объект типа POST, поэтому статус в случае удачного запроса будет 201
        if (xhr.status === 201) {
            result.innerHTML = "Post created";
        }
        else {
            result.innerHTML = xhr.status + ": " + xhr.statusText;
        }
    };
}

//ajax запрос jQuery
function jQueryAjaxRequest() {
    var request = $.ajax({
        method: "GET",
        url: url + 'posts'
    }).done(function() {
        try {
            posts = JSON.parse(request.responseText);
            for (var i = 0; i < posts.length; i++) {
                var str = "<p>" + (i + 1) + ". user id:" + posts[i].userId + " title" + posts[i].title + "</p>";
                $(result).html($(result).html() + str);
            }
        }
        catch (e) {
            alert("Error occured: " + e.message);
        }
    }).fail(function() {
        $(result).html(request.status + ": " + request.statusText);
    }).always(function() {
        alert("Request completed");
    });
}



