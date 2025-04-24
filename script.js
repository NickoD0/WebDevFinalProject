emailjs.init("Lj_NWe36sC8gbL4CI"); 
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('contact-form');

	if (form) {
		form.addEventListener('submit', function (event) {
			event.preventDefault();

			emailjs.sendForm(
				"service_nmc105", 
				"template_4peygsr", 
				form
			).then(
				function () {
					alert("Message sent successfully!");
					form.reset();
				},
				function (error) {
					console.error("FAILED...", error);
					alert("Failed to send message. Please try again later.");
				}
			);
		});
	}
});


function goToArticle(url) {
	window.location.href = url;
}

function highlight(panel) {
	const img = panel.querySelector('img');
	const title = panel.querySelector('.article-title');

	img.style.filter = 'brightness(1.2)';
	img.style.transform = 'scale(1.25)';
	title.style.background = 'rgba(0, 0, 0, 0.8)';
	title.style.transform = 'translateY(-5px)';
}

function reset(panel) {
	const img = panel.querySelector('img');
	const title = panel.querySelector('.article-title');

	img.style.filter = 'brightness(1)';
	img.style.transform = 'scale(1)';
	title.style.background = 'rgba(0, 0, 0, 0.6)';
	title.style.transform = 'translateY(0)';
}
