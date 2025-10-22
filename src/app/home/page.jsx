import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import GalleryMobile from './components/GalleryMobile'
import { getHomePage } from '@/lib/api'

export const metadata = {
  title:'Not Another Studio'
}

const Home = async () => {

  const pageData = await getHomePage()
  console.log(pageData)

  return (
    <div>
      <Hero data={pageData?.data} />
      <Gallery pageData={pageData?.data} />
      <GalleryMobile pageData={pageData?.data} />
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