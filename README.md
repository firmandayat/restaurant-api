<h1>Submission for Expert Web Developer Bootcamp Coding Camp</h1>

Tugas akhir kelas ahli ini adalah membuat layanan katalog restoran online.

<h3>Submission Pertama</h4>

<h4>1. App Bar (Navigatin Bar)</h5>
<ul>
  <li>Menampilkan nama aplikasi atau brand logo dari aplikasi katalog restoran (tentukan sendiri nama aplikasi atau brand logonya).</li>
  <li>Terdapat navigation menu:</li>
  <ul>
    <li>Home → mengarah ke root domain.</li>
    <li>Favorite → target URL cukup bernilai “#” (Sebagai placeholder untuk digunakan pada submission selanjutnya).</li>
    <li>About Us → arahkan ke profil LinkedIn/Github/Social Media Anda, atau boleh juga ke personal web/blog.</li>
  </ul>
  <li>Terdapat fitur navigation drawer yang berfungsi dengan baik bila diakses pada layar seluler.</li>
</ul>

<h4>2. Hero Element (Jumbotron Element)</h4>
<ul>
  <li>Menampilkan hero element dengan gambar yang sudah ditentukan, silakan pilih salah satu aset yang disediakan di dalam starter proyek, src → public → images → hero.</li>
  <li>Gambar hero element yang ditampilkan haruslah full-width atau memenuhi persyaratan sebagai berikut:</li>
  <ul>
    <li>Tampilkan minimal dengan width 1000px pada ukuran viewport width >= 1200px.</li>
    <li>Jika ukuran viewport width < 1200px, hero element ditampilkan full-width.</li>
  </ul>
</ul>
      
<h4>3. Daftar Restoran</h4>
<ul>
  <li>Menampilkan daftar restoran berdasarkan data yang sudah disediakan di dalam project starter–lokasinya ada di src → public → data → DATA.json. Untuk menampilkannya dapat melalui cara hardcoded–dituliskan dalam HTML secara langsung–atau DOM manipulation menggunakan JavaScript.</li>
  <li>Wajib menampilkan nama, gambar, dan minimal salah satu di antara kota, rating, dan/atau deskripsi pada restoran.</li>
</ul>

<h4>4. Footer</h4>
<ul>
  <li>Terdapat footer yang ditampilkan di bawah halaman.</li>
  <li>Terdapat konten teks bebas sesuai dengan kreatifitas Anda. Misalnya, konten hak cipta yang mencangkup tahun dan nama aplikasi. Contoh: “Copyright © 2020 - Hunger Apps”.</li>
</ul>

<h4>5. Responsibilitas Tampilan</h4>
<ul>
  <li>Tampilan web app harus responsif pada seluruh ukuran layar (mobile - tablet - desktop). Utamakan tampilan mobile terlebih dahulu.</li>
  <li>Gunakan teknik Grid CSS atau Flexbox dalam menyusun layout. Bila terdapat float, submission Anda akan kami ditolak.</li>
  <li>Menetapkan ukuran viewport secara dinamis berdasarkan layar device yang digunakan.</li>
</ul>

<h4>6. Aksesibilitas Website</h4>
<ul>
  <li>Seluruh fungsionalitas website dapat dilakukan dengan menggunakan keyboard. Contohnya mengakses tombol hamburger button, mengakses tautan yang ada, dan lain sebagainya.</li>
  <li>Menerapkan teknik Skip to Content untuk melewati focus pada menu navigasi.</li>
  <li>Terdapat alternative teks pada seluruh gambar yang ditampilkan. Bila ada gambar yang tidak memiliki arti apa pun, cukup berikan atribut alt dengan nilai kosong. </li>
  <li>Dimensi touch target pada elemen yang diinteraksikan dengan touch harus memilliki ukuran elemen minimal 44x44px. Adapun beberapa contoh elemen tersebut meliputi button, anchor, input text, dan textarea. Pastikan juga terdapat jarak antar elemen tersebut supaya dimensi touch target tidak menumpuk.</li>
  <li>Menggunakan semantic element dalam menyusun struktur dan landmarking HTML.</li>
</ul>

<h4>Perhatian!</h4>
<p>Dalam mengerjakan submission ini, Anda tidak diperkenankan menggunakan CSSframework, seperti Bootstrap, Materialize, Tailwind, dll, yang dapat membantu dalam menyusun tampilan yang responsif. Tulislah kode CSS dari nol. Sistem layouting CSS murni saat ini sudahlah cukup powerful untuk membuat tampilan website responsif.</p>
      
<h3>Submission ke dua</h4>
<h4>1. Halaman Utama (Daftar Restoran)</h4>
<ul>
  <li>Menampilkan daftar restoran yang datanya bersumber dari API: restaurant-api.dicoding.dev. Silakan lihat dokumentasinya pada halaman tersebut.</li>
  <li>Wajib menampilkan nama, gambar, dan minimal salah satu di antara kota, rating, dan/atau deskripsi pada restoran.</li>
  <li>Ada tautan/CTA yang mengarah ke detail restoran pada setiap item-nya.</li>
  <li>Hero elemen tetap dipertahankan.</li>
</ul>

<h4>2. Halaman Detail Restoran</h4>
<ul>
  <li>Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.</li>
  <li>Pada halaman detail restoran harus berisi hal-hal berikut:</li>
  <ul>
    <li>Nama restoran</li>
    <li>Gambar</li>
    <li>Alamat</li>
    <li>Kota</li>
    <li>Deskripsi</li>
    <li>Menu Makanan</li>
    <li>Menu Minuman</li>
    <li>Customer Reviews</li>
  </ul>
  <li>Ada tombol favorite untuk memasukkan atau menghapus restoran favorit dari database. Penyimpanan ini menggunakan IndexedDB.</li>
</ul>

<h4>3. Halaman Daftar Restoran Favorit</h4>
<ul>
  <li>Halaman daftar restoran dapat diakses melalui menu navigasi favorit.</li>
  <li>Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).</li>
  <li>Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.</li>
  <li>Ada tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.</li>
</ul>

<h4>4. Native Capability</h4>
<ul>
  <li>Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apa pun, bahkan menggunakan workbox.</li>
  <li>Aplikasi harus menampilkan icon Add to Home Screen.</li>
  <li>Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.</li>
</ul>

<h4>5. Code Quality</h4>
<ul>
  <li>Gunakan ESLint sebagai linter kode JavaScript Anda. Anda WAJIB melampirkan berkas konfigurasi sebagai buktinya.</li>
  <li>Mengintegrasikan ESLint sharable config yang kami sediakan pada konfigurasi ESLint Anda: eslint-config-dicodingacademy.</li>
  <li>Periksa kembali sebelum mengirimkan submission project Anda. Penuhi seluruh kriteria yang ditetapkan dalam konfigurasi linter Anda. Kondisi terpenuhinya ditandai dengan tidak adanya error satupun ketika menjalankan eslint.</li>
</ul>

<h4>6. Pertahankan syarat yang ada pada submission sebelumnya</h4>
<ul>
  <li>Di antaranya, responsibilitas tampilan, aksesibilitas pada website, appbar, footer, dan sebagainya.</li>
</ul>

<h3>Submission ke tiga</h3>

<h4>1. Integration Test</h4>
<ul>
  <li>Menerapkan integration test untuk fungsi menyukai dan batal menyukai restoran.</li>
</ul>

<h4>2. End to End Test</h4>
<ul>
  <li>Menerapkan End to End Test dengan skenario:</li>
  <ul>
    <li>Menyukai salah satu restoran.</li>
    <li>Batal menyukai restoran tersebut.</li>
  </ul>
</ul>

<h4>3. Image Optimization</h4>
<ul>
  <li>Melakukan kompresi terhadap gambar hero yang digunakan. Ukuran gambar harus di bawah 200kb.</li>
  <li>Menerapkan teknik image responsive pada gambar hero. Resolusi gambar pada layar seluler dan desktop harus berbeda.</li>
  <li>Menerapkan teknik lazy loading pada gambar daftar restoran yang ditampilkan.</li>
</ul>

<h4>4. Bundle Optimization</h4>
<ul>
  <li>Memasang bundle analyzer pada proyek submission.</li>
  <li>Gunakan teknik Code Splitting untuk memisahkan vendor code dari kode asli yang Anda tuliskan.</li>
</ul>

<h4>5. Pertahankan syarat yang ada pada submission sebelumnya. Seperti penerapan PWA,</h4>
<ul>
  <li>Responsibilitas tampilan,  aksesibilitas pada website dan sebagainya.</li>
</ul>

<h3>Link project:</h3>
https://resto.firmandyt.my.id
