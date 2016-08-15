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
};

var printBigArray = function(big_array){
	var new_big_array = new Array();
	for(var i = 0; i < big_array.length; i++){
		var string_array = new Array();
		for (var j = 0; j < big_array[i].length; j++){
			var id = big_array[i][j].id;
			var new_obj;
			if (id < 100){
				new_obj = "{stim_type: 'coherent', stim: '" + big_array[i][j].stim + "'}"
			}
			else{
				new_obj = "{stim_type: 'incoherent', stim: '" + big_array[i][j].stim + "'}"
			}
			string_array.push(new_obj)
		};
		new_big_array.push("[" + string_array + "],")
	};
	return new_big_array
};

//Balance the nback
var bigNBackShuffle = function(length){
	var big_array = new Array(); //create empty array to be filled
	for(var i = 0; i < 400; i++){ //iterate over arbitrarily large number
		var nback_candidate = new Array(); //create a new array within the big array for each iteration
		for (var j = 0; j < length; j++){ //add the indicated number of elements to the array
			var element = Math.floor(Math.random()*11) //all of the elements are random numbers between 0 and 10
			nback_candidate.push(element)
		}
		big_array.push(nback_candidate)
	}
	return big_array
};


var enoughRepeats = function(array, repeats, counter, index){
	if(!(counter == undefined || index == undefined)){
		if(index === array.length - 1){
			if(array[index] == array[index -1]){
				counter++
			};
			if (counter != repeats){
				return false
			}
			else{
				return true
			}
		}
		else{
			if(array[index] == array[index -1]){
				counter++
				index++
			}
			else{
				index++
			}
		}
	}
	else{
		counter = 0; index = 1;
	}
	var this_array = array
	return enoughRepeats(this_array, repeats, counter, index)
}
//removes arrays that don't have repeats number of repeats
var pruneByRepeats = function(big_array, repeats, index){
	if(!(index == undefined)){
		if(index == big_array.length - 1){
			return big_array
		}
		else{
			var enough_repeats = enoughRepeats(big_array[index], repeats)
			if(enough_repeats){
				return pruneByRepeats(big_array, repeats, index + 1)
			}
			else if(!enough_repeats){
				big_array.splice(index, 1)
				return pruneByRepeats(big_array, repeats, index)
			}
		}
	}
	else{
		return pruneByRepeats(big_array, repeats, 0)
	}
}

var printComposite = function(array_1, array_2){
	var composite = array_1.concat(array_2);
	var proper_composite = new Array();
	_.shuffle(composite);
	for (var i = 0; i < composite.length; i++){
		proper_composite.push('['+ composite[i] + '],')
	}
	return proper_composite
}


























