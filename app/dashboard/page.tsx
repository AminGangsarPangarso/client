import React from "react";
import Wrapper from "../components/global/Wrapper";
import CreateDiaryForm from "../components/auth/CreateDiaryForm";


const page = (): React.ReactElement => {
  return (
    <Wrapper title="ini dashboard">
     <CreateDiaryForm/>
    </Wrapper>
  );
};

export default page;
