


var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function occurences() {
  var counts = {};

  for (var i = 0; i < arr1.length; i++) {
    var post = arr1[i];
    counts[post] = counts[post] ? counts[post] + 1 : 1;
  }

  var resK = Object.keys(counts).reduce((a, v) => counts[a] > counts[v] ? a : v);
  
  console.log(resK + " occurs max no of times" + " : " + counts[resK]);
}

occurences();

