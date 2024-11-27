import React from "react";
import Header from "./components/Header/Header";
import KnowledgeTest from "./components/KnowledgeTest/KnowledgeTest";
import Traits from "./components/Traits/Traits";
import Diagnostics from "./components/Diagnostics/Diagnostics";
import Competency from "./components/Competency/Competency";
import Footer from "./components/Footer/Footer";
import "./App";

const App = () => {

  return (
    <div className="main-page">
      <Header />
      <KnowledgeTest />
      <Traits />
      <Diagnostics  />
      <Competency  />
      <Footer />
    </div>
  );
};

export default App;
