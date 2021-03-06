import documentsController from '../controllers/documents';
import auth from '../middleware/authenticate';

const documentRoutes = (router) => {
  router
    .route('/documents')
    .post(auth.authorize, documentsController.create);

  router
    .route('/documents')
    .get(auth.authorize, documentsController.findAll);

  router
    .route('/documents/:documentId')
    .get(auth.authorize, documentsController.findOne)
    .put(auth.authorize, documentsController.update)
    .delete(auth.authorize, documentsController.delete);

  router
    .route('/users/:userId/documents')
    .get(auth.authorize, documentsController.findUserDocuments);
};

export default documentRoutes;
