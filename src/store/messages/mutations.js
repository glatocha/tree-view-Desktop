import { SettingsClass } from "../../treeItem";

export  default {
    addMessage(state, payload){
        state.messages.push({
            text: payload.text,
            duration: payload.duration,
            class: payload.class
        });
    },
    shiftMessage(state) {
        if (state.messages.length >0)
            state.messages.shift(); //remove the first message
    }

}
