// membuat variabel untuk menyimpan saran
var daftarSaran = [];

// fungsi untuk menyimpan saran
function simpanSaran() {
    // mengambil data dari form
    var nama = document.getElementById("nama").value;
    var saran = document.getElementById("saran").value;

    // membuat objek saran
    var objSaran = {
        nama: nama,
        saran: saran
    };

    // menambahkan objek saran ke dalam variabel daftarSaran
    daftarSaran.push(objSaran);

    // menghapus data di form
    document.getElementById("nama").value = "";
    document.getElementById("saran").value = "";

    localStorage.setItem("nama", nama);
    localStorage.setItem("saran", saran);

    // menampilkan daftar saran
    tampilDaftarSaran();
}

// fungsi untuk menampilkan daftar saran
function tampilDaftarSaran() {
    var daftarSaranHtml = "";

    for (var i = 0; i < daftarSaran.length; i++) {
        daftarSaranHtml += "<li><span>" + daftarSaran[i].nama + ":</span> " + daftarSaran[i].saran + "</li>";
    }

    document.getElementById("daftarSaran").innerHTML = daftarSaranHtml;
}