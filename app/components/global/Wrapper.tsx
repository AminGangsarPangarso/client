import React from "react";

type paramProps = {
  title?: string;
  children?: React.ReactElement;
};
const Wrapper = ({ title, children }: paramProps): React.ReactElement => {
  return (
    <section className="mx-auto container px-4 ">
      <h1 className="text-center text-xl mb-8">{title}</h1>
      {children}
    </section>
  );
};

export default Wrapper;
