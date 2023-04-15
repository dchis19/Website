const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = "#242424";
  btn.style.color = 'cyan';
  btn.style.borderColor = 'white';
  setTimeout(myFunction, 150);
});

function myFunction(){
  btn.style.backgroundColor = "#010112";
  btn.style.color = '#C5C6C7';
  btn.style.borderColor = '#45A29E';
  document.location.href = ".//frontPage.html"
}