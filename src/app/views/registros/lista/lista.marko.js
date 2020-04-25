// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/jw-agenda$1.0.0/src/app/views/registros/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Lista de Números</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"viewport-fit=cover, width=device-width, \r&#10;        initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\"><link rel=\"stylesheet\" href=\"/estatico/css/lista.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><h3> Lista de Registros </h3></header><img id=\"legenda\" src=\"/estatico/img/legenda.png\"><table id=\"registros\" cellpadding=\"3px\"><div id=\"tableHeader\"><tr><th>ID</th><th>Telefone</th><th>Status</th><th>Editar</th></tr></div><div id=\"tableLine\">");

  var for__18 = 0;

  marko_forEach(data.registros, function(registro) {
    var keyscope__19 = "[" + ((for__18++) + "]");

    out.w("<tr id=\"registro_" +
      marko_escapeXmlAttr(registro.id) +
      "\"> <td>" +
      marko_escapeXml(registro.id) +
      "</td><td>" +
      marko_escapeXml(registro.telefone) +
      "</td><td><img src=\"/estatico/img/" +
      marko_escapeXmlAttr(registro.status) +
      ".png\" id=\"tableIcon\"> </td><td><a href=\"/lista/form/" +
      marko_escapeXmlAttr(registro.id) +
      "\">Editar</a></td> </tr>");
  });

  out.w("</div></table> <button id=\"btnForm\"></button><script src=\"/estatico/js/btnForm.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "29");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/jw-agenda$1.0.0/src/app/views/registros/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
