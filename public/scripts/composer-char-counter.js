$(document).ready(function() {
  $('textarea').keyup(function() {
    let count = $(this).val().length;
    if (count <= 140) {
      const charCount = $(this)
      .closest(".new-tweet")
      .find(".counter")
      .removeClass("negative-count")
      .text(140 - count) 
    } else {
      const negativeCount = $(this)
      .closest(".new-tweet")
      .find(".counter")
      .addClass("negative-count")
      .text(140 - count)
    }
  })
});
