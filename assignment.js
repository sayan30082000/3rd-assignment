//https://github.com/jmmohiuddin/javascript-assignment

//1 number problem
function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
      var meter = kilometer * 1000; //[we know that, 1 kilometer=1000meter]
      return meter;
    } else if (kilometer < 0) {
      console.log("please convert the value");
      return meter;
    }
  }
  
  var teknaf = kilometerToMeter(4);
  console.log(teknaf);
  var tetuliya = kilometerToMeter(8);
  console.log(tetuliya);
  
  //2 number problem
  
  function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    var totalBudget =
      watch * watchPrice +
      mobile * mobilePrice +
      laptop * laptopPrice;
    return totalBudget;
  }
  var cost = budgetCalculator(1, 2, 3);
  console.log(cost);
  
  //3 number problem
  
  function hotelCost(day) {
    var orginalCost = 0;
    if (day <= 10) {
      var orginalCost = day * 100;
    } else if (day <= 20) {
      var inTendayCost = 10 * 100;
      var amountCost = day - 10;
      var tenToTweentydayCost = amountCost * 80;
      var orginalCost = inTendayCost + tenToTweentydayCost;
    } else {
      var inTendayCost = 10 * 100;
      var tenToTweentydayCost = 10 * 80;
      var amountCost = day - 20;
      var afterTweentyDayCost = amountCost * 50;
      var orginalCost = inTendayCost + tenToTweentydayCost + afterTweentyDayCost;
    }
    return orginalCost;
  }
  var costing = hotelCost(21);
  console.log(costing);
  
  //4 number problem
  
  function megaFriend(name) {
    var count = 0;
    for (var i = 0; i < name.length; i++) {
      if (count == name[i]) {
        count++;
      }
    }
    count++;
    return count;
  }
  var friend = ("bobby", "shafkat", "sayan", "ps,", "js");
  console.log(friend);