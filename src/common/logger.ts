import morgan from 'morgan';
import chalk from 'chalk';
import { Request, Response } from 'express';

// Custom Morgan format with colorized logs using Chalk
export const logFormat = (tokens: any, req: Request, res: Response) => {
    const status = res.statusCode;
    const method = req.method;
    const url = req.url;
    const responseTime = tokens['response-time'](req, res);
    const date = new Date().toISOString().split('T').join(' ').split('.')[0];

    const coloredDate = chalk.gray(`[${date}]`);
    const coloredMethod = chalk.blue(method);
    const coloredStatus = status >= 400 ? chalk.red(status) : chalk.green(status);
    const coloredUrl = chalk.yellow(url);
    const coloredResponseTime = chalk.magenta(responseTime + ' ms');

    return `${coloredDate} ${coloredMethod} ${coloredUrl} ${coloredStatus} - ${coloredResponseTime}`;
};

// Export morgan as a middleware
export const morganMiddleware = morgan(logFormat);
