// How COM choose
function getPilihanCom() {
	const comp = Math.random();

	if (comp < 0.34) return "rock";
	if (comp >= 0.34 && comp < 0.67) return "paper";
	return "scissor";
}

// Rules
function getHasil(com, player) {
	if (player === com) return "DRAW!";
	if (player === "rock") return com === "scissor" ? "PLAYER 1 WIN" : "COM WIN";
	if (player === "paper") return com === "rock" ? "PLAYER 1 WIN" : "COM WIN";
	if (player === "scissor") return com === "paper" ? "PLAYER 1 WIN" : "COM WIN";
}

// When Picture Click
const pSelection = document.querySelectorAll(".playerOption li img");
pSelection.forEach(function (pil) {
	pil.addEventListener("click", function () {
		const pilihanCom = getPilihanCom();
		const pilihanPlayer = pil.className;

		const hasil = getHasil(pilihanCom, pilihanPlayer);

		// Change COM Image
		const imageC = document.querySelector(".comOption li img");
		imageC.setAttribute("src", "/assets/" + pilihanCom + ".png");

		// Hasil Winner
		const info = document.querySelector(".info");
		info.innerHTML = hasil;
	});
});

// Refresh Page
const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
	return location.reload();
});
