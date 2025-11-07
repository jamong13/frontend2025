import MainContent from "./components/MainContent";
import Header from "./components/Header";
import "./App.css";
import AppProvider from "./context/AppContext";
export default function App() {
  return (
    <AppProvider>
      <Header />
      <MainContent />
    </AppProvider>
  );
}
