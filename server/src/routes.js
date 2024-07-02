import express from 'express';

const router = express.Router();

router.route('/users').get().patch().post().delete();

router.route('/spends').get().patch().post().delete();

export default router;
