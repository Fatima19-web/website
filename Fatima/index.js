
const pw = document.getElementById('password');
const cpw = document.getElementById('confirmPassword');

function validatePasswords() {
  if (pw.value !== cpw.value) {
    cpw.setCustomValidity("Passwords don't match");
  } else {
    cpw.setCustomValidity('');
  }
}

pw.addEventListener('input', validatePasswords);
cpw.addEventListener('input', validatePasswords);

(function () {
  'use strict';
  const form = document.getElementById('signupForm');
  const success = document.getElementById('success');

  form.querySelectorAll('input, select').forEach(el => {
    const evt = el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(evt, () => {
      el.classList.toggle('is-valid', el.checkValidity());
      el.classList.toggle('is-invalid', !el.checkValidity());
    });
  });

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated');
      form.classList.remove('shake');
      void form.offsetWidth; // restart animation
      form.classList.add('shake');
      return;
    }

    event.preventDefault();
    success.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
    form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
      el.classList.remove('is-valid', 'is-invalid');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, false);
})();
