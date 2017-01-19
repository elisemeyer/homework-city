//create an array of the city names
  var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
  $(document).ready(function() {

//loop through the array
  for(i=0;i<cities.length;i++) {

//append the options    
  $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

//detect when a new city has been selected
  $('form').on('change', '#city-type',function(){

//retrieve what the user selected
  var city = $('#city-type').val();

//set background to different city
  if(city == 'NYC') {
    $('body').attr('class','nyc');
  }
  else if (city == 'SF') {
    $('body').attr('class','sf');
  }
  else if (city == 'LA') {
    $('body').attr('class','la');
  }
  else if (city == 'ATX') {
    $('body').attr('class','austin');
  }
  else if (city == 'SYD') {
    $('body').attr('class','sydney');
  }
});
});