var NBackTrialModel = Backbone.Model.extend({
	initialize: function(length, alpha){
		this.length = length
		this.alpha = 'ABCDEFGHIJ'
	},

	letterList: function(){
		var letters = this.alpha;
		var list = new Array();
		for (var i = 0; i < 10; i++){
			var new_letter = letters.substr(Math.floor(Math.random() * 10), 1);
			list.push(new_letter)
		}
		return list
	},

	createNBackCollection: function(){
		var trials_collection = new NBackLetterCollection();
		trials_collection.add({id: 0, stim: this.letterList()[0], matches: null});
		for (var i = 0; i < this.letterList().length; i++){
			if (this.letterList()[i] == this.letterList()[i - 1]){
				trials_collection.add({id: i, stim: this.letterList()[i], matches: true})
			}
			else{
				trials_collection.add({id: i, stim: this.letterList()[i], matches: false})
			}
		}
		return trials_collection
	}
	

});

