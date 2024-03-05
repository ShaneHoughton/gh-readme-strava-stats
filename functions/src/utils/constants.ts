import { IActivityStrings } from '../types';

// Units of Measurement
export const METERS_IN_MILE = 1609.34;
export const FEET_IN_METER = 3.28084;
export const SECONDS_PER_HOUR = 3600;
export const MINS_PER_HOUR = 60;

// Card Constants
export const BASE_CARD_HEIGHT = 50;
export const STAT_SECTION_HEIGHT = 100;
export const TITLE_START = 30;
export const CARD_ROW_OFFSET = 20;
export const ROW_START = TITLE_START + 2 * CARD_ROW_OFFSET;

export const CARD_WIDTH = 410;
export const CARD_BORDER_RADIUS = 10;

const CARD_COL_OFFSET = 150;
export const CARD_COL1 = CARD_WIDTH / 25;
export const CARD_COL2 = CARD_COL1 + CARD_COL_OFFSET;
export const CARD_COL3 = CARD_COL2 + CARD_COL_OFFSET;

// Medal Contants
export const GOLD_MEDAL_COUNT = 10;
export const SILVER_MEDAL_COUNT = 5;
export const BRONZE_MEDAL_COUNT = 1;

export const MEDAL_CONTENT = `
  <g id="Layer_1-2" data-name="Layer 1">
    <g>
      <path d="M58.15,14.18c.62-1.15,.69-2.04,.04-3.19-1.72-3.03-3.41-6.09-4.93-9.22C52.57,.33,51.66-.02,50.16,0c-6.91,.08-13.82,.03-20.72,.03s-13.98,.01-20.97-.01c-1.23,0-2.21,.1-2.86,1.42C3.95,4.78,2.16,8.05,.41,11.34c-.49,.92-.59,1.63,0,2.7,3.03,5.44,5.85,11,8.84,16.46,.73,1.33,.73,2.29-.11,3.59-3.32,5.15-4.51,10.77-3.47,16.87,1.73,10.2,9.84,18.26,20.08,19.79,10.02,1.5,20.38-3.77,24.86-12.85,4.04-8.17,3.48-16.2-1.22-23.96-.58-.95-.96-1.67-.27-2.9,3.11-5.57,6-11.25,9.05-16.85Zm-13.77-10.17c1.5,0,1.51,.57,.87,1.61-.09,.14-.15,.3-.2,.46-1.04,3.5-3.2,4.71-6.97,4.48-6.38-.38-12.81-.23-19.21-.04-2.35,.07-3.71-.68-4.56-2.76-.46-1.13-1.05-2.22-1.78-3.73,10.9,0,21.38,.02,31.86-.02Zm-4.43,11.71c-1.29,2.4-2.57,4.8-3.84,7.2-.52,.99-1.37,.74-2.18,.58-3.04-.62-6.1-.71-9.12,0-1.5,.35-2.25-.12-2.88-1.47-1.15-2.44-2.49-4.78-3.92-7.5,7.33,0,14.27,0,21.2,0,.94,0,1.2,.35,.75,1.2ZM5.14,14.42c-.7-1.24-.64-2.19,.07-3.37,1.1-1.82,2.04-3.74,3.21-5.93,3.48,6.54,6.78,12.75,10.09,18.96,.43,.81,.34,1.41-.53,1.82-.08,.03-.15,.06-.22,.11-1.52,.97-3.04,1.95-4.56,2.92-.98-1.61-2.03-3.18-2.93-4.83-1.74-3.2-3.34-6.49-5.13-9.67ZM49.2,46.83c.19,10.84-8.64,19.97-19.49,20.15-11.01,.18-20.28-8.69-20.42-19.53-.14-11.04,8.63-20.21,19.56-20.43,11.08-.23,20.16,8.61,20.36,19.81Zm-2.83-19.2c-.62,1.21-1.16,1.46-2.34,.55-5.07-3.87-4.71-1.62-4.14-3.2,.49-1.35,1.5-3.17,2.34-4.77,2.64-5.03,5.29-10.05,8.04-15.27,1.29,2.34,2.37,4.39,3.54,6.38,.48,.82,.42,1.44-.03,2.27-2.52,4.65-4.98,9.34-7.41,14.04Z"/>
      <circle cx="29.37" cy="47.01" r="14.06"/>
      <text x="15" y="47.01" fill="#ffffff">1</text>
    </g>
  </g>`;

export const MEDAL_PATH =
  '<path d="M58.15,14.18c.62-1.15,.69-2.04,.04-3.19-1.72-3.03-3.41-6.09-4.93-9.22C52.57,.33,51.66-.02,50.16,0c-6.91,.08-13.82,.03-20.72,.03s-13.98,.01-20.97-.01c-1.23,0-2.21,.1-2.86,1.42C3.95,4.78,2.16,8.05,.41,11.34c-.49,.92-.59,1.63,0,2.7,3.03,5.44,5.85,11,8.84,16.46,.73,1.33,.73,2.29-.11,3.59-3.32,5.15-4.51,10.77-3.47,16.87,1.73,10.2,9.84,18.26,20.08,19.79,10.02,1.5,20.38-3.77,24.86-12.85,4.04-8.17,3.48-16.2-1.22-23.96-.58-.95-.96-1.67-.27-2.9,3.11-5.57,6-11.25,9.05-16.85Zm-13.77-10.17c1.5,0,1.51,.57,.87,1.61-.09,.14-.15,.3-.2,.46-1.04,3.5-3.2,4.71-6.97,4.48-6.38-.38-12.81-.23-19.21-.04-2.35,.07-3.71-.68-4.56-2.76-.46-1.13-1.05-2.22-1.78-3.73,10.9,0,21.38,.02,31.86-.02Zm-4.43,11.71c-1.29,2.4-2.57,4.8-3.84,7.2-.52,.99-1.37,.74-2.18,.58-3.04-.62-6.1-.71-9.12,0-1.5,.35-2.25-.12-2.88-1.47-1.15-2.44-2.49-4.78-3.92-7.5,7.33,0,14.27,0,21.2,0,.94,0,1.2,.35,.75,1.2ZM5.14,14.42c-.7-1.24-.64-2.19,.07-3.37,1.1-1.82,2.04-3.74,3.21-5.93,3.48,6.54,6.78,12.75,10.09,18.96,.43,.81,.34,1.41-.53,1.82-.08,.03-.15,.06-.22,.11-1.52,.97-3.04,1.95-4.56,2.92-.98-1.61-2.03-3.18-2.93-4.83-1.74-3.2-3.34-6.49-5.13-9.67ZM49.2,46.83c.19,10.84-8.64,19.97-19.49,20.15-11.01,.18-20.28-8.69-20.42-19.53-.14-11.04,8.63-20.21,19.56-20.43,11.08-.23,20.16,8.61,20.36,19.81Zm-2.83-19.2c-.62,1.21-1.16,1.46-2.34,.55-5.07-3.87-4.71-1.62-4.14-3.2,.49-1.35,1.5-3.17,2.34-4.77,2.64-5.03,5.29-10.05,8.04-15.27,1.29,2.34,2.37,4.39,3.54,6.38,.48,.82,.42,1.44-.03,2.27-2.52,4.65-4.98,9.34-7.41,14.04Z"/>';

// Activity Contants and Enums
export enum ActivityEnums {
  RUN = 'RUN',
  BIKE = 'RIDE',
  SWIM = 'SWIM',
}
export enum StringTemplateEnums {
  ACTIVITY_STR = 'ACTIVITY_STR',
  DISTANCE_STR = 'DISTANCE_STR',
  TIME_STR = 'TIME_STR',
  ELVATION_STR = 'ELEVATION_STR',
  RESPONSE_LOOKUP = 'RESPONSE_LOOKUP',
}

export const ActivityStrings: IActivityStrings = {
  [ActivityEnums.RUN]: {
    [StringTemplateEnums.ACTIVITY_STR]: '👟 Runs',
    [StringTemplateEnums.DISTANCE_STR]: '🏃‍♂️ Distance',
    [StringTemplateEnums.TIME_STR]: '⏱️ Moving Time',
    [StringTemplateEnums.ELVATION_STR]: '🏔️ Elevation Gain',
    [StringTemplateEnums.RESPONSE_LOOKUP]: 'ytd_run_totals',
  },
  [ActivityEnums.BIKE]: {
    [StringTemplateEnums.ACTIVITY_STR]: '🚲 Rides',
    [StringTemplateEnums.DISTANCE_STR]: '🚴 Distance',
    [StringTemplateEnums.TIME_STR]: '⏱️ Moving Time',
    [StringTemplateEnums.ELVATION_STR]: '🚵‍♂️ Elevation Gain',
    [StringTemplateEnums.RESPONSE_LOOKUP]: 'ytd_ride_totals',
  },
  [ActivityEnums.SWIM]: {
    [StringTemplateEnums.ACTIVITY_STR]: '🩲 Swims',
    [StringTemplateEnums.DISTANCE_STR]: '🏊‍♂️ Distance',
    [StringTemplateEnums.TIME_STR]: '⏱️ Moving Time',
    [StringTemplateEnums.ELVATION_STR]: '🏔️ Elevation Gain?',
    [StringTemplateEnums.RESPONSE_LOOKUP]: 'ytd_swim_totals',
  },
};
