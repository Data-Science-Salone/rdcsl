export interface Distict {
  name: string;
  chiefdoms: Array<string>;
}

export interface Region {
  name: string;
  districts: Array<Distict>;
}
