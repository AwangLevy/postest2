// Mendapatkan elemen form
const registerForm = document.querySelector("form");
// Mendapatkan elemen input dari form
const nama = document.querySelector('input[name="nama"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const repeatPassword = document.querySelector('input[name="repeat_password"]');

// Mendefinisikan fungsi untuk menyimpan data ke Local Storage
function saveUser(nama, email, password) {
    // Mendapatkan data user dari Local Storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Menambahkan user baru ke dalam array users
    users.push({ nama, email, password });
    // Menyimpan data users kembali ke Local Storage
    localStorage.setItem("users", JSON.stringify(users));
}

// Menangani event submit form
registerForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit secara default

    // Validasi input form
    if (nama.value === "" || email.value === "" || password.value === "" || repeatPassword.value === "") {
        alert("Mohon isi semua field terlebih dahulu!");
        return;
    }

    if (password.value !== repeatPassword.value) {
        alert("Password dan Repeat Password tidak cocok!");
        return;
    }

    // Menyimpan data user ke Local Storage
    saveUser(nama.value, email.value, password.value);

    // Memberikan notifikasi ke user bahwa registrasi berhasil
    alert("Registrasi berhasil!");
    window.location.href = "index.html";

    // Me-reset form
    registerForm.reset();
});