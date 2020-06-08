$(document).ready(function() {
  $("form#favoriteThings").submit(function() {
    event.preventDefault();
    const movie = $("#movie").val();
    const food = $("#food").val();
    const book = $("#book").val();
    const band = $("#band").val();
    const color = $("#color").val();

    let favoriteArray1 = [movie, food, book, band, color];
    let favoriteArray2 = [];
    favoriteArray2.push(favoriteArray1[1], favoriteArray1[0], favoriteArray1[2]);

    $("#li1").append(favoriteArray1[0]);
    $("#li2").append(favoriteArray1[1]);
    $("#li3").append(favoriteArray1[2]);
    $("#li4").append(favoriteArray1[3]);
    $("#li5").append(favoriteArray1[4]);

  });
});  