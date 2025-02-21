import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface recruitState {
  privacy: number | null;
  personal: {
    name: string;
    email: string;
    phone: string;
  };
  application: number | null;
}

export const recruitState = atom<recruitState>({
  key: "recruitState",
  default: {
    privacy: null,
    personal: {
      name: "",
      email: "",
      phone: "",
    },
    application: null,
  },
  effects_UNSTABLE: [persistAtom],
});