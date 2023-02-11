import axios from 'axios';
import checkResponse from '../utils/checkResponse';

const loadPageSettings = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('settings?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_SETTINGS', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadOffers = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('offers?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_OFFERS', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadSlides = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('slides?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_SLIDES', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadEmails = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('emails?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_EMAILS', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadPhones = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('phones?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_PHONES', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadServices = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('services?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_SERVICES', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadSocialMedia = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('social-media?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_SOCIAL_MEDIA', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadPosts = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('posts?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_POSTS', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadPortfolio = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('images?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_PORTFOLIO', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadClients = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('clients?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_CLIENTS', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadCategories = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('categories?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_CATEGORIES', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadProducts = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('products?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_PRODUCTS', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

const loadCart = async ({commit}, payload) => {
    commit('SET_LOADING', true);
    try {
        const response = await axios.get('cart?domain=' + import.meta.env.VITE_DOMAIN);

        const checkErrors = checkResponse(response);

        if (checkErrors) {
            commit('SET_DIALOG_MESSAGE', checkErrors.message, {root: true});
        } else {
            commit('SET_CART', response);
        }
    } catch (e) {
        commit('SET_DIALOG_MESSAGE', 'errors.generic_error', {root: true});
    } finally {
        commit('SET_LOADING', false);
    }
};

export default {
    loadCategories,
    loadProducts,
    loadCart,
    loadPageSettings,
    loadOffers,
    loadSlides,
    loadSocialMedia,
    loadEmails,
    loadPhones,
    loadServices,
    loadPosts,
    loadPortfolio,
    loadClients,
};
