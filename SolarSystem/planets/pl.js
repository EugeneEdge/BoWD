	let ChangePlText = function(element){
		if(element.children[0].style.display == "block"){	
			element.children[0].style.display = "none";
			element.children[1].style.display = "block";
			element.children[2].innerHTML = "Click to show less";
			element.style.backgroundColor = "gray";
		}
		else{
			element.children[0].style.display = "block";
			element.children[1].style.display = "none";
			element.children[2].innerHTML = "Click to show more";
			element.style.backgroundColor = "lightgray";
		}
	}