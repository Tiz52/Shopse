import {UiState} from "./";

type UiActionType = {
  type: "[Ui] - Change Category Active";
  payload: "shoes" | "clothing" | "accessories" | "none";
};

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case "[Ui] - Change Category Active":
      return {
        ...state,
        categoryActive: action.payload,
      };

    default:
      return state;
  }
};