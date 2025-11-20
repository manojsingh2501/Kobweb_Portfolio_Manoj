(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-foundation.js', './kobweb-frontend-kobweb-compose.js', './kotlin-kotlin-stdlib.js', './html-html-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-foundation.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kotlin-kotlin-stdlib.js'), require('./html-html-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kotlinbs-bootstrap'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kotlinbs-bootstrap'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kotlinbs-bootstrap'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kotlinbs-bootstrap'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinbs-bootstrap'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinbs-bootstrap'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinbs-bootstrap'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kotlinbs-bootstrap'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kotlinbs-bootstrap'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kotlinbs-bootstrap'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kotlinbs-bootstrap'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kotlinbs-bootstrap'.");
    }
    globalThis['kotlinbs-bootstrap'] = factory(typeof globalThis['kotlinbs-bootstrap'] === 'undefined' ? {} : globalThis['kotlinbs-bootstrap'], globalThis['kobweb-frontend-silk-foundation'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['html-html-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kobweb-frontend-compose-html-ext']);
  }
}(function (_, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_kotlin, kotlin_org_jetbrains_compose_html_html_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var SilkLayer_BASE_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n2;
  var add = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p4;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var copyToArray = kotlin_kotlin.$_$.y6;
  var thenIf = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b4;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.e6;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.l7;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Unit_getInstance = kotlin_kotlin.$_$.n4;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var borderRadius_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.r6;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.p7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var protoOf = kotlin_kotlin.$_$.mc;
  var initMetadataForObject = kotlin_kotlin.$_$.ob;
  var toString = kotlin_kotlin.$_$.pc;
  var toString_0 = kotlin_kotlin.$_$.ah;
  var disabled = kotlin_org_jetbrains_compose_html_html_core.$_$.s2;
  var VOID = kotlin_kotlin.$_$.f;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var split = kotlin_kotlin.$_$.ne;
  var toList = kotlin_kotlin.$_$.i9;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var I = kotlin_org_jetbrains_compose_html_html_core.$_$.f7;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n4;
  var Nav = kotlin_org_jetbrains_compose_html_html_core.$_$.i7;
  var End = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t3;
  var Start = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u3;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.q7;
  var Form = kotlin_org_jetbrains_compose_html_html_core.$_$.w6;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.d7;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m4;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.q6;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.t6;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b4;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var checkIndexOverflow = kotlin_kotlin.$_$.j6;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.h7;
  var initMetadataForClass = kotlin_kotlin.$_$.jb;
  var attrsModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v3;
  var H5 = kotlin_org_jetbrains_compose_html_html_core.$_$.b7;
  var KProperty1 = kotlin_kotlin.$_$.dd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.gb;
  var lazy = kotlin_kotlin.$_$.sg;
  var ElementBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.u6;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.e;
  var charSequenceLength = kotlin_kotlin.$_$.ya;
  var disabled_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.t2;
  var readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.u2;
  var required = kotlin_org_jetbrains_compose_html_html_core.$_$.x2;
  var Label = kotlin_org_jetbrains_compose_html_html_core.$_$.g7;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.e7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var readOnly_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.v2;
  var disabled_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var required_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var TextArea = kotlin_org_jetbrains_compose_html_html_core.$_$.o7;
  var objectCreate = kotlin_kotlin.$_$.lc;
  var hashCode = kotlin_kotlin.$_$.ib;
  var equals = kotlin_kotlin.$_$.cb;
  var THROW_IAE = kotlin_kotlin.$_$.zf;
  var enumEntries = kotlin_kotlin.$_$.na;
  var Enum = kotlin_kotlin.$_$.nf;
  var listOf = kotlin_kotlin.$_$.y7;
  var listOf_0 = kotlin_kotlin.$_$.z7;
  var getBooleanHashCode = kotlin_kotlin.$_$.db;
  var getStringHashCode = kotlin_kotlin.$_$.hb;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d4;
  var initMetadataForInterface = kotlin_kotlin.$_$.mb;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.w;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$BSButtonKt, 'ComposableSingletons$BSButtonKt');
  initMetadataForObject(ComposableSingletons$BSNavBarKt, 'ComposableSingletons$BSNavBarKt');
  initMetadataForClass(ToastGroupScope, 'ToastGroupScope', ToastGroupScope);
  initMetadataForClass(Svg$1, VOID, VOID, VOID, [ElementBuilder]);
  initMetadataForClass(Path$1, VOID, VOID, VOID, [ElementBuilder]);
  initMetadataForClass(BSRadioGroupScope, 'BSRadioGroupScope', BSRadioGroupScope);
  initMetadataForClass(BSBorderRadius, 'BSBorderRadius');
  initMetadataForClass(BackgroundStyle, 'BackgroundStyle', VOID, Enum);
  initMetadataForClass(BadgeVariant, 'BadgeVariant', VOID, Enum);
  initMetadataForClass(InputSize, 'InputSize', VOID, Enum);
  initMetadataForClass(InputValidation, 'InputValidation', InputValidation);
  initMetadataForClass(ButtonBadge, 'ButtonBadge');
  initMetadataForClass(ButtonCustomization, 'ButtonCustomization', ButtonCustomization);
  initMetadataForClass(ButtonSize, 'ButtonSize', VOID, Enum);
  initMetadataForClass(ButtonType, 'ButtonType', VOID, Enum);
  initMetadataForClass(ButtonVariant, 'ButtonVariant', VOID, Enum);
  initMetadataForClass(NavBarBrand, 'NavBarBrand');
  initMetadataForClass(NavBarButton, 'NavBarButton');
  initMetadataForClass(NavBarExpand, 'NavBarExpand', VOID, Enum);
  initMetadataForClass(NavBarInputField, 'NavBarInputField');
  initMetadataForClass(NavBarOffcanvas, 'NavBarOffcanvas');
  initMetadataForInterface(NavItem, 'NavItem');
  initMetadataForClass(NavDropdown, 'NavDropdown', VOID, VOID, [NavItem]);
  initMetadataForClass(NavDropdownItem, 'NavDropdownItem');
  initMetadataForClass(NavLink, 'NavLink', VOID, VOID, [NavItem]);
  initMetadataForClass(OffcanvasPlacement, 'OffcanvasPlacement', VOID, Enum);
  initMetadataForObject(UniqueIdGenerator, 'UniqueIdGenerator');
  //endregion
  function initBuildScriptLayers(ctx) {
    add(ctx.get_stylesheet_hk204p_k$().get_cssLayers_teky2k_k$(), ['kotlin-bootstrap'], SilkLayer_BASE_getInstance());
  }
  function BSBadge(modifier, text, fontFamily, fontSize, fontWeight, style, variant, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var fontFamily_0 = {_v: fontFamily};
    var fontSize_0 = {_v: fontSize};
    var fontWeight_0 = {_v: fontWeight};
    var style_0 = {_v: style};
    var variant_0 = {_v: variant};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1073610572);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(fontFamily_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(fontSize_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(fontWeight_0._v) : $composer_0.changedInstance_s1wkiy_k$(fontWeight_0._v)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = style_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 131072;
      } else {
        tmp = 65536;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = variant_0._v;
      if (tmp_2.changed_kpusro_k$(tmpEnum_0 == null ? -1 : tmpEnum_0.get_ordinal_ip24qg_k$())) {
        tmp_1 = 1048576;
      } else {
        tmp_1 = 524288;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($dirty & 599187) === 599186) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 4) === 0)) {
        fontFamily_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        fontSize_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        fontWeight_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        style_0._v = BackgroundStyle_Primary_getInstance();
      }
      if (!(($default & 64) === 0)) {
        variant_0._v = BadgeVariant_Regular_getInstance();
      }
      var tmp_3 = classNames(modifier_0._v, [style_0._v.get_value_j01efc_k$()]);
      var tmp_4 = !variant_0._v.equals(BadgeVariant_Regular_getInstance()) && !variant_0._v.equals(BadgeVariant_Straight_getInstance());
      var tmp0_safe_receiver = variant_0._v.get_classes_fds01p_k$();
      var tmp_5;
      if (tmp0_safe_receiver == null) {
        tmp_5 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_6 = Companion_getInstance();
        // Inline function 'kotlin.collections.toTypedArray' call
        var tmp$ret$0 = copyToArray(tmp0_safe_receiver);
        tmp_5 = classNames(tmp_6, tmp$ret$0.slice());
      }
      var tmp1_elvis_lhs = tmp_5;
      var tmp_7 = toAttrs(thenIf(thenIf(thenIf(tmp_3, tmp_4, tmp1_elvis_lhs == null ? Companion_getInstance() : tmp1_elvis_lhs), !variant_0._v.equals(BadgeVariant_Empty_getInstance()), classNames(Companion_getInstance(), ['badge'])), variant_0._v.equals(BadgeVariant_Straight_getInstance()), borderRadius(Companion_getInstance(), get_px(0))));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-669961174, true, BSBadge$lambda(variant_0, fontFamily_0, fontSize_0, fontWeight_0, text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_8 = value;
      } else {
        tmp_8 = it;
      }
      var tmp_9 = tmp_8;
      var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp_7, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver_0 = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.updateScope_t8jcf_k$(BSBadge$lambda_0(modifier_0, text, fontFamily_0, fontSize_0, fontWeight_0, style_0, variant_0, $changed, $default));
    }
  }
  function BSBadge$lambda($variant, $fontFamily, $fontSize, $fontWeight, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (!$variant._v.equals(BadgeVariant_Empty_getInstance())) {
        var tmp = Companion_getInstance();
        var tmp_0 = !($fontFamily._v == null);
        var tmp0_safe_receiver = $fontFamily._v;
        var tmp_1;
        if (tmp0_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_1 = fontFamily(Companion_getInstance(), [tmp0_safe_receiver]);
        }
        var tmp1_elvis_lhs = tmp_1;
        var tmp_2 = thenIf(tmp, tmp_0, tmp1_elvis_lhs == null ? Companion_getInstance() : tmp1_elvis_lhs);
        var tmp_3 = !($fontSize._v == null);
        var tmp2_safe_receiver = $fontSize._v;
        var tmp_4;
        if (tmp2_safe_receiver == null) {
          tmp_4 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_4 = fontSize(Companion_getInstance(), tmp2_safe_receiver);
        }
        var tmp3_elvis_lhs = tmp_4;
        var tmp_5 = thenIf(tmp_2, tmp_3, tmp3_elvis_lhs == null ? Companion_getInstance() : tmp3_elvis_lhs);
        var tmp_6 = !($fontWeight._v == null);
        var tmp4_safe_receiver = $fontWeight._v;
        var tmp_7;
        if (tmp4_safe_receiver == null) {
          tmp_7 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_7 = fontWeight(Companion_getInstance(), tmp4_safe_receiver);
        }
        var tmp5_elvis_lhs = tmp_7;
        var tmp6_modifier = thenIf(tmp_5, tmp_6, tmp5_elvis_lhs == null ? Companion_getInstance() : tmp5_elvis_lhs);
        SpanText($text, tmp6_modifier, $composer_0, 0, 0);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSBadge$lambda_0($modifier, $text, $fontFamily, $fontSize, $fontWeight, $style, $variant, $$changed, $$default) {
    return function ($composer, $force) {
      BSBadge($modifier._v, $text, $fontFamily._v, $fontSize._v, $fontWeight._v, $style._v, $variant._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BSButton(modifier, id_0, text, variant, type, size, borderRadius, customization, disabled, loading, loadingText, badge, icon, onClick_0, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var id_1 = {_v: id_0};
    var variant_0 = {_v: variant};
    var type_0 = {_v: type};
    var size_0 = {_v: size};
    var borderRadius_1 = {_v: borderRadius};
    var customization_0 = {_v: customization};
    var disabled_0 = {_v: disabled};
    var loading_0 = {_v: loading};
    var loadingText_0 = {_v: loadingText};
    var badge_0 = {_v: badge};
    var icon_0 = {_v: icon};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(113155494);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(id_1._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = variant_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 2048;
      } else {
        tmp = 1024;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = type_0._v;
      if (tmp_2.changed_kpusro_k$(tmpEnum_0 == null ? -1 : tmpEnum_0.get_ordinal_ip24qg_k$())) {
        tmp_1 = 16384;
      } else {
        tmp_1 = 8192;
      }
      $dirty = $dirty | tmp_1;
    }
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0) {
      var tmp_3;
      var tmp_4 = $composer_0;
      var tmpEnum_1 = size_0._v;
      if (tmp_4.changed_kpusro_k$(tmpEnum_1 == null ? -1 : tmpEnum_1.get_ordinal_ip24qg_k$())) {
        tmp_3 = 131072;
      } else {
        tmp_3 = 65536;
      }
      $dirty = $dirty | tmp_3;
    }
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(borderRadius_1._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(customization_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(disabled_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(loading_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(loadingText_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(badge_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(icon_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(onClick_0) ? 2048 : 1024);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 1171) === 1170) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        id_1._v = null;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = ButtonVariant_Primary_getInstance();
      }
      if (!(($default & 16) === 0)) {
        type_0._v = ButtonType_Button_getInstance();
      }
      if (!(($default & 32) === 0)) {
        size_0._v = ButtonSize_Default_getInstance();
      }
      if (!(($default & 64) === 0)) {
        borderRadius_1._v = null;
      }
      if (!(($default & 128) === 0)) {
        customization_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        disabled_0._v = false;
      }
      if (!(($default & 512) === 0)) {
        loading_0._v = false;
      }
      if (!(($default & 1024) === 0)) {
        loadingText_0._v = null;
      }
      if (!(($default & 2048) === 0)) {
        badge_0._v = null;
      }
      if (!(($default & 4096) === 0)) {
        icon_0._v = null;
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp0_elvis_lhs = id_1._v;
        var value = tmp0_elvis_lhs == null ? UniqueIdGenerator_getInstance().generateUniqueId_6z5ton_k$('button') : tmp0_elvis_lhs;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_5 = value;
      } else {
        tmp_5 = it;
      }
      var tmp_6 = tmp_5;
      var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var randomId = tmp0_group;
      var tmp_7 = id(Companion_getInstance().then_mmfvo6_k$(modifier_0._v), randomId);
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty1 & 7168) === 2048;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = BSButton$lambda(onClick_0);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_8 = value_0;
      } else {
        tmp_8 = it_0;
      }
      var tmp_9 = tmp_8;
      var tmp1_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_10 = onClick(tmp_7, tmp1_group);
      var tmp_11 = customization_0._v == null && !(borderRadius_1._v == null);
      var tmp0_safe_receiver = borderRadius_1._v;
      var tmp_12;
      if (tmp0_safe_receiver == null) {
        tmp_12 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_12 = borderRadius_0(Companion_getInstance(), tmp0_safe_receiver.get_topLeft_hl8stp_k$(), borderRadius_1._v.get_topRight_n1oya8_k$(), borderRadius_1._v.get_bottomRight_3mats8_k$(), borderRadius_1._v.get_bottomLeft_n0ywkb_k$());
      }
      var tmp1_elvis_lhs = tmp_12;
      var tmp_13 = thenIf(tmp_10, tmp_11, tmp1_elvis_lhs == null ? Companion_getInstance() : tmp1_elvis_lhs);
      var tmp_14 = customization_0._v == null;
      var tmp_15 = Companion_getInstance();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_1 = variant_0._v.get_classes_fds01p_k$();
      var tmp$ret$10 = copyToArray(this_1);
      var tmp_16 = thenIf(classNames(thenIf(thenIf(tmp_13, tmp_14, classNames(tmp_15, arrayConcat([tmp$ret$10, [size_0._v.get_value_j01efc_k$()]]))), !(customization_0._v == null), classNames(Companion_getInstance(), [ButtonSize_Default_getInstance().get_value_j01efc_k$()])), ['d-flex', 'align-items-center']), !(badge_0._v == null), classNames(Companion_getInstance(), ['position-relative']));
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changedInstance_s1wkiy_k$(customization_0._v);
      // Inline function 'kotlin.let' call
      var it_1 = tmp0_0.rememberedValue_4dg93v_k$();
      var tmp_17;
      if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = BSButton$lambda_0(customization_0);
        tmp0_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_17 = value_1;
      } else {
        tmp_17 = it_1;
      }
      var tmp_18 = tmp_17;
      var tmp2_group = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_19 = styleModifier(tmp_16, tmp2_group);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1746271574);
      var tmp0_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!(!!(($dirty & 57344) === 16384 | ($dirty & 234881024) === 67108864) | ($dirty & 1879048192) === 536870912);
      // Inline function 'kotlin.let' call
      var it_2 = tmp0_1.rememberedValue_4dg93v_k$();
      var tmp_20;
      if (invalid_1 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_2 = BSButton$lambda_1(type_0, disabled_0, loading_0);
        tmp0_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_20 = value_2;
      } else {
        tmp_20 = it_2;
      }
      var tmp_21 = tmp_20;
      var tmp3_group = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_22 = toAttrs(tmp_19, tmp3_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(2137182560, true, BSButton$lambda_2(badge_0, loading_0, loadingText_0, icon_0, text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_3 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_23;
      if (invalid_2 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_3 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_3);
        tmp_23 = value_3;
      } else {
        tmp_23 = it_3;
      }
      var tmp_24 = tmp_23;
      var tmp0_2 = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_22, tmp0_2, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(BSButton$lambda_3(modifier_0, id_1, text, variant_0, type_0, size_0, borderRadius_1, customization_0, disabled_0, loading_0, loadingText_0, badge_0, icon_0, onClick_0, $changed, $changed1, $default));
    }
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$BSButtonKt$lambda$514861035$lambda($this$Span, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Loading...', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableSingletons$BSButtonKt() {
    ComposableSingletons$BSButtonKt_instance = this;
    var tmp = this;
    tmp.lambda$514861035__1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(514861035, false, ComposableSingletons$BSButtonKt$lambda$514861035$lambda));
  }
  protoOf(ComposableSingletons$BSButtonKt).get_lambda$514861035_z8h04y_k$ = function () {
    return this.lambda$514861035__1;
  };
  var ComposableSingletons$BSButtonKt_instance;
  function ComposableSingletons$BSButtonKt_getInstance() {
    if (ComposableSingletons$BSButtonKt_instance == null)
      new ComposableSingletons$BSButtonKt();
    return ComposableSingletons$BSButtonKt_instance;
  }
  function BSButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function BSButton$lambda_0($customization) {
    return function ($this$styleModifier) {
      var tmp;
      if (!($customization._v == null)) {
        var tmp0_safe_receiver = $customization._v.get_color_ipu8u2_k$();
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-color', tmp0_safe_receiver);
        }
        var tmp1_safe_receiver = $customization._v.get_backgroundColor_a0bggk_k$();
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-bg', tmp1_safe_receiver);
        }
        var tmp2_safe_receiver = $customization._v.get_borderColor_puk0tq_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-border-color', tmp2_safe_receiver);
        }
        var tmp3_safe_receiver = $customization._v.get_hoverColor_g4u38w_k$();
        if (tmp3_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-hover-color', tmp3_safe_receiver);
        }
        var tmp4_safe_receiver = $customization._v.get_hoverBackgroundColor_y7ragu_k$();
        if (tmp4_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-hover-bg', tmp4_safe_receiver);
        }
        var tmp5_safe_receiver = $customization._v.get_hoverBorderColor_9jlqpw_k$();
        if (tmp5_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-hover-border-color', tmp5_safe_receiver);
        }
        var tmp6_safe_receiver = $customization._v.get_activeColor_3x7qlo_k$();
        if (tmp6_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-active-color', tmp6_safe_receiver);
        }
        var tmp7_safe_receiver = $customization._v.get_activeBackgroundColor_ve13cq_k$();
        if (tmp7_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-active-bg', tmp7_safe_receiver);
        }
        var tmp8_safe_receiver = $customization._v.get_activeBorderColor_jnxv60_k$();
        if (tmp8_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-active-border-color', tmp8_safe_receiver);
        }
        var tmp9_safe_receiver = $customization._v.get_disabledColor_7tsgde_k$();
        if (tmp9_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-disabled-color', tmp9_safe_receiver);
        }
        var tmp10_safe_receiver = $customization._v.get_disabledBackgroundColor_w828cw_k$();
        if (tmp10_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-disabled-bg', tmp10_safe_receiver);
        }
        var tmp11_safe_receiver = $customization._v.get_disabledBorderColor_rywwry_k$();
        if (tmp11_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_npxg1h_k$('--bs-btn-disabled-border-color', tmp11_safe_receiver);
        }
        $this$styleModifier.property_wcrait_k$('--bs-btn-border-radius', $customization._v.get_borderRadius_quu3af_k$().get_value_j01efc_k$());
        $this$styleModifier.property_npxg1h_k$('--bs-btn-padding-x', $customization._v.get_horizontalPadding_lfhi70_k$());
        $this$styleModifier.property_npxg1h_k$('--bs-btn-padding-y', $customization._v.get_verticalPadding_xaupm6_k$());
        var tmp12_safe_receiver = $customization._v.get_fontFamily_ulphcs_k$();
        if (tmp12_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$styleModifier.property_wcrait_k$('--bs-btn-font-family', tmp12_safe_receiver);
        }
        $this$styleModifier.property_npxg1h_k$('--bs-btn-font-size', $customization._v.get_fontSize_pr9n47_k$());
        $this$styleModifier.property_wcrait_k$('--bs-btn-font-weight', $customization._v.get_fontWeight_wbif2o_k$().toString());
        $this$styleModifier.property_wcrait_k$('--bs-btn-line-height', toString($customization._v.get_lineHeight_spcmd8_k$()));
        $this$styleModifier.property_wcrait_k$('background', toString_0($customization._v.get_gradient_ubk7if_k$()));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BSButton$lambda_1($type, $disabled, $loading) {
    return function ($this$toAttrs) {
      $this$toAttrs.attr_w68641_k$('type', $type._v.get_value_j01efc_k$());
      var tmp;
      if ($disabled._v || $loading._v) {
        disabled($this$toAttrs);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BSButton$lambda$lambda($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('role', 'status');
    $this$toAttrs.attr_w68641_k$('aria-hidden', 'true');
    return Unit_getInstance();
  }
  function BSButton$lambda$lambda_0($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('role', 'status');
    $this$toAttrs.attr_w68641_k$('aria-hidden', 'true');
    return Unit_getInstance();
  }
  function BSButton$lambda_2($badge, $loading, $loadingText, $icon, $text) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(838073426);
      if (!($badge._v == null)) {
        var tmp = classNames($badge._v.get_modifier_t1pq5c_k$(), ['position-absolute', 'top-0', 'start-100', 'translate-middle']);
        var tmp_0 = $badge._v.get_text_wouvsm_k$();
        BSBadge(tmp, tmp_0, null, null, null, $badge._v.get_style_iyqetk_k$(), $badge._v.get_variant_56j34s_k$(), $composer_0, 0, 28);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_1;
      if ($loading._v) {
        $composer_0.startReplaceGroup_5hh8aj_k$(210941121);
        if (!($loadingText._v == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(210961736);
          var tmp_2 = classNames(margin(Companion_getInstance(), VOID, get_px(6)), ['spinner-border', 'spinner-border-sm']);
          $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_3;
          if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value = BSButton$lambda$lambda;
            $composer_0.updateRememberedValue_l1wh71_k$(value);
            tmp_3 = value;
          } else {
            tmp_3 = it;
          }
          var tmp_4 = tmp_3;
          var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_5 = toAttrs(tmp_2, tmp0_group);
          Span(tmp_5, null, $composer_0, 0, 2);
          Text($loadingText._v, $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(211347314);
          var tmp_6 = classNames(Companion_getInstance(), ['spinner-border', 'spinner-border-sm']);
          $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_0 = $composer_0.rememberedValue_4dg93v_k$();
          var tmp_7;
          if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value_0 = BSButton$lambda$lambda_0;
            $composer_0.updateRememberedValue_l1wh71_k$(value_0);
            tmp_7 = value_0;
          } else {
            tmp_7 = it_0;
          }
          var tmp_8 = tmp_7;
          var tmp1_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
          $composer_0.endReplaceGroup_ek144q_k$();
          var tmp_9 = toAttrs(tmp_6, tmp1_group);
          Span(tmp_9, null, $composer_0, 0, 2);
          Span(toAttrs(classNames(Companion_getInstance(), ['visually-hidden'])), ComposableSingletons$BSButtonKt_getInstance().lambda$514861035__1, $composer_0, 48, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_1 = Unit_getInstance();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(211879584);
        if (!($icon._v == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(211908197);
          var tmp_10 = margin(Companion_getInstance(), VOID, get_px(8));
          var tmp_11 = $icon._v;
          BSIcon(tmp_10, null, tmp_11, null, null, $composer_0, 0, 26);
          SpanText($text, null, $composer_0, 0, 2);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(212097421);
          SpanText($text, null, $composer_0, 0, 2);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_1 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSButton$lambda_3($modifier, $id, $text, $variant, $type, $size, $borderRadius, $customization, $disabled, $loading, $loadingText, $badge, $icon, $onClick, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      BSButton($modifier._v, $id._v, $text, $variant._v, $type._v, $size._v, $borderRadius._v, $customization._v, $disabled._v, $loading._v, $loadingText._v, $badge._v, $icon._v, $onClick, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function BSCloseButton(modifier, disabled, dark, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var disabled_0 = {_v: disabled};
    var dark_0 = {_v: dark};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-723684013);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(disabled_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(dark_0._v) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        disabled_0._v = false;
      }
      if (!(($default & 4) === 0)) {
        dark_0._v = true;
      }
      var tmp = thenIf(classNames(modifier_0._v, ['btn-close']), !dark_0._v, classNames(Companion_getInstance(), ['btn-close-white']));
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = BSCloseButton$lambda(disabled_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = toAttrs(tmp, tmp0_group);
      Button(tmp_2, null, $composer_0, 0, 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(BSCloseButton$lambda_0(modifier_0, disabled_0, dark_0, $changed, $default));
    }
  }
  function BSCloseButton$lambda($disabled) {
    return function ($this$toAttrs) {
      $this$toAttrs.attr_w68641_k$('type', 'button');
      $this$toAttrs.attr_w68641_k$('aria-label', 'Close');
      var tmp;
      if ($disabled._v) {
        disabled($this$toAttrs);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BSCloseButton$lambda_0($modifier, $disabled, $dark, $$changed, $$default) {
    return function ($composer, $force) {
      BSCloseButton($modifier._v, $disabled._v, $dark._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BSIcon(modifier, id_0, icon, size, color_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var id_1 = {_v: id_0};
    var icon_0 = {_v: icon};
    var size_0 = {_v: size};
    var color_1 = {_v: color_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-871030893);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(id_1._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(icon_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(size_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(color_1._v) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 2) === 0)) {
        id_1._v = null;
      }
      if (!(($default & 4) === 0)) {
        icon_0._v = 'bi-check';
      }
      if (!(($default & 8) === 0)) {
        size_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        color_1._v = null;
      }
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp0_elvis_lhs = id_1._v;
        var value = tmp0_elvis_lhs == null ? UniqueIdGenerator_getInstance().generateUniqueId_6z5ton_k$('icon') : tmp0_elvis_lhs;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var randomId = tmp0_group;
      var tmp_1 = id(modifier_0._v, randomId);
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_1 = toList(split(icon_0._v, [' ']));
      var tmp$ret$4 = copyToArray(this_1);
      var tmp_2 = classNames(tmp_1, tmp$ret$4.slice());
      var tmp_3 = !(size_0._v == null);
      var tmp0_safe_receiver = size_0._v;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_4 = fontSize(Companion_getInstance(), tmp0_safe_receiver);
      }
      var tmp1_elvis_lhs = tmp_4;
      var tmp_5 = thenIf(tmp_2, tmp_3, tmp1_elvis_lhs == null ? Companion_getInstance() : tmp1_elvis_lhs);
      var tmp_6 = !(color_1._v == null);
      var tmp2_safe_receiver = color_1._v;
      var tmp_7;
      if (tmp2_safe_receiver == null) {
        tmp_7 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_7 = color(Companion_getInstance(), tmp2_safe_receiver);
      }
      var tmp3_elvis_lhs = tmp_7;
      var tmp_8 = toAttrs(thenIf(tmp_5, tmp_6, tmp3_elvis_lhs == null ? Companion_getInstance() : tmp3_elvis_lhs));
      I(tmp_8, null, $composer_0, 0, 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(BSIcon$lambda(modifier_0, id_1, icon_0, size_0, color_1, $changed, $default));
    }
  }
  function BSIcon$lambda($modifier, $id, $icon, $size, $color, $$changed, $$default) {
    return function ($composer, $force) {
      BSIcon($modifier._v, $id._v, $icon._v, $size._v, $color._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BSNavBar(modifier, stickyTop, brand, items, itemsAlignment, inputField, button, offcanvas, expand, horizontalPadding, backgroundStyle, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var stickyTop_0 = {_v: stickyTop};
    var brand_0 = {_v: brand};
    var itemsAlignment_0 = {_v: itemsAlignment};
    var inputField_0 = {_v: inputField};
    var button_0 = {_v: button};
    var offcanvas_0 = {_v: offcanvas};
    var expand_0 = {_v: expand};
    var horizontalPadding_0 = {_v: horizontalPadding};
    var backgroundStyle_0 = {_v: backgroundStyle};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-741688653);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(stickyTop_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(brand_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(items) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.changedInstance_s1wkiy_k$(itemsAlignment_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(inputField_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(button_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(offcanvas_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = expand_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 67108864;
      } else {
        tmp = 33554432;
      }
      $dirty = $dirty | tmp;
    }
    if (($changed & 805306368) === 0)
      $dirty = $dirty | (($default & 512) === 0 && $composer_0.changedInstance_s1wkiy_k$(horizontalPadding_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0) {
      var tmp_1;
      var tmp_2 = $composer_0;
      var tmpEnum_0 = backgroundStyle_0._v;
      if (tmp_2.changed_kpusro_k$(tmpEnum_0 == null ? -1 : tmpEnum_0.get_ordinal_ip24qg_k$())) {
        tmp_1 = 4;
      } else {
        tmp_1 = 2;
      }
      $dirty1 = $dirty1 | tmp_1;
    }
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          stickyTop_0._v = false;
        }
        if (!(($default & 4) === 0)) {
          brand_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          itemsAlignment_0._v = Start_getInstance();
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          inputField_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          button_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          offcanvas_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          expand_0._v = NavBarExpand_LG_getInstance();
        }
        if (!(($default & 512) === 0)) {
          horizontalPadding_0._v = get_px(8);
          $dirty = $dirty & -1879048193;
        }
        if (!(($default & 1024) === 0)) {
          backgroundStyle_0._v = BackgroundStyle_Light_getInstance();
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 512) === 0))
          $dirty = $dirty & -1879048193;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp_3 = thenIf(classNames(modifier_0._v, ['navbar', expand_0._v.get_value_j01efc_k$(), backgroundStyle_0._v.get_value_j01efc_k$()]), stickyTop_0._v, classNames(Companion_getInstance(), ['sticky-top']));
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty1 & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = BSNavBar$lambda(backgroundStyle_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_6 = toAttrs(tmp_3, tmp0_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1758552578, true, BSNavBar$lambda_0(horizontalPadding_0, brand_0, offcanvas_0, items, itemsAlignment_0, inputField_0, button_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_7(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Nav(tmp_6, tmp0_0, $composer_0, 48, 0);
      if (!(offcanvas_0._v == null)) {
        var tmp_9 = offcanvas_0._v.get_id_kntnx8_k$();
        var tmp_10 = offcanvas_0._v.get_title_iz32un_k$();
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-503873104, true, BSNavBar$lambda_1(items, itemsAlignment_0, inputField_0, button_0, offcanvas_0), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_11;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_9(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_1);
          tmp_11 = value_1;
        } else {
          tmp_11 = it_1;
        }
        var tmp_12 = tmp_11;
        var tmp0_1 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        BSOffcanvas(null, tmp_9, tmp_10, tmp0_1, offcanvas_0._v.get_dark_wokkvz_k$(), offcanvas_0._v.get_allowScrolling_sjfwwb_k$(), offcanvas_0._v.get_disableBackdrop_txneyd_k$(), offcanvas_0._v.get_closableOutside_4pyuvp_k$(), offcanvas_0._v.get_placement_wv4cec_k$(), $composer_0, 3072, 1);
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(BSNavBar$lambda_2(modifier_0, stickyTop_0, brand_0, items, itemsAlignment_0, inputField_0, button_0, offcanvas_0, expand_0, horizontalPadding_0, backgroundStyle_0, $changed, $changed1, $default));
    }
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$BSNavBarKt$lambda$739254301$lambda($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = toAttrs(classNames(Companion_getInstance(), ['navbar-toggler-icon']));
    Span(tmp, null, $composer_0, 0, 2);
    return Unit_getInstance();
  }
  function ComposableSingletons$BSNavBarKt() {
    ComposableSingletons$BSNavBarKt_instance = this;
    var tmp = this;
    tmp.lambda$739254301__1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(739254301, false, ComposableSingletons$BSNavBarKt$lambda$739254301$lambda));
  }
  protoOf(ComposableSingletons$BSNavBarKt).get_lambda$739254301_noh5k5_k$ = function () {
    return this.lambda$739254301__1;
  };
  var ComposableSingletons$BSNavBarKt_instance;
  function ComposableSingletons$BSNavBarKt_getInstance() {
    if (ComposableSingletons$BSNavBarKt_instance == null)
      new ComposableSingletons$BSNavBarKt();
    return ComposableSingletons$BSNavBarKt_instance;
  }
  function NavBarContent(items, itemsAlignment, inputField, button, offcanvas, $composer, $changed, $default) {
    var offcanvas_0 = {_v: offcanvas};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-543849753);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(items) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(itemsAlignment) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(inputField) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(button) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(offcanvas_0._v) ? 16384 : 8192);
    if (!(($dirty & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 16) === 0)) {
        offcanvas_0._v = null;
      }
      var tmp = Companion_getInstance();
      var tmp_0;
      if (!(offcanvas_0._v == null)) {
        tmp_0 = 'me-auto';
      } else {
        var tmp_1;
        if (itemsAlignment instanceof Start) {
          tmp_1 = 'me-auto';
        } else {
          if (itemsAlignment instanceof End) {
            tmp_1 = 'ms-auto';
          } else {
            tmp_1 = 'mx-auto';
          }
        }
        tmp_0 = tmp_1;
      }
      var tmp_2 = toAttrs(classNames(tmp, ['navbar-nav', tmp_0]));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-722776430, true, NavBarContent$lambda(items), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_17(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Ul(tmp_2, tmp0, $composer_0, 48, 0);
      var tmp_5 = classNames(Companion_getInstance(), ['d-flex']);
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = NavBarContent$lambda_0;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_8 = toAttrs(tmp_5, tmp0_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-1106957760, true, NavBarContent$lambda_1(inputField, button), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_18(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp_10 = tmp_9;
      var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Form(null, tmp_8, tmp0_0, $composer_0, 384, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NavBarContent$lambda_2(items, itemsAlignment, inputField, button, offcanvas_0, $changed, $default));
    }
  }
  function BSNavBar$lambda($backgroundStyle) {
    return function ($this$toAttrs) {
      if ($backgroundStyle._v.equals(BackgroundStyle_Light_getInstance()) || $backgroundStyle._v.equals(BackgroundStyle_Info_getInstance()) || $backgroundStyle._v.equals(BackgroundStyle_Warning_getInstance())) {
        $this$toAttrs.attr_w68641_k$('data-bs-theme', 'light');
      } else {
        $this$toAttrs.attr_w68641_k$('data-bs-theme', 'dark');
      }
      return Unit_getInstance();
    };
  }
  function BSNavBar$lambda$lambda$lambda$lambda($brand) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(401579164);
        if (!($brand._v.get_image_it3i2a_k$() == null)) {
          Img($brand._v.get_image_it3i2a_k$(), 'Brand Logo', toAttrs(classNames(margin(width(Companion_getInstance(), $brand._v.get_imageWidth_qv9uic_k$()), VOID, get_px(8)), ['d-inline-block', 'align-text-top'])), $composer_0, 48, 0);
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_0 = $brand._v.get_title_iz32un_k$();
        SpanText(tmp_0, null, $composer_0, 0, 2);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSNavBar$lambda$lambda$lambda($brand) {
    return function ($this$A, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = CenterVertically_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(483098903, true, BSNavBar$lambda$lambda$lambda$lambda($brand), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Row(null, null, tmp, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 11);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSNavBar$lambda$lambda$lambda_0($offcanvas) {
    return function ($this$toAttrs) {
      if (!($offcanvas._v == null)) {
        $this$toAttrs.attr_w68641_k$('data-bs-toggle', 'offcanvas');
        $this$toAttrs.attr_w68641_k$('data-bs-target', '#' + $offcanvas._v.get_id_kntnx8_k$());
      } else {
        $this$toAttrs.attr_w68641_k$('data-bs-toggle', 'collapse');
        $this$toAttrs.attr_w68641_k$('data-bs-target', '#navbarSupportedContent');
      }
      $this$toAttrs.attr_w68641_k$('aria-controls', 'navbarSupportedContent');
      $this$toAttrs.attr_w68641_k$('aria-expanded', 'false');
      $this$toAttrs.attr_w68641_k$('aria-label', 'Toggle Navigation');
      return Unit_getInstance();
    };
  }
  function BSNavBar$lambda$lambda$lambda_1($items, $itemsAlignment, $inputField, $button) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = $itemsAlignment._v;
      var tmp_0 = $inputField._v;
      var tmp_1 = $button._v;
      NavBarContent($items, tmp, tmp_0, tmp_1, null, $composer_0, 0, 16);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSNavBar$lambda$lambda($brand, $offcanvas, $items, $itemsAlignment, $inputField, $button) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1409963589);
      if (!($brand._v == null)) {
        var tmp0_attrs = toAttrs(classNames(Companion_getInstance(), ['navbar-brand']));
        var tmp1_href = $brand._v.get_href_wonh4k_k$();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1923541702, true, BSNavBar$lambda$lambda$lambda($brand), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        A(tmp1_href, tmp0_attrs, tmp0, $composer_0, 384, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_1 = classNames(Companion_getInstance(), ['navbar-toggler']);
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_ga7h3f_k$($offcanvas._v);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = BSNavBar$lambda$lambda$lambda_0($offcanvas);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      Button(toAttrs(tmp_1, tmp0_group), ComposableSingletons$BSNavBarKt_getInstance().lambda$739254301__1, $composer_0, 48, 0);
      var tmp_4 = toAttrs(classNames(id(Companion_getInstance(), 'navbarSupportedContent'), ['collapse', 'navbar-collapse']));
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(1302914436, true, BSNavBar$lambda$lambda$lambda_1($items, $itemsAlignment, $inputField, $button), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_5(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp_4, tmp0_0, $composer_0, 48, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSNavBar$lambda_0($horizontalPadding, $brand, $offcanvas, $items, $itemsAlignment, $inputField, $button) {
    return function ($this$Nav, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = toAttrs(classNames(padding(Companion_getInstance(), VOID, $horizontalPadding._v), ['container-fluid']));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1538895645, true, BSNavBar$lambda$lambda($brand, $offcanvas, $items, $itemsAlignment, $inputField, $button), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp, tmp0, $composer_0, 48, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSNavBar$lambda$lambda_0($items, $itemsAlignment, $inputField, $button, $offcanvas) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        NavBarContent($items, $itemsAlignment._v, $inputField._v, $button._v, $offcanvas._v, $composer_0, 0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSNavBar$lambda_1($items, $itemsAlignment, $inputField, $button, $offcanvas) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-2122964889, true, BSNavBar$lambda$lambda_0($items, $itemsAlignment, $inputField, $button, $offcanvas), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_8(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(null, null, null, null, tmp0, $composer_0, 24576, 15);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function BSNavBar$lambda_2($modifier, $stickyTop, $brand, $items, $itemsAlignment, $inputField, $button, $offcanvas, $expand, $horizontalPadding, $backgroundStyle, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      BSNavBar($modifier._v, $stickyTop._v, $brand._v, $items, $itemsAlignment._v, $inputField._v, $button._v, $offcanvas._v, $expand._v, $horizontalPadding._v, $backgroundStyle._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function NavBarContent$lambda$lambda$lambda($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('role', 'button');
    $this$toAttrs.attr_w68641_k$('data-bs-toggle', 'dropdown');
    $this$toAttrs.attr_w68641_k$('aria-expanded', 'false');
    return Unit_getInstance();
  }
  function NavBarContent$lambda$lambda$lambda_0($navItem) {
    return function ($this$A, $composer, $changed) {
      var $composer_0 = $composer;
      Text($navItem.get_placeholder_nsdr0q_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda$lambda$lambda$lambda($dropdownItem, $index) {
    return function (it) {
      $dropdownItem.get_onClick_l3c0lc_k$()($index);
      return Unit_getInstance();
    };
  }
  function NavBarContent$lambda$lambda$lambda$lambda$lambda($dropdownItem) {
    return function ($this$A, $composer, $changed) {
      var $composer_0 = $composer;
      Text($dropdownItem.get_title_iz32un_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda$lambda$lambda$lambda_0($dropdownItem) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = toAttrs(cursor(classNames(Companion_getInstance(), ['dropdown-item']), Companion_getInstance_1().get_Pointer_m64vg4_k$()));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-415130625, true, NavBarContent$lambda$lambda$lambda$lambda$lambda($dropdownItem), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      A(null, tmp, tmp0, $composer_0, 384, 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda$lambda$lambda_1($navItem) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s = $navItem.get_items_it823b_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        var tmp = id(Companion_getInstance(), item.get_id_kntnx8_k$());
        $composer_0.startReplaceGroup_5hh8aj_k$(-1633490746);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changed_ga7h3f_k$(item) | $composer_0.changed_kpusro_k$(index_0));
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = NavBarContent$lambda$lambda$lambda$lambda(item, index_0);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_2 = toAttrs(onClick(tmp, tmp0_group));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(543165713, true, NavBarContent$lambda$lambda$lambda$lambda_0(item), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_12(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Li(tmp_2, tmp0, $composer_0, 48, 0);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda$lambda($navItem) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = classNames(Companion_getInstance(), ['nav-link', 'dropdown-toggle']);
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = NavBarContent$lambda$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = toAttrs(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1292351105, true, NavBarContent$lambda$lambda$lambda_0($navItem), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      A(null, tmp_2, tmp0, $composer_0, 384, 1);
      var tmp_5 = toAttrs(classNames(Companion_getInstance(), ['dropdown-menu']));
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-1960675550, true, NavBarContent$lambda$lambda$lambda_1($navItem), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_13(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Ul(tmp_5, tmp0_0, $composer_0, 48, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda$lambda_0($navItem, $index) {
    return function (it) {
      $navItem.get_onClick_l3c0lc_k$()($index);
      return Unit_getInstance();
    };
  }
  function NavBarContent$lambda$lambda$lambda_2($navItem) {
    return function ($this$toAttrs) {
      var tmp;
      if ($navItem.get_active_avldsf_k$()) {
        $this$toAttrs.attr_w68641_k$('aria-current', 'page');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NavBarContent$lambda$lambda$lambda_3($navItem) {
    return function ($this$A, $composer, $changed) {
      var $composer_0 = $composer;
      Text($navItem.get_title_iz32un_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda$lambda_1($navItem) {
    return function ($this$Li, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = cursor(thenIf(thenIf(classNames(Companion_getInstance(), ['nav-link']), $navItem.get_active_avldsf_k$(), classNames(Companion_getInstance(), ['active'])), $navItem.get_disabled_rbmjej_k$(), classNames(Companion_getInstance(), ['disabled'])), Companion_getInstance_1().get_Pointer_m64vg4_k$());
      $composer_0.startReplaceGroup_5hh8aj_k$(5004770);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($navItem);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = NavBarContent$lambda$lambda$lambda_2($navItem);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_2 = toAttrs(tmp, tmp0_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1417181544, true, NavBarContent$lambda$lambda$lambda_3($navItem), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_15(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      A(null, tmp_2, tmp0, $composer_0, 384, 1);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda($items) {
    return function ($this$Ul, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s = $items.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        if (item instanceof NavDropdown) {
          $composer_0.startReplaceGroup_5hh8aj_k$(237947170);
          var tmp = toAttrs(classNames(Companion_getInstance(), ['nav-item', 'dropdown']));
          // Inline function 'kotlin.run' call
          var dispatchReceiver = rememberComposableLambda(-169145043, true, NavBarContent$lambda$lambda(item), $composer_0, 54);
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
          // Inline function 'kotlin.let' call
          var it = $composer_1.rememberedValue_4dg93v_k$();
          var tmp_0;
          if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
            $composer_1.updateRememberedValue_l1wh71_k$(value);
            tmp_0 = value;
          } else {
            tmp_0 = it;
          }
          var tmp_1 = tmp_0;
          var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          Li(tmp, tmp0, $composer_0, 48, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          if (item instanceof NavLink) {
            $composer_0.startReplaceGroup_5hh8aj_k$(239640142);
            var tmp_2 = classNames(id(Companion_getInstance(), item.get_id_kntnx8_k$()), ['nav-item']);
            $composer_0.startReplaceGroup_5hh8aj_k$(-1633490746);
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_0 = !!($composer_0.changedInstance_s1wkiy_k$(item) | $composer_0.changed_kpusro_k$(index_0));
            // Inline function 'kotlin.let' call
            var it_0 = $composer_0.rememberedValue_4dg93v_k$();
            var tmp_3;
            if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
              var value_0 = NavBarContent$lambda$lambda_0(item, index_0);
              $composer_0.updateRememberedValue_l1wh71_k$(value_0);
              tmp_3 = value_0;
            } else {
              tmp_3 = it_0;
            }
            var tmp_4 = tmp_3;
            var tmp0_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            $composer_0.endReplaceGroup_ek144q_k$();
            var tmp_5 = toAttrs(onClick(tmp_2, tmp0_group));
            // Inline function 'kotlin.run' call
            var dispatchReceiver_0 = rememberComposableLambda(-1513551466, true, NavBarContent$lambda$lambda_1(item), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
            // Inline function 'kotlin.let' call
            var it_1 = $composer_2.rememberedValue_4dg93v_k$();
            var tmp_6;
            if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
              var value_1 = ComposableLambda$invoke$ref_16(dispatchReceiver_0);
              $composer_2.updateRememberedValue_l1wh71_k$(value_1);
              tmp_6 = value_1;
            } else {
              tmp_6 = it_1;
            }
            var tmp_7 = tmp_6;
            var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            Li(tmp_5, tmp0_0, $composer_0, 48, 0);
            $composer_0.endReplaceGroup_ek144q_k$();
          } else {
            $composer_0.startReplaceGroup_5hh8aj_k$(240703969);
            $composer_0.endReplaceGroup_ek144q_k$();
          }
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda_0($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('role', 'search');
    return Unit_getInstance();
  }
  function NavBarContent$lambda_1($inputField, $button) {
    return function ($this$Form, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(1365482885);
      if (!($inputField == null)) {
        var tmp = thenIf(Companion_getInstance(), !($button == null), margin(Companion_getInstance(), VOID, get_px(8)));
        var tmp_0 = $inputField.get_id_kntnx8_k$();
        var tmp_1 = $inputField.get_placeholder_nsdr0q_k$();
        BSInput(tmp, tmp_0, null, tmp_1, null, null, false, false, false, false, false, null, $inputField.get_value_j01efc_k$(), $inputField.get_onValueChange_omahaf_k$(), $inputField.get_onEnterClick_p7fbvs_k$(), $composer_0, 0, 0, 4084);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      if (!($button == null)) {
        var tmp_2 = $button.get_id_kntnx8_k$();
        var tmp_3 = $button.get_text_wouvsm_k$();
        var tmp_4 = $button.get_variant_56j34s_k$();
        var tmp_5 = $button.get_disabled_rbmjej_k$();
        var tmp_6 = $button.get_loading_6tzj9v_k$();
        var tmp_7 = $button.get_loadingText_a24zz4_k$();
        var tmp_8 = $button.get_badge_ip1cai_k$();
        BSButton(null, tmp_2, tmp_3, tmp_4, null, null, null, null, tmp_5, tmp_6, tmp_7, tmp_8, null, $button.get_onClick_l3c0lc_k$(), $composer_0, 0, 0, 4337);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function NavBarContent$lambda_2($items, $itemsAlignment, $inputField, $button, $offcanvas, $$changed, $$default) {
    return function ($composer, $force) {
      NavBarContent($items, $itemsAlignment, $inputField, $button, $offcanvas._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_toastGroupScopeImpl() {
    _init_properties_BSToast_kt__ckwhtw();
    return toastGroupScopeImpl;
  }
  var toastGroupScopeImpl;
  var com_stevdza_san_kotlinbs_components_ToastGroupScope$stable;
  function ToastGroupScope() {
  }
  var properties_initialized_BSToast_kt_454ml6;
  function _init_properties_BSToast_kt__ckwhtw() {
    if (!properties_initialized_BSToast_kt_454ml6) {
      properties_initialized_BSToast_kt_454ml6 = true;
      toastGroupScopeImpl = new ToastGroupScope();
      com_stevdza_san_kotlinbs_components_ToastGroupScope$stable = 0;
    }
  }
  function BSOffcanvas(modifier, id_0, title, body, dark, allowScrolling, disableBackdrop, closableOutside, placement, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var dark_0 = {_v: dark};
    var allowScrolling_0 = {_v: allowScrolling};
    var disableBackdrop_0 = {_v: disableBackdrop};
    var closableOutside_0 = {_v: closableOutside};
    var placement_0 = {_v: placement};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(395402061);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(id_0) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(body) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(dark_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(allowScrolling_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(disableBackdrop_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(closableOutside_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = placement_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 67108864;
      } else {
        tmp = 33554432;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($dirty & 38347923) === 38347922) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      if (!(($default & 16) === 0)) {
        dark_0._v = false;
      }
      if (!(($default & 32) === 0)) {
        allowScrolling_0._v = false;
      }
      if (!(($default & 64) === 0)) {
        disableBackdrop_0._v = false;
      }
      if (!(($default & 128) === 0)) {
        closableOutside_0._v = true;
      }
      if (!(($default & 256) === 0)) {
        placement_0._v = OffcanvasPlacement_END_getInstance();
      }
      var tmp_1 = classNames(id(modifier_0._v, id_0), ['offcanvas', placement_0._v.get_value_j01efc_k$()]);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1224400529);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 458752) === 131072) | ($dirty & 3670016) === 1048576) | ($dirty & 29360128) === 8388608) | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = BSOffcanvas$lambda(id_0, allowScrolling_0, disableBackdrop_0, closableOutside_0, dark_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_4 = toAttrs(tmp_1, tmp0_group);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1787110702, true, BSOffcanvas$lambda_0(title, body), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_22(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_4, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(BSOffcanvas$lambda_1(modifier_0, id_0, title, body, dark_0, allowScrolling_0, disableBackdrop_0, closableOutside_0, placement_0, $changed, $default));
    }
  }
  function hideOffcanvasOnClick(_this__u8e3s4) {
    return attrsModifier(_this__u8e3s4, hideOffcanvasOnClick$lambda);
  }
  function BSOffcanvas$lambda($id, $allowScrolling, $disableBackdrop, $closableOutside, $dark) {
    return function ($this$toAttrs) {
      $this$toAttrs.attr_w68641_k$('tabindex', '-1');
      $this$toAttrs.attr_w68641_k$('aria-labelledby', 'offcanvasLabel');
      $this$toAttrs.attr_w68641_k$('aria-controls', '#' + $id);
      var tmp;
      if ($allowScrolling._v) {
        $this$toAttrs.attr_w68641_k$('data-bs-scroll', 'true');
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($disableBackdrop._v) {
        $this$toAttrs.attr_w68641_k$('data-bs-backdrop', 'false');
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if (!$closableOutside._v) {
        $this$toAttrs.attr_w68641_k$('data-bs-backdrop', 'static');
        tmp_1 = Unit_getInstance();
      }
      var tmp_2;
      if ($dark._v) {
        $this$toAttrs.attr_w68641_k$('data-bs-theme', 'dark');
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BSOffcanvas$lambda$lambda$lambda($title) {
    return function ($this$H5, $composer, $changed) {
      var $composer_0 = $composer;
      SpanText($title, null, $composer_0, 0, 2);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_19(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSOffcanvas$lambda$lambda($title) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = toAttrs(classNames(id(Companion_getInstance(), 'offcanvasLabel'), ['offcanvas-title']));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1827026482, true, BSOffcanvas$lambda$lambda$lambda($title), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_19(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      H5(tmp, tmp0, $composer_0, 48, 0);
      var tmp_2 = hideOffcanvasOnClick(Companion_getInstance());
      BSCloseButton(tmp_2, false, false, $composer_0, 0, 6);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_20(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSOffcanvas$lambda$lambda_0($body) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $body($composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_21(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSOffcanvas$lambda_0($title, $body) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = toAttrs(classNames(Companion_getInstance(), ['offcanvas-header']));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(307877071, true, BSOffcanvas$lambda$lambda($title), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_20(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp, tmp0, $composer_0, 48, 0);
      var tmp_2 = toAttrs(classNames(Companion_getInstance(), ['offcanvas-body']));
      // Inline function 'kotlin.run' call
      var dispatchReceiver_0 = rememberComposableLambda(-435869128, true, BSOffcanvas$lambda$lambda_0($body), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_21(dispatchReceiver_0);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Div(tmp_2, tmp0_0, $composer_0, 48, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_22(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSOffcanvas$lambda_1($modifier, $id, $title, $body, $dark, $allowScrolling, $disableBackdrop, $closableOutside, $placement, $$changed, $$default) {
    return function ($composer, $force) {
      BSOffcanvas($modifier._v, $id, $title, $body, $dark._v, $allowScrolling._v, $disableBackdrop._v, $closableOutside._v, $placement._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function hideOffcanvasOnClick$lambda($this$attrsModifier) {
    $this$attrsModifier.attr_w68641_k$('data-bs-dismiss', 'offcanvas');
    return Unit_getInstance();
  }
  function SpanText(text, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1543640082);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance();
      }
      var tmp = toAttrs(modifier_0._v);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-252235184, true, SpanText$lambda(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_23(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SpanText$lambda_0(text, modifier_0, $changed, $default));
    }
  }
  function SpanText$lambda($text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      Text($text, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_23(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function SpanText$lambda_0($text, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_Svg() {
    _init_properties_SvgElement_kt__80mjfc();
    return Svg;
  }
  var Svg;
  function get_Path() {
    _init_properties_SvgElement_kt__80mjfc();
    return Path;
  }
  var Path;
  function _get_el__ndc0ck($this) {
    var tmp0 = $this.el$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('el', 1, tmp, Svg$o$_get_el_$ref_5y5vq0(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function Svg$o$el$delegate$lambda() {
    return document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  }
  function Svg$o$_get_el_$ref_5y5vq0() {
    return function (p0) {
      return _get_el__ndc0ck(p0);
    };
  }
  function Svg$1() {
    var tmp = this;
    tmp.el$delegate_1 = lazy(Svg$o$el$delegate$lambda);
  }
  protoOf(Svg$1).create_md4cuc_k$ = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof SVGElement ? tmp : THROW_CCE();
  };
  function _get_el__ndc0ck_0($this) {
    var tmp0 = $this.el$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('el', 1, tmp, Path$o$_get_el_$ref_dbpblz(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function Path$o$el$delegate$lambda() {
    return document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
  function Path$o$_get_el_$ref_dbpblz() {
    return function (p0) {
      return _get_el__ndc0ck_0(p0);
    };
  }
  function Path$1() {
    var tmp = this;
    tmp.el$delegate_1 = lazy(Path$o$el$delegate$lambda);
  }
  protoOf(Path$1).create_md4cuc_k$ = function () {
    var tmp = _get_el__ndc0ck_0(this).cloneNode();
    return tmp instanceof SVGPathElement ? tmp : THROW_CCE();
  };
  var properties_initialized_SvgElement_kt_a24ttm;
  function _init_properties_SvgElement_kt__80mjfc() {
    if (!properties_initialized_SvgElement_kt_a24ttm) {
      properties_initialized_SvgElement_kt_a24ttm = true;
      Svg = new Svg$1();
      Path = new Path$1();
    }
  }
  function BSInput(modifier, id, label, placeholder, type, size, disabled, readOnly, plainText, floating, required, validation, value, onValueChange, onEnterClick, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var id_0 = {_v: id};
    var label_0 = {_v: label};
    var placeholder_0 = {_v: placeholder};
    var type_0 = {_v: type};
    var size_0 = {_v: size};
    var disabled_0 = {_v: disabled};
    var readOnly_0 = {_v: readOnly};
    var plainText_0 = {_v: plainText};
    var floating_0 = {_v: floating};
    var required_0 = {_v: required};
    var validation_0 = {_v: validation};
    var onEnterClick_0 = {_v: onEnterClick};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(227357209);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(id_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placeholder_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.changedInstance_s1wkiy_k$(type_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 131072;
      } else {
        tmp = 65536;
      }
      $dirty = $dirty | tmp;
    }
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(disabled_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(readOnly_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(plainText_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(floating_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_jpyyrz_k$(required_0._v) ? 4 : 2);
    if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | (($default & 2048) === 0 && $composer_0.changed_ga7h3f_k$(validation_0._v) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(value) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(onValueChange) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(onEnterClick_0._v) ? 16384 : 8192);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 9363) === 9362) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          id_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          type_0._v = Text_getInstance();
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          size_0._v = InputSize_Default_getInstance();
        }
        if (!(($default & 64) === 0)) {
          disabled_0._v = false;
        }
        if (!(($default & 128) === 0)) {
          readOnly_0._v = false;
        }
        if (!(($default & 256) === 0)) {
          plainText_0._v = false;
        }
        if (!(($default & 512) === 0)) {
          floating_0._v = false;
        }
        if (!(($default & 1024) === 0)) {
          required_0._v = false;
        }
        if (!(($default & 2048) === 0)) {
          validation_0._v = new InputValidation();
          $dirty1 = $dirty1 & -113;
        }
        if (!(($default & 16384) === 0)) {
          onEnterClick_0._v = null;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 2048) === 0))
          $dirty1 = $dirty1 & -113;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp0_elvis_lhs = id_0._v;
        var value_0 = tmp0_elvis_lhs == null ? UniqueIdGenerator_getInstance().generateUniqueId_6z5ton_k$('input') : tmp0_elvis_lhs;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var randomId = tmp0_group;
      var tmp_3 = toAttrs(thenIf(modifier_0._v, floating_0._v, classNames(Companion_getInstance(), ['form-floating'])));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1335971962, true, BSInput$lambda(floating_0, label_0, randomId, plainText_0, validation_0, size_0, value, onValueChange, onEnterClick_0, placeholder_0, disabled_0, readOnly_0, required_0, type_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_28(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_3, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(BSInput$lambda_0(modifier_0, id_0, label_0, placeholder_0, type_0, size_0, disabled_0, readOnly_0, plainText_0, floating_0, required_0, validation_0, value, onValueChange, onEnterClick_0, $changed, $changed1, $default));
    }
  }
  function BSInput$lambda$lambda($label) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      Text($label._v, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_24(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSInput$lambda$lambda$lambda($onValueChange) {
    return function (it) {
      $onValueChange(it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function BSInput$lambda$lambda$lambda_0($onEnterClick) {
    return function (it) {
      var tmp;
      if (!($onEnterClick._v == null)) {
        it.preventDefault_xs6po9_k$();
        var tmp_0;
        if (it.get_key_18j28a_k$() === 'Enter') {
          tmp_0 = $onEnterClick._v();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function BSInput$lambda$lambda_0($value, $placeholder, $disabled, $readOnly, $required, $onValueChange, $onEnterClick) {
    return function ($this$toAttrs) {
      $this$toAttrs.value_hphtnt_k$($value);
      $this$toAttrs.onInput_qzb0am_k$(BSInput$lambda$lambda$lambda($onValueChange));
      $this$toAttrs.onKeyUp_g6q8ee_k$(BSInput$lambda$lambda$lambda_0($onEnterClick));
      var tmp;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = $placeholder._v;
      if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
        $this$toAttrs.attr_w68641_k$('placeholder', $placeholder._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($disabled._v) {
        disabled_0($this$toAttrs);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if ($readOnly._v) {
        readOnly($this$toAttrs);
        tmp_1 = Unit_getInstance();
      }
      var tmp_2;
      if ($required._v) {
        required($this$toAttrs);
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BSInput$lambda$lambda_1($validation) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      Text($validation._v.get_validFeedback_iu7x54_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_25(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSInput$lambda$lambda_2($validation) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      Text($validation._v.get_invalidFeedback_fj7eer_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_26(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSInput$lambda$lambda_3($label) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      Text($label._v, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_27(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSInput$lambda($floating, $label, $randomId, $plainText, $validation, $size, $value, $onValueChange, $onEnterClick, $placeholder, $disabled, $readOnly, $required, $type) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-326165418);
      if (!$floating._v && !($label._v == null)) {
        var tmp0_attrs = toAttrs(classNames(Companion_getInstance(), ['form-label']));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-494273378, true, BSInput$lambda$lambda($label), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_24(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Label($randomId, tmp0_attrs, tmp0, $composer_0, 390, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_1 = thenIf(thenIf(thenIf(classNames(id(Companion_getInstance(), $randomId), [$plainText._v ? 'form-control-plaintext' : 'form-control']), $validation._v.get_isValid_zh4f7b_k$(), classNames(Companion_getInstance(), ['is-valid'])), $validation._v.get_isInvalid_vc54uc_k$(), classNames(Companion_getInstance(), ['is-invalid'])), !$size._v.equals(InputSize_Default_getInstance()), classNames(Companion_getInstance(), [$size._v.get_value_j01efc_k$()]));
      $composer_0.startReplaceGroup_5hh8aj_k$(-1224400529);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!(!!(!!(!!(!!($composer_0.changed_ga7h3f_k$($value) | $composer_0.changed_ga7h3f_k$($onValueChange)) | $composer_0.changed_ga7h3f_k$($onEnterClick._v)) | $composer_0.changed_ga7h3f_k$($placeholder._v)) | $composer_0.changed_jpyyrz_k$($disabled._v)) | $composer_0.changed_jpyyrz_k$($readOnly._v)) | $composer_0.changed_jpyyrz_k$($required._v));
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = BSInput$lambda$lambda_0($value, $placeholder, $disabled, $readOnly, $required, $onValueChange, $onEnterClick);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp1_attrs = toAttrs(tmp_1, tmp0_group);
      Input($type._v, tmp1_attrs, $composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(-326113259);
      if ($validation._v.get_isValid_zh4f7b_k$()) {
        var tmp_4 = toAttrs(classNames(Companion_getInstance(), ['valid-feedback']));
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(174989449, true, BSInput$lambda$lambda_1($validation), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_25(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp_4, tmp0_0, $composer_0, 48, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(-326104933);
      if ($validation._v.get_isInvalid_vc54uc_k$()) {
        var tmp_7 = toAttrs(classNames(Companion_getInstance(), ['invalid-feedback']));
        // Inline function 'kotlin.run' call
        var dispatchReceiver_1 = rememberComposableLambda(38962152, true, BSInput$lambda$lambda_2($validation), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_2 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_26(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_1 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        Div(tmp_7, tmp0_1, $composer_0, 48, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      if ($floating._v && !($label._v == null)) {
        var tmp2_attrs = toAttrs(classNames(Companion_getInstance(), ['form-label']));
        // Inline function 'kotlin.run' call
        var dispatchReceiver_2 = rememberComposableLambda(-1630577531, true, BSInput$lambda$lambda_3($label), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_2);
        // Inline function 'kotlin.let' call
        var it_3 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid_3 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_3 = ComposableLambda$invoke$ref_27(dispatchReceiver_2);
          $composer_4.updateRememberedValue_l1wh71_k$(value_3);
          tmp_10 = value_3;
        } else {
          tmp_10 = it_3;
        }
        var tmp_11 = tmp_10;
        var tmp0_2 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_4);
        Label($randomId, tmp2_attrs, tmp0_2, $composer_0, 390, 0);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_28(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSInput$lambda_0($modifier, $id, $label, $placeholder, $type, $size, $disabled, $readOnly, $plainText, $floating, $required, $validation, $value, $onValueChange, $onEnterClick, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      BSInput($modifier._v, $id._v, $label._v, $placeholder._v, $type._v, $size._v, $disabled._v, $readOnly._v, $plainText._v, $floating._v, $required._v, $validation._v, $value, $onValueChange, $onEnterClick._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function get_radioGroupScopeImpl() {
    _init_properties_BSRadioButton_kt__muci1i();
    return radioGroupScopeImpl;
  }
  var radioGroupScopeImpl;
  var com_stevdza_san_kotlinbs_forms_BSRadioGroupScope$stable;
  function _set_radioGroupNamesCounter__honndr($this, _set____db54di) {
    $this.radioGroupNamesCounter_1 = _set____db54di;
  }
  function _get_radioGroupNamesCounter__v3cy5p($this) {
    return $this.radioGroupNamesCounter_1;
  }
  function BSRadioGroupScope$checkedValueCompositionLocal$lambda() {
    // Inline function 'kotlin.error' call
    var message = 'No radio group checked value provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function BSRadioGroupScope$groupNameCompositionLocal$lambda() {
    // Inline function 'kotlin.error' call
    var message = 'No radio group name provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function BSRadioGroupScope$inlineCompositionLocal$lambda() {
    // Inline function 'kotlin.error' call
    var message = 'No inline value provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function BSRadioGroupScope$reverseCompositionLocal$lambda() {
    // Inline function 'kotlin.error' call
    var message = 'No reverse value provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function BSRadioGroupScope$toggleButtonCompositionLocal$lambda() {
    // Inline function 'kotlin.error' call
    var message = 'No toggle button provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function BSRadioGroupScope$toggleButtonStyleCompositionLocal$lambda() {
    // Inline function 'kotlin.error' call
    var message = 'No toggle button style provided';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function BSRadioGroupScope() {
    this.radioGroupNamesCounter_1 = 0;
    var tmp = this;
    tmp.checkedValueCompositionLocal_1 = compositionLocalOf(VOID, BSRadioGroupScope$checkedValueCompositionLocal$lambda);
    var tmp_0 = this;
    tmp_0.groupNameCompositionLocal_1 = compositionLocalOf(VOID, BSRadioGroupScope$groupNameCompositionLocal$lambda);
    var tmp_1 = this;
    tmp_1.inlineCompositionLocal_1 = compositionLocalOf(VOID, BSRadioGroupScope$inlineCompositionLocal$lambda);
    var tmp_2 = this;
    tmp_2.reverseCompositionLocal_1 = compositionLocalOf(VOID, BSRadioGroupScope$reverseCompositionLocal$lambda);
    var tmp_3 = this;
    tmp_3.toggleButtonCompositionLocal_1 = compositionLocalOf(VOID, BSRadioGroupScope$toggleButtonCompositionLocal$lambda);
    var tmp_4 = this;
    tmp_4.toggleButtonStyleCompositionLocal_1 = compositionLocalOf(VOID, BSRadioGroupScope$toggleButtonStyleCompositionLocal$lambda);
  }
  protoOf(BSRadioGroupScope).get_checkedValueCompositionLocal_tv3msj_k$ = function () {
    return this.checkedValueCompositionLocal_1;
  };
  protoOf(BSRadioGroupScope).get_groupNameCompositionLocal_nhfkkv_k$ = function () {
    return this.groupNameCompositionLocal_1;
  };
  protoOf(BSRadioGroupScope).get_inlineCompositionLocal_q4f4pe_k$ = function () {
    return this.inlineCompositionLocal_1;
  };
  protoOf(BSRadioGroupScope).get_reverseCompositionLocal_ofhg53_k$ = function () {
    return this.reverseCompositionLocal_1;
  };
  protoOf(BSRadioGroupScope).get_toggleButtonCompositionLocal_hf4da7_k$ = function () {
    return this.toggleButtonCompositionLocal_1;
  };
  protoOf(BSRadioGroupScope).get_toggleButtonStyleCompositionLocal_7uscni_k$ = function () {
    return this.toggleButtonStyleCompositionLocal_1;
  };
  protoOf(BSRadioGroupScope).generateNextRadioGroupName_1q398m_k$ = function () {
    var _unary__edvuaz = this.radioGroupNamesCounter_1;
    this.radioGroupNamesCounter_1 = _unary__edvuaz + 1 | 0;
    return '$compose$generated$radio$group-' + _unary__edvuaz;
  };
  var properties_initialized_BSRadioButton_kt_qiqxis;
  function _init_properties_BSRadioButton_kt__muci1i() {
    if (!properties_initialized_BSRadioButton_kt_qiqxis) {
      properties_initialized_BSRadioButton_kt_qiqxis = true;
      radioGroupScopeImpl = new BSRadioGroupScope();
      com_stevdza_san_kotlinbs_forms_BSRadioGroupScope$stable = 8;
    }
  }
  function BSTextArea(modifier, id, value, label, placeholder, disabled, readOnly, floating, required, size, validation, onValueChange, $composer, $changed, $changed1, $default) {
    var modifier_0 = {_v: modifier};
    var id_0 = {_v: id};
    var label_0 = {_v: label};
    var placeholder_0 = {_v: placeholder};
    var disabled_0 = {_v: disabled};
    var readOnly_0 = {_v: readOnly};
    var floating_0 = {_v: floating};
    var required_0 = {_v: required};
    var size_0 = {_v: size};
    var validation_0 = {_v: validation};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-373340501);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(id_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placeholder_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(disabled_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(readOnly_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(floating_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(required_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = size_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 536870912;
      } else {
        tmp = 268435456;
      }
      $dirty = $dirty | tmp;
    }
    if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | (($default & 1024) === 0 && $composer_0.changed_ga7h3f_k$(validation_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.changedInstance_s1wkiy_k$(onValueChange) ? 32 : 16);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_getInstance();
        }
        if (!(($default & 2) === 0)) {
          id_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          label_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          placeholder_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          disabled_0._v = false;
        }
        if (!(($default & 64) === 0)) {
          readOnly_0._v = false;
        }
        if (!(($default & 128) === 0)) {
          floating_0._v = false;
        }
        if (!(($default & 256) === 0)) {
          required_0._v = false;
        }
        if (!(($default & 512) === 0)) {
          size_0._v = InputSize_Default_getInstance();
        }
        if (!(($default & 1024) === 0)) {
          validation_0._v = new InputValidation();
          $dirty1 = $dirty1 & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 1024) === 0))
          $dirty1 = $dirty1 & -15;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(1849434622);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp0_elvis_lhs = id_0._v;
        var value_0 = tmp0_elvis_lhs == null ? UniqueIdGenerator_getInstance().generateUniqueId_6z5ton_k$('textarea') : tmp0_elvis_lhs;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var randomId = tmp0_group;
      var tmp_3 = toAttrs(thenIf(modifier_0._v, floating_0._v, classNames(Companion_getInstance(), ['form-floating'])));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1028809676, true, BSTextArea$lambda(floating_0, label_0, randomId, modifier_0, size_0, validation_0, value, onValueChange, placeholder_0, readOnly_0, disabled_0, required_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_33(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_3, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(BSTextArea$lambda_0(modifier_0, id_0, value, label_0, placeholder_0, disabled_0, readOnly_0, floating_0, required_0, size_0, validation_0, onValueChange, $changed, $changed1, $default));
    }
  }
  function BSTextArea$lambda$lambda($label) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      Text($label._v, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_29(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSTextArea$lambda$lambda$lambda($onValueChange) {
    return function (it) {
      $onValueChange(it.get_value_j01efc_k$());
      return Unit_getInstance();
    };
  }
  function BSTextArea$lambda$lambda_0($value, $placeholder, $readOnly, $disabled, $required, $onValueChange) {
    return function ($this$toAttrs) {
      $this$toAttrs.value_hphtnt_k$($value);
      $this$toAttrs.onInput_cld1rf_k$(BSTextArea$lambda$lambda$lambda($onValueChange));
      var tmp;
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_0 = $placeholder._v;
      if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
        $this$toAttrs.attr_w68641_k$('placeholder', $placeholder._v);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($readOnly._v) {
        readOnly_0($this$toAttrs);
        tmp_0 = Unit_getInstance();
      }
      var tmp_1;
      if ($disabled._v) {
        disabled_1($this$toAttrs);
        tmp_1 = Unit_getInstance();
      }
      var tmp_2;
      if ($required._v) {
        required_0($this$toAttrs);
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BSTextArea$lambda$lambda_1($validation) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      Text($validation._v.get_validFeedback_iu7x54_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_30(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSTextArea$lambda$lambda_2($validation) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      Text($validation._v.get_invalidFeedback_fj7eer_k$(), $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_31(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSTextArea$lambda$lambda_3($label) {
    return function ($this$Label, $composer, $changed) {
      var $composer_0 = $composer;
      Text($label._v, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_32(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSTextArea$lambda($floating, $label, $randomId, $modifier, $size, $validation, $value, $onValueChange, $placeholder, $readOnly, $disabled, $required) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(843621160);
      if (!$floating._v && !($label._v == null)) {
        var tmp0_attrs = toAttrs(classNames(Companion_getInstance(), ['form-label']));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1700971248, true, BSTextArea$lambda$lambda($label), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_29(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Label($randomId, tmp0_attrs, tmp0, $composer_0, 390, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_1 = classNames(thenIf(thenIf(thenIf(id($modifier._v, $randomId), !$size._v.equals(InputSize_Default_getInstance()), classNames(Companion_getInstance(), [$size._v.get_value_j01efc_k$()])), $validation._v.get_isValid_zh4f7b_k$(), classNames(Companion_getInstance(), ['is-valid'])), $validation._v.get_isInvalid_vc54uc_k$(), classNames(Companion_getInstance(), ['is-invalid'])), ['form-control']);
      $composer_0.startReplaceGroup_5hh8aj_k$(-1224400529);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(!!(!!(!!(!!($composer_0.changed_ga7h3f_k$($value) | $composer_0.changed_ga7h3f_k$($onValueChange)) | $composer_0.changed_ga7h3f_k$($placeholder._v)) | $composer_0.changed_jpyyrz_k$($readOnly._v)) | $composer_0.changed_jpyyrz_k$($disabled._v)) | $composer_0.changed_jpyyrz_k$($required._v));
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = BSTextArea$lambda$lambda_0($value, $placeholder, $readOnly, $disabled, $required, $onValueChange);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      TextArea(null, toAttrs(tmp_1, tmp0_group), $composer_0, 0, 1);
      $composer_0.startReplaceGroup_5hh8aj_k$(843661319);
      if ($validation._v.get_isValid_zh4f7b_k$()) {
        var tmp_4 = toAttrs(classNames(Companion_getInstance(), ['valid-feedback']));
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(948087067, true, BSTextArea$lambda$lambda_1($validation), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_30(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Div(tmp_4, tmp0_0, $composer_0, 48, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      $composer_0.startReplaceGroup_5hh8aj_k$(843669645);
      if ($validation._v.get_isInvalid_vc54uc_k$()) {
        var tmp_7 = toAttrs(classNames(Companion_getInstance(), ['invalid-feedback']));
        // Inline function 'kotlin.run' call
        var dispatchReceiver_1 = rememberComposableLambda(1849155002, true, BSTextArea$lambda$lambda_2($validation), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_2 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_31(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0_1 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        Div(tmp_7, tmp0_1, $composer_0, 48, 0);
      }
      $composer_0.endReplaceGroup_ek144q_k$();
      if ($floating._v && !($label._v == null)) {
        // Inline function 'kotlin.run' call
        var dispatchReceiver_2 = rememberComposableLambda(-552007145, true, BSTextArea$lambda$lambda_3($label), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_2);
        // Inline function 'kotlin.let' call
        var it_3 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_10;
        if (invalid_3 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_3 = ComposableLambda$invoke$ref_32(dispatchReceiver_2);
          $composer_4.updateRememberedValue_l1wh71_k$(value_3);
          tmp_10 = value_3;
        } else {
          tmp_10 = it_3;
        }
        var tmp_11 = tmp_10;
        var tmp0_2 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
        sourceInformationMarkerEnd($composer_4);
        Label($randomId, null, tmp0_2, $composer_0, 390, 2);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_33(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSTextArea$lambda_0($modifier, $id, $value, $label, $placeholder, $disabled, $readOnly, $floating, $required, $size, $validation, $onValueChange, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      BSTextArea($modifier._v, $id._v, $value, $label._v, $placeholder._v, $disabled._v, $readOnly._v, $floating._v, $required._v, $size._v, $validation._v, $onValueChange, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  var com_stevdza_san_kotlinbs_icons_BSIcons$stable;
  var com_stevdza_san_kotlinbs_models_AccordionItem$stable;
  var com_stevdza_san_kotlinbs_models_BSBorderRadius$stable;
  function BSBorderRadius_init_$Init$(all, $this) {
    all = all === VOID ? get_px(0) : all;
    BSBorderRadius.call($this, all, all, all, all);
    return $this;
  }
  function BSBorderRadius_init_$Create$(all) {
    return BSBorderRadius_init_$Init$(all, objectCreate(protoOf(BSBorderRadius)));
  }
  function BSBorderRadius(topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? get_px(0) : topLeft;
    topRight = topRight === VOID ? get_px(0) : topRight;
    bottomRight = bottomRight === VOID ? get_px(0) : bottomRight;
    bottomLeft = bottomLeft === VOID ? get_px(0) : bottomLeft;
    this.topLeft_1 = topLeft;
    this.topRight_1 = topRight;
    this.bottomRight_1 = bottomRight;
    this.bottomLeft_1 = bottomLeft;
    this.value_1 = toString(this.topLeft_1) + ' ' + toString(this.topRight_1) + ' ' + toString(this.bottomRight_1) + ' ' + toString(this.bottomLeft_1);
  }
  protoOf(BSBorderRadius).get_topLeft_hl8stp_k$ = function () {
    return this.topLeft_1;
  };
  protoOf(BSBorderRadius).get_topRight_n1oya8_k$ = function () {
    return this.topRight_1;
  };
  protoOf(BSBorderRadius).get_bottomRight_3mats8_k$ = function () {
    return this.bottomRight_1;
  };
  protoOf(BSBorderRadius).get_bottomLeft_n0ywkb_k$ = function () {
    return this.bottomLeft_1;
  };
  protoOf(BSBorderRadius).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(BSBorderRadius).component1_7eebsc_k$ = function () {
    return this.topLeft_1;
  };
  protoOf(BSBorderRadius).component2_7eebsb_k$ = function () {
    return this.topRight_1;
  };
  protoOf(BSBorderRadius).component3_7eebsa_k$ = function () {
    return this.bottomRight_1;
  };
  protoOf(BSBorderRadius).component4_7eebs9_k$ = function () {
    return this.bottomLeft_1;
  };
  protoOf(BSBorderRadius).copy_kxqwl_k$ = function (topLeft, topRight, bottomRight, bottomLeft) {
    return new BSBorderRadius(topLeft, topRight, bottomRight, bottomLeft);
  };
  protoOf(BSBorderRadius).copy$default_g3rbyh_k$ = function (topLeft, topRight, bottomRight, bottomLeft, $super) {
    topLeft = topLeft === VOID ? this.topLeft_1 : topLeft;
    topRight = topRight === VOID ? this.topRight_1 : topRight;
    bottomRight = bottomRight === VOID ? this.bottomRight_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? this.bottomLeft_1 : bottomLeft;
    return $super === VOID ? this.copy_kxqwl_k$(topLeft, topRight, bottomRight, bottomLeft) : $super.copy_kxqwl_k$.call(this, topLeft, topRight, bottomRight, bottomLeft);
  };
  protoOf(BSBorderRadius).toString = function () {
    return 'BSBorderRadius(topLeft=' + toString(this.topLeft_1) + ', topRight=' + toString(this.topRight_1) + ', bottomRight=' + toString(this.bottomRight_1) + ', bottomLeft=' + toString(this.bottomLeft_1) + ')';
  };
  protoOf(BSBorderRadius).hashCode = function () {
    var result = hashCode(this.topLeft_1);
    result = imul(result, 31) + hashCode(this.topRight_1) | 0;
    result = imul(result, 31) + hashCode(this.bottomRight_1) | 0;
    result = imul(result, 31) + hashCode(this.bottomLeft_1) | 0;
    return result;
  };
  protoOf(BSBorderRadius).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BSBorderRadius))
      return false;
    var tmp0_other_with_cast = other instanceof BSBorderRadius ? other : THROW_CCE();
    if (!equals(this.topLeft_1, tmp0_other_with_cast.topLeft_1))
      return false;
    if (!equals(this.topRight_1, tmp0_other_with_cast.topRight_1))
      return false;
    if (!equals(this.bottomRight_1, tmp0_other_with_cast.bottomRight_1))
      return false;
    if (!equals(this.bottomLeft_1, tmp0_other_with_cast.bottomLeft_1))
      return false;
    return true;
  };
  var BackgroundStyle_Primary_instance;
  var BackgroundStyle_Secondary_instance;
  var BackgroundStyle_Success_instance;
  var BackgroundStyle_Danger_instance;
  var BackgroundStyle_Warning_instance;
  var BackgroundStyle_Info_instance;
  var BackgroundStyle_Light_instance;
  var BackgroundStyle_Dark_instance;
  function values() {
    return [BackgroundStyle_Primary_getInstance(), BackgroundStyle_Secondary_getInstance(), BackgroundStyle_Success_getInstance(), BackgroundStyle_Danger_getInstance(), BackgroundStyle_Warning_getInstance(), BackgroundStyle_Info_getInstance(), BackgroundStyle_Light_getInstance(), BackgroundStyle_Dark_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Primary':
        return BackgroundStyle_Primary_getInstance();
      case 'Secondary':
        return BackgroundStyle_Secondary_getInstance();
      case 'Success':
        return BackgroundStyle_Success_getInstance();
      case 'Danger':
        return BackgroundStyle_Danger_getInstance();
      case 'Warning':
        return BackgroundStyle_Warning_getInstance();
      case 'Info':
        return BackgroundStyle_Info_getInstance();
      case 'Light':
        return BackgroundStyle_Light_getInstance();
      case 'Dark':
        return BackgroundStyle_Dark_getInstance();
      default:
        BackgroundStyle_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BackgroundStyle_entriesInitialized;
  function BackgroundStyle_initEntries() {
    if (BackgroundStyle_entriesInitialized)
      return Unit_getInstance();
    BackgroundStyle_entriesInitialized = true;
    BackgroundStyle_Primary_instance = new BackgroundStyle('Primary', 0, 'bg-primary');
    BackgroundStyle_Secondary_instance = new BackgroundStyle('Secondary', 1, 'bg-secondary');
    BackgroundStyle_Success_instance = new BackgroundStyle('Success', 2, 'bg-success');
    BackgroundStyle_Danger_instance = new BackgroundStyle('Danger', 3, 'bg-danger');
    BackgroundStyle_Warning_instance = new BackgroundStyle('Warning', 4, 'bg-warning');
    BackgroundStyle_Info_instance = new BackgroundStyle('Info', 5, 'bg-info');
    BackgroundStyle_Light_instance = new BackgroundStyle('Light', 6, 'bg-light');
    BackgroundStyle_Dark_instance = new BackgroundStyle('Dark', 7, 'bg-dark');
  }
  var $ENTRIES;
  function BackgroundStyle(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(BackgroundStyle).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function BackgroundStyle_Primary_getInstance() {
    BackgroundStyle_initEntries();
    return BackgroundStyle_Primary_instance;
  }
  function BackgroundStyle_Secondary_getInstance() {
    BackgroundStyle_initEntries();
    return BackgroundStyle_Secondary_instance;
  }
  function BackgroundStyle_Success_getInstance() {
    BackgroundStyle_initEntries();
    return BackgroundStyle_Success_instance;
  }
  function BackgroundStyle_Danger_getInstance() {
    BackgroundStyle_initEntries();
    return BackgroundStyle_Danger_instance;
  }
  function BackgroundStyle_Warning_getInstance() {
    BackgroundStyle_initEntries();
    return BackgroundStyle_Warning_instance;
  }
  function BackgroundStyle_Info_getInstance() {
    BackgroundStyle_initEntries();
    return BackgroundStyle_Info_instance;
  }
  function BackgroundStyle_Light_getInstance() {
    BackgroundStyle_initEntries();
    return BackgroundStyle_Light_instance;
  }
  function BackgroundStyle_Dark_getInstance() {
    BackgroundStyle_initEntries();
    return BackgroundStyle_Dark_instance;
  }
  var BadgeVariant_Regular_instance;
  var BadgeVariant_Straight_instance;
  var BadgeVariant_Rounded_instance;
  var BadgeVariant_Empty_instance;
  function values_0() {
    return [BadgeVariant_Regular_getInstance(), BadgeVariant_Straight_getInstance(), BadgeVariant_Rounded_getInstance(), BadgeVariant_Empty_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Regular':
        return BadgeVariant_Regular_getInstance();
      case 'Straight':
        return BadgeVariant_Straight_getInstance();
      case 'Rounded':
        return BadgeVariant_Rounded_getInstance();
      case 'Empty':
        return BadgeVariant_Empty_getInstance();
      default:
        BadgeVariant_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var BadgeVariant_entriesInitialized;
  function BadgeVariant_initEntries() {
    if (BadgeVariant_entriesInitialized)
      return Unit_getInstance();
    BadgeVariant_entriesInitialized = true;
    BadgeVariant_Regular_instance = new BadgeVariant('Regular', 0);
    BadgeVariant_Straight_instance = new BadgeVariant('Straight', 1);
    BadgeVariant_Rounded_instance = new BadgeVariant('Rounded', 2, listOf('rounded-pill'));
    BadgeVariant_Empty_instance = new BadgeVariant('Empty', 3, listOf_0(['border', 'border-light', 'rounded-circle', 'p-2']));
  }
  var $ENTRIES_0;
  function BadgeVariant(name, ordinal, classes) {
    classes = classes === VOID ? null : classes;
    Enum.call(this, name, ordinal);
    this.classes_1 = classes;
  }
  protoOf(BadgeVariant).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  function BadgeVariant_Regular_getInstance() {
    BadgeVariant_initEntries();
    return BadgeVariant_Regular_instance;
  }
  function BadgeVariant_Straight_getInstance() {
    BadgeVariant_initEntries();
    return BadgeVariant_Straight_instance;
  }
  function BadgeVariant_Rounded_getInstance() {
    BadgeVariant_initEntries();
    return BadgeVariant_Rounded_instance;
  }
  function BadgeVariant_Empty_getInstance() {
    BadgeVariant_initEntries();
    return BadgeVariant_Empty_instance;
  }
  var com_stevdza_san_kotlinbs_models_BreadcrumbItem$stable;
  var com_stevdza_san_kotlinbs_models_CarouselItem$stable;
  var InputSize_Default_instance;
  var InputSize_Small_instance;
  var InputSize_Large_instance;
  function values_1() {
    return [InputSize_Default_getInstance(), InputSize_Small_getInstance(), InputSize_Large_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Default':
        return InputSize_Default_getInstance();
      case 'Small':
        return InputSize_Small_getInstance();
      case 'Large':
        return InputSize_Large_getInstance();
      default:
        InputSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var InputSize_entriesInitialized;
  function InputSize_initEntries() {
    if (InputSize_entriesInitialized)
      return Unit_getInstance();
    InputSize_entriesInitialized = true;
    InputSize_Default_instance = new InputSize('Default', 0, '');
    InputSize_Small_instance = new InputSize('Small', 1, 'form-control-sm');
    InputSize_Large_instance = new InputSize('Large', 2, 'form-control-lg');
  }
  var $ENTRIES_1;
  function InputSize(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(InputSize).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function InputSize_Default_getInstance() {
    InputSize_initEntries();
    return InputSize_Default_instance;
  }
  function InputSize_Small_getInstance() {
    InputSize_initEntries();
    return InputSize_Small_instance;
  }
  function InputSize_Large_getInstance() {
    InputSize_initEntries();
    return InputSize_Large_instance;
  }
  var com_stevdza_san_kotlinbs_models_InputValidation$stable;
  function InputValidation(isValid, isInvalid, validFeedback, invalidFeedback) {
    isValid = isValid === VOID ? false : isValid;
    isInvalid = isInvalid === VOID ? false : isInvalid;
    validFeedback = validFeedback === VOID ? 'Correct!' : validFeedback;
    invalidFeedback = invalidFeedback === VOID ? 'Incorrect!' : invalidFeedback;
    this.isValid_1 = isValid;
    this.isInvalid_1 = isInvalid;
    this.validFeedback_1 = validFeedback;
    this.invalidFeedback_1 = invalidFeedback;
  }
  protoOf(InputValidation).get_isValid_zh4f7b_k$ = function () {
    return this.isValid_1;
  };
  protoOf(InputValidation).get_isInvalid_vc54uc_k$ = function () {
    return this.isInvalid_1;
  };
  protoOf(InputValidation).get_validFeedback_iu7x54_k$ = function () {
    return this.validFeedback_1;
  };
  protoOf(InputValidation).get_invalidFeedback_fj7eer_k$ = function () {
    return this.invalidFeedback_1;
  };
  protoOf(InputValidation).component1_7eebsc_k$ = function () {
    return this.isValid_1;
  };
  protoOf(InputValidation).component2_7eebsb_k$ = function () {
    return this.isInvalid_1;
  };
  protoOf(InputValidation).component3_7eebsa_k$ = function () {
    return this.validFeedback_1;
  };
  protoOf(InputValidation).component4_7eebs9_k$ = function () {
    return this.invalidFeedback_1;
  };
  protoOf(InputValidation).copy_8q7rjf_k$ = function (isValid, isInvalid, validFeedback, invalidFeedback) {
    return new InputValidation(isValid, isInvalid, validFeedback, invalidFeedback);
  };
  protoOf(InputValidation).copy$default_uwf6r_k$ = function (isValid, isInvalid, validFeedback, invalidFeedback, $super) {
    isValid = isValid === VOID ? this.isValid_1 : isValid;
    isInvalid = isInvalid === VOID ? this.isInvalid_1 : isInvalid;
    validFeedback = validFeedback === VOID ? this.validFeedback_1 : validFeedback;
    invalidFeedback = invalidFeedback === VOID ? this.invalidFeedback_1 : invalidFeedback;
    return $super === VOID ? this.copy_8q7rjf_k$(isValid, isInvalid, validFeedback, invalidFeedback) : $super.copy_8q7rjf_k$.call(this, isValid, isInvalid, validFeedback, invalidFeedback);
  };
  protoOf(InputValidation).toString = function () {
    return 'InputValidation(isValid=' + this.isValid_1 + ', isInvalid=' + this.isInvalid_1 + ', validFeedback=' + this.validFeedback_1 + ', invalidFeedback=' + this.invalidFeedback_1 + ')';
  };
  protoOf(InputValidation).hashCode = function () {
    var result = getBooleanHashCode(this.isValid_1);
    result = imul(result, 31) + getBooleanHashCode(this.isInvalid_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.validFeedback_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.invalidFeedback_1) | 0;
    return result;
  };
  protoOf(InputValidation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InputValidation))
      return false;
    var tmp0_other_with_cast = other instanceof InputValidation ? other : THROW_CCE();
    if (!(this.isValid_1 === tmp0_other_with_cast.isValid_1))
      return false;
    if (!(this.isInvalid_1 === tmp0_other_with_cast.isInvalid_1))
      return false;
    if (!(this.validFeedback_1 === tmp0_other_with_cast.validFeedback_1))
      return false;
    if (!(this.invalidFeedback_1 === tmp0_other_with_cast.invalidFeedback_1))
      return false;
    return true;
  };
  var com_stevdza_san_kotlinbs_models_PreviousButton$stable;
  var com_stevdza_san_kotlinbs_models_NextButton$stable;
  var com_stevdza_san_kotlinbs_models_SpinnerVariant_Default$stable;
  var com_stevdza_san_kotlinbs_models_SpinnerVariant_DefaultGrow$stable;
  var com_stevdza_san_kotlinbs_models_SpinnerVariant_Small$stable;
  var com_stevdza_san_kotlinbs_models_SpinnerVariant_SmallGrow$stable;
  var com_stevdza_san_kotlinbs_models_SpinnerVariant_Large$stable;
  var com_stevdza_san_kotlinbs_models_SpinnerVariant_LargeGrow$stable;
  var com_stevdza_san_kotlinbs_models_SpinnerVariant$stable;
  var com_stevdza_san_kotlinbs_models_button_ButtonBadge$stable;
  function ButtonBadge(modifier, text, style, variant) {
    modifier = modifier === VOID ? Companion_getInstance() : modifier;
    style = style === VOID ? BackgroundStyle_Danger_getInstance() : style;
    variant = variant === VOID ? BadgeVariant_Rounded_getInstance() : variant;
    this.modifier_1 = modifier;
    this.text_1 = text;
    this.style_1 = style;
    this.variant_1 = variant;
  }
  protoOf(ButtonBadge).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(ButtonBadge).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(ButtonBadge).get_style_iyqetk_k$ = function () {
    return this.style_1;
  };
  protoOf(ButtonBadge).get_variant_56j34s_k$ = function () {
    return this.variant_1;
  };
  protoOf(ButtonBadge).component1_7eebsc_k$ = function () {
    return this.modifier_1;
  };
  protoOf(ButtonBadge).component2_7eebsb_k$ = function () {
    return this.text_1;
  };
  protoOf(ButtonBadge).component3_7eebsa_k$ = function () {
    return this.style_1;
  };
  protoOf(ButtonBadge).component4_7eebs9_k$ = function () {
    return this.variant_1;
  };
  protoOf(ButtonBadge).copy_kusiei_k$ = function (modifier, text, style, variant) {
    return new ButtonBadge(modifier, text, style, variant);
  };
  protoOf(ButtonBadge).copy$default_z86xgx_k$ = function (modifier, text, style, variant, $super) {
    modifier = modifier === VOID ? this.modifier_1 : modifier;
    text = text === VOID ? this.text_1 : text;
    style = style === VOID ? this.style_1 : style;
    variant = variant === VOID ? this.variant_1 : variant;
    return $super === VOID ? this.copy_kusiei_k$(modifier, text, style, variant) : $super.copy_kusiei_k$.call(this, modifier, text, style, variant);
  };
  protoOf(ButtonBadge).toString = function () {
    return 'ButtonBadge(modifier=' + toString(this.modifier_1) + ', text=' + this.text_1 + ', style=' + this.style_1.toString() + ', variant=' + this.variant_1.toString() + ')';
  };
  protoOf(ButtonBadge).hashCode = function () {
    var result = hashCode(this.modifier_1);
    result = imul(result, 31) + getStringHashCode(this.text_1) | 0;
    result = imul(result, 31) + this.style_1.hashCode() | 0;
    result = imul(result, 31) + this.variant_1.hashCode() | 0;
    return result;
  };
  protoOf(ButtonBadge).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ButtonBadge))
      return false;
    var tmp0_other_with_cast = other instanceof ButtonBadge ? other : THROW_CCE();
    if (!equals(this.modifier_1, tmp0_other_with_cast.modifier_1))
      return false;
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!this.style_1.equals(tmp0_other_with_cast.style_1))
      return false;
    if (!this.variant_1.equals(tmp0_other_with_cast.variant_1))
      return false;
    return true;
  };
  var com_stevdza_san_kotlinbs_models_button_ButtonCustomization$stable;
  function ButtonCustomization(color, backgroundColor, borderColor, hoverColor, hoverBackgroundColor, hoverBorderColor, activeColor, activeBackgroundColor, activeBorderColor, disabledColor, disabledBackgroundColor, disabledBorderColor, borderRadius, horizontalPadding, verticalPadding, fontFamily, fontSize, fontWeight, lineHeight, gradient) {
    color = color === VOID ? null : color;
    backgroundColor = backgroundColor === VOID ? null : backgroundColor;
    borderColor = borderColor === VOID ? null : borderColor;
    hoverColor = hoverColor === VOID ? null : hoverColor;
    hoverBackgroundColor = hoverBackgroundColor === VOID ? null : hoverBackgroundColor;
    hoverBorderColor = hoverBorderColor === VOID ? null : hoverBorderColor;
    activeColor = activeColor === VOID ? null : activeColor;
    activeBackgroundColor = activeBackgroundColor === VOID ? null : activeBackgroundColor;
    activeBorderColor = activeBorderColor === VOID ? null : activeBorderColor;
    disabledColor = disabledColor === VOID ? null : disabledColor;
    disabledBackgroundColor = disabledBackgroundColor === VOID ? null : disabledBackgroundColor;
    disabledBorderColor = disabledBorderColor === VOID ? null : disabledBorderColor;
    borderRadius = borderRadius === VOID ? BSBorderRadius_init_$Create$(get_px(0)) : borderRadius;
    horizontalPadding = horizontalPadding === VOID ? get_cssRem(0.75) : horizontalPadding;
    verticalPadding = verticalPadding === VOID ? get_cssRem(0.375) : verticalPadding;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontSize = fontSize === VOID ? get_cssRem(1) : fontSize;
    fontWeight = fontWeight === VOID ? Companion_getInstance_2().get_Normal_22avww_k$() : fontWeight;
    lineHeight = lineHeight === VOID ? get_cssRem(1.5) : lineHeight;
    gradient = gradient === VOID ? null : gradient;
    this.color_1 = color;
    this.backgroundColor_1 = backgroundColor;
    this.borderColor_1 = borderColor;
    this.hoverColor_1 = hoverColor;
    this.hoverBackgroundColor_1 = hoverBackgroundColor;
    this.hoverBorderColor_1 = hoverBorderColor;
    this.activeColor_1 = activeColor;
    this.activeBackgroundColor_1 = activeBackgroundColor;
    this.activeBorderColor_1 = activeBorderColor;
    this.disabledColor_1 = disabledColor;
    this.disabledBackgroundColor_1 = disabledBackgroundColor;
    this.disabledBorderColor_1 = disabledBorderColor;
    this.borderRadius_1 = borderRadius;
    this.horizontalPadding_1 = horizontalPadding;
    this.verticalPadding_1 = verticalPadding;
    this.fontFamily_1 = fontFamily;
    this.fontSize_1 = fontSize;
    this.fontWeight_1 = fontWeight;
    this.lineHeight_1 = lineHeight;
    this.gradient_1 = gradient;
  }
  protoOf(ButtonCustomization).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(ButtonCustomization).get_backgroundColor_a0bggk_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(ButtonCustomization).get_borderColor_puk0tq_k$ = function () {
    return this.borderColor_1;
  };
  protoOf(ButtonCustomization).get_hoverColor_g4u38w_k$ = function () {
    return this.hoverColor_1;
  };
  protoOf(ButtonCustomization).get_hoverBackgroundColor_y7ragu_k$ = function () {
    return this.hoverBackgroundColor_1;
  };
  protoOf(ButtonCustomization).get_hoverBorderColor_9jlqpw_k$ = function () {
    return this.hoverBorderColor_1;
  };
  protoOf(ButtonCustomization).get_activeColor_3x7qlo_k$ = function () {
    return this.activeColor_1;
  };
  protoOf(ButtonCustomization).get_activeBackgroundColor_ve13cq_k$ = function () {
    return this.activeBackgroundColor_1;
  };
  protoOf(ButtonCustomization).get_activeBorderColor_jnxv60_k$ = function () {
    return this.activeBorderColor_1;
  };
  protoOf(ButtonCustomization).get_disabledColor_7tsgde_k$ = function () {
    return this.disabledColor_1;
  };
  protoOf(ButtonCustomization).get_disabledBackgroundColor_w828cw_k$ = function () {
    return this.disabledBackgroundColor_1;
  };
  protoOf(ButtonCustomization).get_disabledBorderColor_rywwry_k$ = function () {
    return this.disabledBorderColor_1;
  };
  protoOf(ButtonCustomization).get_borderRadius_quu3af_k$ = function () {
    return this.borderRadius_1;
  };
  protoOf(ButtonCustomization).get_horizontalPadding_lfhi70_k$ = function () {
    return this.horizontalPadding_1;
  };
  protoOf(ButtonCustomization).get_verticalPadding_xaupm6_k$ = function () {
    return this.verticalPadding_1;
  };
  protoOf(ButtonCustomization).get_fontFamily_ulphcs_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(ButtonCustomization).get_fontSize_pr9n47_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(ButtonCustomization).get_fontWeight_wbif2o_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(ButtonCustomization).get_lineHeight_spcmd8_k$ = function () {
    return this.lineHeight_1;
  };
  protoOf(ButtonCustomization).get_gradient_ubk7if_k$ = function () {
    return this.gradient_1;
  };
  protoOf(ButtonCustomization).component1_7eebsc_k$ = function () {
    return this.color_1;
  };
  protoOf(ButtonCustomization).component2_7eebsb_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(ButtonCustomization).component3_7eebsa_k$ = function () {
    return this.borderColor_1;
  };
  protoOf(ButtonCustomization).component4_7eebs9_k$ = function () {
    return this.hoverColor_1;
  };
  protoOf(ButtonCustomization).component5_7eebs8_k$ = function () {
    return this.hoverBackgroundColor_1;
  };
  protoOf(ButtonCustomization).component6_7eebs7_k$ = function () {
    return this.hoverBorderColor_1;
  };
  protoOf(ButtonCustomization).component7_7eebs6_k$ = function () {
    return this.activeColor_1;
  };
  protoOf(ButtonCustomization).component8_7eebs5_k$ = function () {
    return this.activeBackgroundColor_1;
  };
  protoOf(ButtonCustomization).component9_7eebs4_k$ = function () {
    return this.activeBorderColor_1;
  };
  protoOf(ButtonCustomization).component10_gazzfo_k$ = function () {
    return this.disabledColor_1;
  };
  protoOf(ButtonCustomization).component11_gazzfn_k$ = function () {
    return this.disabledBackgroundColor_1;
  };
  protoOf(ButtonCustomization).component12_gazzfm_k$ = function () {
    return this.disabledBorderColor_1;
  };
  protoOf(ButtonCustomization).component13_gazzfl_k$ = function () {
    return this.borderRadius_1;
  };
  protoOf(ButtonCustomization).component14_gazzfk_k$ = function () {
    return this.horizontalPadding_1;
  };
  protoOf(ButtonCustomization).component15_gazzfj_k$ = function () {
    return this.verticalPadding_1;
  };
  protoOf(ButtonCustomization).component16_gazzfi_k$ = function () {
    return this.fontFamily_1;
  };
  protoOf(ButtonCustomization).component17_gazzfh_k$ = function () {
    return this.fontSize_1;
  };
  protoOf(ButtonCustomization).component18_gazzfg_k$ = function () {
    return this.fontWeight_1;
  };
  protoOf(ButtonCustomization).component19_gazzff_k$ = function () {
    return this.lineHeight_1;
  };
  protoOf(ButtonCustomization).component20_gazzet_k$ = function () {
    return this.gradient_1;
  };
  protoOf(ButtonCustomization).copy_dkqg12_k$ = function (color, backgroundColor, borderColor, hoverColor, hoverBackgroundColor, hoverBorderColor, activeColor, activeBackgroundColor, activeBorderColor, disabledColor, disabledBackgroundColor, disabledBorderColor, borderRadius, horizontalPadding, verticalPadding, fontFamily, fontSize, fontWeight, lineHeight, gradient) {
    return new ButtonCustomization(color, backgroundColor, borderColor, hoverColor, hoverBackgroundColor, hoverBorderColor, activeColor, activeBackgroundColor, activeBorderColor, disabledColor, disabledBackgroundColor, disabledBorderColor, borderRadius, horizontalPadding, verticalPadding, fontFamily, fontSize, fontWeight, lineHeight, gradient);
  };
  protoOf(ButtonCustomization).copy$default_ki9aij_k$ = function (color, backgroundColor, borderColor, hoverColor, hoverBackgroundColor, hoverBorderColor, activeColor, activeBackgroundColor, activeBorderColor, disabledColor, disabledBackgroundColor, disabledBorderColor, borderRadius, horizontalPadding, verticalPadding, fontFamily, fontSize, fontWeight, lineHeight, gradient, $super) {
    color = color === VOID ? this.color_1 : color;
    backgroundColor = backgroundColor === VOID ? this.backgroundColor_1 : backgroundColor;
    borderColor = borderColor === VOID ? this.borderColor_1 : borderColor;
    hoverColor = hoverColor === VOID ? this.hoverColor_1 : hoverColor;
    hoverBackgroundColor = hoverBackgroundColor === VOID ? this.hoverBackgroundColor_1 : hoverBackgroundColor;
    hoverBorderColor = hoverBorderColor === VOID ? this.hoverBorderColor_1 : hoverBorderColor;
    activeColor = activeColor === VOID ? this.activeColor_1 : activeColor;
    activeBackgroundColor = activeBackgroundColor === VOID ? this.activeBackgroundColor_1 : activeBackgroundColor;
    activeBorderColor = activeBorderColor === VOID ? this.activeBorderColor_1 : activeBorderColor;
    disabledColor = disabledColor === VOID ? this.disabledColor_1 : disabledColor;
    disabledBackgroundColor = disabledBackgroundColor === VOID ? this.disabledBackgroundColor_1 : disabledBackgroundColor;
    disabledBorderColor = disabledBorderColor === VOID ? this.disabledBorderColor_1 : disabledBorderColor;
    borderRadius = borderRadius === VOID ? this.borderRadius_1 : borderRadius;
    horizontalPadding = horizontalPadding === VOID ? this.horizontalPadding_1 : horizontalPadding;
    verticalPadding = verticalPadding === VOID ? this.verticalPadding_1 : verticalPadding;
    fontFamily = fontFamily === VOID ? this.fontFamily_1 : fontFamily;
    fontSize = fontSize === VOID ? this.fontSize_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.fontWeight_1 : fontWeight;
    lineHeight = lineHeight === VOID ? this.lineHeight_1 : lineHeight;
    gradient = gradient === VOID ? this.gradient_1 : gradient;
    return $super === VOID ? this.copy_dkqg12_k$(color, backgroundColor, borderColor, hoverColor, hoverBackgroundColor, hoverBorderColor, activeColor, activeBackgroundColor, activeBorderColor, disabledColor, disabledBackgroundColor, disabledBorderColor, borderRadius, horizontalPadding, verticalPadding, fontFamily, fontSize, fontWeight, lineHeight, gradient) : $super.copy_dkqg12_k$.call(this, color, backgroundColor, borderColor, hoverColor, hoverBackgroundColor, hoverBorderColor, activeColor, activeBackgroundColor, activeBorderColor, disabledColor, disabledBackgroundColor, disabledBorderColor, borderRadius, horizontalPadding, verticalPadding, fontFamily, fontSize, fontWeight, lineHeight, gradient);
  };
  protoOf(ButtonCustomization).toString = function () {
    return 'ButtonCustomization(color=' + toString_0(this.color_1) + ', backgroundColor=' + toString_0(this.backgroundColor_1) + ', borderColor=' + toString_0(this.borderColor_1) + ', hoverColor=' + toString_0(this.hoverColor_1) + ', hoverBackgroundColor=' + toString_0(this.hoverBackgroundColor_1) + ', hoverBorderColor=' + toString_0(this.hoverBorderColor_1) + ', activeColor=' + toString_0(this.activeColor_1) + ', activeBackgroundColor=' + toString_0(this.activeBackgroundColor_1) + ', activeBorderColor=' + toString_0(this.activeBorderColor_1) + ', disabledColor=' + toString_0(this.disabledColor_1) + ', disabledBackgroundColor=' + toString_0(this.disabledBackgroundColor_1) + ', disabledBorderColor=' + toString_0(this.disabledBorderColor_1) + ', borderRadius=' + this.borderRadius_1.toString() + ', horizontalPadding=' + toString(this.horizontalPadding_1) + ', verticalPadding=' + toString(this.verticalPadding_1) + ', fontFamily=' + this.fontFamily_1 + ', fontSize=' + toString(this.fontSize_1) + ', fontWeight=' + this.fontWeight_1.toString() + ', lineHeight=' + toString(this.lineHeight_1) + ', gradient=' + toString_0(this.gradient_1) + ')';
  };
  protoOf(ButtonCustomization).hashCode = function () {
    var result = this.color_1 == null ? 0 : hashCode(this.color_1);
    result = imul(result, 31) + (this.backgroundColor_1 == null ? 0 : hashCode(this.backgroundColor_1)) | 0;
    result = imul(result, 31) + (this.borderColor_1 == null ? 0 : hashCode(this.borderColor_1)) | 0;
    result = imul(result, 31) + (this.hoverColor_1 == null ? 0 : hashCode(this.hoverColor_1)) | 0;
    result = imul(result, 31) + (this.hoverBackgroundColor_1 == null ? 0 : hashCode(this.hoverBackgroundColor_1)) | 0;
    result = imul(result, 31) + (this.hoverBorderColor_1 == null ? 0 : hashCode(this.hoverBorderColor_1)) | 0;
    result = imul(result, 31) + (this.activeColor_1 == null ? 0 : hashCode(this.activeColor_1)) | 0;
    result = imul(result, 31) + (this.activeBackgroundColor_1 == null ? 0 : hashCode(this.activeBackgroundColor_1)) | 0;
    result = imul(result, 31) + (this.activeBorderColor_1 == null ? 0 : hashCode(this.activeBorderColor_1)) | 0;
    result = imul(result, 31) + (this.disabledColor_1 == null ? 0 : hashCode(this.disabledColor_1)) | 0;
    result = imul(result, 31) + (this.disabledBackgroundColor_1 == null ? 0 : hashCode(this.disabledBackgroundColor_1)) | 0;
    result = imul(result, 31) + (this.disabledBorderColor_1 == null ? 0 : hashCode(this.disabledBorderColor_1)) | 0;
    result = imul(result, 31) + this.borderRadius_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.horizontalPadding_1) | 0;
    result = imul(result, 31) + hashCode(this.verticalPadding_1) | 0;
    result = imul(result, 31) + (this.fontFamily_1 == null ? 0 : getStringHashCode(this.fontFamily_1)) | 0;
    result = imul(result, 31) + hashCode(this.fontSize_1) | 0;
    result = imul(result, 31) + hashCode(this.fontWeight_1) | 0;
    result = imul(result, 31) + hashCode(this.lineHeight_1) | 0;
    result = imul(result, 31) + (this.gradient_1 == null ? 0 : hashCode(this.gradient_1)) | 0;
    return result;
  };
  protoOf(ButtonCustomization).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ButtonCustomization))
      return false;
    var tmp0_other_with_cast = other instanceof ButtonCustomization ? other : THROW_CCE();
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    if (!equals(this.backgroundColor_1, tmp0_other_with_cast.backgroundColor_1))
      return false;
    if (!equals(this.borderColor_1, tmp0_other_with_cast.borderColor_1))
      return false;
    if (!equals(this.hoverColor_1, tmp0_other_with_cast.hoverColor_1))
      return false;
    if (!equals(this.hoverBackgroundColor_1, tmp0_other_with_cast.hoverBackgroundColor_1))
      return false;
    if (!equals(this.hoverBorderColor_1, tmp0_other_with_cast.hoverBorderColor_1))
      return false;
    if (!equals(this.activeColor_1, tmp0_other_with_cast.activeColor_1))
      return false;
    if (!equals(this.activeBackgroundColor_1, tmp0_other_with_cast.activeBackgroundColor_1))
      return false;
    if (!equals(this.activeBorderColor_1, tmp0_other_with_cast.activeBorderColor_1))
      return false;
    if (!equals(this.disabledColor_1, tmp0_other_with_cast.disabledColor_1))
      return false;
    if (!equals(this.disabledBackgroundColor_1, tmp0_other_with_cast.disabledBackgroundColor_1))
      return false;
    if (!equals(this.disabledBorderColor_1, tmp0_other_with_cast.disabledBorderColor_1))
      return false;
    if (!this.borderRadius_1.equals(tmp0_other_with_cast.borderRadius_1))
      return false;
    if (!equals(this.horizontalPadding_1, tmp0_other_with_cast.horizontalPadding_1))
      return false;
    if (!equals(this.verticalPadding_1, tmp0_other_with_cast.verticalPadding_1))
      return false;
    if (!(this.fontFamily_1 == tmp0_other_with_cast.fontFamily_1))
      return false;
    if (!equals(this.fontSize_1, tmp0_other_with_cast.fontSize_1))
      return false;
    if (!equals(this.fontWeight_1, tmp0_other_with_cast.fontWeight_1))
      return false;
    if (!equals(this.lineHeight_1, tmp0_other_with_cast.lineHeight_1))
      return false;
    if (!equals(this.gradient_1, tmp0_other_with_cast.gradient_1))
      return false;
    return true;
  };
  function com_stevdza_san_kotlinbs_models_button_ButtonCustomization$stableprop_getter() {
    return com_stevdza_san_kotlinbs_models_button_ButtonCustomization$stable;
  }
  var com_stevdza_san_kotlinbs_models_button_ButtonProperty$stable;
  var ButtonSize_Default_instance;
  var ButtonSize_Small_instance;
  var ButtonSize_Large_instance;
  function values_2() {
    return [ButtonSize_Default_getInstance(), ButtonSize_Small_getInstance(), ButtonSize_Large_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Default':
        return ButtonSize_Default_getInstance();
      case 'Small':
        return ButtonSize_Small_getInstance();
      case 'Large':
        return ButtonSize_Large_getInstance();
      default:
        ButtonSize_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var ButtonSize_entriesInitialized;
  function ButtonSize_initEntries() {
    if (ButtonSize_entriesInitialized)
      return Unit_getInstance();
    ButtonSize_entriesInitialized = true;
    ButtonSize_Default_instance = new ButtonSize('Default', 0, 'btn');
    ButtonSize_Small_instance = new ButtonSize('Small', 1, 'btn-sm');
    ButtonSize_Large_instance = new ButtonSize('Large', 2, 'btn-lg');
  }
  var $ENTRIES_2;
  function ButtonSize(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(ButtonSize).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function ButtonSize_Default_getInstance() {
    ButtonSize_initEntries();
    return ButtonSize_Default_instance;
  }
  function ButtonSize_Small_getInstance() {
    ButtonSize_initEntries();
    return ButtonSize_Small_instance;
  }
  function ButtonSize_Large_getInstance() {
    ButtonSize_initEntries();
    return ButtonSize_Large_instance;
  }
  var ButtonType_Button_instance;
  var ButtonType_Submit_instance;
  var ButtonType_Reset_instance;
  function values_3() {
    return [ButtonType_Button_getInstance(), ButtonType_Submit_getInstance(), ButtonType_Reset_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'Button':
        return ButtonType_Button_getInstance();
      case 'Submit':
        return ButtonType_Submit_getInstance();
      case 'Reset':
        return ButtonType_Reset_getInstance();
      default:
        ButtonType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var ButtonType_entriesInitialized;
  function ButtonType_initEntries() {
    if (ButtonType_entriesInitialized)
      return Unit_getInstance();
    ButtonType_entriesInitialized = true;
    ButtonType_Button_instance = new ButtonType('Button', 0, 'button');
    ButtonType_Submit_instance = new ButtonType('Submit', 1, 'submit');
    ButtonType_Reset_instance = new ButtonType('Reset', 2, 'reset');
  }
  var $ENTRIES_3;
  function ButtonType(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(ButtonType).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function ButtonType_Button_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Button_instance;
  }
  function ButtonType_Submit_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Submit_instance;
  }
  function ButtonType_Reset_getInstance() {
    ButtonType_initEntries();
    return ButtonType_Reset_instance;
  }
  var ButtonVariant_Primary_instance;
  var ButtonVariant_PrimaryOutline_instance;
  var ButtonVariant_Secondary_instance;
  var ButtonVariant_SecondaryOutline_instance;
  var ButtonVariant_Success_instance;
  var ButtonVariant_SuccessOutline_instance;
  var ButtonVariant_Danger_instance;
  var ButtonVariant_DangerOutline_instance;
  var ButtonVariant_Warning_instance;
  var ButtonVariant_WarningOutline_instance;
  var ButtonVariant_Info_instance;
  var ButtonVariant_InfoOutline_instance;
  var ButtonVariant_Light_instance;
  var ButtonVariant_LightOutline_instance;
  var ButtonVariant_Dark_instance;
  var ButtonVariant_DarkOutline_instance;
  var ButtonVariant_Link_instance;
  var ButtonVariant_LinkOutline_instance;
  function values_4() {
    return [ButtonVariant_Primary_getInstance(), ButtonVariant_PrimaryOutline_getInstance(), ButtonVariant_Secondary_getInstance(), ButtonVariant_SecondaryOutline_getInstance(), ButtonVariant_Success_getInstance(), ButtonVariant_SuccessOutline_getInstance(), ButtonVariant_Danger_getInstance(), ButtonVariant_DangerOutline_getInstance(), ButtonVariant_Warning_getInstance(), ButtonVariant_WarningOutline_getInstance(), ButtonVariant_Info_getInstance(), ButtonVariant_InfoOutline_getInstance(), ButtonVariant_Light_getInstance(), ButtonVariant_LightOutline_getInstance(), ButtonVariant_Dark_getInstance(), ButtonVariant_DarkOutline_getInstance(), ButtonVariant_Link_getInstance(), ButtonVariant_LinkOutline_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'Primary':
        return ButtonVariant_Primary_getInstance();
      case 'PrimaryOutline':
        return ButtonVariant_PrimaryOutline_getInstance();
      case 'Secondary':
        return ButtonVariant_Secondary_getInstance();
      case 'SecondaryOutline':
        return ButtonVariant_SecondaryOutline_getInstance();
      case 'Success':
        return ButtonVariant_Success_getInstance();
      case 'SuccessOutline':
        return ButtonVariant_SuccessOutline_getInstance();
      case 'Danger':
        return ButtonVariant_Danger_getInstance();
      case 'DangerOutline':
        return ButtonVariant_DangerOutline_getInstance();
      case 'Warning':
        return ButtonVariant_Warning_getInstance();
      case 'WarningOutline':
        return ButtonVariant_WarningOutline_getInstance();
      case 'Info':
        return ButtonVariant_Info_getInstance();
      case 'InfoOutline':
        return ButtonVariant_InfoOutline_getInstance();
      case 'Light':
        return ButtonVariant_Light_getInstance();
      case 'LightOutline':
        return ButtonVariant_LightOutline_getInstance();
      case 'Dark':
        return ButtonVariant_Dark_getInstance();
      case 'DarkOutline':
        return ButtonVariant_DarkOutline_getInstance();
      case 'Link':
        return ButtonVariant_Link_getInstance();
      case 'LinkOutline':
        return ButtonVariant_LinkOutline_getInstance();
      default:
        ButtonVariant_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var ButtonVariant_entriesInitialized;
  function ButtonVariant_initEntries() {
    if (ButtonVariant_entriesInitialized)
      return Unit_getInstance();
    ButtonVariant_entriesInitialized = true;
    ButtonVariant_Primary_instance = new ButtonVariant('Primary', 0, listOf_0(['btn', 'btn-primary']));
    ButtonVariant_PrimaryOutline_instance = new ButtonVariant('PrimaryOutline', 1, listOf_0(['btn', 'btn-outline-primary']));
    ButtonVariant_Secondary_instance = new ButtonVariant('Secondary', 2, listOf_0(['btn', 'btn-secondary']));
    ButtonVariant_SecondaryOutline_instance = new ButtonVariant('SecondaryOutline', 3, listOf_0(['btn', 'btn-outline-secondary']));
    ButtonVariant_Success_instance = new ButtonVariant('Success', 4, listOf_0(['btn', 'btn-success']));
    ButtonVariant_SuccessOutline_instance = new ButtonVariant('SuccessOutline', 5, listOf_0(['btn', 'btn-outline-success']));
    ButtonVariant_Danger_instance = new ButtonVariant('Danger', 6, listOf_0(['btn', 'btn-danger']));
    ButtonVariant_DangerOutline_instance = new ButtonVariant('DangerOutline', 7, listOf_0(['btn', 'btn-outline-danger']));
    ButtonVariant_Warning_instance = new ButtonVariant('Warning', 8, listOf_0(['btn', 'btn-warning']));
    ButtonVariant_WarningOutline_instance = new ButtonVariant('WarningOutline', 9, listOf_0(['btn', 'btn-outline-warning']));
    ButtonVariant_Info_instance = new ButtonVariant('Info', 10, listOf_0(['btn', 'btn-info']));
    ButtonVariant_InfoOutline_instance = new ButtonVariant('InfoOutline', 11, listOf_0(['btn', 'btn-outline-info']));
    ButtonVariant_Light_instance = new ButtonVariant('Light', 12, listOf_0(['btn', 'btn-light']));
    ButtonVariant_LightOutline_instance = new ButtonVariant('LightOutline', 13, listOf_0(['btn', 'btn-outline-light']));
    ButtonVariant_Dark_instance = new ButtonVariant('Dark', 14, listOf_0(['btn', 'btn-dark']));
    ButtonVariant_DarkOutline_instance = new ButtonVariant('DarkOutline', 15, listOf_0(['btn', 'btn-outline-dark']));
    ButtonVariant_Link_instance = new ButtonVariant('Link', 16, listOf_0(['btn', 'btn-link']));
    ButtonVariant_LinkOutline_instance = new ButtonVariant('LinkOutline', 17, listOf_0(['btn', 'btn-outline-link']));
  }
  var $ENTRIES_4;
  function ButtonVariant(name, ordinal, classes) {
    Enum.call(this, name, ordinal);
    this.classes_1 = classes;
  }
  protoOf(ButtonVariant).get_classes_fds01p_k$ = function () {
    return this.classes_1;
  };
  function ButtonVariant_Primary_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Primary_instance;
  }
  function ButtonVariant_PrimaryOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_PrimaryOutline_instance;
  }
  function ButtonVariant_Secondary_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Secondary_instance;
  }
  function ButtonVariant_SecondaryOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_SecondaryOutline_instance;
  }
  function ButtonVariant_Success_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Success_instance;
  }
  function ButtonVariant_SuccessOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_SuccessOutline_instance;
  }
  function ButtonVariant_Danger_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Danger_instance;
  }
  function ButtonVariant_DangerOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_DangerOutline_instance;
  }
  function ButtonVariant_Warning_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Warning_instance;
  }
  function ButtonVariant_WarningOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_WarningOutline_instance;
  }
  function ButtonVariant_Info_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Info_instance;
  }
  function ButtonVariant_InfoOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_InfoOutline_instance;
  }
  function ButtonVariant_Light_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Light_instance;
  }
  function ButtonVariant_LightOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_LightOutline_instance;
  }
  function ButtonVariant_Dark_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Dark_instance;
  }
  function ButtonVariant_DarkOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_DarkOutline_instance;
  }
  function ButtonVariant_Link_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_Link_instance;
  }
  function ButtonVariant_LinkOutline_getInstance() {
    ButtonVariant_initEntries();
    return ButtonVariant_LinkOutline_instance;
  }
  var com_stevdza_san_kotlinbs_models_navbar_NavBarBrand$stable;
  function NavBarBrand(title, image, imageWidth, href) {
    image = image === VOID ? null : image;
    imageWidth = imageWidth === VOID ? get_px(30) : imageWidth;
    this.title_1 = title;
    this.image_1 = image;
    this.imageWidth_1 = imageWidth;
    this.href_1 = href;
  }
  protoOf(NavBarBrand).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(NavBarBrand).get_image_it3i2a_k$ = function () {
    return this.image_1;
  };
  protoOf(NavBarBrand).get_imageWidth_qv9uic_k$ = function () {
    return this.imageWidth_1;
  };
  protoOf(NavBarBrand).get_href_wonh4k_k$ = function () {
    return this.href_1;
  };
  protoOf(NavBarBrand).component1_7eebsc_k$ = function () {
    return this.title_1;
  };
  protoOf(NavBarBrand).component2_7eebsb_k$ = function () {
    return this.image_1;
  };
  protoOf(NavBarBrand).component3_7eebsa_k$ = function () {
    return this.imageWidth_1;
  };
  protoOf(NavBarBrand).component4_7eebs9_k$ = function () {
    return this.href_1;
  };
  protoOf(NavBarBrand).copy_xbo0a8_k$ = function (title, image, imageWidth, href) {
    return new NavBarBrand(title, image, imageWidth, href);
  };
  protoOf(NavBarBrand).copy$default_fn9jgz_k$ = function (title, image, imageWidth, href, $super) {
    title = title === VOID ? this.title_1 : title;
    image = image === VOID ? this.image_1 : image;
    imageWidth = imageWidth === VOID ? this.imageWidth_1 : imageWidth;
    href = href === VOID ? this.href_1 : href;
    return $super === VOID ? this.copy_xbo0a8_k$(title, image, imageWidth, href) : $super.copy_xbo0a8_k$.call(this, title, image, imageWidth, href);
  };
  protoOf(NavBarBrand).toString = function () {
    return 'NavBarBrand(title=' + this.title_1 + ', image=' + this.image_1 + ', imageWidth=' + toString(this.imageWidth_1) + ', href=' + this.href_1 + ')';
  };
  protoOf(NavBarBrand).hashCode = function () {
    var result = getStringHashCode(this.title_1);
    result = imul(result, 31) + (this.image_1 == null ? 0 : getStringHashCode(this.image_1)) | 0;
    result = imul(result, 31) + hashCode(this.imageWidth_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.href_1) | 0;
    return result;
  };
  protoOf(NavBarBrand).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBarBrand))
      return false;
    var tmp0_other_with_cast = other instanceof NavBarBrand ? other : THROW_CCE();
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.image_1 == tmp0_other_with_cast.image_1))
      return false;
    if (!equals(this.imageWidth_1, tmp0_other_with_cast.imageWidth_1))
      return false;
    if (!(this.href_1 === tmp0_other_with_cast.href_1))
      return false;
    return true;
  };
  var com_stevdza_san_kotlinbs_models_navbar_NavBarButton$stable;
  function NavBarButton(id, text, variant, disabled, loading, loadingText, badge, onClick) {
    id = id === VOID ? null : id;
    variant = variant === VOID ? ButtonVariant_Primary_getInstance() : variant;
    disabled = disabled === VOID ? false : disabled;
    loading = loading === VOID ? false : loading;
    loadingText = loadingText === VOID ? null : loadingText;
    badge = badge === VOID ? null : badge;
    this.id_1 = id;
    this.text_1 = text;
    this.variant_1 = variant;
    this.disabled_1 = disabled;
    this.loading_1 = loading;
    this.loadingText_1 = loadingText;
    this.badge_1 = badge;
    this.onClick_1 = onClick;
  }
  protoOf(NavBarButton).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBarButton).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(NavBarButton).get_variant_56j34s_k$ = function () {
    return this.variant_1;
  };
  protoOf(NavBarButton).get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  protoOf(NavBarButton).get_loading_6tzj9v_k$ = function () {
    return this.loading_1;
  };
  protoOf(NavBarButton).get_loadingText_a24zz4_k$ = function () {
    return this.loadingText_1;
  };
  protoOf(NavBarButton).get_badge_ip1cai_k$ = function () {
    return this.badge_1;
  };
  protoOf(NavBarButton).get_onClick_l3c0lc_k$ = function () {
    return this.onClick_1;
  };
  protoOf(NavBarButton).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBarButton).component2_7eebsb_k$ = function () {
    return this.text_1;
  };
  protoOf(NavBarButton).component3_7eebsa_k$ = function () {
    return this.variant_1;
  };
  protoOf(NavBarButton).component4_7eebs9_k$ = function () {
    return this.disabled_1;
  };
  protoOf(NavBarButton).component5_7eebs8_k$ = function () {
    return this.loading_1;
  };
  protoOf(NavBarButton).component6_7eebs7_k$ = function () {
    return this.loadingText_1;
  };
  protoOf(NavBarButton).component7_7eebs6_k$ = function () {
    return this.badge_1;
  };
  protoOf(NavBarButton).component8_7eebs5_k$ = function () {
    return this.onClick_1;
  };
  protoOf(NavBarButton).copy_7thulr_k$ = function (id, text, variant, disabled, loading, loadingText, badge, onClick) {
    return new NavBarButton(id, text, variant, disabled, loading, loadingText, badge, onClick);
  };
  protoOf(NavBarButton).copy$default_3u6uyz_k$ = function (id, text, variant, disabled, loading, loadingText, badge, onClick, $super) {
    id = id === VOID ? this.id_1 : id;
    text = text === VOID ? this.text_1 : text;
    variant = variant === VOID ? this.variant_1 : variant;
    disabled = disabled === VOID ? this.disabled_1 : disabled;
    loading = loading === VOID ? this.loading_1 : loading;
    loadingText = loadingText === VOID ? this.loadingText_1 : loadingText;
    badge = badge === VOID ? this.badge_1 : badge;
    onClick = onClick === VOID ? this.onClick_1 : onClick;
    return $super === VOID ? this.copy_7thulr_k$(id, text, variant, disabled, loading, loadingText, badge, onClick) : $super.copy_7thulr_k$.call(this, id, text, variant, disabled, loading, loadingText, badge, onClick);
  };
  protoOf(NavBarButton).toString = function () {
    return 'NavBarButton(id=' + this.id_1 + ', text=' + this.text_1 + ', variant=' + this.variant_1.toString() + ', disabled=' + this.disabled_1 + ', loading=' + this.loading_1 + ', loadingText=' + this.loadingText_1 + ', badge=' + toString_0(this.badge_1) + ', onClick=' + toString(this.onClick_1) + ')';
  };
  protoOf(NavBarButton).hashCode = function () {
    var result = this.id_1 == null ? 0 : getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.text_1) | 0;
    result = imul(result, 31) + this.variant_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.disabled_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.loading_1) | 0;
    result = imul(result, 31) + (this.loadingText_1 == null ? 0 : getStringHashCode(this.loadingText_1)) | 0;
    result = imul(result, 31) + (this.badge_1 == null ? 0 : this.badge_1.hashCode()) | 0;
    result = imul(result, 31) + hashCode(this.onClick_1) | 0;
    return result;
  };
  protoOf(NavBarButton).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBarButton))
      return false;
    var tmp0_other_with_cast = other instanceof NavBarButton ? other : THROW_CCE();
    if (!(this.id_1 == tmp0_other_with_cast.id_1))
      return false;
    if (!(this.text_1 === tmp0_other_with_cast.text_1))
      return false;
    if (!this.variant_1.equals(tmp0_other_with_cast.variant_1))
      return false;
    if (!(this.disabled_1 === tmp0_other_with_cast.disabled_1))
      return false;
    if (!(this.loading_1 === tmp0_other_with_cast.loading_1))
      return false;
    if (!(this.loadingText_1 == tmp0_other_with_cast.loadingText_1))
      return false;
    if (!equals(this.badge_1, tmp0_other_with_cast.badge_1))
      return false;
    if (!equals(this.onClick_1, tmp0_other_with_cast.onClick_1))
      return false;
    return true;
  };
  function com_stevdza_san_kotlinbs_models_navbar_NavBarButton$stableprop_getter() {
    return com_stevdza_san_kotlinbs_models_navbar_NavBarButton$stable;
  }
  var NavBarExpand_SM_instance;
  var NavBarExpand_MD_instance;
  var NavBarExpand_LG_instance;
  var NavBarExpand_XL_instance;
  var NavBarExpand_XXL_instance;
  function values_5() {
    return [NavBarExpand_SM_getInstance(), NavBarExpand_MD_getInstance(), NavBarExpand_LG_getInstance(), NavBarExpand_XL_getInstance(), NavBarExpand_XXL_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'SM':
        return NavBarExpand_SM_getInstance();
      case 'MD':
        return NavBarExpand_MD_getInstance();
      case 'LG':
        return NavBarExpand_LG_getInstance();
      case 'XL':
        return NavBarExpand_XL_getInstance();
      case 'XXL':
        return NavBarExpand_XXL_getInstance();
      default:
        NavBarExpand_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var NavBarExpand_entriesInitialized;
  function NavBarExpand_initEntries() {
    if (NavBarExpand_entriesInitialized)
      return Unit_getInstance();
    NavBarExpand_entriesInitialized = true;
    NavBarExpand_SM_instance = new NavBarExpand('SM', 0, 'navbar-expand-sm');
    NavBarExpand_MD_instance = new NavBarExpand('MD', 1, 'navbar-expand-md');
    NavBarExpand_LG_instance = new NavBarExpand('LG', 2, 'navbar-expand-lg');
    NavBarExpand_XL_instance = new NavBarExpand('XL', 3, 'navbar-expand-xl');
    NavBarExpand_XXL_instance = new NavBarExpand('XXL', 4, 'navbar-expand-xxl');
  }
  var $ENTRIES_5;
  function NavBarExpand(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(NavBarExpand).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function NavBarExpand_SM_getInstance() {
    NavBarExpand_initEntries();
    return NavBarExpand_SM_instance;
  }
  function NavBarExpand_MD_getInstance() {
    NavBarExpand_initEntries();
    return NavBarExpand_MD_instance;
  }
  function NavBarExpand_LG_getInstance() {
    NavBarExpand_initEntries();
    return NavBarExpand_LG_instance;
  }
  function NavBarExpand_XL_getInstance() {
    NavBarExpand_initEntries();
    return NavBarExpand_XL_instance;
  }
  function NavBarExpand_XXL_getInstance() {
    NavBarExpand_initEntries();
    return NavBarExpand_XXL_instance;
  }
  var com_stevdza_san_kotlinbs_models_navbar_NavBarInputField$stable;
  function NavBarInputField(id, placeholder, value, onValueChange, onEnterClick) {
    id = id === VOID ? null : id;
    onEnterClick = onEnterClick === VOID ? null : onEnterClick;
    this.id_1 = id;
    this.placeholder_1 = placeholder;
    this.value_1 = value;
    this.onValueChange_1 = onValueChange;
    this.onEnterClick_1 = onEnterClick;
  }
  protoOf(NavBarInputField).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBarInputField).get_placeholder_nsdr0q_k$ = function () {
    return this.placeholder_1;
  };
  protoOf(NavBarInputField).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(NavBarInputField).get_onValueChange_omahaf_k$ = function () {
    return this.onValueChange_1;
  };
  protoOf(NavBarInputField).get_onEnterClick_p7fbvs_k$ = function () {
    return this.onEnterClick_1;
  };
  protoOf(NavBarInputField).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBarInputField).component2_7eebsb_k$ = function () {
    return this.placeholder_1;
  };
  protoOf(NavBarInputField).component3_7eebsa_k$ = function () {
    return this.value_1;
  };
  protoOf(NavBarInputField).component4_7eebs9_k$ = function () {
    return this.onValueChange_1;
  };
  protoOf(NavBarInputField).component5_7eebs8_k$ = function () {
    return this.onEnterClick_1;
  };
  protoOf(NavBarInputField).copy_b9m9ry_k$ = function (id, placeholder, value, onValueChange, onEnterClick) {
    return new NavBarInputField(id, placeholder, value, onValueChange, onEnterClick);
  };
  protoOf(NavBarInputField).copy$default_9252c1_k$ = function (id, placeholder, value, onValueChange, onEnterClick, $super) {
    id = id === VOID ? this.id_1 : id;
    placeholder = placeholder === VOID ? this.placeholder_1 : placeholder;
    value = value === VOID ? this.value_1 : value;
    onValueChange = onValueChange === VOID ? this.onValueChange_1 : onValueChange;
    onEnterClick = onEnterClick === VOID ? this.onEnterClick_1 : onEnterClick;
    return $super === VOID ? this.copy_b9m9ry_k$(id, placeholder, value, onValueChange, onEnterClick) : $super.copy_b9m9ry_k$.call(this, id, placeholder, value, onValueChange, onEnterClick);
  };
  protoOf(NavBarInputField).toString = function () {
    return 'NavBarInputField(id=' + this.id_1 + ', placeholder=' + this.placeholder_1 + ', value=' + this.value_1 + ', onValueChange=' + toString(this.onValueChange_1) + ', onEnterClick=' + toString_0(this.onEnterClick_1) + ')';
  };
  protoOf(NavBarInputField).hashCode = function () {
    var result = this.id_1 == null ? 0 : getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.placeholder_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.value_1) | 0;
    result = imul(result, 31) + hashCode(this.onValueChange_1) | 0;
    result = imul(result, 31) + (this.onEnterClick_1 == null ? 0 : hashCode(this.onEnterClick_1)) | 0;
    return result;
  };
  protoOf(NavBarInputField).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBarInputField))
      return false;
    var tmp0_other_with_cast = other instanceof NavBarInputField ? other : THROW_CCE();
    if (!(this.id_1 == tmp0_other_with_cast.id_1))
      return false;
    if (!(this.placeholder_1 === tmp0_other_with_cast.placeholder_1))
      return false;
    if (!(this.value_1 === tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.onValueChange_1, tmp0_other_with_cast.onValueChange_1))
      return false;
    if (!equals(this.onEnterClick_1, tmp0_other_with_cast.onEnterClick_1))
      return false;
    return true;
  };
  var com_stevdza_san_kotlinbs_models_navbar_NavBarOffcanvas$stable;
  function NavBarOffcanvas(id, title, dark, allowScrolling, disableBackdrop, closableOutside, placement) {
    dark = dark === VOID ? false : dark;
    allowScrolling = allowScrolling === VOID ? false : allowScrolling;
    disableBackdrop = disableBackdrop === VOID ? false : disableBackdrop;
    closableOutside = closableOutside === VOID ? true : closableOutside;
    placement = placement === VOID ? OffcanvasPlacement_END_getInstance() : placement;
    this.id_1 = id;
    this.title_1 = title;
    this.dark_1 = dark;
    this.allowScrolling_1 = allowScrolling;
    this.disableBackdrop_1 = disableBackdrop;
    this.closableOutside_1 = closableOutside;
    this.placement_1 = placement;
  }
  protoOf(NavBarOffcanvas).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBarOffcanvas).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(NavBarOffcanvas).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  protoOf(NavBarOffcanvas).get_allowScrolling_sjfwwb_k$ = function () {
    return this.allowScrolling_1;
  };
  protoOf(NavBarOffcanvas).get_disableBackdrop_txneyd_k$ = function () {
    return this.disableBackdrop_1;
  };
  protoOf(NavBarOffcanvas).get_closableOutside_4pyuvp_k$ = function () {
    return this.closableOutside_1;
  };
  protoOf(NavBarOffcanvas).get_placement_wv4cec_k$ = function () {
    return this.placement_1;
  };
  protoOf(NavBarOffcanvas).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(NavBarOffcanvas).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(NavBarOffcanvas).component3_7eebsa_k$ = function () {
    return this.dark_1;
  };
  protoOf(NavBarOffcanvas).component4_7eebs9_k$ = function () {
    return this.allowScrolling_1;
  };
  protoOf(NavBarOffcanvas).component5_7eebs8_k$ = function () {
    return this.disableBackdrop_1;
  };
  protoOf(NavBarOffcanvas).component6_7eebs7_k$ = function () {
    return this.closableOutside_1;
  };
  protoOf(NavBarOffcanvas).component7_7eebs6_k$ = function () {
    return this.placement_1;
  };
  protoOf(NavBarOffcanvas).copy_5ya56x_k$ = function (id, title, dark, allowScrolling, disableBackdrop, closableOutside, placement) {
    return new NavBarOffcanvas(id, title, dark, allowScrolling, disableBackdrop, closableOutside, placement);
  };
  protoOf(NavBarOffcanvas).copy$default_8ks135_k$ = function (id, title, dark, allowScrolling, disableBackdrop, closableOutside, placement, $super) {
    id = id === VOID ? this.id_1 : id;
    title = title === VOID ? this.title_1 : title;
    dark = dark === VOID ? this.dark_1 : dark;
    allowScrolling = allowScrolling === VOID ? this.allowScrolling_1 : allowScrolling;
    disableBackdrop = disableBackdrop === VOID ? this.disableBackdrop_1 : disableBackdrop;
    closableOutside = closableOutside === VOID ? this.closableOutside_1 : closableOutside;
    placement = placement === VOID ? this.placement_1 : placement;
    return $super === VOID ? this.copy_5ya56x_k$(id, title, dark, allowScrolling, disableBackdrop, closableOutside, placement) : $super.copy_5ya56x_k$.call(this, id, title, dark, allowScrolling, disableBackdrop, closableOutside, placement);
  };
  protoOf(NavBarOffcanvas).toString = function () {
    return 'NavBarOffcanvas(id=' + this.id_1 + ', title=' + this.title_1 + ', dark=' + this.dark_1 + ', allowScrolling=' + this.allowScrolling_1 + ', disableBackdrop=' + this.disableBackdrop_1 + ', closableOutside=' + this.closableOutside_1 + ', placement=' + this.placement_1.toString() + ')';
  };
  protoOf(NavBarOffcanvas).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.dark_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.allowScrolling_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.disableBackdrop_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.closableOutside_1) | 0;
    result = imul(result, 31) + this.placement_1.hashCode() | 0;
    return result;
  };
  protoOf(NavBarOffcanvas).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBarOffcanvas))
      return false;
    var tmp0_other_with_cast = other instanceof NavBarOffcanvas ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.dark_1 === tmp0_other_with_cast.dark_1))
      return false;
    if (!(this.allowScrolling_1 === tmp0_other_with_cast.allowScrolling_1))
      return false;
    if (!(this.disableBackdrop_1 === tmp0_other_with_cast.disableBackdrop_1))
      return false;
    if (!(this.closableOutside_1 === tmp0_other_with_cast.closableOutside_1))
      return false;
    if (!this.placement_1.equals(tmp0_other_with_cast.placement_1))
      return false;
    return true;
  };
  var com_stevdza_san_kotlinbs_models_navbar_NavDropdown$stable;
  var com_stevdza_san_kotlinbs_models_navbar_NavDropdownItem$stable;
  function NavDropdown(placeholder, items) {
    this.placeholder_1 = placeholder;
    this.items_1 = items;
  }
  protoOf(NavDropdown).get_placeholder_nsdr0q_k$ = function () {
    return this.placeholder_1;
  };
  protoOf(NavDropdown).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(NavDropdown).component1_7eebsc_k$ = function () {
    return this.placeholder_1;
  };
  protoOf(NavDropdown).component2_7eebsb_k$ = function () {
    return this.items_1;
  };
  protoOf(NavDropdown).copy_ejc9y0_k$ = function (placeholder, items) {
    return new NavDropdown(placeholder, items);
  };
  protoOf(NavDropdown).copy$default_uuxasj_k$ = function (placeholder, items, $super) {
    placeholder = placeholder === VOID ? this.placeholder_1 : placeholder;
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_ejc9y0_k$(placeholder, items) : $super.copy_ejc9y0_k$.call(this, placeholder, items);
  };
  protoOf(NavDropdown).toString = function () {
    return 'NavDropdown(placeholder=' + this.placeholder_1 + ', items=' + toString(this.items_1) + ')';
  };
  protoOf(NavDropdown).hashCode = function () {
    var result = getStringHashCode(this.placeholder_1);
    result = imul(result, 31) + hashCode(this.items_1) | 0;
    return result;
  };
  protoOf(NavDropdown).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavDropdown))
      return false;
    var tmp0_other_with_cast = other instanceof NavDropdown ? other : THROW_CCE();
    if (!(this.placeholder_1 === tmp0_other_with_cast.placeholder_1))
      return false;
    if (!equals(this.items_1, tmp0_other_with_cast.items_1))
      return false;
    return true;
  };
  function NavDropdownItem(id, title, onClick) {
    this.id_1 = id;
    this.title_1 = title;
    this.onClick_1 = onClick;
  }
  protoOf(NavDropdownItem).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavDropdownItem).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(NavDropdownItem).get_onClick_l3c0lc_k$ = function () {
    return this.onClick_1;
  };
  protoOf(NavDropdownItem).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(NavDropdownItem).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(NavDropdownItem).component3_7eebsa_k$ = function () {
    return this.onClick_1;
  };
  protoOf(NavDropdownItem).copy_cp6f20_k$ = function (id, title, onClick) {
    return new NavDropdownItem(id, title, onClick);
  };
  protoOf(NavDropdownItem).copy$default_7ksx3u_k$ = function (id, title, onClick, $super) {
    id = id === VOID ? this.id_1 : id;
    title = title === VOID ? this.title_1 : title;
    onClick = onClick === VOID ? this.onClick_1 : onClick;
    return $super === VOID ? this.copy_cp6f20_k$(id, title, onClick) : $super.copy_cp6f20_k$.call(this, id, title, onClick);
  };
  protoOf(NavDropdownItem).toString = function () {
    return 'NavDropdownItem(id=' + this.id_1 + ', title=' + this.title_1 + ', onClick=' + toString(this.onClick_1) + ')';
  };
  protoOf(NavDropdownItem).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + hashCode(this.onClick_1) | 0;
    return result;
  };
  protoOf(NavDropdownItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavDropdownItem))
      return false;
    var tmp0_other_with_cast = other instanceof NavDropdownItem ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!equals(this.onClick_1, tmp0_other_with_cast.onClick_1))
      return false;
    return true;
  };
  function NavItem() {
  }
  var com_stevdza_san_kotlinbs_models_navbar_NavLink$stable;
  function NavLink(id, title, active, disabled, onClick) {
    active = active === VOID ? false : active;
    disabled = disabled === VOID ? false : disabled;
    this.id_1 = id;
    this.title_1 = title;
    this.active_1 = active;
    this.disabled_1 = disabled;
    this.onClick_1 = onClick;
  }
  protoOf(NavLink).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(NavLink).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(NavLink).get_active_avldsf_k$ = function () {
    return this.active_1;
  };
  protoOf(NavLink).get_disabled_rbmjej_k$ = function () {
    return this.disabled_1;
  };
  protoOf(NavLink).get_onClick_l3c0lc_k$ = function () {
    return this.onClick_1;
  };
  protoOf(NavLink).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(NavLink).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(NavLink).component3_7eebsa_k$ = function () {
    return this.active_1;
  };
  protoOf(NavLink).component4_7eebs9_k$ = function () {
    return this.disabled_1;
  };
  protoOf(NavLink).component5_7eebs8_k$ = function () {
    return this.onClick_1;
  };
  protoOf(NavLink).copy_1k9tzs_k$ = function (id, title, active, disabled, onClick) {
    return new NavLink(id, title, active, disabled, onClick);
  };
  protoOf(NavLink).copy$default_gstcmb_k$ = function (id, title, active, disabled, onClick, $super) {
    id = id === VOID ? this.id_1 : id;
    title = title === VOID ? this.title_1 : title;
    active = active === VOID ? this.active_1 : active;
    disabled = disabled === VOID ? this.disabled_1 : disabled;
    onClick = onClick === VOID ? this.onClick_1 : onClick;
    return $super === VOID ? this.copy_1k9tzs_k$(id, title, active, disabled, onClick) : $super.copy_1k9tzs_k$.call(this, id, title, active, disabled, onClick);
  };
  protoOf(NavLink).toString = function () {
    return 'NavLink(id=' + this.id_1 + ', title=' + this.title_1 + ', active=' + this.active_1 + ', disabled=' + this.disabled_1 + ', onClick=' + toString(this.onClick_1) + ')';
  };
  protoOf(NavLink).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.active_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.disabled_1) | 0;
    result = imul(result, 31) + hashCode(this.onClick_1) | 0;
    return result;
  };
  protoOf(NavLink).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavLink))
      return false;
    var tmp0_other_with_cast = other instanceof NavLink ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.active_1 === tmp0_other_with_cast.active_1))
      return false;
    if (!(this.disabled_1 === tmp0_other_with_cast.disabled_1))
      return false;
    if (!equals(this.onClick_1, tmp0_other_with_cast.onClick_1))
      return false;
    return true;
  };
  var OffcanvasPlacement_TOP_instance;
  var OffcanvasPlacement_BOTTOM_instance;
  var OffcanvasPlacement_START_instance;
  var OffcanvasPlacement_END_instance;
  function values_6() {
    return [OffcanvasPlacement_TOP_getInstance(), OffcanvasPlacement_BOTTOM_getInstance(), OffcanvasPlacement_START_getInstance(), OffcanvasPlacement_END_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'TOP':
        return OffcanvasPlacement_TOP_getInstance();
      case 'BOTTOM':
        return OffcanvasPlacement_BOTTOM_getInstance();
      case 'START':
        return OffcanvasPlacement_START_getInstance();
      case 'END':
        return OffcanvasPlacement_END_getInstance();
      default:
        OffcanvasPlacement_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var OffcanvasPlacement_entriesInitialized;
  function OffcanvasPlacement_initEntries() {
    if (OffcanvasPlacement_entriesInitialized)
      return Unit_getInstance();
    OffcanvasPlacement_entriesInitialized = true;
    OffcanvasPlacement_TOP_instance = new OffcanvasPlacement('TOP', 0, 'offcanvas-top');
    OffcanvasPlacement_BOTTOM_instance = new OffcanvasPlacement('BOTTOM', 1, 'offcanvas-bottom');
    OffcanvasPlacement_START_instance = new OffcanvasPlacement('START', 2, 'offcanvas-start');
    OffcanvasPlacement_END_instance = new OffcanvasPlacement('END', 3, 'offcanvas-end');
  }
  var $ENTRIES_6;
  function OffcanvasPlacement(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(OffcanvasPlacement).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function OffcanvasPlacement_TOP_getInstance() {
    OffcanvasPlacement_initEntries();
    return OffcanvasPlacement_TOP_instance;
  }
  function OffcanvasPlacement_BOTTOM_getInstance() {
    OffcanvasPlacement_initEntries();
    return OffcanvasPlacement_BOTTOM_instance;
  }
  function OffcanvasPlacement_START_getInstance() {
    OffcanvasPlacement_initEntries();
    return OffcanvasPlacement_START_instance;
  }
  function OffcanvasPlacement_END_getInstance() {
    OffcanvasPlacement_initEntries();
    return OffcanvasPlacement_END_instance;
  }
  var com_stevdza_san_kotlinbs_util_UniqueIdGenerator$stable;
  function _get_componentIds__nwvs4w($this) {
    return $this.componentIds_1;
  }
  function UniqueIdGenerator() {
    UniqueIdGenerator_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.componentIds_1 = LinkedHashSet_init_$Create$();
  }
  protoOf(UniqueIdGenerator).generateUniqueId_6z5ton_k$ = function (baseName) {
    var id = baseName;
    var counter = 1;
    while (this.componentIds_1.contains_aljjnj_k$(id)) {
      var _unary__edvuaz = counter;
      counter = _unary__edvuaz + 1 | 0;
      id = baseName + _unary__edvuaz;
    }
    this.componentIds_1.add_utx5q5_k$(id);
    return id;
  };
  protoOf(UniqueIdGenerator).removeUniqueId_2scqii_k$ = function (id) {
    this.componentIds_1.remove_cedx0m_k$(id);
  };
  var UniqueIdGenerator_instance;
  function UniqueIdGenerator_getInstance() {
    if (UniqueIdGenerator_instance == null)
      new UniqueIdGenerator();
    return UniqueIdGenerator_instance;
  }
  //region block: init
  com_stevdza_san_kotlinbs_icons_BSIcons$stable = 0;
  com_stevdza_san_kotlinbs_models_AccordionItem$stable = 0;
  com_stevdza_san_kotlinbs_models_BSBorderRadius$stable = 8;
  com_stevdza_san_kotlinbs_models_BreadcrumbItem$stable = 0;
  com_stevdza_san_kotlinbs_models_CarouselItem$stable = 0;
  com_stevdza_san_kotlinbs_models_InputValidation$stable = 0;
  com_stevdza_san_kotlinbs_models_PreviousButton$stable = 0;
  com_stevdza_san_kotlinbs_models_NextButton$stable = 0;
  com_stevdza_san_kotlinbs_models_SpinnerVariant_Default$stable = 8;
  com_stevdza_san_kotlinbs_models_SpinnerVariant_DefaultGrow$stable = 8;
  com_stevdza_san_kotlinbs_models_SpinnerVariant_Small$stable = 8;
  com_stevdza_san_kotlinbs_models_SpinnerVariant_SmallGrow$stable = 8;
  com_stevdza_san_kotlinbs_models_SpinnerVariant_Large$stable = 8;
  com_stevdza_san_kotlinbs_models_SpinnerVariant_LargeGrow$stable = 8;
  com_stevdza_san_kotlinbs_models_SpinnerVariant$stable = 8;
  com_stevdza_san_kotlinbs_models_button_ButtonBadge$stable = 8;
  com_stevdza_san_kotlinbs_models_button_ButtonCustomization$stable = 8;
  com_stevdza_san_kotlinbs_models_button_ButtonProperty$stable = 0;
  com_stevdza_san_kotlinbs_models_navbar_NavBarBrand$stable = 8;
  com_stevdza_san_kotlinbs_models_navbar_NavBarButton$stable = 8;
  com_stevdza_san_kotlinbs_models_navbar_NavBarInputField$stable = 0;
  com_stevdza_san_kotlinbs_models_navbar_NavBarOffcanvas$stable = 0;
  com_stevdza_san_kotlinbs_models_navbar_NavDropdown$stable = 8;
  com_stevdza_san_kotlinbs_models_navbar_NavDropdownItem$stable = 0;
  com_stevdza_san_kotlinbs_models_navbar_NavLink$stable = 0;
  com_stevdza_san_kotlinbs_util_UniqueIdGenerator$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BSButton;
  _.$_$.b = BSNavBar;
  _.$_$.c = BSInput;
  _.$_$.d = BSTextArea;
  _.$_$.e = ButtonCustomization;
  _.$_$.f = com_stevdza_san_kotlinbs_models_button_ButtonCustomization$stableprop_getter;
  _.$_$.g = NavBarButton;
  _.$_$.h = NavLink;
  _.$_$.i = com_stevdza_san_kotlinbs_models_navbar_NavBarButton$stableprop_getter;
  _.$_$.j = initBuildScriptLayers;
  _.$_$.k = NavBarExpand_LG_getInstance;
  _.$_$.l = BackgroundStyle_Dark_getInstance;
  _.$_$.m = BSBorderRadius_init_$Create$;
  //endregion
  return _;
}));
