import CoursesDirectoryPage from "./pages/CoursesDirectoryPage";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CoursesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
