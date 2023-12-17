import { Group } from "@@types/GroupType";
import { Player } from "@@types/PlayerType";

export interface GroupContextProps {
  groups: Group[];
  createGroup: (name: string) => Group;
  addGroup: (group: Group) => void;
  getGroup: (groupId: string) => Group | undefined;
  removeGroup: (groupId: string) => void;
  createPlayer: (name: string) => Player;
  addPlayer: (groupId: string, teamId: string, player: Player) => void;
  removePlayer: (groupId: string, teamId: string, playerId: string) => void;
}
