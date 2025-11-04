# Họa Mộng Việt Nam - Book Showcase Website

Trang web giới thiệu sản phẩm sách nghệ thuật tôn vinh di sản văn hóa Việt Nam.

## 📌 Tính Năng

- ✅ **Banner** - Header ấn tượng với ảnh nền và tiêu đề "Họa Mộng Việt Nam - Nét Vẽ Tôn Vinh Di Sản"
- ✅ **Gallery** - Danh sách ảnh tự động roll ngang trình bày các tác phẩm tiêu biểu
- ✅ **Book Cards** - 4 card hiển thị sản phẩm sách với thông tin chi tiết
- ✅ **About Us** - Giới thiệu 5 thành viên trong đội ngũ
- ✅ **FAQ** - 5 câu hỏi thường gặp với dropdown hiển thị câu trả lời
- ✅ **Footer** - Thông tin liên hệ và các liên kết hữu ích

## 🚀 Cài Đặt và Chạy Dự Án

### Yêu Cầu
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Các Bước Cài Đặt

1. Di chuyển vào thư mục dự án:
```bash
cd book-showcase
```

2. Cài đặt dependencies (nếu chưa cài):
```bash
npm install
```

3. Chạy dự án ở chế độ development:
```bash
npm run dev
```

4. Mở trình duyệt và truy cập:
```
http://localhost:5173
```

## 📦 Build cho Production

```bash
npm run build
```

Sau khi build, các file sẽ được tạo trong thư mục `dist/`.

## 🎨 Cấu Trúc Dự Án

```
book-showcase/
├── src/
│   ├── components/
│   │   ├── Banner.jsx & Banner.css
│   │   ├── Gallery.jsx & Gallery.css
│   │   ├── BookCards.jsx & BookCards.css
│   │   ├── AboutUs.jsx & AboutUs.css
│   │   ├── FAQ.jsx & FAQ.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## 🎯 Các Component Chính

### Banner
- Hiển thị ảnh nền toàn màn hình
- Text chính: "Họa Mộng Việt Nam - Nét Vẽ Tôn Vinh Di Sản"
- Hiệu ứng fade-in animation

### Gallery
- Tự động scroll ngang
- Hiển thị 6 tác phẩm tiêu biểu
- Hover effect trên mỗi item

### Book Cards
- Grid layout responsive
- 4 card sản phẩm sách
- Nút "Xem Chi Tiết" và "Thêm Vào Giỏ"

### About Us
- Giới thiệu 5 thành viên
- Avatar và thông tin chi tiết cho mỗi người
- Social links khi hover

### FAQ
- 5 câu hỏi thường gặp
- Dropdown animation mượt mà
- Icon toggle (+/-)

### Footer
- 4 cột thông tin
- Social media links
- Thông tin liên hệ

## 🛠️ Công Nghệ Sử Dụng

- **React** - UI Library
- **Vite** - Build tool
- **CSS3** - Styling với animations & transitions
- **Unsplash** - Placeholder images

## 📝 Tùy Chỉnh

### Thay đổi ảnh
Bạn có thể thay thế các URL ảnh từ Unsplash bằng ảnh của riêng mình trong các file component.

### Thay đổi màu sắc
Các màu chủ đạo được sử dụng:
- Primary: `#667eea`
- Secondary: `#764ba2`
- Dark: `#2c3e50`

### Thêm nội dung
Để thêm sách, thành viên, hoặc FAQ, chỉ cần thêm object mới vào mảng tương ứng trong component.

## 📱 Responsive Design

Website được tối ưu cho các kích thước màn hình:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 📄 License

MIT License - Free to use for personal and commercial projects.

## 👥 Liên Hệ

- Email: info@hoamongvietnam.com
- Phone: +84 123 456 789
- Address: 123 Phố Huế, Hà Nội

---

Made with ❤️ for Vietnamese culture

