import React, { Component } from 'react';
import { Link } from 'react-router'
export class StreamersBlock extends Component {
  render() {
    return (
        <li className={'home__block streams block-width-2'}>
          <Link to={'/streamerzy'}>
            <div>Streamy</div>
          </Link>
        </li>
    );
  }
}