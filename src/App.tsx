import "./App.scss";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container container--center">
          <header>
            <h1 className="logo">
              Admin Panel <span>Begemotoo</span>
            </h1>
          </header>
          <div className="content mt-4">
            <Form type="text" title="Придумайте описание для картинок" />
            <Form type="image" title="Загрузите картинку или картинки" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
