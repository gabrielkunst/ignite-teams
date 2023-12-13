import { Group } from "@@types/GroupType";
import { Member } from "@@types/MemberType";

export interface GroupContextProps {
	groups: Group[];
	getGroup: (id: string) => Group | undefined;
	createGroup: (name: string) => Group;
	deleteGroup: (id: string) => Group | undefined;
	updateGroup: (id: string, name: string) => Group | undefined;
	addMember: (groupId: string, name: string) => Member | undefined;
	deleteMember: (groupId: string, memberId: string) => Member | undefined;
	updateMember: (
		groupId: string,
		memberId: string,
		name: string
	) => Member | undefined;
}
