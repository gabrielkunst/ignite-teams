import { Member } from "./MemberType";

export interface Group {
	id: string;
	name: string;
	members: Member[];
}
