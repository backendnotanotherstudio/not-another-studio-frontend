import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import GalleryMobile from './components/GalleryMobile'

export const metadata = {
  title:'Not Another Studio'
}

const Home = () => {
  return (
    <div>
      <Hero/>
      <Gallery pageData={exampleData.images} />
      <GalleryMobile pageData={exampleData.images} />
    </div>
  )
}

export default Home


const exampleData = {
  images:[
    {
      url:'/images/home1.jpg'
    },
    {
      url:'/images/home2.jpg'
    },
    {
      url:'/images/home3.jpg'
    },
    {
      url:'/images/home4.jpg'
    },
    {
      url:'/images/home5.jpg'
    },
    {
      url:'/images/home6.jpg'
    },
    {
      url:'/images/home7.jpg'
    },
  ]
}