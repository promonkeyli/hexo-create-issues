const path = require('path');
const crypto = require('crypto');
const formatPath = require("./lib/formatPath")
const createIssues = require('./lib/createIssues');

hexo.extend.filter.register('new_post_path', async function (data) {
    const postName = path.basename(data, path.extname(data)); // withdraw post name
    const formatGitalkPath = formatPath(postName); // format gitalk path_md5
    const path_md5 = crypto.createHash('md5').update(formatGitalkPath).digest('hex')
    await createIssues(hexo.config, postName, path_md5) // create github issues
    return data;
});
