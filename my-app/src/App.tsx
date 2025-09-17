import './App.css'

function App() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login to your account</h2>

        <div className="input-group">
          <span className="icon">👤</span>
          <input type="text" placeholder="Username" />
        </div>

        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" placeholder="Password" />
        </div>

        <div className="action-row">
          <button type="submit" className="login-btn">LOG IN</button>
          <a href="#" className="forgot-link">Forgotten password?</a>
        </div>

        <p className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce semper laoreet placerat. Nullam semper auctor justo,
          rutrum posuere odio vulputate nec.
        </p>
      </form>
    </div>
  )
}

export default App
