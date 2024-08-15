import { PlayerPassingData } from './passing/playerPassingData';
import { PlayerReceivingData } from './receiving/playerReceivingData';
import { PlayerRushingData } from './rushing/playerRushingData';

export const getPassingGmRating = (x: PlayerPassingData): number => {
  return Math.round(
    +(+x.yards / +x.games_played) +
      2.0 * +x.touchdowns -
      2.0 * +x.interceptions +
      100.0 * +x.yards_per_attempt -
      +x.sacks +
      (+x.rush_yards > 0 && +x.rush_touchdowns > 0 ? +(+x.rush_yards / +x.games_played) + 2.0 * +x.rush_touchdowns : 0.0)
  );
};

export const getReceivingGmRating = (x: PlayerReceivingData): number => {
  return Math.round(+(+x.yards / +x.games_played) + 2.0 * +x.touchdowns - 10.0 * +x.drops - +x.fumbles_lost);
};

export const getRushingGmRating = (x: PlayerRushingData): number => {
  return Math.round(
    +(+x.yards / +x.games_played) +
      2.0 * +x.touchdowns +
      100.0 * +x.average -
      10.0 * +x.fumbles_lost +
      (+x.rec_yards > 0 && +x.rec_touchdowns > 0 ? +(+x.rec_yards / +x.games_played) + 2.0 * +x.rec_touchdowns : 0.0)
  );
};

export const getReceivingDropsPerReception = (x: any): number => {
  return +(+x.drops / +x.receptions).toFixed(2);
};
