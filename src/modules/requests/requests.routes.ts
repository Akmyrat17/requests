import { Router } from 'express';
import { requestController } from './requests.controller';
import { validateJoi } from '../../middlewares/body-validation';
import { validateQuery } from '../../middlewares/query-validation';
import { createRequestSchema, completeRequestSchema, cancelRequestSchema, listRequestSchema } from './schemas';

const router = Router();

router.post('', validateJoi(createRequestSchema), requestController.create.bind(requestController));
router.patch('/:id/start', requestController.start.bind(requestController));
router.patch('/:id/complete', validateJoi(completeRequestSchema), requestController.complete.bind(requestController));
router.patch('/:id/cancel', validateJoi(cancelRequestSchema), requestController.cancel.bind(requestController));
router.get('/', validateQuery(listRequestSchema), requestController.list.bind(requestController));
router.patch('/bulk-cancel', requestController.bulkCancel.bind(requestController));

export default router;
