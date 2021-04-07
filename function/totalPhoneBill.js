function totalPhoneBill(callsAndSms){
	var bill = callsAndSms.split(", ");
  	var total = 0;
  	/*var calls = [];
    var sms = [];
  	var callCost = 2.75;
  	var smsCost = 0.65*/
  for (var i = 0; i < bill.length; i++){
  	if(bill[i]==='call'){
    	total += 2.75;
   		
    }
    if(bill[i]==='sms'){
    	total += 0.65;
   		
    }
    
  }
 // var total = calls.length * callCost + sms.length * smsCost;
  return 'R' + total.toFixed(2);
}