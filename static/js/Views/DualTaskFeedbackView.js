var DualTaskFeedbackView = Backbone.View.extend({
	template: _.template(`
		<p>You have completed a practice test.</p>
		<p>You got <%= percent_correct %>% of your N-Back answers correct.</p>
		<div><a href="<%= next_path %>" class="btn btn-lg btn-primary">Next</a></div>
		`),

	render: function(){
		var next_path
		if (this.model.get('id') == dual_task_trials.length - 1){
			next_path = "#dualtaskexperiment/" + (this.model.get('id') + 1)
		}
		else {
			next_path = "#memorytest"
		}
		this.$el.html(this.template({percent_correct: this.model.percentCorrect(), next_path: next_path}))
		return this
	}
});