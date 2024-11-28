import React from "react";
import "./KnowledgeTest.css";
import "../../App.css";
import useFetch from "../../hooks/useFetch";
import SemiChart from "./SemiChart";
import LineChart from "../LineChart";
import ProgressBar from "../ProgressBar"; 
import brain from '../../assets/images/brain.svg'
import vector from "../../assets/images/vector.svg"

const KnowledgeTest = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error } = useFetch(`${apiUrl}/knowlodge`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const overallProgress = parseInt(data?.overall?.replace("%", "") || 0, 10);

    return (
        <section className="knowledge-test bg-light-bg py-6">
            <div className="container px-4 py-8">
                <h2 className="pl-6 mb-8 relative text-4xl font-semibold before:content-[''] before:absolute before:w-[13px] before:h-[43px] before:bg-[#0956AF] before:top-[-4px] before:left-0 after:content-[''] after:absolute after:w-[1050px] after:h-[4px] after:bg-[#DEE2E6] after:top-5 after:right-0">
                    Билим тести
                </h2>
                <div className="flex  gap-6">
                    <SemiChart data={data} />
                    <div className="flex flex-col">
                        <LineChart data={data} />
                        <ProgressBar progress={overallProgress} />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-2 w-[280px] justify-center px-[30px]">
                            <div><img src={brain} alt="brain-svg" /></div>
                            <div className="text-sm font-normal"><span className="font-medium">{data?.thanOthers} фоиз</span> иштирокчидан яхширок натижа</div>
                        </div>
                        <div>
                            <img src={vector} alt="vector-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KnowledgeTest;
