import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "./storageConfig";

export class GroupStorageHandler {
  static async getAllGroups() {
    try {
      const groupsJson = await AsyncStorage.getItem(GROUP_COLLECTION);

      if (!groupsJson) {
        return [];
      }

      const groups = JSON.parse(groupsJson);
      return groups;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async createGroup(newGroup: string) {
    try {
      const allGroups = await this.getAllGroups();
      const newGroupList = [...allGroups, newGroup];

      const newGroupListJson = JSON.stringify(newGroupList);
      await AsyncStorage.setItem(GROUP_COLLECTION, newGroupListJson);
    } catch (error) {
      console.error(error);
    }
  }
}
