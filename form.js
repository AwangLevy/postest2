function saveForm() {
    const nama = document.getElementById("pem_nama").value;
    const email = document.getElementById("pem_email").value;
    const nohp = document.getElementById("pem_noHP").value;
    const unit = document.getElementById("pem_unit").value;
    const jenis = document.querySelector('input[name="pms"]:checked').value;
    const daerah = document.getElementById("daerah").value;
    const alamat = document.getElementById("pem_detail").value;
    let pesanan = [];
    let mesan = document.getElementsByName("menggunakan");
    for (let z = 0; z < mesan.length; z++) {
        if (mesan[z].checked == true) {
            pesanan.push(mesan[z].value);
        }
    }

    const form = { nama, email, nohp, unit, jenis, pesanan, daerah, alamat };

    // Retrieve existing form submissions from sessionStorage
    let forms = JSON.parse(sessionStorage.getItem("forms")) || [];

    // Add new form submission to forms array
    forms.push(form);

    // Save updated forms array to sessionStorage
    sessionStorage.setItem("forms", JSON.stringify(forms));

    alert("Berhasil Melakukan Pemesanan");
    tampilkanData();
}

function tampilkanData() {
    const forms = JSON.parse(sessionStorage.getItem("forms")) || [];

    const hasil = document.getElementById("hasil");
    hasil.innerHTML = "<h2>Hasil Form Pemesanan:</h2>";

    for (let i = 0; i < forms.length; i++) {
        const data = forms[i];
        hasil.innerHTML += "<p>Form #" + (i + 1) + "</p>";
        hasil.innerHTML += "<p>Nama: " + data.nama + "</p>";
        hasil.innerHTML += "<p>Email: " + data.email + "</p>";
        hasil.innerHTML += "<p>Nohp: " + data.nohp + "</p>";
        hasil.innerHTML += "<p>unit di pakai: " + data.unit + "</p>";
        hasil.innerHTML += "<p>pesanan: " + data.jenis + "</p>";
        hasil.innerHTML += "<p>menggunakan: " + data.pesanan + "</p>";
        hasil.innerHTML += "<p>Kota: " + data.daerah + "</p>";
        hasil.innerHTML += "<p>Alamat lengkap: " + data.alamat + "</p>";
    }
}