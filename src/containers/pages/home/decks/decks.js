import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
import ClassSelection from './filters/class-selection';
import ModeSelection from './filters/mode-selection';
import DeckSnippet from '../../../../components/deck-snippet/deck-snippet';
import SearchDecks from './filters/search-decks';
import Loader from "../../../../components/loader";
import Icon from "../../../../components/icons/icon";
const DecksBlock = ({decks, handleDeckClick, handlePlayerClassFilterClick}) => {

  const listDecks = () =>{
    return decks.map(deck => <DeckSnippet key={deck.deckId}
                                          d={deck}
                                          handleDeckClick={handleDeckClick}/>)
  };

  return (
      <li className={`home__block decks block-width-3`}>
        <div className="home__block--header">
          <Link to="/decks">
            <Icon name="decks" />
            <p>{_.upperCase("decks")}</p>
          </Link>
          <ClassSelection handlePlayerClassFilterClick={handlePlayerClassFilterClick}/>
        </div>
        <div className="home__block--body">
          <div className="left-container">
            <div className="sidebar">
              <SearchDecks/>
              <ModeSelection />
            </div>
          </div>
          <div className="right-container">
            <div className="hot-decks">
              {decks ? listDecks() : <Loader />}
            </div>
          </div>
        </div>
      </li>
  );
};

export default DecksBlock;

