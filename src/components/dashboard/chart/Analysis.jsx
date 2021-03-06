import React from 'react';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export
} from 'devextreme-react/pie-chart';
class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
  }
    this.pointClickHandler = this.pointClickHandler.bind(this);
    this.legendClickHandler = this.legendClickHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { data: prevData} = prevProps;
    const { data: nextData } = this.props;
    if (prevData !== nextData){
        this.setState({
            data:nextData
        })
    }

}
  render() {
    return (
      <PieChart
        id="pie"
        dataSource={this.state.data}
        palette="Bright"
        title={"Sentiment Analysis"}
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
      >
        <Series
          argumentField="sentiment"
          valueField="value"
        >
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>
    );
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    let arg = e.target;
    let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }
}

export default Analysis;
