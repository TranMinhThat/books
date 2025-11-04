import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Họa Mộng Việt Nam</h3>
            <p className="footer-description">
              Tôn vinh di sản văn hóa Việt Nam qua những trang sách nghệ thuật tinh tế.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">Facebook</a>
              <a href="#" className="footer-social-link">Instagram</a>
              <a href="#" className="footer-social-link">Twitter</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Liên Kết</h4>
            <ul className="footer-links">
              <li><a href="#">Về Chúng Tôi</a></li>
              <li><a href="#">Sản Phẩm</a></li>
              <li><a href="#">Tin Tức</a></li>
              <li><a href="#">Liên Hệ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Hỗ Trợ</h4>
            <ul className="footer-links">
              <li><a href="#">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#">Chính Sách Đổi Trả</a></li>
              <li><a href="#">Phương Thức Thanh Toán</a></li>
              <li><a href="#">Giao Hàng</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Liên Hệ</h4>
            <ul className="footer-contact">
              <li>📍 Cần Thơ</li>
              <li>📞 +84 123 456 789</li>
              <li>✉️ info@hoamongvietnam.com</li>
              <li>🕒 9:00 - 18:00 (T2 - T6)</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Họa Mộng Việt Nam. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Điều Khoản Sử Dụng</a>
            <span>|</span>
            <a href="#">Chính Sách Bảo Mật</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

