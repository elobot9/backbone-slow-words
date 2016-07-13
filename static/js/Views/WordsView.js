var WordsView = Backbone.View.extend({
	template: _.template(`
	<div id="container-exp">
		<div class="trial">
			<div id="text-here"><%= word %></div>
		</div>
	</div>`),

	tagName: 'div',

	className: 'main-container',

	events: {

	},

	current_stimuli: undefined,

	initialize: function(){
		this.current_stimuli = 0;
	},

	render: function(){
		this.$el.html(this.template({word: this.model.stimuliArray()[this.current_stimuli]}));
		return this
	},

	showWords: function(){
		if (this.current_stimuli < this.model.stimuliArray().length){
			this.render()
			this.current_stimuli++;
			var _this = this;
			setTimeout(function(){_this.showWords()}, 10)
		}
		else{
			this.remove()
			router.navigate("answer/" + this.model.get('id'), {trigger: true});
		}
	}
});