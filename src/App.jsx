import React from 'react'
import { brand, navLinks, socials, hero, about, skillGroups, projects, services, testimonials, contact } from './data/portofolio'
import { Navbar,Hero,About,Skills,Projects,Services,Testimonial,Contact,Footer } from './components'

function App() {
  return (
    <div className='min-h-screen bg-base-100 text-base-center'>
        <Navbar brand={brand} links={navLinks}/>
      <main>
        <Hero {...hero} socials={socials}/>
        <About {...About}/>
        <Skills Groups={skillGroups}/>
        <Projects Projects={projects}/>
        <Services Services={services}/>
        <Testimonial Testimonials={Testimonial}/>
        <Contact Contact={Contact} socials={socials} onSubmit={(FormData)=> 
          console.log('contact form:', FormData)}/>
      </main>
      <Footer brand={brand.name} builWith="React, Next.js Tailwindcss"/>
    </div>
  )
}

export default App