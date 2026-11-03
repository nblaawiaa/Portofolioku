/* DATA PORTOFOLIO: */

var CONTACT = { email: "wiaanda09@gmail.com", linkedin: "www.linkedin.com/in/nabilawiaanda", github: "https://github.com/nblaawiaa" };

var T = {
  id: {
    n_home: "Beranda", n_about: "Tentang", n_skills: "Keahlian", n_proj: "Proyek", n_contact: "Kontak",
    eyebrow: "Portofolio data & machine learning 2026", hello: "Halo, saya",
    lead: "Mahasiswa S1 Teknik Informatika Universitas Gunadarma yang fokus pada pengolahan data, analisis data, dan machine learning. Saya mengubah data mentah menjadi model dan wawasan yang bisa dipakai.",
    cta1: "Lihat Proyek Saya", cta2: "Hubungi Saya",
    ro_l: "Proyek unggulan · Penulisan Ilmiah", ro_t: "Klasifikasi kejernihan air (jernih / keruh)", ro_a: "akurasi data uji", live: "Terbuka untuk kolaborasi",
    about_l: "Tentang saya", about_t: "Belajar dari data, tumbuh lewat proyek",
    about1: "Saya mahasiswa Teknik Informatika yang sedang mengembangkan kemampuan di bidang pengolahan data, analisis data, dan machine learning.",
    about2: "Saya senang mempelajari hal baru dan berkembang lewat proyek serta pengalaman kerja. Saya paling tertarik menerapkan data dan machine learning pada masalah nyata di sekitar kita.",
    st1: "Semester", st2: "Akurasi model PI", st3: "Citra dataset", now: "Sekarang",
    tl1_t: "S1 Teknik Informatika", tl1_p: "Mata kuliah seputar basis data, rekayasa perangkat lunak, analisis dan perancangan sistem, serta analisis data. Sedang di semester 7.",
    tl2_p: "Mendampingi mahasiswa selama sesi praktikum laboratorium, membantu mengerjakan latihan teknis dan memahami materi kuliah.",
    tl3_t: "Penulisan Ilmiah: Klasifikasi Kejernihan Air", tl3_m: "Proyek akhir · Hybrid CNN + Random Forest",
    tl3_p: "Membangun, menguji, dan mendeploy model klasifikasi citra air dengan Streamlit, lalu menulis laporan penelitiannya.",
    sk_l: "Keahlian", sk_t: "Perangkat yang saya pakai", sk_s: "Dari data mentah sampai hasil yang bisa dijalankan dan dijelaskan.",
    sk1: "Machine Learning", sk2: "Analisis Data", sk3: "Tools & Deployment", sk4: "Sistem & Dokumentasi",
    pr_l: "Proyek", pr_t: "Karya terpilih", pr_s: "Klik kartu untuk melihat detail proyek.",
    ct_l: "Kontak", ct_t: "Mari bekerja sama",
    ct_p: "Saya tersedia untuk magang, proyek freelance, dan kerja remote di bidang data dan teknologi. Kirim pesan dan saya akan membalas secepatnya.",
    copy: "Salin", copied: "Tersalin", close: "Tutup", foot: "Teknik Informatika, Universitas Gunadarma", detail: "Lihat detail →",
    f_all: "Semua", f_ml: "Machine Learning", f_da: "Analisis Data", f_sys: "Sistem", themeLbl: "Tema", langAria: "Ganti bahasa",
    roles: ["Data Science Enthusiast", "Data Analyst", "Machine Learning Learner"]
  },
  en: {
    n_home: "Home", n_about: "About", n_skills: "Skills", n_proj: "Projects", n_contact: "Contact",
    eyebrow: "Data & machine learning portfolio 2026", hello: "Hi, I'm",
    lead: "Informatics Engineering student at Universitas Gunadarma focused on data processing, data analysis, and machine learning. I turn raw data into models and insights people can use.",
    cta1: "View My Projects", cta2: "Contact Me",
    ro_l: "Featured project · Final paper", ro_t: "Water clarity classifier (clear / turbid)", ro_a: "test accuracy", live: "Open for collaboration",
    about_l: "About me", about_t: "Learning from data, growing through projects",
    about1: "I'm an Informatics Engineering student building my skills in data processing, data analysis, and machine learning.",
    about2: "I enjoy learning new things and growing through projects and work experience. I'm most interested in applying data and machine learning to real problems around us.",
    st1: "Semesters", st2: "Final paper accuracy", st3: "Dataset images", now: "Present",
    tl1_t: "B.Sc. Informatics Engineering", tl1_p: "Coursework across databases, software engineering, systems analysis and design, and data analysis. Currently in semester 7.",
    tl2_p: "Supported students during lab practicum sessions, helping them work through technical exercises and course material.",
    tl3_t: "Final Paper: Water Clarity Classification", tl3_m: "Capstone · Hybrid CNN + Random Forest",
    tl3_p: "Built, tested, and deployed an image classifier for water clarity with Streamlit, then wrote up the research.",
    sk_l: "Skills", sk_t: "What I work with", sk_s: "From raw data to results that run and can be explained.",
    sk1: "Machine Learning", sk2: "Data Analysis", sk3: "Tools & Deployment", sk4: "Systems & Documentation",
    pr_l: "Projects", pr_t: "Selected work", pr_s: "Click a card to see the project details.",
    ct_l: "Contact", ct_t: "Let's work together",
    ct_p: "I'm available for internships, freelance projects, and remote work in data and technology. Send a message and I'll reply as soon as I can.",
    copy: "Copy", copied: "Copied", close: "Close", foot: "Informatics Engineering, Universitas Gunadarma", detail: "View details →",
    f_all: "All", f_ml: "Machine Learning", f_da: "Data Analysis", f_sys: "Systems", themeLbl: "Theme", langAria: "Switch language",
    roles: ["Data Science Enthusiast", "Data Analyst", "Machine Learning Learner"]
  }
};

var PROJECTS = [
  { cat: "ml", viz: "ml", tech: ["Python", "CNN", "Random Forest", "Streamlit"],
    id: { tag: "Penulisan Ilmiah", title: "Klasifikasi Kejernihan Air dengan Hybrid CNN + Random Forest",
      desc: "Pengklasifikasi citra biner yang melabeli air sebagai jernih atau keruh. CNN empat blok mengekstrak fitur, Random Forest 200 pohon mengambil keputusan akhir.",
      pts: ["Akurasi 96% untuk model hybrid, dibanding 91% untuk CNN saja.", "572 citra asli (286 per kelas) diaugmentasi menjadi 1.000, dibagi 800 / 100 / 100 untuk latih, validasi, dan uji.", "Memperbaiki loop augmentasi, menstabilkan BatchNormalization, dan membuat hasil dapat direproduksi di Kaggle.", "Aplikasi Streamlit diuji dengan tabel black-box testing sembilan skenario."] },
    en: { tag: "Final paper", title: "Water Clarity Classification with Hybrid CNN + Random Forest",
      desc: "A binary image classifier that labels water as clear or turbid. A four-block CNN extracts features and a 200-tree Random Forest makes the final call.",
      pts: ["96% accuracy for the hybrid model versus 91% for the CNN alone.", "572 original images (286 per class) augmented to 1,000, split 800 / 100 / 100 for train, validation, and test.", "Fixed an augmentation loop, stabilised BatchNormalization, and made results reproducible on Kaggle.", "Streamlit app validated with a nine-scenario black-box test table."] } },
  { cat: "da", viz: "da", tech: ["Python", "EDA", "Data Cleaning"],
    id: { tag: "Tugas kuliah", title: "Analisis Perjalanan Ford GoBike",
      desc: "Analisis eksploratif dataset bike-share Ford GoBike Februari 2019 untuk mata kuliah Associate Data Analyst.",
      pts: ["Membersihkan data dan memahami struktur kolom.", "Menyaring usia anggota ke batas 65 tahun agar data tetap realistis.", "Menyiapkan data untuk visualisasi dan analisis lanjutan."] },
    en: { tag: "Coursework", title: "Ford GoBike Trip Analysis",
      desc: "Exploratory analysis of the February 2019 Ford GoBike bike-share dataset for the Associate Data Analyst course.",
      pts: ["Cleaned the data and examined the column structure.", "Filtered member age to a 65-year limit to keep the data realistic.", "Prepared the data for visualisation and further analysis."] } },
  { cat: "sys", viz: "sys", tech: ["UML", "PlantUML", "QFD", "UAT"],
    id: { tag: "Tugas kuliah", title: "Dokumentasi Perancangan Sistem",
      desc: "Pemodelan sistem dengan diagram UML dan PlantUML, serta perencanaan kualitas dengan QFD dan user acceptance testing.",
      pts: ["Membuat diagram UML dengan PlantUML.", "Menyusun rencana kualitas dengan QFD.", "Merancang skenario UAT untuk memeriksa kebutuhan pengguna."] },
    en: { tag: "Coursework", title: "System Design Documentation",
      desc: "System modelling with UML and PlantUML diagrams, plus quality planning with QFD and user acceptance testing.",
      pts: ["Drew UML diagrams with PlantUML.", "Built a quality plan with QFD.", "Designed UAT scenarios to check user requirements."] } }
];

var VIZ = {
  ml: '<svg viewBox="0 0 200 120" role="img" aria-label="CNN 91 persen, hybrid 96 persen"><rect x="14" y="26" width="172" height="18" rx="9" fill="var(--line)"/><rect x="14" y="26" width="157" height="18" rx="9" fill="var(--muted)" opacity=".6"/><rect x="14" y="62" width="172" height="18" rx="9" fill="var(--line)"/><rect x="14" y="62" width="165" height="18" rx="9" fill="var(--accent)"/><text x="14" y="18" font-size="10" fill="var(--muted)" font-family="monospace">CNN 91%</text><text x="14" y="55" font-size="10" fill="var(--fg)" font-family="monospace">HYBRID 96%</text><circle cx="40" cy="102" r="4" fill="var(--accent2)"/><circle cx="60" cy="102" r="4" fill="var(--accent2)" opacity=".6"/><circle cx="80" cy="102" r="4" fill="var(--accent2)" opacity=".35"/></svg>',
  da: '<svg viewBox="0 0 200 120" role="img" aria-label="Diagram batang"><line x1="14" y1="100" x2="186" y2="100" stroke="var(--line)" stroke-width="2"/><rect x="24" y="62" width="22" height="38" rx="4" fill="var(--muted)" opacity=".5"/><rect x="58" y="38" width="22" height="62" rx="4" fill="var(--muted)" opacity=".5"/><rect x="92" y="20" width="22" height="80" rx="4" fill="var(--accent)"/><rect x="126" y="46" width="22" height="54" rx="4" fill="var(--muted)" opacity=".5"/><rect x="160" y="70" width="22" height="30" rx="4" fill="var(--muted)" opacity=".5"/></svg>',
  sys: '<svg viewBox="0 0 200 120" role="img" aria-label="Diagram UML"><rect x="12" y="14" width="64" height="34" rx="6" fill="none" stroke="var(--accent)" stroke-width="2"/><rect x="124" y="14" width="64" height="34" rx="6" fill="none" stroke="var(--muted)" stroke-width="2"/><rect x="68" y="76" width="64" height="34" rx="6" fill="none" stroke="var(--accent2)" stroke-width="2"/><path d="M76 31H124M44 48V62H100V76M156 48V62H100" fill="none" stroke="var(--line)" stroke-width="2"/></svg>'
};

