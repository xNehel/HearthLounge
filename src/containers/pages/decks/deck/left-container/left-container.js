import React from 'react';
import _ from 'lodash';
import ManaCurve from '../../../create-deck/after-class-selection/left-container/sidebar/details/mana-curve/mana-curve'
const LeftContainer = ({activeDeck}) =>{
  let cardNames = Object.keys(activeDeck.deck.cards);

  const listCards = () =>{
    return _.map(activeDeck.deck.cards).map((c, i)=>
        <tr>
          <td>set</td>
          <td>{cardNames[i]}</td>
          <td>{c.amount}</td>
          <td><span className={`hs-icon icon-mana-${c.cost}`}></span></td>
        </tr>
    )
  };

  return(
      <div className="container__page--inner container__page--left">
        <h3 className="sidebar__header">Deck Details  <span className={`hs-icon icon-${activeDeck.type === "standard" ? "mammoth" : activeDeck.type}`}></span>
        </h3>
        <div className="sidebar__body">
          <div className="container__mana-curve">
            <h3>Mana Curve</h3>
            <ManaCurve deck={activeDeck.deck.cards} max={activeDeck.deck.max}/>
            <h3>Cards</h3>
            <div className="list cards-list">
              <div className="table-scroll">
                <table>
                  <thead>
                  <tr>
                    <th>Set</th>
                    <th>Card</th>
                    <th>Amount</th>
                    <th>Cost</th>
                  </tr>
                  </thead>
                  <tbody>
                  {listCards()}
                  </tbody>
                </table>
              </div>
            </div>
            <table>
            </table>
          </div>
          <div className="background">
            <span className={`hs-icon icon-${activeDeck.hsClass}`}></span>
          </div>

        </div>
      </div>
  )
};

export default LeftContainer;