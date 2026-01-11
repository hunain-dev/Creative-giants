import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go'

const Getintouch = () => {
  const [formData, setFormData] = useState({
    firstName: 'Emma',
    lastName: 'Lewis',
    email: 'emma@email.com',
    phone: '+44',
    projectDetails: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <div className=' mt-30 px-6 w-full grid grid-cols-[1fr_1.5fr] '>
        <div className=' w-fit Switzer-light '>
            <h3 className='uppercase'>Get in touch</h3>
            <h2 className='text-[5.8vw] tracking-tight'>Speak to us.</h2>
            <p className='  text-[#7A7A79]'>If you want to start a project, share an idea or simply say hi, <br />
            we want to hear from you.</p>
        </div>
        <div className='w-full flex items-start justify-center'>
          <form onSubmit={handleSubmit} className='w-full  Switzer-light'>
            <div className='flex items-center justify-between gap-3'>
            <div className='mb-8'>
                
                <label className='block text-[#8E8E8C] text-lg'>First name</label>
                <input
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='w-full bg-transparent border-0 border-b border-gray-400 focus:outline-none focus:border-black text-[3.1vw] py-1.5 placeholder:text-black'
                />
              </div>
              <div className='mb-8'>
              <label className='block text-[#8E8E8C]  text-sm'>Last name</label>
              <input
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='w-full bg-transparent border-0 border-b  border-gray-400 focus:outline-none focus:border-black text-[3.5vw] py-1.5 placeholder:text-black'
              />
            </div>
            </div>
        
            
      
            <div className='flex items-center justify-center gap-3'>
            <div className='mb-8'>
                <label className='block text-[#8E8E8C]  '>Email Address</label>
                <input
                  type='text'
                  name='firstName'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full bg-transparent text-[3.5vw] border-0 border-b  border-gray-400 focus:outline-none focus:border-black py-1.5 placeholder:text-black'
                />
              </div>
              <div className='mb-8'>
              <label className='block text-[#8E8E8C]  text-sm'>Phone number</label>
              <input
                type='text'
                phone='lastName'
                value={formData.phone}
                onChange={handleChange}
                className='w-full bg-transparent border-0 border-b  border-gray-400 focus:outline-none focus:border-black text-[3.5vw]  py-1.5 placeholder:text-black'
              />
            </div>
            </div>
            
            <div className='mb-10'>
              <label className='block text-[#8E8E8C]  text-sm '>Project details</label>
              <textarea
                name='projectDetails'
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder='Tell us about your project...'
                rows={1}
                className='w-full bg-transparent border-0 border-b  border-gray-400 focus:outline-none focus:border-black text-[3.3vw] py-1.5 resize-none placeholder:text-black'
              />
            </div>
            
            <button
              type='submit'
              className='w-fit bg-black text-white  px-3  py-2 rounded-full flex items-center justify-between hover:bg-opacity-90 transition-colors relative'
            >
              <span className='text-base uppercase tracking-tight px-2'>SEND ENQUIRY</span>
              <div className='bg-white rounded-full p-1  flex items-center justify-center'>
                <GoArrowRight className='text-black ' size={23} />
              </div>
            </button>
          </form>
        </div>
      
    </div>
  )
}

export default Getintouch
