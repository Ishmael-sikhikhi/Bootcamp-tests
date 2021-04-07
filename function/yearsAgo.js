function yearsAgo(year){
    //console.log(year);
      var date = new Date();
        var myYear = date.getFullYear()-year; 
        return myYear;
  }