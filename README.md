### <p align="center">hexo-sync-issues: A Hexo plugins</p>
### <p align="center">Designed to automatically generate github issues when create new post.</p>

### Documentation

---

##### install

```she
npm i hexo-sync-issues
```

##### setup

* hexo‘s `_config.yml` file add config 

```shel
plugins:
  - hexo-sync-issues

gitalk_create_issues:
  token: XXX # github token
  username: XXX # github user
  repo: XXX # reposity name
```

* example

```shell
plugins:
  - hexo-sync-issues

gitalk_create_issues:
  token: qwqwdscfdvrbjndjfkbndcsxdvdv
  username: promonkeyli
  repo: promonkeyli.github.io
```

