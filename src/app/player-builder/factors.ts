export const getFactors = (position: string, template: string) => {
  const positionFactors: { [pos: string]: { [temp: string]: { [key: string]: number } } } = {
    QB: {
      Pocket: {
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
    },
    HB: {
      Slombo: {
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
      Elusive: {
        carry_grip: 2.6,
        carry_power: 0.6,
        carry_elusiveness: 0.0,
        carry_awareness: 20.0,
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
        sprinting: 0.8,
        vertical: 20.0,
        diving: 20.0,
        conditioning: 1.2,
        toughness: 3.3,
        snap_reaction: 20.0,
        heart: 3.5,
        intimidation: 20.0,
      },
      Power: {
        carry_grip: 2.0,
        carry_power: 0.0,
        carry_elusiveness: 1.0,
        carry_awareness: 0.1,
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
        balance: 0.0,
        footwork: 1.0,
        quickness: 1.5,
        sprinting: 1.0,
        vertical: 20.0,
        diving: 20.0,
        conditioning: 0.0,
        toughness: 3.0,
        snap_reaction: 20.0,
        heart: 2.5,
        intimidation: 2.0,
      },
      Speed: {
        carry_grip: 1.0,
        carry_power: 20.0,
        carry_elusiveness: 0.8,
        carry_awareness: 1.0,
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
        balance: 0.0,
        footwork: 1.0,
        quickness: 1.3,
        sprinting: 0.0,
        vertical: 20.0,
        diving: 20.0,
        conditioning: 0.0,
        toughness: 6.5,
        snap_reaction: 20.0,
        heart: 4.3,
        intimidation: 20.0,
      },
    },
    FB: {
      Norm: {
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
    },
    TE: {
      Possession: {
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
        carry_grip: 4.0,
        carry_power: 20.0,
        carry_elusiveness: 20.0,
        carry_awareness: 20.0,
        return_awareness: 20.0,
        balance: 2.0,
        footwork: 1.5,
        quickness: 1.0,
        sprinting: 0.8,
        vertical: 2.0,
        diving: 2.0,
        conditioning: 0.8,
        toughness: 2.5,
        snap_reaction: 1.5,
        heart: 1.5,
        intimidation: 20.0,
      },
    },
    WR: {
      Possession: {
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
    },
    C: {
      Norm: {
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
    },
    G: {
      Norm: {
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
    },
    OT: {
      Norm: {
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
    },
    DT: {
      Norm: {
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
    },
    DE: {
      Spin: {
        pass_rush_technique: 0.0,
        pass_rush_power: 20.0,
        pass_rush_deflection: 20.0,
        break_run_block: 1.2,
        blitz_awareness: 2.0,
        hold_ground: 1.2,
        tackle_awareness: 2.0,
        defense_consistency: 1.5,
        zone_coverage_awareness: 20.0,
        coverage_deflection: 20.0,
        coverage_interception: 20.0,
        tackle_technique: 1.5,
        tackle_power: 2.0,
        tackle_strip: 2.0,
        tackle_grip: 2.0,
        balance: 1.2,
        footwork: 1.6,
        quickness: 0.5,
        sprinting: 0.4,
        vertical: 20.0,
        diving: 2.0,
        conditioning: 0.7,
        toughness: 1.5,
        snap_reaction: 1.0,
        heart: 1.8,
        intimidation: 1.5,
      },
    },
    LB: {
      Norm: {
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
    },
    CB: {
      Norm: {
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
    },
    SS: {
      Norm: {
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
    },
    FS: {
      Norm: {
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
    },
  };
  return positionFactors[position][template];
};
