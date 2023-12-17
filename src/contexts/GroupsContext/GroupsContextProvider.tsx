import uuid from "react-native-uuid";
import { useState } from "react";
import { GroupsContext } from "./GroupsContext";
import { Group } from "@@types/GroupType";
import { Player } from "@@types/PlayerType";

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
      teams: [
        {
          id: String(uuid.v4()),
          name: "Time A",
          players: [],
        },
        {
          id: String(uuid.v4()),
          name: "Time B",
          players: [],
        },
      ],
    };
  };

  const addGroup = (group: Group) => {
    setGroups((prevState) => [...prevState, group]);
  };

  const removeGroup = (groupId: string) => {
    const filteredGroups = groups.filter((group) => group.id !== groupId);
    setGroups(filteredGroups);
  };

  const getGroup = (groupId: string): Group | undefined => {
    const selectedGroup = groups.find((group) => group.id === groupId);

    if (!selectedGroup) {
      throw new Error("Group not found");
    }

    return selectedGroup;
  };

  const createPlayer = (name: string): Player => {
    return {
      id: String(uuid.v4()),
      name,
    };
  };

  const addPlayer = (groupId: string, teamId: string, player: Player) => {
    const group = getGroup(groupId);

    if (!group) {
      throw new Error("Group not found");
    }

    const updatedTeams = group.teams.map((team) => {
      if (team.id === teamId) {
        return {
          ...team,
          players: [...team.players, player],
        };
      }

      return team;
    });

    const updatedGroup = {
      ...group,
      teams: updatedTeams,
    };

    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        return updatedGroup;
      }

      return group;
    });

    setGroups(updatedGroups);
  };

  const removePlayer = (groupId: string, teamId: string, playerId: string) => {
    const group = getGroup(groupId);

    if (!group) {
      throw new Error("Group not found");
    }

    const updatedTeams = group.teams.map((team) => {
      if (team.id === teamId) {
        return {
          ...team,
          players: team.players.filter((player) => player.id !== playerId),
        };
      }

      return team;
    });

    const updatedGroup = {
      ...group,
      teams: updatedTeams,
    };

    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        return updatedGroup;
      }

      return group;
    });

    setGroups(updatedGroups);
  };

  return (
    <GroupsContext.Provider
      value={{
        removePlayer,
        groups,
        createGroup,
        addGroup,
        getGroup,
        removeGroup,
        addPlayer,
        createPlayer,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
}
