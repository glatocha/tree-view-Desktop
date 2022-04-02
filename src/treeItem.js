var nextNewId = 1000;

class TreeItemClass {
    constructor(id = null) {
        if (id === null) 
        { 
            //this.id = new Date().getTime() + '_' + (Math.floor(Math.random()*9999999999));
            this.id = nextNewId;
            nextNewId++;
            //console.log('New id created = ' + this.id)
        }
        else {
            this.id= id;
        }
        this.title = '';
        this.description = '';
        this.bgColorCSS = 'var(--tree-primary-color)';
        this.notes = '';
        this.flags = [false, false, false, false, false, false, false, false, false];
        this.children = [];
        this.isCollapsed = false;

    }
}

class SettingsClass {
    constructor() {
       this.customFlags = [
            { name: 'important',
              htmlTag: '<i class="fas fa-exclamation-triangle"></i>' },
            { name: 'question', 
            htmlTag: '<i class="fas fa-question"></i>' },
            { name: 'mark', 
            htmlTag: '<i class="fas fa-paperclip"></i>' },
            { name: 'io', 
            htmlTag: '<i class="fas fa-exchange-alt"></i>' },
            { name: 'commun', 
            htmlTag: '<i class="fas fa-network-wired"></i>' },
            { name: 'hmi', 
            htmlTag: '<i class="fas fa-desktop"></i>' },
            { name: 'discuss', 
            htmlTag: '<i class="far fa-comments"></i>' },
            { name: 'female', 
            htmlTag: '<i class="fas fa-female"></i>' },
            { name: 'male', 
            htmlTag: '<i class="fas fa-male"></i>' }
          ],
          this.projectColors = [
            "#9dc7ca",
            "#b6b6ff",
            "#ffc6aa",
            "#c8eabf",
            "#6cafaf",
            "white"
          ]
    }

}

function itemFromV1Object(v1TreeItem, id = null) {
    var treeTable = []
    const treeItem = new TreeItemClass(id);
    treeItem.title = v1TreeItem.title;
    treeItem.description = v1TreeItem.description;
    treeItem.bgColorCSS = v1TreeItem.bgColor;
    treeItem.notes = v1TreeItem.notes;
    treeItem.flags = JSON.parse(v1TreeItem.flags);        
    treeTable.push(treeItem);
    v1TreeItem.children.forEach(element => {
        const children = itemFromV1Object(element);
        treeItem.children.push(children.id)
        treeTable = treeTable.concat(children.table);
    });
    return {id: treeItem.id, table:treeTable};
}

function parseFileV1(treeJSONObject) {
    const newTree = itemFromV1Object(treeJSONObject, 0).table;
    console.log('load from file V1');
    //console.log('newTree :>> ', newTree);
    return newTree;
}

function parseFileV2(treeJSONObject) {
    return JSON.parse(treeJSONObject);
}

export {TreeItemClass, SettingsClass, parseFileV1, parseFileV2};