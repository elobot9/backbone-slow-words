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
	words_trial_model = new WordsTrialModel({id: 0, stimuli: "This is a practice example to get you started", type: "single_task", condition: "trial"})
	words_collection.add(words_trial_model)
	for (var i = 0; i < 10; i++) {
		words_collection.add({id: i + 1, stimuli: conA_groupA[i].stim, type: "single_task", stim_type: "coherent"});
		}
};

var createDualTaskTrials = function() {
	window.dual_task_trials = new DualTaskTrialCollection();
	for (var i = 0; i < 10; i++) {
		dual_task_trials.add({id: i, words_stimuli: conA_groupB[i].stim, type: "dual_task", stim_type: "coherent"});
	}
};

var create_instructions = function() {
	window.instructions_collection = new InstructionsCollection();
	introduction_1 = new InstructionsModel({id: 0, last: false, section: 1, img: '', text: `
		<h2>Introduction</h2>
		<p>Hello and welcome to the experiment</p>
		<p>The purpose of this experiment is to learn more about how people remember written information under different conditions.</p>
		<p>In the first half of this experiment you will be shown a series of 6-12 words, one by one. Your job will be to remember them as best you can,
		then type them into the answer page that will be presented at the end of the trial. You will complete this 10 times.</p>
		<p> In the second half, you will be doing the same thing, but with an added twist. We'll tell you more about this when we get there.</p>
		`});

	introduction_2 = new InstructionsModel({id: 1, last: true, section: 1, img: '', text: `
		<h2>Audio Check</h3>
		<p>Before we start, we need to make sure that your browser is able to play audio files, and that your volume and speaker settings allow you to hear them.</p>
		<p>On the following page, press the "Play" button to hear a letter, then check off the letter you heard. You will only be allowed two tries to complete this test.</p>
		<p>Before beginning, take the following steps to ensure a greater likelihood of success:
		<ul>
			<li>If you are using an Internet Explorer browser earlier than version 9.0, please switch to a different browser.</li>
			<li>Turn up the volume on your computer and make sure that your browser volume is not muted.</li>
			<li>If possible, wear headphones to block out ambient noise.</li>
		</ul>
		
		`});
	preliminary_word_trial_instructions_1 = new InstructionsModel({id: 2, last: false, section: 2, img: '', text: `
		 <h3>Part 1 Instructions</h3>
		 <p>You will soon begin the first half of the experiment, but first you will be provided with a practice trial to get you started.</p> 
		 <p>Click 'Next' for a more detailed overview of the instructions.</p>
		`})
	preliminary_word_trial_instructions_2 = new InstructionsModel({id: 3, last: false, section: 2, img: '', text: `
		<p>A series of words will be shown on screen one at a time</p>`});
	preliminary_word_trial_instructions_3 = new InstructionsModel({id: 4, last: false, section: 2, img: '', text: `
		<p>Once a series is complete, you will be asked to type them into an answer page. Do this quickly, and don't worry about typos</p>`});
	preliminary_word_trial_instructions_4 = new InstructionsModel({id: 5, last: false, section: 2, img: '', text: `
		<p>To enter each word into the answer page press the SPACEBAR. Doing this will save the word and erase it from the page so that you can type the next one</p>`});
	preliminary_word_trial_instructions_5 = new InstructionsModel({id: 6, last: true, section: 2, img: '', text: `
		<p>Once you have typed in all of the words you can remember, click the submit button</p>
		<p>Remember</p>
		<ul>
			<li>Try to type your answers accurately, but DON'T try to correct typos.</li>
			<li>Try to type the words in the order they were presented.</li>
		</ul>`});

	begin_word_trial_instructions = new InstructionsModel({id: 7, last: true, section: 3, img: '', text: "<p>You are now ready to start the experiment!</p>"});

	nback_instructions_1 = new InstructionsModel({id: 8, last: false, section: 4, img: '', text: `
		<h3>Part 2 Instructions</h3>
		<p>In the next part of the experiment, you wil be doing the same exercise as in the first, only this time it will be accompanied by another exercise called the "Repeat Task".</p>
		<p>In the Repeat Task, you will hear a series of letters spoken aloud. Your job will be to press the SPACEBAR each time that you hear a letter repeated.</p>
	`});

	nback_instructions_2 = new InstructionsModel({id: 9, last:true, section: 4, img: '', text: `
		<h3>Part 2 Instructions</h3>
		<p>Before we get started with the real experiment, you will complete a series of practice trials with the Repeat Task alone to help you get the hang of things.
		Once you reach a score of 70% or higher on these trials, you will move on to complete the full experiment.
		</p>
	`});

	begin_nback_instructions = new InstructionsModel({id: 10, last: true, section: 5, img: '', text: `
		<h3>Part 2 Instructions</h3>
		<p>You have now copmleted the Repeat Task practice trials and are ready to proceed to the second part of the experiment.</p>
		<p>You will now be doing the Repeat Task at the same time as remembering the words presented on the screen.</p>
		<p>This is intended to be harder than the first part of the experiment, so don't worry if you find it difficult. Just try to complete both tasks to the best of your ability.</p>
	`});

	memory_test_instructions = new InstructionsModel({id: 11, last: true, section: 6, img: '', text: `
		<h3>Memory Test Instructions</h3>
		<p>You have now completed both major parts of the experiment. Congratulations!</p>
		<p>To wrap up we just want to see what you remembered from the words you saw.<br>
		On the following page, you will see 20 boxes into which you may type what you rememeber of the words in each trial.
		Don't worry about copying them verbatim; the general gist of the words is fine also.
		</p>
		`})

	
	instructions_collection.add([
		introduction_1, 
		introduction_2,
		preliminary_word_trial_instructions_1, 
		preliminary_word_trial_instructions_2, 
		preliminary_word_trial_instructions_3, 
		preliminary_word_trial_instructions_4,
		preliminary_word_trial_instructions_5,
		begin_word_trial_instructions,
		nback_instructions_1,
		nback_instructions_2,
		begin_nback_instructions,
		memory_test_instructions
		])

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