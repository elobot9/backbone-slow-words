var saveSingleTaskData = function(){
	var exp1_data = new Array();
	for (var i = 0; i < window.words_collection.length; i++){
		var singletask_collection = window.words_collection.get(i);
		exp1_data.push(singletask_collection.get('answer'))
	}
	console.log(exp1_data)
	psiturk.recordTrialData(exp1_data);
	psiturk.saveData()
}

var saveDualTaskData = function(){
	var exp2_data = new Array();
	for (var i = 0; i < window.dual_task_trials.length; i++){
		var dualtask_collection = window.dual_task_trials.get(i);
		var nback_accuracy = dualtask_collection.percentCorrect();
		var words_response = dualtask_collection.get('answer');
		exp2_data.push("nback accuracy = " + nback_accuracy + " remembered words = " + words_response);
	}
	console.log(exp2_data);
	psiturk.recordTrialData(exp2_data);
	psiturk.saveData()

}