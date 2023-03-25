    const pemesanan = document.getElementById("pemesanan");
    pemesanan.onclick = pesan;


    function pesan(e) {
        e.preventDefault();

        var nama = document.getElementById("pem_nama").value;
        var email = document.getElementById("pem_email").value;
        var nohp = document.getElementById("pem_noHP").value;
        var unit = document.getElementById("pem_unit").value;
        var jenis = document.querySelector('input[name = "pms"]:checked').value;
        var menggunakan_e = document.getElementById("pem_esbatu").checked ? document.getElementById('pem_esbatu').value : '';
        var menggunakan_p = document.getElementById("pem_pengharum").checked ? document.getElementById('pem_pengharum').value : '';
        var menggunakan_l = document.getElementById("pem_lainnya").checked ? document.getElementById('pem_lainnya').value : '';
        var daerah = document.getElementById("pem_samarinda", "pem_tengarong", "pem_balikpapan", "pem_lain").value;
        var alamat = document.getElementById("pem_detail").value;

        var data = [];
        data.push({
            nama: nama,
            email: email,
            nohp: nohp,
            unit: unit,
            pemesanan: jenis,
            menggunakan: menggunakan_e,
            menggunakan_l,
            menggunakan_p,
            daerah: daerah,
            alamat: alamat
        });
        sessionStorage.setItem("pesan", JSON.stringify(data));
        // sessionStorage.setItem("Nama", nama);
        // sessionStorage.setItem("Email", email);
        // sessionStorage.setItem("Nohp", nohp);
        // sessionStorage.setItem("unit", unit);
        // sessionStorage.setItem("pemesanan", pesan);
        // sessionStorage.setItem("Menggunakan1", menggunakan_e);
        // sessionStorage.setItem("Menggunakan2", menggunakan_p);
        // sessionStorage.setItem("Menggunakan3", menggunakan_l);
        // sessionStorage.setItem("Daerah", daerah);
        // sessionStorage.setItem("Alamat", alamat);
        var formDataFromSession = JSON.parse(sessionStorage.getItem("pesan"));

        console.log(formDataFromSession[0].nama);
        console.log(formDataFromSession[0].email);
        console.log(formDataFromSession[0].nohp);
        console.log(formDataFromSession[0].unit);
        console.log(formDataFromSession[0].jenis);
        console.log(formDataFromSession[0].menggunakan_e);
        console.log(formDataFromSession[0].menggunakan_p);
        console.log(formDataFromSession[0].menggunakan_l);
        console.log(formDataFromSession[0].daerah);
        console.log(formDataFromSession[0].alamat);
        sessionStorage.setItem("pesan", JSON.stringify(formDataFromSession));

        // if()
        alert("berhasil daftar");

    }