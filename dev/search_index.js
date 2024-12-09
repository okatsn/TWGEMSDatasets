var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = TWGEMSDatasets","category":"page"},{"location":"#TWGEMSDatasets","page":"Home","title":"TWGEMSDatasets","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TWGEMSDatasets.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TWGEMSDatasets]","category":"page"},{"location":"#TWGEMSDatasets.textoffset-Tuple{Tuple{Symbol, Symbol}, Any}","page":"Home","title":"TWGEMSDatasets.textoffset","text":"Example: Text offset according to align\n\nstation_location = DataFrame(\n    Lon = [112.1, 112.3, 112.5],\n    Lat = [21.1, 23.3, 25.5],\n    code = [\"YL\", \"AA\", \"KUOL\"],\n    TextAlign = [\n        (:center, :top),\n        (:right, :bottom),\n        (:left, :bottom),\n    ]\n)\ntext(station_location.Lon, station_location.Lat;\n    text=station_location.code,\n    align=station_location.TextAlign,\n    offset = textoffset.(station_location.TextAlign, 4),\n    fontsize=15\n    )\n\n\n\n\n\n","category":"method"}]
}