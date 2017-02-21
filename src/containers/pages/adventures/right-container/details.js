import React, { Component } from 'react';
import {AdventureOverview} from '../assets/overview';
import {AdventureBosses} from '../assets/bosses';
import {AdventureCards} from '../assets/cards';
import {AdventureClassChallanges} from '../assets/class-challanges';
import {AdventureCost} from '../assets/cost';
import {AdventureStructure} from '../assets/structure';
export class AdventureDetails extends Component {

  render(){
    let adventureUrl = this.props.location.pathname.split('/')[2];
    let detailsUrl = this.props.location.pathname.split('/')[3];
    return (
      <div className={`extension-content ${this.props.sidebarActiveTab} ${this.props.details} `}>
        <AdventureOverview adventure={adventureUrl} details={detailsUrl}/>
        <AdventureBosses adventure={adventureUrl} details={detailsUrl}/>
        <AdventureCards adventure={adventureUrl} details={detailsUrl}/>
        <AdventureClassChallanges adventure={adventureUrl} details={detailsUrl}/>
        <AdventureCost adventure={adventureUrl} details={detailsUrl}/>

        <AdventureStructure adventure={adventureUrl} details={detailsUrl}/>
        {this.props.children}
      </div>
    )
  }
}