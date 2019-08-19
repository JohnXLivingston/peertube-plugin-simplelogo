function register ({ registerHook, peertubeHelpers }) {
  peertubeHelpers.getSettings().then(
    s => {
      if ( !s ) {
        return
      }
      if ( s['icon_url'] ) {
        const style = document.createElement('style')
        document.head.appendChild(style)
        const sheet = style.sheet
        let rule = "#custom-css .icon.icon-logo { "
        rule+= " display: inline-block; "
        rule+= " background: url('"+s['icon_url']+"'); "
        if ( s['icon_width'] ) {
          rule+= " width: "+s['icon_width']+"; "
        }
        rule+= " }"
        sheet.insertRule(rule, 0)
      }
      if ( s['favicon_url']) {
        const favicon = document.querySelector('link[rel="icon"]')
        favicon.href = s['favicon_url']
      }
    }
  )
}

export {
  register
}
