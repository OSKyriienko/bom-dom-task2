window.addEventListener('scroll', function (e) {
	console.log(document.documentElement.scrollTop);
 
  
  var $parallax = document.getElementById('parallax');
  var posY = document.documentElement.scrollTop * (-0.4);
   console.log(posY);
   $parallax.style.backgroundPosition = '0px '+posY + 'px';
 //  alert(typeof $parallax.style.backgroundPosition);
})