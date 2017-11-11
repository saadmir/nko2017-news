import Article from '../models/article.model';

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

function remove(params) {
  return load(params).then(article => article.remove());
}

export default {load, get, create, list, remove};
