/**
 * Author: Anders Uddenberg <anders.uddenberg@exsitec.se>
 * Date: 2015-11-26
 * Todo: Error checking and handling
 */
define(["qlik"], function(qlik) {
	var app = qlik.currApp(this);
  	var sheetId = qlik.navigation.getCurrentSheetId().sheetId;
  	
  
  	function resizeGrid(gridx) {
		
	  	app.getObject(sheetId).then(function(obj) {
		  	obj.applyPatches([{
					qOp: 'replace',
				  	qPath: '/columns',
					qValue: '"'+gridx+'"'
				},
				{
					qPath : '/rows',
					qOp : 'replace',
					qValue : '"'+Math.ceil(gridx/2)+'"' 
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
	  	definition: {
			type: "items",
			component: "accordion",
			items: {
				settings: {
					uses: "settings"
				},
			  	about: {
  					type: "items",
  					label: "About",
    				items: {
      					btninactive: {
      						type: "string",
      						label: "anders.uddenberg@exsitec.se",
      						ref: "about",
      						defaultValue: "https://github.com/ludberg/xgridresizer"
      					}
    				}
				}
			}
		},
	  
		paint : function($element, layout) {
			var html = "", ext = this;
				  
		  	html += '<strong>Choose # of columns</strong><br>Min:12, Max: 64<br/><br><span><input id="selector" type="range" step="2" min="12" max="64" style="width:98%" style="display:inline-block !important; vertical-align:middle" value="test-value"/><br>Current # of columns: <span id="size"></span><br>Change to: <span id="newsize">slide to change</span>';
			
		  	app.getObject(sheetId).then(function(obj) {
			  obj.getLayout().then(function(layout)  {
				
				$element.find('#size').html(layout.columns);
				$element.find('#selector').html(layout.columns);
			  });
			});
		  	
			$element.html(html).find('button').on('qv-activate', function() {
			  	
			});
		  
		  	$element.find('select, input').on('change', function() {
				var val = $(this).val() + '';
			  	resizeGrid(val);
			});
			
		  	$element.find('select, input').on('input', function() {
				var val = $(this).val() + '';

			  	$element.find('#newsize').html(val);
			});
			
		}
	};

});
