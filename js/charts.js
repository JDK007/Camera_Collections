// Load the chart fonts first so chart text is drawn in Open Sans
Promise.all([
  document.fonts.load('400 12px "Open Sans"'),
  document.fonts.load('600 12px "Open Sans"'),
  document.fonts.load('700 12px "Open Sans"')
]).then(drawCharts, drawCharts);

// Added to each chart file's address so the browser fetches the latest version
const version = "?v=10";

function drawCharts() {
  vegaEmbed("#film_vs_digital", "specs/film_vs_digital.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#megapixels", "specs/megapixels.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#brand_heatmap", "specs/brand_heatmap.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#brand_lifespans", "specs/brand_lifespans.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#brand_ranks", "specs/brand_ranks.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#camera_types", "specs/camera_types.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#dslr_mirrorless", "specs/dslr_mirrorless.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#camera_prices", "specs/camera_prices.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#comeback", "specs/comeback.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#import_origins", "specs/import_origins.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#import_flows", "specs/import_flows.vg.json" + version, { "actions": false })
    .catch(console.error);

  vegaEmbed("#world_regions", "specs/world_regions.vg.json" + version, { "actions": false })
    .catch(console.error);
}
