(function ($docsify) {
  function install(hook, docsify) {
    let dom = Docsify.dom

    let vm = null
    hook.beforeEach(function (_) {
      if (vm) {
        vm.$destroy()
        let pNode = vm.$el.parentNode
        pNode.parentNode.removeChild(pNode)
      }

      let parent = dom.find('.content')
      let container = dom.create('div')
      container.className += 'markdown-section'
      dom.appendTo(parent, container)

      let el = dom.create('div')
      dom.appendTo(container, el)
      vm = new Vue({
        el,
        // https://vssue.js.org/options/#vssue-options
        render: h => h('Vssue', {
          props: docsify.config.vssue
        })
      })
    })
  }

  $docsify.plugins = [].concat(install, $docsify.plugins)

}($docsify))
