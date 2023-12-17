import { createContext } from "react";
import { GroupContextProps } from "./GroupContextProps";

export const GroupsContext = createContext<GroupContextProps>({
  groups: [],
  createGroup: () => ({}) as any,
  addGroup: () => {},
  getGroup: () => ({}) as any,
  removeGroup: () => {},
  createPlayer: () => ({}) as any,
  addPlayer: () => {},
  removePlayer: () => {},
});
