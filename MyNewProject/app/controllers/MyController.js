// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MyNewProject
// Controller: MyController
// ==========================================================================

MyNewProject.MyController = M.Controller.extend({

    /* sample controller property */
    myControllerProperty: '',

    /*
    * Sample function
    * To handle the first load of a page.
    */
    init: function(isFirstLoad) {
        if(isFirstLoad) {
            /* do something here, when page is loaded the first time. */
        }
        /* do something, for any other load. */
    },

	gotopage: function() {
			  this.switchToPage('page2');
		  },
    /*
    * Example function, which shows how to switch to another page
    * Function is triggered by setting target & action in a view.
    */
    switchToExamplePage: function() {
        /* switch to a page called 'examplePage' */
        this.switchToPage('examplePage');
    },

messages: "Vazio",

teste: function() {
	var controller = this;
	$.ajax({
		url: '/shout2me/message/getall?limit=100&base_date_in_millis=1340049979641&up=false&destination_id=10001',
		dataType: 'text',
		beforeSend: function(xhr, sett) {
			M.LoaderView.show();
		}	
	}).done(function(resultado, msg, xhr) {
			M.LoaderView.hide();
			controller.set('messages', resultado);		
		});
						
							 }

});
