var NBackTrialModel = Backbone.Model.extend({
	initialize: function(){
		this.set('stimuli', new NBackStimuliCollection())
		this.populateStimuliCollection();
	},

	populateStimuliCollection: function() {
		for (var i = 0; i < this.get('length'); i++){
			stimuli_id = Math.floor(Math.random() * 3);
			var answer = null;
			if (this.get('stimuli').get(i - 1) != undefined && this.get('stimuli').get(i - 1).get('stimuli_id') == stimuli_id){
				//same stimuli as one back
				answer = true;
			}
			else{
				answer = false;
			}
			stimuli_model = new NBackStimuliModel({id: i, stimuli_id: stimuli_id, correct_answer: answer});
			this.get('stimuli').add(stimuli_model);
		}
	},

	percentCorrect: function() {
		var correct = 0;
		this.get('stimuli').each(
				function(stimuli) {
					if (stimuli.correct()){
						correct++;
					}
				}
			)
		var total = this.get('stimuli').length
		return Math.floor((correct / total) * 100)
	}	
});

