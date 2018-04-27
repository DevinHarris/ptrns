const newsApiKey = '&apiKey=d020f53f5de3456eb05fbe6eee0e5ff3',
	baseUrl = 'https://newsapi.org/v2/',
	$articlesWrap = $('.articles-wrap'),
	$article = $('.article'),
	$searchForm = $('.search-form');

function renderArticles(dataObj, elToAppendTo) {
	elToAppendTo.empty();
	dataObj.articles.map(function(source) {
		let tempStr = `
			<div class="article" style="background: url(${
				source.urlToImage === null ? `./article-bg.jpg` : source.urlToImage
			}) center center no-repeat;
	background-size: cover;
	background-attachment: fixed;">
					<span class="article-source">${source.source.name}</span>
					<h2 class="article-title"><a href=${source.url} target="_blank">${source.title}</a></h2>
					<button class="preview-btn" data-article="${source.title}">Preview</button>
			</div>`;

		elToAppendTo.append(tempStr);
	});
}

const reqPromise = new Promise(function(resolve, reject) {
	let xhr = new XMLHttpRequest();

	xhr.onload = function() {
		resolve(xhr.response);
	};

	xhr.onerror = function(error) {
		reject(error);
	};

	xhr.open('GET', `${baseUrl}top-headlines?country=us${newsApiKey}`);

	xhr.send();
});

reqPromise.then(
	function(data) {
		let dataObj = JSON.parse(data);

		console.log(dataObj.articles);

		renderArticles(dataObj, $articlesWrap);

		$('.preview-btn').on('click', function(e) {
			$('.article-preview').addClass('show-article-preview');
			let articleTitle = $(this).data('article');

			console.log(articleTitle);

			let selectedArticle = dataObj.articles.find(function(article) {
				return articleTitle === article.title;
			});

			console.log(selectedArticle);

			let previewTempStr = `
			<h1 class="article-preview-title">${selectedArticle.title}</h1>
			<span class="article-preview-meta">${selectedArticle.author} - ${selectedArticle.source.name} - ${moment(
				selectedArticle.publishedAt
			).format('dddd, MMMM Do, YYYY')}</span>
			<p class="article-preview-description">${selectedArticle.description}</p>
			<button class="preview-close-btn"><i class="material-icons">close</i></button>
			`;

			$('.article-preview').html(previewTempStr);

			$('.preview-close-btn').on('click', function(e) {
				$('.article-preview').removeClass('show-article-preview');
			});
		});
	},
	function(error) {
		console.log(error);
	}
);

(function($) {
	let $date = $('.date');

	function updateTime() {
		$date.text(`${moment().format('dddd, MMMM Do YYYY, h:mm:ss: a')}`);
	}

	setInterval(updateTime, 1000);

	$('.toggle-menu').on('click', function() {
		$('.sidebar').toggleClass('show-menu');
	});

	$('.cat-btn').on('click', function(e) {
		e.preventDefault();
		let cat = $(this).data('cat');

		const catReqPromise = new Promise(function(resolve, reject) {
			const xhr = new XMLHttpRequest();

			xhr.onload = function() {
				resolve(xhr.response);
			};

			xhr.onerror = function(error) {
				reject(error);
			};

			xhr.open('GET', `${baseUrl}${cat}${newsApiKey}`);
			xhr.send();
		});

		catReqPromise.then(
			function(data) {
				let catDataObj = JSON.parse(data);

				renderArticles(catDataObj, $articlesWrap);

				$('.preview-btn').on('click', function(e) {
					$('.article-preview').addClass('show-article-preview');
					let articleTitle = $(this).data('article');

					console.log(articleTitle);

					let selectedArticle = catDataObj.articles.find(function(article) {
						return articleTitle === article.title;
					});

					console.log(selectedArticle);

					let previewTempStr = `
			<h1 class="article-preview-title">${selectedArticle.title}</h1>
			<span class="article-preview-meta">${selectedArticle.author} - ${selectedArticle.source.name} - ${moment(
						selectedArticle.publishedAt
					).format('dddd, MMMM Do, YYYY')}</span>
			<p class="article-preview-description">${selectedArticle.description}</p>
			<button class="preview-close-btn"><i class="material-icons">close</i></button>
			`;

					$('.article-preview').html(previewTempStr);
					$('.preview-close-btn').on('click', function(e) {
						$('.article-preview').removeClass('show-article-preview');
					});
				});
			},
			function(error) {
				console.log(error);
			}
		);
	});

	/*$('.username').on('blur', function(e) {
		console.log('blur event');
		let userNameVal = $(this).text();

		chrome.storage.local.set({ ptrnUserName: userNameVal });
	});

	if (chrome.storage.local.get(['ptrnUserName'])) {
		$('.username').text(
			chrome.storage.local.get(['ptrnUserName'], function(result) {
				return result.ptrnUserName;
			})
		);
	} */

	$searchForm.on('submit', function(e) {
		e.preventDefault();
		let searchVal = $('.search').val();

		console.log(searchVal);

		let searchReq = new Promise(function(resolve, reject) {
			let xhr = new XMLHttpRequest();

			xhr.onload = function() {
				resolve(xhr.response);
			};

			xhr.onerror = function(error) {
				reject(error);
			};

			xhr.open(
				'GET',
				`${baseUrl}everything?q=${searchVal}&from=${moment(Date.now()).format('YYYY-MM-DD')}&to=${moment(
					Date.now() - 7 * 24 * 3600 * 1000
				).format('YYYY-MM-DD')}&sortBy=popularity${newsApiKey}`
			);
			xhr.send();
		});

		searchReq.then(
			function(data) {
				let searchData = JSON.parse(data);

				renderArticles(searchData, $articlesWrap);
				$('.preview-btn').on('click', function(e) {
					$('.article-preview').addClass('show-article-preview');
					let articleTitle = $(this).data('article');

					console.log(articleTitle);

					let selectedArticle = searchData.articles.find(function(article) {
						return articleTitle === article.title;
					});

					console.log(selectedArticle);

					let previewTempStr = `
			<h1 class="article-preview-title">${selectedArticle.title}</h1>
			<span class="article-preview-meta">${selectedArticle.author} - ${selectedArticle.source.name} - ${moment(
						selectedArticle.publishedAt
					).format('dddd, MMMM Do, YYYY')}</span>
			<p class="article-preview-description">${selectedArticle.description}</p>
			<button class="preview-close-btn"><i class="material-icons">close</i></button>
			`;

					$('.article-preview').html(previewTempStr);
					$('.preview-close-btn').on('click', function(e) {
						$('.article-preview').removeClass('show-article-preview');
					});
				});
			},
			function(error) {
				console.log(error);
			}
		);
	});
})(jQuery);
