function addList(item){
	if(item.length==0)
		alert("please enter what you want to do");
	else{
		var inputbox = document.getElementById("input");
		var uList = document.getElementsByClassName("list")[0].getElementsByTagName("ul")[0];
		var newList = document.createElement("li");
		var newText = document.createTextNode(item +"\xa0\xa0\xa0");
		var ck = document.createElement("input");
		ck.type = "checkbox";
		ck.onclick = rmItem;
		uList.appendChild(newList);
		newList.appendChild(newText);
		newList.appendChild(ck);
		inputbox.value = "";
	}
	

}

function rmItem(e){

	if(e.target.checked == true){
		var s = document.createElement("strike");
		s.appendChild(e.target.previousSibling);
		e.target.parentElement.insertBefore(s,e.target);
	}
	else if(e.target.checked == false){
		var s = e.target.parentElement.firstChild;
		e.target.parentElement.insertBefore(s.childNodes[0],e.target);
		e.target.parentElement.removeChild(s);
	}
	
}