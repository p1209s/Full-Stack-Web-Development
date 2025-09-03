// Manipulating CSS Classes with jQuery

// $("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");
// $("h1").hasClass("big-title");

// Manipulating Text and HTML with jQuery

// $("h1").text("Bye");
// $("button").text("Don't Click Me");
// $("button").html("<em>Don't Click Me</em>");

// Manipulating Attributes with jQuery

// $("img").attr("src");
// $("a").attr("href", "https://www.yahoo.com");
// $("h1").attr("class");

// Adding Event Listeners with jQuery

// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// $(document).keypress(function (event) {
//   $("h1").text(event.key);
//   //   $("h1").html(event.key);
// });

// $("h1").on("mouseover", function () {
//   $("h1").css("color", "purple");
// });

// Adding and Removing Elements with jQuery

// $("h1").before("<button>New</button>"); // Before h1
// $("h1").after("<button>New</button>"); // After h1
// $("h1").prepend("<button>New</button>"); // Inside h1, before the text
// $("h1").append("<button>New</button>"); // Inside h1, after the text
// $("button").remove(); // Removes all buttons
// $("h1").remove(); // Removes h1

// Animations with jQuery

$("button").on("click", function () {
  //   $("h1").hide(); // Hides h1
  //   $("h1").show(); // Shows h1
  //   $("h1").toggle(); // Toggles h1 (if visible, hides it; if hidden, shows it)
  //   $("h1").fadeOut(); // Fades out h1
  //   $("h1").fadeIn(); // Fades in h1
  //   $("h1").fadeToggle(); // Toggles fade of h1
  //   $("h1").fadeTo(1000, 0.5); // Fades h1 to 50% opacity over 1 second
  //   $("h1").slideUp(); // Slides up h1
  //   $("h1").slideDown(); // Slides down h1
  //   $("h1").slideToggle(); // Toggles slide of h1
  // Custom Animation (can be used only with numeric values)
  // $("h1").animate({ opacity: 0.5 });
  //   $("h1").animate({ margin: 20 });
  //   $("h1").animate({ margin: 20, opacity: 0.5 });
  // Chaining Animations (methods are executed in sequence)
  // $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
