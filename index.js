const hour = document.querySelector('[data-time-hour]');
const min = document.querySelector('[data-time-minute]');
const sec = document.querySelector('[data-time-second]');
const time = document.querySelector('[data-time]').dataset.time;

function timerWait() {
	let countDownDate = new Date(`${time} ${new Date().getFullYear()}`);
	let x = setInterval(() => {
		let now = new Date().getTime();

		let distance = countDownDate - now;

		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		hour.innerText = `${hours < 10 ? `0${hours}` : hours}`;
		min.innerText = `${minutes < 10 ? `0${minutes}` : minutes}`;
		sec.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;

		if (distance < 0) {
			clearInterval(x);
			hour.innerText = 0;
			min.innerText = 0;
			sec.innerText = 0;
		}
	}, 1000);
}
timerWait();
