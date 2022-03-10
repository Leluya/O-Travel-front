/* eslint-disable no-console */
import axiosInstance from 'src/axiosInstance';
import { GET_FAVORITES_DESTINATION, saveFavorites, SAVE_FAVORITES_DESTINATION } from 'src/actions/favoritesActions';

const fetchFavorites = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_FAVORITES_DESTINATION:
      axiosInstance
        .get('user/favoris/list', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          store.dispatch(saveFavorites(response.data));
        })
        .catch((error) => {
          console.log('erreur : ', error);
        });
      next(action);
      break;

    case SAVE_FAVORITES_DESTINATION:
      axiosInstance
        .post('user/favoris', {
          destination: action.destination,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          (console.log(error));
        });
      next(action);
      break;

    default:
      next(action);
      break;
  }
};

export default fetchFavorites;
