
    Bokeh.$(function() {
    var all_models = [{"type": "HoverTool", "attributes": {"renderers": [], "names": [], "doc": null, "always_active": true, "id": 
"b97865b7-facb-4ed5-8dd9-a29405be282c", "callback": null, "tooltips": [["value: ", "@y"]], "tags": [], "plot": {"type": "Plot", "subtype": "Figure", "id": 
"86629573-c264-460a-b50c-156cd5776938"}}, "id": "b97865b7-facb-4ed5-8dd9-a29405be282c"}, {"type": "Circle", "attributes": {"x": {"field": "x"}, "y": {"field": "y"}, 
"line_color": {"value": "#1f77b4"}, "size": {"value": 8, "units": "screen"}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}, "id": 
"5f55a338-421d-4be5-b313-b65d775c86bd", "doc": null, "tags": [], "line_alpha": {"value": 0.1}}, "id": "5f55a338-421d-4be5-b313-b65d775c86bd"}, {"type": 
"BasicTickFormatter", "attributes": {"doc": null, "tags": [], "id": "10a071db-6d00-454b-93b8-2ca89df7b11a"}, "id": "10a071db-6d00-454b-93b8-2ca89df7b11a"}, {"type": 
"BasicTicker", "attributes": {"doc": null, "id": "55258c89-d264-4872-858d-ef8cf76e84e9", "mantissas": [2, 5, 10], "num_minor_ticks": 5, "tags": []}, "id": 
"55258c89-d264-4872-858d-ef8cf76e84e9"}, {"type": "GlyphRenderer", "attributes": {"glyph": {"type": "Circle", "id": "667b330f-0ff6-497f-a02f-03bb9a59d9c6"}, "doc": 
null, "data_source": {"type": "ColumnDataSource", "id": "dcbed30a-2100-4bd8-a241-3f72b213cc84"}, "id": "c7979c70-48f8-408e-bcaa-a28d7d9f3b82", "selection_glyph": 
null, "tags": [], "nonselection_glyph": {"type": "Circle", "id": "4bcbbba3-5275-4399-aab0-b9d576ac84fe"}}, "id": "c7979c70-48f8-408e-bcaa-a28d7d9f3b82"}, {"type": 
"Line", "attributes": {"x": {"field": "x"}, "y": {"field": "y"}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "66de4fa3-530c-47f0-87c6-d68224f4107a", 
"line_width": {"value": 2}, "tags": [], "line_alpha": {"value": 0.1}}, "id": "66de4fa3-530c-47f0-87c6-d68224f4107a"}, {"type": "GlyphRenderer", "attributes": 
{"glyph": {"type": "Line", "id": "17376352-81ba-4786-9111-ffb357cc2fd2"}, "doc": null, "data_source": {"type": "ColumnDataSource", "id": 
"4164ee0e-3adb-4424-9a81-b25613c7df20"}, "id": "56bf2b60-47eb-4080-87d0-7c9dd836d346", "selection_glyph": null, "tags": [], "nonselection_glyph": {"type": "Line", 
"id": "66de4fa3-530c-47f0-87c6-d68224f4107a"}}, "id": "56bf2b60-47eb-4080-87d0-7c9dd836d346"}, {"type": "LinearAxis", "attributes": {"formatter": {"type": 
"BasicTickFormatter", "id": "10a071db-6d00-454b-93b8-2ca89df7b11a"}, "doc": null, "plot": {"type": "Plot", "subtype": "Figure", "id": 
"86629573-c264-460a-b50c-156cd5776938"}, "id": "727fe085-44e0-43f6-b7b3-621ee64e77f5", "tags": [], "axis_label": "Normalized Value", "ticker": {"type": 
"BasicTicker", "id": "55258c89-d264-4872-858d-ef8cf76e84e9"}}, "id": "727fe085-44e0-43f6-b7b3-621ee64e77f5"}, {"type": "GlyphRenderer", "attributes": {"glyph": 
{"type": "Circle", "id": "e66a40a6-5ac9-46e8-8e32-2afe9764edc6"}, "doc": null, "data_source": {"type": "ColumnDataSource", "id": 
"611653c4-55d1-4571-9dfd-9df9aa1e50f4"}, "id": "dfe82a82-4c80-4000-bb62-40979282e39c", "selection_glyph": null, "tags": [], "nonselection_glyph": {"type": "Circle", 
"id": "5f55a338-421d-4be5-b313-b65d775c86bd"}}, "id": "dfe82a82-4c80-4000-bb62-40979282e39c"}, {"type": "ColumnDataSource", "attributes": {"data": {"x": ["Jan", 
"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "y": [1.0, 0.1192316177629298, 0.1480427999621797, 0.1574695073907151, 
0.16319140218727346, 0.17758832613697248, 0.03562198619559394, 0.3238409656780863, 0.24196003655961426, 0.1154637713133096, 0.06129881181253743, 0.0]}, "doc": null, 
"id": "611653c4-55d1-4571-9dfd-9df9aa1e50f4", "callback": null, "column_names": ["x", "y"], "tags": [], "selected": {"0d": {"flag": false, "indices": []}, "1d": 
{"indices": []}, "2d": {"indices": []}}}, "id": "611653c4-55d1-4571-9dfd-9df9aa1e50f4"}, {"type": "CategoricalTickFormatter", "attributes": {"doc": null, "tags": 
[], "id": "5061fdc0-27ef-45bd-ab01-1be619deac4e"}, "id": "5061fdc0-27ef-45bd-ab01-1be619deac4e"}, {"type": "ToolEvents", "attributes": {"geometries": [], "doc": 
null, "id": "756e1188-d6b1-44a3-8e1c-59c3403fb1f5", "tags": []}, "id": "756e1188-d6b1-44a3-8e1c-59c3403fb1f5"}, {"type": "DataRange1d", "attributes": {"renderers": 
[], "names": [], "doc": null, "id": "ac950d2b-e9b3-4952-a4b7-9378e39aa9bc", "callback": null, "tags": []}, "id": "ac950d2b-e9b3-4952-a4b7-9378e39aa9bc"}, {"type": 
"Circle", "attributes": {"x": {"field": "x"}, "y": {"field": "y"}, "line_color": {"value": "green"}, "size": {"value": 8, "units": "screen"}, "fill_color": 
{"value": "white"}, "fill_alpha": {"value": 0.8}, "id": "667b330f-0ff6-497f-a02f-03bb9a59d9c6", "doc": null, "tags": [], "line_alpha": {"value": 0.8}}, "id": 
"667b330f-0ff6-497f-a02f-03bb9a59d9c6"}, {"type": "FactorRange", "attributes": {"doc": null, "id": "c9edf70e-0653-4f40-95c5-2afc58bb9a02", "callback": null, 
"factors": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "tags": []}, "id": "c9edf70e-0653-4f40-95c5-2afc58bb9a02"}, 
{"type": "CategoricalTicker", "attributes": {"id": "f3db8ba5-5c71-43d3-961a-7511942571ab", "doc": null, "num_minor_ticks": 5, "tags": []}, "id": 
"f3db8ba5-5c71-43d3-961a-7511942571ab"}, {"type": "ColumnDataSource", "attributes": {"data": {"x": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec"], "y": [1.0, 0.09387271895184827, 0.09933092908094897, 0.1034535322505063, 0.12987964122562062, 0.17789949000983807, 0.040523801824564484, 
0.2484759899043323, 0.17933957507214127, 0.08788869279738236, 0.04407879772765265, 0.0]}, "doc": null, "id": "dcbed30a-2100-4bd8-a241-3f72b213cc84", "callback": 
null, "column_names": ["x", "y"], "tags": [], "selected": {"0d": {"flag": false, "indices": []}, "1d": {"indices": []}, "2d": {"indices": []}}}, "id": 
"dcbed30a-2100-4bd8-a241-3f72b213cc84"}, {"type": "CategoricalAxis", "attributes": {"formatter": {"type": "CategoricalTickFormatter", "id": 
"5061fdc0-27ef-45bd-ab01-1be619deac4e"}, "doc": null, "plot": {"type": "Plot", "subtype": "Figure", "id": "86629573-c264-460a-b50c-156cd5776938"}, "id": 
"2c21ce1d-452e-4bde-a6f6-43950d9d8df8", "tags": [], "axis_label": "Month", "ticker": {"type": "CategoricalTicker", "id": "f3db8ba5-5c71-43d3-961a-7511942571ab"}}, 
"id": "2c21ce1d-452e-4bde-a6f6-43950d9d8df8"}, {"type": "Grid", "attributes": {"doc": null, "plot": {"type": "Plot", "subtype": "Figure", "id": 
"86629573-c264-460a-b50c-156cd5776938"}, "grid_line_color": {"value": "white"}, "dimension": 0, "tags": [], "id": "6cb42c56-3a94-4d82-b1fb-685a0dea99fd", "ticker": 
{"type": "CategoricalTicker", "id": "f3db8ba5-5c71-43d3-961a-7511942571ab"}}, "id": "6cb42c56-3a94-4d82-b1fb-685a0dea99fd"}, {"type": "Circle", "attributes": {"x": 
{"field": "x"}, "y": {"field": "y"}, "line_color": {"value": "#1f77b4"}, "size": {"value": 8, "units": "screen"}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": 
{"value": 0.1}, "id": "4bcbbba3-5275-4399-aab0-b9d576ac84fe", "doc": null, "tags": [], "line_alpha": {"value": 0.1}}, "id": "4bcbbba3-5275-4399-aab0-b9d576ac84fe"}, 
{"type": "Line", "attributes": {"x": {"field": "x"}, "y": {"field": "y"}, "line_color": {"value": "red"}, "doc": null, "id": "500798d0-9e98-44b0-83fe-acce5d7308db", 
"line_width": {"value": 2}, "tags": [], "line_alpha": {"value": 0.5}}, "id": "500798d0-9e98-44b0-83fe-acce5d7308db"}, {"attributes": {"y_range": {"type": 
"DataRange1d", "id": "ac950d2b-e9b3-4952-a4b7-9378e39aa9bc"}, "left": [{"type": "LinearAxis", "id": "727fe085-44e0-43f6-b7b3-621ee64e77f5"}], "plot_width": 600, 
"doc": null, "x_range": {"type": "FactorRange", "id": "c9edf70e-0653-4f40-95c5-2afc58bb9a02"}, "background_fill": "#cccccc", "above": [], "id": 
"86629573-c264-460a-b50c-156cd5776938", "extra_y_ranges": {}, "extra_x_ranges": {}, "plot_height": 300, "tools": [{"type": "HoverTool", "id": 
"b97865b7-facb-4ed5-8dd9-a29405be282c"}], "below": [{"type": "CategoricalAxis", "id": "2c21ce1d-452e-4bde-a6f6-43950d9d8df8"}], "renderers": [{"type": 
"CategoricalAxis", "id": "2c21ce1d-452e-4bde-a6f6-43950d9d8df8"}, {"type": "Grid", "id": "6cb42c56-3a94-4d82-b1fb-685a0dea99fd"}, {"type": "LinearAxis", "id": 
"727fe085-44e0-43f6-b7b3-621ee64e77f5"}, {"type": "Grid", "id": "c3d6df45-145b-48bf-baca-5be159139716"}, {"type": "Legend", "id": 
"faa853c6-652c-457b-b1a3-95cd1f359f45"}, {"type": "GlyphRenderer", "id": "56bf2b60-47eb-4080-87d0-7c9dd836d346"}, {"type": "GlyphRenderer", "id": 
"b0df0fe9-d838-426f-af7a-baa1baf89f19"}, {"type": "GlyphRenderer", "id": "c7979c70-48f8-408e-bcaa-a28d7d9f3b82"}, {"type": "GlyphRenderer", "id": 
"dfe82a82-4c80-4000-bb62-40979282e39c"}], "title": "Reported Job starting and ending points", "right": [], "tags": [], "tool_events": {"type": "ToolEvents", "id": 
"756e1188-d6b1-44a3-8e1c-59c3403fb1f5"}}, "type": "Plot", "subtype": "Figure", "id": "86629573-c264-460a-b50c-156cd5776938"}, {"type": "Legend", "attributes": 
{"legends": [["start period", [{"type": "GlyphRenderer", "id": "56bf2b60-47eb-4080-87d0-7c9dd836d346"}]], ["ending period", [{"type": "GlyphRenderer", "id": 
"b0df0fe9-d838-426f-af7a-baa1baf89f19"}]]], "doc": null, "id": "faa853c6-652c-457b-b1a3-95cd1f359f45", "tags": [], "plot": {"type": "Plot", "subtype": "Figure", 
"id": "86629573-c264-460a-b50c-156cd5776938"}}, "id": "faa853c6-652c-457b-b1a3-95cd1f359f45"}, {"type": "Circle", "attributes": {"x": {"field": "x"}, "y": {"field": 
"y"}, "line_color": {"value": "red"}, "size": {"value": 8, "units": "screen"}, "fill_color": {"value": "white"}, "fill_alpha": {"value": 0.8}, "id": 
"e66a40a6-5ac9-46e8-8e32-2afe9764edc6", "doc": null, "tags": [], "line_alpha": {"value": 0.8}}, "id": "e66a40a6-5ac9-46e8-8e32-2afe9764edc6"}, {"type": "Line", 
"attributes": {"x": {"field": "x"}, "y": {"field": "y"}, "line_color": {"value": "green"}, "doc": null, "id": "17376352-81ba-4786-9111-ffb357cc2fd2", "line_width": 
{"value": 2}, "tags": [], "line_alpha": {"value": 0.5}}, "id": "17376352-81ba-4786-9111-ffb357cc2fd2"}, {"type": "GlyphRenderer", "attributes": {"glyph": {"type": 
"Line", "id": "500798d0-9e98-44b0-83fe-acce5d7308db"}, "doc": null, "data_source": {"type": "ColumnDataSource", "id": "569daf34-ead0-411b-9246-84df82b877ba"}, "id": 
"b0df0fe9-d838-426f-af7a-baa1baf89f19", "selection_glyph": null, "tags": [], "nonselection_glyph": {"type": "Line", "id": "231080cf-bc7e-48a4-8fe0-6bce44242bdf"}}, 
"id": "b0df0fe9-d838-426f-af7a-baa1baf89f19"}, {"type": "Grid", "attributes": {"doc": null, "plot": {"type": "Plot", "subtype": "Figure", "id": 
"86629573-c264-460a-b50c-156cd5776938"}, "grid_line_color": {"value": "white"}, "dimension": 1, "tags": [], "id": "c3d6df45-145b-48bf-baca-5be159139716", "ticker": 
{"type": "BasicTicker", "id": "55258c89-d264-4872-858d-ef8cf76e84e9"}}, "id": "c3d6df45-145b-48bf-baca-5be159139716"}, {"type": "ColumnDataSource", "attributes": 
{"data": {"x": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "y": [1.0, 0.09387271895184827, 0.09933092908094897, 
0.1034535322505063, 0.12987964122562062, 0.17789949000983807, 0.040523801824564484, 0.2484759899043323, 0.17933957507214127, 0.08788869279738236, 
0.04407879772765265, 0.0]}, "doc": null, "id": "4164ee0e-3adb-4424-9a81-b25613c7df20", "callback": null, "column_names": ["x", "y"], "tags": [], "selected": {"0d": 
{"flag": false, "indices": []}, "1d": {"indices": []}, "2d": {"indices": []}}}, "id": "4164ee0e-3adb-4424-9a81-b25613c7df20"}, {"type": "Line", "attributes": {"x": 
{"field": "x"}, "y": {"field": "y"}, "line_color": {"value": "#1f77b4"}, "doc": null, "id": "231080cf-bc7e-48a4-8fe0-6bce44242bdf", "line_width": {"value": 2}, 
"tags": [], "line_alpha": {"value": 0.1}}, "id": "231080cf-bc7e-48a4-8fe0-6bce44242bdf"}, {"type": "ColumnDataSource", "attributes": {"data": {"x": ["Jan", "Feb", 
"Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "y": [1.0, 0.1192316177629298, 0.1480427999621797, 0.1574695073907151, 0.16319140218727346, 
0.17758832613697248, 0.03562198619559394, 0.3238409656780863, 0.24196003655961426, 0.1154637713133096, 0.06129881181253743, 0.0]}, "doc": null, "id": 
"569daf34-ead0-411b-9246-84df82b877ba", "callback": null, "column_names": ["x", "y"], "tags": [], "selected": {"0d": {"flag": false, "indices": []}, "1d": 
{"indices": []}, "2d": {"indices": []}}}, "id": "569daf34-ead0-411b-9246-84df82b877ba"}];
    Bokeh.load_models(all_models);
    var plots = [{'elementid': 'c70d03ba-1ac3-4bf9-8c0a-9bd23094d001', 'modeltype': 'Plot', 'modelid': '86629573-c264-460a-b50c-156cd5776938'}];
    for (idx in plots) {
    	var plot = plots[idx];
    	var model = Bokeh.Collections(plot.modeltype).get(plot.modelid);
    	Bokeh.logger.info('Realizing plot:')
    	Bokeh.logger.info(' - modeltype: ' + plot.modeltype);
    	Bokeh.logger.info(' - modelid: ' + plot.modelid);
    	Bokeh.logger.info(' - elementid: ' + plot.elementid);
    	var view = new model.default_view({
    		model: model,
    		el: '#' + plot.elementid
    	});
    	Bokeh.index[plot.modelid] = view;
    }
});
