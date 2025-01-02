// Imports
import React from 'react'
import './hero.css'
import Gradient from '../../images/Gradient.png'
import Me from '../../images/Me.png'
import Arrow from '../../images/Arrow.png'
import Ellipse from '../../images/Ellipse 5.png'

// animate



function Hero() {

  return (
    <section className='hero' id='hero'>
      <div className='img'>
        <img src={Gradient} alt="Gradient" />
        <img src={Me} alt="Me" />
        <img src={Arrow} alt="Arrow" />
      </div>
      <div className='text'>
        <h5>Hello! I Am <span>Moataz</span></h5>

        <div>
            <h6>A Designer who</h6>
            <h1>Judges a book <br/>by its <span>cover <img src={Ellipse} alt="" /></span>...</h1>
            <p>Because if the cover does not impress you what else can?</p>
        </div>
      </div>
    </section>
  )

  
}

export default Hero
