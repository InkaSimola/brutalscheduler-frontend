import React from 'react';

import weekdayImgPlaceholder from '../weekday-img-placeholder.jpg'


class DayHeadersContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props };  // This was some sort of bug in React?
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {}

  render() {
    // Convert props/state to array
    let data = Object.values(this.state.data);

    return (
      <div className="Container-DayHeaders">
        {/* TODO: https://reactjs.org/docs/lists-and-keys.html#keys */}
        {data.map(day => {
          return (
            <div className='DayHeader border gray'>
              <div className='DayHeader-text' id='dayName'>{day.weekdayName}</div>
              <div id='day' className='DayHeader-text'>
                {day.dayNumber}.{day.monthNumber}.
              </div>
              <img className='DayHeader-img border white' src={weekdayImgPlaceholder} alt='weekday-pic.png' onClick={() => console.log(`${day.weekdayName} IMAGE WAS CLICKED`)}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DayHeadersContainer;
