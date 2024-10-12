import BentoGrid from "@/registry/block/bento-grid-01/bento-grid";
import React from "react";

const PreviewPage = () => {
  return (
    <div className="h-fullscreen w-full flex justify-center items-center ">
      <div className="max-w-7xl mx-auto mt-96">
        {/* <SonicBento /> */}
        {/* <DesignBoard /> */}
        <BentoGrid />
      </div>
    </div>
  );
};

export default PreviewPage;
