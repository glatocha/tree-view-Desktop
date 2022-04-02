export  default {
    getItem(state) {
        return (id) => {
            if (state.tree.length > 0) {
                return state.tree.find((element) => element.id === id)
            } else {
                return null
            }
        }
    },
    getTree(state) {
        return state.tree
    },
    findParentId(state) {
        return (childId) => {
            return state.tree.find(element => 
                element.children.includes(childId)
            ).id;
        }
    },
    getFileName(state) {
        return state.fileName;
    },
    getUnsavedChanges(state) {
        return state.unsavedChanges;
    },
    getItemsCount(state) {
        return state.tree.length;
    }
}
