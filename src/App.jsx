import Nav from './components/layout/Nav/Nav'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'

import ExperienceEducation from './pages/Experience/Experience'

import Footer from './components/layout/Footer/Footer'


export default function App() {
  return (
    <>
      <Nav />

      {/* Give each component a wrapper or ensure they have matching IDs */}
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><ExperienceEducation /></div>

      <div id="contact"><Footer /></div>

    </>
  )
}