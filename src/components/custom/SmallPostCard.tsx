import React, { useRef, useState } from "react";
import SignlePostCard from "./SinglePostForSmall";

interface MyComponentProps {
	iscomment: boolean;
	setIscomment: React.Dispatch<React.SetStateAction<Boolean>>;
}

function SmallPostCard() {

  const [iscomment, setIscomment] = useState<boolean>(false);
  const closeRef = useRef<any>();

  const closeModal = (e: any) => {
    if (closeRef.current == e.target) setIscomment(!iscomment);
  };
  return (
    <div className="w-[33%] h-[30vh] m-[1px] object-cover object-center max-sm:h-[15vh] max-sm:w-[32.5%]  ">
      {iscomment && (
        <>
          <div
            ref={closeRef}
            onClick={closeModal}
            className="fixed z-8  w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center overflow-auto no-scrollbar  "
          >
            <SignlePostCard
              iscomment={iscomment}
              setIscomment={setIscomment} />
          </div>
        </>
      )}
      <img
        onClick={() => setIscomment(!iscomment)}
        src="https://images.unsplash.com/photo-1678047211247-062c4f6407b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
        className="w-[100%] h-[100%] m-[1px] object-cover object-center max-sm:h-[100%] max-sm:w-[100%] " />
    </div>
  );
}

export default SmallPostCard;
