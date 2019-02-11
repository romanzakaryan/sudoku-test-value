function doneOrNot(rows) {

	var columns = [],
		blocks = [];

	for (var i = 0; i < 9; i++) {
		columns[i] = [];

		for (var j = 0; j < 9; j++) {
			var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
			blocks[k] = blocks[k] || [];

			blocks[k].push(rows[i][j]);
			columns[i].push(rows[j][i]);
		}
	}

	var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';

	var is_valid = rows.every(is_valid_row) &&
		columns.every(is_valid_row) &&
		blocks.every(is_valid_row);

	return is_valid ? 'Finished!' : 'Try again!';
}

// for testing you can run this examples, the first is correct and will return "Finished!", the second is not and will return "Try again!"

doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9]]);
				 
doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
	[6, 7, 2, 1, 9, 0, 3, 4, 9],
	[1, 0, 0, 3, 4, 2, 5, 6, 0],
	[8, 5, 9, 7, 6, 1, 0, 2, 0],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 0, 1, 5, 3, 7, 2, 1, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 0, 0, 4, 8, 1, 1, 7, 9]]);