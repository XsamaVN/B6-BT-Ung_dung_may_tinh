
function cong() {
    let Soa = +document.getElementById("soa").value;
    let Sob = +document.getElementById("sob").value;
    let ketqua;
    ketqua =  Soa + Sob + "  (cộng)";
    document.getElementById("Ketqua").innerHTML = ketqua;
}
function tru() {    let Soa = +document.getElementById("soa").value;
    let Sob = +document.getElementById("sob").value;
    let ketqua;
    ketqua = Soa - Sob + "  (trừ)";
    document.getElementById("Ketqua").innerHTML = ketqua;
}
function nhan() {    let Soa = +document.getElementById("soa").value;
    let Sob = +document.getElementById("sob").value;
    let ketqua;
    ketqua = Soa * Sob + "  (nhân)";
    document.getElementById("Ketqua").innerHTML = ketqua;
}
function chia() {    let Soa = +document.getElementById("soa").value;
    let Sob = +document.getElementById("sob").value;
    let ketqua;
    ketqua = Soa / Sob + "  (chia)";
    document.getElementById("Ketqua").innerHTML = ketqua;
}

