/* Splash: setelah 2,8 detik zoom keluar lalu pindah ke Akses Tanpa Akun */
setTimeout(() => {
  document.body.classList.add('leaving');
  setTimeout(() => location.replace('access.html'), 400);
}, 2800);
