﻿function GetPluginSettings()
{
	return {
		"name":			"System extension",
		"id":			"MySysExt",
		"description":	"System extension",
		"author":		"Rex.Rainbow",
		"help url":		"",
		"category":		"Utility",
		"type":			"object",			// not in layout
		"rotatable":	false,
		"flags":		pf_singleglobal
	};
};

//////////////////////////////////////////////////////////////
// Conditions
AddObjectParam("Object", "Object for picking");
AddCondition(0, 0, "Pick all instances", "SOL", "Pick all <i>{0}</i> instances", "Pick all instances.", "PickAll");

//////////////////////////////////////////////////////////////
// Actions
// SOL
AddObjectParam("Object", "Object for picking");
AddAction(0, 0, "Pick all instances", "SOL", 
          "Pick all <i>{0}</i> instances", 
          "Pick all instances.", "PickAll");
AddObjectParam("Object", "Object for picking");
AddNumberParam("UID", "UID of object", 0);
AddComboParamOption("Current picked instances");
AddComboParamOption("All instances");
AddComboParam("All instances", "Pick from current picked instances or all instances", 1);
AddAction(1, 0, "Pick instance by UID", "SOL", 
          "Pick <i>{0}</i> instance by UID = <i>{1}</i>, form <i>{2}</i>", 
          "Pick instance by UID.", "PickByUID");          
//AddObjectParam("Object", "Object for picking");
//AddComboParamOption("uid");
//AddComboParamOption("x");
//AddComboParamOption("y");
//AddComboParamOption("width");
//AddComboParamOption("height");
//AddComboParamOption("angle");
//AddComboParamOption("opacity");
//AddComboParam("Properties", "Properties of instance", 0);
//AddCmpParam("Comparison", "Choose the way to compare the variable.");
//AddAnyTypeParam("Value", "The target compare value", 0);
//AddComboParamOption("Current picked instances");
//AddComboParamOption("All instances");
//AddComboParam("All instances", "Pick from current picked instances or all instances", 1);
//AddAction(2, 0, "Pick object by property compare", "SOL", 
//          "Pick <i>{0}</i> instances by property compare <i>{1}</i> <i>{2}</i> <i>{3}</i>, form <i>{4}</i>", 
//          "Pick object by property name.", "PickByPropCmp");          

//////////////////////////////////////////////////////////////
// Expressions


ACESDone();

// Property grid properties for this plugin
var property_list = [
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}
	
// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function(renderer)
{
}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function()
{
}