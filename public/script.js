document.addEventListener('DOMContentLoaded', (event) => {
    // Sample data for 2D plot
    const trace2d = {
        x: ['2024-08-20', '2024-08-21', '2024-08-22', '2024-08-23', '2024-08-24'],
        y: [55, 60, 65, 70, 75],
        type: 'scatter'
    };

    const layout2d = {
        title: '2D Air Quality Data',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Air Quality Index' }
    };

    Plotly.newPlot('chart2d', [trace2d], layout2d);

    // Sample data for 3D plot
    const trace3d = {
        x: ['2024-08-20', '2024-08-21', '2024-08-22', '2024-08-23', '2024-08-24'],
        y: ['Location A', 'Location B', 'Location C', 'Location D', 'Location E'],
        z: [
            [55, 58, 62, 65, 70],
            [60, 62, 65, 67, 72],
            [65, 67, 70, 72, 75],
            [70, 72, 75, 77, 80],
            [75, 77, 80, 82, 85]
        ],
        type: 'surface'
    };

    const layout3d = {
        title: '3D Air Quality Data',
        scene: {
            xaxis: { title: 'Date' },
            yaxis: { title: 'Location' },
            zaxis: { title: 'Air Quality Index' }
        }
    };

    Plotly.newPlot('chart3d', [trace3d], layout3d);
});
