import Source from '../models/source.model';
import config from '../config/config';

import axios from "axios";
import _ from "lodash";

const url = config.news.url;

let internal = {
  create: (data) => {
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
};

let self = {
  
  list: (req, res) => {
    axios.get(`${url}/sources`)
      .then(list => {
        if (list.data) {
          _.each(list.data.sources, (source) => {
            return internal.create(source);
          });
        }
        return res.json(list.data);
      });
  },
  
  get: (req, res) => {
    return res.json({});
  }
};

export default self;
