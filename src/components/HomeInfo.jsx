import React from 'react'
import { Link } from 'react-router-dom'


const InfoBox = ({text, link, btnText}) => {
    return(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
        </Link>
    </div>
    )
}


const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4  px-8 text-white mx-5'>Hey🤘, I am <span className='font-semibold'>Michael</span><br/> A Front-End React developer from Ethiopia</h1>
    ),
    2:(
        <InfoBox 
        text={"Obssesed with coding 24/7"}
        link="/about"
        btnText={"Learn More"}/>
    ),
    3:(
        <InfoBox 
        text={"Engaged in multiple React projects over the years"}
        link="/projects"
        btnText={"Visit my portfolio"}/>
    ),
    4:(
        <InfoBox 
        text={"Need a flawless project done? I'm just a few clicks away"}
        link="/contact"
        btnText={"Let's talk"}/>
        
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo