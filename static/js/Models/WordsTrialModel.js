var WordsTrialModel = Backbone.Model.extend({

	stimuliArray: function(){
		return this.get('stimuli').split(" ");
	}

});