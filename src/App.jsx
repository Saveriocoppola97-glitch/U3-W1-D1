import MyClassComponent from "./components/MyClassComponent";
import ButtonComponent from "./components/ButtonComponent";

const Application = function App() {
  return (
    <>
      <ButtonComponent testo="Ciao!" />
      <ButtonComponent testo={100} />
      <ButtonComponent testo2="Ciaooo!" />
      <MyClassComponent
        cat="https://placecats.com/300/200"
        catAlt="Desc Gatto"
      />
    </>
  );
};

export default Application;
