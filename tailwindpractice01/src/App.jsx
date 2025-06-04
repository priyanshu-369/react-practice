import {NavLink} from 'react-router-dom'
import programmerImage from './assets/programerimage.png'

function App() {

  return (
   <div className=' relative bg-gray-800 py-8'>
    <div className=' fixed top-5 left-0 right-0 z-50 max-w-7xl mx-auto rounded-4xl py-2 bg-white/10 backdrop-blur-md shadow-lg shadow-white/10 h-16 border border-white/20'>
    <ul className='text-white font-medium font-mono text-2xl flex justify-center gap-x-16'>
      <li className=' '>
        <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "bg-blue-700" : "text-white"
                    }   hover:bg-blue-700 hover:text-white rounded-full w-32 text-center`
                  }>
                    Home
        </NavLink>
        </li>
      <li>
         <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "bg-blue-700" : "text-white"
                    }   hover:bg-blue-700 hover:text-white rounded-full w-38 text-center`
                  }>
                    Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "bg-blue-700" : "text-white"
                    }   hover:bg-blue-700 hover:text-white rounded-full w-32 text-center`
                  }>
                    About
        </NavLink>
      </li>
    </ul>
    </div>
   <div className='max-w-screen-lg my-28 mx-auto flex justify-center gap-x-5 '>
    <div className=' rounded-2xl  w-1/2'>
      <img src={programmerImage}
    alt="programmer-image"
    className='w-md rounded-2xl' />
    </div>
    <div className=' hover:shadow-gray-300 hover:shadow-2xl rounded-3xl gap-y-5 w-1/2 p-5 flex flex-col'>
      <h1 className='font-medium text-5xl'>Start your 🤖 programming</h1>
      <p className='text-blue-600 font-extrabold text-3xl'>Journey Now!!</p>
      <div className='mt-10'>
          <p className='text-2xl font-medium'>best leading institute for leaning programming</p>
      </div>
      <div className='border flex justify-center mt-10 bg-blue-700 rounded-lg border-blue-600'>
        <button className='p-2 text-2xl text-white'>Learn More</button>
      </div>
    </div>
   </div>
   <div className='max-w-screen-lg  mx-auto flex justify-center gap-x-5 '>
    <div className=' rounded-2xl  w-1/2'>
      <img src={programmerImage}
    alt="programmer-image"
    className='w-md rounded-2xl' />
    </div>
    <div className=' hover:shadow-gray-300 hover:shadow-2xl rounded-3xl gap-y-5 w-1/2 p-5 flex flex-col'>
      <h1 className='font-medium text-5xl'>Start your 🤖 programming</h1>
      <p className='text-blue-600 font-extrabold text-3xl'>Journey Now!!</p>
      <div className='mt-10'>
          <p className='text-2xl font-medium'>best leading institute for leaning programming</p>
      </div>
      <div className='border flex justify-center mt-10 bg-blue-700 rounded-lg border-blue-600'>
        <button className='p-2 text-2xl text-white'>Learn More</button>
      </div>
    </div>
   </div>
  </div>  
  )
}

export default App
