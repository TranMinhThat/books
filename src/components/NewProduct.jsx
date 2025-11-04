import { Link } from 'react-router-dom'
import './NewProduct.css'

function NewProduct() {
  // Sản phẩm mới nhất (product id 1)
  const newProduct = {
    id: 1,
    title: 'Di Sản Văn Hóa Việt',
    subtitle: 'Khám phá vẻ đẹp Văn Học qua nghệ thuật',
    mainDescription: 'Cuốn sách nghệ thuật đặc biệt mang đến cái nhìn sâu sắc về di sản văn học Việt Nam qua những bức tranh vẽ tinh xảo và nội dung phong phú.',
    features: [
      {
        heading: 'Nghệ Thuật Truyền Thống',
        description: 'Khám phá những nét vẽ truyền thống được tái hiện một cách tỉ mỉ. Mỗi trang sách là một tác phẩm nghệ thuật độc đáo, mang đậm dấu ấn văn hóa Việt Nam.'
      },
      {
        heading: 'Nội Dung Phong Phú',
        description: 'Đi sâu vào từng khía cạnh của văn học. Từ kiến trúc, trang phục đến phong tục tập quán, tất cả được trình bày một cách sinh động và hấp dẫn.'
      },
      {
        heading: 'Chất Lượng Cao Cấp',
        description: 'In trên giấy cao cấp với màu sắc sống động. Được thiết kế tỉ mỉ từng chi tiết, mang lại trải nghiệm đọc tuyệt vời nhất cho người yêu nghệ thuật.'
      }
    ],
    bookCover: '/img/Bìa.png',
    openBookPages: [
      '/img/SÁCH MINH HỌA4.png',
      '/img/SÁCH MINH HỌA5.png'
    ]
  }

  return (
    <section className="new-product-section">
      <div className="new-product-container">
        {/* Left Side - Content */}
        <div className="new-product-content">
          <h2 className="new-product-heading">Sản Phẩm Mới Ra Mắt</h2>
          
          <h3 className="new-product-subtitle">{newProduct.subtitle}</h3>
          <p className="new-product-main-text">{newProduct.mainDescription}</p>

          {/* Features */}
          <div className="new-product-features">
            {newProduct.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h4 className="feature-heading">{feature.heading}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="new-product-buttons">
            <Link to={`/product/${newProduct.id}`} className="primary-button">
              Xem Chi Tiết
            </Link>
            <button className="secondary-button">Tìm Hiểu Thêm</button>
          </div>
        </div>

        {/* Right Side - 3D Book Mockup */}
        <div className="new-product-showcase">
          {/* Background Decorations */}
          <div className="showcase-decoration">
            <div className="gold-circle large"></div>
            <div className="gold-circle small"></div>
            <div className="arch-decoration">
              <div className="golden-leaf"></div>
            </div>
          </div>

          {/* Red Fabric */}
          <div className="red-fabric"></div>

          {/* Standing Book */}
          <div className="standing-book">
            <div className="book-spine"></div>
            <div className="book-front">
              <img src={newProduct.bookCover} alt={newProduct.title} />
            </div>
            <div className="book-back"></div>
          </div>

          {/* Open Book */}
          <div className="open-book">
            {/* Left Side Pages Stack */}
            <div className="pages-stack left-stack">
              <div className="page-layer layer-1"></div>
              <div className="page-layer layer-2"></div>
              <div className="page-layer layer-3"></div>
            </div>
            
            {/* Main Left Page */}
            <div className="book-page left-page">
              <img src={newProduct.openBookPages[0]} alt="Left page" />
              <div className="page-shadow"></div>
              <div className="page-curl"></div>
            </div>
            
            {/* Book Spine/Binding */}
            <div className="book-binding">
              <div className="binding-shadow"></div>
            </div>
            
            {/* Main Right Page */}
            <div className="book-page right-page">
              <img src={newProduct.openBookPages[1]} alt="Right page" />
              <div className="page-shadow"></div>
              <div className="page-curl"></div>
            </div>
            
            {/* Right Side Pages Stack */}
            <div className="pages-stack right-stack">
              <div className="page-layer layer-1"></div>
              <div className="page-layer layer-2"></div>
              <div className="page-layer layer-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewProduct

