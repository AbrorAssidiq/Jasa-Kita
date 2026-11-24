/* ==========================================================
   Jasa Kita — Script bersama
   - Ikon SVG, navbar, bottom-nav (mobile), footer
   - Helper kartu penyedia, pencarian & filter
   - Validasi form login / daftar
   Dimuat setelah data.js
   ========================================================== */

/* ---------- Ikon ---------- */
const ICONS = {
  ac: '<rect x="3" y="4" width="18" height="8" rx="2"/><path d="M7 16c0 1.5-1 2-1 3.5M12 16v4M17 16c0 1.5 1 2 1 3.5"/>',
  motor: '<circle cx="5.5" cy="16.5" r="3"/><circle cx="18.5" cy="16.5" r="3"/><path d="M5.5 16.5l3-6.5h5l2.5 4 2.5 2.5M9 10L8 7.5H6M13.5 10l-1-2.5h3"/>',
  car: '<path d="M4 16v-4l2-5h12l2 5v4"/><path d="M3 16h18v3H3z"/><path d="M4 12h16"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  brick: '<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 10h18M3 15h18M9 5v5M15 10v5M9 15v4"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
  tire: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>',
  tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6"/><path d="M16 4.7a3.5 3.5 0 010 6.6M18 14.6c2 .7 3.5 2.6 3.5 5.4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff: '<path d="M3 3l18 18M10.6 5.1A9.7 9.7 0 0112 5c6.5 0 10 7 10 7a17 17 0 01-3.2 4.1M6.6 6.6A17 17 0 002 12s3.5 7 10 7c1.7 0 3.2-.4 4.5-1M9.9 9.9a3 3 0 004.2 4.2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>',
};

function icon(name, extra = "") {
  const fill = name === "star" && extra.includes("fill");
  return `<svg class="icon ${extra}" viewBox="0 0 24 24" aria-hidden="true"${fill ? ' fill="currentColor" stroke="none"' : ""}>${ICONS[name] || ""}</svg>`;
}

/* ---------- Utilitas ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");
const param = (key) => new URLSearchParams(location.search).get(key);
const getKategori = (id) => KATEGORI.find((k) => k.id === id);
const getPenyedia = (id) => PENYEDIA.find((p) => p.id === Number(id));
const jumlahPenyedia = (idKat) => PENYEDIA.filter((p) => p.kategori === idKat).length;
const inisial = (nama) => nama.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function toast(pesan) {
  let el = $(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.textContent = pesan;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 3200);
}

/* ---------- Layout: navbar, bottom-nav, footer ---------- */
const MENU = [
  { href: "beranda.html", label: "Beranda", page: "beranda", ikon: "home" },
  { href: "kategori.html", label: "Kategori", page: "kategori", ikon: "grid" },
  { href: "pencarian.html", label: "Pencarian", page: "pencarian", ikon: "search" },
  { href: "penyedia.html", label: "Penyedia Jasa", page: "penyedia", ikon: "users" },
  { href: "profil.html", label: "Profil", page: "profil", ikon: "user" },
];

function renderLayout() {
  const page = document.body.dataset.page;
  const header = $("#app-header");
  const footer = $("#app-footer");

  if (header) {
    const aktif = page === "detail" ? "penyedia" : page;
    header.outerHTML = `
      <header class="navbar">
        <div class="container">
          <a class="brand" href="beranda.html" aria-label="Jasa Kita, ke beranda">
            <img src="assets/img/logo.png" alt="" width="42" height="42">
            <span>Jasa <b>Kita</b></span>
          </a>
          <nav class="nav-links" aria-label="Menu utama">
            ${MENU.filter((m) => m.page !== "profil")
              .map((m) => `<a href="${m.href}" class="${m.page === aktif ? "active" : ""}">${m.label}</a>`)
              .join("")}
          </nav>
          <div class="nav-actions">
            <a class="btn btn-ghost" href="login.html">Masuk</a>
            <a class="btn btn-primary" href="daftar.html">Daftar</a>
          </div>
        </div>
      </header>`;
    document.body.classList.add("has-bottom-nav");
    const nav = document.createElement("nav");
    nav.className = "bottom-nav";
    nav.setAttribute("aria-label", "Menu bawah");
    const bottomMenu = MENU.map((m) => (m.page === "penyedia" ? { ...m, label: "Penyedia" } : m));
    nav.innerHTML = bottomMenu
      .map((m) => `<a href="${m.href}" class="${m.page === aktif ? "active" : ""}">${icon(m.ikon)}<span>${m.label}</span></a>`)
      .join("");
    document.body.appendChild(nav);
  }

  if (footer) {
    footer.outerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <a class="brand" href="beranda.html"><img src="assets/img/logo.png" alt="" width="42" height="42"><span>Jasa <b>Kita</b></span></a>
              <p>Platform yang mempertemukan pelanggan dengan penyedia jasa kendaraan dan perbaikan rumah terpercaya di sekitar Anda.</p>
            </div>
            <div>
              <h4>Jelajahi</h4>
              <ul>
                <li><a href="kategori.html">Kategori Jasa</a></li>
                <li><a href="penyedia.html">Penyedia Jasa</a></li>
                <li><a href="pencarian.html">Pencarian</a></li>
              </ul>
            </div>
            <div>
              <h4>Akun</h4>
              <ul>
                <li><a href="login.html">Masuk</a></li>
                <li><a href="daftar.html?peran=customer">Daftar sebagai Customer</a></li>
                <li><a href="daftar.html?peran=provider">Daftar sebagai Provider</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} Jasa Kita. Seluruh hak dilindungi.</span>
            <span>Dibuat untuk proyek magang.</span>
          </div>
        </div>
      </footer>`;
  }
}

/* ---------- Komponen: kartu ---------- */
function kartuKategori(k) {
  const n = jumlahPenyedia(k.id);
  return `
    <a class="cat-card" href="pencarian.html?kategori=${k.id}">
      <span class="cat-icon">${icon(k.ikon)}</span>
      <h3>${esc(k.nama)}</h3>
      <p>${esc(k.deskripsi)}</p>
      <span class="count">${n} penyedia</span>
    </a>`;
}

function kartuPenyedia(p) {
  const kat = getKategori(p.kategori);
  return `
    <a class="prov-card" href="detail-penyedia.html?id=${p.id}">
      <div class="prov-top">
        <span class="avatar" style="background:${p.warna}">${inisial(p.nama)}</span>
        <div>
          <h3>${esc(p.nama)}</h3>
          <span class="cat">${esc(kat.nama)}</span>
        </div>
      </div>
      <p class="prov-desc">${esc(p.deskripsi)}</p>
      <div class="prov-meta">
        <span class="rating">${icon("star", "fill")}${p.rating.toFixed(1)} <small>(${p.ulasan})</small></span>
        <span>${icon("pin")}${esc(p.lokasi)}</span>
      </div>
      <div class="prov-foot">
        <span class="price">Mulai dari<b>${rupiah(p.tarif)}</b></span>
        <span class="btn btn-outline" style="padding:8px 14px">Lihat detail</span>
      </div>
    </a>`;
}

function kosong(judul, teks) {
  return `
    <div class="empty" style="grid-column:1/-1">
      <span class="cat-icon">${icon("search")}</span>
      <h3>${judul}</h3>
      <p>${teks}</p>
    </div>`;
}

/* ---------- Halaman: Beranda ---------- */
function initBeranda() {
  $("#cat-grid").innerHTML = KATEGORI.slice(0, 8).map(kartuKategori).join("");
  const unggulan = [...PENYEDIA].sort((a, b) => b.rating - a.rating || b.ulasan - a.ulasan).slice(0, 3);
  $("#prov-grid").innerHTML = unggulan.map(kartuPenyedia).join("");
  $("#stat-penyedia").textContent = PENYEDIA.length + "+";
  $("#stat-kategori").textContent = KATEGORI.length;

  $("#hero-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $("#hero-q").value.trim();
    location.href = "pencarian.html" + (q ? "?q=" + encodeURIComponent(q) : "");
  });
}

/* ---------- Halaman: Kategori ---------- */
function initKategori() {
  $("#cat-grid").innerHTML = KATEGORI.map(kartuKategori).join("");
}

/* ---------- Halaman: Pencarian (nama + filter) ---------- */
function initPencarian() {
  const q = $("#q"), kat = $("#f-kategori"), lok = $("#f-lokasi"), rat = $("#f-rating"), urut = $("#f-urut");
  const hasil = $("#hasil"), jumlah = $("#jumlah");

  kat.innerHTML = '<option value="">Semua kategori</option>' + KATEGORI.map((k) => `<option value="${k.id}">${k.nama}</option>`).join("");
  lok.innerHTML = '<option value="">Semua lokasi</option>' + LOKASI.map((l) => `<option>${l}</option>`).join("");

  q.value = param("q") || "";
  kat.value = param("kategori") || "";

  function render() {
    const kata = q.value.trim().toLowerCase();
    let data = PENYEDIA.filter((p) => {
      const k = getKategori(p.kategori);
      const cocokKata = !kata || p.nama.toLowerCase().includes(kata) || k.nama.toLowerCase().includes(kata) || p.layanan.some((l) => l[0].toLowerCase().includes(kata));
      return cocokKata && (!kat.value || p.kategori === kat.value) && (!lok.value || p.lokasi === lok.value) && p.rating >= Number(rat.value || 0);
    });
    if (urut.value === "rating") data.sort((a, b) => b.rating - a.rating);
    if (urut.value === "murah") data.sort((a, b) => a.tarif - b.tarif);
    if (urut.value === "ulasan") data.sort((a, b) => b.ulasan - a.ulasan);

    jumlah.textContent = data.length;
    hasil.innerHTML = data.length
      ? data.map(kartuPenyedia).join("")
      : kosong("Penyedia tidak ditemukan", "Coba ubah kata kunci atau longgarkan filter yang dipakai.");
  }

  [q, kat, lok, rat, urut].forEach((el) => el.addEventListener("input", render));
  $("#search-form").addEventListener("submit", (e) => { e.preventDefault(); render(); });
  $("#reset").addEventListener("click", () => {
    q.value = ""; kat.value = ""; lok.value = ""; rat.value = ""; urut.value = "";
    render();
  });
  render();
}

/* ---------- Halaman: Daftar Penyedia ---------- */
function initPenyedia() {
  const chips = $("#chips"), grid = $("#prov-grid"), jumlah = $("#jumlah");
  let aktif = param("kategori") || "";

  function render() {
    chips.innerHTML =
      `<button class="chip ${aktif === "" ? "active" : ""}" data-k="">Semua</button>` +
      KATEGORI.map((k) => `<button class="chip ${aktif === k.id ? "active" : ""}" data-k="${k.id}">${k.nama}</button>`).join("");
    const data = PENYEDIA.filter((p) => !aktif || p.kategori === aktif);
    jumlah.textContent = data.length;
    grid.innerHTML = data.length ? data.map(kartuPenyedia).join("") : kosong("Belum ada penyedia", "Penyedia pada kategori ini akan segera tersedia.");
  }
  chips.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    aktif = b.dataset.k;
    render();
  });
  render();
}

/* ---------- Halaman: Detail Penyedia ---------- */
function initDetail() {
  const p = getPenyedia(param("id"));
  const root = $("#detail-root");
  if (!p) {
    root.innerHTML = `<div class="container" style="padding-top:48px">${kosong("Penyedia tidak ditemukan", 'Kembali ke <a href="penyedia.html">daftar penyedia jasa</a>.')}</div>`;
    return;
  }
  const kat = getKategori(p.kategori);
  document.title = `${p.nama} — Jasa Kita`;
  const kembali = encodeURIComponent(`detail-penyedia.html?id=${p.id}`);
  const ulasan = [0, 1, 2].map((i) => ULASAN[(p.id + i) % ULASAN.length]);

  root.innerHTML = `
    <div class="page-head">
      <div class="container">
        <nav class="breadcrumb" aria-label="Jejak halaman">
          <a href="beranda.html">Beranda</a><span>/</span><a href="penyedia.html">Penyedia Jasa</a><span>/</span><span>${esc(p.nama)}</span>
        </nav>
        <div class="detail-hero">
          <span class="avatar" style="background:${p.warna}">${inisial(p.nama)}</span>
          <div>
            <h1>${esc(p.nama)}</h1>
            <div class="meta">
              <span class="badge">${icon("tag")}${esc(kat.nama)}</span>
              <span class="badge green">${icon("shield")}Terverifikasi</span>
              <span class="rating">${icon("star", "fill")}${p.rating.toFixed(1)} <small>(${p.ulasan} ulasan)</small></span>
              <span>${icon("pin")}${esc(p.lokasi)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container detail">
      <div>
        <section class="card">
          <h2>Tentang penyedia</h2>
          <p style="color:var(--ink-2)">${esc(p.deskripsi)}</p>
          <div class="info-grid">
            <div><small>Pengalaman</small><b>${p.pengalaman} tahun</b></div>
            <div><small>Jam operasional</small><b>${esc(p.jam)}</b></div>
            <div><small>Area layanan</small><b>${esc(p.lokasi)} dan sekitarnya</b></div>
          </div>
        </section>

        <section class="card">
          <h2>Layanan &amp; estimasi harga</h2>
          <ul class="service-list">
            ${p.layanan.map((l) => `<li><span>${esc(l[0])}</span><b>${rupiah(l[1])}</b></li>`).join("")}
          </ul>
          <p style="font-size:13px;color:var(--muted);margin-top:16px">Harga bersifat estimasi dan dapat berubah sesuai kondisi di lapangan.</p>
        </section>

        <section class="card">
          <h2>Ulasan pelanggan</h2>
          ${ulasan.map((u) => `
            <div class="review">
              <div class="review-top"><span>${esc(u.nama)}</span><span class="rating">${icon("star", "fill")}${u.nilai}.0</span></div>
              <p>${esc(u.teks)}</p>
            </div>`).join("")}
        </section>
      </div>

      <aside class="aside-sticky">
        <div class="card">
          <div class="price-big">Mulai dari<b>${rupiah(p.tarif)}</b></div>
          <div class="lock-box">
            ${icon("lock")}
            <span>Kontak dan pemesanan hanya tersedia untuk pengguna yang sudah masuk.</span>
          </div>
          <a class="btn btn-primary btn-block btn-lg" href="wajib-login.html?kembali=${kembali}">Pesan Sekarang</a>
          <a class="btn btn-outline btn-block" href="wajib-login.html?kembali=${kembali}">${icon("phone")}Hubungi Penyedia</a>
        </div>
      </aside>
    </div>`;
}

/* ---------- Halaman: Wajib Login ---------- */
function initWajibLogin() {
  const kembali = param("kembali");
  const aman = kembali && /^[\w\-./?=&%]+$/.test(kembali) && !/^(https?:)?\/\//.test(kembali) ? kembali : "beranda.html";
  $("#btn-kembali").href = aman;
  const next = encodeURIComponent(aman);
  $("#btn-masuk").href = "login.html?kembali=" + next;
  $("#btn-daftar").href = "daftar.html?kembali=" + next;
}

/* ---------- Auth: tampil/sembunyi password ---------- */
function initTogglePassword() {
  $$(".toggle-pass").forEach((btn) => {
    const input = btn.parentElement.querySelector("input");
    btn.innerHTML = icon("eye");
    btn.addEventListener("click", () => {
      const tampil = input.type === "password";
      input.type = tampil ? "text" : "password";
      btn.innerHTML = icon(tampil ? "eyeoff" : "eye");
      btn.setAttribute("aria-label", tampil ? "Sembunyikan password" : "Tampilkan password");
    });
  });
}

/* ---------- Auth: validasi sederhana ---------- */
function setError(input, pesan) {
  const err = input.closest(".field").querySelector(".field-error");
  input.classList.toggle("invalid", !!pesan);
  if (err) err.textContent = pesan || "";
  return !pesan;
}
const emailValid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const hpValid = (v) => /^(\+62|62|0)8[0-9]{8,12}$/.test(v.replace(/[\s-]/g, ""));

function initLogin() {
  const form = $("#form-login");
  const id = $("#id"), pw = $("#password");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = id.value.trim();
    const ok = [
      setError(id, !v ? "Email atau nomor HP wajib diisi" : emailValid(v) || hpValid(v) ? "" : "Format email atau nomor HP tidak valid"),
      setError(pw, !pw.value ? "Password wajib diisi" : pw.value.length < 6 ? "Password minimal 6 karakter" : ""),
    ].every(Boolean);
    if (ok) toast("Data valid. Autentikasi akan tersambung setelah backend siap.");
  });
}

function initDaftar() {
  const form = $("#form-daftar");
  const seg = $$(".segment button");
  const blokProvider = $(".provider-only");
  const selKat = $("#kategori");
  let peran = param("peran") === "provider" ? "provider" : "customer";

  selKat.innerHTML = '<option value="">Pilih kategori jasa</option>' + KATEGORI.map((k) => `<option value="${k.id}">${k.nama}</option>`).join("");

  function setPeran(p) {
    peran = p;
    seg.forEach((b) => b.classList.toggle("active", b.dataset.peran === p));
    blokProvider.classList.toggle("show", p === "provider");
  }
  seg.forEach((b) => b.addEventListener("click", () => setPeran(b.dataset.peran)));
  setPeran(peran);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = $("#nama"), email = $("#email"), hp = $("#hp"), pw = $("#password"), pw2 = $("#password2"), setuju = $("#setuju");
    const hasil = [
      setError(nama, nama.value.trim().length < 3 ? "Nama lengkap minimal 3 karakter" : ""),
      setError(email, !emailValid(email.value.trim()) ? "Format email tidak valid" : ""),
      setError(hp, !hpValid(hp.value) ? "Nomor HP tidak valid (contoh: 081234567890)" : ""),
      setError(pw, pw.value.length < 6 ? "Password minimal 6 karakter" : ""),
      setError(pw2, pw2.value !== pw.value ? "Konfirmasi password tidak sama" : ""),
    ];
    if (peran === "provider") {
      hasil.push(setError($("#usaha"), $("#usaha").value.trim().length < 3 ? "Nama usaha wajib diisi" : ""));
      hasil.push(setError(selKat, !selKat.value ? "Pilih kategori jasa" : ""));
    }
    if (!setuju.checked) { toast("Setujui syarat dan ketentuan terlebih dahulu."); return; }
    if (hasil.every(Boolean)) toast(`Data pendaftaran ${peran === "provider" ? "Provider" : "Customer"} valid. Penyimpanan akun akan tersambung setelah backend siap.`);
  });
}

/* ---------- Splash ---------- */
function initSplash() {
  const tujuan = sessionStorage.getItem("jk_sudah_lihat") ? "beranda.html" : "akses.html";
  try { sessionStorage.setItem("jk_sudah_lihat", "1"); } catch (_) {}
  setTimeout(() => { location.replace(tujuan); }, 2700);
}

/* ---------- Inisialisasi ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderLayout();
  initTogglePassword();
  const peta = {
    splash: initSplash,
    beranda: initBeranda,
    kategori: initKategori,
    pencarian: initPencarian,
    penyedia: initPenyedia,
    detail: initDetail,
    wajiblogin: initWajibLogin,
    login: initLogin,
    daftar: initDaftar,
  };
  const fn = peta[document.body.dataset.page];
  if (fn) fn();
});
