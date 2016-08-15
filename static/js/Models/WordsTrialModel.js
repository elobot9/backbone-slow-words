var WordsTrialModel = Backbone.Model.extend({

	// initialize: function(){
	// 	this.set('answer', "");
	// },

	stimuliArray: function(){
		return this.get('stimuli').split(" ");
	},

	toDataObject: function(){
		return {id: this.get('id'),
			    trial_type: this.get('type'),
				stim_type: this.get('stim_type'), 
				stimuli: this.get('stimuli'),
				answer: this.get('answer'),
				timed_response: this.get('timed_response')}
	}

});