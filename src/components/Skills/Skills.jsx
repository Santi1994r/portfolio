import IconSkill from './IconSkill'

const Skills = () => {
  const propsIcons = [
    {
      urlIcon: 'https://i.imgur.com/Y7f1PRX.png',
      nameAlt: 'HTML',
      widthLogo: 'w-36'
    },
    {
      urlIcon: 'https://i.imgur.com/tRnosUD.png',
      nameAlt: 'CSS',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/9ha7IEv.png',
      nameAlt: 'JAVASCRIPT',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/3BbmpvF.png',
      nameAlt: 'REACT JS',
      widthLogo: 'w-36'
    },
    {
      urlIcon: 'https://i.imgur.com/oiswPUu.png',
      nameAlt: 'SASS',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/YMgCkGs.png',
      nameAlt: 'BOOTSTRAP',
      widthLogo: 'w-36'
    },
    {
      urlIcon: 'https://i.imgur.com/4flgLHg.png',
      nameAlt: 'TAILWIND',
      widthLogo: 'w-32'
    },
    {
      urlIcon: 'https://i.imgur.com/6slXyBz.png',
      nameAlt: 'GIT',
      widthLogo: 'w-28'
    },
    {
      urlIcon: 'https://i.imgur.com/Ah8OL7F.png',
      nameAlt: 'GITHUB',
      widthLogo: 'w-32'
    }
  ]
  return (
    <section id='Skills' className='flex flex-col items-center pb-10'>
        <h5 className=' text-white text-center mt-28 mb-5 text-4xl font-bold'>Habilidades</h5>

        <div className={` bg-indigo-900 h-56 sm:h-96 w-auto sm:w-8/12 overflow-x-auto overscroll-x-contain flex p-5 items-center sm:justify-center sm:items-end rounded-xl sm:overflow-hidden sm:flex-wrap mx-4`}>

          {
            propsIcons.map((iconProp, index) => <IconSkill className='px-5' key={index} logoURL={iconProp.urlIcon} nameLogo={iconProp.nameAlt} widthLogo={iconProp.widthLogo} />)
          }

        </div>
    </section>
  )
}

export default Skills