import { NotFoundError } from '../../common/errors';
import { AppError } from '../../common/errors/app.error';
import { BadRequestError } from '../../common/errors/bad-request.error';
import { prisma } from '../../database/prismaClient';
import { CreateRequestDto } from './dto/create-request.dto';

class RequestService {
    async createRequest(data: CreateRequestDto) {
        const newRequest = await prisma.request.create({
            data: {
                subject: data.subject,
                text: data.text,
            },
        });
        return newRequest;
    }

    async startRequest(id: number) {
        const existing = await prisma.request.findUnique({ where: { id } });
        if (!existing) {
            throw new AppError('Request not found', 404);
        }

        if (existing.status !== 'NEW') {
            throw new BadRequestError('Request is not in NEW status');
        }

        const updated = await prisma.request.update({
            where: { id },
            data: { status: 'IN_PROGRESS' },
        });

        return updated;
    }
    async completeRequest(id: number, data: { solutionText: string }) {
        const request = await prisma.request.findUnique({ where: { id } });
        if (!request) throw new NotFoundError('Request not found');

        if (request.status !== 'IN_PROGRESS') {
            throw new BadRequestError('Request is not in IN_PROGRESS status');
        }

        return await prisma.request.update({
            where: { id },
            data: {
                status: 'COMPLETED',
                solutionText: data.solutionText,
            },
        });
    }
    async cancelRequest(id: number, data: { cancelReason: string }) {
        const request = await prisma.request.findUnique({ where: { id } });
        if (!request) throw new NotFoundError('Request not found');

        if (request.status === 'COMPLETED' || request.status === 'CANCELLED') {
            throw new BadRequestError('Request is not in IN_PROGRESS status');
        }

        return await prisma.request.update({
            where: { id },
            data: {
                status: 'CANCELLED',
                cancelReason: data.cancelReason,
            },
        });
    }
    async listRequests(filters: { startDate?: string; endDate?: string }) {
        const { startDate, endDate } = filters;

        const where: any = {};

        if (startDate && endDate) {
            where.createdAt = {
                gte: new Date(startDate),
                lte: new Date(endDate),
            };
        } else if (startDate) {
            const dayStart = new Date(startDate);
            const dayEnd = new Date(startDate);
            dayEnd.setHours(23, 59, 59, 999);

            where.createdAt = {
                gte: dayStart,
                lte: dayEnd,
            };
        }

        const requests = await prisma.request.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });

        return requests;
    }
    async bulkCancelInProgress(reason = 'Auto-cancelled') {
        const result = await prisma.request.updateMany({
            where: { status: 'IN_PROGRESS' },
            data: {
                status: 'CANCELLED',
                cancelReason: reason,
            },
        });
        return result;
    }
}

export const requestService = new RequestService();
