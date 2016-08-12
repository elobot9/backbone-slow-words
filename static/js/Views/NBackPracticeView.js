var NBackPracticeView = Backbone.View.extend({
	template: _.template(`
	<div id="container-exp">
		<div class="trial">
			<p>Press the SPACEBAR when a letter matches the one before it</p>
		</div>
	</div>`),

	stimuli_play_time: null,

	initialize: function(){
		this.current_stimuli = 0;
		this.proxy_handle_keypress = $.proxy(this.handleKeyPress, this)
		$(window).on('keydown', this.proxy_handle_keypress)
	},

	render: function(){
		this.$el.html(this.template())
		psiTurk.recordTrialData(['start', moment().format('HH mm ss SSS')])
		this.playStimuli()
		return this
	},

	handleKeyPress: function(e){
		if (e.keyCode == 32) { //space was pressed
			response_time = moment().valueOf() - this.stimuli_play_time
			this.model.get('stimuli').get(this.current_stimuli).set('user_answer', true)
			this.model.get('stimuli').get(this.current_stimuli).set('response_time', response_time)
		}
	},

	playStimuli: function() {
		var _this = this;
		if (this.current_stimuli < this.model.get('stimuli').length){
			this.model.get('stimuli').get(this.current_stimuli).playStimuli();
			this.stimuli_play_time = moment().valueOf()
			setTimeout(function() {
					current_model = _this.model.get('stimuli').get(_this.current_stimuli)

					//if no key is pressed, set user_answer to false
					if (current_model.get('user_answer') == null){
						current_model.set('user_answer', false)
					};
					psiTurk.recordTrialData([{type: 'nback_practice', 
						response: current_model.get('user_answer'), 
						correct_answer: current_model.get('correct_answer'), 
						response_time: current_model.get('response_time')}])
					_this.current_stimuli++;
					_this.playStimuli();
				}, 1000);
		}
		else {
			$(window).off('keydown', this.proxy_handle_keypress);
			psiTurk.saveData()
			this.remove();
			router.navigate('nbackfeedback', {trigger: true});
		}
	}
});