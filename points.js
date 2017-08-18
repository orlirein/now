var x = 50;
var numPoints = 0;
function button(){
  alert("Congratulations! You just won 15 points!");
  var c = document.getElementById("myPoints");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, x, 100);
  x += 50;
  numPoints += 15;
  document.getElementById("woo2").innerHTML = ( numPoints);

  var stickers = ["CROWN", "DIAMOND", "THUMB", "STAR", "CASH", "KEY", "TROPHY", "SMILE", "CHECK", "CUPCAKE"];
  y = 150;
  for (i = 0; i < stickers.length; i++) {
    if (numPoints == y) {
      alert("You just won an achievement sticker!");
      ctx.fillStyle = "#e3dede";
      ctx.fillRect(0, 0, 500, 100);
      x = 50;
      document.getElementById(stickers[i]).style.display = 'inline-block';
    }
    y += 150;
   }

}
