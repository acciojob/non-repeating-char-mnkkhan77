function firstNonRepeatedChar(str) {
 // Write your code here
    for (let idx = 0; idx < s.length; idx++){
        if(s.indexOf(s[idx]) === s.lastIndexOf(s[idx])){
            return idx
        } else {
            return -1
        }
    }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
