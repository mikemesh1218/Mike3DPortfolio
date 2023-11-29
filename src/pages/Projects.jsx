import React from 'react'

const Projects = () => {
  return (
    <section className='max-container h-full flex justify-start flex-col'>
        <h1 className='head-text'>My <span className="bg-gradient-to-r from-green-300 via-purple-500 to-pink-500 text-transparent bg-clip-text ">
         Projects
        </span>
        </h1>
        <div className='flex flex-col mt-5 gap-3 text-slate-500'>
          <p>Below, you'll find a curated selection of projects that showcase my skills and passion for frontend development. Each project is a testament to my commitment to excellence and my love for bringing ideas to life in the digital realm.If you're looking for a frontend developer who brings technical expertise, creative flair, and a collaborative spirit to the table, let's connect! Together, we can turn your ideas into a reality.
          </p>
        </div>
    </section>
  )
}

export default Projects