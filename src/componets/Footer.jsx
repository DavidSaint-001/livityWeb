import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer style={{ textAlign: 'center', padding: '20px', background: '#fff', color: '#000', }}>
        <p>&copy; {new Date().getFullYear()} LIVITY. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer