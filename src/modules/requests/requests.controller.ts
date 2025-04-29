import { NextFunction, Request, Response } from 'express';
import { requestService } from './requests.service';
import { AppError } from '../../common/errors';

class RequestController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { subject, text } = req.body;
            const newRequest = await requestService.createRequest({ subject, text });
            res.status(201).json(newRequest);
        } catch (error) {
            next(error);
        }
    }
    async start(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            if (!id || isNaN(id)) {
                throw new AppError('Invalid or missing request ID', 400);
            }
            const result = await requestService.startRequest(id);
            res.json(result);
        } catch (error: any) {
            next(error);
        }
    }
    async complete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            if (!id || isNaN(id)) {
                throw new AppError('Invalid or missing request ID', 400);
            }
            const { solutionText } = req.body;
            const result = await requestService.completeRequest(id, { solutionText });
            res.json(result);
        } catch (error: any) {
            next(error);
        }
    }
    async cancel(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            if (!id || isNaN(id)) {
                throw new AppError('Invalid or missing request ID', 400);
            }
            const { cancelReason } = req.body;
            const result = await requestService.cancelRequest(id, { cancelReason });
            res.json(result);
        } catch (error: any) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction) {
        try {
            const { startDate, endDate } = req.query;
            const result = await requestService.listRequests({
                startDate: startDate as string,
                endDate: endDate as string,
            });
            res.json(result);
        } catch (error: any) {
            next(error);
        }
    }
    async bulkCancel(req: Request, res: Response, next: NextFunction) {
        try {
            const { reason } = req.body;
            const result = await requestService.bulkCancelInProgress(reason || 'Auto-cancelled');
            res.json(result);
        } catch (error: any) {
            next(error);
        }
    }


}

export const requestController = new RequestController();
