import "./App.css";

function App() {
  function handleClick() {
    alert("oiii mama ki obostaaaaa tumar heeeeeeee");
  }
  const handleClick2 = () => {
    alert("oiiii mama ami arfat viayaaaaaaa");
  };

  return (
    <>
      <h2>Amar name holo Ariful islam arfat</h2>
      <button onClick={handleClick}>Click Me pls</button>
      <button onClick={handleClick2}>Click me 2 pls</button>
      <button
        onClick={() => {
          alert("mama ami to shob kichu nije nije kore pelchi tai na mama");
        }}
      >
        ami nije nije korbo
      </button>
    </>
  );
}

export default App;
