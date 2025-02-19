import { atom, selector } from "recoil";
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
export const recruitPrivacyState = selector({
  key: "recruitPrivacyState",
  get: ({ get }) => get(recruitState).privacy,
});

export const recruitPersonalState = selector({
  key: "recruitPersonalState",
  get: ({ get }) => get(recruitState).personal,
});

export const recruitApplicationState = selector({
  key: "recruitApplicationState",
  get: ({ get }) => get(recruitState).application,
});
