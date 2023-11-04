import { useState } from 'react'
import './App.css'
import Appbar from './Appbar'
import Intro from './Intro'
import Deliverables from './Deliverables'
import Projects from './Projects'
import Works from './Works'
import Deliverables2 from './Deliverables2'
import Skills from './Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='rootDiv'>
        <div className='appBarAndFrontBanner'>
          <Appbar/>
          <Intro/>
          <Skills/>
        </div>
        {/* <Projects/> */}
        <Deliverables/>
        {/* <Deliverables2/> */}
      </div>
    </>
  )
}

export default App
