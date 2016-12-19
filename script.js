// Create a "close button" and append it to each item
var myNodeList = document.getElementsByTagName('li');

for (i = 0; i < myNodeList.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.ClassName = "close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}

// Create on a close button to hide the current item
var close = document.getElementsByClassName("close");

for(i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Add a "checked" symbol when clicking on the item
var list = document.querySelector('ul');
list.addEventListener('click', function (e) {
	if (e.target.tagName === 'li') {
		e.target.classList.toggle('checked');
	}
}, false);

// Create a new task when clicking on the submit button
function newTask() {
	var task = document.createElement("li");
	var inputValue = document.getElementById('myInput').value;
	var t = document.createTextNode(inputValue);
	task.appendChild(t);
	if (inputValue === '') {
		alert("You need to create a task");
	} else  {
		document.getElementById("myUL").appendChild(task);
	}
	document.getElementById("myInput").value = "";

	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	task.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}