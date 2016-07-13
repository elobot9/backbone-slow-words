/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

/*
	At the end of running the experiment, you will have 2 collections of models which contain the data from the user
	words_collection contains the data from the single task experiment
	dual_task_trials contains the data from the dual task experiment

	Additionally, current_nback_practice_model contains data from the most recent nback practice session
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
	create_nback_sounds();
	//initialize models for trials
	createWordsTrials();
	createDualTaskTrials();
	create_instructions();
	//define and start the router
	window.router = new ExperimentRouter();
	Backbone.history.start();
	// router.navigate('answer/0', {trigger: true});
	router.navigate("debug", {trigger: true});

	//set up some models for the stimuli
});

var createWordsTrials = function() {
	window.words_collection = new WordTrialsCollection();
	words_trial_model = new WordsTrialModel({id: 0, stimuli: "This is a practice example to get you started", type: "trial", condition: "trial"})
	words_collection.add(words_trial_model)
	for (var i = 0; i < 5; i++) {
		words_collection.add({id: i + 1, stimuli: rawSentencesA[i], type: "single_task", condition: "A"});
		words_collection.add({id: i + 6, stimuli: rawWordsA[i], type: "single_task", condition: "A"});
	}
};

var createDualTaskTrials = function() {
	window.dual_task_trials = new DualTaskTrialCollection();
	for (var i = 0; i < 5; i++) {
		dual_task_trials.add({id: i, words_stimuli: rawSentencesA[i], type: "dual_task"});
		dual_task_trials.add({id: i + 6, words_stimuli: rawWordsA[i], type: "dual_task"})
	}
};

var create_instructions = function() {
	window.instructions_collection = new InstructionsCollection();
	introduction_1 = new InstructionsModel({id: 0, last: false, section: 1, img: '', text: `
		<p>Hello and welcome to the experiment</p>
		<p>The purpose of this experiment is to learn more about how people remember written information under different conditions</p>
		<p>In the first half of this experiment you will be shown a series of 6-12 words, one by one. Your job will be to remember them as best you can,
		then type them into the answer page that will be presented at the end of the trial. You will complete this 10 times</p>
		`});
	introduction_2 = new InstructionsModel({id: 1, last: false, section: 1, img: '', text: `
		<p>In the second half, you will be doing the same thing, but with an added twist: at the same time as you are watching the words go by and trying
		 to remember them, you will be listening to an audiotrack through your speakers or headphones.</p>
		<p>The audio track will simply be a person speaking a randomized list of letters.</p>
		<p>Your job will be to press the left arrow key on your keyboard each time the letter you hear matches the letter that came before it
		(while also trying to remember the words on the screen).</p>
		<p>If this sounds complicated, don't worry! We will give you several example trials to practice.</p>
		`});
	introduction_3 = new InstructionsModel({id: 2, last: true, section: 1, img: '', text: `
		<p>Before we start, we need to make sure that your system is able to play the audiofiles.</p>
		<p>[AUDIO CAPTCHA]</p>
		`});
	preliminary_word_trial_instructions_1 = new InstructionsModel({id: 3, last: false, section: 2, img: '', text: `
		<p>A series of words will be shown one at a time</p>`});
	preliminary_word_trial_instructions_2 = new InstructionsModel({id: 4, last: false, section: 2, img: '<img src= static/images/answer-screen.png>', text: `
		<p>Once a series is complete, you will be asked to type them into an answer page. Do this quickly, and don't worry about typos</p>`});
	preliminary_word_trial_instructions_3 = new InstructionsModel({id: 5, last: false, section: 2, img: '', text: `
		<p>To enter each word into the answer page press the SPACEBAR. Doing this will save the word and erase it from the page so that you can type the next one</p>`});
	preliminary_word_trial_instructions_4 = new InstructionsModel({id: 6, last: true, section: 2, img: '', text: `
		<p>Once you have typed in all of the words you can remember, click the submit button</p>
		<p>Remember</p>
		<ul>
			<li>DON'T worry about typos, and don't try to correct them</li>
			<li>Try to type the words in the order they were presented</li>
		</ul>`});

	begin_word_trial_instructions = new InstructionsModel({id: 7, last: true, section: 3, img: '', text: "<p>You are now ready to start the experiment!</p>"})
	instructions_collection.add([
		introduction_1, 
		introduction_2,
		introduction_3,
		preliminary_word_trial_instructions_1, 
		preliminary_word_trial_instructions_2, 
		preliminary_word_trial_instructions_3, 
		preliminary_word_trial_instructions_4,
		begin_word_trial_instructions])

};

var create_nback_sounds = function(){
	var path = 'static/audio/TheAlphabet/'
	window.nback_sounds = [
		new Howl({urls: [path + 'A.wav']}),
		new Howl({urls: [path + 'B.wav']}),
		new Howl({urls: [path + 'C.wav']}),
		new Howl({urls: [path + 'D.wav']}),
		new Howl({urls: [path + 'E.wav']}),
		new Howl({urls: [path + 'F.wav']}),
		new Howl({urls: [path + 'G.wav']}),
		new Howl({urls: [path + 'H.wav']}),
		new Howl({urls: [path + 'I.wav']}),
		new Howl({urls: [path + 'J.wav']})
	];
}