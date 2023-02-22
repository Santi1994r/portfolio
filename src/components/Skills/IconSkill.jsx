import {useState} from 'react'

const IconSkill = ({logoURL, nameLogo, widthLogo}) => {
    const [logo, setLogoURL] = useState(false)

    const handleLogo = () => {
        setLogoURL(!logo)
    }
  return (
    <>
        <img onMouseEnter={handleLogo} onMouseLeave={handleLogo} className={` ${widthLogo} m-2 hover:cursor-pointer hover:scale-150 duration-200 ease-linear ${logo ? '' : 'grayscale'} `} src={logoURL} alt={nameLogo} />
    </>
  )
}

export default IconSkill