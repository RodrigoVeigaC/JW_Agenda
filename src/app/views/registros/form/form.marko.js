// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/jw-agenda$1.0.0/src/app/views/registros/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>formulario</title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"viewport-fit=cover, width=device-width, \r&#10;        initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\"><link rel=\"stylesheet\" href=\"/estatico/css/form.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><h3>Formulário de registro</h3></header><form action=\"/lista\" method=\"post\">");

  if (data.registro.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.registro.id) +
      "\"></div>");
  }

  out.w("<table id=\"formulario\" align=\"center\"><div><tr><td><label for=\"telefone\">Telefone:</label></td><td><input type=\"text\" id=\"telefone\" name=\"telefone\" value=\"" +
    marko_escapeXmlAttr(data.registro.telefone) +
    "\" placeholder=\"Telefone\"></td></tr></div><div><tr><td><label for=\"status\">Status da ligação:</label></td><td><select id=\"status\" name=\"status\" value=\"" +
    marko_escapeXmlAttr(data.registro.status) +
    "\" placeholder=\"Selecione\"><option value=\"recusada\"> Recusada </option><option value=\"aceita\"> Aceita </option><option value=\"inexistente\"> Número Inexistente </option><option value=\"perdida\"> Perdida </option></select></td></tr> </div><div><tr><td><label for=\"nome\">Nome do morador:</label></td><td><input type=\"text\" id=\"nome\" name=\"nome\" value=\"" +
    marko_escapeXmlAttr(data.registro.nome) +
    "\" placeholder=\"Nome\"></td></tr></div><div><tr><td><label for=\"assunto\">Assunto:</label></td><td><input type=\"text\" id=\"assunto\" name=\"assunto\" value=\"" +
    marko_escapeXmlAttr(data.registro.assunto) +
    "\" placeholder=\"Assunto\"></td></tr></div></table><div id=\"center\" align=\"center\"><div class=\"divTextarea\"><label for=\"textos_b\">Textos Bíblicos Usados:</label><br><br><textarea cols=\"20\" rows=\"10\" id=\"textos_b\" name=\"textos_b\">" +
    marko_escapeXml(data.registro.textos_b) +
    "</textarea></div><div class=\"divTextarea\"><label for=\"perguntas\">Perguntas:</label><br><br><textarea cols=\"20\" rows=\"10\" id=\"perguntas\" name=\"perguntas\">" +
    marko_escapeXml(data.registro.perguntas) +
    "</textarea></div><div class=\"divTextarea\"><label for=\"assunto_r\">Assunto da Revisita:</label><br><br><textarea cols=\"20\" rows=\"10\" id=\"assunto_r\" name=\"assunto_r\">" +
    marko_escapeXml(data.registro.assunto_r) +
    "</textarea></div><div class=\"divTextarea\"><label for=\"observacoes\">Observações:</label><br><br><textarea cols=\"20\" rows=\"10\" id=\"observacoes\" name=\"observacoes\">" +
    marko_escapeXml(data.registro.observacoes) +
    "</textarea></div><input id=\"formSubmit\" type=\"submit\" value=\"Salvar\"></div></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "64");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/jw-agenda$1.0.0/src/app/views/registros/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
