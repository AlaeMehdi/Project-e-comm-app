import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}  text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere quos dicta reiciendis cum ducimus incidunt sed iure quas, nihil nulla impedit odio obcaecati pariatur est, quidem nobis ea quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum, nemo molestiae cupiditate voluptatum modi sit, corporis, aliquid similique temporibus unde ipsa tenetur omnis quam quidem porro magni iusto maiores?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil autem explicabo sequi molestiae, pariatur necessitatibus perferendis beatae voluptas eaque voluptatibus maxime modi, nesciunt dolorum quisquam placeat impedit accusantium atque?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p  className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sapiente quaerat minima rem, eaque quibusdam eveniet expedita officia omnis totam, nostrum quod corrupti, dolorem quisquam mollitia suscipit sit amet dignissimos?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p  className='text-gray-600'>With our user-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sapiente quaerat minima rem, eaque quibusdam eveniet expedita officia omnis totam, nostrum quod corrupti, dolorem quisquam mollitia suscipit sit amet dignissimos?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>With our user-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sapiente quaerat minima rem, eaque quibusdam eveniet expedita officia omnis totam, nostrum quod corrupti, dolorem quisquam mollitia suscipit sit amet dignissimos?</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About
