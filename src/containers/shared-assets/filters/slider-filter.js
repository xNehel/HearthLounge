import React from 'react';
import Slider from 'antd/lib/slider';
import Tooltip from 'antd/lib/tooltip';
import {addQuery, removeQuery} from '../../../utils/utils-router';
import 'antd/lib/slider/style/css';
import 'antd/lib/tooltip/style/css';

const SliderFilter = props => {
  const {defaultValue, marks, max, filter, query} = props;

  const queries = attr =>{
    return Object.assign({}, query, {[filter]: attr});
  };

  const checkHealthProp = () => {
    if (filter in query) return true;
  };

  return (
      <div className="slider-filter-wrapper">
        <div className="slider-filter-header">
          <h4>{filter}</h4>
          <Tooltip placement="left" title="Clear">
            <button onClick={(e)=>removeQuery(filter)} className={`${checkHealthProp() !== true ? 'display-none' : ''}`}>✕</button>
          </Tooltip>
        </div>
        <Slider range marks={marks} defaultValue={defaultValue} max={max} onChange={(e)=>addQuery(queries(e))}/>
      </div>
  );
};



SliderFilter.propTypes = {
  defaultValue: React.PropTypes.array,
  filter: React.PropTypes.string,
  marks: React.PropTypes.object,
  max: React.PropTypes.number,
  query: React.PropTypes.object
};


export default SliderFilter;