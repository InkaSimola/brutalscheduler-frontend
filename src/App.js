import React from 'react';
import './App.css';
import WeekHeader from './components/WeekHeader';
import DayHeadersContainer from './components/DayHeadersContainer';
import DaysContainer from './components/DaysContainer';

// // TODO: Import these at some point before rendering and magically cache them for later use
// import weekdayImgPlaceholder from './weekday-img-placeholder.jpg';
// import defaultDayImg from './default-day-img.jpg';

require('dotenv').config();


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weekData: null,
      dayHeadersData: null,
      daysContainerData: null
    }
  };

  callAPI() {
    fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(json => this.setState({
          weekData: json.weekData,
          dayHeadersData: json.dayHeadersData,
          daysContainerData: json.daysContainerData
        }));
      // .then(console.log('DONE SETTING STATE'));

      // .then(res => res.text())
      // .then(res => this.setState({ apiResponse: res }));
  }

  // TODO: Deal with this properly
  componentDidMount() {
    this.callAPI();
  }

  // // TODO: Deal with this properly
  // UNSAFE_componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    if (!this.state.weekData) {
      return <div />
    }

    console.log('******** this.state.weekData IN APP ********');
    console.log(this.state.weekData);

    return (
      <div className="App">
        <div className='Container-main'>
          <WeekHeader data={this.state.weekData} />
          <DayHeadersContainer data={this.state.dayHeadersData} />
          <DaysContainer data={this.state.daysContainerData} />
        </div>
      </div>
    );
  }
}

export default App;
