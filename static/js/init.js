/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you


/*******************
 * Run Task
 ******************/
$(window).load( function(){
	//initialize models for trials
	window.words_collection = new WordTrialsCollection();
	for (var i = 0; i < rawSentencesA.length; i++) {
		words_collection.add({id: i, stimuli: rawSentencesA[i], type: "sentence", condition: "A"});
		words_collection.add({id: i + 10, stimuli: rawWordsA[i], type: "words", condition: "A"});
		words_collection.add({id: i + 20, stimuli: rawSentencesB[i], type: "sentence", condition: "B"});
		words_collection.add({id: i + 30, stimuli: rawWordsB[i], type: "words", condition: "B"});
	}

	//define and start the router
	window.router = new ExperimentRouter();
	Backbone.history.start();
	// router.navigate('answer/0', {trigger: true});
	router.navigate("instructions", {trigger: true});

	//set up some models for the stimuli
});
