var DebugView = Backbone.View.extend({
	template: _.template(`
		<div class="debug">
			<div><button type='button' value='/instructions' id='' class='btn btn-primary btn-lg'>Instructions</button></div>
			<div><button type='button' value='/basicexperiment' id='' class='btn btn-primary btn-lg'>Words Experiment</button></div>
			<div><button type='button' value='/answer' id='' class='btn btn-primary btn-lg'>Words Only Answer</button></div>
			<div><button type='button' value='/instructions/8' id='' class='btn btn-primary btn-lg'>N-Back Instructions</button></div>
			<div><button type='button' value='/nbackpractice' id='' class='btn btn-primary btn-lg'>N-Back Practice</button></div>
			<div><button type='button' value='/dualtaskexperiment' id='' class='btn btn-primary btn-lg'>Dual-Task Experiment</button></div>
			<div><button type='button' value='/instructions/11' id='' class='btn btn-primary btn-lg'>Memory Test</button></div>
		</div>
	`),

	events: {
		"click .btn": "show"
	},

	render: function() {
		this.$el.html(this.template());
		return this;
	},

	show: function(e) {
		router.navigate(e.target.value, {trigger: true})
	}

});