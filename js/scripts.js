$(document).ready(function() {
  $("form#favoriteThings").submit(function() {
    event.preventDefault();
    const movie = $("#movie").val();
    const food = $("#food").val();
    const book = $("#book").val();
    const band = $("#band").val();
    const color = $("#color").val();
    let favoriteArray1 = [movie, food, book, band, color];

  });
});  