import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        {/* Left Side - Content */}
        <div className="banner-content">
          <h1 className="banner-title">Họa Văn Art</h1>
          <p className="banner-description">
          Họa Văn Art là một dự án nghệ thuật độc đáo được khởi xướng nhằm 
            tôn vinh và lưu giữ những giá trị văn hóa truyền thống của dân tộc qua nghệ 
            thuật hội họa. Với đam mê sâu sắc về di sản văn hóa Việt Nam, chúng tôi 
            mang đến những tác phẩm nghệ thuật tinh tế, kết hợp giữa nét vẽ truyền thống 
            và phong cách hiện đại. Mỗi cuốn sách là một hành trình khám phá về lịch sử, 
            văn hóa và vẻ đẹp của đất nước, được thể hiện qua những bức tranh minh họa 
            tuyệt đẹp và nội dung phong phú, mang đến trải nghiệm đọc độc đáo cho người 
            yêu nghệ thuật và văn hóa Việt Nam.
          </p>
          <a href="#about" className="banner-btn">
            Về chúng tôi →
          </a>
        </div>

        {/* Right Side - Team Image */}
        <div className="banner-image">
          <div className="image-wrapper">
            <img 
              src="/img/team1.png" 
              alt="Họa Văn Art Team" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner

