var AudioCaptchaModel = Backbone.Model.extend({
	initialize: function(){
		this.setStimuli()
	},

	setStimuli: function(){
		var index = Math.floor(Math.random() * 9);
		var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
		this.set('captcha_file', window.nback_sounds[index]);
		this.set('correct_answer', alpha[index])
		this.set('user_answer', null);
	},

	playStimuli: function(){
		this.get('captcha_file').play();
	}
});