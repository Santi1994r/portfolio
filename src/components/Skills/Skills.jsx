import IconSkill from "./IconSkill";

const Skills = () => {
  const propsIcons = [
    {
      urlIcon: "https://i.imgur.com/Y7f1PRX.png",
      nameAlt: "HTML",
      widthLogo: "w-36",
      type: "development",
    },
    {
      urlIcon: "https://i.imgur.com/tRnosUD.png",
      nameAlt: "CSS",
      widthLogo: "w-32",
      type: "development",
    },
    {
      urlIcon: "https://i.imgur.com/9ha7IEv.png",
      nameAlt: "JAVASCRIPT",
      widthLogo: "w-32",
      type: "development",
    },
    {
      urlIcon: "https://i.imgur.com/3BbmpvF.png",
      nameAlt: "REACT JS",
      widthLogo: "w-36",
      type: "bookstore",
    },
    {
      urlIcon: "https://i.imgur.com/oiswPUu.png",
      nameAlt: "SASS",
      widthLogo: "w-32",
      type: "development",
    },
    {
      urlIcon: "https://i.imgur.com/YMgCkGs.png",
      nameAlt: "BOOTSTRAP",
      widthLogo: "w-36",
      type: "framework",
    },
    {
      urlIcon: "https://i.imgur.com/4flgLHg.png",
      nameAlt: "TAILWIND",
      widthLogo: "w-32",
      type: "bookstore",
    },
    {
      urlIcon: "https://i.imgur.com/6slXyBz.png",
      nameAlt: "GIT",
      widthLogo: "w-28",
      type: "control",
    },
    {
      urlIcon: "https://i.imgur.com/Ah8OL7F.png",
      nameAlt: "GITHUB",
      widthLogo: "w-32",
      type: "control",
    },
    {
      urlIcon: "https://i.imgur.com/aYIDtxr.png",
      nameAlt: "WORDPRESS",
      widthLogo: "w-48",
      type: "cms",
    },
  ];
/*   const iconDevelopment = propsIcons.filter(
    (iconProp) => iconProp.type === "development"
  );
  const iconBookstore = propsIcons.filter(
    (iconProp) => iconProp.type === "development"
  );
  const iconFramework = propsIcons.filter(
    (iconProp) => iconProp.type === "development"
  );
  const iconControl = propsIcons.filter(
    (iconProp) => iconProp.type === "development"
  );
  const iconCMS = propsIcons.filter(
    (iconProp) => iconProp.type === "development"
  ); */
  const handleFilter = (type) => {
    return propsIcons.filter(
      (iconProp) => iconProp.type === type
    );
  }
  return (
    <section id="Skills" className="flex flex-col items-center">
      <h5 className=" text-white text-center mt-28 mb-5 text-4xl font-bold">
        Habilidades
      </h5>

      <div className=" bg-light-blue rounded-xl flex flex-col w-11/12 sm:w-8/12">
        <h6 className=" text-white text-center mt-10 text-3xl font-medium">
          Desarrollo Web
        </h6>
        <div
          className={`flex sm:flex-row h-56 sm:h-auto w-auto overflow-x-auto overscroll-x-contain p-5 items-center sm:justify-center sm:items-end sm:flex-wrap  sm:overflow-hidden mx-4`}
        >
          
          {handleFilter('development').map((iconProp, index) => (
            <IconSkill
              className="px-5"
              key={index}
              logoURL={iconProp.urlIcon}
              nameLogo={iconProp.nameAlt}
              widthLogo={iconProp.widthLogo}
            />
          ))}
        </div>
        <h6 className=" text-white text-center mt-10 text-3xl font-medium">
          Librerías
        </h6>
        <div
          className={`flex sm:flex-row h-56 sm:h-auto w-auto overflow-x-auto overscroll-x-contain p-5 items-center sm:justify-center sm:items-end sm:flex-wrap  sm:overflow-hidden mx-4`}
        >
          
          {handleFilter('bookstore').map((iconProp, index) => (
            <IconSkill
              className="px-5"
              key={index}
              logoURL={iconProp.urlIcon}
              nameLogo={iconProp.nameAlt}
              widthLogo={iconProp.widthLogo}
            />
          ))}
        </div>
        <h6 className=" text-white text-center mt-10 text-3xl font-medium">
          Frameworks
        </h6>
        <div
          className={`flex sm:flex-row h-56 sm:h-auto w-auto overflow-x-auto overscroll-x-contain p-5 items-center sm:justify-center sm:items-end sm:flex-wrap  sm:overflow-hidden m-auto`}
        >
          
          {handleFilter('framework').map((iconProp, index) => (
            <IconSkill
              className="px-5"
              key={index}
              logoURL={iconProp.urlIcon}
              nameLogo={iconProp.nameAlt}
              widthLogo={iconProp.widthLogo}
            />
          ))}
        </div>
        <h6 className=" text-white text-center mt-10 text-3xl font-medium">
          Control de versiones
        </h6>
        <div
          className={`flex sm:flex-row h-56 sm:h-auto w-auto overflow-x-auto overscroll-x-contain p-5 items-center sm:justify-center sm:items-end sm:flex-wrap  sm:overflow-hidden m-auto`}
        >
          
          {handleFilter('control').map((iconProp, index) => (
            <IconSkill
              className="px-5"
              key={index}
              logoURL={iconProp.urlIcon}
              nameLogo={iconProp.nameAlt}
              widthLogo={iconProp.widthLogo}
            />
          ))}
        </div>
        <h6 className=" text-white text-center mt-10 text-3xl font-medium">
          CMS
        </h6>
        <div
          className={`flex sm:flex-row h-56 sm:h-auto w-auto overflow-x-auto overscroll-x-contain p-5 items-center sm:justify-center sm:items-end sm:flex-wrap  sm:overflow-hidden m-auto`}
        >
          
          {handleFilter('cms').map((iconProp, index) => (
            <IconSkill
              className="px-5"
              key={index}
              logoURL={iconProp.urlIcon}
              nameLogo={iconProp.nameAlt}
              widthLogo={iconProp.widthLogo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

/* <section id='Skills' className='flex flex-col items-center pb-10'>
        <h5 className=' text-white text-center mt-28 mb-5 text-4xl font-bold'>Habilidades</h5>

        <div className={` bg-indigo-900 h-56 sm:h-auto w-auto sm:w-8/12 overflow-x-auto overscroll-x-contain flex p-5 items-center sm:justify-center sm:items-end rounded-xl sm:overflow-hidden sm:flex-wrap mx-4`}>

          {
            propsIcons.map((iconProp, index) => <IconSkill className='px-5' key={index} logoURL={iconProp.urlIcon} nameLogo={iconProp.nameAlt} widthLogo={iconProp.widthLogo} />)
          }

        </div>
    </section> */
