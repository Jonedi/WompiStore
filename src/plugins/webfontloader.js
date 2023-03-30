/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    google: {
      families: ['Kanit:600,600i,700,700i,800,800i,900,900i', 'Montserrat+Alternates:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i'],
    },
  })
}
