import { Player } from "./PlayerType";

export interface Team {
  id: string;
  name: string;
  players: Player[];
}
