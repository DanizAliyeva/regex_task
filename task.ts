const text: string = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

//task 1-by using regular expression
//If the g flag is used, all results matching the complete regular expression will be returned
const myRegex: RegExp= /Spain/g
console.log(text.match(myRegex));

//task2-positions of "rain"
//If regexp is a regex, then it must have the global (g) flag set, or a TypeError is thrown.
const posOfRain: RegExp= /rain/g
console.log(...text.matchAll(posOfRain)); //An iterable iterator object of matches or an empty iterator if no matches are found- as it is iterable, it is used with ... to find the all occurances

//task3
console.log(text.replace(/Spain/,"France"));
//task 4
console.log(text.replaceAll(/rain/g,"sun"));

//task 5
const reg: RegExp=/plain/
console.log(text.search(reg));
//console.log(text.indexOf("plain")); prints the same reuslt with above expression
  