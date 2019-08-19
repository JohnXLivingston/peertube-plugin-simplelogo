async function register ({
  registerHook,
  registerSetting,
  settingsManager,
  storageManager,
  videoCategoryManager,
  videoLicenceManager,
  videoLanguageManager
}) {
  registerSetting({
    name: 'icon_url',
    label: 'Icon Url',
    type: 'input',
    private: false
  })
  registerSetting({
    name: 'icon_width',
    label: 'Icon width (example: 24px)',
    type: 'input',
    private: false
  })
  registerSetting({
    name: 'favicon_url',
    label: 'Favicon Url',
    type: 'input',
    private: false
  })
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
