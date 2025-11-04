import { useState, useEffect } from 'react'
import './Gallery.css'

const Gallery = () => {
  const artworks = [
    {
      id: 1,
      title: 'Phố Cổ Hà Nội',
      image: 'https://images.unsplash.com/photo-1555847333-6c95e4d08a8c?w=800'
    },
    {
      id: 2,
      title: 'Vịnh Hạ Long',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800'
    },
    {
      id: 3,
      title: 'Nón Lá Việt Nam',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800'
    },
    {
      id: 4,
      title: 'Hội An Cổ Trấn',
      image: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800'
    },
    {
      id: 5,
      title: 'Ruộng Bậc Thang',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800'
    },
    {
      id: 6,
      title: 'Chùa Một Cột',
      image: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?w=800'
    }
  ]

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        // Mỗi item có width 200px + gap 20px = 220px
        const itemWidth = 220
        const singleSetWidth = artworks.length * itemWidth
        
        // Khi scroll đến hết set đầu tiên, reset về 0 để tạo hiệu ứng vô tận
        if (prev >= singleSetWidth) {
          return 0
        }
        
        return prev + 1
      })
    }, 10)

    return () => clearInterval(scrollInterval)
  }, [artworks.length])

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-wrapper">
          <div 
            className="gallery-track" 
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {/* Duplicate artworks 3 lần để đảm bảo scroll mượt */}
            {[...artworks, ...artworks, ...artworks].map((artwork, index) => (
              <div key={`${artwork.id}-${index}`} className="gallery-item">
                <img src={artwork.image} alt={artwork.title} />
                <div className="gallery-item-overlay">
                  <h3>{artwork.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

