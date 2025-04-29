import express, { ErrorRequestHandler } from 'express';
require('dotenv').config();
import requestRoutes from './modules/requests/requests.routes';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './common/errors';
import { morganMiddleware } from './common/logger';




const app = express();
app.use(morganMiddleware);
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/requests', requestRoutes);

app.use((req, res, next) => {
    // If no route matches, throw a NotFoundError
    next(new NotFoundError('Route not found'));
});

app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});