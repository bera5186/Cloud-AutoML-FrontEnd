import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import Chart from "react-apexcharts";


export const DashBoardContent = () => {

    const [labels, setLabels] = useState([])
    const [options, setOptions] = useState({
        chart: {
            id: "example"
        }
    })
    const [series, setSeries] = useState([])
    const [type, setType] = useState("bar")

    const handleData = (data) => {

        // locally storing the labels
        const labels = []
        const values = []
        
        data.forEach(element => {
            labels.push(element.Name)
            values.push(element.Marks)
        });

        // set the state to parsed label
        const xaxis = {
            categories: labels
        }
        const yaxis = {
            name: "Marks",
            data: values
        }
        setLabels(labels)
        setOptions({
            ...options,
            xaxis
        })
        setSeries([yaxis])
    }

    return (
        <>
        <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
                <CSVReader parserOptions={{ header: true }} onFileLoaded={(data, fileInfo) => handleData(data)} />
            </div>


        <Chart options={options} series={series} type="histogram" width={500} height={320} />


        </>
    );
};
