var NBackFeedbackView = Backbone.View.extend({
	template: _.template(`
		<p>You have completed a practice test.</p>
		<% if (percent_correct > 70) { %>
			<p>Great Job! You are now ready to move on to the next part of the experiment.</p>
			<div><a href="#instructions/10" class="btn btn-lg btn-primary">Next</a></div>
		<% } else { %>
			<p>You got <%= percent_correct %>% of your answers correct.</p>
			<p>Click next to try again. Once you have more than 70% correct answers, you can proceed to the next stage of the experiment</p>
			<div><a href="#nbackpractice" class="btn btn-lg btn-primary">Next</a></div>
		<% } %>
		`),

	render: function(){
		this.$el.html(this.template({percent_correct: this.model.percentCorrect()}))
		return this
	}
});