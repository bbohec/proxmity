export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }
  componentWillUnmount() {
 		clearInterval(this.timerID);
  }
  tick() {
    this.setState({date: new Date()});
  }
  render() {
    return (
      <div className="alert alert-warning" role="alert">
				<strong>TIME</strong> {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}