alert(
  "สวัสดีน้าบี๊เว็ปนี้เค้าตั้งใจทำให้บี๊เลยผิดพลาดตรงไหนขออภัยด้วย ถ้างงอะไรกดปุ่มด้านบนขวามือได้เลยนะ"
);
// add disable double tap zoom
// disable help
function closeHelp() {
  document.getElementById("helpMessage").style.display = "none";
}
function showHelp() {
  document.getElementById("helpMessage").style.display = "block";
}
function addDigit(digit) {
  let header = document.getElementById("header");
  const passwordInput = document.getElementById("passwordInput");
  if (passwordInput.value.length < 6) {
    passwordInput.value += digit;
  }

  checkPassword();
}

function clearPassword() {
  const passwordInput = document.getElementById("passwordInput");
  passwordInput.value = "";
}

function deleteLastDigit() {
  const passwordInput = document.getElementById("passwordInput");
  passwordInput.value = passwordInput.value.slice(0, -1);
}
// function checkPassword() {
//   if (passwordInput.value == "1234") {
//     window.location.href = "index2.html";
//   }
// }
let passAttempt = 0;
function submitPassword() {
  const passwordInput = document.getElementById("passwordInput");
  if (passwordInput.value == "240267") {
    window.location.href = "index2.html";
  } else {
    passAttempt++;
  }
  if (passwordInput.value == "240267") {
    alert("ถูกต้อง");
  } else if (passAttempt === 1) {
    alert("ไม่ใช่รหัสนี้นะบ่าดี๊ โดนต้มสะแล้ว55555555555 😭😭😭");
  } else if (passAttempt === 2) {
    alert("Incorrect Password3");
  } else {
    alert("รหัสก็คือวันครบรอบของเรางายยย");
  }
}
document.querySelector(".submit-btn").addEventListener("click", submitPassword);
