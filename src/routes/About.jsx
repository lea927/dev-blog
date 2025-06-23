import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <NavBar/>
      <div className='flex justify-center items-center'>
        <div className='w-8/12 py-8 leading-loose'>
          <div className='mb-8'>
            <h2 className='text-xl font-bold mb-4'>About DevBlog</h2>
            <p className='text-gray-600'>Welcome to DevBlog, a personal project created to practice React and React Router
      skills. This blog application demonstrates the implementation of a basic CRUD (Create,
      Read, Update, Delete) interface using React components and client-side routing.
            </p>
            <p className='text-gray-600'>The application currently uses local storage to persist data between sessions, making
      it a great example of how to build a fully functional front-end application without a
      backend.</p>
          </div>
          <div className='mb-8'>
            <h3 className='text-lg font-bold mb-4'>Features</h3>
            <ul className='text-gray-600'>
              <li>View a list of blog posts</li>
              <li>Read individual blog posts</li>
              <li>Create new blog posts</li>
              <li>Edit existing blog posts</li>
              <li>Delete blog posts</li>
              <li>Search functionality</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div className='mb-8'>
            <h3 className='text-lg font-bold mb4'>Technologies Used</h3>
            <ul className='text-gray-600 mb-4'>
              <li>React</li>
              <li>React Router</li>
              <li>Tailwind CSS</li>
              <li>Local Storage API</li>
            </ul>
            <p className='text-gray-600'>This project was built as a learning exercise to practice React fundamentals and
      routing concepts. Feel free to explore the code and use it as a reference for your own
      projects!</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About