import React from "react";
import Wrapper from "./components/global/Wrapper";

const loading = (): React.ReactElement => {
  return (
    <Wrapper title="loading...">
      <div className="flex justify-center">
      <span className="loading loading-infinity loading-lg"></span>
      </div>
    </Wrapper>
  );
};

export default loading;
