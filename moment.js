function viewNewDay(){
  var value = document.getElementById('date').value;
  var data = moment(value,'DD-MM-YYYY').add(20,'years');
  var day = data.get('day');
  switch (day){
    case 1:
      document.getElementById('customTxt').innerHTML ='The day 20 years ago is Monday';
      break;
    case 2:
        document.getElementById('customTxt').innerHTML ='The day 20 years ago is Tuesday';
        break;
    case 3:
        document.getElementById('customTxt').innerHTML ='The day 20 years ago is Wednesday';
        break;
    case 4:
        document.getElementById('customTxt').innerHTML ='The day 20 years ago is Thursday';
        break;
    case 5:
        document.getElementById('customTxt').innerHTML ='The day 20 years ago is Friday';
        break;
    case 6:
        document.getElementById('customTxt').innerHTML ='The day 20 years ago is Saturday';
        break;
    case 7:
        document.getElementById('customTxt').innerHTML ='The day 20 years ago is Sunday';
        break;
  }
}
