const SET_SETTINGS = (state, payload) => {
    state.settings = payload.data;
};
const SET_OFFERS = (state, payload) => {
    state.offers = payload.data;
};
const SET_SLIDES = (state, payload) => {
    state.slides = payload.data;
};
const SET_LOADING = (state, payload) => {
    state.isLoading = payload;
};

export default {
    SET_SETTINGS,
    SET_LOADING,
    SET_OFFERS,
    SET_SLIDES
};
