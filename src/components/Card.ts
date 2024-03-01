import axios from "axios";
import { buildStyles } from "../utils/helpers";
import { newMock } from "../utils/mock";
import { 
  BASE_CARD_HEIGHT,
  CARD_WIDTH,
  CARD_BORDER_RADIUS,
  STAT_SECTION_HEIGHT,
  CARD_COL1,
  TITLE_START,
  ActivityEnums
} from "../utils/constants";
import { buildActivityStats } from "../utils/helpers";
import { IResponseData } from "../types";

const Card = async (name: any, stravaActivityArr: ActivityEnums[], variant = 'original') => {
  const calculatedHeight = BASE_CARD_HEIGHT + (STAT_SECTION_HEIGHT * stravaActivityArr.length);

  const getStatsMock = () => {
    return newMock;
  }

  const style = buildStyles(variant);
  const response: IResponseData = getStatsMock();
  const activityStats = buildActivityStats(response, stravaActivityArr);

  return (
    `<svg width="${CARD_WIDTH + 10}" height="${calculatedHeight + 10}" xmlns="http://www.w3.org/2000/svg">
      ${style}
      <rect width="${CARD_WIDTH}"
      height="${calculatedHeight}" 
      rx="${CARD_BORDER_RADIUS}" 
      ry="${CARD_BORDER_RADIUS}" 
      class="card-rect" />
      <text x="${CARD_COL1}" y="${TITLE_START}" class="card-text card-title" >${name}'s Year-to-Date Strava Stats</text>
      ${activityStats}
    </svg>`
  );
};

export default Card;
