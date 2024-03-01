import express, { Request, Response } from 'express';
import Card from './components/Card';
import { ActivityEnums } from './utils/constants';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Define your SVG generation route
app.get('/badge', async (req: Request, res: Response) => {
    const { name, variant, run, bike, swim } = req.query;
    const stravaActivityArr: ActivityEnums[] = [];
    if (run) stravaActivityArr.push(ActivityEnums.RUN);
    if (bike) stravaActivityArr.push(ActivityEnums.BIKE);
    if (swim) stravaActivityArr.push(ActivityEnums.SWIM);
    try {
        const svg = await Card(name, stravaActivityArr, variant as string);
        res.set('Content-Type', 'image/svg+xml');
        res.send(svg);
    } catch (err) {
        console.log(err);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
