var DualTaskTrialModel = Backbone.Model.extend({
	initialize: function(attributes, options){
		this.set('words_stimuli', attributes.words_stimuli)
		this.set('nback_stimuli', new NBackStimuliCollection());
		this.populateStimuliCollection();
	},


	populateStimuliCollection: function() {
		var one_back = null
		for (var i = 0; i < this.wordsStimuliArray().length; i++){
			stimuli_id = Math.floor(Math.random() * 5);
			var answer = null;
			if (this.get('nback_stimuli').get(i - 1) != undefined && this.get('nback_stimuli').get(i - 1).get('stimuli_id') == stimuli_id){
				//same stimuli as one back
				answer = true;
			}
			else{
				answer = false;
			}
			stimuli_model = new NBackStimuliModel({id: i, stimuli_id: stimuli_id, correct_answer: answer});
			this.get('nback_stimuli').add(stimuli_model);
		}
	},

	repeatsCaught: function(){
		var total_repeats = 0
		var caught_repeats = 0
		this.get('nback_stimuli').each(
			function(stimuli){
				if(stimuli.repeatCorrect()!=undefined){
					total_repeats++;
					if(stimuli.repeatCorrect()){
						caught_repeats++
					}
				}
			}
		)
		return [caught_repeats, total_repeats]
	},

	percentCorrect: function() {
		var correct = 0;
		this.get('nback_stimuli').each(
				function(stimuli) {
					if (stimuli.correct()){
						correct++;
					}
				}
			)
		return Math.floor((correct / this.get('nback_stimuli').length) * 100);
	},

	wordsStimuliArray: function(){
		return this.get('words_stimuli').split(" ");
	}

});