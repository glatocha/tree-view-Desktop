export  default {
    initNewTree(context) {
        //create new tree with one default item
        context.commit('initNewTree');
    },
    addChild(context, parentId) {
        context.commit('addChild', parentId);
    },
    addSibling(context, siblingId) {
        const parentId = context.getters.findParentId(siblingId);
        context.commit('addSibling', {parentId, siblingId});
    },
    removeItem(context, itemId) {
        const parentId = context.getters.findParentId(itemId);
        context.commit('removeItem', {parentId, itemId});
    },
    collapseTree(context, id) {
        context.commit('collapseTree', id);
    },
    expandTree(context, id) {
        context.commit('expandTree', id);
    },
    loadFromFile(context, payload) {
        context.commit('loadFromFile', payload);
    },
    updateTitle(context, payload) {
        context.commit('updateTitle', payload);
    },
    updateDescription(context, payload) {
        context.commit('updateDescription', payload);
    },    
    resetTree(context) {
        context.commit('resetTree');
    }
}
