import React from 'react'
// import Cards from '../../Components/Cards/Cards'
//Components
import Head from "../../Components/Home/Head/Head"
import Navbar from '../../Components/Common/Navbar/Navbar'
import Footer from '../../Components/Common/Footer/Footer'
// import Testimonials from '../../Components/Home/Testimonials/Testimonials'
// import DoctorsProfile from '../../Components/DoctorsProfile/DoctorsProfile'
import DoctorsCard from '../../Components/Home/DoctorsCard/DoctorsCard'
// import Hero from '../../Components/Hero/hero'
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Head />
      {/* <DoctorsCard /> */}
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}
