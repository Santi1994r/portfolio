/* import anime from 'animejs/lib/anime.es.js'; */
import { useEffect } from 'react';

const IconSkill = ({logoURL, nameLogo, widthLogo, key}) => {

    /* const skillLogo = {
      targets: ".skillLogo",
      translateY: -30,
      direction: "alternate",
      easing: "easeInOutSine",
      duration: 800,
      loop: true
    };
    useEffect(() => {
      anime(skillLogo)
      
    }, []) */
  return (
    <>
      <img key={key} className={` ${widthLogo} m-2`} src={logoURL} alt={nameLogo} />
    </>
  )
}

export default IconSkill