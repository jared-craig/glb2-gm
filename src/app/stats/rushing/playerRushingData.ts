export interface PlayerRushingData {
  id: number;
  player_name: string;
  team_name: string;
  position: string;
  games_played: number;
  rushes: number;
  yards: number;
  average: number;
  touchdowns: number;
  broken_tackles: number;
  yards_after_contact: number;
  tackles_for_loss: number;
  fumbles: number;
  fumbles_lost: number;
  tier: string;
  rec_yards: number;
  rec_touchdowns: number;
}
