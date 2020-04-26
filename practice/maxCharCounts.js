function getMaxCharCount(s, queries) {
	// queries is a n x 2 array where queries[i][0] and queries[i][1] represents x[i] and y[i] for the ith query.

	// console.log(s,typeof(s),s[0])
	var st = '';
	var verbose = 0;
	for (var z = 0; z < s.length; z++) {
		st += s[z];
	}
	if (verbose) console.log(queries, st);

	var ans = [];
	var points = [].concat.apply([], queries);
	if (verbose) console.log(points);

	for (var i = 0; i < points.length; i += 2) {
		var a = 0,
			b = 0,
			c = 0,
			d = 0,
			e = 0,
			f = 0,
			g = 0,
			h = 0,
			iu = 0,
			ju = 0,
			k = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0,
			q = 0,
			r = 0,
			s = 0,
			t = 0,
			u = 0,
			v = 0,
			w = 0,
			x = 0,
			y = 0,
			zu = 0;

		for (var j = points[i]; j <= points[i + 1]; j++) {
			var res = [];
			if (verbose) console.log(st[j], j);
			if (st[j] == 'a' || st[j] == 'A') {
				a++;
			} else if (st[j] == 'b' || st[j] == 'B') {
				b++;
			} else if (st[j] == 'c' || st[j] == 'C') {
				c++;
			} else if (st[j] == 'd' || st[j] == 'D') {
				d++;
			} else if (st[j] == 'e' || st[j] == 'E') {
				e++;
			} else if (st[j] == 'f' || st[j] == 'F') {
				f++;
			} else if (st[j] == 'g' || st[j] == 'G') {
				g++;
			} else if (st[j] == 'h' || st[j] == 'H') {
				h++;
			} else if (st[j] == 'i' || st[j] == 'I') {
				iu++;
			} else if (st[j] == 'j' || st[j] == 'J') {
				ju++;
			} else if (st[j] == 'k' || st[j] == 'K') {
				k++;
			} else if (st[j] == 'l' || st[j] == 'L') {
				l++;
			} else if (st[j] == 'm' || st[j] == 'M') {
				m++;
			} else if (st[j] == 'n' || st[j] == 'N') {
				n++;
			} else if (st[j] == 'o' || st[j] == 'O') {
				o++;
			} else if (st[j] == 'p' || st[j] == 'P') {
				p++;
			} else if (st[j] == 'q' || st[j] == 'Q') {
				q++;
			} else if (st[j] == 'r' || st[j] == 'R') {
				r++;
			} else if (st[j] == 's' || st[j] == 'S') {
				s++;
			} else if (st[j] == 't' || st[j] == 'T') {
				t++;
			} else if (st[j] == 'u' || st[j] == 'U') {
				u++;
			} else if (st[j] == 'v' || st[j] == 'V') {
				v++;
			} else if (st[j] == 'w' || st[j] == 'W') {
				w++;
			} else if (st[j] == 'x' || st[j] == 'X') {
				x++;
			} else if (st[j] == 'y' || st[j] == 'Y') {
				y++;
			} else {
				// if((st[j] == "z") || (st[j]=="Z"))
				zu++;
			}
		}
		res.push(a);
		res.push(b);
		res.push(c);
		res.push(d);
		res.push(e);
		res.push(f);
		res.push(g);
		res.push(h);
		res.push(iu);
		res.push(ju);
		res.push(k);
		res.push(l);
		res.push(m);
		res.push(n);
		res.push(o);
		res.push(p);
		res.push(q);
		res.push(r);
		res.push(s);
		res.push(t);
		res.push(u);
		res.push(v);
		res.push(w);
		res.push(x);
		res.push(y);
		res.push(zu);

		if (verbose) console.log(res);
		// res.map((e)=>(Number(e)))
		for (var po = res.length - 1; po >= 0; po--) {
			if (res[po] !== 0) {
				ans.push(res[po]);
				break;
			}
		}
	}
	if (verbose) console.log(ans);

	return ans;
}

var hack = getMaxCharCount('aAabBcba', [ [ 2, 6 ], [ 1, 2 ], [ 2, 2 ], [ 0, 4 ], [ 0, 7 ] ]);
console.log(hack);
