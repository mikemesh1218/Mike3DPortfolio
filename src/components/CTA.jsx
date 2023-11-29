import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
     <p className='cta-text'>You have any React Js progect in mind? <br className='sm:block hidden'/> Lets build it!</p>
     <Link to="/contact" className="btn">Contact me☺</Link>
    </section>
  )
}

export default CTA