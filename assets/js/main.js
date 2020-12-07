const initializeAPIDemo = (api) => {
  api.hotspots.onAction(({ hotspotInfo }) => {
    switch (hotspotInfo.clickDataParam) {
      case 3:
        location.assign(hotspotInfo.url);
        break;

      default:
        alert('haha');
        break;
    }
  });
};

jQuery(document).ready(function () {
  jQuery('#wr360PlayerId').rotator({
    licenseFileURL: './license.lic',
    configFileURL: './assets/demo-1.xml',
    graphicsPath: './assets/img/round',
    alt: '360 degree view',
    googleEventTracking: false,
    apiReadyCallback: function (api, isFullScreen) {
      if (!isFullScreen) initializeAPIDemo(api);
    },
  });
});
