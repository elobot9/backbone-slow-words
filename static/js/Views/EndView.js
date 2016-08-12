var EndView = Backbone.View.extend({
	template: _.template('<div> Thank you for participating in the experiment. Please call the experimenter and tell them that you are done.</div>'),

	tagName: 'div',

	render: function(){
		this.$el.html(this.template())
		return this
	}

})