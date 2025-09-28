import React from 'react'
import livity from '../assets/seventh product.jpg';
import  "./About.css";

const About = () => {
 
 
  return (
    <div id='about'>
      <section className="about">
        
        <div className="about-img">
          <img src={livity} alt="" className='image' />
        </div>
        <div className="about-text">
          <h1>About-Livity</h1> <br /> <br /> <br />
        <p>
          In an era where fashion can sometimes mean excess and ego, <strong>Livity</strong> dares to redefine luxury.
           We believe that true style does not scream it speaks. Quietly. Powerfully. Through details. Through essence. 
           Through stories untold but deeply felt.
        </p>
        <p>
           <strong>Livity</strong> stands for those who choose modesty over spectacle. 
          Who understand that timeless elegance does not age it matures. It’s for those who see clothing not as a costume, but as a canvas of character.
           We design for the souls who carry the weight of their tradition with grace, and the ones who
            look toward the future with fire all while being grounded in the now.
        </p>
        <p>
            <strong>Livity</strong> was born from a vision not just to create clothes, but to awaken consciousness.
           To remind a new generation we exist to awaken.
        </p>

        </div>
      </section>

     

     
    </div>
  )
  }

export default About;