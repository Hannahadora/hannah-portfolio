import React, { useEffect, useRef, useState } from "react";
import {
  slideDown,
  slideDownAndZoomOut,
  spinningCircle,
  ZoomInAndSlideUp
} from "../utils/GsapAnimations";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const circleRef = useRef(null);
  const [hideView, setHideView] = useState(false);

  useEffect(() => {
    slideDownAndZoomOut(circleRef);

    setTimeout(() => {
      ZoomInAndSlideUp(circleRef);
      setHideView(true);
    }, 5000);
  }, []);

  return (
    <div className={`${hideView ? "hidden" : "block"} h-screen`}>
      <div className="w-full h-screen flex items-center justify-center">
        <div
          ref={circleRef}
          className="w-[200px] h-[200px] p-[5px] bg-gray-300 shadow rounded-full mx-auto"
        >
          <div className="h-full text-center text-[#000] flex flex-col items-center justify-center">
            <img
              className="h-[50px] w-[50px] my-[16px] rounded-full border border-green-500"
              src="/images/me-avatar.png"
              alt=""
            />
            <p className="text-[11px] font-medium">Hannah Chiamaka Ejimofor</p>
            <p className="text-[11px] font-medium">Software Developer</p>
            <p className="text-[9px] mt-[20px]">© Since 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
