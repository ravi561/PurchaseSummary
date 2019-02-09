import React, { Component } from 'react'

export default class LinkLabel extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibility: false,
            labelState : false,
            labelLink : this.props.LabelValue
        }
        this.changeLabelState = this.changeLabelState.bind(this);
     
    }
    
    changeLabelState(e){
        console.log("I am clicked",this.state.labelState)
      e.preventDefault();
        if(this.state.labelState == false ){
            this.setState({
                labelLink:this.props.newLabelValue,
                labelState:true,
                visibility:true
            });
            console.log(this.props.callBackFromParent(this.state.visibility))
           
        }else if(this.state.labelState == true){
            this.setState({
                labelLink:this.props.LabelValue,
                labelState:false,
                visibility:false
            })
            console.log(this.props.callBackFromParent(this.state.visibility))
        }
        
    }
  
  render() {
      let labelStae = this.state.lableState

    return (
      <div>
      <a onClick={this.changeLabelState}>{this.state.labelLink}</a>
      </div>
    )
  }
}
