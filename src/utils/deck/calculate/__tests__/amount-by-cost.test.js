import {amountByCost} from '../index';

describe('#countsAmountByCost', () =>{
  const early_game_deck = [
    {cardId: 'id1', cost: 1},
    {cardId: 'id2', cost: 1},
    {cardId: 'id3', cost: 2},
    {cardId: 'id4', cost: 2},
    {cardId: 'id4', cost: 2},
    {cardId: 'id5', cost: 2},
    {cardId: 'id6', cost: 3},
  ];

  const mid_game_deck = [
    {cardId: 'id1', cost: 1},
    {cardId: 'id2', cost: 11},
    {cardId: 'id3', cost: 10},
    {cardId: 'id4', cost: 11},
    {cardId: 'id5', cost: 3},
    {cardId: 'id6', cost: 12},
    {cardId: 'id7', cost: 4},
  ];

  const late_game_deck = [
    {cardId: 'id1', cost: 10},
    {cardId: 'id2', cost: 11},
    {cardId: 'id3', cost: 10},
    {cardId: 'id4', cost: 7},
    {cardId: 'id5', cost: 7},
    {cardId: 'id6', cost: 3},
    {cardId: 'id7', cost: 9},
  ];

  const stringifyObject = (value) =>{
    return JSON.stringify(value);
  };

  const testCountedAmountByCost = (deckType, expectedDeck, expectedValue) =>{
    test(`counts maximum amount of each card cost in ${deckType} game deck`, ()=>{
      const eStringifiedValue = stringifyObject(amountByCost(expectedDeck));
      const rStringifiedValue = stringifyObject(expectedValue);

      expect(eStringifiedValue).toBe(rStringifiedValue)
    });
  };

  testCountedAmountByCost('early', early_game_deck, {"1": 2, "2": 4, "3": 1});
  testCountedAmountByCost('mid', mid_game_deck, {"1": 1, "3": 1, "4": 1, "7": 4});
  testCountedAmountByCost('late', late_game_deck, {"3": 1, "7": 6});
});