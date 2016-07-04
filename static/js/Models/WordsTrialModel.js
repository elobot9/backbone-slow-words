var WordsTrialModel = Backbone.Model.extend({
	initialize: function(id, stimuli) {
		this.id = id;
		this.stimuli = stimuli; //an array of words
	}
});