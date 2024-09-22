export interface GameData {
  id: number;
  team_one_id: number;
  team_two_id: number;
  game_type: string;
  team_one_total_yards: number;
  team_two_total_yards: number;
  team_one_rushing_yards: number;
  team_two_rushing_yards: number;
  team_one_rushes: number;
  team_two_rushes: number;
  team_one_passing_yards: number;
  team_two_passing_yards: number;
  team_one_completions: number;
  team_two_completions: number;
  team_one_attempts: number;
  team_two_attempts: number;
  team_one_sacks: number;
  team_two_sacks: number;
  team_one_interceptions: number;
  team_two_interceptions: number;
  team_one_punts: number;
  team_two_punts: number;
  team_one_fumbles: number;
  team_two_fumbles: number;
  team_one_fumblesLost: number;
  team_two_fumblesLost: number;
}
