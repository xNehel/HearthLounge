import React from 'react';
import PropTypes from 'prop-types';
import Button from "../buttons/button";
import Icon from "../icon";

const FilterHeader = ({headerTitle, filter, filters}) =>{
  const header = headerTitle ? headerTitle : filter;
  const showClearBtn = () =>{
    if(filters[filter]){
      return <Button text={<Icon name="cross" />}
                     darkBorder
                     type="default--active"
                     tooltip={true}
                     tooltipTitle="Clear"/>
    }
  };
  return(
    <div className="sidebar__body--filter-wrapper__header">
      <h4>{header}</h4>
      {showClearBtn()}
    </div>
  )
};

export default FilterHeader;

FilterHeader.propTypes = {
  filter: PropTypes.string.isRequired
};