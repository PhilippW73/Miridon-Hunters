$(document).ready(function() {
 
  $(".clssubcharacter").on("click", function(event) {

    var passwordInput = $(".clspasswordInput").val().trim();
    var profileimageInput = $(".clsprofileimageInput").val().trim();
    var bioInput = $(".clsuserbioInput").val().trim();

    event.preventDefault();

    var userData = {
      password: passwordInput,
      profile_image: profileimageInput,
      user_bio: bioInput
    };
  
    $.post("/updateuser", userData, function(data) {
      window.location.replace(data);
    });

  });

});  
