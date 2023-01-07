import Header from '../Header'
import Aside from '../Aside'

const Products = () => (
  <div className="App-container">
    <Header />
    <div className="main-section-container">
      <Aside />
      <div className="container">
        <h1 className="heading">Display Products</h1>
      </div>
    </div>
  </div>
)

export default Products
