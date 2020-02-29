import React from 'react';

import leftArrow from '../triangle-arrow-left.png';
import rightArrow from '../triangle-arrow-right.png';


class WeekHeader extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { ...props};  // This was some sort of bug in React?
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleLeftArrowClick() {
    console.log('LEFT ARROW WAS CLICKED');
  }

  handleRightArrowClick() {
    console.log('RIGHT ARROW WAS CLICKED');
  }

  handleClick() {
    console.log('WEEKHEADER DATE WAS CLICKED');
  }

  render() {

    console.log('*-*-*-*-*- this.state.weekData IN WEEKHEADER *-*-*-*-*-')
    console.log(this.state.data);
    let weekData = this.state.data;

    return (
      <div className="Week-header">
        <img className="Arrow" src={leftArrow} alt='leftArrow' onClick={this.handleLeftArrowClick}/>
          <div className='Week-header-text'>
            VIIKKO
          </div>
        <div className='Week-header-text' id='weekNumber' onClick={this.handleClick}>{weekData.weekNumber}</div>
        <div className='Week-header-text' id='monthName' onClick={this.handleClick}>{weekData.monthName}</div>
        <div className='Week-header-text' id='year' onClick={this.handleClick}>{weekData.year}</div>
        <img className="Arrow" src={rightArrow} alt='rightArrow' onClick={this.handleRightArrowClick}/>
      </div>
    );
  }
}

export default WeekHeader;