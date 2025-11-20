(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobwebx-markdown'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobwebx-markdown'.");
    }
    globalThis['kobweb-frontend-kobwebx-markdown'] = factory(typeof globalThis['kobweb-frontend-kobwebx-markdown'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobwebx-markdown'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.mc;
  var initMetadataForClass = kotlin_kotlin.$_$.jb;
  var getKClass = kotlin_kotlin.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(MarkdownContext, 'MarkdownContext');
  //endregion
  var com_varabyte_kobwebx_markdown_MarkdownContext$stable;
  function MarkdownContext(path, frontMatter) {
    this.path_1 = path;
    this.frontMatter_1 = frontMatter;
  }
  protoOf(MarkdownContext).get_path_wos8ry_k$ = function () {
    return this.path_1;
  };
  protoOf(MarkdownContext).get_frontMatter_iz7ndr_k$ = function () {
    return this.frontMatter_1;
  };
  function get_markdown(_this__u8e3s4) {
    // Inline function 'com.varabyte.kobweb.core.data.get' call
    return _this__u8e3s4.get_data_wokkxf_k$().get_rskua5_k$(getKClass(MarkdownContext));
  }
  //region block: init
  com_varabyte_kobwebx_markdown_MarkdownContext$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MarkdownContext;
  _.$_$.b = get_markdown;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobwebx-markdown.js.map
