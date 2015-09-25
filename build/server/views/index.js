var jade = require('jade/runtime');
module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (locale, imports) {
var jade_indent = [];
buf.push("<!DOCTYPE html>\n<html" + (jade.attr("lang", "" + (locale) + "", true, true)) + ">\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge, chrome=1\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Cozy - Contacts</title>\n    <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/apps/contacts/apple-touch-icon-57x57.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/apps/contacts/apple-touch-icon-60x60.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/apps/contacts/apple-touch-icon-72x72.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/apps/contacts/apple-touch-icon-76x76.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/apps/contacts/apple-touch-icon-114x114.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/apps/contacts/apple-touch-icon-120x120.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/apps/contacts/apple-touch-icon-144x144.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/apps/contacts/apple-touch-icon-152x152.png\">\n    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apps/contacts/apple-touch-icon-180x180.png\">\n    <link rel=\"icon\" type=\"image/png\" href=\"/apps/contacts/favicon-32x32.png\" sizes=\"32x32\">\n    <link rel=\"icon\" type=\"image/png\" href=\"/apps/contacts/favicon-194x194.png\" sizes=\"194x194\">\n    <link rel=\"icon\" type=\"image/png\" href=\"/apps/contacts/favicon-96x96.png\" sizes=\"96x96\">\n    <link rel=\"icon\" type=\"image/png\" href=\"/apps/contacts/android-chrome-192x192.png\" sizes=\"192x192\">\n    <link rel=\"icon\" type=\"image/png\" href=\"/apps/contacts/favicon-16x16.png\" sizes=\"16x16\">\n    <link rel=\"manifest\" href=\"/apps/contacts/manifest.json\">\n    <link rel=\"shortcut icon\" href=\"/apps/contacts/favicon.ico\">\n    <meta name=\"msapplication-TileColor\" content=\"#ff9c56\">\n    <meta name=\"msapplication-TileImage\" content=\"/apps/contacts/mstile-144x144.png\">\n    <meta name=\"msapplication-config\" content=\"/apps/contacts/browserconfig.xml\">\n    <meta name=\"theme-color\" content=\"#ff9c56\">\n    <link rel=\"stylesheet\" href=\"/fonts/fonts.css\">\n    <link rel=\"stylesheet\" href=\"stylesheets/app.css\">\n  </head>\n  <body>\n    <div role=\"application\" aria-busy=\"true\"></div>\n    <script src=\"scripts/vendor.js\"></script>\n    <script>\n      require.register('imports', function(exports, require, module) {\n        module.exports = " + (((jade_interp = imports) == null ? '' : jade_interp)) + "\n      })\n    </script>\n    <script src=\"scripts/app.js\" onload=\"require('initialize');\"></script>\n  </body>\n</html>");}.call(this,"locale" in locals_for_with?locals_for_with.locale:typeof locale!=="undefined"?locale:undefined,"imports" in locals_for_with?locals_for_with.imports:typeof imports!=="undefined"?imports:undefined));;return buf.join("");
}
