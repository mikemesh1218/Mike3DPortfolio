import React from 'react'

const Alert = ({type, text}) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'> 
        <div className={`${type === 'danger' ? "bg-red-500" : "bg-blue-700"} p-2 text-indigo-100 leading-none rounded-lg flex`} role='alert'>
            <p className={`${type === 'danger' ? "bg-red-500" : "bg-blue-700"} flex rounded-full uppercase px-2 py-1 mr-3 text-center`}>{type === 'danger' ? "Failed" : "Success" }</p>
            <p className='mr-2 text-left'>{text}</p>
        </div>
    </div>
  )
}

export default Alert