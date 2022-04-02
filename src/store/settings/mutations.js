import { SettingsClass } from "../../treeItem";

export  default {
    initSettings(state) {
        //create new settings structure
        state.settings = new SettingsClass();
        //console.log('state.settings :>> ', state.settings);
    },

}
