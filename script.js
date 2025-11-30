document.addEventListener('DOMContentLoaded',function () {
	const navToggle = document.getElementById('navToggle');
	const mainNav = document.getElementById('mainNav');
	navToggle.addEventListener('click', () => {
		const expanded = navToggle.getAttribute('aria-expanded')==='true';
		navToggle.setAttribute('aria-expanded',String(!expanded));
		mainNav.style.display = expanded ? 'none':'block';
	});
	mainNav.querySelectorAll('a').forEach(a => {
		a.addEventListener('click', () => {
			if (window.innerWidth <=880) {
				navToggle.setAttribute('aria-expanded','false');
				mainNav.style.display = 'none';
			}
		});
	});

	const lightbox = document.getElementById('lightbox')
	const viewBtns = document.querySelectorAll('.view-btn');
	const lbClose = lightbox.querySelector('.lightbox-close');

	viewBtns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			const src = btn.dataset.img;
			const caption = btn.parentElement.querySelector('h3').textContent;
			openLightbox(src, caption);
		});
	});

	lbClose.addEventListener('click', closeLightbox);









});