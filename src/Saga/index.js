import { put, takeEvery, all, call, fork, cancel } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import apiV1, { postRequest } from './../Utils/Service.Utils'
import products from './../MockData/mock.json'

function* fetchproducts_MOCK_TEST() {
  yield postRequest("http://localhost:8080/getString2?id=1244", {}, "")
}
function* fetchAll() {
  const task1 = yield fork(fetchNews, 'tr')
  const task2 = yield fork(fetchNews, 'us')
  const task3 = yield fork(fetchdata, 'us')

  cancel(task1)

  yield call(delay, 1000)
}

function* fetchProducts_MOCK_JSON(resource) {
  const json = products
  yield put({ type: 'receive_products', json: json.products, }); //REDUCER ACTION
}
function* fetchNews(resource) {
  // yield delay(4000)
  const json = yield fetch('https://newsapi.org/v2/top-headlines?country=' + resource + '&apiKey=f86f324681bf445a8b7b0cb37ae341da')
    .then(response => response.json());
  yield put({ type: 'received', json: json.articles, }); //REDUCER ACTION
}

export function* root() {
  yield takeEvery('baglan', fetchAll)
  yield takeEvery('get_products', fetchProducts_MOCK_JSON)


}

