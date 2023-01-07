import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <footer className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#top">Back to top</a>
          </p>
          <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
          <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.3/getting-started/introduction/">getting started guide</a>.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer