const path = require('path');
const createIssues = require('./lib/createIssues');

hexo.extend.filter.register('new_post_path', async function (data) {
    const postName = path.basename(data, path.extname(data)); // withdraw post name
    await createIssues(hexo.config, postName) // create github issues
    return data;
});
