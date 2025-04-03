let eyeOpen = document.getElementById("eyeOpen");
let eyeclose = document.getElementById("eyeClose");
let pass = document.getElementById("pass");
let slider = document.getElementById("slider");
let lenDisplay = document.getElementById("lenDisplay");
let generate = document.getElementById("gen");
let charA = document.getElementById("char_A");
let char_a = document.getElementById("char_a");
let charNum = document.getElementById("num");
let charSpl = document.getElementById("symbol");
let duplicate = document.getElementById("duplicate");

let lowerChr = "abcdefghijklmnopqrstuvwxyz";
let upperChr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let num = "0123456789";
let splChar = "!@#$%^&*()~`";
let slideVal = slider.value;

for (let i = 0; i < 8; i++) {
  let random = Math.floor(Math.random() * upperChr.length);
  // console.log(random);
  pass.value += upperChr[random];
}

eyeclose.addEventListener("click", () => {
  eyeclose.classList.add("dnone");
  eyeOpen.classList.remove("dnone");
  pass.type = "password";
});

eyeOpen.addEventListener("click", () => {
  eyeclose.classList.remove("dnone");
  eyeOpen.classList.add("dnone");
  pass.type = "text";
});

slider.addEventListener("input", () => {
  lenDisplay.textContent = "Length: " + slider.value;
  slideVal = slider.value;
});

console.log(slideVal);

generate.addEventListener("click", () => {
  
  let passChar = "";
  pass.value = "";
  slideVal = slider.value
  let generatedPass = ''; 

  if (
    !charA.checked &&
    !char_a.checked &&
    !charNum.checked &&
    !charSpl.checked
  ) {
    generatedPass = "plz check one";
  } else {
    if (charA.checked) {
      passChar += upperChr;
    }

    if (char_a.checked) {
      passChar += lowerChr;
    }

    if (charNum.checked) {
      passChar += num;
    }

    if (charSpl.checked) {
      passChar += splChar;
    }

    if (duplicate.checked) {

      if (passChar.length < slideVal) {
        pass.value = "Not enough unique characters for the selected length!";
        duplicate.checked = false;
        slider.value = 8;
        lenDisplay.textContent = 'Lenght :' + slider.value;
        return;
      }

      while(generatedPass.length < slideVal) {
        let random = Math.floor(Math.random() * passChar.length);
        if(generatedPass.includes(passChar[random])) {
          continue;
        } else {
          generatedPass += passChar[random];
        }
      }
    } else {
      for (let i = 0; i < slider.value; i++) {
        let random = Math.floor(Math.random() * passChar.length);
        generatedPass += passChar[random];
      }
    }
  }

  pass.value = generatedPass
});


