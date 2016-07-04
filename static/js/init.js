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
	//define and start the router
	window.router = new ExperimentRouter();
	Backbone.history.start();
	router.navigate("instructions", {trigger: true});

	//set up some models for the stimuli
});
