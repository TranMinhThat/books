import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import NewProduct from '../components/NewProduct'
import BookCards from '../components/BookCards'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <div id="banner">
        <Banner />
      </div>
      
      <div id="new-product">
        <NewProduct />
      </div>
      <div id="books">
        <BookCards />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}

export default HomePage

