import {useState} from 'react'

const IconSkill = ({logoURL, nameLogo, widthLogo, heigthLogo}) => {
    const [logo, setLogoURL] = useState(false)

    const handleLogo = () => {
        setLogoURL(!logo)
    }
  return (
    <>
        <img onMouseEnter={handleLogo} onMouseLeave={handleLogo} className={` ${widthLogo} ${heigthLogo}  m-3 hover:cursor-pointer hover:scale-150 duration-200 ease-linear ${logo ? '' : 'grayscale'} `} src={logoURL} alt={nameLogo} />
    </>
  )
}

export default IconSkill