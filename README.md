### <p align="center">hexo-create-issues: A Hexo plugin</p>
### <p align="center">A Hexo plugin designed to automatically create github issues when create new post.</p>

---

##### install

```she
npm i hexo-create-issues
```

##### setup

* hexo‘s `_config.yml` file add config 

```shel
plugins:
  - hexo-create-issues

gitalk_create_issues:
  token: XXX # github token
  username: XXX # github user
  repo: XXX # reposity name
```

* example

```shell
plugins:
  - hexo-create-issues

gitalk_create_issues:
  token: qwqwdscfdvrbjndjfkbndcsxdvdv
  username: promonkeyli
  repo: promonkeyli.github.io
```

