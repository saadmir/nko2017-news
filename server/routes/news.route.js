import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import postCtrl from '../controllers/post.controller';
import sourceCtrl from '../controllers/source.controller';
import articlesCtrl from '../controllers/articles.controller';

const router = express.Router();

router.route('/sources').get(sourceCtrl.list);
router.route('/articles').get(articlesCtrl.list);
router.route('/articles/detail').get(articlesCtrl.detail);
router.route('/articles/stripped_detail').get(articlesCtrl.strippedDetail);

export default router;
