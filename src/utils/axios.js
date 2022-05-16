import axios from 'axios';
axios.defaults.baseURL =  import.meta.env.VITE_API;

// Don't throw errors on 422, 403 and 401 status code (used for validations)
axios.defaults.validateStatus = (status =>
        status === 422 ||
        status === 401 ||
        status === 403 ||
        status >= 200 &&
        status < 300
);
