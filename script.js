function firstNonRepeatedChar(str) {
 // Write your code here
    var firstUniqChar = function(s) {
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
};
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
