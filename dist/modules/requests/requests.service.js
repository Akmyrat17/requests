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
exports.requestService = void 0;
const errors_1 = require("../../common/errors");
const app_error_1 = require("../../common/errors/app.error");
const bad_request_error_1 = require("../../common/errors/bad-request.error");
const prismaClient_1 = require("../../database/prismaClient");
class RequestService {
    createRequest(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newRequest = yield prismaClient_1.prisma.request.create({
                data: {
                    subject: data.subject,
                    text: data.text,
                },
            });
            return newRequest;
        });
    }
    startRequest(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield prismaClient_1.prisma.request.findUnique({ where: { id } });
            if (!existing) {
                throw new app_error_1.AppError('Request not found', 404);
            }
            if (existing.status !== 'NEW') {
                throw new bad_request_error_1.BadRequestError('Request is not in NEW status');
            }
            const updated = yield prismaClient_1.prisma.request.update({
                where: { id },
                data: { status: 'IN_PROGRESS' },
            });
            return updated;
        });
    }
    completeRequest(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield prismaClient_1.prisma.request.findUnique({ where: { id } });
            if (!request)
                throw new errors_1.NotFoundError('Request not found');
            if (request.status !== 'IN_PROGRESS') {
                throw new bad_request_error_1.BadRequestError('Request is not in IN_PROGRESS status');
            }
            return yield prismaClient_1.prisma.request.update({
                where: { id },
                data: {
                    status: 'COMPLETED',
                    solutionText: data.solutionText,
                },
            });
        });
    }
    cancelRequest(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = yield prismaClient_1.prisma.request.findUnique({ where: { id } });
            if (!request)
                throw new errors_1.NotFoundError('Request not found');
            if (request.status === 'COMPLETED' || request.status === 'CANCELLED') {
                throw new bad_request_error_1.BadRequestError('Request is not in IN_PROGRESS status');
            }
            return yield prismaClient_1.prisma.request.update({
                where: { id },
                data: {
                    status: 'CANCELLED',
                    cancelReason: data.cancelReason,
                },
            });
        });
    }
    listRequests(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const { startDate, endDate } = filters;
            const where = {};
            if (startDate && endDate) {
                where.createdAt = {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                };
            }
            else if (startDate) {
                const dayStart = new Date(startDate);
                const dayEnd = new Date(startDate);
                dayEnd.setHours(23, 59, 59, 999);
                where.createdAt = {
                    gte: dayStart,
                    lte: dayEnd,
                };
            }
            const requests = yield prismaClient_1.prisma.request.findMany({
                where,
                orderBy: { createdAt: 'desc' },
            });
            return requests;
        });
    }
    bulkCancelInProgress() {
        return __awaiter(this, arguments, void 0, function* (reason = 'Auto-cancelled') {
            const result = yield prismaClient_1.prisma.request.updateMany({
                where: { status: 'IN_PROGRESS' },
                data: {
                    status: 'CANCELLED',
                    cancelReason: reason,
                },
            });
            return result;
        });
    }
}
exports.requestService = new RequestService();
//# sourceMappingURL=requests.service.js.map