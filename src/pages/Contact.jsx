import React, { Suspense, useRef } from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';





const Contact = () => {
  const formRef = useRef(); 
  const [form, setform] = useState({ name:"", email:"", message:""});
  const [isLoading, setisLoading] = useState(false)


  const [currentAnimation, setcurrentAnimation] = useState("idle");



  const {alert, showAlert, hideAlert} = useAlert();

  
  
  const handleChange = (e) => {
    setform({...form,[e.target.name]:e.target.value})
  };

  const handleSummit = (e) => {
    e.preventDefault()
    setisLoading(true)
    setcurrentAnimation("hit")
    
    const serviceId = "service_tvn3vxf";
    const templateId = "template_o5msfd3";
    const publicKey = "naCKE5QswMUBGvaVk";
    
    
    emailjs.send(
     serviceId,templateId,
     {
       form_name: form.name,
       to_name: "Michael Meshesha",
       from_email: form.email,
       to_email:"mesheshamichael1219@gmail.com",
       message: form.message
     },publicKey
     
    ).then(() => {
      setisLoading(false);
      // TO DO: Show success messsage
      // TO DO: Hide an alert
      showAlert({show:"true", text: "Message sent successfully!", type:'success'})

      setform({ name:"", email:"", message:""})

      setTimeout(()=>{
        setcurrentAnimation("idle")
      },[3000])

    }).catch((error)=>{
      setisLoading(false)
      console.log(error)
      setcurrentAnimation("idle")
      // TO DO: Show error messsage
      showAlert({show:"true", text: "Message sent not sent😌", type:'danger'})
    })

  };

  const handleFoucs = () => setcurrentAnimation("hit");
  const handleBlur = () => setcurrentAnimation("hit");





  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
    
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14 '  onSubmit={handleSummit}>
          <label className='font-semibold text-black-500'>
            Name
          </label>
          <input
          type='text'
          name='name'
          className='input'
          placeholder='Michael'
          required
          value={form.name}
          onChange={handleChange}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          />

          <label className='font-semibold text-black-500'>
            E-mail
          </label>
          <input
          type='email'
          name='email'
          className='input'
          placeholder='Michael@gmail.com'
          required
          value={form.email}
          onChange={handleChange}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          />

          <label className='font-semibold text-black-500'>
            Your Message
          </label>
          <textarea
          rows={4}
          name='message'
          className='textarea'
          placeholder='Let me know how can i help you'
          required
          value={form.message}
          onChange={handleChange}
          onFocus={handleFoucs}
          onBlur={handleBlur}
          />
          <button 
          type='submit' 
          className='btn'
          onFocus={handleFoucs}
          onBlur={handleBlur}
          disabled={isLoading}
          >
          {isLoading? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px]'>
       <Canvas
       camera={{position: [0, 0, 5], fov:75, near:0.1,far: 1000}}
       >
         <directionalLight intensity={2.5} position={[0, 0, 1]}/>
         <Suspense fullback={<Loader/>}> 
            <Fox position={[0.5, 0.5, 0]}  rotation={[12.6, -0.6, 0]} scale={[0.5, 0.5, 0.5]} currentAnimation={currentAnimation}/>
         </Suspense>
       </Canvas>
      </div>
    </section>
  )
}

export default Contact