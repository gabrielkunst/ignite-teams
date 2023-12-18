import { Team } from "./TeamType";

export interface Group {
  id: string;
  name: string;
  teams: Team[];
}
