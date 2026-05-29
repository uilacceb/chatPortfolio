import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <MainLayout />
      <Analytics />
    </>
  );
}

export default App;
