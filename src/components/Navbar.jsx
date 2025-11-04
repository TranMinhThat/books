import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Thay đổi style navbar khi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll đến section
  const scrollToSection = (sectionId) => {
    // Nếu không ở trang chủ, navigate về trang chủ trước
    if (location.pathname !== '/') {
      navigate('/')
      // Đợi một chút để trang load xong rồi scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo-link">
          <div className="navbar-logo">
            <img src="/img/logo Hoa Van.png" alt="Họa Mộng Việt Nam" className="logo-image" />
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a onClick={() => scrollToSection('banner')}>
              Trang Chủ
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('gallery')}>
              Thư Viện
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('new-product')}>
              Sản Phẩm Mới
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('books')}>
              Sách
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('about')}>
              Về Chúng Tôi
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('faq')}>
              Câu Hỏi
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('footer')} className="btn-contact">
              Liên Hệ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

