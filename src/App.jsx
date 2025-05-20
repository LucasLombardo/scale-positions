import Settings from "./components/Settings";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <Header />
      <Settings />
      <div className="pt-20 min-h-screen">
        <Content />
      </div>
    </div>
  );
}

export default App;
