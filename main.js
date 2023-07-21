const form = document.querySelector('form');
const input = document.querySelector('input');
const alert = document.querySelector('header form div span');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]>\w+)*(\.\w{2,3})+$/;

    if (input.value == "") {
        alertMsg();
        return (alertInfo.innerHTML = "Whoops! It looks like you forgot to add your email.");
    }
    if (!input.value.match(pattern)) {
        alertMsg();
        return (alertInfo.innerHTML = "Please provide a valid email");
    }
    return alert("Thank you for you filling in your email.");
})

function alertMsg() {
    input.style.borderColor = "hsl(354, 100%, 66%)";
    alertInfo.style.display = "block";
}

function clearAlert() {
    input.style.borderColor = "hsla(0, 0%, 59% 50%)";
    alertInfo.style.display = "none";
}

input.addEventListener("keypress", () => {
    clearAlert();
})