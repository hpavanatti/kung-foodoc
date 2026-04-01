var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["tmpl"] = this["tmpl"] || {};

Handlebars.registerPartial("search/modal", this["tmpl"]["search/modal"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- start:lunr-search-modal.hbs -->\n<div class=\"modal fade\" id=\"lunr-search-modal\">\n	<div class=\"modal-dialog\">\n		<div class=\"modal-content\">\n			<div class=\"modal-header\">\n				<h4 class=\"modal-title\"><i class=\"ph ph-magnifying-glass\"></i> Search results</h4>\n				<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n			</div>\n			<div class=\"modal-body\" id=\"lunr-search-body\">\n			</div>\n			<div class=\"modal-footer\" id=\"lunr-search-footer\">\n				<button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n			</div>\n		</div><!-- /.modal-content -->\n	</div><!-- /.modal-dialog -->\n</div>\n<!-- end:lunr-search-modal.hbs -->\n";
},"useData":true}));

Handlebars.registerPartial("search/navbar-input", this["tmpl"]["search/navbar-input"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<!-- start:lunr-search-navbar.hbs -->\n<form class=\"d-flex ms-auto\" role=\"search\">\n	<div class=\"input-group\">\n		<input type=\"text\" class=\"form-control\" placeholder=\"Search\" id=\"lunr-search-input\">\n		<button class=\"btn btn-outline-secondary\" type=\"button\" id=\"lunr-search-submit\">\n			<i class=\"ph ph-magnifying-glass\"></i>\n		</button>\n	</div>\n</form>\n<!-- start:lunr-search-navbar.hbs -->\n";
},"useData":true}));

Handlebars.registerPartial("site/layout", this["tmpl"]["site/layout"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<title>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"pageTitle") : stack1), depth0))
    + "</title>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"favicon") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":2},"end":{"line":29,"column":9}}})) != null ? stack1 : "")
    + "		<link href=\"https://fonts.googleapis.com/css?family=PT+Mono\" rel=\"stylesheet\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n		<link rel=\"stylesheet\" type=\"text/css\" href=\"https://unpkg.com/@phosphor-icons/web@2/src/regular/style.css\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/prism.min.css\">\n		<link type=\"text/css\" rel=\"stylesheet\" href=\"css/template.min.css\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"stylesheets") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":2},"end":{"line":37,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemColor") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":2},"end":{"line":42,"column":9}}})) != null ? stack1 : "")
    + "		<script type=\"text/javascript\">\n			window.TEMPLATE_OPTIONS = "
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"options") : depth0),{"name":"json","hash":{},"data":data,"loc":{"start":{"line":44,"column":29},"end":{"line":44,"column":47}}})) != null ? stack1 : "")
    + ";\n			window.DOCLET_TOC_ENABLED = "
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showTableOfContents") : stack1),{"name":"json","hash":{},"data":data,"loc":{"start":{"line":45,"column":31},"end":{"line":45,"column":68}}})) != null ? stack1 : "")
    + ";\n			window.DOCLET_AFILTER_ENABLED = "
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showAccessFilter") : stack1),{"name":"json","hash":{},"data":data,"loc":{"start":{"line":46,"column":35},"end":{"line":46,"column":69}}})) != null ? stack1 : "")
    + ";\n		</script>\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<link rel=\"icon\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"faviconType") : stack1), depth0))
    + "\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"favicon") : stack1), depth0))
    + "\"/>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "			<link type=\"text/css\" rel=\"stylesheet\" href=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<style>\n				:root { --fd-primary: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemColor") : stack1), depth0))
    + "; }\n			</style>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"page-header\">\n			<div class=\"container\">\n				<span class=\"kind\">"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"kind") : stack1), depth0))
    + "</span>\n				<h1>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"pageTitleHTML") : stack1), depth0)) != null ? stack1 : "")
    + "</h1>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/summary"),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"tag/summary","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "col-md-9";
},"6":function(container,depth0,helpers,partials,data) {
    return "col-md-12";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"controls-bar d-flex align-items-center justify-content-between bg-light rounded px-3 py-2 mb-3\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"crumbs") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":66,"column":6},"end":{"line":72,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showAccessFilter") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":6},"end":{"line":100,"column":13}}})) != null ? stack1 : "")
    + "					</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<ol class=\"breadcrumb mb-0\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"crumbs") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":8},"end":{"line":70,"column":17}}})) != null ? stack1 : "")
    + "							</ol>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<li class=\"breadcrumb-item"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":34},"end":{"line":69,"column":61}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " active";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<div class=\"access-filter mb-0\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"has") : stack1)) != null ? lookupProperty(stack1,"inherited") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":8},"end":{"line":80,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"has") : stack1)) != null ? lookupProperty(stack1,"public") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":81,"column":8},"end":{"line":86,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"has") : stack1)) != null ? lookupProperty(stack1,"protected") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":8},"end":{"line":92,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"has") : stack1)) != null ? lookupProperty(stack1,"private") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":8},"end":{"line":98,"column":15}}})) != null ? stack1 : "")
    + "							</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "									<div class=\"form-check form-check-inline checked\">\n										<input class=\"form-check-input toggle-inherited\" type=\"checkbox\" value=\"\" checked>\n										<label class=\"form-check-label\"><i class=\"ph ph-git-fork\"></i> Inherited</label>\n									</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "									<div class=\"form-check form-check-inline checked\">\n										<input class=\"form-check-input toggle-public\" type=\"checkbox\" value=\"\" checked>\n										<label class=\"form-check-label\"><i class=\"ph ph-eye\"></i> Public</label>\n									</div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "									<div class=\"form-check form-check-inline checked\">\n										<input class=\"form-check-input toggle-protected\" type=\"checkbox\" value=\"\" checked>\n										<label class=\"form-check-label\"><i class=\"ph ph-shield\"></i> Protected</label>\n									</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return "									<div class=\"form-check form-check-inline checked\">\n										<input class=\"form-check-input toggle-private\" type=\"checkbox\" value=\"\" checked>\n										<label class=\"form-check-label\"><i class=\"ph ph-lock\"></i> Private</label>\n									</div>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<section>\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"primary",{"name":"block","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":105,"column":6},"end":{"line":109,"column":16}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"secondary",{"name":"block","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":110,"column":6},"end":{"line":122,"column":16}}})) != null ? stack1 : "")
    + "					</section>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<dl class=\"symbol primary\">\n								"
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"symbol","hash":{"options":(depth0 != null ? lookupProperty(depth0,"options") : depth0),"expanded":true,"primary":true},"data":data,"loc":{"start":{"line":107,"column":8},"end":{"line":107,"column":68}}}))
    + "\n							</dl>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<article class=\"secondary\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(lookupProperty(helpers,"symbol-kinds")||(depth0 && lookupProperty(depth0,"symbol-kinds"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"symbols") : stack1),{"name":"symbol-kinds","hash":{},"data":data,"loc":{"start":{"line":112,"column":16},"end":{"line":112,"column":45}}}),{"name":"each","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":112,"column":8},"end":{"line":120,"column":17}}})) != null ? stack1 : "")
    + "							</article>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<h3><i class=\"ph "
    + alias4(((helper = (helper = lookupProperty(helpers,"icon") || (depth0 != null ? lookupProperty(depth0,"icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data,"loc":{"start":{"line":113,"column":26},"end":{"line":113,"column":34}}}) : helper)))
    + "\"></i> "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":113,"column":41},"end":{"line":113,"column":50}}}) : helper)))
    + "</h3>\n									<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":115,"column":10},"end":{"line":118,"column":19}}})) != null ? stack1 : "")
    + "									</dl>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "											<hr/>\n											"
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"symbol","hash":{"options":((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"options"))},"data":data,"loc":{"start":{"line":117,"column":11},"end":{"line":117,"column":48}}}))
    + "\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"col-md-3 side-content\">\n					<nav class=\"toc d-none d-md-block d-print-none\"></nav>\n				</div>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"footer") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":135,"column":3},"end":{"line":137,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"copyright") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":138,"column":3},"end":{"line":140,"column":10}}})) != null ? stack1 : "")
    + "			<div class=\"generated-by\">Documentation generated by <a href=\"https://github.com/jsdoc3/jsdoc\">JSDoc "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"version") : stack1), depth0))
    + "</a>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"includeDate") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":141,"column":126},"end":{"line":141,"column":179}}})) != null ? stack1 : "")
    + " using the <a href=\"https://github.com/steveush/foodoc\">FooDoc template</a>.</div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"footer-option\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"footer") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"copyright\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"copyright") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " on "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"date") : stack1), depth0));
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div>\n			<pre class=\"prettyprint source language-javascript\"><code class=\"language-javascript\">"
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"config") : depth0),{"name":"json","hash":{"pretty":true},"data":data,"loc":{"start":{"line":146,"column":89},"end":{"line":146,"column":118}}})) != null ? stack1 : "")
    + "</code></pre>\n			<pre class=\"prettyprint source language-javascript\"><code class=\"language-javascript\">"
    + ((stack1 = (lookupProperty(helpers,"json")||(depth0 && lookupProperty(depth0,"json"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"json","hash":{"pretty":true},"data":data,"loc":{"start":{"line":147,"column":89},"end":{"line":147,"column":118}}})) != null ? stack1 : "")
    + "</code></pre>\n		</div>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"search/modal"),depth0,{"name":"search/modal","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		<script src=\"js/lunr.min.js\"></script>\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "		<script src=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></script>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1)) != null ? lookupProperty(stack1,"ua") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":162,"column":26},"end":{"line":171,"column":15}}})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1)) != null ? lookupProperty(stack1,"domain") : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":162,"column":54},"end":{"line":171,"column":8}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n		<script>\n			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n			ga('create', '"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1)) != null ? lookupProperty(stack1,"ua") : stack1), depth0))
    + "', '"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1)) != null ? lookupProperty(stack1,"domain") : stack1), depth0))
    + "');\n			ga('send', 'pageview');\n		</script>\n	";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n	<meta charset=\"utf-8\">\n	<meta name=\"viewport\" content=\"width=device-width\">\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"head",{"name":"block","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":1},"end":{"line":48,"column":11}}})) != null ? stack1 : "")
    + "</head>\n<body>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"site/navbar"),depth0,{"name":"site/navbar","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"page-header",{"name":"block","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":1},"end":{"line":60,"column":11}}})) != null ? stack1 : "")
    + "	<div class=\"container content\">\n		<div class=\"row\">\n			<div class=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showTableOfContents") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":63,"column":15},"end":{"line":63,"column":81}}})) != null ? stack1 : "")
    + " main-content\">\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"controls",{"name":"block","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":64,"column":4},"end":{"line":102,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"content",{"name":"block","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":103,"column":4},"end":{"line":124,"column":14}}})) != null ? stack1 : "")
    + "			</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"showTableOfContents") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":126,"column":3},"end":{"line":130,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n	<footer>\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"footer",{"name":"block","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":134,"column":2},"end":{"line":142,"column":12}}})) != null ? stack1 : "")
    + "	</footer>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"config") : depth0)) != null ? lookupProperty(stack1,"debug") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":144,"column":1},"end":{"line":149,"column":8}}})) != null ? stack1 : "")
    + "	<script src=\"js/jquery.min.js\"></script>\n	<script src=\"js/bootstrap.bundle.min.js\"></script>\n	<script src=\"js/clipboard.min.js\"></script>\n	<script src=\"js/prism.min.js\"></script>\n	<script src=\"js/template.min.js\"></script>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"search") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":155,"column":1},"end":{"line":158,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"scripts") : stack1),{"name":"each","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":159,"column":1},"end":{"line":161,"column":10}}})) != null ? stack1 : "")
    + "	"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"analytics") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":162,"column":1},"end":{"line":171,"column":22}}})) != null ? stack1 : "")
    + "\n</body>\n</html>\n";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("site/navbar", this["tmpl"]["site/navbar"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    return " navbar-dark bg-dark";
},"1":function(container,depth0,helpers,partials,data) {
    return " navbar-light bg-light";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemLogo") : stack1), depth0))
    + "\" alt=\"\" class=\"branding-logo me-2\">";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"options") : depths[1])) != null ? lookupProperty(stack1,"inlineNav") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":27,"column":5},"end":{"line":42,"column":12}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						<li class=\"nav-item\"><a class=\"nav-link\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":28,"column":53},"end":{"line":28,"column":61}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":28,"column":63},"end":{"line":28,"column":72}}}) : helper)))
    + "</a></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":41,"column":13}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<li class=\"nav-item dropdown\">\n								<a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":32,"column":17},"end":{"line":32,"column":25}}}) : helper)))
    + "\" class=\"nav-link dropdown-toggle\" data-bs-toggle=\"dropdown\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":32,"column":86},"end":{"line":32,"column":95}}}) : helper)))
    + "</a>\n								<ul class=\"dropdown-menu\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"members") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":9},"end":{"line":36,"column":18}}})) != null ? stack1 : "")
    + "								</ul>\n							</li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "										<li>"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</li>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<li class=\"nav-item\"><a class=\"nav-link\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":40,"column":54},"end":{"line":40,"column":62}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":40,"column":64},"end":{"line":40,"column":73}}}) : helper)))
    + "</a></li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"search/navbar-input"),depth0,{"name":"search/navbar-input","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header class=\"navbar navbar-expand-md"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"inverseNav") : stack1),{"name":"if","hash":{},"fn":container.program(0, data, 0, blockParams, depths),"inverse":container.program(1, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":14,"column":38},"end":{"line":14,"column":121}}})) != null ? stack1 : "")
    + " fixed-top\">\n	<div class=\"container\">\n		<a class=\"navbar-brand d-flex align-items-center\" href=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"navbar") : depth0)) != null ? lookupProperty(stack1,"index") : stack1)) != null ? lookupProperty(stack1,"link") : stack1), depth0))
    + "\">\n			"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"systemLogo") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":17,"column":104}}})) != null ? stack1 : "")
    + "\n			"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"navbar") : depth0)) != null ? lookupProperty(stack1,"index") : stack1)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "\n		</a>\n		<!-- displayed on small devices -->\n		<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#topNavigation\" aria-controls=\"topNavigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n			<span class=\"navbar-toggler-icon\"></span>\n		</button>\n		<div class=\"navbar-collapse collapse\" id=\"topNavigation\">\n			<ul class=\"navbar-nav me-auto\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"navbar") : depth0)) != null ? lookupProperty(stack1,"topLevel") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":4},"end":{"line":43,"column":13}}})) != null ? stack1 : "")
    + "			</ul>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"search") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":3},"end":{"line":47,"column":10}}})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</header>\n<!-- end:navbar.hbs -->\n";
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("symbol/inline", this["tmpl"]["symbol/inline"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"access") || (depth0 != null ? lookupProperty(depth0,"access") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"access","hash":{},"data":data,"loc":{"start":{"line":20,"column":53},"end":{"line":20,"column":63}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inherited") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":63},"end":{"line":20,"column":97}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    return " inherited";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(alias1,"symbol-details",{"name":"content","hash":{},"data":data,"loc":{"start":{"line":20,"column":150},"end":{"line":20,"column":176}}}),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":140},"end":{"line":20,"column":241}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " collapsible-symbol"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"expanded")),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":197},"end":{"line":20,"column":230}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return " expanded";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"primary")),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":28,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/summary"),depth0,{"name":"tag/summary","data":data,"indent":"\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<h2 class=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":23,"column":14},"end":{"line":23,"column":22}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"primaryTitleHTML") || (depth0 != null ? lookupProperty(depth0,"primaryTitleHTML") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryTitleHTML","hash":{},"data":data,"loc":{"start":{"line":23,"column":24},"end":{"line":23,"column":46}}}) : helper))) != null ? stack1 : "")
    + "</h2>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"list")),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":24,"column":2},"end":{"line":28,"column":2}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<h4 id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":25,"column":11},"end":{"line":25,"column":17}}}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":25,"column":26},"end":{"line":25,"column":34}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"access") || (depth0 != null ? lookupProperty(depth0,"access") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"access","hash":{},"data":data,"loc":{"start":{"line":25,"column":35},"end":{"line":25,"column":45}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inherited") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":45},"end":{"line":25,"column":79}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"listTitleHTML") || (depth0 != null ? lookupProperty(depth0,"listTitleHTML") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listTitleHTML","hash":{},"data":data,"loc":{"start":{"line":25,"column":81},"end":{"line":25,"column":100}}}) : helper))) != null ? stack1 : "")
    + "</h4>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<h4 id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":27,"column":11},"end":{"line":27,"column":17}}}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":27,"column":26},"end":{"line":27,"column":34}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"access") || (depth0 != null ? lookupProperty(depth0,"access") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"access","hash":{},"data":data,"loc":{"start":{"line":27,"column":35},"end":{"line":27,"column":45}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"inherited") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":45},"end":{"line":27,"column":79}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"symbolTitleHTML") || (depth0 != null ? lookupProperty(depth0,"symbolTitleHTML") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"symbolTitleHTML","hash":{},"data":data,"loc":{"start":{"line":27,"column":81},"end":{"line":27,"column":102}}}) : helper))) != null ? stack1 : "")
    + "</h4>\n		";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(alias1,"symbol-details",{"name":"content","hash":{},"data":data,"loc":{"start":{"line":32,"column":152},"end":{"line":32,"column":178}}}),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":142},"end":{"line":32,"column":244}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  collapsible-symbol"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"expanded")),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":200},"end":{"line":32,"column":233}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " style=\"max-height: 9999px;\"";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"tag/description"),depth0,{"name":"tag/description","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/param"),depth0,{"name":"tag/param","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/prop"),depth0,{"name":"tag/prop","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/returns"),depth0,{"name":"tag/returns","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/requires"),depth0,{"name":"tag/requires","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/example"),depth0,{"name":"tag/example","hash":{"options":(data && lookupProperty(data,"options"))},"data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/fires"),depth0,{"name":"tag/fires","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/exceptions"),depth0,{"name":"tag/exceptions","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/details"),depth0,{"name":"tag/details","hash":{"options":(data && lookupProperty(data,"options"))},"data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<dt class=\"symbol-title "
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":20,"column":24},"end":{"line":20,"column":32}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"primary")),{"name":"unless","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":32},"end":{"line":20,"column":108}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"options"))) && lookupProperty(stack1,"collapseSymbols")),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":108},"end":{"line":20,"column":248}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"symbol-title",{"name":"block","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":1},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "</dt>\n<dd class=\"symbol-details "
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":32,"column":26},"end":{"line":32,"column":34}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"primary")),{"name":"unless","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":34},"end":{"line":32,"column":110}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (data && lookupProperty(data,"options"))) && lookupProperty(stack1,"collapseSymbols")),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":110},"end":{"line":32,"column":251}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"expanded")),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":252},"end":{"line":32,"column":304}}})) != null ? stack1 : "")
    + ">\n	<div class=\"symbol-details-inner\">\n"
    + ((stack1 = (lookupProperty(helpers,"block")||(depth0 && lookupProperty(depth0,"block"))||alias2).call(alias1,"symbol-details",{"name":"block","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":2},"end":{"line":44,"column":12}}})) != null ? stack1 : "")
    + "	</div>\n</dd>";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("symbol/page", this["tmpl"]["symbol/page"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol-details",{"name":"content","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":42}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol/inline",{"name":"extend","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":11}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("symbol/tutorial", this["tmpl"]["symbol/tutorial"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol-details",{"name":"content","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":9,"column":13}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<dl class=\"symbol tutorial-children\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"children") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":7,"column":12}}})) != null ? stack1 : "")
    + "		</dl>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<hr/>\n				"
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"symbol","hash":{"options":(data && lookupProperty(data,"options")),"primary":(depth0 != null ? lookupProperty(depth0,"primary") : depth0),"list":(depth0 != null ? lookupProperty(depth0,"list") : depth0)},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":62}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"symbol/inline",{"name":"extend","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":10,"column":11}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/description", this["tmpl"]["tag/description"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Description","callout-primary",{"name":"callout","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":13}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"description classdesc\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"classdesc") || (depth0 != null ? lookupProperty(depth0,"classdesc") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"classdesc","hash":{},"data":data,"loc":{"start":{"line":3,"column":37},"end":{"line":3,"column":52}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":9,"column":0}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Description","callout-primary",{"name":"callout","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":1},"end":{"line":8,"column":13}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"description\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":27},"end":{"line":7,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"classdesc") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/details", this["tmpl"]["tag/details"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Details","callout-default",{"name":"callout","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":24,"column":13}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"details-form details\">\n			"
    + alias3((lookupProperty(helpers,"detail-type")||(depth0 && lookupProperty(depth0,"detail-type"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"detail-type","hash":{},"data":data,"loc":{"start":{"line":5,"column":3},"end":{"line":5,"column":23}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-text")||(depth0 && lookupProperty(depth0,"detail-text"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"defaultvalue") : depth0),"Default Value",{"name":"detail-text","hash":{},"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":6,"column":47}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link-list")||(depth0 && lookupProperty(depth0,"detail-link-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"augments") : depth0),"Augments",{"name":"detail-link-list","hash":{},"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":7,"column":43}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-text")||(depth0 && lookupProperty(depth0,"detail-text"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"version") : depth0),"Version",{"name":"detail-text","hash":{},"data":data,"loc":{"start":{"line":8,"column":3},"end":{"line":8,"column":36}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-text")||(depth0 && lookupProperty(depth0,"detail-text"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"since") : depth0),"Since",{"name":"detail-text","hash":{},"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":9,"column":32}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link")||(depth0 && lookupProperty(depth0,"detail-link"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"inherits") : depth0),"Inherited From",{"name":"detail-link","hash":{},"data":data,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":44}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link")||(depth0 && lookupProperty(depth0,"detail-link"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"overrides") : depth0),"Overrides",{"name":"detail-link","hash":{},"data":data,"loc":{"start":{"line":11,"column":3},"end":{"line":11,"column":40}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link-list")||(depth0 && lookupProperty(depth0,"detail-link-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"implementations") : depth0),"Implementations",{"name":"detail-link-list","hash":{},"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":12,"column":57}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link-list")||(depth0 && lookupProperty(depth0,"detail-link-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"implements") : depth0),"Implements",{"name":"detail-link-list","hash":{},"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":13,"column":47}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link-list")||(depth0 && lookupProperty(depth0,"detail-link-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"mixes") : depth0),"Mixes In",{"name":"detail-link-list","hash":{},"data":data,"loc":{"start":{"line":14,"column":3},"end":{"line":14,"column":40}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-text")||(depth0 && lookupProperty(depth0,"detail-text"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"deprecated") : depth0),"Deprecated",{"name":"detail-text","hash":{},"data":data,"loc":{"start":{"line":15,"column":3},"end":{"line":15,"column":42}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link-list")||(depth0 && lookupProperty(depth0,"detail-link-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"author") : depth0),"Author",{"name":"detail-link-list","hash":{},"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":16,"column":39}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-text")||(depth0 && lookupProperty(depth0,"detail-text"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"copyright") : depth0),"Copyright",{"name":"detail-text","hash":{},"data":data,"loc":{"start":{"line":17,"column":3},"end":{"line":17,"column":40}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-text")||(depth0 && lookupProperty(depth0,"detail-text"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"license") : depth0),"License",{"name":"detail-text","hash":{},"data":data,"loc":{"start":{"line":18,"column":3},"end":{"line":18,"column":36}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-source")||(depth0 && lookupProperty(depth0,"detail-source"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"hasSource") : depth0),(depth0 != null ? lookupProperty(depth0,"options") : depth0),(depth0 != null ? lookupProperty(depth0,"source") : depth0),(depth0 != null ? lookupProperty(depth0,"sourcelink") : depth0),{"name":"detail-source","hash":{},"data":data,"loc":{"start":{"line":19,"column":3},"end":{"line":19,"column":56}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link-list")||(depth0 && lookupProperty(depth0,"detail-link-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"tutorials") : depth0),"Tutorials",{"name":"detail-link-list","hash":{},"data":data,"loc":{"start":{"line":20,"column":3},"end":{"line":20,"column":45}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-link-list")||(depth0 && lookupProperty(depth0,"detail-link-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"see") : depth0),"See",{"name":"detail-link-list","hash":{},"data":data,"loc":{"start":{"line":21,"column":3},"end":{"line":21,"column":33}}}))
    + "\n			"
    + alias3((lookupProperty(helpers,"detail-text-list")||(depth0 && lookupProperty(depth0,"detail-text-list"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"todo") : depth0),"To Do",{"name":"detail-text-list","hash":{},"data":data,"loc":{"start":{"line":22,"column":3},"end":{"line":22,"column":36}}}))
    + "\n		</form>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hasDetails") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/example", this["tmpl"]["tag/example"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Examples","callout-example",{"name":"callout","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":17,"column":12}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"examples") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":16,"column":10}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"caption") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "		<div class=\"example-code\">\n			<pre class=\"prettyprint source language-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lang") || (depth0 != null ? lookupProperty(depth0,"lang") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":51}}}) : helper)))
    + "\"><code class=\"language-"
    + alias4(((helper = (helper = lookupProperty(helpers,"lang") || (depth0 != null ? lookupProperty(depth0,"lang") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lang","hash":{},"data":data,"loc":{"start":{"line":8,"column":75},"end":{"line":8,"column":83}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data,"loc":{"start":{"line":8,"column":85},"end":{"line":8,"column":93}}}) : helper)))
    + "</code></pre>\n		</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"run") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":15,"column":9}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"example-caption\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"caption") || (depth0 != null ? lookupProperty(depth0,"caption") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"caption","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":44}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<p class=\"example-run\">\n			<input type=\"hidden\" value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"code","hash":{},"data":data,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":39}}}) : helper)))
    + "\">\n			<button type=\"button\" class=\"btn btn-secondary code-run\"><i class=\"ph ph-play\"></i> Run</button>\n		</p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"examples") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":18,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/exceptions", this["tmpl"]["tag/exceptions"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Throws","callout-danger",{"name":"callout","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":13,"column":13}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"details-form exceptions\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"exceptions") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</form>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"row mb-2\">\n					<label class=\"col-sm-3 col-form-label exceptions-type\">"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":6,"column":60},"end":{"line":6,"column":79}}}))
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-plaintext exceptions-description\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":8,"column":65},"end":{"line":8,"column":82}}}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"exceptions") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/fires", this["tmpl"]["tag/fires"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Fires","callout-warning",{"name":"callout","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":13,"column":13}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"details-form fires\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fires") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</form>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"row mb-2\">\n					<label class=\"col-sm-3 col-form-label fires-event\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":6,"column":56},"end":{"line":6,"column":66}}}) : helper))) != null ? stack1 : "")
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-plaintext fires-summary\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":8,"column":56},"end":{"line":8,"column":69}}}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"fires") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/param", this["tmpl"]["tag/param"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"child") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":5,"column":12}}})) != null ? stack1 : "")
    + "	<table class=\"params table table-striped\">\n		<thead>\n		<tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"paramsHasNames") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":11,"column":10}}})) != null ? stack1 : "")
    + "			<th>Type</th>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"paramsHasAttributes") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":15,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"paramsHasDefaults") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":18,"column":10}}})) != null ? stack1 : "")
    + "			<th class=\"last\">Description</th>\n		</tr>\n		</thead>\n		<tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"params") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":44,"column":11}}})) != null ? stack1 : "")
    + "		</tbody>\n	</table>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"child") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":1},"end":{"line":49,"column":12}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"callout callout-info\">\n	<h5><i class=\"ph ph-sliders\"></i> Parameters</h5>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "				<th>Name</th>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<th>Attributes</th>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<th>Default</th>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"paramsHasNames") : depths[1]),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "				<td>"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":28,"column":27}}}))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"paramsHasAttributes") : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":31,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"paramsHasDefaults") : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "				<td class=\"last\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"params") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":5},"end":{"line":41,"column":12}}})) != null ? stack1 : "")
    + "				</td>\n			</tr>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td><code>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":26,"column":15},"end":{"line":26,"column":23}}}) : helper)))
    + "</code></td>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td class=\"attributes\">"
    + container.escapeExpression((lookupProperty(helpers,"param-attribs")||(depth0 && lookupProperty(depth0,"param-attribs"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"param-attribs","hash":{},"data":data,"loc":{"start":{"line":30,"column":28},"end":{"line":30,"column":50}}}))
    + "</td>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"defaultvalue") || (depth0 != null ? lookupProperty(depth0,"defaultvalue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"defaultvalue","hash":{},"data":data,"loc":{"start":{"line":33,"column":9},"end":{"line":33,"column":25}}}) : helper)))
    + "</td>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"tag/param"),depth0,{"name":"tag/param","hash":{"child":true},"data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"params") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("tag/prop", this["tmpl"]["tag/prop"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"child") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":5,"column":12}}})) != null ? stack1 : "")
    + "	<table class=\"params table table-striped\">\n		<thead>\n		<tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"propertiesHasNames") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":3},"end":{"line":11,"column":10}}})) != null ? stack1 : "")
    + "			<th>Type</th>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"propertiesHasAttributes") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":15,"column":10}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"propertiesHasDefaults") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":18,"column":10}}})) != null ? stack1 : "")
    + "			<th class=\"last\">Description</th>\n		</tr>\n		</thead>\n		<tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":44,"column":11}}})) != null ? stack1 : "")
    + "		</tbody>\n	</table>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"child") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":1},"end":{"line":49,"column":12}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"callout callout-info\">\n	<h5><i class=\"ph ph-list-dashes\"></i> Properties</h5>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "				<th>Name</th>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "				<th>Attributes</th>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<th>Default</th>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"propertiesHasNames") : depths[1]),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "				<td>"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":28,"column":27}}}))
    + "</td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"propertiesHasAttributes") : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":31,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"propertiesHasDefaults") : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "				<td class=\"last\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":5},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":5},"end":{"line":41,"column":12}}})) != null ? stack1 : "")
    + "				</td>\n			</tr>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td><code>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":26,"column":15},"end":{"line":26,"column":23}}}) : helper)))
    + "</code></td>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td class=\"attributes\">"
    + container.escapeExpression((lookupProperty(helpers,"param-attribs")||(depth0 && lookupProperty(depth0,"param-attribs"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"param-attribs","hash":{},"data":data,"loc":{"start":{"line":30,"column":28},"end":{"line":30,"column":50}}}))
    + "</td>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"defaultvalue") || (depth0 != null ? lookupProperty(depth0,"defaultvalue") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"defaultvalue","hash":{},"data":data,"loc":{"start":{"line":33,"column":9},"end":{"line":33,"column":25}}}) : helper)))
    + "</td>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":37,"column":6},"end":{"line":37,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"tag/prop"),depth0,{"name":"tag/prop","hash":{"child":true},"data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    return "</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"properties") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":50,"column":7}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("tag/requires", this["tmpl"]["tag/requires"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Requires","callout-warning",{"name":"callout","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":13,"column":13}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"details-form requires\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"requires") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</form>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"row mb-2\">\n					<label class=\"col-sm-3 col-form-label requires-type\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":6,"column":58},"end":{"line":6,"column":68}}}) : helper))) != null ? stack1 : "")
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-plaintext requires-summary\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":8,"column":59},"end":{"line":8,"column":72}}}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"requires") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/returns", this["tmpl"]["tag/returns"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"callout")||(depth0 && lookupProperty(depth0,"callout"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Returns","callout-success",{"name":"callout","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":13,"column":13}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<form class=\"details-form returns\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"returns") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":3},"end":{"line":11,"column":12}}})) != null ? stack1 : "")
    + "		</form>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"row mb-2\">\n					<label class=\"col-sm-3 col-form-label returns-type\">"
    + container.escapeExpression((lookupProperty(helpers,"type-names")||(depth0 && lookupProperty(depth0,"type-names"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"type-names","hash":{},"data":data,"loc":{"start":{"line":6,"column":57},"end":{"line":6,"column":76}}}))
    + "</label>\n					<div class=\"col-sm-9\">\n						<div class=\"form-control-plaintext returns-description\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":8,"column":62},"end":{"line":8,"column":79}}}) : helper))) != null ? stack1 : "")
    + "</div>\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"returns") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":14,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("tag/summary", this["tmpl"]["tag/summary"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"summary\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":1,"column":36},"end":{"line":1,"column":49}}}) : helper))) != null ? stack1 : "")
    + "</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"summary") : depth0),{"name":"if","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":62}}})) != null ? stack1 : "");
},"useData":true}));

this["tmpl"]["doclet"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    return "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":17,"column":11}}})) != null ? stack1 : "");
},"useData":true});

this["tmpl"]["global"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"primary",{"name":"content","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":13,"column":11}}})) != null ? stack1 : "");
},"useData":true});

this["tmpl"]["list"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||alias2).call(alias1,"primary",{"name":"content","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||alias2).call(alias1,"secondary",{"name":"content","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":1},"end":{"line":23,"column":13}}})) != null ? stack1 : "");
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<h2>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"primaryTitleHTML") : stack1), depth0)) != null ? stack1 : "")
    + "</h2>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<article class=\"secondary\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"members") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":3},"end":{"line":21,"column":10}}})) != null ? stack1 : "")
    + "		</article>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<dl class=\"symbol\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"members") : stack1),{"name":"each","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":5},"end":{"line":19,"column":14}}})) != null ? stack1 : "")
    + "				</dl>\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "						"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(data && lookupProperty(data,"first")),{"name":"unless","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":40}}})) != null ? stack1 : "")
    + "\n						"
    + container.escapeExpression((lookupProperty(helpers,"symbol")||(depth0 && lookupProperty(depth0,"symbol"))||container.hooks.helperMissing).call(alias1,depth0,{"name":"symbol","hash":{"options":(depths[1] != null ? lookupProperty(depths[1],"options") : depths[1]),"list":true},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":50}}}))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "<hr/>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(0, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":24,"column":11}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["tmpl"]["module"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"primary",{"name":"content","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":26,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<dl class=\"symbol\">\n			<dt class=\"symbol-title "
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":12,"column":27},"end":{"line":12,"column":35}}}) : helper)))
    + "\"></dt>\n			<dd class=\"symbol-details "
    + alias4(((helper = (helper = lookupProperty(helpers,"kind") || (depth0 != null ? lookupProperty(depth0,"kind") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":13,"column":29},"end":{"line":13,"column":37}}}) : helper)))
    + "\">\n				<div class=\"symbol-details-inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/description"),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"tag/description","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"modules") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":5},"end":{"line":20,"column":14}}})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/requires"),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"tag/requires","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"tag/details"),(depth0 != null ? lookupProperty(depth0,"doclet") : depth0),{"name":"tag/details","hash":{"options":(depth0 != null ? lookupProperty(depth0,"options") : depth0)},"data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "				</div>\n			</dd>\n		</dl>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"classdesc") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":19,"column":13}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"tag/description"),depth0,{"name":"tag/description","data":data,"indent":"\t\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":28,"column":11}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["tmpl"]["readme"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<section class=\"readme-section\">\n			<article>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"contents") : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n		</section>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":16,"column":11}}})) != null ? stack1 : "");
},"useData":true});

this["tmpl"]["source"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<section class=\"source-section\">\n			<article>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"contents") : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n			<pre class=\"prettyprint source language-javascript"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"options") : depth0)) != null ? lookupProperty(stack1,"linenums") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":53},"end":{"line":13,"column":97}}})) != null ? stack1 : "")
    + "\"><code class=\"language-javascript\">"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"code") : stack1), depth0)) != null ? stack1 : "")
    + "</code></pre>\n		</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " line-numbers";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":17,"column":11}}})) != null ? stack1 : "");
},"useData":true});

this["tmpl"]["tutorial"] = Handlebars.template({"0":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = (lookupProperty(helpers,"content")||(depth0 && lookupProperty(depth0,"content"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"content",{"name":"content","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":1},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\n";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<section class=\"tutorial-section\">\n			<article>"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"contents") : stack1), depth0)) != null ? stack1 : "")
    + "</article>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":22,"column":10}}})) != null ? stack1 : "")
    + "		</section>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"related-tutorials\">\n					<h2><i class=\"ph ph-book-open\"></i> Related Tutorials</h2>\n					<ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"doclet") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":19,"column":15}}})) != null ? stack1 : "")
    + "					</ul>\n				</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "							<li>"
    + container.escapeExpression((lookupProperty(helpers,"linkto")||(depth0 && lookupProperty(depth0,"linkto"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"longname") : depth0),{"name":"linkto","hash":{},"data":data,"loc":{"start":{"line":18,"column":11},"end":{"line":18,"column":30}}}))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"extend")||(depth0 && lookupProperty(depth0,"extend"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"site/layout",{"name":"extend","hash":{},"fn":container.program(0, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":0},"end":{"line":26,"column":11}}})) != null ? stack1 : "");
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["tmpl"];}