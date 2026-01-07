var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIS_Batas_Kelurahan_Desa_2024_0 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kelurahan_Desa_2024_0 = format_LapakGIS_Batas_Kelurahan_Desa_2024_0.readFeatures(json_LapakGIS_Batas_Kelurahan_Desa_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kelurahan_Desa_2024_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIS_Batas_Kelurahan_Desa_2024_0.addFeatures(features_LapakGIS_Batas_Kelurahan_Desa_2024_0);var lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIS_Batas_Kelurahan_Desa_2024_0, 
                style: style_LapakGIS_Batas_Kelurahan_Desa_2024_0,
    title: 'LapakGIS_Batas_Kelurahan_Desa_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kelurahan_Desa_2024_0_0.png" /> Rp3Miliar -Rp.5.6Miliar(TINGGI)<br />\
    <img src="styles/legend/LapakGIS_Batas_Kelurahan_Desa_2024_0_1.png" /> Rp1Miliar-Rp3Miliar (MENENGAH)<br />\
    <img src="styles/legend/LapakGIS_Batas_Kelurahan_Desa_2024_0_2.png" /> Rp0–Rp1Miliar  (RENDAH)<br />'
        });

lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0];
lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.set('fieldAliases', {'WADMKD': 'WADMKD', 'Jml.PBB': 'Jml.PBB', 'Jml.Warga': 'Jml.Warga', });
lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.set('fieldImages', {'WADMKD': 'TextEdit', 'Jml.PBB': 'TextEdit', 'Jml.Warga': 'TextEdit', });
lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.set('fieldLabels', {'WADMKD': 'inline label', 'Jml.PBB': 'inline label', 'Jml.Warga': 'inline label', });
lyr_LapakGIS_Batas_Kelurahan_Desa_2024_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});