import express, { Request, Response } from 'express';
import * as functions from 'firebase-functions';
import buildCard from './components/Card';
import { ActivityEnums } from './utils/constants';

const app = express();

app.get('/badge', async (req: Request, res: Response) => {
  const { name, variant, run, bike, swim } = req.query;
  const stravaActivityArr: ActivityEnums[] = [];
  if (run) stravaActivityArr.push(ActivityEnums.RUN);
  if (bike) stravaActivityArr.push(ActivityEnums.BIKE);
  if (swim) stravaActivityArr.push(ActivityEnums.SWIM);
  try {
    const svg = await buildCard(name, stravaActivityArr, variant as string);
    res.set('Content-Type', 'image/svg+xml');
    res.send(svg);
  } catch (err) {
    console.log(err);
  }
});

exports.app = functions.https.onRequest(app);
