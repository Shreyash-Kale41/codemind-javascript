function stringHandsOn(){
    
    var str=`   Hey you are doing good, keep it up   `;
    console.log(`1. String is ${str}`);

    console.log(`2. Length of string is ${str.length}`);

    var strTrim=str.trim();
    console.log(`3. After removing spaces string is "${strTrim}" and length of string is ${strTrim.length}`);

    console.log(`4. Total extra spaces are ${str.length-strTrim.length}`);
    
    console.log(`5. First character of string is ${strTrim.charAt(0)} and last character is ${strTrim.charAt(strTrim.length-1)}`);

    var totalWords=strTrim.split(" ");
    console.log(`6. Total Words in String is ${totalWords.length}`);
    

    console.log(`7. Index of Word 'good' is ${str.indexOf("good")}`);
    
    console.log(`8. Substring from index 22 is ${str.substring(22)}`);
    
    console.log(`9. Is string ends with "up": ${strTrim.endsWith("up")}`);
    
    console.log(`10. Is string starts with "Hey": ${strTrim.startsWith("Hey")}`);
    
}
stringHandsOn();



