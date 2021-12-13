let state = 1;

function btn()
{
  if(state == 1)
  {
    state = 2;
    document.getElementById("informatii").innerHTML = "Banuiesc ca vrei informatii despre castor, asa ca am adaugat posibilitatea de a apasa din nou pe buton.";
  } else {
    state = 1;
    document.getElementById("informatii").innerHTML = "Apasa <a href=\"https://en.wikipedia.org/wiki/Beaver\">aici</a> pentru mai multe informatii despre castor";
  }
}
