import {TreeItemClass, parseFileV1, parseFileV2 } from "../../treeItem";

export  default {
    initNewTree(state) {
        //create new tree with one default item - parent item always with ID=0
        const mainBranch = new TreeItemClass(0);
        mainBranch.title = 'Main Branch';
        state.tree = [];    //reset the tree
        state.tree.push(mainBranch);
        state.fileName = '';
        state.unsavedChanges = false;
    },
    addChild(state, parentId) {
        const parent = state.tree.find((element) => element.id === parentId);
        const newTreeItem = new TreeItemClass();
        newTreeItem.bgColorCSS = parent.bgColorCSS;
        state.tree.push(newTreeItem);
        state.tree.find((element) => element.id === parentId).children.push(newTreeItem.id);
        state.unsavedChanges = true;
    },
    addSibling(state, payload) {
        const parent = state.tree.find((element) => element.id === payload.parentId);
        const sibling = state.tree.find((element) => element.id === payload.siblingId);
        const sibIndex = parent.children.findIndex(el => el === payload.siblingId);
        // console.log('parent :>> ', parent);
        // console.log('sibIndex :>> ', sibIndex);
        const newTreeItem = new TreeItemClass();
        newTreeItem.bgColorCSS = sibling.bgColorCSS;
        state.tree.push(newTreeItem);
        parent.children.splice(sibIndex+1, 0, newTreeItem.id);
        state.unsavedChanges = true;
    },    
    removeItem(state, payload) {
        const parent = state.tree.find((element) => element.id === payload.parentId);
        const itemIndex = parent.children.findIndex(el => el === payload.itemId);
        parent.children.splice(itemIndex, 1);
        state.unsavedChanges = true;
    },    
    collapseTree(state, id) {
        state.tree.find((element) => element.id === id).isCollapsed = true;
    },
    expandTree(state, id) {
        state.tree.find((element) => element.id === id).isCollapsed = false;
    },
    loadFromFile(state, payload) {
        //console.log(JSON.parse(payload.fileContent).tree);
        const fileContent = JSON.parse(payload.fileContent)
        switch (fileContent.fileVersion) {
            case 'v02' :
                console.log("reading file v02...");
                state.tree = parseFileV2(fileContent.tree)
                break;
            case 'v01' :
            default: 
                console.log("reading file v01 or unknown...");
                state.tree = parseFileV1(fileContent.tree)
        }
        state.fileName = payload.fileName.split("\\").pop().split("/").pop();
        state.unsavedChanges = false;
    },
    updateTitle(state, payload) {
        console.log("update title " + payload.title);
        //console.log('new title :>> ', payload.title);
        state.tree.find((element) => element.id === payload.id).title = payload.title;
        state.unsavedChanges = true;
    },
    updateDescription(state, payload) {
        console.log("update description " + payload.title);
        //console.log('new description :>> ', payload.description);
        state.tree.find((element) => element.id === payload.id).description = payload.description;
        state.unsavedChanges = true;
    },
    resetTree(state) {
        state.tree = []
    }



}
