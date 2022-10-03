import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";

const Header = () => {
  const [lightActive, setLightActive] = useState(true);

  return (
    <div>
      <div className="d-flex justify-content-between w-100 p-3 font-600">
        <span>
          <AiOutlineArrowLeft />
        </span>
        Selfit
        <span>
          {lightActive ? (
            <BsFillLightbulbFill onClick={() => setLightActive(!lightActive)} />
          ) : (
            <BsFillLightbulbOffFill
              onClick={() => setLightActive(!lightActive)}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
