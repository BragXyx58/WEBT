import './App.css'

function App() {
  return (
    <div className="card">
      <div className="card-top">
        <img
          src="https://yellow.ua/skin/frontend/base/default/images/catalog/product/compare.svg"
          alt="scale"
          className="card-icon"
        />
      </div>

      <img
        className="card-image"
        src="https://yellow.ua/media/catalog/product/cache/9/image/508x508/9df78eab33525d08d6e5fb8d27136e95/5/9/594364394_3.jpg"
        alt="Apple iPhone 17 Pro Max 2TB"
      />

      <div className="card-body">
        <div className="card-title">Apple iPhone 17 Pro Max
          <div className="card-sub">2TB (Cosmic Orange)</div>
        </div>

        <div className="card-price">
          <span className="card-price-num">123 999</span>
          <span className="card-currency">грн</span>
        </div>

        <button className="card-button" disabled>
          Замовлення
        </button>

        <div className="card-footer">
          <span className="card-status">Немає в наявності</span>
          <span className="card-code">код: 000086212</span>
        </div>
      </div>
    </div>
  )
}

export default App
