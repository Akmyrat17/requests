"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestController = void 0;
const requests_service_1 = require("./requests.service");
const errors_1 = require("../../common/errors");
class RequestController {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { subject, text } = req.body;
                const newRequest = yield requests_service_1.requestService.createRequest({ subject, text });
                res.status(201).json(newRequest);
            }
            catch (error) {
                next(error);
            }
        });
    }
    start(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (!id || isNaN(id)) {
                    throw new errors_1.AppError('Invalid or missing request ID', 400);
                }
                const result = yield requests_service_1.requestService.startRequest(id);
                res.json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    complete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (!id || isNaN(id)) {
                    throw new errors_1.AppError('Invalid or missing request ID', 400);
                }
                const { solutionText } = req.body;
                const result = yield requests_service_1.requestService.completeRequest(id, { solutionText });
                res.json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    cancel(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                if (!id || isNaN(id)) {
                    throw new errors_1.AppError('Invalid or missing request ID', 400);
                }
                const { cancelReason } = req.body;
                const result = yield requests_service_1.requestService.cancelRequest(id, { cancelReason });
                res.json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    list(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { startDate, endDate } = req.query;
                const result = yield requests_service_1.requestService.listRequests({
                    startDate: startDate,
                    endDate: endDate,
                });
                res.json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    bulkCancel(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { reason } = req.body;
                const result = yield requests_service_1.requestService.bulkCancelInProgress(reason || 'Auto-cancelled');
                res.json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.requestController = new RequestController();
//# sourceMappingURL=requests.controller.js.map