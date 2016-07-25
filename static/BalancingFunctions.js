//sort sentences into groups based on length
var sortByLength = function (wordsArray){
	var nine_words = new Array();
	var ten_words = new Array();
	var eleven_words = new Array();
	var twelve_words = new Array();
	var many_words = new Array();
	for (var i = 0; i < wordsArray.length; i++){
		switch(wordsArray[i].split(' ').length){
			case 9:
			nine_words.push(wordsArray[i]);
			break;

			case 10: 
			ten_words.push(wordsArray[i]);
			break;

			case 11:
			eleven_words.push(wordsArray[i]);
			break;

			case 12:
			twelve_words.push(wordsArray[i]);
			break;

			default:
			many_words.push(wordsArray[i]);
		}
	}
	//creates array of arrays, each defined by the number of words in them
	var total_library = new Array();
	total_library.push(nine_words);
	total_library.push(ten_words);
	total_library.push(eleven_words);
	total_library.push(twelve_words);
	return total_library
};

//create new stimuli arrays balanced for sentence length
var new_groups = function(arrayOfGroups){
	var new_rawA = new Array();
	var new_rawB = new Array();
	for (var i = 0; i < arrayOfGroups.length; i++){
		var group = arrayOfGroups[i];
		for (var j = 0; j < group.length; j++){
			if (j < (group.length / 2)){
				new_rawA.push(group[j])
			}
			else{
				new_rawB.push(group[j])
			}
		}
	}
	console.log(new_rawA);
	console.log(new_rawB)
};

//make a big array of possible arrays
var bigShuffle = function(raw_array){
	var big_array = new Array();
	for (var i = 0; i < 150; i++){
		big_array.push(_.shuffle(raw_array))
	};
	return big_array
};

//Return false for arrays with more than 3 consecutive coherent or incoherent trials
var isAcceptable = function(random_array, counter, index){
	if (counter == undefined){
		counter = 0
	}
	else if(counter >= 3){
		return false
	};

	if (index == undefined){
		index = 1
	}
	else if (index == (random_array.length - 1)){
		return true
	};
	
	//Find absolute difference between the id of the element and the id of the one before it
	if (Math.abs(random_array[index].id - random_array[index -1].id) < 50){
			var a_random_array = random_array;
			return isAcceptable(a_random_array, counter + 1, index + 1)
	}
	else{
		var a_random_array = random_array;
		return isAcceptable(a_random_array, 0, index + 1)
	};

};

//Iterate over big_array and remove arrays with more than 3 consecutive coherent or incoherent trials
var pruneBigShuffle = function(big_array){
	for(var i = 0; i < big_array.length; i++){
		if(!isAcceptable(big_array[i])){
			big_array.splice(i, 1)
		}
	}
	return big_array
}


























