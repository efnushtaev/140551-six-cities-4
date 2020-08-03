export const getFavoriteList = (state) => {
  return state.favorite.favoriteList;
};

export const getFavoriteCitiesList = (state) => {
  let cityList = [];
  state.favorite.favoriteList.forEach((el) => {
    const cityName = el.city.name;
    return !cityList.includes(cityName) && cityList.push(cityName)
  });
  return cityList;
};
