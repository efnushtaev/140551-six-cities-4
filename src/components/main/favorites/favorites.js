import React from 'react';
import withLoginRedirection from '../../../hoc/with-login-redirection';
import {compose} from 'redux';
import FavoritePlacesCardList from './favorite-places-card-list/favorite-places-card-list';
import { getFavoriteCitiesList, getFavoriteList } from '../../../redux/selectors/favorite-selectors';
import { connect } from 'react-redux';
import { OperationFavorite } from '../../../redux/reducers/favorite-reducer';
import { OperationsOffers, ActionCreaterOffers } from '../../../redux/reducers/offers-reducer';

const Favorites = (props) => {
  const {cityList, favoriteList, setCurrentOfferId, postFavorite} = props

  React.useEffect(() => {
    return () => {}
  }, [favoriteList])

  return <div className="page__favorites-container container">
    {favoriteList.length != 0
      ? <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {cityList.map((el, i) => {
            return <li key={el + i} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{el}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritePlacesCardList
                  setCurrentOfferId={setCurrentOfferId}
                  city={el} favoriteList={favoriteList}
                  onFavoriteStatusChange={postFavorite}/>
              </div>
            </li>
            })}
        </ul>
      </section>
      : <section class="favorites favorites--empty">
        <h1 class="visually-hidden">Favorites (empty)</h1>
        <div class="favorites__status-wrapper">
          <b class="favorites__status">Nothing yet saved.</b>
          <p class="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
        </div>
      </section>
    }
  </div>;
};

let mapStateToProps = (state) => ({
  cityList: getFavoriteCitiesList(state),
  favoriteList: getFavoriteList(state),
})
let mapDispatchToProps = (dispatch) => ({
  loadingFavorite() {
    dispatch(OperationFavorite.loadingFavorite())
  },
  setCurrentOfferId(id) {
    dispatch(ActionCreaterOffers.setCurrentOfferId(id))
  },
  postFavorite(id, is_favorite) {
    dispatch(OperationFavorite.postFavorite(id, is_favorite))
  }
})

export default compose(
  withLoginRedirection,
  connect(mapStateToProps, mapDispatchToProps))(Favorites);
