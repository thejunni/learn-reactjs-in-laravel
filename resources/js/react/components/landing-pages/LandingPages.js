import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// const LandingPages = () => {
//     const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
//     const data = {
//         labels: labels,
//         datasets: [
//             {
//                 label: "My First dataset",
//                 backgroundColor: "rgb(0, 0, 54)",
//                 borderColor: "rgb(0, 0, 54)",
//                 data: [91, 10, 5, 2, 20, 30, 45, 90, 77, 34],
//                 barThickness: 20,
//                 barPercentage: 0.9,
//             },
//         ],
//     };

//     const options = {
//         scales: {
//             x: {
//                 position: "top",
//                 barPercentage: 0.2,
//                 categoryPercentage: 0.8,
//                 grid: {
//                     display: false, // Menghilangkan grid pada sumbu x
//                 },
//             },
//             y: {
//                 grid: {
//                     display: false, // Menghilangkan grid pada sumbu y
//                 },
//             },
//         },
//         plugins: {
//             legend: {
//                 display: false, // Menghilangkan legend
//             },
//         },
//     };

//     return (
//         <div>
//             <Bar data={data} options={options} />
//         </div>
//     );
// };
const LandingPages = () => {
    const data_chart = [91, 10, 5, 2, 20, 30, 45, 90, 77, 39];
    const data = {
        // labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        labels: data_chart,
        datasets: [
            {
                // label: "My First dataset",
                backgroundColor: "rgb(0, 0, 54)",
                borderColor: "rgb(0, 0, 54)",
                data: data_chart,
                barThickness: 20,
                barPercentage: 0.9,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                position: "top",
                barPercentage: 0.2,
                categoryPercentage: 0.8,
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};
export default LandingPages;
