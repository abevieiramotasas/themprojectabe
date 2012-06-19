// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MyNewProject
// ==========================================================================

var MyNewProject  = MyNewProject || {};


MyNewProject.app = M.Application.design({

    /* Define the entry/start page of your app. This property must be provided! */
    entryPage : 'page1',
    page2: M.PageView.design({
	    childViews: 'content header button',
	    content: M.ScrollView.design({
			     childViews: 'label',
			     label: M.LabelView.design({
					    contentBinding: {
						target: MyNewProject.MyController,
						property: 'messages'
						}
				    })
		     }),
	    header: M.ToolbarView.design({
			    value: 'Page 2',
	    		    showBackButton: YES
		    }),
	    button: M.ButtonView.design({
			    value: 'messages',
	    		    events: {
				    tap: {
						target: MyNewProject.MyController,
						action: 'teste'
		    }
			    }
		    })
    }),
    page1: M.PageView.design({

        childViews: 'header content footer',

        header: M.ToolbarView.design({
            value: 'HEADER',
            anchorLocation: M.TOP
        }),

	content: M.ScrollView.design({
            childViews: 'button label',
            label: M.LabelView.design({
                value: 'Bem vindos ao meu projeto de estudo'
            }),
	    button: M.ButtonView.design({
			    value: 'goto page',
	    			events: {
					tap: {
						     target: MyNewProject.MyController,
	    					action: 'gotopage'
					     }
				}
		    })
        }),

        footer: M.ToolbarView.design({
            value: 'FOOTER',
            anchorLocation: M.BOTTOM
        })
    
    })

});
M.Request.init({
	 	url: '/shout2me/message/getall?limit=100&base_date_in_millis=1340049979641&up=false&destination_id=10001',	
	 	method: 'GET',
	 	isJSON: YES,
	 	onSucess: function(data, msg, xhr) {
				MyNewProject.app.content = M.ScrollView.design({
					childViews: 'label',
					label: M.LabelView.design({
						value: "Teste"
					})
				});				
				console.log(data);
		},
	 	onError: function(xhr, msg) {
				                         console.log('Error: '+msg);
							                  }
         }).send();
