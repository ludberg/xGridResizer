/**
 * Author: Anders Uddenberg <anders.uddenberg@exsitec.se>, Peter Bergman <peter.bergman@exsitec.se>
 * Date: 2015-11-26
 * Todo: Error checking and handling
 */
define(["qlik", "./properties" ,"text!./btn.css"], function(qlik, props, cssContent) {
	var app = qlik.currApp(this);
  	var sheetId = qlik.navigation.getCurrentSheetId().sheetId;
  	$( '<style>' ).html( cssContent ).appendTo( 'head' );
  
  	function resizeGrid(rows, cols) {
		
	  	app.getObject(sheetId).then(function(obj) {
		  	obj.applyPatches([{
					qOp: 'replace',
				  	qPath: '/columns',
					qValue: '"'+cols+'"'
				},
				{
					qPath : '/rows',
					qOp : 'replace',
					qValue : '"'+rows+'"' 
				}		 
				],false);  
			
		}).then(function() {
			app.doSave();
		});
  	} // end resizeGrid()
 
	return {
		initialProperties : {
			version : 1.0,
			alternatives : []
		},
	  	
	  definition: ( props )
	  	,
		paint : function($element, layout) {
			var html = "", ext = this;
		  	
			html +="<button id=changegrid class=btn>Resize to - > (" + layout.rows + " / " + layout.cols +")</button>";
		  	app.getObject(sheetId).then(function(obj) {
			  obj.getLayout().then(function(layout)  {
				$element.find('#size').html(layout.columns);
				$element.find('#selector').html(layout.columns);
			  });
			});
		  	
			$element.html(html).find('#changegrid').on('qv-activate', function(event) {
			    event.preventDefault();
	  			resizeGrid(layout.rows, layout.cols);
			});
		  
		}
	};

});
