const SET_SETTINGS = (state, payload) => {
    state.settings = payload.data;
};
const SET_OFFERS = (state, payload) => {
    state.offers = payload.data;
};
const SET_SLIDES = (state, payload) => {
    state.slides = payload.data;
};
const SET_SOCIAL_MEDIA = (state, payload) => {
    state.socialMedia = payload.data;
};
const SET_PHONES = (state, payload) => {
    state.phones = payload.data;
};
const SET_EMAILS = (state, payload) => {
    state.emails = payload.data;
};
const SET_SERVICES = (state, payload) => {
    state.services = payload.data;
};
const SET_POSTS = (state, payload) => {
    state.posts = payload.data;
};
const SET_PORTFOLIO = (state, payload) => {
    state.images = payload.data;
};
const SET_CLIENTS = (state, payload) => {
    state.clients = payload.data;
};
const SET_CATEGORIES = (state, payload) => {
    state.categories = payload.data;
};
const SET_PRODUCTS = (state, payload) => {
    state.products = payload.data;
};
const SET_CART = (state, payload) => {
    state.cart = payload.data;
};
const SET_LOADING = (state, payload) => {
    state.isLoading = payload;
};

export default {
    SET_CART,
    SET_PRODUCTS,
    SET_SETTINGS,
    SET_LOADING,
    SET_OFFERS,
    SET_SLIDES,
    SET_SOCIAL_MEDIA,
    SET_PHONES,
    SET_EMAILS,
    SET_SERVICES,
    SET_POSTS,
    SET_PORTFOLIO,
    SET_CLIENTS,
    SET_CATEGORIES
};
