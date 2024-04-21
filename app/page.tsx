import CardDiares from "./components/global/(diary)/CardDiares";

import Wrapper from "./components/global/Wrapper";


export const revalidate = 0 
export default function page(): React.ReactElement {
  return (
    <Wrapper >
      <CardDiares />
    </Wrapper>
  );
}
