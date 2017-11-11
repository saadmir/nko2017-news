import News from '../models/news.model';
import Source from '../models/source.model';
import config from '../config/config';

import axios from "axios";
import _ from "lodash";

const url = config.news.url;
const apiKey= config.news.api_key; //	TODO moved this two configuration file

const parserUrl = config.news_parser.url;
const parserApiKey = config.news_parser.api_key;

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
  	req.headers['x-api-key'] = apiKey;
  	let config = {
  		headers: { 'x-api-key': apiKey },
  		params: req.query
	};

   	axios.get( `${url}/articles` , config)
    .then(list => {
      if(list.data) {
      }
      return res.json(list.data);
    }).catch((error) => {
      return res.json(error.response.data);
    });
  },

  detail: (req, res) => {
  	if(req.query.url) {
		axios.get(req.query.url).then((response) => {
			return res.json(response.data)
		})
	}else{
		return res.json({error: 'Unable to find the url'} );	
	}
  },

  strippedDetail: (req, res) => {
  	if(req.query.url) {
  		let config = {
  			headers: { 'x-api-key': parserApiKey },
  			params: req.query
		};
		axios.get(parserUrl, config).then((response) => {
			return res.json(response.data)
		})
	}else{
		return res.json({error: 'Unable to find the detailed information', code: 400} );	
	}
  }
};

export default self;
