import React from "react";
import { GlobalProvider } from "../../context/GlobalContextProvider";
import marioCarga from '../../images/carga.gif'

const Spinner = () => {
  const { loading } = GlobalProvider()
  return (
    <>
      {loading && (
          <div className="w-100
                          position-fixed
                          top-0 
                          left-0
                          bg-light
                          d-flex 
                          align-items-center 
                          justify-content-center 
                          full-height"
            style={{ zIndex: 100, height: '100%' }}
          >
            <img
              alt='margio-cargando'
              src={marioCarga}
              style={{ width: "15rem", height: "15rem" }}
            />
          </div>
      )}
    </>
  );
};

export default Spinner;