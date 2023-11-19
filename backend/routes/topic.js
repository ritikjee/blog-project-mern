import express from 'express';
import { getTopics,addTopic,updateTopic,deleteTopic } from '../controllers/topic.js';

const topicRouter = express.Router();

topicRouter.route('/').get(getTopics);
topicRouter.route('/addTopic').post(addTopic);
topicRouter.route('/updateTopic/:id').put(updateTopic);
topicRouter.route('/deleteTopic/:id').delete(deleteTopic);

export default topicRouter;