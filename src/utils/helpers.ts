
import {
  CARD_ROW_OFFSET,
  CARD_COL1,
  CARD_COL2,
  ROW_START,
  STAT_SECTION_HEIGHT,
  SECONDS_PER_HOUR,
  MINS_PER_HOUR,
  GOLD_MEDAL_COUNT,
  SILVER_MEDAL_COUNT,
  BRONZE_MEDAL_COUNT
} from './constants';
import { IResponseData, ITotals } from '../types'
import { ActivityStrings, ActivityEnums } from "../utils/constants";
import Medal from '../components/Medal';
import { METERS_IN_MILE, FEET_IN_METER } from "./constants";
import { ColorThemes, MedalColors } from '../styles';

export const metersToMiles = (meters: number) => {
  return Math.ceil(meters / METERS_IN_MILE);
};

export const metersToFeet = (meters: number) => {
  return Math.ceil(meters * FEET_IN_METER);
}

export const minutesToString = (mins: number) => {
  const hours = Math.floor(mins / SECONDS_PER_HOUR);
  const remainingMins = Math.floor((mins % SECONDS_PER_HOUR) / MINS_PER_HOUR);
  return `${hours} hr ${remainingMins} min`;
}

export const buildStyles = (variant: string) => {
  const theme = ColorThemes[variant] || ColorThemes['original'];
  const style = `
  <style>
    .card-rect {
      fill: ${theme.primary};
    }
    .card-text {
      font-family: Arial, sans-serif;
      font-weight: bold;
      font-size: 14px;
      fill: ${theme.secondary};
    }
    .card-title {
      font-size: 16px;
    }
    .achievement-count {
      font-family: Arial, sans-serif;
      font-weight: bold;
      font-size: 14px;
      fill: ${theme.primary};
    }
  </style>`

  return style;
}

export const buildActivityStats = (response: IResponseData, activityArr: ActivityEnums[]) => {
  const buildStatSection = (activity: string, rowStart: number) => {
    const makeRows = (rows: string[], columnStart: number) => {
      return `
      ${rows.map((content: string, index: number) => {
        const rowOffset = rowStart + (index * CARD_ROW_OFFSET)
        return `<text x="${columnStart}" y="${rowOffset}" class="card-text" >${content}</text>`
      })}`
    }
    const strings = ActivityStrings[activity];
    const stats = response[strings.RESPONSE_LOOKUP] as ITotals;
    const achievementCount = stats.achievement_count;

    const labels = [
      strings.ACTIVITY_STR,
      strings.DISTANCE_STR,
      strings.TIME_STR,
      strings.ELEVATION_STR,
    ];

    const totals = [
      `${stats.count} total`,
      `${metersToMiles(stats.distance)} mi`,
      `${minutesToString(stats.moving_time)}`,
      `${metersToFeet(stats.elevation_gain)} ft`,
    ];
  
    return `
    ${makeRows(labels, CARD_COL1)}
    ${makeRows(totals, CARD_COL2)}
    ${Medal(achievementCount, rowStart)}
  `
  }
  let statsStr = '';
  let rowStart = ROW_START;
  activityArr.forEach((activity) => {
    statsStr += buildStatSection(activity, rowStart);
    rowStart += STAT_SECTION_HEIGHT
  })
  return statsStr;
}

export const pickMedalColor = (achievementCount: number) => {
  if (achievementCount >= GOLD_MEDAL_COUNT) return MedalColors.GOLD;
  if (achievementCount >= SILVER_MEDAL_COUNT) return MedalColors.SILVER;
  if (achievementCount >= BRONZE_MEDAL_COUNT) return MedalColors.BRONZE;
  return MedalColors.SPECTATOR;
}

export const centerText = (text: string, cx: number) => {
  const textWidth = text.length * 8;
  return cx - (textWidth / 2)
}