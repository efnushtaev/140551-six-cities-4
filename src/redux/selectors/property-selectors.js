export const getCurrentOffer = (state) => {
  return state.offers.offers.filter((el) => {
    return el.id === state.offers.currentOfferId;
  })[0];
}
export const getCurrentOfferId = (state) => {
  return state.offers.currentOfferId;
}
export const getComments = (state) => {
  return state.property.comments;
}
