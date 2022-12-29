import React from "react";

class Desbtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render() {
    let boxClass = ["follwbtn"];
    if(this.state.addClass) {
      boxClass.push('unfolbtn');
    }
    return(
        <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "- Unfollow" : "+ Follow"}<br /> </div>       
    );
  }
}


export default Desbtn