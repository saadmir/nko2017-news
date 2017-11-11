import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import articleCtrl from '../controllers/news.controller';

const router = express.Router();

router.route('/')
/** GET /api/news - Get list of news */
  .get(articleCtrl.list);
  
  /** POST /api/posts - Create new post */
  //.post(validate(paramValidation.createPost), articleCtrl.create);

router.route('/:articleUrl')
/** GET /api/article/:articleUrl - Get article  */
  .get(articleCtrl.get);
  

/** Load Article when API with articleUel route parameter is hit */
router.param('articleUel', articleCtrl.load);

export default router;
