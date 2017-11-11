import News from '../models/news.model';
import Source from '../models/source.model';
import request from "request";
import _ from "lodash";

const url = "https://newsapi.org/v1/sources";

function sources(req, res) {
  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    let sources = json["sources"];
    let list = _.each(sources, function (source) {
      // check if it exist or not
      return create(source);
    });
    return res.json(list);
  });
}

function create(data) {
  const source = new Source({
    id: data.id,
    name: data.name,
    description: data.description,
    url: data.url,
    category: data.category,
    language: data.language,
    country: data.country,
    sortBysAvailable: data.sortBysAvailable
  });
  return source.save();
}

function load(id) {
  return Source.get(id);
}


export default {sources, create};
