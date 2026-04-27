// IMPORTIAMO I COMPONENTI CREATI INSERENDO IL PERCORSO DEL FILE
import MyClassComponent from "./components/MyClassComponent";
import ButtonComponent from "./components/ButtonComponent";
// CREIAMO UNA FUNZIONE CHIAMATA Application CHE RITORNA I COMPONENTI CAMBIANDO IL TESTO
const Application = function Application() {
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
//ESPORTIAMO
export default Application;
