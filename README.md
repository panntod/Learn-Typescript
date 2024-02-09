# Sales Ticket Typescript

## Deskripsi

Dalam repo ini, berisikan dokumentasi belajar typescript dari saya ( day 1 ) yang belum pernah mencoba menggunakan typescript. namun sudah berpengalaman menggunakan bahasa yang mirip seperti golang dan java, dan memiliki keahlian dalam menggunakan javascript. Untuk melanjutkan pemahaman menggunakan typescript pastikan sudah memiliki basic skill yaitu:
- Pemahaman Dasar JavaScript: TypeScript adalah superset dari JavaScript, sehingga memiliki pemahaman yang baik tentang JavaScript sangat penting. Pastikan Anda mengerti konsep dasar seperti variabel, tipe data, fungsi, struktur kontrol (if, else, switch), dan objek.
- Node.js dan NPM: Mengetahui cara menggunakan Node.js dan NPM (Node Package Manager) akan membantu Anda dalam pengembangan aplikasi TypeScript. 
- HTML dan CSS: Pemahaman dasar tentang HTML dan CSS berguna, terutama jika Anda berencana untuk mengembangkan aplikasi web menggunakan TypeScript.
- Pemahaman Dasar Tentang REST API: Jika Anda berencana untuk berinteraksi dengan backend melalui RESTful API, memiliki pemahaman dasar tentang cara API berfungsi 
- Penggunaan Terminal/Command Line: Pemahaman dasar tentang cara menggunakan terminal atau command line akan berguna dalam menjalankan skrip, mengelola proyek, dan menjalankan perintah lainnya
- Pemahaman Tentang TDD (Test-Driven Development): Meskipun ini mungkin bukan keterampilan dasar, pemahaman dasar tentang TDD 

### Perbedaan Javascript vs Typescript

JavaScript (JS) dan TypeScript (TS) adalah dua bahasa pemrograman yang terkait erat, tetapi memiliki perbedaan signifikan dalam hal penggunaan dan fitur. Berikut adalah beberapa perbedaan kunci antara JavaScript dan TypeScript:

`Tipe Data:`

JavaScript: Adalah bahasa pemrograman yang bersifat dinamis, di mana tipe data variabel ditentukan secara otomatis saat runtime.
TypeScript: Adalah superset dari JavaScript yang menambahkan sistem tipe opsional. Dengan TypeScript, Anda dapat mendeklarasikan tipe data untuk variabel, parameter fungsi, dan hasil fungsi.

Penggunaan Tipe:

JavaScript: Tidak memiliki sistem tipe yang ketat, dan variabel dapat dengan mudah diubah tipe data-nya selama runtime.
TypeScript: Memiliki sistem tipe yang kuat. Anda dapat mendeklarasikan tipe data seperti string, number, boolean, dan lainnya untuk membantu mencegah kesalahan tipe selama pengembangan.

`Kompilasi:`

JavaScript: Kode JavaScript dieksekusi langsung oleh mesin JavaScript di runtime.
TypeScript: Kode TypeScript perlu dikompilasi menjadi JavaScript sebelum dijalankan. Ini dilakukan menggunakan compiler TypeScript (tsc), dan hasilnya adalah file JavaScript yang dapat dijalankan di browser atau runtime Node.js.

`Alat Bantu (Tooling):`

JavaScript: Ketersediaan alat bantu (tooling) seperti linter dan debuggers tergantung pada lingkungan pengembangan (browser, Node.js, dll.).
TypeScript: Memiliki dukungan lebih lanjut untuk alat bantu pengembangan. TypeScript menyediakan fitur-fitur seperti pengecekan tipe saat penulisan kode, dukungan penuh untuk intelisense, dan analisis statis untuk membantu mengidentifikasi kesalahan potensial.

`Ekosistem:`

JavaScript: Memiliki ekosistem yang sangat besar dan mapan dengan berbagai pustaka dan framework, seperti React, Angular, dan Vue.js.
TypeScript: Secara kompatibel dengan ekosistem JavaScript dan dapat digunakan dengan banyak pustaka dan framework yang ada. Beberapa proyek besar menggunakan TypeScript, dan banyak pustaka juga menyediakan definisi tipe TypeScript (dikenal sebagai DefinitelyTyped) untuk mendukung pengembangan menggunakan TypeScript.

`Pemrograman Berorientasi Objek:`

JavaScript: Mendukung paradigma pemrograman berorientasi objek.
TypeScript: Memiliki dukungan yang lebih baik untuk pemrograman berorientasi objek, termasuk fitur-fitur seperti kelas, pewarisan, dan antarmuka.

`Penggunaan Default dan Opsional:`

JavaScript: Variabel dan parameter fungsi bersifat opsional dan dapat dibiarkan tanpa nilai.
TypeScript: Memungkinkan deklarasi variabel dan parameter fungsi dengan nilai default serta mendukung parameter opsional dengan menandainya dengan tanda tanya (?).

`Komunitas dan Dukungan:`

JavaScript: Memiliki komunitas yang sangat besar dan aktif, serta dukungan luas dari berbagai sumber dan forum.
TypeScript: Memiliki komunitas yang terus berkembang, dengan dukungan aktif dari Microsoft dan komunitas open source.
Penting untuk dicatat bahwa meskipun TypeScript memperkenalkan fitur-fitur tambahan, Anda masih dapat menggunakan JavaScript dalam proyek TypeScript tanpa masalah. TypeScript dirancang untuk memberikan keleluasaan kepada pengembang dan dapat diintegrasikan secara bertahap ke dalam proyek-proyek JavaScript yang ada.

`sumber: ChatGPT`

## Fitur

didalam aplikasi ini akan memiliki beberapa fitur yaitu:
- Sistem CRUD
- Koneksi dengan database ( MySql )
- Endpoint
- Rest API
- Sequelize ( versi js, untuk versi ts akan berada di repository lain )

## Konfigurasi project

1. lakukan konfigurasi dengan menginisialisasi npm:

```cmd
npm init -y
``` 
( fungsi `-y` adalah untuk automasi enter )

2. instal beberapa dependensi yang dibutuhkan seprti express body-parser dan lain nya:

```cmd
npm install express typescript @types/node @types/express ts-node
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