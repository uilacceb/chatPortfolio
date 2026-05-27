import PromptInterface from "../prompt/PromptInterface";
import Footer from "./Footer";
import Header from "./Header";
import "../../CSS/layout.css";

const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <PromptInterface />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
