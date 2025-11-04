import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProductDetail.css'
import { getProductById, getRelatedProducts } from '../data/products'
import Footer from '../components/Footer'

function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id, 6)
  const [mainImage, setMainImage] = useState(0)

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Sản phẩm không tồn tại</h2>
        <Link to="/" className="back-home-btn">Quay về trang chủ</Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    alert(`Đã thêm "${product.title}" vào giỏ hàng!`)
  }

  return (
    <div className="product-detail-page">
      {/* Main Product Section */}
      <section className="product-main">
        <div className="product-container">
          {/* Product Image */}
          <div className="product-image-section">
            <div className="product-main-image">
              <img src={product.images[mainImage]} alt={product.title} />
            </div>
            {product.images.length > 1 && (
              <div className="product-thumbnails">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${index === mainImage ? 'active' : ''}`}
                    onClick={() => setMainImage(index)}
                  >
                    <img src={img} alt={`${product.title} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-info-section">
            <h1 className="product-name">{product.title}</h1>
            <p className="product-subheading">{product.subheading}</p>
            <p className="product-price">{product.priceUSD}</p>
            
            <div className="product-description">
              <p>{product.longDescription}</p>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to cart
            </button>

            <div className="product-additional-info">
              <p className="additional-text">Text box for additional details or fine print</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="related-products-section">
        <div className="related-container">
          <h2 className="related-title">Related products</h2>
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <Link 
                key={item.id} 
                to={`/product/${item.id}`}
                className="related-card"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="related-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="related-info">
                  <h3 className="related-product-title">Product</h3>
                  <p className="related-product-desc">{item.subheading}</p>
                  <p className="related-product-price">{item.priceUSD}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ProductDetail

