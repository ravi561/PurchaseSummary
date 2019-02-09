import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import { Button, Tooltip } from 'reactstrap';
import PropTypes from 'prop-types';

import './ProductDisplay.css';
import LinkLabel from '../LinkLabel/LinkLabel';



export default class ProductDisplay extends Component {  
    constructor(props){
        super(props);
        this.state={
          showComponent:true,
          label:"Hi"
        }
       this.parentHandler = this.parentHandler.bind(this)
    }
  parentHandler(labelState,e){
   
  console.log("I am in parent visibility is ",labelState)
 this.setState({showComponent:labelState});
  }
  render() {
    let promoComponent;
    if(this.state.showComponent){
      promoComponent = ""
    }else{
      promoComponent = <LinkLabel LabelValue="Apply promo discount ot " />
    }
    return (
      <div className="product-display">
        <div class="card text-center">
            <div class="card-header">
                {this.props.checkOutTitle}
            </div>
            <div class="card-body">
               <div className="col">
                    <div className="row ">
                    <div className="col-8">Sub Total</div>  <div className="col-4">Hi</div>
                    </div>
                    <div className="row ">
                    <div className="col-8">
                    {/* <LinkLabel data-toggle="tooltip" title="To View Your Savings" data-placement="bottom" LabelValue="PickUp Savings"  newLabelValue="PickUp Savings" />  */}
                   <a data-toggle="tooltip" data-placement="bottom" title="Picking up your order helps cut costs and we pass the savings on to you">Pickup savings</a></div>
                   
                      <div className="col-4">Hi</div>
                    </div>
                    <div className="row ">
                    <div className="col-8">Est. taxes & fees</div>  <div className="col-4">Hi</div>
                    </div> 
                   
               </div>
            </div>
            <hr/>
            <div class="card-body">
               <div className="col">
                <div className="row ">
                    <div className="col-8"><h5>Est.Total</h5></div>  <div className="col-4">Hi</div>
                    </div>
                    <div className="row ">
                    <div className="col-8"><h6><LinkLabel  LabelValue="See Item Details +"  newLabelValue="Hide Item Details -"/></h6></div><div className="col-4">Hi</div>
                    </div>
                   
               </div>
            </div>
            <hr/>
            <div class="card-body">
               <div className="col">
                    <div className="row ">
                    <div className="col-8"><h6><LinkLabel callBackFromParent={this.parentHandler} LabelValue="Apply Promo Code +"  newLabelValue="Hide Promo Code -"/></h6></div><div className="col-4">Hi</div>
                    </div>
                   {promoComponent}
               </div>
            </div>
            <div class="card-footer text-muted">
                Promo Applies until end of February 2019.
            </div>
        </div>
      </div>
    )
  }
}
