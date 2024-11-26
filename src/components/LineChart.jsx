import React from 'react';
import ReactApexChart from 'react-apexcharts';
import useFetch from '../hooks/useFetch';

const LineChart = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error } = useFetch(`${apiUrl}/knowlodge`);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const chartOptions = {
        chart: {
            height: 350,
            type: 'line',
            zoom: { enabled: false },
        },
        title: {
            text: 'Product Trends by Date',
            align: 'left',
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' },
        xaxis: {
            categories: data?.LineChart?.labels || [], 
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5,
            },
        },
    };

    const chartSeries = [
        {
            name: 'Data Trend',
            data: data?.LineChart?.data || [], 
        },
    ];

    return (
        <div className="">
            <div className="chart-wrapper">
                <ReactApexChart
                    options={chartOptions}
                    series={chartSeries}
                    type="line"
                    height={350}
                />
                <div className="text-base text-[#495057] text-center">Line Chart Example</div>
            </div>
        </div>
    );
};

export default LineChart;
