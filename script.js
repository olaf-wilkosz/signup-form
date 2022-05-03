const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.green-bg button');

signUpBtn.addEventListener('click', () => {
	container.classList.toggle('change');
	container.classList.contains('change')
		? (signUpBtn.innerHTML =
				'<i class="fa-solid fa-circle-xmark"></i> Close form')
		: (signUpBtn.innerHTML =
				'<i class="fa-solid fa-arrow-right-to-bracket"></i> Sign Up');
});
