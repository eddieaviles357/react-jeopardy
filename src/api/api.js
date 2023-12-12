import axios from 'axios';
import sampleSize from 'lodash.samplesize';
import { BASE_URL, NUM_CLUES, DEFAULT_CLUE } from '../constants';

const request = async (endpoint = '', data = { timeout: 10000 }, method = 'get') => {
  console.log('GETTING_CATEGORY_IDS')
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
    console.log('API::Error', err);
    const msg = err.response.data.error.message;
    // we want to return an Array of messages for our UI
    throw Array.isArray(msg) ? msg : [msg];
  }
};

const getCategoryIds = async () => {
  console.log('GETTING_CATEGORY_IDS')
  // id 21 is hunting wich does not have data
  // ask for 50 categories so we can pick random max is 100
  const { data } = await request('categories', { count: 50 });
  // data => [ { id: 102, title: "movies", clues_count: 98 },... ]
  // we only need the id
  const catIds = data.map(data => data.id);
  // sample 6 categories
  const sampledSize = sampleSize(catIds, 6);
  console.log('API::getCategoryIDS', sampledSize)
  return sampledSize;
};

async function getCategory(catId) {
  console.log('GETTING_CATEGORIES')
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

  console.log('API::CLUES', clues)
  const { title } = category;
  return { title, clues };
}

export default async function setBoardData() {
  // Array of category ids
  const catIds = await getCategoryIds();
  const categories = [];

  for (let catId of catIds) {
    categories.push(await getCategory(catId));
  }
  console.log("CATEGORIES", categories)
  return categories;

};
