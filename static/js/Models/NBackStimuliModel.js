var NBackStimuliModel = Backbone.Model.extend({
	initialize: function(id, stimuli_id, correct_answer){
		this.set('sound', window.nback_sounds[this.get('stimuli_id')]);
		this.set('user_answer', null);
	},

	playStimuli: function(){
		this.get('sound').play();
	},

	correct: function() {
		if (this.get('correct_answer') == this.get('user_answer')){
			console.log(this.get('stimuli_id') + ' correct ' + this.get('user_answer'))
			return true
		}
		else{
			console.log(this.get('stimuli_id') + ' incorrect ' + this.get('user_answer'))
			return false
		}
	}
});