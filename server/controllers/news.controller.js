import Article from '../models/article.model';
import axios from 'axios';

function load(params) {
  return Article.get(params.id);
}

function get(req, res) {
  return res.json(req.post);
}

function create(params) {
  const article = new Article({
    title: params.data.title,
    content: params.data.content
  });
  return article.save();
}

function list(params) {
  const {limit = 50, skip = 0} = params;
  return Article.list({limit, skip})
}

// Todo : move it to config
const newsAPI = "https://newsapi.org/v1/articles";

function getNews() {
  axios.get(newsAPI, {
      params: {
        source: "the-next-web",
        sortBy: "latest",
        apiKey: "58320cacd3b24867a1097657f14ac256"
      }
    })
    .then(function (response) {
      console.log(response);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return {};
}


function remove(params) {
  return load(params).then(article => article.remove());
}

export default {load, get, create, list, remove, getNews};
