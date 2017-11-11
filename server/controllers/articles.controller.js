import News from '../models/news.model';
import Source from '../models/source.model';

import axios from "axios";
import _ from "lodash";

const url = "https://newsapi.org/v1/articles";
const apiKey= "2e085d33726a40aa9556343e7d79ddf4"; //	TODO moved this two configuration file

const parserUrl = "https://mercury.postlight.com/parser";
const parserApiKey = "Q4de6bcYUB0E3U24m5JyLGEacmb5yMDp5l23eZEm";

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

   	axios.get( url , config)
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
