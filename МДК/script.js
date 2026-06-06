function bookHotel() {
    alert("Отель успешно забронирован!");
    <script>
const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!name!password!age) {
        message.textContent = "Пожалуйста, заполните все поля.";
        message.className = "message error";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Пароль должен быть не меньше 6 символов.";
        message.className = "message error";
        return;
    }

    if (age < 1 || age > 120) {
        message.textContent = "Введите корректный возраст.";
        message.className = "message error";
        return;
    }

    message.textContent = "Регистрация прошла успешно!";
    message.className = "message success";

    form.reset();
});
</script>
}