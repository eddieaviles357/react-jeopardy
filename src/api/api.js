import axios from 'axios';
import sampleSize from 'lodash.samplesize';

const BASE_URL = 'http://jservice.io/api/';
const NUM_CATEGORIES = 6;
const NUM_CLUES = 5;

const request = async (endpoint = '', data = { timeout: 10000 }, method = 'get') => {
  console.debug(
    "API CALL::", endpoint, 
    "DATA::", data, 
    "METHOD::", method
  );

  // only GET request will be called for this API
  const url = `${BASE_URL}${endpoint}`;
  const params = ( method === 'get' ) ? data : {};

  try {
    return (await axios( { url, method, data, params } ));
  } catch (err) {
    console.log('API::Error', err);
    const msg = err.response.data.error.message;
    // we want to return an Array of messages for our UI
    throw Array.isArray(msg) ? msg : [msg];
  }
};

export const getCategoryIds = async () => {
  // ask for 50 categories so we can pick random max is 100
  const { data } = await request( 'categories', { count: 50 } );
  // data => [ { id: 102, title: "movies", clues_count: 98 },... ]
  // we only need the id
  const catIds = data.map( data => data.id );
  // sample 6 categories
  return sampleSize( catIds, 6 )
};

export default {
  getCategoryIds,
}