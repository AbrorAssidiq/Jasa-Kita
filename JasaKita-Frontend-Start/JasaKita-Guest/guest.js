// Interaksi frontend demo, belum terhubung backend.
document.querySelectorAll('[data-demo]').forEach(el=>el.addEventListener('click',e=>{
 e.preventDefault(); alert('Ini prototipe frontend. Fitur ini akan dihubungkan pada tahap berikutnya.');
}));
const form=document.querySelector('#search-form');
if(form) form.addEventListener('submit',e=>{
 e.preventDefault();
 const params=new URLSearchParams({keyword:document.querySelector('#keyword')?.value.trim()||'',category:document.querySelector('#category')?.value||'',location:document.querySelector('#location')?.value.trim()||''});
 location.href=`search.html?${params.toString()}`;
});
