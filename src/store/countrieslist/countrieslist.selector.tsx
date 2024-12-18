export const TOGGLE_REGION = "TOGGLE_REGION";

export interface RegionState {
  [region: string]: boolean;
}

interface ToggleRegionAction {
  type: typeof TOGGLE_REGION;
  payload: string;
}

export type RegionActionTypes = ToggleRegionAction;

export const regionReducer = (
  state: RegionState,
  action: RegionActionTypes,
): RegionState => {
  switch (action.type) {
    case TOGGLE_REGION:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      return state;
  }
};
