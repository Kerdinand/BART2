const onewayElement = document.getElementById('oneway');
const doubleElement = document.getElementById('double');
const ArrDateLabel = document.getElementById('Arr-Date-Label');
const ArrDate = document.getElementById('Arr-Date');

const oneway = () => {
	if (onewayElement.style.backgroundColor == 'gray') {
		doubleElement.style.backgroundColor = 'gray';
		onewayElement.style.backgroundColor = 'red';
		ArrDate.style.display = 'none';
		ArrDateLabel.style.display = 'none';
	} else {
		doubleElement.style.backgroundColor = 'red';
		onewayElement.style.backgroundColor = 'gray';
		ArrDate.style.display = 'block';
		ArrDateLabel.style.display = 'block';
	}
};

const double = () => {
	if (doubleElement.style.backgroundColor == 'gray') {
		doubleElement.style.backgroundColor = 'red';
		onewayElement.style.backgroundColor = 'gray';
		ArrDate.style.display = 'block';
		ArrDateLabel.style.display = 'block';
	} else {
		doubleElement.style.backgroundColor = 'gray';
		onewayElement.style.backgroundColor = 'red';
		ArrDate.style.display = 'none';
		ArrDateLabel.style.display = 'none';
	}
};

console.log(oneway);
