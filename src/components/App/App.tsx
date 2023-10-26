import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <AppStyled>
      <div className="app-container">
        <header className="main-header">
          <h1 className="title">Añade tu perezoso</h1>
        </header>
      </div>
    </AppStyled>
  );
};

export default App;
