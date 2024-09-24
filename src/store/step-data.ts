import { create } from "zustand";

export type StepsData = {
  name: string;
  weight: string;
  height: string;
  age: string;
  level: string;
  objective: string;
  gender: string;
};

type StepsState = {
  steps: StepsData;
  setStepOne: (data: Omit<StepsData, "level" | "objective" | "gender">) => void;
  setStepTwo: (data: Pick<StepsData, "level" | "objective" | "gender">) => void;
};

export const useStepsStore = create<StepsState>((set) => ({
  steps: {
    name: "",
    weight: "",
    height: "",
    age: "",
    level: "",
    objective: "",
    gender: "",
  },
  setStepOne: (data) =>
    set((state: StepsState) => ({
      steps: {
        ...state.steps,
        ...data,
      },
    })),
  setStepTwo: (data) =>
    set((state: StepsState) => ({
      steps: {
        ...state.steps,
        ...data,
      },
    })),
}));
