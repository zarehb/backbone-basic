var App = Backbone.Router.extend({
	routes: {
		"": "index",
		"tasks": "tasks"
	},
	index: function() {
		var mainView = new MainView();
		mainView.render();
		$("#wrapper-2").html(mainView.el);
	},
	tasks: function() {
		alert("tasks")
	}
});