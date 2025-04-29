"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const requests_controller_1 = require("./requests.controller");
const body_validation_1 = require("../../middlewares/body-validation");
const create_request_schema_1 = require("./schemas/create-request.schema");
const complete_request_schema_1 = require("./schemas/complete-request.schema");
const cancel_request_schema_1 = require("./schemas/cancel-request.schema");
const router = (0, express_1.Router)();
router.post('', (0, body_validation_1.validateJoi)(create_request_schema_1.createRequestSchema), requests_controller_1.requestController.create.bind(requests_controller_1.requestController));
router.patch('/:id/start', requests_controller_1.requestController.start.bind(requests_controller_1.requestController));
router.patch('/:id/complete', (0, body_validation_1.validateJoi)(complete_request_schema_1.completeRequestSchema), requests_controller_1.requestController.complete.bind(requests_controller_1.requestController));
router.patch('/:id/cancel', (0, body_validation_1.validateJoi)(cancel_request_schema_1.cancelRequestSchema), requests_controller_1.requestController.cancel.bind(requests_controller_1.requestController));
router.get('/', requests_controller_1.requestController.list.bind(requests_controller_1.requestController));
router.patch('/bulk-cancel', requests_controller_1.requestController.bulkCancel.bind(requests_controller_1.requestController));
exports.default = router;
//# sourceMappingURL=requests.routes.js.map