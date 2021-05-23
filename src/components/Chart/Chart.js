import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
    const maxValue = Math.max(...props.dataPoints.map(exp => exp.value));

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                />)}
        </div>
    );
};

export default Chart;