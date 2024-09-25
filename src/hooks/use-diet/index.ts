import { useCallback, useState } from "react";
import { api } from "@/src/libs/axios";
import { CreateDietBody, Diet } from "./types";

export function useDiet() {
  const [diet, setDiet] = useState<Diet>();
  const [dietLoading, setDietLoading] = useState(false);

  const createDiet = useCallback(
    async ({
      name,
      age,
      gender,
      height,
      weight,
      level,
      objective,
    }: CreateDietBody) => {
      try {
        setDietLoading(true);

        const response = await api.post("/create", {
          name,
          age,
          gender,
          height,
          weight,
          level,
          objective,
        });

        if (response) {
          setDiet(response.data);
        }

        return response.data as Diet;
      } catch (error) {
        console.log(error);
      } finally {
        setDietLoading(false);
      }
    },
    []
  );

  return {
    diet,
    dietLoading,
    createDiet,
  };
}
