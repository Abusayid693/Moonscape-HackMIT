import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Stack, Animation } from "@devexpress/dx-react-chart";
// import "./bar.scss"
// import { energyConsumption as data } from '../../../demo-data/data-vizualization';



const legendStyles = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row",
    height: "10px",
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: "nowrap",
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
  legendLabelBase
);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    data,
    };
  }
//   mdata=this.props.data;

  render() {
    // const { data: chartData } = this.state;

    return (
      <div className="my-g">
        <Paper>
          <Chart data={this.props.data}>
            <ArgumentAxis />
            <ValueAxis max={100} />

            <BarSeries
              name="Hydro-electric"
              valueField="hydro"
              argumentField="country"
            />
            <BarSeries name="Oil" valueField="oil" argumentField="country" />
            <Animation />
            <Legend
              position="bottom"
              rootComponent={Root}
              labelComponent={Label}
            />
            {/* <Title text="" /> */}
            <Stack
              stacks={[
                {
                  series: [
                    "Hydro-electric",
                    "Oil",
                    "Natural gas",
                    "Coal",
                    "Nuclear",
                  ],
                },
              ]}
            />
          </Chart>
        </Paper>
      </div>
    );
  }
}
