const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const resultMessage = document.getElementById('resultMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Email không hợp lệ';
    emailError.classList.add('error');
    isValid = false;
  } else {
    emailError.textContent = '';
    emailError.classList.remove('error');
  }

  // Validate password length
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Mật khẩu phải có ít nhất 6 ký tự';
    passwordError.classList.add('error');
    isValid = false;
  } else {
    passwordError.textContent = '';
    passwordError.classList.remove('error');
  }

  // Display success message if valid
  if (isValid) {
    resultMessage.textContent = 'Đăng nhập thành công!';
    resultMessage.classList.add('success');
  } else {
    resultMessage.textContent = '';
    resultMessage.classList.remove('success');
  }
});
