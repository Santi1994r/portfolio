import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const Zoom = ({urlCertificate, altCertificate}) => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          
          <TransformComponent>
            <img
              className=" w-screen"
              src={urlCertificate}
              alt={altCertificate}
            />
          </TransformComponent>
          <div className="flex justify-around mt-3">
            <button className=" w-14 bg-zinc-900 rounded text-white hover:text-indigo-800" onClick={() => zoomIn()}>
              +
            </button>
             <button className=" w-14 bg-zinc-900 rounded text-white hover:text-indigo-800" onClick={() => zoomOut()}>
              -
            </button>
            <button
              className=" w-14 bg-zinc-900 rounded text-white hover:text-indigo-800"
              onClick={() => resetTransform()}
            >
              x
            </button>
          </div>
        </React.Fragment>
      )}
    </TransformWrapper>
  );
};

export default Zoom;
