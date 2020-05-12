/*
 Highcharts JS v8.1.0 (2020-05-05)

 (c) 2009-2019 Sebastian Bochan, Rafal Sebestjanski

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/dumbbell",["highcharts"],function(f){b(f);b.Highcharts=f;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function f(b,c,f,r){b.hasOwnProperty(c)||(b[c]=r.apply(null,f))}b=b?b._modules:{};f(b,"modules/dumbbell.src.js",[b["parts/Globals.js"],b["parts/Utilities.js"]],function(b,c){var f=b.SVGRenderer,r=c.extend,h=c.pick;
c=c.seriesType;var p=b.seriesTypes,u=b.Series.prototype,l=p.arearange.prototype,t=p.column.prototype,m=l.pointClass.prototype;c("dumbbell","arearange",{trackByArea:!1,fillColor:"none",lineWidth:0,pointRange:1,connectorWidth:1,stickyTracking:!1,groupPadding:.2,crisp:!1,pointPadding:.1,lowColor:"#333333",states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}}},{trackerGroups:["group","markerGroup","dataLabelsGroup"],drawTracker:b.TrackerMixin.drawTrackerPoint,drawGraph:b.noop,crispCol:t.crispCol,
getConnectorAttribs:function(a){var b=this.chart,e=a.options,g=this.options,d=this.xAxis,n=this.yAxis,c=h(e.connectorWidth,g.connectorWidth),l=h(e.connectorColor,g.connectorColor,e.color,a.zone?a.zone.color:void 0,a.color),p=h(g.states&&g.states.hover&&g.states.hover.connectorWidthPlus,1),m=h(e.dashStyle,g.dashStyle),q=h(a.plotLow,a.plotY),k=n.toPixels(g.threshold||0,!0);k=h(a.plotHigh,b.inverted?n.len-k:k);a.state&&(c+=p);0>q?q=0:q>=n.len&&(q=n.len);0>k?k=0:k>=n.len&&(k=n.len);if(0>a.plotX||a.plotX>
d.len)c=0;a.upperGraphic&&(d={y:a.y,zone:a.zone},a.y=a.high,a.zone=a.zone?a.getZone():void 0,l=h(e.connectorColor,g.connectorColor,e.color,a.zone?a.zone.color:void 0,a.color),r(a,d));a={d:f.prototype.crispLine([["M",a.plotX,q],["L",a.plotX,k]],c,"ceil")};b.styledMode||(a.stroke=l,a["stroke-width"]=c,m&&(a.dashstyle=m));return a},drawConnector:function(a){var b=h(this.options.animationLimit,250);b=a.connector&&this.chart.pointCount<b?"animate":"attr";a.connector||(a.connector=this.chart.renderer.path().addClass("highcharts-lollipop-stem").attr({zIndex:-1}).add(this.markerGroup));
a.connector[b](this.getConnectorAttribs(a))},getColumnMetrics:function(){var a=t.getColumnMetrics.apply(this,arguments);a.offset+=a.width/2;return a},translatePoint:l.translate,setShapeArgs:p.columnrange.prototype.translate,translate:function(){this.setShapeArgs.apply(this);this.translatePoint.apply(this,arguments);this.points.forEach(function(a){var b=a.shapeArgs,e=a.pointWidth;a.plotX=b.x;b.x=a.plotX-e/2;a.tooltipPos=null});this.columnMetrics.offset-=this.columnMetrics.width/2},seriesDrawPoints:l.drawPoints,
drawPoints:function(){var a=this.chart,b=this.points.length,e=this.lowColor=this.options.lowColor,g=0;for(this.seriesDrawPoints.apply(this,arguments);g<b;){var d=this.points[g];this.drawConnector(d);d.upperGraphic&&(d.upperGraphic.element.point=d,d.upperGraphic.addClass("highcharts-lollipop-high"));d.connector.element.point=d;if(d.lowerGraphic){var c=d.zone&&d.zone.color;c=h(d.options.lowColor,e,d.options.color,c,d.color,this.color);a.styledMode||d.lowerGraphic.attr({fill:c});d.lowerGraphic.addClass("highcharts-lollipop-low")}g++}},
markerAttribs:function(){var a=l.markerAttribs.apply(this,arguments);a.x=Math.floor(a.x);a.y=Math.floor(a.y);return a},pointAttribs:function(a,b){var e=u.pointAttribs.apply(this,arguments);"hover"===b&&delete e.fill;return e}},{destroyElements:m.destroyElements,isValid:m.isValid,pointSetState:m.setState,setState:function(){var a=this.series,b=a.chart,e=a.options.marker,c=this.options,d=h(c.lowColor,a.options.lowColor,c.color,this.zone&&this.zone.color,this.color,a.color),f="attr";this.pointSetState.apply(this,
arguments);this.state||(f="animate",this.lowerGraphic&&!b.styledMode&&(this.lowerGraphic.attr({fill:d}),this.upperGraphic&&(b={y:this.y,zone:this.zone},this.y=this.high,this.zone=this.zone?this.getZone():void 0,e=h(this.marker?this.marker.fillColor:void 0,e?e.fillColor:void 0,c.color,this.zone?this.zone.color:void 0,this.color),this.upperGraphic.attr({fill:e}),r(this,b))));this.connector[f](a.getConnectorAttribs(this))}});""});f(b,"masters/modules/dumbbell.src.js",[],function(){})});
//# sourceMappingURL=dumbbell.js.map