import React, { useState } from 'react'
import IconSkill from './IconSkill'

const Skills = () => {
  const propsIcons = [
    {
      urlIcon: 'https://i.imgur.com/F9Up8KU.png',
      nameAlt: 'HTML',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/1lPbeVN.png',
      nameAlt: 'CSS',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/yEmOWLP.png',
      nameAlt: 'JAVASCRIPT',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/4mSWRCz.png',
      nameAlt: 'REACT JS',
      widthLogo: 'w-36'
    },
    {
      urlIcon: 'https://i.imgur.com/eMRUOLh.png',
      nameAlt: 'SASS',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/vucmtIm.png',
      nameAlt: 'BOOTSTRAP',
      widthLogo: 'w-36'
    },
    {
      urlIcon: 'https://i.imgur.com/mS8701n.png',
      nameAlt: 'TAILWIND',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/PRtDO7N.png',
      nameAlt: 'GIT',
      widthLogo: 'w-28'
    },
    {
      urlIcon: 'https://i.imgur.com/FuPrLd7.png',
      nameAlt: 'GITHUB',
      widthLogo: 'w-32'
    }
  ]
  const [logo, setLogoURL] = useState(false)

  const handleIcons = (childrenProp) => {
    setLogoURL(childrenProp)
    logo
  }/* ${logo ? 'sm:w-52 w-auto' : 'sm:w-8/12'} */
  return (
    <section id='Skills' className='flex flex-col items-center pb-10'>
        <h5 className=' text-white text-center mt-28 mb-5 text-4xl font-bold'>Habilidades</h5>
        <div className={` bg-indigo-900 h-56 sm:h-96 sm:w-8/12  overflow-x-auto overscroll-x-contain flex p-5 items-center sm:justify-center sm:items-end rounded-xl sm:overflow-hidden sm:flex-wrap mx-4`}>

          {
            propsIcons.map((iconProp, index) => <IconSkill logo={logo} className='px-5' key={index} logoURL={iconProp.urlIcon} nameLogo={iconProp.nameAlt} widthLogo={iconProp.widthLogo} />)
          }

        </div>
          <button onClick={() => setLogoURL(!logo)} className=' bg-zinc-600 text-white rounded-lg p-1 hover:bg-zinc-500'>{logo ? 'Mostrar logos' : 'Mostrar nombres'}</button>
    </section>
  )
}

export default Skills