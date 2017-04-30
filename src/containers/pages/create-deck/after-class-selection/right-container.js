import React from 'react';
import Topbar from './right-container/topbar';
import Cards from './right-container/content-assets/cards/cards'
import DeckOptions from './right-container/content-assets/deck-description/deck-options';

const RightContainer = ({deck, filtersView, handleOptionsClick, cards, activeClass, query, editingTool, user}) =>{

  const currentView = () => {
    return !editingTool ? <Cards cards={cards}/> : <DeckOptions activeClass={activeClass} deck={deck} user={user}/>
  };

  return (
      <div className="container__page--inner container__page--right">
        <Topbar filtersView={filtersView}
                query={query}
                activeClass={activeClass}
                deck={deck}
                handleOptionsClick={handleOptionsClick}/>
        <div className="content">
          {currentView()}
        </div>
      </div>
  )
};

export default RightContainer;