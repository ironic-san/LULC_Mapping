# 🌍 AI-Driven Land Use and Land Cover (LULC) Mapping  
### Chennai AOI | QGIS + Google Earth Engine | Random Forest

---

## 📌 Project Overview

This project demonstrates AI-driven Land Use and Land Cover (LULC) classification using Sentinel-2 satellite imagery and supervised Machine Learning (Random Forest).

The work was completed as part of the *Winter Training Program conducted by India Space Academy*.

The workflow integrates:

- 🛰 Sentinel-2 Surface Reflectance Data  
- 🗺 QGIS (Desktop GIS Processing)  
- ☁ Google Earth Engine (Cloud-Based Processing)  
- 🤖 Random Forest Machine Learning Algorithm  

---

## 🎯 Objective

To generate an accurate LULC map for Chennai Area of Interest (AOI) using supervised Machine Learning and compare outputs from both QGIS and Google Earth Engine workflows.

---

## 🛰 Data Used

*Satellite Imagery:*
- Sentinel-2 MSI (10m Spatial Resolution)
- Source: Copernicus Open Access Hub

*Bands Used:*
- B2 (Blue)
- B3 (Green)
- B4 (Red)
- B8 (Near Infrared - NIR)

*Ancillary Data:*
- AOI shapefile (Created in QGIS)
- Training sample polygons
- Google Earth imagery (for visual validation)

---

## 🤖 Machine Learning Model

- Algorithm: Random Forest
- Number of Trees: 100
- Input Features: B2, B3, B4, B8
- Supervised Classification

### LULC Classes:
1. Water
2. Vegetation
3. Built-up
4. Barren Land

---

## 🛠 Methodology

### 🔹 QGIS Workflow

1. Download Sentinel-2 imagery
2. Clip raster using AOI
3. Create multiband raster (Band Stacking)
4. Digitize training samples
5. Apply Random Forest classifier
6. Convert raster to vector
7. Compute area statistics (km²)
8. Prepare cartographic layout

---

### 🔹 Google Earth Engine Workflow

1. Import AOI
2. Filter Sentinel-2 Image Collection
3. Create median composite
4. Sample training polygons
5. Train Random Forest classifier
6. Classify full image
7. Export GeoTIFF
8. Style final layout in QGIS

---

## 📊 Results & Observations

- Built-up area dominates the Chennai AOI.
- Vegetation is concentrated in peripheral zones.
- Water bodies are clearly distinguishable using NIR reflectance.
- Minor variation observed between QGIS and GEE results due to processing differences.


## 🚀 Key Learnings

- Practical implementation of AI in Remote Sensing.
- Understanding supervised classification workflows.
- Cloud-based geospatial processing using GEE.
- Integration of Machine Learning with GIS tools.
- End-to-end spatial analysis and cartographic presentation.

---

## 🧠 Why This Project Matters

This project demonstrates how Artificial Intelligence can be integrated with Earth Observation data to analyze urban expansion and land cover distribution. Such workflows are essential for urban planning, environmental monitoring, and sustainable land management.

---

## 🛠 Tools & Technologies

- QGIS
- Google Earth Engine
- Sentinel-2 Satellite Data
- Random Forest Algorithm
- Remote Sensing & GIS

---

## 📬 Author

*R Sanjeev Prasad*  
B.Tech Computer Science Engineering  
Vellore Institute of Technology, Chennai  

---

## 🔗 Connect

If you found this project interesting, feel free to connect or explore the repository!
