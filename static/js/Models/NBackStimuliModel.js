var NBackStimuliModel = Backbone.Model.extend({
	initialize: function(id, stimuli_id, correct_answer){
		this.set('sound', window.nback_sounds[this.get('stimuli_id')]);
		this.set('user_answer', null);
	},

	playStimuli: function(){
		this.get('sound').play();
	},

	repeatCorrect: function(){
		if(this.get('correct_answer') == true){
			if(this.get('user_answer') == true){
				return true
			}
			else{
				return false
			}
		}
	},

	correct: function() {
		if (this.get('correct_answer') == this.get('user_answer')){
			return true
		}
		else{
			return false
		}
	},

	toDataObject: function() {
		return {
			id: this.get('id'),
			correct: this.correct(),
			correct_answer: this.get('correct_answer'),
			user_answer: this.get('user_answer'),
			response_time: this.get('response_time')
		}
	}
});