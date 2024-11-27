import React from "react";
import Header from "./components/Header/Header";
import KnowledgeTest from "./components/KnowledgeTest/KnowledgeTest";
import Traits from "./components/Traits/Traits";
import Diagnostics from "./components/Diagnostics/Diagnostics";
import Competency from "./components/Competency/Competency";
import Footer from "./components/Footer/Footer";
import "./App";

const App = () => {

  const competencies = [
    { name: "Strategik fikrlash", value: 85 },
    { name: "Natijaga yo'naltirish", value: 75 },
    { name: "O'z-o'zini rivojlantirish", value: 98 },
    { name: "Kommunikativlik", value: 45 },
  ];

  const description =
    "Lorem ipsum is simply dummy text of the printing and typesetting industry.";
    

  return (
    <div className="main-page">
      <Header />
      <KnowledgeTest />
      <Traits />
      <Diagnostics description={description} />
      <Competency competencies={competencies} />
      <Footer />
    </div>
  );
};

export default App;
