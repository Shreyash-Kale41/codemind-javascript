console.log("===== if =====");

var num=10;
if(num%2==0){
    console.log("Even");
}


console.log("===== if-else =====");

var jobMila = false;
if (jobMila) {
    console.log("I will go to Dubai and 100 gm gold for me..");
} else {
    console.log("I wil go and eat Pani puri"); 
}


console.log("===== if-else-nested =====");

function dreamJob(isGotPlacement){
    if (isGotPlacement) {
        console.log("I will buy clothes for my Family");
        var isMNC = true;
        if (isMNC) {
            console.log("I will have US Trip");  
        } else {
            console.log("I will GOA trip");   
        }
    } else {
        console.log('I will one Hanky for me'); 
    }
}
dreamJob(true);



console.log("===== Switch Case =====");

function weekDay(dayNum){
    switch (dayNum) { // 8
      case 1:
          console.log(`${dayNum} - Monday`);
          break;
      case 2:
          console.log(`${dayNum} - Tue`);
          break;
      case 3:
          console.log(`${dayNum} - Wed`);
          break;
      case 4:
          console.log(`${dayNum} - Thur`);
          break;
      case 5:
          console.log(`${dayNum} - Fri`);
          break;
      case 6:
          console.log(`${dayNum} - Saturday`);
          break;
      case 7:
          console.log(`${dayNum} - Sunday`);
          break;
      default:
          console.log(`Invalid Data: ${dayNum}`);
          break;
    }
  }
  weekDay(9);
  // 1 -- Monday
  // 2 -- Tuesday
  // 3 -- Wed
  // 7 -- Sunday