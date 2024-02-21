alert (`Tiket masuk`);

const nama = prompt ("masukkan nama: ");
const studio = prompt ("pilih studio a,b,c: ");
const umur = prompt("masukkan umur anda: ");



if (umur >= 13){
    if (studio === 'A'){
        alert(`Tiket ${nama}, Studio A, Umur ${umur}`)
    }else if (studio === 'B'){
        alert(`Tiket ${nama}, Studio B, Umur ${umur}`)
    }else if (studio === 'C'){
        alert(`Tiket ${nama}, Studio C, Umur ${umur}`)
    }else{
        alert('Selamat datang di Studio')
    }
}else{
    alert(`${nama} maaf, umur anda belum cukup umur`)
}
    