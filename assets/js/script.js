
var Person = Backbone.Model.extend({
	default: {
		firstname: null,
		lastname: null,
		address1: null,
		address2: null,
		city: null,
		state: null,
		zipcode: null
	}
});


var PersonView = Backbone.View.extend({
	el: $("#container"), 
	events:{
		"change": "update",
		"click #nextpage": "nextPageFunc",
		"click #complete": "completeFunc"
	},
	update: function(e){
		var val = $(e.target).val();
		var attribute = {};
		attribute[e.target.name] = val;
		// console.log(attribute);
		$("#personInfoContainer").model.set(attribute);
	},
	initialize: function(){
		$('#first').css("visibility", "visible");
		$('#second').css("visibility", "hidden");
	},
	nextPageFunc : function(e){
		console.log("Next");
		$('#first').css("visibility", "hidden");
		$('#second').css("visibility", "visible");
	},
	completeFunc : function(){
		console.log("Complete");
		this.render();
	},
	render: function(){
		var template = _.template($("#personInfoContainer").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);
		return this;
	}
})



var personView = new PersonView();
// personView.render();