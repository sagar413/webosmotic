let hamburger_menu = document.querySelector(".hamburger_menu");
	let dd_wrap = document.querySelector(".dd_wrap");
let a_parent =  document.querySelectorAll(".a_parent");

	hamburger_menu.addEventListener("click", function(){
		dd_wrap.classList.toggle("active");
		a_parent.forEach(function(aitem){
			aitem.classList.remove("active");
		})
	})

	

	a_parent.forEach(function(aitem){

		aitem.addEventListener("click", function(){
			a_parent.forEach(function(aitem){
				aitem.classList.remove("active");
			})
			aitem.classList.add("active");
		})
	})
