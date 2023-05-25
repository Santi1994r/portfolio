import React from 'react'
import IconSkill from './IconSkill'

const Skills = () => {
  const propsIcons = [
    {
      urlIcon: 'https://i.imgur.com/F9Up8KU.png',
      nameAlt: 'html',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/1lPbeVN.png',
      nameAlt: 'css',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/yEmOWLP.png',
      nameAlt: 'javascript',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/4mSWRCz.png',
      nameAlt: 'react js',
      widthLogo: 'w-36'
    },
    /* {
      urlIcon: 'https://i.imgur.com/X5VoozL.png',
      nameAlt: 'python',
      widthLogo: 'w-28'
    }, */
    {
      urlIcon: 'https://i.imgur.com/eMRUOLh.png',
      nameAlt: 'sass',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/vucmtIm.png',
      nameAlt: 'bootstrap',
      widthLogo: 'w-36'
    },
    {
      urlIcon: 'https://i.imgur.com/mS8701n.png',
      nameAlt: 'tailwind',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/PRtDO7N.png',
      nameAlt: 'git',
      widthLogo: 'w-28'
    },
    {
      urlIcon: 'https://i.imgur.com/ztjyaIn.png',
      nameAlt: 'vite js',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/FuPrLd7.png',
      nameAlt: 'github',
      widthLogo: 'w-32'
    }
  ]
  return (
    <section id='Skills' className='flex flex-col items-center pb-10'>
        <h5 className=' text-white text-center mt-28 mb-5 text-4xl font-bold'>Habilidades</h5>

        <div className=' bg-indigo-900 w-auto h-56 sm:h-auto sm:w-8/12 overflow-x-auto overscroll-x-contain flex p-5 items-center sm:justify-center rounded-xl sm:overflow-hidden sm:flex-wrap mx-4'>

          {
            propsIcons.map((iconProp, index) => <IconSkill className='px-5' key={index} logoURL={iconProp.urlIcon} nameLogo={iconProp.nameAlt} widthLogo={iconProp.widthLogo} />)
          }

        </div>
    </section>
  )
}

export default Skills