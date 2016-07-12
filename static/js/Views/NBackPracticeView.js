var NBackPracticeView = Backbone.View.extend({
	template: _.template(`
	<div id="container-exp">
		<div class="trial">
			<p>Press the SPACEBAR when a letter matches the one before it</p>
		</div>
	</div>`),

	initialize: function(){
		this.current_stimuli = 0;
		// $(window).on('keypress', {_this: this}, this.handleKeyPress)
		this.proxy_handle_keypress = $.proxy(this.handleKeyPress, this)
		$(window).on('keypress', this.proxy_handle_keypress)
	},

	render: function(){
		this.$el.html(this.template())
		this.playStimuli()
		return this
	},

	handleKeyPress: function(e){
		if (e.keyCode == 32) { //space was pressed
			this.model.get('stimuli').get(this.current_stimuli).set('user_answer', true)
		}
	},

	playStimuli: function() {
		var _this = this;
		if (this.current_stimuli < this.model.get('stimuli').length){
			this.model.get('stimuli').get(this.current_stimuli).playStimuli();
			setTimeout(function() {
					current_model = _this.model.get('stimuli').get(_this.current_stimuli)
					if (current_model.get('user_answer') == null){
						current_model.set('user_answer', false)
					}
					_this.current_stimuli++;
					_this.playStimuli();
				}, 1000);
		}
		else {
			$(window).off('keypress', this.proxy_handle_keypress);
			this.remove();
			router.navigate('nbackfeedback', {trigger: true});
		}
	},
});