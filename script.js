const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");

const copyIcon = document.getElementById("copyIcon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[{]};:'\"<,>.?/";

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
    const value = (inputSlider.value - inputSlider.min) / (inputSlider.max - inputSlider.min) * 100;
    inputSlider.style.background = `linear-gradient(to right, #00ffff ${value}%, #4a4a8a ${value}%)`;
})

generateBtn.addEventListener("click", () => {
    copyIcon.innerHTML = "content_copy";
    passBox.classList.remove('warning');
    passBox.value = generatePassword();
    
})

function generatePassword(){
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numberEl.checked ? numbers : "";
    characters += symbolEl.checked ? symbols : "";

    if(characters == ""){
        passBox.classList.add('warning');
        return "Please select an option";
    }

    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random()* characters.length));
    }
    return password;
}

copyIcon.addEventListener("click", () => {
    if(passBox.value != "" || passBox.value.length >= 10){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
    }

    setTimeout(() => {
        copyIcon.innerHTML = "content_copy";
    }, 3000)
})
