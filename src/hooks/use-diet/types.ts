export type CreateDietBody = {
  name: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  level: string;
  objective: string;
};

export type Meals = {
  horario: string;
  nome: string;
  alimentos: string[];
};

export type Diet = {
  nome: string;
  sexo: string;
  idade: number;
  altura: number;
  peso: number;
  objetivo: string;
  refeicoes: Meals[];
  suplementos: string[];
};
