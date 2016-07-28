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

	// balanceRepeats: function(repeats, length){
	// 	var single_stim = Math.floor(Math.random() * 9)
	// 	var single_id = Math.floor(Math.random() * (length - 1))
	// 	var stim_array = this.createModifiedArray(9, [single_stim])
	// 	var single_id = this.createModifiedArray(length, [single_id, single_id +1])
	// 	this.get('stimuli').add({id: single_id, stimuli_id: single_stim, answer: false})
	// 	this.get('stimuli').add({id: single_id + 1, stimuli_id: single_stim, answer: true})
	// 	if(repeats == true){
	// 		var double_stim_array = _.shuffle(stim_array);
	// 		var double_stim = double_stim_array.shift()
	// 		var double_id_array = createModifiedArray(length -1, [single_id, single_id -1, single_id + 1])
	// 		_.shuffle(double_id_array);
	// 		var double_id = double_id_array.shift()
	// 		this.get('stimuli').add({id: double_id, stimuli_id: double_stim, answer: false});
	// 		this.get('stimuli').add({id: double_id + 1, stimuli_id: double_stim, answer: true})
	// 		id_array = createModifiedArray(length, [single_stim, single_stim +1 1, double_stim, double_stim + 1])
	// 	};
	// 	_.shuffle(stim_array)
	// 	for(var i = 0; i < id_array.length; i++){
	// 		next_stim = stim_array.shift()
	// 		this.get('stimuli').add({id: id_array[i], stimuli_id: next_stim, })
	// 	}

	// }

	// createModifiedArray: function(length, exclusions){
	// 	var mod_array = new Array();
	// 	for(var i = 0; i < length; i++){
	// 		if(!(i in exclusions){
	// 			mod_array.push(i)

	// 		}
	// 	}
	// 	return mod_array
	// }

});

