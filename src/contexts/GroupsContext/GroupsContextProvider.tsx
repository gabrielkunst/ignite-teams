import uuid from "react-native-uuid";
import { useState } from "react";
import { GroupsContext } from "./GroupsContext";
import { Group } from "@@types/GroupType";

interface GroupsContextProviderProps {
  children: React.ReactNode;
}

export function GroupsContextProvider({
  children,
}: GroupsContextProviderProps) {
  const [groups, setGroups] = useState<Group[]>([]);

  const createGroup = (name: string): Group => {
    return {
      id: String(uuid.v4()),
      name,
      teams: [],
    };
  };

  const addGroup = (group: Group) => {
    setGroups((prevState) => [...prevState, group]);
  };

  const removeGroup = (groupId: string) => {
    const filteredGroups = groups.filter((group) => group.id !== groupId);
    setGroups(filteredGroups);
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        setGroups,
        createGroup,
        addGroup,
        removeGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
}
