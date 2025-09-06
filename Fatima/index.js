const pw = document.getElementById('password');
    const cpw = document.getElementById('confirmPassword');
    const form = document.getElementById('signupForm');
    const msg = document.getElementById('msg');

    form.addEventListener('submit', function(event) {
      if (pw.value !== cpw.value) {
        event.preventDefault();
        msg.textContent = "❌ Passwords do not match!";
        msg.style.color = "red";
      } else {
        msg.textContent = "✅ Passwords match!";
        msg.style.color = "green";
      }
    });
