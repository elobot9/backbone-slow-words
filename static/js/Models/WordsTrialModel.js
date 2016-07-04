var WordsTrialModel = Backbone.Model.extend({

	// initialize: function(){
	// 	this.set('answer', "");
	// },

	stimuliArray: function(){
		return this.get('stimuli').split(" ");
	}

});