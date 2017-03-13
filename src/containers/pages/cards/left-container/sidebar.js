import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import {NameFilter} from '../../../shared-assets/filters/name';
import {StatisticsFilter} from '../../../shared-assets/filters/statistics';
import {FactionFilter} from '../../../shared-assets/filters/faction';
import {RaceFilter} from '../../../shared-assets/filters/race';
import {DustFilter} from '../../../shared-assets/filters/dust';
import {MechanicsFilter} from '../../../shared-assets/filters/mechanics';
import {ExpansionFilter} from '../../../shared-assets/filters/expansions';
import {AdventureFilter} from '../../../shared-assets/filters/adventures';
import {RarityFilter} from '../../../shared-assets/filters/rarity';
// import {IconFilterSnippet} from '../filters/icon-filter-snippet'
import {IsGoldenFilter} from '../../../shared-assets/filters/is-golden';
import IconFilter from '../../../shared-assets/filters/icon-filter';

export class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <h3 className="filter-header">Filters</h3>
          {this.props.children}
          <NameFilter/>

          <StatisticsFilter handleInputFilter={this.props.handleInputFilter} statistics={this.props.statistics}/>
          <FactionFilter    handleInputFilter={this.props.handleInputFilter} faction={this.props.faction}/>
          <RaceFilter       handleInputFilter={this.props.handleInputFilter} race={this.props.race}/>
          <MechanicsFilter  handleInputFilter={this.props.handleInputFilter} mechanics={this.props.mechanics}/>
          <DustFilter       handleInputFilter={this.props.handleInputFilter} dust={this.props.dust}/>

          {/*<ExpansionFilter page="cards" />*/}
          {/*<AdventureFilter page="cards" />*/}
          {/*<RarityFilter />*/}
          {/*<IsGoldenFilter/>*/}

          <IconFilter header={true} filter="expansions" query={this.props.query} wrapper_class="sidebar-icons"/>
          <IconFilter header={true} filter="adventures" query={this.props.query} wrapper_class="sidebar-icons"/>
          <IconFilter header={true} filter="rarity" query={this.props.query} wrapper_class="sidebar-icons"/>


        </div>
    );
  }
}