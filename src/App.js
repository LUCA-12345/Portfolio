import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="root">
      <Header />
      <div className="parent">
        <div className="dividerOne" id="dividerOne"></div>
        <Content
          className="content"
          images={["/dashboard-lighttheme.png", "/Approvals.png"]}
        />
      </div>
    </div>
  );
}

export default App;
