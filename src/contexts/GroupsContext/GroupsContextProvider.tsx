import { useState } from "react";
import { GroupsContext } from "./GroupsContext";
import { Group, Member } from "./GroupContextProps";
import uuid from "react-native-uuid";

interface GroupsContextProviderProps {
	children: React.ReactNode;
}

export function GroupsContextProvider({
	children,
}: GroupsContextProviderProps) {
	const [groups, setGroups] = useState<Group[]>([]);

	const getGroup = (id: string): Group | undefined => {
		const group = groups.find((group) => group.id === id);

		if (!group) {
			console.error("Group not found");
			return;
		}

		return group;
	};

	const createGroup = (name: string): Group => {
		const newGroup: Group = {
			id: String(uuid.v4()),
			name,
			members: [],
		};

		setGroups((prevState) => [...prevState, newGroup]);
		return newGroup;
	};

	const deleteGroup = (id: string): Group | undefined => {
		const groupToBeDeleted = groups.find((group) => group.id === id);

		if (!groupToBeDeleted) {
			console.error("Group not found");
			return;
		}

		const filteredGroups = groups.filter(
			(group) => group.id !== groupToBeDeleted.id
		);
		setGroups(filteredGroups);

		return groupToBeDeleted;
	};

	const updateGroup = (id: string, name: string): Group | undefined => {
		const groupToBeUpdated = groups.find((group) => group.id === id);

		if (!groupToBeUpdated) {
			console.error("Group not found");
			return;
		}

		const updatedGroup = {
			...groupToBeUpdated,
			name,
		};

		const updatedGroups = groups.map((group) =>
			group.id === groupToBeUpdated.id ? updatedGroup : group
		);

		setGroups(updatedGroups);
		return updatedGroup;
	};

	const addMember = (groupId: string, name: string): Member | undefined => {
		const group = groups.find((group) => group.id === groupId);

		if (!group) {
			console.error("Group not found");
			return;
		}

		const newMember = {
			id: String(uuid.v4()),
			name,
		};

		const updatedGroup = {
			...group,
			members: [...group.members, newMember],
		};

		const updatedGroups = groups.map((group) =>
			group.id === updatedGroup.id ? updatedGroup : group
		);

		setGroups(updatedGroups);
		return newMember;
	};

	const deleteMember = (
		groupId: string,
		memberId: string
	): Member | undefined => {
		const group = groups.find((group) => group.id === groupId);

		if (!group) {
			console.error("Group not found");
			return;
		}

		const memberToBeDeleted = group.members.find(
			(member) => member.id === memberId
		);

		if (!memberToBeDeleted) {
			console.error("Member not found");
			return;
		}

		const filteredMembers = group.members.filter(
			(member) => member.id !== memberToBeDeleted.id
		);

		const updatedGroup = {
			...group,
			members: filteredMembers,
		};

		const updatedGroups = groups.map((group) =>
			group.id === updatedGroup.id ? updatedGroup : group
		);

		setGroups(updatedGroups);
		return memberToBeDeleted;
	};

	const updateMember = (
		groupId: string,
		memberId: string,
		name: string
	): Member | undefined => {
		const group = groups.find((group) => group.id === groupId);

		if (!group) {
			console.error("Group not found");
			return;
		}

		const memberToBeUpdated = group.members.find(
			(member) => member.id === memberId
		);

		if (!memberToBeUpdated) {
			console.error("Member not found");
			return;
		}

		const updatedMember = {
			...memberToBeUpdated,
			name,
		};

		const updatedMembers = group.members.map((member) =>
			member.id === updatedMember.id ? updatedMember : member
		);

		const updatedGroup = {
			...group,
			members: updatedMembers,
		};

		const updatedGroups = groups.map((group) =>
			group.id === updatedGroup.id ? updatedGroup : group
		);

		setGroups(updatedGroups);
		return updatedMember;
	};

	return (
		<GroupsContext.Provider
			value={{
				groups,
				getGroup,
				createGroup,
				deleteGroup,
				updateGroup,
				addMember,
				deleteMember,
				updateMember,
			}}
		>
			{children}
		</GroupsContext.Provider>
	);
}
