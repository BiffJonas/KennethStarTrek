const bodyEl = document.querySelector("body");
const errorText = 'Error: Input must include "Kenneth"';

function colorYellow() {
	bodyEl.style.backgroundColor = "yellow";
}

function addTitle() {
	var ul = document.getElementById("episode_titles");
	var li = document.createElement("li");
	var text = document.getElementById("add_title").value;
	if (text.includes("Kenneth")) {
		li.appendChild(document.createTextNode(text));
		ul.appendChild(li);
		document.getElementById("error_text").textContent = "";
	} else {
		document.getElementById("error_text").textContent = errorText;
	}
}

//To enhance user experience while offline

let registration = null;

function register_service__worker() {
	if ("serviceWorker" in navigator) {
		window.navigator.serviceWorker
			.register("./service-worker.js", { scope: "./" })
			.then((res) => {
				registration = res;
				console.log("Service worker successfully registerd");
			})
			.catch((err) => {
				// console.log("Service worker not registerd");
				console.error(err);
			});
	}
}

function unregister_service__worker() {
	navigator.serviceWorker
		.getRegistrations()
		.then((registrations) => {
			registrations.forEach((registration) => {
				registration.unregister();
				console.log("Service worker unregistered");
			});
		})
		.catch((err) => {
			console.log("could not register service worker");
		});
}

register_service__worker();
// unregister_service__worker();
