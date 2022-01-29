/* eslint-disable no-await-in-loop */
const fs = require('fs-extra');
const Path = require('path');

function traverseTree(root, { file, dir }) {
    function traverse(nodes) {
        nodes.forEach(node => {
            const { type, children } = node;
            const doSomething = type === 'dir' ? dir : file;
            doSomething && doSomething(node);

            if (type === 'dir') {
                traverse(children);
            }
        });
    }

    traverse(root);
}

async function readdirTree(rootPath) {
    const root = [];
    async function readToTree(parentPath, parentList) {
        const list = await fs.readdir(parentPath);
        await Promise.all(
            list.map((name, i) => (async () => {
                const path = Path.join(parentPath, name);
                const node = {
                    name,
                    path: Path.relative(rootPath, path).replace(/\\/gi, '/') // 将路径中的\转化为/
                };

                if ((await fs.stat(path)).isDirectory()) {
                    await readToTree(path, (node.children = []));
                    node.type = 'dir';
                } else {
                    node.type = 'file';
                }
                parentList[i] = node;
            })())
        );
    }
    await readToTree(rootPath, root);
    return root;
}

async function cleanDir(dirName) {
    await fs.emptyDir(dirName);
    await fs.ensureDir(dirName);
}

module.exports = {
    readdirTree,
    traverseTree,
    cleanDir
};
