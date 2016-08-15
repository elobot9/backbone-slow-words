var NBackTrialModel = Backbone.Model.extend({
	initialize: function(){
		this.set('stimuli', new NBackStimuliCollection())
		var letter_array = this.createSourceArray(this.get('length'))
		this.set('nback_track', letter_array)
		this.populateStimuliCollection();
	},

	createSourceArray: function(length){
		var nback_source = big_nback_array[length]
		_.shuffle(nback_source)
		var letter_array = nback_source.shift()
		return letter_array

	},

	populateStimuliCollection: function() {
		var nback_array = this.get('nback_track')
		for (var i = 0; i < nback_array.length; i++){
			stimuli_id = nback_array[i]
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

