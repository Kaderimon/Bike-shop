(function() {
	function sliderSwitcher(element, timeout, countSlider) {
		let count = 0;
		let slider = document.getElementById(element);
		let left = document.getElementsByClassName('leftSw')[0];
		let right = document.getElementsByClassName('rightSw')[0];
		document.addEventListener("DOMContentLoaded", function() {
			var elementBody = document.body;
			elementBody.addEventListener("click", function() {
				if (event.target === left || event.target === right) {
					switcher(slider, count);
				};
			}, false);
		});
		var switcher = (data, counter) => {
			switch (counter) {
				case 0:
					data.style.backgroundImage = "url(img/slider_bg.jpg)";
					count++;
					break;
				case 1:
					data.style.backgroundImage = "url(img/slider_bg2.jpg)";
					count++;
				default:
					count = 0;
					break;
			}
		}
		var sliderInterval = setInterval(function() {
			return switcher(slider, count);
		}, timeout);
	}

	sliderSwitcher("slider", 4500, 1);
})();