// JavaScript
define([], function () {
	'use strict';

	// *****************************************************************************
	// Appearance Section
	// *****************************************************************************
	var appearanceSection = {
		uses : "settings"
	};
  
  	var aboutSection = {
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
	};

	// Some components
	var input_rows = {
		ref : "rows",
		label : "Number of rows",
		type : "integer",
		defaultValue : "12"
	};
  
  var input_cols = {
		ref : "cols",
		label	 : "Number of columns",
		type : "integer",
		defaultValue : "24"
	};

	var myCustomSection = {
		// not necessary to define the type, component "expandable-items" will automatically
		// default to "items"
		// type: "items"
		component : "expandable-items",
		label : "Exsitec",
		items : {
			header1 : {
				type : "items",
				label : "Properies",
				items : {
					input_rows : input_rows ,
				  	input_cols : input_cols
				}
			}
		}
	};

	// *****************************************************************************
	// Main property panel definition
	// ~~
	// Only what's defined here will be returned from properties.js
	// *****************************************************************************

	return {
		type : "items",
		component : "accordion",
		items : {
			appearance : appearanceSection,
		  	about : aboutSection ,
			customSection : myCustomSection
		}
	};
});
