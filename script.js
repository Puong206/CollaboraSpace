// Fungsi untuk menampilkan popup notifikasi yang menarik
function showNotification(message, type = 'success') {
    // Cek jika sudah ada notifikasi, hapus dulu
    const existingNotif = document.querySelector('.custom-notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Buat elemen notifikasi baru
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    
    // Tentukan ikon berdasarkan tipe notifikasi
    let icon = 'fa-check-circle';
    if (type === 'error') {
        icon = 'fa-exclamation-circle';
    } else if (type === 'info') {
        icon = 'fa-info-circle';
    }
    
    // Set HTML konten notifikasi
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${icon}"></i>
            <p>${message}</p>
        </div>
        <button onclick="closeNotification()" class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Tambahkan notifikasi ke body
    document.body.appendChild(notification);
    
    // Animasi tampil
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Otomatis hilang setelah 5 detik
    setTimeout(() => {
        closeNotification();
    }, 5000);
}

// Fungsi untuk menutup notifikasi
function closeNotification() {
    const notification = document.querySelector('.custom-notification');
    if (notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }
}

function kirimFormulir() {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const minat = document.getElementById('minat').value;
    
    // Validasi sederhana
    if (nama === "" || email === "" || minat === "") {
        showNotification('Mohon lengkapi semua field yang diperlukan', 'error');
        return;
    }
    
    // Tampilkan pesan sukses dengan popup yang menarik
    showNotification(`Terima kasih ${nama}! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.`);
    
    // Reset formulir
    document.getElementById('contact-form').reset();
}

// Inisialisasi untuk form kontak
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            kirimFormulir();
        });
    }
});