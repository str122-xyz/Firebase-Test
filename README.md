# Latihan Firebase & Flutter Integration 🚀

Project ini adalah hasil pengerjaan **Tugas Week 10** untuk mata kuliah Pemrograman Mobile. Aplikasi ini mendemonstrasikan integrasi antara Flutter dengan backend Firebase Authentication, dilengkapi dengan UI Login yang modern dan Splash Screen.

## 📱 Fitur Utama
1.  **Splash Screen Animasi**: Intro aplikasi dengan logo "Tipis-Tipis" (🔥) dan efek transisi yang halus.
2.  **Login Page UI**: Tampilan login modern yang responsif dengan validasi input (Email & Password).
3.  **Firebase Auth**: Integrasi login penuh menggunakan backend Firebase Authentication.
4.  **Error Handling**: Menampilkan pesan error yang informatif jika login gagal (misal: password salah atau user tidak ditemukan).
5.  **Loading State**: Indikator loading pada tombol saat proses autentikasi berlangsung.

## 🛠️ Tech Stack & Tools
* **Flutter SDK**: Framework UI utama.
* **Firebase Authentication**: Layanan backend untuk manajemen user.
* **Postman**: Digunakan untuk pengujian API (Register & Login) sebelum integrasi.
* **VS Code**: Code Editor.

## 📝 Langkah Integrasi (Singkat)
Berikut adalah rangkuman proses integrasi yang dilakukan:

1.  **Setup Firebase Console**
    * Membuat project baru & mengaktifkan *Sign-in method* **Email/Password**.
    * Mengambil Web API Key untuk testing.

2.  **Pengujian API (Postman)**
    * Melakukan tes **Register** & **Login** via REST API untuk memastikan server aktif.

3.  **Konfigurasi Flutter**
    * Instalasi CLI: `npm install -g firebase-tools` & `flutterfire configure`.
    * Menambahkan paket: `firebase_core` dan `firebase_auth`.

4.  **Implementasi Code**
    * Inisialisasi `Firebase.initializeApp()` di `main.dart`.
    * Membuat logika login dengan `signInWithEmailAndPassword`.