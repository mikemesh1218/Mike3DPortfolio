import React from 'react'
import { skills, experiences }  from '../constants'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container h-screen'>
      <h1 className='head-text'>
        Hello, I'm <span class="bg-gradient-to-r from-green-400 to-purple-500 text-transparent bg-clip-text">
        Michael
      </span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Frontend React developer based in ETHIOPIA. As a skilled React.js frontend developer, I bring proficiency and innovation to every project. With a keen eye for detail and a passion for crafting seamless user interfaces, I excel in transforming design concepts into responsive and dynamic web applications. </p>
      </div>

      <div className='py-10 flex flex-col '>
        <h1 className='subhead-text'>My skills</h1>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20'>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Work experiance</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
         <p>I Collaborated closely with cross-functional teams, including UX/UI designers and backend developers, fostering a dynamic and innovative development environment. Here is the rundown:</p>
        </div>
        <div className='mt-5 flex'>
         <VerticalTimeline>
          {experiences.map((experance)=>(
            <VerticalTimelineElement key={experiences.company_name}
            icon={
            <div className='flex justify-center item-center w-full h-full'>
              <img src={experance.icon} alt={experance.company_name} className='w-[100%] h-[100%] object-contain'/>
            </div>
            }
            contentStyle={{borderBottom: '8px',borderStyle: 'solid',borderBottonColor: experance.iconBg,boxShadow: 'none'}}
            iconStyle={{background: experance.iconBg}}
            >
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experance.title}
                </h3>
                <p className='text-black-500 font-medium'>
                  {experance.company_name}
                </p>
                <ul className='my-5 list-disc ml-5'>
                  {experance.points.map((point, index)=>(
                    <li key={`experiance-point-${index}`} className='text-black font-normal pl-1 font-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
         </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200'/>
      <CTA/>
    
    </section>
  )
}

export default About