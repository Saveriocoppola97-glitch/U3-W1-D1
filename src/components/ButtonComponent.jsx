// Creo una costanze con un funzione che crea un componente
const ButtonComponent = function (props) {
  // ritorno 2 bottoni con testo e testo2 OBBLIGATORIO UN TAG VUOTO CHE RACCHIUDE
  return (
    <>
      <button>{props.testo}</button>
      <button>{props.testo2}</button>
    </>
  );
};
// IMPORTANTE SEMPRE ESPORTARLO PER RENDERLO UTILIZZABILE DA APP.jsx
export default ButtonComponent;
