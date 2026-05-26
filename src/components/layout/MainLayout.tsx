import PromptInterface  from "../prompt/PromptInterface";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <PromptInterface  />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
