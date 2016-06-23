//Higher-Order Sequencing Functions Worksheet 2

//Use your own forEach, map, reduce and filter functions to complete the following exercises. Write at least two assertions that prove your solution is correct

//My Functions 

function forEach (array, callback) { 
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
};

function map (array, callback) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		result[i] = callback(array[i]);
	}

	return result;
};

function filter (array, callback) {
	var results = [];

	for (var i = 0; i < array.length; i++) {
		if (callback(array[i])) {
		results[results.length] = (array[i])
		}
	}	

	return results;
}

function reduce (array, callback) {
	var result = array[0];

	for (var i = 1; i < array.length; i++) {
		result = callback(result, array[i]);
	}

	return result;
};

function sum (a, b) {
	return a + b;
}

// Data that will be used to test functions

var data = [
    { title: "Cymbeline", author: "Shakespeare", year: 1623 },
    { title: "The Tempest", author: "Shakespeare", year: 1623 },
    { title: "Hamlet", author: "Shakespeare", year: 1603 },
    { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
    { title: "Macbeth", author: "Shakespeare", year: 1620 },
    { title: "Death of a Salesman", author: "Arthur Miller", year: 1949 },
    { title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949 }
]
//Exercise 1
//The pluck function should take an array of objects and a property name (string). It should return a new array containing the values of that specific property at each object.

function pluck (array, string) {
	var i = 0;
	var result;

	result = map(array, function (a){
		return a[string];
	});

	return result;
}

console.log(pluck(data, 'year'));

console.assert(pluck(data, 'year')[0] === 1623);

//2.The reject function should take an array and a callback function. It should do the opposite of filter, that is, if the callback returns a "truthy" value, that item is not inserted into the new array. Otherwise it is.

function reject (array, callback) {
	
	var results = filter(array, function(b) {
		return !callback(b);
	});

	return results;
};

var notShakespeare = reject(data, function (c){
	if (c.author === 'Shakespeare') {
		return true;
	} else {
		return false;
	}
});

console.assert(notShakespeare[1].author !== 'Shakespeare');
console.assert(notShakespeare[0].author !== 'Shakespeare');

//3.The find function should take an array and a callback function. It should return the first value in an array that returns true when executed with the callback.
function find (array, callback) {
	return reject(array, callback)[0];
}

var answer = find(data, function (x) {
	return x.year > 1900;
});

console.assert(answer = { title: 'Cymbeline', author: 'Shakespeare', year: 1623});

//4. The where function should take an array of objects and a criteria object. It should return a new array containing the objects from the original array that have identical values as the criteria object.

function where (array, criteria) {
	
	return filter (array, function (d) {
		for (var prop in criteria) {
			if (criteria[prop] !== d[prop]) {
				return false;
			}
		}
	});
	
	return true;
};

console.assert(where(data, {author: 'Shakespeare'}))

 
















 








