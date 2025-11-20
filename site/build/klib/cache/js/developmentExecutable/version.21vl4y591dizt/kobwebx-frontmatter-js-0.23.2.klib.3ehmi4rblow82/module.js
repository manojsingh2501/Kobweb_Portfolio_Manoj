(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-common-kobwebx-frontmatter'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-common-kobwebx-frontmatter'.");
    }
    globalThis['kobweb-common-kobwebx-frontmatter'] = factory(typeof globalThis['kobweb-common-kobwebx-frontmatter'] === 'undefined' ? {} : globalThis['kobweb-common-kobwebx-frontmatter'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var Unit_getInstance = kotlin_kotlin.$_$.n4;
  var protoOf = kotlin_kotlin.$_$.mc;
  var initMetadataForClass = kotlin_kotlin.$_$.jb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var toIntOrNull = kotlin_kotlin.$_$.xe;
  var getOrNull = kotlin_kotlin.$_$.k7;
  var emptyMap = kotlin_kotlin.$_$.c7;
  var emptyList = kotlin_kotlin.$_$.b7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.kb;
  var VOID = kotlin_kotlin.$_$.f;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g2;
  var contains = kotlin_kotlin.$_$.pd;
  var joinToString = kotlin_kotlin.$_$.p7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.n1;
  var charSequenceLength = kotlin_kotlin.$_$.ya;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var listOf = kotlin_kotlin.$_$.y7;
  var substringBefore = kotlin_kotlin.$_$.te;
  var substringAfter = kotlin_kotlin.$_$.re;
  var to = kotlin_kotlin.$_$.bh;
  var toMap = kotlin_kotlin.$_$.k9;
  var THROW_CCE = kotlin_kotlin.$_$.yf;
  var Annotation = kotlin_kotlin.$_$.jf;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(Builder_0, 'Builder', Builder_0);
  initMetadataForCompanion(Companion);
  initMetadataForClass(FrontMatterElement, 'FrontMatterElement');
  initMetadataForClass(Scalar, 'Scalar', VOID, FrontMatterElement);
  initMetadataForClass(ValueMap, 'ValueMap', VOID, FrontMatterElement);
  initMetadataForClass(ValueList, 'ValueList', VOID, FrontMatterElement);
  initMetadataForClass(FrontMatterElementBuilder, 'FrontMatterElementBuilder', VOID, VOID, [Annotation]);
  //endregion
  function _set_map__4wa2w9($this, _set____db54di) {
    $this.map_1 = _set____db54di;
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function Builder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.map_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(Builder).addScalar_2iedwt_k$ = function (key, value) {
    var tmp0 = this.map_1;
    // Inline function 'kotlin.collections.set' call
    var value_0 = new Scalar(value);
    tmp0.put_4fpzoq_k$(key, value_0);
    return this;
  };
  protoOf(Builder).addMap_ogqopv_k$ = function (key, populate) {
    var builder = new Builder();
    populate(builder);
    var tmp0 = this.map_1;
    // Inline function 'kotlin.collections.set' call
    var value = builder.build_1k0s4u_k$();
    tmp0.put_4fpzoq_k$(key, value);
    return this;
  };
  protoOf(Builder).addList_k9bo9f_k$ = function (key, populate) {
    var builder = new Builder_0();
    populate(builder);
    var tmp0 = this.map_1;
    // Inline function 'kotlin.collections.set' call
    var value = builder.build_1k0s4u_k$();
    tmp0.put_4fpzoq_k$(key, value);
    return this;
  };
  protoOf(Builder).build_1k0s4u_k$ = function () {
    return new ValueMap(this.map_1);
  };
  function FrontMatterElement$ValueMap$query$lambda(this$0) {
    return function (segment) {
      return this$0.map_1.get_wei43m_k$(segment);
    };
  }
  function _set_list__9q1sop($this, _set____db54di) {
    $this.list_1 = _set____db54di;
  }
  function _get_list__d9tsa5($this) {
    return $this.list_1;
  }
  function Builder_0() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.list_1 = ArrayList_init_$Create$();
  }
  protoOf(Builder_0).addScalar_gud28j_k$ = function (value) {
    this.list_1.add_utx5q5_k$(new Scalar(value));
    return this;
  };
  protoOf(Builder_0).addMap_m6wx6p_k$ = function (populate) {
    var builder = new Builder();
    populate(builder);
    this.list_1.add_utx5q5_k$(builder.build_1k0s4u_k$());
    return this;
  };
  protoOf(Builder_0).build_1k0s4u_k$ = function () {
    return new ValueList(this.list_1);
  };
  function FrontMatterElement$ValueList$query$lambda(this$0) {
    return function (segment) {
      var tmp0_safe_receiver = toIntOrNull(segment);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = getOrNull(this$0.list_1, tmp0_safe_receiver);
      }
      return tmp;
    };
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).get_EmptyMap_avc5zc_k$ = function () {
    return new ValueMap(emptyMap());
  };
  protoOf(Companion).get_EmptyList_i62nk2_k$ = function () {
    return new ValueList(emptyList());
  };
  protoOf(Companion).Builder_3wn1q7_k$ = function (populate) {
    var builder = new Builder();
    populate(builder);
    return builder.build_1k0s4u_k$();
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Scalar(scalar) {
    FrontMatterElement.call(this);
    this.scalar_1 = scalar;
  }
  protoOf(Scalar).get_scalar_je2hv9_k$ = function () {
    return this.scalar_1;
  };
  protoOf(Scalar).query_klxx2q_k$ = function (path) {
    return this.handleQuery$default_rig4fv_k$(path);
  };
  function ValueMap(map) {
    FrontMatterElement.call(this);
    this.map_1 = map;
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.map_1.get_keys_wop4xp_k$();
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      if (contains(element, _Char___init__impl__6a9atx(46))) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!destination.isEmpty_y1axqb_k$()) {
      tmp = destination;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw IllegalArgumentException_init_$Create$('Kobweb FrontMatter keys do not allow periods in them. Got: [' + joinToString(tmp0_safe_receiver) + ']');
    }
  }
  protoOf(ValueMap).get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  protoOf(ValueMap).query_klxx2q_k$ = function (path) {
    return this.handleQuery_b6a71d_k$(path, FrontMatterElement$ValueMap$query$lambda(this));
  };
  function ValueList(list) {
    FrontMatterElement.call(this);
    this.list_1 = list;
  }
  protoOf(ValueList).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(ValueList).query_klxx2q_k$ = function (path) {
    return this.handleQuery_b6a71d_k$(path, FrontMatterElement$ValueList$query$lambda(this));
  };
  function FrontMatterElement$handleQuery$lambda(it) {
    return null;
  }
  function FrontMatterElement() {
    Companion_getInstance();
  }
  protoOf(FrontMatterElement).handleQuery_b6a71d_k$ = function (path, processSegment) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(path) === 0)
      return this;
    var _destruct__k2r9zo = this.consumePath_1hkk1h_k$(path);
    var segment = _destruct__k2r9zo.component1_7eebsc_k$();
    var rest = _destruct__k2r9zo.component2_7eebsb_k$();
    var tmp0_safe_receiver = processSegment(segment);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.query_klxx2q_k$(rest);
  };
  protoOf(FrontMatterElement).handleQuery$default_rig4fv_k$ = function (path, processSegment, $super) {
    var tmp;
    if (processSegment === VOID) {
      tmp = FrontMatterElement$handleQuery$lambda;
    } else {
      tmp = processSegment;
    }
    processSegment = tmp;
    return $super === VOID ? this.handleQuery_b6a71d_k$(path, processSegment) : $super.handleQuery_b6a71d_k$.call(this, path, processSegment);
  };
  protoOf(FrontMatterElement).getValue_r24mvz_k$ = function (path) {
    var tmp0_elvis_lhs = this.get_6bo4tg_k$(path);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('Yaml path [' + path + '] not found or associated with a value list.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(FrontMatterElement).get_6bo4tg_k$ = function (path) {
    var result = this.query_klxx2q_k$(path);
    var tmp;
    if (result instanceof Scalar) {
      tmp = listOf(result.scalar_1);
    } else {
      if (result instanceof ValueList) {
        tmp = result.scalarList_u785uy_k$();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(FrontMatterElement).consumePath_1hkk1h_k$ = function (_this__u8e3s4) {
    var nextSegment = substringBefore(_this__u8e3s4, _Char___init__impl__6a9atx(46));
    var rest = substringAfter(_this__u8e3s4, _Char___init__impl__6a9atx(46), '');
    return to(nextSegment, rest);
  };
  protoOf(FrontMatterElement).scalarOrNull_r6qjfu_k$ = function () {
    var tmp0_safe_receiver = this instanceof Scalar ? this : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.scalar_1;
  };
  protoOf(FrontMatterElement).scalarMap_v3r3n4_k$ = function () {
    var tmp0_safe_receiver = this instanceof ValueMap ? this : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.map_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp1_safe_receiver.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var key = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var value = element.get_value_j01efc_k$();
        var tmp0_safe_receiver_0 = value.scalarOrNull_r6qjfu_k$();
        var tmp_0;
        if (tmp0_safe_receiver_0 == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = to(key, tmp0_safe_receiver_0);
        }
        var tmp0_safe_receiver_1 = tmp_0;
        if (tmp0_safe_receiver_1 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.add_utx5q5_k$(tmp0_safe_receiver_1);
        }
      }
      tmp = destination;
    }
    var tmp2_safe_receiver = tmp;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toMap(tmp2_safe_receiver);
    return tmp3_elvis_lhs == null ? emptyMap() : tmp3_elvis_lhs;
  };
  protoOf(FrontMatterElement).scalarList_u785uy_k$ = function () {
    var tmp0_safe_receiver = this instanceof ValueList ? this : null;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.list_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp1_safe_receiver.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var tmp0_safe_receiver_0 = element.scalarOrNull_r6qjfu_k$();
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.add_utx5q5_k$(tmp0_safe_receiver_0);
        }
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  function FrontMatterElementBuilder() {
  }
  protoOf(FrontMatterElementBuilder).equals = function (other) {
    if (!(other instanceof FrontMatterElementBuilder))
      return false;
    other instanceof FrontMatterElementBuilder || THROW_CCE();
    return true;
  };
  protoOf(FrontMatterElementBuilder).hashCode = function () {
    return 0;
  };
  protoOf(FrontMatterElementBuilder).toString = function () {
    return '@com.varabyte.kobwebx.frontmatter.FrontMatterElementBuilder(' + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance;
  //endregion
  return _;
}));
