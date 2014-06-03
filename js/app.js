//******Functions*******//


$(document).ready(function(){

	//enters user input when the add button is clicked
	function addTodo(e){

		if (e.type == 'keydown' && e.keyCode !== 13) {
			return;
		} 

		var $todo = $('<li class ="item-container incomplete"><span id="action" class="change-status"></span></li>'),
			newVal = $('#user-input').val()
			todoItem = $('<p class="to-do-item"></p>').append(newVal);

		//look up the selector inside our li and append it in
		$todo.append(todoItem);

		//prepend it to the list with a slidedown
		$todo.prependTo($('.list')).slideDown('350');
		
		//bind new events
		bindEvents($todo);

		//clear out the text
		clearInput();
	}

	//function to clear out text box after user input has been submit
	function clearInput() {
		$('#user-input').val('');
	}

	//bind the events to the dom nodes
	function bindEvents(node) {
		$(node).click(function() {
    		$(this).toggleClass("complete").toggleClass("incomplete");
    		$(this).children("#action").toggleClass("change-status").toggleClass("complete-icon");
		});
	}

    //binds 
    function trashMouseOn(node){
        $(node).mouseenter(function(){
            $('.complete').addClass('delete');
            $('.complete-icon').toggleClass('delete-icon');
        });
    }

     function trashMouseOff(node){
        $(node).mouseleave(function(){
            $('.complete').removeClass('delete');
            $('.complete-icon').toggleClass('delete-icon');
        });
    }

    //clears entire ul
    function refreshList (){
	   $('.list').empty();
    }

    //function to delete items on list that have been completed
    function deleteComplete() {
        $(this).closest('.page-wrap').find('.list').children('.delete').slideUp(function() {
    	   $(this).remove();
        });
    }

    //******Event Handlers******//

    bindEvents($('.item-container'));
    trashMouseOn($('#trash'));
    trashMouseOff($('#trash'));
    $('#user-input').keydown(addTodo);
    $('.submit').click(addTodo);
    $('#refresh').click(refreshList);
    $('.list').sortable({
    	axis: "y" 
    });
    $('#trash').click(deleteComplete);
});













