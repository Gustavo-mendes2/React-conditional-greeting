import "./App.css";

function App() {
  return <Container />;
}
const Container = () => {
  return (
    <div className="container">
      <Time />
      <Greeting />
    </div>
  );
};

const Time = () => {
  let hour = new Date();

  return (
    <div className="time">
      <p>
        {hour.getHours()}:{hour.getMinutes()}
      </p>
    </div>
  );
};

const Greeting = () => {
  let greeting = "null";
  let actualDate = new Date();

  if (actualDate.getHours() < 12) {
    greeting = "Bom dia";
  } else if (actualDate.getHours() >= 12 && actualDate.getHours() < 18) {
    greeting = "Boa tarde";
  } else {
    greeting = "Boa noite";
  }

  return (
    <div className="greeting">
      <p>{greeting}</p>
    </div>
  );
};
export default App;
