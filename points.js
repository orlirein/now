var x = 50;
var numPoints = 0;
function button(){
  alert("Congratulations! You just won 15 points!");
  var c = document.getElementById("myPoints");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "grey";
  ctx.fillRect(0, 0, x, 100);
  x += 50;
  numPoints += 15
  document.getElementById("woo").innerHTML = ("Points: "+ numPoints)

  if (numPoints == 150) {
    alert("You just won a sticker!");
    ctx.fillStyle = "#e3dede";
    ctx.fillRect(0, 0, 500, 100);
  }
}
