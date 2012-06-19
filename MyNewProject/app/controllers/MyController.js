// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MyNewProject
// Controller: MyController
// ==========================================================================

MyNewProject.MyController = M.Controller.extend({

    /* sample controller property */
    myControllerProperty : '',

    /*
     * Sample function To handle the first load of a page.
     */
    init : function(isFirstLoad) {
	if (isFirstLoad) {
	}
    },

    // navegação

    goToPage2 : function() {
	this.switchToPage('page2');
    },

    messagesTable : {},

    loadMessages : function() {
	var form = M.ViewManager.getView('page2', 'form');
	var formValues = form.getFormValues();
	var limit = "100";
	var base_date_in_millis = "0";
	var destinationId = formValues['destinationId'];
	var up = true;
	var that = this;
	$.ajax(
		{
		    url : getMessagesPath(destinationId, base_date_in_millis,
			    up, limit),
		    dataType : 'json',
		    beforeSend : function(xhr, sett) {
			M.LoaderView.show();
		    },
		    complete : function() {
			M.LoaderView.hide();
		    }
		}).done(function(resultado, msg, xhr) {
	    var messages = makeTable(resultado);
	    var table = {content : []};
	    table.content = messages;
	    that.set('messagesTable', table);
	});

    }

});
base_rest_path = "/shout2me";
base_message_path = "/message";
base_getall_path = "/getall";
function getMessagesPath(dest_id, base_date, up, limit) {
    var final_path = base_rest_path + base_message_path + base_getall_path;
    // query params
    final_path += "?";
    final_path += "limit=" + limit;
    final_path += "&base_date_in_millis=" + base_date;
    final_path += "&up=" + (up ? "true" : "false");
    final_path += "&destination_id=" + dest_id;
    return final_path;
}

function makeTable(data) {
    result = [];
    ms = data.message;
    for(var i = 0; i < ms.length; i++) {
	result.push([ms[i].author_name, ms[i].text]);
    };
    console.log(result);
    return result;
}
