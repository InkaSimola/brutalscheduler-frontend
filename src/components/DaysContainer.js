import React from 'react';

import Timeblock from './Timeblock';


class DaysContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { ...props };  // This was some sort of bug in React?
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   console.log('SOMETHING WAS CLICKED');
  // }
  render() {
    let data = Object.values(this.state.data);
    console.log("*** typeof(data)")
    console.log(typeof (data))

    return (
      <div className="Container-Days">
        {/* TODO: https://reactjs.org/docs/lists-and-keys.html#keys */}
        {data.map(day => {
          return (
            <div className="Day">
              {day.map(block => {
                return (
                  <Timeblock data={block}/>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}


export default DaysContainer;