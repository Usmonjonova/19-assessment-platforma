import React from "react";
import "./Competency.css";
import RadialBars from "./DonutChart";
import qrCode from "../../assets/images/qr-code.svg"

const Competency = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    return (
        <section className="competence py-6">
            <div className="container px-4 py-8">
                <h2 className="pl-6 mb-8 relative text-4xl font-semibold before:content-[''] before:absolute before:w-[13px] before:h-[43px] before:bg-[#0956AF] before:top-[-4px] before:left-0 after:content-[''] after:absolute after:w-[653px] after:h-[4px] after:bg-[#DEE2E6] after:top-5 after:right-0">
                    Компетенцияларнинг намоён булиши
                </h2>
                <div className="charts-container flex">
                    <RadialBars></RadialBars>

                    <img src={qrCode} alt="qr-code" />
                </div>
            </div>
        </section>
    );
};

export default Competency;
