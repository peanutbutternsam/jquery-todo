//******Functions*******//


$(document).ready(function(){

//enters user input when the add button is clicked
function buttonSubmit(){
userInput = document.getElementById('user-input').value;
	if(userInput === '' || userInput === " "){
		return;
	} else {
		todo = '<li class ="item-container incomplete"><p class="to-do-item">' + userInput + '</p><span id="action" class="change-status"></span></li>';
		$(todo).prependTo('.list').slideDown('350');
		document.getElementById('user-input').value = '';

		}
}

//enters user input when "enter" key is pressed
function enterSubmit() {
    document.getElementById("user-input").onkeypress = function(event) {
        if(event.keyCode == 13) {
            event.preventDefault();
            $('.submit').click();
        }
    };
}

//clears entire ul
function refreshList (){
	$(".list").empty();
}

//toggle class on click from being complete to incomplete and change icon from square to check simultaneously
$(".item-container").click(function() {
    $(this).toggleClass("complete").toggleClass("incomplete");
    $(this).children("#action").toggleClass("change-status").toggleClass("complete-icon");
})

//function to delete items on list that have been completed
function deleteComplete() {
    $(this).closest('.page-wrap').find('.list').children('.complete').slideUp(function() {
    $(this).remove();
    });
}


//******Event Handlers******//
$('#user-input').keydown(enterSubmit);
$('.submit').click(buttonSubmit);
$('#refresh').click(refreshList);
$('.list').sortable({ axis: "y" });
$('#trash').click(deleteComplete);
});


