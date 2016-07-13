var DualTaskTrialView = Backbone.View.extend({
	template: _.template(`
	<div id="container-exp">
		<div class="trial">
			<div id="text-here"><%= word %></div>
		</div>
	</div>`),

	initialize: function(){
		this.current_words_stimuli = 0;
		this.current_nback_stimuli = 0;
		this.proxy_handle_keypress = $.proxy(this.handleKeyPress, this)
		$(window).on('keypress', this.proxy_handle_keypress)
	},

	render: function(){
		this.$el.html(this.template({word: this.model.wordsStimuliArray()[0]}))
		this.playNBackStimuli()
		this.playWordsStimuli()
		return this
	},

	handleKeyPress: function(e){
		if (e.keyCode == 32) { //space was pressed
			this.model.get('nback_stimuli').get(this.current_stimuli).set('user_answer', true)
		}
	},

	playNBackStimuli: function() {
		var _this = this;
		if (this.current_nback_stimuli < this.model.get('nback_stimuli').length){
			this.model.get('nback_stimuli').get(this.current_nback_stimuli).playStimuli();
			setTimeout(function() {
					current_model = _this.model.get('nback_stimuli').get(_this.current_nback_stimuli)
					if (current_model.get('user_answer') == null){
						current_model.set('user_answer', false)
					}
					_this.current_nback_stimuli++;
					_this.playNBackStimuli();
				}, 1000);
		}
		else {
			$(window).off('keypress', this.proxy_handle_keypress);
			if (this.isFinished()){
				this.remove();
				router.navigate("dualtaskanswer/" + this.model.get('id'), {trigger: true});
			}
		}
	},

	playWordsStimuli: function() {
		var _this = this;
		if (this.current_words_stimuli < this.model.wordsStimuliArray().length) {
			$("#text-here").text(this.model.wordsStimuliArray()[this.current_words_stimuli])
			setTimeout(function() {
				_this.current_words_stimuli++;
				_this.playWordsStimuli();
			}, 1000);
		}
		else {
			if (this.isFinished()){
				this.remove();
			router.navigate("dualtaskanswer/" + this.model.get('id'), {trigger: true});
			}
		}
	},

	isFinished: function() {
		if (this.current_words_stimuli > this.model.wordsStimuliArray().length - 1 && this.current_nback_stimuli > this.model.get('nback_stimuli').length - 1){
			return true;
		}
		else {
			return false;
		}
	}

});