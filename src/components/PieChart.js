import React from 'react';
import CanvasJSReact from '../canvasjs.react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends React.Component {
    render() {
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Overview - January 2020"
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 25, label: "Income" },
                    { y: 25, label: "Expenses" },
                    { y: 20, label: "Savings" },
                    { y: 30, label: "Debts" }
                ]
            }]
        }

        return (
            <Col className="custom-container xs={12} md={6}">
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </Col>
        );
    }
}

export default PieChart;   