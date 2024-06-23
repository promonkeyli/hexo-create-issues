
/**
 * @desc 创建issues的配置参数对象
 * @typedef {Object} gitalkIssuesConfig
 * @property {string} token - github自己设置的令牌(必须)
 * @property {string} usename - github用户名(必须)
 * @property {string} repo - github仓库名(必须)
 * @property {string} title - 创建issues的title(必须)
 * @property {string} label - 默认值：gitalk
 */

/**
 * @desc config 配置校验, 校验通过才创建issues，否则对错误进行提示
 * @param {gitalkIssuesConfig} config
 * @return Promise<any>
 **/
function checkConfig(config) {
    const { token, username, repo, title, label = "gitalk" } = config
    if(token === ""){
        return Promise.reject("你的gitalk_issues_config配置中，token为空，请检查！")
    }
    if(username === ""){
        return Promise.reject("你的gitalk_issues_config配置中，username为空，请检查！")
    }
    if(repo === ""){
        return Promise.reject("你的gitalk_issues_config配置中，repo 仓库地址为空，请检查！")
    }
    if(title === ""){
        return Promise.reject("issues 标题不能为空，请检查！")
    }
    return Promise.resolve({token, repo, title, label, username})
}


/**
 * @desc hexo new 生成文章时，自动创建gitalk所需要的评论issues
 * @param {gitalkIssuesConfig} config
 * @param {string} fileName
 * @param {string} id 依据node内置模块crypto将path路径专成md5作为issues唯一标识
 **/
module.exports = async function createIssues(config, fileName, id) {
    const { Octokit } = await import("@octokit/rest")
    try {
        const { token, repo, title, label, username} = await checkConfig({...config.gitalk_create_issues, title: fileName})
        const octokit = new Octokit({ auth: token });
            console.log("======================create issues running !=====================")
        await octokit.request('POST /repos/{owner}/{repo}/issues', {
            owner: username, repo, title, body: '',
            labels: [
                label,id
            ],
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }).then((res) => {
            console.log("=======================create issues success !=====================")
        })
    }catch (e) {
        console.error(JSON.stringify(e))
    }
}



