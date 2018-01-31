$(document).ready(function() {

  $(document).on("click", ".submitLogin", function(event) {
 
    var emailInput = $(".clsemailInputLogin").val().trim();

    var passwordInput = $(".clspasswordInputLogin").val().trim();

    event.preventDefault();
    var userData = {
      email: emailInput,
      password: passwordInput
    };

    if (!userData.email || !userData.password) {
      return;
    }
    
    loginUser(userData.email, userData.password);
    $(".clsemailInputLogin").val("");
    $(".clspasswordInputLogin").val("");

  });

  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }


  $(document).on("click", ".submitSignUp", function(event) {

    var emailInput = $(".clsemailInput").val().trim();
    var passwordInput = $(".clspasswordInput").val().trim();
    var usernameInput = $(".clsusernameInput").val().trim();
    var profileimageInput = $(".clsprofileimageInput").val().trim();
    var bioInput = $(".clsbioInput").val().trim();

    event.preventDefault();

    var userData = {
      email: emailInput,
      password: passwordInput,
      username: usernameInput,
      profile_image: profileimageInput,
      user_bio: bioInput
    };

    if (!userData.email || !userData.password) {
      return;
    }
    signUpUser(userData.email, userData.password, userData.username, userData.profile_image, userData.user_bio);
    $(".clsemailInput").val("");
    $(".clspasswordInput").val("");
    $(".clsusernameInput").val("");
    $(".clsprofileimageInput").val("");
    $(".clsbioInput").val("");
  });

  function signUpUser(email, password, username, profile_image, user_bio) {
    $.post("/api/signup", {
      email: email,
      password: password,
      username: username,
      profile_image: profile_image,
      user_bio: user_bio
    }).then(function(data) {
      window.location.replace(data);
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

});
