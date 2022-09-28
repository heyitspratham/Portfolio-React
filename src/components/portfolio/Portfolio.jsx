import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1> 
      <ul>
        <li className="active">Featured</li>
        <li>web App</li>
        <li>Mobile App</li>
        <li>Designing</li>
        <li>Branding</li>
      </ul>

      <div className="container">
        <div className="item">
          <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://assets.awwwards.com/awards/submissions/2017/07/596106479e6b3.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
