import { Router } from 'express';
import { requestController } from './requests.controller';
import { validateJoi } from '../../middlewares/body-validation';
import { createRequestSchema } from './schemas/create-request.schema';
import { completeRequestSchema } from './schemas/complete-request.schema';
import { cancelRequestSchema } from './schemas/cancel-request.schema';
import { validateQuery } from '../../middlewares/query-validation';
import { listRequestSchema } from './schemas/list-request.schema';

const router = Router();

router.post('', validateJoi(createRequestSchema), requestController.create.bind(requestController));
router.patch('/:id/start', requestController.start.bind(requestController));
router.patch('/:id/complete', validateJoi(completeRequestSchema), requestController.complete.bind(requestController));
router.patch('/:id/cancel', validateJoi(cancelRequestSchema), requestController.cancel.bind(requestController));
router.get('/', validateQuery(listRequestSchema), requestController.list.bind(requestController));
router.patch('/bulk-cancel', requestController.bulkCancel.bind(requestController));

export default router;
