import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ data }) => {
    const chartData = React.useMemo(() => {
        if (!data?.lineChart) {
            return {
                series: [{ name: "No Data", data: [] }],
                options: {
                    chart: { height: 350, type: "line" },
                    xaxis: { categories: [] },
                },
            };
        }

        return {
            series: [
                {
                    name: "API Data",
                    data: data.lineChart.data || [],
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: "line",
                    zoom: { enabled: false },
                },
                dataLabels: { enabled: false },
                stroke: { curve: "straight" },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"],
                        opacity: 0.5,
                    },
                },
                xaxis: {
                    categories: data.lineChart.labels || [],
                },
            },
        };
    }, [data]);

    return (
        <div>
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="line"
                height={200}
            />
        </div>
    );
};

export default LineChart;
