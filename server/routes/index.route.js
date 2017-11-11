import express from 'express';
import newsRoutes from './news.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/news', newsRoutes);

export default router;
