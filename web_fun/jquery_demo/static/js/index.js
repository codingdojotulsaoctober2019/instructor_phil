// var my_h1 = document.getElementsByTagName('h1');

// console.log(my_h1.length);

// for(var i = 0; i < my_h1.length; i++) {
//   console.log(my_h1[i]);
//   console.log(my_h1[i].innerHTML);
// }

// setInterval(changeElement, 500);

// function changeElement() {
//   my_h1[2].innerHTML = 'Yesterday';
// }

// $() == jQuery()
$(document).ready(function(){
  console.log(typeof($(document).ready));
  var my_h1 = $('h1');
  
  for(var i = 0; i < my_h1.length; i++) {
    console.log(my_h1[i]);
    console.log(my_h1[i].innerHTML);
  }
  $('h1').click(function(){
    console.log($(this));
    console.log($(this)[0].innerHTML);
    $('h1:first').css('color', 'blue');
  })
  $('button').click(function(){
    $(this).siblings('p').hide();
  })
})