export  default {
    addMessage(context, payload) {
        context.commit('addMessage', payload);
    },
    shiftMessage(context) {
        context.commit('shiftMessage');
    }
}
