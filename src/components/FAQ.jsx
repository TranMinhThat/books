import { useState } from 'react'
import './FAQ.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'Sách có phiên bản tiếng Anh không?',
      answer: 'Hiện tại, tất cả các sản phẩm của chúng tôi đều có phiên bản song ngữ Việt-Anh để phục vụ đa dạng độc giả trong và ngoài nước.'
    },
    {
      id: 2,
      question: 'Thời gian giao hàng mất bao lâu?',
      answer: 'Chúng tôi giao hàng trong vòng 3-5 ngày làm việc đối với nội thành và 5-7 ngày làm việc đối với các tỉnh thành khác. Miễn phí ship cho đơn hàng trên 500.000đ.'
    },
    {
      id: 3,
      question: 'Có chính sách đổi trả sách không?',
      answer: 'Chúng tôi chấp nhận đổi trả trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm có lỗi từ nhà sản xuất hoặc không đúng như mô tả.'
    },
    {
      id: 4,
      question: 'Làm thế nào để mua sách với số lượng lớn?',
      answer: 'Đối với đơn hàng số lượng lớn (từ 50 cuốn trở lên), vui lòng liên hệ trực tiếp với chúng tôi qua email hoặc hotline để được tư vấn và hỗ trợ giá tốt nhất.'
    },
    {
      id: 5,
      question: 'Sách có bán tại cửa hàng không?',
      answer: 'Có, chúng tôi có showroom tại Hà Nội và TP. Hồ Chí Minh. Bạn có thể ghé thăm để xem trực tiếp sản phẩm từ 9h-18h các ngày trong tuần.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Câu Hỏi Thường Gặp</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

