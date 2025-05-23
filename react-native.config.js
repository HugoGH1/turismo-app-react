// react-native.config.js
module.exports = {
  project: {
    android: {
      unstable_reactLegacyComponentNames: [
        "AIRMap",
        "AIRMapCallout",
        "AIRMapCalloutSubview",
        "AIRMapCircle",
        "AIRMapHeatmap",
        "AIRMapLocalTile",
        "AIRMapMarker",
        "AIRMapOverlay",
        "AIRMapPolygon",
        "AIRMapPolyline",
        "AIRMapUrlTile",
        "AIRMapWMSTile",
        "RNMapsAirModule",
      ],
    },
    ios: {
      unstable_reactLegacyComponentNames: [
        "AIRMap",
        "AIRMapCallout",
        "AIRMapCalloutSubview",
        "AIRMapCircle",
        "AIRMapHeatmap",
        "AIRMapLocalTile",
        "AIRMapMarker",
        "AIRMapOverlay",
        "AIRMapPolygon",
        "AIRMapPolyline",
        "AIRMapUrlTile",
        "AIRMapWMSTile",
        "RNMapsAirModule",
      ],
    },
  },
};
