//your JS code here. If required.
function ClockDisplayUpdate() {
	const now = new Date();
	const dateString = now.toLocaleString();
	document.getElementById('timer').innerText = dateString;
	
}
ClockDisplayUpdate();
setInterval(ClockDisplayUpdate, 1000);