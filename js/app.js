const newsApiKey = 'd020f53f5de3456eb05fbe6eee0e5ff3';

const reqPromise = new Promise(function(resolve, reject) {
	let xhr = new XMLHttpRequest();

	xhr.onload = function() {
		resolve(xhr.response);
	};

	xhr.onerror = function(error) {
		reject(error);
	};

	xhr.open('GET', `http://newsapi.org/v2/sources?language=en&apiKey=${newsApiKey}`);

	xhr.send();
});

/*reqPromise.then(
	function(result) {
		console.log(result);
	},
	function(error) {
		console.log(error);
	}
); */

(function($) {
	let $date = $('.date');

	function updateTime() {
		$date.text(`${moment().format('dddd, MMMM Do YYYY, h:mm:ss: a')}`);
	}

	setInterval(updateTime, 1000);
})(jQuery);
