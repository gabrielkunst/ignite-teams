import { useContext } from "react";
import { GroupsContext } from "./GroupsContext";

export const useGroups = () => useContext(GroupsContext);
