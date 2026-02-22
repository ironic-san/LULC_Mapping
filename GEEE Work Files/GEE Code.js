//Step 1 Download the AOI.zip and import as variable "AOI"
Map.centerObject(AOI,10);
Map.addLayer(AOI,{},'AOI');
// Load Sentinel-2 SR
var s2 = ee.ImageCollection("COPERNICUS/S2_SR")
  .filterBounds(AOI)
  .filterDate('2023-01-01', '2023-12-31')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
  .select(['B2','B3','B4','B8']);   // select only needed bands

// Create median composite
var image = s2.median().clip(AOI);

// Display RGB
Map.addLayer(image, {bands: ['B4','B3','B2'], min:0, max:3000}, 'Sentinel-2 RGB');
Map.addLayer(image, {bands: ['B8','B4','B3'], min:0, max:3000}, 'Sentinel-2 FCC');
// Load training data
var training = ee.FeatureCollection(
  "projects/concise-slate-470913-j3/assets/TRAINING_LAYERS"
);

// Add NDVI band to image
var imageWithNDVI = image.addBands(
  image.normalizedDifference(['B8','B4']).rename('NDVI')
);

// Select bands for classification
var bands = ['B2','B3','B4','B8','NDVI'];

// Sample the training data
var trainingSample = imageWithNDVI.select(bands).sampleRegions({
  collection: training,
  properties: ['class_id'],
  scale: 10
});

// Train Random Forest
var classifier = ee.Classifier.smileRandomForest(100)
  .train({
    features: trainingSample,
    classProperty: 'class_id',
    inputProperties: bands
  });

// Classify image
var classified = imageWithNDVI.select(bands).classify(classifier);

// Display classification
Map.addLayer(classified, {
  min: 1,
  max: 4,
  palette: ['blue','green','grey','yellow']
}, 'LULC Classification');
Export.image.toDrive({
  image: classified,
  description: 'LULC_Chennai_AOI',
  folder: 'GEE_Exports',
  fileNamePrefix: 'LULC_Chennai_2026',
  region: AOI,
  scale: 10,
  maxPixels: 1e13
});