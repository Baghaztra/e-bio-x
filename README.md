# E-Bio-X

Platform E-Learning Biologi berbasis web dengan mengimplementasikan algoritma K-Means dan Decision Tree dalam menganalisa performa siswa berdasarkan hasil kuis.

---

## Fitur Utama

* Sistem autentikasi multi-user (Admin, Guru, Siswa)
* Autentikasi menggunakan JWT atau Google OAuth
* **Fitur Guru:**

  * Manajemen kelas
  * Manajemen materi pembelajaran
  * Manajemen kuis
  * Analisis performa siswa
* **Fitur Siswa:**

  * Akses materi pembelajaran
  * Partisipasi dalam kuis
  * Melihat hasil kuis
* **Fitur Admin:**

  * Manajemen pengguna (Guru, Siswa)
  * Manajemen kelas (lihat dan hapus)
  * Manajemen materi (lihat dan hapus)

---

## Tech Stack

* **Frontend:**

  * Nuxt 3
  * Nuxt Toast
  * Nuxt Icon
  * Tailwind CSS
  * SweetAlert2

* **Backend:**

  * Flask
  * Flask-SQLAlchemy
  * Flask-Migrate
  * MySQL
  * JWT
  * Google OAuth

---

## Struktur Proyek

```
e-bio-x/
├── frontend/        # Nuxt frontend
│   ├── app/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── middleware/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── app.vue
│   ├── public/
│   ├── server/
│   ├── nuxt.config.ts
│   └── package.json
│
├── backend/         # Flask backend
│   ├── src/
│   │   ├── __init__.py
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── services/
│   │   └── models/
│   ├── app.py
│   └── requirements.txt
│
└── README.md
```

---

## Instalasi & Menjalankan Aplikasi

### 📦 Prasyarat

* Node.js & NPM
* Python 3.8+
* MySQL Server

---

### 🔧 Instalasi Frontend (Nuxt 3)

1. Masuk ke folder `frontend`

```bash
cd frontend
```

2. Install dependensi

```bash
npm install
```

3. Salin file `.env.example` ke `.env` dan sesuaikan konfigurasi

```bash
cp .env.example .env
```

4. Jalankan development server

```bash
npm run dev
```

---

### 🔧 Instalasi Backend (Flask)

1. Masuk ke folder `backend`

```bash
cd backend
```

2. Buat dan aktifkan virtual environment

```bash
python -m venv .venv
```

> Windows:

```bash
.venv\Scripts\activate
```

> Linux/Mac:

```bash
source .venv/bin/activate
```

3. Install dependensi

```bash
pip install -r requirements.txt
```

4. Salin file `.env.example` ke `.env` lalu sesuaikan isinya

```bash
cp .env.example .env
```

5. Simpan data *credentials* dari Google Developer Console ke `./src/config/credentials.json`

6. Buat database MySQL

```sql
CREATE DATABASE e_bio;
```

7. Migrasi database

```bash
flask db init
flask db migrate -m "Initial migration."
flask db upgrade
```

8. (Opsional) Seeder database dummy

```bash
python -m src.database.seeder
```

9. (Opsional) Reset database

```bash
python -m src.database.reset
```

10. Jalankan analisis kuis (di luar aplikasi)

```bash
python run_analysis.py <quiz_id>
```

*Ganti `<quiz_id>` dengan ID kuis yang ada di tabel `quiz` database.*

11. Jalankan aplikasi backend

```bash
python app.py
```

Backend akan berjalan di `http://localhost:5000`

---

#### Dibuat oleh:

Baghaztra Van Ril - 2025
