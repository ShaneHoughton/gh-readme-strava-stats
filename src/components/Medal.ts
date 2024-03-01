import { CARD_ROW_OFFSET, CARD_COL3, MEDAL_PATH } from "../utils/constants";
import { pickMedalColor, centerText } from "../utils/helpers";

const Medal = (achievementCount: number, medalStart: number) => {
  const medalY = medalStart - (CARD_ROW_OFFSET / 2);
  const labelY = medalStart + (3 * CARD_ROW_OFFSET)

  return (`
  <svg 
  fill="${pickMedalColor(achievementCount)}" 
  viewBox="0 0 100 100"
  width="75"
  height="75"
  x="${CARD_COL3}"
  y="${medalY}"
  id="achievement_medal" 
  data-name="Achievement Medal" 
  xmlns="http://www.w3.org/2000/svg">
    <g id="Layer_1" data-name="Layer 1">
      <g>
        ${MEDAL_PATH}
        <circle cx="29.37" cy="47.01" r="14.06"/>
        <text
        x="${centerText(achievementCount.toString(), 29.37)}"
        y="52"
        class="achievement-count">
        ${achievementCount}
        </text>
      </g>
    </g>
  </svg>
  <text x="${centerText('center', CARD_COL3)}" y="${labelY}" class="card-text label" >Achievements</text>
  `);
};

export default Medal;