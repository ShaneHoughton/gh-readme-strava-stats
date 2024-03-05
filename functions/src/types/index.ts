export interface IColorTheme {
  [variant: string]: {
    primary: string;
    secondary: string;
  }
}

export interface ITotals {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
  achievement_count: number;
  [key: string]: number;
}

export interface IResponseData {
  biggest_ride_distance: number;
  biggest_climb_elevation_gain: number;
  recent_ride_totals: ITotals;
  recent_run_totals: ITotals;
  recent_swim_totals: ITotals;
  ytd_ride_totals: ITotals;
  ytd_run_totals: ITotals;
  ytd_swim_totals: ITotals;
  all_ride_totals: ITotals;
  all_run_totals: ITotals;
  all_swim_totals: ITotals;
  [key: string]: ITotals | number;
}

export interface IIndexableObj { 
  [key: string]: {
    [key: string]: number
  } | number
}

export interface IActivityStrings { 
  [key: string]: {
    [key: string]: string
  }
}