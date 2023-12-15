import { createContext } from "react";
import { GroupContextProps } from "./GroupContextProps";

export const GroupsContext = createContext<GroupContextProps>({
  groups: [],
  setGroups: () => {},
  createGroup: () => ({}) as any,
  addGroup: () => {},
  removeGroup: () => {},
});
