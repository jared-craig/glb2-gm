export const getDefaultFactors = (position: string) => {
  const positionFactors: { [pos: string]: { [key: string]: number } } = {
    QB: {
      pass_technique: 0.8,
      pass_accuracy: 0.8,
      pass_power: 1.0,
      pass_consistency: 0.8,
      pass_grip: 3.0,
      pass_evasiveness: 3.0,
      pass_carry_power: 3.0,
      pass_awareness: 2.0,
      carry_grip: 20.0,
      carry_power: 20.0,
      carry_elusiveness: 20.0,
      carry_awareness: 20.0,
      balance: 20.0,
      footwork: 20.0,
      quickness: 20.0,
      sprinting: 20.0,
      conditioning: 2.5,
      toughness: 5.0,
      heart: 2.0,
      intimidation: 20.0,
      leadership: 2.5,
    },
    HB: {
      carry_grip: 2.5,
      carry_power: 0.4,
      carry_elusiveness: 0.5,
      carry_awareness: 2.2,
      return_awareness: 20.0,
      route_technique: 20.0,
      route_elusiveness: 20.0,
      catch_hands: 20.0,
      catch_in_traffic: 20.0,
      catch_grip: 20.0,
      catch_awareness: 20.0,
      catch_consistency: 20.0,
      pass_block_technique: 20.0,
      pass_block_power: 20.0,
      pass_block_awareness: 20.0,
      run_block_technique: 20.0,
      run_block_power: 20.0,
      run_block_awareness: 20.0,
      lead_block_awareness: 20.0,
      block_consistency: 20.0,
      balance: 1.3,
      footwork: 0.8,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 20.0,
      diving: 20.0,
      conditioning: 1.2,
      toughness: 3.0,
      snap_reaction: 20.0,
      heart: 3.0,
      intimidation: 20.0,
    },
    FB: {
      pass_block_technique: 1.0,
      pass_block_power: 1.0,
      pass_block_awareness: 1.0,
      run_block_technique: 1.0,
      run_block_power: 1.0,
      run_block_awareness: 1.0,
      lead_block_awareness: 1.0,
      block_consistency: 1.0,
      route_technique: 1.0,
      route_elusiveness: 1.0,
      catch_hands: 1.0,
      catch_in_traffic: 1.0,
      catch_grip: 1.0,
      catch_awareness: 1.0,
      catch_consistency: 1.0,
      carry_grip: 2.5,
      carry_power: 0.4,
      carry_elusiveness: 0.5,
      carry_awareness: 2.2,
      return_awareness: 1.0,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 1.0,
      diving: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    TE: {
      route_technique: 1.0,
      route_elusiveness: 1.0,
      catch_hands: 0.8,
      catch_in_traffic: 1.2,
      catch_grip: 2.0,
      catch_awareness: 3.0,
      catch_consistency: 1.0,
      pass_block_technique: 20.0,
      pass_block_power: 20.0,
      pass_block_awareness: 20.0,
      run_block_technique: 20.0,
      run_block_power: 20.0,
      run_block_awareness: 20.0,
      lead_block_awareness: 20.0,
      block_consistency: 20.0,
      carry_grip: 4.5,
      carry_power: 20.0,
      carry_elusiveness: 20.0,
      carry_awareness: 20.0,
      return_awareness: 20.0,
      balance: 2.0,
      footwork: 1.5,
      quickness: 1.0,
      sprinting: 0.8,
      vertical: 2.5,
      diving: 2.5,
      conditioning: 0.8,
      toughness: 3.5,
      snap_reaction: 2.0,
      heart: 2.5,
      intimidation: 20.0,
    },
    WR: {
      route_technique: 1.0,
      route_elusiveness: 1.0,
      catch_hands: 1.0,
      catch_in_traffic: 1.0,
      catch_grip: 2.0,
      catch_awareness: 3.0,
      catch_consistency: 1.0,
      carry_grip: 3.5,
      carry_power: 20.0,
      carry_elusiveness: 20.0,
      carry_awareness: 20.0,
      return_awareness: 20.0,
      run_block_technique: 20.0,
      run_block_power: 20.0,
      run_block_awareness: 20.0,
      block_consistency: 20.0,
      balance: 3.0,
      footwork: 3.0,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 3.0,
      diving: 3.0,
      conditioning: 1.1,
      toughness: 3.0,
      snap_reaction: 2.0,
      heart: 3.0,
      intimidation: 20.0,
    },
    C: {
      pass_block_technique: 1.0,
      pass_block_power: 1.0,
      pass_block_awareness: 1.0,
      run_block_technique: 1.0,
      run_block_power: 1.0,
      run_block_awareness: 1.0,
      block_consistency: 1.0,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    G: {
      pass_block_technique: 1.0,
      pass_block_power: 1.0,
      pass_block_awareness: 1.0,
      run_block_technique: 1.0,
      run_block_power: 1.0,
      run_block_awareness: 1.0,
      lead_block_awareness: 1.0,
      block_consistency: 1.0,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    OT: {
      pass_block_technique: 1.0,
      pass_block_power: 1.0,
      pass_block_awareness: 1.0,
      run_block_technique: 1.0,
      run_block_power: 1.0,
      run_block_awareness: 1.0,
      lead_block_awareness: 1.0,
      block_consistency: 1.0,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    DT: {
      pass_rush_technique: 1.0,
      pass_rush_power: 1.0,
      pass_rush_deflection: 1.0,
      break_run_block: 1.0,
      blitz_awareness: 1.0,
      hold_ground: 1.0,
      tackle_awareness: 1.0,
      defense_consistency: 1.0,
      tackle_technique: 1.0,
      tackle_power: 1.0,
      tackle_strip: 1.0,
      tackle_grip: 1.0,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 1.0,
      diving: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    DE: {
      pass_rush_technique: 1.0,
      pass_rush_power: 1.0,
      pass_rush_deflection: 1.0,
      break_run_block: 1.0,
      blitz_awareness: 1.0,
      hold_ground: 1.0,
      tackle_awareness: 1.0,
      defense_consistency: 1.0,
      zone_coverage_awareness: 1.0,
      coverage_deflection: 1.0,
      coverage_interception: 1.0,
      tackle_technique: 1.0,
      tackle_power: 1.0,
      tackle_strip: 1.0,
      tackle_grip: 1.0,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 1.0,
      diving: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    LB: {
      tackle_technique: 1.0,
      tackle_power: 1.0,
      tackle_strip: 1.0,
      tackle_grip: 1.0,
      break_run_block: 1.0,
      blitz_awareness: 1.0,
      hold_ground: 1.0,
      tackle_awareness: 1.0,
      defense_consistency: 1.0,
      man_coverage_awareness: 1.0,
      zone_coverage_awareness: 1.0,
      coverage_technique: 1.0,
      coverage_deflection: 1.0,
      coverage_interception: 1.0,
      pass_rush_technique: 1.0,
      pass_rush_power: 1.0,
      pass_rush_deflection: 1.0,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 1.0,
      diving: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    CB: {
      man_coverage_awareness: 1.0,
      zone_coverage_awareness: 1.0,
      coverage_technique: 1.0,
      coverage_deflection: 1.0,
      coverage_interception: 1.0,
      tackle_technique: 1.0,
      tackle_power: 1.0,
      tackle_strip: 1.0,
      tackle_grip: 1.0,
      break_run_block: 1.0,
      blitz_awareness: 1.0,
      hold_ground: 1.0,
      tackle_awareness: 1.0,
      defense_consistency: 1.0,
      pass_rush_technique: 1.0,
      pass_rush_power: 1.0,
      pass_rush_deflection: 1.0,
      carry_grip: 2.5,
      carry_power: 0.4,
      carry_elusiveness: 0.5,
      return_awareness: 2.2,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 1.0,
      diving: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    SS: {
      man_coverage_awareness: 1.0,
      zone_coverage_awareness: 1.0,
      coverage_technique: 1.0,
      coverage_deflection: 1.0,
      coverage_interception: 1.0,
      tackle_technique: 1.0,
      tackle_power: 1.0,
      tackle_strip: 1.0,
      tackle_grip: 1.0,
      break_run_block: 1.0,
      blitz_awareness: 1.0,
      hold_ground: 1.0,
      tackle_awareness: 1.0,
      defense_consistency: 1.0,
      pass_rush_technique: 1.0,
      pass_rush_power: 1.0,
      pass_rush_deflection: 1.0,
      return_awareness: 2.2,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 1.0,
      diving: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
    FS: {
      man_coverage_awareness: 1.0,
      zone_coverage_awareness: 1.0,
      coverage_technique: 1.0,
      coverage_deflection: 1.0,
      coverage_interception: 1.0,
      tackle_technique: 1.0,
      tackle_power: 1.0,
      tackle_strip: 1.0,
      tackle_grip: 1.0,
      break_run_block: 1.0,
      blitz_awareness: 1.0,
      hold_ground: 1.0,
      tackle_awareness: 1.0,
      defense_consistency: 1.0,
      pass_rush_technique: 1.0,
      pass_rush_power: 1.0,
      pass_rush_deflection: 1.0,
      return_awareness: 2.2,
      balance: 1.3,
      footwork: 1.0,
      quickness: 1.2,
      sprinting: 1.0,
      vertical: 1.0,
      diving: 1.0,
      conditioning: 1.2,
      toughness: 1.0,
      snap_reaction: 1.0,
      heart: 1.0,
      intimidation: 1.0,
    },
  };
  return positionFactors[position];
};