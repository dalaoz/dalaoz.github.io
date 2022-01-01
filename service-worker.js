/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "17c366f563b61870921ea86fc0c0a935"
  },
  {
    "url": "assets/css/0.styles.ba12db86.css",
    "revision": "e0a6e1fe0b43729ce867593a605f0b79"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.16616378.js",
    "revision": "2bca7c8e60b78917a9b93da8123319ee"
  },
  {
    "url": "assets/js/11.29881809.js",
    "revision": "96a0804446a1e04ecaea752c14f4abf3"
  },
  {
    "url": "assets/js/12.9a87c2ae.js",
    "revision": "d1dded53269b95e900626de55a365936"
  },
  {
    "url": "assets/js/13.57542dd5.js",
    "revision": "fbed60e01789f572b45250df91eb80f8"
  },
  {
    "url": "assets/js/14.1cc2abc4.js",
    "revision": "f95ee446bd18352020a4c0830447e12a"
  },
  {
    "url": "assets/js/15.879d6ad5.js",
    "revision": "08c2536472eeed921b85c80917ccd790"
  },
  {
    "url": "assets/js/16.1b79ce4a.js",
    "revision": "5317860ad5a2340a126b6b8d4bd7f5ae"
  },
  {
    "url": "assets/js/17.15fac69c.js",
    "revision": "ea42f515f443667085fbfdeda411298f"
  },
  {
    "url": "assets/js/18.fa884e6e.js",
    "revision": "829e88531d2ae64e894be8d3a9563e6b"
  },
  {
    "url": "assets/js/19.34e4a395.js",
    "revision": "ebf52810681d376ec26bb7d1e92d8e7e"
  },
  {
    "url": "assets/js/2.674f3196.js",
    "revision": "916f85e234e376528e8beb9e2759b73d"
  },
  {
    "url": "assets/js/20.1979e1c1.js",
    "revision": "2d1a512e660863aa34a50a308bd8dd7c"
  },
  {
    "url": "assets/js/21.e840c4f5.js",
    "revision": "46e6affd0a58f75714671afff28130a7"
  },
  {
    "url": "assets/js/22.d9d72673.js",
    "revision": "d523b9311bebdd316e789fb83b74c544"
  },
  {
    "url": "assets/js/23.d77d6229.js",
    "revision": "2d973ceb63f7aa11bca4e0ea19bacb01"
  },
  {
    "url": "assets/js/24.683422a1.js",
    "revision": "590dfe003fe59ef8d570d2e1dccc48da"
  },
  {
    "url": "assets/js/25.0fa5c50c.js",
    "revision": "da81a5711a510525bdb011b0effee748"
  },
  {
    "url": "assets/js/26.b04bac84.js",
    "revision": "b2ff45ee88946f84374826959ded982c"
  },
  {
    "url": "assets/js/27.dda0e719.js",
    "revision": "b2e0666ba0828caee61b05c1d7f48f9a"
  },
  {
    "url": "assets/js/28.c4edefb6.js",
    "revision": "23237d019e24c537ecc192f17da7b9d3"
  },
  {
    "url": "assets/js/29.196c3857.js",
    "revision": "18c6b65cc18abec9fddd75fbb34cc90b"
  },
  {
    "url": "assets/js/3.ae598ba4.js",
    "revision": "6ea72b409f20415b8cbf65d5d5b39126"
  },
  {
    "url": "assets/js/30.a19d3c53.js",
    "revision": "6bb8270bf7ab14b9388d158903d9bd8d"
  },
  {
    "url": "assets/js/31.1fdfca4f.js",
    "revision": "17ee1f8aefb622358c4f38582160b0a7"
  },
  {
    "url": "assets/js/32.725f955d.js",
    "revision": "ae77b9d7b73839a2fb58b7c7cb20cbe2"
  },
  {
    "url": "assets/js/33.8cee3bd1.js",
    "revision": "eed26e96df1ee6cd6213184256f8b551"
  },
  {
    "url": "assets/js/34.98be3dd6.js",
    "revision": "4ec4b686b1bec8e753d56a2b56f9dbe9"
  },
  {
    "url": "assets/js/35.5f03dd4a.js",
    "revision": "9b12427ceb6aa5c976eed51813619c7a"
  },
  {
    "url": "assets/js/36.290a79ae.js",
    "revision": "32b83a84e20d3ea19bd131eebb42425d"
  },
  {
    "url": "assets/js/37.a2951d1d.js",
    "revision": "c51cae314fa5587b0989d59810f38fd8"
  },
  {
    "url": "assets/js/38.7db7d2ce.js",
    "revision": "a42e0e1c88f727351ac84024eef700f6"
  },
  {
    "url": "assets/js/39.4d529e07.js",
    "revision": "eba2cace0b4f6a69c453462b0296a8ec"
  },
  {
    "url": "assets/js/4.69317af8.js",
    "revision": "6c58c9a1746400cc97f09dea7c45b319"
  },
  {
    "url": "assets/js/40.98318dea.js",
    "revision": "f6d9d34826e03658e304e3d7841d0244"
  },
  {
    "url": "assets/js/41.bafd8e9e.js",
    "revision": "f7704397e4972fa1e93d27b171fbda62"
  },
  {
    "url": "assets/js/42.5aa666c5.js",
    "revision": "b0143a89aa8b0f471edfe534e34c534d"
  },
  {
    "url": "assets/js/43.03715cae.js",
    "revision": "64f0bcfe026f3fd768d195a148a86c88"
  },
  {
    "url": "assets/js/44.98044057.js",
    "revision": "513df9e5b51a8cf2220be29bdb2d0b94"
  },
  {
    "url": "assets/js/45.e056bc66.js",
    "revision": "0271174320b0999807e7c4927cf93527"
  },
  {
    "url": "assets/js/46.3e355785.js",
    "revision": "94ed318bfe027166a6dbf3cbdbc7e6dd"
  },
  {
    "url": "assets/js/47.1710c122.js",
    "revision": "c8201b3e9c7acbacaef3168060f766f6"
  },
  {
    "url": "assets/js/48.ea751d13.js",
    "revision": "ad5a5f299ed475370eeeff3ad196d496"
  },
  {
    "url": "assets/js/49.2971669d.js",
    "revision": "356e5282ae79c14f469238e2e1b16a8e"
  },
  {
    "url": "assets/js/5.d97bbedf.js",
    "revision": "2eba0f8efa7079fa8c084d1337832cb2"
  },
  {
    "url": "assets/js/50.427e1a31.js",
    "revision": "5e395b7da11c071d5e6ac683cb7834d1"
  },
  {
    "url": "assets/js/51.b3c33558.js",
    "revision": "899dbdb70ef8198a26a4025a22a7b860"
  },
  {
    "url": "assets/js/52.b2c8e710.js",
    "revision": "ac00298b2c18d46b17f19e5aa36fffcf"
  },
  {
    "url": "assets/js/53.bdd88686.js",
    "revision": "44a624dcb987b813366d94bda4975139"
  },
  {
    "url": "assets/js/54.bcc383bb.js",
    "revision": "4235721f05a65ce585e56e6faa31799d"
  },
  {
    "url": "assets/js/55.be13c03d.js",
    "revision": "452e87f45c69595b67cece72a70bbdca"
  },
  {
    "url": "assets/js/56.ec0440a9.js",
    "revision": "53076c5070266223e22f426cfbac8eec"
  },
  {
    "url": "assets/js/57.38e5ce7d.js",
    "revision": "99a52d81822a2b063b88c46f00d80750"
  },
  {
    "url": "assets/js/58.11645d67.js",
    "revision": "bfdc9539a58cb480efbb62656a66f8e9"
  },
  {
    "url": "assets/js/59.1e96e19c.js",
    "revision": "19465161968e03bedab191ab1616ac9b"
  },
  {
    "url": "assets/js/6.3b5fd920.js",
    "revision": "5f7d7f9f51e1456b3b10ee9efbc7c3f3"
  },
  {
    "url": "assets/js/60.48884068.js",
    "revision": "3ae31e486a5599ffb77de861348325dd"
  },
  {
    "url": "assets/js/61.67e6dcf4.js",
    "revision": "4d02a9816ab9e2daede361f0fff26678"
  },
  {
    "url": "assets/js/62.644505b8.js",
    "revision": "79dd672814f08185d6e76acd3c11f231"
  },
  {
    "url": "assets/js/63.381e1897.js",
    "revision": "62c6641a1533b0e5dbebd444ce57bb8c"
  },
  {
    "url": "assets/js/64.a30384e1.js",
    "revision": "fce1f25c9e2659bd48d342609eed0f65"
  },
  {
    "url": "assets/js/65.ff861eb4.js",
    "revision": "d87fb51bc05c4ed9939c0de0cfab7c9b"
  },
  {
    "url": "assets/js/66.45a06096.js",
    "revision": "8465ef67288631091a7ac2959af19eb7"
  },
  {
    "url": "assets/js/67.8743b6dc.js",
    "revision": "7ae10bcba37aea83e3a8b40637c6623a"
  },
  {
    "url": "assets/js/68.4d065624.js",
    "revision": "815c2597d160c75470f01dd063ac8c84"
  },
  {
    "url": "assets/js/69.38f8f966.js",
    "revision": "65e79a1e66c8c4c39bd4b02a0dfa04ad"
  },
  {
    "url": "assets/js/7.82c024fb.js",
    "revision": "3af6840240ed98323e1b6198ee16aa99"
  },
  {
    "url": "assets/js/70.2724ba9a.js",
    "revision": "a3da7b793c9cbdadd9de27e1f1c163e3"
  },
  {
    "url": "assets/js/71.4d73462a.js",
    "revision": "01f36e24e99b4621878e1f4a6cf059ae"
  },
  {
    "url": "assets/js/72.d94a0a71.js",
    "revision": "01d849eb666ee60ba3f7cdf0e245514f"
  },
  {
    "url": "assets/js/73.d24e6a16.js",
    "revision": "efd3efa28b88c1f3ba6c3bcfb8aaf3f0"
  },
  {
    "url": "assets/js/74.40cd0e27.js",
    "revision": "b2a55f55a74583bdd3b5933b6ef30428"
  },
  {
    "url": "assets/js/75.d5e42546.js",
    "revision": "71d16ac243dc378ef010ae5e7fadd210"
  },
  {
    "url": "assets/js/76.cd30be22.js",
    "revision": "eb4e65414ff6cdc699335ec0c7e9b7f7"
  },
  {
    "url": "assets/js/77.b287e80f.js",
    "revision": "def0525911552be60b367c6f0fae8039"
  },
  {
    "url": "assets/js/78.8fb9f058.js",
    "revision": "3c8ddde8fc592452ef98e650f99abe6d"
  },
  {
    "url": "assets/js/79.41accf9e.js",
    "revision": "090fa94e354e26d761764aad6f62a338"
  },
  {
    "url": "assets/js/8.5860fb56.js",
    "revision": "5b49b574a724dcd83bd167ca86548435"
  },
  {
    "url": "assets/js/80.9c4900b2.js",
    "revision": "f8549d213caeb9612ecc436b86e74594"
  },
  {
    "url": "assets/js/81.f7c0ee1e.js",
    "revision": "540da3b92e09ab000c70d45bcd0b00d9"
  },
  {
    "url": "assets/js/82.6439cccd.js",
    "revision": "469bfc3322dbc9edec58bfc65611098b"
  },
  {
    "url": "assets/js/83.14a8a434.js",
    "revision": "777cb973ebe9124470cfbe71a8b6954d"
  },
  {
    "url": "assets/js/84.bbedb52a.js",
    "revision": "49d1de289af30e954538499219f24d1c"
  },
  {
    "url": "assets/js/85.051db183.js",
    "revision": "ccf045686808533695010405b8586f87"
  },
  {
    "url": "assets/js/86.a4230665.js",
    "revision": "2791e3e4856752ef0dd0c0a6d2f38a87"
  },
  {
    "url": "assets/js/87.e43eac63.js",
    "revision": "d7ffec6d3a52b39a5ac6a520f6453d9b"
  },
  {
    "url": "assets/js/88.d535360d.js",
    "revision": "de1a0dcf90738d0ec247b2d625bc9116"
  },
  {
    "url": "assets/js/89.531d6866.js",
    "revision": "e54c1eccd2f7b72c7ecc33607e7e51aa"
  },
  {
    "url": "assets/js/9.d888eebd.js",
    "revision": "952377e9ef89f130af72b2282a9f5264"
  },
  {
    "url": "assets/js/90.cdab578d.js",
    "revision": "d6abff127aff03bf1b2c1d3ba201d79f"
  },
  {
    "url": "assets/js/91.c95dd417.js",
    "revision": "f5d5a6a9eaa7439f79b7f3e78fb7edd5"
  },
  {
    "url": "assets/js/92.b3ac4aec.js",
    "revision": "bad70cb6c69ccc07de9aef7a2dba8526"
  },
  {
    "url": "assets/js/93.415d411a.js",
    "revision": "44f0e208257ff8f82f0a501272290ba0"
  },
  {
    "url": "assets/js/94.85f641ab.js",
    "revision": "59a5723654fdf16578570120a0224ff1"
  },
  {
    "url": "assets/js/95.90d685b9.js",
    "revision": "a0c6f00927e8cfaf854b03268bb62741"
  },
  {
    "url": "assets/js/app.dfbab1e4.js",
    "revision": "6aa80d8bb81b083fca61cb751c552a1e"
  },
  {
    "url": "css/style.css",
    "revision": "e2d050c3a253daaf175bb594e07b1acb"
  },
  {
    "url": "images/logo.png",
    "revision": "549d97362b6bbfabdd71d76dc698297b"
  },
  {
    "url": "images/logo1.png",
    "revision": "6d07d35de0619a34c677416a81cc53fc"
  },
  {
    "url": "index.html",
    "revision": "e18b0b817ce59909da1e02a00ebaf37a"
  },
  {
    "url": "wangdao/async/general.html",
    "revision": "d03f5d83baa87caaf1809e85e7880b05"
  },
  {
    "url": "wangdao/async/promise.html",
    "revision": "f8deed6fc63edd4cf20b72f677464df1"
  },
  {
    "url": "wangdao/async/timer.html",
    "revision": "e89bc7c7769670a8a3b65ce7a9358684"
  },
  {
    "url": "wangdao/basic/grammar.html",
    "revision": "75c626d3e6b326dc7e6c067239eb0f61"
  },
  {
    "url": "wangdao/basic/history.html",
    "revision": "76e86ee7715736bb63d3a5ca98849d3e"
  },
  {
    "url": "wangdao/basic/introduction.html",
    "revision": "8f97b311ed2c05fd96c170ef92127c1e"
  },
  {
    "url": "wangdao/bom/arraybuffer.html",
    "revision": "b41ceca39654cfcbd4ebd3671e33c6ab"
  },
  {
    "url": "wangdao/bom/cookie.html",
    "revision": "6965a998862990e4fe8fc220de5ec189"
  },
  {
    "url": "wangdao/bom/cors.html",
    "revision": "1af5489f5b308c47140784d773efc694"
  },
  {
    "url": "wangdao/bom/engine.html",
    "revision": "71fbd8670638e9d2dc181c2c36966130"
  },
  {
    "url": "wangdao/bom/file.html",
    "revision": "188eb182f824023e03c6b92a147e47f0"
  },
  {
    "url": "wangdao/bom/form.html",
    "revision": "7893dfd98a8e524f7c8145691a0e3014"
  },
  {
    "url": "wangdao/bom/history.html",
    "revision": "1b6ed0e58f260be15e67d8151c4a089a"
  },
  {
    "url": "wangdao/bom/indexeddb.html",
    "revision": "f9db8e2f747d6e0bd27f2ddbd55dbbe1"
  },
  {
    "url": "wangdao/bom/location.html",
    "revision": "4199ec9aefb07f085af355e1f73606ae"
  },
  {
    "url": "wangdao/bom/navigator.html",
    "revision": "d73297b829a9846d14e38ccba826a884"
  },
  {
    "url": "wangdao/bom/same-origin.html",
    "revision": "29886fa9cbc7185989ffe30c254cdb4a"
  },
  {
    "url": "wangdao/bom/storage.html",
    "revision": "3e46b1601d0bbc2f8ed2e8768d5c0da8"
  },
  {
    "url": "wangdao/bom/webworker.html",
    "revision": "c507f677e02f76216af104ff2119edc9"
  },
  {
    "url": "wangdao/bom/window.html",
    "revision": "311bc52487b0548c34195645382682ce"
  },
  {
    "url": "wangdao/bom/xmlhttprequest.html",
    "revision": "60ac208c4b4a64a68345cf65d36a69ef"
  },
  {
    "url": "wangdao/dom/attributes.html",
    "revision": "6d76b1b5d85474c8b71c115b7f528fa1"
  },
  {
    "url": "wangdao/dom/css.html",
    "revision": "8e6503656ec7756ef1c094e3e28bc5fd"
  },
  {
    "url": "wangdao/dom/document.html",
    "revision": "de36ca22456c795af6cf57da526eecef"
  },
  {
    "url": "wangdao/dom/element.html",
    "revision": "8a4a6506b0e9816f967baf43b48561cc"
  },
  {
    "url": "wangdao/dom/general.html",
    "revision": "1fc8a4adff30e15a7a42f787172cd870"
  },
  {
    "url": "wangdao/dom/mutationobserver.html",
    "revision": "ca7f2fc17cd7176ea0f2a21e27ef9ee3"
  },
  {
    "url": "wangdao/dom/node.html",
    "revision": "bc81d992c3872db274bce8b2771e5bd1"
  },
  {
    "url": "wangdao/dom/nodelist.html",
    "revision": "2ec85173b90c30acc296d725ff02aae8"
  },
  {
    "url": "wangdao/dom/parentnode.html",
    "revision": "b07c76f8e20c90fdc302fe30ab27d25f"
  },
  {
    "url": "wangdao/dom/text.html",
    "revision": "d7ebd71dec8f0f53a0f1083ac4041b67"
  },
  {
    "url": "wangdao/elements/a.html",
    "revision": "2309542e24f2a8c3cfb477587438fdaf"
  },
  {
    "url": "wangdao/elements/button.html",
    "revision": "652f1f848c09314999eecaaacc02a792"
  },
  {
    "url": "wangdao/elements/form.html",
    "revision": "c2a023de14bb161d684b991c15d0748b"
  },
  {
    "url": "wangdao/elements/image.html",
    "revision": "688c18220a5d3f0810905c4821087cfa"
  },
  {
    "url": "wangdao/elements/input.html",
    "revision": "392cbaace3f789de7e99e65c72403e43"
  },
  {
    "url": "wangdao/elements/option.html",
    "revision": "96c42e051f2c4a4a7f9e9bf30c4914d8"
  },
  {
    "url": "wangdao/elements/video.html",
    "revision": "236b0033dd13afb831ffb64f38986412"
  },
  {
    "url": "wangdao/events/common.html",
    "revision": "35ad3cab99faa165feaa379c2489d7e5"
  },
  {
    "url": "wangdao/events/drag.html",
    "revision": "39dddab21f15d3257819f425500954ca"
  },
  {
    "url": "wangdao/events/event.html",
    "revision": "29b6e62e940e256ca7b88fb9a4cc251f"
  },
  {
    "url": "wangdao/events/eventtarget.html",
    "revision": "009e4f1fb99d31fee2c4badf5d5c8ed8"
  },
  {
    "url": "wangdao/events/form.html",
    "revision": "9549ba89f5f901049bb62de9414a1062"
  },
  {
    "url": "wangdao/events/globaleventhandlers.html",
    "revision": "2aaec08d230ebf42cd31cdb252f643f7"
  },
  {
    "url": "wangdao/events/keyboard.html",
    "revision": "7f7a58e6f331e7fd5b00faf148365040"
  },
  {
    "url": "wangdao/events/model.html",
    "revision": "fa7b1714c4c6ae011f617e3f749ba014"
  },
  {
    "url": "wangdao/events/mouse.html",
    "revision": "cfcd0df0284d6ffdf97edba86ac228b0"
  },
  {
    "url": "wangdao/events/progress.html",
    "revision": "e1aeac1fed0e34c6987aeb220d0b9c2c"
  },
  {
    "url": "wangdao/events/touch.html",
    "revision": "daae3f7482c86d488ca61934071f4de9"
  },
  {
    "url": "wangdao/features/console.html",
    "revision": "9bead04cc1b0a7c9e682c0d5ba582a66"
  },
  {
    "url": "wangdao/features/conversion.html",
    "revision": "61747ba2388fae7d3cfca4e8521e66b6"
  },
  {
    "url": "wangdao/features/error.html",
    "revision": "a587522c6e15e98123ac400ea81a58c5"
  },
  {
    "url": "wangdao/features/style.html",
    "revision": "81e2a1d8f651821f4b6e2b5ff5d3121f"
  },
  {
    "url": "wangdao/index.html",
    "revision": "4efd13220bb6b1f55276fd495c82ad2d"
  },
  {
    "url": "wangdao/oop/new.html",
    "revision": "6e99dee9f6694ed51c746d53e071bd80"
  },
  {
    "url": "wangdao/oop/object.html",
    "revision": "ce1d1de06b90aae7c76dcc1f7617d728"
  },
  {
    "url": "wangdao/oop/prototype.html",
    "revision": "68bfd798570081c329fb66d7efc99972"
  },
  {
    "url": "wangdao/oop/strict.html",
    "revision": "85f60cb109ce24758bff9a118ea2e34b"
  },
  {
    "url": "wangdao/oop/this.html",
    "revision": "f8ea021311c8a674eed166e785a3b13f"
  },
  {
    "url": "wangdao/operators/arithmetic.html",
    "revision": "96798e7844fc01e24cde2f4e1f0b2089"
  },
  {
    "url": "wangdao/operators/bit.html",
    "revision": "628afcc395cea0aa7fa155408046c8d4"
  },
  {
    "url": "wangdao/operators/boolean.html",
    "revision": "a3742b8f51b79d8f19cda5b94e3097b4"
  },
  {
    "url": "wangdao/operators/comparison.html",
    "revision": "ab101c817226efb818d4b4eb3542eaf4"
  },
  {
    "url": "wangdao/operators/priority.html",
    "revision": "17567dc20a4290c28f4cb55234c71a35"
  },
  {
    "url": "wangdao/stdlib/array.html",
    "revision": "0fb3135ea6cc14fcf33e8a09f422f1c0"
  },
  {
    "url": "wangdao/stdlib/attributes.html",
    "revision": "ba18b1560e69d778b11e4ffc115da43a"
  },
  {
    "url": "wangdao/stdlib/boolean.html",
    "revision": "53459a8aa204fdf85bf332465ba74357"
  },
  {
    "url": "wangdao/stdlib/date.html",
    "revision": "337dd176965f4ec42d33e78f8d1a7bec"
  },
  {
    "url": "wangdao/stdlib/json.html",
    "revision": "5b168e323c4f401413a063ed22032b60"
  },
  {
    "url": "wangdao/stdlib/math.html",
    "revision": "8d674729e8cb5d32bea3d4edcf107c6e"
  },
  {
    "url": "wangdao/stdlib/number.html",
    "revision": "4c72ca9f6a5420cb0535b4188bc14f2d"
  },
  {
    "url": "wangdao/stdlib/object.html",
    "revision": "5e923f084fd09557108b89430015b4d2"
  },
  {
    "url": "wangdao/stdlib/regexp.html",
    "revision": "dff0abe78ba86443ae3250d05a77a61a"
  },
  {
    "url": "wangdao/stdlib/string.html",
    "revision": "db1a601ab2f0c30fecd91c0d31afa0a4"
  },
  {
    "url": "wangdao/stdlib/wrapper.html",
    "revision": "dac0d3bf82a3d99968f72512822382c8"
  },
  {
    "url": "wangdao/types/array.html",
    "revision": "a09b0113c8e4b8f0aa1431dffe83077b"
  },
  {
    "url": "wangdao/types/function.html",
    "revision": "bc34258547b8f18daf4edbf72a73ca18"
  },
  {
    "url": "wangdao/types/general.html",
    "revision": "7f9573cad1ad939fcb227af0ad58ca74"
  },
  {
    "url": "wangdao/types/null-undefined-boolean.html",
    "revision": "51bb5a0a454ca292d34513dde8b02fe7"
  },
  {
    "url": "wangdao/types/number.html",
    "revision": "b4f40ef829562c1e9ac7c4a23cc56c31"
  },
  {
    "url": "wangdao/types/object.html",
    "revision": "4242d81eb7f5ef1830c944af292fab73"
  },
  {
    "url": "wangdao/types/string.html",
    "revision": "148006edb07d943246ab7c5d741922e4"
  },
  {
    "url": "web/index.html",
    "revision": "ade5cb3b22ab14d31b2e7f8a5cfff003"
  },
  {
    "url": "web/qian/01-VS.html",
    "revision": "6bd64925e73c630b695a980368553fef"
  },
  {
    "url": "web/qian/02-Git.html",
    "revision": "ced37205915d3a64bb70e528d6adc391"
  },
  {
    "url": "web/qian/03-Whistle.html",
    "revision": "5c5354eb20069ff0ef3db7e94113e93b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
