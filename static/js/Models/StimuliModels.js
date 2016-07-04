var StimModel = Backbone.Model.extend({
	
	initialize: function(id, stims){
		this.id = id;
		this.stims = stims
	}
});

var WordModel = StimModel.extend({

	intialize: function(id){
		this.id = id
		this.stims = ["exhibit", "Wilson", "led", "scowled", "soda", "plate"]
	}
});

var SentenceModel = StimModel.extend({
	
	intialize: function(){
		this.id = "Sentences";
		this.stims = "The field guide hacked through the thick jungle vines."
	},

	wordify: function(){
		var w = this.stims;
		return w.split(" ")
	}

});

