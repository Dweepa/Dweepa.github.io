$(document).ready(function(){
  // hide the other tabs on load
  hideAll();
  $("#educationtab").fadeIn("slow");

  $("#education").click(function(){
    $(".tab").html("Education");
    hideAll();
    $("#educationtab").fadeIn("slow");
    changeTitle("Dweepa H | Education");
  });
  $("#experience").click(function(){
    $(".tab").html("Experience");
    hideAll();
    $("#experiencetab").fadeIn("slow");
    changeTitle("Dweepa H | Experience");
  });
  $("#publications").click(function(){
    $(".tab").html("Publications");
    hideAll();
    $("#publicationtab").fadeIn("slow", "linear");
    changeTitle("Dweepa H | Publications");
  });
  $("#coursebutton").click(function(){
    $(".tab").html("Courses");
    hideAll();
    $("#coursetab").fadeIn("slow", "linear");
    changeTitle("Dweepa H | Course Projects")
  });

  // external links
  $("#github").click(function(){
    window.open("https://github.com/Dweepa");
  });
  $("#linkedin").click(function(){
    window.open("https://www.linkedin.com/in/dweepa-honnavalli/");
  });

  $(".square-button").hover(function(){
    $(this).html("Watch Video");
  });


  function hideAll(){
    $("#coursetab").hide();
    $("#educationtab").hide();
    $("#publicationtab").hide();
    $("#experiencetab").hide();
  }
});

function changeTitle(title){
  document.title=title
}
