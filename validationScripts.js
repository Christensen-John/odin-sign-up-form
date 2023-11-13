// const formElList = document.forms["account-info-form"].elements;
const form = document.getElementById("account-info-form");
const psInMain = document.getElementById("password");
const psInConfirm = document.getElementById("password-confirmation");

//Listeners

//Password comfirmation check
form.addEventListener("focusout", (event) => {
	if (
		event.target.id === "password" ||
		event.target.id === "password-confirmation"
	) {
		if (psInMain.value !== psInConfirm.value) {
			psInMain.classList.add("pwdMismatch");
			psInConfirm.classList.add("pwdMismatch");
		} else if (psInMain.value === psInConfirm.value) {
			psInMain.classList.remove("pwdMismatch");
			psInConfirm.classList.remove("pwdMismatch");
		}
	}
});
