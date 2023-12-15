import { Group } from "@@types/GroupType";

export interface GroupContextProps {
  groups: Group[];
  setGroups: React.Dispatch<React.SetStateAction<Group[]>>;
  createGroup: (name: string) => Group;
  addGroup: (group: Group) => void;
  removeGroup: (groupId: string) => void;
}
