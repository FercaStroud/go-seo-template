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

export default {
    loadPageSettings,
    loadOffers,
    loadSlides,
    loadSocialMedia,
    loadEmails,
    loadPhones,
};
