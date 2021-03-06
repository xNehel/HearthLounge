import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ExtensionBlock from "../extension-block";
import {Art, About, Rewards, Cinematic, Gameboard, GameChanges, Cost, Structure} from "./blocks";
import {blockSize} from "../../../utils/block-size";

const Overview = ({extension, gameCardbacks, windowWidth}) => {
    const {overview, name} = extension;
    const {about, cinematic, gameboard, img, game_changes, cardbacks, cost, structure} = overview;

    const expansionArt = <Art src={img} name={name}/>;
    const expansionAbout = <About about={about}/>;
    const expansionRewards = <Rewards gameCardbacks={gameCardbacks} cardbacks={cardbacks}/>;
    const expansionCinematic = <Cinematic src={cinematic}/>;
    const expansionGameboard = <Gameboard src={gameboard} adventureName={name}/>;

    return (
      <ul className="container__blocks">
        <ExtensionBlock page="overview" blockWidth={blockSize(1, windowWidth)} title="about" element={expansionAbout}/>
        <ExtensionBlock page="overview" blockWidth={blockSize(2, windowWidth)} title="art" element={expansionArt}/>
        <ExtensionBlock page="overview" blockWidth={blockSize(1, windowWidth)} title="cardbacks" element={expansionRewards}/>
        <ExtensionBlock page="overview" blockWidth={blockSize(1, windowWidth)} title="cinematic" element={expansionCinematic}/>
        <ExtensionBlock page="overview" blockWidth={blockSize(1, windowWidth)} title="gameboard" element={expansionGameboard}/>
        {
          game_changes &&
          <ExtensionBlock page="overview"
                          title="game changes"
                          blockWidth={blockSize(1, windowWidth)}
                          element={<GameChanges gameChanges={game_changes}/>}/>
        }
        {
          cost &&
          <ExtensionBlock page="overview"
                          title="cost"
                          blockWidth={blockSize(1, windowWidth)}
                          element={<Cost extensionCost={cost}/>}/>
        }
        {
          structure &&
          <ExtensionBlock page="overview"
                          title="cost"
                          blockWidth={blockSize(1, windowWidth)}
                          element={<Structure extensionStructure={structure}/>}/>
        }
      </ul>
    );
};

const mapStateToProps = state =>{
  const {windowWidth} = state.app.windowSize;
  return {windowWidth};
};

export default connect(mapStateToProps)(Overview);

Overview.propTypes = {
  extension: PropTypes.object.isRequired,
  expansionCardbacks: PropTypes.array,
};
