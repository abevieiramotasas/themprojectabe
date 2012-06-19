// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 
//
// Project: MyNewProject
// ==========================================================================

var MyNewProject = MyNewProject || {};

MyNewProject.app = M.Application.design({

    entryPage : 'page1',

    page2 : M.PageView.design({
	childViews : 'header content button footer',

	content : M.ScrollView.design({
	    childViews : 'form_grid tabela',

	    form_grid : M.GridView.design({
		childViews : 'label form',

		layout : M.TWO_COLUMNS,

		label : M.LabelView.design({
		    value : "Island Identifier"
		}),

		form : M.FormView.design({
		    childViews : 'destinationId',
		    destinationId : M.TextFieldView.design({
			initialText : "Destination id"
		    })
		})

	    }),

	    tabela : M.TableView.design({
		header : {
		    data : [ 'Autor', 'Mensagem' ],
		    cols : [ '20%', '80%' ]
		},
		contentBinding : {
		    target : MyNewProject.MyController,
		    property : 'messagesTable'
		}
	    })

	}),

	header : M.ToolbarView.design({
	    value : 'Messages',
	    showBackButton : YES
	}),

	button : M.ButtonView.design({
	    value : 'Load Messages',
	    events : {
		tap : {
		    target : MyNewProject.MyController,
		    action : 'loadMessages'
		}
	    }
	}),

	footer : M.ToolbarView.design({
	    value : 'Shout2Me',
	    anchorLocation : M.BOTTOM
	})
    }),

    page1 : M.PageView.design({

	childViews : 'header content footer',

	header : M.ToolbarView.design({
	    value : 'Shout2Me',
	    anchorLocation : M.TOP
	}),

	content : M.ScrollView.design({
	    childViews : 'label button loadMap map',

	    label : M.LabelView.design({
		value : 'Bem vindos ao meu projeto de estudo'
	    }),

	    map : M.MapView.design({
		//isInset: YES,

                showMapTypeControl: YES,

                showStreetViewControl: NO,

                showNavigationControl: YES,

                mapType: M.MAP_ROADMAP,

                zoomLevel: 10,

                isDraggable: YES,
		initialLocation : M.Location.extend({
		    latitude : 48.813338,
		    longitude : 9.178463
		})
	    }),

	    button : M.ButtonView.design({
		value : 'Messages',
		events : {
		    tap : {
			target : MyNewProject.MyController,
			action : 'goToPage2'
		    }
		}
	    }),
	    loadMap : M.ButtonView.design({
		value : 'Carregar Mapa',
		events : {
		    tap : {
			target : MyNewProject.MyController,
			action : 'loadMap'
		    }
		}
	    })
	}),
	

	footer : M.ToolbarView.design({
	    value : 'Shout2Me',
	    anchorLocation : M.BOTTOM
	})

    })

});
