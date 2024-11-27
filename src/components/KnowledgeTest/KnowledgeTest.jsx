import React from "react";
import "./KnowledgeTest.css";
import "../../App.css";
import useFetch from "../../hooks/useFetch";
import SemiChart from "../SemiChart";
import LineChart from "../LineChart";
import ApexChart from "../LineChart";

const KnowledgeTest = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error } = useFetch(`${apiUrl}/knowlodge`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data);
    

    return (
        <section className="knowledge-test bg-light-bg py-6">
            <div className="container px-4 py-8">
                <h2 className="pl-6 mb-8 relative text-4xl font-semibold before:content-[''] before:absolute before:w-[13px] before:h-[43px] before:bg-[#0956AF] before:top-0 before:left-0 after:content-[''] after:absolute after:w-[1050px] after:h-[4px] after:bg-[#DEE2E6] after:top-5 after:right-0">
                    Билим тести
                </h2>
                <div className="flex">
                    <SemiChart></SemiChart>
                    <ApexChart></ApexChart>
                </div>
            </div>
        </section>
    );
};

export default KnowledgeTest;
