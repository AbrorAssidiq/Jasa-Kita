/* Tampilan web: ilustrasi bergeser halus mengikuti kursor */
const art = document.querySelector('.art-move');
if (art && matchMedia('(hover:hover)').matches) {
  addEventListener('mousemove', e => {
    const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
    art.style.transform = `translate(${x * -22}px, ${y * -14}px)`;
  });
}
