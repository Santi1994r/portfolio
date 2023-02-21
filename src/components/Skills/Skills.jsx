import React from 'react'
import IconSkill from './IconSkill'

const Skills = () => {
  return (
    <section className='flex flex-col items-center pb-10'>
        <h5 className=' text-white text-center mt-28 mb-5 text-4xl font-bold'>Habilidades</h5>

        <div className=' bg-indigo-900 w-8/12 flex justify-center rounded-xl p-8 flex-wrap'>
            <IconSkill logoURL={'https://i.imgur.com/F9Up8KU.png'} nameLogo={'html'} widthLogo={'w-32'} />
            <IconSkill logoURL={'https://i.imgur.com/1lPbeVN.png'} nameLogo={'css'} widthLogo={'w-32'} />
            <IconSkill logoURL={'https://i.imgur.com/yEmOWLP.png'} nameLogo={'javaScript'} widthLogo={'w-32'} />
            <IconSkill logoURL={'https://i.imgur.com/4mSWRCz.png'} nameLogo={'react js'} widthLogo={'w-36'} />
            <IconSkill logoURL={'https://i.imgur.com/X5VoozL.png'} nameLogo={'python'} widthLogo={'w-28'} />
            <IconSkill logoURL={'https://i.imgur.com/eMRUOLh.png'} nameLogo={'sass'} widthLogo={'w-32'} />
            <IconSkill logoURL={'https://i.imgur.com/mS8701n.png'} nameLogo={'bootstrap'} widthLogo={'w-44'} />
            <IconSkill logoURL={'https://i.imgur.com/DA7OuWH.png'} nameLogo={'formik'} widthLogo={'w-28'} />
            <IconSkill logoURL={'https://i.imgur.com/PRtDO7N.png'} nameLogo={'git'} widthLogo={'w-24'} heigthLogo={'h-40'} />
            <IconSkill logoURL={'https://i.imgur.com/ztjyaIn.png'} nameLogo={'vite js'} widthLogo={'w-32'} />
            <IconSkill logoURL={'https://i.imgur.com/FuPrLd7.png'} nameLogo={'github'} widthLogo={'w-32'} />

        </div>
    </section>
  )
}

export default Skills