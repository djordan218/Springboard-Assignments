import axios from 'axios';

const BASE_API_URL = 'http://localhost:3001';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class JoblyAPI {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = 'get') {
    console.debug('API Call:', endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_API_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyAPI.token}` };
    const params = method === 'get' ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompanies(name) {
    const result = await this.request(`companies`, { name });
    return result.companies;
  }

  static async getJobs(title) {
    const result = await this.request(`jobs`, { title });
    return result.jobs;
  }

  static async getCompany(id) {
    const result = await axios.get(`${BASE_API_URL}/companies/${id}`);
    return result.data;
  }

  static async getJob(id) {
    console.log(`getting job of ${id}`);
    const result = await axios.get(`${BASE_API_URL}/jobs/${id}`);
    return result.data;
  }

  static async applyToJob(username, id) {
    console.log('applying to job...');
    await this.request(`users/${username}/jobs/${id}`, {}, 'post');
    console.log('applied');
  }

  static async getCurrentUser(username, token) {
    console.log(`getting CurrentUser of ${username} with token ${token}`);
    let result = await this.request(`users/${username}`);
    return result.user;
  }

  static async register(user) {
    console.log('signing up...');
    let res = await this.request(`auth/register`, user, 'post');
    console.log('completed signing up');
    console.log(res);
    return res.token;
  }

  static async login(user) {
    let res = await this.request(`auth/token`, user, 'post');
    return res.token;
  }

  static async saveProfile(username, data) {
    console.log('updating profile...');
    let res = await this.request(`users/${username}`, data, 'patch');
    return res.user;
  }
}

export default JoblyAPI;
