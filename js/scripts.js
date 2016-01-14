$(function() {

  for (var index = 99; index >= 1; index -= 1) {
    $("#content").append("<p>" + index + " bottles of beer on the wall " + index + " bottles of beer. Take one down pass it around " + (index-1) + " bottles of beer on the wall.</p>" );
    $(index).addClass("bottles");

  };


});
