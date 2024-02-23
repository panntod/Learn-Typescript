# Express Typescript 🚀

## Deskripsi

Selamat datang di dokumentasi perjalanan saya dalam belajar TypeScript dengan Express! 👩‍💻 Dalam repo ini, saya mencatat pengalaman belajar TypeScript dari level zero (day 1). Meski belum pernah mencoba TypeScript sebelumnya, saya telah memahami bahasa pemrograman mirip seperti Golang dan Java, serta memiliki keahlian dalam JavaScript.

Untuk memaksimalkan pemahaman TypeScript, pastikan sudah memiliki basic skills berikut:
- Pemahaman Dasar JavaScript 🚀
- Node.js dan NPM 📦
- HTML dan CSS 💻
- Pemahaman Dasar Tentang REST API 🌐
- Penggunaan Terminal/Command Line 🛠️
- Pemahaman Tentang TDD (Test-Driven Development) 🧪

### Perbedaan JavaScript vs TypeScript

#### Tipe Data

**JavaScript:** Bersifat dinamis, tipe data ditentukan saat runtime.

**TypeScript:** Superset dari JavaScript dengan sistem tipe opsional.

#### Penggunaan Tipe

**JavaScript:** Tidak memiliki sistem tipe yang ketat.

**TypeScript:** Memiliki sistem tipe kuat untuk mencegah kesalahan.

#### Kompilasi

**JavaScript:** Dieksekusi langsung oleh mesin JavaScript di runtime.

**TypeScript:** Perlu dikompilasi menjadi JavaScript sebelum dijalankan.

#### Alat Bantu (Tooling)

**JavaScript:** Bergantung pada lingkungan pengembangan.

**TypeScript:** Dukungan lebih lanjut untuk alat bantu pengembangan.

#### Ekosistem

**JavaScript:** Ekosistem besar dan mapan dengan berbagai pustaka dan framework.

**TypeScript:** Kompatibel dengan ekosistem JavaScript, banyak proyek besar menggunakan TypeScript.

#### Pemrograman Berorientasi Objek

**JavaScript:** Mendukung paradigma pemrograman berorientasi objek.

**TypeScript:** Dukungan yang lebih baik untuk pemrograman berorientasi objek.

#### Penggunaan Default dan Opsional

**JavaScript:** Variabel dan parameter fungsi bersifat opsional.

**TypeScript:** Mendukung nilai default dan parameter opsional.

#### Komunitas dan Dukungan

**JavaScript:** Komunitas besar dan aktif.

**TypeScript:** Komunitas yang terus berkembang dengan dukungan dari Microsoft.

*Penting: TypeScript memberikan keleluasaan kepada pengembang dan dapat diintegrasikan bertahap ke dalam proyek JavaScript.*

### Fitur

Aplikasi ini akan menawarkan beberapa fitur menarik:
- Sistem CRUD 🗃️
- Koneksi dengan database (MySql) 🔄
- Endpoint 🌐
- Rest API 🚀
- Sequelize (versi js, untuk versi ts akan berada di repository lain) 🔍

## Konfigurasi project

1. lakukan konfigurasi dengan menginisialisasi npm:

```cmd
npm init -y
``` 
( fungsi `-y` adalah untuk automasi enter )

2. instal beberapa dependensi yang dibutuhkan seprti express body-parser dan lain nya:

```cmd
npm install express typescript @types/node @types/express ts-node mysql2
```

3. buatlah file baru bernama `tsconfig.json`, lalu isi dengan:

```json
tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

4. langkah ini opsional, namun saya rekomendasikan menginstal `ts-node-dev`:

opsional:
```
npm install ts-node-dev --save-dev
```

jika anda menginstal maka ubah script di `package.json` anda menjadi:
```json
"scripts": {
  "start": "ts-node-dev src/index.ts",
  "build": "tsc"
},
```

5. instal dependensi untuk meng-hash password (md5 / bcrypt), disini saya menggunakan `bcrypt`:

```
npm i --save-dev @types/bcrypt
``` 
( pastikan menginstal yang versi typescript)

6. buka file `tsconfig.json` dan tambahkan `allow js`:

```json
"allowJs": true
```

Kita sudah selesai setup untuk aplikasi kita, sekarang buat folder bernama `src` dan mulai meng-koding!!!

jalankan perintah:

```
cd src
```

Jalankan perintah untuk menginisiaisasi sequelize:
```
npx sequelize-cli init 
```

lalu lakukan perintah:
```
npx sequelize-cli model:generate --name user --attributes firstname:string,lastname:string,email:string,  password:string,role:string 
```
untuk membuat models dari user

lalu jalankan perintah:
```
npx sequelize-cli db:migrate
```
untuk migrate sebuah tabel didata base

## Reminder

Ingat dalam setiap pembuatran variabel harus memiliki tipe data seperti `string`, `integer`, atau lain nya. jika dirasa tidak mengetahui pasti apa tipe data dari sebuah variabel maka gunakan `any`

contoh: 

```ts 
import { Request, Response } from "express"; // lakukan import untuk dijadikan tipe data

export const getAllUser = async (req: Request, res: Response) => { // setelah penulisan req maka harus di ikuti dengan Request dari express  itu sendiri
  // code TODO here
}
```

Lain kondisi jika anda ingin menggunakan sebuaah `interface` 

Dalam TypeScript, interface adalah cara untuk mendefinisikan kontrak atau bentuk suatu objek. Interface digunakan untuk mendeklarasikan struktur tipe data dengan menyatakan nama, tipe, dan properti yang diharapkan dari suatu objek. Interfaces membantu dalam mencapai tingkat abstraksi dan memastikan bahwa objek yang diharapkan mematuhi struktur yang telah ditentukan.

contoh: 
```ts 
interface DataUser {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  password?: string;
}
```

mendeklarasikan interface dari data user, digunakan untuk mengirim data bisa jadi `POST`, `PATCH` atau `PUT`, jadi saya tidak perlu mendeklarasikan dua kali ketika menggunakan interface ini. untuk interface ini bersifat wajib harus dipenuhi, jika salah satu data tidak terisi maka akan muncul pesan error, namun bisa menambahkan `?` untuk menjadikan suatu data itu opsional

contoh:  

```ts  
let newUser: DataUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    role: req.body.role,
    password: bcrypt.hashSync(req.body.password, 10),
};
```
