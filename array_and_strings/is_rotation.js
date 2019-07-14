// Exercise 1.8
// check if a subtring is a rotation of another string
// i.e. erbottlewat is a rotation of waterbottle

// solution 1:
// Using indexof value to check if string2 is a valid substring
// of string1+string1
// i.e. string1=tenfold string2=oldtenf
// tenfoldtenfold contains oldtenf ?
validate_rotation = (leftStr, rightStr) => {
	if (leftStr.length !== rightStr.length){
		return false;
	}

	return (leftStr+leftStr.indexOf(rightStr) !== -1);
}

module.exports = validate_rotation;