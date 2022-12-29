import React from "react";

class Mobbrn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render() {
    let boxClass = ["box"];
    if(this.state.addClass) {
      boxClass.push('green');
    }
    return(
        <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "-" : "+"}<br /> </div>       
    );
  }
}


export default Mobbrn