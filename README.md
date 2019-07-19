# docsify-vssue

## Usage

- Follow this [guide](https://vssue.js.org/guide/github.html#create-a-new-oauth-app) to setup
- Add script to your docsify site's `index.html`

```html
<body>
  <div id="app"></div>
  <script>
    let pathNoQuery
    let routerMode
    if (location.hostname === 'localhost') { // share one issue for local dev
      routerMode = 'hash'
      pathNoQuery = `${location.origin}${location.pathname}`
    } else {
      routerMode = 'history' // or hash
      pathNoQuery = `${location.origin}${location.pathname}${location.hash}`
    }
    window.$docsify = {
      routerMode,
      vssue: {
        // see https://vssue.js.org/options/#component-props
        title: options => `${options.prefix}${pathNoQuery}`,
        options: {
          prefix: '',
          labels: ['commenting-system'],

          owner: 'up9cloud', // your github account
          repo: '-o-', // your public repo name
          clientId: 'daafa315ac375fc04445', // github oauth client id
          clientSecret: 'dcc3bd1c99de59abe3258ad5a5f084b045cecd6e', // github oauth client secret
        }
      }
    }
  </script>
  <!--
    Can't use .runtime.js, because https://github.com/docsifyjs/docsify/blob/master/src/core/render/index.js#L52
    See https://github.com/docsifyjs/docsify/blob/master/docs/vue.md
  -->
  <script src="//unpkg.com/vue@2/dist/vue.min.js"></script>
  <script src="//unpkg.com/docsify@4/lib/docsify.min.js"></script>
  <link rel="stylesheet" href="//unpkg.com/vssue@0/dist/vssue.min.css">
  <script src="//unpkg.com/vssue@0/dist/vssue.github.min.js"></script>
  <script src="//unpkg.com/docsify-vssue/dist/docsify-vssue.min.js"></script>
</body>
```
