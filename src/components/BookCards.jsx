import { Link } from 'react-router-dom'
import './BookCards.css'
import { products } from '../data/products'

const BookCards = () => {
  // Chỉ lấy 3 sản phẩm đầu tiên
  const featuredBooks = products.slice(0, 3)

  return (
    <section className="books-section">
      <div className="books-container">
        <h2 className="books-title">Sản Phẩm Nổi Bật</h2>
        <div className="books-grid">
          {featuredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-image-wrapper">
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-overlay">
                  <Link to={`/product/${book.id}`} className="book-btn">
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
              <div className="book-content">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-description">{book.description}</p>
                <div className="book-footer">
                  <span className="book-price">{book.priceDisplay}</span>
                  <button className="book-cart-btn">Thêm Vào Giỏ</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookCards

