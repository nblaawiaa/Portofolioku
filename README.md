# Portofolio Nabilah Ismah Wiananda

Website portofolio statis (HTML, CSS, JavaScript). Tanpa build step.

## Struktur
- `index.html` : struktur halaman dan teks bahasa Indonesia
- `style.css` : tampilan, warna (variabel di `:root`), tema terang/gelap
- `data.js` : kontak, terjemahan ID/EN, dan daftar proyek
- `script.js` : logika (filter proyek, modal, ganti bahasa/tema, animasi teks)

## Yang perlu diganti
1. Buka `data.js`, ubah `CONTACT` (email, LinkedIn, GitHub).
2. Tambah proyek di array `PROJECTS`. Salin satu objek, ubah `cat` (`ml`, `da`, atau `sys`), `tech`, serta teks `id` dan `en`. Pilihan gambar kartu ada di `viz` (`ml`, `da`, `sys`).
3. Ganti teks yang tampil di hero/tentang lewat `index.html` (versi ID) dan `data.js` (`T.id` dan `T.en`).
4. Ganti warna lewat variabel `--accent` dan `--accent2` di `style.css`.
5. Ganti judul peran yang berganti-ganti di hero lewat `roles` di `data.js`.

## Jalankan lokal
Buka `index.html` di browser, atau `python3 -m http.server` lalu buka http://localhost:8000.

## Publikasi dengan GitHub Pages
1. Buat repository baru di GitHub, misalnya `portfolio`.
2. Upload semua file di folder ini ke repository.
3. Buka Settings, Pages, pilih branch `main` dan folder `/ (root)`, lalu Save.
4. Situs aktif di `https://USERNAME.github.io/portfolio/`.
