const whichSchool = (age) => {
	if (age < 13 && age > 0) {
		console.log(`I am ${age}, Elementary School!`);
	} else if (age > 12 && age < 19) {
		console.log(`I am ${age}, Secondary School!`);
	} else {
		console.log(`I am ${age}, Lighthouse Labs!`);
	}
}

whichSchool(19);