import { atom } from "recoil";

interface ButtonState {
  isClicked: boolean | null;
}

export const selectedRadioState = atom<ButtonState>({
  key: "selectedRadioState",
  default: {
    isClicked: null,
  },
});
