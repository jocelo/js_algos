// Exercise 1.7: Matrix rotation 
// An image is represented as a NxN matrix
// rotate the image in place

rotation = (matrix) => {
	const newMatrix = [],
		queueMatrix = [],
		size = matrix.length;
	
	for (let row=0 ; row<size ; row++) {
		newMatrix[row] = new Array(size);
		for (let col=0 ; col<size ; col++) {
			queueMatrix.push(matrix[row][col]);
		}
	}

	for (let col=size-1 ; col>=0 ; col--) {
		for (let row=0 ; row<size ; row++) {
			newMatrix[row][col] = queueMatrix.shift();
		}
	}

	return newMatrix;
}

module.exports = rotation;