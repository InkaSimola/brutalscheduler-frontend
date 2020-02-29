import React from 'react';

import timeblockImg from '../default-day-img.jpg'


// TODO: Get from config
const config = {
  viewStartHour: 7,
  viewEndHour: 23
}

// Get height of timeblock as fraction ([0,1]) of DaysContainer height
function getTimeblockHeight(data, config) {
  let start = parseInt(data.start.split(':')[0]);
  let end = parseInt(data.end.split(':')[0]);
  let range = config.viewEndHour - config.viewStartHour;
  let height = 100 * ((end - start) / range);
  console.log(`start, end, range: ${start}, ${end}, ${range}`);
  console.log(`Timeblock ${data.id} should have height ${height}`);
  return height;
}

class Timeblock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ...props };  // This was some sort of bug in React?
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(`TIMEBLOCK WITH id ${this.state.data.id} WAS CLICKED`);
  }

  render() {
    
    // Get height of Timeblock as % of DaysContainer height
    let height = getTimeblockHeight(this.state.data, config);
    height = (100 * height).toString().concat('%');

    // Destructure props/state
    let { id, who, color, start, end, where, description, img } = this.state.data;
    console.log(id, who, color, start, end, where, description, img);

    // TODO: replace mock and factor out img to separate component
    img = (!img) ? "" : timeblockImg;

    return(
      <div className='Timeblock border black' onClick={this.handleClick} style={{'backgroundColor': color, 'height' : height}}>
        <div className='Timeblock-text'>
          {start} - {end} {who} {where} {description}
        </div>
        <img className='Timeblock-img border white' src={img} alt='img'></img>
      </div>
    );
  }

}

export default Timeblock;