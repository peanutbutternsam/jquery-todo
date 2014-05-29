//******Functions*******//

//**Submit User Input**//

$(document).ready(function(){


function buttonSubmit(){
userInput = document.getElementById('user-input').value;
	if(userInput === '' || userInput === " "){
		return;
	} else {
		todo = '<li class ="item-container incomplete">' + '<p class="to-do-item">' + userInput + '</p>' + '<span class="change-status">' +'</span>' + '</li>';
		$(todo).prependTo('.list').slideDown('350');
		document.getElementById('user-input').value = '';

		}
}


function enterSubmit() {
    document.getElementById("user-input").onkeypress = function(event) {
        if(event.keyCode == 13) {
            event.preventDefault();
            $('.submit').click();
        }
    };
}

function emptyList (){
	$(".list").empty();
}

//******Event Handlers******//
$('#user-input').keydown(enterSubmit);
$('.submit').click(buttonSubmit);
$('#refresh').click(emptyList);
$('.list').sortable({ axis: "y" });

});