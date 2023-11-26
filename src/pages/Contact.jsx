import React, { useRef } from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(); 
  const [form, setform] = useState({ name:"", email:"", message:""});
  const [isLoading, setisLoading] = useState(false)
  
  
  const handleChange = (e) => {
    setform({...form,[e.target.name]:e.target.value})
  };

  const handleSummit = (e) => {
    e.preventDefault()
    setisLoading(true)
    emailjs.send(
     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
     {
       form_name: form.name,
       to_name: "Michael Meshesha",
       from_email: form.email,
       to_email:"mesheshamichael1219@gmail.com",
       message: form.message
     },import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
     
    ).then(() => {
      setisLoading(false);
      // TO DO: Show success messsage
      // TO DO: Hide an alert
      setform({ name:"", email:"", message:""})

    }).catch((error)=>{
      setisLoading(false)
      console.log(error)
      // TO DO: Show error messsage
    })

  };

  const handleFoucs = () => {};
  const handleBlur = () => {};





  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14 ' on onSubmit={handleSummit}>
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
    </section>
  )
}

export default Contact