import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="text-muted py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#top">Back to top</a>
          </p>
          <p className="mb-1">Project made by Leandro Battocchio, more in <a href='https://github.com/leandrobattocchio' target="_blank" rel="noreferrer">https://github.com/leandrobattocchio</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer