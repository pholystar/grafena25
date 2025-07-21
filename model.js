const anggotaData = {
    Selena: ["Ariana (281..)", "Farhan (281..)", "Nadia (281..)"],
    Nebula: ["Zidan (281..)", "Kirana (281..)", "Raka (281..)"],
    Batozar: ["Gilang (281..)", "Dita (281..)", "Reno (281..)"],
    Ceros: ["Iqbal (281..)", "Tasya (281..)", "Reza (281..)"],
    Sagaras: ["Nina (281..)", "Rafi (281..)", "Laras (281..)"],
    Komet: ["Tama (281..)", "Indah (281..)", "Fikri (281..)"]
  };

  function showAnggota(nama) {
    const list = anggotaData[nama]
      .map((anggota, index) => `<li>${index + 1}. ${anggota}</li>`)
      .join('');
    document.getElementById("anggotaModalLabel").textContent = `Anggota ${nama}`;
    document.getElementById("modalContent").innerHTML = `<ul>${list}</ul>`;
  }

const modal = document.getElementById('detailModal');
  modal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const imgSrc = button.getAttribute('data-img-src');
    const modalImage = modal.querySelector('#modalImage');
    modalImage.src = imgSrc;
  });