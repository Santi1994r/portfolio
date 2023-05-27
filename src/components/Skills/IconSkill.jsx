import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';

const IconSkill = ({logoURL, nameLogo, widthLogo, logo, urlText}) => {

    const skillLogo = {
      targets: ".skillLogo",
      translateY: -30,
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 800,
      loop: true
    };
    useEffect(() => {
      anime(skillLogo)
      
    }, [logo])
    

    /* const handleLogo = () => {
      setLogoURL(!logo)
    } */
  return (
    
    <>
{/*     <img onMouseEnter={handleLogo} onMouseLeave={handleLogo} className={` ${widthLogo} m-2 hover:cursor-pointer skillLogo ${logo ? ' opacity-20' : null}`} src={logoURL} alt={nameLogo} /> */}
    {
      logo 
      ? <img className={` ${widthLogo} m-2 skillLogo rounded-full`} src={urlText.urlText} alt={nameLogo} />
      : <img className={` ${widthLogo} m-2 skillLogo`} src={logoURL} alt={nameLogo} />
    }
    </>
  )
}
/* <span className=' text-white text-xl font-bold w-auto m-2 sm:w-32 text-center'>{nameLogo}</span> */

export default IconSkill

/*  import anime from 'animejs/lib/anime.es.js';
import './skillIcon.css'


const IconSkill = ({logoURL, nameLogo, widthLogo}) => {

    const skillLogo = {
      targets: ".skillLogo",
      translateY: -15,
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 800,
      loop: true
    };
    anime(skillLogo)
    
  return (
    
    <div className=' flex flex-col items-center'>
        <img className={` ${widthLogo} m-2 hover:cursor-pointer skillLogo `} src={logoURL} alt={nameLogo} />
        
    </div>
  )
}

export default IconSkill*/