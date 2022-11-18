import axios from 'axios';

const BASE_API_URL = 'http://localhost:5000';

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addItem(item) {
    fetch(`${BASE_API_URL}/${item.type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: item.name,
        name: item.name,
        description: item.description,
        recipe: item.recipe,
        serve: item.serve,
      }),
    }).then(() => {
      console.log(`added ${item.type} of ${item.name}`);
    });
  }
}

export default SnackOrBoozeApi;
