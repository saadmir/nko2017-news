import Post from '../models/post.model';
import News from '../models/news.model';
import request from "request";
import _ from "lodash";

const url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=58320cacd3b24867a1097657f14ac256";

function load(params) {
  return Post.get(params.id);
}

function get(req, res) {
  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    let articles = json["articles"];
    let list = _.each(articles, function (article) {
      return create(article);
    });
    return res.json(list);
  });
}

function create(data) {
  const news = new News({
    author: data.author,
    title: data.title,
    description: data.description,
    url: data.url,
    urlToImage: data.urlToImage,
    publishedAt: data.publishedAt,
  });
  return news.save();
}

function update(params) {
  return load(params).then(post => {
    const tmp = post;
    post.title = params.data.title;
    post.content = params.data.content;
    return post.save()
  });
}

function list(params) {
  const { limit = 50, skip = 0 } = params;
  return Post.list({ limit, skip })
}

function remove(params) {
  return load(params).then(post => post.remove());
}

export default { load, get, create, update, list, remove };
