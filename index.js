// DOM Elements
const onewayElement = document.getElementById('oneway');
const doubleElement = document.getElementById('double');
const ArrDateLabel = document.getElementById('Arr-Date-Label');
const ArrDate = document.getElementById('Arr-Date');

// Begin Route Finder Color Switch
const oneway = () => {
	if (onewayElement.style.backgroundColor == '#646973') {
		doubleElement.style.backgroundColor = '#646973';
		onewayElement.style.backgroundColor = '#EC0016';
		ArrDate.style.display = 'none';
		ArrDateLabel.style.display = 'none';
	} else {
		doubleElement.style.backgroundColor = '#EC0016';
		onewayElement.style.backgroundColor = '#646973';
		ArrDate.style.display = 'block';
		ArrDateLabel.style.display = 'block';
	}
};

const double = () => {
	if (doubleElement.style.backgroundColor == '#646973') {
		doubleElement.style.backgroundColor = '#EC0016';
		onewayElement.style.backgroundColor = '#646973';
		ArrDate.style.display = 'block';
		ArrDateLabel.style.display = 'block';
	} else {
		doubleElement.style.backgroundColor = '#646973';
		onewayElement.style.backgroundColor = '#EC0016';
		ArrDate.style.display = 'none';
		ArrDateLabel.style.display = 'none';
	}
};
// End Route Finder Color Switch

console.log(oneway);
