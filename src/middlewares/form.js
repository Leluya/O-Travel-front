/* eslint-disable no-console */
import {
  GET_FORM_ELEMENTS, setFormElements, SEND_DESTINATION_FORM,
  setDestinations,
} from 'src/actions/formActions';
import axiosInstance from 'src/axiosInstance';

const dataFetchingMiddleware = (store) => (next) => (action) => {
  //const baseUrl = 'http://leluya-server.eddi.cloud/projet-23-o-travel-back/public/';
  const baseUrl = 'http://cedric-vandermaes.vpnuser.lan/projet-23-o-travel-back/public/';
  switch (action.type) {
    case GET_FORM_ELEMENTS:
      axiosInstance
        .get(action.field)
        .then((response) => {
          store.dispatch(setFormElements(action.field, response.data));
        })
        .catch((error) => {
          console.log('erreur : ', error);
        });
      next(action);
      break;

    case SEND_DESTINATION_FORM: {
      const state = store.getState();
      axiosInstance
        .post('destinations/form', {
          selectedLandscapes: state.form.landscapesSelected,
          selectedTransports: state.form.transportsSelected,
          selectedSeasons: state.form.seasonsSelected,
          budget: state.form.budget,
        })
        .then((response) => {
          console.log(response);
          store.dispatch(setDestinations(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default dataFetchingMiddleware;
