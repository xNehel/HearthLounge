import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import LeftContainer from "./left-container/left-container";
import RightContainer from "./right-container/right-container";
import {udpateDeckRating} from '../../../../firebase/decks/deck/update';
import {RESET_ACTIVE_DECK} from "../../../../redux/deck/active-deck/types";
import {CANCEL_ACTIVE_DECK_COPY_UPDATE, UPDATE_ACTIVE_DECK_COPY} from "../../../../redux/deck/active-deck-copy/types";
import {updateDeck} from "../../create-deck/after-class-selection/right-container/content-assets/utils/index";
import NotFound from "../../../../components/not-found/not-found";
import {fetchActiveDeckRequest} from "../../../../redux/deck/active-deck/actions";

class Deck extends Component{
  componentDidMount() {
    const {activeDeck, fetchDeck, match, updateActiveDeckCopy} = this.props;
    const {deckId, deckTitle} = match.params;
    document.title = _.startCase(deckTitle) || "Deck";

    if (!activeDeck.loading && !activeDeck.deckId) {
      fetchDeck(deckId)
    } else {
      updateActiveDeckCopy(activeDeck);
    }
  }

  componentWillUnmount(){
    const {resetActiveDeck, updateActiveDeckCopy} = this.props;
    resetActiveDeck();
    updateActiveDeckCopy('');
  }

  handleDeckVotingClick = (e) =>{
    const {activeUser, activeDeck, updateDeckRating} = this.props;
    let vote = e.currentTarget.id;
    const {deckId} = activeDeck;
    const {uid} = activeUser;

    udpateDeckRating(deckId, uid, vote, (voteType)=>updateDeckRating(voteType));
  };

  handleCardClick = (e, card) => {
    const {deck, editDeck} = this.props;
    e.preventDefault();

    updateDeck(e, card, deck, editDeck);
  };

  render() {
    const {activeDeck, activeDeckCopy, deckEditView, patch, match} = this.props;
    if(activeDeck.err){
      return <NotFound page="123" redirect="decks"/>
    }
    else {
      return (
          <div className="container__page container__page--twoSided deck">
            <LeftContainer deckEditView={deckEditView}
                           handleCardClick={this.handleCardClick}/>
            <RightContainer activeDeck={activeDeck}
                            activeDeckCopy={activeDeckCopy}
                            deckEditView={deckEditView}
                            params={match.params}
                            patch={patch}
                            handleDeckVotingClick={this.handleDeckVotingClick}/>
          </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  const {activeDeck, activeDeckCopy, tools} = state.deckView;
  const {deckEditView} = tools;

  return {activeDeck, activeDeckCopy, deckEditView};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeck: payload => dispatch(fetchActiveDeckRequest(payload)),
    updateActiveDeckCopy: payload => dispatch({type: UPDATE_ACTIVE_DECK_COPY, payload}),
    cancelDeckUpdate: () => dispatch({type: CANCEL_ACTIVE_DECK_COPY_UPDATE}),
    resetActiveDeck: () => dispatch({type: RESET_ACTIVE_DECK})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);

Deck.propTypes = {
  activeUser: PropTypes.object,
  currentDeck: PropTypes.object,
  params: PropTypes.object,
  updateDeckRating: PropTypes.func,
};