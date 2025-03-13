function firstNonRepeatedChar(s) {
 // Write your code here
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return s[i]
    return -1
};
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));