/*
var month=["jan","feb","march","mai","joni"];
var marks=[8,7,5,87,5,5,];


alert(month+" "+marks);
alert(month.length+" "+marks.length);
alert(month[2]+" "+marks[2]);

*/


var std=["lahiru","prasad","kumara","janith","pathum"];


std.push("DOtta");
std.unshift("MR.");
alert(std);

std.pop();
std.shift();
alert(std);

var subname= std.indexOf("bio") === -1 ? "haven't name" : "have name";
alert(subname);