# 📚 Hướng Dẫn Deploy Website Book Showcase Lên Domain

## 🎯 Tổng Quan

Project này sử dụng **Vite + React** và có thể deploy lên nhiều platform. Hướng dẫn này sẽ bao gồm 3 phương pháp phổ biến nhất:

1. **Vercel** (Khuyến nghị - Miễn phí, dễ nhất)
2. **Netlify** (Miễn phí, dễ dàng)
3. **GitHub Pages** (Miễn phí, tích hợp với GitHub)

---

## 📋 Bước 1: Chuẩn Bị Project

### 1.1. Build Project

Trước khi deploy, bạn cần build project để tạo các file production:

```bash
# Cài đặt dependencies (nếu chưa có)
npm install

# Build project
npm run build
```

Sau khi build xong, bạn sẽ thấy thư mục `dist/` được tạo ra. Đây là các file đã được tối ưu hóa để deploy.

### 1.2. Kiểm Tra File Build

Sau khi chạy `npm run build`, kiểm tra thư mục `dist/`:
- `dist/index.html` - File HTML chính
- `dist/assets/` - Các file JS, CSS đã được minify
- `dist/img/` - Các hình ảnh từ thư mục `public/img/`

---

## 🚀 Phương Pháp 1: Deploy Lên Vercel (Khuyến Nghị)

### Ưu điểm:
- ✅ Miễn phí
- ✅ Tự động deploy khi push code lên GitHub
- ✅ CDN toàn cầu, tốc độ nhanh
- ✅ HTTPS tự động
- ✅ Domain tùy chỉnh miễn phí

### Các bước:

#### Bước 1: Tạo tài khoản Vercel
1. Truy cập: https://vercel.com
2. Đăng nhập bằng GitHub, GitLab hoặc Bitbucket

#### Bước 2: Deploy từ GitHub (Khuyến nghị)

**2.1. Push code lên GitHub:**
```bash
# Khởi tạo git (nếu chưa có)
git init

# Tạo file .gitignore (nếu chưa có)
echo "node_modules/
dist/
.DS_Store
*.log" > .gitignore

# Thêm tất cả file
git add .

# Commit
git commit -m "Initial commit"

# Tạo repository trên GitHub, sau đó:
git remote add origin https://github.com/yourusername/book-showcase.git
git branch -M main
git push -u origin main
```

**2.2. Deploy trên Vercel:**
1. Đăng nhập Vercel
2. Click "Add New Project"
3. Chọn repository `book-showcase` từ GitHub
4. Cấu hình:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

**2.3. Thêm Domain tùy chỉnh:**
1. Vào Project Settings → Domains
2. Click "Add Domain"
3. Nhập domain của bạn (ví dụ: `bookshowcase.com`)
4. Làm theo hướng dẫn để cấu hình DNS:
   - Thêm record A hoặc CNAME theo hướng dẫn
   - Hoặc thêm các record DNS được Vercel cung cấp

#### Bước 3: Deploy từ Local (Không cần GitHub)

**Cài đặt Vercel CLI:**
```bash
npm install -g vercel
```

**Deploy:**
```bash
# Đăng nhập
vercel login

# Deploy lần đầu
vercel

# Deploy production
vercel --prod
```

---

## 🌐 Phương Pháp 2: Deploy Lên Netlify

### Ưu điểm:
- ✅ Miễn phí
- ✅ Drag & drop deploy
- ✅ Tự động deploy từ GitHub
- ✅ HTTPS tự động

### Các bước:

#### Bước 1: Tạo tài khoản Netlify
1. Truy cập: https://netlify.com
2. Đăng nhập bằng GitHub

#### Bước 2: Deploy từ GitHub

**2.1. Push code lên GitHub** (giống như Vercel ở trên)

**2.2. Deploy trên Netlify:**
1. Click "Add new site" → "Import an existing project"
2. Chọn GitHub và chọn repository `book-showcase`
3. Cấu hình Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click "Deploy site"

#### Bước 3: Deploy bằng Drag & Drop

**Đơn giản nhất:**
1. Build project: `npm run build`
2. Vào https://app.netlify.com/drop
3. Kéo thả thư mục `dist/` vào trang web
4. Xong! Website đã được deploy

#### Bước 4: Thêm Domain
1. Vào Site settings → Domain management
2. Click "Add custom domain"
3. Nhập domain và làm theo hướng dẫn DNS

---

## 📦 Phương Pháp 3: Deploy Lên GitHub Pages

### Ưu điểm:
- ✅ Hoàn toàn miễn phí
- ✅ Tích hợp với GitHub
- ✅ Domain: `yourusername.github.io/book-showcase`

### Các bước:

#### Bước 1: Cài đặt gh-pages

```bash
npm install --save-dev gh-pages
```

#### Bước 2: Cập nhật package.json

Thêm vào `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/book-showcase"
}
```

**Lưu ý**: Thay `yourusername` bằng tên GitHub của bạn.

#### Bước 3: Cập nhật vite.config.js

Thêm `base` vào config:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/book-showcase/'
})
```

#### Bước 4: Deploy

```bash
npm run deploy
```

#### Bước 5: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Settings → Pages
3. Source: chọn `gh-pages` branch
4. Save

Website sẽ có địa chỉ: `https://yourusername.github.io/book-showcase/`

---

## 🔧 Phương Pháp 4: Deploy Lên Hosting Truyền Thống (cPanel, FTP)

### Nếu bạn có hosting riêng:

#### Bước 1: Build Project

```bash
npm run build
```

#### Bước 2: Upload File

1. Upload **TẤT CẢ** file trong thư mục `dist/` lên thư mục `public_html/` hoặc `www/` trên server
2. **Lưu ý quan trọng**: Upload cả thư mục `img/` nếu có

#### Bước 3: Cấu Hình .htaccess (Apache)

Tạo file `.htaccess` trong thư mục root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

File này đảm bảo React Router hoạt động đúng (không bị lỗi 404 khi refresh trang).

#### Bước 4: Kiểm Tra

Truy cập domain của bạn và kiểm tra website.

---

## ⚙️ Cấu Hình Bổ Sung

### 1. Tối Ưu Hóa Build

Tạo file `vite.config.js` (nếu chưa có):

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
```

### 2. Kiểm Tra Routes

Đảm bảo tất cả routes hoạt động đúng. Nếu dùng React Router, nhớ cấu hình redirect về `index.html` cho tất cả routes.

### 3. Environment Variables

Nếu cần biến môi trường, tạo file `.env.production`:

```env
VITE_API_URL=https://api.example.com
```

Sử dụng trong code: `import.meta.env.VITE_API_URL`

---

## 🐛 Xử Lý Lỗi Thường Gặp

### Lỗi 404 khi refresh trang

**Nguyên nhân**: Server không biết route của React Router.

**Giải pháp**:
- Vercel/Netlify: Tự động xử lý
- GitHub Pages: Cần cấu hình như trên
- Hosting truyền thống: Thêm file `.htaccess` như trên

### Ảnh không hiển thị

**Nguyên nhân**: Đường dẫn ảnh không đúng.

**Giải pháp**: 
- Đảm bảo ảnh trong `public/img/` được copy vào `dist/img/`
- Kiểm tra đường dẫn trong code: `/img/logo.png` (bắt đầu bằng `/`)

### Build lỗi

**Giải pháp**:
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install

# Build lại
npm run build
```

---

## 📝 Checklist Trước Khi Deploy

- [ ] Đã chạy `npm run build` thành công
- [ ] Đã kiểm tra thư mục `dist/` có đầy đủ file
- [ ] Đã test preview local: `npm run preview`
- [ ] Đã kiểm tra tất cả routes hoạt động
- [ ] Đã kiểm tra ảnh hiển thị đúng
- [ ] Đã cập nhật domain trong code (nếu cần)
- [ ] Đã cấu hình environment variables (nếu có)

---

## 🎉 Hoàn Thành!

Sau khi deploy thành công, website của bạn sẽ có thể truy cập qua domain!

**Các platform khuyến nghị:**
1. **Vercel** - Tốt nhất cho React, miễn phí, nhanh
2. **Netlify** - Dễ dùng, drag & drop
3. **GitHub Pages** - Tích hợp GitHub, miễn phí

**Lưu ý**: 
- Build time: ~1-3 phút
- Domain propagation: 5 phút - 24 giờ
- HTTPS: Tự động với Vercel/Netlify

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề, hãy kiểm tra:
1. Console trong browser (F12)
2. Build logs trên platform
3. Network tab để xem file nào load lỗi

Chúc bạn deploy thành công! 🚀

