import React from "react";
import ReactApexChart from "react-apexcharts";
import '../../App.css'

const SemiChart = ({ data }) => {
    if (!data?.semicharts || data.semicharts.length === 0) {
        return <p>No data available for charts.</p>;
    }

    return (
        <div className="test-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[620px]">
            {data.semicharts.map((semiChart, index) => {
                const chartState = {
                    series: [semiChart.percentage],
                    options: {
                        chart: {
                            type: "radialBar",
                            sparkline: { enabled: true },
                            animations: {
                                enabled: true,
                                speed: 800,
                                animateGradually: { enabled: true, delay: 150 },
                                dynamicAnimation: { enabled: true, speed: 350 },
                            },
                        },
                        plotOptions: {
                            radialBar: {
                                startAngle: -90,
                                endAngle: 90,
                                track: {
                                    background: "#e7e7e7",
                                    strokeWidth: "97%",
                                    margin: 5,
                                    color: semiChart.color,
                                },
                                dataLabels: {
                                    name: { show: false },
                                    value: {
                                        offsetY: -2,
                                        fontSize: "22px",
                                    },
                                },
                            },
                        },
                        fill: {
                            colors: [semiChart.color],
                        },
                        labels: [semiChart.label || "Result"],
                    },
                };

                return (
                    <div key={index} className="chart-wrapper">
                        <ReactApexChart
                            options={chartState.options}
                            series={chartState.series}
                            type="radialBar"
                        />
                        <div className="text-base text-[#495057] text-center">
                            {semiChart.label || "No Label"}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SemiChart;
