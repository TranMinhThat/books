import { useState, useEffect, useRef } from 'react'
import './AboutUs.css'

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Lê Phương Anh',
      role: 'Digital Marketing',
      description: 'Chuyên gia marketing số với tầm nhìn chiến lược, xây dựng thương hiệu và phát triển kênh truyền thông số cho các dự án nghệ thuật văn hóa.',
      experience: '5+ Years Experience',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      status: 'online',
      social: {
        email: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Trần Minh Thật',
      role: 'Software Engineering',
      description: 'Kỹ sư phần mềm tài năng, phát triển các giải pháp công nghệ hiện đại để nâng cao trải nghiệm số cho sản phẩm nghệ thuật.',
      experience: '4+ Years Experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      status: 'busy',
      social: {
        email: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Nguyễn Trọng Nghĩa',
      role: 'Graphic Design',
      description: 'Nhà thiết kế đồ họa sáng tạo, chuyên về minh họa văn hóa Việt Nam với phong cách nghệ thuật đương đại tinh tế.',
      experience: '6+ Years Experience',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      status: 'online',
      social: {
        dribbble: '#',
        behance: '#'
      }
    },
    {
      id: 4,
      name: 'Trương Hoàng Gia Mẫn',
      role: 'Graphic Design',
      description: 'Họa sĩ tài năng với niềm đam mê về nghệ thuật truyền thống Việt Nam, tạo nên những tác phẩm minh họa độc đáo và ấn tượng.',
      experience: '5+ Years Experience',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      status: 'online',
      social: {
        dribbble: '#',
        instagram: '#'
      }
    },
    {
      id: 5,
      name: 'Nguyễn Tấn Thành',
      role: 'Graphic Design',
      description: 'Designer chuyên về typography và layout, mang đến sự cân đối hoàn hảo giữa văn bản và hình ảnh trong mỗi tác phẩm.',
      experience: '4+ Years Experience',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      status: 'online',
      social: {
        dribbble: '#',
        instagram: '#'
      }
    }
  ]

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">Đội Ngũ Của Chúng Tôi</h2>
        <p className="about-subtitle">
          Những con người đam mê và tài năng đứng sau mỗi trang sách
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={member.id} className={`team-card ${index === 0 || index === 1 ? 'large-card' : ''}`}>
              {/* Profile Image with Status */}
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <span className={`status-indicator ${member.status}`}></span>
              </div>

              {/* Member Info */}
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>

                {/* Social Links */}
                <div className="team-social">
                  {member.role === 'Graphic Design' ? (
                    <SocialLinkWithAnimation iconSrc="/img/illustration.png" alt="Graphic Design" />
                  ) : member.role === 'Software Engineering' ? (
                    <SocialLinkWithAnimation iconSrc="/img/programmer.png" alt="Software Engineering" />
                  ) : member.role === 'Digital Marketing' ? (
                    <SocialLinkWithAnimation iconSrc="/img/marketing.png" alt="Digital Marketing" />
                  ) : (
                    <>
                      <a href="#" className="social-link">
                        <i className="social-icon">📧</i>
                      </a>
                      <a href="#" className="social-link">
                        <i className="social-icon">💼</i>
                      </a>
                    </>
                  )}
                </div>

                {/* Experience Badge */}
                <div className="experience-badge">
                  <span className="badge-icon">💼</span>
                  <span className="badge-text">{member.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Component tạo hiệu ứng icon bay lên như thả tim
const SocialLinkWithAnimation = ({ iconSrc, alt }) => {
  const [floatingIcons, setFloatingIcons] = useState([])
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef(null)
  const cleanupIntervalRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (isHovered) {
      // Tạo icon bay lên mỗi 0.3 giây khi hover
      intervalRef.current = setInterval(() => {
        const newIcon = {
          id: Date.now() + Math.random(),
          left: Math.random() * 20 - 10, // -10px đến 10px
          delay: Math.random() * 0.3, // delay 0-0.3s
          duration: 1.5 + Math.random() * 0.5, // 1.5-2s
          scale: 0.8 + Math.random() * 0.4, // 0.8-1.2
          createdAt: Date.now()
        }
        setFloatingIcons(prev => [...prev.slice(-15), newIcon]) // Giữ tối đa 15 icon
      }, 300)

      // Tự động xóa icon cũ sau khi animation kết thúc
      cleanupIntervalRef.current = setInterval(() => {
        setFloatingIcons(prev => prev.filter(icon => Date.now() - icon.createdAt < 2500))
      }, 500)
    } else {
      // Dừng tạo icon khi không hover
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      if (cleanupIntervalRef.current) {
        clearInterval(cleanupIntervalRef.current)
        cleanupIntervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (cleanupIntervalRef.current) {
        clearInterval(cleanupIntervalRef.current)
      }
    }
  }, [isHovered])

  return (
    <div 
      className="social-link-container" 
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" className="social-link">
        <img src={iconSrc} alt={alt} className="social-icon-image" />
      </a>
      {floatingIcons.map(icon => (
        <div
          key={icon.id}
          className="floating-icon"
          style={{
            '--left-offset': `${icon.left}px`,
            '--animation-delay': `${icon.delay}s`,
            '--animation-duration': `${icon.duration}s`,
            '--icon-scale': icon.scale,
          }}
        >
          <img src={iconSrc} alt={alt} className="floating-icon-img" />
        </div>
      ))}
    </div>
  )
}

export default AboutUs

