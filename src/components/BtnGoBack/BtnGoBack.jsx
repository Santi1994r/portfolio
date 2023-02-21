import { useState } from "react";
import { Link } from "react-router-dom";

const BtnGoBack = () => {
  const [btnGoBack, setBtnGoBack] = useState(false);

  const handleBtn = () => {
    setBtnGoBack(!btnGoBack);
  };

  return (
    <Link to={'/'} className='fixed'>
      <h3
        onMouseEnter={handleBtn}
        onMouseLeave={handleBtn}
        className=" text-white hover:cursor-pointer font-bold text-2xl sm:text-3xl m-10 hover:-translate-x-5 transition-all"
      >
        {btnGoBack ? "Santiago Ruiz" : "Santiago"}
      </h3>
    </Link>
  );
};

export default BtnGoBack;
