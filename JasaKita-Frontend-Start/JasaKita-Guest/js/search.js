/* Pencarian: saring daftar saran saat mengetik */
const q = document.getElementById('q'), empty = document.getElementById('empty');
const items = [...document.querySelectorAll('.sug')];
function filter() {
  const v = q.value.trim().toLowerCase();
  let first = true;
  items.forEach(a => {
    const show = a.textContent.toLowerCase().includes(v);
    a.hidden = !show;
    a.classList.toggle('first', show && first && v !== '');
    if (show) first = false;
  });
  empty.hidden = !items.every(a => a.hidden);
}
q.addEventListener('input', filter);
document.getElementById('clear').addEventListener('click', () => { q.value = ''; filter(); q.focus(); });
filter();
