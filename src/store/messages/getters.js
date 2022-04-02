export  default {
    getMessages(state) {
        return state.messages;
    },
    getFirstMessage(state) {
        if (state.messages.length > 0) {
            return state.messages[0];
        } else {
            return null;
        }
    }
}
