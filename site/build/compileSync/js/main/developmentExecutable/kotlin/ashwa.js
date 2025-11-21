(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kotlinbs-bootstrap.js', './kobweb-common-kobwebx-frontmatter.js', './kobweb-frontend-kobwebx-markdown.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-silk.js', './kobweb-frontend-kobweb-compose.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kotlinbs-bootstrap.js'), require('./kobweb-common-kobwebx-frontmatter.js'), require('./kobweb-frontend-kobwebx-markdown.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kotlinbs-bootstrap'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kotlinbs-bootstrap' was not found. Please, check whether 'kotlinbs-bootstrap' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-common-kobwebx-frontmatter'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-common-kobwebx-frontmatter' was not found. Please, check whether 'kobweb-common-kobwebx-frontmatter' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobwebx-markdown'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-frontend-kobwebx-markdown' was not found. Please, check whether 'kobweb-frontend-kobwebx-markdown' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.mano.ashwa:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'com.mano.ashwa:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'com.mano.ashwa:site'.");
    }
    globalThis['com.mano.ashwa:site'] = factory(typeof globalThis['com.mano.ashwa:site'] === 'undefined' ? {} : globalThis['com.mano.ashwa:site'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kotlinbs-bootstrap'], globalThis['kobweb-common-kobwebx-frontmatter'], globalThis['kobweb-frontend-kobwebx-markdown'], globalThis['html-html-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_stevdza_san_bootstrap_bootstrap, kotlin_com_varabyte_kobwebx_kobwebx_frontmatter, kotlin_com_varabyte_kobwebx_kobwebx_markdown, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var toString = kotlin_kotlin.$_$.pc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s1;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.qg;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.k;
  var to = kotlin_kotlin.$_$.bh;
  var mapOf = kotlin_kotlin.$_$.b8;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.l;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.c;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.ge;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var charArrayOf = kotlin_kotlin.$_$.ua;
  var trimStart = kotlin_kotlin.$_$.ef;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.j;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var Unit_getInstance = kotlin_kotlin.$_$.n4;
  var com_varabyte_kobweb_core_PageContext$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var protoOf = kotlin_kotlin.$_$.mc;
  var initMetadataForObject = kotlin_kotlin.$_$.ob;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString_0 = kotlin_kotlin.$_$.ah;
  var toInt = kotlin_kotlin.$_$.ye;
  var charSequenceLength = kotlin_kotlin.$_$.ya;
  var toBoolean = kotlin_kotlin.$_$.we;
  var isBlank = kotlin_kotlin.$_$.zd;
  var VOID = kotlin_kotlin.$_$.f;
  var removeSuffix = kotlin_kotlin.$_$.he;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.c;
  var initBuildScriptLayers = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.j;
  var com_varabyte_kobweb_navigation_Router$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobwebx_kobwebx_frontmatter.$_$.a;
  var MarkdownContext = kotlin_com_varabyte_kobwebx_kobwebx_markdown.$_$.a;
  var getKClass = kotlin_kotlin.$_$.d;
  var H1 = kotlin_org_jetbrains_compose_html_html_core.$_$.x6;
  var P = kotlin_org_jetbrains_compose_html_html_core.$_$.k7;
  var HorizontalDivider = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var H2 = kotlin_org_jetbrains_compose_html_html_core.$_$.y6;
  var H3 = kotlin_org_jetbrains_compose_html_html_core.$_$.z6;
  var H4 = kotlin_org_jetbrains_compose_html_html_core.$_$.a7;
  var Ul = kotlin_org_jetbrains_compose_html_html_core.$_$.q7;
  var Pre = kotlin_org_jetbrains_compose_html_html_core.$_$.j7;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.p7;
  var Code = kotlin_org_jetbrains_compose_html_html_core.$_$.s6;
  var GenericTag = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var Li = kotlin_org_jetbrains_compose_html_html_core.$_$.h7;
  var Em = kotlin_org_jetbrains_compose_html_html_core.$_$.v6;
  var Link = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u2;
  var loadFromLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x1;
  var get_systemPreference = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a2;
  var registerStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p4;
  var fillMaxHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.o4;
  var scrollBehavior = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var CoroutineImpl = kotlin_kotlin.$_$.ja;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.xb;
  var saveToLocalStorage = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y1;
  var initMetadataForLambda = kotlin_kotlin.$_$.nb;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.i;
  var com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var SuspendFunction1 = kotlin_kotlin.$_$.ka;
  var get_HorizontalDividerStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.s4;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p4;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h3;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t1;
  var get_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.m;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.e6;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.c6;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var ButtonVars_getInstance = kotlin_com_varabyte_kobweb_silk_widgets.$_$.o;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k4;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d4;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t2;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var get_ButtonStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var Companion_getInstance_8 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j4;
  var initMetadataForClass = kotlin_kotlin.$_$.jb;
  var set_background = kotlin_com_varabyte_kobweb_silk_widgets.$_$.l;
  var set_color = kotlin_com_varabyte_kobweb_silk_widgets.$_$.n;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.tg;
  var ColorMode_DARK_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o2;
  var ColorMode_LIGHT_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p2;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var Row = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.q;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var Button = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var numberRangeToNumber = kotlin_kotlin.$_$.hc;
  var Default_getInstance = kotlin_kotlin.$_$.d4;
  var random = kotlin_kotlin.$_$.wc;
  var substring = kotlin_kotlin.$_$.ve;
  var toLong = kotlin_kotlin.$_$.oc;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.t9;
  var THROW_IAE = kotlin_kotlin.$_$.zf;
  var enumEntries = kotlin_kotlin.$_$.na;
  var Enum = kotlin_kotlin.$_$.nf;
  var I = kotlin_org_jetbrains_compose_html_html_core.$_$.f7;
  var arrayIterator = kotlin_kotlin.$_$.ra;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.l7;
  var A = kotlin_org_jetbrains_compose_html_html_core.$_$.q6;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var TagElement = kotlin_org_jetbrains_compose_html_html_core.$_$.n7;
  var get_markdown = kotlin_com_varabyte_kobwebx_kobwebx_markdown.$_$.b;
  var singleOrNull = kotlin_kotlin.$_$.r8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var toAttrs = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.t6;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var fontWeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var Companion_getInstance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.n4;
  var overflowWrap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Companion_getInstance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.m4;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var getValue = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var Color = kotlin_org_jetbrains_compose_html_html_core.$_$.l3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var padding_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var margin_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r3;
  var display_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_html_html_core.$_$.o;
  var flexWrap = kotlin_org_jetbrains_compose_html_html_core.$_$.y4;
  var width_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.o6;
  var get_em = kotlin_org_jetbrains_compose_html_html_core.$_$.v4;
  var NavLink = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.h;
  var listOf = kotlin_kotlin.$_$.z7;
  var getStringHashCode = kotlin_kotlin.$_$.hb;
  var hashCode = kotlin_kotlin.$_$.ib;
  var equals = kotlin_kotlin.$_$.cb;
  var toAttrs_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var indexOf = kotlin_kotlin.$_$.xd;
  var substring_0 = kotlin_kotlin.$_$.ue;
  var FunctionAdapter = kotlin_kotlin.$_$.pa;
  var Comparator = kotlin_kotlin.$_$.mf;
  var compareValues = kotlin_kotlin.$_$.r9;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l4;
  var sortedWith = kotlin_kotlin.$_$.z8;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w3;
  var KProperty0 = kotlin_kotlin.$_$.cd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.gb;
  var Breakpoint_MD_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i2;
  var margin_3 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.n6;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_html_html_core.$_$.r;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j3;
  var zIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s3;
  var NavBarExpand_LG_getInstance = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.k;
  var BackgroundStyle_Dark_getInstance = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.l;
  var NavBarButton = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.g;
  var com_stevdza_san_kotlinbs_models_navbar_NavBarButton$stableprop_getter = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.i;
  var BSNavBar = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.b;
  var End_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g4;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_End$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var numColumns = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var SimpleGrid = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var padding_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var height_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var get_s = kotlin_org_jetbrains_compose_html_html_core.$_$.j6;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var Companion_getInstance_17 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s3;
  var com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var toAnimation = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var animation = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var borderRight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var letterSpacing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var lineHeight_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.g6;
  var SpaceEvenly_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i4;
  var Top_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o4;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceEvenly$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var com_varabyte_kobweb_compose_ui_Alignment_Top$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z3;
  var Companion_getInstance_19 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c4;
  var fontStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Blank_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var target = kotlin_org_jetbrains_compose_html_html_core.$_$.y2;
  var H5 = kotlin_org_jetbrains_compose_html_html_core.$_$.b7;
  var Start_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n4;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f4;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y3;
  var KMutableProperty0 = kotlin_kotlin.$_$.ad;
  var getLocalDelegateReference = kotlin_kotlin.$_$.eb;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var SpaceBetween_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h4;
  var CenterVertically_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m4;
  var com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x3;
  var BSInput = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.c;
  var BSTextArea = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.d;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e1;
  var Direction_ToTopRight_getInstance = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j3;
  var linearGradient = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var BSBorderRadius_init_$Create$ = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.m;
  var ButtonCustomization = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.e;
  var com_stevdza_san_kotlinbs_models_button_ButtonCustomization$stableprop_getter = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.f;
  var BSButton = kotlin_com_stevdza_san_bootstrap_bootstrap.$_$.a;
  var scale = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var Companion_getInstance_20 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u3;
  var Companion_getInstance_21 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z3;
  var backgroundPosition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var url = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var backgroundImage = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var Companion_getInstance_22 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w3;
  var backgroundSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var Companion_getInstance_23 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v3;
  var backgroundRepeat = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a4;
  var rgba = kotlin_org_jetbrains_compose_html_html_core.$_$.f6;
  var background = kotlin_org_jetbrains_compose_html_html_core.$_$.g4;
  var translateY = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n3;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.r;
  var Color_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var Companion_getInstance_24 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.q3;
  var alignItems = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var get_deg = kotlin_org_jetbrains_compose_html_html_core.$_$.t4;
  var emptyList = kotlin_kotlin.$_$.b7;
  var joinToString = kotlin_kotlin.$_$.p7;
  var plus = kotlin_kotlin.$_$.l8;
  var toList = kotlin_kotlin.$_$.j9;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var rememberBreakpoint = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var Breakpoint_SM_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j2;
  var Breakpoint_XL_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k2;
  var Breakpoint_LG_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h2;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForObject(ComposableSingletons$AboutKt, 'ComposableSingletons$AboutKt');
  initMetadataForLambda(AppEntry$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForLambda(AppEntry$lambda$slambda_1, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(Brand, 'Brand', Brand);
  initMetadataForClass(SitePalette, 'SitePalette');
  initMetadataForObject(SitePalettes, 'SitePalettes');
  initMetadataForLambda(rememberAnimatedText$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(FontAwesomeType, 'FontAwesomeType', VOID, Enum);
  initMetadataForClass(PageLayoutData, 'PageLayoutData');
  initMetadataForLambda(PageLayout$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForClass(SkillData, 'SkillData');
  initMetadataForClass(ExperienceData, 'ExperienceData');
  initMetadataForClass(ProjectData, 'ProjectData');
  initMetadataForClass(Screen, 'Screen');
  initMetadataForObject(Home, 'Home', VOID, Screen);
  initMetadataForObject(About, 'About', VOID, Screen);
  initMetadataForObject(Skill, 'Skill', VOID, Screen);
  initMetadataForObject(Experience, 'Experience', VOID, Screen);
  initMetadataForObject(Project, 'Project', VOID, Screen);
  initMetadataForObject(CoverLetter, 'CoverLetter', VOID, Screen);
  initMetadataForObject(ContactMe, 'ContactMe', VOID, Screen);
  initMetadataForObject(ComposableSingletons$CoverLetterKt, 'ComposableSingletons$CoverLetterKt');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(ComposableSingletons$ExperiencesKt, 'ComposableSingletons$ExperiencesKt');
  initMetadataForObject(ComposableSingletons$ProjectsKt, 'ComposableSingletons$ProjectsKt');
  initMetadataForObject(ComposableSingletons$SkillsKt, 'ComposableSingletons$SkillsKt');
  initMetadataForObject(ComposableSingletons$BSNavHeaderKt, 'ComposableSingletons$BSNavHeaderKt');
  initMetadataForObject(ComposableSingletons$BannerKt, 'ComposableSingletons$BannerKt');
  initMetadataForObject(ComposableSingletons$FooterKt, 'ComposableSingletons$FooterKt');
  initMetadataForObject(ComposableSingletons$ResumeSectionKt, 'ComposableSingletons$ResumeSectionKt');
  initMetadataForObject(AppStrings, 'AppStrings');
  initMetadataForObject(Assets, 'Assets');
  initMetadataForClass(LinearGradient, 'LinearGradient', LinearGradient);
  initMetadataForClass(Stop, 'Stop');
  //endregion
  function get_LayoutScopeLocal() {
    _init_properties_main_kt__ykjpl3();
    return LayoutScopeLocal;
  }
  var LayoutScopeLocal;
  function currentLayoutScope($composer, $changed) {
    _init_properties_main_kt__ykjpl3();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LayoutScopeLocal();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp = tmp0;
    var tmp0_elvis_lhs = !(tmp == null) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unexpected between Page/Layout scope and the parent Layout which it is providing it. Please report this issue to the Kobweb developers.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function provideLayoutScope(layoutScope, content, $composer, $changed) {
    _init_properties_main_kt__ykjpl3();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-268603817);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(layoutScope) : $composer_0.changedInstance_s1wkiy_k$(layoutScope)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      CompositionLocalProvider(get_LayoutScopeLocal().provides_3agxel_k$(layoutScope), content, $composer_0, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(provideLayoutScope$lambda(layoutScope, content, $changed));
    }
  }
  function forceReloadNow() {
    _init_properties_main_kt__ykjpl3();
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    _init_properties_main_kt__ykjpl3();
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    _init_properties_main_kt__ykjpl3();
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf([to('title', 'Ashwani Kumar Singh'), to('author', 'Manoj Kumar Singh'), to('description', "Hi, I'm Manoj Kumar Singh, a software engineer based in India, and I'm passionate about mobile technology and AgenticAI.\nDiscover my projects and my blog on this website."), to('url', '')]));
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.tryRoutingTo$default_6oxk8k_k$(remove(Companion_getInstance(), '/' + trimStart(removePrefix(window.location.href, window.origin), charArrayOf([_Char___init__impl__6a9atx(47)]))), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('_kobweb-root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('_kobweb-root', ComposableLambda$invoke$ref_13(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      return p0.invoke_gk4tfu_k$(_this__u8e3s4, p0_0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda$1498945258$lambda(pageCtx, pageMethod, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(pageCtx) : $composer_0.changedInstance_s1wkiy_k$(pageCtx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(pageMethod) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1761814108, true, ComposableSingletons$MainKt$lambda$1498945258$lambda$lambda(pageMethod, pageCtx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      MarkdownLayout(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda$1498945258$lambda$lambda($pageMethod, $pageCtx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $pageMethod($pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return function (_this__u8e3s4, p0_0, p1, p2) {
      return p0.invoke_gk4tfu_k$(_this__u8e3s4, p0_0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda_75hsrn(pageCtx, pageMethod, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(pageCtx) : $composer_0.changedInstance_s1wkiy_k$(pageCtx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(pageMethod) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(605933002, true, ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda_v3zxsi(pageMethod, pageCtx), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      PageLayout(pageCtx, tmp0, $composer_0, 48 | com_varabyte_kobweb_core_PageContext$stableprop_getter() | 14 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda$lambda_6ermrn($pageMethod, $pageCtx) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $pageMethod($pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda_v3zxsi($pageMethod, $pageCtx) {
    return function ($this$_com_mano_ashwa_components_layouts_PageLayout, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$_com_mano_ashwa_components_layouts_PageLayout) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1470159405, true, ComposableSingletons$MainKt$lambda$_1396482527$lambda$lambda$lambda_6ermrn($pageMethod, $pageCtx), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        provideLayoutScope($this$_com_mano_ashwa_components_layouts_PageLayout, tmp0, $composer_0, 48 | 14 & $dirty);
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_3(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableLambda$invoke$ref_4(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(pageCtx) : $composer_0.changedInstance_s1wkiy_k$(pageCtx)) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      HomePage(pageCtx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter() | 14 & $dirty);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_5(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$_1474002729$lambda_4qld8c(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      AboutPage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_6(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$19909720$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      AboutMe($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_7(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$1513822169$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      CoverLetter_0($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_8(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$_1287232678$lambda_esovni(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      Experiences($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_9(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$206679771$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      Projects($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_10(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$1700592220$lambda(pageCtx, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      SkillPage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_11(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda$854823496$lambda$lambda(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda$854823496$lambda$lambda($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_12(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda$1498945258__1 = ComposableLambda$invoke$ref(composableLambdaInstance(1498945258, false, ComposableSingletons$MainKt$lambda$1498945258$lambda));
    var tmp_0 = this;
    tmp_0.lambda$_1396482527_ixh6ed_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-1396482527, false, ComposableSingletons$MainKt$lambda$_1396482527$lambda_75hsrn));
    var tmp_1 = this;
    tmp_1.lambda$_521244896_pfstq1__1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-521244896, false, ComposableSingletons$MainKt$lambda$_521244896$lambda_jdp3wp));
    var tmp_2 = this;
    tmp_2.lambda$_1474002729_480lcs_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1474002729, false, ComposableSingletons$MainKt$lambda$_1474002729$lambda_4qld8c));
    var tmp_3 = this;
    tmp_3.lambda$19909720__1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(19909720, false, ComposableSingletons$MainKt$lambda$19909720$lambda));
    var tmp_4 = this;
    tmp_4.lambda$1513822169__1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(1513822169, false, ComposableSingletons$MainKt$lambda$1513822169$lambda));
    var tmp_5 = this;
    tmp_5.lambda$_1287232678_47fjca_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-1287232678, false, ComposableSingletons$MainKt$lambda$_1287232678$lambda_esovni));
    var tmp_6 = this;
    tmp_6.lambda$206679771__1 = ComposableLambda$invoke$ref_9(composableLambdaInstance(206679771, false, ComposableSingletons$MainKt$lambda$206679771$lambda));
    var tmp_7 = this;
    tmp_7.lambda$1700592220__1 = ComposableLambda$invoke$ref_10(composableLambdaInstance(1700592220, false, ComposableSingletons$MainKt$lambda$1700592220$lambda));
    var tmp_8 = this;
    tmp_8.lambda$854823496__1 = ComposableLambda$invoke$ref_11(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda$854823496$lambda));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda$1498945258_cyqh23_k$ = function () {
    return this.lambda$1498945258__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$_1396482527_nhllda_k$ = function () {
    return this.lambda$_1396482527_ixh6ed_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$_521244896_5fm47s_k$ = function () {
    return this.lambda$_521244896_pfstq1__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$_1474002729_t1uwvl_k$ = function () {
    return this.lambda$_1474002729_480lcs_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$19909720_6th2qh_k$ = function () {
    return this.lambda$19909720__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$1513822169_d05k68_k$ = function () {
    return this.lambda$1513822169__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$_1287232678_pp6znb_k$ = function () {
    return this.lambda$_1287232678_47fjca_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$206679771_zgnzll_k$ = function () {
    return this.lambda$206679771__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$1700592220_n765zu_k$ = function () {
    return this.lambda$1700592220__1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda$854823496_c1g7kr_k$ = function () {
    return this.lambda$854823496__1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function LayoutScopeLocal$lambda() {
    _init_properties_main_kt__ykjpl3();
    return null;
  }
  function provideLayoutScope$lambda($layoutScope, $content, $$changed) {
    return function ($composer, $force) {
      provideLayoutScope($layoutScope, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString_0((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (document.hidden) {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.text.isNotEmpty' call
          var this_0 = $status.className;
          if (charSequenceLength(this_0) > 0) {
            $shouldReload._v = true;
            tmp_1 = Unit_getInstance();
          } else {
            forceReloadNow();
            tmp_1 = Unit_getInstance();
          }
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString_0((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    _init_properties_main_kt__ykjpl3();
    var tmp = ctx.get_router_j3zccy_k$();
    tmp.registerLayout_p67cby_k$('com.mano.ashwa.components.layouts.MarkdownLayout', 'com.mano.ashwa.components.layouts.PageLayout', main$lambda$lambda, ComposableSingletons$MainKt_getInstance().lambda$1498945258__1);
    ctx.get_router_j3zccy_k$().registerLayout$default_45q2ls_k$('com.mano.ashwa.components.layouts.PageLayout', VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda$_1396482527_ixh6ed_1);
    var tmp_0 = ctx.get_router_j3zccy_k$();
    tmp_0.register_7fiee8_k$('/', 'com.mano.ashwa.components.layouts.PageLayout', main$lambda$lambda_0, ComposableSingletons$MainKt_getInstance().lambda$_521244896_pfstq1__1);
    var tmp_1 = ctx.get_router_j3zccy_k$();
    tmp_1.register_7fiee8_k$('/about', 'com.mano.ashwa.components.layouts.MarkdownLayout', main$lambda$lambda_1, ComposableSingletons$MainKt_getInstance().lambda$_1474002729_480lcs_1);
    ctx.get_router_j3zccy_k$().register$default_cpqgbm_k$('/aboutme', VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda$19909720__1);
    var tmp_2 = ctx.get_router_j3zccy_k$();
    tmp_2.register_7fiee8_k$('/cover-letter', 'com.mano.ashwa.components.layouts.PageLayout', main$lambda$lambda_2, ComposableSingletons$MainKt_getInstance().lambda$1513822169__1);
    var tmp_3 = ctx.get_router_j3zccy_k$();
    tmp_3.register_7fiee8_k$('/experiences', 'com.mano.ashwa.components.layouts.PageLayout', main$lambda$lambda_3, ComposableSingletons$MainKt_getInstance().lambda$_1287232678_47fjca_1);
    var tmp_4 = ctx.get_router_j3zccy_k$();
    tmp_4.register_7fiee8_k$('/project', 'com.mano.ashwa.components.layouts.PageLayout', main$lambda$lambda_4, ComposableSingletons$MainKt_getInstance().lambda$206679771__1);
    var tmp_5 = ctx.get_router_j3zccy_k$();
    tmp_5.register_7fiee8_k$('/skill', 'com.mano.ashwa.components.layouts.PageLayout', main$lambda$lambda_5, ComposableSingletons$MainKt_getInstance().lambda$1700592220__1);
    return Unit_getInstance();
  }
  function main$lambda$lambda(ctx) {
    _init_properties_main_kt__ykjpl3();
    initMarkdownLayout(ctx);
    return Unit_getInstance();
  }
  function main$lambda$lambda_0(ctx) {
    _init_properties_main_kt__ykjpl3();
    initHomePage(ctx);
    return Unit_getInstance();
  }
  function main$lambda$lambda_1(ctx) {
    _init_properties_main_kt__ykjpl3();
    initAboutPage(ctx);
    return Unit_getInstance();
  }
  function main$lambda$lambda_2(ctx) {
    _init_properties_main_kt__ykjpl3();
    initCoverLetterPage(ctx);
    return Unit_getInstance();
  }
  function main$lambda$lambda_3(ctx) {
    _init_properties_main_kt__ykjpl3();
    initExperiencesPage(ctx);
    return Unit_getInstance();
  }
  function main$lambda$lambda_4(ctx) {
    _init_properties_main_kt__ykjpl3();
    initMyProjectsPage(ctx);
    return Unit_getInstance();
  }
  function main$lambda$lambda_5(ctx) {
    _init_properties_main_kt__ykjpl3();
    initSkillPage(ctx);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    _init_properties_main_kt__ykjpl3();
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    _init_properties_main_kt__ykjpl3();
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('headline-text', get_HeadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('subheadline-text', get_SubheadlineTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('page-title', get_pageTitleStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('highlight', get_highlightStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('normal-text', get_normalTextStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('banner', get_bannerStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('gradient-tag-line', get_GradientTagLineStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('button', get_buttonStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('markdown', get_MarkdownStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('page-content', get_PageContentStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('hero-container', get_HeroContainerStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('home-grid', get_HomeGridStyle());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('home-grid-cell', get_HomeGridCellStyle());
    ctx.get_theme_iz24rk_k$().registerVariant$default_k7o5vi_k$('-circle', get_CircleButtonVariant());
    ctx.get_theme_iz24rk_k$().registerVariant$default_k7o5vi_k$('-uncolored', get_UncoloredButtonVariant());
    ctx.get_theme_iz24rk_k$().registerKeyframes_f5btlc_k$('zoom-in', get_zoomIn());
    ctx.get_theme_iz24rk_k$().registerKeyframes_f5btlc_k$('up-down', get_upDownAnim());
    initSiteStyles(ctx);
    initColorMode(ctx);
    initStyles(ctx);
    initTheme(ctx);
    initBuildScriptLayers(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_13(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function main$lambda$lambda_6($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda$854823496__1, $composer_0, 6 | com_varabyte_kobweb_navigation_Router$stableprop_getter() << 3, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_14(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda_6($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_14(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      return Unit_getInstance();
    };
  }
  var properties_initialized_main_kt_ask6ij;
  function _init_properties_main_kt__ykjpl3() {
    if (!properties_initialized_main_kt_ask6ij) {
      properties_initialized_main_kt_ask6ij = true;
      LayoutScopeLocal = compositionLocalOf(VOID, LayoutScopeLocal$lambda);
    }
  }
  function mainWrapper() {
    main();
  }
  function initAboutPage(ctx) {
    var tmp0 = ctx.get_data_wokkxf_k$();
    var tmp = Companion_getInstance_1();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new MarkdownContext('About.md', tmp.Builder_3wn1q7_k$(initAboutPage$lambda));
    tmp0.set_wb2scb_k$(getKClass(MarkdownContext), value);
  }
  function AboutPage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(468753139);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = AboutPage$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      H1(tmp$ret$3, ComposableSingletons$AboutKt_getInstance().lambda$962827190__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$1691713685__1, $composer_0, 48, 1);
      HorizontalDivider(null, null, $composer_0, 0, 3);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = AboutPage$lambda_0;
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      H2(tmp$ret$7, ComposableSingletons$AboutKt_getInstance().lambda$1063739157__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$_94696898_gdr2sx_1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = AboutPage$lambda_1;
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      H3(tmp$ret$11, ComposableSingletons$AboutKt_getInstance().lambda$1164651124__1, $composer_0, 54, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_2 = AboutPage$lambda_2;
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp$ret$15 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      H4(tmp$ret$15, ComposableSingletons$AboutKt_getInstance().lambda$1265563091__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$6215069__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_3 = this_4.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_3 = AboutPage$lambda_3;
        this_4.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp$ret$19 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      H4(tmp$ret$19, ComposableSingletons$AboutKt_getInstance().lambda$_1603524612_eiu4e0__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$107127036__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_4 = this_5.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (false || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_4 = AboutPage$lambda_4;
        this_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var tmp$ret$23 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      H4(tmp$ret$23, ComposableSingletons$AboutKt_getInstance().lambda$_1502612645_u70euu_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$208039003__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_5 = this_6.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_5 = AboutPage$lambda_5;
        this_6.updateRememberedValue_l1wh71_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp$ret$27 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      H4(tmp$ret$27, ComposableSingletons$AboutKt_getInstance().lambda$_1401700678_p5xcng_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$308950970__1, $composer_0, 48, 1);
      Ul(null, ComposableSingletons$AboutKt_getInstance().lambda$339515688__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_6 = this_7.rememberedValue_4dg93v_k$();
      var tmp_13;
      if (false || it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_6 = AboutPage$lambda_6;
        this_7.updateRememberedValue_l1wh71_k$(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp$ret$31 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      H4(tmp$ret$31, ComposableSingletons$AboutKt_getInstance().lambda$_1300788711_9to4um_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$409862937__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_8 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_7 = this_8.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (false || it_7 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_7 = AboutPage$lambda_7;
        this_8.updateRememberedValue_l1wh71_k$(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var tmp$ret$35 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      H4(tmp$ret$35, ComposableSingletons$AboutKt_getInstance().lambda$_1199876744_fqiyc0__1, $composer_0, 54, 0);
      Ul(null, ComposableSingletons$AboutKt_getInstance().lambda$1818118673__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_9 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_8 = this_9.rememberedValue_4dg93v_k$();
      var tmp_17;
      if (false || it_8 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_8 = AboutPage$lambda_8;
        this_9.updateRememberedValue_l1wh71_k$(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var tmp$ret$39 = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      H3(tmp$ret$39, ComposableSingletons$AboutKt_getInstance().lambda$204322909__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$510774904__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_10 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_9 = this_10.rememberedValue_4dg93v_k$();
      var tmp_19;
      if (false || it_9 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_9 = AboutPage$lambda_9;
        this_10.updateRememberedValue_l1wh71_k$(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = it_9;
      }
      var tmp_20 = tmp_19;
      var tmp$ret$43 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      H4(tmp$ret$43, ComposableSingletons$AboutKt_getInstance().lambda$_1098964777_vep8su_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$611686871__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_11 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_10 = this_11.rememberedValue_4dg93v_k$();
      var tmp_21;
      if (false || it_10 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_10 = AboutPage$lambda_10;
        this_11.updateRememberedValue_l1wh71_k$(value_10);
        tmp_21 = value_10;
      } else {
        tmp_21 = it_10;
      }
      var tmp_22 = tmp_21;
      var tmp$ret$47 = (tmp_22 == null ? true : !(tmp_22 == null)) ? tmp_22 : THROW_CCE();
      H4(tmp$ret$47, ComposableSingletons$AboutKt_getInstance().lambda$_998052810_gi3jsi_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$712598838__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_12 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_11 = this_12.rememberedValue_4dg93v_k$();
      var tmp_23;
      if (false || it_11 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_11 = AboutPage$lambda_11;
        this_12.updateRememberedValue_l1wh71_k$(value_11);
        tmp_23 = value_11;
      } else {
        tmp_23 = it_11;
      }
      var tmp_24 = tmp_23;
      var tmp$ret$51 = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
      H4(tmp$ret$51, ComposableSingletons$AboutKt_getInstance().lambda$_897140843_w69u9c_1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$574126038__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_13 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_12 = this_13.rememberedValue_4dg93v_k$();
      var tmp_25;
      if (false || it_12 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_12 = AboutPage$lambda_12;
        this_13.updateRememberedValue_l1wh71_k$(value_12);
        tmp_25 = value_12;
      } else {
        tmp_25 = it_12;
      }
      var tmp_26 = tmp_25;
      var tmp$ret$55 = (tmp_26 == null ? true : !(tmp_26 == null)) ? tmp_26 : THROW_CCE();
      H2(tmp$ret$55, ComposableSingletons$AboutKt_getInstance().lambda$2012170430__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$675038005__1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$775949972__1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().lambda$_52726334_ilmh5m_1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$876861939__1, $composer_0, 48, 1);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_14 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_13 = this_14.rememberedValue_4dg93v_k$();
      var tmp_27;
      if (false || it_13 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_13 = AboutPage$lambda_13;
        this_14.updateRememberedValue_l1wh71_k$(value_13);
        tmp_27 = value_13;
      } else {
        tmp_27 = it_13;
      }
      var tmp_28 = tmp_27;
      var tmp$ret$59 = (tmp_28 == null ? true : !(tmp_28 == null)) ? tmp_28 : THROW_CCE();
      H2(tmp$ret$59, ComposableSingletons$AboutKt_getInstance().lambda$2113082397__1, $composer_0, 54, 0);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$977773906__1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$1078685873__1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$1179597840__1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().lambda$_1464309717_n6cjn2__1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$1280509807__1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$1381421774__1, $composer_0, 48, 1);
      Pre(null, ComposableSingletons$AboutKt_getInstance().lambda$_1363397750_7tpxm8__1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$1482333741__1, $composer_0, 48, 1);
      P(null, ComposableSingletons$AboutKt_getInstance().lambda$_592570281_kmntgl_1, $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AboutPage$lambda_14($changed));
    }
  }
  function ComposableLambda$invoke$ref_15(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$962827190$lambda($this$H1, $composer, $changed) {
    var $composer_0 = $composer;
    Text('About this template', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_16(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1691713685$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This template is intended to both demonstrate some fundamentals of the Kobweb framework and act a starting point you can build your own site from.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_17(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1063739157$lambda($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Learn', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_18(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_94696898$lambda_vsr4qp($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If this is your first time using Kobweb, please open this site's project in an IDE and take a few minutes to look around the code.", $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_19(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1164651124$lambda($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Files', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_20(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1265563091$lambda($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('AppEntry.kt', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_21(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1781410372$lambda_ndgjdw($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@App', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_22(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$6215069$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This file declares a method that is an entry point for all pages on your site. You can rename the file and the method if you like. Kobweb searches for a single method at compile time annotated with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1781410372_rq2vau_1, $composer_0, 48, 1);
    Text('.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_23(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1603524612$lambda_5pljg6($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('AppStyles.kt', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_24(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$107127036$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('An example of declaring generally useful styles that can be used anywhere across the whole site. Otherwise, you normally declare styles close to the widget that uses them.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_25(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1502612645$lambda_q5piw($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('SiteTheme.kt', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_26(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$208039003$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('An example of how to define some site-specific colors, effectively extending the palette provided by Silk.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_27(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1401700678$lambda_49a4ee($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('components/', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_28(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$308950970$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('By convention, Kobweb codebases organize reusable site components under this folder. Within it, you have:', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_29(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_270011496$lambda_t8cr7w($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('layouts/', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_30(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$986402169$lambda($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_270011496_kevgp0__1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Represents top-level organization for pages', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_31(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1085831025$lambda_y9q7y3($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('sections/', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_32(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_558109136$lambda_qf4day($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1085831025_t28wll_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Areas of content that appear across multiple pages (such as nav bars and footers)', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_33(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1605123312$lambda_n5wvu6($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('widgets/', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_34(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1077401423$lambda_8hvrhb($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1605123312_t1ojxg_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Home for low-level UI pieces that you can use around your site', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_35(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$339515688$lambda($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda$986402169__1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda$_558109136_l6gpwi_1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda$_1077401423_rnl7lb_1, $composer_0, 48, 1);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_36(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1300788711$lambda_koqf5w($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('pages/', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_37(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1377762504$lambda_xz1zpm($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@Composable', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_38(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1444731551$lambda_kmdkch($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('@Page', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_39(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_362923264$lambda_c9ze99($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('resources/markdown', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_40(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$409862937$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Any ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1377762504_aithmg_1, $composer_0, 48, 1);
    Text(' under this folder additionally tagged with ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1444731551_7usppt_1, $composer_0, 48, 1);
    Text(' will have a route generated for it automatically. Defining a page outside of this folder will be flagged as an error by the Kobweb Gradle plugin at compile time. Note that additional pages (like this one!) might live under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_362923264_pjaafp_1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_41(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1199876744$lambda_iidzvm($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('resources/', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_42(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$178047105$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('public', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_43(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$705768994$lambda($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$178047105__1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' If you want to host any media on your site (such as an icon, an image, text configuration files, movies, fonts, etc.), you should put it under this folder.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_44(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_2140472392$lambda_uc09oa($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('markdown', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_45(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1805877991$lambda_rjhc61($this$Li, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_2140472392_ii15rc_1, $composer_0, 48, 1);
    GenericTag('br', null, null, $composer_0, 54, 4);
    Text(' Any markdown discovered in here by Kobweb at compile time will be converted into pages on your site.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_46(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1818118673$lambda($this$Ul, $composer, $changed) {
    var $composer_0 = $composer;
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda$705768994__1, $composer_0, 48, 1);
    Li(null, ComposableSingletons$AboutKt_getInstance().lambda$_1805877991_eenj7v_1, $composer_0, 48, 1);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_47(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$204322909$lambda($this$H3, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Classes', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_48(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$510774904$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('The Kobweb and Silk APIs introduce a lot of powerful concepts. Here are some of the most important ones to know about which you can find used throughout this template.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_49(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1098964777$lambda_nhttsw($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_50(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1175938570$lambda_m3pngw($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_51(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$611686871$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Kobweb introduces the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1175938570_t6be4i_1, $composer_0, 48, 1);
    Text(' keyword that Android developers will recognize from the Jetpack Compose API. In a webdev context, this is used for setting CSS styles and html attributes on elements in the page.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_52(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_998052810$lambda_evifca($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_53(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1075026603$lambda_omd4d8($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_54(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$712598838$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Traditional HTML pages use CSS to style their UI. In Kobweb, these styles can be declared using the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1075026603_3k70vi_1, $composer_0, 48, 1);
    Text(' class in a Kotlin-idiomatic way. You can find examples of style blocks used throughout the template.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_55(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_897140843$lambda_juy99k($this$H4, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Keyframes', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_56(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$992312215$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Keyframes', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_57(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1083728242$lambda_kgfysv($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('CssStyle', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_58(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1907409713$lambda_xfq5rh($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Modifier.animation(YourKeyframes.toAnimation(...))', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_59(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$574126038$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('You can create animations by declaring keyframes for them, using ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$992312215__1, $composer_0, 48, 1);
    Text(' blocks to define them (similar to declaring ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1083728242_s0keb_1, $composer_0, 48, 1);
    Text(' style blocks). Once defined, call ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1907409713_gxyszp_1, $composer_0, 48, 1);
    Text(' to reference them.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_60(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$2012170430$lambda($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Starting Point', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_61(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1086817487$lambda_4rfod0($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('About', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_62(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$675038005$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('This template aims to create some generally useful pieces that most sites will want to use. Making your own site could be as easy as deleting this ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().lambda$_1086817487_rbgjb2__1, $composer_0, 48, 1);
    Text(" page and working from there. However, you are welcome to modify or delete anything you find in the template that you don't plan to use in your final site.", $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_63(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$775949972$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If instead you'd like to start from scratch, you can run", $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_64(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1840351775$lambda_jambbf($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb create app/empty\n', $composer_0, 0);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_65(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_52726334$lambda_gqmzt4($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1840351775_p3fdax_1, $composer_0, 48, 1);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_66(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$876861939$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('which will create a new project with nothing inside of it except for a minimal, skeletal structure.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_67(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$2113082397$lambda($this$H2, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Export and Deploy', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_68(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$977773906$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("When you are ready to share your site with the world, you'll want to export it first. This will create a production snapshot of your site.", $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_69(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_683169619$lambda_bggazh($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('static layout', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_70(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$344828132$lambda($this$Em, $composer, $changed) {
    var $composer_0 = $composer;
    Text('full stack', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_71(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1901034241$lambda_ayuyy1($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      Text('read more about these choices here', $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_72(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1078685873$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('There are two flavors of Kobweb sites: ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().lambda$_683169619_4gjkej_1, $composer_0, 48, 1);
    Text(' and ', $composer_0, 6);
    Em(null, ComposableSingletons$AboutKt_getInstance().lambda$344828132__1, $composer_0, 48, 1);
    Text('. You can ', $composer_0, 6);
    Link('https://kobweb.varabyte.com/docs/concepts/foundation/exporting#static-layout-vs-full-stack-sites', null, null, null, null, null, null, ComposableSingletons$AboutKt_getInstance().lambda$_1901034241_z79793__1, $composer_0, 12582918, 126);
    Text('.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_73(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1179597840$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('For most sites, a static layout site is what you want, so to do that, return to the command line and run:', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_74(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1385440118$lambda_xqptfb($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb export --layout static\n', $composer_0, 0);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_75(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1464309717$lambda_jh4sd8($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1385440118_8jdkyf_1, $composer_0, 48, 1);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_76(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1698695984$lambda($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('.kobweb/site', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_77(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1280509807$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('After that runs for a little while, your production site should be generated! You can find the files under the ', $composer_0, 6);
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$1698695984__1, $composer_0, 48, 1);
    Text(' folder.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_78(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1381421774$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Test it locally by running:', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_79(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1284528151$lambda_kfm2dt($this$Code, $composer, $changed) {
    var $composer_0 = $composer;
    Text('$ kobweb run --layout static --env prod\n', $composer_0, 0);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_80(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_1363397750$lambda_6ozyse($this$Pre, $composer, $changed) {
    var $composer_0 = $composer;
    Code(null, ComposableSingletons$AboutKt_getInstance().lambda$_1284528151_o76gpr_1, $composer_0, 48, 1);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_81(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$1482333741$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text("If you're satisfied, you can upload your site files to the static website host provider of your choice. Each provider has its own instructions for how it discovers your files, so please refer to their documentation.", $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_82(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function ComposableSingletons$AboutKt$lambda$722676901$lambda($composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      Text('read this blog post', $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_83(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$AboutKt$lambda$_592570281$lambda_im91n1($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    Text('You can ', $composer_0, 6);
    Link('https://bitspittle.dev/blog/2022/staticdeploy', null, null, null, null, null, null, ComposableSingletons$AboutKt_getInstance().lambda$722676901__1, $composer_0, 12582918, 126);
    Text(' for some concrete examples of exporting a Kobweb site to two popular static website hosting providers.', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableSingletons$AboutKt() {
    ComposableSingletons$AboutKt_instance = this;
    var tmp = this;
    tmp.lambda$962827190__1 = ComposableLambda$invoke$ref_15(composableLambdaInstance(962827190, false, ComposableSingletons$AboutKt$lambda$962827190$lambda));
    var tmp_0 = this;
    tmp_0.lambda$1691713685__1 = ComposableLambda$invoke$ref_16(composableLambdaInstance(1691713685, false, ComposableSingletons$AboutKt$lambda$1691713685$lambda));
    var tmp_1 = this;
    tmp_1.lambda$1063739157__1 = ComposableLambda$invoke$ref_17(composableLambdaInstance(1063739157, false, ComposableSingletons$AboutKt$lambda$1063739157$lambda));
    var tmp_2 = this;
    tmp_2.lambda$_94696898_gdr2sx_1 = ComposableLambda$invoke$ref_18(composableLambdaInstance(-94696898, false, ComposableSingletons$AboutKt$lambda$_94696898$lambda_vsr4qp));
    var tmp_3 = this;
    tmp_3.lambda$1164651124__1 = ComposableLambda$invoke$ref_19(composableLambdaInstance(1164651124, false, ComposableSingletons$AboutKt$lambda$1164651124$lambda));
    var tmp_4 = this;
    tmp_4.lambda$1265563091__1 = ComposableLambda$invoke$ref_20(composableLambdaInstance(1265563091, false, ComposableSingletons$AboutKt$lambda$1265563091$lambda));
    var tmp_5 = this;
    tmp_5.lambda$_1781410372_rq2vau_1 = ComposableLambda$invoke$ref_21(composableLambdaInstance(-1781410372, false, ComposableSingletons$AboutKt$lambda$_1781410372$lambda_ndgjdw));
    var tmp_6 = this;
    tmp_6.lambda$6215069__1 = ComposableLambda$invoke$ref_22(composableLambdaInstance(6215069, false, ComposableSingletons$AboutKt$lambda$6215069$lambda));
    var tmp_7 = this;
    tmp_7.lambda$_1603524612_eiu4e0__1 = ComposableLambda$invoke$ref_23(composableLambdaInstance(-1603524612, false, ComposableSingletons$AboutKt$lambda$_1603524612$lambda_5pljg6));
    var tmp_8 = this;
    tmp_8.lambda$107127036__1 = ComposableLambda$invoke$ref_24(composableLambdaInstance(107127036, false, ComposableSingletons$AboutKt$lambda$107127036$lambda));
    var tmp_9 = this;
    tmp_9.lambda$_1502612645_u70euu_1 = ComposableLambda$invoke$ref_25(composableLambdaInstance(-1502612645, false, ComposableSingletons$AboutKt$lambda$_1502612645$lambda_q5piw));
    var tmp_10 = this;
    tmp_10.lambda$208039003__1 = ComposableLambda$invoke$ref_26(composableLambdaInstance(208039003, false, ComposableSingletons$AboutKt$lambda$208039003$lambda));
    var tmp_11 = this;
    tmp_11.lambda$_1401700678_p5xcng_1 = ComposableLambda$invoke$ref_27(composableLambdaInstance(-1401700678, false, ComposableSingletons$AboutKt$lambda$_1401700678$lambda_49a4ee));
    var tmp_12 = this;
    tmp_12.lambda$308950970__1 = ComposableLambda$invoke$ref_28(composableLambdaInstance(308950970, false, ComposableSingletons$AboutKt$lambda$308950970$lambda));
    var tmp_13 = this;
    tmp_13.lambda$_270011496_kevgp0__1 = ComposableLambda$invoke$ref_29(composableLambdaInstance(-270011496, false, ComposableSingletons$AboutKt$lambda$_270011496$lambda_t8cr7w));
    var tmp_14 = this;
    tmp_14.lambda$986402169__1 = ComposableLambda$invoke$ref_30(composableLambdaInstance(986402169, false, ComposableSingletons$AboutKt$lambda$986402169$lambda));
    var tmp_15 = this;
    tmp_15.lambda$_1085831025_t28wll_1 = ComposableLambda$invoke$ref_31(composableLambdaInstance(-1085831025, false, ComposableSingletons$AboutKt$lambda$_1085831025$lambda_y9q7y3));
    var tmp_16 = this;
    tmp_16.lambda$_558109136_l6gpwi_1 = ComposableLambda$invoke$ref_32(composableLambdaInstance(-558109136, false, ComposableSingletons$AboutKt$lambda$_558109136$lambda_qf4day));
    var tmp_17 = this;
    tmp_17.lambda$_1605123312_t1ojxg_1 = ComposableLambda$invoke$ref_33(composableLambdaInstance(-1605123312, false, ComposableSingletons$AboutKt$lambda$_1605123312$lambda_n5wvu6));
    var tmp_18 = this;
    tmp_18.lambda$_1077401423_rnl7lb_1 = ComposableLambda$invoke$ref_34(composableLambdaInstance(-1077401423, false, ComposableSingletons$AboutKt$lambda$_1077401423$lambda_8hvrhb));
    var tmp_19 = this;
    tmp_19.lambda$339515688__1 = ComposableLambda$invoke$ref_35(composableLambdaInstance(339515688, false, ComposableSingletons$AboutKt$lambda$339515688$lambda));
    var tmp_20 = this;
    tmp_20.lambda$_1300788711_9to4um_1 = ComposableLambda$invoke$ref_36(composableLambdaInstance(-1300788711, false, ComposableSingletons$AboutKt$lambda$_1300788711$lambda_koqf5w));
    var tmp_21 = this;
    tmp_21.lambda$_1377762504_aithmg_1 = ComposableLambda$invoke$ref_37(composableLambdaInstance(-1377762504, false, ComposableSingletons$AboutKt$lambda$_1377762504$lambda_xz1zpm));
    var tmp_22 = this;
    tmp_22.lambda$_1444731551_7usppt_1 = ComposableLambda$invoke$ref_38(composableLambdaInstance(-1444731551, false, ComposableSingletons$AboutKt$lambda$_1444731551$lambda_kmdkch));
    var tmp_23 = this;
    tmp_23.lambda$_362923264_pjaafp_1 = ComposableLambda$invoke$ref_39(composableLambdaInstance(-362923264, false, ComposableSingletons$AboutKt$lambda$_362923264$lambda_c9ze99));
    var tmp_24 = this;
    tmp_24.lambda$409862937__1 = ComposableLambda$invoke$ref_40(composableLambdaInstance(409862937, false, ComposableSingletons$AboutKt$lambda$409862937$lambda));
    var tmp_25 = this;
    tmp_25.lambda$_1199876744_fqiyc0__1 = ComposableLambda$invoke$ref_41(composableLambdaInstance(-1199876744, false, ComposableSingletons$AboutKt$lambda$_1199876744$lambda_iidzvm));
    var tmp_26 = this;
    tmp_26.lambda$178047105__1 = ComposableLambda$invoke$ref_42(composableLambdaInstance(178047105, false, ComposableSingletons$AboutKt$lambda$178047105$lambda));
    var tmp_27 = this;
    tmp_27.lambda$705768994__1 = ComposableLambda$invoke$ref_43(composableLambdaInstance(705768994, false, ComposableSingletons$AboutKt$lambda$705768994$lambda));
    var tmp_28 = this;
    tmp_28.lambda$_2140472392_ii15rc_1 = ComposableLambda$invoke$ref_44(composableLambdaInstance(-2140472392, false, ComposableSingletons$AboutKt$lambda$_2140472392$lambda_uc09oa));
    var tmp_29 = this;
    tmp_29.lambda$_1805877991_eenj7v_1 = ComposableLambda$invoke$ref_45(composableLambdaInstance(-1805877991, false, ComposableSingletons$AboutKt$lambda$_1805877991$lambda_rjhc61));
    var tmp_30 = this;
    tmp_30.lambda$1818118673__1 = ComposableLambda$invoke$ref_46(composableLambdaInstance(1818118673, false, ComposableSingletons$AboutKt$lambda$1818118673$lambda));
    var tmp_31 = this;
    tmp_31.lambda$204322909__1 = ComposableLambda$invoke$ref_47(composableLambdaInstance(204322909, false, ComposableSingletons$AboutKt$lambda$204322909$lambda));
    var tmp_32 = this;
    tmp_32.lambda$510774904__1 = ComposableLambda$invoke$ref_48(composableLambdaInstance(510774904, false, ComposableSingletons$AboutKt$lambda$510774904$lambda));
    var tmp_33 = this;
    tmp_33.lambda$_1098964777_vep8su_1 = ComposableLambda$invoke$ref_49(composableLambdaInstance(-1098964777, false, ComposableSingletons$AboutKt$lambda$_1098964777$lambda_nhttsw));
    var tmp_34 = this;
    tmp_34.lambda$_1175938570_t6be4i_1 = ComposableLambda$invoke$ref_50(composableLambdaInstance(-1175938570, false, ComposableSingletons$AboutKt$lambda$_1175938570$lambda_m3pngw));
    var tmp_35 = this;
    tmp_35.lambda$611686871__1 = ComposableLambda$invoke$ref_51(composableLambdaInstance(611686871, false, ComposableSingletons$AboutKt$lambda$611686871$lambda));
    var tmp_36 = this;
    tmp_36.lambda$_998052810_gi3jsi_1 = ComposableLambda$invoke$ref_52(composableLambdaInstance(-998052810, false, ComposableSingletons$AboutKt$lambda$_998052810$lambda_evifca));
    var tmp_37 = this;
    tmp_37.lambda$_1075026603_3k70vi_1 = ComposableLambda$invoke$ref_53(composableLambdaInstance(-1075026603, false, ComposableSingletons$AboutKt$lambda$_1075026603$lambda_omd4d8));
    var tmp_38 = this;
    tmp_38.lambda$712598838__1 = ComposableLambda$invoke$ref_54(composableLambdaInstance(712598838, false, ComposableSingletons$AboutKt$lambda$712598838$lambda));
    var tmp_39 = this;
    tmp_39.lambda$_897140843_w69u9c_1 = ComposableLambda$invoke$ref_55(composableLambdaInstance(-897140843, false, ComposableSingletons$AboutKt$lambda$_897140843$lambda_juy99k));
    var tmp_40 = this;
    tmp_40.lambda$992312215__1 = ComposableLambda$invoke$ref_56(composableLambdaInstance(992312215, false, ComposableSingletons$AboutKt$lambda$992312215$lambda));
    var tmp_41 = this;
    tmp_41.lambda$_1083728242_s0keb_1 = ComposableLambda$invoke$ref_57(composableLambdaInstance(-1083728242, false, ComposableSingletons$AboutKt$lambda$_1083728242$lambda_kgfysv));
    var tmp_42 = this;
    tmp_42.lambda$_1907409713_gxyszp_1 = ComposableLambda$invoke$ref_58(composableLambdaInstance(-1907409713, false, ComposableSingletons$AboutKt$lambda$_1907409713$lambda_xfq5rh));
    var tmp_43 = this;
    tmp_43.lambda$574126038__1 = ComposableLambda$invoke$ref_59(composableLambdaInstance(574126038, false, ComposableSingletons$AboutKt$lambda$574126038$lambda));
    var tmp_44 = this;
    tmp_44.lambda$2012170430__1 = ComposableLambda$invoke$ref_60(composableLambdaInstance(2012170430, false, ComposableSingletons$AboutKt$lambda$2012170430$lambda));
    var tmp_45 = this;
    tmp_45.lambda$_1086817487_rbgjb2__1 = ComposableLambda$invoke$ref_61(composableLambdaInstance(-1086817487, false, ComposableSingletons$AboutKt$lambda$_1086817487$lambda_4rfod0));
    var tmp_46 = this;
    tmp_46.lambda$675038005__1 = ComposableLambda$invoke$ref_62(composableLambdaInstance(675038005, false, ComposableSingletons$AboutKt$lambda$675038005$lambda));
    var tmp_47 = this;
    tmp_47.lambda$775949972__1 = ComposableLambda$invoke$ref_63(composableLambdaInstance(775949972, false, ComposableSingletons$AboutKt$lambda$775949972$lambda));
    var tmp_48 = this;
    tmp_48.lambda$_1840351775_p3fdax_1 = ComposableLambda$invoke$ref_64(composableLambdaInstance(-1840351775, false, ComposableSingletons$AboutKt$lambda$_1840351775$lambda_jambbf));
    var tmp_49 = this;
    tmp_49.lambda$_52726334_ilmh5m_1 = ComposableLambda$invoke$ref_65(composableLambdaInstance(-52726334, false, ComposableSingletons$AboutKt$lambda$_52726334$lambda_gqmzt4));
    var tmp_50 = this;
    tmp_50.lambda$876861939__1 = ComposableLambda$invoke$ref_66(composableLambdaInstance(876861939, false, ComposableSingletons$AboutKt$lambda$876861939$lambda));
    var tmp_51 = this;
    tmp_51.lambda$2113082397__1 = ComposableLambda$invoke$ref_67(composableLambdaInstance(2113082397, false, ComposableSingletons$AboutKt$lambda$2113082397$lambda));
    var tmp_52 = this;
    tmp_52.lambda$977773906__1 = ComposableLambda$invoke$ref_68(composableLambdaInstance(977773906, false, ComposableSingletons$AboutKt$lambda$977773906$lambda));
    var tmp_53 = this;
    tmp_53.lambda$_683169619_4gjkej_1 = ComposableLambda$invoke$ref_69(composableLambdaInstance(-683169619, false, ComposableSingletons$AboutKt$lambda$_683169619$lambda_bggazh));
    var tmp_54 = this;
    tmp_54.lambda$344828132__1 = ComposableLambda$invoke$ref_70(composableLambdaInstance(344828132, false, ComposableSingletons$AboutKt$lambda$344828132$lambda));
    var tmp_55 = this;
    tmp_55.lambda$_1901034241_z79793__1 = ComposableLambda$invoke$ref_71(composableLambdaInstance(-1901034241, false, ComposableSingletons$AboutKt$lambda$_1901034241$lambda_ayuyy1));
    var tmp_56 = this;
    tmp_56.lambda$1078685873__1 = ComposableLambda$invoke$ref_72(composableLambdaInstance(1078685873, false, ComposableSingletons$AboutKt$lambda$1078685873$lambda));
    var tmp_57 = this;
    tmp_57.lambda$1179597840__1 = ComposableLambda$invoke$ref_73(composableLambdaInstance(1179597840, false, ComposableSingletons$AboutKt$lambda$1179597840$lambda));
    var tmp_58 = this;
    tmp_58.lambda$_1385440118_8jdkyf_1 = ComposableLambda$invoke$ref_74(composableLambdaInstance(-1385440118, false, ComposableSingletons$AboutKt$lambda$_1385440118$lambda_xqptfb));
    var tmp_59 = this;
    tmp_59.lambda$_1464309717_n6cjn2__1 = ComposableLambda$invoke$ref_75(composableLambdaInstance(-1464309717, false, ComposableSingletons$AboutKt$lambda$_1464309717$lambda_jh4sd8));
    var tmp_60 = this;
    tmp_60.lambda$1698695984__1 = ComposableLambda$invoke$ref_76(composableLambdaInstance(1698695984, false, ComposableSingletons$AboutKt$lambda$1698695984$lambda));
    var tmp_61 = this;
    tmp_61.lambda$1280509807__1 = ComposableLambda$invoke$ref_77(composableLambdaInstance(1280509807, false, ComposableSingletons$AboutKt$lambda$1280509807$lambda));
    var tmp_62 = this;
    tmp_62.lambda$1381421774__1 = ComposableLambda$invoke$ref_78(composableLambdaInstance(1381421774, false, ComposableSingletons$AboutKt$lambda$1381421774$lambda));
    var tmp_63 = this;
    tmp_63.lambda$_1284528151_o76gpr_1 = ComposableLambda$invoke$ref_79(composableLambdaInstance(-1284528151, false, ComposableSingletons$AboutKt$lambda$_1284528151$lambda_kfm2dt));
    var tmp_64 = this;
    tmp_64.lambda$_1363397750_7tpxm8__1 = ComposableLambda$invoke$ref_80(composableLambdaInstance(-1363397750, false, ComposableSingletons$AboutKt$lambda$_1363397750$lambda_6ozyse));
    var tmp_65 = this;
    tmp_65.lambda$1482333741__1 = ComposableLambda$invoke$ref_81(composableLambdaInstance(1482333741, false, ComposableSingletons$AboutKt$lambda$1482333741$lambda));
    var tmp_66 = this;
    tmp_66.lambda$722676901__1 = ComposableLambda$invoke$ref_82(composableLambdaInstance(722676901, false, ComposableSingletons$AboutKt$lambda$722676901$lambda));
    var tmp_67 = this;
    tmp_67.lambda$_592570281_kmntgl_1 = ComposableLambda$invoke$ref_83(composableLambdaInstance(-592570281, false, ComposableSingletons$AboutKt$lambda$_592570281$lambda_im91n1));
  }
  protoOf(ComposableSingletons$AboutKt).get_lambda$962827190_ra0106_k$ = function () {
    return this.lambda$962827190__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1691713685_ysn423_k$ = function () {
    return this.lambda$1691713685__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1063739157_if7ueo_k$ = function () {
    return this.lambda$1063739157__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_94696898_qkw2ci_k$ = function () {
    return this.lambda$_94696898_gdr2sx_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1164651124_26cttp_k$ = function () {
    return this.lambda$1164651124__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1265563091_t7pdec_k$ = function () {
    return this.lambda$1265563091__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1781410372_np70lf_k$ = function () {
    return this.lambda$_1781410372_rq2vau_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$6215069_6ve2y1_k$ = function () {
    return this.lambda$6215069__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1603524612_uvtxp1_k$ = function () {
    return this.lambda$_1603524612_eiu4e0__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$107127036_s4wuqz_k$ = function () {
    return this.lambda$107127036__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1502612645_82pgk7_k$ = function () {
    return this.lambda$_1502612645_u70euu_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$208039003_5bsdm5_k$ = function () {
    return this.lambda$208039003__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1401700678_eqf0kn_k$ = function () {
    return this.lambda$_1401700678_p5xcng_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$308950970_wxbmnl_k$ = function () {
    return this.lambda$308950970__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_270011496_9dp67x_k$ = function () {
    return this.lambda$_270011496_kevgp0__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$986402169_1b84nf_k$ = function () {
    return this.lambda$986402169__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1085831025_pu2zl0_k$ = function () {
    return this.lambda$_1085831025_t28wll_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_558109136_4di9b1_k$ = function () {
    return this.lambda$_558109136_l6gpwi_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1605123312_debmy9_k$ = function () {
    return this.lambda$_1605123312_t1ojxg_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1077401423_oujgse_k$ = function () {
    return this.lambda$_1077401423_rnl7lb_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$339515688_sdieic_k$ = function () {
    return this.lambda$339515688__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1300788711_8h4p0l_k$ = function () {
    return this.lambda$_1300788711_9to4um_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1377762504_ti38r_k$ = function () {
    return this.lambda$_1377762504_aithmg_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1444731551_61j7ha_k$ = function () {
    return this.lambda$_1444731551_7usppt_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_362923264_c80rey_k$ = function () {
    return this.lambda$_362923264_pjaafp_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$409862937_q2i1y4_k$ = function () {
    return this.lambda$409862937__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1199876744_4lqjb1_k$ = function () {
    return this.lambda$_1199876744_fqiyc0__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$178047105_gvx7ez_k$ = function () {
    return this.lambda$178047105__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$705768994_uijn8z_k$ = function () {
    return this.lambda$705768994__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_2140472392_t26r4r_k$ = function () {
    return this.lambda$_2140472392_ii15rc_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1805877991_n23tx4_k$ = function () {
    return this.lambda$_1805877991_eenj7v_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1818118673_bkbc6e_k$ = function () {
    return this.lambda$1818118673__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$204322909_tscthh_k$ = function () {
    return this.lambda$204322909__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$510774904_8xpfvx_k$ = function () {
    return this.lambda$510774904__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1098964777_i7dxtt_k$ = function () {
    return this.lambda$_1098964777_vep8su_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1175938570_7qs7m7_k$ = function () {
    return this.lambda$_1175938570_t6be4i_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$611686871_i3n3oq_k$ = function () {
    return this.lambda$611686871__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_998052810_8mm9tf_k$ = function () {
    return this.lambda$_998052810_gi3jsi_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1075026603_ejwph7_k$ = function () {
    return this.lambda$_1075026603_3k70vi_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$712598838_62cqbb_k$ = function () {
    return this.lambda$712598838__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_897140843_vfqqy9_k$ = function () {
    return this.lambda$_897140843_w69u9c_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$992312215_45gtiu_k$ = function () {
    return this.lambda$992312215__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1083728242_oofgr4_k$ = function () {
    return this.lambda$_1083728242_s0keb_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1907409713_3rtm1a_k$ = function () {
    return this.lambda$_1907409713_gxyszp_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$574126038_i9cw6w_k$ = function () {
    return this.lambda$574126038__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$2012170430_4hawfw_k$ = function () {
    return this.lambda$2012170430__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1086817487_1h1qid_k$ = function () {
    return this.lambda$_1086817487_rbgjb2__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$675038005_tymone_k$ = function () {
    return this.lambda$675038005__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$775949972_jbxkzl_k$ = function () {
    return this.lambda$775949972__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1840351775_3mwrqk_k$ = function () {
    return this.lambda$_1840351775_p3fdax_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_52726334_tm5dp5_k$ = function () {
    return this.lambda$_52726334_ilmh5m_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$876861939_kbrozr_k$ = function () {
    return this.lambda$876861939__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$2113082397_xbvqw6_k$ = function () {
    return this.lambda$2113082397__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$977773906_rw7vuj_k$ = function () {
    return this.lambda$977773906__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_683169619_t01904_k$ = function () {
    return this.lambda$_683169619_4gjkej_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$344828132_6v6ihx_k$ = function () {
    return this.lambda$344828132__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1901034241_tm4k22_k$ = function () {
    return this.lambda$_1901034241_z79793__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1078685873_l9mxdr_k$ = function () {
    return this.lambda$1078685873__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1179597840_1jhjr3_k$ = function () {
    return this.lambda$1179597840__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1385440118_nnm1p2_k$ = function () {
    return this.lambda$_1385440118_8jdkyf_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1464309717_3tfqd7_k$ = function () {
    return this.lambda$_1464309717_n6cjn2__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1698695984_knivq3_k$ = function () {
    return this.lambda$1698695984__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1280509807_tpcczs_k$ = function () {
    return this.lambda$1280509807__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1381421774_uaeq12_k$ = function () {
    return this.lambda$1381421774__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1284528151_g038aa_k$ = function () {
    return this.lambda$_1284528151_o76gpr_1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_1363397750_c5c26b_k$ = function () {
    return this.lambda$_1363397750_7tpxm8__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$1482333741_hxkut8_k$ = function () {
    return this.lambda$1482333741__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$722676901_qvc4jy_k$ = function () {
    return this.lambda$722676901__1;
  };
  protoOf(ComposableSingletons$AboutKt).get_lambda$_592570281_hk5dto_k$ = function () {
    return this.lambda$_592570281_kmntgl_1;
  };
  var ComposableSingletons$AboutKt_instance;
  function ComposableSingletons$AboutKt_getInstance() {
    if (ComposableSingletons$AboutKt_instance == null)
      new ComposableSingletons$AboutKt();
    return ComposableSingletons$AboutKt_instance;
  }
  function initAboutPage$lambda($this$Builder) {
    $this$Builder.addScalar_2iedwt_k$('title', 'About');
    return Unit_getInstance();
  }
  function AboutPage$lambda($this$H1) {
    $this$H1.id_e4l56n_k$('about-this-template');
    return Unit_getInstance();
  }
  function AboutPage$lambda_0($this$H2) {
    $this$H2.id_e4l56n_k$('learn');
    return Unit_getInstance();
  }
  function AboutPage$lambda_1($this$H3) {
    $this$H3.id_e4l56n_k$('files');
    return Unit_getInstance();
  }
  function AboutPage$lambda_2($this$H4) {
    $this$H4.id_e4l56n_k$('appentry-kt');
    return Unit_getInstance();
  }
  function AboutPage$lambda_3($this$H4) {
    $this$H4.id_e4l56n_k$('appstyles-kt');
    return Unit_getInstance();
  }
  function AboutPage$lambda_4($this$H4) {
    $this$H4.id_e4l56n_k$('sitetheme-kt');
    return Unit_getInstance();
  }
  function AboutPage$lambda_5($this$H4) {
    $this$H4.id_e4l56n_k$('components');
    return Unit_getInstance();
  }
  function AboutPage$lambda_6($this$H4) {
    $this$H4.id_e4l56n_k$('pages');
    return Unit_getInstance();
  }
  function AboutPage$lambda_7($this$H4) {
    $this$H4.id_e4l56n_k$('resources');
    return Unit_getInstance();
  }
  function AboutPage$lambda_8($this$H3) {
    $this$H3.id_e4l56n_k$('classes');
    return Unit_getInstance();
  }
  function AboutPage$lambda_9($this$H4) {
    $this$H4.id_e4l56n_k$('modifier');
    return Unit_getInstance();
  }
  function AboutPage$lambda_10($this$H4) {
    $this$H4.id_e4l56n_k$('cssstyle');
    return Unit_getInstance();
  }
  function AboutPage$lambda_11($this$H4) {
    $this$H4.id_e4l56n_k$('keyframes');
    return Unit_getInstance();
  }
  function AboutPage$lambda_12($this$H2) {
    $this$H2.id_e4l56n_k$('starting-point');
    return Unit_getInstance();
  }
  function AboutPage$lambda_13($this$H2) {
    $this$H2.id_e4l56n_k$('export-and-deploy');
    return Unit_getInstance();
  }
  function AboutPage$lambda_14($$changed) {
    return function ($composer, $force) {
      AboutPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_COLOR_MODE_KEY() {
    return COLOR_MODE_KEY;
  }
  var COLOR_MODE_KEY;
  function initColorMode(ctx) {
    var tmp = ctx.get_config_c0698r_k$();
    var tmp0_elvis_lhs = loadFromLocalStorage(Companion_getInstance_2(), 'ashwa:colorMode');
    tmp.set_initialColorMode_lmyh2d_k$(tmp0_elvis_lhs == null ? get_systemPreference(Companion_getInstance_2()) : tmp0_elvis_lhs);
  }
  function initStyles(ctx) {
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.get_stylesheet_hk204p_k$();
    registerStyleBase(this_0, 'html, body', initStyles$lambda);
    registerStyleBase(this_0, 'body', initStyles$lambda_0);
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1744337173);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1909923340, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_86(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function initStyles$lambda() {
    return fillMaxHeight(Companion_getInstance_3());
  }
  function initStyles$lambda_0() {
    return scrollBehavior(Companion_getInstance_3(), Companion_getInstance_4().get_Smooth_4edjo7_k$());
  }
  function AppEntry$lambda$slambda($appColorState, resultContinuation) {
    this.$appColorState_1 = $appColorState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppEntry$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          saveToLocalStorage(this.$appColorState_1.get_value_j01efc_k$(), 'ashwa:colorMode');
          applyRuntimeColorMode(this.$appColorState_1.get_value_j01efc_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AppEntry$lambda$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda(this.$appColorState_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppEntry$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppEntry$lambda$slambda_0($appColorState, resultContinuation) {
    var i = new AppEntry$lambda$slambda($appColorState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$slambda_1($initial, resultContinuation) {
    this.$initial_1 = $initial;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AppEntry$lambda$slambda_1).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AppEntry$lambda$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AppEntry$lambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          applyRuntimeColorMode(this.$initial_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AppEntry$lambda$slambda_1).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new AppEntry$lambda$slambda_1(this.$initial_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(AppEntry$lambda$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AppEntry$lambda$slambda_2($initial, resultContinuation) {
    var i = new AppEntry$lambda$slambda_1($initial, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AppEntry$lambda$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_84(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function AppEntry$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = fillMaxHeight(toModifier(get_SmoothColorStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(118642190, true, AppEntry$lambda$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_84(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_85(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        var tmp0_elvis_lhs = loadFromLocalStorage(Companion_getInstance_2(), 'ashwa:colorMode');
        var initial = tmp0_elvis_lhs == null ? get_systemPreference(Companion_getInstance_2()) : tmp0_elvis_lhs;
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = mutableStateOf(initial);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var appColorState = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        var tmp_2 = appColorState.get_value_j01efc_k$();
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = AppEntry$lambda$slambda_0(appColorState, null);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        LaunchedEffect(tmp_2, tmp$ret$7, $composer_0, 0);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_kpusro_k$(initial.get_ordinal_ip24qg_k$());
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = AppEntry$lambda$slambda_2(initial, null);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp$ret$11 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        LaunchedEffect(Unit_getInstance(), tmp$ret$11, $composer_0, 6);
        var tmp_7 = get_LocalAppColorMode().provides_3agxel_k$(appColorState);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-549715636, true, AppEntry$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_85(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        CompositionLocalProvider(tmp_7, tmp0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_86(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_HeadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return HeadlineTextStyle;
  }
  var HeadlineTextStyle;
  function get_SubheadlineTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return SubheadlineTextStyle;
  }
  var SubheadlineTextStyle;
  function get_CircleButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return CircleButtonVariant;
  }
  var CircleButtonVariant;
  function get_UncoloredButtonVariant() {
    _init_properties_AppStyles_kt__9fg0zz();
    return UncoloredButtonVariant;
  }
  var UncoloredButtonVariant;
  function get_pageTitleStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return pageTitleStyle;
  }
  var pageTitleStyle;
  function get_highlightStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return highlightStyle;
  }
  var highlightStyle;
  function get_normalTextStyle() {
    _init_properties_AppStyles_kt__9fg0zz();
    return normalTextStyle;
  }
  var normalTextStyle;
  function initSiteStyles(ctx) {
    _init_properties_AppStyles_kt__9fg0zz();
    var tmp = ctx.get_stylesheet_hk204p_k$();
    tmp.registerStyle_79mtge_k$('html', initSiteStyles$lambda);
    var tmp_0 = ctx.get_stylesheet_hk204p_k$();
    registerStyleBase(tmp_0, 'body', initSiteStyles$lambda_0);
    var tmp_1 = ctx.get_theme_iz24rk_k$();
    var tmp_2 = get_HorizontalDividerStyle();
    modifyStyleBase(tmp_1, tmp_2, VOID, initSiteStyles$lambda_1);
  }
  function HeadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(textAlign(fontSize(Companion_getInstance_3(), get_cssRem(3)), Companion_getInstance_5().get_Start_ih4i6x_k$()), 1.2);
  }
  function SubheadlineTextStyle$lambda($this$base) {
    _init_properties_AppStyles_kt__9fg0zz();
    return color(textAlign(fontSize(Companion_getInstance_3(), get_cssRem(1)), Companion_getInstance_5().get_Start_ih4i6x_k$()), get_color(toPalette($this$base.get_colorMode_trbg8z_k$())).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8));
  }
  function CircleButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return borderRadius(padding(Companion_getInstance_3(), get_px(0)), get_percent(50));
  }
  function UncoloredButtonVariant$lambda($this$addVariantBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return setVariable(Companion_getInstance_3(), ButtonVars_getInstance().get_BackgroundDefaultColor_so3bvr_k$(), Colors_getInstance().get_Transparent_cxh4g9_k$());
  }
  function pageTitleStyle$lambda($this$CssStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    $this$CssStyle.base_y8uu8g_k$(pageTitleStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function pageTitleStyle$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return fontWeight(fontSize(margin(Companion_getInstance_3(), get_px(56)), get_px(32)), Companion_getInstance_6().get_Bold_wnz5ke_k$());
  }
  function highlightStyle$lambda($this$CssStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    $this$CssStyle.base_y8uu8g_k$(highlightStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function highlightStyle$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$());
  }
  function normalTextStyle$lambda($this$CssStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    $this$CssStyle.base_y8uu8g_k$(normalTextStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function normalTextStyle$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Normal_22avww_k$());
  }
  function initSiteStyles$lambda($this$registerStyle) {
    _init_properties_AppStyles_kt__9fg0zz();
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = 'no-preference';
    var tmp = new MediaFeature('prefers-reduced-motion', tmp$ret$2);
    $this$registerStyle.cssRule_7fzdgd_k$(tmp, initSiteStyles$lambda$lambda);
    return Unit_getInstance();
  }
  function initSiteStyles$lambda$lambda() {
    _init_properties_AppStyles_kt__9fg0zz();
    return scrollBehavior(Companion_getInstance_3(), Companion_getInstance_4().get_Smooth_4edjo7_k$());
  }
  function initSiteStyles$lambda_0() {
    _init_properties_AppStyles_kt__9fg0zz();
    return lineHeight(fontSize(fontFamily(Companion_getInstance_3(), ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif']), get_px(18)), 1.5);
  }
  function initSiteStyles$lambda_1($this$modifyStyleBase) {
    _init_properties_AppStyles_kt__9fg0zz();
    return fillMaxWidth(Companion_getInstance_3());
  }
  var properties_initialized_AppStyles_kt_kq2bkd;
  function _init_properties_AppStyles_kt__9fg0zz() {
    if (!properties_initialized_AppStyles_kt_kq2bkd) {
      properties_initialized_AppStyles_kt_kq2bkd = true;
      var tmp = Companion_getInstance_7();
      HeadlineTextStyle = base(tmp, VOID, HeadlineTextStyle$lambda);
      var tmp_0 = Companion_getInstance_7();
      SubheadlineTextStyle = base(tmp_0, VOID, SubheadlineTextStyle$lambda);
      var tmp_1 = get_ButtonStyle();
      CircleButtonVariant = addVariantBase(tmp_1, VOID, CircleButtonVariant$lambda);
      var tmp_2 = get_ButtonStyle();
      UncoloredButtonVariant = addVariantBase(tmp_2, VOID, UncoloredButtonVariant$lambda);
      pageTitleStyle = CssStyle(VOID, pageTitleStyle$lambda);
      highlightStyle = CssStyle(VOID, highlightStyle$lambda);
      normalTextStyle = CssStyle(VOID, normalTextStyle$lambda);
    }
  }
  var com_mano_ashwa_SitePalette_Brand$stable;
  var com_mano_ashwa_SitePalette$stable;
  var com_mano_ashwa_SitePalettes$stable;
  function Brand(primary, accent) {
    primary = primary === VOID ? Companion_getInstance_8().rgb_6orfmz_k$(3965935) : primary;
    accent = accent === VOID ? Companion_getInstance_8().rgb_6orfmz_k$(15981403) : accent;
    this.primary_1 = primary;
    this.accent_1 = accent;
  }
  protoOf(Brand).get_primary_3xuktj_k$ = function () {
    return this.primary_1;
  };
  protoOf(Brand).get_accent_avafv7_k$ = function () {
    return this.accent_1;
  };
  function SitePalette(brand, nearBackground, headerBackground, contactAreaBg, cardColor, cardTitleColor, cardSubTitleColor, cardDescriptionColor, textColor, pageTitleColor, chipColor, chipLayoutColor, chipTextColor) {
    this.brand_1 = brand;
    this.nearBackground_1 = nearBackground;
    this.headerBackground_1 = headerBackground;
    this.contactAreaBg_1 = contactAreaBg;
    this.cardColor_1 = cardColor;
    this.cardTitleColor_1 = cardTitleColor;
    this.cardSubTitleColor_1 = cardSubTitleColor;
    this.cardDescriptionColor_1 = cardDescriptionColor;
    this.textColor_1 = textColor;
    this.pageTitleColor_1 = pageTitleColor;
    this.chipColor_1 = chipColor;
    this.chipLayoutColor_1 = chipLayoutColor;
    this.chipTextColor_1 = chipTextColor;
  }
  protoOf(SitePalette).get_brand_ipc50e_k$ = function () {
    return this.brand_1;
  };
  protoOf(SitePalette).get_nearBackground_c1s3l_k$ = function () {
    return this.nearBackground_1;
  };
  protoOf(SitePalette).get_headerBackground_n2fw64_k$ = function () {
    return this.headerBackground_1;
  };
  protoOf(SitePalette).get_contactAreaBg_fqdah_k$ = function () {
    return this.contactAreaBg_1;
  };
  protoOf(SitePalette).get_cardColor_415dhm_k$ = function () {
    return this.cardColor_1;
  };
  protoOf(SitePalette).get_cardTitleColor_ckvrh8_k$ = function () {
    return this.cardTitleColor_1;
  };
  protoOf(SitePalette).get_cardSubTitleColor_rp4oz6_k$ = function () {
    return this.cardSubTitleColor_1;
  };
  protoOf(SitePalette).get_cardDescriptionColor_h2oyio_k$ = function () {
    return this.cardDescriptionColor_1;
  };
  protoOf(SitePalette).get_textColor_92p84z_k$ = function () {
    return this.textColor_1;
  };
  protoOf(SitePalette).get_pageTitleColor_weujh9_k$ = function () {
    return this.pageTitleColor_1;
  };
  protoOf(SitePalette).get_chipColor_8cdjny_k$ = function () {
    return this.chipColor_1;
  };
  protoOf(SitePalette).get_chipLayoutColor_7vjg5g_k$ = function () {
    return this.chipLayoutColor_1;
  };
  protoOf(SitePalette).get_chipTextColor_yu580v_k$ = function () {
    return this.chipTextColor_1;
  };
  function SitePalettes() {
    SitePalettes_instance = this;
    var tmp = this;
    var tmp0_nearBackground = Companion_getInstance_8().rgb_6orfmz_k$(16054010);
    var tmp1_headerBackground = Companion_getInstance_8().rgb_6orfmz_k$(16777215);
    var tmp2_brand = new Brand(Companion_getInstance_8().rgb_6orfmz_k$(3965935), Companion_getInstance_8().rgb_6orfmz_k$(16562691));
    var tmp3_cardColor = Companion_getInstance_8().rgb_6orfmz_k$(16777215);
    var tmp4_cardTitleColor = Companion_getInstance_8().rgb_6orfmz_k$(988970);
    var tmp5_cardSubTitleColor = Companion_getInstance_8().rgb_6orfmz_k$(4937059);
    var tmp6_cardDescriptionColor = Companion_getInstance_8().rgb_6orfmz_k$(7041664);
    var tmp7_pageTitleColor = Companion_getInstance_8().rgb_6orfmz_k$(7041664);
    var tmp8_textColor = Companion_getInstance_8().rgb_6orfmz_k$(7041664);
    var tmp9_contactAreaBg = Companion_getInstance_8().rgb_6orfmz_k$(16054010);
    var tmp10_chipColor = Companion_getInstance_8().rgb_6orfmz_k$(16054010);
    var tmp11_chipLayoutColor = Companion_getInstance_8().rgb_6orfmz_k$(16054010);
    var tmp12_chipTextColor = Companion_getInstance_8().rgb_6orfmz_k$(16054010);
    tmp.light_1 = new SitePalette(tmp2_brand, tmp0_nearBackground, tmp1_headerBackground, tmp9_contactAreaBg, tmp3_cardColor, tmp4_cardTitleColor, tmp5_cardSubTitleColor, tmp6_cardDescriptionColor, tmp8_textColor, tmp7_pageTitleColor, tmp10_chipColor, tmp11_chipLayoutColor, tmp12_chipTextColor);
    var tmp_0 = this;
    var tmp0_nearBackground_0 = Companion_getInstance_8().rgb_6orfmz_k$(395275);
    var tmp1_headerBackground_0 = Companion_getInstance_8().rgb_6orfmz_k$(395275);
    var tmp2_brand_0 = new Brand(Companion_getInstance_8().rgb_6orfmz_k$(3965935), Companion_getInstance_8().rgb_6orfmz_k$(15981403));
    var tmp3_cardColor_0 = Companion_getInstance_8().rgb_6orfmz_k$(725536);
    var tmp4_cardTitleColor_0 = Companion_getInstance_8().rgb_6orfmz_k$(15134456);
    var tmp5_cardSubTitleColor_0 = Companion_getInstance_8().rgb_6orfmz_k$(11188169);
    var tmp6_cardDescriptionColor_0 = Companion_getInstance_8().rgb_6orfmz_k$(9741240);
    var tmp7_pageTitleColor_0 = Colors_getInstance().get_White_ij46ow_k$();
    var tmp8_textColor_0 = Companion_getInstance_8().rgb_6orfmz_k$(9741240);
    var tmp9_contactAreaBg_0 = Companion_getInstance_8().rgb_6orfmz_k$(658448);
    var tmp10_chipLayoutColor = Companion_getInstance_8().rgb_6orfmz_k$(988964);
    var tmp11_chipColor = Companion_getInstance_8().rgb_6orfmz_k$(1187891);
    var tmp12_chipTextColor_0 = Companion_getInstance_8().rgb_6orfmz_k$(15134456);
    tmp_0.dark_1 = new SitePalette(tmp2_brand_0, tmp0_nearBackground_0, tmp1_headerBackground_0, tmp9_contactAreaBg_0, tmp3_cardColor_0, tmp4_cardTitleColor_0, tmp5_cardSubTitleColor_0, tmp6_cardDescriptionColor_0, tmp8_textColor_0, tmp7_pageTitleColor_0, tmp11_chipColor, tmp10_chipLayoutColor, tmp12_chipTextColor_0);
  }
  protoOf(SitePalettes).get_light_iuogdp_k$ = function () {
    return this.light_1;
  };
  protoOf(SitePalettes).get_dark_wokkvz_k$ = function () {
    return this.dark_1;
  };
  var SitePalettes_instance;
  function SitePalettes_getInstance() {
    if (SitePalettes_instance == null)
      new SitePalettes();
    return SitePalettes_instance;
  }
  function toSitePalette(_this__u8e3s4) {
    return SitePalettes_getInstance().dark_1;
  }
  function initTheme(ctx) {
    set_background(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Colors_getInstance().get_White_ij46ow_k$());
    set_color(ctx.get_theme_iz24rk_k$().get_palettes_f7ft27_k$().get_dark_wokkvz_k$(), Colors_getInstance().get_White_ij46ow_k$());
  }
  function com_mano_ashwa_SitePalette_Brand$stableprop_getter() {
    return com_mano_ashwa_SitePalette_Brand$stable;
  }
  function com_mano_ashwa_SitePalette$stableprop_getter() {
    return com_mano_ashwa_SitePalette$stable;
  }
  function com_mano_ashwa_SitePalettes$stableprop_getter() {
    return com_mano_ashwa_SitePalettes$stable;
  }
  function colorModeName(mode) {
    var tmp;
    if (mode.equals(ColorMode_LIGHT_getInstance())) {
      tmp = 'light';
    } else if (mode.equals(ColorMode_DARK_getInstance())) {
      tmp = 'dark';
    } else if (mode.equals(get_systemPreference(Companion_getInstance_2()))) {
      tmp = 'system';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function applyRuntimeColorMode(mode) {
    var modeName = colorModeName(mode);
    try {
      var tmp = document.documentElement;
      var tmp0_safe_receiver = tmp instanceof HTMLElement ? tmp : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.setAttribute('data-color-mode', modeName);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
      } else {
        throw $p;
      }
    }
    try {
      var sitePal = toSitePalette(mode);
      var bg = toString(sitePal.get_nearBackground_c1s3l_k$());
      var text = toString(get_color(toPalette(mode)));
      var brandPrimary = toString(sitePal.get_brand_ipc50e_k$().get_primary_3xuktj_k$());
      var brandAccent = toString(sitePal.get_brand_ipc50e_k$().get_accent_avafv7_k$());
      var tmp_0 = document.documentElement;
      var tmp1_safe_receiver = tmp_0 instanceof HTMLElement ? tmp_0 : null;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.style;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.setProperty('--site-near-background', bg);
      }
      var tmp_1 = document.documentElement;
      var tmp3_safe_receiver = tmp_1 instanceof HTMLElement ? tmp_1 : null;
      var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.style;
      if (tmp4_safe_receiver == null)
        null;
      else {
        tmp4_safe_receiver.setProperty('--site-color', text);
      }
      var tmp_2 = document.documentElement;
      var tmp5_safe_receiver = tmp_2 instanceof HTMLElement ? tmp_2 : null;
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.style;
      if (tmp6_safe_receiver == null)
        null;
      else {
        tmp6_safe_receiver.setProperty('--site-brand-primary', brandPrimary);
      }
      var tmp_3 = document.documentElement;
      var tmp7_safe_receiver = tmp_3 instanceof HTMLElement ? tmp_3 : null;
      var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.style;
      if (tmp8_safe_receiver == null)
        null;
      else {
        tmp8_safe_receiver.setProperty('--site-brand-accent', brandAccent);
      }
      var tmp_4 = document.body;
      var tmp9_safe_receiver = tmp_4 instanceof HTMLElement ? tmp_4 : null;
      var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.style;
      if (tmp10_safe_receiver == null)
        null;
      else {
        tmp10_safe_receiver.backgroundColor = bg;
      }
      var tmp_5 = document.body;
      var tmp11_safe_receiver = tmp_5 instanceof HTMLElement ? tmp_5 : null;
      var tmp12_safe_receiver = tmp11_safe_receiver == null ? null : tmp11_safe_receiver.style;
      if (tmp12_safe_receiver == null)
        null;
      else {
        tmp12_safe_receiver.color = text;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var _unused_var__etf5q3_0 = $p;
      } else {
        throw $p;
      }
    }
  }
  function get_LocalAppColorMode() {
    _init_properties_ThemeState_kt__78nmzs();
    return LocalAppColorMode;
  }
  var LocalAppColorMode;
  function LocalAppColorMode$lambda() {
    _init_properties_ThemeState_kt__78nmzs();
    return mutableStateOf(get_systemPreference(Companion_getInstance_2()));
  }
  var properties_initialized_ThemeState_kt_v5qldi;
  function _init_properties_ThemeState_kt__78nmzs() {
    if (!properties_initialized_ThemeState_kt_v5qldi) {
      properties_initialized_ThemeState_kt_v5qldi = true;
      LocalAppColorMode = staticCompositionLocalOf(LocalAppColorMode$lambda);
    }
  }
  function ThemeToggle(compact, $composer, $changed, $default) {
    var compact_0 = {_v: compact};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2075987202);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(compact_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        compact_0._v = false;
      }
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var appColorState = tmp0_0;
      var current = appColorState.get_value_j01efc_k$();
      var font = compact_0._v ? get_px(12) : get_px(16);
      var pad = compact_0._v ? get_px(4) : get_px(8);
      var activeBg = current.equals(ColorMode_LIGHT_getInstance()) ? SitePalettes_getInstance().get_light_iuogdp_k$().get_brand_ipc50e_k$().get_primary_3xuktj_k$() : SitePalettes_getInstance().get_dark_wokkvz_k$().get_brand_ipc50e_k$().get_primary_3xuktj_k$();
      var inactiveBg = Colors_getInstance().get_Transparent_cxh4g9_k$();
      var activeBorder = current.equals(ColorMode_DARK_getInstance()) ? SitePalettes_getInstance().get_dark_wokkvz_k$().get_brand_ipc50e_k$().get_accent_avafv7_k$() : SitePalettes_getInstance().get_light_iuogdp_k$().get_brand_ipc50e_k$().get_accent_avafv7_k$();
      var tmp = gap(Companion_getInstance_3(), get_px(6));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-693450235, true, ThemeToggle$lambda(current, appColorState, activeBg, inactiveBg, activeBorder, pad, font), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_90(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Row(tmp, null, null, null, tmp0_1, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ThemeToggle$lambda_0(compact_0, $changed, $default));
    }
  }
  function ThemeToggle$apply(appColorState, modeName, mode) {
    appColorState.set_value_v1vabv_k$(mode);
    try {
      var tmp = document.documentElement;
      var tmp0_safe_receiver = tmp instanceof HTMLElement ? tmp : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.setAttribute('data-color-mode', modeName);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
      } else {
        throw $p;
      }
    }
    try {
      var sitePal = mode.equals(ColorMode_LIGHT_getInstance()) ? SitePalettes_getInstance().get_light_iuogdp_k$() : SitePalettes_getInstance().get_dark_wokkvz_k$();
      var bg = toString(sitePal.get_nearBackground_c1s3l_k$());
      var text = mode.equals(ColorMode_DARK_getInstance()) ? toString(Colors_getInstance().get_White_ij46ow_k$()) : toString(Colors_getInstance().get_Black_i7mvue_k$());
      var brandPrimary = toString(sitePal.get_brand_ipc50e_k$().get_primary_3xuktj_k$());
      var brandAccent = toString(sitePal.get_brand_ipc50e_k$().get_accent_avafv7_k$());
      var tmp_0 = document.documentElement;
      var tmp1_safe_receiver = tmp_0 instanceof HTMLElement ? tmp_0 : null;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.style;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.setProperty('--site-near-background', bg);
      }
      var tmp_1 = document.documentElement;
      var tmp3_safe_receiver = tmp_1 instanceof HTMLElement ? tmp_1 : null;
      var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.style;
      if (tmp4_safe_receiver == null)
        null;
      else {
        tmp4_safe_receiver.setProperty('--site-color', text);
      }
      var tmp_2 = document.documentElement;
      var tmp5_safe_receiver = tmp_2 instanceof HTMLElement ? tmp_2 : null;
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.style;
      if (tmp6_safe_receiver == null)
        null;
      else {
        tmp6_safe_receiver.setProperty('--site-brand-primary', brandPrimary);
      }
      var tmp_3 = document.documentElement;
      var tmp7_safe_receiver = tmp_3 instanceof HTMLElement ? tmp_3 : null;
      var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.style;
      if (tmp8_safe_receiver == null)
        null;
      else {
        tmp8_safe_receiver.setProperty('--site-brand-accent', brandAccent);
      }
      var tmp9_safe_receiver = document.body;
      var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.style;
      if (tmp10_safe_receiver == null)
        null;
      else {
        tmp10_safe_receiver.backgroundColor = bg;
      }
      var tmp11_safe_receiver = document.body;
      var tmp12_safe_receiver = tmp11_safe_receiver == null ? null : tmp11_safe_receiver.style;
      if (tmp12_safe_receiver == null)
        null;
      else {
        tmp12_safe_receiver.color = text;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var _unused_var__etf5q3_0 = $p;
      } else {
        throw $p;
      }
    }
  }
  function ThemeToggle$lambda$lambda($appColorState) {
    return function (it) {
      ThemeToggle$apply($appColorState, 'light', ColorMode_LIGHT_getInstance());
      return Unit_getInstance();
    };
  }
  function ThemeToggle$lambda$lambda_0($font) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = fontSize(Companion_getInstance_3(), $font);
        SpanText('Day', tmp_0, null, null, $composer_0, 6, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_87(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ThemeToggle$lambda$lambda_1($appColorState) {
    return function (it) {
      ThemeToggle$apply($appColorState, 'dark', ColorMode_DARK_getInstance());
      return Unit_getInstance();
    };
  }
  function ThemeToggle$lambda$lambda_2($font) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = fontSize(Companion_getInstance_3(), $font);
        SpanText('Night', tmp_0, null, null, $composer_0, 6, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_88(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ThemeToggle$lambda$lambda_3($appColorState) {
    return function (it) {
      ThemeToggle$apply($appColorState, 'system', get_systemPreference(Companion_getInstance_2()));
      return Unit_getInstance();
    };
  }
  function ThemeToggle$lambda$lambda_4($font) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = fontSize(Companion_getInstance_3(), $font);
        SpanText('Browser', tmp_0, null, null, $composer_0, 6, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_89(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ThemeToggle$lambda($current, $appColorState, $activeBg, $inactiveBg, $activeBorder, $pad, $font) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var isLight = $current.equals(ColorMode_LIGHT_getInstance());
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changed_ga7h3f_k$($appColorState);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ThemeToggle$lambda$lambda($appColorState);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        var tmp_3 = borderRadius(backgroundColor(Companion_getInstance_3(), isLight ? $activeBg : $inactiveBg), get_px(6));
        var tmp_4;
        if (isLight) {
          var tmp_5 = Companion_getInstance_3();
          var tmp_6 = get_px(1);
          // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
          Companion_getInstance_9();
          // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_4 = border(tmp_5, tmp_6, 'solid', $activeBorder);
        } else {
          tmp_4 = Companion_getInstance_3();
        }
        var tmp_7 = padding(tmp_3.then_mmfvo6_k$(tmp_4), $pad);
        var tmp_8 = get_UncoloredButtonVariant();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(702185973, true, ThemeToggle$lambda$lambda_0($font), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_87(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = it_0;
        }
        var tmp_10 = tmp_9;
        var tmp0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Button(tmp_2, tmp_7, tmp_8, null, false, null, null, null, null, tmp0, $composer_0, 805306368 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 504);
        var isDark = $current.equals(ColorMode_DARK_getInstance());
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.changed_ga7h3f_k$($appColorState);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_11;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = ThemeToggle$lambda$lambda_1($appColorState);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_11 = value_1;
        } else {
          tmp_11 = it_1;
        }
        var tmp_12 = tmp_11;
        var tmp_13 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        var tmp_14 = borderRadius(backgroundColor(Companion_getInstance_3(), isDark ? $activeBg : $inactiveBg), get_px(6));
        var tmp_15;
        if (isDark) {
          var tmp_16 = Companion_getInstance_3();
          var tmp_17 = get_px(1);
          // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
          Companion_getInstance_9();
          // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_15 = border(tmp_16, tmp_17, 'solid', $activeBorder);
        } else {
          tmp_15 = Companion_getInstance_3();
        }
        var tmp_18 = padding(tmp_14.then_mmfvo6_k$(tmp_15), $pad);
        var tmp_19 = get_UncoloredButtonVariant();
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(614982060, true, ThemeToggle$lambda$lambda_2($font), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_20;
        if (invalid_2 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_88(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_2);
          tmp_20 = value_2;
        } else {
          tmp_20 = it_2;
        }
        var tmp_21 = tmp_20;
        var tmp0_0 = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Button(tmp_13, tmp_18, tmp_19, null, false, null, null, null, null, tmp0_0, $composer_0, 805306368 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 504);
        var isSystem = $current.equals(get_systemPreference(Companion_getInstance_2()));
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_0.changed_ga7h3f_k$($appColorState);
        // Inline function 'kotlin.let' call
        var it_3 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_22;
        if (invalid_3 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_3 = ThemeToggle$lambda$lambda_3($appColorState);
          $composer_0.updateRememberedValue_l1wh71_k$(value_3);
          tmp_22 = value_3;
        } else {
          tmp_22 = it_3;
        }
        var tmp_23 = tmp_22;
        var tmp_24 = (tmp_23 == null ? true : !(tmp_23 == null)) ? tmp_23 : THROW_CCE();
        var tmp_25 = borderRadius(backgroundColor(Companion_getInstance_3(), isSystem ? $activeBg : $inactiveBg), get_px(6));
        var tmp_26;
        if (isSystem) {
          var tmp_27 = Companion_getInstance_3();
          var tmp_28 = get_px(1);
          // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
          Companion_getInstance_9();
          // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_26 = border(tmp_27, tmp_28, 'solid', $activeBorder);
        } else {
          tmp_26 = Companion_getInstance_3();
        }
        var tmp_29 = padding(tmp_25.then_mmfvo6_k$(tmp_26), $pad);
        var tmp_30 = get_UncoloredButtonVariant();
        // Inline function 'kotlin.run' call
        var dispatchReceiver_1 = rememberComposableLambda(-568035475, true, ThemeToggle$lambda$lambda_4($font), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_4 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var it_4 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_31;
        if (invalid_4 || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_4 = ComposableLambda$invoke$ref_89(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_4);
          tmp_31 = value_4;
        } else {
          tmp_31 = it_4;
        }
        var tmp_32 = tmp_31;
        var tmp0_1 = (tmp_32 == null ? true : !(tmp_32 == null)) ? tmp_32 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        Button(tmp_24, tmp_29, tmp_30, null, false, null, null, null, null, tmp0_1, $composer_0, 805306368 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 504);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_90(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ThemeToggle$lambda_0($compact, $$changed, $$default) {
    return function ($composer, $force) {
      ThemeToggle($compact._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ifNotBlank(_this__u8e3s4, block) {
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(_this__u8e3s4)) {
      tmp = block(_this__u8e3s4);
    } else {
      tmp = '';
    }
    return tmp;
  }
  function get_MAIL_TO() {
    return MAIL_TO;
  }
  var MAIL_TO;
  function rememberAnimatedText(toRotate, period, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value = mutableStateOf('');
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var textState = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.changedInstance_s1wkiy_k$(toRotate) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_kpusro_k$(period) || ($changed & 48) === 32));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_0 = rememberAnimatedText$slambda_0(toRotate, textState, period, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    LaunchedEffect(Unit_getInstance(), tmp$ret$7, $composer_0, 6);
    return textState;
  }
  function rememberAnimatedText$slambda($toRotate, $textState, $period, resultContinuation) {
    this.$toRotate_1 = $toRotate;
    this.$textState_1 = $textState;
    this.$period_1 = $period;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberAnimatedText$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberAnimatedText$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberAnimatedText$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.loopNum0__1 = 0;
            this.isDeleting1__1 = false;
            var tmp_0 = this;
            var this_0 = numberRangeToNumber(1, 100);
            tmp_0.delta2__1 = 300 - random(this_0, Default_getInstance()) | 0;
            this.index3__1 = 1;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.i4__1 = this.loopNum0__1 % this.$toRotate_1.get_size_woubt6_k$() | 0;
            this.fullText5__1 = this.$toRotate_1.get_c1px32_k$(this.i4__1);
            var tmp_1 = this;
            var tmp_2;
            if (this.isDeleting1__1) {
              tmp_2 = substring(this.fullText5__1, 0, this.$textState_1.get_value_j01efc_k$().length - 1 | 0);
            } else {
              var tmp0 = this.index3__1;
              var b = this.fullText5__1.length;
              tmp_2 = substring(this.fullText5__1, 0, Math.min(tmp0, b));
            }

            tmp_1.updatedText6__1 = tmp_2;
            this.$textState_1.set_value_v1vabv_k$(this.updatedText6__1);
            if (this.isDeleting1__1) {
              this.delta2__1 = this.delta2__1 / 2 | 0;
            }

            if (!this.isDeleting1__1 && this.updatedText6__1 === this.fullText5__1) {
              this.isDeleting1__1 = true;
              this.index3__1 = this.index3__1 - 1 | 0;
              this.delta2__1 = this.$period_1;
            } else {
              var tmp_3;
              if (this.isDeleting1__1) {
                var this_1 = this.updatedText6__1;
                tmp_3 = charSequenceLength(this_1) === 0;
              } else {
                tmp_3 = false;
              }
              if (tmp_3) {
                this.isDeleting1__1 = false;
                this.loopNum0__1 = this.loopNum0__1 + 1 | 0;
                this.index3__1 = 1;
                this.delta2__1 = 500;
              } else {
                this.index3__1 = this.index3__1 + 1 | 0;
              }
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = delay(toLong(this.delta2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(rememberAnimatedText$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new rememberAnimatedText$slambda(this.$toRotate_1, this.$textState_1, this.$period_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(rememberAnimatedText$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberAnimatedText$slambda_0($toRotate, $textState, $period, resultContinuation) {
    var i = new rememberAnimatedText$slambda($toRotate, $textState, $period, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var FontAwesomeType_REGULAR_instance;
  var FontAwesomeType_SOLID_instance;
  var FontAwesomeType_LIGHT_instance;
  var FontAwesomeType_DOUBLE_instance;
  var FontAwesomeType_BRAND_instance;
  function values() {
    return [FontAwesomeType_REGULAR_getInstance(), FontAwesomeType_SOLID_getInstance(), FontAwesomeType_LIGHT_getInstance(), FontAwesomeType_DOUBLE_getInstance(), FontAwesomeType_BRAND_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'REGULAR':
        return FontAwesomeType_REGULAR_getInstance();
      case 'SOLID':
        return FontAwesomeType_SOLID_getInstance();
      case 'LIGHT':
        return FontAwesomeType_LIGHT_getInstance();
      case 'DOUBLE':
        return FontAwesomeType_DOUBLE_getInstance();
      case 'BRAND':
        return FontAwesomeType_BRAND_getInstance();
      default:
        FontAwesomeType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var FontAwesomeType_entriesInitialized;
  function FontAwesomeType_initEntries() {
    if (FontAwesomeType_entriesInitialized)
      return Unit_getInstance();
    FontAwesomeType_entriesInitialized = true;
    FontAwesomeType_REGULAR_instance = new FontAwesomeType('REGULAR', 0, 'far');
    FontAwesomeType_SOLID_instance = new FontAwesomeType('SOLID', 1, 'fas');
    FontAwesomeType_LIGHT_instance = new FontAwesomeType('LIGHT', 2, 'fal');
    FontAwesomeType_DOUBLE_instance = new FontAwesomeType('DOUBLE', 3, 'fad');
    FontAwesomeType_BRAND_instance = new FontAwesomeType('BRAND', 4, 'fab');
  }
  var $ENTRIES;
  function FontAwesomeType(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  protoOf(FontAwesomeType).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function I_0(type, icon, style, $composer, $changed, $default) {
    var type_0 = {_v: type};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1091220311);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0) {
      var tmp;
      var tmp_0 = $composer_0;
      var tmpEnum = type_0._v;
      if (tmp_0.changed_kpusro_k$(tmpEnum == null ? -1 : tmpEnum.get_ordinal_ip24qg_k$())) {
        tmp = 4;
      } else {
        tmp = 2;
      }
      $dirty = $dirty | tmp;
    }
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(icon) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(style_0._v) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        type_0._v = FontAwesomeType_SOLID_getInstance();
      }
      if (!(($default & 4) === 0)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = I$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        style_0._v = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      }
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(!!(($dirty & 14) === 4 | ($dirty & 112) === 32) | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = I$lambda_0(type_0, icon, style_0);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp_5 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      I(tmp_5, null, $composer_0, 0, 2);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(I$lambda_1(type_0, icon, style_0, $changed, $default));
    }
  }
  function P_0(text, classes, $composer, $changed, $default) {
    var classes_0 = {_v: classes};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-779222212);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($default & 2) === 0) {
      $composer_0.startMovableGroup_clfloq_k$(-1508235167, classes_0._v.length);
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(classes_0._v.length) ? 32 : 0);
      var tmp0_iterator = arrayIterator(classes_0._v);
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var value = tmp0_iterator.next_20eer_k$();
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 32 : 0);
      }
      $composer_0.endMovableGroup_kd2hcs_k$();
      if (($dirty & 112) === 0)
        $dirty = $dirty | 16;
    }
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          // Inline function 'kotlin.emptyArray' call
          classes_0._v = [];
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(classes_0._v);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = P$lambda(classes_0);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1576068442, true, P$lambda_0(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_91(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(tmp_1, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(P$lambda_1(text, classes_0, $changed, $default));
    }
  }
  function Span_0(text, classes, $composer, $changed, $default) {
    var classes_0 = {_v: classes};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(500567986);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($default & 2) === 0) {
      $composer_0.startMovableGroup_clfloq_k$(9498551, classes_0._v.length);
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(classes_0._v.length) ? 32 : 0);
      var tmp0_iterator = arrayIterator(classes_0._v);
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var value = tmp0_iterator.next_20eer_k$();
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 32 : 0);
      }
      $composer_0.endMovableGroup_kd2hcs_k$();
      if (($dirty & 112) === 0)
        $dirty = $dirty | 16;
    }
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          // Inline function 'kotlin.emptyArray' call
          classes_0._v = [];
          $dirty = $dirty & -113;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(classes_0._v);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = Span$lambda(classes_0);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1664305556, true, Span$lambda_0(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_92(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Span(tmp_1, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Span$lambda_1(text, classes_0, $changed, $default));
    }
  }
  function A_0(href, content, classes, $composer, $changed, $default) {
    var content_0 = {_v: content};
    var classes_0 = {_v: classes};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1405070012);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content_0._v) ? 32 : 16);
    if (($default & 4) === 0) {
      $composer_0.startMovableGroup_clfloq_k$(1652552356, classes_0._v.length);
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(classes_0._v.length) ? 256 : 0);
      var tmp0_iterator = arrayIterator(classes_0._v);
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var value = tmp0_iterator.next_20eer_k$();
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 256 : 0);
      }
      $composer_0.endMovableGroup_kd2hcs_k$();
      if (($dirty & 896) === 0)
        $dirty = $dirty | 128;
    }
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 2) === 0)) {
          content_0._v = '';
        }
        if (!(($default & 4) === 0)) {
          // Inline function 'kotlin.arrayOf' call
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          classes_0._v = ['link'];
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(classes_0._v);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = A$lambda(classes_0);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1749002226, true, A$lambda_0(content_0), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableLambda$invoke$ref_93(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      A(href, tmp_1, tmp0_0, $composer_0, 384 | 14 & $dirty, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(A$lambda_1(href, content_0, classes_0, $changed, $default));
    }
  }
  function Img(attrs, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(754680250);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = Img$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        attrs_0._v = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      }
      var tmp_1 = Companion_getInstance_10().createBuilder_cjmhhk_k$('img');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = Img$lambda_0(attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp$ret$7 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      TagElement(tmp_1, tmp$ret$7, null, $composer_0, 384);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Img$lambda_1(attrs_0, $changed, $default));
    }
  }
  function CodeBlock(text, lang, $composer, $changed, $default) {
    var lang_0 = {_v: lang};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1569966902);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(lang_0._v) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        lang_0._v = null;
      }
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-369667431, true, CodeBlock$lambda(lang_0, text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_95(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Pre(null, tmp0, $composer_0, 48, 1);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(CodeBlock$lambda_0(text, lang_0, $changed, $default));
    }
  }
  function Title(text, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(35055889);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = Companion_getInstance_10().createBuilder_cjmhhk_k$('title');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = Title$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1356157080, true, Title$lambda_0(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_96(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      TagElement(tmp, tmp_2, tmp0, $composer_0, 432);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Title$lambda_1(text, $changed));
    }
  }
  function Meta(attrs, $composer, $changed, $default) {
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1112961564);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = Meta$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        attrs_0._v = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      }
      var tmp_1 = Companion_getInstance_10().createBuilder_cjmhhk_k$('meta');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = Meta$lambda_0(attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp$ret$7 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      TagElement(tmp_1, tmp$ret$7, null, $composer_0, 384);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Meta$lambda_1(attrs_0, $changed, $default));
    }
  }
  function MetaProperty(property, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-14825068);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(property) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = MetaProperty$lambda(property, content);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Meta(tmp$ret$3, $composer_0, 0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MetaProperty$lambda_0(property, content, $changed));
    }
  }
  function MetaName(name, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(370208030);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = MetaName$lambda(name, content);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      Meta(tmp$ret$3, $composer_0, 0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MetaName$lambda_0(name, content, $changed));
    }
  }
  function Link_0(rel, href, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(435154580);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(rel) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(href) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp = Companion_getInstance_10().createBuilder_cjmhhk_k$('link');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = Link$lambda(rel, href);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      TagElement(tmp, tmp$ret$3, null, $composer_0, 384);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Link$lambda_0(rel, href, $changed));
    }
  }
  function Script(src, attrs, $composer, $changed, $default) {
    var src_0 = {_v: src};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(362326579);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(src_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(attrs_0._v) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        src_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.rememberedValue_4dg93v_k$();
        var tmp;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = Script$lambda;
          this_0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        attrs_0._v = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      }
      var tmp_1 = Companion_getInstance_10().createBuilder_cjmhhk_k$('script');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 14) === 4 | ($dirty & 112) === 32);
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = Script$lambda_0(src_0, attrs_0);
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp$ret$7 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      TagElement(tmp_1, tmp$ret$7, null, $composer_0, 384);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Script$lambda_1(src_0, attrs_0, $changed, $default));
    }
  }
  function I$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function I$lambda_0($type, $icon, $style) {
    return function ($this$I) {
      $this$I.classes_ayghm2_k$([$type._v.value_1, 'fa-' + $icon]);
      $this$I.style_xwwy6r_k$($style._v);
      return Unit_getInstance();
    };
  }
  function I$lambda_1($type, $icon, $style, $$changed, $$default) {
    return function ($composer, $force) {
      I_0($type._v, $icon, $style._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function P$lambda($classes) {
    return function ($this$P) {
      $this$P.classes_ayghm2_k$($classes._v.slice());
      return Unit_getInstance();
    };
  }
  function P$lambda_0($text) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      Text($text, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_91(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function P$lambda_1($text, $classes, $$changed, $$default) {
    return function ($composer, $force) {
      P_0($text, $classes._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Span$lambda($classes) {
    return function ($this$Span) {
      $this$Span.classes_ayghm2_k$($classes._v.slice());
      return Unit_getInstance();
    };
  }
  function Span$lambda_0($text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      Text($text, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_92(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Span$lambda_1($text, $classes, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($text, $classes._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function A$lambda($classes) {
    return function ($this$A) {
      $this$A.classes_ayghm2_k$($classes._v.slice());
      return Unit_getInstance();
    };
  }
  function A$lambda_0($content) {
    return function ($this$A, $composer, $changed) {
      var $composer_0 = $composer;
      Text($content._v, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_93(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function A$lambda_1($href, $content, $classes, $$changed, $$default) {
    return function ($composer, $force) {
      A_0($href, $content._v, $classes._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Img$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function Img$lambda_0($attrs) {
    return function ($this$TagElement) {
      // Inline function 'kotlin.apply' call
      $attrs._v($this$TagElement);
      return Unit_getInstance();
    };
  }
  function Img$lambda_1($attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img($attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function CodeBlock$lambda$lambda($lang) {
    return function ($this$Code) {
      var tmp0_safe_receiver = $lang._v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = 'language-' + tmp0_safe_receiver;
      }
      var tmp1_elvis_lhs = tmp;
      $this$Code.classes_ayghm2_k$([tmp1_elvis_lhs == null ? 'nohighlight' : tmp1_elvis_lhs, 'line-numbers']);
      return Unit_getInstance();
    };
  }
  function CodeBlock$lambda$lambda_0($text) {
    return function ($this$Code, $composer, $changed) {
      var $composer_0 = $composer;
      Text($text, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_94(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function CodeBlock$lambda($lang, $text) {
    return function ($this$Pre, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$($lang._v);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = CodeBlock$lambda$lambda($lang);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(407086520, true, CodeBlock$lambda$lambda_0($text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_94(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Code(tmp_1, tmp0, $composer_0, 48, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_95(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function CodeBlock$lambda_0($text, $lang, $$changed, $$default) {
    return function ($composer, $force) {
      CodeBlock($text, $lang._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Title$lambda($this$TagElement) {
    return Unit_getInstance();
  }
  function Title$lambda_0($text) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      Text($text, $composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_96(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Title$lambda_1($text, $$changed) {
    return function ($composer, $force) {
      Title($text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Meta$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function Meta$lambda_0($attrs) {
    return function ($this$TagElement) {
      // Inline function 'kotlin.apply' call
      $attrs._v($this$TagElement);
      return Unit_getInstance();
    };
  }
  function Meta$lambda_1($attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Meta($attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function MetaProperty$lambda($property, $content) {
    return function ($this$Meta) {
      $this$Meta.attr_w68641_k$('property', $property);
      $this$Meta.attr_w68641_k$('content', $content);
      return Unit_getInstance();
    };
  }
  function MetaProperty$lambda_0($property, $content, $$changed) {
    return function ($composer, $force) {
      MetaProperty($property, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MetaName$lambda($name, $content) {
    return function ($this$Meta) {
      $this$Meta.attr_w68641_k$('name', $name);
      $this$Meta.attr_w68641_k$('content', $content);
      return Unit_getInstance();
    };
  }
  function MetaName$lambda_0($name, $content, $$changed) {
    return function ($composer, $force) {
      MetaName($name, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Link$lambda($rel, $href) {
    return function ($this$TagElement) {
      $this$TagElement.attr_w68641_k$('rel', $rel);
      $this$TagElement.attr_w68641_k$('href', $href);
      return Unit_getInstance();
    };
  }
  function Link$lambda_0($rel, $href, $$changed) {
    return function ($composer, $force) {
      Link_0($rel, $href, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Script$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function Script$lambda_0($src, $attrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($src._v == null)) {
        $this$TagElement.attr_w68641_k$('src', $src._v);
        tmp = Unit_getInstance();
      }
      // Inline function 'kotlin.apply' call
      $attrs._v($this$TagElement);
      return Unit_getInstance();
    };
  }
  function Script$lambda_1($src, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Script($src._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function FontAwesomeType_REGULAR_getInstance() {
    FontAwesomeType_initEntries();
    return FontAwesomeType_REGULAR_instance;
  }
  function FontAwesomeType_SOLID_getInstance() {
    FontAwesomeType_initEntries();
    return FontAwesomeType_SOLID_instance;
  }
  function FontAwesomeType_LIGHT_getInstance() {
    FontAwesomeType_initEntries();
    return FontAwesomeType_LIGHT_instance;
  }
  function FontAwesomeType_DOUBLE_getInstance() {
    FontAwesomeType_initEntries();
    return FontAwesomeType_DOUBLE_instance;
  }
  function FontAwesomeType_BRAND_getInstance() {
    FontAwesomeType_initEntries();
    return FontAwesomeType_BRAND_instance;
  }
  function get_MarkdownStyle() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return MarkdownStyle;
  }
  var MarkdownStyle;
  function initMarkdownLayout(ctx) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var tmp0_safe_receiver = ensureNotNull(get_markdown(ctx)).get_frontMatter_iz7ndr_k$().get_6bo4tg_k$('title');
    var title = tmp0_safe_receiver == null ? null : singleOrNull(tmp0_safe_receiver);
    // Inline function 'kotlin.require' call
    if (!!(title == null)) {
      var message = 'Markdown file must set "title" in frontmatter';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData(title);
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function MarkdownLayout(content, $composer, $changed) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2044699266);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = get_MarkdownStyle();
      var tmp_0 = toAttrs(tmp, null, $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter(), 1);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(608290783, true, MarkdownLayout$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_97(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_0, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MarkdownLayout$lambda_0(content, $changed));
    }
  }
  function MarkdownStyle$lambda($this$CssStyle) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$CssStyle.base_y8uu8g_k$(MarkdownStyle$lambda$lambda);
    $this$CssStyle.cssRule_fe6cwq_k$('h1', MarkdownStyle$lambda$lambda_0);
    $this$CssStyle.cssRule_fe6cwq_k$('h2', MarkdownStyle$lambda$lambda_1);
    $this$CssStyle.cssRule_fe6cwq_k$('h3', MarkdownStyle$lambda$lambda_2);
    $this$CssStyle.cssRule_fe6cwq_k$('h4', MarkdownStyle$lambda$lambda_3);
    $this$CssStyle.cssRule_fe6cwq_k$('ul', MarkdownStyle$lambda$lambda_4);
    $this$CssStyle.cssRule_fe6cwq_k$(' :is(li,ol,ul)', MarkdownStyle$lambda$lambda_5);
    $this$CssStyle.cssRule_fe6cwq_k$('code', MarkdownStyle$lambda$lambda_6($this$CssStyle));
    $this$CssStyle.cssRule_fe6cwq_k$('pre', MarkdownStyle$lambda$lambda_7);
    $this$CssStyle.cssRule_fe6cwq_k$('pre > code', MarkdownStyle$lambda$lambda_8($this$CssStyle));
    return Unit_getInstance();
  }
  function MarkdownStyle$lambda$lambda() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxSize(Companion_getInstance_3());
  }
  function MarkdownStyle$lambda$lambda_0() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return lineHeight(margin_0(fontWeight_0(fontSize(Companion_getInstance_3(), get_cssRem(3)), 400), VOID, VOID, get_cssRem(2.5)), 1.2);
  }
  function MarkdownStyle$lambda$lambda_1() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_1(fontWeight_0(fontSize(Companion_getInstance_3(), get_cssRem(3)), 300), get_cssRem(2));
  }
  function MarkdownStyle$lambda$lambda_2() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_1(fontWeight_0(fontSize(Companion_getInstance_3(), get_cssRem(2.4)), 300), get_cssRem(1.5));
  }
  function MarkdownStyle$lambda$lambda_3() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(fontWeight(fontSize(Companion_getInstance_3(), get_cssRem(1.2)), Companion_getInstance_6().get_Bolder_3mclb9_k$()), get_cssRem(1), VOID, get_cssRem(0.5));
  }
  function MarkdownStyle$lambda$lambda_4() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return overflowWrap(fillMaxWidth(Companion_getInstance_3()), Companion_getInstance_11().get_BreakWord_a9p49s_k$());
  }
  function MarkdownStyle$lambda$lambda_5() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return margin_0(Companion_getInstance_3(), VOID, VOID, get_cssRem(0.25));
  }
  function MarkdownStyle$lambda$lambda_6($this_CssStyle) {
    return function () {
      return fontWeight(color(Companion_getInstance_3(), get_color(toPalette($this_CssStyle.get_colorMode_trbg8z_k$())).toRgb_1tsrpu_k$().copyf$default_6pu18v_k$(VOID, VOID, VOID, 0.8)), Companion_getInstance_6().get_Bolder_3mclb9_k$());
    };
  }
  function MarkdownStyle$lambda$lambda_7() {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    return fillMaxWidth(margin_0(Companion_getInstance_3(), get_cssRem(0.5), VOID, get_cssRem(2)));
  }
  function MarkdownStyle$lambda$lambda$lambda($this$overflow) {
    _init_properties_MarkdownLayout_kt__1k3pk7();
    $this$overflow.x_7tere2_k$(Companion_getInstance_12().get_Auto_wnyn88_k$());
    return Unit_getInstance();
  }
  function MarkdownStyle$lambda$lambda_8($this_CssStyle) {
    return function () {
      var tmp = Companion_getInstance_3();
      // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
      Companion_getInstance_13();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = backgroundColor(fillMaxWidth(display(tmp, 'block')), toSitePalette($this_CssStyle.get_colorMode_trbg8z_k$()).get_nearBackground_c1s3l_k$());
      var tmp_1 = get_px(1);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = fontSize(padding(borderRadius(border(tmp_0, tmp_1, 'solid', get_color(toPalette($this_CssStyle.get_colorMode_trbg8z_k$()))), get_cssRem(0.25)), get_cssRem(0.5)), get_cssRem(1));
      return overflow(tmp_2, MarkdownStyle$lambda$lambda$lambda);
    };
  }
  function MarkdownLayout$lambda($content) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      $content($composer_0, 0);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_97(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function MarkdownLayout$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      MarkdownLayout($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_MarkdownLayout_kt_c0ljiz;
  function _init_properties_MarkdownLayout_kt__1k3pk7() {
    if (!properties_initialized_MarkdownLayout_kt_c0ljiz) {
      properties_initialized_MarkdownLayout_kt_c0ljiz = true;
      MarkdownStyle = CssStyle(VOID, MarkdownStyle$lambda);
    }
  }
  function get_PageContentStyle() {
    _init_properties_PageLayout_kt__pf69s7();
    return PageContentStyle;
  }
  var PageContentStyle;
  var com_mano_ashwa_components_layouts_PageLayoutData$stable;
  function PageLayoutData(title) {
    this.title_1 = title;
  }
  protoOf(PageLayoutData).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  function PageLayout(ctx, content, $composer, $changed) {
    _init_properties_PageLayout_kt__pf69s7();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-328652909);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(ctx) : $composer_0.changedInstance_s1wkiy_k$(ctx)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      // Inline function 'com.varabyte.kobweb.core.data.getValue' call
      var this_0 = ctx.get_data_wokkxf_k$();
      var data = getValue(this_0, getKClass(PageLayoutData));
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(data);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = PageLayout$slambda_0(data, null);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$4 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      LaunchedEffect(data.title_1, tmp$ret$4, $composer_0, 0);
      var tmp_1 = fillMaxSize(Companion_getInstance_3());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(79859917, true, PageLayout$lambda(ctx, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_99(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_1, null, null, tmp0_0, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PageLayout$lambda_0(ctx, content, $changed));
    }
  }
  function com_mano_ashwa_components_layouts_PageLayoutData$stableprop_getter() {
    return com_mano_ashwa_components_layouts_PageLayoutData$stable;
  }
  function PageContentStyle$lambda($this$CssStyle) {
    _init_properties_PageLayout_kt__pf69s7();
    $this$CssStyle.base_y8uu8g_k$(PageContentStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function PageContentStyle$lambda$lambda() {
    _init_properties_PageLayout_kt__pf69s7();
    var tmp0_$receiver = fillMaxSize(Companion_getInstance_3());
    var tmp1_leftRight = get_cssRem(2);
    var tmp2_top = get_cssRem(4);
    return padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight);
  }
  function PageLayout$slambda($data, resultContinuation) {
    this.$data_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PageLayout$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PageLayout$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PageLayout$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          document.title = this.$data_1.title_1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PageLayout$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new PageLayout$slambda(this.$data_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(PageLayout$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function PageLayout$slambda_0($data, resultContinuation) {
    var i = new PageLayout$slambda($data, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PageLayout$lambda$lambda($ctx, $content) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        BSHeader($ctx, $composer_0, com_varabyte_kobweb_core_PageContext$stableprop_getter());
        $content($this$Column, $composer_0, 14 & $dirty);
        Footer($composer_0, 0);
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_98(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function PageLayout$lambda($ctx, $content) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = fontFamily(color(backgroundColor(overflow_0(Companion_getInstance_3(), Companion_getInstance_12().get_Hidden_viqel_k$()), Color('#121212')), Color('#fff')), ['Centra', 'sans-serif']);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-794302730, true, PageLayout$lambda$lambda($ctx, $content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_98(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_99(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function PageLayout$lambda_0($ctx, $content, $$changed) {
    return function ($composer, $force) {
      PageLayout($ctx, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_PageLayout_kt_piu0g5;
  function _init_properties_PageLayout_kt__pf69s7() {
    if (!properties_initialized_PageLayout_kt_piu0g5) {
      properties_initialized_PageLayout_kt_piu0g5 = true;
      PageContentStyle = CssStyle(VOID, PageContentStyle$lambda);
      com_mano_ashwa_components_layouts_PageLayoutData$stable = 0;
    }
  }
  function SkillCardView(title, skills, icon, color, $composer, $changed, $default) {
    var icon_0 = {_v: icon};
    var color_0 = {_v: color};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-732813731);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(skills) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(icon_0._v) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      $composer_0.startDefaults_g83kzo_k$();
      if (($changed & 1) === 0 || $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 4) === 0)) {
          icon_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          color_0._v = Colors_getInstance().get_WhiteSmoke_gvtxtb_k$();
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.endDefaults_b0s0ot_k$();
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var tmp = padding(borderRadius(backgroundColor(fillMaxWidth(Companion_getInstance_3()), sitePal.get_cardColor_415dhm_k$()), get_px(12)), get_px(16));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-514227433, true, SkillCardView$lambda(icon_0, title, sitePal, skills), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_103(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp, null, null, tmp0_1, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SkillCardView$lambda_0(title, skills, icon_0, color_0, $changed, $default));
    }
  }
  function ExperienceCardView(data, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-287290527);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(data) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var tmp = padding(borderRadius(backgroundColor(fillMaxWidth(Companion_getInstance_3()), sitePal.get_cardColor_415dhm_k$()), get_px(12)), get_px(16));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1728864871, true, ExperienceCardView$lambda(data, sitePal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_109(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp, null, null, tmp0_1, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ExperienceCardView$lambda_0(data, $changed));
    }
  }
  function ChipLayout(items, chipLayoutColor, chipColor, chipTextColor, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1136146489);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(items) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(chipLayoutColor) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(chipColor) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(chipTextColor) ? 2048 : 1024);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 1171) === 1170), $dirty & 1)) {
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$(chipLayoutColor);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ChipLayout$lambda(chipLayoutColor);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-523941640, true, ChipLayout$lambda_0(items, chipColor, chipTextColor), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_110(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Div(tmp_1, tmp0_0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ChipLayout$lambda_1(items, chipLayoutColor, chipColor, chipTextColor, $changed));
    }
  }
  function Chip(text, chipColor, chipTextColor, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-818216289);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(chipTextColor) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 131) === 130), $dirty & 1)) {
      var tmp0_$receiver = borderRadius(Companion_getInstance_3(), get_px(16));
      var tmp1_left = get_px(14);
      var tmp2_right = get_px(14);
      var tmp3_top = get_px(6);
      var tmp4_bottom = get_px(6);
      var tmp5_$receiver = padding_1(tmp0_$receiver, tmp3_top, tmp2_right, tmp4_bottom, tmp1_left);
      var tmp6_left = get_px(6);
      var tmp7_top = get_px(4);
      var tmp8_right = get_px(4);
      var tmp9_bottom = get_px(4);
      var tmp = margin_2(tmp5_$receiver, tmp7_top, tmp8_right, tmp9_bottom, tmp6_left);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(2063665445, true, Chip$lambda(text, chipTextColor), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_112(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp, null, null, tmp0, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Chip$lambda_0(text, chipColor, chipTextColor, $changed));
    }
  }
  function ProjectCardView(data, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1817965517);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(data) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var tmp = padding(borderRadius(backgroundColor(fillMaxWidth(Companion_getInstance_3()), sitePal.get_cardColor_415dhm_k$()), get_px(12)), get_px(16));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(554649427, true, ProjectCardView$lambda(data, sitePal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_116(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp, null, null, tmp0_1, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ProjectCardView$lambda_0(data, $changed));
    }
  }
  function SkillCardView$lambda$lambda$lambda($icon, $title, $sitePal) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        if (!($icon._v == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-541916363);
          var tmp_0 = $icon._v;
          var tmp_1 = fontSize(Companion_getInstance_3(), get_px(24));
          SpanText(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-544083387);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        var tmp_2 = color(fontSize(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), get_px(20)), $sitePal.get_cardTitleColor_ckvrh8_k$());
        SpanText($title, tmp_2, null, null, $composer_0, 0, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_100(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function SkillCardView$lambda$lambda$lambda_0($skills, $sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $skills.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          var tmp_0 = '\u2022 ' + element;
          var tmp_1 = color(fontSize(Companion_getInstance_3(), get_px(16)), $sitePal.get_cardDescriptionColor_h2oyio_k$());
          SpanText(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_101(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function SkillCardView$lambda$lambda($icon, $title, $sitePal, $skills) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = gap(Companion_getInstance_3(), get_px(8));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1137375011, true, SkillCardView$lambda$lambda$lambda($icon, $title, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_100(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-1653611927, true, SkillCardView$lambda$lambda$lambda_0($skills, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_101(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Column(null, null, null, null, tmp0_0, $composer_0, 24576, 15);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_102(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function SkillCardView$lambda($icon, $title, $sitePal, $skills) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = gap(Companion_getInstance_3(), get_px(8));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(14740480, true, SkillCardView$lambda$lambda($icon, $title, $sitePal, $skills), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_102(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_103(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function SkillCardView$lambda_0($title, $skills, $icon, $color, $$changed, $$default) {
    return function ($composer, $force) {
      SkillCardView($title, $skills, $icon._v, $color._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function ExperienceCardView$lambda$lambda$lambda$lambda$lambda($data, $sitePal) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = $data.get_companyName_5hejwf_k$();
        var tmp_1 = color(fontSize(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), get_px(20)), $sitePal.get_cardTitleColor_ckvrh8_k$());
        SpanText(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
        var tmp_2 = width(Companion_getInstance_3(), get_px(10));
        Box(tmp_2, null, null, null, $composer_0, 0, 14);
        var tmp_3 = '(' + $data.get_duration_6a6kpp_k$() + ')';
        var tmp_4 = color(padding_0(fontSize(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), get_px(14)), get_px(5)), $sitePal.get_cardSubTitleColor_rp4oz6_k$());
        SpanText(tmp_3, tmp_4, null, null, $composer_0, 0, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_104(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ExperienceCardView$lambda$lambda$lambda$lambda($data, $sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1730649893, true, ExperienceCardView$lambda$lambda$lambda$lambda$lambda($data, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_104(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(null, null, null, null, tmp0, $composer_0, 24576, 15);
        var tmp_2 = $data.get_role_wotsxr_k$();
        var tmp_3 = color(fontSize(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), get_px(14)), $sitePal.get_cardSubTitleColor_rp4oz6_k$());
        SpanText(tmp_2, tmp_3, null, null, $composer_0, 0, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_105(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ExperienceCardView$lambda$lambda$lambda($data, $sitePal) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $data.get_icon_wont8i_k$();
        if (charSequenceLength(this_0) > 0) {
          $composer_0.startReplaceGroup_5hh8aj_k$(1469983756);
          var tmp_0 = $data.get_icon_wont8i_k$();
          var tmp_1 = fontSize(Companion_getInstance_3(), get_px(24));
          SpanText(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(1466964449);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(622488728, true, ExperienceCardView$lambda$lambda$lambda$lambda($data, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_105(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
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
  function ComposableLambda$invoke$ref_106(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ExperienceCardView$lambda$lambda$lambda_0($data, $sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = $data.get_skills_jilyrv_k$().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          var tmp_0 = '\u2022 ' + element;
          var tmp_1 = color(fontSize(Companion_getInstance_3(), get_px(16)), $sitePal.get_cardDescriptionColor_h2oyio_k$());
          SpanText(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
        }
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_107(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ExperienceCardView$lambda$lambda($data, $sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = gap(Companion_getInstance_3(), get_px(8));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-2141595423, true, ExperienceCardView$lambda$lambda$lambda($data, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_106(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-1681377323, true, ExperienceCardView$lambda$lambda$lambda_0($data, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_107(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Column(null, null, null, null, tmp0_0, $composer_0, 24576, 15);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_108(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ExperienceCardView$lambda($data, $sitePal) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = gap(Companion_getInstance_3(), get_px(8));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1392462814, true, ExperienceCardView$lambda$lambda($data, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_108(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_109(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ExperienceCardView$lambda_0($data, $$changed) {
    return function ($composer, $force) {
      ExperienceCardView($data, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ChipLayout$lambda$lambda($chipLayoutColor) {
    return function ($this$style) {
      // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
      Companion_getInstance_13();
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      display_0($this$style, 'flex');
      // Inline function 'org.jetbrains.compose.web.css.Companion.Wrap' call
      Companion_getInstance_14();
      // Inline function 'org.jetbrains.compose.web.css.FlexWrap' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      flexWrap($this$style, 'wrap');
      $this$style.property_wcrait_k$('gap', '8px');
      $this$style.property_wcrait_k$('margin-top', '6px');
      $this$style.property_wcrait_k$('margin-bottom', '6px');
      $this$style.property_wcrait_k$('margin-right', '4px');
      width_0($this$style, get_percent(100));
      $this$style.property_wcrait_k$('background-color', toString($chipLayoutColor));
      $this$style.property_wcrait_k$('border-radius', '12px');
      $this$style.property_wcrait_k$('padding', '8px 12px');
      $this$style.property_wcrait_k$('box-shadow', 'inset 0 0 0 1px rgba(255,255,255,0.02)');
      return Unit_getInstance();
    };
  }
  function ChipLayout$lambda($chipLayoutColor) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(ChipLayout$lambda$lambda($chipLayoutColor));
      return Unit_getInstance();
    };
  }
  function ChipLayout$lambda_0($items, $chipColor, $chipTextColor) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = $items.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        Chip(element, $chipColor, $chipTextColor, $composer_0, 0);
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_110(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ChipLayout$lambda_1($items, $chipLayoutColor, $chipColor, $chipTextColor, $$changed) {
    return function ($composer, $force) {
      ChipLayout($items, $chipLayoutColor, $chipColor, $chipTextColor, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Chip$lambda$lambda($this$Span) {
    $this$Span.style_xwwy6r_k$(Chip$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function Chip$lambda$lambda$lambda($this$style) {
    $this$style.property_wcrait_k$('white-space', 'nowrap');
    $this$style.property_wcrait_k$('font-size', '14px');
    $this$style.property_wcrait_k$('margin-right', '8px');
    $this$style.property_wcrait_k$('margin-bottom', '8px');
    $this$style.property_wcrait_k$('box-shadow', '0 1px 4px rgba(0,0,0,0.45)');
    $this$style.property_wcrait_k$('display', 'flex');
    $this$style.property_wcrait_k$('align-items', 'center');
    $this$style.property_wcrait_k$('justify-content', 'center');
    $this$style.property_wcrait_k$('height', '100%');
    return Unit_getInstance();
  }
  function Chip$lambda$lambda_0($text, $chipTextColor) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = color(fontSize(Companion_getInstance_3(), get_px(16)), $chipTextColor);
      SpanText($text, tmp, null, null, $composer_0, 0, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_111(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Chip$lambda($text, $chipTextColor) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = Chip$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1874352515, true, Chip$lambda$lambda_0($text, $chipTextColor), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_111(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Span(tmp_2, tmp0, $composer_0, 54, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_112(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Chip$lambda_0($text, $chipColor, $chipTextColor, $$changed) {
    return function ($composer, $force) {
      Chip($text, $chipColor, $chipTextColor, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ProjectCardView$lambda$lambda$lambda$lambda($data, $sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = $data.get_name_woqyms_k$();
        var tmp_1 = color(fontSize(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), get_px(20)), $sitePal.get_cardTitleColor_ckvrh8_k$());
        SpanText(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
        var tmp_2 = '(' + $data.get_duration_6a6kpp_k$() + ')';
        var tmp_3 = color(padding_0(fontSize(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), get_px(14)), get_px(5)), $sitePal.get_cardSubTitleColor_rp4oz6_k$());
        SpanText(tmp_2, tmp_3, null, null, $composer_0, 0, 12);
        var tmp_4 = $data.get_role_wotsxr_k$();
        var tmp_5 = color(fontSize(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), get_px(14)), $sitePal.get_cardSubTitleColor_rp4oz6_k$());
        SpanText(tmp_4, tmp_5, null, null, $composer_0, 0, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_113(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ProjectCardView$lambda$lambda$lambda($data, $sitePal) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $data.get_icon_wont8i_k$();
        if (charSequenceLength(this_0) > 0) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-255427552);
          var tmp_0 = $data.get_icon_wont8i_k$();
          var tmp_1 = fontSize(Companion_getInstance_3(), get_px(24));
          SpanText(tmp_0, tmp_1, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-262346411);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1547242052, true, ProjectCardView$lambda$lambda$lambda$lambda($data, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_113(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
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
  function ComposableLambda$invoke$ref_114(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ProjectCardView$lambda$lambda($data, $sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = gap(Companion_getInstance_3(), get_px(8));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-982671027, true, ProjectCardView$lambda$lambda$lambda($data, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_114(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_3 = $data.get_description_emjre5_k$();
        var tmp_4 = color(fontSize(Companion_getInstance_3(), get_px(16)), $sitePal.get_cardDescriptionColor_h2oyio_k$());
        SpanText(tmp_3, tmp_4, null, null, $composer_0, 0, 12);
        ChipLayout($data.get_technologies_mbv75f_k$(), $sitePal.get_chipLayoutColor_7vjg5g_k$(), $sitePal.get_chipColor_8cdjny_k$(), $sitePal.get_chipTextColor_yu580v_k$(), $composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_115(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ProjectCardView$lambda($data, $sitePal) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = gap(Companion_getInstance_3(), get_px(8));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1846520310, true, ProjectCardView$lambda$lambda($data, $sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_115(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_116(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ProjectCardView$lambda_0($data, $$changed) {
    return function ($composer, $force) {
      ProjectCardView($data, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function IconButton(onClick, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2039801380);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = IconButton$lambda(onClick);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      var tmp_2 = setVariable(Companion_getInstance_3(), ButtonVars_getInstance().get_FontSize_oos3dz_k$(), get_em(1));
      var tmp_3 = get_CircleButtonVariant().then_9h6e8h_k$(get_UncoloredButtonVariant());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-523551692, true, IconButton$lambda_0(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_117(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Button(tmp_1, tmp_2, tmp_3, null, false, null, null, null, null, tmp0_0, $composer_0, 805306368 | com_varabyte_kobweb_silk_style_CssStyleVariant$stableprop_getter() << 6, 504);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(IconButton$lambda_1(onClick, content, $changed));
    }
  }
  function IconButton$lambda($onClick) {
    return function (it) {
      $onClick();
      return Unit_getInstance();
    };
  }
  function IconButton$lambda_0($content) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_117(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function IconButton$lambda_1($onClick, $content, $$changed) {
    return function ($composer, $force) {
      IconButton($onClick, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NavTab(ctx, id, title, path, isSelected, onSelect) {
    var tmp;
    if (onSelect === VOID) {
      tmp = NavTab$lambda;
    } else {
      tmp = onSelect;
    }
    onSelect = tmp;
    return new NavLink(id, title, isSelected, VOID, NavTab$lambda_0(onSelect, ctx, path));
  }
  function NavTabDataList(ctx, selectedTabId, onSelect) {
    var tmp = Home_getInstance().get_id_kntnx8_k$();
    var tmp_0 = Home_getInstance().get_title_iz32un_k$();
    var tmp_1 = Home_getInstance().get_route_iy3cio_k$();
    var tmp_2 = selectedTabId === Home_getInstance().get_id_kntnx8_k$();
    var tmp_3 = NavTab(ctx, tmp, tmp_0, tmp_1, tmp_2, NavTabDataList$lambda(onSelect));
    var tmp_4 = Skill_getInstance().get_id_kntnx8_k$();
    var tmp_5 = Skill_getInstance().get_title_iz32un_k$();
    var tmp_6 = Skill_getInstance().get_route_iy3cio_k$();
    var tmp_7 = selectedTabId === Skill_getInstance().get_id_kntnx8_k$();
    var tmp_8 = NavTab(ctx, tmp_4, tmp_5, tmp_6, tmp_7, NavTabDataList$lambda_0(onSelect));
    var tmp_9 = Experience_getInstance().get_id_kntnx8_k$();
    var tmp_10 = Experience_getInstance().get_title_iz32un_k$();
    var tmp_11 = Experience_getInstance().get_route_iy3cio_k$();
    var tmp_12 = selectedTabId === Experience_getInstance().get_id_kntnx8_k$();
    var tmp_13 = NavTab(ctx, tmp_9, tmp_10, tmp_11, tmp_12, NavTabDataList$lambda_1(onSelect));
    var tmp_14 = Project_getInstance().get_id_kntnx8_k$();
    var tmp_15 = Project_getInstance().get_title_iz32un_k$();
    var tmp_16 = Project_getInstance().get_route_iy3cio_k$();
    var tmp_17 = selectedTabId === Project_getInstance().get_id_kntnx8_k$();
    var tmp_18 = NavTab(ctx, tmp_14, tmp_15, tmp_16, tmp_17, NavTabDataList$lambda_2(onSelect));
    var tmp_19 = CoverLetter_getInstance().get_id_kntnx8_k$();
    var tmp_20 = CoverLetter_getInstance().get_title_iz32un_k$();
    var tmp_21 = CoverLetter_getInstance().get_route_iy3cio_k$();
    var tmp_22 = selectedTabId === CoverLetter_getInstance().get_id_kntnx8_k$();
    return listOf([tmp_3, tmp_8, tmp_13, tmp_18, NavTab(ctx, tmp_19, tmp_20, tmp_21, tmp_22, NavTabDataList$lambda_3(onSelect))]);
  }
  function NavTab$lambda() {
    return Unit_getInstance();
  }
  function NavTab$lambda_0($onSelect, $ctx, $path) {
    return function (it) {
      $onSelect();
      $ctx.get_router_j3zccy_k$().navigateTo$default_onbd51_k$($path);
      return Unit_getInstance();
    };
  }
  function NavTabDataList$lambda($onSelect) {
    return function () {
      $onSelect(Home_getInstance().get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function NavTabDataList$lambda_0($onSelect) {
    return function () {
      $onSelect(Skill_getInstance().get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function NavTabDataList$lambda_1($onSelect) {
    return function () {
      $onSelect(Experience_getInstance().get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function NavTabDataList$lambda_2($onSelect) {
    return function () {
      $onSelect(Project_getInstance().get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function NavTabDataList$lambda_3($onSelect) {
    return function () {
      $onSelect(CoverLetter_getInstance().get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function get_REPO_LINK() {
    return REPO_LINK;
  }
  var REPO_LINK;
  function get_DISCORD_LINK() {
    return DISCORD_LINK;
  }
  var DISCORD_LINK;
  function get_LINKEDIN_LINK() {
    return LINKEDIN_LINK;
  }
  var LINKEDIN_LINK;
  var com_mano_ashwa_model_SkillData$stable;
  var com_mano_ashwa_model_ExperienceData$stable;
  var com_mano_ashwa_model_ProjectData$stable;
  function SkillData(title, skills, icon, color) {
    this.title_1 = title;
    this.skills_1 = skills;
    this.icon_1 = icon;
    this.color_1 = color;
  }
  protoOf(SkillData).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(SkillData).get_skills_jilyrv_k$ = function () {
    return this.skills_1;
  };
  protoOf(SkillData).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(SkillData).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(SkillData).component1_7eebsc_k$ = function () {
    return this.title_1;
  };
  protoOf(SkillData).component2_7eebsb_k$ = function () {
    return this.skills_1;
  };
  protoOf(SkillData).component3_7eebsa_k$ = function () {
    return this.icon_1;
  };
  protoOf(SkillData).component4_7eebs9_k$ = function () {
    return this.color_1;
  };
  protoOf(SkillData).copy_mgeenv_k$ = function (title, skills, icon, color) {
    return new SkillData(title, skills, icon, color);
  };
  protoOf(SkillData).copy$default_iqy7q3_k$ = function (title, skills, icon, color, $super) {
    title = title === VOID ? this.title_1 : title;
    skills = skills === VOID ? this.skills_1 : skills;
    icon = icon === VOID ? this.icon_1 : icon;
    color = color === VOID ? this.color_1 : color;
    return $super === VOID ? this.copy_mgeenv_k$(title, skills, icon, color) : $super.copy_mgeenv_k$.call(this, title, skills, icon, color);
  };
  protoOf(SkillData).toString = function () {
    return 'SkillData(title=' + this.title_1 + ', skills=' + toString(this.skills_1) + ', icon=' + this.icon_1 + ', color=' + toString(this.color_1) + ')';
  };
  protoOf(SkillData).hashCode = function () {
    var result = getStringHashCode(this.title_1);
    result = imul(result, 31) + hashCode(this.skills_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.icon_1) | 0;
    result = imul(result, 31) + hashCode(this.color_1) | 0;
    return result;
  };
  protoOf(SkillData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkillData))
      return false;
    var tmp0_other_with_cast = other instanceof SkillData ? other : THROW_CCE();
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!equals(this.skills_1, tmp0_other_with_cast.skills_1))
      return false;
    if (!(this.icon_1 === tmp0_other_with_cast.icon_1))
      return false;
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    return true;
  };
  function ExperienceData(companyName, title, duration, role, subTitle, skills, icon, color) {
    this.companyName_1 = companyName;
    this.title_1 = title;
    this.duration_1 = duration;
    this.role_1 = role;
    this.subTitle_1 = subTitle;
    this.skills_1 = skills;
    this.icon_1 = icon;
    this.color_1 = color;
  }
  protoOf(ExperienceData).get_companyName_5hejwf_k$ = function () {
    return this.companyName_1;
  };
  protoOf(ExperienceData).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(ExperienceData).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(ExperienceData).get_role_wotsxr_k$ = function () {
    return this.role_1;
  };
  protoOf(ExperienceData).get_subTitle_4nt9z5_k$ = function () {
    return this.subTitle_1;
  };
  protoOf(ExperienceData).get_skills_jilyrv_k$ = function () {
    return this.skills_1;
  };
  protoOf(ExperienceData).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(ExperienceData).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(ExperienceData).component1_7eebsc_k$ = function () {
    return this.companyName_1;
  };
  protoOf(ExperienceData).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(ExperienceData).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(ExperienceData).component4_7eebs9_k$ = function () {
    return this.role_1;
  };
  protoOf(ExperienceData).component5_7eebs8_k$ = function () {
    return this.subTitle_1;
  };
  protoOf(ExperienceData).component6_7eebs7_k$ = function () {
    return this.skills_1;
  };
  protoOf(ExperienceData).component7_7eebs6_k$ = function () {
    return this.icon_1;
  };
  protoOf(ExperienceData).component8_7eebs5_k$ = function () {
    return this.color_1;
  };
  protoOf(ExperienceData).copy_p66dvf_k$ = function (companyName, title, duration, role, subTitle, skills, icon, color) {
    return new ExperienceData(companyName, title, duration, role, subTitle, skills, icon, color);
  };
  protoOf(ExperienceData).copy$default_ectngw_k$ = function (companyName, title, duration, role, subTitle, skills, icon, color, $super) {
    companyName = companyName === VOID ? this.companyName_1 : companyName;
    title = title === VOID ? this.title_1 : title;
    duration = duration === VOID ? this.duration_1 : duration;
    role = role === VOID ? this.role_1 : role;
    subTitle = subTitle === VOID ? this.subTitle_1 : subTitle;
    skills = skills === VOID ? this.skills_1 : skills;
    icon = icon === VOID ? this.icon_1 : icon;
    color = color === VOID ? this.color_1 : color;
    return $super === VOID ? this.copy_p66dvf_k$(companyName, title, duration, role, subTitle, skills, icon, color) : $super.copy_p66dvf_k$.call(this, companyName, title, duration, role, subTitle, skills, icon, color);
  };
  protoOf(ExperienceData).toString = function () {
    return 'ExperienceData(companyName=' + this.companyName_1 + ', title=' + this.title_1 + ', duration=' + this.duration_1 + ', role=' + this.role_1 + ', subTitle=' + this.subTitle_1 + ', skills=' + toString(this.skills_1) + ', icon=' + this.icon_1 + ', color=' + toString(this.color_1) + ')';
  };
  protoOf(ExperienceData).hashCode = function () {
    var result = getStringHashCode(this.companyName_1);
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.duration_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.role_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.subTitle_1) | 0;
    result = imul(result, 31) + hashCode(this.skills_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.icon_1) | 0;
    result = imul(result, 31) + hashCode(this.color_1) | 0;
    return result;
  };
  protoOf(ExperienceData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExperienceData))
      return false;
    var tmp0_other_with_cast = other instanceof ExperienceData ? other : THROW_CCE();
    if (!(this.companyName_1 === tmp0_other_with_cast.companyName_1))
      return false;
    if (!(this.title_1 === tmp0_other_with_cast.title_1))
      return false;
    if (!(this.duration_1 === tmp0_other_with_cast.duration_1))
      return false;
    if (!(this.role_1 === tmp0_other_with_cast.role_1))
      return false;
    if (!(this.subTitle_1 === tmp0_other_with_cast.subTitle_1))
      return false;
    if (!equals(this.skills_1, tmp0_other_with_cast.skills_1))
      return false;
    if (!(this.icon_1 === tmp0_other_with_cast.icon_1))
      return false;
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    return true;
  };
  function ProjectData(name, description, duration, role, technologies, icon, color) {
    this.name_1 = name;
    this.description_1 = description;
    this.duration_1 = duration;
    this.role_1 = role;
    this.technologies_1 = technologies;
    this.icon_1 = icon;
    this.color_1 = color;
  }
  protoOf(ProjectData).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ProjectData).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(ProjectData).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(ProjectData).get_role_wotsxr_k$ = function () {
    return this.role_1;
  };
  protoOf(ProjectData).get_technologies_mbv75f_k$ = function () {
    return this.technologies_1;
  };
  protoOf(ProjectData).get_icon_wont8i_k$ = function () {
    return this.icon_1;
  };
  protoOf(ProjectData).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(ProjectData).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(ProjectData).component2_7eebsb_k$ = function () {
    return this.description_1;
  };
  protoOf(ProjectData).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(ProjectData).component4_7eebs9_k$ = function () {
    return this.role_1;
  };
  protoOf(ProjectData).component5_7eebs8_k$ = function () {
    return this.technologies_1;
  };
  protoOf(ProjectData).component6_7eebs7_k$ = function () {
    return this.icon_1;
  };
  protoOf(ProjectData).component7_7eebs6_k$ = function () {
    return this.color_1;
  };
  protoOf(ProjectData).copy_k035bp_k$ = function (name, description, duration, role, technologies, icon, color) {
    return new ProjectData(name, description, duration, role, technologies, icon, color);
  };
  protoOf(ProjectData).copy$default_ucxg7g_k$ = function (name, description, duration, role, technologies, icon, color, $super) {
    name = name === VOID ? this.name_1 : name;
    description = description === VOID ? this.description_1 : description;
    duration = duration === VOID ? this.duration_1 : duration;
    role = role === VOID ? this.role_1 : role;
    technologies = technologies === VOID ? this.technologies_1 : technologies;
    icon = icon === VOID ? this.icon_1 : icon;
    color = color === VOID ? this.color_1 : color;
    return $super === VOID ? this.copy_k035bp_k$(name, description, duration, role, technologies, icon, color) : $super.copy_k035bp_k$.call(this, name, description, duration, role, technologies, icon, color);
  };
  protoOf(ProjectData).toString = function () {
    return 'ProjectData(name=' + this.name_1 + ', description=' + this.description_1 + ', duration=' + this.duration_1 + ', role=' + this.role_1 + ', technologies=' + toString(this.technologies_1) + ', icon=' + this.icon_1 + ', color=' + toString(this.color_1) + ')';
  };
  protoOf(ProjectData).hashCode = function () {
    var result = getStringHashCode(this.name_1);
    result = imul(result, 31) + getStringHashCode(this.description_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.duration_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.role_1) | 0;
    result = imul(result, 31) + hashCode(this.technologies_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.icon_1) | 0;
    result = imul(result, 31) + hashCode(this.color_1) | 0;
    return result;
  };
  protoOf(ProjectData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ProjectData))
      return false;
    var tmp0_other_with_cast = other instanceof ProjectData ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    if (!(this.description_1 === tmp0_other_with_cast.description_1))
      return false;
    if (!(this.duration_1 === tmp0_other_with_cast.duration_1))
      return false;
    if (!(this.role_1 === tmp0_other_with_cast.role_1))
      return false;
    if (!equals(this.technologies_1, tmp0_other_with_cast.technologies_1))
      return false;
    if (!(this.icon_1 === tmp0_other_with_cast.icon_1))
      return false;
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    return true;
  };
  function com_mano_ashwa_model_SkillData$stableprop_getter() {
    return com_mano_ashwa_model_SkillData$stable;
  }
  function com_mano_ashwa_model_ExperienceData$stableprop_getter() {
    return com_mano_ashwa_model_ExperienceData$stable;
  }
  function com_mano_ashwa_model_ProjectData$stableprop_getter() {
    return com_mano_ashwa_model_ProjectData$stable;
  }
  var com_mano_ashwa_navigation_Screen_Home$stable;
  var com_mano_ashwa_navigation_Screen_About$stable;
  var com_mano_ashwa_navigation_Screen_Skill$stable;
  var com_mano_ashwa_navigation_Screen_Experience$stable;
  var com_mano_ashwa_navigation_Screen_Project$stable;
  var com_mano_ashwa_navigation_Screen_CoverLetter$stable;
  var com_mano_ashwa_navigation_Screen_ContactMe$stable;
  var com_mano_ashwa_navigation_Screen$stable;
  function get_Skill_Route() {
    return Skill_Route;
  }
  var Skill_Route;
  function get_About_Route() {
    return About_Route;
  }
  var About_Route;
  function get_Project_Route() {
    return Project_Route;
  }
  var Project_Route;
  function get_Experience_Route() {
    return Experience_Route;
  }
  var Experience_Route;
  function get_CoverLetter_Route() {
    return CoverLetter_Route;
  }
  var CoverLetter_Route;
  function get_ContactMe_Route() {
    return ContactMe_Route;
  }
  var ContactMe_Route;
  function Home() {
    Home_instance = this;
    Screen.call(this, 'homeId', 'Home', '/');
  }
  var Home_instance;
  function Home_getInstance() {
    if (Home_instance == null)
      new Home();
    return Home_instance;
  }
  function About() {
    About_instance = this;
    Screen.call(this, 'aboutId', 'About', '/about');
  }
  var About_instance;
  function About_getInstance() {
    if (About_instance == null)
      new About();
    return About_instance;
  }
  function Skill() {
    Skill_instance = this;
    Screen.call(this, 'skillId', 'Skill', '/skill');
  }
  var Skill_instance;
  function Skill_getInstance() {
    if (Skill_instance == null)
      new Skill();
    return Skill_instance;
  }
  function Experience() {
    Experience_instance = this;
    Screen.call(this, 'experiencesId', 'Experience', '/experiences');
  }
  var Experience_instance;
  function Experience_getInstance() {
    if (Experience_instance == null)
      new Experience();
    return Experience_instance;
  }
  function Project() {
    Project_instance = this;
    Screen.call(this, 'projectId', 'Project', '/project');
  }
  var Project_instance;
  function Project_getInstance() {
    if (Project_instance == null)
      new Project();
    return Project_instance;
  }
  function CoverLetter() {
    CoverLetter_instance = this;
    Screen.call(this, 'coverletterId', 'Cover Letter', '/cover-letter');
  }
  var CoverLetter_instance;
  function CoverLetter_getInstance() {
    if (CoverLetter_instance == null)
      new CoverLetter();
    return CoverLetter_instance;
  }
  function ContactMe() {
    ContactMe_instance = this;
    Screen.call(this, 'contactmeId', 'Contact Me', '/contact-me');
  }
  var ContactMe_instance;
  function ContactMe_getInstance() {
    if (ContactMe_instance == null)
      new ContactMe();
    return ContactMe_instance;
  }
  function Screen(id, title, route) {
    this.id_1 = id;
    this.title_1 = title;
    this.route_1 = route;
  }
  protoOf(Screen).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Screen).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(Screen).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  function com_mano_ashwa_navigation_Screen_Home$stableprop_getter() {
    return com_mano_ashwa_navigation_Screen_Home$stable;
  }
  function com_mano_ashwa_navigation_Screen_About$stableprop_getter() {
    return com_mano_ashwa_navigation_Screen_About$stable;
  }
  function com_mano_ashwa_navigation_Screen_Skill$stableprop_getter() {
    return com_mano_ashwa_navigation_Screen_Skill$stable;
  }
  function com_mano_ashwa_navigation_Screen_Experience$stableprop_getter() {
    return com_mano_ashwa_navigation_Screen_Experience$stable;
  }
  function com_mano_ashwa_navigation_Screen_Project$stableprop_getter() {
    return com_mano_ashwa_navigation_Screen_Project$stable;
  }
  function com_mano_ashwa_navigation_Screen_CoverLetter$stableprop_getter() {
    return com_mano_ashwa_navigation_Screen_CoverLetter$stable;
  }
  function com_mano_ashwa_navigation_Screen_ContactMe$stableprop_getter() {
    return com_mano_ashwa_navigation_Screen_ContactMe$stable;
  }
  function com_mano_ashwa_navigation_Screen$stableprop_getter() {
    return com_mano_ashwa_navigation_Screen$stable;
  }
  function AboutMe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1523579218);
    if (!$composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AboutMe$lambda($changed));
    }
  }
  function AboutMe$lambda($$changed) {
    return function ($composer, $force) {
      AboutMe($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_keywords() {
    _init_properties_CoverLetter_kt__86bx4l();
    return keywords;
  }
  var keywords;
  function initCoverLetterPage(ctx) {
    _init_properties_CoverLetter_kt__86bx4l();
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Manoj Cover Letter');
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function CoverLetter_0($composer, $changed) {
    _init_properties_CoverLetter_kt__86bx4l();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(707107554);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var tmp = backgroundColor(fillMaxWidth(Companion_getInstance_3()), sitePal.get_nearBackground_c1s3l_k$());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-316709877, true, CoverLetter$lambda(sitePal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_120(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Column(tmp, null, null, null, tmp0_1, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(CoverLetter$lambda_0($changed));
    }
  }
  function renderParagraph(para, textColor, $composer, $changed) {
    _init_properties_CoverLetter_kt__86bx4l();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(583354671);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(para) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(textColor) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isBlank(para)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(1281456393);
        P(toAttrs_0(margin_0(Companion_getInstance_3(), VOID, VOID, get_px(12))), ComposableSingletons$CoverLetterKt_getInstance().lambda$47271894__1, $composer_0, 48, 0);
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.updateScope_t8jcf_k$(renderParagraph$lambda(para, textColor, $changed));
        }
        return Unit_getInstance();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(1275780851);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
      // Inline function 'kotlin.collections.mutableListOf' call
      var segments = ArrayList_init_$Create$();
      var idx = 0;
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var lower = para.toLowerCase();
      $l$loop: while (idx < para.length) {
        var earliestPos = 2147483647;
        var earliestKey = null;
        var _iterator__ex2g4s = get_keywords().iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var key = _iterator__ex2g4s.next_20eer_k$();
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$4 = key.toLowerCase();
          var pos = indexOf(lower, tmp$ret$4, idx);
          if (pos >= 0 && pos < earliestPos) {
            earliestPos = pos;
            earliestKey = key;
          }
        }
        if (earliestKey == null) {
          segments.add_utx5q5_k$(to(substring_0(para, idx), false));
          break $l$loop;
        } else {
          if (earliestPos > idx) {
            segments.add_utx5q5_k$(to(substring(para, idx, earliestPos), false));
          }
          var keyLen = earliestKey.length;
          segments.add_utx5q5_k$(to(substring(para, earliestPos, earliestPos + keyLen | 0), true));
          idx = earliestPos + keyLen | 0;
        }
      }
      var tmp = toAttrs_0(margin_0(Companion_getInstance_3(), VOID, VOID, get_px(12)));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-618927919, true, renderParagraph$lambda_0(segments, textColor), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_121(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      P(tmp, tmp0, $composer_0, 48, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(renderParagraph$lambda_1(para, textColor, $changed));
    }
  }
  function ComposableLambda$invoke$ref_118(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$CoverLetterKt$lambda$47271894$lambda($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('\xA0', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableSingletons$CoverLetterKt() {
    ComposableSingletons$CoverLetterKt_instance = this;
    var tmp = this;
    tmp.lambda$47271894__1 = ComposableLambda$invoke$ref_118(composableLambdaInstance(47271894, false, ComposableSingletons$CoverLetterKt$lambda$47271894$lambda));
  }
  protoOf(ComposableSingletons$CoverLetterKt).get_lambda$47271894_imhg8_k$ = function () {
    return this.lambda$47271894__1;
  };
  var ComposableSingletons$CoverLetterKt_instance;
  function ComposableSingletons$CoverLetterKt_getInstance() {
    if (ComposableSingletons$CoverLetterKt_instance == null)
      new ComposableSingletons$CoverLetterKt();
    return ComposableSingletons$CoverLetterKt_instance;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function keywords$lambda(a, b) {
    _init_properties_CoverLetter_kt__86bx4l();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = b.length;
    var tmp$ret$1 = a.length;
    return compareValues(tmp, tmp$ret$1);
  }
  function CoverLetter$lambda$lambda($sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        renderParagraph('Dear Hiring Manager,', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('I am writing to express my interest in a position such as Tech Lead, Lead Android / Kotlin Multiplatform Developer, Full Stack Mobile Developer, or GoLang Developer. With over 14 years of hands-on experience in software engineering and mobile application development, I have cultivated a deep technical foundation combined with a passion for innovation and clean, scalable architecture.', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('My expertise spans Kotlin Multiplatform Development (Android, iOS, Web), native Android app engineering, and Full Stack web development using the Kobweb framework. I have worked extensively with technologies like Compose UI, Jetpack libraries, Ktor, Coroutines, GraphQL, Firebase, and Keycloak (Identity and Access Management). Additionally, I have strong backend experience in GoLang (GIN framework), enabling me to build efficient microservices and connect mobile and web ecosystems seamlessly.', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('Beyond coding, I focus on telecom and network performance, Bluetooth & NearBy discovery, and app optimization, using tools like memory profilers and ADB to resolve performance bottlenecks. I apply SOLID principles and patterns like MVVM and MVI, emphasizing a single business logic approach for cross-platform applications to ensure reliability, maintainability, and scalability.', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('Currently, I lead teams and oversee projects from concept to deployment, ensuring seamless coordination across development, testing, and client communication. I work closely with stakeholders to translate complex requirements into efficient, scalable, and maintainable technical solutions.', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('I have been exploring Kobweb, AI integration through the Koog (Kotlin Agentic Framework) and applying prompt engineering techniques to build intelligent, context-aware systems that enhance automation and decision-making within mobile and web applications.', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('Thank you for considering my application.', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('Sincerely,', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        renderParagraph('Ashwani Kumar Singh', $sitePal.get_textColor_92p84z_k$(), $composer_0, 6);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_119(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function CoverLetter$lambda($sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        var tmp_1 = $this$Column.align_45bqjp_k$(color(padding_0(toModifier(get_pageTitleStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), get_px(40)), $sitePal.get_pageTitleColor_weujh9_k$()), CenterHorizontally_getInstance());
        SpanText('My Cover Letter', tmp_1, null, null, $composer_0, 6, 12);
        var tmp0_$receiver = fillMaxWidth(Companion_getInstance_3());
        var tmp1_left = get_px(24);
        var tmp2_right = get_px(64);
        var tmp_2 = padding_1(tmp0_$receiver, VOID, tmp2_right, VOID, tmp1_left);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(157096628, true, CoverLetter$lambda$lambda($sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_119(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_2, null, null, null, tmp0, $composer_0, 24576, 14);
        tmp_0 = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_120(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function CoverLetter$lambda_0($$changed) {
    return function ($composer, $force) {
      CoverLetter_0($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function renderParagraph$lambda($para, $textColor, $$changed) {
    return function ($composer, $force) {
      renderParagraph($para, $textColor, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function renderParagraph$lambda_0($segments, $textColor) {
    return function ($this$P, $composer, $changed) {
      var $composer_0 = $composer;
      var _iterator__ex2g4s = $segments.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.next_20eer_k$();
        var text = _destruct__k2r9zo.component1_7eebsc_k$();
        var isHighlight = _destruct__k2r9zo.component2_7eebsb_k$();
        if (isHighlight) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-186951638);
          var tmp = color(toModifier(get_highlightStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $textColor);
          SpanText(text, tmp, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-186843479);
          var tmp_0 = color(toModifier(get_normalTextStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $textColor);
          SpanText(text, tmp_0, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_121(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function renderParagraph$lambda_1($para, $textColor, $$changed) {
    return function ($composer, $force) {
      renderParagraph($para, $textColor, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_CoverLetter_kt_c4er03;
  function _init_properties_CoverLetter_kt__86bx4l() {
    if (!properties_initialized_CoverLetter_kt_c4er03) {
      properties_initialized_CoverLetter_kt_c4er03 = true;
      // Inline function 'kotlin.collections.sortedByDescending' call
      var this_0 = listOf(['Dear Hiring Manager', 'Kotlin Multiplatform', 'Tech Lead', 'Full Stack', 'GoLang (GIN)', 'Compose UI', 'network performance', 'memory profilers', 'prompt engineering', 'Bluetooth & NearBy discovery', 'app optimization', 'maintainability', 'GIN framework', 'Kotlin', 'Android', 'GoLang', 'Jetpack', 'Ktor', 'Coroutines', 'GraphQL', 'Firebase', 'Keycloak', 'Kobweb', 'Koog', 'SOLID', 'MVVM', 'MVI', 'telecom', 'ADB', 'AI']);
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp = keywords$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      keywords = sortedWith(this_0, tmp$ret$0);
    }
  }
  function get_experienceCards() {
    _init_properties_Experiences_kt__nx7bhl();
    return experienceCards;
  }
  var experienceCards;
  function initExperiencesPage(ctx) {
    _init_properties_Experiences_kt__nx7bhl();
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Ashwani Skills');
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function Experiences($composer, $changed) {
    _init_properties_Experiences_kt__nx7bhl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-503004982);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var tmp = padding(backgroundColor(fillMaxWidth(Companion_getInstance_3()), sitePal.get_nearBackground_c1s3l_k$()), get_px(32));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(631304836, true, Experiences$lambda(sitePal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_124(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp, null, null, tmp0_1, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Experiences$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_122(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ExperiencesKt$lambda$_14985522$lambda_w41vyg($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_experienceCards().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      ExperienceCardView(element, $composer_0, 0);
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ExperiencesKt() {
    ComposableSingletons$ExperiencesKt_instance = this;
    var tmp = this;
    tmp.lambda$_14985522_wguc5q_1 = ComposableLambda$invoke$ref_122(composableLambdaInstance(-14985522, false, ComposableSingletons$ExperiencesKt$lambda$_14985522$lambda_w41vyg));
  }
  protoOf(ComposableSingletons$ExperiencesKt).get_lambda$_14985522_o9fwd7_k$ = function () {
    return this.lambda$_14985522_wguc5q_1;
  };
  var ComposableSingletons$ExperiencesKt_instance;
  function ComposableSingletons$ExperiencesKt_getInstance() {
    if (ComposableSingletons$ExperiencesKt_instance == null)
      new ComposableSingletons$ExperiencesKt();
    return ComposableSingletons$ExperiencesKt_instance;
  }
  function Experiences$lambda$lambda$lambda($this$gridTemplateColumns) {
    _init_properties_Experiences_kt__nx7bhl();
    $this$gridTemplateColumns.repeat_n9ti1_k$(3, Experiences$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function Experiences$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_Experiences_kt__nx7bhl();
    $this$repeat.minmax_1ha38s_k$(get_px(250), get_fr(1));
    return Unit_getInstance();
  }
  function Experiences$lambda$lambda($sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = color(toModifier(get_pageTitleStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $sitePal.get_pageTitleColor_weujh9_k$());
        SpanText('My Experiences', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1 = fillMaxWidth(Companion_getInstance_3());
        // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
        Companion_getInstance_13();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = display(tmp_1, 'grid');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = Experiences$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        Div(toAttrs_0(gap(gridTemplateColumns(tmp_2, tmp$ret$7), get_px(32))), ComposableSingletons$ExperiencesKt_getInstance().lambda$_14985522_wguc5q_1, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_123(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Experiences$lambda($sitePal) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1433607149, true, Experiences$lambda$lambda($sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_123(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(null, null, tmp_0, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 11);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_124(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Experiences$lambda_0($$changed) {
    return function ($composer, $force) {
      Experiences($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Experiences_kt_tmngex;
  function _init_properties_Experiences_kt__nx7bhl() {
    if (!properties_initialized_Experiences_kt_tmngex) {
      properties_initialized_Experiences_kt_tmngex = true;
      experienceCards = listOf([new ExperienceData('Tech Mahindra', 'Working as Tech Lead for the client Keysight', '14-May-2024 to Present', 'Tech Lead', '', listOf(['Log back stack tracking, Debugging,', 'Android Native, JNI code implementation.', 'Performance and Memory handling.', 'NR & LTE network communications and monitoring.', 'Agile Methodologies and Team Leadership.', 'Code architecture, Mentoring and Code Reviews.', 'Task Planning and Execution and Client Communication.', 'Technologies: Kotlin, Java, C/C++, Android, JNI, Git, JIRA, Confluence', 'Environment: Linux, Windows', 'Domain: Telecom (5G, LTE, NR)', 'Google Drive Upload & Avoid Duplicate Folder Creation', 'File Handling, Multithreading, Retrofit, REST API', 'Google Play Service NearBy Discovery connectivity and file transferring', 'Bluetooth connectivity and file transferring', 'Understanding and accumulating requirements, Making Flow Diagram, Providing Task breakup and estimation, distributing tasks']), '\uD83D\uDCF1', Colors_getInstance().get_LightBlue_i1kdo9_k$()), new ExperienceData('NINESTARS INFORMATION TECHNOLOGIES PVT LTD', 'Worked on News, E-Commerce, Media Apps with top rated clients TheHindu, Deccan Herald, TV9', '26-Aug-2015 to 13-May-2024', 'Lead Android Developer', '', listOf(['Responsible for code architecture, correct coding practices, Code Reviewing.', 'Responsible for feature delivery on Mobile. Prepare task scoping and breakdown from product stories to\nensure code quality and reusability.', 'Performance and Memory handling.', 'I have mostly been involved in development and working with the development team.', 'Designed and Implemented Server driven template based custom UIs.', 'Code architecture, Mentoring and Code Reviews.', 'Worked on Database, Scheduled syncing.', 'Worked on GraphQL APIs implementation.', 'Handling and Managing Team.', 'Client interaction and handling.', 'Understanding and accumulating requirements, Making Flow Diagram, Providing Task breakup and\nestimation, distributing tasks', 'Take ownership of end-to-end product quality, from developing to maintaining core app frameworks that\nhelp make the apps more reliable and delightful.', 'Understanding and accumulating requirements, Making Flow Diagram, Providing Task breakup and estimation, distributing tasks']), '\uD83D\uDCF1', Colors_getInstance().get_LightBlue_i1kdo9_k$()), new ExperienceData('GLOBAL LOGIC INDIA LTD ', 'Worked on JIO core App (Reliance)', '14-Mar-2014 to 22-Aug-2015', 'Senior software developer', '', listOf(['Android App Programmer', 'Screen UI design and flow implementation', 'Worked on custom UIs & designs', 'Database and APIs Integration', 'Background Jobs, Alarm Manager, Background data syncing Implementation', 'Designed and Implemented Server driven template based custom UIs.', 'Worked on MVM Design Pattern using RxJava']), '\uD83D\uDCF1', Colors_getInstance().get_LightBlue_i1kdo9_k$()), new ExperienceData('A1 Technologies PVT LTD ', 'Worked on JIO core App (Reliance)', 'Dec-2011 to Feb-2014', 'Software Engineer', '', listOf(['Creating layouts and designs', 'Database and API integration', 'Multi listview with Loader data provider', 'Implemented Content Providers', 'Worked on Services and Global & Local BroadcastReceivers to load data in background\nand update on UIs.', 'Social Login Implementation']), '\uD83D\uDCF1', Colors_getInstance().get_LightBlue_i1kdo9_k$()), new ExperienceData('RED ORANGE TECHNOLOGIES', 'Worked on JIO core App (Reliance)', 'May-2011 to Dec-2011', 'Junior Software engineer', '', listOf(['Understood Android Mobile app lifecycle', 'Performed REST API requests for uploading, downloading files', 'Layout & UI Creation', 'Creating layouts and designs', 'Database and API integration', 'Third party libs integration']), '\uD83D\uDCF1', Colors_getInstance().get_LightBlue_i1kdo9_k$()), new ExperienceData('LIMITEX TECHNOLOGIES', 'Worked on JIO core App (Reliance)', 'Sep-2010 to May-2011', 'Trainee/Junior Software developer', '', listOf(['Learnt Html, CSS, and Eclipse IDE', 'Created basic html templates', 'Moved to Trainee Android Development', 'Learning Android, creating layouts and designs']), '\uD83D\uDCF1', Colors_getInstance().get_LightBlue_i1kdo9_k$())]);
    }
  }
  function get_HeroContainerStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HeroContainerStyle;
  }
  var HeroContainerStyle;
  function get_HomeGridStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HomeGridStyle;
  }
  var HomeGridStyle;
  function get_GridCellColorVar() {
    _init_properties_Index_kt__ifxcv4();
    var tmp = KProperty0;
    return GridCellColorVar$delegate.getValue_fbnwi2_k$(null, getPropertyCallableRef('GridCellColorVar', 0, tmp, _get_GridCellColorVar_$ref_qi4r2q(), null));
  }
  var GridCellColorVar$delegate;
  function get_HomeGridCellStyle() {
    _init_properties_Index_kt__ifxcv4();
    return HomeGridCellStyle;
  }
  var HomeGridCellStyle;
  function initHomePage(ctx) {
    _init_properties_Index_kt__ifxcv4();
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Ashwani Kumar');
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function HomePage(ctx, $composer, $changed) {
    _init_properties_Index_kt__ifxcv4();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1345081080);
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 1) === 0), $changed & 1)) {
      Banner($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda(ctx, $changed));
    }
  }
  function HeroContainerStyle$lambda($this$CssStyle) {
    _init_properties_Index_kt__ifxcv4();
    $this$CssStyle.base_y8uu8g_k$(HeroContainerStyle$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, HeroContainerStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function HeroContainerStyle$lambda$lambda() {
    _init_properties_Index_kt__ifxcv4();
    return gap(fillMaxWidth(Companion_getInstance_3()), get_cssRem(2));
  }
  function HeroContainerStyle$lambda$lambda_0() {
    _init_properties_Index_kt__ifxcv4();
    var tmp = Companion_getInstance_3();
    return margin_3(tmp, HeroContainerStyle$lambda$lambda$lambda);
  }
  function HeroContainerStyle$lambda$lambda$lambda($this$margin) {
    _init_properties_Index_kt__ifxcv4();
    $this$margin.top_1wurxj_k$(get_vh(20));
    return Unit_getInstance();
  }
  function HomeGridStyle$lambda($this$base) {
    _init_properties_Index_kt__ifxcv4();
    return height(width(gap(Companion_getInstance_3(), get_cssRem(0.5)), get_cssRem(70)), get_cssRem(18));
  }
  function _get_GridCellColorVar_$ref_qi4r2q() {
    return function () {
      return get_GridCellColorVar();
    };
  }
  function HomeGridCellStyle$lambda($this$base) {
    _init_properties_Index_kt__ifxcv4();
    return borderRadius(boxShadow(backgroundColor(Companion_getInstance_3(), get_GridCellColorVar().value$default_36t2hw_k$()), VOID, VOID, get_cssRem(0.6), VOID, get_GridCellColorVar().value$default_36t2hw_k$()), get_cssRem(1));
  }
  function HomePage$lambda($ctx, $$changed) {
    return function ($composer, $force) {
      HomePage($ctx, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Index_kt_nnboou;
  function _init_properties_Index_kt__ifxcv4() {
    if (!properties_initialized_Index_kt_nnboou) {
      properties_initialized_Index_kt_nnboou = true;
      HeroContainerStyle = CssStyle(VOID, HeroContainerStyle$lambda);
      var tmp = Companion_getInstance_7();
      HomeGridStyle = base(tmp, VOID, HomeGridStyle$lambda);
      GridCellColorVar$delegate = StyleVariable();
      var tmp_0 = Companion_getInstance_7();
      HomeGridCellStyle = base(tmp_0, VOID, HomeGridCellStyle$lambda);
    }
  }
  function get_projectCards() {
    _init_properties_Projects_kt__a1sihm();
    return projectCards;
  }
  var projectCards;
  function initMyProjectsPage(ctx) {
    _init_properties_Projects_kt__a1sihm();
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Ashwani Projects');
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function Projects($composer, $changed) {
    _init_properties_Projects_kt__a1sihm();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1543463026);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var tmp = padding(backgroundColor(fillMaxWidth(Companion_getInstance_3()), sitePal.get_nearBackground_c1s3l_k$()), get_px(32));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(371926216, true, Projects$lambda(sitePal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_127(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp, null, null, tmp0_1, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Projects$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_125(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ProjectsKt$lambda$_1557067630$lambda_2zashr($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_projectCards().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      ProjectCardView(element, $composer_0, 0);
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ProjectsKt() {
    ComposableSingletons$ProjectsKt_instance = this;
    var tmp = this;
    tmp.lambda$_1557067630_vucguw_1 = ComposableLambda$invoke$ref_125(composableLambdaInstance(-1557067630, false, ComposableSingletons$ProjectsKt$lambda$_1557067630$lambda_2zashr));
  }
  protoOf(ComposableSingletons$ProjectsKt).get_lambda$_1557067630_levqyd_k$ = function () {
    return this.lambda$_1557067630_vucguw_1;
  };
  var ComposableSingletons$ProjectsKt_instance;
  function ComposableSingletons$ProjectsKt_getInstance() {
    if (ComposableSingletons$ProjectsKt_instance == null)
      new ComposableSingletons$ProjectsKt();
    return ComposableSingletons$ProjectsKt_instance;
  }
  function Projects$lambda$lambda$lambda($this$gridTemplateColumns) {
    _init_properties_Projects_kt__a1sihm();
    $this$gridTemplateColumns.repeat_n9ti1_k$(2, Projects$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function Projects$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_Projects_kt__a1sihm();
    $this$repeat.minmax_1ha38s_k$(get_px(300), get_fr(1));
    return Unit_getInstance();
  }
  function Projects$lambda$lambda($sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = color(toModifier(get_pageTitleStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $sitePal.get_pageTitleColor_weujh9_k$());
        SpanText('My Projects', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1 = fillMaxWidth(Companion_getInstance_3());
        // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
        Companion_getInstance_13();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = display(tmp_1, 'grid');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = Projects$lambda$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        Div(toAttrs_0(gap(gridTemplateColumns(tmp_2, tmp$ret$7), get_px(32))), ComposableSingletons$ProjectsKt_getInstance().lambda$_1557067630_vucguw_1, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_126(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Projects$lambda($sitePal) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-208744207, true, Projects$lambda$lambda($sitePal), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_126(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(null, null, tmp_0, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 11);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_127(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Projects$lambda_0($$changed) {
    return function ($composer, $force) {
      Projects($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Projects_kt_9v25mk;
  function _init_properties_Projects_kt__a1sihm() {
    if (!properties_initialized_Projects_kt_9v25mk) {
      properties_initialized_Projects_kt_9v25mk = true;
      projectCards = listOf([new ProjectData('Nemo Handy \u2013 Wireless Network Measurement Tool', 'Android app for wireless diagnostics, QoS/QoE, and network performance. Features Bluetooth & GooglePlayService NearBy, 5G/LTE/VoLTE/IoT testing, dashboards, device compatibility, instant reporting, and cloud uploads.', '2024 - Present', 'Tech Lead / Android Architect', listOf(['Android', 'Kotlin', 'JNI', 'Bluetooth', 'Google Play Service NearBy', 'REST API', 'Cloud Integration']), '\uD83D\uDCF1', Colors_getInstance().get_LightBlue_i1kdo9_k$()), new ProjectData('Kobweb-Blog \u2013 Full-Stack Technical Blogging Platform', 'Kotlin Multiplatform blogging platform using Kobweb, Compose for Web, Ktor, and MongoDB. Features category, search, auth, REST APIs, and dynamic content.', '2023 - 2024', 'Full Stack Developer', listOf(['Kotlin Multiplatform', 'Kobweb', 'Compose for Web', 'Ktor', 'MongoDB']), '\uD83C\uDF10', Colors_getInstance().get_LightGreen_8z7512_k$()), new ProjectData('Portfolio Website \u2013 Personal Branding Site', 'Responsive portfolio site with contact form, built and deployed using Kobweb and Compose for Web.', '2023 - Present', 'Web Developer', listOf(['Kotlin Multiplatform', 'Kobweb', 'Compose for Web', 'Ktor', 'MongoDB']), '\uD83D\uDCBC', Colors_getInstance().get_LightYellow_2ihllt_k$()), new ProjectData('THE HINDU: LIVE NEWS UPDATES & BUSINESS LINE', 'Android news apps for The Hindu and Business Line. Features: customizable news feed, offline reading, multimedia, dynamic UIs, analytics, ads, and more.', '2015 - 2024', 'Lead Android Developer', listOf(['Android', 'Kotlin', 'Java', 'Dynamic UI', 'DFP Ads', 'Analytics', 'REST API']), '\uD83D\uDCF0', Colors_getInstance().get_LightCyan_i1jhio_k$()), new ProjectData('KMP Project: Shopify Mobile Apps POC', 'Kotlin Multiplatform POC for Shopify apps. Used Voyager Navigator, Koin, Ktor, Clean Arch, MVI, Material-3, Compose UI, GraphQL, and Shopify APIs.', '2023 - 2024', 'KMP Developer', listOf(['Kotlin Multiplatform', 'Compose UI', 'Koin', 'Ktor', 'GraphQL', 'Shopify API']), '\uD83D\uDED2', Colors_getInstance().get_LightPink_i1bi8t_k$()), new ProjectData('Additional Projects', 'Contributed to 10+ Android, Kotlin Multiplatform, and internal tooling projects.', '2010 - Present', 'Developer / Tech Lead', listOf(['Android', 'Kotlin', 'KMP', 'Internal Tools']), '\u2728', Colors_getInstance().get_WhiteSmoke_gvtxtb_k$())]);
    }
  }
  function get_skillCards() {
    _init_properties_Skills_kt__ipxf36();
    return skillCards;
  }
  var skillCards;
  function initSkillPage(ctx) {
    _init_properties_Skills_kt__ipxf36();
    var tmp0 = ctx.get_data_wokkxf_k$();
    // Inline function 'com.varabyte.kobweb.core.data.add' call
    var value = new PageLayoutData('Manoj Skills');
    tmp0.set_wb2scb_k$(getKClass(PageLayoutData), value);
  }
  function SkillPage($composer, $changed) {
    _init_properties_Skills_kt__ipxf36();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-212283920);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var tmp = padding(backgroundColor(fillMaxWidth(Companion_getInstance_3()), sitePal.get_nearBackground_c1s3l_k$()), get_px(32));
      var tmp_0 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(385028327, true, SkillPage$lambda(sitePal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_129(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Column(tmp, null, tmp_0, null, tmp0_1, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(SkillPage$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_128(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$SkillsKt$lambda$446195558$lambda($this$Div, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_skillCards().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      SkillCardView(element.get_title_iz32un_k$(), element.get_skills_jilyrv_k$(), element.get_icon_wont8i_k$(), element.get_color_ipu8u2_k$(), $composer_0, 0, 0);
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$SkillsKt() {
    ComposableSingletons$SkillsKt_instance = this;
    var tmp = this;
    tmp.lambda$446195558__1 = ComposableLambda$invoke$ref_128(composableLambdaInstance(446195558, false, ComposableSingletons$SkillsKt$lambda$446195558$lambda));
  }
  protoOf(ComposableSingletons$SkillsKt).get_lambda$446195558_raag53_k$ = function () {
    return this.lambda$446195558__1;
  };
  var ComposableSingletons$SkillsKt_instance;
  function ComposableSingletons$SkillsKt_getInstance() {
    if (ComposableSingletons$SkillsKt_instance == null)
      new ComposableSingletons$SkillsKt();
    return ComposableSingletons$SkillsKt_instance;
  }
  function SkillPage$lambda$lambda($this$gridTemplateColumns) {
    _init_properties_Skills_kt__ipxf36();
    $this$gridTemplateColumns.repeat_n9ti1_k$(4, SkillPage$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function SkillPage$lambda$lambda$lambda($this$repeat) {
    _init_properties_Skills_kt__ipxf36();
    $this$repeat.minmax_1ha38s_k$(get_px(250), get_fr(1));
    return Unit_getInstance();
  }
  function SkillPage$lambda($sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = color(toModifier(get_pageTitleStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), $sitePal.get_pageTitleColor_weujh9_k$());
        SpanText('My Skills', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1 = fillMaxWidth(Companion_getInstance_3());
        // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
        Companion_getInstance_13();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = display(tmp_1, 'grid');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = SkillPage$lambda$lambda;
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        Div(toAttrs_0(gap(gridTemplateColumns(tmp_2, tmp$ret$7), get_px(32))), ComposableSingletons$SkillsKt_getInstance().lambda$446195558__1, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_129(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function SkillPage$lambda_0($$changed) {
    return function ($composer, $force) {
      SkillPage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Skills_kt_1xpo1w;
  function _init_properties_Skills_kt__ipxf36() {
    if (!properties_initialized_Skills_kt_1xpo1w) {
      properties_initialized_Skills_kt_1xpo1w = true;
      skillCards = listOf([new SkillData('Kotlin Multiplatform & Android', listOf(['Kotlin Multiplatform (Android, iOS, Web)', 'Android native apps using Kotlin, Java, Jetpack Compose', 'Compose Multiplatform UI for Web/Desktop', 'Material Design 3, Navigation, Room, DataStore', 'Kobweb framework for full-stack Kotlin web']), '\uD83D\uDCF1', Colors_getInstance().get_LightBlue_i1kdo9_k$()), new SkillData('Architecture & Patterns', listOf(['Clean Architecture & SOLID principles', 'MVVM / MVI / Unidirectional data flow', 'Coroutines, Flow, and structured concurrency', 'Scalable multi-module architecture', 'Design Patterns: Repository, Factory, Singleton, Observer, Builder, Strategy, Adapter, Delegate, Mediator']), '\uD83C\uDFD7\uFE0F', Colors_getInstance().get_LightGoldenRodYellow_yxbqf9_k$()), new SkillData('Libraries & Integrations', listOf(['Dependency Injection (Hilt, Koin, Dagger)', 'Networking with Ktor, Retrofit, GraphQL, WebSocket', 'Firebase suite: Auth, Firestore, Messaging, Crashlytics', 'Google Ads SDK, Analytics & Payment SDK integrations', 'Compose UI tooling, Accompanist, and Coil/Glide']), '\uD83D\uDCE6', Colors_getInstance().get_LightGreen_8z7512_k$()), new SkillData('Kobweb Framework', listOf(['Building responsive web apps entirely in Kotlin using Kobweb', 'Proficient with Compose HTML, Silk styling, and route-based navigation', 'Creating interactive UI layouts with reusable composables & custom themes', 'Integrating APIs, Firebase, and REST endpoints into Kobweb sites', 'Deploying Kobweb projects via Gradle & GitHub Pages', 'Optimizing SEO, routing, and SSR for Kotlin web apps']), '\uD83C\uDF10', Colors_getInstance().get_LightSkyBlue_74jx4i_k$()), new SkillData('Backend & Integration', listOf(['GoLang (Gin) microservices & REST APIs', 'GraphQL endpoints & WebSocket streaming', 'Firebase Functions for server-side logic', 'App integration with secure auth & data handling', 'Realtime data sync, caching & serialization']), '\u2601\uFE0F', Colors_getInstance().get_Lavender_hd40j4_k$()), new SkillData('Debugging & Performance', listOf(['Advanced debugging & log tracing', 'Memory, CPU & network profiling', 'Startup & frame rendering optimization', 'Custom ADB scripts & benchmarking tools', 'Crash & ANR analysis with Firebase & Play Console']), '\uD83D\uDD0D', Colors_getInstance().get_MistyRose_83ke2m_k$()), new SkillData('Testing & Release', listOf(['Manual & functional testing for Android modules', 'Basic test cases (JUnit, Mockito, Espresso)', 'Flow & LiveData reactive stream testing', 'Automated builds using GitHub Actions or Jenkins', 'Static analysis (Ktlint, Detekt, SonarQube)']), '\u2705', Colors_getInstance().get_AliceBlue_26ti33_k$()), new SkillData('Security & Optimization', listOf(['App signing, keystore & Play Integrity setup', 'Secure API handling with encryption & tokens', 'ProGuard/R8 optimization & code obfuscation', 'Data privacy (GDPR) & permission audits']), '\uD83D\uDD10', Colors_getInstance().get_PaleGoldenRod_ekls2d_k$()), new SkillData('Release Management', listOf(['Gradle automation & variant configuration', 'App versioning, staging & internal testing setup', 'Play Console management & rollout strategy', 'Crash monitoring & performance feedback loop']), '\u2699\uFE0F', Colors_getInstance().get_Wheat_ij43a6_k$()), new SkillData('UI/UX & Design Collaboration', listOf(['Composable UI design with accessibility support', 'Wireframing in Miro, Figma & design handoff', 'Responsive layouts & adaptive theming', 'Motion, animation & material transitions']), '\uD83C\uDFA8', Colors_getInstance().get_MistyRose_83ke2m_k$()), new SkillData('Project Leadership & Collaboration', listOf(['Leading Android & cross-platform teams', 'Agile/Scrum delivery & sprint planning', 'Code reviews, mentoring & pair programming', 'Documentation & architecture diagrams (Miro, Draw.io)']), '\uD83D\uDC65', Colors_getInstance().get_HoneyDew_wqvfes_k$()), new SkillData('AI, Prompting & Agents', listOf(['Prompt Engineering \u2014 structured prompt design & chaining', 'Understanding Agentic AI concepts & reasoning flow', 'Building AI Agents in Kotlin using APIs & logic orchestration', 'Integrating AI workflows for app intelligence & automation']), '\uD83E\uDD16', Colors_getInstance().get_PaleTurquoise_6api32_k$()), new SkillData('Documentation & Communication', listOf(['Technical documentation (API specs, design guides)', 'Markdown, README & codebase documentation', 'Presentation & stakeholder communication', 'Knowledge sharing through tech sessions']), '\uD83D\uDCDD', Colors_getInstance().get_Linen_id36i9_k$())]);
    }
  }
  function BSHeader(ctx, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(219933275);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(ctx) : $composer_0.changedInstance_s1wkiy_k$(ctx)) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(Home_getInstance().get_id_kntnx8_k$());
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var selectedTabId = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      var tmp_1 = fillMaxWidth(Companion_getInstance_3());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Fixed' call
      Companion_getInstance_15();
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = zIndex(top(position(tmp_1, 'fixed'), get_percent(0)), 10);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1203322977, true, BSHeader$lambda(sitePal, ctx, selectedTabId), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_131(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp_2, null, null, tmp0_1, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(BSHeader$lambda_0(ctx, $changed));
    }
  }
  function downloadResume() {
    var fileName = 'Manoj TechLead & KMP Developer.pdf';
    var tmp = encodeURIComponent(fileName);
    var encoded = (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
    var href = '/resume/' + encoded;
    var tmp_0 = document.createElement('a');
    var a = tmp_0 instanceof HTMLAnchorElement ? tmp_0 : THROW_CCE();
    a.href = href;
    a.setAttribute('download', fileName);
    a.style.display = 'none';
    var tmp0_safe_receiver = document.body;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.appendChild(a);
    a.click();
    a.remove();
  }
  function ComposableLambda$invoke$ref_130(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$BSNavHeaderKt$lambda$_1291315100$lambda_k2ma8t($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      ThemeToggle(true, $composer_0, 6, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$BSNavHeaderKt() {
    ComposableSingletons$BSNavHeaderKt_instance = this;
    var tmp = this;
    tmp.lambda$_1291315100_80x4n7__1 = ComposableLambda$invoke$ref_130(composableLambdaInstance(-1291315100, false, ComposableSingletons$BSNavHeaderKt$lambda$_1291315100$lambda_k2ma8t));
  }
  protoOf(ComposableSingletons$BSNavHeaderKt).get_lambda$_1291315100_7k9xau_k$ = function () {
    return this.lambda$_1291315100_80x4n7__1;
  };
  var ComposableSingletons$BSNavHeaderKt_instance;
  function ComposableSingletons$BSNavHeaderKt_getInstance() {
    if (ComposableSingletons$BSNavHeaderKt_instance == null)
      new ComposableSingletons$BSNavHeaderKt();
    return ComposableSingletons$BSNavHeaderKt_instance;
  }
  function BSHeader$lambda$lambda($selectedTabId) {
    return function (tabId) {
      $selectedTabId.set_value_v1vabv_k$(tabId);
      return Unit_getInstance();
    };
  }
  function BSHeader$lambda$lambda_0() {
    downloadResume();
    return Unit_getInstance();
  }
  function BSHeader$lambda($sitePal, $ctx, $selectedTabId) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp0_modifier = color(padding_1(fillMaxWidth(Companion_getInstance_3()), VOID, get_px(10)), $sitePal.get_nearBackground_c1s3l_k$());
        var tmp1_itemsAlignment = CenterHorizontally_getInstance();
        var tmp2_expand = NavBarExpand_LG_getInstance();
        var tmp3_backgroundStyle = BackgroundStyle_Dark_getInstance();
        var tmp_0 = $selectedTabId.get_value_j01efc_k$();
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = BSHeader$lambda$lambda($selectedTabId);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp$ret$3 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        var tmp4_items = NavTabDataList($ctx, tmp_0, tmp$ret$3);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = BSHeader$lambda$lambda_0;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp$ret$7 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        var tmp5_button = new NavBarButton(VOID, 'Download Resume', VOID, VOID, VOID, VOID, VOID, tmp$ret$7);
        BSNavBar(tmp0_modifier, true, null, tmp4_items, tmp1_itemsAlignment, null, tmp5_button, null, tmp2_expand, null, tmp3_backgroundStyle, $composer_0, 100663344 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 12 | com_stevdza_san_kotlinbs_models_navbar_NavBarButton$stableprop_getter() << 18, 6, 676);
        var tmp6_$receiver = fillMaxWidth(Companion_getInstance_3());
        var tmp7_right = get_px(12);
        var tmp8_top = get_px(-36);
        var tmp_5 = padding_1(tmp6_$receiver, tmp8_top, tmp7_right);
        var tmp_6 = End_getInstance();
        Row(tmp_5, tmp_6, null, null, ComposableSingletons$BSNavHeaderKt_getInstance().lambda$_1291315100_80x4n7__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_End$stableprop_getter() << 3, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_131(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BSHeader$lambda_0($ctx, $$changed) {
    return function ($composer, $force) {
      BSHeader($ctx, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Banner($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1031862030);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var textColor = current.equals(ColorMode_DARK_getInstance()) ? Colors_getInstance().get_White_ij46ow_k$() : Colors_getInstance().get_Black_i7mvue_k$();
      var animatedText = rememberAnimatedText(listOf(['iOS Tech Lead', 'Mobile Fullstack Developer', 'KMP Developer', 'Kobweb Developer']), 2000, $composer_0, 54);
      var tmp = numColumns(1, VOID, 2);
      var tmp_0 = id(toModifier(get_bannerStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter()), 'home');
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(1574863387, true, Banner$lambda(animatedText), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_133(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      SimpleGrid(tmp, tmp_0, null, null, tmp0_1, $composer_0, 24576 | com_varabyte_kobweb_silk_style_breakpoint_ResponsiveValues$stableprop_getter(), 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Banner$lambda_0($changed));
    }
  }
  function BannerText(text, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1758133686);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp = padding_2(fillMaxWidth(Companion_getInstance_3()), get_px(0), get_px(50));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-224184339, true, BannerText$lambda(text), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_135(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(BannerText$lambda_0(text, $changed));
    }
  }
  function ComposableLambda$invoke$ref_132(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$BannerKt$lambda$_551934453$lambda_m4w632($this$P, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = toModifier(get_GradientTagLineStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
    SpanText('A self-taught software developer and Tech Lead with a strong passion for modern technology.\n            Skilled in leading teams, collaborating with clients, and delivering high-quality, impactful digital solutions that drive business success.', tmp, null, null, $composer_0, 6, 12);
    return Unit_getInstance();
  }
  function ComposableSingletons$BannerKt() {
    ComposableSingletons$BannerKt_instance = this;
    var tmp = this;
    tmp.lambda$_551934453_6p9zev_1 = ComposableLambda$invoke$ref_132(composableLambdaInstance(-551934453, false, ComposableSingletons$BannerKt$lambda$_551934453$lambda_m4w632));
  }
  protoOf(ComposableSingletons$BannerKt).get_lambda$_551934453_v9yfxi_k$ = function () {
    return this.lambda$_551934453_6p9zev_1;
  };
  var ComposableSingletons$BannerKt_instance;
  function ComposableSingletons$BannerKt_getInstance() {
    if (ComposableSingletons$BannerKt_instance == null)
      new ComposableSingletons$BannerKt();
    return ComposableSingletons$BannerKt_instance;
  }
  function Banner$lambda($animatedText) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        BannerText($animatedText.get_value_j01efc_k$(), $composer_0, 0);
        var tmp_0 = padding(width(Companion_getInstance_3(), get_percent(100)), atBreakpointMd(get_px(0), get_px(50), $composer_0, 0));
        // Inline function 'org.jetbrains.compose.web.css.keywords.auto' call
        // Inline function 'org.jetbrains.compose.web.css.CSSKeywordValue' call
        // Inline function 'org.jetbrains.compose.web.css.CSSStyleValue' call
        // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = height_0(tmp_0, 'auto');
        var tmp_2 = get_zoomIn();
        var tmp_3 = get_s(1);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Ease' call
        Companion_getInstance_16();
        // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_4 = 'ease';
        var tmp_5 = Companion_getInstance_17().of_h621qs_k$(1);
        var tmp_6 = toAnimation(tmp_2, tmp_3, tmp_4, null, tmp_5, null, null, null, $composer_0, com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter(), 116);
        var tmp0_$receiver = get_upDownAnim();
        var tmp1_duration = get_s(2);
        // Inline function 'org.jetbrains.compose.web.css.Companion.Alternate' call
        Companion_getInstance_18();
        // Inline function 'org.jetbrains.compose.web.css.AnimationDirection' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp2_direction = 'alternate';
        var tmp3_iterationCount = Companion_getInstance_17().get_Infinite_rvchkz_k$();
        var tmp_7 = animation(tmp_1, [tmp_6, toAnimation(tmp0_$receiver, tmp1_duration, null, null, tmp3_iterationCount, tmp2_direction, null, null, $composer_0, com_varabyte_kobweb_silk_style_animation_Keyframes$stableprop_getter(), 102)]);
        Image('/assets/header-img.svg', tmp_7, null, null, null, null, null, null, null, null, $composer_0, 6, 1020);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_133(p0) {
    return function (_this__u8e3s4, p0_0) {
      return p0.invoke_z8di7s_k$(_this__u8e3s4, p0_0);
    };
  }
  function Banner$lambda_0($$changed) {
    return function ($composer, $force) {
      Banner($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function BannerText$lambda$lambda($text) {
    return function ($this$H1, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = "Hi! I'm Manoj " + $text;
      var tmp_0 = Companion_getInstance_3();
      var tmp_1 = get_em(0.08);
      // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
      Companion_getInstance_9();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = color(borderRight(tmp_0, tmp_1, 'solid'), Colors_getInstance().get_White_ij46ow_k$());
      SpanText(tmp, tmp_2, null, null, $composer_0, 0, 12);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_134(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BannerText$lambda($text) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = toModifier(get_GradientTagLineStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter());
        SpanText('Welcome to my Portfolio', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1 = margin_0(lineHeight(letterSpacing(fontWeight_0(fontSize(Companion_getInstance_3(), atBreakpointMd(get_px(65), get_px(45), $composer_0, 0)), 700), get_px(0.8)), 1), VOID, VOID, get_px(20));
        // Inline function 'org.jetbrains.compose.web.css.Companion.Block' call
        Companion_getInstance_13();
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = toAttrs_0(display(tmp_1, 'block'));
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(781660874, true, BannerText$lambda$lambda($text), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_134(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        H1(tmp_2, tmp0, $composer_0, 48, 0);
        P(toAttrs_0(width(lineHeight_0(letterSpacing(fontSize(Companion_getInstance_3(), get_px(18)), get_px(0.8)), get_em(1.5)), get_percent(100))), ComposableSingletons$BannerKt_getInstance().lambda$_551934453_6p9zev_1, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_135(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function BannerText$lambda_0($text, $$changed) {
    return function ($composer, $force) {
      BannerText($text, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_REQUIRED_MSG() {
    return REQUIRED_MSG;
  }
  var REQUIRED_MSG;
  function Footer($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1272637036);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp0 = get_LocalAppColorMode();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC(<get-current>):CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.consume_ebzcrh_k$(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var current = tmp0_0.get_value_j01efc_k$();
      var sitePal = toSitePalette(current);
      var tmp = backgroundColor(fillMaxWidth(toModifier(get_SmoothColorStyle(), $composer_0, com_varabyte_kobweb_silk_style_CssStyle$stableprop_getter())), sitePal.get_nearBackground_c1s3l_k$());
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-675324789, true, Footer$lambda(sitePal), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_155(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Column(tmp, null, null, null, tmp0_1, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Footer$lambda_0($changed));
    }
  }
  function ContactUsInput($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1494271427);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var fullWidth = get_px(520);
      var gap = get_px(18);
      var halfWidth = get_px(250);
      var cardBg = rgb(20, 22, 28);
      var inputBg = rgb(30, 32, 40);
      var labelColor = Colors_getInstance().get_White_ij46ow_k$();
      var errorColor = rgb(255, 120, 120);
      var infoColor = rgb(140, 230, 160);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf('');
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var firstName$delegate = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = mutableStateOf('');
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var lastName$delegate = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = mutableStateOf('');
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var email$delegate = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_2 = mutableStateOf('');
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var subject$delegate = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_3 = this_4.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_3 = mutableStateOf('');
        this_4.updateRememberedValue_l1wh71_k$(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var message$delegate = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_4 = this_5.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (false || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_4 = mutableStateOf(null);
        this_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_9 = value_4;
      } else {
        tmp_9 = it_4;
      }
      var tmp_10 = tmp_9;
      var firstNameError$delegate = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_5 = this_6.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (false || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_5 = mutableStateOf(null);
        this_6.updateRememberedValue_l1wh71_k$(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var lastNameError$delegate = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_7 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_6 = this_7.rememberedValue_4dg93v_k$();
      var tmp_13;
      if (false || it_6 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_6 = mutableStateOf(null);
        this_7.updateRememberedValue_l1wh71_k$(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var emailError$delegate = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_8 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_7 = this_8.rememberedValue_4dg93v_k$();
      var tmp_15;
      if (false || it_7 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_7 = mutableStateOf(null);
        this_8.updateRememberedValue_l1wh71_k$(value_7);
        tmp_15 = value_7;
      } else {
        tmp_15 = it_7;
      }
      var tmp_16 = tmp_15;
      var subjectError$delegate = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_9 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_8 = this_9.rememberedValue_4dg93v_k$();
      var tmp_17;
      if (false || it_8 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_8 = mutableStateOf(null);
        this_9.updateRememberedValue_l1wh71_k$(value_8);
        tmp_17 = value_8;
      } else {
        tmp_17 = it_8;
      }
      var tmp_18 = tmp_17;
      var messageError$delegate = (tmp_18 == null ? true : !(tmp_18 == null)) ? tmp_18 : THROW_CCE();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_10 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_9 = this_10.rememberedValue_4dg93v_k$();
      var tmp_19;
      if (false || it_9 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_9 = mutableStateOf(null);
        this_10.updateRememberedValue_l1wh71_k$(value_9);
        tmp_19 = value_9;
      } else {
        tmp_19 = it_9;
      }
      var tmp_20 = tmp_19;
      var infoMessage$delegate = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      var tmp_21 = padding_0(fillMaxWidth(Companion_getInstance_3()), get_px(20), VOID, get_px(24));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1996829879, true, ContactUsInput$lambda_21(fullWidth, cardBg, gap, infoColor, halfWidth, inputBg, labelColor, errorColor, firstNameError$delegate, firstName$delegate, lastNameError$delegate, lastName$delegate, emailError$delegate, email$delegate, subjectError$delegate, subject$delegate, messageError$delegate, message$delegate, infoMessage$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_10 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_22;
      if (invalid || it_10 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_10 = ComposableLambda$invoke$ref_170(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_10);
        tmp_22 = value_10;
      } else {
        tmp_22 = it_10;
      }
      var tmp_23 = tmp_22;
      var tmp0 = (tmp_23 == null ? true : !(tmp_23 == null)) ? tmp_23 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Box(tmp_21, null, null, tmp0, $composer_0, 3072, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ContactUsInput$lambda_22($changed));
    }
  }
  function QuickInfos($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1926970423);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp = fillMaxWidth(Companion_getInstance_3());
      var tmp_0 = SpaceEvenly_getInstance();
      var tmp_1 = Top_getInstance();
      Row(tmp, tmp_0, tmp_1, null, ComposableSingletons$FooterKt_getInstance().lambda$_1830948166_wctjs_1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceEvenly$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Top$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(QuickInfos$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_136(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_104776120$lambda_c23c72($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = color(textAlign(padding_0(fontSize(fontWeight(fontStyle(fillMaxWidth(Companion_getInstance_3()), Companion_getInstance_19().get_Normal_22avww_k$()), Companion_getInstance_6().get_Bold_wnz5ke_k$()), get_px(22)), VOID, VOID, get_px(12)), Companion_getInstance_5().get_Center_3arb0i_k$()), Colors_getInstance().get_White_ij46ow_k$());
      SpanText('Contact Me', tmp, null, null, $composer_0, 6, 12);
      ContactUsInput($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_137(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$1687925009$lambda($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = fillMaxWidth(Companion_getInstance_3());
      Column(tmp, null, null, null, ComposableSingletons$FooterKt_getInstance().lambda$_104776120_bwdqda_1, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_138(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_1251958251$lambda_owcviz($this$H5, $composer, $changed) {
    var $composer_0 = $composer;
    Text('My Projects', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_139(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$1903403481$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = padding(Companion_getInstance_3(), get_px(5));
    SpanText('Nemo Handy Handheld Measurement Solution', tmp, null, null, $composer_0, 6, 12);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_140(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_59225520$lambda_jiz9yg($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = padding(Companion_getInstance_3(), get_px(5));
    SpanText('The Hindu: India & World News', tmp, null, null, $composer_0, 6, 12);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_141(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_1290518063$lambda_yzagvz($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = padding(Companion_getInstance_3(), get_px(5));
    SpanText('The Hindu BusinessLine', tmp, null, null, $composer_0, 6, 12);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_142(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$1761926251$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableSingletons$FooterKt$lambda$1761926251$lambda$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp$ret$3 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      A('https://www.keysight.com/in/en/product/NTH50047B/nemo-handy-handheld-measurement-solution.html', tmp$ret$3, ComposableSingletons$FooterKt_getInstance().lambda$1903403481__1, $composer_0, 438, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableSingletons$FooterKt$lambda$1761926251$lambda$lambda_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp$ret$7 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      A('https://play.google.com/store/apps/details?id=com.mobstac.thehindu&h&pli=1', tmp$ret$7, ComposableSingletons$FooterKt_getInstance().lambda$_59225520_aqsqxe_1, $composer_0, 438, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableSingletons$FooterKt$lambda$1761926251$lambda$lambda_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp$ret$11 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      A('https://play.google.com/store/apps/details?id=com.mobstac.thehindubusinessline', tmp$ret$11, ComposableSingletons$FooterKt_getInstance().lambda$_1290518063_5pc0fb_1, $composer_0, 438, 0);
      var tmp_5 = padding(Companion_getInstance_3(), get_px(5));
      SpanText('Shorts News', tmp_5, null, null, $composer_0, 6, 12);
      var tmp_6 = padding(Companion_getInstance_3(), get_px(5));
      SpanText('KMP Shopify: Shopify Mobile Apps POC', tmp_6, null, null, $composer_0, 6, 12);
      var tmp_7 = padding(Companion_getInstance_3(), get_px(5));
      SpanText('KMP Project : THE HINDU', tmp_7, null, null, $composer_0, 6, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt$lambda$1761926251$lambda$lambda($this$A) {
    target($this$A, Blank_getInstance());
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt$lambda$1761926251$lambda$lambda_0($this$A) {
    target($this$A, Blank_getInstance());
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt$lambda$1761926251$lambda$lambda_1($this$A) {
    target($this$A, Blank_getInstance());
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_143(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_1529271564$lambda_8wvpzs($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      H5(null, ComposableSingletons$FooterKt_getInstance().lambda$_1251958251_xbxv29__1, $composer_0, 48, 1);
      var tmp0_horizontalAlignment = Start_getInstance();
      var tmp1_verticalArrangement = Center_getInstance();
      var tmp2_modifier = padding(Companion_getInstance_3(), get_px(10));
      Column(tmp2_modifier, tmp1_verticalArrangement, tmp0_horizontalAlignment, null, ComposableSingletons$FooterKt_getInstance().lambda$1761926251__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_144(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_200033283$lambda_fity1v($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp0_horizontalAlignment = Start_getInstance();
      var tmp1_verticalArrangement = Center_getInstance();
      var tmp2_modifier = padding(Companion_getInstance_3(), get_px(10));
      Column(tmp2_modifier, tmp1_verticalArrangement, tmp0_horizontalAlignment, null, ComposableSingletons$FooterKt_getInstance().lambda$_1529271564_ob7732__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_145(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$719734412$lambda($this$H5, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Quick Links', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_146(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$509612971$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      H5(null, ComposableSingletons$FooterKt_getInstance().lambda$719734412__1, $composer_0, 48, 1);
      var tmp = textAlign(padding(Companion_getInstance_3(), get_px(5)), Companion_getInstance_5().get_Start_ih4i6x_k$());
      SpanText('Home', tmp, null, null, $composer_0, 6, 12);
      var tmp_0 = padding(Companion_getInstance_3(), get_px(5));
      SpanText('About Me', tmp_0, null, null, $composer_0, 6, 12);
      var tmp_1 = padding(Companion_getInstance_3(), get_px(5));
      SpanText('Skills', tmp_1, null, null, $composer_0, 6, 12);
      var tmp_2 = padding(Companion_getInstance_3(), get_px(5));
      SpanText('Experiences', tmp_2, null, null, $composer_0, 6, 12);
      var tmp_3 = padding(Companion_getInstance_3(), get_px(5));
      SpanText('Portfolio', tmp_3, null, null, $composer_0, 6, 12);
      var tmp_4 = padding(Companion_getInstance_3(), get_px(5));
      SpanText('Download CV', tmp_4, null, null, $composer_0, 6, 12);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_147(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_1992653196$lambda_z0k66n($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp0_horizontalAlignment = Start_getInstance();
      var tmp1_verticalArrangement = Center_getInstance();
      var tmp2_modifier = padding(Companion_getInstance_3(), get_px(10));
      Column(tmp2_modifier, tmp1_verticalArrangement, tmp0_horizontalAlignment, null, ComposableSingletons$FooterKt_getInstance().lambda$509612971__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_148(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_103947059$lambda_5id074($this$H5, $composer, $changed) {
    var $composer_0 = $composer;
    Text('Follow Me', $composer_0, 6);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_149(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_1725968678$lambda_5jwo85($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = padding(Companion_getInstance_3(), get_px(5));
    SpanText('GitHub', tmp, null, null, $composer_0, 6, 12);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_150(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_1881533679$lambda_fetabr($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = padding(Companion_getInstance_3(), get_px(5));
    SpanText('Linkedin', tmp, null, null, $composer_0, 6, 12);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_151(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$330882258$lambda($this$A, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp = padding(Companion_getInstance_3(), get_px(5));
    SpanText('Medium', tmp, null, null, $composer_0, 6, 12);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_152(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_314068500$lambda_vqxht9($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      H5(null, ComposableSingletons$FooterKt_getInstance().lambda$_103947059_1vk2is_1, $composer_0, 48, 1);
      var tmp = toAttrs_0(backgroundColor(height(fillMaxWidth(Companion_getInstance_3()), get_px(2)), Colors_getInstance().get_Blue_wnz3k3_k$()));
      Div(tmp, null, $composer_0, 0, 2);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableSingletons$FooterKt$lambda$_314068500$lambda$lambda_siv1mg;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp$ret$3 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      A('https://github.com/manojsingh2501', tmp$ret$3, ComposableSingletons$FooterKt_getInstance().lambda$_1725968678_2k3s8l_1, $composer_0, 438, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableSingletons$FooterKt$lambda$_314068500$lambda$lambda_siv1mg_0;
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp$ret$7 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      A('https://www.linkedin.com/in/ashwani-kumar-singh-45577042/', tmp$ret$7, ComposableSingletons$FooterKt_getInstance().lambda$_1881533679_dx4cnn_1, $composer_0, 438, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = ComposableSingletons$FooterKt$lambda$_314068500$lambda$lambda_siv1mg_1;
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_1;
      }
      var tmp_5 = tmp_4;
      var tmp$ret$11 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      A('https://medium.com/@ashwanisingh8713', tmp$ret$11, ComposableSingletons$FooterKt_getInstance().lambda$330882258__1, $composer_0, 438, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt$lambda$_314068500$lambda$lambda_siv1mg($this$A) {
    target($this$A, Blank_getInstance());
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt$lambda$_314068500$lambda$lambda_siv1mg_0($this$A) {
    target($this$A, Blank_getInstance());
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt$lambda$_314068500$lambda$lambda_siv1mg_1($this$A) {
    target($this$A, Blank_getInstance());
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_153(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$1478632629$lambda($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp0_horizontalAlignment = Start_getInstance();
      var tmp1_verticalArrangement = Center_getInstance();
      var tmp2_modifier = padding(Companion_getInstance_3(), get_px(10));
      Column(tmp2_modifier, tmp1_verticalArrangement, tmp0_horizontalAlignment, null, ComposableSingletons$FooterKt_getInstance().lambda$_314068500_me1mlz_1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_Center$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Start$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_154(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$FooterKt$lambda$_1830948166$lambda_mygxgu($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = padding(padding(fillMaxWidth(Companion_getInstance_3()), get_px(20)), get_px(20));
      var tmp_0 = SpaceEvenly_getInstance();
      var tmp_1 = Top_getInstance();
      Row(tmp, tmp_0, tmp_1, null, ComposableSingletons$FooterKt_getInstance().lambda$_200033283_91rsjl_1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceEvenly$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Top$stableprop_getter() << 6, 8);
      var tmp_2 = padding(padding(fillMaxWidth(Companion_getInstance_3()), get_px(20)), get_px(20));
      var tmp_3 = SpaceEvenly_getInstance();
      var tmp_4 = Top_getInstance();
      Row(tmp_2, tmp_3, tmp_4, null, ComposableSingletons$FooterKt_getInstance().lambda$_1992653196_s1672j_1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceEvenly$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Top$stableprop_getter() << 6, 8);
      var tmp_5 = padding(padding(fillMaxWidth(Companion_getInstance_3()), get_px(20)), get_px(20));
      var tmp_6 = SpaceEvenly_getInstance();
      var tmp_7 = Top_getInstance();
      Row(tmp_5, tmp_6, tmp_7, null, ComposableSingletons$FooterKt_getInstance().lambda$1478632629__1, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceEvenly$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_Top$stableprop_getter() << 6, 8);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$FooterKt() {
    ComposableSingletons$FooterKt_instance = this;
    var tmp = this;
    tmp.lambda$_104776120_bwdqda_1 = ComposableLambda$invoke$ref_136(composableLambdaInstance(-104776120, false, ComposableSingletons$FooterKt$lambda$_104776120$lambda_c23c72));
    var tmp_0 = this;
    tmp_0.lambda$1687925009__1 = ComposableLambda$invoke$ref_137(composableLambdaInstance(1687925009, false, ComposableSingletons$FooterKt$lambda$1687925009$lambda));
    var tmp_1 = this;
    tmp_1.lambda$_1251958251_xbxv29__1 = ComposableLambda$invoke$ref_138(composableLambdaInstance(-1251958251, false, ComposableSingletons$FooterKt$lambda$_1251958251$lambda_owcviz));
    var tmp_2 = this;
    tmp_2.lambda$1903403481__1 = ComposableLambda$invoke$ref_139(composableLambdaInstance(1903403481, false, ComposableSingletons$FooterKt$lambda$1903403481$lambda));
    var tmp_3 = this;
    tmp_3.lambda$_59225520_aqsqxe_1 = ComposableLambda$invoke$ref_140(composableLambdaInstance(-59225520, false, ComposableSingletons$FooterKt$lambda$_59225520$lambda_jiz9yg));
    var tmp_4 = this;
    tmp_4.lambda$_1290518063_5pc0fb_1 = ComposableLambda$invoke$ref_141(composableLambdaInstance(-1290518063, false, ComposableSingletons$FooterKt$lambda$_1290518063$lambda_yzagvz));
    var tmp_5 = this;
    tmp_5.lambda$1761926251__1 = ComposableLambda$invoke$ref_142(composableLambdaInstance(1761926251, false, ComposableSingletons$FooterKt$lambda$1761926251$lambda));
    var tmp_6 = this;
    tmp_6.lambda$_1529271564_ob7732__1 = ComposableLambda$invoke$ref_143(composableLambdaInstance(-1529271564, false, ComposableSingletons$FooterKt$lambda$_1529271564$lambda_8wvpzs));
    var tmp_7 = this;
    tmp_7.lambda$_200033283_91rsjl_1 = ComposableLambda$invoke$ref_144(composableLambdaInstance(-200033283, false, ComposableSingletons$FooterKt$lambda$_200033283$lambda_fity1v));
    var tmp_8 = this;
    tmp_8.lambda$719734412__1 = ComposableLambda$invoke$ref_145(composableLambdaInstance(719734412, false, ComposableSingletons$FooterKt$lambda$719734412$lambda));
    var tmp_9 = this;
    tmp_9.lambda$509612971__1 = ComposableLambda$invoke$ref_146(composableLambdaInstance(509612971, false, ComposableSingletons$FooterKt$lambda$509612971$lambda));
    var tmp_10 = this;
    tmp_10.lambda$_1992653196_s1672j_1 = ComposableLambda$invoke$ref_147(composableLambdaInstance(-1992653196, false, ComposableSingletons$FooterKt$lambda$_1992653196$lambda_z0k66n));
    var tmp_11 = this;
    tmp_11.lambda$_103947059_1vk2is_1 = ComposableLambda$invoke$ref_148(composableLambdaInstance(-103947059, false, ComposableSingletons$FooterKt$lambda$_103947059$lambda_5id074));
    var tmp_12 = this;
    tmp_12.lambda$_1725968678_2k3s8l_1 = ComposableLambda$invoke$ref_149(composableLambdaInstance(-1725968678, false, ComposableSingletons$FooterKt$lambda$_1725968678$lambda_5jwo85));
    var tmp_13 = this;
    tmp_13.lambda$_1881533679_dx4cnn_1 = ComposableLambda$invoke$ref_150(composableLambdaInstance(-1881533679, false, ComposableSingletons$FooterKt$lambda$_1881533679$lambda_fetabr));
    var tmp_14 = this;
    tmp_14.lambda$330882258__1 = ComposableLambda$invoke$ref_151(composableLambdaInstance(330882258, false, ComposableSingletons$FooterKt$lambda$330882258$lambda));
    var tmp_15 = this;
    tmp_15.lambda$_314068500_me1mlz_1 = ComposableLambda$invoke$ref_152(composableLambdaInstance(-314068500, false, ComposableSingletons$FooterKt$lambda$_314068500$lambda_vqxht9));
    var tmp_16 = this;
    tmp_16.lambda$1478632629__1 = ComposableLambda$invoke$ref_153(composableLambdaInstance(1478632629, false, ComposableSingletons$FooterKt$lambda$1478632629$lambda));
    var tmp_17 = this;
    tmp_17.lambda$_1830948166_wctjs_1 = ComposableLambda$invoke$ref_154(composableLambdaInstance(-1830948166, false, ComposableSingletons$FooterKt$lambda$_1830948166$lambda_mygxgu));
  }
  protoOf(ComposableSingletons$FooterKt).get_lambda$_104776120_jqjwqp_k$ = function () {
    return this.lambda$_104776120_bwdqda_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$1687925009_jcyfhd_k$ = function () {
    return this.lambda$1687925009__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_1251958251_1gudqq_k$ = function () {
    return this.lambda$_1251958251_xbxv29__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$1903403481_m5pfen_k$ = function () {
    return this.lambda$1903403481__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_59225520_pzek3f_k$ = function () {
    return this.lambda$_59225520_aqsqxe_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_1290518063_us4qms_k$ = function () {
    return this.lambda$_1290518063_5pc0fb_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$1761926251_vax3gw_k$ = function () {
    return this.lambda$1761926251__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_1529271564_artnkl_k$ = function () {
    return this.lambda$_1529271564_ob7732__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_200033283_qf89k0_k$ = function () {
    return this.lambda$_200033283_91rsjl_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$719734412_81rxn6_k$ = function () {
    return this.lambda$719734412__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$509612971_w56ys0_k$ = function () {
    return this.lambda$509612971__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_1992653196_696opu_k$ = function () {
    return this.lambda$_1992653196_s1672j_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_103947059_a1b7lp_k$ = function () {
    return this.lambda$_103947059_1vk2is_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_1725968678_6egmew_k$ = function () {
    return this.lambda$_1725968678_2k3s8l_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_1881533679_157uu2_k$ = function () {
    return this.lambda$_1881533679_dx4cnn_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$330882258_3379jd_k$ = function () {
    return this.lambda$330882258__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_314068500_m1jh3q_k$ = function () {
    return this.lambda$_314068500_me1mlz_1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$1478632629_e9kexi_k$ = function () {
    return this.lambda$1478632629__1;
  };
  protoOf(ComposableSingletons$FooterKt).get_lambda$_1830948166_f5w011_k$ = function () {
    return this.lambda$_1830948166_wctjs_1;
  };
  var ComposableSingletons$FooterKt_instance;
  function ComposableSingletons$FooterKt_getInstance() {
    if (ComposableSingletons$FooterKt_instance == null)
      new ComposableSingletons$FooterKt();
    return ComposableSingletons$FooterKt_instance;
  }
  function ContactUsInput$lambda($firstName$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('firstName', KMutableProperty0, true);
    return $firstName$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_0($firstName$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('firstName', KMutableProperty0, true);
    $firstName$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_1($lastName$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lastName', KMutableProperty0, true);
    return $lastName$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_2($lastName$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lastName', KMutableProperty0, true);
    $lastName$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_3($email$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('email', KMutableProperty0, true);
    return $email$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_4($email$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('email', KMutableProperty0, true);
    $email$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_5($subject$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('subject', KMutableProperty0, true);
    return $subject$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_6($subject$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('subject', KMutableProperty0, true);
    $subject$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_7($message$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('message', KMutableProperty0, true);
    return $message$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_8($message$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('message', KMutableProperty0, true);
    $message$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_9($firstNameError$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('firstNameError', KMutableProperty0, true);
    return $firstNameError$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_10($firstNameError$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('firstNameError', KMutableProperty0, true);
    $firstNameError$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_11($lastNameError$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('lastNameError', KMutableProperty0, true);
    return $lastNameError$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_12($lastNameError$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('lastNameError', KMutableProperty0, true);
    $lastNameError$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_13($emailError$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('emailError', KMutableProperty0, true);
    return $emailError$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_14($emailError$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('emailError', KMutableProperty0, true);
    $emailError$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_15($subjectError$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('subjectError', KMutableProperty0, true);
    return $subjectError$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_16($subjectError$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('subjectError', KMutableProperty0, true);
    $subjectError$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_17($messageError$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('messageError', KMutableProperty0, true);
    return $messageError$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_18($messageError$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('messageError', KMutableProperty0, true);
    $messageError$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$lambda_19($infoMessage$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('infoMessage', KMutableProperty0, true);
    return $infoMessage$delegate.get_value_j01efc_k$();
  }
  function ContactUsInput$lambda_20($infoMessage$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('infoMessage', KMutableProperty0, true);
    $infoMessage$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ContactUsInput$resetErrors(firstNameError$delegate, lastNameError$delegate, emailError$delegate, subjectError$delegate, messageError$delegate, infoMessage$delegate) {
    ContactUsInput$lambda_10(firstNameError$delegate, null);
    ContactUsInput$lambda_12(lastNameError$delegate, null);
    ContactUsInput$lambda_14(emailError$delegate, null);
    ContactUsInput$lambda_16(subjectError$delegate, null);
    ContactUsInput$lambda_18(messageError$delegate, null);
    ContactUsInput$lambda_20(infoMessage$delegate, null);
  }
  function ContactUsInput$isValidEmail(e) {
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$';
    var emailRegex = Regex_init_$Create$(this_0);
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(e)) {
      tmp = emailRegex.matches_evli6i_k$(e);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function ContactUsInput$validateAll(firstNameError$delegate, lastNameError$delegate, emailError$delegate, subjectError$delegate, messageError$delegate, infoMessage$delegate, firstName$delegate, lastName$delegate, email$delegate, subject$delegate, message$delegate) {
    ContactUsInput$resetErrors(firstNameError$delegate, lastNameError$delegate, emailError$delegate, subjectError$delegate, messageError$delegate, infoMessage$delegate);
    var ok = true;
    if (isBlank(ContactUsInput$lambda(firstName$delegate))) {
      ContactUsInput$lambda_10(firstNameError$delegate, 'Required');
      ok = false;
    }
    if (isBlank(ContactUsInput$lambda_1(lastName$delegate))) {
      ContactUsInput$lambda_12(lastNameError$delegate, 'Required');
      ok = false;
    }
    if (isBlank(ContactUsInput$lambda_3(email$delegate))) {
      ContactUsInput$lambda_14(emailError$delegate, 'Required');
      ok = false;
    } else if (!ContactUsInput$isValidEmail(ContactUsInput$lambda_3(email$delegate))) {
      ContactUsInput$lambda_14(emailError$delegate, 'Required');
      ok = false;
    }
    if (isBlank(ContactUsInput$lambda_5(subject$delegate))) {
      ContactUsInput$lambda_16(subjectError$delegate, 'Required');
      ok = false;
    }
    if (isBlank(ContactUsInput$lambda_7(message$delegate))) {
      ContactUsInput$lambda_18(messageError$delegate, 'Required');
      ok = false;
    }
    return ok;
  }
  function Footer$lambda($sitePal) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = padding_0(backgroundColor(fillMaxWidth(Companion_getInstance_3()), $sitePal.get_contactAreaBg_fqdah_k$()), get_px(28), VOID, get_px(28));
        Box(tmp_0, null, null, ComposableSingletons$FooterKt_getInstance().lambda$1687925009__1, $composer_0, 3072, 6);
        var tmp_1 = backgroundColor(height(fillMaxWidth(Companion_getInstance_3()), get_px(2)), Colors_getInstance().get_LightGray_i1h2r4_k$());
        Box(tmp_1, null, null, null, $composer_0, 0, 14);
        QuickInfos($composer_0, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_155(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function Footer$lambda_0($$changed) {
    return function ($composer, $force) {
      Footer($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda($fullWidth) {
    return function ($this$style) {
      width_0($this$style, $fullWidth);
      $this$style.property_wcrait_k$('border-radius', '14px');
      $this$style.property_wcrait_k$('box-shadow', '0 6px 18px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.03) inset');
      $this$style.property_wcrait_k$('overflow', 'hidden');
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda($fullWidth) {
    return function ($this$Div) {
      $this$Div.style_xwwy6r_k$(ContactUsInput$lambda$lambda$lambda$lambda($fullWidth));
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda$lambda($labelColor, $errorColor, $firstNameError$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = color(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), $labelColor);
        SpanText('First Name', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1;
        if (!(ContactUsInput$lambda_9($firstNameError$delegate) == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(1890831156);
          var tmp_2 = ensureNotNull(ContactUsInput$lambda_9($firstNameError$delegate));
          var tmp_3 = color(Companion_getInstance_3(), $errorColor);
          SpanText(tmp_2, tmp_3, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1520398929);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_156(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($firstName$delegate) {
    return function (it) {
      ContactUsInput$lambda_0($firstName$delegate, it);
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda($inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = padding_0(fillMaxWidth(Companion_getInstance_3()), VOID, VOID, get_px(6));
        var tmp_1 = SpaceBetween_getInstance();
        var tmp_2 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1043307187, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda$lambda($labelColor, $errorColor, $firstNameError$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_156(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp0_modifier = color(backgroundColor(fillMaxWidth(Companion_getInstance_3()), $inputBg), $labelColor);
        var tmp1_value = ContactUsInput$lambda($firstName$delegate);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($firstName$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp_7 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        BSInput(tmp0_modifier, null, '', 'First Name', null, null, false, false, false, false, false, null, tmp1_value, tmp_7, null, $composer_0, 3456, 3072, 20466);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_157(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($labelColor, $errorColor, $lastNameError$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = color(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), $labelColor);
        SpanText('Last Name', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1;
        if (!(ContactUsInput$lambda_11($lastNameError$delegate) == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(856149866);
          var tmp_2 = ensureNotNull(ContactUsInput$lambda_11($lastNameError$delegate));
          var tmp_3 = color(Companion_getInstance_3(), $errorColor);
          SpanText(tmp_2, tmp_3, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(763468536);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_158(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($lastName$delegate) {
    return function (it) {
      ContactUsInput$lambda_2($lastName$delegate, it);
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_0($inputBg, $labelColor, $errorColor, $lastNameError$delegate, $lastName$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = padding_0(fillMaxWidth(Companion_getInstance_3()), VOID, VOID, get_px(6));
        var tmp_1 = SpaceBetween_getInstance();
        var tmp_2 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-942124822, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($labelColor, $errorColor, $lastNameError$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_158(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp0_modifier = color(backgroundColor(fillMaxWidth(Companion_getInstance_3()), $inputBg), $labelColor);
        var tmp1_value = ContactUsInput$lambda_1($lastName$delegate);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2($lastName$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp_7 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        BSInput(tmp0_modifier, null, '', 'Last Name', null, null, false, false, false, false, false, null, tmp1_value, tmp_7, null, $composer_0, 3456, 3072, 20466);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_159(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda($halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = width(Companion_getInstance_3(), $halfWidth);
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-819449488, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda($inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_157(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, null, null, tmp0, $composer_0, 24576, 14);
        var tmp_3 = width(Companion_getInstance_3(), get_px(12));
        Box(tmp_3, null, null, null, $composer_0, 0, 14);
        var tmp_4 = width(Companion_getInstance_3(), $halfWidth);
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(-49927065, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_0($inputBg, $labelColor, $errorColor, $lastNameError$delegate, $lastName$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_159(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Column(tmp_4, null, null, null, tmp0_0, $composer_0, 24576, 14);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_160(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_1($labelColor, $errorColor, $emailError$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = color(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), $labelColor);
        SpanText('Email', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1;
        if (!(ContactUsInput$lambda_13($emailError$delegate) == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-2002345459);
          var tmp_2 = ensureNotNull(ContactUsInput$lambda_13($emailError$delegate));
          var tmp_3 = color(Companion_getInstance_3(), $errorColor);
          SpanText(tmp_2, tmp_3, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1951290478);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_161(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_2($email$delegate) {
    return function (it) {
      ContactUsInput$lambda_4($email$delegate, it);
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda_0($inputBg, $labelColor, $errorColor, $emailError$delegate, $email$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = padding_0(fillMaxWidth(Companion_getInstance_3()), VOID, VOID, get_px(6));
        var tmp_1 = SpaceBetween_getInstance();
        var tmp_2 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1803198928, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_1($labelColor, $errorColor, $emailError$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_161(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp0_modifier = color(backgroundColor(fillMaxWidth(Companion_getInstance_3()), $inputBg), $labelColor);
        var tmp1_value = ContactUsInput$lambda_3($email$delegate);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_2($email$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp_7 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        BSInput(tmp0_modifier, null, '', 'your@company.com', null, null, false, false, false, false, false, null, tmp1_value, tmp_7, null, $composer_0, 3456, 3072, 20466);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_162(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_3($labelColor, $errorColor, $subjectError$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = color(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), $labelColor);
        SpanText('Subject', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1;
        if (!(ContactUsInput$lambda_15($subjectError$delegate) == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-516534458);
          var tmp_2 = ensureNotNull(ContactUsInput$lambda_15($subjectError$delegate));
          var tmp_3 = color(Companion_getInstance_3(), $errorColor);
          SpanText(tmp_2, tmp_3, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(1158506939);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_163(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_4($subject$delegate) {
    return function (it) {
      ContactUsInput$lambda_6($subject$delegate, it);
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda_1($inputBg, $labelColor, $errorColor, $subjectError$delegate, $subject$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = padding_0(fillMaxWidth(Companion_getInstance_3()), VOID, VOID, get_px(6));
        var tmp_1 = SpaceBetween_getInstance();
        var tmp_2 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-206123865, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_3($labelColor, $errorColor, $subjectError$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_163(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp0_modifier = color(backgroundColor(fillMaxWidth(Companion_getInstance_3()), $inputBg), $labelColor);
        var tmp1_value = ContactUsInput$lambda_5($subject$delegate);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_4($subject$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp_6 = tmp_5;
        var tmp_7 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        BSInput(tmp0_modifier, null, '', 'Subject', null, null, false, false, false, false, false, null, tmp1_value, tmp_7, null, $composer_0, 3456, 3072, 20466);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_164(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_5($labelColor, $errorColor, $messageError$delegate) {
    return function ($this$Row, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = color(fontWeight(Companion_getInstance_3(), Companion_getInstance_6().get_Bold_wnz5ke_k$()), $labelColor);
        SpanText('Message', tmp_0, null, null, $composer_0, 6, 12);
        var tmp_1;
        if (!(ContactUsInput$lambda_17($messageError$delegate) == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(29858183);
          var tmp_2 = ensureNotNull(ContactUsInput$lambda_17($messageError$delegate));
          var tmp_3 = color(Companion_getInstance_3(), $errorColor);
          SpanText(tmp_2, tmp_3, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(916142010);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_1 = Unit_getInstance();
        }
        tmp = tmp_1;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_165(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_6($message$delegate) {
    return function (it) {
      ContactUsInput$lambda_8($message$delegate, it);
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda_2($inputBg, $labelColor, $errorColor, $messageError$delegate, $message$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = padding_0(fillMaxWidth(Companion_getInstance_3()), VOID, VOID, get_px(6));
        var tmp_1 = SpaceBetween_getInstance();
        var tmp_2 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-1662536920, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_5($labelColor, $errorColor, $messageError$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_165(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp_5 = padding_0(color(backgroundColor(height(fillMaxWidth(Companion_getInstance_3()), get_px(110)), $inputBg), $labelColor), VOID, VOID, get_px(8));
        var tmp_6 = ContactUsInput$lambda_7($message$delegate);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_7;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ContactUsInput$lambda$lambda$lambda$lambda$lambda$lambda_6($message$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_7 = value_0;
        } else {
          tmp_7 = it_0;
        }
        var tmp_8 = tmp_7;
        var tmp$ret$10 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
        BSTextArea(tmp_5, null, tmp_6, '', 'Write your message here', false, false, false, false, null, null, tmp$ret$10, $composer_0, 27648, 48, 2018);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_166(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda$lambda_3($firstNameError$delegate, $lastNameError$delegate, $emailError$delegate, $subjectError$delegate, $messageError$delegate, $infoMessage$delegate, $firstName$delegate, $lastName$delegate, $email$delegate, $subject$delegate, $message$delegate) {
    return function () {
      var tmp;
      if (!ContactUsInput$validateAll($firstNameError$delegate, $lastNameError$delegate, $emailError$delegate, $subjectError$delegate, $messageError$delegate, $infoMessage$delegate, $firstName$delegate, $lastName$delegate, $email$delegate, $subject$delegate, $message$delegate)) {
        return Unit_getInstance();
      }
      var recipient = 'Manoj@example.com';
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      this_0.append_22ad7x_k$('Name: ');
      this_0.append_22ad7x_k$(ContactUsInput$lambda($firstName$delegate));
      this_0.append_22ad7x_k$(' ');
      this_0.append_22ad7x_k$(ContactUsInput$lambda_1($lastName$delegate));
      this_0.append_22ad7x_k$('\n');
      this_0.append_22ad7x_k$('Email: ');
      this_0.append_22ad7x_k$(ContactUsInput$lambda_3($email$delegate));
      this_0.append_22ad7x_k$('\n\n');
      this_0.append_22ad7x_k$(ContactUsInput$lambda_7($message$delegate));
      var body = this_0.toString();
      // Inline function 'kotlin.js.asDynamic' call
      var encSubject = window.encodeURIComponent(ContactUsInput$lambda_5($subject$delegate));
      // Inline function 'kotlin.js.asDynamic' call
      var encBody = window.encodeURIComponent(body);
      var mailto = 'mailto:' + recipient + '?subject=' + encSubject + '&body=' + encBody;
      window.open(mailto);
      ContactUsInput$lambda_20($infoMessage$delegate, "Mail client opened \u2014 if it doesn't appear, check your browser settings or use a backend API to send mails.");
      return Unit_getInstance();
    };
  }
  function ContactUsInput$lambda$lambda$lambda$lambda_0($gap, $infoColor, $halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate, $emailError$delegate, $email$delegate, $subjectError$delegate, $subject$delegate, $messageError$delegate, $message$delegate, $infoMessage$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$Column) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        var tmp_1 = fillMaxWidth(Companion_getInstance_3());
        var tmp_2 = SpaceBetween_getInstance();
        var tmp_3 = CenterVertically_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-884966215, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda($halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_160(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_4 = value;
        } else {
          tmp_4 = it;
        }
        var tmp_5 = tmp_4;
        var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Row(tmp_1, tmp_2, tmp_3, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_foundation_layout_Arrangement_SpaceBetween$stableprop_getter() << 3 | com_varabyte_kobweb_compose_ui_Alignment_CenterVertically$stableprop_getter() << 6, 8);
        var tmp_6 = padding_0(Companion_getInstance_3(), $gap);
        Box(tmp_6, null, null, null, $composer_0, 0, 14);
        var tmp_7 = fillMaxWidth(Companion_getInstance_3());
        // Inline function 'kotlin.run' call
        var dispatchReceiver_0 = rememberComposableLambda(1054410669, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda_0($inputBg, $labelColor, $errorColor, $emailError$delegate, $email$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_2.changed_ga7h3f_k$(dispatchReceiver_0);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_2.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_162(dispatchReceiver_0);
          $composer_2.updateRememberedValue_l1wh71_k$(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp0_0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_2);
        Column(tmp_7, null, null, null, tmp0_0, $composer_0, 24576, 14);
        var tmp_10 = padding_0(Companion_getInstance_3(), $gap);
        Box(tmp_10, null, null, null, $composer_0, 0, 14);
        var tmp_11 = fillMaxWidth(Companion_getInstance_3());
        // Inline function 'kotlin.run' call
        var dispatchReceiver_1 = rememberComposableLambda(1472596708, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda_1($inputBg, $labelColor, $errorColor, $subjectError$delegate, $subject$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_3.changed_ga7h3f_k$(dispatchReceiver_1);
        // Inline function 'kotlin.let' call
        var it_1 = $composer_3.rememberedValue_4dg93v_k$();
        var tmp_12;
        if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_1 = ComposableLambda$invoke$ref_164(dispatchReceiver_1);
          $composer_3.updateRememberedValue_l1wh71_k$(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = it_1;
        }
        var tmp_13 = tmp_12;
        var tmp0_1 = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        sourceInformationMarkerEnd($composer_3);
        Column(tmp_11, null, null, null, tmp0_1, $composer_0, 24576, 14);
        var tmp_14 = padding_0(Companion_getInstance_3(), $gap);
        Box(tmp_14, null, null, null, $composer_0, 0, 14);
        var tmp_15 = fillMaxWidth(Companion_getInstance_3());
        // Inline function 'kotlin.run' call
        var dispatchReceiver_2 = rememberComposableLambda(16183653, true, ContactUsInput$lambda$lambda$lambda$lambda$lambda_2($inputBg, $labelColor, $errorColor, $messageError$delegate, $message$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_4.changed_ga7h3f_k$(dispatchReceiver_2);
        // Inline function 'kotlin.let' call
        var it_2 = $composer_4.rememberedValue_4dg93v_k$();
        var tmp_16;
        if (invalid_2 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_2 = ComposableLambda$invoke$ref_166(dispatchReceiver_2);
          $composer_4.updateRememberedValue_l1wh71_k$(value_2);
          tmp_16 = value_2;
        } else {
          tmp_16 = it_2;
        }
        var tmp_17 = tmp_16;
        var tmp0_2 = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
        sourceInformationMarkerEnd($composer_4);
        Column(tmp_15, null, null, null, tmp0_2, $composer_0, 24576, 14);
        var tmp_18 = padding_0(Companion_getInstance_3(), $gap);
        Box(tmp_18, null, null, null, $composer_0, 0, 14);
        var tmp_19 = height(Companion_getInstance_3(), get_px(36));
        Box(tmp_19, null, null, null, $composer_0, 0, 14);
        var tmp_20 = $this$Column.align_45bqjp_k$(width(Companion_getInstance_3(), get_px(200)), CenterHorizontally_getInstance());
        var tmp0_color = Colors_getInstance().get_White_ij46ow_k$();
        var tmp1_hoverColor = Colors_getInstance().get_White_ij46ow_k$();
        var tmp2_activeColor = Colors_getInstance().get_WhiteSmoke_gvtxtb_k$();
        var tmp3_borderColor = Colors_getInstance().get_White_ij46ow_k$();
        var tmp4_hoverBorderColor = Colors_getInstance().get_White_ij46ow_k$();
        var tmp5_activeBorderColor = rgb(168, 192, 255);
        var tmp6_gradient = linearGradient(rgb(168, 192, 255), rgb(63, 43, 150), Direction_ToTopRight_getInstance());
        var tmp7_borderRadius = BSBorderRadius_init_$Create$(get_px(50));
        var tmp8_horizontalPadding = get_cssRem(1.25);
        var tmp_21 = new ButtonCustomization(tmp0_color, VOID, tmp3_borderColor, tmp1_hoverColor, VOID, tmp4_hoverBorderColor, tmp2_activeColor, VOID, tmp5_activeBorderColor, VOID, VOID, VOID, tmp7_borderRadius, tmp8_horizontalPadding, VOID, VOID, VOID, VOID, VOID, tmp6_gradient);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_3 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_22;
        if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_3 = ContactUsInput$lambda$lambda$lambda$lambda$lambda_3($firstNameError$delegate, $lastNameError$delegate, $emailError$delegate, $subjectError$delegate, $messageError$delegate, $infoMessage$delegate, $firstName$delegate, $lastName$delegate, $email$delegate, $subject$delegate, $message$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_3);
          tmp_22 = value_3;
        } else {
          tmp_22 = it_3;
        }
        var tmp_23 = tmp_22;
        var tmp$ret$31 = (tmp_23 == null ? true : !(tmp_23 == null)) ? tmp_23 : THROW_CCE();
        BSButton(tmp_20, null, 'Send Message  \u2709\uFE0F', null, null, null, null, tmp_21, false, false, null, null, null, tmp$ret$31, $composer_0, 384 | com_stevdza_san_kotlinbs_models_button_ButtonCustomization$stableprop_getter() << 21, 3072, 8058);
        var tmp_24;
        if (!(ContactUsInput$lambda_19($infoMessage$delegate) == null)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(1964753995);
          var tmp_25 = ensureNotNull(ContactUsInput$lambda_19($infoMessage$delegate));
          var tmp_26 = color(padding_0(Companion_getInstance_3(), get_px(12)), $infoColor);
          SpanText(tmp_25, tmp_26, null, null, $composer_0, 0, 12);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_24 = Unit_getInstance();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(1953273548);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_24 = Unit_getInstance();
        }
        tmp_0 = tmp_24;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_167(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda$lambda_0($cardBg, $gap, $infoColor, $halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate, $emailError$delegate, $email$delegate, $subjectError$delegate, $subject$delegate, $messageError$delegate, $message$delegate, $infoMessage$delegate) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp = borderRadius(padding(backgroundColor(Companion_getInstance_3(), $cardBg), get_px(20)), get_px(14));
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-2071512394, true, ContactUsInput$lambda$lambda$lambda$lambda_0($gap, $infoColor, $halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate, $emailError$delegate, $email$delegate, $subjectError$delegate, $subject$delegate, $messageError$delegate, $message$delegate, $infoMessage$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_167(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Column(tmp, null, null, null, tmp0, $composer_0, 24576, 14);
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_168(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda$lambda($fullWidth, $cardBg, $gap, $infoColor, $halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate, $emailError$delegate, $email$delegate, $subjectError$delegate, $subject$delegate, $messageError$delegate, $message$delegate, $infoMessage$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.changedInstance_s1wkiy_k$($fullWidth);
        // Inline function 'kotlin.let' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_0;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ContactUsInput$lambda$lambda$lambda($fullWidth);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp_2 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-556994497, true, ContactUsInput$lambda$lambda$lambda_0($cardBg, $gap, $infoColor, $halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate, $emailError$delegate, $email$delegate, $subjectError$delegate, $subject$delegate, $messageError$delegate, $message$delegate, $infoMessage$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value_0 = ComposableLambda$invoke$ref_168(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Div(tmp_2, tmp0, $composer_0, 48, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_169(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda_21($fullWidth, $cardBg, $gap, $infoColor, $halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate, $emailError$delegate, $email$delegate, $subjectError$delegate, $subject$delegate, $messageError$delegate, $message$delegate, $infoMessage$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
        var tmp_0 = fillMaxWidth(Companion_getInstance_3());
        var tmp_1 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(1399705344, true, ContactUsInput$lambda$lambda($fullWidth, $cardBg, $gap, $infoColor, $halfWidth, $inputBg, $labelColor, $errorColor, $firstNameError$delegate, $firstName$delegate, $lastNameError$delegate, $lastName$delegate, $emailError$delegate, $email$delegate, $subjectError$delegate, $subject$delegate, $messageError$delegate, $message$delegate, $infoMessage$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref_169(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, null, tmp_1, null, tmp0, $composer_0, 24576 | com_varabyte_kobweb_compose_ui_Alignment_CenterHorizontally$stableprop_getter() << 6, 10);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_170(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ContactUsInput$lambda_22($$changed) {
    return function ($composer, $force) {
      ContactUsInput($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function QuickInfos$lambda($$changed) {
    return function ($composer, $force) {
      QuickInfos($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function ResumeSection($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1666456680);
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      var tmp = padding(gap(Companion_getInstance_3(), get_cssRem(1)), get_cssRem(2));
      Column(tmp, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$1971741471__1, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(ResumeSection$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_171(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$1216300642$lambda($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      SpanText('LinkedIn: ashwanisingh8713', null, null, null, $composer_0, 6, 14);
      SpanText('Github: ashwanisingh8713', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_172(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$1004589809$lambda($this$H5, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('My Projects', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_173(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$_390954480$lambda_yhb5e9($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      H5(null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$1004589809__1, $composer_0, 48, 1);
      SpanText('Kotlin Multiplatform, Android Native, SOLID, MVVM/MVI, JetPack Compose, DI (KOIN, HILT), Ktor, Coroutine, Flow, Debugging, Firebase, Client handling, Google DFP & IMA Ads, GraphQL, Project Management, Team Managing, Wireframe creation, GoLang Microservices, UnitTest, Reactive Programming, AI Tools & Prompt Engineering', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_174(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$784230279$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      SpanText('LANGUAGES', null, null, null, $composer_0, 6, 14);
      SpanText('Kotlin, Java, GoLang, Swift, C++, Dart', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_175(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$1506296537$lambda($this$Row, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = gap(Companion_getInstance_3(), get_cssRem(0.5));
      Column(tmp, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$_390954480_bnx5hq_1, $composer_0, 24576, 14);
      var tmp_0 = gap(Companion_getInstance_3(), get_cssRem(0.5));
      Column(tmp_0, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$784230279__1, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_176(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$_1686600905$lambda_q8w0u6($this$H5, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('AWARDS AND ACHIEVEMENTS', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_177(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$875990102$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      H5(null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$_1686600905_5gg33v_1, $composer_0, 48, 1);
      SpanText('Pat On The Back Award in Tech Mahindra', null, null, null, $composer_0, 6, 14);
      SpanText('Employee of the year in Ninestars Technologies in 2016.', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_178(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$_748315026$lambda_pb8f11($this$H5, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('EDUCATION', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_179(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$885382093$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      H5(null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$_748315026_4kapwo_1, $composer_0, 48, 1);
      SpanText('Bachelor in CS - July 2005 to Jun 2009, APS University, Rewa, M.P.', null, null, null, $composer_0, 6, 14);
      SpanText('10+2 (PCM) - July 2003 to May 2004, Saraswati Shishu Vidya Mandir, M.P. Board', null, null, null, $composer_0, 6, 14);
      SpanText('10th (All) - July 2001 to May 2002, Saraswati Shishu Vidya Mandir, M.P. Board', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_180(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$1181915823$lambda($this$H5, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('EXPERIENCE', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_181(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$_1479354354$lambda_otekmc($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      H5(null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$1181915823__1, $composer_0, 48, 1);
      SpanText('TECH MAHINDRA - Tech Lead, May-2024 to Present', null, null, null, $composer_0, 6, 14);
      SpanText('NINESTARS INFORMATION TECHNOLOGIES PVT LTD - Lead android developer, Aug-2015 to May-2024', null, null, null, $composer_0, 6, 14);
      SpanText('GLOBAL LOGIC INDIA LTD - Senior software developer, Mar-2014 to Aug-2015', null, null, null, $composer_0, 6, 14);
      SpanText('A1 TECHNOLOGIES - Software Engineer, Dec-2011 to Feb-2014', null, null, null, $composer_0, 6, 14);
      SpanText('RED ORANGE TECHNOLOGIES - Junior Software engineer, May-2011 to Dec-2011', null, null, null, $composer_0, 6, 14);
      SpanText('LIMITEX TECHNOLOGIES - Trainee/Junior Software developer, Sep-2010 to May-2011', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_182(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$_1182820624$lambda_hm5lgt($this$H5, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('PROJECT EXPERIENCE', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_183(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$450876495$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      H5(null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$_1182820624_q5hrzg_1, $composer_0, 48, 1);
      SpanText('Keysight Handy: B2B app for network and protocol analysis. Real-time monitoring, analytics, dashboards, device compatibility testing.', null, null, null, $composer_0, 6, 14);
      SpanText('KMP Project: Shopify Mobile Apps POC (In development): Voyager Navigator, Koin, Ktor, Clean Arch, MVI, Material-3, Compose UI, Android/iOS/Web, GraphQL, Shopify APIs.', null, null, null, $composer_0, 6, 14);
      SpanText('KMP Project: THE HINDU (In development): Voyager Navigator, Koin, Ktor, SQLDelight, Clean Arch, MVVM, Material-3, Compose, Android/iOS native features, GraphQL, dynamic UI, analytics, DFP Ads.', null, null, null, $composer_0, 6, 14);
      SpanText('Shorts News: Video app for short-form news, SOLID, Clean Arch, Koin, ViewModel, MVI, ExoPlayer, swipe navigation, video downloading/caching.', null, null, null, $composer_0, 6, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_184(p0) {
    return function (_this__u8e3s4, p0_0, p1) {
      return p0.invoke_c9vvnb_k$(_this__u8e3s4, p0_0, p1);
    };
  }
  function ComposableSingletons$ResumeSectionKt$lambda$1971741471$lambda($this$Column, $composer, $changed) {
    var $composer_0 = $composer;
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 17) === 16), $changed & 1)) {
      var tmp = Companion_getInstance_3();
      SpanText('ASHWANI KUMAR SINGH', tmp, null, null, $composer_0, 54, 12);
      var tmp_0 = Companion_getInstance_3();
      SpanText('ANDROID TECH LEAD / KMP DEVELOPER', tmp_0, null, null, $composer_0, 54, 12);
      var tmp_1 = Companion_getInstance_3();
      SpanText('Bangalore | +91-7349629131 | ashwanisingh8713@gmail.com', tmp_1, null, null, $composer_0, 54, 12);
      var tmp_2 = gap(Companion_getInstance_3(), get_cssRem(1));
      Row(tmp_2, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$1216300642__1, $composer_0, 24576, 14);
      var tmp_3 = padding_0(Companion_getInstance_3(), get_cssRem(1));
      SpanText('An autodidact programmer, with a zeal to learn and tinker around with mobile technology. Adept at leading teams, collaborating with clients, and driving projects from concept to completion.', tmp_3, null, null, $composer_0, 6, 12);
      var tmp_4 = padding_0(gap(Companion_getInstance_3(), get_cssRem(4)), get_cssRem(1));
      Row(tmp_4, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$1506296537__1, $composer_0, 24576, 14);
      var tmp_5 = padding_0(gap(Companion_getInstance_3(), get_cssRem(0.5)), get_cssRem(1));
      Column(tmp_5, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$875990102__1, $composer_0, 24576, 14);
      var tmp_6 = padding_0(gap(Companion_getInstance_3(), get_cssRem(0.5)), get_cssRem(1));
      Column(tmp_6, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$885382093__1, $composer_0, 24576, 14);
      var tmp_7 = padding_0(gap(Companion_getInstance_3(), get_cssRem(0.5)), get_cssRem(1));
      Column(tmp_7, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$_1479354354_82szpx_1, $composer_0, 24576, 14);
      var tmp_8 = padding_0(gap(Companion_getInstance_3(), get_cssRem(0.5)), get_cssRem(1));
      Column(tmp_8, null, null, null, ComposableSingletons$ResumeSectionKt_getInstance().lambda$450876495__1, $composer_0, 24576, 14);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$ResumeSectionKt() {
    ComposableSingletons$ResumeSectionKt_instance = this;
    var tmp = this;
    tmp.lambda$1216300642__1 = ComposableLambda$invoke$ref_171(composableLambdaInstance(1216300642, false, ComposableSingletons$ResumeSectionKt$lambda$1216300642$lambda));
    var tmp_0 = this;
    tmp_0.lambda$1004589809__1 = ComposableLambda$invoke$ref_172(composableLambdaInstance(1004589809, false, ComposableSingletons$ResumeSectionKt$lambda$1004589809$lambda));
    var tmp_1 = this;
    tmp_1.lambda$_390954480_bnx5hq_1 = ComposableLambda$invoke$ref_173(composableLambdaInstance(-390954480, false, ComposableSingletons$ResumeSectionKt$lambda$_390954480$lambda_yhb5e9));
    var tmp_2 = this;
    tmp_2.lambda$784230279__1 = ComposableLambda$invoke$ref_174(composableLambdaInstance(784230279, false, ComposableSingletons$ResumeSectionKt$lambda$784230279$lambda));
    var tmp_3 = this;
    tmp_3.lambda$1506296537__1 = ComposableLambda$invoke$ref_175(composableLambdaInstance(1506296537, false, ComposableSingletons$ResumeSectionKt$lambda$1506296537$lambda));
    var tmp_4 = this;
    tmp_4.lambda$_1686600905_5gg33v_1 = ComposableLambda$invoke$ref_176(composableLambdaInstance(-1686600905, false, ComposableSingletons$ResumeSectionKt$lambda$_1686600905$lambda_q8w0u6));
    var tmp_5 = this;
    tmp_5.lambda$875990102__1 = ComposableLambda$invoke$ref_177(composableLambdaInstance(875990102, false, ComposableSingletons$ResumeSectionKt$lambda$875990102$lambda));
    var tmp_6 = this;
    tmp_6.lambda$_748315026_4kapwo_1 = ComposableLambda$invoke$ref_178(composableLambdaInstance(-748315026, false, ComposableSingletons$ResumeSectionKt$lambda$_748315026$lambda_pb8f11));
    var tmp_7 = this;
    tmp_7.lambda$885382093__1 = ComposableLambda$invoke$ref_179(composableLambdaInstance(885382093, false, ComposableSingletons$ResumeSectionKt$lambda$885382093$lambda));
    var tmp_8 = this;
    tmp_8.lambda$1181915823__1 = ComposableLambda$invoke$ref_180(composableLambdaInstance(1181915823, false, ComposableSingletons$ResumeSectionKt$lambda$1181915823$lambda));
    var tmp_9 = this;
    tmp_9.lambda$_1479354354_82szpx_1 = ComposableLambda$invoke$ref_181(composableLambdaInstance(-1479354354, false, ComposableSingletons$ResumeSectionKt$lambda$_1479354354$lambda_otekmc));
    var tmp_10 = this;
    tmp_10.lambda$_1182820624_q5hrzg_1 = ComposableLambda$invoke$ref_182(composableLambdaInstance(-1182820624, false, ComposableSingletons$ResumeSectionKt$lambda$_1182820624$lambda_hm5lgt));
    var tmp_11 = this;
    tmp_11.lambda$450876495__1 = ComposableLambda$invoke$ref_183(composableLambdaInstance(450876495, false, ComposableSingletons$ResumeSectionKt$lambda$450876495$lambda));
    var tmp_12 = this;
    tmp_12.lambda$1971741471__1 = ComposableLambda$invoke$ref_184(composableLambdaInstance(1971741471, false, ComposableSingletons$ResumeSectionKt$lambda$1971741471$lambda));
  }
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$1216300642_xa5sv9_k$ = function () {
    return this.lambda$1216300642__1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$1004589809_c6mtdg_k$ = function () {
    return this.lambda$1004589809__1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$_390954480_3pxve9_k$ = function () {
    return this.lambda$_390954480_bnx5hq_1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$784230279_8z8rn6_k$ = function () {
    return this.lambda$784230279__1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$1506296537_wtfmeq_k$ = function () {
    return this.lambda$1506296537__1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$_1686600905_1018aa_k$ = function () {
    return this.lambda$_1686600905_5gg33v_1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$875990102_uvf08h_k$ = function () {
    return this.lambda$875990102__1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$_748315026_snov6f_k$ = function () {
    return this.lambda$_748315026_4kapwo_1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$885382093_bio5go_k$ = function () {
    return this.lambda$885382093__1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$1181915823_d79az7_k$ = function () {
    return this.lambda$1181915823__1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$_1479354354_xwiq3s_k$ = function () {
    return this.lambda$_1479354354_82szpx_1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$_1182820624_y1yza9_k$ = function () {
    return this.lambda$_1182820624_q5hrzg_1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$450876495_u2qpzy_k$ = function () {
    return this.lambda$450876495__1;
  };
  protoOf(ComposableSingletons$ResumeSectionKt).get_lambda$1971741471_g1vsze_k$ = function () {
    return this.lambda$1971741471__1;
  };
  var ComposableSingletons$ResumeSectionKt_instance;
  function ComposableSingletons$ResumeSectionKt_getInstance() {
    if (ComposableSingletons$ResumeSectionKt_instance == null)
      new ComposableSingletons$ResumeSectionKt();
    return ComposableSingletons$ResumeSectionKt_instance;
  }
  function ResumeSection$lambda($$changed) {
    return function ($composer, $force) {
      ResumeSection($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_zoomIn() {
    _init_properties_BannerStyles_kt__71llpu();
    return zoomIn;
  }
  var zoomIn;
  function get_bannerStyle() {
    _init_properties_BannerStyles_kt__71llpu();
    return bannerStyle;
  }
  var bannerStyle;
  function get_GradientTagLineStyle() {
    _init_properties_BannerStyles_kt__71llpu();
    return GradientTagLineStyle;
  }
  var GradientTagLineStyle;
  function get_upDownAnim() {
    _init_properties_BannerStyles_kt__71llpu();
    return upDownAnim;
  }
  var upDownAnim;
  function get_buttonStyle() {
    _init_properties_BannerStyles_kt__71llpu();
    return buttonStyle;
  }
  var buttonStyle;
  function zoomIn$lambda($this$Keyframes) {
    _init_properties_BannerStyles_kt__71llpu();
    $this$Keyframes.from_1urvt_k$(zoomIn$lambda$lambda);
    $this$Keyframes.to_txs6jq_k$(zoomIn$lambda$lambda_0);
    return Unit_getInstance();
  }
  function zoomIn$lambda$lambda() {
    _init_properties_BannerStyles_kt__71llpu();
    return scale(Companion_getInstance_3(), 0);
  }
  function zoomIn$lambda$lambda_0() {
    _init_properties_BannerStyles_kt__71llpu();
    return scale(Companion_getInstance_3(), 1);
  }
  function bannerStyle$lambda($this$CssStyle) {
    _init_properties_BannerStyles_kt__71llpu();
    $this$CssStyle.base_y8uu8g_k$(bannerStyle$lambda$lambda);
    return Unit_getInstance();
  }
  function bannerStyle$lambda$lambda() {
    _init_properties_BannerStyles_kt__71llpu();
    return backgroundRepeat(backgroundSize(backgroundPosition(backgroundImage(backgroundPosition(padding_1(fillMaxSize(Companion_getInstance_3()), get_px(200), get_px(0), get_px(100), get_px(0)), Companion_getInstance_20().of_ke4f5d_k$(Companion_getInstance_21().get_Top_18jj1w_k$())), url('/assets/banner-bg.png')), Companion_getInstance_20().of_ke4f5d_k$(Companion_getInstance_21().get_Center_3arb0i_k$())), Companion_getInstance_22().get_Cover_i8910u_k$()), Companion_getInstance_23().get_NoRepeat_ko4dp7_k$());
  }
  function GradientTagLineStyle$lambda($this$CssStyle) {
    _init_properties_BannerStyles_kt__71llpu();
    $this$CssStyle.base_y8uu8g_k$(GradientTagLineStyle$lambda$lambda);
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.invoke_xzuw0j_k$(tmp, GradientTagLineStyle$lambda$lambda_0);
    return Unit_getInstance();
  }
  function GradientTagLineStyle$lambda$lambda() {
    _init_properties_BannerStyles_kt__71llpu();
    var tmp = padding_2(letterSpacing(fontWeight_0(Companion_getInstance_3(), 700), get_px(0.8)), get_px(8), get_px(10));
    var tmp_0 = styleModifier(tmp, GradientTagLineStyle$lambda$lambda$lambda);
    var tmp_1 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_9();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = color(margin_0(fontSize(border(tmp_0, tmp_1, 'solid', rgba(255, 255, 255, 0.5)), get_px(18)), VOID, VOID, get_px(16)), Colors_getInstance().get_White_ij46ow_k$());
    // Inline function 'org.jetbrains.compose.web.css.Companion.InlineBlock' call
    Companion_getInstance_13();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$7 = 'inline-block';
    return display(tmp_2, tmp$ret$7);
  }
  function GradientTagLineStyle$lambda$lambda$lambda($this$styleModifier) {
    _init_properties_BannerStyles_kt__71llpu();
    background($this$styleModifier, 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)');
    return Unit_getInstance();
  }
  function GradientTagLineStyle$lambda$lambda_0() {
    _init_properties_BannerStyles_kt__71llpu();
    return fontSize(Companion_getInstance_3(), get_px(20));
  }
  function upDownAnim$lambda($this$Keyframes) {
    _init_properties_BannerStyles_kt__71llpu();
    var tmp = [get_percent(0), get_percent(100)];
    $this$Keyframes.each_dzjs38_k$(tmp, upDownAnim$lambda$lambda);
    var tmp_0 = get_percent(50);
    $this$Keyframes.invoke_u48aa2_k$(tmp_0, upDownAnim$lambda$lambda_0);
    return Unit_getInstance();
  }
  function upDownAnim$lambda$lambda() {
    _init_properties_BannerStyles_kt__71llpu();
    return translateY(Companion_getInstance_3(), get_px(-20));
  }
  function upDownAnim$lambda$lambda_0() {
    _init_properties_BannerStyles_kt__71llpu();
    return translateY(Companion_getInstance_3(), get_px(20));
  }
  function buttonStyle$lambda($this$CssStyle) {
    _init_properties_BannerStyles_kt__71llpu();
    $this$CssStyle.base_y8uu8g_k$(buttonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle);
    $this$CssStyle.invoke_9o9x0o_k$(tmp, buttonStyle$lambda$lambda_0);
    $this$CssStyle.cssRule_fe6cwq_k$(' .fas', buttonStyle$lambda$lambda_1);
    $this$CssStyle.cssRule_fe6cwq_k$(':hover .fa-circle-arrow-right', buttonStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function buttonStyle$lambda$lambda() {
    _init_properties_BannerStyles_kt__71llpu();
    var tmp = Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.Color.transparent' call
    Color_getInstance();
    var tmp$ret$0 = Color('transparent');
    var tmp_0 = backgroundColor(tmp, tmp$ret$0);
    // Inline function 'org.jetbrains.compose.web.css.Color.white' call
    Color_getInstance();
    var tmp$ret$1 = Color('white');
    var tmp_1 = letterSpacing(margin_0(fontSize(fontWeight_0(color(tmp_0, tmp$ret$1), 700), get_px(20)), get_px(60)), get_px(0.8));
    // Inline function 'org.jetbrains.compose.web.css.Companion.Flex' call
    Companion_getInstance_13();
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return alignItems(display(tmp_1, 'flex'), Companion_getInstance_24().get_Center_3arb0i_k$());
  }
  function buttonStyle$lambda$lambda_0() {
    _init_properties_BannerStyles_kt__71llpu();
    return backgroundColor(Companion_getInstance_3(), Color('#121212'));
  }
  function buttonStyle$lambda$lambda_1() {
    _init_properties_BannerStyles_kt__71llpu();
    return lineHeight(margin_2(fontSize(Companion_getInstance_3(), get_px(25)), VOID, VOID, VOID, get_px(10)), 1);
  }
  function buttonStyle$lambda$lambda_2() {
    _init_properties_BannerStyles_kt__71llpu();
    return margin_2(Companion_getInstance_3(), VOID, VOID, VOID, get_px(25));
  }
  var properties_initialized_BannerStyles_kt_h8glv4;
  function _init_properties_BannerStyles_kt__71llpu() {
    if (!properties_initialized_BannerStyles_kt_h8glv4) {
      properties_initialized_BannerStyles_kt_h8glv4 = true;
      zoomIn = new Keyframes(zoomIn$lambda);
      bannerStyle = CssStyle(VOID, bannerStyle$lambda);
      GradientTagLineStyle = CssStyle(VOID, GradientTagLineStyle$lambda);
      upDownAnim = new Keyframes(upDownAnim$lambda);
      buttonStyle = CssStyle(VOID, buttonStyle$lambda);
    }
  }
  var com_mano_ashwa_utils_AppStrings$stable;
  function AppStrings() {
    AppStrings_instance = this;
    this.userName_1 = 'Manoj Kumar Singh';
    this.documentPageTitle_1 = 'Resume - Manoj Kumar Singh';
    this.aboutPageTitle_1 = 'About - Manoj Kumar Singh';
  }
  protoOf(AppStrings).get_userName_ytepxb_k$ = function () {
    return this.userName_1;
  };
  protoOf(AppStrings).get_documentPageTitle_d6p5kr_k$ = function () {
    return this.documentPageTitle_1;
  };
  protoOf(AppStrings).get_aboutPageTitle_7fabk5_k$ = function () {
    return this.aboutPageTitle_1;
  };
  var AppStrings_instance;
  function AppStrings_getInstance() {
    if (AppStrings_instance == null)
      new AppStrings();
    return AppStrings_instance;
  }
  function com_mano_ashwa_utils_AppStrings$stableprop_getter() {
    return com_mano_ashwa_utils_AppStrings$stable;
  }
  var com_mano_ashwa_utils_Assets$stable;
  function Assets() {
    Assets_instance = this;
    this.BannerBg_1 = '/assets/banner-bg.png';
    this.HeaderImg_1 = '/assets/header-img.svg';
    this.LotusImg_1 = '/assets/lotus.jpg';
  }
  protoOf(Assets).get_BannerBg_9lr6nu_k$ = function () {
    return this.BannerBg_1;
  };
  protoOf(Assets).get_HeaderImg_wwhbdf_k$ = function () {
    return this.HeaderImg_1;
  };
  protoOf(Assets).get_LotusImg_923xj1_k$ = function () {
    return this.LotusImg_1;
  };
  var Assets_instance;
  function Assets_getInstance() {
    if (Assets_instance == null)
      new Assets();
    return Assets_instance;
  }
  function com_mano_ashwa_utils_Assets$stableprop_getter() {
    return com_mano_ashwa_utils_Assets$stable;
  }
  var com_mano_ashwa_utils_LinearGradient$stable;
  var com_mano_ashwa_utils_Stop$stable;
  function LinearGradient$toString$lambda(it) {
    return it.toString();
  }
  function LinearGradient(angle, stops) {
    angle = angle === VOID ? get_deg(0) : angle;
    stops = stops === VOID ? emptyList() : stops;
    this.angle_1 = angle;
    this.stops_1 = stops;
  }
  protoOf(LinearGradient).get_angle_iopwve_k$ = function () {
    return this.angle_1;
  };
  protoOf(LinearGradient).set_stops_2j4gtb_k$ = function (_set____db54di) {
    this.stops_1 = _set____db54di;
  };
  protoOf(LinearGradient).get_stops_iyq7ig_k$ = function () {
    return this.stops_1;
  };
  protoOf(LinearGradient).toString = function () {
    var tmp = toString(this.angle_1);
    var tmp_0 = this.stops_1;
    return 'linear-gradient(' + tmp + ', ' + joinToString(tmp_0, ', ', VOID, VOID, VOID, VOID, LinearGradient$toString$lambda) + ')';
  };
  protoOf(LinearGradient).stop_sjfu1w_k$ = function (color, start, end) {
    this.stops_1 = plus(this.stops_1, new Stop(color, start, end));
  };
  protoOf(LinearGradient).stop$default_64ccaw_k$ = function (color, start, end, $super) {
    start = start === VOID ? null : start;
    end = end === VOID ? null : end;
    var tmp;
    if ($super === VOID) {
      this.stop_sjfu1w_k$(color, start, end);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.stop_sjfu1w_k$.call(this, color, start, end);
    }
    return tmp;
  };
  protoOf(LinearGradient).component1_7eebsc_k$ = function () {
    return this.angle_1;
  };
  protoOf(LinearGradient).component2_7eebsb_k$ = function () {
    return this.stops_1;
  };
  protoOf(LinearGradient).copy_8ay87f_k$ = function (angle, stops) {
    return new LinearGradient(angle, stops);
  };
  protoOf(LinearGradient).copy$default_pt1wkl_k$ = function (angle, stops, $super) {
    angle = angle === VOID ? this.angle_1 : angle;
    stops = stops === VOID ? this.stops_1 : stops;
    return $super === VOID ? this.copy_8ay87f_k$(angle, stops) : $super.copy_8ay87f_k$.call(this, angle, stops);
  };
  protoOf(LinearGradient).hashCode = function () {
    var result = hashCode(this.angle_1);
    result = imul(result, 31) + hashCode(this.stops_1) | 0;
    return result;
  };
  protoOf(LinearGradient).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LinearGradient))
      return false;
    var tmp0_other_with_cast = other instanceof LinearGradient ? other : THROW_CCE();
    if (!equals(this.angle_1, tmp0_other_with_cast.angle_1))
      return false;
    if (!equals(this.stops_1, tmp0_other_with_cast.stops_1))
      return false;
    return true;
  };
  function Stop(color, start, end) {
    start = start === VOID ? null : start;
    end = end === VOID ? null : end;
    this.color_1 = color;
    this.start_1 = start;
    this.end_1 = end;
  }
  protoOf(Stop).get_color_ipu8u2_k$ = function () {
    return this.color_1;
  };
  protoOf(Stop).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Stop).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Stop).toString = function () {
    var tmp = toString(this.color_1);
    var tmp0_safe_receiver = this.start_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
    var tmp_0 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.end_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toString(tmp2_safe_receiver);
    return tmp + ' ' + tmp_0 + ' ' + (tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs);
  };
  protoOf(Stop).component1_7eebsc_k$ = function () {
    return this.color_1;
  };
  protoOf(Stop).component2_7eebsb_k$ = function () {
    return this.start_1;
  };
  protoOf(Stop).component3_7eebsa_k$ = function () {
    return this.end_1;
  };
  protoOf(Stop).copy_1ispzz_k$ = function (color, start, end) {
    return new Stop(color, start, end);
  };
  protoOf(Stop).copy$default_i0vndf_k$ = function (color, start, end, $super) {
    color = color === VOID ? this.color_1 : color;
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    return $super === VOID ? this.copy_1ispzz_k$(color, start, end) : $super.copy_1ispzz_k$.call(this, color, start, end);
  };
  protoOf(Stop).hashCode = function () {
    var result = hashCode(this.color_1);
    result = imul(result, 31) + (this.start_1 == null ? 0 : hashCode(this.start_1)) | 0;
    result = imul(result, 31) + (this.end_1 == null ? 0 : hashCode(this.end_1)) | 0;
    return result;
  };
  protoOf(Stop).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stop))
      return false;
    var tmp0_other_with_cast = other instanceof Stop ? other : THROW_CCE();
    if (!equals(this.color_1, tmp0_other_with_cast.color_1))
      return false;
    if (!equals(this.start_1, tmp0_other_with_cast.start_1))
      return false;
    if (!equals(this.end_1, tmp0_other_with_cast.end_1))
      return false;
    return true;
  };
  function linearGradient_0(angle, stops) {
    angle = angle === VOID ? get_deg(0) : angle;
    return (new LinearGradient(angle, toList(stops))).toString();
  }
  function linearGradient_1(angle, block) {
    angle = angle === VOID ? get_deg(0) : angle;
    // Inline function 'kotlin.apply' call
    var this_0 = new LinearGradient(angle);
    block(this_0);
    return this_0.toString();
  }
  function com_mano_ashwa_utils_LinearGradient$stableprop_getter() {
    return com_mano_ashwa_utils_LinearGradient$stable;
  }
  function com_mano_ashwa_utils_Stop$stableprop_getter() {
    return com_mano_ashwa_utils_Stop$stable;
  }
  function breakpoint(first, other, comparator, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'kotlin.require' call
    if (!getKClassFromExpression(ensureNotNull(first)).equals(getKClassFromExpression(ensureNotNull(other)))) {
      var message = 'Arguments must have the same type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var breakpoint = rememberBreakpoint($composer_0, 0);
    return comparator(breakpoint) ? first : other;
  }
  function atBreakpointMd(_this__u8e3s4, other, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'com.mano.ashwa.utils.breakpoint' call
    var $composer_1 = $composer_0;
    // Inline function 'kotlin.require' call
    if (!getKClassFromExpression(ensureNotNull(_this__u8e3s4)).equals(getKClassFromExpression(ensureNotNull(other)))) {
      var message = 'Arguments must have the same type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var breakpoint = rememberBreakpoint($composer_1, 0);
    var tmp;
    if (breakpoint.compareTo_30rs7w_k$(Breakpoint_MD_getInstance()) >= 0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = other;
    }
    return tmp;
  }
  function atBreakpointSM(_this__u8e3s4, other, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'com.mano.ashwa.utils.breakpoint' call
    var $composer_1 = $composer_0;
    // Inline function 'kotlin.require' call
    if (!getKClassFromExpression(ensureNotNull(_this__u8e3s4)).equals(getKClassFromExpression(ensureNotNull(other)))) {
      var message = 'Arguments must have the same type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var breakpoint = rememberBreakpoint($composer_1, 0);
    var tmp;
    if (breakpoint.compareTo_30rs7w_k$(Breakpoint_SM_getInstance()) >= 0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = other;
    }
    return tmp;
  }
  function atBreakpointXL(_this__u8e3s4, other, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'com.mano.ashwa.utils.breakpoint' call
    var $composer_1 = $composer_0;
    // Inline function 'kotlin.require' call
    if (!getKClassFromExpression(ensureNotNull(_this__u8e3s4)).equals(getKClassFromExpression(ensureNotNull(other)))) {
      var message = 'Arguments must have the same type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var breakpoint = rememberBreakpoint($composer_1, 0);
    var tmp;
    if (breakpoint.compareTo_30rs7w_k$(Breakpoint_XL_getInstance()) >= 0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = other;
    }
    return tmp;
  }
  function atBreakpointLG(_this__u8e3s4, other, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'com.mano.ashwa.utils.breakpoint' call
    var $composer_1 = $composer_0;
    // Inline function 'kotlin.require' call
    if (!getKClassFromExpression(ensureNotNull(_this__u8e3s4)).equals(getKClassFromExpression(ensureNotNull(other)))) {
      var message = 'Arguments must have the same type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var breakpoint = rememberBreakpoint($composer_1, 0);
    var tmp;
    if (breakpoint.compareTo_30rs7w_k$(Breakpoint_LG_getInstance()) >= 0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = other;
    }
    return tmp;
  }
  //region block: init
  COLOR_MODE_KEY = 'ashwa:colorMode';
  com_mano_ashwa_SitePalette_Brand$stable = 8;
  com_mano_ashwa_SitePalette$stable = 8;
  com_mano_ashwa_SitePalettes$stable = 8;
  MAIL_TO = 'pierre.ayfri@gmail.com';
  REPO_LINK = 'https://github.com/ashwanisingh8713/';
  DISCORD_LINK = 'https://discord.gg/invite/BySjRNQ9Je';
  LINKEDIN_LINK = 'https://www.linkedin.com/in/ashwani-kumar-singh-45577042/';
  com_mano_ashwa_model_SkillData$stable = 8;
  com_mano_ashwa_model_ExperienceData$stable = 8;
  com_mano_ashwa_model_ProjectData$stable = 8;
  com_mano_ashwa_navigation_Screen_Home$stable = 0;
  com_mano_ashwa_navigation_Screen_About$stable = 0;
  com_mano_ashwa_navigation_Screen_Skill$stable = 0;
  com_mano_ashwa_navigation_Screen_Experience$stable = 0;
  com_mano_ashwa_navigation_Screen_Project$stable = 0;
  com_mano_ashwa_navigation_Screen_CoverLetter$stable = 0;
  com_mano_ashwa_navigation_Screen_ContactMe$stable = 0;
  com_mano_ashwa_navigation_Screen$stable = 0;
  Skill_Route = '/skill';
  About_Route = '/about';
  Project_Route = '/project';
  Experience_Route = '/experiences';
  CoverLetter_Route = '/cover-letter';
  ContactMe_Route = '/contact-me';
  REQUIRED_MSG = 'Required';
  com_mano_ashwa_utils_AppStrings$stable = 0;
  com_mano_ashwa_utils_Assets$stable = 0;
  com_mano_ashwa_utils_LinearGradient$stable = 8;
  com_mano_ashwa_utils_Stop$stable = 8;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=ashwa.js.map
