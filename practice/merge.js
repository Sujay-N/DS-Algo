function Merge(intervals) {
	var arr = [];
	var res = [];
	var soln = [];

	for (var i = 0; i < intervals.length; i++) {
        for (var j = 0; j < intervals[i].length; j++)
         arr.push(intervals[i][j]);
	}
	console.log(arr);

	for (var p = 1; p < arr.length; p += 2) {
		if (arr[p] >= arr[p + 1]) {
			res.push([arr[p - 1],arr[p+2]]);
			// res.push(arr[p + 2]);
			p += 2;
		} else {
			res.push([arr[p - 1],arr[p]]);
			// res.push(arr[p]);
		}
	}
	return res;
}

console.log(Merge([ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 15, 18 ] ]));
