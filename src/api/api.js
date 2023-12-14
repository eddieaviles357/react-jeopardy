import axios from 'axios';
import sampleSize from 'lodash.samplesize';
import { BASE_URL, NUM_CLUES, DEFAULT_CLUE } from '../constants';

const request = async (endpoint = '', data = { timeout: 10000 }, method = 'get') => {
  console.debug(
    "API CALL::", endpoint,
    "DATA::", data,
    "METHOD::", method
  );

  // only GET request will be called for this API
  const url = `${BASE_URL}${endpoint}`;
  const params = (method === 'get') ? data : {};

  try {
    return (await axios({ url, method, data, params }));
  } catch (err) {
    console.log('API::REQUEST::Error', err);
    throw err
  }
};

const getCategoryIds = async () => {
  try {
    // id 21 is hunting wich does not have data
    // ask for 50 categories so we can pick random max is 100
    const { data } = await request('categories', { count: 50 });
    // data => [ { id: 102, title: "movies", clues_count: 98 },... ]
    // we only need the id
    const catIds = data.map(data => data.id);
    // sample 6 categories
    const sampledSize = sampleSize(catIds, 6);
    return sampledSize;
  } catch (err) {
    console.log('API::GET_CATEGORIES_IDS::Error', err);
    // we want to return an Array of messages for our UI
    throw err
  }
};

async function getCategory(catId) {
  try {
    const options = { params: { id: catId } };
    let { data: category } = await axios.get(`${BASE_URL}category`, options);
    // choose random clue using lodash library
    let clues = sampleSize(category.clues, NUM_CLUES).map(
      ({ question, answer, value }) => {
        // if any values are null return default values
        if (!question) question = DEFAULT_CLUE.question
        if (!answer) answer = DEFAULT_CLUE.answer
        if (!value) value = DEFAULT_CLUE.value
        return {
          question,
          answer,
          value,
          showing: null
        }
      });

    const { title } = category;
    return { title, clues };
  } catch (err) {
    console.log('API::GET_CATEGORY::Error', err);
    // we want to return an Array of messages for our UI
    throw err
  }
}

export default async function setBoardData() {
  try {
    // Array of category ids
    const catIds = await getCategoryIds();
    const categories = [];

    for (let catId of catIds) {
      categories.push(await getCategory(catId));
    }
    return categories;
  } catch (err) {
    console.log('API::SET_BOARD_DATA::Error', err)
    const msg = err.message;
    // we want to return an Array of messages for our UI
    throw Array.isArray(msg) ? msg : [msg];
  }
};
