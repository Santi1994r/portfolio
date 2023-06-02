
const IconSkill = ({logoURL, nameLogo, widthLogo, key}) => {

  return (
    <>
      <img key={key} className={` ${widthLogo} m-2`} src={logoURL} alt={nameLogo} />
    </>
  )
}

export default IconSkill