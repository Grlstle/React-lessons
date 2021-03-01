import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Profile />
        </div>
    );
}

export default App;
