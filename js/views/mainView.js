var MainView = Backbone.View.extend({
	events: {
		"click #add-btn":"add"
	},
	add: function() {
		alert("Add")
	},
	render: function() {
		$(this.el).append("<p>Hello World<br><button id='add-btn'>click me</button></p>");
		return this;
	}
});