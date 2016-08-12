var DualTaskFeedbackView = Backbone.View.extend({
	template: _.template(`
		<p>You caught <%=repeats_correct %> out of <%= repeats_total %> of the repeats.</p>
		<p>Keep up the good work!</p>
		<div><a href="<%= next_path %>" class="btn btn-lg btn-primary">Next</a></div>
		`),

	render: function(){
		console.log(this.model.get('id'))
		var next_path
		if (this.model.get('id') == dual_task_trials.length - 1){
			next_path = "#instructions/11"
		}
		else {
			next_path = "#dualtaskexperiment/" + (this.model.get('id') + 1)
		}
		this.$el.html(this.template({repeats_correct: this.model.repeatsCaught()[0], repeats_total: this.model.repeatsCaught()[1], next_path: next_path}))
		return this
	}
});