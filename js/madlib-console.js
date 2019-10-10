var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var random1;
var random2;
console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

var favorites = [];

// To Show random Items 
$('#create').click(function () {
    random();
    $('#xForY').html('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

});

// To Add your Favorites List
$('#save').click(function () {
    if (startupX[random1] && startupX[random2]) {
        favorites.push('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
    }
    else {
        console.log("there is no item to show in this List");
    }
});

// To Show All List Item you add it to Favorites List
$('#print').click(function () {
    if (startupX[random1] && startupX[random2]) {
        $('#favorites ul').empty();
        favorites.forEach(function (el) {
            $('#favorites ul').append('<li>' + el + '</li>');
        });
    }
    else {
        console.log("there is no item to show in this List");
    }
});

// To Create Random List 
function random() {
    random1 = Math.floor((Math.random() * startupX.length));
    random2 = Math.floor((Math.random() * startupY.length));

}