$(document).ready(function(){

  // hide the other tabs on load
  $("#experienceDetail").hide();
  $("#publicationDetail").hide();

  $("#education").click(function(){
    $(".detail").html("Education");
    $("#educationDetail").hide();
    $("#experienceDetail").hide();
    $("#publicationDetail").hide();
    $("#educationDetail").show("slow","linear"); // show only education
  });
  $("#experience").click(function(){
    $(".detail").html("Experience");
    $("#experienceDetail").hide();
    $("#educationDetail").hide();
    $("#publicationDetail").hide();
    $("#experienceDetail").show("slow", "linear"); // show only experience
  });
  $("#publications").click(function(){
    $(".detail").html("Publications");
    $("#educationDetail").hide();
    $("#publicationDetail").hide();
    $("#experienceDetail").hide();
    $("#publicationDetail").show("slow", "linear"); // show only publication
  });
  $("#github").click(function(){
    window.open("https://github.com/Dweepa");
  });
  $("#linkedin").click(function(){
    window.open("https://www.linkedin.com/in/dweepa-honnavalli/");
  });
});
