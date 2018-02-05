$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/loggedin").then(function(data) {
    $(".member-name").text(data.username);
  });
});


var class;


$(classDropdown).on('click', 'a', function(event){

event.preventDefault();

class = $(this).val().trim()


})



$(document).on('click','submit',function(event){
event.preventDefault();

var newCharObject = {
  character_name: $('#name').val(),
  character_author: "bobby",
  character_desc: $('#description').val(),
  class_name: class,
  character_image: $('#avatar').attr('src'),
  strength_point: 9,
  speed_point: 7,
  hit_point:5,
  skill_point:6,
  ghost_hp:4,
  skills:"eat",
  wins:6,
  losses:7
}


$.ajax({
  method:"POST",
  url: "/create",
  data: newCharObject
}).then(function(data){
//reload or redirect
 location.reload();
 }); 
})
