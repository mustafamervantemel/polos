# Polo's Restaurant Website

Profesyonel bir restoran web sitesi projesi - Box, Pizza, Pide ve Snacks satışı yapan İsviçre restoranı için.

## 🚀 Özellikler

- ✅ Modern ve profesyonel UI/UX tasarımı
- ✅ Marka renkleri ile uyumlu tasarım (#FFAA29 turuncu, #231F20 siyah)
- ✅ Almanca dil desteği
- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Admin paneli ile menü yönetimi
- ✅ Firebase Authentication
- ✅ Firebase Storage ile resim yükleme
- ✅ Animasyonlar ve smooth transitions
- ✅ WhatsApp entegrasyonu

## 📋 Menü Kategorileri

- **Box**: Döner Box, Poulet Box, Lamm Box, vb.
- **Pizza**: Margherita, Salami, Hawaii, vb.
- **Pide**: Pide Käse, Pide Spinat, Pide Kebab, vb.
- **Snacks**: Kebab, Hamburger, Falafel, vb.

## 🛠️ Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

1. Projeyi klonlayın:
```bash
git clone https://github.com/mustafamervantemel/polos.git
cd polos
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcıda açın:
```
http://localhost:5173
```

## 🔐 Firebase Kurulumu

### 1. Firebase Projesi Oluşturma

1. [Firebase Console](https://console.firebase.google.com/) adresine gidin
2. Yeni bir proje oluşturun veya mevcut projeyi seçin
3. Web uygulaması ekleyin

### 2. Authentication Kurulumu

1. Firebase Console'da **Authentication** bölümüne gidin
2. **Sign-in method** sekmesine tıklayın
3. **Email/Password** metodunu etkinleştirin

### 3. Admin Kullanıcısı Oluşturma

1. Firebase Console → **Authentication** → **Users**
2. **Add user** butonuna tıklayın
3. Şu bilgileri girin:
   - **Email**: `admin@polos.ch`
   - **Password**: `password123`
4. **Add user** butonuna tıklayın

### 4. Firebase Configuration

`src/contexts/AuthContext.tsx` dosyasındaki Firebase config bilgilerini güncelleyin:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 5. Storage Kurulumu

1. Firebase Console → **Storage**
2. **Get started** butonuna tıklayın
3. Production modunda başlatın
4. Security rules'u güncelleyin (test için):

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📱 WhatsApp Entegrasyonu

WhatsApp numarası: **+41 78 311 96 92**

Tüm iletişim butonları WhatsApp'a yönlendirir.

## 🎨 Marka Renkleri

- **Turuncu**: #FFAA29 (brand-orange)
- **Siyah**: #231F20 (brand-black)

## 📁 Proje Yapısı

```
src/
├── components/       # React bileşenleri
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── CallToAction.tsx
├── contexts/        # Context API
│   ├── AuthContext.tsx
│   └── MenuContext.tsx
├── pages/          # Sayfa bileşenleri
│   ├── Home.tsx
│   ├── Menu.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── AdminLogin.tsx
│   └── AdminPanel.tsx
└── assets/         # Statik dosyalar
```

## 🚀 Deployment

### Vercel Deployment

1. Vercel hesabınıza giriş yapın
2. Yeni proje oluşturun
3. GitHub repository'yi bağlayın
4. Environment variables ekleyin (gerekirse)
5. Deploy edin

## 📝 Lisans

Bu proje özel bir projedir.

## 👨‍💻 Geliştirici

Mustafa Mervan Temel

## 📞 İletişim

- **Email**: info@polos.ch
- **Telefon**: +41 78 311 96 92
- **WhatsApp**: [WhatsApp Sipariş](https://wa.me/41783119692)

---

**Not**: Admin paneli için Firebase'de kullanıcı oluşturmanız gerekmektedir. Detaylar için yukarıdaki "Firebase Kurulumu" bölümüne bakın.
