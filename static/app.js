var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/franken-ui/dist/js/core.iife.js
var require_core_iife = __commonJS((exports, module) => {
  var FRANKENUICORE = function(A) {
    var bo;
    const Pi = globalThis, Di = Pi.ShadowRoot && (Pi.ShadyCSS === undefined || Pi.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ks = Symbol(), Ln = new WeakMap;
    let xs = class {
      constructor(o, l, h) {
        if (this._$cssResult$ = true, h !== ks)
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = o, this.t = l;
      }
      get styleSheet() {
        let o = this.o;
        const l = this.t;
        if (Di && o === undefined) {
          const h = l !== undefined && l.length === 1;
          h && (o = Ln.get(l)), o === undefined && ((this.o = o = new CSSStyleSheet).replaceSync(this.cssText), h && Ln.set(l, o));
        }
        return o;
      }
      toString() {
        return this.cssText;
      }
    };
    const jn = (f) => new xs(typeof f == "string" ? f : f + "", undefined, ks), Da = (f, ...o) => {
      const l = f.length === 1 ? f[0] : o.reduce((h, u, $) => h + ((m) => {
        if (m._$cssResult$ === true)
          return m.cssText;
        if (typeof m == "number")
          return m;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + m + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(u) + f[$ + 1], f[0]);
      return new xs(l, f, ks);
    }, Rn = (f, o) => {
      if (Di)
        f.adoptedStyleSheets = o.map((l) => l instanceof CSSStyleSheet ? l : l.styleSheet);
      else
        for (const l of o) {
          const h = document.createElement("style"), u = Pi.litNonce;
          u !== undefined && h.setAttribute("nonce", u), h.textContent = l.cssText, f.appendChild(h);
        }
    }, Ss = Di ? (f) => f : (f) => f instanceof CSSStyleSheet ? ((o) => {
      let l = "";
      for (const h of o.cssRules)
        l += h.cssText;
      return jn(l);
    })(f) : f;
    const { is: Ma, defineProperty: Ba, getOwnPropertyDescriptor: Na, getOwnPropertyNames: Ha, getOwnPropertySymbols: za, getPrototypeOf: La } = Object, qt = globalThis, Fn = qt.trustedTypes, ja = Fn ? Fn.emptyScript : "", _s = qt.reactiveElementPolyfillSupport, Ve = (f, o) => f, Ye = { toAttribute(f, o) {
      switch (o) {
        case Boolean:
          f = f ? ja : null;
          break;
        case Object:
        case Array:
          f = f == null ? f : JSON.stringify(f);
      }
      return f;
    }, fromAttribute(f, o) {
      let l = f;
      switch (o) {
        case Boolean:
          l = f !== null;
          break;
        case Number:
          l = f === null ? null : Number(f);
          break;
        case Object:
        case Array:
          try {
            l = JSON.parse(f);
          } catch {
            l = null;
          }
      }
      return l;
    } }, Mi = (f, o) => !Ma(f, o), Un = { attribute: true, type: String, converter: Ye, reflect: false, hasChanged: Mi };
    Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), qt.litPropertyMetadata ?? (qt.litPropertyMetadata = new WeakMap);
    let ee = class extends HTMLElement {
      static addInitializer(o) {
        this._$Ei(), (this.l ?? (this.l = [])).push(o);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(o, l = Un) {
        if (l.state && (l.attribute = false), this._$Ei(), this.elementProperties.set(o, l), !l.noAccessor) {
          const h = Symbol(), u = this.getPropertyDescriptor(o, h, l);
          u !== undefined && Ba(this.prototype, o, u);
        }
      }
      static getPropertyDescriptor(o, l, h) {
        const { get: u, set: $ } = Na(this.prototype, o) ?? { get() {
          return this[l];
        }, set(m) {
          this[l] = m;
        } };
        return { get() {
          return u == null ? undefined : u.call(this);
        }, set(m) {
          const x = u == null ? undefined : u.call(this);
          $.call(this, m), this.requestUpdate(o, x, h);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(o) {
        return this.elementProperties.get(o) ?? Un;
      }
      static _$Ei() {
        if (this.hasOwnProperty(Ve("elementProperties")))
          return;
        const o = La(this);
        o.finalize(), o.l !== undefined && (this.l = [...o.l]), this.elementProperties = new Map(o.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(Ve("finalized")))
          return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(Ve("properties"))) {
          const l = this.properties, h = [...Ha(l), ...za(l)];
          for (const u of h)
            this.createProperty(u, l[u]);
        }
        const o = this[Symbol.metadata];
        if (o !== null) {
          const l = litPropertyMetadata.get(o);
          if (l !== undefined)
            for (const [h, u] of l)
              this.elementProperties.set(h, u);
        }
        this._$Eh = new Map;
        for (const [l, h] of this.elementProperties) {
          const u = this._$Eu(l, h);
          u !== undefined && this._$Eh.set(u, l);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(o) {
        const l = [];
        if (Array.isArray(o)) {
          const h = new Set(o.flat(1 / 0).reverse());
          for (const u of h)
            l.unshift(Ss(u));
        } else
          o !== undefined && l.push(Ss(o));
        return l;
      }
      static _$Eu(o, l) {
        const h = l.attribute;
        return h === false ? undefined : typeof h == "string" ? h : typeof o == "string" ? o.toLowerCase() : undefined;
      }
      constructor() {
        super(), this._$Ep = undefined, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        var o;
        this._$ES = new Promise((l) => this.enableUpdating = l), this._$AL = new Map, this._$E_(), this.requestUpdate(), (o = this.constructor.l) == null || o.forEach((l) => l(this));
      }
      addController(o) {
        var l;
        (this._$EO ?? (this._$EO = new Set)).add(o), this.renderRoot !== undefined && this.isConnected && ((l = o.hostConnected) == null || l.call(o));
      }
      removeController(o) {
        var l;
        (l = this._$EO) == null || l.delete(o);
      }
      _$E_() {
        const o = new Map, l = this.constructor.elementProperties;
        for (const h of l.keys())
          this.hasOwnProperty(h) && (o.set(h, this[h]), delete this[h]);
        o.size > 0 && (this._$Ep = o);
      }
      createRenderRoot() {
        const o = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return Rn(o, this.constructor.elementStyles), o;
      }
      connectedCallback() {
        var o;
        this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (o = this._$EO) == null || o.forEach((l) => {
          var h;
          return (h = l.hostConnected) == null ? undefined : h.call(l);
        });
      }
      enableUpdating(o) {
      }
      disconnectedCallback() {
        var o;
        (o = this._$EO) == null || o.forEach((l) => {
          var h;
          return (h = l.hostDisconnected) == null ? undefined : h.call(l);
        });
      }
      attributeChangedCallback(o, l, h) {
        this._$AK(o, h);
      }
      _$EC(o, l) {
        var $;
        const h = this.constructor.elementProperties.get(o), u = this.constructor._$Eu(o, h);
        if (u !== undefined && h.reflect === true) {
          const m = ((($ = h.converter) == null ? undefined : $.toAttribute) !== undefined ? h.converter : Ye).toAttribute(l, h.type);
          this._$Em = o, m == null ? this.removeAttribute(u) : this.setAttribute(u, m), this._$Em = null;
        }
      }
      _$AK(o, l) {
        var $;
        const h = this.constructor, u = h._$Eh.get(o);
        if (u !== undefined && this._$Em !== u) {
          const m = h.getPropertyOptions(u), x = typeof m.converter == "function" ? { fromAttribute: m.converter } : (($ = m.converter) == null ? undefined : $.fromAttribute) !== undefined ? m.converter : Ye;
          this._$Em = u, this[u] = x.fromAttribute(l, m.type), this._$Em = null;
        }
      }
      requestUpdate(o, l, h) {
        if (o !== undefined) {
          if (h ?? (h = this.constructor.getPropertyOptions(o)), !(h.hasChanged ?? Mi)(this[o], l))
            return;
          this.P(o, l, h);
        }
        this.isUpdatePending === false && (this._$ES = this._$ET());
      }
      P(o, l, h) {
        this._$AL.has(o) || this._$AL.set(o, l), h.reflect === true && this._$Em !== o && (this._$Ej ?? (this._$Ej = new Set)).add(o);
      }
      async _$ET() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (l) {
          Promise.reject(l);
        }
        const o = this.scheduleUpdate();
        return o != null && await o, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        var h;
        if (!this.isUpdatePending)
          return;
        if (!this.hasUpdated) {
          if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
            for (const [$, m] of this._$Ep)
              this[$] = m;
            this._$Ep = undefined;
          }
          const u = this.constructor.elementProperties;
          if (u.size > 0)
            for (const [$, m] of u)
              m.wrapped !== true || this._$AL.has($) || this[$] === undefined || this.P($, this[$], m);
        }
        let o = false;
        const l = this._$AL;
        try {
          o = this.shouldUpdate(l), o ? (this.willUpdate(l), (h = this._$EO) == null || h.forEach((u) => {
            var $;
            return ($ = u.hostUpdate) == null ? undefined : $.call(u);
          }), this.update(l)) : this._$EU();
        } catch (u) {
          throw o = false, this._$EU(), u;
        }
        o && this._$AE(l);
      }
      willUpdate(o) {
      }
      _$AE(o) {
        var l;
        (l = this._$EO) == null || l.forEach((h) => {
          var u;
          return (u = h.hostUpdated) == null ? undefined : u.call(h);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(o)), this.updated(o);
      }
      _$EU() {
        this._$AL = new Map, this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(o) {
        return true;
      }
      update(o) {
        this._$Ej && (this._$Ej = this._$Ej.forEach((l) => this._$EC(l, this[l]))), this._$EU();
      }
      updated(o) {
      }
      firstUpdated(o) {
      }
    };
    ee.elementStyles = [], ee.shadowRootOptions = { mode: "open" }, ee[Ve("elementProperties")] = new Map, ee[Ve("finalized")] = new Map, _s == null || _s({ ReactiveElement: ee }), (qt.reactiveElementVersions ?? (qt.reactiveElementVersions = [])).push("2.0.4");
    const Ge = globalThis, Bi = Ge.trustedTypes, Wn = Bi ? Bi.createPolicy("lit-html", { createHTML: (f) => f }) : undefined, As = "$lit$", zt = `lit\$${Math.random().toFixed(9).slice(2)}\$`, Es = "?" + zt, Ra = `<${Es}>`, ie = document, Je = () => ie.createComment(""), Ke = (f) => f === null || typeof f != "object" && typeof f != "function", qn = Array.isArray, Vn = (f) => qn(f) || typeof (f == null ? undefined : f[Symbol.iterator]) == "function", Cs = `[ 	
\f\r]`, Xe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Yn = /-->/g, Gn = />/g, se = RegExp(`>|${Cs}(?:([^\\s"'>=/]+)(${Cs}*=${Cs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|\$)`, "g"), Jn = /'/g, Kn = /"/g, Xn = /^(?:script|style|textarea|title)$/i, Zn = (f) => (o, ...l) => ({ _$litType$: f, strings: o, values: l }), tt = Zn(1), Fa = Zn(2), Lt = Symbol.for("lit-noChange"), ot = Symbol.for("lit-nothing"), Qn = new WeakMap, ne = ie.createTreeWalker(ie, 129);
    function to(f, o) {
      if (!Array.isArray(f) || !f.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
      return Wn !== undefined ? Wn.createHTML(o) : o;
    }
    const eo = (f, o) => {
      const l = f.length - 1, h = [];
      let u, $ = o === 2 ? "<svg>" : "", m = Xe;
      for (let x = 0;x < l; x++) {
        const k = f[x];
        let D, w, T = -1, O = 0;
        for (;O < k.length && (m.lastIndex = O, w = m.exec(k), w !== null); )
          O = m.lastIndex, m === Xe ? w[1] === "!--" ? m = Yn : w[1] !== undefined ? m = Gn : w[2] !== undefined ? (Xn.test(w[2]) && (u = RegExp("</" + w[2], "g")), m = se) : w[3] !== undefined && (m = se) : m === se ? w[0] === ">" ? (m = u ?? Xe, T = -1) : w[1] === undefined ? T = -2 : (T = m.lastIndex - w[2].length, D = w[1], m = w[3] === undefined ? se : w[3] === '"' ? Kn : Jn) : m === Kn || m === Jn ? m = se : m === Yn || m === Gn ? m = Xe : (m = se, u = undefined);
        const M = m === se && f[x + 1].startsWith("/>") ? " " : "";
        $ += m === Xe ? k + Ra : T >= 0 ? (h.push(D), k.slice(0, T) + As + k.slice(T) + zt + M) : k + zt + (T === -2 ? x : M);
      }
      return [to(f, $ + (f[l] || "<?>") + (o === 2 ? "</svg>" : "")), h];
    };

    class Ze {
      constructor({ strings: o, _$litType$: l }, h) {
        let u;
        this.parts = [];
        let $ = 0, m = 0;
        const x = o.length - 1, k = this.parts, [D, w] = eo(o, l);
        if (this.el = Ze.createElement(D, h), ne.currentNode = this.el.content, l === 2) {
          const T = this.el.content.firstChild;
          T.replaceWith(...T.childNodes);
        }
        for (;(u = ne.nextNode()) !== null && k.length < x; ) {
          if (u.nodeType === 1) {
            if (u.hasAttributes())
              for (const T of u.getAttributeNames())
                if (T.endsWith(As)) {
                  const O = w[m++], M = u.getAttribute(T).split(zt), Y = /([.?@])?(.*)/.exec(O);
                  k.push({ type: 1, index: $, name: Y[2], strings: M, ctor: Y[1] === "." ? so : Y[1] === "?" ? no : Y[1] === "@" ? oo : Qe }), u.removeAttribute(T);
                } else
                  T.startsWith(zt) && (k.push({ type: 6, index: $ }), u.removeAttribute(T));
            if (Xn.test(u.tagName)) {
              const T = u.textContent.split(zt), O = T.length - 1;
              if (O > 0) {
                u.textContent = Bi ? Bi.emptyScript : "";
                for (let M = 0;M < O; M++)
                  u.append(T[M], Je()), ne.nextNode(), k.push({ type: 2, index: ++$ });
                u.append(T[O], Je());
              }
            }
          } else if (u.nodeType === 8)
            if (u.data === Es)
              k.push({ type: 2, index: $ });
            else {
              let T = -1;
              for (;(T = u.data.indexOf(zt, T + 1)) !== -1; )
                k.push({ type: 7, index: $ }), T += zt.length - 1;
            }
          $++;
        }
      }
      static createElement(o, l) {
        const h = ie.createElement("template");
        return h.innerHTML = o, h;
      }
    }
    function oe(f, o, l = f, h) {
      var m, x;
      if (o === Lt)
        return o;
      let u = h !== undefined ? (m = l._$Co) == null ? undefined : m[h] : l._$Cl;
      const $ = Ke(o) ? undefined : o._$litDirective$;
      return (u == null ? undefined : u.constructor) !== $ && ((x = u == null ? undefined : u._$AO) == null || x.call(u, false), $ === undefined ? u = undefined : (u = new $(f), u._$AT(f, l, h)), h !== undefined ? (l._$Co ?? (l._$Co = []))[h] = u : l._$Cl = u), u !== undefined && (o = oe(f, u._$AS(f, o.values), u, h)), o;
    }

    class io {
      constructor(o, l) {
        this._$AV = [], this._$AN = undefined, this._$AD = o, this._$AM = l;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(o) {
        const { el: { content: l }, parts: h } = this._$AD, u = ((o == null ? undefined : o.creationScope) ?? ie).importNode(l, true);
        ne.currentNode = u;
        let $ = ne.nextNode(), m = 0, x = 0, k = h[0];
        for (;k !== undefined; ) {
          if (m === k.index) {
            let D;
            k.type === 2 ? D = new _e($, $.nextSibling, this, o) : k.type === 1 ? D = new k.ctor($, k.name, k.strings, this, o) : k.type === 6 && (D = new ro($, this, o)), this._$AV.push(D), k = h[++x];
          }
          m !== (k == null ? undefined : k.index) && ($ = ne.nextNode(), m++);
        }
        return ne.currentNode = ie, u;
      }
      p(o) {
        let l = 0;
        for (const h of this._$AV)
          h !== undefined && (h.strings !== undefined ? (h._$AI(o, h, l), l += h.strings.length - 2) : h._$AI(o[l])), l++;
      }
    }

    class _e {
      get _$AU() {
        var o;
        return ((o = this._$AM) == null ? undefined : o._$AU) ?? this._$Cv;
      }
      constructor(o, l, h, u) {
        this.type = 2, this._$AH = ot, this._$AN = undefined, this._$AA = o, this._$AB = l, this._$AM = h, this.options = u, this._$Cv = (u == null ? undefined : u.isConnected) ?? true;
      }
      get parentNode() {
        let o = this._$AA.parentNode;
        const l = this._$AM;
        return l !== undefined && (o == null ? undefined : o.nodeType) === 11 && (o = l.parentNode), o;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(o, l = this) {
        o = oe(this, o, l), Ke(o) ? o === ot || o == null || o === "" ? (this._$AH !== ot && this._$AR(), this._$AH = ot) : o !== this._$AH && o !== Lt && this._(o) : o._$litType$ !== undefined ? this.$(o) : o.nodeType !== undefined ? this.T(o) : Vn(o) ? this.k(o) : this._(o);
      }
      S(o) {
        return this._$AA.parentNode.insertBefore(o, this._$AB);
      }
      T(o) {
        this._$AH !== o && (this._$AR(), this._$AH = this.S(o));
      }
      _(o) {
        this._$AH !== ot && Ke(this._$AH) ? this._$AA.nextSibling.data = o : this.T(ie.createTextNode(o)), this._$AH = o;
      }
      $(o) {
        var $;
        const { values: l, _$litType$: h } = o, u = typeof h == "number" ? this._$AC(o) : (h.el === undefined && (h.el = Ze.createElement(to(h.h, h.h[0]), this.options)), h);
        if ((($ = this._$AH) == null ? undefined : $._$AD) === u)
          this._$AH.p(l);
        else {
          const m = new io(u, this), x = m.u(this.options);
          m.p(l), this.T(x), this._$AH = m;
        }
      }
      _$AC(o) {
        let l = Qn.get(o.strings);
        return l === undefined && Qn.set(o.strings, l = new Ze(o)), l;
      }
      k(o) {
        qn(this._$AH) || (this._$AH = [], this._$AR());
        const l = this._$AH;
        let h, u = 0;
        for (const $ of o)
          u === l.length ? l.push(h = new _e(this.S(Je()), this.S(Je()), this, this.options)) : h = l[u], h._$AI($), u++;
        u < l.length && (this._$AR(h && h._$AB.nextSibling, u), l.length = u);
      }
      _$AR(o = this._$AA.nextSibling, l) {
        var h;
        for ((h = this._$AP) == null ? undefined : h.call(this, false, true, l);o && o !== this._$AB; ) {
          const u = o.nextSibling;
          o.remove(), o = u;
        }
      }
      setConnected(o) {
        var l;
        this._$AM === undefined && (this._$Cv = o, (l = this._$AP) == null || l.call(this, o));
      }
    }

    class Qe {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(o, l, h, u, $) {
        this.type = 1, this._$AH = ot, this._$AN = undefined, this.element = o, this.name = l, this._$AM = u, this.options = $, h.length > 2 || h[0] !== "" || h[1] !== "" ? (this._$AH = Array(h.length - 1).fill(new String), this.strings = h) : this._$AH = ot;
      }
      _$AI(o, l = this, h, u) {
        const $ = this.strings;
        let m = false;
        if ($ === undefined)
          o = oe(this, o, l, 0), m = !Ke(o) || o !== this._$AH && o !== Lt, m && (this._$AH = o);
        else {
          const x = o;
          let k, D;
          for (o = $[0], k = 0;k < $.length - 1; k++)
            D = oe(this, x[h + k], l, k), D === Lt && (D = this._$AH[k]), m || (m = !Ke(D) || D !== this._$AH[k]), D === ot ? o = ot : o !== ot && (o += (D ?? "") + $[k + 1]), this._$AH[k] = D;
        }
        m && !u && this.j(o);
      }
      j(o) {
        o === ot ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, o ?? "");
      }
    }

    class so extends Qe {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(o) {
        this.element[this.name] = o === ot ? undefined : o;
      }
    }

    class no extends Qe {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(o) {
        this.element.toggleAttribute(this.name, !!o && o !== ot);
      }
    }

    class oo extends Qe {
      constructor(o, l, h, u, $) {
        super(o, l, h, u, $), this.type = 5;
      }
      _$AI(o, l = this) {
        if ((o = oe(this, o, l, 0) ?? ot) === Lt)
          return;
        const h = this._$AH, u = o === ot && h !== ot || o.capture !== h.capture || o.once !== h.once || o.passive !== h.passive, $ = o !== ot && (h === ot || u);
        u && this.element.removeEventListener(this.name, this, h), $ && this.element.addEventListener(this.name, this, o), this._$AH = o;
      }
      handleEvent(o) {
        var l;
        typeof this._$AH == "function" ? this._$AH.call(((l = this.options) == null ? undefined : l.host) ?? this.element, o) : this._$AH.handleEvent(o);
      }
    }

    class ro {
      constructor(o, l, h) {
        this.element = o, this.type = 6, this._$AN = undefined, this._$AM = l, this.options = h;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(o) {
        oe(this, o);
      }
    }
    const ao = { P: As, A: zt, C: Es, M: 1, L: eo, R: io, D: Vn, V: oe, I: _e, H: Qe, N: no, U: oo, B: so, F: ro }, Ts = Ge.litHtmlPolyfillSupport;
    Ts == null || Ts(Ze, _e), (Ge.litHtmlVersions ?? (Ge.litHtmlVersions = [])).push("3.1.4");
    const lo = (f, o, l) => {
      const h = (l == null ? undefined : l.renderBefore) ?? o;
      let u = h._$litPart$;
      if (u === undefined) {
        const $ = (l == null ? undefined : l.renderBefore) ?? null;
        h._$litPart$ = u = new _e(o.insertBefore(Je(), $), $, undefined, l ?? {});
      }
      return u._$AI(f), u;
    };
    let Mt = class extends ee {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = undefined;
      }
      createRenderRoot() {
        var l;
        const o = super.createRenderRoot();
        return (l = this.renderOptions).renderBefore ?? (l.renderBefore = o.firstChild), o;
      }
      update(o) {
        const l = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(o), this._$Do = lo(l, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        var o;
        super.connectedCallback(), (o = this._$Do) == null || o.setConnected(true);
      }
      disconnectedCallback() {
        var o;
        super.disconnectedCallback(), (o = this._$Do) == null || o.setConnected(false);
      }
      render() {
        return Lt;
      }
    };
    Mt._$litElement$ = true, Mt.finalized = true, (bo = globalThis.litElementHydrateSupport) == null || bo.call(globalThis, { LitElement: Mt });
    const Is = globalThis.litElementPolyfillSupport;
    Is == null || Is({ LitElement: Mt });
    const Ua = { _$AK: (f, o, l) => {
      f._$AK(o, l);
    }, _$AL: (f) => f._$AL };
    (globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.6");
    const Wa = Object.freeze(Object.defineProperty({ __proto__: null, CSSResult: xs, LitElement: Mt, ReactiveElement: ee, _$LE: Ua, _$LH: ao, adoptStyles: Rn, css: Da, defaultConverter: Ye, getCompatibleStyle: Ss, html: tt, isServer: false, noChange: Lt, notEqual: Mi, nothing: ot, render: lo, supportsAdoptingStyleSheets: Di, svg: Fa, unsafeCSS: jn }, Symbol.toStringTag, { value: "Module" }));
    const Ae = (f) => (o, l) => {
      l !== undefined ? l.addInitializer(() => {
        customElements.define(f, o);
      }) : customElements.define(f, o);
    };
    const qa = { attribute: true, type: String, converter: Ye, reflect: false, hasChanged: Mi }, co = (f = qa, o, l) => {
      const { kind: h, metadata: u } = l;
      let $ = globalThis.litPropertyMetadata.get(u);
      if ($ === undefined && globalThis.litPropertyMetadata.set(u, $ = new Map), $.set(l.name, f), h === "accessor") {
        const { name: m } = l;
        return { set(x) {
          const k = o.get.call(this);
          o.set.call(this, x), this.requestUpdate(m, k, f);
        }, init(x) {
          return x !== undefined && this.P(m, undefined, f), x;
        } };
      }
      if (h === "setter") {
        const { name: m } = l;
        return function(x) {
          const k = this[m];
          o.call(this, x), this.requestUpdate(m, k, f);
        };
      }
      throw Error("Unsupported decorator location: " + h);
    };
    function K(f) {
      return (o, l) => typeof l == "object" ? co(f, o, l) : ((h, u, $) => {
        const m = u.hasOwnProperty($);
        return u.constructor.createProperty($, m ? { ...h, wrapped: true } : h), m ? Object.getOwnPropertyDescriptor(u, $) : undefined;
      })(f, o, l);
    }
    function ht(f) {
      return K({ ...f, state: true, attribute: false });
    }
    function Va(f) {
      return (o, l) => {
        const h = typeof o == "function" ? o : o[l];
        Object.assign(h, f);
      };
    }
    const Ee = (f, o, l) => (l.configurable = true, l.enumerable = true, Reflect.decorate && typeof o != "object" && Object.defineProperty(f, o, l), l);
    function Ya(f, o) {
      return (l, h, u) => {
        const $ = (m) => {
          var x;
          return ((x = m.renderRoot) == null ? undefined : x.querySelector(f)) ?? null;
        };
        if (o) {
          const { get: m, set: x } = typeof h == "object" ? l : u ?? (() => {
            const k = Symbol();
            return { get() {
              return this[k];
            }, set(D) {
              this[k] = D;
            } };
          })();
          return Ee(l, h, { get() {
            let k = m.call(this);
            return k === undefined && (k = $(this), (k !== null || this.hasUpdated) && x.call(this, k)), k;
          } });
        }
        return Ee(l, h, { get() {
          return $(this);
        } });
      };
    }
    let Ga;
    function Ja(f) {
      return (o, l) => Ee(o, l, { get() {
        return (this.renderRoot ?? Ga ?? (Ga = document.createDocumentFragment())).querySelectorAll(f);
      } });
    }
    function Ka(f) {
      return (o, l) => Ee(o, l, { async get() {
        var h;
        return await this.updateComplete, ((h = this.renderRoot) == null ? undefined : h.querySelector(f)) ?? null;
      } });
    }
    function Xa(f) {
      return (o, l) => {
        const { slot: h, selector: u } = f ?? {}, $ = "slot" + (h ? `[name=${h}]` : ":not([name])");
        return Ee(o, l, { get() {
          var k;
          const m = (k = this.renderRoot) == null ? undefined : k.querySelector($), x = (m == null ? undefined : m.assignedElements(f)) ?? [];
          return u === undefined ? x : x.filter((D) => D.matches(u));
        } });
      };
    }
    function Za(f) {
      return (o, l) => {
        const { slot: h } = f ?? {}, u = "slot" + (h ? `[name=${h}]` : ":not([name])");
        return Ee(o, l, { get() {
          var m;
          const $ = (m = this.renderRoot) == null ? undefined : m.querySelector(u);
          return ($ == null ? undefined : $.assignedNodes(f)) ?? [];
        } });
      };
    }
    const Qa = Object.freeze(Object.defineProperty({ __proto__: null, customElement: Ae, eventOptions: Va, property: K, query: Ya, queryAll: Ja, queryAssignedElements: Xa, queryAssignedNodes: Za, queryAsync: Ka, standardProperty: co, state: ht }, Symbol.toStringTag, { value: "Module" }));
    const ho = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, uo = (f) => (...o) => ({ _$litDirective$: f, values: o });

    class fo {
      constructor(o) {
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AT(o, l, h) {
        this._$Ct = o, this._$AM = l, this._$Ci = h;
      }
      _$AS(o, l) {
        return this.update(o, l);
      }
      update(o, l) {
        return this.render(...l);
      }
    }
    const { I: tl } = ao, po = () => document.createComment(""), ti = (f, o, l) => {
      var $;
      const h = f._$AA.parentNode, u = o === undefined ? f._$AB : o._$AA;
      if (l === undefined) {
        const m = h.insertBefore(po(), u), x = h.insertBefore(po(), u);
        l = new tl(m, x, f, f.options);
      } else {
        const m = l._$AB.nextSibling, x = l._$AM, k = x !== f;
        if (k) {
          let D;
          ($ = l._$AQ) == null || $.call(l, f), l._$AM = f, l._$AP !== undefined && (D = f._$AU) !== x._$AU && l._$AP(D);
        }
        if (m !== u || k) {
          let D = l._$AA;
          for (;D !== m; ) {
            const w = D.nextSibling;
            h.insertBefore(D, u), D = w;
          }
        }
      }
      return l;
    }, re = (f, o, l = f) => (f._$AI(o, l), f), el = {}, il = (f, o = el) => f._$AH = o, sl = (f) => f._$AH, Os = (f) => {
      var h;
      (h = f._$AP) == null || h.call(f, false, true);
      let o = f._$AA;
      const l = f._$AB.nextSibling;
      for (;o !== l; ) {
        const u = o.nextSibling;
        o.remove(), o = u;
      }
    };
    const go = (f, o, l) => {
      const h = new Map;
      for (let u = o;u <= l; u++)
        h.set(f[u], u);
      return h;
    }, Ce = uo(class extends fo {
      constructor(f) {
        if (super(f), f.type !== ho.CHILD)
          throw Error("repeat() can only be used in text expressions");
      }
      dt(f, o, l) {
        let h;
        l === undefined ? l = o : o !== undefined && (h = o);
        const u = [], $ = [];
        let m = 0;
        for (const x of f)
          u[m] = h ? h(x, m) : m, $[m] = l(x, m), m++;
        return { values: $, keys: u };
      }
      render(f, o, l) {
        return this.dt(f, o, l).values;
      }
      update(f, [o, l, h]) {
        const u = sl(f), { values: $, keys: m } = this.dt(o, l, h);
        if (!Array.isArray(u))
          return this.ut = m, $;
        const x = this.ut ?? (this.ut = []), k = [];
        let D, w, T = 0, O = u.length - 1, M = 0, Y = $.length - 1;
        for (;T <= O && M <= Y; )
          if (u[T] === null)
            T++;
          else if (u[O] === null)
            O--;
          else if (x[T] === m[M])
            k[M] = re(u[T], $[M]), T++, M++;
          else if (x[O] === m[Y])
            k[Y] = re(u[O], $[Y]), O--, Y--;
          else if (x[T] === m[Y])
            k[Y] = re(u[T], $[Y]), ti(f, k[Y + 1], u[T]), T++, Y--;
          else if (x[O] === m[M])
            k[M] = re(u[O], $[M]), ti(f, u[T], u[O]), O--, M++;
          else if (D === undefined && (D = go(m, M, Y), w = go(x, T, O)), D.has(x[T]))
            if (D.has(x[O])) {
              const et = w.get(m[M]), Tt = et !== undefined ? u[et] : null;
              if (Tt === null) {
                const Rt = ti(f, u[T]);
                re(Rt, $[M]), k[M] = Rt;
              } else
                k[M] = re(Tt, $[M]), ti(f, u[T], Tt), u[et] = null;
              M++;
            } else
              Os(u[O]), O--;
          else
            Os(u[T]), T++;
        for (;M <= Y; ) {
          const et = ti(f, k[Y + 1]);
          re(et, $[M]), k[M++] = et;
        }
        for (;T <= O; ) {
          const et = u[T++];
          et !== null && Os(et);
        }
        return this.ut = m, il(f, k), Lt;
      }
    });

    class Ps extends fo {
      constructor(o) {
        if (super(o), this.it = ot, o.type !== ho.CHILD)
          throw Error(this.constructor.directiveName + "() can only be used in child bindings");
      }
      render(o) {
        if (o === ot || o == null)
          return this._t = undefined, this.it = o;
        if (o === Lt)
          return o;
        if (typeof o != "string")
          throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (o === this.it)
          return this._t;
        this.it = o;
        const l = [o];
        return l.raw = l, this._t = { _$litType$: this.constructor.resultType, strings: l, values: [] };
      }
    }
    Ps.directiveName = "unsafeHTML", Ps.resultType = 1;
    const mo = uo(Ps);
    (function(f, o) {
      typeof A == "object" && typeof module < "u" ? module.exports = o() : typeof define == "function" && define.amd ? define("uikit", o) : (f = typeof globalThis < "u" ? globalThis : f || self, f.UIkit = o());
    })(undefined, function() {
      const { hasOwnProperty: f, toString: o } = Object.prototype;
      function l(t, e) {
        return f.call(t, e);
      }
      const h = /\B([A-Z])/g, u = It((t) => t.replace(h, "-$1").toLowerCase()), $ = /-(\w)/g, m = It((t) => (t.charAt(0).toLowerCase() + t.slice(1)).replace($, (e, i) => i.toUpperCase())), x = It((t) => t.charAt(0).toUpperCase() + t.slice(1));
      function k(t, e) {
        var i;
        return (i = t == null ? undefined : t.startsWith) == null ? undefined : i.call(t, e);
      }
      function D(t, e) {
        var i;
        return (i = t == null ? undefined : t.endsWith) == null ? undefined : i.call(t, e);
      }
      function w(t, e) {
        var i;
        return (i = t == null ? undefined : t.includes) == null ? undefined : i.call(t, e);
      }
      function T(t, e) {
        var i;
        return (i = t == null ? undefined : t.findIndex) == null ? undefined : i.call(t, e);
      }
      const { isArray: O, from: M } = Array, { assign: Y } = Object;
      function et(t) {
        return typeof t == "function";
      }
      function Tt(t) {
        return t !== null && typeof t == "object";
      }
      function Rt(t) {
        return o.call(t) === "[object Object]";
      }
      function Hi(t) {
        return Tt(t) && t === t.window;
      }
      function ei(t) {
        return Ds(t) === 9;
      }
      function ii(t) {
        return Ds(t) >= 1;
      }
      function si(t) {
        return Ds(t) === 1;
      }
      function Ds(t) {
        return !Hi(t) && Tt(t) && t.nodeType;
      }
      function Te(t) {
        return typeof t == "boolean";
      }
      function Q(t) {
        return typeof t == "string";
      }
      function ni(t) {
        return typeof t == "number";
      }
      function Bt(t) {
        return ni(t) || Q(t) && !isNaN(t - parseFloat(t));
      }
      function zi(t) {
        return !(O(t) ? t.length : Tt(t) && Object.keys(t).length);
      }
      function pt(t) {
        return t === undefined;
      }
      function Ms(t) {
        return Te(t) ? t : t === "true" || t === "1" || t === "" ? true : t === "false" || t === "0" ? false : t;
      }
      function Ft(t) {
        const e = Number(t);
        return isNaN(e) ? false : e;
      }
      function H(t) {
        return parseFloat(t) || 0;
      }
      function rt(t) {
        return t && R(t)[0];
      }
      function R(t) {
        return ii(t) ? [t] : Array.from(t || []).filter(ii);
      }
      function ae(t) {
        if (Hi(t))
          return t;
        t = rt(t);
        const e = ei(t) ? t : t == null ? undefined : t.ownerDocument;
        return (e == null ? undefined : e.defaultView) || window;
      }
      function oi(t, e) {
        return t === e || Tt(t) && Tt(e) && Object.keys(t).length === Object.keys(e).length && Ie(t, (i, s) => i === e[s]);
      }
      function Bs(t, e, i) {
        return t.replace(new RegExp(`${e}|${i}`, "g"), (s) => s === e ? i : e);
      }
      function le(t) {
        return t[t.length - 1];
      }
      function Ie(t, e) {
        for (const i in t)
          if (e(t[i], i) === false)
            return false;
        return true;
      }
      function wo(t, e) {
        return t.slice().sort(({ [e]: i = 0 }, { [e]: s = 0 }) => i > s ? 1 : s > i ? -1 : 0);
      }
      function ce(t, e) {
        return t.reduce((i, s) => i + H(et(e) ? e(s) : s[e]), 0);
      }
      function yo(t, e) {
        const i = new Set;
        return t.filter(({ [e]: s }) => i.has(s) ? false : i.add(s));
      }
      function Ns(t, e) {
        return e.reduce((i, s) => ({ ...i, [s]: t[s] }), {});
      }
      function vt(t, e = 0, i = 1) {
        return Math.min(Math.max(Ft(t) || 0, e), i);
      }
      function W() {
      }
      function Hs(...t) {
        return [["bottom", "top"], ["right", "left"]].every(([e, i]) => Math.min(...t.map(({ [e]: s }) => s)) - Math.max(...t.map(({ [i]: s }) => s)) > 0);
      }
      function Li(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
      }
      function zs(t, e, i) {
        const s = e === "width" ? "height" : "width";
        return { [s]: t[e] ? Math.round(i * t[s] / t[e]) : t[s], [e]: i };
      }
      function ko(t, e) {
        t = { ...t };
        for (const i in t)
          t = t[i] > e[i] ? zs(t, i, e[i]) : t;
        return t;
      }
      function $l(t, e) {
        t = ko(t, e);
        for (const i in t)
          t = t[i] < e[i] ? zs(t, i, e[i]) : t;
        return t;
      }
      const Ls = { ratio: zs, contain: ko, cover: $l };
      function St(t, e, i = 0, s = false) {
        e = R(e);
        const { length: n } = e;
        return n ? (t = Bt(t) ? Ft(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : t === "last" ? n - 1 : e.indexOf(rt(t)), s ? vt(t, 0, n - 1) : (t %= n, t < 0 ? t + n : t)) : -1;
      }
      function It(t) {
        const e = Object.create(null);
        return (i, ...s) => e[i] || (e[i] = t(i, ...s));
      }
      function z(t, ...e) {
        for (const i of R(t)) {
          const s = he(e).filter((n) => !P(i, n));
          s.length && i.classList.add(...s);
        }
      }
      function U(t, ...e) {
        for (const i of R(t)) {
          const s = he(e).filter((n) => P(i, n));
          s.length && i.classList.remove(...s);
        }
      }
      function js(t, e, i) {
        i = he(i), e = he(e).filter((s) => !w(i, s)), U(t, e), z(t, i);
      }
      function P(t, e) {
        return [e] = he(e), R(t).some((i) => i.classList.contains(e));
      }
      function at(t, e, i) {
        const s = he(e);
        pt(i) || (i = !!i);
        for (const n of R(t))
          for (const r of s)
            n.classList.toggle(r, i);
      }
      function he(t) {
        return t ? O(t) ? t.map(he).flat() : String(t).split(" ").filter(Boolean) : [];
      }
      function _(t, e, i) {
        var s;
        if (Tt(e)) {
          for (const n in e)
            _(t, n, e[n]);
          return;
        }
        if (pt(i))
          return (s = rt(t)) == null ? undefined : s.getAttribute(e);
        for (const n of R(t))
          et(i) && (i = i.call(n, _(n, e))), i === null ? ri(n, e) : n.setAttribute(e, i);
      }
      function Yt(t, e) {
        return R(t).some((i) => i.hasAttribute(e));
      }
      function ri(t, e) {
        R(t).forEach((i) => i.removeAttribute(e));
      }
      function gt(t, e) {
        for (const i of [e, `data-${e}`])
          if (Yt(t, i))
            return _(t, i);
      }
      const ue = typeof window < "u", ut = ue && document.dir === "rtl", Oe = ue && "ontouchstart" in window, Pe = ue && window.PointerEvent, Ot = Pe ? "pointerdown" : Oe ? "touchstart" : "mousedown", ji = Pe ? "pointermove" : Oe ? "touchmove" : "mousemove", Gt = Pe ? "pointerup" : Oe ? "touchend" : "mouseup", de = Pe ? "pointerenter" : Oe ? "" : "mouseenter", De = Pe ? "pointerleave" : Oe ? "" : "mouseleave", Ri = Pe ? "pointercancel" : "touchcancel", bl = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
      function Rs(t) {
        return R(t).some((e) => bl[e.tagName.toLowerCase()]);
      }
      const wl = ue && Element.prototype.checkVisibility || function() {
        return this.offsetWidth || this.offsetHeight || this.getClientRects().length;
      };
      function lt(t) {
        return R(t).some((e) => wl.call(e));
      }
      const ai = "input,select,textarea,button";
      function Fi(t) {
        return R(t).some((e) => q(e, ai));
      }
      const li = `${ai},a[href],[tabindex]`;
      function Ui(t) {
        return q(t, li);
      }
      function X(t) {
        var e;
        return (e = rt(t)) == null ? undefined : e.parentElement;
      }
      function ci(t, e) {
        return R(t).filter((i) => q(i, e));
      }
      function q(t, e) {
        return R(t).some((i) => i.matches(e));
      }
      function hi(t, e) {
        const i = [];
        for (;t = X(t); )
          (!e || q(t, e)) && i.push(t);
        return i;
      }
      function G(t, e) {
        t = rt(t);
        const i = t ? M(t.children) : [];
        return e ? ci(i, e) : i;
      }
      function Ut(t, e) {
        return e ? R(t).indexOf(rt(e)) : G(X(t)).indexOf(t);
      }
      function Me(t) {
        return t = rt(t), t && ["origin", "pathname", "search"].every((e) => t[e] === location[e]);
      }
      function Fs(t) {
        if (Me(t)) {
          const { hash: e, ownerDocument: i } = rt(t), s = decodeURIComponent(e).slice(1);
          return i.getElementById(s) || i.getElementsByName(s)[0];
        }
      }
      function bt(t, e) {
        return Us(t, xo(t, e));
      }
      function ui(t, e) {
        return di(t, xo(t, e));
      }
      function Us(t, e) {
        return rt(Ao(t, rt(e), "querySelector"));
      }
      function di(t, e) {
        return R(Ao(t, rt(e), "querySelectorAll"));
      }
      function xo(t, e = document) {
        return ei(e) || So(t).isContextSelector ? e : e.ownerDocument;
      }
      const yl = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g, kl = /(\([^)]*\)|[^,])+/g, So = It((t) => {
        let e = false;
        if (!t || !Q(t))
          return {};
        const i = [];
        for (let s of t.match(kl))
          s = s.trim().replace(yl, "$1 *"), e || (e = ["!", "+", "~", "-", ">"].includes(s[0])), i.push(s);
        return { selector: i.join(","), selectors: i, isContextSelector: e };
      }), xl = /(\([^)]*\)|\S)*/, _o = It((t) => {
        t = t.slice(1).trim();
        const [e] = t.match(xl);
        return [e, t.slice(e.length + 1)];
      });
      function Ao(t, e = document, i) {
        const s = So(t);
        if (!s.isContextSelector)
          return s.selector ? Ws(e, i, s.selector) : t;
        t = "";
        const n = s.selectors.length === 1;
        for (let r of s.selectors) {
          let a, c = e;
          if (r[0] === "!" && ([a, r] = _o(r), c = e.parentElement.closest(a), !r && n) || c && r[0] === "-" && ([a, r] = _o(r), c = c.previousElementSibling, c = q(c, a) ? c : null, !r && n))
            return c;
          if (c) {
            if (n)
              return r[0] === "~" || r[0] === "+" ? (r = `:scope > :nth-child(${Ut(c) + 1}) ${r}`, c = c.parentElement) : r[0] === ">" && (r = `:scope ${r}`), Ws(c, i, r);
            t += `${t ? "," : ""}${Sl(c)} ${r}`;
          }
        }
        return ei(e) || (e = e.ownerDocument), Ws(e, i, t);
      }
      function Ws(t, e, i) {
        try {
          return t[e](i);
        } catch {
          return null;
        }
      }
      function Sl(t) {
        const e = [];
        for (;t.parentNode; ) {
          const i = _(t, "id");
          if (i) {
            e.unshift(`#${qs(i)}`);
            break;
          } else {
            let { tagName: s } = t;
            s !== "HTML" && (s += `:nth-child(${Ut(t) + 1})`), e.unshift(s), t = t.parentNode;
          }
        }
        return e.join(" > ");
      }
      function qs(t) {
        return Q(t) ? CSS.escape(t) : "";
      }
      function B(...t) {
        let [e, i, s, n, r = false] = Vs(t);
        n.length > 1 && (n = Al(n)), r != null && r.self && (n = El(n)), s && (n = _l(s, n));
        for (const a of i)
          for (const c of e)
            c.addEventListener(a, n, r);
        return () => Jt(e, i, n, r);
      }
      function Jt(...t) {
        let [e, i, , s, n = false] = Vs(t);
        for (const r of i)
          for (const a of e)
            a.removeEventListener(r, s, n);
      }
      function it(...t) {
        const [e, i, s, n, r = false, a] = Vs(t), c = B(e, i, s, (d) => {
          const p = !a || a(d);
          p && (c(), n(d, p));
        }, r);
        return c;
      }
      function C(t, e, i) {
        return Ys(t).every((s) => s.dispatchEvent(Be(e, true, true, i)));
      }
      function Be(t, e = true, i = false, s) {
        return Q(t) && (t = new CustomEvent(t, { bubbles: e, cancelable: i, detail: s })), t;
      }
      function Vs(t) {
        return t[0] = Ys(t[0]), Q(t[1]) && (t[1] = t[1].split(" ")), et(t[2]) && t.splice(2, 0, false), t;
      }
      function _l(t, e) {
        return (i) => {
          const s = t[0] === ">" ? di(t, i.currentTarget).reverse().find((n) => n.contains(i.target)) : i.target.closest(t);
          s && (i.current = s, e.call(this, i), delete i.current);
        };
      }
      function Al(t) {
        return (e) => O(e.detail) ? t(e, ...e.detail) : t(e);
      }
      function El(t) {
        return function(e) {
          if (e.target === e.currentTarget || e.target === e.current)
            return t.call(null, e);
        };
      }
      function Eo(t) {
        return t && "addEventListener" in t;
      }
      function Cl(t) {
        return Eo(t) ? t : rt(t);
      }
      function Ys(t) {
        return O(t) ? t.map(Cl).filter(Boolean) : Q(t) ? di(t) : Eo(t) ? [t] : R(t);
      }
      function Dt(t) {
        return t.pointerType === "touch" || !!t.touches;
      }
      function Wt(t) {
        var e, i;
        const { clientX: s, clientY: n } = ((e = t.touches) == null ? undefined : e[0]) || ((i = t.changedTouches) == null ? undefined : i[0]) || t;
        return { x: s, y: n };
      }
      const Tl = { "animation-iteration-count": true, "column-count": true, "fill-opacity": true, "flex-grow": true, "flex-shrink": true, "font-weight": true, "line-height": true, opacity: true, order: true, orphans: true, "stroke-dasharray": true, "stroke-dashoffset": true, widows: true, "z-index": true, zoom: true };
      function g(t, e, i, s) {
        const n = R(t);
        for (const r of n)
          if (Q(e)) {
            if (e = Wi(e), pt(i))
              return getComputedStyle(r).getPropertyValue(e);
            r.style.setProperty(e, Bt(i) && !Tl[e] ? `${i}px` : i || ni(i) ? i : "", s);
          } else if (O(e)) {
            const a = {};
            for (const c of e)
              a[c] = g(r, c);
            return a;
          } else if (Tt(e))
            for (const a in e)
              g(r, a, e[a], i);
        return n[0];
      }
      const Wi = It((t) => {
        if (k(t, "--"))
          return t;
        t = u(t);
        const { style: e } = document.documentElement;
        if (t in e)
          return t;
        for (const i of ["webkit", "moz"]) {
          const s = `-${i}-${t}`;
          if (s in e)
            return s;
        }
      }), Gs = "uk-transition", Js = "transitionend", Ks = "transitioncanceled";
      function Il(t, e, i = 400, s = "linear") {
        return i = Math.round(i), Promise.all(R(t).map((n) => new Promise((r, a) => {
          for (const d in e)
            g(n, d);
          const c = setTimeout(() => C(n, Js), i);
          it(n, [Js, Ks], ({ type: d }) => {
            clearTimeout(c), U(n, Gs), g(n, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }), d === Ks ? a() : r(n);
          }, { self: true }), z(n, Gs), g(n, { transitionProperty: Object.keys(e).map(Wi).join(","), transitionDuration: `${i}ms`, transitionTimingFunction: s, ...e });
        })));
      }
      const J = { start: Il, async stop(t) {
        C(t, Js), await Promise.resolve();
      }, async cancel(t) {
        C(t, Ks), await Promise.resolve();
      }, inProgress(t) {
        return P(t, Gs);
      } }, fi = "uk-animation", Co = "animationend", qi = "animationcanceled";
      function To(t, e, i = 200, s, n) {
        return Promise.all(R(t).map((r) => new Promise((a, c) => {
          P(r, fi) && C(r, qi);
          const d = [e, fi, `${fi}-${n ? "leave" : "enter"}`, s && `uk-transform-origin-${s}`, n && `${fi}-reverse`], p = setTimeout(() => C(r, Co), i);
          it(r, [Co, qi], ({ type: v }) => {
            clearTimeout(p), v === qi ? c() : a(r), g(r, "animationDuration", ""), U(r, d);
          }, { self: true }), g(r, "animationDuration", `${i}ms`), z(r, d);
        })));
      }
      const Kt = { in: To, out(t, e, i, s) {
        return To(t, e, i, s, true);
      }, inProgress(t) {
        return P(t, fi);
      }, cancel(t) {
        C(t, qi);
      } };
      function Ol(t) {
        if (document.readyState !== "loading") {
          t();
          return;
        }
        it(document, "DOMContentLoaded", t);
      }
      function st(t, ...e) {
        return e.some((i) => {
          var s;
          return ((s = t == null ? undefined : t.tagName) == null ? undefined : s.toLowerCase()) === i.toLowerCase();
        });
      }
      function Io(t) {
        return t = N(t), t.innerHTML = "", t;
      }
      function Xt(t, e) {
        return pt(e) ? N(t).innerHTML : ct(Io(t), e);
      }
      const Pl = Gi("prepend"), ct = Gi("append"), Vi = Gi("before"), Yi = Gi("after");
      function Gi(t) {
        return function(e, i) {
          var s;
          const n = R(Q(i) ? fe(i) : i);
          return (s = N(e)) == null || s[t](...n), Oo(n);
        };
      }
      function _t(t) {
        R(t).forEach((e) => e.remove());
      }
      function Ji(t, e) {
        for (e = rt(Vi(t, e));e.firstElementChild; )
          e = e.firstElementChild;
        return ct(e, t), e;
      }
      function Xs(t, e) {
        return R(R(t).map((i) => i.hasChildNodes() ? Ji(M(i.childNodes), e) : ct(i, e)));
      }
      function pi(t) {
        R(t).map(X).filter((e, i, s) => s.indexOf(e) === i).forEach((e) => e.replaceWith(...e.childNodes));
      }
      const Dl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
      function fe(t) {
        const e = Dl.exec(t);
        if (e)
          return document.createElement(e[1]);
        const i = document.createElement("template");
        return i.innerHTML = t.trim(), Oo(i.content.childNodes);
      }
      function Oo(t) {
        return t.length > 1 ? t : t[0];
      }
      function Zt(t, e) {
        if (si(t))
          for (e(t), t = t.firstElementChild;t; )
            Zt(t, e), t = t.nextElementSibling;
      }
      function N(t, e) {
        return Po(t) ? rt(fe(t)) : Us(t, e);
      }
      function Z(t, e) {
        return Po(t) ? R(fe(t)) : di(t, e);
      }
      function Po(t) {
        return Q(t) && k(t.trim(), "<");
      }
      const pe = { width: ["left", "right"], height: ["top", "bottom"] };
      function E(t) {
        const e = si(t) ? rt(t).getBoundingClientRect() : { height: yt(t), width: Ki(t), top: 0, left: 0 };
        return { height: e.height, width: e.width, top: e.top, left: e.left, bottom: e.top + e.height, right: e.left + e.width };
      }
      function j(t, e) {
        e && g(t, { left: 0, top: 0 });
        const i = E(t);
        if (t) {
          const { scrollY: s, scrollX: n } = ae(t), r = { height: s, width: n };
          for (const a in pe)
            for (const c of pe[a])
              i[c] += r[a];
        }
        if (!e)
          return i;
        for (const s of ["left", "top"])
          g(t, s, e[s] - i[s]);
      }
      function Zs(t) {
        let { top: e, left: i } = j(t);
        const { ownerDocument: { body: s, documentElement: n }, offsetParent: r } = rt(t);
        let a = r || n;
        for (;a && (a === s || a === n) && g(a, "position") === "static"; )
          a = a.parentNode;
        if (si(a)) {
          const c = j(a);
          e -= c.top + H(g(a, "borderTopWidth")), i -= c.left + H(g(a, "borderLeftWidth"));
        }
        return { top: e - H(g(t, "marginTop")), left: i - H(g(t, "marginLeft")) };
      }
      function gi(t) {
        t = rt(t);
        const e = [t.offsetTop, t.offsetLeft];
        for (;t = t.offsetParent; )
          if (e[0] += t.offsetTop + H(g(t, "borderTopWidth")), e[1] += t.offsetLeft + H(g(t, "borderLeftWidth")), g(t, "position") === "fixed") {
            const i = ae(t);
            return e[0] += i.scrollY, e[1] += i.scrollX, e;
          }
        return e;
      }
      const yt = Do("height"), Ki = Do("width");
      function Do(t) {
        const e = x(t);
        return (i, s) => {
          if (pt(s)) {
            if (Hi(i))
              return i[`inner${e}`];
            if (ei(i)) {
              const n = i.documentElement;
              return Math.max(n[`offset${e}`], n[`scroll${e}`]);
            }
            return i = rt(i), s = g(i, t), s = s === "auto" ? i[`offset${e}`] : H(s) || 0, s - Ne(i, t);
          } else
            return g(i, t, !s && s !== 0 ? "" : +s + Ne(i, t) + "px");
        };
      }
      function Ne(t, e, i = "border-box") {
        return g(t, "boxSizing") === i ? ce(pe[e], (s) => H(g(t, `padding-${s}`)) + H(g(t, `border-${s}-width`))) : 0;
      }
      function Xi(t) {
        for (const e in pe)
          for (const i in pe[e])
            if (pe[e][i] === t)
              return pe[e][1 - i];
        return t;
      }
      function ft(t, e = "width", i = window, s = false) {
        return Q(t) ? ce(Bl(t), (n) => {
          const r = Hl(n);
          return r ? zl(r === "vh" ? Ll() : r === "vw" ? Ki(ae(i)) : s ? i[`offset${x(e)}`] : E(i)[e], n) : n;
        }) : H(t);
      }
      const Ml = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g, Bl = It((t) => t.toString().replace(/\s/g, "").match(Ml) || []), Nl = /(?:v[hw]|%)$/, Hl = It((t) => (t.match(Nl) || [])[0]);
      function zl(t, e) {
        return t * H(e) / 100;
      }
      let mi, He;
      function Ll() {
        return mi || (He || (He = N("<div>"), g(He, { height: "100vh", position: "fixed" }), B(window, "resize", () => mi = null)), ct(document.body, He), mi = He.clientHeight, _t(He), mi);
      }
      const Qt = { read: jl, write: Rl, clear: Fl, flush: Mo }, Zi = [], Qi = [];
      function jl(t) {
        return Zi.push(t), tn(), t;
      }
      function Rl(t) {
        return Qi.push(t), tn(), t;
      }
      function Fl(t) {
        No(Zi, t), No(Qi, t);
      }
      let Qs = false;
      function Mo() {
        Bo(Zi), Bo(Qi.splice(0)), Qs = false, (Zi.length || Qi.length) && tn();
      }
      function tn() {
        Qs || (Qs = true, queueMicrotask(Mo));
      }
      function Bo(t) {
        let e;
        for (;e = t.shift(); )
          try {
            e();
          } catch (i) {
            console.error(i);
          }
      }
      function No(t, e) {
        const i = t.indexOf(e);
        return ~i && t.splice(i, 1);
      }

      class Ho {
        init() {
          this.positions = [];
          let e;
          this.unbind = B(document, "mousemove", (i) => e = Wt(i)), this.interval = setInterval(() => {
            e && (this.positions.push(e), this.positions.length > 5 && this.positions.shift());
          }, 50);
        }
        cancel() {
          var e;
          (e = this.unbind) == null || e.call(this), clearInterval(this.interval);
        }
        movesTo(e) {
          if (!this.positions || this.positions.length < 2)
            return false;
          const i = E(e), { left: s, right: n, top: r, bottom: a } = i, [c] = this.positions, d = le(this.positions), p = [c, d];
          return Li(d, i) ? false : [[{ x: s, y: r }, { x: n, y: a }], [{ x: s, y: a }, { x: n, y: r }]].some((b) => {
            const y = Ul(p, b);
            return y && Li(y, i);
          });
        }
      }
      function Ul([{ x: t, y: e }, { x: i, y: s }], [{ x: n, y: r }, { x: a, y: c }]) {
        const d = (c - r) * (i - t) - (a - n) * (s - e);
        if (d === 0)
          return false;
        const p = ((a - n) * (e - r) - (c - r) * (t - n)) / d;
        return p < 0 ? false : { x: t + p * (i - t), y: e + p * (s - e) };
      }
      function zo(t, e, i = {}, { intersecting: s = true } = {}) {
        const n = new IntersectionObserver(s ? (r, a) => {
          r.some((c) => c.isIntersecting) && e(r, a);
        } : e, i);
        for (const r of R(t))
          n.observe(r);
        return n;
      }
      const Wl = ue && window.ResizeObserver;
      function ts(t, e, i = { box: "border-box" }) {
        if (Wl)
          return Lo(ResizeObserver, t, e, i);
        const s = [B(window, "load resize", e), B(document, "loadedmetadata load", e, true)];
        return { disconnect: () => s.map((n) => n()) };
      }
      function en(t) {
        return { disconnect: B([window, window.visualViewport], "resize", t) };
      }
      function sn(t, e, i) {
        return Lo(MutationObserver, t, e, i);
      }
      function Lo(t, e, i, s) {
        const n = new t(i);
        for (const r of R(e))
          n.observe(r, s);
        return n;
      }
      function nn(t) {
        ss(t) && on(t, { func: "playVideo", method: "play" }), is(t) && t.play().catch(W);
      }
      function es(t) {
        ss(t) && on(t, { func: "pauseVideo", method: "pause" }), is(t) && t.pause();
      }
      function jo(t) {
        ss(t) && on(t, { func: "mute", method: "setVolume", value: 0 }), is(t) && (t.muted = true);
      }
      function Ro(t) {
        return is(t) || ss(t);
      }
      function is(t) {
        return st(t, "video");
      }
      function ss(t) {
        return st(t, "iframe") && (Fo(t) || Uo(t));
      }
      function Fo(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
      }
      function Uo(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/);
      }
      async function on(t, e) {
        await Vl(t), Wo(t, e);
      }
      function Wo(t, e) {
        t.contentWindow.postMessage(JSON.stringify({ event: "command", ...e }), "*");
      }
      const rn = "_ukPlayer";
      let ql = 0;
      function Vl(t) {
        if (t[rn])
          return t[rn];
        const e = Fo(t), i = Uo(t), s = ++ql;
        let n;
        return t[rn] = new Promise((r) => {
          e && it(t, "load", () => {
            const a = () => Wo(t, { event: "listening", id: s });
            n = setInterval(a, 100), a();
          }), it(window, "message", r, false, ({ data: a }) => {
            try {
              return a = JSON.parse(a), e && (a == null ? undefined : a.id) === s && a.event === "onReady" || i && Number(a == null ? undefined : a.player_id) === s;
            } catch {
            }
          }), t.src = `${t.src}${w(t.src, "?") ? "&" : "?"}${e ? "enablejsapi=1" : `api=1&player_id=${s}`}`;
        }).then(() => clearInterval(n));
      }
      function Yl(t, e = 0, i = 0) {
        return lt(t) ? Hs(...me(t).map((s) => {
          const { top: n, left: r, bottom: a, right: c } = At(s);
          return { top: n - e, left: r - i, bottom: a + e, right: c + i };
        }).concat(j(t))) : false;
      }
      function qo(t, { offset: e = 0 } = {}) {
        const i = lt(t) ? ge(t, false, ["hidden"]) : [];
        return i.reduce((a, c, d) => {
          const { scrollTop: p, scrollHeight: v, offsetHeight: b } = c, y = At(c), S = v - y.height, { height: I, top: L } = i[d - 1] ? At(i[d - 1]) : j(t);
          let F = Math.ceil(L - y.top - e + p);
          return e > 0 && b < I + e ? F += e : e = 0, F > S ? (e -= F - S, F = S) : F < 0 && (e -= F, F = 0), () => s(c, F - p, t, S).then(a);
        }, () => Promise.resolve())();
        function s(a, c, d, p) {
          return new Promise((v) => {
            const b = a.scrollTop, y = n(Math.abs(c)), S = Date.now(), I = cn(a) === a, L = j(d).top + (I ? 0 : b);
            let F = 0, Nt = 15;
            (function We() {
              const qe = r(vt((Date.now() - S) / y));
              let Ht = 0;
              i[0] === a && b + c < p && (Ht = j(d).top + (I ? 0 : a.scrollTop) - L - E(an(d)).height), a.scrollTop = b + (c + Ht) * qe, qe === 1 && (F === Ht || !Nt--) ? v() : (F = Ht, requestAnimationFrame(We));
            })();
          });
        }
        function n(a) {
          return 40 * Math.pow(a, 0.375);
        }
        function r(a) {
          return 0.5 * (1 - Math.cos(Math.PI * a));
        }
      }
      function ns(t, e = 0, i = 0) {
        if (!lt(t))
          return 0;
        const s = te(t, true), { scrollHeight: n, scrollTop: r } = s, { height: a } = At(s), c = n - a, d = gi(t)[0] - gi(s)[0], p = Math.max(0, d - a + e), v = Math.min(c, d + t.offsetHeight - i);
        return p < v ? vt((r - p) / (v - p)) : 1;
      }
      function ge(t, e = false, i = []) {
        const s = cn(t);
        let n = hi(t).reverse();
        n = n.slice(n.indexOf(s) + 1);
        const r = T(n, (a) => g(a, "position") === "fixed");
        return ~r && (n = n.slice(r)), [s].concat(n.filter((a) => g(a, "overflow").split(" ").some((c) => w(["auto", "scroll", ...i], c)) && (!e || a.scrollHeight > At(a).height))).reverse();
      }
      function te(...t) {
        return ge(...t)[0];
      }
      function me(t) {
        return ge(t, false, ["hidden", "clip"]);
      }
      function At(t) {
        const e = ae(t), i = cn(t), s = !ii(t) || t.contains(i);
        if (s && e.visualViewport) {
          let { height: d, width: p, scale: v, pageTop: b, pageLeft: y } = e.visualViewport;
          return d = Math.round(d * v), p = Math.round(p * v), { height: d, width: p, top: b, left: y, bottom: b + d, right: y + p };
        }
        let n = j(s ? e : t);
        if (g(t, "display") === "inline")
          return n;
        const { body: r, documentElement: a } = e.document, c = s ? i === a || i.clientHeight < r.clientHeight ? i : r : t;
        for (let [d, p, v, b] of [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]]) {
          const y = n[d] % 1;
          n[v] += H(g(c, `border-${v}-width`)), n[d] = n[p] = c[`client${x(d)}`] - (y ? y < 0.5 ? -y : 1 - y : 0), n[b] = n[d] + n[v];
        }
        return n;
      }
      function an(t) {
        const { left: e, width: i, top: s } = E(t);
        for (const n of s ? [0, s] : [0]) {
          let r;
          for (const a of ae(t).document.elementsFromPoint(e + i / 2, n))
            !a.contains(t) && !P(a, "uk-togglable-leave") && (ln(a, "fixed") && Vo(hi(t).reverse().find((c) => !c.contains(a) && !ln(c, "static"))) < Vo(a) || ln(a, "sticky") && X(a).contains(t)) && (!r || E(r).height < E(a).height) && (r = a);
          if (r)
            return r;
        }
      }
      function Vo(t) {
        return H(g(t, "zIndex"));
      }
      function ln(t, e) {
        return g(t, "position") === e;
      }
      function cn(t) {
        return ae(t).document.scrollingElement;
      }
      const Et = [["width", "x", "left", "right"], ["height", "y", "top", "bottom"]];
      function Yo(t, e, i) {
        i = { attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach }, offset: [0, 0], placement: [], ...i }, O(e) || (e = [e, e]), j(t, Go(t, e, i));
      }
      function Go(t, e, i) {
        const s = Jo(t, e, i), { boundary: n, viewportOffset: r = 0, placement: a } = i;
        let c = s;
        for (const [d, [p, , v, b]] of Object.entries(Et)) {
          const y = Gl(t, e[d], r, n, d);
          if (os(s, y, d))
            continue;
          let S = 0;
          if (a[d] === "flip") {
            const I = i.attach.target[d];
            if (I === b && s[b] <= y[b] || I === v && s[v] >= y[v])
              continue;
            S = Kl(t, e, i, d)[v] - s[v];
            const L = Jl(t, e[d], r, d);
            if (!os(hn(s, S, d), L, d)) {
              if (os(s, L, d))
                continue;
              if (i.recursion)
                return false;
              const F = Xl(t, e, i);
              if (F && os(F, L, 1 - d))
                return F;
              continue;
            }
          } else if (a[d] === "shift") {
            const I = j(e[d]), { offset: L } = i;
            S = vt(vt(s[v], y[v], y[b] - s[p]), I[v] - s[p] + L[d], I[b] - L[d]) - s[v];
          }
          c = hn(c, S, d);
        }
        return c;
      }
      function Jo(t, e, i) {
        let { attach: s, offset: n } = { attach: { element: ["left", "top"], target: ["left", "top"], ...i.attach }, offset: [0, 0], ...i }, r = j(t);
        for (const [a, [c, , d, p]] of Object.entries(Et)) {
          const v = s.target[a] === s.element[a] ? At(e[a]) : j(e[a]);
          r = hn(r, v[d] - r[d] + Ko(s.target[a], p, v[c]) - Ko(s.element[a], p, r[c]) + +n[a], a);
        }
        return r;
      }
      function hn(t, e, i) {
        const [, s, n, r] = Et[i], a = { ...t };
        return a[n] = t[s] = t[n] + e, a[r] += e, a;
      }
      function Ko(t, e, i) {
        return t === "center" ? i / 2 : t === e ? i : 0;
      }
      function Gl(t, e, i, s, n) {
        let r = Zo(...Xo(t, e).map(At));
        return i && (r[Et[n][2]] += i, r[Et[n][3]] -= i), s && (r = Zo(r, j(O(s) ? s[n] : s))), r;
      }
      function Jl(t, e, i, s) {
        const [n, r, a, c] = Et[s], [d] = Xo(t, e), p = At(d);
        return ["auto", "scroll"].includes(g(d, `overflow-${r}`)) && (p[a] -= d[`scroll${x(a)}`], p[c] = p[a] + d[`scroll${x(n)}`]), p[a] += i, p[c] -= i, p;
      }
      function Xo(t, e) {
        return me(e).filter((i) => i.contains(t));
      }
      function Zo(...t) {
        let e = {};
        for (const i of t)
          for (const [, , s, n] of Et)
            e[s] = Math.max(e[s] || 0, i[s]), e[n] = Math.min(...[e[n], i[n]].filter(Boolean));
        return e;
      }
      function os(t, e, i) {
        const [, , s, n] = Et[i];
        return t[s] >= e[s] && t[n] <= e[n];
      }
      function Kl(t, e, { offset: i, attach: s }, n) {
        return Jo(t, e, { attach: { element: Qo(s.element, n), target: Qo(s.target, n) }, offset: Zl(i, n) });
      }
      function Xl(t, e, i) {
        return Go(t, e, { ...i, attach: { element: i.attach.element.map(tr).reverse(), target: i.attach.target.map(tr).reverse() }, offset: i.offset.reverse(), placement: i.placement.reverse(), recursion: true });
      }
      function Qo(t, e) {
        const i = [...t], s = Et[e].indexOf(t[e]);
        return ~s && (i[e] = Et[e][1 - s % 2 + 2]), i;
      }
      function tr(t) {
        for (let e = 0;e < Et.length; e++) {
          const i = Et[e].indexOf(t);
          if (~i)
            return Et[1 - e][i % 2 + 2];
        }
      }
      function Zl(t, e) {
        return t = [...t], t[e] *= -1, t;
      }
      var Ql = Object.freeze({ __proto__: null, $: N, $$: Z, Animation: Kt, Dimensions: Ls, MouseTracker: Ho, Transition: J, addClass: z, after: Yi, append: ct, apply: Zt, assign: Y, attr: _, before: Vi, boxModelAdjust: Ne, camelize: m, children: G, clamp: vt, createEvent: Be, css: g, data: gt, dimensions: E, each: Ie, empty: Io, endsWith: D, escape: qs, fastdom: Qt, filter: ci, find: Us, findAll: di, findIndex: T, flipPosition: Xi, fragment: fe, getCoveringElement: an, getEventPos: Wt, getIndex: St, getTargetedElement: Fs, hasAttr: Yt, hasClass: P, hasOwn: l, hasTouch: Oe, height: yt, html: Xt, hyphenate: u, inBrowser: ue, includes: w, index: Ut, intersectRect: Hs, isArray: O, isBoolean: Te, isDocument: ei, isElement: si, isEmpty: zi, isEqual: oi, isFocusable: Ui, isFunction: et, isInView: Yl, isInput: Fi, isNode: ii, isNumber: ni, isNumeric: Bt, isObject: Tt, isPlainObject: Rt, isRtl: ut, isSameSiteAnchor: Me, isString: Q, isTag: st, isTouch: Dt, isUndefined: pt, isVideo: Ro, isVisible: lt, isVoidElement: Rs, isWindow: Hi, last: le, matches: q, memoize: It, mute: jo, noop: W, observeIntersection: zo, observeMutation: sn, observeResize: ts, observeViewportResize: en, off: Jt, offset: j, offsetPosition: gi, offsetViewport: At, on: B, once: it, overflowParents: me, parent: X, parents: hi, pause: es, pick: Ns, play: nn, pointInRect: Li, pointerCancel: Ri, pointerDown: Ot, pointerEnter: de, pointerLeave: De, pointerMove: ji, pointerUp: Gt, position: Zs, positionAt: Yo, prepend: Pl, propName: Wi, query: bt, queryAll: ui, ready: Ol, remove: _t, removeAttr: ri, removeClass: U, replaceClass: js, scrollIntoView: qo, scrollParent: te, scrollParents: ge, scrolledOver: ns, selFocusable: li, selInput: ai, sortBy: wo, startsWith: k, sumBy: ce, swap: Bs, toArray: M, toBoolean: Ms, toEventTargets: Ys, toFloat: H, toNode: rt, toNodes: R, toNumber: Ft, toPx: ft, toWindow: ae, toggleClass: at, trigger: C, ucfirst: x, uniqueBy: yo, unwrap: pi, width: Ki, wrapAll: Ji, wrapInner: Xs }), kt = { connected() {
        z(this.$el, this.$options.id);
      } };
      const tc = ["days", "hours", "minutes", "seconds"];
      var ec = { mixins: [kt], props: { date: String, clsWrapper: String, role: String }, data: { date: "", clsWrapper: ".uk-countdown-%unit%", role: "timer" }, connected() {
        _(this.$el, "role", this.role), this.date = H(Date.parse(this.$props.date)), this.end = false, this.start();
      }, disconnected() {
        this.stop();
      }, events: { name: "visibilitychange", el: () => document, handler() {
        document.hidden ? this.stop() : this.start();
      } }, methods: { start() {
        this.stop(), this.update(), this.timer || (C(this.$el, "countdownstart"), this.timer = setInterval(this.update, 1000));
      }, stop() {
        this.timer && (clearInterval(this.timer), C(this.$el, "countdownstop"), this.timer = null);
      }, update() {
        const t = ic(this.date);
        t.total || (this.stop(), this.end || (C(this.$el, "countdownend"), this.end = true));
        for (const e of tc) {
          const i = N(this.clsWrapper.replace("%unit%", e), this.$el);
          if (!i)
            continue;
          let s = Math.trunc(t[e]).toString().padStart(2, "0");
          i.textContent !== s && (s = s.split(""), s.length !== i.children.length && Xt(i, s.map(() => "<span></span>").join("")), s.forEach((n, r) => i.children[r].textContent = n));
        }
      } } };
      function ic(t) {
        const e = Math.max(0, t - Date.now()) / 1000;
        return { total: e, seconds: e % 60, minutes: e / 60 % 60, hours: e / 60 / 60 % 24, days: e / 60 / 60 / 24 };
      }
      const dt = {};
      dt.events = dt.watch = dt.observe = dt.created = dt.beforeConnect = dt.connected = dt.beforeDisconnect = dt.disconnected = dt.destroy = un, dt.args = function(t, e) {
        return e !== false && un(e || t);
      }, dt.update = function(t, e) {
        return wo(un(t, et(e) ? { read: e } : e), "order");
      }, dt.props = function(t, e) {
        if (O(e)) {
          const i = {};
          for (const s of e)
            i[s] = String;
          e = i;
        }
        return dt.methods(t, e);
      }, dt.computed = dt.methods = function(t, e) {
        return e ? t ? { ...t, ...e } : e : t;
      }, dt.i18n = dt.data = function(t, e, i) {
        return i ? er(t, e, i) : e ? t ? function(s) {
          return er(t, e, s);
        } : e : t;
      };
      function er(t, e, i) {
        return dt.computed(et(t) ? t.call(i, i) : t, et(e) ? e.call(i, i) : e);
      }
      function un(t, e) {
        return t = t && !O(t) ? [t] : t, e ? t ? t.concat(e) : O(e) ? e : [e] : t;
      }
      function sc(t, e) {
        return pt(e) ? t : e;
      }
      function vi(t, e, i) {
        const s = {};
        if (et(e) && (e = e.options), e.extends && (t = vi(t, e.extends, i)), e.mixins)
          for (const r of e.mixins)
            t = vi(t, r, i);
        for (const r in t)
          n(r);
        for (const r in e)
          l(t, r) || n(r);
        function n(r) {
          s[r] = (dt[r] || sc)(t[r], e[r], i);
        }
        return s;
      }
      function ze(t, e = []) {
        try {
          return t ? k(t, "{") ? JSON.parse(t) : e.length && !w(t, ":") ? { [e[0]]: t } : t.split(";").reduce((i, s) => {
            const [n, r] = s.split(/:(.*)/);
            return n && !pt(r) && (i[n.trim()] = r.trim()), i;
          }, {}) : {};
        } catch {
          return {};
        }
      }
      function dn(t, e) {
        return t === Boolean ? Ms(e) : t === Number ? Ft(e) : t === "list" ? oc(e) : t === Object && Q(e) ? ze(e) : t ? t(e) : e;
      }
      const nc = /,(?![^(]*\))/;
      function oc(t) {
        return O(t) ? t : Q(t) ? t.split(nc).map((e) => Bt(e) ? Ft(e) : Ms(e.trim())) : [t];
      }
      function rc(t) {
        t._data = {}, t._updates = [...t.$options.update || []], t._disconnect.push(() => t._updates = t._data = null);
      }
      function ac(t, e) {
        t._updates.unshift(e);
      }
      function $i(t, e = "update") {
        t._connected && t._updates.length && (t._queued || (t._queued = new Set, Qt.read(() => {
          t._connected && lc(t, t._queued), t._queued = null;
        })), t._queued.add(e.type || e));
      }
      function lc(t, e) {
        for (const { read: i, write: s, events: n = [] } of t._updates) {
          if (!e.has("update") && !n.some((a) => e.has(a)))
            continue;
          let r;
          i && (r = i.call(t, t._data, e), r && Rt(r) && Y(t._data, r)), s && r !== false && Qt.write(() => {
            t._connected && s.call(t, t._data, e);
          });
        }
      }
      function Pt(t) {
        return yi(ts, t, "resize");
      }
      function bi(t) {
        return yi(zo, t);
      }
      function fn(t) {
        return yi(sn, t);
      }
      function rs(t = {}) {
        return bi({ handler: function(e, i) {
          const { targets: s = this.$el, preload: n = 5 } = t;
          for (const r of R(et(s) ? s(this) : s))
            Z('[loading="lazy"]', r).slice(0, n - 1).forEach((a) => ri(a, "loading"));
          for (const r of e.filter(({ isIntersecting: a }) => a).map(({ target: a }) => a))
            i.unobserve(r);
        }, ...t });
      }
      function pn(t) {
        return yi((e, i) => en(i), t, "resize");
      }
      function wi(t) {
        return yi((e, i) => ({ disconnect: B(hc(e), "scroll", i, { passive: true }) }), t, "scroll");
      }
      function ir(t) {
        return { observe(e, i) {
          return { observe: W, unobserve: W, disconnect: B(e, Ot, i, { passive: true }) };
        }, handler(e) {
          if (!Dt(e))
            return;
          const i = Wt(e), s = "tagName" in e.target ? e.target : X(e.target);
          it(document, `${Gt} ${Ri} scroll`, (n) => {
            const { x: r, y: a } = Wt(n);
            (n.type !== "scroll" && s && r && Math.abs(i.x - r) > 100 || a && Math.abs(i.y - a) > 100) && setTimeout(() => {
              C(s, "swipe"), C(s, `swipe${cc(i.x, i.y, r, a)}`);
            });
          });
        }, ...t };
      }
      function yi(t, e, i) {
        return { observe: t, handler() {
          $i(this, i);
        }, ...e };
      }
      function cc(t, e, i, s) {
        return Math.abs(t - i) >= Math.abs(e - s) ? t - i > 0 ? "Left" : "Right" : e - s > 0 ? "Up" : "Down";
      }
      function hc(t) {
        return R(t).map((e) => {
          const { ownerDocument: i } = e, s = te(e, true);
          return s === i.scrollingElement ? i : s;
        });
      }
      var sr = { props: { margin: String, firstColumn: Boolean }, data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" }, observe: [fn({ options: { childList: true } }), fn({ options: { attributes: true, attributeFilter: ["style"] }, target: ({ $el: t }) => [t, ...G(t)] }), Pt({ target: ({ $el: t }) => [t, ...G(t)] })], update: { read() {
        return { rows: gn(G(this.$el)) };
      }, write({ rows: t }) {
        for (const e of t)
          for (const i of e)
            at(i, this.margin, t[0] !== e), at(i, this.firstColumn, e[ut ? e.length - 1 : 0] === i);
      }, events: ["resize"] } };
      function gn(t) {
        const e = [[]], i = t.some((s, n) => n && t[n - 1].offsetParent !== s.offsetParent);
        for (const s of t) {
          if (!lt(s))
            continue;
          const n = mn(s, i);
          for (let r = e.length - 1;r >= 0; r--) {
            const a = e[r];
            if (!a[0]) {
              a.push(s);
              break;
            }
            const c = mn(a[0], i);
            if (n.top >= c.bottom - 1 && n.top !== c.top) {
              e.push([s]);
              break;
            }
            if (n.bottom - 1 > c.top || n.top === c.top) {
              let d = a.length - 1;
              for (;d >= 0; d--) {
                const p = mn(a[d], i);
                if (n.left >= p.left)
                  break;
              }
              a.splice(d + 1, 0, s);
              break;
            }
            if (r === 0) {
              e.unshift([s]);
              break;
            }
          }
        }
        return e;
      }
      function mn(t, e = false) {
        let { offsetTop: i, offsetLeft: s, offsetHeight: n, offsetWidth: r } = t;
        return e && ([i, s] = gi(t)), { top: i, left: s, bottom: i + n, right: s + r };
      }
      async function uc(t, e, i) {
        await vn();
        let s = G(e);
        const n = s.map((S) => nr(S, true)), r = { ...g(e, ["height", "padding"]), display: "block" }, a = s.concat(e);
        await Promise.all(a.map(J.cancel)), g(a, "transitionProperty", "none"), await t(), s = s.concat(G(e).filter((S) => !w(s, S))), await Promise.resolve(), g(a, "transitionProperty", "");
        const c = _(e, "style"), d = g(e, ["height", "padding"]), [p, v] = dc(e, s, n), b = s.map((S) => ({ style: _(S, "style") }));
        s.forEach((S, I) => v[I] && g(S, v[I])), g(e, r), C(e, "scroll"), await vn();
        const y = s.map((S, I) => X(S) === e && J.start(S, p[I], i, "ease")).concat(J.start(e, d, i, "ease"));
        try {
          await Promise.all(y), s.forEach((S, I) => {
            _(S, b[I]), X(S) === e && g(S, "display", p[I].opacity === 0 ? "none" : "");
          }), _(e, "style", c);
        } catch {
          _(s, "style", ""), fc(e, r);
        }
      }
      function nr(t, e) {
        const i = g(t, "zIndex");
        return lt(t) ? { display: "", opacity: e ? g(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: i === "auto" ? Ut(t) : i, ...or(t) } : false;
      }
      function dc(t, e, i) {
        const s = e.map((r, a) => X(r) && (a in i) ? i[a] ? lt(r) ? or(r) : { opacity: 0 } : { opacity: lt(r) ? 1 : 0 } : false), n = s.map((r, a) => {
          const c = X(e[a]) === t && (i[a] || nr(e[a]));
          if (!c)
            return false;
          if (!r)
            delete c.opacity;
          else if (!("opacity" in r)) {
            const { opacity: d } = c;
            d % 1 ? r.opacity = 1 : delete c.opacity;
          }
          return c;
        });
        return [s, n];
      }
      function fc(t, e) {
        for (const i in e)
          g(t, i, "");
      }
      function or(t) {
        const { height: e, width: i } = E(t);
        return { height: e, width: i, transform: "", ...Zs(t), ...g(t, ["marginTop", "marginLeft"]) };
      }
      function vn() {
        return new Promise((t) => requestAnimationFrame(t));
      }
      const $n = "uk-transition-leave", bn = "uk-transition-enter";
      function rr(t, e, i, s = 0) {
        const n = as(e, true), r = { opacity: 1 }, a = { opacity: 0 }, c = (v) => () => n === as(e) ? v() : Promise.reject(), d = c(async () => {
          z(e, $n), await Promise.all(lr(e).map((v, b) => new Promise((y) => setTimeout(() => J.start(v, a, i / 2, "ease").then(y), b * s)))), U(e, $n);
        }), p = c(async () => {
          const v = yt(e);
          z(e, bn), t(), g(G(e), { opacity: 0 }), await vn();
          const b = G(e), y = yt(e);
          g(e, "alignContent", "flex-start"), yt(e, v);
          const S = lr(e);
          g(b, a);
          const I = S.map(async (L, F) => {
            await pc(F * s), await J.start(L, r, i / 2, "ease");
          });
          v !== y && I.push(J.start(e, { height: y }, i / 2 + S.length * s, "ease")), await Promise.all(I).then(() => {
            U(e, bn), n === as(e) && (g(e, { height: "", alignContent: "" }), g(b, { opacity: "" }), delete e.dataset.transition);
          });
        });
        return P(e, $n) ? ar(e).then(p) : P(e, bn) ? ar(e).then(d).then(p) : d().then(p);
      }
      function as(t, e) {
        return e && (t.dataset.transition = 1 + as(t)), Ft(t.dataset.transition) || 0;
      }
      function ar(t) {
        return Promise.all(G(t).filter(J.inProgress).map((e) => new Promise((i) => it(e, "transitionend transitioncanceled", i))));
      }
      function lr(t) {
        return gn(G(t)).flat().filter(lt);
      }
      function pc(t) {
        return new Promise((e) => setTimeout(e, t));
      }
      var cr = { props: { duration: Number, animation: Boolean }, data: { duration: 150, animation: "slide" }, methods: { animate(t, e = this.$el) {
        const i = this.animation;
        return (i === "fade" ? rr : i === "delayed-fade" ? (...n) => rr(...n, 40) : i ? uc : () => (t(), Promise.resolve()))(t, e, this.duration).catch(W);
      } } };
      const V = { TAB: 9, ESC: 27, SPACE: 32, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
      var gc = { mixins: [cr], args: "target", props: { target: String, selActive: Boolean }, data: { target: "", selActive: false, attrItem: "uk-filter-control", cls: "uk-active", duration: 250 }, computed: { children: ({ target: t }, e) => Z(`${t} > *`, e), toggles: ({ attrItem: t }, e) => Z(`[${t}],[data-${t}]`, e) }, watch: { toggles(t) {
        this.updateState();
        const e = Z(this.selActive, this.$el);
        for (const i of t) {
          this.selActive !== false && at(i, this.cls, w(e, i));
          const s = wc(i);
          st(s, "a") && _(s, "role", "button");
        }
      }, children(t, e) {
        e && this.updateState();
      } }, events: { name: "click keydown", delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`, handler(t) {
        t.type === "keydown" && t.keyCode !== V.SPACE || t.target.closest("a,button") && (t.preventDefault(), this.apply(t.current));
      } }, methods: { apply(t) {
        const e = this.getState(), i = ur(t, this.attrItem, this.getState());
        mc(e, i) || this.setState(i);
      }, getState() {
        return this.toggles.filter((t) => P(t, this.cls)).reduce((t, e) => ur(e, this.attrItem, t), { filter: { "": "" }, sort: [] });
      }, async setState(t, e = true) {
        t = { filter: { "": "" }, sort: [], ...t }, C(this.$el, "beforeFilter", [this, t]);
        for (const i of this.toggles)
          at(i, this.cls, $c(i, this.attrItem, t));
        await Promise.all(Z(this.target, this.$el).map((i) => {
          const s = () => vc(t, i, G(i));
          return e ? this.animate(s, i) : s();
        })), C(this.$el, "afterFilter", [this]);
      }, updateState() {
        Qt.write(() => this.setState(this.getState(), false));
      } } };
      function hr(t, e) {
        return ze(gt(t, e), ["filter"]);
      }
      function mc(t, e) {
        return ["filter", "sort"].every((i) => oi(t[i], e[i]));
      }
      function vc(t, e, i) {
        const s = Object.values(t.filter).join("");
        for (const a of i)
          g(a, "display", s && !q(a, s) ? "none" : "");
        const [n, r] = t.sort;
        if (n) {
          const a = bc(i, n, r);
          oi(a, i) || ct(e, a);
        }
      }
      function ur(t, e, i) {
        const { filter: s, group: n, sort: r, order: a = "asc" } = hr(t, e);
        return (s || pt(r)) && (n ? s ? (delete i.filter[""], i.filter[n] = s) : (delete i.filter[n], (zi(i.filter) || ("" in i.filter)) && (i.filter = { "": s || "" })) : i.filter = { "": s || "" }), pt(r) || (i.sort = [r, a]), i;
      }
      function $c(t, e, { filter: i = { "": "" }, sort: [s, n] }) {
        const { filter: r = "", group: a = "", sort: c, order: d = "asc" } = hr(t, e);
        return pt(c) ? a in i && r === i[a] || !r && a && !(a in i) && !i[""] : s === c && n === d;
      }
      function bc(t, e, i) {
        return [...t].sort((s, n) => gt(s, e).localeCompare(gt(n, e), undefined, { numeric: true }) * (i === "asc" || -1));
      }
      function wc(t) {
        return N("a,button", t) || t;
      }
      let wn;
      function dr(t) {
        const e = B(t, "touchstart", (s) => {
          if (s.targetTouches.length !== 1 || q(s.target, 'input[type="range"'))
            return;
          let n = Wt(s).y;
          const r = B(t, "touchmove", (a) => {
            const c = Wt(a).y;
            c !== n && (n = c, ge(a.target).some((d) => {
              if (!t.contains(d))
                return false;
              let { scrollHeight: p, clientHeight: v } = d;
              return v < p;
            }) || a.preventDefault());
          }, { passive: false });
          it(t, "scroll touchend touchcanel", r, { capture: true });
        }, { passive: true });
        if (wn)
          return e;
        wn = true;
        const { scrollingElement: i } = document;
        return g(i, { overflowY: CSS.supports("overflow", "clip") ? "clip" : "hidden", touchAction: "none", paddingRight: Ki(window) - i.clientWidth || "" }), () => {
          wn = false, e(), g(i, { overflowY: "", touchAction: "", paddingRight: "" });
        };
      }
      var ki = { props: { container: Boolean }, data: { container: true }, computed: { container({ container: t }) {
        return t === true && this.$container || t && N(t);
      } } }, ve = { props: { cls: Boolean, animation: "list", duration: Number, velocity: Number, origin: String, transition: String }, data: { cls: false, animation: [false], duration: 200, velocity: 0.2, origin: false, transition: "ease", clsEnter: "uk-togglable-enter", clsLeave: "uk-togglable-leave" }, computed: { hasAnimation: ({ animation: t }) => !!t[0], hasTransition: ({ animation: t }) => ["slide", "reveal"].some((e) => k(t[0], e)) }, methods: { async toggleElement(t, e, i) {
        try {
          return await Promise.all(R(t).map((s) => {
            const n = Te(e) ? e : !this.isToggled(s);
            if (!C(s, `before${n ? "show" : "hide"}`, [this]))
              return Promise.reject();
            const r = (et(i) ? i : i === false || !this.hasAnimation ? yc : this.hasTransition ? kc : xc)(s, n, this), a = n ? this.clsEnter : this.clsLeave;
            z(s, a), C(s, n ? "show" : "hide", [this]);
            const c = () => {
              U(s, a), C(s, n ? "shown" : "hidden", [this]);
            };
            return r ? r.then(c, () => (U(s, a), Promise.reject())) : c();
          })), true;
        } catch {
          return false;
        }
      }, isToggled(t = this.$el) {
        return t = rt(t), P(t, this.clsEnter) ? true : P(t, this.clsLeave) ? false : this.cls ? P(t, this.cls.split(" ")[0]) : lt(t);
      }, _toggle(t, e) {
        if (!t)
          return;
        e = !!e;
        let i;
        this.cls ? (i = w(this.cls, " ") || e !== P(t, this.cls), i && at(t, this.cls, w(this.cls, " ") ? undefined : e)) : (i = e === t.hidden, i && (t.hidden = !e)), Z("[autofocus]", t).some((s) => lt(s) ? s.focus() || true : s.blur()), i && C(t, "toggled", [e, this]);
      } } };
      function yc(t, e, { _toggle: i }) {
        return Kt.cancel(t), J.cancel(t), i(t, e);
      }
      async function kc(t, e, { animation: i, duration: s, velocity: n, transition: r, _toggle: a }) {
        var c;
        const [d = "reveal", p = "top"] = ((c = i[0]) == null ? undefined : c.split("-")) || [], v = [["left", "right"], ["top", "bottom"]], b = v[w(v[0], p) ? 0 : 1], y = b[1] === p, I = ["width", "height"][v.indexOf(b)], L = `margin-${b[0]}`, F = `margin-${p}`;
        let Nt = E(t)[I];
        const We = J.inProgress(t);
        await J.cancel(t), e && a(t, true);
        const qe = Object.fromEntries(["padding", "border", "width", "height", "minWidth", "minHeight", "overflowY", "overflowX", L, F].map((Pa) => [Pa, t.style[Pa]])), Ht = E(t), zn = H(g(t, L)), Ta = H(g(t, F)), Se = Ht[I] + Ta;
        !We && !e && (Nt += Ta);
        const [ys] = Xs(t, "<div>");
        g(ys, { boxSizing: "border-box", height: Ht.height, width: Ht.width, ...g(t, ["overflow", "padding", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderImage", F]) }), g(t, { padding: 0, border: 0, minWidth: 0, minHeight: 0, [F]: 0, width: Ht.width, height: Ht.height, overflow: "hidden", [I]: Nt });
        const Ia = Nt / Se;
        s = (n * Se + s) * (e ? 1 - Ia : Ia);
        const Oa = { [I]: e ? Se : 0 };
        y && (g(t, L, Se - Nt + zn), Oa[L] = e ? zn : Se + zn), !y ^ d === "reveal" && (g(ys, L, -Se + Nt), J.start(ys, { [L]: e ? 0 : -Se }, s, r));
        try {
          await J.start(t, Oa, s, r);
        } finally {
          g(t, qe), pi(ys.firstChild), e || a(t, false);
        }
      }
      function xc(t, e, i) {
        const { animation: s, duration: n, _toggle: r } = i;
        return e ? (r(t, true), Kt.in(t, s[0], n, i.origin)) : Kt.out(t, s[1] || s[0], n, i.origin).then(() => r(t, false));
      }
      const xt = [];
      var yn = { mixins: [kt, ki, ve], props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean, role: String }, data: { cls: "uk-open", escClose: true, bgClose: true, overlay: true, stack: false, role: "dialog" }, computed: { panel: ({ selPanel: t }, e) => N(t, e), transitionElement() {
        return this.panel;
      }, bgClose({ bgClose: t }) {
        return t && this.panel;
      } }, connected() {
        _(this.panel || this.$el, "role", this.role), this.overlay && _(this.panel || this.$el, "aria-modal", true);
      }, beforeDisconnect() {
        w(xt, this) && this.toggleElement(this.$el, false, false);
      }, events: [{ name: "click", delegate: ({ selClose: t }) => `${t},a[href*="#"]`, handler(t) {
        const { current: e, defaultPrevented: i } = t, { hash: s } = e;
        !i && s && Me(e) && !this.$el.contains(N(s)) ? this.hide() : q(e, this.selClose) && (t.preventDefault(), this.hide());
      } }, { name: "toggle", self: true, handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.isToggled() === w(xt, this) && this.toggle());
      } }, { name: "beforeshow", self: true, handler(t) {
        if (w(xt, this))
          return false;
        !this.stack && xt.length ? (Promise.all(xt.map((e) => e.hide())).then(this.show), t.preventDefault()) : xt.push(this);
      } }, { name: "show", self: true, handler() {
        this.stack && g(this.$el, "zIndex", H(g(this.$el, "zIndex")) + xt.length);
        const t = [this.overlay && _c(this), this.overlay && dr(this.$el), this.bgClose && Ac(this), this.escClose && Ec(this)];
        it(this.$el, "hidden", () => t.forEach((e) => e && e()), { self: true }), z(document.documentElement, this.clsPage);
      } }, { name: "shown", self: true, handler() {
        Ui(this.$el) || _(this.$el, "tabindex", "-1"), q(this.$el, ":focus-within") || this.$el.focus();
      } }, { name: "hidden", self: true, handler() {
        w(xt, this) && xt.splice(xt.indexOf(this), 1), g(this.$el, "zIndex", ""), xt.some((t) => t.clsPage === this.clsPage) || U(document.documentElement, this.clsPage);
      } }], methods: { toggle() {
        return this.isToggled() ? this.hide() : this.show();
      }, show() {
        return this.container && X(this.$el) !== this.container ? (ct(this.container, this.$el), new Promise((t) => requestAnimationFrame(() => this.show().then(t)))) : this.toggleElement(this.$el, true, fr);
      }, hide() {
        return this.toggleElement(this.$el, false, fr);
      } } };
      function fr(t, e, { transitionElement: i, _toggle: s }) {
        return new Promise((n, r) => it(t, "show hide", () => {
          var a;
          (a = t._reject) == null || a.call(t), t._reject = r, s(t, e);
          const c = it(i, "transitionstart", () => {
            it(i, "transitionend transitioncancel", n, { self: true }), clearTimeout(d);
          }, { self: true }), d = setTimeout(() => {
            c(), n();
          }, Sc(g(i, "transitionDuration")));
        })).then(() => delete t._reject);
      }
      function Sc(t) {
        return t ? D(t, "ms") ? H(t) : H(t) * 1000 : 0;
      }
      function _c(t) {
        return B(document, "focusin", (e) => {
          le(xt) === t && !t.$el.contains(e.target) && t.$el.focus();
        });
      }
      function Ac(t) {
        return B(document, Ot, ({ target: e }) => {
          le(xt) !== t || t.overlay && !t.$el.contains(e) || t.panel.contains(e) || it(document, `${Gt} ${Ri} scroll`, ({ defaultPrevented: i, type: s, target: n }) => {
            !i && s === Gt && e === n && t.hide();
          }, true);
        });
      }
      function Ec(t) {
        return B(document, "keydown", (e) => {
          e.keyCode === 27 && le(xt) === t && t.hide();
        });
      }
      var kn = { slide: { show(t) {
        return [{ transform: nt(t * -100) }, { transform: nt() }];
      }, percent(t) {
        return xi(t);
      }, translate(t, e) {
        return [{ transform: nt(e * -100 * t) }, { transform: nt(e * 100 * (1 - t)) }];
      } } };
      function xi(t) {
        return Math.abs(new DOMMatrix(g(t, "transform")).m41 / t.offsetWidth);
      }
      function nt(t = 0, e = "%") {
        return t += t ? e : "", `translate3d(${t}, 0, 0)`;
      }
      function Le(t) {
        return `scale3d(${t}, ${t}, 1)`;
      }
      function Cc(t, e, i, { animation: s, easing: n }) {
        const { percent: r, translate: a, show: c = W } = s, d = c(i), { promise: p, resolve: v } = pr();
        return { dir: i, show(b, y = 0, S) {
          const I = S ? "linear" : n;
          return b -= Math.round(b * vt(y, -1, 1)), this.translate(y), $e(e, "itemin", { percent: y, duration: b, timing: I, dir: i }), $e(t, "itemout", { percent: 1 - y, duration: b, timing: I, dir: i }), Promise.all([J.start(e, d[1], b, I), J.start(t, d[0], b, I)]).then(() => {
            this.reset(), v();
          }, W), p;
        }, cancel() {
          return J.cancel([e, t]);
        }, reset() {
          for (const b in d[0])
            g([e, t], b, "");
        }, async forward(b, y = this.percent()) {
          return await this.cancel(), this.show(b, y, true);
        }, translate(b) {
          this.reset();
          const y = a(b, i);
          g(e, y[1]), g(t, y[0]), $e(e, "itemtranslatein", { percent: b, dir: i }), $e(t, "itemtranslateout", { percent: 1 - b, dir: i });
        }, percent() {
          return r(t || e, e, i);
        }, getDistance() {
          return t == null ? undefined : t.offsetWidth;
        } };
      }
      function $e(t, e, i) {
        C(t, Be(e, false, false, i));
      }
      function pr() {
        let t;
        return { promise: new Promise((e) => t = e), resolve: t };
      }
      var ls = { props: { i18n: Object }, data: { i18n: null }, methods: { t(t, ...e) {
        var i, s, n;
        let r = 0;
        return ((n = ((i = this.i18n) == null ? undefined : i[t]) || ((s = this.$options.i18n) == null ? undefined : s[t])) == null ? undefined : n.replace(/%s/g, () => e[r++] || "")) || "";
      } } }, Tc = { props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean }, data: { autoplay: false, autoplayInterval: 7000, pauseOnHover: true }, connected() {
        _(this.list, "aria-live", this.autoplay ? "off" : "polite"), this.autoplay && this.startAutoplay();
      }, disconnected() {
        this.stopAutoplay();
      }, update() {
        _(this.slides, "tabindex", "-1");
      }, events: [{ name: "visibilitychange", el: () => document, filter: ({ autoplay: t }) => t, handler() {
        document.hidden ? this.stopAutoplay() : this.startAutoplay();
      } }], methods: { startAutoplay() {
        this.stopAutoplay(), this.interval = setInterval(() => {
          this.stack.length || this.draggable && q(this.$el, ":focus-within") && !q(this.$el, ":focus") || this.pauseOnHover && q(this.$el, ":hover") || this.show("next");
        }, this.autoplayInterval);
      }, stopAutoplay() {
        clearInterval(this.interval);
      } } };
      const Si = { passive: false, capture: true }, gr = { passive: true, capture: true }, Ic = "touchstart mousedown", xn = "touchmove mousemove", mr = "touchend touchcancel mouseup click input scroll", vr = (t) => t.preventDefault();
      var Oc = { props: { draggable: Boolean }, data: { draggable: true, threshold: 10 }, created() {
        for (const t of ["start", "move", "end"]) {
          const e = this[t];
          this[t] = (i) => {
            const s = Wt(i).x * (ut ? -1 : 1);
            this.prevPos = s === this.pos ? this.prevPos : this.pos, this.pos = s, e(i);
          };
        }
      }, events: [{ name: Ic, passive: true, delegate: ({ selList: t }) => `${t} > *`, handler(t) {
        !this.draggable || this.parallax || !Dt(t) && Pc(t.target) || t.target.closest(ai) || t.button > 0 || this.length < 2 || this.start(t);
      } }, { name: "dragstart", handler(t) {
        t.preventDefault();
      } }, { name: xn, el: ({ list: t }) => t, handler: W, ...Si }], methods: { start() {
        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = true, this.stack = []) : this.prevIndex = this.index, B(document, xn, this.move, Si), B(document, mr, this.end, gr), g(this.list, "userSelect", "none");
      }, move(t) {
        const e = this.pos - this.drag;
        if (e === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold)
          return;
        this.dragging || B(this.list, "click", vr, Si), t.cancelable && t.preventDefault(), this.dragging = true, this.dir = e < 0 ? 1 : -1;
        let { slides: i, prevIndex: s } = this, n = Math.abs(e), r = this.getIndex(s + this.dir), a = $r.call(this, s, r);
        for (;r !== s && n > a; )
          this.drag -= a * this.dir, s = r, n -= a, r = this.getIndex(s + this.dir), a = $r.call(this, s, r);
        this.percent = n / a;
        const c = i[s], d = i[r], p = this.index !== r, v = s === r;
        let b;
        for (const y of [this.index, this.prevIndex])
          w([r, s], y) || (C(i[y], "itemhidden", [this]), v && (b = true, this.prevIndex = s));
        (this.index === s && this.prevIndex !== s || b) && C(i[this.index], "itemshown", [this]), p && (this.prevIndex = s, this.index = r, v || (C(c, "beforeitemhide", [this]), C(c, "itemhide", [this])), C(d, "beforeitemshow", [this]), C(d, "itemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), c, !v && d);
      }, end() {
        if (Jt(document, xn, this.move, Si), Jt(document, mr, this.end, gr), this.dragging)
          if (this.dragging = null, this.index === this.prevIndex)
            this.percent = 1 - this.percent, this.dir *= -1, this._show(false, this.index, true), this._transitioner = null;
          else {
            const t = (ut ? this.dir * (ut ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
            this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", true);
          }
        setTimeout(() => Jt(this.list, "click", vr, Si)), g(this.list, { userSelect: "" }), this.drag = this.percent = null;
      } } };
      function $r(t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance() || this.slides[t].offsetWidth;
      }
      function Pc(t) {
        return g(t, "userSelect") !== "none" && M(t.childNodes).some((e) => e.nodeType === 3 && e.textContent.trim());
      }
      function Dc(t) {
        t._watches = [];
        for (const e of t.$options.watch || [])
          for (const [i, s] of Object.entries(e))
            br(t, s, i);
        t._initial = true;
      }
      function br(t, e, i) {
        t._watches.push({ name: i, ...Rt(e) ? e : { handler: e } });
      }
      function Mc(t, e) {
        for (const { name: i, handler: s, immediate: n = true } of t._watches)
          (t._initial && n || l(e, i) && !oi(e[i], t[i])) && s.call(t, t[i], e[i]);
        t._initial = false;
      }
      function Bc(t) {
        const { computed: e } = t.$options;
        if (t._computed = {}, e)
          for (const i in e)
            yr(t, i, e[i]);
      }
      const wr = { subtree: true, childList: true };
      function yr(t, e, i) {
        t._hasComputed = true, Object.defineProperty(t, e, { enumerable: true, get() {
          const { _computed: s, $props: n, $el: r } = t;
          if (!l(s, e) && (s[e] = (i.get || i).call(t, n, r), i.observe && t._computedObserver)) {
            const a = i.observe.call(t, n);
            t._computedObserver.observe(["~", "+", "-"].includes(a[0]) ? r.parentElement : r.getRootNode(), wr);
          }
          return s[e];
        }, set(s) {
          const { _computed: n } = t;
          n[e] = i.set ? i.set.call(t, s) : s, pt(n[e]) && delete n[e];
        } });
      }
      function Nc(t) {
        t._hasComputed && (ac(t, { read: () => Mc(t, kr(t)), events: ["resize", "computed"] }), t._computedObserver = sn(t.$el, () => $i(t, "computed"), wr), t._disconnect.push(() => {
          t._computedObserver.disconnect(), t._computedObserver = null, kr(t);
        }));
      }
      function kr(t) {
        const e = { ...t._computed };
        return t._computed = {}, e;
      }
      function Hc(t) {
        for (const e of t.$options.events || [])
          if (l(e, "handler"))
            xr(t, e);
          else
            for (const i in e)
              xr(t, e[i], i);
      }
      function xr(t, e, i) {
        let { name: s, el: n, handler: r, capture: a, passive: c, delegate: d, filter: p, self: v } = Rt(e) ? e : { name: i, handler: e };
        n = et(n) ? n.call(t, t) : n || t.$el, !(!n || O(n) && !n.length || p && !p.call(t, t)) && t._disconnect.push(B(n, s, d ? Q(d) ? d : d.call(t, t) : null, Q(r) ? t[r] : r.bind(t), { passive: c, capture: a, self: v }));
      }
      function zc(t) {
        for (const e of t.$options.observe || [])
          Lc(t, e);
      }
      function Lc(t, e) {
        let { observe: i, target: s = t.$el, handler: n, options: r, filter: a, args: c } = e;
        if (a && !a.call(t, t))
          return;
        const d = `_observe${t._disconnect.length}`;
        et(s) && !l(t, d) && yr(t, d, () => {
          const b = s.call(t, t);
          return O(b) ? R(b) : b;
        }), n = Q(n) ? t[n] : n.bind(t), et(r) && (r = r.call(t, t));
        const p = l(t, d) ? t[d] : s, v = i(p, n, r, c);
        et(s) && O(t[d]) && br(t, { handler: jc(v, r), immediate: false }, d), t._disconnect.push(() => v.disconnect());
      }
      function jc(t, e) {
        return (i, s) => {
          for (const n of s)
            w(i, n) || (t.unobserve ? t.unobserve(n) : t.observe && t.disconnect());
          for (const n of i)
            (!w(s, n) || !t.unobserve) && t.observe(n, e);
        };
      }
      function Rc(t) {
        const { $options: e, $props: i } = t, s = Sr(e);
        Y(i, s);
        const { computed: n, methods: r } = e;
        for (let a in i)
          a in s && (!n || !l(n, a)) && (!r || !l(r, a)) && (t[a] = i[a]);
      }
      function Sr(t) {
        const e = {}, { args: i = [], props: s = {}, el: n, id: r } = t;
        if (!s)
          return e;
        for (const c in s) {
          const d = u(c);
          let p = gt(n, d);
          pt(p) || (p = s[c] === Boolean && p === "" ? true : dn(s[c], p), !(d === "target" && k(p, "_")) && (e[c] = p));
        }
        const a = ze(gt(n, r), i);
        for (const c in a) {
          const d = m(c);
          pt(s[d]) || (e[d] = dn(s[d], a[c]));
        }
        return e;
      }
      const Fc = It((t, e) => {
        const i = Object.keys(e), s = i.concat(t).map((n) => [u(n), `data-${u(n)}`]).flat();
        return { attributes: i, filter: s };
      });
      function Uc(t) {
        const { $options: e, $props: i } = t, { id: s, props: n, el: r } = e;
        if (!n)
          return;
        const { attributes: a, filter: c } = Fc(s, n), d = new MutationObserver((p) => {
          const v = Sr(e);
          p.some(({ attributeName: b }) => {
            const y = b.replace("data-", "");
            return (y === s ? a : [m(y), m(b)]).some((S) => !pt(v[S]) && v[S] !== i[S]);
          }) && t.$reset();
        });
        d.observe(r, { attributes: true, attributeFilter: c }), t._disconnect.push(() => d.disconnect());
      }
      function je(t, e) {
        var i;
        (i = t.$options[e]) == null || i.forEach((s) => s.call(t));
      }
      function Sn(t) {
        t._connected || (Rc(t), je(t, "beforeConnect"), t._connected = true, t._disconnect = [], Hc(t), rc(t), Dc(t), zc(t), Uc(t), Nc(t), je(t, "connected"), $i(t));
      }
      function _n(t) {
        t._connected && (je(t, "beforeDisconnect"), t._disconnect.forEach((e) => e()), t._disconnect = null, je(t, "disconnected"), t._connected = false);
      }
      let Wc = 0;
      function _r(t, e = {}) {
        e.data = Yc(e, t.constructor.options), t.$options = vi(t.constructor.options, e, t), t.$props = {}, t._uid = Wc++, qc(t), Vc(t), Bc(t), je(t, "created"), e.el && t.$mount(e.el);
      }
      function qc(t) {
        const { data: e = {} } = t.$options;
        for (const i in e)
          t.$props[i] = t[i] = e[i];
      }
      function Vc(t) {
        const { methods: e } = t.$options;
        if (e)
          for (const i in e)
            t[i] = e[i].bind(t);
      }
      function Yc({ data: t = {} }, { args: e = [], props: i = {} }) {
        O(t) && (t = t.slice(0, e.length).reduce((s, n, r) => (Rt(n) ? Y(s, n) : s[e[r]] = n, s), {}));
        for (const s in t)
          pt(t[s]) ? delete t[s] : i[s] && (t[s] = dn(i[s], t[s]));
        return t;
      }
      const Ct = function(t) {
        _r(this, t);
      };
      Ct.util = Ql, Ct.options = {}, Ct.version = "3.21.11";
      const Gc = "uk-", be = "__uikit__", Re = {};
      function Ar(t, e) {
        var i, s;
        const n = Gc + u(t);
        if (!e)
          return Re[n].options || (Re[n] = Ct.extend(Re[n])), Re[n];
        t = m(t), Ct[t] = (a, c) => _i(t, a, c);
        const r = (i = e.options) != null ? i : { ...e };
        return r.id = n, r.name = t, (s = r.install) == null || s.call(r, Ct, r, t), Ct._initialized && !r.functional && requestAnimationFrame(() => _i(t, `[${n}],[data-${n}]`)), Re[n] = r;
      }
      function _i(t, e, i, ...s) {
        const n = Ar(t);
        return n.options.functional ? new n({ data: Rt(e) ? e : [e, i, ...s] }) : e ? Z(e).map(r)[0] : r();
        function r(a) {
          const c = cs(a, t);
          if (c)
            if (i)
              c.$destroy();
            else
              return c;
          return new n({ el: a, data: i });
        }
      }
      function Ai(t) {
        return (t == null ? undefined : t[be]) || {};
      }
      function cs(t, e) {
        return Ai(t)[e];
      }
      function Jc(t, e) {
        t[be] || (t[be] = {}), t[be][e.$options.name] = e;
      }
      function Kc(t, e) {
        var i;
        (i = t[be]) == null || delete i[e.$options.name], zi(t[be]) && delete t[be];
      }
      function Xc(t) {
        t.component = Ar, t.getComponents = Ai, t.getComponent = cs, t.update = Er, t.use = function(i) {
          if (!i.installed)
            return i.call(null, this), i.installed = true, this;
        }, t.mixin = function(i, s) {
          s = (Q(s) ? this.component(s) : s) || this, s.options = vi(s.options, i);
        }, t.extend = function(i) {
          i || (i = {});
          const s = this, n = function(a) {
            _r(this, a);
          };
          return n.prototype = Object.create(s.prototype), n.prototype.constructor = n, n.options = vi(s.options, i), n.super = s, n.extend = s.extend, n;
        };
        let e;
        Object.defineProperty(t, "container", { get() {
          return e || document.body;
        }, set(i) {
          e = N(i);
        } });
      }
      function Er(t, e) {
        t = t ? rt(t) : document.body;
        for (const i of hi(t).reverse())
          Cr(i, e);
        Zt(t, (i) => Cr(i, e));
      }
      function Cr(t, e) {
        const i = Ai(t);
        for (const s in i)
          $i(i[s], e);
      }
      function Zc(t) {
        t.prototype.$mount = function(e) {
          const i = this;
          Jc(e, i), i.$options.el = e, document.contains(e) && Sn(i);
        }, t.prototype.$destroy = function(e = false) {
          const i = this, { el: s } = i.$options;
          s && _n(i), je(i, "destroy"), Kc(s, i), e && _t(i.$el);
        }, t.prototype.$create = _i, t.prototype.$emit = function(e) {
          $i(this, e);
        }, t.prototype.$update = function(e = this.$el, i) {
          Er(e, i);
        }, t.prototype.$reset = function() {
          _n(this), Sn(this);
        }, t.prototype.$getComponent = cs, Object.defineProperties(t.prototype, { $el: { get() {
          return this.$options.el;
        } }, $container: Object.getOwnPropertyDescriptor(t, "container") });
      }
      let Qc = 1;
      function we(t, e = null) {
        return (e == null ? undefined : e.id) || `${t.$options.id}-${Qc++}`;
      }
      var th = { i18n: { next: "Next slide", previous: "Previous slide", slideX: "Slide %s", slideLabel: "%s of %s", role: "String" }, data: { selNav: false, role: "region" }, computed: { nav: ({ selNav: t }, e) => N(t, e), navChildren() {
        return G(this.nav);
      }, selNavItem: ({ attrItem: t }) => `[${t}],[data-${t}]`, navItems(t, e) {
        return Z(this.selNavItem, e);
      } }, watch: { nav(t, e) {
        _(t, "role", "tablist"), this.padNavitems(), e && this.$emit();
      }, list(t) {
        st(t, "ul") && _(t, "role", "presentation");
      }, navChildren(t) {
        _(t, "role", "presentation"), this.padNavitems(), this.updateNav();
      }, navItems(t) {
        for (const e of t) {
          const i = gt(e, this.attrItem), s = N("a,button", e) || e;
          let n, r = null;
          if (Bt(i)) {
            const a = Ft(i), c = this.slides[a];
            c && (c.id || (c.id = we(this, c)), r = c.id), n = this.t("slideX", H(i) + 1), _(s, "role", "tab");
          } else
            this.list && (this.list.id || (this.list.id = we(this, this.list)), r = this.list.id), n = this.t(i);
          _(s, { "aria-controls": r, "aria-label": _(s, "aria-label") || n });
        }
      }, slides(t) {
        t.forEach((e, i) => _(e, { role: this.nav ? "tabpanel" : "group", "aria-label": this.t("slideLabel", i + 1, this.length), "aria-roledescription": this.nav ? null : "slide" })), this.padNavitems();
      } }, connected() {
        _(this.$el, { role: this.role, "aria-roledescription": "carousel" });
      }, update: [{ write() {
        this.navItems.concat(this.nav).forEach((t) => t && (t.hidden = !this.maxIndex)), this.updateNav();
      }, events: ["resize"] }], events: [{ name: "click keydown", delegate: ({ selNavItem: t }) => t, filter: ({ parallax: t }) => !t, handler(t) {
        t.target.closest("a,button") && (t.type === "click" || t.keyCode === V.SPACE) && (t.preventDefault(), this.show(gt(t.current, this.attrItem)));
      } }, { name: "itemshow", handler: "updateNav" }, { name: "keydown", delegate: ({ selNavItem: t }) => t, filter: ({ parallax: t }) => !t, handler(t) {
        const { current: e, keyCode: i } = t, s = gt(e, this.attrItem);
        if (!Bt(s))
          return;
        let n = i === V.HOME ? 0 : i === V.END ? "last" : i === V.LEFT ? "previous" : i === V.RIGHT ? "next" : -1;
        ~n && (t.preventDefault(), this.show(n));
      } }], methods: { updateNav() {
        const t = this.getValidIndex();
        for (const e of this.navItems) {
          const i = gt(e, this.attrItem), s = N("a,button", e) || e;
          if (Bt(i)) {
            const r = Ft(i) === t;
            at(e, this.clsActive, r), at(s, "uk-disabled", this.parallax), _(s, { "aria-selected": r, tabindex: r && !this.parallax ? null : -1 }), r && s && q(X(e), ":focus-within") && s.focus();
          } else
            at(e, "uk-invisible", this.finite && (i === "previous" && t === 0 || i === "next" && t >= this.maxIndex));
        }
      }, padNavitems() {
        if (!this.nav)
          return;
        const t = [];
        for (let e = 0;e < this.length; e++) {
          const i = `${this.attrItem}="${e}"`;
          t[e] = this.navChildren.findLast((s) => s.matches(`[${i}]`)) || N(`<li ${i}><a href></a></li>`);
        }
        oi(t, this.navChildren) || Xt(this.nav, t);
      } } };
      const eh = "cubic-bezier(0.25, 0.46, 0.45, 0.94)", ih = "cubic-bezier(0.165, 0.84, 0.44, 1)";
      var Tr = { mixins: [Tc, Oc, th, ls], props: { clsActivated: String, easing: String, index: Number, finite: Boolean, velocity: Number }, data: () => ({ easing: "ease", finite: false, velocity: 1, index: 0, prevIndex: -1, stack: [], percent: 0, clsActive: "uk-active", clsActivated: "", clsEnter: "uk-slide-enter", clsLeave: "uk-slide-leave", clsSlideActive: "uk-slide-active", Transitioner: false, transitionOptions: {} }), connected() {
        this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [];
      }, disconnected() {
        U(this.slides, this.clsActive);
      }, computed: { duration: ({ velocity: t }, e) => Ir(e.offsetWidth / t), list: ({ selList: t }, e) => N(t, e), maxIndex() {
        return this.length - 1;
      }, slides() {
        return G(this.list);
      }, length() {
        return this.slides.length;
      } }, watch: { slides(t, e) {
        e && this.$emit();
      } }, events: { itemshow({ target: t }) {
        z(t, this.clsEnter, this.clsSlideActive);
      }, itemshown({ target: t }) {
        U(t, this.clsEnter);
      }, itemhide({ target: t }) {
        z(t, this.clsLeave);
      }, itemhidden({ target: t }) {
        U(t, this.clsLeave, this.clsSlideActive);
      } }, methods: { show(t, e = false) {
        var i;
        if (this.dragging || !this.length || this.parallax)
          return;
        const { stack: s } = this, n = e ? 0 : s.length, r = () => {
          s.splice(n, 1), s.length && this.show(s.shift(), true);
        };
        if (s[e ? "unshift" : "push"](t), !e && s.length > 1) {
          s.length === 2 && ((i = this._transitioner) == null || i.forward(Math.min(this.duration, 200)));
          return;
        }
        const a = this.getIndex(this.index), c = P(this.slides, this.clsActive) && this.slides[a], d = this.getIndex(t, this.index), p = this.slides[d];
        if (c === p) {
          r();
          return;
        }
        if (this.dir = sh(t, a), this.prevIndex = a, this.index = d, c && !C(c, "beforeitemhide", [this]) || !C(p, "beforeitemshow", [this, c])) {
          this.index = this.prevIndex, r();
          return;
        }
        const v = this._show(c, p, e).then(() => {
          c && C(c, "itemhidden", [this]), C(p, "itemshown", [this]), s.shift(), this._transitioner = null, s.length && requestAnimationFrame(() => s.length && this.show(s.shift(), true));
        });
        return c && C(c, "itemhide", [this]), C(p, "itemshow", [this]), v;
      }, getIndex(t = this.index, e = this.index) {
        return vt(St(t, this.slides, e, this.finite), 0, Math.max(0, this.maxIndex));
      }, getValidIndex(t = this.index, e = this.prevIndex) {
        return this.getIndex(t, e);
      }, async _show(t, e, i) {
        if (this._transitioner = this._getTransitioner(t, e, this.dir, { easing: i ? e.offsetWidth < 600 ? eh : ih : this.easing, ...this.transitionOptions }), !i && !t) {
          this._translate(1);
          return;
        }
        const { length: s } = this.stack;
        return this._transitioner[s > 1 ? "forward" : "show"](s > 1 ? Math.min(this.duration, 75 + 75 / (s - 1)) : this.duration, this.percent);
      }, _translate(t, e = this.prevIndex, i = this.index) {
        const s = this._getTransitioner(e === i ? false : e, i);
        return s.translate(t), s;
      }, _getTransitioner(t = this.prevIndex, e = this.index, i = this.dir || 1, s = this.transitionOptions) {
        return new this.Transitioner(ni(t) ? this.slides[t] : t, ni(e) ? this.slides[e] : e, i * (ut ? -1 : 1), s);
      } } };
      function sh(t, e) {
        return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1;
      }
      function Ir(t) {
        return 0.5 * t + 300;
      }
      var Or = { mixins: [Tr], props: { animation: String }, data: { animation: "slide", clsActivated: "uk-transition-active", Animations: kn, Transitioner: Cc }, computed: { animation({ animation: t, Animations: e }) {
        return { ...e[t] || e.slide, name: t };
      }, transitionOptions() {
        return { animation: this.animation };
      } }, observe: Pt(), events: { beforeitemshow({ target: t }) {
        z(t, this.clsActive);
      }, itemshown({ target: t }) {
        z(t, this.clsActivated);
      }, itemhidden({ target: t }) {
        U(t, this.clsActive, this.clsActivated);
      } } }, Pr = { ...kn, fade: { show() {
        return [{ opacity: 0 }, { opacity: 1 }];
      }, percent(t) {
        return 1 - g(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t }, { opacity: t }];
      } }, scale: { show() {
        return [{ opacity: 0, transform: Le(1 - 0.2) }, { opacity: 1, transform: Le(1) }];
      }, percent(t) {
        return 1 - g(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, transform: Le(1 - 0.2 * t) }, { opacity: t, transform: Le(1 - 0.2 + 0.2 * t) }];
      } } }, Dr = { mixins: [yn, Or], functional: true, props: { delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String }, data: () => ({ preload: 1, videoAutoplay: false, delayControls: 3000, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", selList: ".uk-lightbox-items", attrItem: "uk-lightbox-item", selClose: ".uk-close-large", selCaption: ".uk-lightbox-caption", pauseOnHover: false, velocity: 2, Animations: Pr, template: '<div class="uk-lightbox uk-overflow-hidden"> <div class="uk-lightbox-items"></div> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' }), created() {
        const t = N(this.template), e = N(this.selList, t);
        this.items.forEach(() => ct(e, "<div>"));
        const i = N("[uk-close]", t), s = this.t("close");
        i && s && (i.dataset.i18n = JSON.stringify({ label: s })), this.$mount(ct(this.container, t));
      }, events: [{ name: `${ji} ${Ot} keydown`, handler: "showControls" }, { name: "click", self: true, delegate: ({ selList: t }) => `${t} > *`, handler(t) {
        t.defaultPrevented || this.hide();
      } }, { name: "shown", self: true, handler: "showControls" }, { name: "hide", self: true, handler() {
        this.hideControls(), U(this.slides, this.clsActive), J.stop(this.slides);
      } }, { name: "hidden", self: true, handler() {
        this.$destroy(true);
      } }, { name: "keyup", el: () => document, handler({ keyCode: t }) {
        if (!this.isToggled(this.$el) || !this.draggable)
          return;
        let e = -1;
        t === V.LEFT ? e = "previous" : t === V.RIGHT ? e = "next" : t === V.HOME ? e = 0 : t === V.END && (e = "last"), ~e && this.show(e);
      } }, { name: "beforeitemshow", handler(t) {
        this.isToggled() || (this.draggable = false, t.preventDefault(), this.toggleElement(this.$el, true, false), this.animation = Pr.scale, U(t.target, this.clsActive), this.stack.splice(1, 0, this.index));
      } }, { name: "itemshow", handler() {
        Xt(N(this.selCaption, this.$el), this.getItem().caption || "");
        for (let t = -this.preload;t <= this.preload; t++)
          this.loadItem(this.index + t);
      } }, { name: "itemshown", handler() {
        this.draggable = this.$props.draggable;
      } }, { name: "itemload", async handler(t, e) {
        const { source: i, type: s, alt: n = "", poster: r, attrs: a = {} } = e;
        if (this.setItem(e, "<span uk-spinner></span>"), !i)
          return;
        let c;
        const d = { allowfullscreen: "", style: "max-width: 100%; box-sizing: border-box;", "uk-responsive": "", "uk-video": `${this.videoAutoplay}` };
        if (s === "image" || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
          const p = Ei("img", { src: i, alt: n, ...a });
          B(p, "load", () => this.setItem(e, p)), B(p, "error", () => this.setError(e));
        } else if (s === "video" || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
          const p = Ei("video", { src: i, poster: r, controls: "", playsinline: "", "uk-video": `${this.videoAutoplay}`, ...a });
          B(p, "loadedmetadata", () => this.setItem(e, p)), B(p, "error", () => this.setError(e));
        } else if (s === "iframe" || i.match(/\.(html|php)($|\?)/i))
          this.setItem(e, Ei("iframe", { src: i, allowfullscreen: "", class: "uk-lightbox-iframe", ...a }));
        else if (c = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?(?:[?&]v=|\/shorts\/)|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))
          this.setItem(e, Ei("iframe", { src: `https://www.youtube${c[1] || ""}.com/embed/${c[2]}${c[3] ? `?${c[3]}` : ""}`, width: 1920, height: 1080, ...d, ...a }));
        else if (c = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))
          try {
            const { height: p, width: v } = await (await fetch(`https://vimeo.com/api/oembed.json?maxwidth=1920&url=${encodeURI(i)}`, { credentials: "omit" })).json();
            this.setItem(e, Ei("iframe", { src: `https://player.vimeo.com/video/${c[1]}${c[2] ? `?${c[2]}` : ""}`, width: v, height: p, ...d, ...a }));
          } catch {
            this.setError(e);
          }
      } }], methods: { loadItem(t = this.index) {
        const e = this.getItem(t);
        this.getSlide(e).childElementCount || C(this.$el, "itemload", [e]);
      }, getItem(t = this.index) {
        return this.items[St(t, this.slides)];
      }, setItem(t, e) {
        C(this.$el, "itemloaded", [this, Xt(this.getSlide(t), e)]);
      }, getSlide(t) {
        return this.slides[this.items.indexOf(t)];
      }, setError(t) {
        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      }, showControls() {
        clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), z(this.$el, "uk-active", "uk-transition-active");
      }, hideControls() {
        U(this.$el, "uk-active", "uk-transition-active");
      } } };
      function Ei(t, e) {
        const i = fe(`<${t}>`);
        return _(i, e), i;
      }
      var nh = { install: oh, props: { toggle: String }, data: { toggle: "a" }, computed: { toggles: ({ toggle: t }, e) => Z(t, e) }, watch: { toggles(t) {
        this.hide();
        for (const e of t)
          st(e, "a") && _(e, "role", "button");
      } }, disconnected() {
        this.hide();
      }, events: { name: "click", delegate: ({ toggle: t }) => `${t}:not(.uk-disabled)`, handler(t) {
        t.defaultPrevented || (t.preventDefault(), this.show(t.current));
      } }, methods: { show(t) {
        const e = yo(this.toggles.map(Mr), "source");
        if (si(t)) {
          const { source: i } = Mr(t);
          t = T(e, ({ source: s }) => i === s);
        }
        return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items: e }), B(this.panel.$el, "hidden", () => this.panel = null), this.panel.show(t);
      }, hide() {
        var t;
        return (t = this.panel) == null ? undefined : t.hide();
      } } };
      function oh(t, e) {
        t.lightboxPanel || t.component("lightboxPanel", Dr), Y(e.props, t.component("lightboxPanel").options.props);
      }
      function Mr(t) {
        const e = {};
        for (const i of ["href", "caption", "type", "poster", "alt", "attrs"])
          e[i === "href" ? "source" : i] = gt(t, i);
        return e.attrs = ze(e.attrs), e;
      }
      var rh = { mixins: [ki], functional: true, args: ["message", "status"], data: { message: "", status: "", timeout: 5000, group: "", pos: "top-center", clsContainer: "uk-notification", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" }, install: ah, computed: { marginProp: ({ pos: t }) => `margin-${t.match(/[a-z]+(?=-)/)[0]}`, startProps() {
        return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
      } }, created() {
        const t = `${this.clsContainer}-${this.pos}`, e = `data-${this.clsContainer}-container`, i = N(`.${t}[${e}]`, this.container) || ct(this.container, `<div class="${this.clsContainer} ${t}" ${e}></div>`);
        this.$mount(ct(i, `<div class="${this.clsMsg}${this.status ? ` ${this.clsMsg}-${this.status}` : ""}" role="alert"> <a href class="${this.clsClose}" data-uk-close></a> <div>${this.message}</div> </div>`));
      }, async connected() {
        const t = H(g(this.$el, this.marginProp));
        await J.start(g(this.$el, this.startProps), { opacity: 1, [this.marginProp]: t }), this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      }, events: { click(t) {
        t.target.closest('a[href="#"],a[href=""]') && t.preventDefault(), this.close();
      }, [de]() {
        this.timer && clearTimeout(this.timer);
      }, [De]() {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      } }, methods: { async close(t) {
        const e = (i) => {
          const s = X(i);
          C(i, "close", [this]), _t(i), s != null && s.hasChildNodes() || _t(s);
        };
        this.timer && clearTimeout(this.timer), t || await J.start(this.$el, this.startProps), e(this.$el);
      } } };
      function ah(t) {
        t.notification.closeAll = function(e, i) {
          Zt(document.body, (s) => {
            const n = t.getComponent(s, "notification");
            n && (!e || e === n.group) && n.close(i);
          });
        };
      }
      var hs = { props: { media: Boolean }, data: { media: false }, connected() {
        const t = lh(this.media, this.$el);
        if (this.matchMedia = true, t) {
          this.mediaObj = window.matchMedia(t);
          const e = () => {
            this.matchMedia = this.mediaObj.matches, C(this.$el, Be("mediachange", false, true, [this.mediaObj]));
          };
          this.offMediaObj = B(this.mediaObj, "change", () => {
            e(), this.$emit("resize");
          }), e();
        }
      }, disconnected() {
        var t;
        (t = this.offMediaObj) == null || t.call(this);
      } };
      function lh(t, e) {
        if (Q(t)) {
          if (k(t, "@"))
            t = H(g(e, `--uk-breakpoint-${t.slice(1)}`));
          else if (isNaN(t))
            return t;
        }
        return t && Bt(t) ? `(min-width: ${t}px)` : "";
      }
      function Br(t) {
        return lt(t) ? Math.ceil(Math.max(0, ...Z("[stroke]", t).map((e) => {
          var i;
          return ((i = e.getTotalLength) == null ? undefined : i.call(e)) || 0;
        }))) : 0;
      }
      const us = { x: ds, y: ds, rotate: ds, scale: ds, color: An, backgroundColor: An, borderColor: An, blur: ye, hue: ye, fopacity: ye, grayscale: ye, invert: ye, saturate: ye, sepia: ye, opacity: hh, stroke: uh, bgx: zr, bgy: zr }, { keys: Nr } = Object;
      var Hr = { mixins: [hs], props: Ur(Nr(us), "list"), data: Ur(Nr(us), undefined), computed: { props(t, e) {
        const i = {};
        for (const n in t)
          n in us && !pt(t[n]) && (i[n] = t[n].slice());
        const s = {};
        for (const n in i)
          s[n] = us[n](n, e, i[n], i);
        return s;
      } }, events: { load() {
        this.$emit();
      } }, methods: { reset() {
        for (const t in this.getCss(0))
          g(this.$el, t, "");
      }, getCss(t) {
        const e = {};
        for (const i in this.props)
          this.props[i](e, vt(t));
        return e.willChange = Object.keys(e).map(Wi).join(","), e;
      } } };
      function ds(t, e, i) {
        let s = ps(i) || { x: "px", y: "px", rotate: "deg" }[t] || "", n;
        return t === "x" || t === "y" ? (t = `translate${x(t)}`, n = (r) => H(H(r).toFixed(s === "px" ? 0 : 6))) : t === "scale" && (s = "", n = (r) => {
          var a;
          return ps([r]) ? ft(r, "width", e, true) / e[`offset${(a = r.endsWith) != null && a.call(r, "vh") ? "Height" : "Width"}`] : H(r);
        }), i.length === 1 && i.unshift(t === "scale" ? 1 : 0), i = Fe(i, n), (r, a) => {
          r.transform = `${r.transform || ""} ${t}(${Ci(i, a)}${s})`;
        };
      }
      function An(t, e, i) {
        return i.length === 1 && i.unshift(Ti(e, t, "")), i = Fe(i, (s) => ch(e, s)), (s, n) => {
          const [r, a, c] = Fr(i, n), d = r.map((p, v) => (p += c * (a[v] - p), v === 3 ? H(p) : parseInt(p, 10))).join(",");
          s[t] = `rgba(${d})`;
        };
      }
      function ch(t, e) {
        return Ti(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(H);
      }
      function ye(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = ps(i) || { blur: "px", hue: "deg" }[t] || "%";
        return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, i = Fe(i), (n, r) => {
          const a = Ci(i, r);
          n.filter = `${n.filter || ""} ${t}(${a + s})`;
        };
      }
      function hh(t, e, i) {
        return i.length === 1 && i.unshift(Ti(e, t, "")), i = Fe(i), (s, n) => {
          s[t] = Ci(i, n);
        };
      }
      function uh(t, e, i) {
        i.length === 1 && i.unshift(0);
        const s = ps(i), n = Br(e);
        return i = Fe(i.reverse(), (r) => (r = H(r), s === "%" ? r * n / 100 : r)), i.some(([r]) => r) ? (g(e, "strokeDasharray", n), (r, a) => {
          r.strokeDashoffset = Ci(i, a);
        }) : W;
      }
      function zr(t, e, i, s) {
        i.length === 1 && i.unshift(0);
        const n = t === "bgy" ? "height" : "width";
        s[t] = Fe(i, (c) => ft(c, n, e));
        const r = ["bgx", "bgy"].filter((c) => (c in s));
        if (r.length === 2 && t === "bgx")
          return W;
        if (Ti(e, "backgroundSize", "") === "cover")
          return dh(t, e, i, s);
        const a = {};
        for (const c of r)
          a[c] = Lr(e, c);
        return jr(r, a, s);
      }
      function dh(t, e, i, s) {
        const n = fh(e);
        if (!n.width)
          return W;
        const r = { width: e.offsetWidth, height: e.offsetHeight }, a = ["bgx", "bgy"].filter((v) => (v in s)), c = {};
        for (const v of a) {
          const b = s[v].map(([F]) => F), y = Math.min(...b), S = Math.max(...b), I = b.indexOf(y) < b.indexOf(S), L = S - y;
          c[v] = `${(I ? -L : 0) - (I ? y : S)}px`, r[v === "bgy" ? "height" : "width"] += L;
        }
        const d = Ls.cover(n, r);
        for (const v of a) {
          const b = v === "bgy" ? "height" : "width", y = d[b] - r[b];
          c[v] = `max(${Lr(e, v)},-${y}px) + ${c[v]}`;
        }
        const p = jr(a, c, s);
        return (v, b) => {
          p(v, b), v.backgroundSize = `${d.width}px ${d.height}px`, v.backgroundRepeat = "no-repeat";
        };
      }
      function Lr(t, e) {
        return Ti(t, `background-position-${e.slice(-1)}`, "");
      }
      function jr(t, e, i) {
        return function(s, n) {
          for (const r of t) {
            const a = Ci(i[r], n);
            s[`background-position-${r.slice(-1)}`] = `calc(${e[r]} + ${a}px)`;
          }
        };
      }
      const Rr = {}, fs = {};
      function fh(t) {
        const e = g(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (fs[e])
          return fs[e];
        const i = new Image;
        return e && (i.src = e, !i.naturalWidth && !Rr[e]) ? (it(i, "error load", () => {
          fs[e] = En(i), C(t, Be("load", false));
        }), Rr[e] = true, En(i)) : fs[e] = En(i);
      }
      function En(t) {
        return { width: t.naturalWidth, height: t.naturalHeight };
      }
      function Fe(t, e = H) {
        const i = [], { length: s } = t;
        let n = 0;
        for (let r = 0;r < s; r++) {
          let [a, c] = Q(t[r]) ? t[r].trim().split(/ (?![^(]*\))/) : [t[r]];
          if (a = e(a), c = c ? H(c) / 100 : null, r === 0 ? c === null ? c = 0 : c && i.push([a, 0]) : r === s - 1 && (c === null ? c = 1 : c !== 1 && (i.push([a, c]), c = 1)), i.push([a, c]), c === null)
            n++;
          else if (n) {
            const d = i[r - n - 1][1], p = (c - d) / (n + 1);
            for (let v = n;v > 0; v--)
              i[r - v][1] = d + p * (n - v + 1);
            n = 0;
          }
        }
        return i;
      }
      function Fr(t, e) {
        const i = T(t.slice(1), ([, s]) => e <= s) + 1;
        return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])];
      }
      function Ci(t, e) {
        const [i, s, n] = Fr(t, e);
        return i + Math.abs(i - s) * n * (i < s ? 1 : -1);
      }
      const ph = /^-?\d+(?:\.\d+)?(\S+)?/;
      function ps(t, e) {
        var i;
        for (const s of t) {
          const n = (i = s.match) == null ? undefined : i.call(s, ph);
          if (n)
            return n[1];
        }
        return e;
      }
      function Ti(t, e, i) {
        const s = t.style[e], n = g(g(t, e, i), e);
        return t.style[e] = s, n;
      }
      function Ur(t, e) {
        return t.reduce((i, s) => (i[s] = e, i), {});
      }
      function Wr(t, e) {
        return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e);
      }
      var gh = { mixins: [Hr], props: { target: String, viewport: Number, easing: Number, start: String, end: String }, data: { target: false, viewport: 1, easing: 1, start: 0, end: 0 }, computed: { target: ({ target: t }, e) => qr(t && bt(t, e) || e), start({ start: t }) {
        return ft(t, "height", this.target, true);
      }, end({ end: t, viewport: e }) {
        return ft(t || (e = (1 - e) * 100) && `${e}vh+${e}%`, "height", this.target, true);
      } }, observe: [pn(), wi({ target: ({ target: t }) => t }), Pt({ target: ({ $el: t, target: e }) => [t, e, te(e, true)] })], update: { read({ percent: t }, e) {
        if (e.has("scroll") || (t = false), !lt(this.$el))
          return false;
        if (!this.matchMedia)
          return;
        const i = t;
        return t = Wr(ns(this.target, this.start, this.end), this.easing), { percent: t, style: i === t ? false : this.getCss(t) };
      }, write({ style: t }) {
        if (!this.matchMedia) {
          this.reset();
          return;
        }
        t && g(this.$el, t);
      }, events: ["scroll", "resize"] } };
      function qr(t) {
        return t ? "offsetTop" in t ? t : qr(X(t)) : document.documentElement;
      }
      var Vr = { props: { parallax: Boolean, parallaxTarget: Boolean, parallaxStart: String, parallaxEnd: String, parallaxEasing: Number }, data: { parallax: false, parallaxTarget: false, parallaxStart: 0, parallaxEnd: 0, parallaxEasing: 0 }, observe: [Pt({ target: ({ $el: t, parallaxTarget: e }) => [t, e], filter: ({ parallax: t }) => t }), wi({ filter: ({ parallax: t }) => t })], computed: { parallaxTarget({ parallaxTarget: t }, e) {
        return t && bt(t, e) || this.list;
      } }, update: { read() {
        if (!this.parallax)
          return false;
        const t = this.parallaxTarget;
        if (!t)
          return false;
        const e = ft(this.parallaxStart, "height", t, true), i = ft(this.parallaxEnd, "height", t, true), s = Wr(ns(t, e, i), this.parallaxEasing);
        return { parallax: this.getIndexAt(s) };
      }, write({ parallax: t }) {
        const [e, i] = t, s = this.getValidIndex(e + Math.ceil(i)), n = this.slides[e], r = this.slides[s], { triggerShow: a, triggerShown: c, triggerHide: d, triggerHidden: p } = mh(this);
        if (~this.prevIndex)
          for (const b of new Set([this.index, this.prevIndex]))
            w([s, e], b) || (d(this.slides[b]), p(this.slides[b]));
        const v = this.prevIndex !== e || this.index !== s;
        this.dir = 1, this.prevIndex = e, this.index = s, n !== r && d(n), a(r), v && c(n), this._translate(n === r ? 1 : i, n, r);
      }, events: ["scroll", "resize"] }, methods: { getIndexAt(t) {
        const e = t * (this.length - 1);
        return [Math.floor(e), e % 1];
      } } };
      function mh(t) {
        const { clsSlideActive: e, clsEnter: i, clsLeave: s } = t;
        return { triggerShow: n, triggerShown: r, triggerHide: a, triggerHidden: c };
        function n(d) {
          P(d, s) && (a(d), c(d)), P(d, e) || (C(d, "beforeitemshow", [t]), C(d, "itemshow", [t]));
        }
        function r(d) {
          P(d, i) && C(d, "itemshown", [t]);
        }
        function a(d) {
          P(d, e) || n(d), P(d, i) && r(d), P(d, s) || (C(d, "beforeitemhide", [t]), C(d, "itemhide", [t]));
        }
        function c(d) {
          P(d, s) && C(d, "itemhidden", [t]);
        }
      }
      var Yr = { update: { write() {
        if (this.stack.length || this.dragging || this.parallax)
          return;
        const t = this.getValidIndex();
        !~this.prevIndex || this.index !== t ? this.show(t) : this._translate(1);
      }, events: ["resize"] } }, Gr = { observe: rs({ target: ({ slides: t }) => t, targets: (t) => t.getAdjacentSlides() }), methods: { getAdjacentSlides() {
        return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
      } } };
      function vh(t, e, i, { center: s, easing: n, list: r }) {
        const a = t ? Ii(t, r, s) : Ii(e, r, s) + E(e).width * i, c = e ? Ii(e, r, s) : a + E(t).width * i * (ut ? -1 : 1), { promise: d, resolve: p } = pr();
        return { dir: i, show(v, b = 0, y) {
          const S = y ? "linear" : n;
          return v -= Math.round(v * vt(b, -1, 1)), g(r, "transitionProperty", "none"), this.translate(b), g(r, "transitionProperty", ""), b = t ? b : vt(b, 0, 1), $e(this.getItemIn(), "itemin", { percent: b, duration: v, timing: S, dir: i }), t && $e(this.getItemIn(true), "itemout", { percent: 1 - b, duration: v, timing: S, dir: i }), J.start(r, { transform: nt(-c * (ut ? -1 : 1), "px") }, v, S).then(p, W), d;
        }, cancel() {
          return J.cancel(r);
        }, reset() {
          g(r, "transform", "");
        }, async forward(v, b = this.percent()) {
          return await this.cancel(), this.show(v, b, true);
        }, translate(v) {
          if (v === this.percent())
            return;
          const b = this.getDistance() * i * (ut ? -1 : 1);
          g(r, "transform", nt(vt(-c + (b - b * v), -Ue(r), E(r).width) * (ut ? -1 : 1), "px"));
          const y = this.getActives(), S = this.getItemIn(), I = this.getItemIn(true);
          v = t ? vt(v, -1, 1) : 0;
          for (const L of G(r)) {
            const F = w(y, L), Nt = L === S, We = L === I, qe = Nt || !We && (F || i * (ut ? -1 : 1) === -1 ^ gs(L, r) > gs(t || e));
            $e(L, `itemtranslate${qe ? "in" : "out"}`, { dir: i, percent: We ? 1 - v : Nt ? v : F ? 1 : 0 });
          }
        }, percent() {
          return Math.abs((new DOMMatrix(g(r, "transform")).m41 * (ut ? -1 : 1) + a) / (c - a));
        }, getDistance() {
          return Math.abs(c - a);
        }, getItemIn(v = false) {
          let b = this.getActives(), y = Kr(r, Ii(e || t, r, s));
          if (v) {
            const S = b;
            b = y, y = S;
          }
          return y[T(y, (S) => !w(b, S))];
        }, getActives() {
          return Kr(r, Ii(t || e, r, s));
        } };
      }
      function Ii(t, e, i) {
        const s = gs(t, e);
        return i ? s - $h(t, e) : Math.min(s, Jr(e));
      }
      function Jr(t) {
        return Math.max(0, Ue(t) - E(t).width);
      }
      function Ue(t, e) {
        return ce(G(t).slice(0, e), (i) => E(i).width);
      }
      function $h(t, e) {
        return E(e).width / 2 - E(t).width / 2;
      }
      function gs(t, e) {
        return t && (Zs(t).left + (ut ? E(t).width - E(e).width : 0)) * (ut ? -1 : 1) || 0;
      }
      function Kr(t, e) {
        e -= 1;
        const i = E(t).width, s = e + i + 2;
        return G(t).filter((n) => {
          const r = gs(n, t), a = r + Math.min(E(n).width, i);
          return r >= e && a <= s;
        });
      }
      var bh = { mixins: [kt, Tr, Yr, Vr, Gr], props: { center: Boolean, sets: Boolean, active: String }, data: { center: false, sets: false, attrItem: "uk-slider-item", selList: ".uk-slider-items", selNav: ".uk-slider-nav", clsContainer: "uk-slider-container", active: "all", Transitioner: vh }, computed: { finite({ finite: t }) {
        return t || wh(this.list, this.center);
      }, maxIndex() {
        if (!this.finite || this.center && !this.sets)
          return this.length - 1;
        if (this.center)
          return le(this.sets);
        let t = 0;
        const e = Jr(this.list), i = T(this.slides, (s) => {
          if (t >= e - 0.005)
            return true;
          t += E(s).width;
        });
        return ~i ? i : this.length - 1;
      }, sets({ sets: t }) {
        if (!t || this.parallax)
          return;
        let e = 0;
        const i = [], s = E(this.list).width;
        for (let n = 0;n < this.length; n++) {
          const r = E(this.slides[n]).width;
          e + r > s && (e = 0), this.center ? e < s / 2 && e + r + E(this.slides[St(n + 1, this.slides)]).width / 2 > s / 2 && (i.push(n), e = s / 2 - r / 2) : e === 0 && i.push(Math.min(n, this.maxIndex)), e += r;
        }
        if (i.length)
          return i;
      }, transitionOptions() {
        return { center: this.center, list: this.list };
      }, slides() {
        return G(this.list).filter(lt);
      } }, connected() {
        at(this.$el, this.clsContainer, !N(`.${this.clsContainer}`, this.$el));
      }, observe: Pt({ target: ({ slides: t, $el: e }) => [e, ...t] }), update: { write() {
        for (const t of this.navItems) {
          const e = Ft(gt(t, this.attrItem));
          e !== false && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !w(this.sets, e));
        }
        this.reorder(), this.parallax || this._translate(1), this.updateActiveClasses();
      }, events: ["resize"] }, events: { beforeitemshow(t) {
        !this.dragging && this.sets && this.stack.length < 2 && !w(this.sets, this.index) && (this.index = this.getValidIndex());
        const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
        if (!this.dragging && e > 1) {
          for (let n = 0;n < e; n++)
            this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
          t.preventDefault();
          return;
        }
        const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex, s = Ue(this.list) / this.length;
        this.duration = Ir(s / this.velocity) * (E(this.slides[i]).width / s), this.reorder();
      }, itemshow() {
        ~this.prevIndex && z(this._getTransitioner().getItemIn(), this.clsActive), this.updateActiveClasses(this.prevIndex);
      }, itemshown() {
        this.updateActiveClasses();
      } }, methods: { reorder() {
        if (this.finite) {
          g(this.slides, "order", "");
          return;
        }
        const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        if (this.slides.forEach((n, r) => g(n, "order", this.dir > 0 && r < t ? 1 : this.dir < 0 && r >= this.index ? -1 : "")), !this.center || !this.length)
          return;
        const e = this.slides[t];
        let i = E(this.list).width / 2 - E(e).width / 2, s = 0;
        for (;i > 0; ) {
          const n = this.getIndex(--s + t, t), r = this.slides[n];
          g(r, "order", n > t ? -2 : -1), i -= E(r).width;
        }
      }, updateActiveClasses(t = this.index) {
        let e = this._getTransitioner(t).getActives();
        this.active !== "all" && (e = [this.slides[this.getValidIndex(t)]]);
        const i = [this.clsActive, !this.sets || w(this.sets, H(this.index)) ? this.clsActivated : ""];
        for (const s of this.slides) {
          const n = w(e, s);
          at(s, i, n), _(s, "aria-hidden", !n);
          for (const r of Z(li, s))
            l(r, "_tabindex") || (r._tabindex = _(r, "tabindex")), _(r, "tabindex", n ? r._tabindex : -1);
        }
      }, getValidIndex(t = this.index, e = this.prevIndex) {
        if (t = this.getIndex(t, e), !this.sets)
          return t;
        let i;
        do {
          if (w(this.sets, t))
            return t;
          i = t, t = this.getIndex(t + this.dir, e);
        } while (t !== i);
        return t;
      }, getAdjacentSlides() {
        const { width: t } = E(this.list), e = -t, i = t * 2, s = E(this.slides[this.index]).width, n = this.center ? t / 2 - s / 2 : 0, r = new Set;
        for (const a of [-1, 1]) {
          let c = n + (a > 0 ? s : 0), d = 0;
          do {
            const p = this.slides[this.getIndex(this.index + a + d++ * a)];
            c += E(p).width * a, r.add(p);
          } while (this.length > d && c > e && c < i);
        }
        return Array.from(r);
      }, getIndexAt(t) {
        let e = -1;
        const i = this.center ? Ue(this.list) - (E(this.slides[0]).width / 2 + E(le(this.slides)).width / 2) : Ue(this.list, this.maxIndex);
        let s = t * i, n = 0;
        do {
          const r = E(this.slides[++e]).width, a = this.center ? r / 2 + E(this.slides[e + 1]).width / 2 : r;
          n = s / a % 1, s -= a;
        } while (s >= 0 && e < this.maxIndex);
        return [e, n];
      } } };
      function wh(t, e) {
        if (!t || t.length < 2)
          return true;
        const { width: i } = E(t);
        if (!e)
          return Math.ceil(Ue(t)) < Math.trunc(i + yh(t));
        const s = G(t), n = Math.trunc(i / 2);
        for (const r in s) {
          const a = s[r], c = E(a).width, d = new Set([a]);
          let p = 0;
          for (const v of [-1, 1]) {
            let b = c / 2, y = 0;
            for (;b < n; ) {
              const S = s[St(+r + v + y++ * v, s)];
              if (d.has(S))
                return true;
              b += E(S).width, d.add(S);
            }
            p = Math.max(p, c / 2 + E(s[St(+r + v, s)]).width / 2 - (b - n));
          }
          if (Math.trunc(p) > ce(s.filter((v) => !d.has(v)), (v) => E(v).width))
            return true;
        }
        return false;
      }
      function yh(t) {
        return Math.max(0, ...G(t).map((e) => E(e).width));
      }
      var Xr = { mixins: [Hr], beforeConnect() {
        this.item = this.$el.closest(`.${this.$options.id.replace("parallax", "items")} > *`);
      }, disconnected() {
        this.item = null;
      }, events: [{ name: "itemin itemout", self: true, el: ({ item: t }) => t, handler({ type: t, detail: { percent: e, duration: i, timing: s, dir: n } }) {
        Qt.read(() => {
          if (!this.matchMedia)
            return;
          const r = this.getCss(Qr(t, n, e)), a = this.getCss(Zr(t) ? 0.5 : n > 0 ? 1 : 0);
          Qt.write(() => {
            g(this.$el, r), J.start(this.$el, a, i, s).catch(W);
          });
        });
      } }, { name: "transitioncanceled transitionend", self: true, el: ({ item: t }) => t, handler() {
        J.cancel(this.$el);
      } }, { name: "itemtranslatein itemtranslateout", self: true, el: ({ item: t }) => t, handler({ type: t, detail: { percent: e, dir: i } }) {
        Qt.read(() => {
          if (!this.matchMedia) {
            this.reset();
            return;
          }
          const s = this.getCss(Qr(t, i, e));
          Qt.write(() => g(this.$el, s));
        });
      } }] };
      function Zr(t) {
        return D(t, "in");
      }
      function Qr(t, e, i) {
        return i /= 2, Zr(t) ^ e < 0 ? i : 1 - i;
      }
      var kh = { ...kn, fade: { show() {
        return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
      }, percent(t) {
        return 1 - g(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
      } }, scale: { show() {
        return [{ opacity: 0, transform: Le(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
      }, percent(t) {
        return 1 - g(t, "opacity");
      }, translate(t) {
        return [{ opacity: 1 - t, transform: Le(1 + 0.5 * t), zIndex: 0 }, { zIndex: -1 }];
      } }, pull: { show(t) {
        return t < 0 ? [{ transform: nt(30), zIndex: -1 }, { transform: nt(), zIndex: 0 }] : [{ transform: nt(-100), zIndex: 0 }, { transform: nt(), zIndex: -1 }];
      }, percent(t, e, i) {
        return i < 0 ? 1 - xi(e) : xi(t);
      }, translate(t, e) {
        return e < 0 ? [{ transform: nt(30 * t), zIndex: -1 }, { transform: nt(-100 * (1 - t)), zIndex: 0 }] : [{ transform: nt(-t * 100), zIndex: 0 }, { transform: nt(30 * (1 - t)), zIndex: -1 }];
      } }, push: { show(t) {
        return t < 0 ? [{ transform: nt(100), zIndex: 0 }, { transform: nt(), zIndex: -1 }] : [{ transform: nt(-30), zIndex: -1 }, { transform: nt(), zIndex: 0 }];
      }, percent(t, e, i) {
        return i > 0 ? 1 - xi(e) : xi(t);
      }, translate(t, e) {
        return e < 0 ? [{ transform: nt(t * 100), zIndex: 0 }, { transform: nt(-30 * (1 - t)), zIndex: -1 }] : [{ transform: nt(-30 * t), zIndex: -1 }, { transform: nt(100 * (1 - t)), zIndex: 0 }];
      } } }, xh = { mixins: [kt, Or, Yr, Vr, Gr], props: { ratio: String, minHeight: String, maxHeight: String }, data: { ratio: "16:9", minHeight: undefined, maxHeight: undefined, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: kh }, watch: { list(t) {
        g(t, { aspectRatio: this.ratio ? this.ratio.replace(":", "/") : undefined, minHeight: this.minHeight, maxHeight: this.maxHeight, minWidth: "100%", maxWidth: "100%" });
      } }, methods: { getAdjacentSlides() {
        return [1, -1].map((t) => this.slides[this.getIndex(this.index + t)]);
      } } }, Sh = { mixins: [kt, cr], props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String }, data: { group: false, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: false, pos: {} }, events: { name: Ot, passive: false, handler: "init" }, computed: { target: (t, e) => (e.tBodies || [e])[0], items() {
        return G(this.target);
      }, isEmpty() {
        return !this.items.length;
      }, handles({ handle: t }, e) {
        return t ? Z(t, e) : this.items;
      } }, watch: { isEmpty(t) {
        at(this.target, this.clsEmpty, t);
      }, handles(t, e) {
        g(e, { touchAction: "", userSelect: "" }), g(t, { touchAction: "none", userSelect: "none" });
      } }, update: { write(t) {
        if (!this.drag || !X(this.placeholder))
          return;
        const { pos: { x: e, y: i }, origin: { offsetTop: s, offsetLeft: n }, placeholder: r } = this;
        g(this.drag, { top: i - s, left: e - n });
        const a = this.getSortable(document.elementFromPoint(e, i));
        if (!a)
          return;
        const { items: c } = a;
        if (c.some(J.inProgress))
          return;
        const d = Ch(c, { x: e, y: i });
        if (c.length && (!d || d === r))
          return;
        const p = this.getSortable(r), v = Th(a.target, d, r, e, i, a === p && t.moved !== d);
        v !== false && (v && r === v || (a !== p ? (p.remove(r), t.moved = d) : delete t.moved, a.insert(r, v), this.touched.add(a)));
      }, events: ["move"] }, methods: { init(t) {
        const { target: e, button: i, defaultPrevented: s } = t, [n] = this.items.filter((r) => r.contains(e));
        !n || s || i > 0 || Fi(e) || e.closest(`.${this.clsNoDrag}`) || this.handle && !e.closest(this.handle) || (t.preventDefault(), this.pos = Wt(t), this.touched = new Set([this]), this.placeholder = n, this.origin = { target: e, index: Ut(n), ...this.pos }, B(document, ji, this.move), B(document, Gt, this.end), this.threshold || this.start(t));
      }, start(t) {
        this.drag = Eh(this.$container, this.placeholder);
        const { left: e, top: i } = E(this.placeholder);
        Y(this.origin, { offsetLeft: this.pos.x - e, offsetTop: this.pos.y - i }), z(this.drag, this.clsDrag, this.clsCustom), z(this.placeholder, this.clsPlaceholder), z(this.items, this.clsItem), z(document.documentElement, this.clsDragState), C(this.$el, "start", [this, this.placeholder]), _h(this.pos), this.move(t);
      }, move: Oh(function(t) {
        Y(this.pos, Wt(t)), !this.drag && (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t), this.$emit("move");
      }), end() {
        if (Jt(document, ji, this.move), Jt(document, Gt, this.end), !this.drag)
          return;
        Ah();
        const t = this.getSortable(this.placeholder);
        this === t ? this.origin.index !== Ut(this.placeholder) && C(this.$el, "moved", [this, this.placeholder]) : (C(t.$el, "added", [t, this.placeholder]), C(this.$el, "removed", [this, this.placeholder])), C(this.$el, "stop", [this, this.placeholder]), _t(this.drag), this.drag = null;
        for (const { clsPlaceholder: e, clsItem: i } of this.touched)
          for (const s of this.touched)
            U(s.items, e, i);
        this.touched = null, U(document.documentElement, this.clsDragState);
      }, insert(t, e) {
        z(this.items, this.clsItem), e && e.previousElementSibling !== t ? this.animate(() => Vi(e, t)) : !e && this.target.lastElementChild !== t && this.animate(() => ct(this.target, t));
      }, remove(t) {
        this.target.contains(t) && this.animate(() => _t(t));
      }, getSortable(t) {
        do {
          const e = this.$getComponent(t, "sortable");
          if (e && (e === this || this.group !== false && e.group === this.group))
            return e;
        } while (t = X(t));
      } } };
      let ta;
      function _h(t) {
        let e = Date.now();
        ta = setInterval(() => {
          let { x: i, y: s } = t;
          s += document.scrollingElement.scrollTop;
          const n = (Date.now() - e) * 0.3;
          e = Date.now(), ge(document.elementFromPoint(i, t.y)).reverse().some((r) => {
            let { scrollTop: a, scrollHeight: c } = r;
            const { top: d, bottom: p, height: v } = At(r);
            if (d < s && d + 35 > s)
              a -= n;
            else if (p > s && p - 35 < s)
              a += n;
            else
              return;
            if (a > 0 && a < c - v)
              return r.scrollTop = a, true;
          });
        }, 15);
      }
      function Ah() {
        clearInterval(ta);
      }
      function Eh(t, e) {
        let i;
        if (st(e, "li", "tr")) {
          i = N("<div>"), ct(i, e.cloneNode(true).children);
          for (const s of e.getAttributeNames())
            _(i, s, e.getAttribute(s));
        } else
          i = e.cloneNode(true);
        return ct(t, i), g(i, "margin", "0", "important"), g(i, { boxSizing: "border-box", width: e.offsetWidth, height: e.offsetHeight, padding: g(e, "padding") }), yt(i.firstElementChild, yt(e.firstElementChild)), i;
      }
      function Ch(t, e) {
        return t[T(t, (i) => Li(e, E(i)))];
      }
      function Th(t, e, i, s, n, r) {
        if (!G(t).length)
          return;
        const a = E(e);
        if (!r)
          return Ih(t, i) || n < a.top + a.height / 2 ? e : e.nextElementSibling;
        const c = E(i), d = ea([a.top, a.bottom], [c.top, c.bottom]), [p, v, b, y] = d ? [s, "width", "left", "right"] : [n, "height", "top", "bottom"], S = c[v] < a[v] ? a[v] - c[v] : 0;
        return c[b] < a[b] ? S && p < a[b] + S ? false : e.nextElementSibling : S && p > a[y] - S ? false : e;
      }
      function Ih(t, e) {
        const i = G(t).length === 1;
        i && ct(t, e);
        const s = G(t), n = s.some((r, a) => {
          const c = E(r);
          return s.slice(a + 1).some((d) => {
            const p = E(d);
            return !ea([c.left, c.right], [p.left, p.right]);
          });
        });
        return i && _t(e), n;
      }
      function ea(t, e) {
        return t[1] > e[0] && e[1] > t[0];
      }
      function Oh(t) {
        let e;
        return function(...i) {
          e || (e = true, t.call(this, ...i), requestAnimationFrame(() => e = false));
        };
      }
      var ia = { props: { pos: String, offset: Boolean, flip: Boolean, shift: Boolean, inset: Boolean }, data: { pos: `bottom-${ut ? "right" : "left"}`, offset: false, flip: true, shift: true, inset: false }, connected() {
        this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), [this.dir, this.align] = this.pos, this.axis = w(["top", "bottom"], this.dir) ? "y" : "x";
      }, methods: { positionAt(t, e, i) {
        let s = [this.getPositionOffset(t), this.getShiftOffset(t)];
        const n = [this.flip && "flip", this.shift && "shift"], r = { element: [this.inset ? this.dir : Xi(this.dir), this.align], target: [this.dir, this.align] };
        if (this.axis === "y") {
          for (const d in r)
            r[d].reverse();
          s.reverse(), n.reverse();
        }
        const a = sa(t), c = E(t);
        g(t, { top: -c.height, left: -c.width }), Yo(t, e, { attach: r, offset: s, boundary: i, placement: n, viewportOffset: this.getViewportOffset(t) }), a();
      }, getPositionOffset(t = this.$el) {
        return ft(this.offset === false ? g(t, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", t) * (w(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
      }, getShiftOffset(t = this.$el) {
        return this.align === "center" ? 0 : ft(g(t, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", t) * (w(["left", "top"], this.align) ? 1 : -1);
      }, getViewportOffset(t) {
        return ft(g(t, "--uk-position-viewport-offset"));
      } } };
      function sa(t) {
        const e = te(t), { scrollTop: i } = e;
        return () => {
          i !== e.scrollTop && (e.scrollTop = i);
        };
      }
      var Ph = { mixins: [ki, ve, ia], data: { pos: "top", animation: ["uk-animation-scale-up"], duration: 100, cls: "uk-active" }, connected() {
        Dh(this.$el);
      }, disconnected() {
        this.hide();
      }, methods: { show() {
        if (this.isToggled(this.tooltip || null))
          return;
        const { delay: t = 0, title: e } = Bh(this.$options);
        if (!e)
          return;
        const i = _(this.$el, "title"), s = B(this.$el, ["blur", De], (r) => !Dt(r) && this.hide());
        this.reset = () => {
          _(this.$el, { title: i, "aria-describedby": null }), s();
        };
        const n = we(this);
        _(this.$el, { title: null, "aria-describedby": n }), clearTimeout(this.showTimer), this.showTimer = setTimeout(() => this._show(e, n), t);
      }, async hide() {
        var t;
        q(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && await this.toggleElement(this.tooltip, false, false), (t = this.reset) == null || t.call(this), _t(this.tooltip), this.tooltip = null);
      }, async _show(t, e) {
        this.tooltip = ct(this.container, `<div id="${e}" class="uk-${this.$options.name}" role="tooltip"> <div class="uk-${this.$options.name}-inner">${t}</div> </div>`), B(this.tooltip, "toggled", (i, s) => {
          if (!s)
            return;
          const n = () => this.positionAt(this.tooltip, this.$el);
          n();
          const [r, a] = Mh(this.tooltip, this.$el, this.pos);
          this.origin = this.axis === "y" ? `${Xi(r)}-${a}` : `${a}-${Xi(r)}`;
          const c = [it(document, `keydown ${Ot}`, this.hide, false, (d) => d.type === Ot && !this.$el.contains(d.target) || d.type === "keydown" && d.keyCode === V.ESC), B([document, ...me(this.$el)], "scroll", n, { passive: true })];
          it(this.tooltip, "hide", () => c.forEach((d) => d()), { self: true });
        }), await this.toggleElement(this.tooltip, true) || this.hide();
      } }, events: { [`focus ${de} ${Ot}`](t) {
        (!Dt(t) || t.type === Ot) && this.show();
      } } };
      function Dh(t) {
        Ui(t) || _(t, "tabindex", "0");
      }
      function Mh(t, e, [i, s]) {
        const n = j(t), r = j(e), a = [["left", "right"], ["top", "bottom"]];
        for (const d of a) {
          if (n[d[0]] >= r[d[1]]) {
            i = d[1];
            break;
          }
          if (n[d[1]] <= r[d[0]]) {
            i = d[0];
            break;
          }
        }
        return s = (w(a[0], i) ? a[1] : a[0]).find((d) => n[d] === r[d]) || "center", [i, s];
      }
      function Bh(t) {
        const { el: e, id: i, data: s } = t;
        return ["delay", "title"].reduce((n, r) => ({ [r]: gt(e, r), ...n }), { ...ze(gt(e, i), ["title"]), ...s });
      }
      var Nh = { mixins: [ls], i18n: { invalidMime: "Invalid File Type: %s", invalidName: "Invalid File Name: %s", invalidSize: "Invalid File Size: %s Kilobytes Max" }, props: { allow: String, clsDragover: String, concurrent: Number, maxSize: Number, method: String, mime: String, multiple: Boolean, name: String, params: Object, type: String, url: String }, data: { allow: false, clsDragover: "uk-dragover", concurrent: 1, maxSize: 0, method: "POST", mime: false, multiple: false, name: "files[]", params: {}, type: "", url: "", abort: W, beforeAll: W, beforeSend: W, complete: W, completeAll: W, error: W, fail: W, load: W, loadEnd: W, loadStart: W, progress: W }, events: { change(t) {
        q(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "");
      }, drop(t) {
        ms(t);
        const e = t.dataTransfer;
        e != null && e.files && (U(this.$el, this.clsDragover), this.upload(e.files));
      }, dragenter(t) {
        ms(t);
      }, dragover(t) {
        ms(t), z(this.$el, this.clsDragover);
      }, dragleave(t) {
        ms(t), U(this.$el, this.clsDragover);
      } }, methods: { async upload(t) {
        if (t = M(t), !t.length)
          return;
        C(this.$el, "upload", [t]);
        for (const s of t) {
          if (this.maxSize && this.maxSize * 1000 < s.size) {
            this.fail(this.t("invalidSize", this.maxSize));
            return;
          }
          if (this.allow && !na(this.allow, s.name)) {
            this.fail(this.t("invalidName", this.allow));
            return;
          }
          if (this.mime && !na(this.mime, s.type)) {
            this.fail(this.t("invalidMime", this.mime));
            return;
          }
        }
        this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
        const e = Hh(t, this.concurrent), i = async (s) => {
          const n = new FormData;
          s.forEach((r) => n.append(this.name, r));
          for (const r in this.params)
            n.append(r, this.params[r]);
          try {
            const r = await zh(this.url, { data: n, method: this.method, responseType: this.type, beforeSend: (a) => {
              const { xhr: c } = a;
              B(c.upload, "progress", this.progress);
              for (const d of ["loadStart", "load", "loadEnd", "abort"])
                B(c, d.toLowerCase(), this[d]);
              return this.beforeSend(a);
            } });
            this.complete(r), e.length ? await i(e.shift()) : this.completeAll(r);
          } catch (r) {
            this.error(r);
          }
        };
        await i(e.shift());
      } } };
      function na(t, e) {
        return e.match(new RegExp(`^${t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.")}\$`, "i"));
      }
      function Hh(t, e) {
        const i = [];
        for (let s = 0;s < t.length; s += e)
          i.push(t.slice(s, s + e));
        return i;
      }
      function ms(t) {
        t.preventDefault(), t.stopPropagation();
      }
      async function zh(t, e) {
        const i = { data: null, method: "GET", headers: {}, xhr: new XMLHttpRequest, beforeSend: W, responseType: "", ...e };
        return await i.beforeSend(i), Lh(t, i);
      }
      function Lh(t, e) {
        return new Promise((i, s) => {
          const { xhr: n } = e;
          for (const r in e)
            if (r in n)
              try {
                n[r] = e[r];
              } catch {
              }
          n.open(e.method.toUpperCase(), t);
          for (const r in e.headers)
            n.setRequestHeader(r, e.headers[r]);
          B(n, "load", () => {
            n.status === 0 || n.status >= 200 && n.status < 300 || n.status === 304 ? i(n) : s(Y(Error(n.statusText), { xhr: n, status: n.status }));
          }), B(n, "error", () => s(Y(Error("Network Error"), { xhr: n }))), B(n, "timeout", () => s(Y(Error("Network Timeout"), { xhr: n }))), n.send(e.data);
        });
      }
      var jh = Object.freeze({ __proto__: null, Countdown: ec, Filter: gc, Lightbox: nh, LightboxPanel: Dr, Notification: rh, Parallax: gh, Slider: bh, SliderParallax: Xr, Slideshow: xh, SlideshowParallax: Xr, Sortable: Sh, Tooltip: Ph, Upload: Nh });
      function Rh(t) {
        ue && window.MutationObserver && (document.body ? requestAnimationFrame(() => oa(t)) : new MutationObserver((e, i) => {
          document.body && (oa(t), i.disconnect());
        }).observe(document.documentElement, { childList: true }));
      }
      function oa(t) {
        C(document, "uikit:init", t), document.body && Zt(document.body, ra), new MutationObserver((e) => e.forEach(Fh)).observe(document, { subtree: true, childList: true }), new MutationObserver((e) => e.forEach(Uh)).observe(document, { subtree: true, attributes: true }), t._initialized = true;
      }
      function Fh({ addedNodes: t, removedNodes: e }) {
        for (const i of t)
          Zt(i, ra);
        for (const i of e)
          Zt(i, Wh);
      }
      function Uh({ target: t, attributeName: e }) {
        var i;
        const s = aa(e);
        s && (Yt(t, e) ? _i(s, t) : (i = cs(t, s)) == null || i.$destroy());
      }
      function ra(t) {
        const e = Ai(t);
        for (const i in e)
          Sn(e[i]);
        for (const i of t.getAttributeNames()) {
          const s = aa(i);
          s && _i(s, t);
        }
      }
      function Wh(t) {
        const e = Ai(t);
        for (const i in e)
          _n(e[i]);
      }
      function aa(t) {
        k(t, "data-") && (t = t.slice(5));
        const e = Re[t];
        return e && (e.options || e).name;
      }
      Xc(Ct), Zc(Ct);
      var la = { mixins: [kt, ve], props: { animation: Boolean, targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, offset: Number }, data: { targets: "> *", active: false, animation: true, collapsible: true, multiple: false, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", offset: 0 }, computed: { items: ({ targets: t }, e) => Z(t, e), toggles({ toggle: t }) {
        return this.items.map((e) => N(t, e));
      }, contents({ content: t }) {
        return this.items.map((e) => {
          var i;
          return ((i = e._wrapper) == null ? undefined : i.firstElementChild) || N(t, e);
        });
      } }, watch: { items(t, e) {
        if (e || P(t, this.clsOpen))
          return;
        const i = this.active !== false && t[Number(this.active)] || !this.collapsible && t[0];
        i && this.toggle(i, false);
      }, toggles() {
        this.$emit();
      }, contents(t) {
        for (const e of t) {
          const i = P(this.items.find((s) => s.contains(e)), this.clsOpen);
          vs(e, !i);
        }
        this.$emit();
      } }, observe: rs(), events: [{ name: "click keydown", delegate: ({ targets: t, $props: e }) => `${t} ${e.toggle}`, async handler(t) {
        var e;
        t.type === "keydown" && t.keyCode !== V.SPACE || (t.preventDefault(), (e = this._off) == null || e.call(this), this._off = Vh(t.target), await this.toggle(Ut(this.toggles, t.current)), this._off());
      } }, { name: "shown hidden", self: true, delegate: ({ targets: t }) => t, handler() {
        this.$emit();
      } }], update() {
        const t = ci(this.items, `.${this.clsOpen}`);
        for (const e in this.items) {
          const i = this.toggles[e], s = this.contents[e];
          if (!i || !s)
            continue;
          i.id = we(this, i), s.id = we(this, s);
          const n = w(t, this.items[e]);
          _(i, { role: st(i, "a") ? "button" : null, "aria-controls": s.id, "aria-expanded": n, "aria-disabled": !this.collapsible && t.length < 2 && n }), _(s, { role: "region", "aria-labelledby": i.id }), st(s, "ul") && _(G(s), "role", "presentation");
        }
      }, methods: { toggle(t, e) {
        t = this.items[St(t, this.items)];
        let i = [t];
        const s = ci(this.items, `.${this.clsOpen}`);
        if (!this.multiple && !w(s, i[0]) && (i = i.concat(s)), !(!this.collapsible && s.length < 2 && w(s, t)))
          return Promise.all(i.map((n) => this.toggleElement(n, !w(s, n), (r, a) => {
            if (at(r, this.clsOpen, a), e === false || !this.animation) {
              vs(N(this.content, r), !a);
              return;
            }
            return qh(r, a, this);
          })));
      } } };
      function vs(t, e) {
        t && (t.hidden = e);
      }
      async function qh(t, e, { content: i, duration: s, velocity: n, transition: r }) {
        var a;
        i = ((a = t._wrapper) == null ? undefined : a.firstElementChild) || N(i, t), t._wrapper || (t._wrapper = Ji(i, "<div>"));
        const c = t._wrapper;
        g(c, "overflow", "hidden");
        const d = H(g(c, "height"));
        await J.cancel(c), vs(i, false);
        const p = ce(["marginTop", "marginBottom"], (b) => g(i, b)) + E(i).height, v = d / p;
        s = (n * p + s) * (e ? 1 - v : v), g(c, "height", d), await J.start(c, { height: e ? p : 0 }, s, r), pi(i), delete t._wrapper, e || vs(i, true);
      }
      function Vh(t) {
        const e = te(t, true);
        let i;
        return function s() {
          i = requestAnimationFrame(() => {
            const { top: n } = E(t);
            n < 0 && (e.scrollTop += n), s();
          });
        }(), () => requestAnimationFrame(() => cancelAnimationFrame(i));
      }
      var Yh = { mixins: [kt, ve], args: "animation", props: { animation: Boolean, close: String }, data: { animation: true, selClose: ".uk-alert-close", duration: 150 }, events: { name: "click", delegate: ({ selClose: t }) => t, handler(t) {
        t.preventDefault(), this.close();
      } }, methods: { async close() {
        await this.toggleElement(this.$el, false, Gh), this.$destroy(true);
      } } };
      function Gh(t, e, { duration: i, transition: s, velocity: n }) {
        const r = H(g(t, "height"));
        return g(t, "height", r), J.start(t, { height: 0, marginTop: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0, borderTop: 0, borderBottom: 0, opacity: 0 }, n * r + i, s);
      }
      var ca = { args: "autoplay", props: { automute: Boolean, autoplay: Boolean }, data: { automute: false, autoplay: true }, beforeConnect() {
        this.autoplay === "inview" && !Yt(this.$el, "preload") && (this.$el.preload = "none"), st(this.$el, "iframe") && !Yt(this.$el, "allow") && (this.$el.allow = "autoplay"), this.autoplay === "hover" && (st(this.$el, "video") ? this.$el.tabindex = 0 : this.autoplay = true), this.automute && jo(this.$el);
      }, events: [{ name: `${de} focusin`, filter: ({ autoplay: t }) => w(t, "hover"), handler(t) {
        !Dt(t) || !Jh(this.$el) ? nn(this.$el) : es(this.$el);
      } }, { name: `${De} focusout`, filter: ({ autoplay: t }) => w(t, "hover"), handler(t) {
        Dt(t) || es(this.$el);
      } }], observe: [bi({ filter: ({ $el: t, autoplay: e }) => e && e !== "hover" && Ro(t), handler([{ isIntersecting: t }]) {
        document.fullscreenElement || (t ? nn(this.$el) : es(this.$el));
      }, args: { intersecting: false }, options: ({ $el: t, autoplay: e }) => ({ root: e === "inview" ? null : X(t) }) })] };
      function Jh(t) {
        return !t.paused && !t.ended;
      }
      var Kh = { mixins: [ca], props: { width: Number, height: Number }, data: { automute: true }, created() {
        this.useObjectFit = st(this.$el, "img", "video");
      }, observe: Pt({ target: ({ $el: t }) => ha(t) || X(t), filter: ({ useObjectFit: t }) => !t }), update: { read() {
        if (this.useObjectFit)
          return false;
        const { ratio: t, cover: e } = Ls, { $el: i, width: s, height: n } = this;
        let r = { width: s, height: n };
        if (!s || !n) {
          const p = { width: i.naturalWidth || i.videoWidth || i.clientWidth, height: i.naturalHeight || i.videoHeight || i.clientHeight };
          s ? r = t(p, "width", s) : n ? r = t(p, "height", n) : r = p;
        }
        const { offsetHeight: a, offsetWidth: c } = ha(i) || X(i), d = e(r, { width: c, height: a });
        return !d.width || !d.height ? false : d;
      }, write({ height: t, width: e }) {
        g(this.$el, { height: t, width: e });
      }, events: ["resize"] } };
      function ha(t) {
        for (;t = X(t); )
          if (g(t, "position") !== "static")
            return t;
      }
      let mt;
      var ua = { mixins: [ki, ia, ve], args: "pos", props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryX: Boolean, boundaryY: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, stretch: Boolean, delayShow: Number, delayHide: Number, autoUpdate: Boolean, clsDrop: String, animateOut: Boolean, bgScroll: Boolean, closeOnScroll: Boolean }, data: { mode: ["click", "hover"], toggle: "- *", boundary: false, boundaryX: false, boundaryY: false, target: false, targetX: false, targetY: false, stretch: false, delayShow: 0, delayHide: 800, autoUpdate: true, clsDrop: false, animateOut: false, bgScroll: true, animation: ["uk-animation-fade"], cls: "uk-open", container: false, closeOnScroll: false }, computed: { boundary({ boundary: t, boundaryX: e, boundaryY: i }, s) {
        return [bt(e || t, s) || window, bt(i || t, s) || window];
      }, target({ target: t, targetX: e, targetY: i }, s) {
        return e || (e = t || this.targetEl), i || (i = t || this.targetEl), [e === true ? window : bt(e, s), i === true ? window : bt(i, s)];
      } }, created() {
        this.tracker = new Ho;
      }, beforeConnect() {
        this.clsDrop = this.$props.clsDrop || this.$options.id;
      }, connected() {
        z(this.$el, "uk-drop", this.clsDrop), this.toggle && !this.targetEl && (this.targetEl = Zh(this)), this._style = Ns(this.$el.style, ["width", "height"]);
      }, disconnected() {
        this.isActive() && (this.hide(false), mt = null), g(this.$el, this._style);
      }, events: [{ name: "click", delegate: () => ".uk-drop-close", handler(t) {
        t.preventDefault(), this.hide(false);
      } }, { name: "click", delegate: () => 'a[href*="#"]', handler({ defaultPrevented: t, current: e }) {
        const { hash: i } = e;
        !t && i && Me(e) && !this.$el.contains(N(i)) && this.hide(false);
      } }, { name: "beforescroll", handler() {
        this.hide(false);
      } }, { name: "toggle", self: true, handler(t, e) {
        t.preventDefault(), this.isToggled() ? this.hide(false) : this.show(e == null ? undefined : e.$el, false);
      } }, { name: "toggleshow", self: true, handler(t, e) {
        t.preventDefault(), this.show(e == null ? undefined : e.$el);
      } }, { name: "togglehide", self: true, handler(t) {
        t.preventDefault(), q(this.$el, ":focus,:hover") || this.hide();
      } }, { name: `${de} focusin`, filter: ({ mode: t }) => w(t, "hover"), handler(t) {
        Dt(t) || this.clearTimers();
      } }, { name: `${De} focusout`, filter: ({ mode: t }) => w(t, "hover"), handler(t) {
        !Dt(t) && t.relatedTarget && this.hide();
      } }, { name: "toggled", self: true, handler(t, e) {
        e && (this.clearTimers(), this.position());
      } }, { name: "show", self: true, handler() {
        mt = this, this.tracker.init(), _(this.targetEl, "aria-expanded", true);
        const t = [Qh(this), tu(this), iu(this), this.autoUpdate && da(this), this.closeOnScroll && eu(this)];
        it(this.$el, "hide", () => t.forEach((e) => e && e()), { self: true }), this.bgScroll || it(this.$el, "hidden", dr(this.$el), { self: true });
      } }, { name: "beforehide", self: true, handler: "clearTimers" }, { name: "hide", handler({ target: t }) {
        if (this.$el !== t) {
          mt = mt === null && this.$el.contains(t) && this.isToggled() ? this : mt;
          return;
        }
        mt = this.isActive() ? null : mt, this.tracker.cancel(), _(this.targetEl, "aria-expanded", null);
      } }], update: { write() {
        this.isToggled() && !P(this.$el, this.clsEnter) && this.position();
      } }, methods: { show(t = this.targetEl, e = true) {
        if (this.isToggled() && t && this.targetEl && t !== this.targetEl && this.hide(false, false), this.targetEl = t, this.clearTimers(), !this.isActive()) {
          if (mt) {
            if (e && mt.isDelaying()) {
              this.showTimer = setTimeout(() => q(t, ":hover") && this.show(), 10);
              return;
            }
            let i;
            for (;mt && i !== mt && !mt.$el.contains(this.$el); )
              i = mt, mt.hide(false, false);
          }
          this.container && X(this.$el) !== this.container && ct(this.container, this.$el), this.showTimer = setTimeout(() => this.toggleElement(this.$el, true), e && this.delayShow || 0);
        }
      }, hide(t = true, e = true) {
        const i = () => this.toggleElement(this.$el, false, this.animateOut && e);
        this.clearTimers(), this.isDelayedHide = t, t && this.isDelaying() ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i();
      }, clearTimers() {
        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null;
      }, isActive() {
        return mt === this;
      }, isDelaying() {
        return [this.$el, ...Z(".uk-drop", this.$el)].some((t) => this.tracker.movesTo(t));
      }, position() {
        const t = sa(this.$el);
        U(this.$el, "uk-drop-stack"), g(this.$el, this._style), this.$el.hidden = true;
        const e = this.target.map((r) => Xh(this.$el, r)), i = this.getViewportOffset(this.$el), s = [[0, ["x", "width", "left", "right"]], [1, ["y", "height", "top", "bottom"]]];
        for (const [r, [a, c]] of s)
          this.axis !== a && w([a, true], this.stretch) && g(this.$el, { [c]: Math.min(j(this.boundary[r])[c], e[r][c] - 2 * i), [`overflow-${a}`]: "auto" });
        const n = e[0].width - 2 * i;
        this.$el.hidden = false, g(this.$el, "maxWidth", ""), this.$el.offsetWidth > n && z(this.$el, "uk-drop-stack"), g(this.$el, "maxWidth", n), this.positionAt(this.$el, this.target, this.boundary);
        for (const [r, [a, c, d, p]] of s)
          if (this.axis === a && w([a, true], this.stretch)) {
            const v = Math.abs(this.getPositionOffset()), b = j(this.target[r]), y = j(this.$el);
            g(this.$el, { [c]: (b[d] > y[d] ? b[this.inset ? p : d] - Math.max(j(this.boundary[r])[d], e[r][d] + i) : Math.min(j(this.boundary[r])[p], e[r][p] - i) - b[this.inset ? d : p]) - v, [`overflow-${a}`]: "auto" }), this.positionAt(this.$el, this.target, this.boundary);
          }
        t();
      } } };
      function Xh(t, e) {
        return At(me(e).find((i) => i.contains(t)));
      }
      function Zh(t) {
        const { $el: e } = t.$create("toggle", bt(t.toggle, t.$el), { target: t.$el, mode: t.mode });
        return _(e, "aria-haspopup", true), e;
      }
      function Qh(t) {
        const e = () => t.$emit(), i = [en(e), ts(me(t.$el).concat(t.target), e)];
        return () => i.map((s) => s.disconnect());
      }
      function da(t, e = () => t.$emit()) {
        return B([document, ...me(t.$el)], "scroll", e, { passive: true });
      }
      function tu(t) {
        return B(document, "keydown", (e) => {
          e.keyCode === V.ESC && t.hide(false);
        });
      }
      function eu(t) {
        return da(t, () => t.hide(false));
      }
      function iu(t) {
        return B(document, Ot, ({ target: e }) => {
          t.$el.contains(e) || it(document, `${Gt} ${Ri} scroll`, ({ defaultPrevented: i, type: s, target: n }) => {
            var r;
            !i && s === Gt && e === n && !((r = t.targetEl) != null && r.contains(e)) && t.hide(false);
          }, true);
        });
      }
      var fa = { mixins: [kt, ki], props: { align: String, clsDrop: String, boundary: Boolean, dropbar: Boolean, dropbarAnchor: Boolean, duration: Number, mode: Boolean, offset: Boolean, stretch: Boolean, delayShow: Boolean, delayHide: Boolean, target: Boolean, targetX: Boolean, targetY: Boolean, animation: Boolean, animateOut: Boolean, closeOnScroll: Boolean }, data: { align: ut ? "right" : "left", clsDrop: "uk-dropdown", clsDropbar: "uk-dropnav-dropbar", boundary: true, dropbar: false, dropbarAnchor: false, duration: 200, container: false, selNavItem: "> li > a, > ul > li > a" }, computed: { dropbarAnchor: ({ dropbarAnchor: t }, e) => bt(t, e) || e, dropbar({ dropbar: t }) {
        return t ? (t = this._dropbar || bt(t, this.$el) || N(`+ .${this.clsDropbar}`, this.$el), t || (this._dropbar = N("<div></div>"))) : null;
      }, dropContainer(t, e) {
        return this.container || e;
      }, dropdowns({ clsDrop: t }, e) {
        var i;
        const s = Z(`.${t}`, e);
        if (this.dropContainer !== e)
          for (const n of Z(`.${t}`, this.dropContainer)) {
            const r = (i = this.getDropdown(n)) == null ? undefined : i.targetEl;
            !w(s, n) && r && this.$el.contains(r) && s.push(n);
          }
        return s;
      }, items({ selNavItem: t }, e) {
        return Z(t, e);
      } }, watch: { dropbar(t) {
        z(t, "uk-dropbar", "uk-dropbar-top", this.clsDropbar, `uk-${this.$options.name}-dropbar`);
      }, dropdowns() {
        this.initializeDropdowns();
      } }, connected() {
        this.initializeDropdowns();
      }, disconnected() {
        _t(this._dropbar), delete this._dropbar;
      }, events: [{ name: "mouseover focusin", delegate: ({ selNavItem: t }) => t, handler({ current: t }) {
        const e = this.getActive();
        e && w(e.mode, "hover") && e.targetEl && !t.contains(e.targetEl) && !e.isDelaying() && e.hide(false);
      } }, { name: "keydown", self: true, delegate: ({ selNavItem: t }) => t, handler(t) {
        var e;
        const { current: i, keyCode: s } = t, n = this.getActive();
        s === V.DOWN && (n == null ? undefined : n.targetEl) === i && (t.preventDefault(), (e = N(li, n.$el)) == null || e.focus()), pa(t, this.items, n);
      } }, { name: "keydown", el: ({ dropContainer: t }) => t, delegate: ({ clsDrop: t }) => `.${t}`, handler(t) {
        var e;
        const { current: i, keyCode: s, target: n } = t;
        if (Fi(n) || !w(this.dropdowns, i))
          return;
        const r = this.getActive();
        let a = -1;
        if (s === V.HOME ? a = 0 : s === V.END ? a = "last" : s === V.UP ? a = "previous" : s === V.DOWN ? a = "next" : s === V.ESC && ((e = r.targetEl) == null || e.focus()), ~a) {
          t.preventDefault();
          const c = Z(li, i);
          c[St(a, c, T(c, (d) => q(d, ":focus")))].focus();
        }
        pa(t, this.items, r);
      } }, { name: "mouseleave", el: ({ dropbar: t }) => t, filter: ({ dropbar: t }) => t, handler() {
        const t = this.getActive();
        t && w(t.mode, "hover") && !this.dropdowns.some((e) => q(e, ":hover")) && t.hide();
      } }, { name: "beforeshow", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        this.isDropbarDrop(t) && (this.dropbar.previousElementSibling !== this.dropbarAnchor && Yi(this.dropbarAnchor, this.dropbar), z(t, `${this.clsDrop}-dropbar`));
      } }, { name: "show", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        if (!this.isDropbarDrop(t))
          return;
        const e = this.getDropdown(t), i = () => {
          const s = Math.max(...hi(t, `.${this.clsDrop}`).concat(t).map((n) => j(n).bottom));
          j(this.dropbar, { left: j(this.dropbar).left, top: this.getDropbarOffset(e.getPositionOffset()) }), this.transitionTo(s - j(this.dropbar).top + H(g(t, "marginBottom")), t);
        };
        this._observer = ts([e.$el, ...e.target], i), i();
      } }, { name: "beforehide", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler(t) {
        const e = this.getActive();
        q(this.dropbar, ":hover") && e.$el === t.target && this.isDropbarDrop(e.$el) && w(e.mode, "hover") && e.isDelayedHide && !this.items.some((i) => e.targetEl !== i && q(i, ":focus")) && t.preventDefault();
      } }, { name: "hide", el: ({ dropContainer: t }) => t, filter: ({ dropbar: t }) => t, handler({ target: t }) {
        var e;
        if (!this.isDropbarDrop(t))
          return;
        (e = this._observer) == null || e.disconnect();
        const i = this.getActive();
        (!i || i.$el === t) && this.transitionTo(0);
      } }], methods: { getActive() {
        var t;
        return w(this.dropdowns, (t = mt) == null ? undefined : t.$el) && mt;
      }, async transitionTo(t, e) {
        const { dropbar: i } = this, s = yt(i);
        if (e = s < t && e, await J.cancel([e, i]), e) {
          const n = j(e).top - j(i).top - s;
          n > 0 && g(e, "transitionDelay", `${n / t * this.duration}ms`);
        }
        g(e, "clipPath", `polygon(0 0,100% 0,100% ${s}px,0 ${s}px)`), yt(i, s), await Promise.all([J.start(i, { height: t }, this.duration), J.start(e, { clipPath: `polygon(0 0,100% 0,100% ${t}px,0 ${t}px)` }, this.duration).finally(() => g(e, { clipPath: "", transitionDelay: "" }))]).catch(W);
      }, getDropdown(t) {
        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown");
      }, isDropbarDrop(t) {
        return w(this.dropdowns, t) && P(t, this.clsDrop);
      }, getDropbarOffset(t) {
        const { $el: e, target: i, targetY: s } = this, { top: n, height: r } = j(bt(s || i || e, e));
        return n + r + t;
      }, initializeDropdowns() {
        this.$create("drop", this.dropdowns.filter((t) => !this.getDropdown(t)), { ...this.$props, flip: false, shift: true, pos: `bottom-${this.align}`, boundary: this.boundary === true ? this.$el : this.boundary });
      } } };
      function pa(t, e, i) {
        var s, n, r;
        const { current: a, keyCode: c } = t;
        let d = -1;
        c === V.HOME ? d = 0 : c === V.END ? d = "last" : c === V.LEFT ? d = "previous" : c === V.RIGHT ? d = "next" : c === V.TAB && ((s = i.targetEl) == null || s.focus(), (n = i.hide) == null || n.call(i, false)), ~d && (t.preventDefault(), (r = i.hide) == null || r.call(i, false), e[St(d, e, e.indexOf(i.targetEl || a))].focus());
      }
      var su = { mixins: [kt], args: "target", props: { target: Boolean }, data: { target: false }, computed: { input: (t, e) => N(ai, e), state() {
        return this.input.nextElementSibling;
      }, target({ target: t }, e) {
        return t && (t === true && X(this.input) === e && this.input.nextElementSibling || N(t, e));
      } }, update() {
        var t;
        const { target: e, input: i } = this;
        if (!e)
          return;
        let s;
        const n = Fi(e) ? "value" : "textContent", r = e[n], a = (t = i.files) != null && t[0] ? i.files[0].name : q(i, "select") && (s = Z("option", i).filter((c) => c.selected)[0]) ? s.textContent : i.value;
        r !== a && (e[n] = a);
      }, events: [{ name: "change", handler() {
        this.$emit();
      } }, { name: "reset", el: ({ $el: t }) => t.closest("form"), handler() {
        this.$emit();
      } }] }, nu = { extends: sr, mixins: [kt], name: "grid", props: { masonry: Boolean, parallax: String, parallaxStart: String, parallaxEnd: String, parallaxJustify: Boolean }, data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: false, parallax: 0, parallaxStart: 0, parallaxEnd: 0, parallaxJustify: false }, connected() {
        this.masonry && z(this.$el, "uk-flex-top", "uk-flex-wrap-top");
      }, observe: wi({ filter: ({ parallax: t, parallaxJustify: e }) => t || e }), update: [{ write({ rows: t }) {
        at(this.$el, this.clsStack, !t.some((e) => e.length > 1));
      }, events: ["resize"] }, { read(t) {
        const { rows: e } = t;
        let { masonry: i, parallax: s, parallaxJustify: n, margin: r } = this;
        if (s = Math.max(0, ft(s)), !(i || s || n) || ga(e) || e[0].some((I, L) => e.some((F) => F[L] && F[L].offsetWidth !== I.offsetWidth)))
          return t.translates = t.scrollColumns = false;
        let a = ru(e, r), c, d;
        i ? [c, d] = ou(e, a, i === "next") : c = au(e);
        const p = c.map((I) => ce(I, "offsetHeight") + a * (I.length - 1)), v = Math.max(0, ...p);
        let b, y, S;
        return (s || n) && (b = p.map((I, L) => n ? v - I + s : s / (L % 2 || 8)), n || (s = Math.max(...p.map((I, L) => I + b[L] - v))), y = ft(this.parallaxStart, "height", this.$el, true), S = ft(this.parallaxEnd, "height", this.$el, true)), { columns: c, translates: d, scrollColumns: b, parallaxStart: y, parallaxEnd: S, padding: s, height: d ? v : "" };
      }, write({ height: t, padding: e }) {
        g(this.$el, "paddingBottom", e || ""), t !== false && g(this.$el, "height", t);
      }, events: ["resize"] }, { read({ rows: t, scrollColumns: e, parallaxStart: i, parallaxEnd: s }) {
        return { scrolled: e && !ga(t) ? ns(this.$el, i, s) : false };
      }, write({ columns: t, scrolled: e, scrollColumns: i, translates: s }) {
        !e && !s || t.forEach((n, r) => n.forEach((a, c) => {
          let [d, p] = s && s[r][c] || [0, 0];
          e && (p += e * i[r]), g(a, "transform", `translate(${d}px, ${p}px)`);
        }));
      }, events: ["scroll", "resize"] }] };
      function ga(t) {
        return t.flat().some((e) => g(e, "position") === "absolute");
      }
      function ou(t, e, i) {
        const s = [], n = [], r = Array(t[0].length).fill(0);
        let a = 0;
        for (let c of t) {
          ut && (c = c.reverse());
          let d = 0;
          for (const p in c) {
            const { offsetWidth: v, offsetHeight: b } = c[p], y = i ? p : r.indexOf(Math.min(...r));
            Cn(s, y, c[p]), Cn(n, y, [(y - p) * v * (ut ? -1 : 1), r[y] - a]), r[y] += b + e, d = Math.max(d, b);
          }
          a += d + e;
        }
        return [s, n];
      }
      function ru(t, e) {
        const i = t.flat().find((s) => P(s, e));
        return H(i ? g(i, "marginTop") : g(t[0][0], "paddingLeft"));
      }
      function au(t) {
        const e = [];
        for (const i of t)
          for (const s in i)
            Cn(e, s, i[s]);
        return e;
      }
      function Cn(t, e, i) {
        t[e] || (t[e] = []), t[e].push(i);
      }
      var lu = { args: "target", props: { target: String, row: Boolean }, data: { target: "> *", row: true }, computed: { elements: ({ target: t }, e) => Z(t, e) }, observe: Pt({ target: ({ $el: t, elements: e }) => e.reduce((i, s) => i.concat(s, ...s.children), [t]) }), events: { name: "loadingdone", el: () => document.fonts, handler() {
        this.$emit("resize");
      } }, update: { read() {
        return { rows: (this.row ? gn(this.elements) : [this.elements]).map(cu) };
      }, write({ rows: t }) {
        for (const { heights: e, elements: i } of t)
          i.forEach((s, n) => g(s, "minHeight", e[n]));
      }, events: ["resize"] } };
      function cu(t) {
        if (t.length < 2)
          return { heights: [""], elements: t };
        let e = t.map(hu);
        const i = Math.max(...e);
        return { heights: t.map((s, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i), elements: t };
      }
      function hu(t) {
        const e = Ns(t.style, ["display", "minHeight"]);
        lt(t) || g(t, "display", "block", "important"), g(t, "minHeight", "");
        const i = E(t).height - Ne(t, "height", "content-box");
        return g(t, e), i;
      }
      var uu = { args: "target", props: { target: String }, data: { target: "" }, computed: { target: { get: ({ target: t }, e) => bt(t, e), observe: ({ target: t }) => t } }, observe: Pt({ target: ({ target: t }) => t }), update: { read() {
        return this.target ? { height: this.target.offsetHeight } : false;
      }, write({ height: t }) {
        g(this.$el, { minHeight: t });
      }, events: ["resize"] } }, du = { props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number }, data: { expand: false, offsetTop: false, offsetBottom: false, minHeight: 0 }, observe: [pn({ filter: ({ expand: t }) => t }), Pt({ target: ({ $el: t }) => ge(t) })], update: { read() {
        if (!lt(this.$el))
          return false;
        let t = "";
        const e = Ne(this.$el, "height", "content-box"), { body: i, scrollingElement: s } = document, n = te(this.$el), { height: r } = At(n === i ? s : n), a = s === n || i === n;
        if (t = `calc(${a ? "100vh" : `${r}px`}`, this.expand) {
          const c = E(n).height - E(this.$el).height;
          t += ` - ${c}px`;
        } else {
          if (this.offsetTop)
            if (a) {
              const c = this.offsetTop === true ? this.$el : bt(this.offsetTop, this.$el), { top: d } = j(c);
              t += d > 0 && d < r / 2 ? ` - ${d}px` : "";
            } else
              t += ` - ${Ne(n, "height", g(n, "boxSizing"))}px`;
          this.offsetBottom === true ? t += ` - ${E(this.$el.nextElementSibling).height}px` : Bt(this.offsetBottom) ? t += ` - ${this.offsetBottom}vh` : this.offsetBottom && D(this.offsetBottom, "px") ? t += ` - ${H(this.offsetBottom)}px` : Q(this.offsetBottom) && (t += ` - ${E(bt(this.offsetBottom, this.$el)).height}px`);
        }
        return t += `${e ? ` - ${e}px` : ""})`, { minHeight: t };
      }, write({ minHeight: t }) {
        g(this.$el, "minHeight", `max(${this.minHeight || 0}px, ${t})`);
      }, events: ["resize"] } }, fu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-x" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>', pu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-x" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>', gu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', mu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-plus" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>', vu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', $u = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', bu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>', wu = '<svg width="16" height="16" viewBox="0 0 20 20"><style>.uk-navbar-toggle-icon svg&gt;[class*=&quot;line-&quot;]{transition:0.2s ease-in-out;transition-property:transform, opacity;transform-origin:center;opacity:1}.uk-navbar-toggle-icon svg&gt;.line-3{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{opacity:1}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-2{transform:rotate(45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-3{transform:rotate(-45deg)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1,.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{opacity:0}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-1{transform:translateY(6px) scaleX(0)}.uk-navbar-toggle-animate[aria-expanded=&quot;true&quot;] svg&gt;.line-4{transform:translateY(-6px) scaleX(0)}</style><rect width="20" height="2" y="3" class="line-1" rx="1"/><rect width="20" height="2" y="9" class="line-2" rx="1"/><rect width="20" height="2" y="9" class="line-3" rx="1"/><rect width="20" height="2" y="15" class="line-4" rx="1"/></svg>', yu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-plus" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>', ku = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-right" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>', xu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-chevron-left" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>', ma = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', Su = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', _u = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', Au = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>', Eu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>', Cu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-left" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>', Tu = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-arrow-left" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>', Iu = '<svg width="30" height="30" viewBox="0 0 30 30"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>', Ou = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="lucide lucide-circle-chevron-up" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="m8 14 4-4 4 4"/></svg>', va = { args: "src", props: { width: Number, height: Number, ratio: Number }, data: { ratio: 1 }, connected() {
        this.svg = this.getSvg().then((t) => {
          if (!this._connected)
            return;
          const e = Pu(t, this.$el);
          return this.svgEl && e !== this.svgEl && _t(this.svgEl), Du.call(this, e, t), this.svgEl = e;
        }, W);
      }, disconnected() {
        this.svg.then((t) => {
          this._connected || (Rs(this.$el) && (this.$el.hidden = false), _t(t), this.svgEl = null);
        }), this.svg = null;
      }, methods: { async getSvg() {
      } } };
      function Pu(t, e) {
        if (Rs(e) || st(e, "canvas")) {
          e.hidden = true;
          const s = e.nextElementSibling;
          return $a(t, s) ? s : Yi(e, t);
        }
        const i = e.lastElementChild;
        return $a(t, i) ? i : ct(e, t);
      }
      function $a(t, e) {
        return st(t, "svg") && st(e, "svg") && t.innerHTML === e.innerHTML;
      }
      function Du(t, e) {
        const i = ["width", "height"];
        let s = i.map((r) => this[r]);
        s.some((r) => r) || (s = i.map((r) => _(e, r)));
        const n = _(e, "viewBox");
        n && !s.some((r) => r) && (s = n.split(" ").slice(2)), s.forEach((r, a) => _(t, i[a], H(r) * this.ratio || null));
      }
      var Mu = { mixins: [va], args: "src", props: { src: String, icon: String, attributes: "list", strokeAnimation: Boolean }, data: { strokeAnimation: false }, observe: [fn({ async handler() {
        const t = await this.svg;
        t && ba.call(this, t);
      }, options: { attributes: true, attributeFilter: ["id", "class", "style"] } })], async connected() {
        w(this.src, "#") && ([this.src, this.icon] = this.src.split("#"));
        const t = await this.svg;
        t && (ba.call(this, t), this.strokeAnimation && zu(t));
      }, methods: { async getSvg() {
        return st(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy" && await new Promise((t) => it(this.$el, "load", t)), Nu(await Bu(this.src), this.icon) || Promise.reject("SVG not found.");
      } } };
      function ba(t) {
        const { $el: e } = this;
        z(t, _(e, "class"), "uk-svg");
        for (let i = 0;i < e.style.length; i++) {
          const s = e.style[i];
          g(t, s, g(e, s));
        }
        for (const i in this.attributes) {
          const [s, n] = this.attributes[i].split(":", 2);
          _(t, s, n);
        }
        this.$el.id || ri(t, "id");
      }
      const Bu = It(async (t) => t ? k(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject());
      function Nu(t, e) {
        return e && w(t, "<symbol") && (t = Hu(t)[e] || t), ya(t);
      }
      const wa = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g, Hu = It(function(t) {
        const e = {};
        wa.lastIndex = 0;
        let i;
        for (;i = wa.exec(t); )
          e[i[3]] = `<svg ${i[1]}svg>`;
        return e;
      });
      function zu(t) {
        const e = Br(t);
        e && g(t, "--uk-animation-stroke", e);
      }
      function ya(t) {
        const e = document.createElement("template");
        return e.innerHTML = t, e.content.firstElementChild;
      }
      const $s = { spinner: Iu, totop: Ou, marker: mu, "close-icon": fu, "close-large": pu, "drop-parent-icon": gu, "nav-parent-icon": $u, "nav-parent-icon-large": vu, "navbar-parent-icon": bu, "navbar-toggle-icon": wu, "overlay-icon": yu, "pagination-next": ku, "pagination-previous": xu, "search-icon": ma, "search-medium": _u, "search-large": Su, "search-toggle-icon": ma, "slidenav-next": Eu, "slidenav-next-large": Au, "slidenav-previous": Tu, "slidenav-previous-large": Cu }, Tn = { install: Gu, mixins: [va], args: "icon", props: { icon: String }, isIcon: true, beforeConnect() {
        z(this.$el, "uk-icon");
      }, methods: { async getSvg() {
        const t = Ku(this.icon);
        if (!t)
          throw "Icon not found.";
        return t;
      } } }, ke = { args: false, extends: Tn, data: (t) => ({ icon: u(t.constructor.options.name) }), beforeConnect() {
        z(this.$el, this.$options.id);
      } }, Lu = { extends: ke, beforeConnect() {
        const t = this.$props.icon;
        this.icon = this.$el.closest(".uk-nav-primary") ? `${t}-large` : t;
      } }, ju = { extends: ke, mixins: [ls], i18n: { toggle: "Open Search", submit: "Submit Search" }, beforeConnect() {
        const t = P(this.$el, "uk-search-toggle") || P(this.$el, "uk-navbar-toggle");
        if (this.icon = t ? "search-toggle-icon" : P(this.$el, "uk-search-icon") && this.$el.closest(".uk-search-large") ? "search-large" : this.$el.closest(".uk-search-medium") ? "search-medium" : this.$props.icon, !Yt(this.$el, "aria-label"))
          if (t) {
            const e = this.t("toggle");
            _(this.$el, "aria-label", e);
          } else {
            const e = this.$el.closest("a,button");
            if (e) {
              const i = this.t("submit");
              _(e, "aria-label", i);
            }
          }
      } }, Ru = { extends: ke, beforeConnect() {
        _(this.$el, "role", "status");
      }, methods: { async getSvg() {
        const t = await Tn.methods.getSvg.call(this);
        return this.ratio !== 1 && g(N("circle", t), "strokeWidth", 1 / this.ratio), t;
      } } }, xe = { extends: ke, mixins: [ls], beforeConnect() {
        const t = this.$el.closest("a,button");
        _(t, "role", this.role !== null && st(t, "a") ? "button" : this.role);
        const e = this.t("label");
        e && !Yt(t, "aria-label") && _(t, "aria-label", e);
      } }, ka = { extends: xe, beforeConnect() {
        z(this.$el, "uk-slidenav");
        const t = this.$props.icon;
        this.icon = P(this.$el, "uk-slidenav-large") ? `${t}-large` : t;
      } }, Fu = { extends: xe, i18n: { label: "Open menu" } }, Uu = { extends: xe, i18n: { label: "Close" }, beforeConnect() {
        this.icon = `close-${P(this.$el, "uk-close-large") ? "large" : "icon"}`;
      } }, Wu = { extends: xe, i18n: { label: "Open" } }, qu = { extends: xe, i18n: { label: "Back to top" } }, Vu = { extends: xe, i18n: { label: "Next page" }, data: { role: null } }, Yu = { extends: xe, i18n: { label: "Previous page" }, data: { role: null } }, bs = {};
      function Gu(t) {
        t.icon.add = (e, i) => {
          const s = Q(e) ? { [e]: i } : e;
          Ie(s, (n, r) => {
            $s[r] = n, delete bs[r];
          }), t._initialized && Zt(document.body, (n) => Ie(t.getComponents(n), (r) => {
            r.$options.isIcon && r.icon in s && r.$reset();
          }));
        };
      }
      const Ju = { twitter: "x" };
      function Ku(t) {
        return t = Ju[t] || t, $s[t] ? (bs[t] || (bs[t] = ya($s[Xu(t)] || $s[t])), bs[t].cloneNode(true)) : null;
      }
      function Xu(t) {
        return ut ? Bs(Bs(t, "left", "right"), "previous", "next") : t;
      }
      var Zu = { args: "dataSrc", props: { dataSrc: String, sources: String, margin: String, target: String, loading: String }, data: { dataSrc: "", sources: false, margin: "50%", target: false, loading: "lazy" }, connected() {
        this.loading !== "lazy" ? this.load() : On(this.$el) && (this.$el.loading = "lazy", In(this.$el));
      }, disconnected() {
        this.img && (this.img.onload = ""), delete this.img;
      }, observe: bi({ handler(t, e) {
        this.load(), e.disconnect();
      }, options: ({ margin: t }) => ({ rootMargin: t }), filter: ({ loading: t }) => t === "lazy", target: ({ $el: t, $props: e }) => e.target ? [t, ...ui(e.target, t)] : t }), methods: { load() {
        if (this.img)
          return this.img;
        const t = On(this.$el) ? this.$el : td(this.$el, this.dataSrc, this.sources);
        return ri(t, "loading"), In(this.$el, t.currentSrc), this.img = t;
      } } };
      function In(t, e) {
        if (On(t)) {
          const i = X(t);
          (st(i, "picture") ? G(i) : [t]).forEach((n) => xa(n, n));
        } else
          e && !w(t.style.backgroundImage, e) && (g(t, "backgroundImage", `url(${qs(e)})`), C(t, Be("load", false)));
      }
      const Qu = ["data-src", "data-srcset", "sizes"];
      function xa(t, e) {
        for (const i of Qu) {
          const s = gt(t, i);
          s && _(e, i.replace(/^(data-)+/, ""), s);
        }
      }
      function td(t, e, i) {
        const s = new Image;
        return ed(s, i), xa(t, s), s.onload = () => {
          In(t, s.currentSrc);
        }, _(s, "src", e), s;
      }
      function ed(t, e) {
        if (e = id(e), e.length) {
          const i = fe("<picture>");
          for (const s of e) {
            const n = fe("<source>");
            _(n, s), ct(i, n);
          }
          ct(i, t);
        }
      }
      function id(t) {
        if (!t)
          return [];
        if (k(t, "["))
          try {
            t = JSON.parse(t);
          } catch {
            t = [];
          }
        else
          t = ze(t);
        return O(t) || (t = [t]), t.filter((e) => !zi(e));
      }
      function On(t) {
        return st(t, "img");
      }
      var sd = { mixins: [kt, hs], props: { fill: String }, data: { fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" }, computed: { fill: ({ fill: t }, e) => t || g(e, "--uk-leader-fill-content") }, connected() {
        [this.wrapper] = Xs(this.$el, `<span class="${this.clsWrapper}">`);
      }, disconnected() {
        pi(this.wrapper.childNodes);
      }, observe: Pt(), update: { read() {
        return { width: Math.trunc(this.$el.offsetWidth / 2), fill: this.fill, hide: !this.matchMedia };
      }, write({ width: t, fill: e, hide: i }) {
        at(this.wrapper, this.clsHide, i), _(this.wrapper, this.attrFill, new Array(t).join(e));
      }, events: ["resize"] } }, nd = { install: od, mixins: [yn], data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: '[class*="uk-modal-close"]' }, events: [{ name: "fullscreenchange webkitendfullscreen", capture: true, handler(t) {
        st(t.target, "video") && this.isToggled() && !document.fullscreenElement && this.hide();
      } }, { name: "show", self: true, handler() {
        P(this.panel, "uk-margin-auto-vertical") ? z(this.$el, "uk-flex") : g(this.$el, "display", "block"), yt(this.$el);
      } }, { name: "hidden", self: true, handler() {
        g(this.$el, "display", ""), U(this.$el, "uk-flex");
      } }] };
      function od({ modal: t }) {
        t.dialog = function(i, s) {
          const n = t(N(`<div><div class="uk-modal-dialog">${i}</div></div>`), { stack: true, role: "alertdialog", ...s });
          return n.show(), B(n.$el, "hidden", async () => {
            await Promise.resolve(), n.$destroy(true);
          }, { self: true }), n;
        }, t.alert = function(i, s) {
          return e(({ i18n: n }) => `<div class="uk-modal-body">${Q(i) ? i : Xt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>${n.ok}</button> </div>`, s);
        }, t.confirm = function(i, s) {
          return e(({ i18n: n }) => `<form> <div class="uk-modal-body">${Q(i) ? i : Xt(i)}</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${n.cancel}</button> <button class="uk-button uk-button-primary" autofocus>${n.ok}</button> </div> </form>`, s, () => Promise.reject());
        }, t.prompt = function(i, s, n) {
          const r = e(({ i18n: d }) => `<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>${Q(i) ? i : Xt(i)}</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">${d.cancel}</button> <button class="uk-button uk-button-primary">${d.ok}</button> </div> </form>`, n, () => null, () => c.value), { $el: a } = r.dialog, c = N("input", a);
          return c.value = s || "", B(a, "show", () => c.select()), r;
        }, t.i18n = { ok: "Ok", cancel: "Cancel" };
        function e(i, s, n = W, r = W) {
          s = { bgClose: false, escClose: true, ...s, i18n: { ...t.i18n, ...s == null ? undefined : s.i18n } };
          const a = t.dialog(i(s), s);
          return Y(new Promise((c) => {
            const d = B(a.$el, "hide", () => c(n()));
            B(a.$el, "submit", "form", (p) => {
              p.preventDefault(), c(r(a)), d(), a.hide();
            });
          }), { dialog: a });
        }
      }
      var rd = { extends: la, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } };
      const Pn = "uk-navbar-transparent";
      var ad = { extends: fa, props: { dropbarTransparentMode: Boolean }, data: { clsDrop: "uk-navbar-dropdown", selNavItem: ".uk-navbar-nav > li > a,a.uk-navbar-item,button.uk-navbar-item,.uk-navbar-item a,.uk-navbar-item button,.uk-navbar-toggle", dropbarTransparentMode: false }, computed: { navbarContainer: (t, e) => e.closest(".uk-navbar-container") }, watch: { items() {
        const t = P(this.$el, "uk-navbar-justify"), e = Z(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el);
        for (const i of e) {
          const s = t ? Z(".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", i).length : "";
          g(i, "flexGrow", s);
        }
      } }, events: [{ name: "show", el: ({ dropContainer: t }) => t, handler({ target: t }) {
        this.getTransparentMode(t) === "remove" && P(this.navbarContainer, Pn) && (U(this.navbarContainer, Pn), this._transparent = true);
      } }, { name: "hide", el: ({ dropContainer: t }) => t, async handler() {
        await ld(), !this.getActive() && this._transparent && (z(this.navbarContainer, Pn), this._transparent = null);
      } }], methods: { getTransparentMode(t) {
        if (!this.navbarContainer)
          return;
        if (this.dropbar && this.isDropbarDrop(t))
          return this.dropbarTransparentMode;
        const e = this.getDropdown(t);
        if (e && P(t, "uk-dropbar"))
          return e.inset ? "behind" : "remove";
      }, getDropbarOffset(t) {
        const { top: e, height: i } = j(this.navbarContainer);
        return e + (this.dropbarTransparentMode === "behind" ? 0 : i + t);
      } } };
      function ld() {
        return new Promise((t) => setTimeout(t));
      }
      var cd = { mixins: [yn], args: "mode", props: { mode: String, flip: Boolean, overlay: Boolean, swiping: Boolean }, data: { mode: "slide", flip: false, overlay: false, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", selPanel: ".uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContainerAnimation: "uk-offcanvas-container-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close", container: false, swiping: true }, computed: { clsFlip: ({ flip: t, clsFlip: e }) => t ? e : "", clsOverlay: ({ overlay: t, clsOverlay: e }) => t ? e : "", clsMode: ({ mode: t, clsMode: e }) => `${e}-${t}`, clsSidebarAnimation: ({ mode: t, clsSidebarAnimation: e }) => t === "none" || t === "reveal" ? "" : e, clsContainerAnimation: ({ mode: t, clsContainerAnimation: e }) => t !== "push" && t !== "reveal" ? "" : e, transitionElement({ mode: t }) {
        return t === "reveal" ? X(this.panel) : this.panel;
      } }, observe: ir({ filter: ({ swiping: t }) => t }), update: { read() {
        this.isToggled() && !lt(this.$el) && this.hide();
      }, events: ["resize"] }, events: [{ name: "touchmove", self: true, passive: false, filter: ({ overlay: t }) => t, handler(t) {
        t.cancelable && t.preventDefault();
      } }, { name: "show", self: true, handler() {
        this.mode === "reveal" && !P(X(this.panel), this.clsMode) && (Ji(this.panel, "<div>"), z(X(this.panel), this.clsMode));
        const { body: t, scrollingElement: e } = document;
        z(t, this.clsContainer, this.clsFlip), g(t, "touchAction", "pan-y pinch-zoom"), g(this.$el, "display", "block"), g(this.panel, "maxWidth", e.clientWidth), z(this.$el, this.clsOverlay), z(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode), yt(t), z(t, this.clsContainerAnimation), this.clsContainerAnimation && hd();
      } }, { name: "hide", self: true, handler() {
        U(document.body, this.clsContainerAnimation), g(document.body, "touchAction", "");
      } }, { name: "hidden", self: true, handler() {
        this.clsContainerAnimation && ud(), this.mode === "reveal" && pi(this.panel), U(this.panel, this.clsSidebarAnimation, this.clsMode), U(this.$el, this.clsOverlay), g(this.$el, "display", ""), g(this.panel, "maxWidth", ""), U(document.body, this.clsContainer, this.clsFlip);
      } }, { name: "swipeLeft swipeRight", handler(t) {
        this.isToggled() && D(t.type, "Left") ^ this.flip && this.hide();
      } }] };
      function hd() {
        Sa().content += ",user-scalable=0";
      }
      function ud() {
        const t = Sa();
        t.content = t.content.replace(/,user-scalable=0$/, "");
      }
      function Sa() {
        return N('meta[name="viewport"]', document.head) || ct(document.head, '<meta name="viewport">');
      }
      var dd = { mixins: [kt], props: { selContainer: String, selContent: String, minHeight: Number }, data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog", minHeight: 150 }, computed: { container: ({ selContainer: t }, e) => e.closest(t), content: ({ selContent: t }, e) => e.closest(t) }, observe: Pt({ target: ({ container: t, content: e }) => [t, e] }), update: { read() {
        return !this.content || !this.container || !lt(this.$el) ? false : { max: Math.max(this.minHeight, yt(this.container) - (E(this.content).height - yt(this.$el))) };
      }, write({ max: t }) {
        g(this.$el, { minHeight: this.minHeight, maxHeight: t });
      }, events: ["resize"] } }, fd = { props: ["width", "height"], connected() {
        z(this.$el, "uk-responsive-width"), g(this.$el, "aspectRatio", `${this.width}/${this.height}`);
      } }, pd = { props: { offset: Number }, data: { offset: 0 }, connected() {
        gd(this);
      }, disconnected() {
        md(this);
      }, methods: { async scrollTo(t) {
        t = t && N(t) || document.body, C(this.$el, "beforescroll", [this, t]) && (await qo(t, { offset: this.offset }), C(this.$el, "scrolled", [this, t]));
      } } };
      const Oi = new Set;
      function gd(t) {
        Oi.size || B(document, "click", _a), Oi.add(t);
      }
      function md(t) {
        Oi.delete(t), Oi.size || Jt(document, "click", _a);
      }
      function _a(t) {
        if (!t.defaultPrevented)
          for (const e of Oi)
            e.$el.contains(t.target) && Me(e.$el) && (t.preventDefault(), window.location.href !== e.$el.href && window.history.pushState({}, "", e.$el.href), e.scrollTo(Fs(e.$el)));
      }
      const Dn = "uk-scrollspy-inview";
      var vd = { args: "cls", props: { cls: String, target: String, hidden: Boolean, margin: String, repeat: Boolean, delay: Number }, data: () => ({ cls: "", target: false, hidden: true, margin: "-1px", repeat: false, delay: 0 }), computed: { elements: ({ target: t }, e) => t ? Z(t, e) : [e] }, watch: { elements(t) {
        this.hidden && g(ci(t, `:not(.${Dn})`), "opacity", 0);
      } }, connected() {
        this.elementData = new Map;
      }, disconnected() {
        for (const [t, e] of this.elementData.entries())
          U(t, Dn, (e == null ? undefined : e.cls) || "");
        delete this.elementData;
      }, observe: bi({ target: ({ elements: t }) => t, handler(t) {
        const e = this.elementData;
        for (const { target: i, isIntersecting: s } of t) {
          e.has(i) || e.set(i, { cls: gt(i, "uk-scrollspy-class") || this.cls });
          const n = e.get(i);
          !this.repeat && n.show || (n.show = s);
        }
        this.$emit();
      }, options: ({ margin: t }) => ({ rootMargin: t }), args: { intersecting: false } }), update: [{ write(t) {
        for (const [e, i] of this.elementData.entries())
          i.show && !i.inview && !i.queued ? (i.queued = true, t.promise = (t.promise || Promise.resolve()).then(() => new Promise((s) => setTimeout(s, this.delay))).then(() => {
            this.toggle(e, true), setTimeout(() => {
              i.queued = false, this.$emit();
            }, 300);
          })) : !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, false);
      } }], methods: { toggle(t, e) {
        var i, s;
        const n = (i = this.elementData) == null ? undefined : i.get(t);
        if (!n)
          return;
        (s = n.off) == null || s.call(n), g(t, "opacity", !e && this.hidden ? 0 : ""), at(t, Dn, e), at(t, n.cls);
        let r;
        if (r = n.cls.match(/\buk-animation-[\w-]+/g)) {
          const a = () => U(t, r);
          e ? n.off = it(t, "animationcancel animationend", a, { self: true }) : a();
        }
        C(t, e ? "inview" : "outview"), n.inview = e;
      } } }, $d = { props: { cls: String, closest: Boolean, scroll: Boolean, target: String, offset: Number }, data: { cls: "uk-active", closest: false, scroll: false, target: 'a[href]:not([role="button"])', offset: 0 }, computed: { links: ({ target: t }, e) => Z(t, e).filter((i) => Me(i)), elements({ closest: t }) {
        return this.links.map((e) => e.closest(t || "*"));
      } }, watch: { links(t) {
        this.scroll && this.$create("scroll", t, { offset: this.offset });
      } }, observe: [bi(), wi()], update: [{ read() {
        const t = this.links.map((d) => Fs(d) || d.ownerDocument), { length: e } = t;
        if (!e || !lt(this.$el))
          return false;
        const i = te(t, true), { scrollTop: s, scrollHeight: n } = i, r = At(i), a = n - r.height;
        let c = false;
        if (s >= a)
          c = e - 1;
        else {
          const d = this.offset + E(an()).height + r.height * 0.1;
          for (let p = 0;p < t.length && !(j(t[p]).top - r.top - d > 0); p++)
            c = +p;
        }
        return { active: c };
      }, write({ active: t }) {
        const e = t !== false && !P(this.elements[t], this.cls);
        this.links.forEach((i) => i.blur());
        for (let i = 0;i < this.elements.length; i++)
          at(this.elements[i], this.cls, +i === t);
        e && C(this.$el, "active", [t, this.elements[t]]);
      }, events: ["scroll", "resize"] }] }, bd = { mixins: [kt, hs], props: { position: String, top: null, bottom: null, start: null, end: null, offset: String, overflowFlip: Boolean, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, showOnUp: Boolean, targetOffset: Number }, data: { position: "top", top: false, bottom: false, start: false, end: false, offset: 0, overflowFlip: false, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", showOnUp: false, targetOffset: false }, computed: { target: ({ selTarget: t }, e) => t && N(t, e) || e }, connected() {
        this.start = Aa(this.start || this.top), this.end = Aa(this.end || this.bottom), this.placeholder = N("+ .uk-sticky-placeholder", this.$el) || N('<div class="uk-sticky-placeholder"></div>'), this.isFixed = false, this.setActive(false);
      }, beforeDisconnect() {
        this.isFixed && (this.hide(), U(this.target, this.clsInactive)), Ea(this.$el), _t(this.placeholder), this.placeholder = null;
      }, observe: [pn(), wi({ target: () => document.scrollingElement }), Pt({ target: ({ $el: t }) => [t, ws(t), document.scrollingElement], handler(t) {
        this.$emit(this._data.resized && t.some(({ target: e }) => e === ws(this.$el)) ? "update" : "resize"), this._data.resized = true;
      } })], events: [{ name: "load hashchange popstate", el: () => window, filter: ({ targetOffset: t }) => t !== false, handler() {
        const { scrollingElement: t } = document;
        !location.hash || t.scrollTop === 0 || setTimeout(() => {
          const e = j(N(location.hash)), i = j(this.$el);
          this.isFixed && Hs(e, i) && (t.scrollTop = Math.ceil(e.top - i.height - ft(this.targetOffset, "height", this.placeholder) - ft(this.offset, "height", this.placeholder)));
        });
      } }], update: [{ read({ height: t, width: e, margin: i, sticky: s }, n) {
        if (this.inactive = !this.matchMedia || !lt(this.$el) || !this.$el.offsetHeight, this.inactive)
          return;
        const r = this.isFixed && n.has("update");
        r && (Nn(this.target), this.hide()), this.active || ({ height: t, width: e } = E(this.$el), i = g(this.$el, "margin")), r && this.show();
        const a = ft("100vh", "height"), c = yt(window), d = Math.max(0, document.scrollingElement.scrollHeight - a);
        let p = this.position;
        this.overflowFlip && t > a && (p = p === "top" ? "bottom" : "top");
        const v = this.isFixed ? this.placeholder : this.$el;
        let b = ft(this.offset, "height", s ? this.$el : v);
        p === "bottom" && (t < c || this.overflowFlip) && (b += c - t);
        const y = this.overflowFlip ? 0 : Math.max(0, t + b - a), S = j(v).top - new DOMMatrix(g(v, "transform")).m42, I = E(this.$el).height, L = (this.start === false ? S : Mn(this.start, this.$el, S)) - b, F = this.end === false ? d : Math.min(d, Mn(this.end, this.$el, S + t, true) - I - b + y);
        return s = d && !this.showOnUp && L + b === S && F === Math.min(d, Mn(true, this.$el, 0, true) - I - b + y) && g(ws(this.$el), "overflowY") === "visible", { start: L, end: F, offset: b, overflow: y, height: t, elHeight: I, width: e, margin: i, top: gi(v)[0], sticky: s, viewport: a, maxScrollHeight: d };
      }, write({ height: t, width: e, margin: i, offset: s, sticky: n }) {
        if ((this.inactive || n || !this.isFixed) && Ea(this.$el), this.inactive)
          return;
        n && (t = e = i = 0, g(this.$el, { position: "sticky", top: s }));
        const { placeholder: r } = this;
        g(r, { height: t, width: e, margin: i }), (X(r) !== X(this.$el) || n ^ Ut(r) < Ut(this.$el)) && ((n ? Vi : Yi)(this.$el, r), r.hidden = true);
      }, events: ["resize"] }, { read({ scroll: t = 0, dir: e = "down", overflow: i, overflowScroll: s = 0, start: n, end: r, elHeight: a, height: c, sticky: d, maxScrollHeight: p }) {
        const v = Math.min(document.scrollingElement.scrollTop, p), b = t <= v ? "down" : "up", y = this.isFixed ? this.placeholder : this.$el;
        return { dir: b, prevDir: e, scroll: v, prevScroll: t, below: v > j(y).top + (d ? Math.min(c, a) : c), offsetParentTop: j(y.offsetParent).top, overflowScroll: vt(s + vt(v, n, r) - vt(t, n, r), 0, i) };
      }, write(t, e) {
        const i = e.has("scroll"), { initTimestamp: s = 0, dir: n, prevDir: r, scroll: a, prevScroll: c = 0, top: d, start: p, below: v } = t;
        if (a < 0 || a === c && i || this.showOnUp && !i && !this.isFixed)
          return;
        const b = Date.now();
        if ((b - s > 300 || n !== r) && (t.initScroll = a, t.initTimestamp = b), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - a) <= 30 && Math.abs(c - a) <= 10))
          if (this.inactive || a < p || this.showOnUp && (a <= p || n === "down" && i || n === "up" && !this.isFixed && !v)) {
            if (!this.isFixed) {
              Kt.inProgress(this.$el) && d > a && (Kt.cancel(this.$el), this.hide());
              return;
            }
            if (this.animation && v) {
              if (P(this.$el, "uk-animation-leave"))
                return;
              Kt.out(this.$el, this.animation).then(() => this.hide(), W);
            } else
              this.hide();
          } else
            this.isFixed ? this.update() : this.animation && v ? (this.show(), Kt.in(this.$el, this.animation).catch(W)) : (Nn(this.target), this.show());
      }, events: ["resize", "resizeViewport", "scroll"] }], methods: { show() {
        this.isFixed = true, this.update(), this.placeholder.hidden = false;
      }, hide() {
        const { offset: t, sticky: e } = this._data;
        this.setActive(false), U(this.$el, this.clsFixed, this.clsBelow), e ? g(this.$el, "top", t) : g(this.$el, { position: "", top: "", width: "", marginTop: "" }), this.placeholder.hidden = true, this.isFixed = false;
      }, update() {
        let { width: t, scroll: e = 0, overflow: i, overflowScroll: s = 0, start: n, end: r, offset: a, offsetParentTop: c, sticky: d, below: p } = this._data;
        const v = n !== 0 || e > n;
        if (!d) {
          let b = "fixed";
          e > r && (a += r - c + s - i, b = "absolute"), g(this.$el, { position: b, width: t, marginTop: 0 }, "important");
        }
        g(this.$el, "top", a - s), this.setActive(v), at(this.$el, this.clsBelow, p), z(this.$el, this.clsFixed);
      }, setActive(t) {
        const e = this.active;
        this.active = t, t ? (js(this.target, this.clsInactive, this.clsActive), e !== t && C(this.$el, "active")) : (js(this.target, this.clsActive, this.clsInactive), e !== t && (Nn(this.target), C(this.$el, "inactive")));
      } } };
      function Mn(t, e, i, s) {
        if (!t)
          return 0;
        if (Bt(t) || Q(t) && t.match(/^-?\d/))
          return i + ft(t, "height", e, true);
        {
          const n = t === true ? ws(e) : bt(t, e);
          return j(n).bottom - (s && (n != null && n.contains(e)) ? H(g(n, "paddingBottom")) + H(g(n, "borderBottomWidth")) : 0);
        }
      }
      function Aa(t) {
        return t === "true" ? true : t === "false" ? false : t;
      }
      function Ea(t) {
        g(t, { position: "", top: "", marginTop: "", width: "" });
      }
      const Bn = "uk-transition-disable";
      function Nn(t) {
        P(t, Bn) || (z(t, Bn), requestAnimationFrame(() => U(t, Bn)));
      }
      function ws(t) {
        for (;t = X(t); )
          if (lt(t))
            return t;
      }
      const Hn = ".uk-disabled *, .uk-disabled, [disabled]";
      var Ca = { mixins: [ve], args: "connect", props: { connect: String, toggle: String, itemNav: String, active: Number, followFocus: Boolean, swiping: Boolean }, data: { connect: "~.uk-switcher", toggle: "> * > :first-child", itemNav: false, active: 0, cls: "uk-active", attrItem: "uk-switcher-item", selVertical: ".uk-nav", followFocus: false, swiping: true }, computed: { connects: { get: ({ connect: t }, e) => ui(t, e), observe: ({ connect: t }) => t }, connectChildren() {
        return this.connects.map((t) => G(t)).flat();
      }, toggles: ({ toggle: t }, e) => Z(t, e), children(t, e) {
        return G(e).filter((i) => this.toggles.some((s) => i.contains(s)));
      } }, watch: { connects(t) {
        this.swiping && g(t, "touchAction", "pan-y pinch-zoom"), this.$emit();
      }, connectChildren() {
        let t = Math.max(0, this.index());
        for (const e of this.connects)
          G(e).forEach((i, s) => at(i, this.cls, s === t));
        this.$emit();
      }, toggles(t) {
        this.$emit();
        const e = this.index();
        this.show(~e ? e : t[this.active] || t[0]);
      } }, connected() {
        _(this.$el, "role", "tablist");
      }, observe: [rs({ targets: ({ connectChildren: t }) => t }), ir({ target: ({ connects: t }) => t, filter: ({ swiping: t }) => t })], events: [{ name: "click keydown", delegate: ({ toggle: t }) => t, handler(t) {
        !q(t.current, Hn) && (t.type === "click" || t.keyCode === V.SPACE) && (t.preventDefault(), this.show(t.current));
      } }, { name: "keydown", delegate: ({ toggle: t }) => t, handler(t) {
        const { current: e, keyCode: i } = t, s = q(this.$el, this.selVertical);
        let n = i === V.HOME ? 0 : i === V.END ? "last" : i === V.LEFT && !s || i === V.UP && s ? "previous" : i === V.RIGHT && !s || i === V.DOWN && s ? "next" : -1;
        if (~n) {
          t.preventDefault();
          const r = this.toggles.filter((c) => !q(c, Hn)), a = r[St(n, r, r.indexOf(e))];
          a.focus(), this.followFocus && this.show(a);
        }
      } }, { name: "click", el: ({ $el: t, connects: e, itemNav: i }) => e.concat(i ? ui(i, t) : []), delegate: ({ attrItem: t }) => `[${t}],[data-${t}]`, handler(t) {
        t.target.closest("a,button") && (t.preventDefault(), this.show(gt(t.current, this.attrItem)));
      } }, { name: "swipeRight swipeLeft", filter: ({ swiping: t }) => t, el: ({ connects: t }) => t, handler({ type: t }) {
        this.show(D(t, "Left") ? "next" : "previous");
      } }], update() {
        var t;
        for (const e of this.connects)
          st(e, "ul") && _(e, "role", "presentation");
        _(G(this.$el), "role", "presentation");
        for (const e in this.toggles) {
          const i = this.toggles[e], s = (t = this.connects[0]) == null ? undefined : t.children[e];
          _(i, "role", "tab"), s && (i.id = we(this, i), s.id = we(this, s), _(i, "aria-controls", s.id), _(s, { role: "tabpanel", "aria-labelledby": i.id }));
        }
        _(this.$el, "aria-orientation", q(this.$el, this.selVertical) ? "vertical" : null);
      }, methods: { index() {
        return T(this.children, (t) => P(t, this.cls));
      }, show(t) {
        const e = this.toggles.filter((a) => !q(a, Hn)), i = this.index(), s = St(!ii(t) || w(e, t) ? t : 0, e, St(this.toggles[i], e)), n = St(e[s], this.toggles);
        this.children.forEach((a, c) => {
          at(a, this.cls, n === c), _(this.toggles[c], { "aria-selected": n === c, tabindex: n === c ? null : -1 });
        });
        const r = i >= 0 && i !== s;
        this.connects.forEach(async ({ children: a }) => {
          const c = M(a).filter((d, p) => p !== n && P(d, this.cls));
          await this.toggleElement(c, false, r) && await this.toggleElement(a[n], true, r);
        });
      } } }, wd = { mixins: [kt], extends: Ca, props: { media: Boolean }, data: { media: 960, attrItem: "uk-tab-item", selVertical: ".uk-tab-left,.uk-tab-right" }, connected() {
        const t = P(this.$el, "uk-tab-left") ? "uk-tab-left" : P(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
        t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media });
      } };
      const yd = 32;
      var kd = { mixins: [hs, ve], args: "target", props: { href: String, target: null, mode: "list", queued: Boolean }, data: { href: false, target: false, mode: "click", queued: true }, computed: { target: { get: ({ target: t }, e) => (t = ui(t || e.hash, e), t.length ? t : [e]), observe: ({ target: t }) => t } }, connected() {
        w(this.mode, "media") || (Ui(this.$el) || _(this.$el, "tabindex", "0"), !this.cls && st(this.$el, "a") && _(this.$el, "role", "button"));
      }, observe: rs({ targets: ({ target: t }) => t }), events: [{ name: Ot, filter: ({ mode: t }) => w(t, "hover"), handler(t) {
        this._preventClick = null, !(!Dt(t) || Te(this._showState) || this.$el.disabled) && (C(this.$el, "focus"), it(document, Ot, () => C(this.$el, "blur"), true, (e) => !this.$el.contains(e.target)), w(this.mode, "click") && (this._preventClick = true));
      } }, { name: `mouseenter mouseleave ${de} ${De} focus blur`, filter: ({ mode: t }) => w(t, "hover"), handler(t) {
        if (Dt(t) || this.$el.disabled)
          return;
        const e = w(["mouseenter", de, "focus"], t.type), i = this.isToggled(this.target);
        if (!e && (!Te(this._showState) || t.type !== "blur" && q(this.$el, ":focus") || t.type === "blur" && q(this.$el, ":hover"))) {
          i === this._showState && (this._showState = null);
          return;
        }
        e && Te(this._showState) && i !== this._showState || (this._showState = e ? i : null, this.toggle(`toggle${e ? "show" : "hide"}`));
      } }, { name: "keydown", filter: ({ $el: t, mode: e }) => w(e, "click") && !st(t, "input"), handler(t) {
        t.keyCode === yd && (t.preventDefault(), this.$el.click());
      } }, { name: "click", filter: ({ mode: t }) => ["click", "hover"].some((e) => w(t, e)), handler(t) {
        let e;
        (this._preventClick || t.target.closest('a[href="#"], a[href=""]') || (e = t.target.closest("a[href]")) && (!this.isToggled(this.target) || e.hash && q(this.target, e.hash))) && t.preventDefault(), !this._preventClick && w(this.mode, "click") && this.toggle();
      } }, { name: "mediachange", filter: ({ mode: t }) => w(t, "media"), el: ({ target: t }) => t, handler(t, e) {
        e.matches ^ this.isToggled(this.target) && this.toggle();
      } }], methods: { async toggle(t) {
        if (!C(this.target, t || "toggle", [this]))
          return;
        if (Yt(this.$el, "aria-expanded") && _(this.$el, "aria-expanded", !this.isToggled(this.target)), !this.queued)
          return this.toggleElement(this.target);
        const e = this.target.filter((s) => P(s, this.clsLeave));
        if (e.length) {
          for (const s of this.target) {
            const n = w(e, s);
            this.toggleElement(s, n, n);
          }
          return;
        }
        const i = this.target.filter(this.isToggled);
        await this.toggleElement(i, false) && await this.toggleElement(this.target.filter((s) => !w(i, s)), true);
      } } }, xd = Object.freeze({ __proto__: null, Accordion: la, Alert: Yh, Close: Uu, Cover: Kh, Drop: ua, DropParentIcon: ke, Dropdown: ua, Dropnav: fa, FormCustom: su, Grid: nu, HeightMatch: lu, HeightPlaceholder: uu, HeightViewport: du, Icon: Tn, Img: Zu, Leader: sd, Margin: sr, Marker: Wu, Modal: nd, Nav: rd, NavParentIcon: Lu, Navbar: ad, NavbarParentIcon: ke, NavbarToggleIcon: Fu, Offcanvas: cd, OverflowAuto: dd, OverlayIcon: ke, PaginationNext: Vu, PaginationPrevious: Yu, Responsive: fd, Scroll: pd, Scrollspy: vd, ScrollspyNav: $d, SearchIcon: ju, SlidenavNext: ka, SlidenavPrevious: ka, Spinner: Ru, Sticky: bd, Svg: Mu, Switcher: Ca, Tab: wd, Toggle: kd, Totop: qu, Video: ca });
      return Ie(xd, (t, e) => Ct.component(e, t)), Rh(Ct), Ie(jh, (t, e) => Ct.component(e, t)), Ct;
    });
    function vo(f) {
      try {
        if (f.startsWith("{"))
          return JSON.parse(f);
        const o = {};
        return f.replace(/[;\s]+$/, "").split(";").forEach((l) => {
          const h = l.trim().split(/:(.*)/);
          o[h[0].trim()] = h[1].trim();
        }), o;
      } catch {
        return {};
      }
    }
    var { defineProperty: nl, getOwnPropertyDescriptor: ol } = Object, $t = (f, o, l, h) => {
      for (var u = h > 1 ? undefined : h ? ol(o, l) : o, $ = f.length - 1, m;$ >= 0; $--)
        (m = f[$]) && (u = (h ? m(o, l, u) : m(u)) || u);
      return h && u && nl(o, l, u), u;
    };
    A.Select = class extends Mt {
      constructor() {
        super(...arguments), this.name = "", this.multiple = false, this.disabled = false, this.placeholder = "", this.searchable = false, this.error = false, this.i18n = "", this.$term = "", this.$options = [], this.$filteredOptions = this.$options, this.$focused = -1, this.$selected = [], this.$isOpen = false, this.$i18n = { "selection-count-text": ":n: options selected" };
      }
      navigate(o) {
        const l = ($) => $.type !== "label" && $.disabled !== true;
        let h = this.$focused;
        const u = o === "up" ? -1 : 1;
        do
          if (h += u, h < 0) {
            for (h = this.$filteredOptions.length - 1;h >= 0 && !l(this.$filteredOptions[h]); )
              h--;
            break;
          } else if (h >= this.$filteredOptions.length) {
            for (h = 0;h < this.$filteredOptions.length && !l(this.$filteredOptions[h]); )
              h++;
            break;
          }
        while (!l(this.$filteredOptions[h]));
        return h;
      }
      addOption(o, l) {
        o.selected === true && (this.multiple === false ? this.$selected = [o.value] : this.$selected.push(o.value));
        let h;
        o.hasAttribute("value") ? h = o.getAttribute("value") || "" : h = o.textContent || "", this.$options.push({ type: "option", value: h, text: o.textContent || "", disabled: l === true ? true : o.disabled, selected: o.selected });
      }
      connectedCallback() {
        super.connectedCallback(), Array.from(this.children).map((o) => {
          if (o.nodeName === "OPTGROUP") {
            const l = o;
            this.$options.push({ type: "label", text: l.getAttribute("label") || "" }), Array.from(l.children).map((h) => {
              const u = h;
              this.addOption(u, l.disabled);
            });
          }
          if (o.nodeName === "OPTION") {
            const l = o;
            this.addOption(l);
          }
        }), this.multiple === false && this.$selected.length === 1 && (this.$focused = this.$options.findIndex((o) => o.value === this.$selected[0])), this.i18n && (this.$i18n = vo(this.i18n)), document.addEventListener("click", this.onClickAway.bind(this)), this.innerHTML = "", this.removeAttribute("uk-cloak");
      }
      disconnectedCallback() {
        super.disconnectedCallback(), document.removeEventListener("click", this.onClickAway);
      }
      createRenderRoot() {
        return this;
      }
      updated(o) {
        var l;
        if (o.has("$focused") && this.$isOpen === true && this.focusLi(), o.has("$isOpen"))
          if (this.$isOpen === true) {
            this.focusLi(false);
            const h = window.innerHeight, u = this.renderRoot.querySelector("div.uk-dropdown"), $ = this.renderRoot.querySelector("button"), m = { dropdown: u.getBoundingClientRect(), button: $.getBoundingClientRect() };
            m.button.bottom + ((l = m.dropdown) == null ? undefined : l.height) > h && (u.style.bottom = `${m.button.height + 4}px`), this.dispatchEvent(new CustomEvent("uk-select:shown", { detail: { value: true }, bubbles: true, composed: true }));
          } else
            this.updateComplete.then(() => {
              this.$term = "", this.multiple === false ? this.$focused = this.$options.findIndex((h) => h.value === this.$selected[0]) : this.$focused = -1;
            }), this.dispatchEvent(new CustomEvent("uk-select:hidden", { detail: { value: true }, bubbles: true, composed: true }));
        o.has("$term") && this.updateComplete.then(() => {
          if (this.$term === "") {
            this.$filteredOptions = this.$options;
            return;
          }
          this.$filteredOptions = this.$options.filter((h) => {
            var u;
            return (u = h.value) == null ? undefined : u.toLowerCase().includes(this.$term.toLowerCase());
          });
        });
      }
      render() {
        return tt`
      <div class="uk-custom-select">
        <button
          class="uk-input-fake uk-flex uk-flex-between ${this.error === true ? "uk-form-danger" : ""}"
          type="button"
          .disabled=${this.disabled}
          @click="${this.toggle}"
          @keydown=${(o) => {
          if (this.$isOpen === true)
            switch (o.key) {
              case "Escape":
                this.$isOpen = false;
                break;
              case "ArrowDown":
                o.preventDefault(), this.$focused = this.navigate("down");
                break;
              case "ArrowUp":
                o.preventDefault(), this.$focused = this.navigate("up");
                break;
              case "Enter":
                o.preventDefault(), this.select(this.$focused);
                break;
              case " ":
                o.preventDefault(), this.select(this.$focused);
                break;
              case "Tab":
                this.searchable === false && (this.$isOpen = false);
                break;
            }
          else
            switch (o.key) {
              case "ArrowDown":
                o.preventDefault(), this.$focused = this.navigate("down"), this.$isOpen = true;
                break;
              case "ArrowUp":
                o.preventDefault(), this.$focused = this.navigate("up"), this.$isOpen = true;
                break;
            }
        }}
        >
          <span> ${this.text()} </span>
          <svg
            class="opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevrons-up-down"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </button>
        ${this.$isOpen === true ? tt`
              <div class="uk-drop uk-dropdown uk-open" tabindex="-1">
                ${this.searchable === true ? tt`
                      <div class="uk-custom-select-search">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-search"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                        <input
                          placeholder="Search"
                          type="text"
                          .value="${this.$term}"
                          @keydown=${(o) => {
          var l;
          if (this.$isOpen === true)
            switch (o.key) {
              case "Escape":
                this.$isOpen = false, (l = this.renderRoot.querySelector("button")) == null || l.focus();
                break;
              case "ArrowDown":
                o.preventDefault(), this.$focused = this.navigate("down");
                break;
              case "ArrowUp":
                o.preventDefault(), this.$focused = this.navigate("up");
                break;
              case "Enter":
                o.preventDefault(), this.select(this.$focused);
                break;
              case "Tab":
                !o.altKey && !o.shiftKey && !o.ctrlKey && !o.metaKey && (this.$isOpen = false);
                break;
            }
        }}
                          @input=${(o) => {
          const l = o.target;
          this.$term = l.value;
        }}
                        />
                      </div>
                    ` : ""}
                ${this.$filteredOptions.length > 0 ? tt`
                      <hr class="uk-hr" />
                      <ul class="uk-dropdown-nav" tabindex="-1">
                        ${Ce(this.$filteredOptions, (o) => o.value, (o, l) => tt`${o.type === "label" ? tt`<li class="uk-nav-header">
                                  ${o.text}
                                </li>` : tt`<li
                                  class="${o.disabled === true ? "uk-disabled opacity-50" : ""} ${this.$focused === l ? "uk-active" : ""}"
                                  tabindex="-1"
                                  @click=${() => this.select(l)}
                                >
                                  <a tabindex="-1">
                                    <span>${o.text}</span>
                                    ${this.$selected.includes(o.value) ? tt`<svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          class="lucide lucide-check"
                                        >
                                          <path d="M20 6 9 17l-5-5" />
                                        </svg>` : ""}
                                  </a>
                                </li>`}`)}
                      </ul>
                    ` : ""}
              </div>
            ` : ""}
        ${this.name && this.$selected.length > 0 ? tt`${this.multiple === false ? tt`
                  <input
                    name="${this.name}"
                    type="hidden"
                    value="${this.$selected[0]}"
                  />
                ` : this.$selected.map((o) => tt`
                    <input name="${this.name}[]" type="hidden" value="${o}" />
                  `)}` : ""}
      </div>
    `;
      }
      text() {
        var o, l;
        return this.$selected.length === 0 ? this.placeholder !== "" ? this.placeholder : "Select an option" : this.multiple === false ? (o = this.$options.find((h) => h.value === this.$selected[0])) == null ? undefined : o.text : this.$selected.length === 1 ? (l = this.$options.find((h) => h.value === this.$selected[0])) == null ? undefined : l.text : this.$i18n["selection-count-text"].replace(":n:", this.$selected.length.toString());
      }
      toggle() {
        this.$options.length !== 0 && (this.$isOpen = !this.$isOpen);
      }
      focusLi(o = true) {
        const l = this.renderRoot.querySelector("ul");
        if (l) {
          const h = l.querySelectorAll("li");
          if (this.$focused >= 0 && this.$focused < h.length) {
            const u = h[this.$focused], $ = { ul: l.getBoundingClientRect(), li: u.getBoundingClientRect() }, m = u.offsetTop - l.offsetTop - $.ul.height / 2 + $.li.height / 2;
            o === true ? l.scrollTo({ top: m, behavior: "smooth" }) : l.scrollTop = m;
          }
        }
      }
      select(o) {
        var h, u;
        if (o === -1) {
          this.$isOpen = false, (h = this.renderRoot.querySelector("button")) == null || h.focus();
          return;
        }
        let l = null;
        o !== undefined && (l = this.$filteredOptions[o]), !(l && (l.type === "label" || l.disabled === true)) && (this.multiple === false ? (o !== undefined && (this.$focused = o, this.$selected = [l == null ? undefined : l.value]), this.$isOpen = false, (u = this.renderRoot.querySelector("button")) == null || u.focus(), this.dispatchEvent(new CustomEvent("uk-select:input", { detail: { value: this.$selected[0] }, bubbles: true, composed: true }))) : (o !== undefined && (this.$selected.findIndex(($) => $ === (l == null ? undefined : l.value)) === -1 ? this.$selected.push(l == null ? undefined : l.value) : this.$selected = this.$selected.filter(($) => $ !== (l == null ? undefined : l.value)), this.requestUpdate()), this.dispatchEvent(new CustomEvent("uk-select:input", { detail: { value: this.$selected }, bubbles: true, composed: true }))));
      }
      onClickAway(o) {
        this.$isOpen && !this.renderRoot.contains(o.target) && (this.$isOpen = false);
      }
    }, $t([K({ type: String })], A.Select.prototype, "name", 2), $t([K({ type: Boolean })], A.Select.prototype, "multiple", 2), $t([K({ type: Boolean })], A.Select.prototype, "disabled", 2), $t([K({ type: String })], A.Select.prototype, "placeholder", 2), $t([K({ type: Boolean })], A.Select.prototype, "searchable", 2), $t([K({ type: Boolean })], A.Select.prototype, "error", 2), $t([K({ type: String })], A.Select.prototype, "i18n", 2), $t([ht()], A.Select.prototype, "$term", 2), $t([ht()], A.Select.prototype, "$options", 2), $t([ht()], A.Select.prototype, "$filteredOptions", 2), $t([ht()], A.Select.prototype, "$focused", 2), $t([ht()], A.Select.prototype, "$selected", 2), $t([ht()], A.Select.prototype, "$isOpen", 2), $t([ht()], A.Select.prototype, "$i18n", 2), A.Select = $t([Ae("uk-select")], A.Select);
    var rl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    function al(f) {
      return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
    }
    var $o = { exports: {} };
    (function(f, o) {
      (function(l, h, u) {
        f.exports = u(), f.exports.default = u();
      })("slugify", rl, function() {
        var l = JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`), h = JSON.parse('{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}');
        function u($, m) {
          if (typeof $ != "string")
            throw new Error("slugify: string argument expected");
          m = typeof m == "string" ? { replacement: m } : m || {};
          var x = h[m.locale] || {}, k = m.replacement === undefined ? "-" : m.replacement, D = m.trim === undefined ? true : m.trim, w = $.normalize().split("").reduce(function(T, O) {
            var M = x[O];
            return M === undefined && (M = l[O]), M === undefined && (M = O), M === k && (M = " "), T + M.replace(m.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "");
          }, "");
          return m.strict && (w = w.replace(/[^A-Za-z0-9\s]/g, "")), D && (w = w.trim()), w = w.replace(/\s+/g, k), m.lower && (w = w.toLowerCase()), w;
        }
        return u.extend = function($) {
          Object.assign(l, $);
        }, u;
      });
    })($o);
    var ll = $o.exports;
    const cl = al(ll);
    var { defineProperty: hl, getOwnPropertyDescriptor: ul } = Object, wt = (f, o, l, h) => {
      for (var u = h > 1 ? undefined : h ? ul(o, l) : o, $ = f.length - 1, m;$ >= 0; $--)
        (m = f[$]) && (u = (h ? m(o, l, u) : m(u)) || u);
      return h && u && hl(o, l, u), u;
    };
    A.InputTag = class extends Mt {
      constructor() {
        super(...arguments), this.disabled = false, this.error = false, this.maxlength = 20, this.minlength = 1, this.name = "", this.placeholder = "", this.slugify = false, this["slugify-options"] = "", this.state = "secondary", this.value = "", this.$input = "", this.$slugOptions = { lower: true, strict: true }, this.$tags = [];
      }
      connectedCallback() {
        super.connectedCallback(), this.initializeDefaults(), this.removeAttribute("uk-cloak");
      }
      createRenderRoot() {
        return this;
      }
      initializeDefaults() {
        if (this.$tags = this.value === "" ? [] : this.value.split(","), this["slugify-options"]) {
          const o = vo(this["slugify-options"]);
          "replacement" in o && (this.$slugOptions.replacement = o.replacement), "remove" in o && (this.$slugOptions.remove = new RegExp(o.remove, "g")), "lower" in o && (this.$slugOptions.lower = o.lower === "true"), "strict" in o && (this.$slugOptions.strict = o.strict === "true"), "locale" in o && (this.$slugOptions.locale = o.locale), "trim" in o && (this.$slugOptions.trim = o.trim === "true");
        }
      }
      push() {
        let o = this.$input;
        this.slugify && (o = cl(this.$input, this.$slugOptions)), this.$input.length >= this.minlength && !this.$tags.includes(o) && (this.$tags.push(o), this.$input = ""), this.dispatchEvent(new CustomEvent("uk-input-tag:input", { detail: { value: this.$tags }, bubbles: true, composed: true }));
      }
      render() {
        return tt`
      <div
        class="uk-input-tag ${this.disabled === true ? "opacity-50" : ""} ${this.error === true ? "uk-form-danger" : ""}"
      >
        ${this.$tags.map((o, l) => tt`
            <div class="uk-tag ${`uk-tag-${this.state}`}">
              <span
                @click=${() => {
          var h;
          this.disabled === false && (this.$input = this.$tags[l], this.$tags = this.$tags.filter((u, $) => $ !== l), (h = this.renderRoot.querySelector("input")) == null || h.focus());
        }}
              >
                ${o}
              </span>
              <a
                @click="${() => {
          this.disabled === false && (this.$tags = this.$tags.filter((h, u) => u !== l));
        }}"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </a>
            </div>
          `)}

        <input
          .disabled=${this.disabled}
          autocomplete="off"
          type="text"
          placeholder="${this.placeholder}"
          @keydown=${(o) => {
          switch (o.key) {
            case "Backspace":
              this.$tags.length > 0 && this.$input.length === 0 && (o.preventDefault(), this.$input = this.$tags.slice(-1)[0], this.$tags.pop());
              break;
            case ",":
              o.preventDefault(), this.push();
              break;
            case "Enter":
              o.preventDefault(), this.push();
              break;
          }
        }}
          @input=${(o) => {
          const l = o.target;
          this.$input = l.value;
        }}
          .maxLength=${this.maxlength}
          .value=${this.$input}
        />

        ${this.$tags.map((o) => tt`
            <input name="${this.name}[]" type="hidden" value="${o}" />
          `)}
      </div>
    `;
      }
    }, wt([K({ type: Boolean })], A.InputTag.prototype, "disabled", 2), wt([K({ type: Boolean })], A.InputTag.prototype, "error", 2), wt([K({ type: Number })], A.InputTag.prototype, "maxlength", 2), wt([K({ type: Number })], A.InputTag.prototype, "minlength", 2), wt([K({ type: String })], A.InputTag.prototype, "name", 2), wt([K({ type: String })], A.InputTag.prototype, "placeholder", 2), wt([K({ type: Boolean })], A.InputTag.prototype, "slugify", 2), wt([K({ type: String })], A.InputTag.prototype, "slugify-options", 2), wt([K({ type: String })], A.InputTag.prototype, "state", 2), wt([K({ type: String })], A.InputTag.prototype, "value", 2), wt([ht()], A.InputTag.prototype, "$input", 2), wt([ht()], A.InputTag.prototype, "$slugOptions", 2), wt([ht()], A.InputTag.prototype, "$tags", 2), A.InputTag = wt([Ae("uk-input-tag")], A.InputTag);
    var { defineProperty: dl, getOwnPropertyDescriptor: fl } = Object, jt = (f, o, l, h) => {
      for (var u = h > 1 ? undefined : h ? fl(o, l) : o, $ = f.length - 1, m;$ >= 0; $--)
        (m = f[$]) && (u = (h ? m(o, l, u) : m(u)) || u);
      return h && u && dl(o, l, u), u;
    };
    A.InputPin = class extends Mt {
      constructor() {
        super(...arguments), this.autofocus = false, this.disabled = false, this.error = false, this.length = 6, this.name = "", this.separated = false, this.$value = "";
      }
      connectedCallback() {
        super.connectedCallback(), this.removeAttribute("uk-cloak");
      }
      createRenderRoot() {
        return this;
      }
      updated(o) {
        o.has("$value") && o.get("$value") !== this.$value && this.dispatchEvent(new CustomEvent("uk-input-pin:input", { detail: { value: this.$value }, bubbles: true, composed: true }));
      }
      render() {
        return tt`
      <div
        class="uk-input-pin ${this.separated === true ? "uk-input-pin-separated" : ""} ${this.disabled === true ? "uk-disabled" : ""} ${this.error === true ? "uk-form-danger" : ""}"
      >
        ${Array(this.length).fill("").map((o, l) => tt`<input
                type="text"
                maxlength="1"
                placeholder="○"
                .autofocus="${!!(this.autofocus && l === 0)}"
                .disabled=${this.disabled}
                @keydown="${(h) => {
          const u = this.renderRoot.querySelectorAll('input[type="text"]');
          switch (h.key) {
            case "Backspace":
              const $ = h.target;
              this.$focus !== undefined && $.value.length === 0 && this.$focus > 0 && (h.preventDefault(), u[this.$focus - 1].focus());
              break;
          }
        }}"
                @input="${(h) => {
          const u = this.renderRoot.querySelectorAll('input[type="text"]');
          let $ = "";
          u.forEach((x) => {
            $ += x.value;
          });
          const m = h.target;
          m.value.length === 1 && (l < this.length - 1 && u[l + 1].focus(), l === this.length - 1 && m.blur()), this.$value = $;
        }}"
                @focus="${() => this.$focus = l}"
                @blur="${() => this.$focus = undefined}"
              />`)}
      </div>
      <input type="hidden" name="${this.name}" .value=${this.$value} />
    `;
      }
    }, jt([K({ type: Boolean })], A.InputPin.prototype, "autofocus", 2), jt([K({ type: Boolean })], A.InputPin.prototype, "disabled", 2), jt([K({ type: Boolean })], A.InputPin.prototype, "error", 2), jt([K({ type: Number })], A.InputPin.prototype, "length", 2), jt([K({ type: String })], A.InputPin.prototype, "name", 2), jt([K({ type: Boolean })], A.InputPin.prototype, "separated", 2), jt([ht()], A.InputPin.prototype, "$focus", 2), jt([ht()], A.InputPin.prototype, "$value", 2), A.InputPin = jt([Ae("uk-input-pin")], A.InputPin);
    var { defineProperty: pl, getOwnPropertyDescriptor: gl } = Object, Vt = (f, o, l, h) => {
      for (var u = h > 1 ? undefined : h ? gl(o, l) : o, $ = f.length - 1, m;$ >= 0; $--)
        (m = f[$]) && (u = (h ? m(o, l, u) : m(u)) || u);
      return h && u && pl(o, l, u), u;
    };
    A.Command = class extends Mt {
      constructor() {
        super(...arguments), this.placeholder = "Search", this.toggle = "fkcmd", this.$items = {}, this.$filteredItems = this.$items, this.$term = "", this.$focused = -1;
      }
      get flattenedItems() {
        return Object.values(this.$filteredItems).flat();
      }
      connectedCallback() {
        super.connectedCallback(), Array.from(this.children).map((o) => {
          var l, h;
          if (o.nodeName === "A") {
            const u = o.hasAttribute("data-group") ? o.getAttribute("data-group") : "__";
            this.$items[u] === undefined && (this.$items[u] = []);
            let $ = [(l = o.textContent) == null ? undefined : l.toLocaleLowerCase().trim()];
            if (o.hasAttribute("data-keywords")) {
              const m = (h = o.getAttribute("data-keywords")) == null ? undefined : h.split(",").map((x) => x.trim()).filter((x) => x !== "");
              $ = [...$, ...m];
            }
            this.$items[u].push({ disabled: o.hasAttribute("href") === false || o.getAttribute("href") === "", element: o.outerHTML, keywords: $ });
          }
        }), this.key !== undefined && window.UIkit && document.addEventListener("keydown", this.onKeydown.bind(this)), this.hasAttribute("toggle") === false && console.error("To suppress this message, set the `toggle` attribute to a unique name on your `<uk-command>`. Please see https://franken-ui.dev/docs/command for more details."), this.innerHTML = "", this.removeAttribute("uk-cloak");
      }
      createRenderRoot() {
        return this;
      }
      updated(o) {
        if (o.has("$focused")) {
          const l = document.getElementById(this.toggle);
          if (l) {
            const h = l.querySelector("ul");
            if (h) {
              const u = h.querySelectorAll("li");
              u.forEach((m) => {
                m.classList.remove("uk-active");
              });
              const $ = Array.from(u).filter((m) => !m.classList.contains("uk-nav-header"));
              if (this.$focused >= 0 && this.$focused < $.length) {
                const m = $[this.$focused];
                m.classList.add("uk-active");
                const x = { ul: h.getBoundingClientRect(), li: m.getBoundingClientRect() }, k = m.offsetTop - h.offsetTop - x.ul.height / 2 + x.li.height / 2;
                h.scrollTo({ top: k, behavior: "smooth" });
              }
            }
          }
        }
        o.has("$term") && this.updateComplete.then(() => {
          if (this.$focused = -1, this.$term === "") {
            this.$filteredItems = this.$items;
            return;
          }
          this.$filteredItems = Object.fromEntries(Object.entries(this.$items).map(([l, h]) => [l, h.filter((u) => u.keywords.some(($) => $.toLowerCase().includes(this.$term.toLowerCase())))]));
        });
      }
      navigate(o) {
        const l = ($) => $.disabled !== true;
        let h = this.$focused;
        const u = o === "up" ? -1 : 1;
        do
          if (h += u, h < 0) {
            for (h = this.flattenedItems.length - 1;h >= 0 && !l(this.flattenedItems[h]); )
              h--;
            break;
          } else if (h >= this.flattenedItems.length) {
            for (h = 0;h < this.flattenedItems.length && !l(this.flattenedItems[h]); )
              h++;
            break;
          }
        while (!l(this.flattenedItems[h]));
        return h;
      }
      go() {
        const o = document.getElementById(this.toggle);
        if (o) {
          const l = o.querySelector("ul");
          if (l) {
            const h = l.querySelectorAll("li"), u = Array.from(h).filter(($) => !$.classList.contains("uk-nav-header"));
            u[this.$focused] && u[this.$focused].querySelector("a").click();
          }
        }
      }
      render() {
        return tt`
      <div id=${this.toggle} class="uk-modal uk-flex-top" uk-modal>
        <div class="uk-margin-auto-vertical uk-modal-dialog">
          <div class="uk-inline uk-width-1-1">
            <span class="uk-form-icon uk-form-icon-flip uk-text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <input
              autofocus
              class="uk-input uk-form-blank"
              placeholder="${this.placeholder}"
              type="text"
              @keydown=${(o) => {
          switch (o.key) {
            case "ArrowDown":
              o.preventDefault(), this.$focused = this.navigate("down");
              break;
            case "ArrowUp":
              o.preventDefault(), this.$focused = this.navigate("up");
              break;
            case "Enter":
              o.preventDefault(), this.go();
              break;
          }
        }}
              @input=${(o) => {
          const l = o.target;
          this.$term = l.value;
        }}
            />
          </div>
          <hr class="uk-hr" />
          <ul class="uk-height-medium uk-overflow-auto uk-nav uk-nav-secondary">
            ${Ce(Object.entries(this.$filteredItems), ([o]) => o, ([o, l]) => l.length ? tt`
                      ${o !== "__" ? tt`<li class="uk-nav-header">${o}</li>` : ""}
                      ${Ce(l, (h, u) => u, (h) => tt`
                          <li
                            class="${h.disabled === true ? "uk-disabled opacity-50" : ""}"
                          >
                            ${mo(h.element)}
                          </li>
                        `)}
                    ` : "")}
          </ul>
        </div>
      </div>
    `;
      }
      onKeydown(o) {
        o.ctrlKey && o.key === this.key && (o.preventDefault(), window.UIkit.modal(`#${this.toggle}`).toggle());
      }
    }, Vt([K({ type: String })], A.Command.prototype, "key", 2), Vt([K({ type: String })], A.Command.prototype, "placeholder", 2), Vt([K({ type: String })], A.Command.prototype, "toggle", 2), Vt([ht()], A.Command.prototype, "$items", 2), Vt([ht()], A.Command.prototype, "$filteredItems", 2), Vt([ht()], A.Command.prototype, "$term", 2), Vt([ht()], A.Command.prototype, "$focused", 2), A.Command = Vt([Ae("uk-command")], A.Command);
    var { defineProperty: ml, getOwnPropertyDescriptor: vl } = Object, Ni = (f, o, l, h) => {
      for (var u = h > 1 ? undefined : h ? vl(o, l) : o, $ = f.length - 1, m;$ >= 0; $--)
        (m = f[$]) && (u = (h ? m(o, l, u) : m(u)) || u);
      return h && u && ml(o, l, u), u;
    };
    return A.ThemeSwitcher = class extends Mt {
      constructor() {
        super(...arguments), this["custom-palette"] = "", this.$mode = "light", this.$theme = "uk-theme-zinc", this.palettes = [{ background: "#52525b", key: "uk-theme-zinc", text: "Zinc" }, { background: "#64748b", key: "uk-theme-slate", text: "Slate" }, { background: "#78716c", key: "uk-theme-stone", text: "Stone" }, { background: "#6b7280", key: "uk-theme-gray", text: "Gray" }, { background: "#737373", key: "uk-theme-neutral", text: "Neutral" }, { background: "#dc2626", key: "uk-theme-red", text: "Red" }, { background: "#e11d48", key: "uk-theme-rose", text: "Rose" }, { background: "#f97316", key: "uk-theme-orange", text: "Orange" }, { background: "#16a34a", key: "uk-theme-green", text: "Green" }, { background: "#2563eb", key: "uk-theme-blue", text: "Blue" }, { background: "#facc15", key: "uk-theme-yellow", text: "Yellow" }, { background: "#7c3aed", key: "uk-theme-violet", text: "Violet" }], this.customPalettes = [];
      }
      connectedCallback() {
        if (super.connectedCallback(), this.$theme = localStorage.getItem("theme") || "uk-theme-zinc", this.$mode = document.documentElement.classList.contains("dark") ? "dark" : "light", this["custom-palette"])
          try {
            this.customPalettes = JSON.parse(this["custom-palette"]);
          } catch {
            console.error("Invalid palette. Please see https://franken-ui.dev/docs/theme-switcher for more details.");
          }
        this.removeAttribute("uk-cloak");
      }
      createRenderRoot() {
        return this;
      }
      setTheme(o) {
        const l = document.documentElement, h = Array.from(l.classList).find((u) => u.startsWith("uk-theme-"));
        h && l.classList.remove(h), l.classList.add(o), this.$theme = o, localStorage.setItem("theme", o);
      }
      setMode(o) {
        this.$mode = o, o === "light" ? (document.documentElement.classList.remove("dark"), localStorage.setItem("mode", "light")) : (document.documentElement.classList.add("dark"), localStorage.setItem("mode", "dark"));
      }
      button(o) {
        return tt`
      <button
        class="${this.$theme === o.key ? "uk-active" : ""}"
        @click="${() => this.setTheme(o.key)}"
      >
        <span class="circle" style="background:${o.background}">
          ${this.$theme === o.key ? tt`<uk-icon icon="check"></uk-icon>` : ""}
        </span>
        <span>${o.text}</span>
      </button>
    `;
      }
      render() {
        return tt`
      <div class="uk-theme-switcher">
        <div class="uk-form-label">Color</div>
        <div class="uk-theme-switcher-options">
          ${Ce(this.palettes, (o) => o.key, (o) => this.button(o))}
          ${Ce(this.customPalettes, (o) => o.key, (o) => this.button(o))}
        </div>

        <div class="uk-margin-medium-top uk-form-label">Mode</div>
        <div class="uk-theme-switcher-options">
          <button
            class="${this.$mode === "light" ? "uk-active" : ""}"
            @click="${() => this.setMode("light")}"
          >
            <uk-icon class="uk-margin-small-right" icon="sun"></uk-icon>
            Light
          </button>
          <button
            class="${this.$mode === "dark" ? "uk-active" : ""}"
            @click="${() => this.setMode("dark")}"
          >
            <uk-icon class="uk-margin-small-right" icon="moon"></uk-icon>
            Dark
          </button>
        </div>
      </div>
    `;
      }
    }, Ni([K({ type: String })], A.ThemeSwitcher.prototype, "custom-palette", 2), Ni([ht()], A.ThemeSwitcher.prototype, "$mode", 2), Ni([ht()], A.ThemeSwitcher.prototype, "$theme", 2), A.ThemeSwitcher = Ni([Ae("uk-theme-switcher")], A.ThemeSwitcher), window.Lit = Wa, window.LitDecorators = Qa, window.LitRepeat = { repeat: Ce }, window.LitUnsafeHTML = { unsafeHTML: mo }, Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }), A;
  }({});
});

// assets/app.ts
var import_core = __toESM(require_core_iife(), 1);

// node_modules/franken-ui/dist/js/icon.iife.js
var FRANKENUIICON = function(M, Py, r) {
  const E0 = (t, p, h = []) => {
    const c = document.createElementNS("http://www.w3.org/2000/svg", t);
    return Object.keys(p).forEach((d) => {
      c.setAttribute(d, String(p[d]));
    }), h.length && h.forEach((d) => {
      const s = E0(...d);
      c.appendChild(s);
    }), c;
  };
  var I0 = ([t, p, h]) => E0(t, p, h);
  const ky = (t) => Array.from(t.attributes).reduce((p, h) => (p[h.name] = h.value, p), {}), zy = (t) => typeof t == "string" ? t : !t || !t.class ? "" : t.class && typeof t.class == "string" ? t.class.split(" ") : t.class && Array.isArray(t.class) ? t.class : "", By = (t) => t.flatMap(zy).map((h) => h.trim()).filter(Boolean).filter((h, c, d) => d.indexOf(h) === c).join(" "), Fy = (t) => t.replace(/(\w)(\w*)(_|-|\s*)/g, (p, h, c) => h.toUpperCase() + c.toLowerCase()), G0 = (t, { nameAttr: p, icons: h, attrs: c }) => {
    var Zy;
    const d = t.getAttribute(p);
    if (d == null)
      return;
    const s = Fy(d), i = h[s];
    if (!i)
      return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);
    const Ly = ky(t), [Ty, Uy, Oy] = i, Sy = { ...Uy, "data-lucide": d, ...c, ...Ly }, fy = By(["lucide", `lucide-${d}`, Ly, c]);
    fy && Object.assign(Sy, { class: fy });
    const Iy = I0([Ty, Sy, Oy]);
    return (Zy = t.parentNode) == null ? undefined : Zy.replaceChild(Iy, t);
  };
  const a = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
  const W0 = ["svg", a, [["path", { d: "M3.5 13h6" }], ["path", { d: "m2 16 4.5-9 4.5 9" }], ["path", { d: "M18 7v9" }], ["path", { d: "m14 12 4 4 4-4" }]]];
  const X0 = ["svg", a, [["path", { d: "M3.5 13h6" }], ["path", { d: "m2 16 4.5-9 4.5 9" }], ["path", { d: "M18 16V7" }], ["path", { d: "m14 11 4-4 4 4" }]]];
  const N0 = ["svg", a, [["path", { d: "M21 14h-5" }], ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" }], ["path", { d: "M4.5 13h6" }], ["path", { d: "m3 16 4.5-9 4.5 9" }]]];
  const K0 = ["svg", a, [["circle", { cx: "16", cy: "4", r: "1" }], ["path", { d: "m18 19 1-7-6 1" }], ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5" }], ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6" }], ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6" }]]];
  const J0 = ["svg", a, [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" }]]];
  const j0 = ["svg", a, [["path", { d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }], ["path", { d: "M6 8h12" }], ["path", { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" }], ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5" }]]];
  const Q0 = ["svg", a, [["path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }], ["path", { d: "m12 15 5 6H7Z" }]]];
  const l = ["svg", a, [["circle", { cx: "12", cy: "13", r: "8" }], ["path", { d: "M5 3 2 6" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.38 18.7 4 21" }], ["path", { d: "M17.64 18.67 20 21" }], ["path", { d: "m9 13 2 2 4-4" }]]];
  const g = ["svg", a, [["circle", { cx: "12", cy: "13", r: "8" }], ["path", { d: "M5 3 2 6" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.38 18.7 4 21" }], ["path", { d: "M17.64 18.67 20 21" }], ["path", { d: "M9 13h6" }]]];
  const _0 = ["svg", a, [["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }], ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.26 18.67 4 21" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M4 4 2 6" }]]];
  const x = ["svg", a, [["circle", { cx: "12", cy: "13", r: "8" }], ["path", { d: "M5 3 2 6" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.38 18.7 4 21" }], ["path", { d: "M17.64 18.67 20 21" }], ["path", { d: "M12 10v6" }], ["path", { d: "M9 13h6" }]]];
  const Y0 = ["svg", a, [["circle", { cx: "12", cy: "13", r: "8" }], ["path", { d: "M12 9v4l2 2" }], ["path", { d: "M5 3 2 6" }], ["path", { d: "m22 6-3-3" }], ["path", { d: "M6.38 18.7 4 21" }], ["path", { d: "M17.64 18.67 20 21" }]]];
  const $0 = ["svg", a, [["path", { d: "M11 21c0-2.5 2-2.5 2-5" }], ["path", { d: "M16 21c0-2.5 2-2.5 2-5" }], ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }], ["path", { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }], ["path", { d: "M6 21c0-2.5 2-2.5 2-5" }]]];
  const aa = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["polyline", { points: "11 3 11 11 14 8 17 11 17 3" }]]];
  const ta = ["svg", a, [["path", { d: "M2 12h20" }], ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }], ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }], ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }]]];
  const ha = ["svg", a, [["path", { d: "M12 2v20" }], ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }], ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }], ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }], ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }]]];
  const da = ["svg", a, [["line", { x1: "21", x2: "3", y1: "6", y2: "6" }], ["line", { x1: "17", x2: "7", y1: "12", y2: "12" }], ["line", { x1: "19", x2: "5", y1: "18", y2: "18" }]]];
  const pa = ["svg", a, [["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2" }], ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2" }], ["path", { d: "M22 22H2" }]]];
  const ca = ["svg", a, [["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2" }], ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2" }], ["path", { d: "M22 22V2" }]]];
  const Ma = ["svg", a, [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }], ["path", { d: "M17 22v-5" }], ["path", { d: "M17 7V2" }], ["path", { d: "M7 22v-3" }], ["path", { d: "M7 5V2" }]]];
  const sa = ["svg", a, [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }], ["path", { d: "M10 2v20" }], ["path", { d: "M20 2v20" }]]];
  const ea = ["svg", a, [["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }], ["path", { d: "M4 2v20" }], ["path", { d: "M14 2v20" }]]];
  const ra = ["svg", a, [["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }], ["path", { d: "M12 2v20" }]]];
  const va = ["svg", a, [["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2" }], ["path", { d: "M22 2v20" }]]];
  const na = ["svg", a, [["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }], ["path", { d: "M2 2v20" }]]];
  const oa = ["svg", a, [["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2" }], ["path", { d: "M4 22V2" }], ["path", { d: "M20 22V2" }]]];
  const ia = ["svg", a, [["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2" }], ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2" }], ["path", { d: "M3 2v20" }], ["path", { d: "M21 2v20" }]]];
  const la = ["svg", a, [["line", { x1: "3", x2: "21", y1: "6", y2: "6" }], ["line", { x1: "3", x2: "21", y1: "12", y2: "12" }], ["line", { x1: "3", x2: "21", y1: "18", y2: "18" }]]];
  const ga = ["svg", a, [["line", { x1: "21", x2: "3", y1: "6", y2: "6" }], ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }], ["line", { x1: "17", x2: "3", y1: "18", y2: "18" }]]];
  const xa = ["svg", a, [["line", { x1: "21", x2: "3", y1: "6", y2: "6" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }], ["line", { x1: "21", x2: "7", y1: "18", y2: "18" }]]];
  const ya = ["svg", a, [["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2" }], ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2" }], ["path", { d: "M22 2H2" }]]];
  const ma = ["svg", a, [["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2" }], ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2" }], ["path", { d: "M2 2v20" }]]];
  const Ha = ["svg", a, [["path", { d: "M22 17h-3" }], ["path", { d: "M22 7h-5" }], ["path", { d: "M5 17H2" }], ["path", { d: "M7 7H2" }], ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2" }], ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2" }]]];
  const Va = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }], ["path", { d: "M2 20h20" }], ["path", { d: "M2 10h20" }]]];
  const Ca = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }], ["path", { d: "M2 14h20" }], ["path", { d: "M2 4h20" }]]];
  const wa = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }], ["path", { d: "M2 12h20" }]]];
  const ua = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }], ["path", { d: "M2 22h20" }]]];
  const Aa = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2" }], ["path", { d: "M2 2h20" }]]];
  const La = ["svg", a, [["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2" }], ["path", { d: "M22 20H2" }], ["path", { d: "M22 4H2" }]]];
  const Sa = ["svg", a, [["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2" }], ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2" }], ["path", { d: "M2 21h20" }], ["path", { d: "M2 3h20" }]]];
  const fa = ["svg", a, [["path", { d: "M10 10H6" }], ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }], ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" }], ["path", { d: "M8 8v4" }], ["path", { d: "M9 18h6" }], ["circle", { cx: "17", cy: "18", r: "2" }], ["circle", { cx: "7", cy: "18", r: "2" }]]];
  const Za = ["svg", a, [["path", { d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" }], ["path", { d: "M16 12h3" }]]];
  const Pa = ["svg", a, [["path", { d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }], ["path", { d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }]]];
  const ka = ["svg", a, [["path", { d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" }], ["path", { d: "M10 5H8a2 2 0 0 0 0 4h.68" }], ["path", { d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" }], ["path", { d: "M14 5h2a2 2 0 0 1 0 4h-.68" }], ["path", { d: "M18 22H6" }], ["path", { d: "M9 2h6" }]]];
  const za = ["svg", a, [["path", { d: "M12 22V8" }], ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" }], ["circle", { cx: "12", cy: "5", r: "3" }]]];
  const Ba = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }], ["path", { d: "M7.5 8 10 9" }], ["path", { d: "m14 9 2.5-1" }], ["path", { d: "M9 10h.01" }], ["path", { d: "M15 10h.01" }]]];
  const Fa = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 15h8" }], ["path", { d: "M8 9h2" }], ["path", { d: "M14 9h2" }]]];
  const Da = ["svg", a, [["path", { d: "M2 12 7 2" }], ["path", { d: "m7 12 5-10" }], ["path", { d: "m12 12 5-10" }], ["path", { d: "m17 12 5-10" }], ["path", { d: "M4.5 7h15" }], ["path", { d: "M12 16v6" }]]];
  const qa = ["svg", a, [["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }], ["path", { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" }], ["path", { d: "M9 12v5" }], ["path", { d: "M15 12v5" }], ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" }]]];
  const Ra = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m14.31 8 5.74 9.94" }], ["path", { d: "M9.69 8h11.48" }], ["path", { d: "m7.38 12 5.74-9.94" }], ["path", { d: "M9.69 16 3.95 6.06" }], ["path", { d: "M14.31 16H2.83" }], ["path", { d: "m16.62 12-5.74 9.94" }]]];
  const ba = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M6 8h.01" }], ["path", { d: "M10 8h.01" }], ["path", { d: "M14 8h.01" }]]];
  const Ta = ["svg", a, [["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }], ["path", { d: "M10 4v4" }], ["path", { d: "M2 8h20" }], ["path", { d: "M6 4v4" }]]];
  const Ua = ["svg", a, [["path", { d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" }], ["path", { d: "M10 2c1 .5 2 2 2 5" }]]];
  const Oa = ["svg", a, [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2" }], ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2" }], ["path", { d: "m9 15 3-3 3 3" }], ["path", { d: "M12 12v9" }]]];
  const Ia = ["svg", a, [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }], ["path", { d: "m9.5 17 5-5" }], ["path", { d: "m9.5 12 5 5" }]]];
  const Ea = ["svg", a, [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }], ["path", { d: "M10 12h4" }]]];
  const Ga = ["svg", a, [["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }], ["path", { d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }], ["path", { d: "M5 18v2" }], ["path", { d: "M19 18v2" }]]];
  const Wa = ["svg", a, [["path", { d: "M15 5H9" }], ["path", { d: "M15 9v3h4l-7 7-7-7h4V9z" }]]];
  const Xa = ["svg", a, [["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z" }]]];
  const Na = ["svg", a, [["path", { d: "M19 15V9" }], ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z" }]]];
  const Ka = ["svg", a, [["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z" }]]];
  const Ja = ["svg", a, [["path", { d: "M5 9v6" }], ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z" }]]];
  const ja = ["svg", a, [["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z" }]]];
  const Qa = ["svg", a, [["path", { d: "M9 19h6" }], ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z" }]]];
  const _a = ["svg", a, [["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z" }]]];
  const Ya = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }], ["path", { d: "M17 20v-6h-2" }], ["path", { d: "M15 20h4" }]]];
  const $a = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "M17 10V4h-2" }], ["path", { d: "M15 10h4" }], ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]]];
  const y = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "M20 8h-5" }], ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }], ["path", { d: "M15 14h5l-5 6h5" }]]];
  const at = ["svg", a, [["path", { d: "M19 3H5" }], ["path", { d: "M12 21V7" }], ["path", { d: "m6 15 6 6 6-6" }]]];
  const tt = ["svg", a, [["path", { d: "M17 7 7 17" }], ["path", { d: "M17 17H7V7" }]]];
  const ht = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "M11 4h4" }], ["path", { d: "M11 8h7" }], ["path", { d: "M11 12h10" }]]];
  const dt = ["svg", a, [["path", { d: "m7 7 10 10" }], ["path", { d: "M17 7v10H7" }]]];
  const pt = ["svg", a, [["path", { d: "M12 2v14" }], ["path", { d: "m19 9-7 7-7-7" }], ["circle", { cx: "12", cy: "21", r: "1" }]]];
  const ct = ["svg", a, [["path", { d: "M12 17V3" }], ["path", { d: "m6 11 6 6 6-6" }], ["path", { d: "M19 21H5" }]]];
  const Mt = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "m21 8-4-4-4 4" }], ["path", { d: "M17 4v16" }]]];
  const m = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 20V4" }], ["path", { d: "M11 4h10" }], ["path", { d: "M11 8h7" }], ["path", { d: "M11 12h4" }]]];
  const H = ["svg", a, [["path", { d: "m3 16 4 4 4-4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M15 4h5l-5 6h5" }], ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }], ["path", { d: "M20 18h-5" }]]];
  const st = ["svg", a, [["path", { d: "M12 5v14" }], ["path", { d: "m19 12-7 7-7-7" }]]];
  const et = ["svg", a, [["path", { d: "m9 6-6 6 6 6" }], ["path", { d: "M3 12h14" }], ["path", { d: "M21 19V5" }]]];
  const rt = ["svg", a, [["path", { d: "M8 3 4 7l4 4" }], ["path", { d: "M4 7h16" }], ["path", { d: "m16 21 4-4-4-4" }], ["path", { d: "M20 17H4" }]]];
  const vt = ["svg", a, [["path", { d: "M3 19V5" }], ["path", { d: "m13 6-6 6 6 6" }], ["path", { d: "M7 12h14" }]]];
  const nt = ["svg", a, [["path", { d: "m12 19-7-7 7-7" }], ["path", { d: "M19 12H5" }]]];
  const ot = ["svg", a, [["path", { d: "M3 5v14" }], ["path", { d: "M21 12H7" }], ["path", { d: "m15 18 6-6-6-6" }]]];
  const it = ["svg", a, [["path", { d: "m16 3 4 4-4 4" }], ["path", { d: "M20 7H4" }], ["path", { d: "m8 21-4-4 4-4" }], ["path", { d: "M4 17h16" }]]];
  const lt = ["svg", a, [["path", { d: "M17 12H3" }], ["path", { d: "m11 18 6-6-6-6" }], ["path", { d: "M21 5v14" }]]];
  const gt = ["svg", a, [["path", { d: "M5 12h14" }], ["path", { d: "m12 5 7 7-7 7" }]]];
  const xt = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }], ["path", { d: "M17 20v-6h-2" }], ["path", { d: "M15 20h4" }]]];
  const yt = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M17 10V4h-2" }], ["path", { d: "M15 10h4" }], ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]]];
  const V = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M20 8h-5" }], ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }], ["path", { d: "M15 14h5l-5 6h5" }]]];
  const mt = ["svg", a, [["path", { d: "m21 16-4 4-4-4" }], ["path", { d: "M17 20V4" }], ["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }]]];
  const Ht = ["svg", a, [["path", { d: "m5 9 7-7 7 7" }], ["path", { d: "M12 16V2" }], ["circle", { cx: "12", cy: "21", r: "1" }]]];
  const Vt = ["svg", a, [["path", { d: "m18 9-6-6-6 6" }], ["path", { d: "M12 3v14" }], ["path", { d: "M5 21h14" }]]];
  const Ct = ["svg", a, [["path", { d: "M7 17V7h10" }], ["path", { d: "M17 17 7 7" }]]];
  const C = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M11 12h4" }], ["path", { d: "M11 16h7" }], ["path", { d: "M11 20h10" }]]];
  const wt = ["svg", a, [["path", { d: "M7 7h10v10" }], ["path", { d: "M7 17 17 7" }]]];
  const ut = ["svg", a, [["path", { d: "M5 3h14" }], ["path", { d: "m18 13-6-6-6 6" }], ["path", { d: "M12 7v14" }]]];
  const At = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M11 12h10" }], ["path", { d: "M11 16h7" }], ["path", { d: "M11 20h4" }]]];
  const w = ["svg", a, [["path", { d: "m3 8 4-4 4 4" }], ["path", { d: "M7 4v16" }], ["path", { d: "M15 4h5l-5 6h5" }], ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }], ["path", { d: "M20 18h-5" }]]];
  const Lt = ["svg", a, [["path", { d: "m5 12 7-7 7 7" }], ["path", { d: "M12 19V5" }]]];
  const St = ["svg", a, [["path", { d: "m4 6 3-3 3 3" }], ["path", { d: "M7 17V3" }], ["path", { d: "m14 6 3-3 3 3" }], ["path", { d: "M17 17V3" }], ["path", { d: "M4 21h16" }]]];
  const ft = ["svg", a, [["path", { d: "M12 6v12" }], ["path", { d: "M17.196 9 6.804 15" }], ["path", { d: "m6.804 9 10.392 6" }]]];
  const Zt = ["svg", a, [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]]];
  const Pt = ["svg", a, [["circle", { cx: "12", cy: "12", r: "1" }], ["path", { d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" }], ["path", { d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" }]]];
  const kt = ["svg", a, [["path", { d: "M2 10v3" }], ["path", { d: "M6 6v11" }], ["path", { d: "M10 3v18" }], ["path", { d: "M14 8v7" }], ["path", { d: "M18 5v13" }], ["path", { d: "M22 10v3" }]]];
  const zt = ["svg", a, [["path", { d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" }]]];
  const Bt = ["svg", a, [["path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" }], ["circle", { cx: "12", cy: "8", r: "6" }]]];
  const Ft = ["svg", a, [["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }], ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" }]]];
  const u = ["svg", a, [["path", { d: "M4 4v16h16" }], ["path", { d: "m4 20 7-7" }]]];
  const Dt = ["svg", a, [["path", { d: "M9 12h.01" }], ["path", { d: "M15 12h.01" }], ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }], ["path", { d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }]]];
  const qt = ["svg", a, [["path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" }], ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" }], ["path", { d: "M8 10h8" }], ["path", { d: "M8 18h8" }]]];
  const Rt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]]];
  const bt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M12 7v10" }], ["path", { d: "M15.4 10a4 4 0 1 0 0 4" }]]];
  const A = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const Tt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }], ["path", { d: "M12 18V6" }]]];
  const Ut = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M7 12h5" }], ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]]];
  const Ot = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17" }]]];
  const It = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M8 8h8" }], ["path", { d: "M8 12h8" }], ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8" }]]];
  const Et = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "12" }], ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8" }]]];
  const Gt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "m9 8 3 3v7" }], ["path", { d: "m12 11 3-3" }], ["path", { d: "M9 12h6" }], ["path", { d: "M9 16h6" }]]];
  const Wt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]]];
  const Xt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "M9 9h.01" }], ["path", { d: "M15 15h.01" }]]];
  const Nt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "16" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]]];
  const Kt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M8 12h4" }], ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0" }], ["path", { d: "M8 16h7" }]]];
  const Jt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M9 16h5" }], ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9" }]]];
  const jt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["path", { d: "M11 17V8h4" }], ["path", { d: "M11 12h3" }], ["path", { d: "M9 16h4" }]]];
  const Qt = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }], ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }], ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]]];
  const _t = ["svg", a, [["path", { d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }]]];
  const Yt = ["svg", a, [["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }], ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }], ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1" }], ["circle", { cx: "18", cy: "20", r: "2" }], ["circle", { cx: "9", cy: "20", r: "2" }]]];
  const $t = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m4.9 4.9 14.2 14.2" }]]];
  const ah = ["svg", a, [["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }], ["path", { d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" }]]];
  const th = ["svg", a, [["path", { d: "M10 10.01h.01" }], ["path", { d: "M10 14.01h.01" }], ["path", { d: "M14 10.01h.01" }], ["path", { d: "M14 14.01h.01" }], ["path", { d: "M18 6v11.5" }], ["path", { d: "M6 6v12" }], ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "2" }]]];
  const hh = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M6 12h.01M18 12h.01" }]]];
  const dh = ["svg", a, [["path", { d: "M3 5v14" }], ["path", { d: "M8 5v14" }], ["path", { d: "M12 5v14" }], ["path", { d: "M17 5v14" }], ["path", { d: "M21 5v14" }]]];
  const ph = ["svg", a, [["path", { d: "M4 20h16" }], ["path", { d: "m6 16 6-12 6 12" }], ["path", { d: "M8 12h8" }]]];
  const ch = ["svg", a, [["path", { d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" }], ["line", { x1: "10", x2: "8", y1: "5", y2: "7" }], ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "7", x2: "7", y1: "19", y2: "21" }], ["line", { x1: "17", x2: "17", y1: "19", y2: "21" }]]];
  const Mh = ["svg", a, [["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }], ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" }], ["path", { d: "m11 7-3 5h4l-3 5" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]]];
  const sh = ["svg", a, [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }], ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "13" }]]];
  const eh = ["svg", a, [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }], ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }]]];
  const rh = ["svg", a, [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }], ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }]]];
  const vh = ["svg", a, [["path", { d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2" }], ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }], ["line", { x1: "10", x2: "10", y1: "7", y2: "13" }], ["line", { x1: "10", x2: "10", y1: "17", y2: "17.01" }]]];
  const nh = ["svg", a, [["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }], ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]]];
  const oh = ["svg", a, [["path", { d: "M4.5 3h15" }], ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }], ["path", { d: "M6 14h12" }]]];
  const ih = ["svg", a, [["path", { d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" }], ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }], ["path", { d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const lh = ["svg", a, [["path", { d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" }], ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28" }]]];
  const gh = ["svg", a, [["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }], ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }], ["path", { d: "M12 4v6" }], ["path", { d: "M2 18h20" }]]];
  const xh = ["svg", a, [["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }], ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }], ["path", { d: "M3 18h18" }]]];
  const yh = ["svg", a, [["path", { d: "M2 4v16" }], ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }], ["path", { d: "M2 17h20" }], ["path", { d: "M6 8v9" }]]];
  const mh = ["svg", a, [["circle", { cx: "12.5", cy: "8.5", r: "2.5" }], ["path", { d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" }], ["path", { d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }]]];
  const Hh = ["svg", a, [["path", { d: "M13 13v5" }], ["path", { d: "M17 11.47V8" }], ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }], ["path", { d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" }], ["path", { d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" }], ["path", { d: "M9 14.6V18" }]]];
  const Vh = ["svg", a, [["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1" }], ["path", { d: "M9 12v6" }], ["path", { d: "M13 12v6" }], ["path", { d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" }], ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]]];
  const Ch = ["svg", a, [["path", { d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" }], ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }], ["circle", { cx: "18", cy: "8", r: "3" }]]];
  const wh = ["svg", a, [["path", { d: "M18.8 4A6.3 8.7 0 0 1 20 9" }], ["path", { d: "M9 9h.01" }], ["circle", { cx: "9", cy: "9", r: "7" }], ["rect", { width: "10", height: "6", x: "4", y: "16", rx: "2" }], ["path", { d: "M14 19c3 0 4.6-1.6 4.6-1.6" }], ["circle", { cx: "20", cy: "16", r: "2" }]]];
  const uh = ["svg", a, [["path", { d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2" }], ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }], ["path", { d: "M15 8h6" }]]];
  const Ah = ["svg", a, [["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" }], ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" }], ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }], ["path", { d: "m2 2 20 20" }]]];
  const Lh = ["svg", a, [["path", { d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7" }], ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }], ["path", { d: "M15 8h6" }], ["path", { d: "M18 5v6" }]]];
  const Sh = ["svg", a, [["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }], ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }], ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8" }], ["path", { d: "M22 8c0-2.3-.8-4.3-2-6" }]]];
  const fh = ["svg", a, [["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }], ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }]]];
  const L = ["svg", a, [["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1" }], ["path", { d: "m22 15-3-3 3-3" }], ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1" }]]];
  const S = ["svg", a, [["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1" }], ["path", { d: "m2 9 3 3-3 3" }], ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1" }]]];
  const Zh = ["svg", a, [["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1" }], ["path", { d: "m9 22 3-3 3 3" }], ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1" }]]];
  const Ph = ["svg", a, [["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1" }], ["path", { d: "m15 2-3 3-3-3" }], ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1" }]]];
  const kh = ["svg", a, [["path", { d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" }], ["path", { d: "M15 14a5 5 0 0 0-7.584 2" }], ["path", { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15" }]]];
  const zh = ["svg", a, [["circle", { cx: "18.5", cy: "17.5", r: "3.5" }], ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }], ["circle", { cx: "15", cy: "5", r: "1" }], ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }]]];
  const Bh = ["svg", a, [["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2" }], ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2" }], ["path", { d: "M6 20h4" }], ["path", { d: "M14 10h4" }], ["path", { d: "M6 14h2v6" }], ["path", { d: "M14 4h2v6" }]]];
  const Fh = ["svg", a, [["path", { d: "M10 10h4" }], ["path", { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }], ["path", { d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" }], ["path", { d: "M 22 16 L 2 16" }], ["path", { d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" }], ["path", { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" }]]];
  const Dh = ["svg", a, [["circle", { cx: "12", cy: "11.9", r: "2" }], ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }], ["path", { d: "m8.9 10.1 1.4.8" }], ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }], ["path", { d: "m15.1 10.1-1.4.8" }], ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }], ["path", { d: "M12 13.9v1.6" }], ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0" }], ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }], ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }]]];
  const qh = ["svg", a, [["path", { d: "M16 7h.01" }], ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }], ["path", { d: "m20 7 2 .5-2 .5" }], ["path", { d: "M10 18v3" }], ["path", { d: "M14 17.75V21" }], ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61" }]]];
  const Rh = ["svg", a, [["path", { d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" }]]];
  const bh = ["svg", a, [["circle", { cx: "9", cy: "9", r: "7" }], ["circle", { cx: "15", cy: "15", r: "7" }]]];
  const Th = ["svg", a, [["path", { d: "M3 3h18" }], ["path", { d: "M20 7H8" }], ["path", { d: "M20 11H8" }], ["path", { d: "M10 19h10" }], ["path", { d: "M8 15h12" }], ["path", { d: "M4 3v14" }], ["circle", { cx: "4", cy: "19", r: "2" }]]];
  const Uh = ["svg", a, [["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }], ["path", { d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" }]]];
  const Oh = ["svg", a, [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }], ["line", { x1: "18", x2: "21", y1: "12", y2: "12" }], ["line", { x1: "3", x2: "6", y1: "12", y2: "12" }]]];
  const Ih = ["svg", a, [["path", { d: "m17 17-5 5V12l-5 5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M14.5 9.5 17 7l-5-5v4.5" }]]];
  const Eh = ["svg", a, [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }], ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66" }], ["path", { d: "M18 12h.01" }]]];
  const Gh = ["svg", a, [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }]]];
  const Wh = ["svg", a, [["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]]];
  const Xh = ["svg", a, [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }], ["circle", { cx: "12", cy: "12", r: "4" }]]];
  const Nh = ["svg", a, [["circle", { cx: "11", cy: "13", r: "9" }], ["path", { d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }], ["path", { d: "m22 2-1.5 1.5" }]]];
  const Kh = ["svg", a, [["path", { d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" }]]];
  const Jh = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m8 13 4-7 4 7" }], ["path", { d: "M9.1 11h5.7" }]]];
  const jh = ["svg", a, [["path", { d: "M12 6v7" }], ["path", { d: "M16 8v3" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M8 8v3" }]]];
  const Qh = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m9 9.5 2 2 4-4" }]]];
  const _h = ["svg", a, [["path", { d: "M2 16V4a2 2 0 0 1 2-2h11" }], ["path", { d: "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12" }], ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1" }]]];
  const f = ["svg", a, [["path", { d: "M12 17h2" }], ["path", { d: "M12 22h2" }], ["path", { d: "M12 2h2" }], ["path", { d: "M18 22h1a1 1 0 0 0 1-1" }], ["path", { d: "M18 2h1a1 1 0 0 1 1 1v1" }], ["path", { d: "M20 15v2h-2" }], ["path", { d: "M20 8v3" }], ["path", { d: "M4 11V9" }], ["path", { d: "M4 19.5V15" }], ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" }], ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8" }]]];
  const Yh = ["svg", a, [["path", { d: "M12 13V7" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m9 10 3 3 3-3" }]]];
  const $h = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2" }], ["circle", { cx: "15", cy: "12", r: "1" }], ["circle", { cx: "9", cy: "12", r: "1" }]]];
  const a4 = ["svg", a, [["path", { d: "M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]];
  const t4 = ["svg", a, [["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["circle", { cx: "10", cy: "8", r: "2" }]]];
  const h4 = ["svg", a, [["path", { d: "m19 3 1 1" }], ["path", { d: "m20 2-4.5 4.5" }], ["path", { d: "M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" }], ["circle", { cx: "14", cy: "8", r: "2" }]]];
  const d4 = ["svg", a, [["path", { d: "M18 6V4a2 2 0 1 0-4 0v2" }], ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }], ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1" }]]];
  const p4 = ["svg", a, [["path", { d: "M10 2v8l3-3 3 3V2" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]];
  const c4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M9 10h6" }]]];
  const M4 = ["svg", a, [["path", { d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" }], ["path", { d: "m16 12 2 2 4-4" }], ["path", { d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" }]]];
  const s4 = ["svg", a, [["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }], ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }], ["path", { d: "M6 8h2" }], ["path", { d: "M6 12h2" }], ["path", { d: "M16 8h2" }], ["path", { d: "M16 12h2" }]]];
  const e4 = ["svg", a, [["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }], ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }]]];
  const r4 = ["svg", a, [["path", { d: "M12 7v6" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M9 10h6" }]]];
  const v4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M8 11h8" }], ["path", { d: "M8 7h6" }]]];
  const n4 = ["svg", a, [["path", { d: "M10 13h4" }], ["path", { d: "M12 6v7" }], ["path", { d: "M16 8V6H8v2" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]];
  const o4 = ["svg", a, [["path", { d: "M12 13V7" }], ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }], ["path", { d: "m9 10 3-3 3 3" }], ["path", { d: "m9 5 3-3 3 3" }]]];
  const i4 = ["svg", a, [["path", { d: "M12 13V7" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m9 10 3-3 3 3" }]]];
  const l4 = ["svg", a, [["path", { d: "M15 13a3 3 0 1 0-6 0" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["circle", { cx: "12", cy: "8", r: "2" }]]];
  const g4 = ["svg", a, [["path", { d: "m14.5 7-5 5" }], ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }], ["path", { d: "m9.5 7 5 5" }]]];
  const x4 = ["svg", a, [["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }]]];
  const y4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }], ["path", { d: "m9 10 2 2 4-4" }]]];
  const m4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }], ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]]];
  const H4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }], ["line", { x1: "12", x2: "12", y1: "7", y2: "13" }], ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]]];
  const V4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }], ["path", { d: "m14.5 7.5-5 5" }], ["path", { d: "m9.5 7.5 5 5" }]]];
  const C4 = ["svg", a, [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }]]];
  const w4 = ["svg", a, [["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }], ["path", { d: "M8 8v1" }], ["path", { d: "M12 8v1" }], ["path", { d: "M16 8v1" }], ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2" }], ["circle", { cx: "8", cy: "15", r: "2" }], ["circle", { cx: "16", cy: "15", r: "2" }]]];
  const u4 = ["svg", a, [["path", { d: "M12 6V2H8" }], ["path", { d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" }], ["path", { d: "M2 12h2" }], ["path", { d: "M9 11v2" }], ["path", { d: "M15 11v2" }], ["path", { d: "M20 12h2" }]]];
  const A4 = ["svg", a, [["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33" }], ["path", { d: "M2 14h2" }], ["path", { d: "M20 14h2" }], ["path", { d: "M22 22 2 2" }], ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }], ["path", { d: "M9 13v2" }], ["path", { d: "M9.67 4H12v2.33" }]]];
  const L4 = ["svg", a, [["path", { d: "M12 8V4H8" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }], ["path", { d: "M2 14h2" }], ["path", { d: "M20 14h2" }], ["path", { d: "M15 13v2" }], ["path", { d: "M9 13v2" }]]];
  const S4 = ["svg", a, [["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M21 19a2 2 0 0 1-2 2" }], ["path", { d: "M5 21a2 2 0 0 1-2-2" }], ["path", { d: "M9 3h1" }], ["path", { d: "M9 21h1" }], ["path", { d: "M14 3h1" }], ["path", { d: "M14 21h1" }], ["path", { d: "M3 9v1" }], ["path", { d: "M21 9v1" }], ["path", { d: "M3 14v1" }], ["path", { d: "M21 14v1" }]]];
  const f4 = ["svg", a, [["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }], ["path", { d: "m3.3 7 8.7 5 8.7-5" }], ["path", { d: "M12 22V12" }]]];
  const Z4 = ["svg", a, [["path", { d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" }], ["path", { d: "m7 16.5-4.74-2.85" }], ["path", { d: "m7 16.5 5-3" }], ["path", { d: "M7 16.5v5.17" }], ["path", { d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" }], ["path", { d: "m17 16.5-5-3" }], ["path", { d: "m17 16.5 4.74-2.85" }], ["path", { d: "M17 16.5v5.17" }], ["path", { d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" }], ["path", { d: "M12 8 7.26 5.15" }], ["path", { d: "m12 8 4.74-2.85" }], ["path", { d: "M12 13.5V8" }]]];
  const Z = ["svg", a, [["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }], ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }]]];
  const P4 = ["svg", a, [["path", { d: "M16 3h3v18h-3" }], ["path", { d: "M8 21H5V3h3" }]]];
  const k4 = ["svg", a, [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }], ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }], ["path", { d: "M12 13h4" }], ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1" }], ["path", { d: "M12 8h8" }], ["path", { d: "M16 8V5a2 2 0 0 1 2-2" }], ["circle", { cx: "16", cy: "13", r: ".5" }], ["circle", { cx: "18", cy: "3", r: ".5" }], ["circle", { cx: "20", cy: "21", r: ".5" }], ["circle", { cx: "20", cy: "8", r: ".5" }]]];
  const z4 = ["svg", a, [["path", { d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5" }], ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }], ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }], ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "m15.7 10.4-.9.4" }], ["path", { d: "m9.2 13.2-.9.4" }], ["path", { d: "m13.6 15.7-.4-.9" }], ["path", { d: "m10.8 9.2-.4-.9" }], ["path", { d: "m15.7 13.5-.9-.4" }], ["path", { d: "m9.2 10.9-.9-.4" }], ["path", { d: "m10.5 15.7.4-.9" }], ["path", { d: "m13.1 9.2.4-.9" }]]];
  const B4 = ["svg", a, [["path", { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }], ["path", { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }], ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" }], ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }], ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }], ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }], ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }], ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }], ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18" }]]];
  const F4 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 9v6" }], ["path", { d: "M16 15v6" }], ["path", { d: "M16 3v6" }], ["path", { d: "M3 15h18" }], ["path", { d: "M3 9h18" }], ["path", { d: "M8 15v6" }], ["path", { d: "M8 3v6" }]]];
  const D4 = ["svg", a, [["path", { d: "M12 12h.01" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }], ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]]];
  const q4 = ["svg", a, [["path", { d: "M12 11v4" }], ["path", { d: "M14 13h-4" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }], ["path", { d: "M18 6v14" }], ["path", { d: "M6 6v14" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]]];
  const R4 = ["svg", a, [["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]]];
  const b4 = ["svg", a, [["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2" }], ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }], ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }]]];
  const T4 = ["svg", a, [["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" }], ["path", { d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" }]]];
  const U4 = ["svg", a, [["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" }], ["path", { d: "M14.12 3.88 16 2" }], ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" }], ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" }], ["path", { d: "M12 20v-8" }], ["path", { d: "M6 13H2" }], ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }]]];
  const O4 = ["svg", a, [["path", { d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z" }], ["path", { d: "M14.12 3.88 16 2" }], ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5" }], ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }], ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }], ["path", { d: "M6 13H2" }], ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }], ["path", { d: "m8 2 1.88 1.88" }], ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }]]];
  const I4 = ["svg", a, [["path", { d: "m8 2 1.88 1.88" }], ["path", { d: "M14.12 3.88 16 2" }], ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }], ["path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" }], ["path", { d: "M12 20v-9" }], ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }], ["path", { d: "M6 13H2" }], ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }], ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }], ["path", { d: "M22 13h-4" }], ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4" }]]];
  const E4 = ["svg", a, [["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }], ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }], ["path", { d: "M10 6h4" }], ["path", { d: "M10 10h4" }], ["path", { d: "M10 14h4" }], ["path", { d: "M10 18h4" }]]];
  const G4 = ["svg", a, [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }], ["path", { d: "M9 22v-4h6v4" }], ["path", { d: "M8 6h.01" }], ["path", { d: "M16 6h.01" }], ["path", { d: "M12 6h.01" }], ["path", { d: "M12 10h.01" }], ["path", { d: "M12 14h.01" }], ["path", { d: "M16 10h.01" }], ["path", { d: "M16 14h.01" }], ["path", { d: "M8 10h.01" }], ["path", { d: "M8 14h.01" }]]];
  const W4 = ["svg", a, [["path", { d: "M4 6 2 7" }], ["path", { d: "M10 6h4" }], ["path", { d: "m22 7-2-1" }], ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }], ["path", { d: "M4 11h16" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M16 15h.01" }], ["path", { d: "M6 19v2" }], ["path", { d: "M18 21v-2" }]]];
  const X4 = ["svg", a, [["path", { d: "M8 6v6" }], ["path", { d: "M15 6v6" }], ["path", { d: "M2 12h19.6" }], ["path", { d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" }], ["circle", { cx: "7", cy: "18", r: "2" }], ["path", { d: "M9 18h5" }], ["circle", { cx: "16", cy: "18", r: "2" }]]];
  const N4 = ["svg", a, [["path", { d: "M10 3h.01" }], ["path", { d: "M14 2h.01" }], ["path", { d: "m2 9 20-5" }], ["path", { d: "M12 12V6.5" }], ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3" }], ["path", { d: "M9 12v5" }], ["path", { d: "M15 12v5" }], ["path", { d: "M4 17h16" }]]];
  const K4 = ["svg", a, [["path", { d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" }], ["path", { d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" }], ["path", { d: "M21 21v-2h-4" }], ["path", { d: "M3 5h4V3" }], ["path", { d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" }]]];
  const J4 = ["svg", a, [["circle", { cx: "9", cy: "7", r: "2" }], ["path", { d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6" }], ["path", { d: "M16 13H3" }], ["path", { d: "M16 17H3" }]]];
  const j4 = ["svg", a, [["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }], ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }], ["path", { d: "M2 21h20" }], ["path", { d: "M7 8v3" }], ["path", { d: "M12 8v3" }], ["path", { d: "M17 8v3" }], ["path", { d: "M7 4h.01" }], ["path", { d: "M12 4h.01" }], ["path", { d: "M17 4h.01" }]]];
  const Q4 = ["svg", a, [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }], ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }], ["path", { d: "M16 10h.01" }], ["path", { d: "M12 10h.01" }], ["path", { d: "M8 10h.01" }], ["path", { d: "M12 14h.01" }], ["path", { d: "M8 14h.01" }], ["path", { d: "M12 18h.01" }], ["path", { d: "M8 18h.01" }]]];
  const _4 = ["svg", a, [["path", { d: "m14 18 4 4 4-4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M18 14v8" }], ["path", { d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }]]];
  const Y4 = ["svg", a, [["path", { d: "m14 18 4-4 4 4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M18 22v-8" }], ["path", { d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }]]];
  const $4 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }], ["path", { d: "M3 10h18" }], ["path", { d: "m16 20 2 2 4-4" }]]];
  const a5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "m9 16 2 2 4-4" }]]];
  const t5 = ["svg", a, [["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }], ["path", { d: "M16 2v4" }], ["path", { d: "M8 2v4" }], ["path", { d: "M3 10h5" }], ["path", { d: "M17.5 17.5 16 16.3V14" }], ["circle", { cx: "16", cy: "16", r: "6" }]]];
  const h5 = ["svg", a, [["path", { d: "m15.2 16.9-.9-.4" }], ["path", { d: "m15.2 19.1-.9.4" }], ["path", { d: "M16 2v4" }], ["path", { d: "m16.9 15.2-.4-.9" }], ["path", { d: "m16.9 20.8-.4.9" }], ["path", { d: "m19.5 14.3-.4.9" }], ["path", { d: "m19.5 21.7-.4-.9" }], ["path", { d: "M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }], ["path", { d: "m21.7 16.5-.9.4" }], ["path", { d: "m21.7 19.5-.9-.4" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }], ["circle", { cx: "18", cy: "18", r: "3" }]]];
  const d5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 14h.01" }], ["path", { d: "M12 14h.01" }], ["path", { d: "M16 14h.01" }], ["path", { d: "M8 18h.01" }], ["path", { d: "M12 18h.01" }], ["path", { d: "M16 18h.01" }]]];
  const p5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" }], ["path", { d: "M3 10h18" }], ["path", { d: "M15 22v-4a2 2 0 0 1 2-2h4" }]]];
  const c5 = ["svg", a, [["path", { d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" }], ["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" }]]];
  const M5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "M10 16h4" }]]];
  const s5 = ["svg", a, [["path", { d: "M16 19h6" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }]]];
  const e5 = ["svg", a, [["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }], ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5" }], ["path", { d: "M16 2v4" }], ["path", { d: "M3 10h7" }], ["path", { d: "M21 10h-5.5" }], ["path", { d: "m2 2 20 20" }]]];
  const r5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "M10 16h4" }], ["path", { d: "M12 14v4" }]]];
  const v5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }], ["path", { d: "M3 10h18" }], ["path", { d: "M16 19h6" }], ["path", { d: "M19 16v6" }]]];
  const n5 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M16 2v4" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }], ["path", { d: "M17 14h-6" }], ["path", { d: "M13 18H7" }], ["path", { d: "M7 14h.01" }], ["path", { d: "M17 18h.01" }]]];
  const o5 = ["svg", a, [["path", { d: "M16 2v4" }], ["path", { d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" }], ["path", { d: "m22 22-1.875-1.875" }], ["path", { d: "M3 10h18" }], ["path", { d: "M8 2v4" }], ["circle", { cx: "18", cy: "18", r: "3" }]]];
  const i5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }], ["path", { d: "M3 10h18" }], ["path", { d: "m17 22 5-5" }], ["path", { d: "m17 17 5 5" }]]];
  const l5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }], ["path", { d: "m14 14-4 4" }], ["path", { d: "m10 14 4 4" }]]];
  const g5 = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["path", { d: "M3 10h18" }]]];
  const x5 = ["svg", a, [["line", { x1: "2", x2: "22", y1: "2", y2: "22" }], ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" }], ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" }], ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88" }]]];
  const y5 = ["svg", a, [["path", { d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" }], ["circle", { cx: "12", cy: "13", r: "3" }]]];
  const m5 = ["svg", a, [["path", { d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" }], ["path", { d: "M17.75 7 15 2.1" }], ["path", { d: "M10.9 4.8 13 9" }], ["path", { d: "m7.9 9.7 2 4.4" }], ["path", { d: "M4.9 14.7 7 18.9" }]]];
  const H5 = ["svg", a, [["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1" }], ["path", { d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657" }], ["path", { d: "M14 16.5V14" }], ["path", { d: "M14 6.5v1.843" }], ["path", { d: "M10 10v7.5" }], ["path", { d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1" }], ["path", { d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const V5 = ["svg", a, [["path", { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" }], ["path", { d: "M14 6.5v10" }], ["path", { d: "M10 7.5v10" }], ["path", { d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" }], ["path", { d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" }]]];
  const C5 = ["svg", a, [["path", { d: "M12 22v-4" }], ["path", { d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6" }]]];
  const w5 = ["svg", a, [["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5" }], ["path", { d: "M17 11h-.5" }], ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M7 11h4" }], ["path", { d: "M7 15h2.5" }]]];
  const P = ["svg", a, [["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2" }], ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4" }]]];
  const u5 = ["svg", a, [["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }], ["path", { d: "M7 14h.01" }], ["path", { d: "M17 14h.01" }], ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }], ["path", { d: "M5 18v2" }], ["path", { d: "M19 18v2" }]]];
  const A5 = ["svg", a, [["path", { d: "M10 2h4" }], ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }], ["path", { d: "M7 14h.01" }], ["path", { d: "M17 14h.01" }], ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }], ["path", { d: "M5 18v2" }], ["path", { d: "M19 18v2" }]]];
  const L5 = ["svg", a, [["path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }], ["circle", { cx: "7", cy: "17", r: "2" }], ["path", { d: "M9 17h6" }], ["circle", { cx: "17", cy: "17", r: "2" }]]];
  const S5 = ["svg", a, [["rect", { width: "4", height: "4", x: "2", y: "9" }], ["rect", { width: "4", height: "10", x: "10", y: "9" }], ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }], ["circle", { cx: "8", cy: "19", r: "2" }], ["path", { d: "M10 19h12v-2" }]]];
  const f5 = ["svg", a, [["path", { d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }], ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }], ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }]]];
  const Z5 = ["svg", a, [["circle", { cx: "7", cy: "12", r: "3" }], ["path", { d: "M10 9v6" }], ["circle", { cx: "17", cy: "12", r: "3" }], ["path", { d: "M14 7v8" }]]];
  const P5 = ["svg", a, [["path", { d: "m3 15 4-8 4 8" }], ["path", { d: "M4 13h6" }], ["circle", { cx: "18", cy: "12", r: "3" }], ["path", { d: "M21 9v6" }]]];
  const k5 = ["svg", a, [["path", { d: "m3 15 4-8 4 8" }], ["path", { d: "M4 13h6" }], ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" }]]];
  const z5 = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["circle", { cx: "8", cy: "10", r: "2" }], ["path", { d: "M8 12h8" }], ["circle", { cx: "16", cy: "10", r: "2" }], ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }]]];
  const B5 = ["svg", a, [["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }], ["path", { d: "M2 12a9 9 0 0 1 8 8" }], ["path", { d: "M2 16a5 5 0 0 1 4 4" }], ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20" }]]];
  const F5 = ["svg", a, [["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }], ["path", { d: "M18 11V4H6v7" }], ["path", { d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" }], ["path", { d: "M22 11V9" }], ["path", { d: "M2 11V9" }], ["path", { d: "M6 4V2" }], ["path", { d: "M18 4V2" }], ["path", { d: "M10 4V2" }], ["path", { d: "M14 4V2" }]]];
  const D5 = ["svg", a, [["path", { d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" }], ["path", { d: "M8 14v.5" }], ["path", { d: "M16 14v.5" }], ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z" }]]];
  const q5 = ["svg", a, [["path", { d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" }], ["path", { d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" }], ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }], ["path", { d: "M2 21v-4" }], ["path", { d: "M7 9h.01" }]]];
  const k = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" }]]];
  const z = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }], ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]]];
  const R5 = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 11h8" }], ["path", { d: "M7 16h3" }], ["path", { d: "M7 6h12" }]]];
  const b5 = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 11h8" }], ["path", { d: "M7 16h12" }], ["path", { d: "M7 6h3" }]]];
  const T5 = ["svg", a, [["path", { d: "M11 13v4" }], ["path", { d: "M15 5v4" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }], ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]]];
  const B = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 16h8" }], ["path", { d: "M7 11h12" }], ["path", { d: "M7 6h3" }]]];
  const F = ["svg", a, [["path", { d: "M9 5v4" }], ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1" }], ["path", { d: "M9 15v2" }], ["path", { d: "M17 3v2" }], ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1" }], ["path", { d: "M17 13v3" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]]];
  const D = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }], ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]]];
  const U5 = ["svg", a, [["path", { d: "M13 17V9" }], ["path", { d: "M18 17v-3" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M8 17V5" }]]];
  const q = ["svg", a, [["path", { d: "M13 17V9" }], ["path", { d: "M18 17V5" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M8 17v-3" }]]];
  const O5 = ["svg", a, [["path", { d: "M11 13H7" }], ["path", { d: "M19 9h-4" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }], ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]]];
  const R = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M18 17V9" }], ["path", { d: "M13 17V5" }], ["path", { d: "M8 17v-3" }]]];
  const b = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "m19 9-5 5-4-4-3 3" }]]];
  const I5 = ["svg", a, [["path", { d: "m13.11 7.664 1.78 2.672" }], ["path", { d: "m14.162 12.788-3.324 1.424" }], ["path", { d: "m20 4-6.06 1.515" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["circle", { cx: "12", cy: "6", r: "2" }], ["circle", { cx: "16", cy: "12", r: "2" }], ["circle", { cx: "9", cy: "15", r: "2" }]]];
  const E5 = ["svg", a, [["path", { d: "M12 20V10" }], ["path", { d: "M18 20v-4" }], ["path", { d: "M6 20V4" }]]];
  const T = ["svg", a, [["line", { x1: "12", x2: "12", y1: "20", y2: "10" }], ["line", { x1: "18", x2: "18", y1: "20", y2: "4" }], ["line", { x1: "6", x2: "6", y1: "20", y2: "16" }]]];
  const U = ["svg", a, [["line", { x1: "18", x2: "18", y1: "20", y2: "10" }], ["line", { x1: "12", x2: "12", y1: "20", y2: "4" }], ["line", { x1: "6", x2: "6", y1: "20", y2: "14" }]]];
  const G5 = ["svg", a, [["path", { d: "M12 16v5" }], ["path", { d: "M16 14v7" }], ["path", { d: "M20 10v11" }], ["path", { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" }], ["path", { d: "M4 18v3" }], ["path", { d: "M8 14v7" }]]];
  const O = ["svg", a, [["path", { d: "M8 6h10" }], ["path", { d: "M6 12h9" }], ["path", { d: "M11 18h7" }]]];
  const I = ["svg", a, [["path", { d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" }], ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }]]];
  const E = ["svg", a, [["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor" }], ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]]];
  const W5 = ["svg", a, [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }]]];
  const X5 = ["svg", a, [["path", { d: "M18 6 7 17l-5-5" }], ["path", { d: "m22 10-7.5 7.5L13 16" }]]];
  const N5 = ["svg", a, [["path", { d: "M20 6 9 17l-5-5" }]]];
  const K5 = ["svg", a, [["path", { d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" }], ["path", { d: "M6 17h12" }]]];
  const J5 = ["svg", a, [["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }], ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }], ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }], ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }]]];
  const j5 = ["svg", a, [["path", { d: "m6 9 6 6 6-6" }]]];
  const Q5 = ["svg", a, [["path", { d: "m17 18-6-6 6-6" }], ["path", { d: "M7 6v12" }]]];
  const _5 = ["svg", a, [["path", { d: "m7 18 6-6-6-6" }], ["path", { d: "M17 6v12" }]]];
  const Y5 = ["svg", a, [["path", { d: "m15 18-6-6 6-6" }]]];
  const $5 = ["svg", a, [["path", { d: "m9 18 6-6-6-6" }]]];
  const a3 = ["svg", a, [["path", { d: "m18 15-6-6-6 6" }]]];
  const t3 = ["svg", a, [["path", { d: "m7 20 5-5 5 5" }], ["path", { d: "m7 4 5 5 5-5" }]]];
  const h3 = ["svg", a, [["path", { d: "m7 6 5 5 5-5" }], ["path", { d: "m7 13 5 5 5-5" }]]];
  const d3 = ["svg", a, [["path", { d: "m18 8 4 4-4 4" }], ["path", { d: "m6 8-4 4 4 4" }], ["path", { d: "M8 12h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M16 12h.01" }]]];
  const p3 = ["svg", a, [["path", { d: "m9 7-5 5 5 5" }], ["path", { d: "m15 7 5 5-5 5" }]]];
  const c3 = ["svg", a, [["path", { d: "m11 17-5-5 5-5" }], ["path", { d: "m18 17-5-5 5-5" }]]];
  const M3 = ["svg", a, [["path", { d: "m20 17-5-5 5-5" }], ["path", { d: "m4 17 5-5-5-5" }]]];
  const s3 = ["svg", a, [["path", { d: "m6 17 5-5-5-5" }], ["path", { d: "m13 17 5-5-5-5" }]]];
  const e3 = ["svg", a, [["path", { d: "m7 15 5 5 5-5" }], ["path", { d: "m7 9 5-5 5 5" }]]];
  const r3 = ["svg", a, [["path", { d: "m17 11-5-5-5 5" }], ["path", { d: "m17 18-5-5-5 5" }]]];
  const v3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "4" }], ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8" }], ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14" }], ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14" }]]];
  const n3 = ["svg", a, [["path", { d: "M10 9h4" }], ["path", { d: "M12 7v5" }], ["path", { d: "M14 22v-4a2 2 0 0 0-4 0v4" }], ["path", { d: "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22" }], ["path", { d: "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7" }]]];
  const o3 = ["svg", a, [["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }], ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }], ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }], ["path", { d: "M7 12v4" }]]];
  const i3 = ["svg", a, [["path", { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }], ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }], ["path", { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }], ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }], ["path", { d: "M7 12v4" }]]];
  const G = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]]];
  const W = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 8v8" }], ["path", { d: "m8 12 4 4 4-4" }]]];
  const X = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 12H8" }], ["path", { d: "m12 8-4 4 4 4" }]]];
  const N = ["svg", a, [["path", { d: "M2 12a10 10 0 1 1 10 10" }], ["path", { d: "m2 22 10-10" }], ["path", { d: "M8 22H2v-6" }]]];
  const K = ["svg", a, [["path", { d: "M12 22a10 10 0 1 1 10-10" }], ["path", { d: "M22 22 12 12" }], ["path", { d: "M22 16v6h-6" }]]];
  const J = ["svg", a, [["path", { d: "M2 8V2h6" }], ["path", { d: "m2 2 10 10" }], ["path", { d: "M12 2A10 10 0 1 1 2 12" }]]];
  const j = ["svg", a, [["path", { d: "M22 12A10 10 0 1 1 12 2" }], ["path", { d: "M22 2 12 12" }], ["path", { d: "M16 2h6v6" }]]];
  const Q = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 12h8" }], ["path", { d: "m12 16 4-4-4-4" }]]];
  const _ = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m16 12-4-4-4 4" }], ["path", { d: "M12 16V8" }]]];
  const Y = ["svg", a, [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }], ["path", { d: "m9 11 3 3L22 4" }]]];
  const $ = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const a1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m16 10-4 4-4-4" }]]];
  const t1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m14 16-4-4 4-4" }]]];
  const h1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m10 8 4 4-4 4" }]]];
  const d1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m8 14 4-4 4 4" }]]];
  const l3 = ["svg", a, [["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0" }], ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0" }], ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7" }], ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8" }], ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69" }], ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8" }], ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69" }], ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]]];
  const p1 = ["svg", a, [["line", { x1: "8", x2: "16", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const g3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }], ["path", { d: "M12 18V6" }]]];
  const x3 = ["svg", a, [["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }], ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }], ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }], ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }], ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }], ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }], ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }], ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }], ["circle", { cx: "12", cy: "12", r: "1" }]]];
  const y3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "1" }]]];
  const m3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M17 12h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M7 12h.01" }]]];
  const H3 = ["svg", a, [["path", { d: "M7 10h10" }], ["path", { d: "M7 14h10" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const V3 = ["svg", a, [["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }], ["path", { d: "m16 12-4-4-4 4" }], ["path", { d: "M12 16V8" }], ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }], ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }], ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }], ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]]];
  const C3 = ["svg", a, [["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }], ["path", { d: "M12 8v8" }], ["path", { d: "M16 12H8" }], ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }], ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }], ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }], ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]]];
  const c1 = ["svg", a, [["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M13.4 10.6 19 5" }]]];
  const M1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["path", { d: "M12 17h.01" }]]];
  const s1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 12h8" }]]];
  const w3 = ["svg", a, [["path", { d: "m2 2 20 20" }], ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }], ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }]]];
  const e1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m5 5 14 14" }], ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }], ["path", { d: "M9 17v-2.34" }]]];
  const r1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]]];
  const v1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }], ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]]];
  const n1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "M9 9h.01" }], ["path", { d: "M15 15h.01" }]]];
  const o1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polygon", { points: "10 8 16 12 10 16 10 8" }]]];
  const i1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 12h8" }], ["path", { d: "M12 8v8" }]]];
  const l1 = ["svg", a, [["path", { d: "M12 7v4" }], ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const g1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M22 2 2 22" }]]];
  const u3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]]];
  const x1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["rect", { width: "6", height: "6", x: "9", y: "9" }]]];
  const y1 = ["svg", a, [["path", { d: "M18 20a6 6 0 0 0-12 0" }], ["circle", { cx: "12", cy: "10", r: "4" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const m1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }]]];
  const H1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "m9 9 6 6" }]]];
  const A3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }]]];
  const L3 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3" }], ["circle", { cx: "9", cy: "9", r: "2" }], ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4" }], ["circle", { cx: "15", cy: "15", r: "2" }]]];
  const S3 = ["svg", a, [["path", { d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" }], ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34" }], ["path", { d: "m14 10-5.5 5.5" }], ["path", { d: "M14 17.85V10H6.15" }]]];
  const f3 = ["svg", a, [["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" }], ["path", { d: "m6.2 5.3 3.1 3.9" }], ["path", { d: "m12.4 3.4 3.1 4" }], ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }]]];
  const Z3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "m9 14 2 2 4-4" }]]];
  const P3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4" }], ["path", { d: "M21 14H11" }], ["path", { d: "m15 10-4 4 4 4" }]]];
  const k3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M12 11h4" }], ["path", { d: "M12 16h4" }], ["path", { d: "M8 11h.01" }], ["path", { d: "M8 16h.01" }]]];
  const z3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M9 14h6" }]]];
  const B3 = ["svg", a, [["path", { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10" }], ["path", { d: "m17 10 4 4-4 4" }]]];
  const V1 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }], ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }], ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1" }], ["path", { d: "M8 18h1" }], ["path", { d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const C1 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" }], ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const F3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M9 14h6" }], ["path", { d: "M12 17v-6" }]]];
  const D3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M9 12v-1h6v1" }], ["path", { d: "M11 17h2" }], ["path", { d: "M12 11v6" }]]];
  const q3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }], ["path", { d: "m15 11-6 6" }], ["path", { d: "m9 11 6 6" }]]];
  const R3 = ["svg", a, [["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }]]];
  const b3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 14.5 8" }]]];
  const T3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 8 10" }]]];
  const U3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 9.5 8" }]]];
  const O3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12" }]]];
  const I3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 16 10" }]]];
  const E3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 16.5 12" }]]];
  const G3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 16 14" }]]];
  const W3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 14.5 16" }]]];
  const X3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 12 16.5" }]]];
  const N3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 9.5 16" }]]];
  const K3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 8 14" }]]];
  const J3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 7.5 12" }]]];
  const j3 = ["svg", a, [["path", { d: "M12.338 21.994A10 10 0 1 1 21.925 13.227" }], ["path", { d: "M12 6v6l2 1" }], ["path", { d: "m14 18 4 4 4-4" }], ["path", { d: "M18 14v8" }]]];
  const Q3 = ["svg", a, [["path", { d: "M13.228 21.925A10 10 0 1 1 21.994 12.338" }], ["path", { d: "M12 6v6l1.562.781" }], ["path", { d: "m14 18 4-4 4 4" }], ["path", { d: "M18 22v-8" }]]];
  const _3 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["polyline", { points: "12 6 12 12 16 14" }]]];
  const Y3 = ["svg", a, [["circle", { cx: "12", cy: "17", r: "3" }], ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }], ["path", { d: "m15.7 18.4-.9-.3" }], ["path", { d: "m9.2 15.9-.9-.3" }], ["path", { d: "m10.6 20.7.3-.9" }], ["path", { d: "m13.1 14.2.3-.9" }], ["path", { d: "m13.6 20.7-.4-1" }], ["path", { d: "m10.8 14.3-.4-1" }], ["path", { d: "m8.3 18.6 1-.4" }], ["path", { d: "m14.7 15.8 1-.4" }]]];
  const w1 = ["svg", a, [["path", { d: "M12 13v8l-4-4" }], ["path", { d: "m12 21 4-4" }], ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" }]]];
  const $3 = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M8 19v1" }], ["path", { d: "M8 14v1" }], ["path", { d: "M16 19v1" }], ["path", { d: "M16 14v1" }], ["path", { d: "M12 21v1" }], ["path", { d: "M12 16v1" }]]];
  const ad = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M16 17H7" }], ["path", { d: "M17 21H9" }]]];
  const td = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M16 14v2" }], ["path", { d: "M8 14v2" }], ["path", { d: "M16 20h.01" }], ["path", { d: "M8 20h.01" }], ["path", { d: "M12 16v2" }], ["path", { d: "M12 22h.01" }]]];
  const hd = ["svg", a, [["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }], ["path", { d: "m13 12-3 5h4l-3 5" }]]];
  const dd = ["svg", a, [["path", { d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }], ["path", { d: "M11 20v2" }], ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }], ["path", { d: "M7 19v2" }]]];
  const pd = ["svg", a, [["path", { d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }], ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" }]]];
  const cd = ["svg", a, [["path", { d: "m2 2 20 20" }], ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" }], ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" }]]];
  const Md = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "m9.2 22 3-7" }], ["path", { d: "m9 13-3 7" }], ["path", { d: "m17 13-3 7" }]]];
  const sd = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M16 14v6" }], ["path", { d: "M8 14v6" }], ["path", { d: "M12 16v6" }]]];
  const ed = ["svg", a, [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M8 19h.01" }], ["path", { d: "M12 17h.01" }], ["path", { d: "M12 21h.01" }], ["path", { d: "M16 15h.01" }], ["path", { d: "M16 19h.01" }]]];
  const rd = ["svg", a, [["path", { d: "M12 2v2" }], ["path", { d: "m4.93 4.93 1.41 1.41" }], ["path", { d: "M20 12h2" }], ["path", { d: "m19.07 4.93-1.41 1.41" }], ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }], ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }], ["path", { d: "M11 20v2" }], ["path", { d: "M7 19v2" }]]];
  const vd = ["svg", a, [["path", { d: "M12 2v2" }], ["path", { d: "m4.93 4.93 1.41 1.41" }], ["path", { d: "M20 12h2" }], ["path", { d: "m19.07 4.93-1.41 1.41" }], ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }], ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }]]];
  const u1 = ["svg", a, [["path", { d: "M12 13v8" }], ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }], ["path", { d: "m8 17 4-4 4 4" }]]];
  const nd = ["svg", a, [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]]];
  const od = ["svg", a, [["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }], ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" }]]];
  const id = ["svg", a, [["path", { d: "M16.17 7.83 2 22" }], ["path", { d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" }], ["path", { d: "m7.83 7.83 8.34 8.34" }]]];
  const ld = ["svg", a, [["path", { d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" }], ["path", { d: "M12 17.66L12 22" }]]];
  const A1 = ["svg", a, [["path", { d: "m18 16 4-4-4-4" }], ["path", { d: "m6 8-4 4 4 4" }], ["path", { d: "m14.5 4-5 16" }]]];
  const gd = ["svg", a, [["polyline", { points: "16 18 22 12 16 6" }], ["polyline", { points: "8 6 2 12 8 18" }]]];
  const xd = ["svg", a, [["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5" }], ["polyline", { points: "22 8.5 12 15.5 2 8.5" }], ["polyline", { points: "2 15.5 12 8.5 22 15.5" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5" }]]];
  const yd = ["svg", a, [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }], ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }], ["polyline", { points: "7.5 19.79 7.5 14.6 3 12" }], ["polyline", { points: "21 12 16.5 14.6 16.5 19.79" }], ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }], ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12" }]]];
  const md = ["svg", a, [["path", { d: "M10 2v2" }], ["path", { d: "M14 2v2" }], ["path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }], ["path", { d: "M6 2v2" }]]];
  const Hd = ["svg", a, [["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }], ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 22v-2" }], ["path", { d: "m17 20.66-1-1.73" }], ["path", { d: "M11 10.27 7 3.34" }], ["path", { d: "m20.66 17-1.73-1" }], ["path", { d: "m3.34 7 1.73 1" }], ["path", { d: "M14 12h8" }], ["path", { d: "M2 12h2" }], ["path", { d: "m20.66 7-1.73 1" }], ["path", { d: "m3.34 17 1.73-1" }], ["path", { d: "m17 3.34-1 1.73" }], ["path", { d: "m11 13.73-4 6.93" }]]];
  const Vd = ["svg", a, [["circle", { cx: "8", cy: "8", r: "6" }], ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18" }], ["path", { d: "M7 6h1v4" }], ["path", { d: "m16.71 13.88.7.71-2.82 2.82" }]]];
  const L1 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 3v18" }]]];
  const S1 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "M15 3v18" }]]];
  const Cd = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7.5 3v18" }], ["path", { d: "M12 3v18" }], ["path", { d: "M16.5 3v18" }]]];
  const wd = ["svg", a, [["rect", { width: "8", height: "8", x: "2", y: "2", rx: "2" }], ["path", { d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }], ["path", { d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" }], ["path", { d: "M10 18H5c-1.7 0-3-1.3-3-3v-1" }], ["polyline", { points: "7 21 10 18 7 15" }], ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]]];
  const ud = ["svg", a, [["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }]]];
  const Ad = ["svg", a, [["path", { d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const Ld = ["svg", a, [["path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" }], ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" }], ["path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" }], ["path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" }]]];
  const Sd = ["svg", a, [["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6 18h2" }], ["path", { d: "M12 18h6" }]]];
  const fd = ["svg", a, [["path", { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }], ["path", { d: "M20 16a8 8 0 1 0-16 0" }], ["path", { d: "M12 4v4" }], ["path", { d: "M10 4h4" }]]];
  const Zd = ["svg", a, [["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }], ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3" }]]];
  const Pd = ["svg", a, [["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }], ["path", { d: "M17 14v7" }], ["path", { d: "M7 14v7" }], ["path", { d: "M17 3v3" }], ["path", { d: "M7 3v3" }], ["path", { d: "M10 14 2.3 6.3" }], ["path", { d: "m14 6 7.7 7.7" }], ["path", { d: "m8 6 8 8" }]]];
  const f1 = ["svg", a, [["path", { d: "M16 18a4 4 0 0 0-8 0" }], ["circle", { cx: "12", cy: "11", r: "3" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["line", { x1: "8", x2: "8", y1: "2", y2: "4" }], ["line", { x1: "16", x2: "16", y1: "2", y2: "4" }]]];
  const kd = ["svg", a, [["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }], ["circle", { cx: "12", cy: "10", r: "2" }], ["line", { x1: "8", x2: "8", y1: "2", y2: "4" }], ["line", { x1: "16", x2: "16", y1: "2", y2: "4" }]]];
  const zd = ["svg", a, [["path", { d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" }], ["path", { d: "M10 21.9V14L2.1 9.1" }], ["path", { d: "m10 14 11.9-6.9" }], ["path", { d: "M14 19.8v-8.1" }], ["path", { d: "M18 17.5V9.4" }]]];
  const Bd = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }]]];
  const Fd = ["svg", a, [["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }], ["path", { d: "M8.5 8.5v.01" }], ["path", { d: "M16 15.5v.01" }], ["path", { d: "M12 12v.01" }], ["path", { d: "M11 17v.01" }], ["path", { d: "M7 14v.01" }]]];
  const Dd = ["svg", a, [["path", { d: "M2 12h20" }], ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }], ["path", { d: "m4 8 16-4" }], ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]]];
  const qd = ["svg", a, [["path", { d: "m12 15 2 2 4-4" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const Rd = ["svg", a, [["line", { x1: "12", x2: "18", y1: "15", y2: "15" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const bd = ["svg", a, [["line", { x1: "15", x2: "15", y1: "12", y2: "18" }], ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const Td = ["svg", a, [["line", { x1: "12", x2: "18", y1: "18", y2: "12" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const Ud = ["svg", a, [["line", { x1: "12", x2: "18", y1: "12", y2: "18" }], ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }], ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const Od = ["svg", a, [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]]];
  const Id = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66" }]]];
  const Ed = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66" }]]];
  const Gd = ["svg", a, [["polyline", { points: "9 10 4 15 9 20" }], ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }]]];
  const Wd = ["svg", a, [["polyline", { points: "15 10 20 15 15 20" }], ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }]]];
  const Xd = ["svg", a, [["polyline", { points: "14 15 9 20 4 15" }], ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }]]];
  const Nd = ["svg", a, [["polyline", { points: "14 9 9 4 4 9" }], ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }]]];
  const Kd = ["svg", a, [["polyline", { points: "10 15 15 20 20 15" }], ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }]]];
  const Jd = ["svg", a, [["polyline", { points: "10 9 15 4 20 9" }], ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }]]];
  const jd = ["svg", a, [["polyline", { points: "9 14 4 9 9 4" }], ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }]]];
  const Qd = ["svg", a, [["polyline", { points: "15 14 20 9 15 4" }], ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }]]];
  const _d = ["svg", a, [["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2" }], ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1" }], ["path", { d: "M15 2v2" }], ["path", { d: "M15 20v2" }], ["path", { d: "M2 15h2" }], ["path", { d: "M2 9h2" }], ["path", { d: "M20 15h2" }], ["path", { d: "M20 9h2" }], ["path", { d: "M9 2v2" }], ["path", { d: "M9 20v2" }]]];
  const Yd = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }], ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }]]];
  const $d = ["svg", a, [["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }], ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }]]];
  const ap = ["svg", a, [["path", { d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" }], ["path", { d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" }], ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" }], ["path", { d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" }], ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" }]]];
  const tp = ["svg", a, [["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }], ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }]]];
  const hp = ["svg", a, [["path", { d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" }]]];
  const dp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }], ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }]]];
  const pp = ["svg", a, [["path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" }], ["path", { d: "M5 21h14" }]]];
  const cp = ["svg", a, [["path", { d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" }], ["path", { d: "M10 22v-8L2.25 9.15" }], ["path", { d: "m10 14 11.77-6.87" }]]];
  const Mp = ["svg", a, [["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }], ["path", { d: "M5 8h14" }], ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }], ["path", { d: "m12 8 1-6h2" }]]];
  const sp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "8" }], ["line", { x1: "3", x2: "6", y1: "3", y2: "6" }], ["line", { x1: "21", x2: "18", y1: "3", y2: "6" }], ["line", { x1: "3", x2: "6", y1: "21", y2: "18" }], ["line", { x1: "21", x2: "18", y1: "21", y2: "18" }]]];
  const ep = ["svg", a, [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }]]];
  const rp = ["svg", a, [["path", { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["path", { d: "M2 6h4" }], ["path", { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }]]];
  const vp = ["svg", a, [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 12a9 3 0 0 0 5 2.69" }], ["path", { d: "M21 9.3V5" }], ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88" }], ["path", { d: "M12 12v4h4" }], ["path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" }]]];
  const np = ["svg", a, [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }], ["path", { d: "M21 5V8" }], ["path", { d: "M21 12L18 17H22L19 22" }], ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }]]];
  const op = ["svg", a, [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }], ["path", { d: "M3 12A9 3 0 0 0 21 12" }]]];
  const ip = ["svg", a, [["path", { d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }], ["path", { d: "m12 9 6 6" }], ["path", { d: "m18 9-6 6" }]]];
  const lp = ["svg", a, [["circle", { cx: "12", cy: "4", r: "2" }], ["path", { d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8" }], ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0" }]]];
  const gp = ["svg", a, [["circle", { cx: "19", cy: "19", r: "2" }], ["circle", { cx: "5", cy: "5", r: "2" }], ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }], ["path", { d: "m6.41 6.41 11.18 11.18" }], ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" }]]];
  const xp = ["svg", a, [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }], ["path", { d: "M8 12h8" }]]];
  const Z1 = ["svg", a, [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" }], ["path", { d: "M9.2 9.2h.01" }], ["path", { d: "m14.5 9.5-5 5" }], ["path", { d: "M14.7 14.8h.01" }]]];
  const yp = ["svg", a, [["path", { d: "M12 8v8" }], ["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }], ["path", { d: "M8 12h8" }]]];
  const mp = ["svg", a, [["path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" }]]];
  const Hp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M12 12h.01" }]]];
  const Vp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M15 9h.01" }], ["path", { d: "M9 15h.01" }]]];
  const Cp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M16 8h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M8 16h.01" }]]];
  const wp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M16 8h.01" }], ["path", { d: "M8 8h.01" }], ["path", { d: "M8 16h.01" }], ["path", { d: "M16 16h.01" }]]];
  const up = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M16 8h.01" }], ["path", { d: "M8 8h.01" }], ["path", { d: "M8 16h.01" }], ["path", { d: "M16 16h.01" }], ["path", { d: "M12 12h.01" }]]];
  const Ap = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M16 8h.01" }], ["path", { d: "M16 12h.01" }], ["path", { d: "M16 16h.01" }], ["path", { d: "M8 8h.01" }], ["path", { d: "M8 12h.01" }], ["path", { d: "M8 16h.01" }]]];
  const Lp = ["svg", a, [["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2" }], ["path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }], ["path", { d: "M6 18h.01" }], ["path", { d: "M10 14h.01" }], ["path", { d: "M15 6h.01" }], ["path", { d: "M18 9h.01" }]]];
  const Sp = ["svg", a, [["path", { d: "M12 3v14" }], ["path", { d: "M5 10h14" }], ["path", { d: "M5 21h14" }]]];
  const fp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 12h.01" }]]];
  const Zp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]]];
  const Pp = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "12", cy: "12", r: "5" }], ["path", { d: "M12 12h.01" }]]];
  const kp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "2" }]]];
  const zp = ["svg", a, [["circle", { cx: "12", cy: "6", r: "1" }], ["line", { x1: "5", x2: "19", y1: "12", y2: "12" }], ["circle", { cx: "12", cy: "18", r: "1" }]]];
  const Bp = ["svg", a, [["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }], ["path", { d: "m17 6-2.891-2.891" }], ["path", { d: "M2 15c3.333-3 6.667-3 10-3" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "m20 9 .891.891" }], ["path", { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }], ["path", { d: "M3.109 14.109 4 15" }], ["path", { d: "m6.5 12.5 1 1" }], ["path", { d: "m7 18 2.891 2.891" }], ["path", { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" }]]];
  const Fp = ["svg", a, [["path", { d: "m10 16 1.5 1.5" }], ["path", { d: "m14 8-1.5-1.5" }], ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }], ["path", { d: "m16.5 10.5 1 1" }], ["path", { d: "m17 6-2.891-2.891" }], ["path", { d: "M2 15c6.667-6 13.333 0 20-6" }], ["path", { d: "m20 9 .891.891" }], ["path", { d: "M3.109 14.109 4 15" }], ["path", { d: "m6.5 12.5 1 1" }], ["path", { d: "m7 18 2.891 2.891" }], ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }]]];
  const Dp = ["svg", a, [["path", { d: "M2 8h20" }], ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M6 16h12" }]]];
  const qp = ["svg", a, [["path", { d: "M11.25 16.25h1.5L12 17z" }], ["path", { d: "M16 14v.5" }], ["path", { d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" }], ["path", { d: "M8 14v.5" }], ["path", { d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" }]]];
  const Rp = ["svg", a, [["line", { x1: "12", x2: "12", y1: "2", y2: "22" }], ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]]];
  const bp = ["svg", a, [["path", { d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" }], ["circle", { cx: "12", cy: "12", r: "3" }]]];
  const Tp = ["svg", a, [["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }], ["path", { d: "M2 20h20" }], ["path", { d: "M14 12v.01" }]]];
  const Up = ["svg", a, [["path", { d: "M13 4h3a2 2 0 0 1 2 2v14" }], ["path", { d: "M2 20h3" }], ["path", { d: "M13 20h9" }], ["path", { d: "M10 12v.01" }], ["path", { d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" }]]];
  const Op = ["svg", a, [["circle", { cx: "12.1", cy: "12.1", r: "1" }]]];
  const Ip = ["svg", a, [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { points: "7 10 12 15 17 10" }], ["line", { x1: "12", x2: "12", y1: "15", y2: "3" }]]];
  const Ep = ["svg", a, [["path", { d: "m12.99 6.74 1.93 3.44" }], ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0" }], ["path", { d: "m21 21-2.16-3.84" }], ["path", { d: "m3 21 8.02-14.26" }], ["circle", { cx: "12", cy: "5", r: "2" }]]];
  const Gp = ["svg", a, [["path", { d: "M10 11h.01" }], ["path", { d: "M14 6h.01" }], ["path", { d: "M18 6h.01" }], ["path", { d: "M6.5 13.1h.01" }], ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }], ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0" }], ["path", { d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" }], ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }]]];
  const Wp = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }], ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }], ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72" }]]];
  const Xp = ["svg", a, [["path", { d: "M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" }], ["path", { d: "M18 6h4" }], ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }], ["path", { d: "m5 10-2 8" }], ["path", { d: "M12 10v3c0 .6-.4 1-1 1H8" }], ["path", { d: "m7 18 2-8" }], ["path", { d: "M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" }]]];
  const Np = ["svg", a, [["path", { d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" }]]];
  const Kp = ["svg", a, [["path", { d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" }], ["path", { d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" }]]];
  const Jp = ["svg", a, [["path", { d: "m2 2 8 8" }], ["path", { d: "m22 2-8 8" }], ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5" }], ["path", { d: "M7 13.4v7.9" }], ["path", { d: "M12 14v8" }], ["path", { d: "M17 13.4v7.9" }], ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9" }]]];
  const jp = ["svg", a, [["path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }], ["path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }]]];
  const Qp = ["svg", a, [["path", { d: "M14.4 14.4 9.6 9.6" }], ["path", { d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" }], ["path", { d: "m21.5 21.5-1.4-1.4" }], ["path", { d: "M3.9 3.9 2.5 2.5" }], ["path", { d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" }]]];
  const _p = ["svg", a, [["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }], ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14" }], ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }], ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Yp = ["svg", a, [["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }], ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }]]];
  const $p = ["svg", a, [["path", { d: "M7 3.34V5a3 3 0 0 0 3 3" }], ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }], ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }], ["path", { d: "M12 2a10 10 0 1 0 9.54 13" }], ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }], ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]]];
  const P1 = ["svg", a, [["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }], ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }], ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const a6 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 2a7 7 0 1 0 10 10" }]]];
  const t6 = ["svg", a, [["circle", { cx: "11.5", cy: "12.5", r: "3.5" }], ["path", { d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" }]]];
  const h6 = ["svg", a, [["path", { d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625" }], ["path", { d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const d6 = ["svg", a, [["path", { d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" }]]];
  const k1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "1" }], ["circle", { cx: "12", cy: "5", r: "1" }], ["circle", { cx: "12", cy: "19", r: "1" }]]];
  const z1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "1" }], ["circle", { cx: "19", cy: "12", r: "1" }], ["circle", { cx: "5", cy: "12", r: "1" }]]];
  const p6 = ["svg", a, [["line", { x1: "5", x2: "19", y1: "9", y2: "9" }], ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }], ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]]];
  const c6 = ["svg", a, [["line", { x1: "5", x2: "19", y1: "9", y2: "9" }], ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }]]];
  const M6 = ["svg", a, [["path", { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }], ["path", { d: "M22 21H7" }], ["path", { d: "m5 11 9 9" }]]];
  const s6 = ["svg", a, [["path", { d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" }], ["path", { d: "M6 8v1" }], ["path", { d: "M10 8v1" }], ["path", { d: "M14 8v1" }], ["path", { d: "M18 8v1" }]]];
  const e6 = ["svg", a, [["path", { d: "M4 10h12" }], ["path", { d: "M4 14h9" }], ["path", { d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }]]];
  const r6 = ["svg", a, [["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8" }], ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6" }], ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6" }], ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6" }]]];
  const v6 = ["svg", a, [["path", { d: "M15 3h6v6" }], ["path", { d: "M10 14 21 3" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]]];
  const n6 = ["svg", a, [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }], ["path", { d: "m2 2 20 20" }]]];
  const o6 = ["svg", a, [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }], ["circle", { cx: "12", cy: "12", r: "3" }]]];
  const i6 = ["svg", a, [["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }]]];
  const l6 = ["svg", a, [["path", { d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M17 18h1" }], ["path", { d: "M12 18h1" }], ["path", { d: "M7 18h1" }]]];
  const g6 = ["svg", a, [["path", { d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" }], ["path", { d: "M12 12v.01" }]]];
  const x6 = ["svg", a, [["polygon", { points: "13 19 22 12 13 5 13 19" }], ["polygon", { points: "2 19 11 12 2 5 2 19" }]]];
  const y6 = ["svg", a, [["path", { d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" }], ["path", { d: "M16 8 2 22" }], ["path", { d: "M17.5 15H9" }]]];
  const m6 = ["svg", a, [["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }], ["path", { d: "M6 8h4" }], ["path", { d: "M6 18h4" }], ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }], ["path", { d: "M14 8h4" }], ["path", { d: "M14 18h4" }], ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }]]];
  const H6 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M12 2v4" }], ["path", { d: "m6.8 15-3.5 2" }], ["path", { d: "m20.7 7-3.5 2" }], ["path", { d: "M6.8 9 3.3 7" }], ["path", { d: "m20.7 17-3.5-2" }], ["path", { d: "m9 22 3-8 3 8" }], ["path", { d: "M8 22h8" }], ["path", { d: "M18 18.7a9 9 0 1 0-12 0" }]]];
  const V6 = ["svg", a, [["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }], ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }], ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }], ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }], ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }]]];
  const C6 = ["svg", a, [["path", { d: "M10 12v-1" }], ["path", { d: "M10 18v-2" }], ["path", { d: "M10 7V6" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }], ["circle", { cx: "10", cy: "20", r: "2" }]]];
  const w6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "3", cy: "17", r: "1" }], ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3" }], ["circle", { cx: "9", cy: "17", r: "1" }]]];
  const u6 = ["svg", a, [["path", { d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0" }]]];
  const B1 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m8 18 4-4" }], ["path", { d: "M8 10v8h8" }]]];
  const A6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5" }]]];
  const L6 = ["svg", a, [["path", { d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }], ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5" }]]];
  const S6 = ["svg", a, [["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z" }], ["path", { d: "M7 17v5" }], ["path", { d: "M11.7 14.2 7 17l-4.7-2.8" }]]];
  const F1 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 18v-2" }], ["path", { d: "M12 18v-4" }], ["path", { d: "M16 18v-6" }]]];
  const D1 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 18v-1" }], ["path", { d: "M12 18v-6" }], ["path", { d: "M16 18v-3" }]]];
  const q1 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m16 13-3.5 3.5-2-2L8 17" }]]];
  const R1 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5" }], ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475" }], ["path", { d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" }]]];
  const f6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m3 15 2 2 4-4" }]]];
  const Z6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m9 15 2 2 4-4" }]]];
  const P6 = ["svg", a, [["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "8", cy: "16", r: "6" }], ["path", { d: "M9.5 17.5 8 16.25V14" }]]];
  const k6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m5 12-3 3 3 3" }], ["path", { d: "m9 18 3-3-3-3" }]]];
  const z6 = ["svg", a, [["path", { d: "M10 12.5 8 15l2 2.5" }], ["path", { d: "m14 12.5 2 2.5-2 2.5" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }]]];
  const b1 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m3.2 12.9-.9-.4" }], ["path", { d: "m3.2 15.1-.9.4" }], ["path", { d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" }], ["path", { d: "m4.9 11.2-.4-.9" }], ["path", { d: "m4.9 16.8-.4.9" }], ["path", { d: "m7.5 10.3-.4.9" }], ["path", { d: "m7.5 17.7-.4-.9" }], ["path", { d: "m9.7 12.5-.9.4" }], ["path", { d: "m9.7 15.5-.9-.4" }], ["circle", { cx: "6", cy: "14", r: "3" }]]];
  const B6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M9 10h6" }], ["path", { d: "M12 13V7" }], ["path", { d: "M9 17h6" }]]];
  const F6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2" }], ["path", { d: "M10 12h2v6" }], ["path", { d: "M10 18h4" }]]];
  const D6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M12 18v-6" }], ["path", { d: "m9 15 3 3 3-3" }]]];
  const q6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" }]]];
  const R6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "10", cy: "12", r: "2" }], ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }]]];
  const b6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M2 15h10" }], ["path", { d: "m9 18 3-3-3-3" }]]];
  const T6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }], ["path", { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]]];
  const U6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }], ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]]];
  const O6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "4", cy: "16", r: "2" }], ["path", { d: "m10 10-4.5 4.5" }], ["path", { d: "m9 11 1 1" }]]];
  const I6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["circle", { cx: "10", cy: "16", r: "2" }], ["path", { d: "m16 10-4.5 4.5" }], ["path", { d: "m15 11 1 1" }]]];
  const E6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1" }], ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2" }]]];
  const G6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1" }], ["path", { d: "M10 12v-2a2 2 0 1 1 4 0v2" }]]];
  const W6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M3 15h6" }]]];
  const X6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M9 15h6" }]]];
  const N6 = ["svg", a, [["circle", { cx: "14", cy: "16", r: "2" }], ["circle", { cx: "6", cy: "18", r: "2" }], ["path", { d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5" }], ["path", { d: "M8 18v-7.7L16 9v7" }]]];
  const K6 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" }], ["path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" }], ["path", { d: "m5 11-3 3" }], ["path", { d: "m5 17-3-3h10" }]]];
  const T1 = ["svg", a, [["path", { d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" }], ["path", { d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["path", { d: "M8 18h1" }]]];
  const U1 = ["svg", a, [["path", { d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const J6 = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M3 15h6" }], ["path", { d: "M6 12v6" }]]];
  const j6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M9 15h6" }], ["path", { d: "M12 18v-6" }]]];
  const Q6 = ["svg", a, [["path", { d: "M12 17h.01" }], ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }], ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]]];
  const _6 = ["svg", a, [["path", { d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M16 14a2 2 0 0 0-2 2" }], ["path", { d: "M20 14a2 2 0 0 1 2 2" }], ["path", { d: "M20 22a2 2 0 0 0 2-2" }], ["path", { d: "M16 22a2 2 0 0 1-2-2" }]]];
  const Y6 = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["circle", { cx: "11.5", cy: "14.5", r: "2.5" }], ["path", { d: "M13.3 16.3 15 18" }]]];
  const $6 = ["svg", a, [["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "m9 18-1.5-1.5" }], ["circle", { cx: "5", cy: "14", r: "3" }]]];
  const ac = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 12h8" }], ["path", { d: "M10 11v2" }], ["path", { d: "M8 17h8" }], ["path", { d: "M14 16v2" }]]];
  const tc = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 13h2" }], ["path", { d: "M14 13h2" }], ["path", { d: "M8 17h2" }], ["path", { d: "M14 17h2" }]]];
  const hc = ["svg", a, [["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2" }], ["path", { d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" }], ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" }], ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" }]]];
  const dc = ["svg", a, [["path", { d: "m10 18 3-3-3-3" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }]]];
  const pc = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m8 16 2-2-2-2" }], ["path", { d: "M12 18h4" }]]];
  const cc = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M10 9H8" }], ["path", { d: "M16 13H8" }], ["path", { d: "M16 17H8" }]]];
  const Mc = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M2 13v-1h6v1" }], ["path", { d: "M5 12v6" }], ["path", { d: "M4 18h2" }]]];
  const sc = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M9 13v-1h6v1" }], ["path", { d: "M12 12v6" }], ["path", { d: "M11 18h2" }]]];
  const ec = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M12 12v6" }], ["path", { d: "m15 15-3-3-3 3" }]]];
  const rc = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1" }], ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5" }]]];
  const vc = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m10 11 5 3-5 3v-6Z" }]]];
  const nc = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3" }], ["path", { d: "M15 12a5 5 0 0 1 0 6" }]]];
  const oc = ["svg", a, [["path", { d: "M11 11a5 5 0 0 1 0 6" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M4.268 21A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "m7 10-3 2H2v4h2l3 2z" }]]];
  const ic = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M12 9v4" }], ["path", { d: "M12 17h.01" }]]];
  const lc = ["svg", a, [["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m8 12.5-5 5" }], ["path", { d: "m3 12.5 5 5" }]]];
  const gc = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }], ["path", { d: "m14.5 12.5-5 5" }], ["path", { d: "m9.5 12.5 5 5" }]]];
  const xc = ["svg", a, [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }]]];
  const yc = ["svg", a, [["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }], ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }], ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }]]];
  const mc = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 3v18" }], ["path", { d: "M3 7.5h4" }], ["path", { d: "M3 12h18" }], ["path", { d: "M3 16.5h4" }], ["path", { d: "M17 3v18" }], ["path", { d: "M17 7.5h4" }], ["path", { d: "M17 16.5h4" }]]];
  const Hc = ["svg", a, [["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" }], ["path", { d: "m22 3-5 5" }], ["path", { d: "m17 3 5 5" }]]];
  const Vc = ["svg", a, [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }]]];
  const Cc = ["svg", a, [["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }], ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }], ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }], ["path", { d: "M2 12a10 10 0 0 1 18-6" }], ["path", { d: "M2 16h.01" }], ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6" }], ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }], ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2" }], ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2" }]]];
  const wc = ["svg", a, [["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }], ["path", { d: "M9 18h8" }], ["path", { d: "M18 3h-3" }], ["path", { d: "M11 3a6 6 0 0 0-6 6v11" }], ["path", { d: "M5 13h4" }], ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }]]];
  const uc = ["svg", a, [["path", { d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" }], ["path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618" }], ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20" }]]];
  const Ac = ["svg", a, [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8" }]]];
  const Lc = ["svg", a, [["path", { d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }], ["path", { d: "M18 12v.5" }], ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }], ["path", { d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }], ["path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }], ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]]];
  const Sc = ["svg", a, [["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11" }], ["path", { d: "M4 22V4" }], ["path", { d: "M4 15s1-1 4-1 5 2 8 2" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const fc = ["svg", a, [["path", { d: "M17 22V2L7 7l10 5" }]]];
  const Zc = ["svg", a, [["path", { d: "M7 22V2l10 5-10 5" }]]];
  const Pc = ["svg", a, [["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }], ["line", { x1: "4", x2: "4", y1: "22", y2: "15" }]]];
  const kc = ["svg", a, [["path", { d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" }], ["path", { d: "m5 22 14-4" }], ["path", { d: "m5 18 14 4" }]]];
  const zc = ["svg", a, [["path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }]]];
  const Bc = ["svg", a, [["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" }], ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1" }], ["line", { x1: "11", x2: "18", y1: "6", y2: "6" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Fc = ["svg", a, [["path", { d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" }], ["line", { x1: "6", x2: "18", y1: "6", y2: "6" }], ["line", { x1: "12", x2: "12", y1: "12", y2: "12" }]]];
  const Dc = ["svg", a, [["path", { d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542" }], ["path", { d: "M10 2v2.343" }], ["path", { d: "M14 2v6.343" }], ["path", { d: "M8.5 2h7" }], ["path", { d: "M7 16h9" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const qc = ["svg", a, [["path", { d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }], ["path", { d: "M8.5 2h7" }], ["path", { d: "M7 16h10" }]]];
  const Rc = ["svg", a, [["path", { d: "M10 2v7.31" }], ["path", { d: "M14 9.3V1.99" }], ["path", { d: "M8.5 2h7" }], ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0" }], ["path", { d: "M5.52 16h12.96" }]]];
  const bc = ["svg", a, [["path", { d: "m3 7 5 5-5 5V7" }], ["path", { d: "m21 7-5 5 5 5V7" }], ["path", { d: "M12 20v2" }], ["path", { d: "M12 14v2" }], ["path", { d: "M12 8v2" }], ["path", { d: "M12 2v2" }]]];
  const Tc = ["svg", a, [["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }], ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }], ["path", { d: "M12 20v2" }], ["path", { d: "M12 14v2" }], ["path", { d: "M12 8v2" }], ["path", { d: "M12 2v2" }]]];
  const Uc = ["svg", a, [["path", { d: "m17 3-5 5-5-5h10" }], ["path", { d: "m17 21-5-5-5 5h10" }], ["path", { d: "M4 12H2" }], ["path", { d: "M10 12H8" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }]]];
  const Oc = ["svg", a, [["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }], ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }], ["path", { d: "M4 12H2" }], ["path", { d: "M10 12H8" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }]]];
  const Ic = ["svg", a, [["path", { d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" }], ["circle", { cx: "12", cy: "8", r: "2" }], ["path", { d: "M12 10v12" }], ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }], ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }]]];
  const Ec = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" }], ["path", { d: "M12 7.5V9" }], ["path", { d: "M7.5 12H9" }], ["path", { d: "M16.5 12H15" }], ["path", { d: "M12 16.5V15" }], ["path", { d: "m8 8 1.88 1.88" }], ["path", { d: "M14.12 9.88 16 8" }], ["path", { d: "m8 16 1.88-1.88" }], ["path", { d: "M14.12 14.12 16 16" }]]];
  const Gc = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]]];
  const Wc = ["svg", a, [["path", { d: "M2 12h6" }], ["path", { d: "M22 12h-6" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 8v2" }], ["path", { d: "M12 14v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m19 9-3 3 3 3" }], ["path", { d: "m5 15 3-3-3-3" }]]];
  const Xc = ["svg", a, [["path", { d: "M12 22v-6" }], ["path", { d: "M12 8V2" }], ["path", { d: "M4 12H2" }], ["path", { d: "M10 12H8" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }], ["path", { d: "m15 19-3-3-3 3" }], ["path", { d: "m15 5-3 3-3-3" }]]];
  const Nc = ["svg", a, [["circle", { cx: "15", cy: "19", r: "2" }], ["path", { d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" }], ["path", { d: "M15 11v-1" }], ["path", { d: "M15 17v-2" }]]];
  const Kc = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "m9 13 2 2 4-4" }]]];
  const Jc = ["svg", a, [["circle", { cx: "16", cy: "16", r: "6" }], ["path", { d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" }], ["path", { d: "M16 14v2l1 1" }]]];
  const jc = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M2 10h20" }]]];
  const Qc = ["svg", a, [["path", { d: "M10 10.5 8 13l2 2.5" }], ["path", { d: "m14 10.5 2 2.5-2 2.5" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" }]]];
  const O1 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["path", { d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3" }], ["path", { d: "m21.7 19.4-.9-.3" }], ["path", { d: "m15.2 16.9-.9-.3" }], ["path", { d: "m16.6 21.7.3-.9" }], ["path", { d: "m19.1 15.2.3-.9" }], ["path", { d: "m19.6 21.7-.4-1" }], ["path", { d: "m16.8 15.3-.4-1" }], ["path", { d: "m14.3 19.6 1-.4" }], ["path", { d: "m20.7 16.8 1-.4" }]]];
  const _c = ["svg", a, [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["circle", { cx: "12", cy: "13", r: "1" }]]];
  const Yc = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M12 10v6" }], ["path", { d: "m15 13-3 3-3-3" }]]];
  const $c = ["svg", a, [["path", { d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" }], ["circle", { cx: "13", cy: "12", r: "2" }], ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8" }], ["circle", { cx: "20", cy: "19", r: "2" }]]];
  const a8 = ["svg", a, [["circle", { cx: "12", cy: "13", r: "2" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M14 13h3" }], ["path", { d: "M7 13h3" }]]];
  const t8 = ["svg", a, [["path", { d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5" }], ["path", { d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z" }]]];
  const h8 = ["svg", a, [["path", { d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" }], ["path", { d: "M2 13h10" }], ["path", { d: "m9 16 3-3-3-3" }]]];
  const d8 = ["svg", a, [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["path", { d: "M8 10v4" }], ["path", { d: "M12 10v2" }], ["path", { d: "M16 10v6" }]]];
  const p8 = ["svg", a, [["circle", { cx: "16", cy: "20", r: "2" }], ["path", { d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2" }], ["path", { d: "m22 14-4.5 4.5" }], ["path", { d: "m21 15 1 1" }]]];
  const c8 = ["svg", a, [["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }], ["path", { d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" }], ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }]]];
  const M8 = ["svg", a, [["path", { d: "M9 13h6" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]];
  const s8 = ["svg", a, [["path", { d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" }], ["circle", { cx: "14", cy: "15", r: "1" }]]];
  const e8 = ["svg", a, [["path", { d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" }]]];
  const r8 = ["svg", a, [["path", { d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5" }], ["path", { d: "M2 13h10" }], ["path", { d: "m5 10-3 3 3 3" }]]];
  const I1 = ["svg", a, [["path", { d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" }], ["path", { d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const v8 = ["svg", a, [["path", { d: "M12 10v6" }], ["path", { d: "M9 13h6" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]];
  const n8 = ["svg", a, [["path", { d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }], ["circle", { cx: "12", cy: "13", r: "2" }], ["path", { d: "M12 15v5" }]]];
  const o8 = ["svg", a, [["circle", { cx: "11.5", cy: "12.5", r: "2.5" }], ["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M13.3 14.3 15 16" }]]];
  const i8 = ["svg", a, [["path", { d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" }], ["path", { d: "m21 21-1.9-1.9" }], ["circle", { cx: "17", cy: "17", r: "3" }]]];
  const l8 = ["svg", a, [["path", { d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }], ["path", { d: "m8 16 3-3-3-3" }]]];
  const g8 = ["svg", a, [["path", { d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" }], ["path", { d: "M12 10v4h4" }], ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }], ["path", { d: "M22 22v-4h-4" }], ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" }]]];
  const x8 = ["svg", a, [["path", { d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" }], ["path", { d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" }], ["path", { d: "M3 5a2 2 0 0 0 2 2h3" }], ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3" }]]];
  const y8 = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "M12 10v6" }], ["path", { d: "m9 13 3-3 3 3" }]]];
  const m8 = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }], ["path", { d: "m9.5 10.5 5 5" }], ["path", { d: "m14.5 10.5-5 5" }]]];
  const H8 = ["svg", a, [["path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }]]];
  const V8 = ["svg", a, [["path", { d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" }], ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14" }]]];
  const C8 = ["svg", a, [["path", { d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" }], ["path", { d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" }], ["path", { d: "M16 17h4" }], ["path", { d: "M4 13h4" }]]];
  const w8 = ["svg", a, [["path", { d: "M12 12H5a2 2 0 0 0-2 2v5" }], ["circle", { cx: "13", cy: "19", r: "2" }], ["circle", { cx: "5", cy: "19", r: "2" }], ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" }]]];
  const u8 = ["svg", a, [["polyline", { points: "15 17 20 12 15 7" }], ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }]]];
  const A8 = ["svg", a, [["line", { x1: "22", x2: "2", y1: "6", y2: "6" }], ["line", { x1: "22", x2: "2", y1: "18", y2: "18" }], ["line", { x1: "6", x2: "6", y1: "2", y2: "22" }], ["line", { x1: "18", x2: "18", y1: "2", y2: "22" }]]];
  const L8 = ["svg", a, [["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" }]]];
  const S8 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]]];
  const f8 = ["svg", a, [["line", { x1: "3", x2: "15", y1: "22", y2: "22" }], ["line", { x1: "4", x2: "14", y1: "9", y2: "9" }], ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }], ["path", { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" }]]];
  const Z8 = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1" }]]];
  const P8 = ["svg", a, [["path", { d: "M2 7v10" }], ["path", { d: "M6 5v14" }], ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }]]];
  const k8 = ["svg", a, [["path", { d: "M2 3v18" }], ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }], ["path", { d: "M22 3v18" }]]];
  const z8 = ["svg", a, [["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2" }], ["path", { d: "M4 21h1" }], ["path", { d: "M9 21h1" }], ["path", { d: "M14 21h1" }], ["path", { d: "M19 21h1" }]]];
  const B8 = ["svg", a, [["path", { d: "M7 2h10" }], ["path", { d: "M5 6h14" }], ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }]]];
  const F8 = ["svg", a, [["path", { d: "M3 2h18" }], ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }], ["path", { d: "M3 22h18" }]]];
  const D8 = ["svg", a, [["line", { x1: "6", x2: "10", y1: "11", y2: "11" }], ["line", { x1: "8", x2: "8", y1: "9", y2: "13" }], ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12" }], ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10" }], ["path", { d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" }]]];
  const q8 = ["svg", a, [["line", { x1: "6", x2: "10", y1: "12", y2: "12" }], ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }], ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13" }], ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11" }], ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]];
  const R8 = ["svg", a, [["path", { d: "m12 14 4-4" }], ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }]]];
  const b8 = ["svg", a, [["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" }], ["path", { d: "m16 16 6-6" }], ["path", { d: "m8 8 6-6" }], ["path", { d: "m9 7 8 8" }], ["path", { d: "m21 11-8-8" }]]];
  const T8 = ["svg", a, [["path", { d: "M6 3h12l4 6-10 13L2 9Z" }], ["path", { d: "M11 3 8 9l4 13 4-13-3-6" }], ["path", { d: "M2 9h20" }]]];
  const U8 = ["svg", a, [["path", { d: "M9 10h.01" }], ["path", { d: "M15 10h.01" }], ["path", { d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" }]]];
  const O8 = ["svg", a, [["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1" }], ["path", { d: "M12 8v13" }], ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }], ["path", { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" }]]];
  const I8 = ["svg", a, [["path", { d: "M6 3v12" }], ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }], ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }], ["path", { d: "M15 6a9 9 0 0 0-9 9" }], ["path", { d: "M18 15v6" }], ["path", { d: "M21 18h-6" }]]];
  const E8 = ["svg", a, [["line", { x1: "6", x2: "6", y1: "3", y2: "15" }], ["circle", { cx: "18", cy: "6", r: "3" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["path", { d: "M18 9a9 9 0 0 1-9 9" }]]];
  const E1 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["line", { x1: "3", x2: "9", y1: "12", y2: "12" }], ["line", { x1: "15", x2: "21", y1: "12", y2: "12" }]]];
  const G8 = ["svg", a, [["path", { d: "M12 3v6" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "M12 15v6" }]]];
  const W8 = ["svg", a, [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }], ["path", { d: "m15 9-3-3 3-3" }], ["circle", { cx: "19", cy: "18", r: "3" }], ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }], ["path", { d: "m9 15 3 3-3 3" }]]];
  const X8 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }], ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9" }]]];
  const N8 = ["svg", a, [["circle", { cx: "12", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["circle", { cx: "18", cy: "6", r: "3" }], ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }], ["path", { d: "M12 12v3" }]]];
  const K8 = ["svg", a, [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M5 9v6" }], ["circle", { cx: "5", cy: "18", r: "3" }], ["path", { d: "M12 3v18" }], ["circle", { cx: "19", cy: "6", r: "3" }], ["path", { d: "M16 15.7A9 9 0 0 0 19 9" }]]];
  const J8 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M6 21V9a9 9 0 0 0 9 9" }]]];
  const j8 = ["svg", a, [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M5 9v12" }], ["circle", { cx: "19", cy: "18", r: "3" }], ["path", { d: "m15 9-3-3 3-3" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }]]];
  const Q8 = ["svg", a, [["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M6 9v12" }], ["path", { d: "m21 3-6 6" }], ["path", { d: "m21 9-6-6" }], ["path", { d: "M18 11.5V15" }], ["circle", { cx: "18", cy: "18", r: "3" }]]];
  const _8 = ["svg", a, [["circle", { cx: "5", cy: "6", r: "3" }], ["path", { d: "M5 9v12" }], ["path", { d: "m15 9-3-3 3-3" }], ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3" }], ["path", { d: "M19 15v6" }], ["path", { d: "M22 18h-6" }]]];
  const Y8 = ["svg", a, [["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M6 9v12" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }], ["path", { d: "M18 15v6" }], ["path", { d: "M21 18h-6" }]]];
  const $8 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M18 6V5" }], ["path", { d: "M18 11v-1" }], ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]]];
  const a7 = ["svg", a, [["circle", { cx: "18", cy: "18", r: "3" }], ["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }], ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]]];
  const t7 = ["svg", a, [["path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }], ["path", { d: "M9 18c-4.51 2-5-2-7-2" }]]];
  const h7 = ["svg", a, [["path", { d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" }]]];
  const d7 = ["svg", a, [["path", { d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" }], ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }]]];
  const p7 = ["svg", a, [["circle", { cx: "6", cy: "15", r: "4" }], ["circle", { cx: "18", cy: "15", r: "4" }], ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }], ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }], ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]]];
  const c7 = ["svg", a, [["path", { d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }], ["path", { d: "M2 12h8.5" }], ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }], ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]]];
  const M7 = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }], ["path", { d: "M2 12h20" }]]];
  const s7 = ["svg", a, [["path", { d: "M12 13V2l8 4-8 4" }], ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29" }], ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02" }]]];
  const e7 = ["svg", a, [["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }], ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }], ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }], ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }]]];
  const r7 = ["svg", a, [["path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" }], ["path", { d: "M22 10v6" }], ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]]];
  const v7 = ["svg", a, [["path", { d: "M22 5V2l-5.89 5.89" }], ["circle", { cx: "16.6", cy: "15.89", r: "3" }], ["circle", { cx: "8.11", cy: "7.4", r: "3" }], ["circle", { cx: "12.35", cy: "11.65", r: "3" }], ["circle", { cx: "13.91", cy: "5.85", r: "3" }], ["circle", { cx: "18.15", cy: "10.09", r: "3" }], ["circle", { cx: "6.56", cy: "13.2", r: "3" }], ["circle", { cx: "10.8", cy: "17.44", r: "3" }], ["circle", { cx: "5", cy: "19", r: "3" }]]];
  const n7 = ["svg", a, [["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }], ["path", { d: "m16 19 2 2 4-4" }]]];
  const o7 = ["svg", a, [["path", { d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }], ["path", { d: "m16 16 5 5" }], ["path", { d: "m16 21 5-5" }]]];
  const G1 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 12h18" }], ["path", { d: "M12 3v18" }]]];
  const v = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "M3 15h18" }], ["path", { d: "M9 3v18" }], ["path", { d: "M15 3v18" }]]];
  const i7 = ["svg", a, [["circle", { cx: "12", cy: "9", r: "1" }], ["circle", { cx: "19", cy: "9", r: "1" }], ["circle", { cx: "5", cy: "9", r: "1" }], ["circle", { cx: "12", cy: "15", r: "1" }], ["circle", { cx: "19", cy: "15", r: "1" }], ["circle", { cx: "5", cy: "15", r: "1" }]]];
  const l7 = ["svg", a, [["circle", { cx: "9", cy: "12", r: "1" }], ["circle", { cx: "9", cy: "5", r: "1" }], ["circle", { cx: "9", cy: "19", r: "1" }], ["circle", { cx: "15", cy: "12", r: "1" }], ["circle", { cx: "15", cy: "5", r: "1" }], ["circle", { cx: "15", cy: "19", r: "1" }]]];
  const g7 = ["svg", a, [["circle", { cx: "12", cy: "5", r: "1" }], ["circle", { cx: "19", cy: "5", r: "1" }], ["circle", { cx: "5", cy: "5", r: "1" }], ["circle", { cx: "12", cy: "12", r: "1" }], ["circle", { cx: "19", cy: "12", r: "1" }], ["circle", { cx: "5", cy: "12", r: "1" }], ["circle", { cx: "12", cy: "19", r: "1" }], ["circle", { cx: "19", cy: "19", r: "1" }], ["circle", { cx: "5", cy: "19", r: "1" }]]];
  const x7 = ["svg", a, [["path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }], ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }], ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }], ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }], ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1" }], ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1" }]]];
  const y7 = ["svg", a, [["path", { d: "m11.9 12.1 4.514-4.514" }], ["path", { d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" }], ["path", { d: "m6 16 2 2" }], ["path", { d: "M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z" }], ["circle", { cx: "11.5", cy: "12.5", r: ".5", fill: "currentColor" }]]];
  const m7 = ["svg", a, [["path", { d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }], ["path", { d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" }], ["path", { d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" }], ["path", { d: "m8.5 16.5-1-1" }]]];
  const H7 = ["svg", a, [["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" }], ["path", { d: "m18 15 4-4" }], ["path", { d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" }]]];
  const V7 = ["svg", a, [["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }], ["path", { d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }], ["path", { d: "m2 16 6 6" }], ["circle", { cx: "16", cy: "9", r: "2.9" }], ["circle", { cx: "6", cy: "5", r: "3" }]]];
  const C7 = ["svg", a, [["path", { d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }], ["path", { d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }], ["path", { d: "m2 15 6 6" }], ["path", { d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" }]]];
  const W1 = ["svg", a, [["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }], ["path", { d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }], ["path", { d: "m2 13 6 6" }]]];
  const w7 = ["svg", a, [["path", { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }], ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2" }], ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9" }], ["path", { d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" }]]];
  const u7 = ["svg", a, [["path", { d: "M12 3V2" }], ["path", { d: "M5 10a7.1 7.1 0 0 1 14 0" }], ["path", { d: "M4 10h16" }], ["path", { d: "M2 14h12a2 2 0 1 1 0 4h-2" }], ["path", { d: "m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18" }], ["path", { d: "M5 14v7H2" }]]];
  const A7 = ["svg", a, [["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }], ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }], ["path", { d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }]]];
  const L7 = ["svg", a, [["path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }], ["path", { d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }], ["path", { d: "m21 3 1 11h-2" }], ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }], ["path", { d: "M3 4h8" }]]];
  const S7 = ["svg", a, [["path", { d: "M12 2v8" }], ["path", { d: "m16 6-4 4-4-4" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6 18h.01" }], ["path", { d: "M10 18h.01" }]]];
  const f7 = ["svg", a, [["path", { d: "m16 6-4-4-4 4" }], ["path", { d: "M12 2v8" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6 18h.01" }], ["path", { d: "M10 18h.01" }]]];
  const Z7 = ["svg", a, [["line", { x1: "22", x2: "2", y1: "12", y2: "12" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }], ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16" }], ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16" }]]];
  const P7 = ["svg", a, [["path", { d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" }], ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }], ["path", { d: "M4 15v-3a6 6 0 0 1 6-6" }], ["path", { d: "M14 6a6 6 0 0 1 6 6v3" }]]];
  const k7 = ["svg", a, [["line", { x1: "4", x2: "20", y1: "9", y2: "9" }], ["line", { x1: "4", x2: "20", y1: "15", y2: "15" }], ["line", { x1: "10", x2: "8", y1: "3", y2: "21" }], ["line", { x1: "16", x2: "14", y1: "3", y2: "21" }]]];
  const z7 = ["svg", a, [["path", { d: "m5.2 6.2 1.4 1.4" }], ["path", { d: "M2 13h2" }], ["path", { d: "M20 13h2" }], ["path", { d: "m17.4 7.6 1.4-1.4" }], ["path", { d: "M22 17H2" }], ["path", { d: "M22 21H2" }], ["path", { d: "M16 13a4 4 0 0 0-8 0" }], ["path", { d: "M12 5V2.5" }]]];
  const B7 = ["svg", a, [["path", { d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" }], ["path", { d: "M7.5 12h9" }]]];
  const F7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "m17 12 3-2v8" }]]];
  const D7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]]];
  const q7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }], ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }]]];
  const R7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "M17 10v4h4" }], ["path", { d: "M21 10v8" }]]];
  const b7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["path", { d: "M17 13v-3h4" }], ["path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }]]];
  const T7 = ["svg", a, [["path", { d: "M4 12h8" }], ["path", { d: "M4 18V6" }], ["path", { d: "M12 18V6" }], ["circle", { cx: "19", cy: "16", r: "2" }], ["path", { d: "M20 10c-2 2-3 3.5-3 6" }]]];
  const U7 = ["svg", a, [["path", { d: "M6 12h12" }], ["path", { d: "M6 20V4" }], ["path", { d: "M18 20V4" }]]];
  const O7 = ["svg", a, [["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" }]]];
  const I7 = ["svg", a, [["path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" }], ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" }]]];
  const E7 = ["svg", a, [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }], ["path", { d: "m12 13-1-1 2-2-3-3 2-2" }]]];
  const G7 = ["svg", a, [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }], ["path", { d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" }], ["path", { d: "m18 15-2-2" }], ["path", { d: "m15 18-2-2" }]]];
  const W7 = ["svg", a, [["line", { x1: "2", y1: "2", x2: "22", y2: "22" }], ["path", { d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35" }], ["path", { d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17" }]]];
  const X7 = ["svg", a, [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }], ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]]];
  const N7 = ["svg", a, [["path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }]]];
  const K7 = ["svg", a, [["path", { d: "M11 8c2-3-2-3 0-6" }], ["path", { d: "M15.5 8c2-3-2-3 0-6" }], ["path", { d: "M6 10h.01" }], ["path", { d: "M6 14h.01" }], ["path", { d: "M10 16v-4" }], ["path", { d: "M14 16v-4" }], ["path", { d: "M18 16v-4" }], ["path", { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }], ["path", { d: "M5 20v2" }], ["path", { d: "M19 20v2" }]]];
  const J7 = ["svg", a, [["path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }]]];
  const j7 = ["svg", a, [["path", { d: "m9 11-6 6v3h9l3-3" }], ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }]]];
  const Q7 = ["svg", a, [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { d: "M3 3v5h5" }], ["path", { d: "M12 7v5l4 2" }]]];
  const _7 = ["svg", a, [["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }], ["path", { d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" }], ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }], ["path", { d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" }], ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }], ["path", { d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24" }], ["path", { d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" }], ["path", { d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" }], ["path", { d: "m2 2 20 20" }]]];
  const Y7 = ["svg", a, [["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" }], ["path", { d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" }], ["path", { d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" }], ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" }], ["path", { d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" }], ["path", { d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" }], ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }], ["path", { d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" }]]];
  const $7 = ["svg", a, [["path", { d: "M12 6v4" }], ["path", { d: "M14 14h-4" }], ["path", { d: "M14 18h-4" }], ["path", { d: "M14 8h-4" }], ["path", { d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }], ["path", { d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" }]]];
  const aM = ["svg", a, [["path", { d: "M10 22v-6.57" }], ["path", { d: "M12 11h.01" }], ["path", { d: "M12 7h.01" }], ["path", { d: "M14 15.43V22" }], ["path", { d: "M15 16a5 5 0 0 0-6 0" }], ["path", { d: "M16 11h.01" }], ["path", { d: "M16 7h.01" }], ["path", { d: "M8 11h.01" }], ["path", { d: "M8 7h.01" }], ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]]];
  const tM = ["svg", a, [["path", { d: "M5 22h14" }], ["path", { d: "M5 2h14" }], ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }], ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }]]];
  const hM = ["svg", a, [["path", { d: "M10 12V8.964" }], ["path", { d: "M14 12V8.964" }], ["path", { d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" }], ["path", { d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2" }]]];
  const dM = ["svg", a, [["path", { d: "M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354" }], ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { d: "M15 6h6" }], ["path", { d: "M18 3v6" }]]];
  const X1 = ["svg", a, [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }]]];
  const N1 = ["svg", a, [["path", { d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }], ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0" }], ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0" }]]];
  const K1 = ["svg", a, [["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }], ["path", { d: "M17 7A5 5 0 0 0 7 7" }], ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }]]];
  const pM = ["svg", a, [["path", { d: "M16 10h2" }], ["path", { d: "M16 14h2" }], ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0" }], ["circle", { cx: "9", cy: "11", r: "2" }], ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]]];
  const cM = ["svg", a, [["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }], ["path", { d: "m14 19 3 3v-5.5" }], ["path", { d: "m17 22 3-3" }], ["circle", { cx: "9", cy: "9", r: "2" }]]];
  const MM = ["svg", a, [["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }], ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }], ["circle", { cx: "9", cy: "9", r: "2" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]]];
  const sM = ["svg", a, [["line", { x1: "2", x2: "22", y1: "2", y2: "22" }], ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }], ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21" }], ["line", { x1: "18", x2: "21", y1: "12", y2: "15" }], ["path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }], ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }]]];
  const eM = ["svg", a, [["path", { d: "m11 16-5 5" }], ["path", { d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5" }], ["path", { d: "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z" }], ["circle", { cx: "9", cy: "9", r: "2" }]]];
  const rM = ["svg", a, [["path", { d: "M16 5h6" }], ["path", { d: "M19 2v6" }], ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }], ["circle", { cx: "9", cy: "9", r: "2" }]]];
  const vM = ["svg", a, [["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }], ["path", { d: "m14 19.5 3-3 3 3" }], ["path", { d: "M17 22v-5.5" }], ["circle", { cx: "9", cy: "9", r: "2" }]]];
  const nM = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["circle", { cx: "9", cy: "9", r: "2" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]]];
  const oM = ["svg", a, [["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }], ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" }], ["circle", { cx: "12", cy: "8", r: "2" }], ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2" }]]];
  const iM = ["svg", a, [["path", { d: "M12 3v12" }], ["path", { d: "m8 11 4 4 4-4" }], ["path", { d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }]]];
  const lM = ["svg", a, [["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }]]];
  const J1 = ["svg", a, [["polyline", { points: "7 8 3 12 7 16" }], ["line", { x1: "21", x2: "11", y1: "12", y2: "12" }], ["line", { x1: "21", x2: "11", y1: "6", y2: "6" }], ["line", { x1: "21", x2: "11", y1: "18", y2: "18" }]]];
  const j1 = ["svg", a, [["polyline", { points: "3 8 7 12 3 16" }], ["line", { x1: "21", x2: "11", y1: "12", y2: "12" }], ["line", { x1: "21", x2: "11", y1: "6", y2: "6" }], ["line", { x1: "21", x2: "11", y1: "18", y2: "18" }]]];
  const gM = ["svg", a, [["path", { d: "M6 3h12" }], ["path", { d: "M6 8h12" }], ["path", { d: "m6 13 8.5 8" }], ["path", { d: "M6 13h3" }], ["path", { d: "M9 13c6.667 0 6.667-10 0-10" }]]];
  const xM = ["svg", a, [["path", { d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" }]]];
  const yM = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M12 16v-4" }], ["path", { d: "M12 8h.01" }]]];
  const mM = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 7h.01" }], ["path", { d: "M17 7h.01" }], ["path", { d: "M7 17h.01" }], ["path", { d: "M17 17h.01" }]]];
  const HM = ["svg", a, [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }], ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }], ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }]]];
  const VM = ["svg", a, [["line", { x1: "19", x2: "10", y1: "4", y2: "4" }], ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }], ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]]];
  const CM = ["svg", a, [["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" }], ["polyline", { points: "16 14 20 18 16 22" }]]];
  const wM = ["svg", a, [["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" }], ["polyline", { points: "8 22 4 18 8 14" }]]];
  const uM = ["svg", a, [["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }], ["path", { d: "M6 15h12" }], ["path", { d: "M6 11h12" }]]];
  const AM = ["svg", a, [["path", { d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }], ["path", { d: "M6 15v-2" }], ["path", { d: "M12 15V9" }], ["circle", { cx: "12", cy: "6", r: "3" }]]];
  const LM = ["svg", a, [["path", { d: "M6 5v11" }], ["path", { d: "M12 5v6" }], ["path", { d: "M18 5v14" }]]];
  const SM = ["svg", a, [["path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }], ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }]]];
  const fM = ["svg", a, [["path", { d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" }], ["path", { d: "m14 7 3 3" }], ["path", { d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" }]]];
  const ZM = ["svg", a, [["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" }], ["path", { d: "m21 2-9.6 9.6" }], ["circle", { cx: "7.5", cy: "15.5", r: "5.5" }]]];
  const PM = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M6 8h4" }], ["path", { d: "M14 8h.01" }], ["path", { d: "M18 8h.01" }], ["path", { d: "M2 12h20" }], ["path", { d: "M6 12v4" }], ["path", { d: "M10 12v4" }], ["path", { d: "M14 12v4" }], ["path", { d: "M18 12v4" }]]];
  const kM = ["svg", a, [["path", { d: "M 20 4 A2 2 0 0 1 22 6" }], ["path", { d: "M 22 6 L 22 16.41" }], ["path", { d: "M 7 16 L 16 16" }], ["path", { d: "M 9.69 4 L 20 4" }], ["path", { d: "M14 8h.01" }], ["path", { d: "M18 8h.01" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }], ["path", { d: "M6 8h.01" }], ["path", { d: "M8 12h.01" }]]];
  const zM = ["svg", a, [["path", { d: "M10 8h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M14 8h.01" }], ["path", { d: "M16 12h.01" }], ["path", { d: "M18 8h.01" }], ["path", { d: "M6 8h.01" }], ["path", { d: "M7 16h10" }], ["path", { d: "M8 12h.01" }], ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }]]];
  const BM = ["svg", a, [["path", { d: "M12 2v5" }], ["path", { d: "M6 7h12l4 9H2l4-9Z" }], ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0" }]]];
  const FM = ["svg", a, [["path", { d: "m14 5-3 3 2 7 8-8-7-2Z" }], ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z" }], ["path", { d: "M9.5 6.5 4 12l3 6" }], ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" }]]];
  const DM = ["svg", a, [["path", { d: "M9 2h6l3 7H6l3-7Z" }], ["path", { d: "M12 9v13" }], ["path", { d: "M9 22h6" }]]];
  const qM = ["svg", a, [["path", { d: "M11 13h6l3 7H8l3-7Z" }], ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8" }], ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" }]]];
  const RM = ["svg", a, [["path", { d: "M11 4h6l3 7H8l3-7Z" }], ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8" }], ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" }]]];
  const bM = ["svg", a, [["path", { d: "M8 2h8l4 10H4L8 2Z" }], ["path", { d: "M12 12v6" }], ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" }]]];
  const TM = ["svg", a, [["path", { d: "m12 8 6-3-6-3v10" }], ["path", { d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" }], ["path", { d: "m6.49 12.85 11.02 6.3" }], ["path", { d: "M17.51 12.85 6.5 19.15" }]]];
  const UM = ["svg", a, [["line", { x1: "3", x2: "21", y1: "22", y2: "22" }], ["line", { x1: "6", x2: "6", y1: "18", y2: "11" }], ["line", { x1: "10", x2: "10", y1: "18", y2: "11" }], ["line", { x1: "14", x2: "14", y1: "18", y2: "11" }], ["line", { x1: "18", x2: "18", y1: "18", y2: "11" }], ["polygon", { points: "12 2 20 7 4 7" }]]];
  const OM = ["svg", a, [["path", { d: "m5 8 6 6" }], ["path", { d: "m4 14 6-6 2-3" }], ["path", { d: "M2 5h12" }], ["path", { d: "M7 2h1" }], ["path", { d: "m22 22-5-10-5 10" }], ["path", { d: "M14 18h6" }]]];
  const Q1 = ["svg", a, [["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2" }], ["line", { x1: "2", x2: "22", y1: "20", y2: "20" }]]];
  const IM = ["svg", a, [["path", { d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" }]]];
  const EM = ["svg", a, [["path", { d: "M7 22a5 5 0 0 1-2-4" }], ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91" }], ["path", { d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" }], ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }], ["path", { d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" }]]];
  const GM = ["svg", a, [["path", { d: "M7 22a5 5 0 0 1-2-4" }], ["path", { d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1" }], ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }]]];
  const WM = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]]];
  const XM = ["svg", a, [["path", { d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12" }], ["path", { d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z" }]]];
  const NM = ["svg", a, [["path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }], ["path", { d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" }], ["path", { d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59" }]]];
  const KM = ["svg", a, [["path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }], ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }], ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" }]]];
  const JM = ["svg", a, [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]]];
  const jM = ["svg", a, [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }]]];
  const QM = ["svg", a, [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }], ["path", { d: "M14 4h7" }], ["path", { d: "M14 9h7" }], ["path", { d: "M14 15h7" }], ["path", { d: "M14 20h7" }]]];
  const _M = ["svg", a, [["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]]];
  const YM = ["svg", a, [["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]]];
  const $M = ["svg", a, [["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }], ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }], ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }]]];
  const as = ["svg", a, [["path", { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }], ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]]];
  const ts = ["svg", a, [["path", { d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" }], ["path", { d: "M2 22 17 7" }]]];
  const hs = ["svg", a, [["path", { d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" }], ["path", { d: "M18 6V3a1 1 0 0 0-1-1h-3" }], ["rect", { width: "8", height: "12", x: "8", y: "10", rx: "1" }]]];
  const ds = ["svg", a, [["path", { d: "M15 12h6" }], ["path", { d: "M15 6h6" }], ["path", { d: "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" }], ["path", { d: "M3 18h18" }], ["path", { d: "M4 11h6" }]]];
  const ps = ["svg", a, [["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1" }], ["path", { d: "M7 3v18" }], ["path", { d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" }]]];
  const cs = ["svg", a, [["path", { d: "m16 6 4 14" }], ["path", { d: "M12 6v14" }], ["path", { d: "M8 8v12" }], ["path", { d: "M4 4v16" }]]];
  const Ms = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "m4.93 4.93 4.24 4.24" }], ["path", { d: "m14.83 9.17 4.24-4.24" }], ["path", { d: "m14.83 14.83 4.24 4.24" }], ["path", { d: "m9.17 14.83-4.24 4.24" }], ["circle", { cx: "12", cy: "12", r: "4" }]]];
  const ss = ["svg", a, [["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" }], ["path", { d: "M6 12h4" }], ["path", { d: "M14 12h2v8" }], ["path", { d: "M6 20h4" }], ["path", { d: "M14 20h4" }]]];
  const es = ["svg", a, [["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }], ["path", { d: "M9 18h6" }], ["path", { d: "M10 22h4" }]]];
  const rs = ["svg", a, [["path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }], ["path", { d: "M9 18h6" }], ["path", { d: "M10 22h4" }]]];
  const vs = ["svg", a, [["path", { d: "M9 17H7A5 5 0 0 1 7 7" }], ["path", { d: "M15 7h2a5 5 0 0 1 4 8" }], ["line", { x1: "8", x2: "12", y1: "12", y2: "12" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const ns = ["svg", a, [["path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }], ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]]];
  const os = ["svg", a, [["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }], ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]]];
  const is = ["svg", a, [["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }], ["rect", { width: "4", height: "12", x: "2", y: "9" }], ["circle", { cx: "4", cy: "4", r: "2" }]]];
  const ls = ["svg", a, [["path", { d: "M11 18H3" }], ["path", { d: "m15 18 2 2 4-4" }], ["path", { d: "M16 12H3" }], ["path", { d: "M16 6H3" }]]];
  const gs = ["svg", a, [["path", { d: "m3 17 2 2 4-4" }], ["path", { d: "m3 7 2 2 4-4" }], ["path", { d: "M13 6h8" }], ["path", { d: "M13 12h8" }], ["path", { d: "M13 18h8" }]]];
  const xs = ["svg", a, [["path", { d: "m3 10 2.5-2.5L3 5" }], ["path", { d: "m3 19 2.5-2.5L3 14" }], ["path", { d: "M10 6h11" }], ["path", { d: "M10 12h11" }], ["path", { d: "M10 18h11" }]]];
  const ys = ["svg", a, [["path", { d: "M16 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M10 18H3" }], ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5" }], ["path", { d: "m16 16-2 2 2 2" }]]];
  const ms = ["svg", a, [["path", { d: "M3 6h18" }], ["path", { d: "M7 12h10" }], ["path", { d: "M10 18h4" }]]];
  const Hs = ["svg", a, [["path", { d: "M11 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "M21 12h-6" }]]];
  const Vs = ["svg", a, [["path", { d: "M21 15V6" }], ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }], ["path", { d: "M12 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M12 18H3" }]]];
  const Cs = ["svg", a, [["line", { x1: "10", x2: "21", y1: "6", y2: "6" }], ["line", { x1: "10", x2: "21", y1: "12", y2: "12" }], ["line", { x1: "10", x2: "21", y1: "18", y2: "18" }], ["path", { d: "M4 6h1v4" }], ["path", { d: "M4 10h2" }], ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }]]];
  const ws = ["svg", a, [["path", { d: "M11 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "M18 9v6" }], ["path", { d: "M21 12h-6" }]]];
  const us = ["svg", a, [["path", { d: "M21 6H3" }], ["path", { d: "M7 12H3" }], ["path", { d: "M7 18H3" }], ["path", { d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }], ["path", { d: "M11 10v4h4" }]]];
  const As = ["svg", a, [["path", { d: "M16 12H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "M10 6H3" }], ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5" }], ["path", { d: "m16 8-2-2 2-2" }]]];
  const Ls = ["svg", a, [["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1" }], ["path", { d: "m3 17 2 2 4-4" }], ["path", { d: "M13 6h8" }], ["path", { d: "M13 12h8" }], ["path", { d: "M13 18h8" }]]];
  const Ss = ["svg", a, [["path", { d: "M21 12h-8" }], ["path", { d: "M21 6H8" }], ["path", { d: "M21 18h-8" }], ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3" }], ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3" }]]];
  const fs = ["svg", a, [["path", { d: "M12 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M12 18H3" }], ["path", { d: "m16 12 5 3-5 3v-6Z" }]]];
  const Zs = ["svg", a, [["path", { d: "M11 12H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "m19 10-4 4" }], ["path", { d: "m15 10 4 4" }]]];
  const Ps = ["svg", a, [["line", { x1: "8", x2: "21", y1: "6", y2: "6" }], ["line", { x1: "8", x2: "21", y1: "12", y2: "12" }], ["line", { x1: "8", x2: "21", y1: "18", y2: "18" }], ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }], ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }], ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18" }]]];
  const _1 = ["svg", a, [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]]];
  const ks = ["svg", a, [["path", { d: "M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5" }], ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }], ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }], ["circle", { cx: "12", cy: "12", r: "10" }]]];
  const zs = ["svg", a, [["path", { d: "M12 2v4" }], ["path", { d: "m16.2 7.8 2.9-2.9" }], ["path", { d: "M18 12h4" }], ["path", { d: "m16.2 16.2 2.9 2.9" }], ["path", { d: "M12 18v4" }], ["path", { d: "m4.9 19.1 2.9-2.9" }], ["path", { d: "M2 12h4" }], ["path", { d: "m4.9 4.9 2.9 2.9" }]]];
  const Bs = ["svg", a, [["line", { x1: "2", x2: "5", y1: "12", y2: "12" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }], ["circle", { cx: "12", cy: "12", r: "7" }], ["circle", { cx: "12", cy: "12", r: "3" }]]];
  const Fs = ["svg", a, [["line", { x1: "2", x2: "5", y1: "12", y2: "12" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }], ["path", { d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11" }], ["path", { d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Ds = ["svg", a, [["line", { x1: "2", x2: "5", y1: "12", y2: "12" }], ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }], ["circle", { cx: "12", cy: "12", r: "7" }]]];
  const Y1 = ["svg", a, [["circle", { cx: "12", cy: "16", r: "1" }], ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }], ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }]]];
  const qs = ["svg", a, [["circle", { cx: "12", cy: "16", r: "1" }], ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }], ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }]]];
  const $1 = ["svg", a, [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }], ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }]]];
  const Rs = ["svg", a, [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]]];
  const bs = ["svg", a, [["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }], ["polyline", { points: "10 17 15 12 10 7" }], ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }]]];
  const Ts = ["svg", a, [["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }], ["polyline", { points: "16 17 21 12 16 7" }], ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }]]];
  const Us = ["svg", a, [["path", { d: "M13 12h8" }], ["path", { d: "M13 18h8" }], ["path", { d: "M13 6h8" }], ["path", { d: "M3 12h1" }], ["path", { d: "M3 18h1" }], ["path", { d: "M3 6h1" }], ["path", { d: "M8 12h1" }], ["path", { d: "M8 18h1" }], ["path", { d: "M8 6h1" }]]];
  const Os = ["svg", a, [["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }], ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }]]];
  const Is = ["svg", a, [["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }], ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }], ["path", { d: "M10 20h4" }], ["circle", { cx: "16", cy: "20", r: "2" }], ["circle", { cx: "8", cy: "20", r: "2" }]]];
  const Es = ["svg", a, [["path", { d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" }], ["path", { d: "m5 8 4 4" }], ["path", { d: "m12 15 4 4" }]]];
  const Gs = ["svg", a, [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "m16 19 2 2 4-4" }]]];
  const Ws = ["svg", a, [["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M16 19h6" }]]];
  const Xs = ["svg", a, [["path", { d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" }], ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }]]];
  const Ns = ["svg", a, [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M19 16v6" }], ["path", { d: "M16 19h6" }]]];
  const Ks = ["svg", a, [["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }], ["path", { d: "M20 22v.01" }]]];
  const Js = ["svg", a, [["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }], ["circle", { cx: "18", cy: "18", r: "3" }], ["path", { d: "m22 22-1.5-1.5" }]]];
  const js = ["svg", a, [["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "M20 14v4" }], ["path", { d: "M20 22v.01" }]]];
  const Qs = ["svg", a, [["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }], ["path", { d: "m17 17 4 4" }], ["path", { d: "m21 17-4 4" }]]];
  const _s = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]]];
  const Ys = ["svg", a, [["path", { d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }], ["polyline", { points: "15,9 18,9 18,11" }], ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }], ["line", { x1: "6", x2: "7", y1: "10", y2: "10" }]]];
  const $s = ["svg", a, [["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2" }], ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" }], ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14" }]]];
  const ae = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { d: "m9 10 2 2 4-4" }]]];
  const te = ["svg", a, [["path", { d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "m16 18 2 2 4-4" }]]];
  const he = ["svg", a, [["path", { d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" }], ["path", { d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" }], ["path", { d: "M18 22v-3" }], ["circle", { cx: "10", cy: "10", r: "3" }]]];
  const de = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { d: "M9 10h6" }]]];
  const pe = ["svg", a, [["path", { d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M16 18h6" }]]];
  const ce = ["svg", a, [["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16" }], ["path", { d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }], ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74" }]]];
  const Me = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { d: "M12 7v6" }], ["path", { d: "M9 10h6" }]]];
  const se = ["svg", a, [["path", { d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M16 18h6" }], ["path", { d: "M19 15v6" }]]];
  const ee = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["path", { d: "m14.5 7.5-5 5" }], ["path", { d: "m9.5 7.5 5 5" }]]];
  const re = ["svg", a, [["path", { d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "m21.5 15.5-5 5" }], ["path", { d: "m21.5 20.5-5-5" }]]];
  const ve = ["svg", a, [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", { cx: "12", cy: "10", r: "3" }]]];
  const ne = ["svg", a, [["path", { d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" }], ["circle", { cx: "12", cy: "8", r: "2" }], ["path", { d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" }]]];
  const oe = ["svg", a, [["path", { d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" }], ["path", { d: "M15 5.764v15" }], ["path", { d: "M9 3.236v15" }]]];
  const ie = ["svg", a, [["path", { d: "M8 22h8" }], ["path", { d: "M12 11v11" }], ["path", { d: "m19 3-7 8-7-8Z" }]]];
  const le = ["svg", a, [["polyline", { points: "15 3 21 3 21 9" }], ["polyline", { points: "9 21 3 21 3 15" }], ["line", { x1: "21", x2: "14", y1: "3", y2: "10" }], ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]]];
  const ge = ["svg", a, [["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }], ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }], ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }], ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]]];
  const xe = ["svg", a, [["path", { d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" }], ["path", { d: "M11 12 5.12 2.2" }], ["path", { d: "m13 12 5.88-9.8" }], ["path", { d: "M8 7h8" }], ["circle", { cx: "12", cy: "17", r: "5" }], ["path", { d: "M12 18v-2h-.5" }]]];
  const ye = ["svg", a, [["path", { d: "M9.26 9.26 3 11v3l14.14 3.14" }], ["path", { d: "M21 15.34V6l-7.31 2.03" }], ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const me = ["svg", a, [["path", { d: "m3 11 18-5v12L3 14v-3z" }], ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }]]];
  const He = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["line", { x1: "8", x2: "16", y1: "15", y2: "15" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]]];
  const Ve = ["svg", a, [["path", { d: "M6 19v-3" }], ["path", { d: "M10 19v-3" }], ["path", { d: "M14 19v-3" }], ["path", { d: "M18 19v-3" }], ["path", { d: "M8 11V9" }], ["path", { d: "M16 11V9" }], ["path", { d: "M12 11V9" }], ["path", { d: "M2 15h20" }], ["path", { d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z" }]]];
  const Ce = ["svg", a, [["line", { x1: "4", x2: "20", y1: "12", y2: "12" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18" }]]];
  const we = ["svg", a, [["path", { d: "m8 6 4-4 4 4" }], ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }], ["path", { d: "m20 22-5-5" }]]];
  const ue = ["svg", a, [["path", { d: "M10 9.5 8 12l2 2.5" }], ["path", { d: "m14 9.5 2 2.5-2 2.5" }], ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z" }]]];
  const Ae = ["svg", a, [["path", { d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" }], ["path", { d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" }], ["path", { d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" }], ["path", { d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" }], ["path", { d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" }], ["path", { d: "M3.5 17.5 2 22l4.5-1.5" }], ["path", { d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" }], ["path", { d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" }]]];
  const Le = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" }]]];
  const Se = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M8 12h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M16 12h.01" }]]];
  const fe = ["svg", a, [["path", { d: "M20.5 14.9A9 9 0 0 0 9.1 3.5" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7" }]]];
  const Ze = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M8 12h8" }], ["path", { d: "M12 8v8" }]]];
  const Pe = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }], ["path", { d: "M12 17h.01" }]]];
  const ke = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "m10 15-3-3 3-3" }], ["path", { d: "M7 12h7a2 2 0 0 1 2 2v1" }]]];
  const ze = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "M12 8v4" }], ["path", { d: "M12 16h.01" }]]];
  const Be = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "m9 9 6 6" }]]];
  const Fe = ["svg", a, [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }]]];
  const De = ["svg", a, [["path", { d: "M10 7.5 8 10l2 2.5" }], ["path", { d: "m14 7.5 2 2.5-2 2.5" }], ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]]];
  const qe = ["svg", a, [["path", { d: "M3 6V5c0-1.1.9-2 2-2h2" }], ["path", { d: "M11 3h3" }], ["path", { d: "M18 3h1c1.1 0 2 .9 2 2" }], ["path", { d: "M21 9v2" }], ["path", { d: "M21 15c0 1.1-.9 2-2 2h-1" }], ["path", { d: "M14 17h-3" }], ["path", { d: "m7 17-4 4v-5" }], ["path", { d: "M3 12v-2" }]]];
  const Re = ["svg", a, [["path", { d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }], ["path", { d: "M9 10h6" }], ["path", { d: "M12 7v6" }], ["path", { d: "M9 17h6" }]]];
  const be = ["svg", a, [["path", { d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7" }], ["circle", { cx: "18", cy: "6", r: "3" }]]];
  const Te = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8" }]]];
  const Ue = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M8 10h.01" }], ["path", { d: "M12 10h.01" }], ["path", { d: "M16 10h.01" }]]];
  const Oe = ["svg", a, [["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" }]]];
  const Ie = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M12 7v6" }], ["path", { d: "M9 10h6" }]]];
  const Ee = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8" }], ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2" }]]];
  const Ge = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "m10 7-3 3 3 3" }], ["path", { d: "M17 13v-1a2 2 0 0 0-2-2H7" }]]];
  const We = ["svg", a, [["path", { d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" }], ["path", { d: "M16 3h5v5" }], ["path", { d: "m16 8 5-5" }]]];
  const Xe = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M13 8H7" }], ["path", { d: "M17 12H7" }]]];
  const Ne = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "M12 7v2" }], ["path", { d: "M12 13h.01" }]]];
  const Ke = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }], ["path", { d: "m14.5 7.5-5 5" }], ["path", { d: "m9.5 7.5 5 5" }]]];
  const Je = ["svg", a, [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]]];
  const je = ["svg", a, [["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" }], ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" }]]];
  const Qe = ["svg", a, [["line", { x1: "2", x2: "22", y1: "2", y2: "22" }], ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" }], ["path", { d: "M5 10v2a7 7 0 0 0 12 5" }], ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }], ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]]];
  const a2 = ["svg", a, [["path", { d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" }], ["path", { d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" }], ["circle", { cx: "16", cy: "7", r: "5" }]]];
  const _e = ["svg", a, [["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }], ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]]];
  const Ye = ["svg", a, [["path", { d: "M18 12h2" }], ["path", { d: "M18 16h2" }], ["path", { d: "M18 20h2" }], ["path", { d: "M18 4h2" }], ["path", { d: "M18 8h2" }], ["path", { d: "M4 12h2" }], ["path", { d: "M4 16h2" }], ["path", { d: "M4 20h2" }], ["path", { d: "M4 4h2" }], ["path", { d: "M4 8h2" }], ["path", { d: "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z" }]]];
  const $e = ["svg", a, [["path", { d: "M6 18h8" }], ["path", { d: "M3 22h18" }], ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }], ["path", { d: "M9 14h2" }], ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }], ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]]];
  const a9 = ["svg", a, [["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2" }], ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1" }], ["path", { d: "M18 8v7" }], ["path", { d: "M6 19v2" }], ["path", { d: "M18 19v2" }]]];
  const t9 = ["svg", a, [["path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" }], ["path", { d: "M12 13v8" }], ["path", { d: "M12 3v3" }]]];
  const h9 = ["svg", a, [["path", { d: "M8 2h8" }], ["path", { d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" }], ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const d9 = ["svg", a, [["path", { d: "M8 2h8" }], ["path", { d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" }], ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]]];
  const p9 = ["svg", a, [["polyline", { points: "4 14 10 14 10 20" }], ["polyline", { points: "20 10 14 10 14 4" }], ["line", { x1: "14", x2: "21", y1: "10", y2: "3" }], ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]]];
  const c9 = ["svg", a, [["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }], ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }], ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }], ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]]];
  const M9 = ["svg", a, [["path", { d: "M5 12h14" }]]];
  const s9 = ["svg", a, [["path", { d: "m9 10 2 2 4-4" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const e9 = ["svg", a, [["path", { d: "M12 17v4" }], ["path", { d: "m15.2 4.9-.9-.4" }], ["path", { d: "m15.2 7.1-.9.4" }], ["path", { d: "m16.9 3.2-.4-.9" }], ["path", { d: "m16.9 8.8-.4.9" }], ["path", { d: "m19.5 2.3-.4.9" }], ["path", { d: "m19.5 9.7-.4-.9" }], ["path", { d: "m21.7 4.5-.9.4" }], ["path", { d: "m21.7 7.5-.9-.4" }], ["path", { d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }], ["path", { d: "M8 21h8" }], ["circle", { cx: "18", cy: "6", r: "3" }]]];
  const r9 = ["svg", a, [["circle", { cx: "19", cy: "6", r: "3" }], ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const v9 = ["svg", a, [["path", { d: "M12 13V7" }], ["path", { d: "m15 10-3 3-3-3" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const n9 = ["svg", a, [["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" }], ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9" }], ["path", { d: "M8 21h8" }], ["path", { d: "M12 17v4" }], ["path", { d: "m2 2 20 20" }]]];
  const o9 = ["svg", a, [["path", { d: "M10 13V7" }], ["path", { d: "M14 13V7" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const i9 = ["svg", a, [["path", { d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]]];
  const l9 = ["svg", a, [["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }], ["path", { d: "M10 19v-3.96 3.15" }], ["path", { d: "M7 19h5" }], ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2" }]]];
  const g9 = ["svg", a, [["path", { d: "M5.5 20H8" }], ["path", { d: "M17 9h.01" }], ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2" }], ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }], ["circle", { cx: "17", cy: "15", r: "1" }]]];
  const x9 = ["svg", a, [["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }], ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }], ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1" }]]];
  const y9 = ["svg", a, [["path", { d: "m9 10 3-3 3 3" }], ["path", { d: "M12 13V7" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const m9 = ["svg", a, [["path", { d: "m14.5 12.5-5-5" }], ["path", { d: "m9.5 12.5 5-5" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["path", { d: "M12 17v4" }], ["path", { d: "M8 21h8" }]]];
  const H9 = ["svg", a, [["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }], ["line", { x1: "8", x2: "16", y1: "21", y2: "21" }], ["line", { x1: "12", x2: "12", y1: "17", y2: "21" }]]];
  const V9 = ["svg", a, [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" }], ["path", { d: "M20 3v4" }], ["path", { d: "M22 5h-4" }]]];
  const C9 = ["svg", a, [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]]];
  const w9 = ["svg", a, [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }], ["path", { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }]]];
  const u9 = ["svg", a, [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }]]];
  const A9 = ["svg", a, [["path", { d: "M12 6v.343" }], ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }], ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902" }], ["path", { d: "M22 22 2 2" }]]];
  const L9 = ["svg", a, [["path", { d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" }]]];
  const S9 = ["svg", a, [["path", { d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" }], ["circle", { cx: "16", cy: "16", r: "6" }], ["path", { d: "m11.8 11.8 8.4 8.4" }]]];
  const f9 = ["svg", a, [["path", { d: "M14 4.1 12 6" }], ["path", { d: "m5.1 8-2.9-.8" }], ["path", { d: "m6 12-1.9 2" }], ["path", { d: "M7.2 2.2 8 5.1" }], ["path", { d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" }]]];
  const Z9 = ["svg", a, [["path", { d: "M12.586 12.586 19 19" }], ["path", { d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" }]]];
  const P9 = ["svg", a, [["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }], ["path", { d: "M12 6v4" }]]];
  const t2 = ["svg", a, [["path", { d: "M5 3v16h16" }], ["path", { d: "m5 19 6-6" }], ["path", { d: "m2 6 3-3 3 3" }], ["path", { d: "m18 16 3 3-3 3" }]]];
  const k9 = ["svg", a, [["polyline", { points: "5 11 5 5 11 5" }], ["polyline", { points: "19 13 19 19 13 19" }], ["line", { x1: "5", x2: "19", y1: "5", y2: "19" }]]];
  const z9 = ["svg", a, [["polyline", { points: "13 5 19 5 19 11" }], ["polyline", { points: "11 19 5 19 5 13" }], ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]]];
  const B9 = ["svg", a, [["path", { d: "M11 19H5V13" }], ["path", { d: "M19 5L5 19" }]]];
  const F9 = ["svg", a, [["path", { d: "M19 13V19H13" }], ["path", { d: "M5 5L19 19" }]]];
  const D9 = ["svg", a, [["path", { d: "M8 18L12 22L16 18" }], ["path", { d: "M12 2V22" }]]];
  const q9 = ["svg", a, [["polyline", { points: "18 8 22 12 18 16" }], ["polyline", { points: "6 8 2 12 6 16" }], ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }]]];
  const R9 = ["svg", a, [["path", { d: "M6 8L2 12L6 16" }], ["path", { d: "M2 12H22" }]]];
  const b9 = ["svg", a, [["path", { d: "M18 8L22 12L18 16" }], ["path", { d: "M2 12H22" }]]];
  const T9 = ["svg", a, [["path", { d: "M5 11V5H11" }], ["path", { d: "M5 5L19 19" }]]];
  const U9 = ["svg", a, [["path", { d: "M13 5H19V11" }], ["path", { d: "M19 5L5 19" }]]];
  const O9 = ["svg", a, [["path", { d: "M8 6L12 2L16 6" }], ["path", { d: "M12 2V22" }]]];
  const I9 = ["svg", a, [["polyline", { points: "8 18 12 22 16 18" }], ["polyline", { points: "8 6 12 2 16 6" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }]]];
  const E9 = ["svg", a, [["polyline", { points: "5 9 2 12 5 15" }], ["polyline", { points: "9 5 12 2 15 5" }], ["polyline", { points: "15 19 12 22 9 19" }], ["polyline", { points: "19 9 22 12 19 15" }], ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }]]];
  const G9 = ["svg", a, [["circle", { cx: "8", cy: "18", r: "4" }], ["path", { d: "M12 18V2l7 4" }]]];
  const W9 = ["svg", a, [["circle", { cx: "12", cy: "18", r: "4" }], ["path", { d: "M16 18V2" }]]];
  const X9 = ["svg", a, [["path", { d: "M9 18V5l12-2v13" }], ["path", { d: "m9 9 12-2" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["circle", { cx: "18", cy: "16", r: "3" }]]];
  const N9 = ["svg", a, [["path", { d: "M9 18V5l12-2v13" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["circle", { cx: "18", cy: "16", r: "3" }]]];
  const K9 = ["svg", a, [["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }], ["path", { d: "M14.53 8.88 12 2l-1.17 3.17" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const J9 = ["svg", a, [["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }]]];
  const j9 = ["svg", a, [["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }], ["path", { d: "M17.39 11.73 22 2l-9.73 4.61" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Q9 = ["svg", a, [["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }]]];
  const _9 = ["svg", a, [["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }], ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }], ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }], ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }], ["path", { d: "M12 12V8" }]]];
  const Y9 = ["svg", a, [["path", { d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" }], ["path", { d: "M18 14h-8" }], ["path", { d: "M15 18h-5" }], ["path", { d: "M10 6h8v4h-8V6Z" }]]];
  const $9 = ["svg", a, [["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36" }], ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }], ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }], ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20" }]]];
  const ar = ["svg", a, [["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }], ["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["path", { d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }]]];
  const tr = ["svg", a, [["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M15 2v20" }], ["path", { d: "M15 7h5" }], ["path", { d: "M15 12h5" }], ["path", { d: "M15 17h5" }]]];
  const hr = ["svg", a, [["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M9.5 8h5" }], ["path", { d: "M9.5 12H16" }], ["path", { d: "M9.5 16H14" }]]];
  const dr = ["svg", a, [["path", { d: "M2 6h4" }], ["path", { d: "M2 10h4" }], ["path", { d: "M2 14h4" }], ["path", { d: "M2 18h4" }], ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M16 2v20" }]]];
  const pr = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M12 2v4" }], ["path", { d: "M16 2v4" }], ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M20 12v2" }], ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1" }], ["path", { d: "M13 22h-2" }], ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2" }], ["path", { d: "M4 14v-2" }], ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2" }], ["path", { d: "M8 10h6" }], ["path", { d: "M8 14h8" }], ["path", { d: "M8 18h5" }]]];
  const cr = ["svg", a, [["path", { d: "M8 2v4" }], ["path", { d: "M12 2v4" }], ["path", { d: "M16 2v4" }], ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2" }], ["path", { d: "M8 10h6" }], ["path", { d: "M8 14h8" }], ["path", { d: "M8 18h5" }]]];
  const Mr = ["svg", a, [["path", { d: "M12 4V2" }], ["path", { d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939" }], ["path", { d: "M19 10v3.343" }], ["path", { d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const sr = ["svg", a, [["path", { d: "M12 4V2" }], ["path", { d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" }], ["path", { d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" }]]];
  const h2 = ["svg", a, [["path", { d: "M12 16h.01" }], ["path", { d: "M12 8v4" }], ["path", { d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" }]]];
  const d2 = ["svg", a, [["path", { d: "M10 15V9" }], ["path", { d: "M14 15V9" }], ["path", { d: "M2.586 16.872A2 2 0 0 1 2 15.458V8.542a2 2 0 0 1 .586-1.414l4.542-4.542A2 2 0 0 1 8.542 2h6.916a2 2 0 0 1 1.414.586l4.542 4.542A2 2 0 0 1 22 8.542v6.916a2 2 0 0 1-.586 1.414l-4.542 4.542a2 2 0 0 1-1.414.586H8.542a2 2 0 0 1-1.414-.586z" }]]];
  const p2 = ["svg", a, [["path", { d: "m15 9-6 6" }], ["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }], ["path", { d: "m9 9 6 6" }]]];
  const er = ["svg", a, [["path", { d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }]]];
  const rr = ["svg", a, [["path", { d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21" }]]];
  const vr = ["svg", a, [["path", { d: "M3 3h6l6 18h6" }], ["path", { d: "M14 3h7" }]]];
  const nr = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["circle", { cx: "19", cy: "5", r: "2" }], ["circle", { cx: "5", cy: "19", r: "2" }], ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416" }], ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416" }]]];
  const or = ["svg", a, [["path", { d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" }], ["path", { d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" }], ["path", { d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" }]]];
  const ir = ["svg", a, [["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" }], ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" }], ["path", { d: "M12 3v6" }]]];
  const lr = ["svg", a, [["path", { d: "m16 16 2 2 4-4" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]]];
  const gr = ["svg", a, [["path", { d: "M16 16h6" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]]];
  const xr = ["svg", a, [["path", { d: "M12 22v-9" }], ["path", { d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }], ["path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }], ["path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" }]]];
  const yr = ["svg", a, [["path", { d: "M16 16h6" }], ["path", { d: "M19 13v6" }], ["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]]];
  const mr = ["svg", a, [["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }], ["circle", { cx: "18.5", cy: "15.5", r: "2.5" }], ["path", { d: "M20.27 17.27 22 19" }]]];
  const Hr = ["svg", a, [["path", { d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" }], ["path", { d: "m7.5 4.27 9 5.15" }], ["polyline", { points: "3.29 7 12 12 20.71 7" }], ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }], ["path", { d: "m17 13 5 5m-5 0 5-5" }]]];
  const Vr = ["svg", a, [["path", { d: "m7.5 4.27 9 5.15" }], ["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }], ["path", { d: "m3.3 7 8.7 5 8.7-5" }], ["path", { d: "M12 22V12" }]]];
  const Cr = ["svg", a, [["path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }], ["path", { d: "m5 2 5 5" }], ["path", { d: "M2 13h15" }], ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" }]]];
  const wr = ["svg", a, [["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2" }], ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }], ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1" }]]];
  const c2 = ["svg", a, [["path", { d: "M10 2v2" }], ["path", { d: "M14 2v4" }], ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }], ["path", { d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" }]]];
  const ur = ["svg", a, [["path", { d: "m14.622 17.897-10.68-2.913" }], ["path", { d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" }], ["path", { d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" }]]];
  const Ar = ["svg", a, [["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }], ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor" }], ["path", { d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" }]]];
  const Lr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h18" }], ["path", { d: "m15 8-3 3-3-3" }]]];
  const M2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M14 15h1" }], ["path", { d: "M19 15h2" }], ["path", { d: "M3 15h2" }], ["path", { d: "M9 15h1" }]]];
  const Sr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h18" }], ["path", { d: "m9 10 3-3 3 3" }]]];
  const fr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h18" }]]];
  const s2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "m16 15-3-3 3-3" }]]];
  const e2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 14v1" }], ["path", { d: "M9 19v2" }], ["path", { d: "M9 3v2" }], ["path", { d: "M9 9v1" }]]];
  const r2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "m14 9 3 3-3 3" }]]];
  const v2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }]]];
  const Zr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 3v18" }], ["path", { d: "m8 9 3 3-3 3" }]]];
  const n2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 14v1" }], ["path", { d: "M15 19v2" }], ["path", { d: "M15 3v2" }], ["path", { d: "M15 9v1" }]]];
  const Pr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 3v18" }], ["path", { d: "m10 15-3-3 3-3" }]]];
  const kr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M15 3v18" }]]];
  const zr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "m9 16 3-3 3 3" }]]];
  const o2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M14 9h1" }], ["path", { d: "M19 9h2" }], ["path", { d: "M3 9h2" }], ["path", { d: "M9 9h1" }]]];
  const Br = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "m15 14-3 3-3-3" }]]];
  const Fr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }]]];
  const Dr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 3v18" }], ["path", { d: "M9 15h12" }]]];
  const qr = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 15h12" }], ["path", { d: "M15 3v18" }]]];
  const i2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "M9 21V9" }]]];
  const Rr = ["svg", a, [["path", { d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" }]]];
  const br = ["svg", a, [["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }], ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }]]];
  const Tr = ["svg", a, [["path", { d: "M9 9a3 3 0 1 1 6 0" }], ["path", { d: "M12 12v3" }], ["path", { d: "M11 15h2" }], ["path", { d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" }], ["path", { d: "M12 19v3" }]]];
  const Ur = ["svg", a, [["path", { d: "M5.8 11.3 2 22l10.7-3.79" }], ["path", { d: "M4 3h.01" }], ["path", { d: "M22 8h.01" }], ["path", { d: "M15 2h.01" }], ["path", { d: "M22 20h.01" }], ["path", { d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" }], ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }], ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }], ["path", { d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" }]]];
  const Or = ["svg", a, [["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" }], ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }]]];
  const Ir = ["svg", a, [["circle", { cx: "11", cy: "4", r: "2" }], ["circle", { cx: "18", cy: "8", r: "2" }], ["circle", { cx: "20", cy: "16", r: "2" }], ["path", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" }]]];
  const Er = ["svg", a, [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }], ["path", { d: "M15 14h.01" }], ["path", { d: "M9 6h6" }], ["path", { d: "M9 10h6" }]]];
  const l2 = ["svg", a, [["path", { d: "M12 20h9" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" }]]];
  const Gr = ["svg", a, [["path", { d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }], ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }], ["path", { d: "m2 2 20 20" }]]];
  const Wr = ["svg", a, [["path", { d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" }], ["path", { d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" }], ["path", { d: "m2.3 2.3 7.286 7.286" }], ["circle", { cx: "11", cy: "11", r: "2" }]]];
  const g2 = ["svg", a, [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }]]];
  const Xr = ["svg", a, [["path", { d: "M12 20h9" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" }], ["path", { d: "m15 5 3 3" }]]];
  const Nr = ["svg", a, [["path", { d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }], ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }], ["path", { d: "m15 5 4 4" }], ["path", { d: "m2 2 20 20" }]]];
  const Kr = ["svg", a, [["path", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }], ["path", { d: "m8 6 2-2" }], ["path", { d: "m18 16 2-2" }], ["path", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }], ["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { d: "m15 5 4 4" }]]];
  const Jr = ["svg", a, [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }], ["path", { d: "m15 5 4 4" }]]];
  const jr = ["svg", a, [["path", { d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" }]]];
  const Qr = ["svg", a, [["line", { x1: "19", x2: "5", y1: "5", y2: "19" }], ["circle", { cx: "6.5", cy: "6.5", r: "2.5" }], ["circle", { cx: "17.5", cy: "17.5", r: "2.5" }]]];
  const _r = ["svg", a, [["circle", { cx: "12", cy: "5", r: "1" }], ["path", { d: "m9 20 3-6 3 6" }], ["path", { d: "m6 8 6 2 6-2" }], ["path", { d: "M12 10v4" }]]];
  const Yr = ["svg", a, [["path", { d: "M20 11H4" }], ["path", { d: "M20 7H4" }], ["path", { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }]]];
  const $r = ["svg", a, [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }], ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94" }], ["path", { d: "M14.05 6A5 5 0 0 1 18 10" }]]];
  const av = ["svg", a, [["polyline", { points: "18 2 22 6 18 10" }], ["line", { x1: "14", x2: "22", y1: "6", y2: "6" }], ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const tv = ["svg", a, [["polyline", { points: "16 2 16 8 22 8" }], ["line", { x1: "22", x2: "16", y1: "2", y2: "8" }], ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const hv = ["svg", a, [["line", { x1: "22", x2: "16", y1: "2", y2: "8" }], ["line", { x1: "16", x2: "22", y1: "2", y2: "8" }], ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const dv = ["svg", a, [["path", { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" }], ["line", { x1: "22", x2: "2", y1: "2", y2: "22" }]]];
  const pv = ["svg", a, [["polyline", { points: "22 8 22 2 16 2" }], ["line", { x1: "16", x2: "22", y1: "8", y2: "2" }], ["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const cv = ["svg", a, [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }]]];
  const Mv = ["svg", a, [["line", { x1: "9", x2: "9", y1: "4", y2: "20" }], ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13" }], ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4" }]]];
  const sv = ["svg", a, [["path", { d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" }], ["path", { d: "M2 14h20" }], ["path", { d: "M6 14v4" }], ["path", { d: "M10 14v4" }], ["path", { d: "M14 14v4" }], ["path", { d: "M18 14v4" }]]];
  const ev = ["svg", a, [["path", { d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" }], ["path", { d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393" }], ["path", { d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" }], ["path", { d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319" }]]];
  const rv = ["svg", a, [["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }], ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2" }]]];
  const vv = ["svg", a, [["path", { d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3" }], ["rect", { width: "10", height: "7", x: "12", y: "13.5", ry: "2" }]]];
  const nv = ["svg", a, [["path", { d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" }], ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1" }], ["path", { d: "M16 11h.01" }]]];
  const ov = ["svg", a, [["path", { d: "M14 3v11" }], ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9" }], ["path", { d: "M18 3v11" }], ["path", { d: "M22 18H2l4-4" }], ["path", { d: "m6 22-4-4" }]]];
  const iv = ["svg", a, [["path", { d: "M10 3v11" }], ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8" }], ["path", { d: "M14 3v11" }], ["path", { d: "m18 14 4 4H2" }], ["path", { d: "m22 18-4 4" }]]];
  const lv = ["svg", a, [["path", { d: "M13 4v16" }], ["path", { d: "M17 4v16" }], ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }]]];
  const gv = ["svg", a, [["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }], ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }], ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1" }]]];
  const xv = ["svg", a, [["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }], ["path", { d: "m8.5 8.5 7 7" }]]];
  const yv = ["svg", a, [["path", { d: "M12 17v5" }], ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }]]];
  const mv = ["svg", a, [["path", { d: "M12 17v5" }], ["path", { d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" }]]];
  const Hv = ["svg", a, [["path", { d: "m2 22 1-1h3l9-9" }], ["path", { d: "M3 21v-3l9-9" }], ["path", { d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" }]]];
  const Vv = ["svg", a, [["path", { d: "M15 11h.01" }], ["path", { d: "M11 15h.01" }], ["path", { d: "M16 16h.01" }], ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16" }], ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" }]]];
  const Cv = ["svg", a, [["path", { d: "M2 22h20" }], ["path", { d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" }]]];
  const wv = ["svg", a, [["path", { d: "M2 22h20" }], ["path", { d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" }]]];
  const uv = ["svg", a, [["path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }]]];
  const Av = ["svg", a, [["polygon", { points: "6 3 20 12 6 21 6 3" }]]];
  const Lv = ["svg", a, [["path", { d: "M9 2v6" }], ["path", { d: "M15 2v6" }], ["path", { d: "M12 17v5" }], ["path", { d: "M5 8h14" }], ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z" }]]];
  const x2 = ["svg", a, [["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }], ["path", { d: "m2 22 3-3" }], ["path", { d: "M7.5 13.5 10 11" }], ["path", { d: "M10.5 16.5 13 14" }], ["path", { d: "m18 3-4 4h6l-4 4" }]]];
  const Sv = ["svg", a, [["path", { d: "M12 22v-5" }], ["path", { d: "M9 8V2" }], ["path", { d: "M15 8V2" }], ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }]]];
  const fv = ["svg", a, [["path", { d: "M5 12h14" }], ["path", { d: "M12 5v14" }]]];
  const Zv = ["svg", a, [["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }], ["path", { d: "M18 6h.01" }], ["path", { d: "M6 18h.01" }], ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }], ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" }]]];
  const Pv = ["svg", a, [["path", { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }], ["polyline", { points: "8 10 12 14 16 10" }]]];
  const kv = ["svg", a, [["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0" }], ["path", { d: "M8 14a5 5 0 1 1 8 0" }], ["circle", { cx: "12", cy: "11", r: "1" }], ["path", { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" }]]];
  const zv = ["svg", a, [["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957" }], ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295" }], ["path", { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" }], ["path", { d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" }], ["path", { d: "M6 6v8" }], ["path", { d: "m2 2 20 20" }]]];
  const Bv = ["svg", a, [["path", { d: "M22 14a8 8 0 0 1-8 8" }], ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }], ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }], ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }], ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }]]];
  const Fv = ["svg", a, [["path", { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }], ["path", { d: "M10 22 9 8" }], ["path", { d: "m14 22 1-14" }], ["path", { d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" }]]];
  const Dv = ["svg", a, [["path", { d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" }], ["path", { d: "m22 22-5.5-5.5" }]]];
  const qv = ["svg", a, [["path", { d: "M18 7c0-5.333-8-5.333-8 0" }], ["path", { d: "M10 7v14" }], ["path", { d: "M6 21h12" }], ["path", { d: "M6 13h10" }]]];
  const Rv = ["svg", a, [["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }], ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }], ["path", { d: "M12 2v4" }], ["path", { d: "m2 2 20 20" }]]];
  const bv = ["svg", a, [["path", { d: "M12 2v10" }], ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04" }]]];
  const Tv = ["svg", a, [["path", { d: "M2 3h20" }], ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }], ["path", { d: "m7 21 5-5 5 5" }]]];
  const Uv = ["svg", a, [["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }], ["path", { d: "m16 19 2 2 4-4" }], ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }], ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]]];
  const Ov = ["svg", a, [["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }], ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }], ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1" }]]];
  const Iv = ["svg", a, [["path", { d: "M5 7 3 5" }], ["path", { d: "M9 6V3" }], ["path", { d: "m13 7 2-2" }], ["circle", { cx: "9", cy: "13", r: "3" }], ["path", { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }], ["path", { d: "M16 16h2" }]]];
  const Ev = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M12 9v11" }], ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9" }]]];
  const Gv = ["svg", a, [["path", { d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" }]]];
  const Wv = ["svg", a, [["path", { d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" }], ["path", { d: "M12 2v20" }]]];
  const Xv = ["svg", a, [["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }], ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }], ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }], ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }], ["path", { d: "M21 21v.01" }], ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }], ["path", { d: "M3 12h.01" }], ["path", { d: "M12 3h.01" }], ["path", { d: "M12 16v.01" }], ["path", { d: "M16 12h1" }], ["path", { d: "M21 12v.01" }], ["path", { d: "M12 21v-1" }]]];
  const Nv = ["svg", a, [["path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }], ["path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }]]];
  const Kv = ["svg", a, [["path", { d: "M13 16a3 3 0 0 1 2.24 5" }], ["path", { d: "M18 12h.01" }], ["path", { d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" }], ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3" }], ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3" }]]];
  const Jv = ["svg", a, [["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }], ["path", { d: "M4 6h.01" }], ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }], ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }], ["path", { d: "M12 18h.01" }], ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "m13.41 10.59 5.66-5.66" }]]];
  const jv = ["svg", a, [["path", { d: "M12 12h.01" }], ["path", { d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z" }], ["path", { d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z" }], ["path", { d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z" }]]];
  const Qv = ["svg", a, [["path", { d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" }]]];
  const _v = ["svg", a, [["path", { d: "M5 16v2" }], ["path", { d: "M19 16v2" }], ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2" }], ["path", { d: "M18 12h.01" }]]];
  const Yv = ["svg", a, [["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }], ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }], ["circle", { cx: "12", cy: "9", r: "2" }], ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }], ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }], ["path", { d: "M9.5 18h5" }], ["path", { d: "m8 22 4-11 4 11" }]]];
  const $v = ["svg", a, [["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }], ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }], ["circle", { cx: "12", cy: "12", r: "2" }], ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }], ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19" }]]];
  const an = ["svg", a, [["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }], ["circle", { cx: "19", cy: "19", r: "2" }], ["path", { d: "m13.41 13.41 4.18 4.18" }], ["circle", { cx: "12", cy: "12", r: "2" }]]];
  const tn = ["svg", a, [["path", { d: "M5 15h14" }], ["path", { d: "M5 9h14" }], ["path", { d: "m14 20-5-5 6-6-5-5" }]]];
  const hn = ["svg", a, [["path", { d: "M22 17a10 10 0 0 0-20 0" }], ["path", { d: "M6 17a6 6 0 0 1 12 0" }], ["path", { d: "M10 17a2 2 0 0 1 4 0" }]]];
  const dn = ["svg", a, [["path", { d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4" }], ["path", { d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3" }], ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5" }], ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12" }], ["path", { d: "M16 9h.01" }]]];
  const pn = ["svg", a, [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }], ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]];
  const cn = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M12 6.5v11" }], ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]]];
  const Mn = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M8 12h5" }], ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2" }]]];
  const sn = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M8 7h8" }], ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8" }], ["path", { d: "M8 11h8" }]]];
  const en = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "m12 10 3-3" }], ["path", { d: "m9 7 3 3v7.5" }], ["path", { d: "M9 11h6" }], ["path", { d: "M9 15h6" }]]];
  const rn = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M8 13h5" }], ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0" }], ["path", { d: "M8 17h7" }]]];
  const vn = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M8 15h5" }], ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10" }]]];
  const nn = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M10 17V7h5" }], ["path", { d: "M10 11h4" }], ["path", { d: "M8 15h5" }]]];
  const on = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M14 8H8" }], ["path", { d: "M16 12H8" }], ["path", { d: "M13 16H8" }]]];
  const ln = ["svg", a, [["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }], ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }], ["path", { d: "M12 17.5v-11" }]]];
  const y2 = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M17 12h.01" }], ["path", { d: "M7 12h.01" }]]];
  const gn = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]];
  const xn = ["svg", a, [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }]]];
  const yn = ["svg", a, [["path", { d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }], ["path", { d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }], ["path", { d: "m14 16-3 3 3 3" }], ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598" }], ["path", { d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" }], ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096" }]]];
  const mn = ["svg", a, [["path", { d: "m15 14 5-5-5-5" }], ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }]]];
  const Hn = ["svg", a, [["circle", { cx: "12", cy: "17", r: "1" }], ["path", { d: "M21 7v6h-6" }], ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]]];
  const Vn = ["svg", a, [["path", { d: "M21 7v6h-6" }], ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]]];
  const Cn = ["svg", a, [["path", { d: "M3 2v6h6" }], ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8" }], ["path", { d: "M21 22v-6h-6" }], ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7" }], ["circle", { cx: "12", cy: "12", r: "1" }]]];
  const wn = ["svg", a, [["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { d: "M3 3v5h5" }], ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }], ["path", { d: "M16 16h5v5" }]]];
  const un = ["svg", a, [["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }], ["path", { d: "M8 16H3v5" }], ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64" }], ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }], ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87" }], ["path", { d: "M21 3v5h-5" }], ["path", { d: "M22 22 2 2" }]]];
  const An = ["svg", a, [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }], ["path", { d: "M21 3v5h-5" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }], ["path", { d: "M8 16H3v5" }]]];
  const Ln = ["svg", a, [["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }], ["path", { d: "M5 10h14" }], ["path", { d: "M15 7v6" }]]];
  const Sn = ["svg", a, [["path", { d: "M17 3v10" }], ["path", { d: "m12.67 5.5 8.66 5" }], ["path", { d: "m12.67 10.5 8.66-5" }], ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }]]];
  const fn = ["svg", a, [["path", { d: "M4 7V4h16v3" }], ["path", { d: "M5 20h6" }], ["path", { d: "M13 4 8 20" }], ["path", { d: "m15 15 5 5" }], ["path", { d: "m20 15-5 5" }]]];
  const Zn = ["svg", a, [["path", { d: "m17 2 4 4-4 4" }], ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }], ["path", { d: "m7 22-4-4 4-4" }], ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }], ["path", { d: "M11 10h1v4" }]]];
  const Pn = ["svg", a, [["path", { d: "m2 9 3-3 3 3" }], ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }], ["path", { d: "m22 15-3 3-3-3" }], ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10" }]]];
  const kn = ["svg", a, [["path", { d: "m17 2 4 4-4 4" }], ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }], ["path", { d: "m7 22-4-4 4-4" }], ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }]]];
  const zn = ["svg", a, [["path", { d: "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }], ["path", { d: "M14 4a2 2 0 0 1 2-2" }], ["path", { d: "M16 10a2 2 0 0 1-2-2" }], ["path", { d: "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }], ["path", { d: "M20 2a2 2 0 0 1 2 2" }], ["path", { d: "M22 8a2 2 0 0 1-2 2" }], ["path", { d: "m3 7 3 3 3-3" }], ["path", { d: "M6 10V5a 3 3 0 0 1 3-3h1" }], ["rect", { x: "2", y: "14", width: "8", height: "8", rx: "2" }]]];
  const Bn = ["svg", a, [["path", { d: "M14 4a2 2 0 0 1 2-2" }], ["path", { d: "M16 10a2 2 0 0 1-2-2" }], ["path", { d: "M20 2a2 2 0 0 1 2 2" }], ["path", { d: "M22 8a2 2 0 0 1-2 2" }], ["path", { d: "m3 7 3 3 3-3" }], ["path", { d: "M6 10V5a3 3 0 0 1 3-3h1" }], ["rect", { x: "2", y: "14", width: "8", height: "8", rx: "2" }]]];
  const Fn = ["svg", a, [["polyline", { points: "7 17 2 12 7 7" }], ["polyline", { points: "12 17 7 12 12 7" }], ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7" }]]];
  const Dn = ["svg", a, [["polyline", { points: "9 17 4 12 9 7" }], ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }]]];
  const qn = ["svg", a, [["polygon", { points: "11 19 2 12 11 5 11 19" }], ["polygon", { points: "22 19 13 12 22 5 22 19" }]]];
  const Rn = ["svg", a, [["path", { d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" }], ["path", { d: "m12 18 2.57-3.5" }], ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009" }], ["path", { d: "M9.35 14.53 12 11.22" }], ["path", { d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" }]]];
  const bn = ["svg", a, [["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }], ["path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }], ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }], ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]]];
  const Tn = ["svg", a, [["polyline", { points: "3.5 2 6.5 12.5 18 12.5" }], ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20" }], ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20" }], ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0" }]]];
  const Un = ["svg", a, [["path", { d: "M6 19V5" }], ["path", { d: "M10 19V6.8" }], ["path", { d: "M14 19v-7.8" }], ["path", { d: "M18 5v4" }], ["path", { d: "M18 19v-6" }], ["path", { d: "M22 19V9" }], ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }]]];
  const m2 = ["svg", a, [["path", { d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" }], ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814" }], ["path", { d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" }]]];
  const On = ["svg", a, [["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6" }], ["path", { d: "m15 2-3 3 3 3" }], ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }]]];
  const In = ["svg", a, [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { d: "M3 3v5h5" }]]];
  const En = ["svg", a, [["path", { d: "M12 5H6a2 2 0 0 0-2 2v3" }], ["path", { d: "m9 8 3-3-3-3" }], ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }]]];
  const Gn = ["svg", a, [["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }], ["path", { d: "M21 3v5h-5" }]]];
  const Wn = ["svg", a, [["circle", { cx: "6", cy: "19", r: "3" }], ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }], ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }], ["path", { d: "M15 5h-4.3" }], ["circle", { cx: "18", cy: "5", r: "3" }]]];
  const Xn = ["svg", a, [["circle", { cx: "6", cy: "19", r: "3" }], ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }], ["circle", { cx: "18", cy: "5", r: "3" }]]];
  const Nn = ["svg", a, [["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }], ["path", { d: "M6.01 18H6" }], ["path", { d: "M10.01 18H10" }], ["path", { d: "M15 10v4" }], ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }], ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" }]]];
  const H2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 12h18" }]]];
  const V2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M21 9H3" }], ["path", { d: "M21 15H3" }]]];
  const Kn = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M21 7.5H3" }], ["path", { d: "M21 12H3" }], ["path", { d: "M21 16.5H3" }]]];
  const Jn = ["svg", a, [["path", { d: "M4 11a9 9 0 0 1 9 9" }], ["path", { d: "M4 4a16 16 0 0 1 16 16" }], ["circle", { cx: "5", cy: "19", r: "1" }]]];
  const jn = ["svg", a, [["path", { d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" }], ["path", { d: "m14.5 12.5 2-2" }], ["path", { d: "m11.5 9.5 2-2" }], ["path", { d: "m8.5 6.5 2-2" }], ["path", { d: "m17.5 15.5 2-2" }]]];
  const Qn = ["svg", a, [["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18" }], ["path", { d: "M6 15h8" }]]];
  const _n = ["svg", a, [["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" }], ["path", { d: "M21 14 10 2 3 14h18Z" }], ["path", { d: "M10 2v16" }]]];
  const Yn = ["svg", a, [["path", { d: "M7 21h10" }], ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }], ["path", { d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }], ["path", { d: "m13 12 4-4" }], ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]]];
  const $n = ["svg", a, [["path", { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" }], ["path", { d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" }], ["path", { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" }], ["path", { d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" }]]];
  const ao = ["svg", a, [["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z" }], ["path", { d: "m9 15 3-3" }], ["path", { d: "M17 13a6 6 0 0 0-6-6" }], ["path", { d: "M21 13A10 10 0 0 0 11 3" }]]];
  const to = ["svg", a, [["path", { d: "M13 7 9 3 5 7l4 4" }], ["path", { d: "m17 11 4 4-4 4-4-4" }], ["path", { d: "m8 12 4 4 6-6-4-4Z" }], ["path", { d: "m16 8 3-3" }], ["path", { d: "M9 21a6 6 0 0 0-6-6" }]]];
  const ho = ["svg", a, [["path", { d: "M10 2v3a1 1 0 0 0 1 1h5" }], ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }], ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }], ["path", { d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" }]]];
  const po = ["svg", a, [["path", { d: "M13 13H8a1 1 0 0 0-1 1v7" }], ["path", { d: "M14 8h1" }], ["path", { d: "M17 21v-4" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }], ["path", { d: "M29.5 11.5s5 5 4 5" }], ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }]]];
  const co = ["svg", a, [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]]];
  const C2 = ["svg", a, [["circle", { cx: "19", cy: "19", r: "2" }], ["circle", { cx: "5", cy: "5", r: "2" }], ["path", { d: "M5 7v12h12" }], ["path", { d: "m5 19 6-6" }]]];
  const Mo = ["svg", a, [["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }], ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }], ["path", { d: "M7 21h10" }], ["path", { d: "M12 3v18" }], ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }]]];
  const so = ["svg", a, [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }], ["path", { d: "M14 15H9v-5" }], ["path", { d: "M16 3h5v5" }], ["path", { d: "M21 3 9 15" }]]];
  const eo = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M8 7v10" }], ["path", { d: "M12 7v10" }], ["path", { d: "M17 7v10" }]]];
  const ro = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["circle", { cx: "12", cy: "12", r: "1" }], ["path", { d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }]]];
  const vo = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }], ["path", { d: "M9 9h.01" }], ["path", { d: "M15 9h.01" }]]];
  const no = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M7 12h10" }]]];
  const oo = ["svg", a, [["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M17 8V7" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M7 17h.01" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1" }]]];
  const io = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "m16 16-1.9-1.9" }]]];
  const lo = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M7 8h8" }], ["path", { d: "M7 12h10" }], ["path", { d: "M7 16h6" }]]];
  const go = ["svg", a, [["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }], ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }], ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }], ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]]];
  const xo = ["svg", a, [["path", { d: "M14 22v-4a2 2 0 1 0-4 0v4" }], ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" }], ["path", { d: "M18 5v17" }], ["path", { d: "m4 6 8-4 8 4" }], ["path", { d: "M6 5v17" }], ["circle", { cx: "12", cy: "9", r: "2" }]]];
  const yo = ["svg", a, [["path", { d: "M5.42 9.42 8 12" }], ["circle", { cx: "4", cy: "8", r: "2" }], ["path", { d: "m14 6-8.58 8.58" }], ["circle", { cx: "4", cy: "16", r: "2" }], ["path", { d: "M10.8 14.8 14 18" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }]]];
  const mo = ["svg", a, [["circle", { cx: "6", cy: "6", r: "3" }], ["path", { d: "M8.12 8.12 12 12" }], ["path", { d: "M20 4 8.12 15.88" }], ["circle", { cx: "6", cy: "18", r: "3" }], ["path", { d: "M14.8 14.8 20 20" }]]];
  const Ho = ["svg", a, [["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }], ["path", { d: "M8 21h8" }], ["path", { d: "M12 17v4" }], ["path", { d: "m22 3-5 5" }], ["path", { d: "m17 3 5 5" }]]];
  const Vo = ["svg", a, [["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }], ["path", { d: "M8 21h8" }], ["path", { d: "M12 17v4" }], ["path", { d: "m17 8 5-5" }], ["path", { d: "M17 3h5v5" }]]];
  const Co = ["svg", a, [["path", { d: "M15 12h-5" }], ["path", { d: "M15 8h-5" }], ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }]]];
  const wo = ["svg", a, [["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }]]];
  const uo = ["svg", a, [["path", { d: "m8 11 2 2 4-4" }], ["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]]];
  const Ao = ["svg", a, [["path", { d: "m13 13.5 2-2.5-2-2.5" }], ["path", { d: "m21 21-4.3-4.3" }], ["path", { d: "M9 8.5 7 11l2 2.5" }], ["circle", { cx: "11", cy: "11", r: "8" }]]];
  const Lo = ["svg", a, [["path", { d: "m13.5 8.5-5 5" }], ["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]]];
  const So = ["svg", a, [["path", { d: "m13.5 8.5-5 5" }], ["path", { d: "m8.5 8.5 5 5" }], ["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]]];
  const fo = ["svg", a, [["circle", { cx: "11", cy: "11", r: "8" }], ["path", { d: "m21 21-4.3-4.3" }]]];
  const Zo = ["svg", a, [["path", { d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }], ["path", { d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" }]]];
  const w2 = ["svg", a, [["path", { d: "m3 3 3 9-3 9 19-9Z" }], ["path", { d: "M6 12h16" }]]];
  const Po = ["svg", a, [["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }], ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }], ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }], ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1" }]]];
  const ko = ["svg", a, [["path", { d: "m22 2-7 20-4-9-9-4Z" }], ["path", { d: "M22 2 11 13" }]]];
  const zo = ["svg", a, [["line", { x1: "3", x2: "21", y1: "12", y2: "12" }], ["polyline", { points: "8 8 12 4 16 8" }], ["polyline", { points: "16 16 12 20 8 16" }]]];
  const Bo = ["svg", a, [["line", { x1: "12", x2: "12", y1: "3", y2: "21" }], ["polyline", { points: "8 8 4 12 8 16" }], ["polyline", { points: "16 16 20 12 16 8" }]]];
  const Fo = ["svg", a, [["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }], ["path", { d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }], ["path", { d: "M6 6h.01" }], ["path", { d: "M6 18h.01" }], ["path", { d: "m15.7 13.4-.9-.3" }], ["path", { d: "m9.2 10.9-.9-.3" }], ["path", { d: "m10.6 15.7.3-.9" }], ["path", { d: "m13.6 15.7-.4-1" }], ["path", { d: "m10.8 9.3-.4-1" }], ["path", { d: "m8.3 13.6 1-.4" }], ["path", { d: "m14.7 10.8 1-.4" }], ["path", { d: "m13.4 8.3-.3.9" }]]];
  const Do = ["svg", a, [["path", { d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" }], ["path", { d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" }], ["path", { d: "M6 6h.01" }], ["path", { d: "M6 18h.01" }], ["path", { d: "m13 6-4 6h6l-4 6" }]]];
  const qo = ["svg", a, [["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }], ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }], ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1" }], ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }], ["path", { d: "M6 18h.01" }], ["path", { d: "m2 2 20 20" }]]];
  const Ro = ["svg", a, [["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }], ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }], ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }]]];
  const bo = ["svg", a, [["path", { d: "M20 7h-9" }], ["path", { d: "M14 17H5" }], ["circle", { cx: "17", cy: "17", r: "3" }], ["circle", { cx: "7", cy: "7", r: "3" }]]];
  const To = ["svg", a, [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" }], ["circle", { cx: "12", cy: "12", r: "3" }]]];
  const Uo = ["svg", a, [["path", { d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" }], ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }], ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]]];
  const Oo = ["svg", a, [["circle", { cx: "18", cy: "5", r: "3" }], ["circle", { cx: "6", cy: "12", r: "3" }], ["circle", { cx: "18", cy: "19", r: "3" }], ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }], ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]]];
  const Io = ["svg", a, [["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }], ["polyline", { points: "16 6 12 2 8 6" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "15" }]]];
  const Eo = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }], ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }], ["line", { x1: "9", x2: "9", y1: "9", y2: "21" }], ["line", { x1: "15", x2: "15", y1: "9", y2: "21" }]]];
  const Go = ["svg", a, [["path", { d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" }]]];
  const Wo = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M12 8v4" }], ["path", { d: "M12 16h.01" }]]];
  const Xo = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "m4.243 5.21 14.39 12.472" }]]];
  const No = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const Ko = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M8 12h.01" }], ["path", { d: "M12 12h.01" }], ["path", { d: "M16 12h.01" }]]];
  const Jo = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M12 22V2" }]]];
  const jo = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M9 12h6" }]]];
  const Qo = ["svg", a, [["path", { d: "m2 2 20 20" }], ["path", { d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" }], ["path", { d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" }]]];
  const _o = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M9 12h6" }], ["path", { d: "M12 9v6" }]]];
  const Yo = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }], ["path", { d: "M12 17h.01" }]]];
  const u2 = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { d: "m14.5 9.5-5 5" }], ["path", { d: "m9.5 9.5 5 5" }]]];
  const $o = ["svg", a, [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }]]];
  const ai = ["svg", a, [["circle", { cx: "12", cy: "12", r: "8" }], ["path", { d: "M12 2v7.5" }], ["path", { d: "m19 5-5.23 5.23" }], ["path", { d: "M22 12h-7.5" }], ["path", { d: "m19 19-5.23-5.23" }], ["path", { d: "M12 14.5V22" }], ["path", { d: "M10.23 13.77 5 19" }], ["path", { d: "M9.5 12H2" }], ["path", { d: "M10.23 10.23 5 5" }], ["circle", { cx: "12", cy: "12", r: "2.5" }]]];
  const ti = ["svg", a, [["path", { d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" }], ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }], ["path", { d: "M12 10v4" }], ["path", { d: "M12 2v3" }]]];
  const hi = ["svg", a, [["path", { d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }]]];
  const di = ["svg", a, [["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }], ["path", { d: "M3 6h18" }], ["path", { d: "M16 10a4 4 0 0 1-8 0" }]]];
  const pi = ["svg", a, [["path", { d: "m15 11-1 9" }], ["path", { d: "m19 11-4-7" }], ["path", { d: "M2 11h20" }], ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }], ["path", { d: "M4.5 15.5h15" }], ["path", { d: "m5 11 4-7" }], ["path", { d: "m9 11 1 9" }]]];
  const ci = ["svg", a, [["circle", { cx: "8", cy: "21", r: "1" }], ["circle", { cx: "19", cy: "21", r: "1" }], ["path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }]]];
  const Mi = ["svg", a, [["path", { d: "M2 22v-5l5-5 5 5-5 5z" }], ["path", { d: "M9.5 14.5 16 8" }], ["path", { d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" }]]];
  const si = ["svg", a, [["path", { d: "m4 4 2.5 2.5" }], ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }], ["path", { d: "M15 5 5 15" }], ["path", { d: "M14 17v.01" }], ["path", { d: "M10 16v.01" }], ["path", { d: "M13 13v.01" }], ["path", { d: "M16 10v.01" }], ["path", { d: "M11 20v.01" }], ["path", { d: "M17 14v.01" }], ["path", { d: "M20 11v.01" }]]];
  const ei = ["svg", a, [["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }], ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }], ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }], ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" }]]];
  const ri = ["svg", a, [["path", { d: "M12 22v-7l-2-2" }], ["path", { d: "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z" }], ["path", { d: "m14 14-2 2" }]]];
  const vi = ["svg", a, [["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" }], ["path", { d: "m18 2 4 4-4 4" }], ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2" }], ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" }], ["path", { d: "m18 14 4 4-4 4" }]]];
  const ni = ["svg", a, [["path", { d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" }]]];
  const oi = ["svg", a, [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }], ["path", { d: "M12 20v-8" }], ["path", { d: "M17 20V8" }]]];
  const ii = ["svg", a, [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }]]];
  const li = ["svg", a, [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }], ["path", { d: "M12 20v-8" }]]];
  const gi = ["svg", a, [["path", { d: "M2 20h.01" }]]];
  const xi = ["svg", a, [["path", { d: "M2 20h.01" }], ["path", { d: "M7 20v-4" }], ["path", { d: "M12 20v-8" }], ["path", { d: "M17 20V8" }], ["path", { d: "M22 4v16" }]]];
  const yi = ["svg", a, [["path", { d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" }], ["path", { d: "M3 21h18" }]]];
  const mi = ["svg", a, [["path", { d: "M10 9H4L2 7l2-2h6" }], ["path", { d: "M14 5h6l2 2-2 2h-6" }], ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }], ["path", { d: "M8 22h8" }]]];
  const Hi = ["svg", a, [["path", { d: "M12 13v8" }], ["path", { d: "M12 3v3" }], ["path", { d: "M18 6a2 2 0 0 1 1.414.586l2.293 2.207a1 1 0 0 1 0 1.414l-2.27 2.184a2 2 0 0 1-1.742.586L6 13a2 2 0 0 1-1.414-.586l-2.293-2.207a1 1 0 0 1 0-1.414l2.293-2.207A2 2 0 0 1 6 6z" }]]];
  const Vi = ["svg", a, [["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6" }], ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }], ["path", { d: "M21 12h1" }], ["path", { d: "M18.5 4.5 18 5" }], ["path", { d: "M2 12h1" }], ["path", { d: "M12 2v1" }], ["path", { d: "m4.929 4.929.707.707" }], ["path", { d: "M12 12v6" }]]];
  const Ci = ["svg", a, [["polygon", { points: "19 20 9 12 19 4 19 20" }], ["line", { x1: "5", x2: "5", y1: "19", y2: "5" }]]];
  const wi = ["svg", a, [["polygon", { points: "5 4 15 12 5 20 5 4" }], ["line", { x1: "19", x2: "19", y1: "5", y2: "19" }]]];
  const ui = ["svg", a, [["path", { d: "m12.5 17-.5-1-.5 1h1z" }], ["path", { d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" }], ["circle", { cx: "15", cy: "12", r: "1" }], ["circle", { cx: "9", cy: "12", r: "1" }]]];
  const Ai = ["svg", a, [["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5" }], ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }], ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5" }], ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }], ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5" }], ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }], ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5" }], ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" }]]];
  const Li = ["svg", a, [["path", { d: "M22 2 2 22" }]]];
  const Si = ["svg", a, [["path", { d: "m8 14-6 6h9v-3" }], ["path", { d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" }]]];
  const fi = ["svg", a, [["line", { x1: "21", x2: "14", y1: "4", y2: "4" }], ["line", { x1: "10", x2: "3", y1: "4", y2: "4" }], ["line", { x1: "21", x2: "12", y1: "12", y2: "12" }], ["line", { x1: "8", x2: "3", y1: "12", y2: "12" }], ["line", { x1: "21", x2: "16", y1: "20", y2: "20" }], ["line", { x1: "12", x2: "3", y1: "20", y2: "20" }], ["line", { x1: "14", x2: "14", y1: "2", y2: "6" }], ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }], ["line", { x1: "16", x2: "16", y1: "18", y2: "22" }]]];
  const A2 = ["svg", a, [["line", { x1: "4", x2: "4", y1: "21", y2: "14" }], ["line", { x1: "4", x2: "4", y1: "10", y2: "3" }], ["line", { x1: "12", x2: "12", y1: "21", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "3" }], ["line", { x1: "20", x2: "20", y1: "21", y2: "16" }], ["line", { x1: "20", x2: "20", y1: "12", y2: "3" }], ["line", { x1: "2", x2: "6", y1: "14", y2: "14" }], ["line", { x1: "10", x2: "14", y1: "8", y2: "8" }], ["line", { x1: "18", x2: "22", y1: "16", y2: "16" }]]];
  const Zi = ["svg", a, [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }], ["path", { d: "M12.667 8 10 12h4l-2.667 4" }]]];
  const Pi = ["svg", a, [["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1" }], ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }], ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }], ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }]]];
  const ki = ["svg", a, [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }], ["path", { d: "M12 18h.01" }]]];
  const zi = ["svg", a, [["path", { d: "M22 11v1a10 10 0 1 1-9-10" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }], ["path", { d: "M16 5h6" }], ["path", { d: "M19 2v6" }]]];
  const Bi = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }], ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }], ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]]];
  const Fi = ["svg", a, [["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }], ["circle", { cx: "10", cy: "13", r: "8" }], ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }], ["path", { d: "M18 3 19.1 5.2" }], ["path", { d: "M22 3 20.9 5.2" }]]];
  const Di = ["svg", a, [["line", { x1: "2", x2: "22", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }], ["path", { d: "m20 16-4-4 4-4" }], ["path", { d: "m4 8 4 4-4 4" }], ["path", { d: "m16 4-4 4-4-4" }], ["path", { d: "m8 20 4-4 4 4" }]]];
  const qi = ["svg", a, [["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }], ["path", { d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }], ["path", { d: "M4 18v2" }], ["path", { d: "M20 18v2" }], ["path", { d: "M12 4v9" }]]];
  const Ri = ["svg", a, [["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }], ["path", { d: "M7 21h10" }], ["path", { d: "M19.5 12 22 6" }], ["path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }], ["path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }], ["path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }]]];
  const bi = ["svg", a, [["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]];
  const Ti = ["svg", a, [["path", { d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" }], ["path", { d: "M12 18v4" }]]];
  const Ui = ["svg", a, [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }]]];
  const L2 = ["svg", a, [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" }], ["path", { d: "M20 3v4" }], ["path", { d: "M22 5h-4" }], ["path", { d: "M4 17v2" }], ["path", { d: "M5 18H3" }]]];
  const Oi = ["svg", a, [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }], ["path", { d: "M12 6h.01" }], ["circle", { cx: "12", cy: "14", r: "4" }], ["path", { d: "M12 14h.01" }]]];
  const Ii = ["svg", a, [["path", { d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" }], ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }], ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975" }]]];
  const Ei = ["svg", a, [["path", { d: "m6 16 6-12 6 12" }], ["path", { d: "M8 12h8" }], ["path", { d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" }]]];
  const Gi = ["svg", a, [["path", { d: "m6 16 6-12 6 12" }], ["path", { d: "M8 12h8" }], ["path", { d: "m16 20 2 2 4-4" }]]];
  const Wi = ["svg", a, [["circle", { cx: "19", cy: "5", r: "2" }], ["circle", { cx: "5", cy: "19", r: "2" }], ["path", { d: "M5 17A12 12 0 0 1 17 5" }]]];
  const Xi = ["svg", a, [["path", { d: "M16 3h5v5" }], ["path", { d: "M8 3H3v5" }], ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }], ["path", { d: "m15 9 6-6" }]]];
  const Ni = ["svg", a, [["path", { d: "M3 3h.01" }], ["path", { d: "M7 5h.01" }], ["path", { d: "M11 7h.01" }], ["path", { d: "M3 7h.01" }], ["path", { d: "M7 9h.01" }], ["path", { d: "M3 11h.01" }], ["rect", { width: "4", height: "4", x: "15", y: "5" }], ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }], ["path", { d: "m13 14 8-2" }], ["path", { d: "m13 19 8-2" }]]];
  const Ki = ["svg", a, [["path", { d: "M7 20h10" }], ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10" }], ["path", { d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" }], ["path", { d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" }]]];
  const S2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7" }]]];
  const f2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m16 8-8 8" }], ["path", { d: "M16 16H8V8" }]]];
  const Z2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m8 8 8 8" }], ["path", { d: "M16 8v8H8" }]]];
  const P2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 8v8" }], ["path", { d: "m8 12 4 4 4-4" }]]];
  const k2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m12 8-4 4 4 4" }], ["path", { d: "M16 12H8" }]]];
  const z2 = ["svg", a, [["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }], ["path", { d: "m3 21 9-9" }], ["path", { d: "M9 21H3v-6" }]]];
  const B2 = ["svg", a, [["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }], ["path", { d: "m21 21-9-9" }], ["path", { d: "M21 15v6h-6" }]]];
  const F2 = ["svg", a, [["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }], ["path", { d: "m3 3 9 9" }], ["path", { d: "M3 9V3h6" }]]];
  const D2 = ["svg", a, [["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }], ["path", { d: "m21 3-9 9" }], ["path", { d: "M15 3h6v6" }]]];
  const q2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 12h8" }], ["path", { d: "m12 16 4-4-4-4" }]]];
  const R2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 16V8h8" }], ["path", { d: "M16 16 8 8" }]]];
  const b2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 8h8v8" }], ["path", { d: "m8 16 8-8" }]]];
  const T2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m16 12-4-4-4 4" }], ["path", { d: "M12 16V8" }]]];
  const U2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 8v8" }], ["path", { d: "m8.5 14 7-4" }], ["path", { d: "m8.5 10 7 4" }]]];
  const O2 = ["svg", a, [["path", { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2" }], ["path", { d: "M10 22H8" }], ["path", { d: "M16 22h-2" }], ["circle", { cx: "8", cy: "8", r: "2" }], ["path", { d: "M9.414 9.414 12 12" }], ["path", { d: "M14.8 14.8 18 18" }], ["circle", { cx: "8", cy: "16", r: "2" }], ["path", { d: "m18 6-8.586 8.586" }]]];
  const n = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 8h7" }], ["path", { d: "M8 12h6" }], ["path", { d: "M11 16h5" }]]];
  const I2 = ["svg", a, [["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5" }], ["path", { d: "m9 11 3 3L22 4" }]]];
  const E2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const G2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m16 10-4 4-4-4" }]]];
  const W2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m14 16-4-4 4-4" }]]];
  const X2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m10 8 4 4-4 4" }]]];
  const N2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m8 14 4-4 4 4" }]]];
  const K2 = ["svg", a, [["path", { d: "M10 9.5 8 12l2 2.5" }], ["path", { d: "m14 9.5 2 2.5-2 2.5" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const Ji = ["svg", a, [["path", { d: "M10 9.5 8 12l2 2.5" }], ["path", { d: "M14 21h1" }], ["path", { d: "m14 9.5 2 2.5-2 2.5" }], ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }], ["path", { d: "M9 21h1" }]]];
  const ji = ["svg", a, [["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }], ["path", { d: "M9 21h1" }], ["path", { d: "M14 21h1" }]]];
  const J2 = ["svg", a, [["path", { d: "M8 7v7" }], ["path", { d: "M12 7v4" }], ["path", { d: "M16 7v9" }], ["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M9 3h1" }], ["path", { d: "M14 3h1" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M21 9v1" }], ["path", { d: "M21 14v1" }], ["path", { d: "M21 19a2 2 0 0 1-2 2" }], ["path", { d: "M14 21h1" }], ["path", { d: "M9 21h1" }], ["path", { d: "M5 21a2 2 0 0 1-2-2" }], ["path", { d: "M3 14v1" }], ["path", { d: "M3 9v1" }]]];
  const j2 = ["svg", a, [["path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }], ["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M5 21a2 2 0 0 1-2-2" }], ["path", { d: "M9 3h1" }], ["path", { d: "M9 21h2" }], ["path", { d: "M14 3h1" }], ["path", { d: "M3 9v1" }], ["path", { d: "M21 9v2" }], ["path", { d: "M3 14v1" }]]];
  const Q2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }], ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }]]];
  const _2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "12", cy: "12", r: "1" }]]];
  const Y2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 10h10" }], ["path", { d: "M7 14h10" }]]];
  const $2 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }], ["path", { d: "M9 11.2h5.7" }]]];
  const a0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 7v7" }], ["path", { d: "M12 7v4" }], ["path", { d: "M16 7v9" }]]];
  const t0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 7v10" }], ["path", { d: "M11 7v10" }], ["path", { d: "m15 7 2 10" }]]];
  const h0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 16V8l4 4 4-4v8" }]]];
  const d0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 8h10" }], ["path", { d: "M7 12h10" }], ["path", { d: "M7 16h10" }]]];
  const p0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 12h8" }]]];
  const c0 = ["svg", a, [["path", { d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }], ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }]]];
  const M0 = ["svg", a, [["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }], ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }], ["path", { d: "M9 17v-2.3" }]]];
  const s0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]]];
  const e = ["svg", a, [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" }]]];
  const e0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "M9 9h.01" }], ["path", { d: "M15 15h.01" }]]];
  const r0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 7h10" }], ["path", { d: "M10 7v10" }], ["path", { d: "M16 17a2 2 0 0 1-2-2V7" }]]];
  const v0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }], ["path", { d: "M12 7v10" }], ["path", { d: "M16 7v10" }]]];
  const n0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "m9 8 6 4-6 4Z" }]]];
  const o0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M8 12h8" }], ["path", { d: "M12 8v8" }]]];
  const i0 = ["svg", a, [["path", { d: "M12 7v4" }], ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]];
  const Qi = ["svg", a, [["path", { d: "M7 12h2l2 5 2-10h4" }], ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]]];
  const l0 = ["svg", a, [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2" }], ["circle", { cx: "8", cy: "8", r: "2" }], ["path", { d: "M9.414 9.414 12 12" }], ["path", { d: "M14.8 14.8 18 18" }], ["circle", { cx: "8", cy: "16", r: "2" }], ["path", { d: "m18 6-8.586 8.586" }]]];
  const g0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9" }]]];
  const x0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]]];
  const y0 = ["svg", a, [["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }], ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]]];
  const m0 = ["svg", a, [["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }], ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }], ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]]];
  const _i = ["svg", a, [["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }], ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]]];
  const Yi = ["svg", a, [["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }], ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }], ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]]];
  const H0 = ["svg", a, [["path", { d: "m7 11 2-2-2-2" }], ["path", { d: "M11 13h4" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }]]];
  const V0 = ["svg", a, [["path", { d: "M18 21a6 6 0 0 0-12 0" }], ["circle", { cx: "12", cy: "11", r: "4" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const C0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }]]];
  const w0 = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "m9 9 6 6" }]]];
  const $i = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const al = ["svg", a, [["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }]]];
  const tl = ["svg", a, [["path", { d: "M15.236 22a3 3 0 0 0-2.2-5" }], ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }], ["path", { d: "M18 13h.01" }], ["path", { d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" }]]];
  const hl = ["svg", a, [["path", { d: "M5 22h14" }], ["path", { d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" }], ["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" }]]];
  const dl = ["svg", a, [["path", { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" }]]];
  const pl = ["svg", a, [["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" }], ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const cl = ["svg", a, [["polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }]]];
  const Ml = ["svg", a, [["line", { x1: "18", x2: "18", y1: "20", y2: "4" }], ["polygon", { points: "14,20 4,12 14,4" }]]];
  const sl = ["svg", a, [["line", { x1: "6", x2: "6", y1: "4", y2: "20" }], ["polygon", { points: "10,4 20,12 10,20" }]]];
  const el = ["svg", a, [["path", { d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" }], ["path", { d: "M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4" }], ["circle", { cx: "20", cy: "10", r: "2" }]]];
  const rl = ["svg", a, [["path", { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" }], ["path", { d: "M14 3v4a2 2 0 0 0 2 2h4" }], ["path", { d: "M8 13h.01" }], ["path", { d: "M16 13h.01" }], ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }]]];
  const vl = ["svg", a, [["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }], ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4" }]]];
  const nl = ["svg", a, [["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }], ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }], ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }], ["path", { d: "M2 7h20" }], ["path", { d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" }]]];
  const ol = ["svg", a, [["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2" }], ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2" }]]];
  const il = ["svg", a, [["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2" }], ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2" }]]];
  const ll = ["svg", a, [["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }], ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }], ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]]];
  const gl = ["svg", a, [["path", { d: "m4 5 8 8" }], ["path", { d: "m12 5-8 8" }], ["path", { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" }]]];
  const xl = ["svg", a, [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 4h.01" }], ["path", { d: "M20 12h.01" }], ["path", { d: "M12 20h.01" }], ["path", { d: "M4 12h.01" }], ["path", { d: "M17.657 6.343h.01" }], ["path", { d: "M17.657 17.657h.01" }], ["path", { d: "M6.343 17.657h.01" }], ["path", { d: "M6.343 6.343h.01" }]]];
  const yl = ["svg", a, [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 3v1" }], ["path", { d: "M12 20v1" }], ["path", { d: "M3 12h1" }], ["path", { d: "M20 12h1" }], ["path", { d: "m18.364 5.636-.707.707" }], ["path", { d: "m6.343 17.657-.707.707" }], ["path", { d: "m5.636 5.636.707.707" }], ["path", { d: "m17.657 17.657.707.707" }]]];
  const ml = ["svg", a, [["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m4.9 4.9 1.4 1.4" }], ["path", { d: "m17.7 17.7 1.4 1.4" }], ["path", { d: "M2 12h2" }], ["path", { d: "M20 12h2" }], ["path", { d: "m6.3 17.7-1.4 1.4" }], ["path", { d: "m19.1 4.9-1.4 1.4" }]]];
  const Hl = ["svg", a, [["path", { d: "M10 9a3 3 0 1 0 0 6" }], ["path", { d: "M2 12h1" }], ["path", { d: "M14 21V3" }], ["path", { d: "M10 4V3" }], ["path", { d: "M10 21v-1" }], ["path", { d: "m3.64 18.36.7-.7" }], ["path", { d: "m4.34 6.34-.7-.7" }], ["path", { d: "M14 12h8" }], ["path", { d: "m17 4-3 3" }], ["path", { d: "m14 17 3 3" }], ["path", { d: "m21 15-3-3 3-3" }]]];
  const Vl = ["svg", a, [["circle", { cx: "12", cy: "12", r: "4" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m4.93 4.93 1.41 1.41" }], ["path", { d: "m17.66 17.66 1.41 1.41" }], ["path", { d: "M2 12h2" }], ["path", { d: "M20 12h2" }], ["path", { d: "m6.34 17.66-1.41 1.41" }], ["path", { d: "m19.07 4.93-1.41 1.41" }]]];
  const Cl = ["svg", a, [["path", { d: "M12 2v8" }], ["path", { d: "m4.93 10.93 1.41 1.41" }], ["path", { d: "M2 18h2" }], ["path", { d: "M20 18h2" }], ["path", { d: "m19.07 10.93-1.41 1.41" }], ["path", { d: "M22 22H2" }], ["path", { d: "m8 6 4-4 4 4" }], ["path", { d: "M16 18a4 4 0 0 0-8 0" }]]];
  const wl = ["svg", a, [["path", { d: "M12 10V2" }], ["path", { d: "m4.93 10.93 1.41 1.41" }], ["path", { d: "M2 18h2" }], ["path", { d: "M20 18h2" }], ["path", { d: "m19.07 10.93-1.41 1.41" }], ["path", { d: "M22 22H2" }], ["path", { d: "m16 6-4 4-4-4" }], ["path", { d: "M16 18a4 4 0 0 0-8 0" }]]];
  const ul = ["svg", a, [["path", { d: "m4 19 8-8" }], ["path", { d: "m12 19-8-8" }], ["path", { d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" }]]];
  const Al = ["svg", a, [["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }], ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }], ["path", { d: "M 7 17h.01" }], ["path", { d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" }]]];
  const Ll = ["svg", a, [["path", { d: "M10 21V3h8" }], ["path", { d: "M6 16h9" }], ["path", { d: "M10 9.5h7" }]]];
  const Sl = ["svg", a, [["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }], ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }], ["circle", { cx: "12", cy: "12", r: "3" }], ["path", { d: "m18 22-3-3 3-3" }], ["path", { d: "m6 2 3 3-3 3" }]]];
  const fl = ["svg", a, [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }]]];
  const Zl = ["svg", a, [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }], ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }], ["line", { x1: "5", x2: "9", y1: "14", y2: "18" }], ["line", { x1: "7", x2: "4", y1: "17", y2: "20" }], ["line", { x1: "3", x2: "5", y1: "19", y2: "21" }]]];
  const Pl = ["svg", a, [["path", { d: "m18 2 4 4" }], ["path", { d: "m17 7 3-3" }], ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }], ["path", { d: "m9 11 4 4" }], ["path", { d: "m5 19-3 3" }], ["path", { d: "m14 4 6 6" }]]];
  const kl = ["svg", a, [["path", { d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" }]]];
  const zl = ["svg", a, [["path", { d: "M12 21v-6" }], ["path", { d: "M12 9V3" }], ["path", { d: "M3 15h18" }], ["path", { d: "M3 9h18" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const Bl = ["svg", a, [["path", { d: "M12 15V9" }], ["path", { d: "M3 15h18" }], ["path", { d: "M3 9h18" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]];
  const Fl = ["svg", a, [["path", { d: "M14 14v2" }], ["path", { d: "M14 20v2" }], ["path", { d: "M14 2v2" }], ["path", { d: "M14 8v2" }], ["path", { d: "M2 15h8" }], ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }], ["path", { d: "M2 9h8" }], ["path", { d: "M22 15h-4" }], ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }], ["path", { d: "M22 9h-4" }], ["path", { d: "M5 3v18" }]]];
  const Dl = ["svg", a, [["path", { d: "M16 12H3" }], ["path", { d: "M16 18H3" }], ["path", { d: "M16 6H3" }], ["path", { d: "M21 12h.01" }], ["path", { d: "M21 18h.01" }], ["path", { d: "M21 6h.01" }]]];
  const ql = ["svg", a, [["path", { d: "M15 3v18" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M21 9H3" }], ["path", { d: "M21 15H3" }]]];
  const Rl = ["svg", a, [["path", { d: "M14 10h2" }], ["path", { d: "M15 22v-8" }], ["path", { d: "M15 2v4" }], ["path", { d: "M2 10h2" }], ["path", { d: "M20 10h2" }], ["path", { d: "M3 19h18" }], ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }], ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }], ["path", { d: "M8 10h2" }], ["path", { d: "M9 22v-8" }], ["path", { d: "M9 2v4" }]]];
  const bl = ["svg", a, [["path", { d: "M12 3v18" }], ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9h18" }], ["path", { d: "M3 15h18" }]]];
  const Tl = ["svg", a, [["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2" }], ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }], ["path", { d: "M8 18h.01" }]]];
  const Ul = ["svg", a, [["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }], ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }]]];
  const Ol = ["svg", a, [["circle", { cx: "7", cy: "7", r: "5" }], ["circle", { cx: "17", cy: "17", r: "5" }], ["path", { d: "M12 17h10" }], ["path", { d: "m3.46 10.54 7.08-7.08" }]]];
  const Il = ["svg", a, [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]]];
  const El = ["svg", a, [["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }], ["path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" }], ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor" }]]];
  const Gl = ["svg", a, [["path", { d: "M4 4v16" }]]];
  const Wl = ["svg", a, [["path", { d: "M4 4v16" }], ["path", { d: "M9 4v16" }]]];
  const Xl = ["svg", a, [["path", { d: "M4 4v16" }], ["path", { d: "M9 4v16" }], ["path", { d: "M14 4v16" }]]];
  const Nl = ["svg", a, [["path", { d: "M4 4v16" }], ["path", { d: "M9 4v16" }], ["path", { d: "M14 4v16" }], ["path", { d: "M19 4v16" }]]];
  const Kl = ["svg", a, [["path", { d: "M4 4v16" }], ["path", { d: "M9 4v16" }], ["path", { d: "M14 4v16" }], ["path", { d: "M19 4v16" }], ["path", { d: "M22 6 2 18" }]]];
  const Jl = ["svg", a, [["circle", { cx: "17", cy: "4", r: "2" }], ["path", { d: "M15.59 5.41 5.41 15.59" }], ["circle", { cx: "4", cy: "17", r: "2" }], ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12" }]]];
  const jl = ["svg", a, [["circle", { cx: "12", cy: "12", r: "10" }], ["circle", { cx: "12", cy: "12", r: "6" }], ["circle", { cx: "12", cy: "12", r: "2" }]]];
  const Ql = ["svg", a, [["path", { d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" }], ["path", { d: "m13.56 11.747 4.332-.924" }], ["path", { d: "m16 21-3.105-6.21" }], ["path", { d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" }], ["path", { d: "m6.158 8.633 1.114 4.456" }], ["path", { d: "m8 21 3.105-6.21" }], ["circle", { cx: "12", cy: "13", r: "2" }]]];
  const _l = ["svg", a, [["circle", { cx: "4", cy: "4", r: "2" }], ["path", { d: "m14 5 3-3 3 3" }], ["path", { d: "m14 10 3-3 3 3" }], ["path", { d: "M17 14V2" }], ["path", { d: "M17 14H7l-5 8h20Z" }], ["path", { d: "M8 14v8" }], ["path", { d: "m9 14 5 8" }]]];
  const Yl = ["svg", a, [["path", { d: "M3.5 21 14 3" }], ["path", { d: "M20.5 21 10 3" }], ["path", { d: "M15.5 21 12 15l-3.5 6" }], ["path", { d: "M2 21h20" }]]];
  const $l = ["svg", a, [["polyline", { points: "4 17 10 11 4 5" }], ["line", { x1: "12", x2: "20", y1: "19", y2: "19" }]]];
  const u0 = ["svg", a, [["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }], ["path", { d: "m16 2 6 6" }], ["path", { d: "M12 16H4" }]]];
  const ag = ["svg", a, [["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" }], ["path", { d: "M8.5 2h7" }], ["path", { d: "M14.5 16h-5" }]]];
  const tg = ["svg", a, [["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }], ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }], ["path", { d: "M3 2h7" }], ["path", { d: "M14 2h7" }], ["path", { d: "M9 16H4" }], ["path", { d: "M20 16h-5" }]]];
  const hg = ["svg", a, [["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" }], ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" }], ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }], ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }], ["path", { d: "M9 7v10" }]]];
  const dg = ["svg", a, [["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }], ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1" }], ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1" }]]];
  const pg = ["svg", a, [["path", { d: "M17 6H3" }], ["path", { d: "M21 12H8" }], ["path", { d: "M21 18H8" }], ["path", { d: "M3 12v6" }]]];
  const cg = ["svg", a, [["path", { d: "M21 6H3" }], ["path", { d: "M10 12H3" }], ["path", { d: "M10 18H3" }], ["circle", { cx: "17", cy: "15", r: "3" }], ["path", { d: "m21 19-1.9-1.9" }]]];
  const A0 = ["svg", a, [["path", { d: "M5 3a2 2 0 0 0-2 2" }], ["path", { d: "M19 3a2 2 0 0 1 2 2" }], ["path", { d: "M21 19a2 2 0 0 1-2 2" }], ["path", { d: "M5 21a2 2 0 0 1-2-2" }], ["path", { d: "M9 3h1" }], ["path", { d: "M9 21h1" }], ["path", { d: "M14 3h1" }], ["path", { d: "M14 21h1" }], ["path", { d: "M3 9v1" }], ["path", { d: "M21 9v1" }], ["path", { d: "M3 14v1" }], ["path", { d: "M21 14v1" }], ["line", { x1: "7", x2: "15", y1: "8", y2: "8" }], ["line", { x1: "7", x2: "17", y1: "12", y2: "12" }], ["line", { x1: "7", x2: "13", y1: "16", y2: "16" }]]];
  const Mg = ["svg", a, [["path", { d: "M17 6.1H3" }], ["path", { d: "M21 12.1H3" }], ["path", { d: "M15.1 18H3" }]]];
  const sg = ["svg", a, [["path", { d: "M2 10s3-3 3-8" }], ["path", { d: "M22 10s-3-3-3-8" }], ["path", { d: "M10 2c0 4.4-3.6 8-8 8" }], ["path", { d: "M14 2c0 4.4 3.6 8 8 8" }], ["path", { d: "M2 10s2 2 2 5" }], ["path", { d: "M22 10s-2 2-2 5" }], ["path", { d: "M8 15h8" }], ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }], ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }]]];
  const eg = ["svg", a, [["path", { d: "M2 12h10" }], ["path", { d: "M9 4v16" }], ["path", { d: "m3 9 3 3-3 3" }], ["path", { d: "M12 6 9 9 6 6" }], ["path", { d: "m6 18 3-3 1.5 1.5" }], ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]]];
  const rg = ["svg", a, [["path", { d: "M12 9a4 4 0 0 0-2 7.5" }], ["path", { d: "M12 3v2" }], ["path", { d: "m6.6 18.4-1.4 1.4" }], ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }], ["path", { d: "M4 13H2" }], ["path", { d: "M6.34 7.34 4.93 5.93" }]]];
  const vg = ["svg", a, [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]]];
  const ng = ["svg", a, [["path", { d: "M17 14V2" }], ["path", { d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" }]]];
  const og = ["svg", a, [["path", { d: "M7 10v12" }], ["path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" }]]];
  const ig = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "m9 12 2 2 4-4" }]]];
  const lg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M9 12h6" }]]];
  const gg = ["svg", a, [["path", { d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M9 9h.01" }], ["path", { d: "m15 9-6 6" }], ["path", { d: "M15 15h.01" }]]];
  const xg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M9 12h6" }], ["path", { d: "M12 9v6" }]]];
  const yg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "m9.5 14.5 5-5" }]]];
  const mg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "m9.5 14.5 5-5" }], ["path", { d: "m9.5 9.5 5 5" }]]];
  const Hg = ["svg", a, [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }], ["path", { d: "M13 5v2" }], ["path", { d: "M13 17v2" }], ["path", { d: "M13 11v2" }]]];
  const Vg = ["svg", a, [["path", { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }], ["path", { d: "m12 13.5 3.75.5" }], ["path", { d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }], ["path", { d: "M6 10V8" }], ["path", { d: "M6 14v1" }], ["path", { d: "M6 19v2" }], ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]]];
  const Cg = ["svg", a, [["path", { d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }], ["path", { d: "M6 10V8" }], ["path", { d: "M6 14v1" }], ["path", { d: "M6 19v2" }], ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]]];
  const wg = ["svg", a, [["path", { d: "M10 2h4" }], ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }], ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M12 12v-2" }]]];
  const ug = ["svg", a, [["path", { d: "M10 2h4" }], ["path", { d: "M12 14v-4" }], ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }], ["path", { d: "M9 17H4v5" }]]];
  const Ag = ["svg", a, [["line", { x1: "10", x2: "14", y1: "2", y2: "2" }], ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }], ["circle", { cx: "12", cy: "14", r: "8" }]]];
  const Lg = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }], ["circle", { cx: "8", cy: "12", r: "2" }]]];
  const Sg = ["svg", a, [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }], ["circle", { cx: "16", cy: "12", r: "2" }]]];
  const fg = ["svg", a, [["path", { d: "M21 4H3" }], ["path", { d: "M18 8H6" }], ["path", { d: "M19 12H9" }], ["path", { d: "M16 16h-6" }], ["path", { d: "M11 20H9" }]]];
  const Zg = ["svg", a, [["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }], ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]]];
  const Pg = ["svg", a, [["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" }], ["path", { d: "M2 14h12" }], ["path", { d: "M22 14h-2" }], ["path", { d: "M12 20v-6" }], ["path", { d: "m2 2 20 20" }], ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10" }]]];
  const kg = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M2 14h20" }], ["path", { d: "M12 20v-6" }]]];
  const zg = ["svg", a, [["path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }], ["path", { d: "M8 13v9" }], ["path", { d: "M16 22v-9" }], ["path", { d: "m9 6 1 7" }], ["path", { d: "m15 6-1 7" }], ["path", { d: "M12 6V2" }], ["path", { d: "M13 2h-2" }]]];
  const Bg = ["svg", a, [["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1" }], ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }], ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }]]];
  const Fg = ["svg", a, [["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }], ["path", { d: "M16 18h-5" }], ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573" }], ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }], ["path", { d: "M4 11V4" }], ["path", { d: "M7 15h.01" }], ["path", { d: "M8 10.1V4" }], ["circle", { cx: "18", cy: "18", r: "2" }], ["circle", { cx: "7", cy: "15", r: "5" }]]];
  const Dg = ["svg", a, [["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0" }], ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3" }], ["path", { d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z" }], ["path", { d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8" }]]];
  const qg = ["svg", a, [["path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }], ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }], ["path", { d: "M10 15h.01" }], ["path", { d: "M14 15h.01" }], ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }], ["path", { d: "m9 19-2 3" }], ["path", { d: "m15 19 2 3" }]]];
  const Rg = ["svg", a, [["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1" }], ["path", { d: "m9 15-1-1" }], ["path", { d: "m15 15 1-1" }], ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }], ["path", { d: "m8 19-2 3" }], ["path", { d: "m16 19 2 3" }]]];
  const bg = ["svg", a, [["path", { d: "M2 17 17 2" }], ["path", { d: "m2 14 8 8" }], ["path", { d: "m5 11 8 8" }], ["path", { d: "m8 8 8 8" }], ["path", { d: "m11 5 8 8" }], ["path", { d: "m14 2 8 8" }], ["path", { d: "M7 22 22 7" }]]];
  const L0 = ["svg", a, [["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }], ["path", { d: "M4 11h16" }], ["path", { d: "M12 3v8" }], ["path", { d: "m8 19-2 3" }], ["path", { d: "m18 22-2-3" }], ["path", { d: "M8 15h.01" }], ["path", { d: "M16 15h.01" }]]];
  const Tg = ["svg", a, [["path", { d: "M3 6h18" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17" }]]];
  const Ug = ["svg", a, [["path", { d: "M3 6h18" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }]]];
  const Og = ["svg", a, [["path", { d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" }], ["path", { d: "M12 19v3" }]]];
  const S0 = ["svg", a, [["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }], ["path", { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }], ["path", { d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" }], ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]]];
  const Ig = ["svg", a, [["path", { d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" }], ["path", { d: "M12 22v-3" }]]];
  const Eg = ["svg", a, [["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }], ["path", { d: "M7 16v6" }], ["path", { d: "M13 19v3" }], ["path", { d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" }]]];
  const Gg = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }], ["rect", { width: "3", height: "9", x: "7", y: "7" }], ["rect", { width: "3", height: "5", x: "14", y: "7" }]]];
  const Wg = ["svg", a, [["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7" }], ["polyline", { points: "16 17 22 17 22 11" }]]];
  const Xg = ["svg", a, [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }], ["polyline", { points: "16 7 22 7 22 13" }]]];
  const f0 = ["svg", a, [["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }], ["path", { d: "M12 9v4" }], ["path", { d: "M12 17h.01" }]]];
  const Ng = ["svg", a, [["path", { d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" }]]];
  const Kg = ["svg", a, [["path", { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }]]];
  const Jg = ["svg", a, [["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }], ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }], ["path", { d: "M4 22h16" }], ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" }], ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" }], ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z" }]]];
  const jg = ["svg", a, [["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }], ["path", { d: "M15 18H9" }], ["path", { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }], ["circle", { cx: "17", cy: "18", r: "2" }], ["circle", { cx: "7", cy: "18", r: "2" }]]];
  const Qg = ["svg", a, [["path", { d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" }], ["path", { d: "M4.82 7.9 8 10" }], ["path", { d: "M15.18 7.9 12 10" }], ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2" }]]];
  const _g = ["svg", a, [["path", { d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" }], ["path", { d: "M7 21h10" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]]];
  const Z0 = ["svg", a, [["path", { d: "M7 21h10" }], ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]]];
  const Yg = ["svg", a, [["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2" }], ["polyline", { points: "17 2 12 7 7 2" }]]];
  const $g = ["svg", a, [["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }]]];
  const ax = ["svg", a, [["path", { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }]]];
  const tx = ["svg", a, [["path", { d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" }]]];
  const hx = ["svg", a, [["polyline", { points: "4 7 4 4 20 4 20 7" }], ["line", { x1: "9", x2: "15", y1: "20", y2: "20" }], ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]]];
  const dx = ["svg", a, [["path", { d: "M12 2v1" }], ["path", { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575" }], ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455" }], ["path", { d: "m2 2 20 20" }]]];
  const px = ["svg", a, [["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }], ["path", { d: "M12 12v8a2 2 0 0 0 4 0" }], ["path", { d: "M12 2v1" }]]];
  const cx = ["svg", a, [["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }], ["line", { x1: "4", x2: "20", y1: "20", y2: "20" }]]];
  const Mx = ["svg", a, [["path", { d: "M9 14 4 9l5-5" }], ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]]];
  const sx = ["svg", a, [["circle", { cx: "12", cy: "17", r: "1" }], ["path", { d: "M3 7v6h6" }], ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]]];
  const ex = ["svg", a, [["path", { d: "M3 7v6h6" }], ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]]];
  const rx = ["svg", a, [["path", { d: "M16 12h6" }], ["path", { d: "M8 12H2" }], ["path", { d: "M12 2v2" }], ["path", { d: "M12 8v2" }], ["path", { d: "M12 14v2" }], ["path", { d: "M12 20v2" }], ["path", { d: "m19 15 3-3-3-3" }], ["path", { d: "m5 9-3 3 3 3" }]]];
  const vx = ["svg", a, [["path", { d: "M12 22v-6" }], ["path", { d: "M12 8V2" }], ["path", { d: "M4 12H2" }], ["path", { d: "M10 12H8" }], ["path", { d: "M16 12h-2" }], ["path", { d: "M22 12h-2" }], ["path", { d: "m15 19-3 3-3-3" }], ["path", { d: "m15 5-3-3-3 3" }]]];
  const nx = ["svg", a, [["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1" }], ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1" }]]];
  const P0 = ["svg", a, [["circle", { cx: "12", cy: "10", r: "1" }], ["path", { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" }], ["path", { d: "M6 17v.01" }], ["path", { d: "M6 13v.01" }], ["path", { d: "M18 17v.01" }], ["path", { d: "M18 13v.01" }], ["path", { d: "M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }]]];
  const ox = ["svg", a, [["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }]]];
  const ix = ["svg", a, [["path", { d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }], ["path", { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }], ["line", { x1: "8", x2: "8", y1: "2", y2: "5" }], ["line", { x1: "2", x2: "5", y1: "8", y2: "8" }], ["line", { x1: "16", x2: "16", y1: "19", y2: "22" }], ["line", { x1: "19", x2: "22", y1: "16", y2: "16" }]]];
  const lx = ["svg", a, [["path", { d: "m19 5 3-3" }], ["path", { d: "m2 22 3-3" }], ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }], ["path", { d: "M7.5 13.5 10 11" }], ["path", { d: "M10.5 16.5 13 14" }], ["path", { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" }]]];
  const gx = ["svg", a, [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }], ["polyline", { points: "17 8 12 3 7 8" }], ["line", { x1: "12", x2: "12", y1: "3", y2: "15" }]]];
  const xx = ["svg", a, [["circle", { cx: "10", cy: "7", r: "1" }], ["circle", { cx: "4", cy: "20", r: "1" }], ["path", { d: "M4.7 19.3 19 5" }], ["path", { d: "m21 3-3 1 2 2Z" }], ["path", { d: "M9.26 7.68 5 12l2 5" }], ["path", { d: "m10 14 5 2 3.5-3.5" }], ["path", { d: "m18 12 1-1 1 1-1 1Z" }]]];
  const yx = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["polyline", { points: "16 11 18 13 22 9" }]]];
  const mx = ["svg", a, [["circle", { cx: "18", cy: "15", r: "3" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }], ["path", { d: "m21.7 16.4-.9-.3" }], ["path", { d: "m15.2 13.9-.9-.3" }], ["path", { d: "m16.6 18.7.3-.9" }], ["path", { d: "m19.1 12.2.3-.9" }], ["path", { d: "m19.6 18.7-.4-1" }], ["path", { d: "m16.8 12.3-.4-1" }], ["path", { d: "m14.3 16.6 1-.4" }], ["path", { d: "m20.7 13.8 1-.4" }]]];
  const Hx = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]]];
  const Vx = ["svg", a, [["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["circle", { cx: "10", cy: "7", r: "4" }]]];
  const Cx = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }], ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]]];
  const k0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "m16 19 2 2 4-4" }]]];
  const z0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["circle", { cx: "18", cy: "18", r: "3" }], ["path", { d: "m19.5 14.3-.4.9" }], ["path", { d: "m16.9 20.8-.4.9" }], ["path", { d: "m21.7 19.5-.9-.4" }], ["path", { d: "m15.2 16.9-.9-.4" }], ["path", { d: "m21.7 16.5-.9.4" }], ["path", { d: "m15.2 19.1-.9.4" }], ["path", { d: "m19.5 21.7-.4-.9" }], ["path", { d: "m16.9 15.2-.4-.9" }]]];
  const B0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "M22 19h-6" }]]];
  const wx = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 10.821-7.487" }], ["path", { d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }], ["circle", { cx: "10", cy: "8", r: "5" }]]];
  const F0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 13.292-6" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "M19 16v6" }], ["path", { d: "M22 19h-6" }]]];
  const ux = ["svg", a, [["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }], ["circle", { cx: "18", cy: "18", r: "3" }], ["path", { d: "m22 22-1.9-1.9" }]]];
  const D0 = ["svg", a, [["path", { d: "M2 21a8 8 0 0 1 11.873-7" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "m17 17 5 5" }], ["path", { d: "m22 17-5 5" }]]];
  const q0 = ["svg", a, [["circle", { cx: "12", cy: "8", r: "5" }], ["path", { d: "M20 21a8 8 0 0 0-16 0" }]]];
  const Ax = ["svg", a, [["circle", { cx: "10", cy: "7", r: "4" }], ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }], ["circle", { cx: "17", cy: "17", r: "3" }], ["path", { d: "m21 21-1.9-1.9" }]]];
  const Lx = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }], ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }]]];
  const Sx = ["svg", a, [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", { cx: "12", cy: "7", r: "4" }]]];
  const R0 = ["svg", a, [["path", { d: "M18 21a8 8 0 0 0-16 0" }], ["circle", { cx: "10", cy: "8", r: "5" }], ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]]];
  const fx = ["svg", a, [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["circle", { cx: "9", cy: "7", r: "4" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }]]];
  const b0 = ["svg", a, [["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }], ["path", { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }], ["path", { d: "m2.1 21.8 6.4-6.3" }], ["path", { d: "m19 5-7 7" }]]];
  const T0 = ["svg", a, [["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }], ["path", { d: "M7 2v20" }], ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]]];
  const Zx = ["svg", a, [["path", { d: "M12 2v20" }], ["path", { d: "M2 5h20" }], ["path", { d: "M3 3v2" }], ["path", { d: "M7 3v2" }], ["path", { d: "M17 3v2" }], ["path", { d: "M21 3v2" }], ["path", { d: "m19 5-7 7-7-7" }]]];
  const Px = ["svg", a, [["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }], ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }], ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }], ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]]];
  const kx = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }], ["path", { d: "m7.9 7.9 2.7 2.7" }], ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }], ["path", { d: "m13.4 10.6 2.7-2.7" }], ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }], ["path", { d: "m7.9 16.1 2.7-2.7" }], ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor" }], ["path", { d: "m13.4 13.4 2.7 2.7" }], ["circle", { cx: "12", cy: "12", r: "2" }]]];
  const zx = ["svg", a, [["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }], ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6" }], ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3" }]]];
  const Bx = ["svg", a, [["path", { d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" }], ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" }], ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" }]]];
  const Fx = ["svg", a, [["path", { d: "m2 8 2 2-2 2 2 2-2 2" }], ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }], ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }], ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const Dx = ["svg", a, [["path", { d: "m2 8 2 2-2 2 2 2-2 2" }], ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }], ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }]]];
  const qx = ["svg", a, [["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" }], ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }], ["path", { d: "m2 2 20 20" }]]];
  const Rx = ["svg", a, [["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }], ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" }]]];
  const bx = ["svg", a, [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }], ["path", { d: "M2 8h20" }], ["circle", { cx: "8", cy: "14", r: "2" }], ["path", { d: "M8 12h8" }], ["circle", { cx: "16", cy: "14", r: "2" }]]];
  const Tx = ["svg", a, [["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }], ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }], ["circle", { cx: "12", cy: "12", r: "1" }], ["path", { d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }]]];
  const Ux = ["svg", a, [["circle", { cx: "6", cy: "12", r: "4" }], ["circle", { cx: "18", cy: "12", r: "4" }], ["line", { x1: "6", x2: "18", y1: "16", y2: "16" }]]];
  const Ox = ["svg", a, [["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }], ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }]]];
  const Ix = ["svg", a, [["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }], ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }], ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14" }]]];
  const Ex = ["svg", a, [["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }], ["line", { x1: "22", x2: "16", y1: "9", y2: "15" }], ["line", { x1: "16", x2: "22", y1: "9", y2: "15" }]]];
  const Gx = ["svg", a, [["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }]]];
  const Wx = ["svg", a, [["path", { d: "m9 12 2 2 4-4" }], ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }], ["path", { d: "M22 19H2" }]]];
  const Xx = ["svg", a, [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }], ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }], ["path", { d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" }]]];
  const U0 = ["svg", a, [["path", { d: "M17 14h.01" }], ["path", { d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }]]];
  const Nx = ["svg", a, [["path", { d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }], ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]]];
  const Kx = ["svg", a, [["circle", { cx: "8", cy: "9", r: "2" }], ["path", { d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" }], ["path", { d: "M8 21h8" }], ["path", { d: "M12 17v4" }]]];
  const O0 = ["svg", a, [["path", { d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" }], ["path", { d: "m14 7 3 3" }], ["path", { d: "M5 6v4" }], ["path", { d: "M19 14v4" }], ["path", { d: "M10 2v2" }], ["path", { d: "M7 8H3" }], ["path", { d: "M21 16h-4" }], ["path", { d: "M11 3H9" }]]];
  const Jx = ["svg", a, [["path", { d: "M15 4V2" }], ["path", { d: "M15 16v-2" }], ["path", { d: "M8 9h2" }], ["path", { d: "M20 9h2" }], ["path", { d: "M17.8 11.8 19 13" }], ["path", { d: "M15 9h.01" }], ["path", { d: "M17.8 6.2 19 5" }], ["path", { d: "m3 21 9-9" }], ["path", { d: "M12.2 6.2 11 5" }]]];
  const jx = ["svg", a, [["path", { d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" }], ["path", { d: "M6 18h12" }], ["path", { d: "M6 14h12" }], ["rect", { width: "12", height: "12", x: "6", y: "10" }]]];
  const Qx = ["svg", a, [["path", { d: "M3 6h3" }], ["path", { d: "M17 6h.01" }], ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2" }], ["circle", { cx: "12", cy: "13", r: "5" }], ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }]]];
  const _x = ["svg", a, [["circle", { cx: "12", cy: "12", r: "6" }], ["polyline", { points: "12 10 12 12 13 13" }], ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }], ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }]]];
  const Yx = ["svg", a, [["path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }], ["path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }]]];
  const $x = ["svg", a, [["circle", { cx: "12", cy: "4.5", r: "2.5" }], ["path", { d: "m10.2 6.3-3.9 3.9" }], ["circle", { cx: "4.5", cy: "12", r: "2.5" }], ["path", { d: "M7 12h10" }], ["circle", { cx: "19.5", cy: "12", r: "2.5" }], ["path", { d: "m13.8 17.7 3.9-3.9" }], ["circle", { cx: "12", cy: "19.5", r: "2.5" }]]];
  const ay = ["svg", a, [["circle", { cx: "12", cy: "10", r: "8" }], ["circle", { cx: "12", cy: "10", r: "3" }], ["path", { d: "M7 22h10" }], ["path", { d: "M12 22v-4" }]]];
  const ty = ["svg", a, [["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }], ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66" }], ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }], ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7" }], ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414" }], ["path", { d: "m12 6 .6 1" }], ["path", { d: "m2 2 20 20" }]]];
  const hy = ["svg", a, [["path", { d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" }], ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }], ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }]]];
  const dy = ["svg", a, [["circle", { cx: "12", cy: "5", r: "3" }], ["path", { d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" }]]];
  const py = ["svg", a, [["path", { d: "m2 22 10-10" }], ["path", { d: "m16 8-1.17 1.17" }], ["path", { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" }], ["path", { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" }], ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }], ["path", { d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" }], ["path", { d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const cy = ["svg", a, [["path", { d: "M2 22 16 8" }], ["path", { d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }], ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }], ["path", { d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }], ["path", { d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }]]];
  const My = ["svg", a, [["circle", { cx: "7", cy: "12", r: "3" }], ["path", { d: "M10 9v6" }], ["circle", { cx: "17", cy: "12", r: "3" }], ["path", { d: "M14 7v8" }], ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]];
  const sy = ["svg", a, [["path", { d: "M12 20h.01" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]]];
  const ey = ["svg", a, [["path", { d: "M12 20h.01" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]]];
  const ry = ["svg", a, [["path", { d: "M12 20h.01" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764" }], ["path", { d: "m2 2 20 20" }]]];
  const vy = ["svg", a, [["path", { d: "M12 20h.01" }]]];
  const ny = ["svg", a, [["path", { d: "M12 20h.01" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]]];
  const oy = ["svg", a, [["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" }], ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2" }], ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2" }]]];
  const iy = ["svg", a, [["path", { d: "M8 22h8" }], ["path", { d: "M7 10h3m7 0h-1.343" }], ["path", { d: "M12 15v7" }], ["path", { d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" }], ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]]];
  const ly = ["svg", a, [["path", { d: "M8 22h8" }], ["path", { d: "M7 10h10" }], ["path", { d: "M12 15v7" }], ["path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }]]];
  const gy = ["svg", a, [["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }], ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }], ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }]]];
  const xy = ["svg", a, [["path", { d: "m19 12-1.5 3" }], ["path", { d: "M19.63 18.81 22 20" }], ["path", { d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" }]]];
  const yy = ["svg", a, [["line", { x1: "3", x2: "21", y1: "6", y2: "6" }], ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4" }], ["polyline", { points: "16 16 14 18 16 20" }], ["line", { x1: "3", x2: "10", y1: "18", y2: "18" }]]];
  const my = ["svg", a, [["path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }]]];
  const Hy = ["svg", a, [["path", { d: "M18 6 6 18" }], ["path", { d: "m6 6 12 12" }]]];
  const Vy = ["svg", a, [["path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }], ["path", { d: "m10 15 5-3-5-3z" }]]];
  const Cy = ["svg", a, [["path", { d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" }], ["path", { d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" }], ["path", { d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" }], ["path", { d: "m2 2 20 20" }]]];
  const wy = ["svg", a, [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" }]]];
  const uy = ["svg", a, [["circle", { cx: "11", cy: "11", r: "8" }], ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }], ["line", { x1: "11", x2: "11", y1: "8", y2: "14" }], ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]]];
  const Ay = ["svg", a, [["circle", { cx: "11", cy: "11", r: "8" }], ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }], ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]]];
  const Dy = Object.freeze(Object.defineProperty({ __proto__: null, AArrowDown: W0, AArrowUp: X0, ALargeSmall: N0, Accessibility: K0, Activity: J0, ActivitySquare: S2, AirVent: j0, Airplay: Q0, AlarmCheck: l, AlarmClock: Y0, AlarmClockCheck: l, AlarmClockMinus: g, AlarmClockOff: _0, AlarmClockPlus: x, AlarmMinus: g, AlarmPlus: x, AlarmSmoke: $0, Album: aa, AlertCircle: G, AlertOctagon: h2, AlertTriangle: f0, AlignCenter: da, AlignCenterHorizontal: ta, AlignCenterVertical: ha, AlignEndHorizontal: pa, AlignEndVertical: ca, AlignHorizontalDistributeCenter: Ma, AlignHorizontalDistributeEnd: sa, AlignHorizontalDistributeStart: ea, AlignHorizontalJustifyCenter: ra, AlignHorizontalJustifyEnd: va, AlignHorizontalJustifyStart: na, AlignHorizontalSpaceAround: oa, AlignHorizontalSpaceBetween: ia, AlignJustify: la, AlignLeft: ga, AlignRight: xa, AlignStartHorizontal: ya, AlignStartVertical: ma, AlignVerticalDistributeCenter: Ha, AlignVerticalDistributeEnd: Va, AlignVerticalDistributeStart: Ca, AlignVerticalJustifyCenter: wa, AlignVerticalJustifyEnd: ua, AlignVerticalJustifyStart: Aa, AlignVerticalSpaceAround: La, AlignVerticalSpaceBetween: Sa, Ambulance: fa, Ampersand: Za, Ampersands: Pa, Amphora: ka, Anchor: za, Angry: Ba, Annoyed: Fa, Antenna: Da, Anvil: qa, Aperture: Ra, AppWindow: Ta, AppWindowMac: ba, Apple: Ua, Archive: Ea, ArchiveRestore: Oa, ArchiveX: Ia, AreaChart: k, Armchair: Ga, ArrowBigDown: Xa, ArrowBigDownDash: Wa, ArrowBigLeft: Ka, ArrowBigLeftDash: Na, ArrowBigRight: ja, ArrowBigRightDash: Ja, ArrowBigUp: _a, ArrowBigUpDash: Qa, ArrowDown: st, ArrowDown01: Ya, ArrowDown10: $a, ArrowDownAZ: y, ArrowDownAz: y, ArrowDownCircle: W, ArrowDownFromLine: at, ArrowDownLeft: tt, ArrowDownLeftFromCircle: N, ArrowDownLeftFromSquare: z2, ArrowDownLeftSquare: f2, ArrowDownNarrowWide: ht, ArrowDownRight: dt, ArrowDownRightFromCircle: K, ArrowDownRightFromSquare: B2, ArrowDownRightSquare: Z2, ArrowDownSquare: P2, ArrowDownToDot: pt, ArrowDownToLine: ct, ArrowDownUp: Mt, ArrowDownWideNarrow: m, ArrowDownZA: H, ArrowDownZa: H, ArrowLeft: nt, ArrowLeftCircle: X, ArrowLeftFromLine: et, ArrowLeftRight: rt, ArrowLeftSquare: k2, ArrowLeftToLine: vt, ArrowRight: gt, ArrowRightCircle: Q, ArrowRightFromLine: ot, ArrowRightLeft: it, ArrowRightSquare: q2, ArrowRightToLine: lt, ArrowUp: Lt, ArrowUp01: xt, ArrowUp10: yt, ArrowUpAZ: V, ArrowUpAz: V, ArrowUpCircle: _, ArrowUpDown: mt, ArrowUpFromDot: Ht, ArrowUpFromLine: Vt, ArrowUpLeft: Ct, ArrowUpLeftFromCircle: J, ArrowUpLeftFromSquare: F2, ArrowUpLeftSquare: R2, ArrowUpNarrowWide: C, ArrowUpRight: wt, ArrowUpRightFromCircle: j, ArrowUpRightFromSquare: D2, ArrowUpRightSquare: b2, ArrowUpSquare: T2, ArrowUpToLine: ut, ArrowUpWideNarrow: At, ArrowUpZA: w, ArrowUpZa: w, ArrowsUpFromLine: St, Asterisk: ft, AsteriskSquare: U2, AtSign: Zt, Atom: Pt, AudioLines: kt, AudioWaveform: zt, Award: Bt, Axe: Ft, Axis3D: u, Axis3d: u, Baby: Dt, Backpack: qt, Badge: _t, BadgeAlert: Rt, BadgeCent: bt, BadgeCheck: A, BadgeDollarSign: Tt, BadgeEuro: Ut, BadgeHelp: Ot, BadgeIndianRupee: It, BadgeInfo: Et, BadgeJapaneseYen: Gt, BadgeMinus: Wt, BadgePercent: Xt, BadgePlus: Nt, BadgePoundSterling: Kt, BadgeRussianRuble: Jt, BadgeSwissFranc: jt, BadgeX: Qt, BaggageClaim: Yt, Ban: $t, Banana: ah, Bandage: th, Banknote: hh, BarChart: T, BarChart2: U, BarChart3: R, BarChart4: q, BarChartBig: D, BarChartHorizontal: B, BarChartHorizontalBig: z, Barcode: dh, Baseline: ph, Bath: ch, Battery: nh, BatteryCharging: Mh, BatteryFull: sh, BatteryLow: eh, BatteryMedium: rh, BatteryWarning: vh, Beaker: oh, Bean: lh, BeanOff: ih, Bed: yh, BedDouble: gh, BedSingle: xh, Beef: mh, Beer: Vh, BeerOff: Hh, Bell: fh, BellDot: Ch, BellElectric: wh, BellMinus: uh, BellOff: Ah, BellPlus: Lh, BellRing: Sh, BetweenHorizonalEnd: L, BetweenHorizonalStart: S, BetweenHorizontalEnd: L, BetweenHorizontalStart: S, BetweenVerticalEnd: Zh, BetweenVerticalStart: Ph, BicepsFlexed: kh, Bike: zh, Binary: Bh, Binoculars: Fh, Biohazard: Dh, Bird: qh, Bitcoin: Rh, Blend: bh, Blinds: Th, Blocks: Uh, Bluetooth: Gh, BluetoothConnected: Oh, BluetoothOff: Ih, BluetoothSearching: Eh, Bold: Wh, Bolt: Xh, Bomb: Nh, Bone: Kh, Book: x4, BookA: Jh, BookAudio: jh, BookCheck: Qh, BookCopy: _h, BookDashed: f, BookDown: Yh, BookHeadphones: $h, BookHeart: a4, BookImage: t4, BookKey: h4, BookLock: d4, BookMarked: p4, BookMinus: c4, BookOpen: e4, BookOpenCheck: M4, BookOpenText: s4, BookPlus: r4, BookTemplate: f, BookText: v4, BookType: n4, BookUp: i4, BookUp2: o4, BookUser: l4, BookX: g4, Bookmark: C4, BookmarkCheck: y4, BookmarkMinus: m4, BookmarkPlus: H4, BookmarkX: V4, BoomBox: w4, Bot: L4, BotMessageSquare: u4, BotOff: A4, Box: f4, BoxSelect: S4, Boxes: Z4, Braces: Z, Brackets: P4, Brain: B4, BrainCircuit: k4, BrainCog: z4, BrickWall: F4, Briefcase: R4, BriefcaseBusiness: D4, BriefcaseMedical: q4, BringToFront: b4, Brush: T4, Bug: I4, BugOff: U4, BugPlay: O4, Building: G4, Building2: E4, Bus: X4, BusFront: W4, Cable: K4, CableCar: N4, Cake: j4, CakeSlice: J4, Calculator: Q4, Calendar: g5, CalendarArrowDown: _4, CalendarArrowUp: Y4, CalendarCheck: a5, CalendarCheck2: $4, CalendarClock: t5, CalendarCog: h5, CalendarDays: d5, CalendarFold: p5, CalendarHeart: c5, CalendarMinus: s5, CalendarMinus2: M5, CalendarOff: e5, CalendarPlus: v5, CalendarPlus2: r5, CalendarRange: n5, CalendarSearch: o5, CalendarX: l5, CalendarX2: i5, Camera: y5, CameraOff: x5, CandlestickChart: F, Candy: V5, CandyCane: m5, CandyOff: H5, Cannabis: C5, Captions: P, CaptionsOff: w5, Car: L5, CarFront: u5, CarTaxiFront: A5, Caravan: S5, Carrot: f5, CaseLower: Z5, CaseSensitive: P5, CaseUpper: k5, CassetteTape: z5, Cast: B5, Castle: F5, Cat: D5, Cctv: q5, ChartArea: k, ChartBar: B, ChartBarBig: z, ChartBarDecreasing: R5, ChartBarIncreasing: b5, ChartBarStacked: T5, ChartCandlestick: F, ChartColumn: R, ChartColumnBig: D, ChartColumnDecreasing: U5, ChartColumnIncreasing: q, ChartColumnStacked: O5, ChartLine: b, ChartNetwork: I5, ChartNoAxesColumn: U, ChartNoAxesColumnDecreasing: E5, ChartNoAxesColumnIncreasing: T, ChartNoAxesCombined: G5, ChartNoAxesGantt: O, ChartPie: I, ChartScatter: E, ChartSpline: W5, Check: N5, CheckCheck: X5, CheckCircle: Y, CheckCircle2: $, CheckSquare: I2, CheckSquare2: E2, ChefHat: K5, Cherry: J5, ChevronDown: j5, ChevronDownCircle: a1, ChevronDownSquare: G2, ChevronFirst: Q5, ChevronLast: _5, ChevronLeft: Y5, ChevronLeftCircle: t1, ChevronLeftSquare: W2, ChevronRight: $5, ChevronRightCircle: h1, ChevronRightSquare: X2, ChevronUp: a3, ChevronUpCircle: d1, ChevronUpSquare: N2, ChevronsDown: h3, ChevronsDownUp: t3, ChevronsLeft: c3, ChevronsLeftRight: p3, ChevronsLeftRightEllipsis: d3, ChevronsRight: s3, ChevronsRightLeft: M3, ChevronsUp: r3, ChevronsUpDown: e3, Chrome: v3, Church: n3, Cigarette: i3, CigaretteOff: o3, Circle: A3, CircleAlert: G, CircleArrowDown: W, CircleArrowLeft: X, CircleArrowOutDownLeft: N, CircleArrowOutDownRight: K, CircleArrowOutUpLeft: J, CircleArrowOutUpRight: j, CircleArrowRight: Q, CircleArrowUp: _, CircleCheck: $, CircleCheckBig: Y, CircleChevronDown: a1, CircleChevronLeft: t1, CircleChevronRight: h1, CircleChevronUp: d1, CircleDashed: l3, CircleDivide: p1, CircleDollarSign: g3, CircleDot: y3, CircleDotDashed: x3, CircleEllipsis: m3, CircleEqual: H3, CircleFadingArrowUp: V3, CircleFadingPlus: C3, CircleGauge: c1, CircleHelp: M1, CircleMinus: s1, CircleOff: w3, CircleParking: r1, CircleParkingOff: e1, CirclePause: v1, CirclePercent: n1, CirclePlay: o1, CirclePlus: i1, CirclePower: l1, CircleSlash: u3, CircleSlash2: g1, CircleSlashed: g1, CircleStop: x1, CircleUser: m1, CircleUserRound: y1, CircleX: H1, CircuitBoard: L3, Citrus: S3, Clapperboard: f3, Clipboard: R3, ClipboardCheck: Z3, ClipboardCopy: P3, ClipboardEdit: C1, ClipboardList: k3, ClipboardMinus: z3, ClipboardPaste: B3, ClipboardPen: C1, ClipboardPenLine: V1, ClipboardPlus: F3, ClipboardSignature: V1, ClipboardType: D3, ClipboardX: q3, Clock: _3, Clock1: b3, Clock10: T3, Clock11: U3, Clock12: O3, Clock2: I3, Clock3: E3, Clock4: G3, Clock5: W3, Clock6: X3, Clock7: N3, Clock8: K3, Clock9: J3, ClockArrowDown: j3, ClockArrowUp: Q3, Cloud: nd, CloudCog: Y3, CloudDownload: w1, CloudDrizzle: $3, CloudFog: ad, CloudHail: td, CloudLightning: hd, CloudMoon: pd, CloudMoonRain: dd, CloudOff: cd, CloudRain: sd, CloudRainWind: Md, CloudSnow: ed, CloudSun: vd, CloudSunRain: rd, CloudUpload: u1, Cloudy: od, Clover: id, Club: ld, Code: gd, Code2: A1, CodeSquare: K2, CodeXml: A1, Codepen: xd, Codesandbox: yd, Coffee: md, Cog: Hd, Coins: Vd, Columns: L1, Columns2: L1, Columns3: S1, Columns4: Cd, Combine: wd, Command: ud, Compass: Ad, Component: Ld, Computer: Sd, ConciergeBell: fd, Cone: Zd, Construction: Pd, Contact: kd, Contact2: f1, ContactRound: f1, Container: zd, Contrast: Bd, Cookie: Fd, CookingPot: Dd, Copy: Od, CopyCheck: qd, CopyMinus: Rd, CopyPlus: bd, CopySlash: Td, CopyX: Ud, Copyleft: Id, Copyright: Ed, CornerDownLeft: Gd, CornerDownRight: Wd, CornerLeftDown: Xd, CornerLeftUp: Nd, CornerRightDown: Kd, CornerRightUp: Jd, CornerUpLeft: jd, CornerUpRight: Qd, Cpu: _d, CreativeCommons: Yd, CreditCard: $d, Croissant: ap, Crop: tp, Cross: hp, Crosshair: dp, Crown: pp, Cuboid: cp, CupSoda: Mp, CurlyBraces: Z, Currency: sp, Cylinder: ep, Dam: rp, Database: op, DatabaseBackup: vp, DatabaseZap: np, Delete: ip, Dessert: lp, Diameter: gp, Diamond: mp, DiamondMinus: xp, DiamondPercent: Z1, DiamondPlus: yp, Dice1: Hp, Dice2: Vp, Dice3: Cp, Dice4: wp, Dice5: up, Dice6: Ap, Dices: Lp, Diff: Sp, Disc: kp, Disc2: fp, Disc3: Zp, DiscAlbum: Pp, Divide: zp, DivideCircle: p1, DivideSquare: Q2, Dna: Fp, DnaOff: Bp, Dock: Dp, Dog: qp, DollarSign: Rp, Donut: bp, DoorClosed: Tp, DoorOpen: Up, Dot: Op, DotSquare: _2, Download: Ip, DownloadCloud: w1, DraftingCompass: Ep, Drama: Gp, Dribbble: Wp, Drill: Xp, Droplet: Np, Droplets: Kp, Drum: Jp, Drumstick: jp, Dumbbell: Qp, Ear: Yp, EarOff: _p, Earth: P1, EarthLock: $p, Eclipse: a6, Edit: e, Edit2: g2, Edit3: l2, Egg: d6, EggFried: t6, EggOff: h6, Ellipsis: z1, EllipsisVertical: k1, Equal: c6, EqualNot: p6, EqualSquare: Y2, Eraser: M6, EthernetPort: s6, Euro: e6, Expand: r6, ExternalLink: v6, Eye: o6, EyeOff: n6, Facebook: i6, Factory: l6, Fan: g6, FastForward: x6, Feather: y6, Fence: m6, FerrisWheel: H6, Figma: V6, File: xc, FileArchive: C6, FileAudio: u6, FileAudio2: w6, FileAxis3D: B1, FileAxis3d: B1, FileBadge: L6, FileBadge2: A6, FileBarChart: F1, FileBarChart2: D1, FileBox: S6, FileChartColumn: D1, FileChartColumnIncreasing: F1, FileChartLine: q1, FileChartPie: R1, FileCheck: Z6, FileCheck2: f6, FileClock: P6, FileCode: z6, FileCode2: k6, FileCog: b1, FileCog2: b1, FileDiff: B6, FileDigit: F6, FileDown: D6, FileEdit: U1, FileHeart: q6, FileImage: R6, FileInput: b6, FileJson: U6, FileJson2: T6, FileKey: I6, FileKey2: O6, FileLineChart: q1, FileLock: G6, FileLock2: E6, FileMinus: X6, FileMinus2: W6, FileMusic: N6, FileOutput: K6, FilePen: U1, FilePenLine: T1, FilePieChart: R1, FilePlus: j6, FilePlus2: J6, FileQuestion: Q6, FileScan: _6, FileSearch: $6, FileSearch2: Y6, FileSignature: T1, FileSliders: ac, FileSpreadsheet: tc, FileStack: hc, FileSymlink: dc, FileTerminal: pc, FileText: cc, FileType: sc, FileType2: Mc, FileUp: ec, FileVideo: vc, FileVideo2: rc, FileVolume: oc, FileVolume2: nc, FileWarning: ic, FileX: gc, FileX2: lc, Files: yc, Film: mc, Filter: Vc, FilterX: Hc, Fingerprint: Cc, FireExtinguisher: wc, Fish: Lc, FishOff: uc, FishSymbol: Ac, Flag: Pc, FlagOff: Sc, FlagTriangleLeft: fc, FlagTriangleRight: Zc, Flame: zc, FlameKindling: kc, Flashlight: Fc, FlashlightOff: Bc, FlaskConical: qc, FlaskConicalOff: Dc, FlaskRound: Rc, FlipHorizontal: Tc, FlipHorizontal2: bc, FlipVertical: Oc, FlipVertical2: Uc, Flower: Ec, Flower2: Ic, Focus: Gc, FoldHorizontal: Wc, FoldVertical: Xc, Folder: H8, FolderArchive: Nc, FolderCheck: Kc, FolderClock: Jc, FolderClosed: jc, FolderCode: Qc, FolderCog: O1, FolderCog2: O1, FolderDot: _c, FolderDown: Yc, FolderEdit: I1, FolderGit: a8, FolderGit2: $c, FolderHeart: t8, FolderInput: h8, FolderKanban: d8, FolderKey: p8, FolderLock: c8, FolderMinus: M8, FolderOpen: e8, FolderOpenDot: s8, FolderOutput: r8, FolderPen: I1, FolderPlus: v8, FolderRoot: n8, FolderSearch: i8, FolderSearch2: o8, FolderSymlink: l8, FolderSync: g8, FolderTree: x8, FolderUp: y8, FolderX: m8, Folders: V8, Footprints: C8, ForkKnife: T0, ForkKnifeCrossed: b0, Forklift: w8, FormInput: y2, Forward: u8, Frame: A8, Framer: L8, Frown: S8, Fuel: f8, Fullscreen: Z8, FunctionSquare: $2, GalleryHorizontal: k8, GalleryHorizontalEnd: P8, GalleryThumbnails: z8, GalleryVertical: F8, GalleryVerticalEnd: B8, Gamepad: q8, Gamepad2: D8, GanttChart: O, GanttChartSquare: n, Gauge: R8, GaugeCircle: c1, Gavel: b8, Gem: T8, Ghost: U8, Gift: O8, GitBranch: E8, GitBranchPlus: I8, GitCommit: E1, GitCommitHorizontal: E1, GitCommitVertical: G8, GitCompare: X8, GitCompareArrows: W8, GitFork: N8, GitGraph: K8, GitMerge: J8, GitPullRequest: a7, GitPullRequestArrow: j8, GitPullRequestClosed: Q8, GitPullRequestCreate: Y8, GitPullRequestCreateArrow: _8, GitPullRequestDraft: $8, Github: t7, Gitlab: h7, GlassWater: d7, Glasses: p7, Globe: M7, Globe2: P1, GlobeLock: c7, Goal: s7, Grab: e7, GraduationCap: r7, Grape: v7, Grid: v, Grid2X2: G1, Grid2x2: G1, Grid2x2Check: n7, Grid2x2X: o7, Grid3X3: v, Grid3x3: v, Grip: g7, GripHorizontal: i7, GripVertical: l7, Group: x7, Guitar: y7, Ham: m7, Hammer: H7, Hand: A7, HandCoins: V7, HandHeart: C7, HandHelping: W1, HandMetal: w7, HandPlatter: u7, Handshake: L7, HardDrive: Z7, HardDriveDownload: S7, HardDriveUpload: f7, HardHat: P7, Hash: k7, Haze: z7, HdmiPort: B7, Heading: U7, Heading1: F7, Heading2: D7, Heading3: q7, Heading4: R7, Heading5: b7, Heading6: T7, Headphones: O7, Headset: I7, Heart: N7, HeartCrack: E7, HeartHandshake: G7, HeartOff: W7, HeartPulse: X7, Heater: K7, HelpCircle: M1, HelpingHand: W1, Hexagon: J7, Highlighter: j7, History: Q7, Home: X1, Hop: Y7, HopOff: _7, Hospital: $7, Hotel: aM, Hourglass: tM, House: X1, HousePlug: hM, HousePlus: dM, IceCream: K1, IceCream2: N1, IceCreamBowl: N1, IceCreamCone: K1, IdCard: pM, Image: nM, ImageDown: cM, ImageMinus: MM, ImageOff: sM, ImagePlay: eM, ImagePlus: rM, ImageUp: vM, Images: oM, Import: iM, Inbox: lM, Indent: j1, IndentDecrease: J1, IndentIncrease: j1, IndianRupee: gM, Infinity: xM, Info: yM, Inspect: c0, InspectionPanel: mM, Instagram: HM, Italic: VM, IterationCcw: CM, IterationCw: wM, JapaneseYen: uM, Joystick: AM, Kanban: LM, KanbanSquare: a0, KanbanSquareDashed: J2, Key: ZM, KeyRound: SM, KeySquare: fM, Keyboard: zM, KeyboardMusic: PM, KeyboardOff: kM, Lamp: bM, LampCeiling: BM, LampDesk: FM, LampFloor: DM, LampWallDown: qM, LampWallUp: RM, LandPlot: TM, Landmark: UM, Languages: OM, Laptop: IM, Laptop2: Q1, LaptopMinimal: Q1, Lasso: GM, LassoSelect: EM, Laugh: WM, Layers: KM, Layers2: XM, Layers3: NM, Layout: i2, LayoutDashboard: JM, LayoutGrid: jM, LayoutList: QM, LayoutPanelLeft: _M, LayoutPanelTop: YM, LayoutTemplate: $M, Leaf: as, LeafyGreen: ts, Lectern: hs, LetterText: ds, Library: cs, LibraryBig: ps, LibrarySquare: t0, LifeBuoy: Ms, Ligature: ss, Lightbulb: rs, LightbulbOff: es, LineChart: b, Link: os, Link2: ns, Link2Off: vs, Linkedin: is, List: Ps, ListCheck: ls, ListChecks: gs, ListCollapse: xs, ListEnd: ys, ListFilter: ms, ListMinus: Hs, ListMusic: Vs, ListOrdered: Cs, ListPlus: ws, ListRestart: us, ListStart: As, ListTodo: Ls, ListTree: Ss, ListVideo: fs, ListX: Zs, Loader: zs, Loader2: _1, LoaderCircle: _1, LoaderPinwheel: ks, Locate: Ds, LocateFixed: Bs, LocateOff: Fs, Lock: Rs, LockKeyhole: qs, LockKeyholeOpen: Y1, LockOpen: $1, LogIn: bs, LogOut: Ts, Logs: Us, Lollipop: Os, Luggage: Is, MSquare: h0, Magnet: Es, Mail: _s, MailCheck: Gs, MailMinus: Ws, MailOpen: Xs, MailPlus: Ns, MailQuestion: Ks, MailSearch: Js, MailWarning: js, MailX: Qs, Mailbox: Ys, Mails: $s, Map: oe, MapPin: ve, MapPinCheck: te, MapPinCheckInside: ae, MapPinHouse: he, MapPinMinus: pe, MapPinMinusInside: de, MapPinOff: ce, MapPinPlus: se, MapPinPlusInside: Me, MapPinX: re, MapPinXInside: ee, MapPinned: ne, Martini: ie, Maximize: ge, Maximize2: le, Medal: xe, Megaphone: me, MegaphoneOff: ye, Meh: He, MemoryStick: Ve, Menu: Ce, MenuSquare: d0, Merge: we, MessageCircle: Fe, MessageCircleCode: ue, MessageCircleDashed: Ae, MessageCircleHeart: Le, MessageCircleMore: Se, MessageCircleOff: fe, MessageCirclePlus: Ze, MessageCircleQuestion: Pe, MessageCircleReply: ke, MessageCircleWarning: ze, MessageCircleX: Be, MessageSquare: Je, MessageSquareCode: De, MessageSquareDashed: qe, MessageSquareDiff: Re, MessageSquareDot: be, MessageSquareHeart: Te, MessageSquareMore: Ue, MessageSquareOff: Oe, MessageSquarePlus: Ie, MessageSquareQuote: Ee, MessageSquareReply: Ge, MessageSquareShare: We, MessageSquareText: Xe, MessageSquareWarning: Ne, MessageSquareX: Ke, MessagesSquare: je, Mic: _e, Mic2: a2, MicOff: Qe, MicVocal: a2, Microchip: Ye, Microscope: $e, Microwave: a9, Milestone: t9, Milk: d9, MilkOff: h9, Minimize: c9, Minimize2: p9, Minus: M9, MinusCircle: s1, MinusSquare: p0, Monitor: H9, MonitorCheck: s9, MonitorCog: e9, MonitorDot: r9, MonitorDown: v9, MonitorOff: n9, MonitorPause: o9, MonitorPlay: i9, MonitorSmartphone: l9, MonitorSpeaker: g9, MonitorStop: x9, MonitorUp: y9, MonitorX: m9, Moon: C9, MoonStar: V9, MoreHorizontal: z1, MoreVertical: k1, Mountain: u9, MountainSnow: w9, Mouse: P9, MouseOff: A9, MousePointer: Z9, MousePointer2: L9, MousePointerBan: S9, MousePointerClick: f9, MousePointerSquareDashed: j2, Move: E9, Move3D: t2, Move3d: t2, MoveDiagonal: z9, MoveDiagonal2: k9, MoveDown: D9, MoveDownLeft: B9, MoveDownRight: F9, MoveHorizontal: q9, MoveLeft: R9, MoveRight: b9, MoveUp: O9, MoveUpLeft: T9, MoveUpRight: U9, MoveVertical: I9, Music: N9, Music2: G9, Music3: W9, Music4: X9, Navigation: Q9, Navigation2: J9, Navigation2Off: K9, NavigationOff: j9, Network: _9, Newspaper: Y9, Nfc: $9, Notebook: dr, NotebookPen: ar, NotebookTabs: tr, NotebookText: hr, NotepadText: cr, NotepadTextDashed: pr, Nut: sr, NutOff: Mr, Octagon: er, OctagonAlert: h2, OctagonPause: d2, OctagonX: p2, Omega: rr, Option: vr, Orbit: nr, Origami: or, Outdent: J1, Package: Vr, Package2: ir, PackageCheck: lr, PackageMinus: gr, PackageOpen: xr, PackagePlus: yr, PackageSearch: mr, PackageX: Hr, PaintBucket: Cr, PaintRoller: wr, Paintbrush: ur, Paintbrush2: c2, PaintbrushVertical: c2, Palette: Ar, Palmtree: S0, PanelBottom: fr, PanelBottomClose: Lr, PanelBottomDashed: M2, PanelBottomInactive: M2, PanelBottomOpen: Sr, PanelLeft: v2, PanelLeftClose: s2, PanelLeftDashed: e2, PanelLeftInactive: e2, PanelLeftOpen: r2, PanelRight: kr, PanelRightClose: Zr, PanelRightDashed: n2, PanelRightInactive: n2, PanelRightOpen: Pr, PanelTop: Fr, PanelTopClose: zr, PanelTopDashed: o2, PanelTopInactive: o2, PanelTopOpen: Br, PanelsLeftBottom: Dr, PanelsLeftRight: S1, PanelsRightBottom: qr, PanelsTopBottom: V2, PanelsTopLeft: i2, Paperclip: Rr, Parentheses: br, ParkingCircle: r1, ParkingCircleOff: e1, ParkingMeter: Tr, ParkingSquare: s0, ParkingSquareOff: M0, PartyPopper: Ur, Pause: Or, PauseCircle: v1, PauseOctagon: d2, PawPrint: Ir, PcCase: Er, Pen: g2, PenBox: e, PenLine: l2, PenOff: Gr, PenSquare: e, PenTool: Wr, Pencil: Jr, PencilLine: Xr, PencilOff: Nr, PencilRuler: Kr, Pentagon: jr, Percent: Qr, PercentCircle: n1, PercentDiamond: Z1, PercentSquare: e0, PersonStanding: _r, PhilippinePeso: Yr, Phone: cv, PhoneCall: $r, PhoneForwarded: av, PhoneIncoming: tv, PhoneMissed: hv, PhoneOff: dv, PhoneOutgoing: pv, Pi: Mv, PiSquare: r0, Piano: sv, Pickaxe: ev, PictureInPicture: vv, PictureInPicture2: rv, PieChart: I, PiggyBank: nv, Pilcrow: lv, PilcrowLeft: ov, PilcrowRight: iv, PilcrowSquare: v0, Pill: xv, PillBottle: gv, Pin: mv, PinOff: yv, Pipette: Hv, Pizza: Vv, Plane: uv, PlaneLanding: Cv, PlaneTakeoff: wv, Play: Av, PlayCircle: o1, PlaySquare: n0, Plug: Sv, Plug2: Lv, PlugZap: x2, PlugZap2: x2, Plus: fv, PlusCircle: i1, PlusSquare: o0, Pocket: Pv, PocketKnife: Zv, Podcast: kv, Pointer: Bv, PointerOff: zv, Popcorn: Fv, Popsicle: Dv, PoundSterling: qv, Power: bv, PowerCircle: l1, PowerOff: Rv, PowerSquare: i0, Presentation: Tv, Printer: Ov, PrinterCheck: Uv, Projector: Iv, Proportions: Ev, Puzzle: Gv, Pyramid: Wv, QrCode: Xv, Quote: Nv, Rabbit: Kv, Radar: Jv, Radiation: jv, Radical: Qv, Radio: $v, RadioReceiver: _v, RadioTower: Yv, Radius: an, RailSymbol: tn, Rainbow: hn, Rat: dn, Ratio: pn, Receipt: ln, ReceiptCent: cn, ReceiptEuro: Mn, ReceiptIndianRupee: sn, ReceiptJapaneseYen: en, ReceiptPoundSterling: rn, ReceiptRussianRuble: vn, ReceiptSwissFranc: nn, ReceiptText: on, RectangleEllipsis: y2, RectangleHorizontal: gn, RectangleVertical: xn, Recycle: yn, Redo: Vn, Redo2: mn, RedoDot: Hn, RefreshCcw: wn, RefreshCcwDot: Cn, RefreshCw: An, RefreshCwOff: un, Refrigerator: Ln, Regex: Sn, RemoveFormatting: fn, Repeat: kn, Repeat1: Zn, Repeat2: Pn, Replace: Bn, ReplaceAll: zn, Reply: Dn, ReplyAll: Fn, Rewind: qn, Ribbon: Rn, Rocket: bn, RockingChair: Tn, RollerCoaster: Un, Rotate3D: m2, Rotate3d: m2, RotateCcw: In, RotateCcwSquare: On, RotateCw: Gn, RotateCwSquare: En, Route: Xn, RouteOff: Wn, Router: Nn, Rows: H2, Rows2: H2, Rows3: V2, Rows4: Kn, Rss: Jn, Ruler: jn, RussianRuble: Qn, Sailboat: _n, Salad: Yn, Sandwich: $n, Satellite: to, SatelliteDish: ao, Save: co, SaveAll: ho, SaveOff: po, Scale: Mo, Scale3D: C2, Scale3d: C2, Scaling: so, Scan: go, ScanBarcode: eo, ScanEye: ro, ScanFace: vo, ScanLine: no, ScanQrCode: oo, ScanSearch: io, ScanText: lo, ScatterChart: E, School: xo, School2: P0, Scissors: mo, ScissorsLineDashed: yo, ScissorsSquare: l0, ScissorsSquareDashedBottom: O2, ScreenShare: Vo, ScreenShareOff: Ho, Scroll: wo, ScrollText: Co, Search: fo, SearchCheck: uo, SearchCode: Ao, SearchSlash: Lo, SearchX: So, Section: Zo, Send: ko, SendHorizonal: w2, SendHorizontal: w2, SendToBack: Po, SeparatorHorizontal: zo, SeparatorVertical: Bo, Server: Ro, ServerCog: Fo, ServerCrash: Do, ServerOff: qo, Settings: To, Settings2: bo, Shapes: Uo, Share: Io, Share2: Oo, Sheet: Eo, Shell: Go, Shield: $o, ShieldAlert: Wo, ShieldBan: Xo, ShieldCheck: No, ShieldClose: u2, ShieldEllipsis: Ko, ShieldHalf: Jo, ShieldMinus: jo, ShieldOff: Qo, ShieldPlus: _o, ShieldQuestion: Yo, ShieldX: u2, Ship: ti, ShipWheel: ai, Shirt: hi, ShoppingBag: di, ShoppingBasket: pi, ShoppingCart: ci, Shovel: Mi, ShowerHead: si, Shrink: ei, Shrub: ri, Shuffle: vi, Sidebar: v2, SidebarClose: s2, SidebarOpen: r2, Sigma: ni, SigmaSquare: g0, Signal: xi, SignalHigh: oi, SignalLow: ii, SignalMedium: li, SignalZero: gi, Signature: yi, Signpost: Hi, SignpostBig: mi, Siren: Vi, SkipBack: Ci, SkipForward: wi, Skull: ui, Slack: Ai, Slash: Li, SlashSquare: x0, Slice: Si, Sliders: A2, SlidersHorizontal: fi, SlidersVertical: A2, Smartphone: ki, SmartphoneCharging: Zi, SmartphoneNfc: Pi, Smile: Bi, SmilePlus: zi, Snail: Fi, Snowflake: Di, Sofa: qi, SortAsc: C, SortDesc: m, Soup: Ri, Space: bi, Spade: Ti, Sparkle: Ui, Sparkles: L2, Speaker: Oi, Speech: Ii, SpellCheck: Gi, SpellCheck2: Ei, Spline: Wi, Split: Xi, SplitSquareHorizontal: y0, SplitSquareVertical: m0, SprayCan: Ni, Sprout: Ki, Square: $i, SquareActivity: S2, SquareArrowDown: P2, SquareArrowDownLeft: f2, SquareArrowDownRight: Z2, SquareArrowLeft: k2, SquareArrowOutDownLeft: z2, SquareArrowOutDownRight: B2, SquareArrowOutUpLeft: F2, SquareArrowOutUpRight: D2, SquareArrowRight: q2, SquareArrowUp: T2, SquareArrowUpLeft: R2, SquareArrowUpRight: b2, SquareAsterisk: U2, SquareBottomDashedScissors: O2, SquareChartGantt: n, SquareCheck: E2, SquareCheckBig: I2, SquareChevronDown: G2, SquareChevronLeft: W2, SquareChevronRight: X2, SquareChevronUp: N2, SquareCode: K2, SquareDashedBottom: ji, SquareDashedBottomCode: Ji, SquareDashedKanban: J2, SquareDashedMousePointer: j2, SquareDivide: Q2, SquareDot: _2, SquareEqual: Y2, SquareFunction: $2, SquareGanttChart: n, SquareKanban: a0, SquareLibrary: t0, SquareM: h0, SquareMenu: d0, SquareMinus: p0, SquareMousePointer: c0, SquareParking: s0, SquareParkingOff: M0, SquarePen: e, SquarePercent: e0, SquarePi: r0, SquarePilcrow: v0, SquarePlay: n0, SquarePlus: o0, SquarePower: i0, SquareRadical: Qi, SquareScissors: l0, SquareSigma: g0, SquareSlash: x0, SquareSplitHorizontal: y0, SquareSplitVertical: m0, SquareSquare: _i, SquareStack: Yi, SquareTerminal: H0, SquareUser: C0, SquareUserRound: V0, SquareX: w0, Squircle: al, Squirrel: tl, Stamp: hl, Star: cl, StarHalf: dl, StarOff: pl, Stars: L2, StepBack: Ml, StepForward: sl, Stethoscope: el, Sticker: rl, StickyNote: vl, StopCircle: x1, Store: nl, StretchHorizontal: ol, StretchVertical: il, Strikethrough: ll, Subscript: gl, Subtitles: P, Sun: Vl, SunDim: xl, SunMedium: yl, SunMoon: ml, SunSnow: Hl, Sunrise: Cl, Sunset: wl, Superscript: ul, SwatchBook: Al, SwissFranc: Ll, SwitchCamera: Sl, Sword: fl, Swords: Zl, Syringe: Pl, Table: bl, Table2: kl, TableCellsMerge: zl, TableCellsSplit: Bl, TableColumnsSplit: Fl, TableOfContents: Dl, TableProperties: ql, TableRowsSplit: Rl, Tablet: Ul, TabletSmartphone: Tl, Tablets: Ol, Tag: Il, Tags: El, Tally1: Gl, Tally2: Wl, Tally3: Xl, Tally4: Nl, Tally5: Kl, Tangent: Jl, Target: jl, Telescope: Ql, Tent: Yl, TentTree: _l, Terminal: $l, TerminalSquare: H0, TestTube: ag, TestTube2: u0, TestTubeDiagonal: u0, TestTubes: tg, Text: Mg, TextCursor: dg, TextCursorInput: hg, TextQuote: pg, TextSearch: cg, TextSelect: A0, TextSelection: A0, Theater: sg, Thermometer: vg, ThermometerSnowflake: eg, ThermometerSun: rg, ThumbsDown: ng, ThumbsUp: og, Ticket: Hg, TicketCheck: ig, TicketMinus: lg, TicketPercent: gg, TicketPlus: xg, TicketSlash: yg, TicketX: mg, Tickets: Cg, TicketsPlane: Vg, Timer: Ag, TimerOff: wg, TimerReset: ug, ToggleLeft: Lg, ToggleRight: Sg, Tornado: fg, Torus: Zg, Touchpad: kg, TouchpadOff: Pg, TowerControl: zg, ToyBrick: Bg, Tractor: Fg, TrafficCone: Dg, Train: L0, TrainFront: Rg, TrainFrontTunnel: qg, TrainTrack: bg, TramFront: L0, Trash: Ug, Trash2: Tg, TreeDeciduous: Og, TreePalm: S0, TreePine: Ig, Trees: Eg, Trello: Gg, TrendingDown: Wg, TrendingUp: Xg, Triangle: Kg, TriangleAlert: f0, TriangleRight: Ng, Trophy: Jg, Truck: jg, Turtle: Qg, Tv: Yg, Tv2: Z0, TvMinimal: Z0, TvMinimalPlay: _g, Twitch: $g, Twitter: ax, Type: hx, TypeOutline: tx, Umbrella: px, UmbrellaOff: dx, Underline: cx, Undo: ex, Undo2: Mx, UndoDot: sx, UnfoldHorizontal: rx, UnfoldVertical: vx, Ungroup: nx, University: P0, Unlink: ix, Unlink2: ox, Unlock: $1, UnlockKeyhole: Y1, Unplug: lx, Upload: gx, UploadCloud: u1, Usb: xx, User: Sx, User2: q0, UserCheck: yx, UserCheck2: k0, UserCircle: m1, UserCircle2: y1, UserCog: mx, UserCog2: z0, UserMinus: Hx, UserMinus2: B0, UserPen: Vx, UserPlus: Cx, UserPlus2: F0, UserRound: q0, UserRoundCheck: k0, UserRoundCog: z0, UserRoundMinus: B0, UserRoundPen: wx, UserRoundPlus: F0, UserRoundSearch: ux, UserRoundX: D0, UserSearch: Ax, UserSquare: C0, UserSquare2: V0, UserX: Lx, UserX2: D0, Users: fx, Users2: R0, UsersRound: R0, Utensils: T0, UtensilsCrossed: b0, UtilityPole: Zx, Variable: Px, Vault: kx, Vegan: zx, VenetianMask: Bx, Verified: A, Vibrate: Dx, VibrateOff: Fx, Video: Rx, VideoOff: qx, Videotape: bx, View: Tx, Voicemail: Ux, Volume: Gx, Volume1: Ox, Volume2: Ix, VolumeX: Ex, Vote: Wx, Wallet: Nx, Wallet2: U0, WalletCards: Xx, WalletMinimal: U0, Wallpaper: Kx, Wand: Jx, Wand2: O0, WandSparkles: O0, Warehouse: jx, WashingMachine: Qx, Watch: _x, Waves: Yx, Waypoints: $x, Webcam: ay, Webhook: hy, WebhookOff: ty, Weight: dy, Wheat: cy, WheatOff: py, WholeWord: My, Wifi: ny, WifiHigh: sy, WifiLow: ey, WifiOff: ry, WifiZero: vy, Wind: oy, Wine: ly, WineOff: iy, Workflow: gy, Worm: xy, WrapText: yy, Wrench: my, X: Hy, XCircle: H1, XOctagon: p2, XSquare: w0, Youtube: Vy, Zap: wy, ZapOff: Cy, ZoomIn: uy, ZoomOut: Ay }, Symbol.toStringTag, { value: "Module" }));
  const qy = Object.freeze(Object.defineProperty({ __proto__: null, AArrowDown: W0, AArrowUp: X0, ALargeSmall: N0, Accessibility: K0, Activity: J0, ActivitySquare: S2, AirVent: j0, Airplay: Q0, AlarmCheck: l, AlarmClock: Y0, AlarmClockCheck: l, AlarmClockMinus: g, AlarmClockOff: _0, AlarmClockPlus: x, AlarmMinus: g, AlarmPlus: x, AlarmSmoke: $0, Album: aa, AlertCircle: G, AlertOctagon: h2, AlertTriangle: f0, AlignCenter: da, AlignCenterHorizontal: ta, AlignCenterVertical: ha, AlignEndHorizontal: pa, AlignEndVertical: ca, AlignHorizontalDistributeCenter: Ma, AlignHorizontalDistributeEnd: sa, AlignHorizontalDistributeStart: ea, AlignHorizontalJustifyCenter: ra, AlignHorizontalJustifyEnd: va, AlignHorizontalJustifyStart: na, AlignHorizontalSpaceAround: oa, AlignHorizontalSpaceBetween: ia, AlignJustify: la, AlignLeft: ga, AlignRight: xa, AlignStartHorizontal: ya, AlignStartVertical: ma, AlignVerticalDistributeCenter: Ha, AlignVerticalDistributeEnd: Va, AlignVerticalDistributeStart: Ca, AlignVerticalJustifyCenter: wa, AlignVerticalJustifyEnd: ua, AlignVerticalJustifyStart: Aa, AlignVerticalSpaceAround: La, AlignVerticalSpaceBetween: Sa, Ambulance: fa, Ampersand: Za, Ampersands: Pa, Amphora: ka, Anchor: za, Angry: Ba, Annoyed: Fa, Antenna: Da, Anvil: qa, Aperture: Ra, AppWindow: Ta, AppWindowMac: ba, Apple: Ua, Archive: Ea, ArchiveRestore: Oa, ArchiveX: Ia, AreaChart: k, Armchair: Ga, ArrowBigDown: Xa, ArrowBigDownDash: Wa, ArrowBigLeft: Ka, ArrowBigLeftDash: Na, ArrowBigRight: ja, ArrowBigRightDash: Ja, ArrowBigUp: _a, ArrowBigUpDash: Qa, ArrowDown: st, ArrowDown01: Ya, ArrowDown10: $a, ArrowDownAZ: y, ArrowDownAz: y, ArrowDownCircle: W, ArrowDownFromLine: at, ArrowDownLeft: tt, ArrowDownLeftFromCircle: N, ArrowDownLeftFromSquare: z2, ArrowDownLeftSquare: f2, ArrowDownNarrowWide: ht, ArrowDownRight: dt, ArrowDownRightFromCircle: K, ArrowDownRightFromSquare: B2, ArrowDownRightSquare: Z2, ArrowDownSquare: P2, ArrowDownToDot: pt, ArrowDownToLine: ct, ArrowDownUp: Mt, ArrowDownWideNarrow: m, ArrowDownZA: H, ArrowDownZa: H, ArrowLeft: nt, ArrowLeftCircle: X, ArrowLeftFromLine: et, ArrowLeftRight: rt, ArrowLeftSquare: k2, ArrowLeftToLine: vt, ArrowRight: gt, ArrowRightCircle: Q, ArrowRightFromLine: ot, ArrowRightLeft: it, ArrowRightSquare: q2, ArrowRightToLine: lt, ArrowUp: Lt, ArrowUp01: xt, ArrowUp10: yt, ArrowUpAZ: V, ArrowUpAz: V, ArrowUpCircle: _, ArrowUpDown: mt, ArrowUpFromDot: Ht, ArrowUpFromLine: Vt, ArrowUpLeft: Ct, ArrowUpLeftFromCircle: J, ArrowUpLeftFromSquare: F2, ArrowUpLeftSquare: R2, ArrowUpNarrowWide: C, ArrowUpRight: wt, ArrowUpRightFromCircle: j, ArrowUpRightFromSquare: D2, ArrowUpRightSquare: b2, ArrowUpSquare: T2, ArrowUpToLine: ut, ArrowUpWideNarrow: At, ArrowUpZA: w, ArrowUpZa: w, ArrowsUpFromLine: St, Asterisk: ft, AsteriskSquare: U2, AtSign: Zt, Atom: Pt, AudioLines: kt, AudioWaveform: zt, Award: Bt, Axe: Ft, Axis3D: u, Axis3d: u, Baby: Dt, Backpack: qt, Badge: _t, BadgeAlert: Rt, BadgeCent: bt, BadgeCheck: A, BadgeDollarSign: Tt, BadgeEuro: Ut, BadgeHelp: Ot, BadgeIndianRupee: It, BadgeInfo: Et, BadgeJapaneseYen: Gt, BadgeMinus: Wt, BadgePercent: Xt, BadgePlus: Nt, BadgePoundSterling: Kt, BadgeRussianRuble: Jt, BadgeSwissFranc: jt, BadgeX: Qt, BaggageClaim: Yt, Ban: $t, Banana: ah, Bandage: th, Banknote: hh, BarChart: T, BarChart2: U, BarChart3: R, BarChart4: q, BarChartBig: D, BarChartHorizontal: B, BarChartHorizontalBig: z, Barcode: dh, Baseline: ph, Bath: ch, Battery: nh, BatteryCharging: Mh, BatteryFull: sh, BatteryLow: eh, BatteryMedium: rh, BatteryWarning: vh, Beaker: oh, Bean: lh, BeanOff: ih, Bed: yh, BedDouble: gh, BedSingle: xh, Beef: mh, Beer: Vh, BeerOff: Hh, Bell: fh, BellDot: Ch, BellElectric: wh, BellMinus: uh, BellOff: Ah, BellPlus: Lh, BellRing: Sh, BetweenHorizonalEnd: L, BetweenHorizonalStart: S, BetweenHorizontalEnd: L, BetweenHorizontalStart: S, BetweenVerticalEnd: Zh, BetweenVerticalStart: Ph, BicepsFlexed: kh, Bike: zh, Binary: Bh, Binoculars: Fh, Biohazard: Dh, Bird: qh, Bitcoin: Rh, Blend: bh, Blinds: Th, Blocks: Uh, Bluetooth: Gh, BluetoothConnected: Oh, BluetoothOff: Ih, BluetoothSearching: Eh, Bold: Wh, Bolt: Xh, Bomb: Nh, Bone: Kh, Book: x4, BookA: Jh, BookAudio: jh, BookCheck: Qh, BookCopy: _h, BookDashed: f, BookDown: Yh, BookHeadphones: $h, BookHeart: a4, BookImage: t4, BookKey: h4, BookLock: d4, BookMarked: p4, BookMinus: c4, BookOpen: e4, BookOpenCheck: M4, BookOpenText: s4, BookPlus: r4, BookTemplate: f, BookText: v4, BookType: n4, BookUp: i4, BookUp2: o4, BookUser: l4, BookX: g4, Bookmark: C4, BookmarkCheck: y4, BookmarkMinus: m4, BookmarkPlus: H4, BookmarkX: V4, BoomBox: w4, Bot: L4, BotMessageSquare: u4, BotOff: A4, Box: f4, BoxSelect: S4, Boxes: Z4, Braces: Z, Brackets: P4, Brain: B4, BrainCircuit: k4, BrainCog: z4, BrickWall: F4, Briefcase: R4, BriefcaseBusiness: D4, BriefcaseMedical: q4, BringToFront: b4, Brush: T4, Bug: I4, BugOff: U4, BugPlay: O4, Building: G4, Building2: E4, Bus: X4, BusFront: W4, Cable: K4, CableCar: N4, Cake: j4, CakeSlice: J4, Calculator: Q4, Calendar: g5, CalendarArrowDown: _4, CalendarArrowUp: Y4, CalendarCheck: a5, CalendarCheck2: $4, CalendarClock: t5, CalendarCog: h5, CalendarDays: d5, CalendarFold: p5, CalendarHeart: c5, CalendarMinus: s5, CalendarMinus2: M5, CalendarOff: e5, CalendarPlus: v5, CalendarPlus2: r5, CalendarRange: n5, CalendarSearch: o5, CalendarX: l5, CalendarX2: i5, Camera: y5, CameraOff: x5, CandlestickChart: F, Candy: V5, CandyCane: m5, CandyOff: H5, Cannabis: C5, Captions: P, CaptionsOff: w5, Car: L5, CarFront: u5, CarTaxiFront: A5, Caravan: S5, Carrot: f5, CaseLower: Z5, CaseSensitive: P5, CaseUpper: k5, CassetteTape: z5, Cast: B5, Castle: F5, Cat: D5, Cctv: q5, ChartArea: k, ChartBar: B, ChartBarBig: z, ChartBarDecreasing: R5, ChartBarIncreasing: b5, ChartBarStacked: T5, ChartCandlestick: F, ChartColumn: R, ChartColumnBig: D, ChartColumnDecreasing: U5, ChartColumnIncreasing: q, ChartColumnStacked: O5, ChartLine: b, ChartNetwork: I5, ChartNoAxesColumn: U, ChartNoAxesColumnDecreasing: E5, ChartNoAxesColumnIncreasing: T, ChartNoAxesCombined: G5, ChartNoAxesGantt: O, ChartPie: I, ChartScatter: E, ChartSpline: W5, Check: N5, CheckCheck: X5, CheckCircle: Y, CheckCircle2: $, CheckSquare: I2, CheckSquare2: E2, ChefHat: K5, Cherry: J5, ChevronDown: j5, ChevronDownCircle: a1, ChevronDownSquare: G2, ChevronFirst: Q5, ChevronLast: _5, ChevronLeft: Y5, ChevronLeftCircle: t1, ChevronLeftSquare: W2, ChevronRight: $5, ChevronRightCircle: h1, ChevronRightSquare: X2, ChevronUp: a3, ChevronUpCircle: d1, ChevronUpSquare: N2, ChevronsDown: h3, ChevronsDownUp: t3, ChevronsLeft: c3, ChevronsLeftRight: p3, ChevronsLeftRightEllipsis: d3, ChevronsRight: s3, ChevronsRightLeft: M3, ChevronsUp: r3, ChevronsUpDown: e3, Chrome: v3, Church: n3, Cigarette: i3, CigaretteOff: o3, Circle: A3, CircleAlert: G, CircleArrowDown: W, CircleArrowLeft: X, CircleArrowOutDownLeft: N, CircleArrowOutDownRight: K, CircleArrowOutUpLeft: J, CircleArrowOutUpRight: j, CircleArrowRight: Q, CircleArrowUp: _, CircleCheck: $, CircleCheckBig: Y, CircleChevronDown: a1, CircleChevronLeft: t1, CircleChevronRight: h1, CircleChevronUp: d1, CircleDashed: l3, CircleDivide: p1, CircleDollarSign: g3, CircleDot: y3, CircleDotDashed: x3, CircleEllipsis: m3, CircleEqual: H3, CircleFadingArrowUp: V3, CircleFadingPlus: C3, CircleGauge: c1, CircleHelp: M1, CircleMinus: s1, CircleOff: w3, CircleParking: r1, CircleParkingOff: e1, CirclePause: v1, CirclePercent: n1, CirclePlay: o1, CirclePlus: i1, CirclePower: l1, CircleSlash: u3, CircleSlash2: g1, CircleSlashed: g1, CircleStop: x1, CircleUser: m1, CircleUserRound: y1, CircleX: H1, CircuitBoard: L3, Citrus: S3, Clapperboard: f3, Clipboard: R3, ClipboardCheck: Z3, ClipboardCopy: P3, ClipboardEdit: C1, ClipboardList: k3, ClipboardMinus: z3, ClipboardPaste: B3, ClipboardPen: C1, ClipboardPenLine: V1, ClipboardPlus: F3, ClipboardSignature: V1, ClipboardType: D3, ClipboardX: q3, Clock: _3, Clock1: b3, Clock10: T3, Clock11: U3, Clock12: O3, Clock2: I3, Clock3: E3, Clock4: G3, Clock5: W3, Clock6: X3, Clock7: N3, Clock8: K3, Clock9: J3, ClockArrowDown: j3, ClockArrowUp: Q3, Cloud: nd, CloudCog: Y3, CloudDownload: w1, CloudDrizzle: $3, CloudFog: ad, CloudHail: td, CloudLightning: hd, CloudMoon: pd, CloudMoonRain: dd, CloudOff: cd, CloudRain: sd, CloudRainWind: Md, CloudSnow: ed, CloudSun: vd, CloudSunRain: rd, CloudUpload: u1, Cloudy: od, Clover: id, Club: ld, Code: gd, Code2: A1, CodeSquare: K2, CodeXml: A1, Codepen: xd, Codesandbox: yd, Coffee: md, Cog: Hd, Coins: Vd, Columns: L1, Columns2: L1, Columns3: S1, Columns4: Cd, Combine: wd, Command: ud, Compass: Ad, Component: Ld, Computer: Sd, ConciergeBell: fd, Cone: Zd, Construction: Pd, Contact: kd, Contact2: f1, ContactRound: f1, Container: zd, Contrast: Bd, Cookie: Fd, CookingPot: Dd, Copy: Od, CopyCheck: qd, CopyMinus: Rd, CopyPlus: bd, CopySlash: Td, CopyX: Ud, Copyleft: Id, Copyright: Ed, CornerDownLeft: Gd, CornerDownRight: Wd, CornerLeftDown: Xd, CornerLeftUp: Nd, CornerRightDown: Kd, CornerRightUp: Jd, CornerUpLeft: jd, CornerUpRight: Qd, Cpu: _d, CreativeCommons: Yd, CreditCard: $d, Croissant: ap, Crop: tp, Cross: hp, Crosshair: dp, Crown: pp, Cuboid: cp, CupSoda: Mp, CurlyBraces: Z, Currency: sp, Cylinder: ep, Dam: rp, Database: op, DatabaseBackup: vp, DatabaseZap: np, Delete: ip, Dessert: lp, Diameter: gp, Diamond: mp, DiamondMinus: xp, DiamondPercent: Z1, DiamondPlus: yp, Dice1: Hp, Dice2: Vp, Dice3: Cp, Dice4: wp, Dice5: up, Dice6: Ap, Dices: Lp, Diff: Sp, Disc: kp, Disc2: fp, Disc3: Zp, DiscAlbum: Pp, Divide: zp, DivideCircle: p1, DivideSquare: Q2, Dna: Fp, DnaOff: Bp, Dock: Dp, Dog: qp, DollarSign: Rp, Donut: bp, DoorClosed: Tp, DoorOpen: Up, Dot: Op, DotSquare: _2, Download: Ip, DownloadCloud: w1, DraftingCompass: Ep, Drama: Gp, Dribbble: Wp, Drill: Xp, Droplet: Np, Droplets: Kp, Drum: Jp, Drumstick: jp, Dumbbell: Qp, Ear: Yp, EarOff: _p, Earth: P1, EarthLock: $p, Eclipse: a6, Edit: e, Edit2: g2, Edit3: l2, Egg: d6, EggFried: t6, EggOff: h6, Ellipsis: z1, EllipsisVertical: k1, Equal: c6, EqualNot: p6, EqualSquare: Y2, Eraser: M6, EthernetPort: s6, Euro: e6, Expand: r6, ExternalLink: v6, Eye: o6, EyeOff: n6, Facebook: i6, Factory: l6, Fan: g6, FastForward: x6, Feather: y6, Fence: m6, FerrisWheel: H6, Figma: V6, File: xc, FileArchive: C6, FileAudio: u6, FileAudio2: w6, FileAxis3D: B1, FileAxis3d: B1, FileBadge: L6, FileBadge2: A6, FileBarChart: F1, FileBarChart2: D1, FileBox: S6, FileChartColumn: D1, FileChartColumnIncreasing: F1, FileChartLine: q1, FileChartPie: R1, FileCheck: Z6, FileCheck2: f6, FileClock: P6, FileCode: z6, FileCode2: k6, FileCog: b1, FileCog2: b1, FileDiff: B6, FileDigit: F6, FileDown: D6, FileEdit: U1, FileHeart: q6, FileImage: R6, FileInput: b6, FileJson: U6, FileJson2: T6, FileKey: I6, FileKey2: O6, FileLineChart: q1, FileLock: G6, FileLock2: E6, FileMinus: X6, FileMinus2: W6, FileMusic: N6, FileOutput: K6, FilePen: U1, FilePenLine: T1, FilePieChart: R1, FilePlus: j6, FilePlus2: J6, FileQuestion: Q6, FileScan: _6, FileSearch: $6, FileSearch2: Y6, FileSignature: T1, FileSliders: ac, FileSpreadsheet: tc, FileStack: hc, FileSymlink: dc, FileTerminal: pc, FileText: cc, FileType: sc, FileType2: Mc, FileUp: ec, FileVideo: vc, FileVideo2: rc, FileVolume: oc, FileVolume2: nc, FileWarning: ic, FileX: gc, FileX2: lc, Files: yc, Film: mc, Filter: Vc, FilterX: Hc, Fingerprint: Cc, FireExtinguisher: wc, Fish: Lc, FishOff: uc, FishSymbol: Ac, Flag: Pc, FlagOff: Sc, FlagTriangleLeft: fc, FlagTriangleRight: Zc, Flame: zc, FlameKindling: kc, Flashlight: Fc, FlashlightOff: Bc, FlaskConical: qc, FlaskConicalOff: Dc, FlaskRound: Rc, FlipHorizontal: Tc, FlipHorizontal2: bc, FlipVertical: Oc, FlipVertical2: Uc, Flower: Ec, Flower2: Ic, Focus: Gc, FoldHorizontal: Wc, FoldVertical: Xc, Folder: H8, FolderArchive: Nc, FolderCheck: Kc, FolderClock: Jc, FolderClosed: jc, FolderCode: Qc, FolderCog: O1, FolderCog2: O1, FolderDot: _c, FolderDown: Yc, FolderEdit: I1, FolderGit: a8, FolderGit2: $c, FolderHeart: t8, FolderInput: h8, FolderKanban: d8, FolderKey: p8, FolderLock: c8, FolderMinus: M8, FolderOpen: e8, FolderOpenDot: s8, FolderOutput: r8, FolderPen: I1, FolderPlus: v8, FolderRoot: n8, FolderSearch: i8, FolderSearch2: o8, FolderSymlink: l8, FolderSync: g8, FolderTree: x8, FolderUp: y8, FolderX: m8, Folders: V8, Footprints: C8, ForkKnife: T0, ForkKnifeCrossed: b0, Forklift: w8, FormInput: y2, Forward: u8, Frame: A8, Framer: L8, Frown: S8, Fuel: f8, Fullscreen: Z8, FunctionSquare: $2, GalleryHorizontal: k8, GalleryHorizontalEnd: P8, GalleryThumbnails: z8, GalleryVertical: F8, GalleryVerticalEnd: B8, Gamepad: q8, Gamepad2: D8, GanttChart: O, GanttChartSquare: n, Gauge: R8, GaugeCircle: c1, Gavel: b8, Gem: T8, Ghost: U8, Gift: O8, GitBranch: E8, GitBranchPlus: I8, GitCommit: E1, GitCommitHorizontal: E1, GitCommitVertical: G8, GitCompare: X8, GitCompareArrows: W8, GitFork: N8, GitGraph: K8, GitMerge: J8, GitPullRequest: a7, GitPullRequestArrow: j8, GitPullRequestClosed: Q8, GitPullRequestCreate: Y8, GitPullRequestCreateArrow: _8, GitPullRequestDraft: $8, Github: t7, Gitlab: h7, GlassWater: d7, Glasses: p7, Globe: M7, Globe2: P1, GlobeLock: c7, Goal: s7, Grab: e7, GraduationCap: r7, Grape: v7, Grid: v, Grid2X2: G1, Grid2x2: G1, Grid2x2Check: n7, Grid2x2X: o7, Grid3X3: v, Grid3x3: v, Grip: g7, GripHorizontal: i7, GripVertical: l7, Group: x7, Guitar: y7, Ham: m7, Hammer: H7, Hand: A7, HandCoins: V7, HandHeart: C7, HandHelping: W1, HandMetal: w7, HandPlatter: u7, Handshake: L7, HardDrive: Z7, HardDriveDownload: S7, HardDriveUpload: f7, HardHat: P7, Hash: k7, Haze: z7, HdmiPort: B7, Heading: U7, Heading1: F7, Heading2: D7, Heading3: q7, Heading4: R7, Heading5: b7, Heading6: T7, Headphones: O7, Headset: I7, Heart: N7, HeartCrack: E7, HeartHandshake: G7, HeartOff: W7, HeartPulse: X7, Heater: K7, HelpCircle: M1, HelpingHand: W1, Hexagon: J7, Highlighter: j7, History: Q7, Home: X1, Hop: Y7, HopOff: _7, Hospital: $7, Hotel: aM, Hourglass: tM, House: X1, HousePlug: hM, HousePlus: dM, IceCream: K1, IceCream2: N1, IceCreamBowl: N1, IceCreamCone: K1, IdCard: pM, Image: nM, ImageDown: cM, ImageMinus: MM, ImageOff: sM, ImagePlay: eM, ImagePlus: rM, ImageUp: vM, Images: oM, Import: iM, Inbox: lM, Indent: j1, IndentDecrease: J1, IndentIncrease: j1, IndianRupee: gM, Infinity: xM, Info: yM, Inspect: c0, InspectionPanel: mM, Instagram: HM, Italic: VM, IterationCcw: CM, IterationCw: wM, JapaneseYen: uM, Joystick: AM, Kanban: LM, KanbanSquare: a0, KanbanSquareDashed: J2, Key: ZM, KeyRound: SM, KeySquare: fM, Keyboard: zM, KeyboardMusic: PM, KeyboardOff: kM, Lamp: bM, LampCeiling: BM, LampDesk: FM, LampFloor: DM, LampWallDown: qM, LampWallUp: RM, LandPlot: TM, Landmark: UM, Languages: OM, Laptop: IM, Laptop2: Q1, LaptopMinimal: Q1, Lasso: GM, LassoSelect: EM, Laugh: WM, Layers: KM, Layers2: XM, Layers3: NM, Layout: i2, LayoutDashboard: JM, LayoutGrid: jM, LayoutList: QM, LayoutPanelLeft: _M, LayoutPanelTop: YM, LayoutTemplate: $M, Leaf: as, LeafyGreen: ts, Lectern: hs, LetterText: ds, Library: cs, LibraryBig: ps, LibrarySquare: t0, LifeBuoy: Ms, Ligature: ss, Lightbulb: rs, LightbulbOff: es, LineChart: b, Link: os, Link2: ns, Link2Off: vs, Linkedin: is, List: Ps, ListCheck: ls, ListChecks: gs, ListCollapse: xs, ListEnd: ys, ListFilter: ms, ListMinus: Hs, ListMusic: Vs, ListOrdered: Cs, ListPlus: ws, ListRestart: us, ListStart: As, ListTodo: Ls, ListTree: Ss, ListVideo: fs, ListX: Zs, Loader: zs, Loader2: _1, LoaderCircle: _1, LoaderPinwheel: ks, Locate: Ds, LocateFixed: Bs, LocateOff: Fs, Lock: Rs, LockKeyhole: qs, LockKeyholeOpen: Y1, LockOpen: $1, LogIn: bs, LogOut: Ts, Logs: Us, Lollipop: Os, Luggage: Is, MSquare: h0, Magnet: Es, Mail: _s, MailCheck: Gs, MailMinus: Ws, MailOpen: Xs, MailPlus: Ns, MailQuestion: Ks, MailSearch: Js, MailWarning: js, MailX: Qs, Mailbox: Ys, Mails: $s, Map: oe, MapPin: ve, MapPinCheck: te, MapPinCheckInside: ae, MapPinHouse: he, MapPinMinus: pe, MapPinMinusInside: de, MapPinOff: ce, MapPinPlus: se, MapPinPlusInside: Me, MapPinX: re, MapPinXInside: ee, MapPinned: ne, Martini: ie, Maximize: ge, Maximize2: le, Medal: xe, Megaphone: me, MegaphoneOff: ye, Meh: He, MemoryStick: Ve, Menu: Ce, MenuSquare: d0, Merge: we, MessageCircle: Fe, MessageCircleCode: ue, MessageCircleDashed: Ae, MessageCircleHeart: Le, MessageCircleMore: Se, MessageCircleOff: fe, MessageCirclePlus: Ze, MessageCircleQuestion: Pe, MessageCircleReply: ke, MessageCircleWarning: ze, MessageCircleX: Be, MessageSquare: Je, MessageSquareCode: De, MessageSquareDashed: qe, MessageSquareDiff: Re, MessageSquareDot: be, MessageSquareHeart: Te, MessageSquareMore: Ue, MessageSquareOff: Oe, MessageSquarePlus: Ie, MessageSquareQuote: Ee, MessageSquareReply: Ge, MessageSquareShare: We, MessageSquareText: Xe, MessageSquareWarning: Ne, MessageSquareX: Ke, MessagesSquare: je, Mic: _e, Mic2: a2, MicOff: Qe, MicVocal: a2, Microchip: Ye, Microscope: $e, Microwave: a9, Milestone: t9, Milk: d9, MilkOff: h9, Minimize: c9, Minimize2: p9, Minus: M9, MinusCircle: s1, MinusSquare: p0, Monitor: H9, MonitorCheck: s9, MonitorCog: e9, MonitorDot: r9, MonitorDown: v9, MonitorOff: n9, MonitorPause: o9, MonitorPlay: i9, MonitorSmartphone: l9, MonitorSpeaker: g9, MonitorStop: x9, MonitorUp: y9, MonitorX: m9, Moon: C9, MoonStar: V9, MoreHorizontal: z1, MoreVertical: k1, Mountain: u9, MountainSnow: w9, Mouse: P9, MouseOff: A9, MousePointer: Z9, MousePointer2: L9, MousePointerBan: S9, MousePointerClick: f9, MousePointerSquareDashed: j2, Move: E9, Move3D: t2, Move3d: t2, MoveDiagonal: z9, MoveDiagonal2: k9, MoveDown: D9, MoveDownLeft: B9, MoveDownRight: F9, MoveHorizontal: q9, MoveLeft: R9, MoveRight: b9, MoveUp: O9, MoveUpLeft: T9, MoveUpRight: U9, MoveVertical: I9, Music: N9, Music2: G9, Music3: W9, Music4: X9, Navigation: Q9, Navigation2: J9, Navigation2Off: K9, NavigationOff: j9, Network: _9, Newspaper: Y9, Nfc: $9, Notebook: dr, NotebookPen: ar, NotebookTabs: tr, NotebookText: hr, NotepadText: cr, NotepadTextDashed: pr, Nut: sr, NutOff: Mr, Octagon: er, OctagonAlert: h2, OctagonPause: d2, OctagonX: p2, Omega: rr, Option: vr, Orbit: nr, Origami: or, Outdent: J1, Package: Vr, Package2: ir, PackageCheck: lr, PackageMinus: gr, PackageOpen: xr, PackagePlus: yr, PackageSearch: mr, PackageX: Hr, PaintBucket: Cr, PaintRoller: wr, Paintbrush: ur, Paintbrush2: c2, PaintbrushVertical: c2, Palette: Ar, Palmtree: S0, PanelBottom: fr, PanelBottomClose: Lr, PanelBottomDashed: M2, PanelBottomInactive: M2, PanelBottomOpen: Sr, PanelLeft: v2, PanelLeftClose: s2, PanelLeftDashed: e2, PanelLeftInactive: e2, PanelLeftOpen: r2, PanelRight: kr, PanelRightClose: Zr, PanelRightDashed: n2, PanelRightInactive: n2, PanelRightOpen: Pr, PanelTop: Fr, PanelTopClose: zr, PanelTopDashed: o2, PanelTopInactive: o2, PanelTopOpen: Br, PanelsLeftBottom: Dr, PanelsLeftRight: S1, PanelsRightBottom: qr, PanelsTopBottom: V2, PanelsTopLeft: i2, Paperclip: Rr, Parentheses: br, ParkingCircle: r1, ParkingCircleOff: e1, ParkingMeter: Tr, ParkingSquare: s0, ParkingSquareOff: M0, PartyPopper: Ur, Pause: Or, PauseCircle: v1, PauseOctagon: d2, PawPrint: Ir, PcCase: Er, Pen: g2, PenBox: e, PenLine: l2, PenOff: Gr, PenSquare: e, PenTool: Wr, Pencil: Jr, PencilLine: Xr, PencilOff: Nr, PencilRuler: Kr, Pentagon: jr, Percent: Qr, PercentCircle: n1, PercentDiamond: Z1, PercentSquare: e0, PersonStanding: _r, PhilippinePeso: Yr, Phone: cv, PhoneCall: $r, PhoneForwarded: av, PhoneIncoming: tv, PhoneMissed: hv, PhoneOff: dv, PhoneOutgoing: pv, Pi: Mv, PiSquare: r0, Piano: sv, Pickaxe: ev, PictureInPicture: vv, PictureInPicture2: rv, PieChart: I, PiggyBank: nv, Pilcrow: lv, PilcrowLeft: ov, PilcrowRight: iv, PilcrowSquare: v0, Pill: xv, PillBottle: gv, Pin: mv, PinOff: yv, Pipette: Hv, Pizza: Vv, Plane: uv, PlaneLanding: Cv, PlaneTakeoff: wv, Play: Av, PlayCircle: o1, PlaySquare: n0, Plug: Sv, Plug2: Lv, PlugZap: x2, PlugZap2: x2, Plus: fv, PlusCircle: i1, PlusSquare: o0, Pocket: Pv, PocketKnife: Zv, Podcast: kv, Pointer: Bv, PointerOff: zv, Popcorn: Fv, Popsicle: Dv, PoundSterling: qv, Power: bv, PowerCircle: l1, PowerOff: Rv, PowerSquare: i0, Presentation: Tv, Printer: Ov, PrinterCheck: Uv, Projector: Iv, Proportions: Ev, Puzzle: Gv, Pyramid: Wv, QrCode: Xv, Quote: Nv, Rabbit: Kv, Radar: Jv, Radiation: jv, Radical: Qv, Radio: $v, RadioReceiver: _v, RadioTower: Yv, Radius: an, RailSymbol: tn, Rainbow: hn, Rat: dn, Ratio: pn, Receipt: ln, ReceiptCent: cn, ReceiptEuro: Mn, ReceiptIndianRupee: sn, ReceiptJapaneseYen: en, ReceiptPoundSterling: rn, ReceiptRussianRuble: vn, ReceiptSwissFranc: nn, ReceiptText: on, RectangleEllipsis: y2, RectangleHorizontal: gn, RectangleVertical: xn, Recycle: yn, Redo: Vn, Redo2: mn, RedoDot: Hn, RefreshCcw: wn, RefreshCcwDot: Cn, RefreshCw: An, RefreshCwOff: un, Refrigerator: Ln, Regex: Sn, RemoveFormatting: fn, Repeat: kn, Repeat1: Zn, Repeat2: Pn, Replace: Bn, ReplaceAll: zn, Reply: Dn, ReplyAll: Fn, Rewind: qn, Ribbon: Rn, Rocket: bn, RockingChair: Tn, RollerCoaster: Un, Rotate3D: m2, Rotate3d: m2, RotateCcw: In, RotateCcwSquare: On, RotateCw: Gn, RotateCwSquare: En, Route: Xn, RouteOff: Wn, Router: Nn, Rows: H2, Rows2: H2, Rows3: V2, Rows4: Kn, Rss: Jn, Ruler: jn, RussianRuble: Qn, Sailboat: _n, Salad: Yn, Sandwich: $n, Satellite: to, SatelliteDish: ao, Save: co, SaveAll: ho, SaveOff: po, Scale: Mo, Scale3D: C2, Scale3d: C2, Scaling: so, Scan: go, ScanBarcode: eo, ScanEye: ro, ScanFace: vo, ScanLine: no, ScanQrCode: oo, ScanSearch: io, ScanText: lo, ScatterChart: E, School: xo, School2: P0, Scissors: mo, ScissorsLineDashed: yo, ScissorsSquare: l0, ScissorsSquareDashedBottom: O2, ScreenShare: Vo, ScreenShareOff: Ho, Scroll: wo, ScrollText: Co, Search: fo, SearchCheck: uo, SearchCode: Ao, SearchSlash: Lo, SearchX: So, Section: Zo, Send: ko, SendHorizonal: w2, SendHorizontal: w2, SendToBack: Po, SeparatorHorizontal: zo, SeparatorVertical: Bo, Server: Ro, ServerCog: Fo, ServerCrash: Do, ServerOff: qo, Settings: To, Settings2: bo, Shapes: Uo, Share: Io, Share2: Oo, Sheet: Eo, Shell: Go, Shield: $o, ShieldAlert: Wo, ShieldBan: Xo, ShieldCheck: No, ShieldClose: u2, ShieldEllipsis: Ko, ShieldHalf: Jo, ShieldMinus: jo, ShieldOff: Qo, ShieldPlus: _o, ShieldQuestion: Yo, ShieldX: u2, Ship: ti, ShipWheel: ai, Shirt: hi, ShoppingBag: di, ShoppingBasket: pi, ShoppingCart: ci, Shovel: Mi, ShowerHead: si, Shrink: ei, Shrub: ri, Shuffle: vi, Sidebar: v2, SidebarClose: s2, SidebarOpen: r2, Sigma: ni, SigmaSquare: g0, Signal: xi, SignalHigh: oi, SignalLow: ii, SignalMedium: li, SignalZero: gi, Signature: yi, Signpost: Hi, SignpostBig: mi, Siren: Vi, SkipBack: Ci, SkipForward: wi, Skull: ui, Slack: Ai, Slash: Li, SlashSquare: x0, Slice: Si, Sliders: A2, SlidersHorizontal: fi, SlidersVertical: A2, Smartphone: ki, SmartphoneCharging: Zi, SmartphoneNfc: Pi, Smile: Bi, SmilePlus: zi, Snail: Fi, Snowflake: Di, Sofa: qi, SortAsc: C, SortDesc: m, Soup: Ri, Space: bi, Spade: Ti, Sparkle: Ui, Sparkles: L2, Speaker: Oi, Speech: Ii, SpellCheck: Gi, SpellCheck2: Ei, Spline: Wi, Split: Xi, SplitSquareHorizontal: y0, SplitSquareVertical: m0, SprayCan: Ni, Sprout: Ki, Square: $i, SquareActivity: S2, SquareArrowDown: P2, SquareArrowDownLeft: f2, SquareArrowDownRight: Z2, SquareArrowLeft: k2, SquareArrowOutDownLeft: z2, SquareArrowOutDownRight: B2, SquareArrowOutUpLeft: F2, SquareArrowOutUpRight: D2, SquareArrowRight: q2, SquareArrowUp: T2, SquareArrowUpLeft: R2, SquareArrowUpRight: b2, SquareAsterisk: U2, SquareBottomDashedScissors: O2, SquareChartGantt: n, SquareCheck: E2, SquareCheckBig: I2, SquareChevronDown: G2, SquareChevronLeft: W2, SquareChevronRight: X2, SquareChevronUp: N2, SquareCode: K2, SquareDashedBottom: ji, SquareDashedBottomCode: Ji, SquareDashedKanban: J2, SquareDashedMousePointer: j2, SquareDivide: Q2, SquareDot: _2, SquareEqual: Y2, SquareFunction: $2, SquareGanttChart: n, SquareKanban: a0, SquareLibrary: t0, SquareM: h0, SquareMenu: d0, SquareMinus: p0, SquareMousePointer: c0, SquareParking: s0, SquareParkingOff: M0, SquarePen: e, SquarePercent: e0, SquarePi: r0, SquarePilcrow: v0, SquarePlay: n0, SquarePlus: o0, SquarePower: i0, SquareRadical: Qi, SquareScissors: l0, SquareSigma: g0, SquareSlash: x0, SquareSplitHorizontal: y0, SquareSplitVertical: m0, SquareSquare: _i, SquareStack: Yi, SquareTerminal: H0, SquareUser: C0, SquareUserRound: V0, SquareX: w0, Squircle: al, Squirrel: tl, Stamp: hl, Star: cl, StarHalf: dl, StarOff: pl, Stars: L2, StepBack: Ml, StepForward: sl, Stethoscope: el, Sticker: rl, StickyNote: vl, StopCircle: x1, Store: nl, StretchHorizontal: ol, StretchVertical: il, Strikethrough: ll, Subscript: gl, Subtitles: P, Sun: Vl, SunDim: xl, SunMedium: yl, SunMoon: ml, SunSnow: Hl, Sunrise: Cl, Sunset: wl, Superscript: ul, SwatchBook: Al, SwissFranc: Ll, SwitchCamera: Sl, Sword: fl, Swords: Zl, Syringe: Pl, Table: bl, Table2: kl, TableCellsMerge: zl, TableCellsSplit: Bl, TableColumnsSplit: Fl, TableOfContents: Dl, TableProperties: ql, TableRowsSplit: Rl, Tablet: Ul, TabletSmartphone: Tl, Tablets: Ol, Tag: Il, Tags: El, Tally1: Gl, Tally2: Wl, Tally3: Xl, Tally4: Nl, Tally5: Kl, Tangent: Jl, Target: jl, Telescope: Ql, Tent: Yl, TentTree: _l, Terminal: $l, TerminalSquare: H0, TestTube: ag, TestTube2: u0, TestTubeDiagonal: u0, TestTubes: tg, Text: Mg, TextCursor: dg, TextCursorInput: hg, TextQuote: pg, TextSearch: cg, TextSelect: A0, TextSelection: A0, Theater: sg, Thermometer: vg, ThermometerSnowflake: eg, ThermometerSun: rg, ThumbsDown: ng, ThumbsUp: og, Ticket: Hg, TicketCheck: ig, TicketMinus: lg, TicketPercent: gg, TicketPlus: xg, TicketSlash: yg, TicketX: mg, Tickets: Cg, TicketsPlane: Vg, Timer: Ag, TimerOff: wg, TimerReset: ug, ToggleLeft: Lg, ToggleRight: Sg, Tornado: fg, Torus: Zg, Touchpad: kg, TouchpadOff: Pg, TowerControl: zg, ToyBrick: Bg, Tractor: Fg, TrafficCone: Dg, Train: L0, TrainFront: Rg, TrainFrontTunnel: qg, TrainTrack: bg, TramFront: L0, Trash: Ug, Trash2: Tg, TreeDeciduous: Og, TreePalm: S0, TreePine: Ig, Trees: Eg, Trello: Gg, TrendingDown: Wg, TrendingUp: Xg, Triangle: Kg, TriangleAlert: f0, TriangleRight: Ng, Trophy: Jg, Truck: jg, Turtle: Qg, Tv: Yg, Tv2: Z0, TvMinimal: Z0, TvMinimalPlay: _g, Twitch: $g, Twitter: ax, Type: hx, TypeOutline: tx, Umbrella: px, UmbrellaOff: dx, Underline: cx, Undo: ex, Undo2: Mx, UndoDot: sx, UnfoldHorizontal: rx, UnfoldVertical: vx, Ungroup: nx, University: P0, Unlink: ix, Unlink2: ox, Unlock: $1, UnlockKeyhole: Y1, Unplug: lx, Upload: gx, UploadCloud: u1, Usb: xx, User: Sx, User2: q0, UserCheck: yx, UserCheck2: k0, UserCircle: m1, UserCircle2: y1, UserCog: mx, UserCog2: z0, UserMinus: Hx, UserMinus2: B0, UserPen: Vx, UserPlus: Cx, UserPlus2: F0, UserRound: q0, UserRoundCheck: k0, UserRoundCog: z0, UserRoundMinus: B0, UserRoundPen: wx, UserRoundPlus: F0, UserRoundSearch: ux, UserRoundX: D0, UserSearch: Ax, UserSquare: C0, UserSquare2: V0, UserX: Lx, UserX2: D0, Users: fx, Users2: R0, UsersRound: R0, Utensils: T0, UtensilsCrossed: b0, UtilityPole: Zx, Variable: Px, Vault: kx, Vegan: zx, VenetianMask: Bx, Verified: A, Vibrate: Dx, VibrateOff: Fx, Video: Rx, VideoOff: qx, Videotape: bx, View: Tx, Voicemail: Ux, Volume: Gx, Volume1: Ox, Volume2: Ix, VolumeX: Ex, Vote: Wx, Wallet: Nx, Wallet2: U0, WalletCards: Xx, WalletMinimal: U0, Wallpaper: Kx, Wand: Jx, Wand2: O0, WandSparkles: O0, Warehouse: jx, WashingMachine: Qx, Watch: _x, Waves: Yx, Waypoints: $x, Webcam: ay, Webhook: hy, WebhookOff: ty, Weight: dy, Wheat: cy, WheatOff: py, WholeWord: My, Wifi: ny, WifiHigh: sy, WifiLow: ey, WifiOff: ry, WifiZero: vy, Wind: oy, Wine: ly, WineOff: iy, Workflow: gy, Worm: xy, WrapText: yy, Wrench: my, X: Hy, XCircle: H1, XOctagon: p2, XSquare: w0, Youtube: Vy, Zap: wy, ZapOff: Cy, ZoomIn: uy, ZoomOut: Ay, createElement: I0, createIcons: ({ icons: t = {}, nameAttr: p = "data-lucide", attrs: h = {} } = {}) => {
    if (!Object.values(t).length)
      throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);
    if (typeof document > "u")
      throw new Error("`createIcons()` only works in a browser environment.");
    const c = document.querySelectorAll(`[${p}]`);
    if (Array.from(c).forEach((d) => G0(d, { nameAttr: p, icons: t, attrs: h })), p === "data-lucide") {
      const d = document.querySelectorAll("[icon-name]");
      d.length > 0 && (console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"), Array.from(d).forEach((s) => G0(s, { nameAttr: "icon-name", icons: t, attrs: h })));
    }
  }, icons: Dy }, Symbol.toStringTag, { value: "Module" }));
  var { defineProperty: Ry, getOwnPropertyDescriptor: by } = Object, o = (t, p, h, c) => {
    for (var d = c > 1 ? undefined : c ? by(p, h) : p, s = t.length - 1, i;s >= 0; s--)
      (i = t[s]) && (d = (c ? i(p, h, d) : i(d)) || d);
    return c && d && Ry(p, h, d), d;
  };
  return M.Icon = class extends Py.LitElement {
    constructor() {
      super(), this["custom-class"] = "", this.icon = "", this["stroke-width"] = "2", this.height = "16", this.width = "16";
    }
    connectedCallback() {
      super.connectedCallback(), this.removeAttribute("uk-cloak");
    }
    createRenderRoot() {
      return this;
    }
    render() {
      const p = this.icon.trim().split("-").map((h) => h.charAt(0).toUpperCase() + h.slice(1)).join("");
      try {
        const h = I0(qy[p]);
        return h.setAttribute("class", this["custom-class"]), h.setAttribute("height", this.height), h.setAttribute("stroke-width", this["stroke-width"]), h.setAttribute("width", this.width), h;
      } catch {
      }
    }
  }, o([r.property({ type: String })], M.Icon.prototype, "custom-class", 2), o([r.property({ type: String })], M.Icon.prototype, "icon", 2), o([r.property({ type: String })], M.Icon.prototype, "stroke-width", 2), o([r.property({ type: String })], M.Icon.prototype, "height", 2), o([r.property({ type: String })], M.Icon.prototype, "width", 2), M.Icon = o([r.customElement("uk-icon")], M.Icon), Object.defineProperty(M, Symbol.toStringTag, { value: "Module" }), M;
}({}, Lit, LitDecorators);

// node_modules/@sudodevnull/datastar/dist/datastar.js
function ze(t) {
  return t instanceof HTMLElement || t instanceof SVGElement ? t : null;
}
function ue() {
  throw new Error("Cycle detected");
}
function Et() {
  throw new Error("Computed cannot have side-effects");
}
var _t = Symbol.for("preact-signals");
var O = 1;
var B = 2;
var Y = 4;
var W = 8;
var J = 16;
var H = 32;
function fe() {
  G++;
}
function de() {
  if (G > 1) {
    G--;
    return;
  }
  let t, e = false;
  for (;K !== undefined; ) {
    let s = K;
    for (K = undefined, we++;s !== undefined; ) {
      const n = s._nextBatchedEffect;
      if (s._nextBatchedEffect = undefined, s._flags &= ~B, !(s._flags & W) && Qe(s))
        try {
          s._callback();
        } catch (r) {
          e || (t = r, e = true);
        }
      s = n;
    }
  }
  if (we = 0, G--, e)
    throw t;
}
function St(t) {
  if (G > 0)
    return t();
  fe();
  try {
    return t();
  } finally {
    de();
  }
}
var _;
var K;
var G = 0;
var we = 0;
var le = 0;
function Ze(t) {
  if (_ === undefined)
    return;
  let e = t._node;
  if (e === undefined || e._target !== _)
    return e = {
      _version: 0,
      _source: t,
      _prevSource: _._sources,
      _nextSource: undefined,
      _target: _,
      _prevTarget: undefined,
      _nextTarget: undefined,
      _rollbackNode: e
    }, _._sources !== undefined && (_._sources._nextSource = e), _._sources = e, t._node = e, _._flags & H && t._subscribe(e), e;
  if (e._version === -1)
    return e._version = 0, e._nextSource !== undefined && (e._nextSource._prevSource = e._prevSource, e._prevSource !== undefined && (e._prevSource._nextSource = e._nextSource), e._prevSource = _._sources, e._nextSource = undefined, _._sources._nextSource = e, _._sources = e), e;
}
function T(t) {
  this._value = t, this._version = 0, this._node = undefined, this._targets = undefined;
}
T.prototype.brand = _t;
T.prototype._refresh = function() {
  return true;
};
T.prototype._subscribe = function(t) {
  this._targets !== t && t._prevTarget === undefined && (t._nextTarget = this._targets, this._targets !== undefined && (this._targets._prevTarget = t), this._targets = t);
};
T.prototype._unsubscribe = function(t) {
  if (this._targets !== undefined) {
    const { _prevTarget: e, _nextTarget: s } = t;
    e !== undefined && (e._nextTarget = s, t._prevTarget = undefined), s !== undefined && (s._prevTarget = e, t._nextTarget = undefined), t === this._targets && (this._targets = s);
  }
};
T.prototype.subscribe = function(t) {
  const e = this;
  return nt(function() {
    const s = e.value, n = this._flags & H;
    this._flags &= ~H;
    try {
      t(s);
    } finally {
      this._flags |= n;
    }
  });
};
T.prototype.valueOf = function() {
  return this.value;
};
T.prototype.toString = function() {
  return this.value + "";
};
T.prototype.toJSON = function() {
  return this.value;
};
T.prototype.peek = function() {
  return this._value;
};
Object.defineProperty(T.prototype, "value", {
  get() {
    const t = Ze(this);
    return t !== undefined && (t._version = this._version), this._value;
  },
  set(t) {
    if (_ instanceof R && Et(), t !== this._value) {
      we > 100 && ue(), this._value = t, this._version++, le++, fe();
      try {
        for (let e = this._targets;e !== undefined; e = e._nextTarget)
          e._target._notify();
      } finally {
        de();
      }
    }
  }
});
function Xe(t) {
  return new T(t);
}
function Qe(t) {
  for (let e = t._sources;e !== undefined; e = e._nextSource)
    if (e._source._version !== e._version || !e._source._refresh() || e._source._version !== e._version)
      return true;
  return false;
}
function et(t) {
  for (let e = t._sources;e !== undefined; e = e._nextSource) {
    const s = e._source._node;
    if (s !== undefined && (e._rollbackNode = s), e._source._node = e, e._version = -1, e._nextSource === undefined) {
      t._sources = e;
      break;
    }
  }
}
function tt(t) {
  let e = t._sources, s;
  for (;e !== undefined; ) {
    const n = e._prevSource;
    e._version === -1 ? (e._source._unsubscribe(e), n !== undefined && (n._nextSource = e._nextSource), e._nextSource !== undefined && (e._nextSource._prevSource = n)) : s = e, e._source._node = e._rollbackNode, e._rollbackNode !== undefined && (e._rollbackNode = undefined), e = n;
  }
  t._sources = s;
}
function R(t) {
  T.call(this, undefined), this._compute = t, this._sources = undefined, this._globalVersion = le - 1, this._flags = Y;
}
R.prototype = new T;
R.prototype._refresh = function() {
  if (this._flags &= ~B, this._flags & O)
    return false;
  if ((this._flags & (Y | H)) === H || (this._flags &= ~Y, this._globalVersion === le))
    return true;
  if (this._globalVersion = le, this._flags |= O, this._version > 0 && !Qe(this))
    return this._flags &= ~O, true;
  const t = _;
  try {
    et(this), _ = this;
    const e = this._compute();
    (this._flags & J || this._value !== e || this._version === 0) && (this._value = e, this._flags &= ~J, this._version++);
  } catch (e) {
    this._value = e, this._flags |= J, this._version++;
  }
  return _ = t, tt(this), this._flags &= ~O, true;
};
R.prototype._subscribe = function(t) {
  if (this._targets === undefined) {
    this._flags |= Y | H;
    for (let e = this._sources;e !== undefined; e = e._nextSource)
      e._source._subscribe(e);
  }
  T.prototype._subscribe.call(this, t);
};
R.prototype._unsubscribe = function(t) {
  if (this._targets !== undefined && (T.prototype._unsubscribe.call(this, t), this._targets === undefined)) {
    this._flags &= ~H;
    for (let e = this._sources;e !== undefined; e = e._nextSource)
      e._source._unsubscribe(e);
  }
};
R.prototype._notify = function() {
  if (!(this._flags & B)) {
    this._flags |= Y | B;
    for (let t = this._targets;t !== undefined; t = t._nextTarget)
      t._target._notify();
  }
};
R.prototype.peek = function() {
  if (this._refresh() || ue(), this._flags & J)
    throw this._value;
  return this._value;
};
Object.defineProperty(R.prototype, "value", {
  get() {
    this._flags & O && ue();
    const t = Ze(this);
    if (this._refresh(), t !== undefined && (t._version = this._version), this._flags & J)
      throw this._value;
    return this._value;
  }
});
function Tt(t) {
  return new R(t);
}
function st(t) {
  const e = t._cleanup;
  if (t._cleanup = undefined, typeof e == "function") {
    fe();
    const s = _;
    _ = undefined;
    try {
      e();
    } catch (n) {
      throw t._flags &= ~O, t._flags |= W, Ne(t), n;
    } finally {
      _ = s, de();
    }
  }
}
function Ne(t) {
  for (let e = t._sources;e !== undefined; e = e._nextSource)
    e._source._unsubscribe(e);
  t._compute = undefined, t._sources = undefined, st(t);
}
function At(t) {
  if (_ !== this)
    throw new Error("Out-of-order effect");
  tt(this), _ = t, this._flags &= ~O, this._flags & W && Ne(this), de();
}
function X(t) {
  this._compute = t, this._cleanup = undefined, this._sources = undefined, this._nextBatchedEffect = undefined, this._flags = H;
}
X.prototype._callback = function() {
  const t = this._start();
  try {
    if (this._flags & W || this._compute === undefined)
      return;
    const e = this._compute();
    typeof e == "function" && (this._cleanup = e);
  } finally {
    t();
  }
};
X.prototype._start = function() {
  this._flags & O && ue(), this._flags |= O, this._flags &= ~W, st(this), et(this), fe();
  const t = _;
  return _ = this, At.bind(this, t);
};
X.prototype._notify = function() {
  this._flags & B || (this._flags |= B, this._nextBatchedEffect = K, K = this);
};
X.prototype._dispose = function() {
  this._flags |= W, this._flags & O || Ne(this);
};
function nt(t) {
  const e = new X(t);
  try {
    e._callback();
  } catch (s) {
    throw e._dispose(), s;
  }
  return e._dispose.bind(e);
}

class rt {
  get value() {
    return Ee(this);
  }
  set value(e) {
    St(() => Nt(this, e));
  }
  peek() {
    return Ee(this, { peek: true });
  }
}
var oe = (t) => Object.assign(new rt, Object.entries(t).reduce((e, [s, n]) => {
  if (["value", "peek"].some((r) => r === s))
    throw new Error(`${s} is a reserved property name`);
  return typeof n != "object" || n === null || Array.isArray(n) ? e[s] = Xe(n) : e[s] = oe(n), e;
}, {}));
var Nt = (t, e) => Object.keys(e).forEach((s) => t[s].value = e[s]);
var Ee = (t, { peek: e = false } = {}) => Object.entries(t).reduce((s, [n, r]) => (r instanceof T ? s[n] = e ? r.peek() : r.value : r instanceof rt && (s[n] = Ee(r, { peek: e })), s), {});
function ot(t, e) {
  if (typeof e != "object" || Array.isArray(e) || !e)
    return e;
  if (typeof e == "object" && e.toJSON !== undefined && typeof e.toJSON == "function")
    return e.toJSON();
  let s = t;
  return typeof t != "object" && (s = { ...e }), Object.keys(e).forEach((n) => {
    s.hasOwnProperty(n) || (s[n] = e[n]), e[n] === null ? delete s[n] : s[n] = ot(s[n], e[n]);
  }), s;
}
var q = "datastar-event";
var it = "[a-zA-Z_$]+";
var Lt = it + "[0-9a-zA-Z_$.]*";
function Le(t, e, s, n = true) {
  const r = n ? Lt : it;
  return new RegExp(`(?<whole>\\${t}(?<${e}>${r})${s})`, "g");
}
var kt = {
  regexp: Le("$", "signal", "(?<method>\\([^\\)]*\\))?"),
  replacer: (t) => {
    const { signal: e, method: s } = t, n = "ctx.store()";
    if (!s?.length)
      return `${n}.${e}.value`;
    const r = e.split("."), o = r.pop(), i = r.join(".");
    return `${n}.${i}.value.${o}${s}`;
  }
};
var Mt = {
  regexp: Le("$\\$", "action", "(?<call>\\((?<args>.*)\\))?"),
  replacer: ({ action: t, args: e }) => {
    const s = ["ctx"];
    e && s.push(...e.split(",").map((r) => r.trim()));
    const n = s.join(",");
    return `ctx.actions.${t}(${n})`;
  }
};
var Pt = {
  regexp: Le("~", "ref", "", false),
  replacer({ ref: t }) {
    return `document.querySelector(ctx.store()._dsPlugins.refs.${t})`;
  }
};
var $t = [Mt, kt, Pt];
var Ot = {
  prefix: "store",
  removeNewLines: true,
  preprocessors: {
    pre: [
      {
        regexp: /(?<whole>.+)/g,
        replacer: (t) => {
          const { whole: e } = t;
          return `Object.assign({...ctx.store()}, ${e})`;
        }
      }
    ]
  },
  allowedModifiers: /* @__PURE__ */ new Set(["local", "session", "ifmissing"]),
  onLoad: (t) => {
    let e = "";
    const s = (l) => {
      const g = t.store(), c = JSON.stringify(g);
      c !== e && (window.localStorage.setItem(U, c), e = c);
    }, n = t.modifiers.has("local");
    if (n) {
      window.addEventListener(q, s);
      const l = window.localStorage.getItem(U) || "{}", g = JSON.parse(l);
      t.mergeStore(g);
    }
    const r = t.modifiers.has("session"), o = (l) => {
      const g = t.store(), c = JSON.stringify(g);
      window.sessionStorage.setItem(U, c);
    };
    if (r) {
      window.addEventListener(q, o);
      const l = window.sessionStorage.getItem(U) || "{}", g = JSON.parse(l);
      t.mergeStore(g);
    }
    const i = t.expressionFn(t), f = lt(t.store(), i, t.modifiers.has("ifmissing"));
    return t.mergeStore(f), delete t.el.dataset[t.rawKey], () => {
      n && window.removeEventListener(q, s), r && window.removeEventListener(q, o);
    };
  }
};
var It = {
  prefix: "computed",
  mustNotEmptyKey: true,
  onLoad: (t) => {
    const e = t.store();
    return e[t.key] = t.reactivity.computed(() => t.expressionFn(t)), () => {
      const s = t.store();
      delete s[t.key];
    };
  }
};
var Rt = {
  prefix: "ref",
  mustHaveEmptyKey: true,
  mustNotEmptyExpression: true,
  bypassExpressionFunctionCreation: () => true,
  onLoad: (t) => {
    t.upsertIfMissingFromStore("_dsPlugins.refs", {});
    const { el: e, expression: s } = t, r = {
      _dsPlugins: {
        refs: {
          ...t.store()._dsPlugins.refs.value,
          [s]: at(e)
        }
      }
    };
    return t.mergeStore(r), () => {
      const o = t.store(), i = { ...o._dsPlugins.refs.value };
      delete i[s], o._dsPlugins.refs = i;
    };
  }
};
var Ct = [Ot, It, Rt];
function at(t) {
  if (!t)
    return "null";
  if (typeof t == "string")
    return t;
  if (t instanceof Window)
    return "Window";
  if (t instanceof Document)
    return "Document";
  if (t.tagName === "BODY")
    return "BODY";
  const e = [];
  for (;t.parentElement && t.tagName !== "BODY"; ) {
    if (t.id) {
      e.unshift("#" + t.getAttribute("id"));
      break;
    } else {
      let s = 1, n = t;
      for (;n.previousElementSibling; n = n.previousElementSibling, s++)
        ;
      e.unshift(t.tagName + ":nth-child(" + s + ")");
    }
    t = t.parentElement;
  }
  return e.join(">");
}
function lt(t, e, s) {
  const n = {};
  if (!s)
    Object.assign(n, e);
  else
    for (const r in e) {
      const o = t[r]?.value;
      o == null && (n[r] = e[r]);
    }
  return n;
}
var U = "datastar";
var k = `${U}-`;

class Dt {
  constructor(e = {}, ...s) {
    if (this.plugins = [], this.store = oe({ _dsPlugins: {} }), this.actions = {}, this.refs = {}, this.reactivity = {
      signal: Xe,
      computed: Tt,
      effect: nt
    }, this.parentID = "", this.missingIDNext = 0, this.removals = /* @__PURE__ */ new Map, this.mergeRemovals = new Array, this.actions = Object.assign(this.actions, e), s = [...Ct, ...s], !s.length)
      throw new Error("No plugins provided");
    const n = /* @__PURE__ */ new Set;
    for (const r of s) {
      if (r.requiredPluginPrefixes) {
        for (const o of r.requiredPluginPrefixes)
          if (!n.has(o))
            throw new Error(`${r.prefix} requires ${o}`);
      }
      this.plugins.push(r), n.add(r.prefix);
    }
  }
  run() {
    new MutationObserver((s, n) => {
      N("core", "dom", "mutation", document.body, document.body.outerHTML);
    }).observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true
    }), this.plugins.forEach((s) => {
      s.onGlobalInit && (s.onGlobalInit({
        actions: this.actions,
        reactivity: this.reactivity,
        mergeStore: this.mergeStore.bind(this),
        store: this.store
      }), N("core", "plugins", "registration", "BODY", `On prefix ${s.prefix}`));
    }), this.applyPlugins(document.body);
  }
  cleanupElementRemovals(e) {
    const s = this.removals.get(e);
    if (s) {
      for (const n of s.set)
        n();
      this.removals.delete(e);
    }
  }
  mergeStore(e) {
    this.mergeRemovals.forEach((n) => n()), this.mergeRemovals = this.mergeRemovals.slice(0);
    const s = ot(this.store.value, e);
    this.store = oe(s), this.mergeRemovals.push(this.reactivity.effect(() => {
      N("core", "store", "merged", "STORE", JSON.stringify(this.store.value));
    }));
  }
  removeFromStore(...e) {
    const s = { ...this.store.value };
    for (const n of e) {
      const r = n.split(".");
      let o = r[0], i = s;
      for (let f = 1;f < r.length; f++) {
        const l = r[f];
        i[o] || (i[o] = {}), i = i[o], o = l;
      }
      delete i[o];
    }
    this.store = oe(s), this.applyPlugins(document.body);
  }
  upsertIfMissingFromStore(e, s) {
    const n = e.split(".");
    let r = this.store;
    for (let i = 0;i < n.length - 1; i++) {
      const f = n[i];
      r[f] || (r[f] = {}), r = r[f];
    }
    const o = n[n.length - 1];
    r[o] || (r[o] = this.reactivity.signal(s), N("core", "store", "upsert", e, s));
  }
  signalByName(e) {
    return this.store[e];
  }
  applyPlugins(e) {
    const s = /* @__PURE__ */ new Set;
    this.plugins.forEach((n, r) => {
      this.walkDownDOM(e, (o) => {
        r || this.cleanupElementRemovals(o);
        for (const i in o.dataset) {
          const f = o.dataset[i] || "";
          let l = f;
          if (!i.startsWith(n.prefix))
            continue;
          if (o.id.length === 0 && (o.id = `ds-${this.parentID}-${this.missingIDNext++}`), s.clear(), n.allowedTagRegexps) {
            const a = o.tagName.toLowerCase();
            if (![...n.allowedTagRegexps].some((w) => a.match(w)))
              throw new Error(`'${o.tagName}' not allowed for '${i}', allowed ${[
                [...n.allowedTagRegexps].map((w) => `'${w}'`)
              ].join(", ")}`);
          }
          let g = i.slice(n.prefix.length), [c, ...d] = g.split(".");
          if (n.mustHaveEmptyKey && c.length > 0)
            throw new Error(`'${i}' must have empty key`);
          if (n.mustNotEmptyKey && c.length === 0)
            throw new Error(`'${i}' must have non-empty key`);
          c.length && (c = c[0].toLowerCase() + c.slice(1));
          const v = d.map((a) => {
            const [b, ...w] = a.split("_");
            return { label: b, args: w };
          });
          if (n.allowedModifiers) {
            for (const a of v)
              if (!n.allowedModifiers.has(a.label))
                throw new Error(`'${a.label}' is not allowed`);
          }
          const u = /* @__PURE__ */ new Map;
          for (const a of v)
            u.set(a.label, a.args);
          if (n.mustHaveEmptyExpression && l.length)
            throw new Error(`'${i}' must have empty expression`);
          if (n.mustNotEmptyExpression && !l.length)
            throw new Error(`'${i}' must have non-empty expression`);
          const E = /;|\n/;
          n.removeNewLines && (l = l.split(`
`).map((a) => a.trim()).join(" "));
          const y = [...n.preprocessors?.pre || [], ...$t, ...n.preprocessors?.post || []];
          for (const a of y) {
            if (s.has(a))
              continue;
            s.add(a);
            const b = l.split(E), w = [];
            b.forEach((m) => {
              let S = m;
              const P = [...S.matchAll(a.regexp)];
              if (P.length)
                for (const C of P) {
                  if (!C.groups)
                    continue;
                  const { groups: D } = C, { whole: V } = D;
                  S = S.replace(V, a.replacer(D));
                }
              w.push(S);
            }), l = w.join("; ");
          }
          const h = {
            store: () => this.store,
            mergeStore: this.mergeStore.bind(this),
            upsertIfMissingFromStore: this.upsertIfMissingFromStore.bind(this),
            removeFromStore: this.removeFromStore.bind(this),
            applyPlugins: this.applyPlugins.bind(this),
            cleanupElementRemovals: this.cleanupElementRemovals.bind(this),
            walkSignals: this.walkSignals.bind(this),
            actions: this.actions,
            reactivity: this.reactivity,
            el: o,
            rawKey: i,
            key: c,
            rawExpression: f,
            expression: l,
            expressionFn: () => {
              throw new Error("Expression function not created");
            },
            modifiers: u,
            sendDatastarEvent: N
          };
          if (!n.bypassExpressionFunctionCreation?.(h) && !n.mustHaveEmptyExpression && l.length) {
            const a = l.split(E).map((m) => m.trim()).filter((m) => m.length);
            a[a.length - 1] = `return ${a[a.length - 1]}`;
            const b = a.map((m) => `  ${m}`).join(`;
`), w = `
try {
  const _datastarExpression = () => {
${b}
  }
  const _datastarReturnVal = _datastarExpression()
  ctx.sendDatastarEvent('core', 'attributes', 'expr_eval', ctx.el, '${i} equals ' + JSON.stringify(_datastarReturnVal))
  return _datastarReturnVal
} catch (e) {
 const msg = \`
Error evaluating Datastar expression:
${b.replaceAll("`", "\\`")}

Error: \${e.message}

Check if the expression is valid before raising an issue.
\`.trim()
 ctx.sendDatastarEvent('core', 'attributes', 'expr_eval_err', ctx.el, msg)
 console.error(msg)
 debugger
}
            `;
            try {
              const m = n.argumentNames || [], S = new Function("ctx", ...m, w);
              h.expressionFn = S;
            } catch (m) {
              const S = new Error(`Error creating expression function for '${w}', error: ${m}`);
              N("core", "attributes", "expr_construction_err", h.el, String(S)), console.error(S);
              debugger;
            }
          }
          const p = n.onLoad(h);
          p && (this.removals.has(o) || this.removals.set(o, { id: o.id, set: /* @__PURE__ */ new Set }), this.removals.get(o).set.add(p));
        }
      });
    });
  }
  walkSignalsStore(e, s) {
    const n = Object.keys(e);
    for (let r = 0;r < n.length; r++) {
      const o = n[r], i = e[o], f = i instanceof T, l = typeof i == "object" && Object.keys(i).length > 0;
      if (f) {
        s(o, i);
        continue;
      }
      l && this.walkSignalsStore(i, s);
    }
  }
  walkSignals(e) {
    this.walkSignalsStore(this.store, e);
  }
  walkDownDOM(e, s, n = 0) {
    if (!e)
      return;
    const r = ze(e);
    if (r)
      for (s(r), n = 0, e = e.firstElementChild;e; )
        this.walkDownDOM(e, s, n++), e = e.nextElementSibling;
  }
}
var ct = (t) => t.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, s) => (s ? "-" : "") + e.toLowerCase());
var Ft = {
  prefix: "bind",
  mustNotEmptyKey: true,
  mustNotEmptyExpression: true,
  onLoad: (t) => t.reactivity.effect(async () => {
    const e = ct(t.key), s = t.expressionFn(t);
    let n;
    typeof s == "string" ? n = s : n = JSON.stringify(s), !n || n === "false" || n === "null" || n === "undefined" ? t.el.removeAttribute(e) : t.el.setAttribute(e, n);
  })
};
var Ht = /^data:(?<mime>[^;]+);base64,(?<contents>.*)$/;
var te = ["change", "input", "keydown"];
var Vt = {
  prefix: "model",
  mustHaveEmptyKey: true,
  preprocessors: {
    post: [
      {
        regexp: /(?<whole>.+)/g,
        replacer: (t) => {
          const { whole: e } = t;
          return `ctx.store().${e}`;
        }
      }
    ]
  },
  onLoad: (t) => {
    const { el: e, expression: s } = t, n = t.expressionFn(t), r = e.tagName.toLowerCase();
    if (s.startsWith("ctx.store().ctx.store()"))
      throw new Error(`Model attribute on #${e.id} must have a signal name, you probably prefixed with \$ by accident`);
    const o = r.includes("input"), i = e.getAttribute("type"), f = r.includes("checkbox") || o && i === "checkbox", l = r.includes("select"), g = r.includes("radio") || o && i === "radio", c = o && i === "file", d = s.replaceAll("ctx.store().", "");
    g && (e.getAttribute("name")?.length || e.setAttribute("name", d));
    const v = () => {
      if (!n)
        throw new Error(`Signal ${d} not found`);
      const p = "value" in e, a = n.value;
      if (f || g) {
        const b = e;
        f ? b.checked = a : g && (b.checked = `${a}` === b.value);
      } else if (!c)
        if (l) {
          const b = e;
          if (b.multiple) {
            const w = n.value;
            Array.from(b.options).forEach((m) => {
              m?.disabled || (m.selected = w.includes(m.value));
            });
          } else
            b.value = `${a}`;
        } else
          p ? e.value = `${a}` : e.setAttribute("value", `${a}`);
    }, u = t.reactivity.effect(v), E = async () => {
      if (c) {
        const b = [...e?.files || []], w = [], m = [], S = [];
        await Promise.all(b.map((V) => new Promise((Q) => {
          const $ = new FileReader;
          $.onload = () => {
            if (typeof $.result != "string")
              throw new Error(`Invalid result type: ${typeof $.result}`);
            const j = $.result.match(Ht);
            if (!j?.groups)
              throw new Error(`Invalid data URI: ${$.result}`);
            w.push(j.groups.contents), m.push(j.groups.mime), S.push(V.name);
          }, $.onloadend = () => Q(undefined), $.readAsDataURL(V);
        }))), n.value = w;
        const P = t.store(), C = `${d}Mimes`, D = `${d}Names`;
        C in P && (P[`${C}`].value = m), D in P && (P[`${D}`].value = S);
        return;
      }
      const p = n.value, a = e || e;
      if (typeof p == "number")
        n.value = Number(a.value || a.getAttribute("value"));
      else if (typeof p == "string")
        n.value = a.value || a.getAttribute("value") || "";
      else if (typeof p == "boolean")
        f ? n.value = a.checked || a.getAttribute("checked") === "true" : n.value = !!(a.value || a.getAttribute("value"));
      else if (!(typeof p > "u"))
        if (typeof p == "bigint")
          n.value = BigInt(a.value || a.getAttribute("value") || "0");
        else if (Array.isArray(p)) {
          if (l) {
            const m = [...e.selectedOptions].map((S) => S.value);
            n.value = m;
          } else
            n.value = JSON.parse(a.value).split(",");
          console.log(a.value);
        } else
          throw console.log(typeof p), new Error(`Unsupported type ${typeof p} for signal ${d}`);
    }, y = e.tagName.split("-");
    if (y.length > 1) {
      const p = y[0].toLowerCase();
      te.forEach((a) => {
        te.push(`${p}-${a}`);
      });
    }
    return te.forEach((p) => e.addEventListener(p, E)), () => {
      u(), te.forEach((p) => e.removeEventListener(p, E));
    };
  }
};
var xt = {
  prefix: "text",
  mustHaveEmptyKey: true,
  onLoad: (t) => {
    const { el: e, expressionFn: s } = t;
    if (!(e instanceof HTMLElement))
      throw new Error("Element is not HTMLElement");
    return t.reactivity.effect(() => {
      const n = s(t);
      e.textContent = `${n}`;
    });
  }
};
var $e = "";
var jt = /* @__PURE__ */ new Set(["window", "once", "passive", "capture", "debounce", "throttle", "remote", "outside"]);
var Ut = {
  prefix: "on",
  mustNotEmptyKey: true,
  mustNotEmptyExpression: true,
  argumentNames: ["evt"],
  onLoad: (t) => {
    const { el: e, key: s, expressionFn: n } = t;
    let r = t.el;
    t.modifiers.get("window") && (r = window);
    let o = (d) => {
      N("plugin", "event", s, r, "triggered"), n(t, d);
    };
    const i = t.modifiers.get("debounce");
    if (i) {
      const d = _e(i), v = se(i, "leading", false), u = se(i, "noTrail", true);
      o = Jt(o, d, v, u);
    }
    const f = t.modifiers.get("throttle");
    if (f) {
      const d = _e(f), v = se(f, "noLead", true), u = se(f, "noTrail", false);
      o = Kt(o, d, v, u);
    }
    const l = {
      capture: true,
      passive: false,
      once: false
    };
    t.modifiers.has("capture") || (l.capture = false), t.modifiers.has("passive") && (l.passive = true), t.modifiers.has("once") && (l.once = true), [...t.modifiers.keys()].filter((d) => !jt.has(d)).forEach((d) => {
      const v = t.modifiers.get(d) || [], u = o;
      o = () => {
        const y = event, h = y[d];
        let p;
        if (typeof h == "function")
          p = h(...v);
        else if (typeof h == "boolean")
          p = h;
        else if (typeof h == "string") {
          const a = h.toLowerCase().trim(), b = v.join("").toLowerCase().trim();
          p = a === b;
        } else {
          const a = `Invalid value for ${d} modifier on ${s} on ${e}`;
          console.error(a);
          debugger;
          throw new Error(a);
        }
        p && u(y);
      };
    });
    const c = ct(s).toLowerCase();
    switch (c) {
      case "load":
        return o(), delete t.el.dataset.onLoad, () => {
        };
      case "raf":
        let d;
        const v = () => {
          o(), d = requestAnimationFrame(v);
        };
        return d = requestAnimationFrame(v), () => {
          d && cancelAnimationFrame(d);
        };
      case "store-change":
        return t.reactivity.effect(() => {
          let y = t.store().value;
          t.modifiers.has("remote") && (y = he(y));
          const h = JSON.stringify(y);
          $e !== h && ($e = h, o());
        });
      default:
        if (t.modifiers.has("outside")) {
          r = document;
          const E = o;
          let y = false;
          o = (p) => {
            const a = p?.target;
            if (!a)
              return;
            const b = e.id === a.id;
            b && y && (y = false), !b && !y && (E(p), y = true);
          };
        }
        return r.addEventListener(c, o, l), () => {
          r.removeEventListener(c, o);
        };
    }
  }
};
function he(t) {
  const e = {};
  for (const [s, n] of Object.entries(t))
    s.startsWith("_") || (typeof n == "object" && !Array.isArray(n) ? e[s] = he(n) : e[s] = n);
  return e;
}
var Bt = {
  prefix: "class",
  mustHaveEmptyKey: true,
  mustNotEmptyExpression: true,
  onLoad: (t) => t.reactivity.effect(() => {
    const e = t.expressionFn(t);
    for (const [s, n] of Object.entries(e))
      n ? t.el.classList.add(s) : t.el.classList.remove(s);
    return () => {
      t.el.classList.remove(...Object.keys(e));
    };
  })
};
var Wt = [
  Ft,
  Vt,
  xt,
  Ut,
  Bt
];
var qt = {
  remote: async (t) => he(t.store().value)
};
function _e(t) {
  if (!t || t?.length === 0)
    return 0;
  for (const e of t) {
    if (e.endsWith("ms"))
      return Number(e.replace("ms", ""));
    if (e.endsWith("s"))
      return Number(e.replace("s", "")) * 1000;
    try {
      return parseFloat(e);
    } catch {
    }
  }
  return 0;
}
function se(t, e, s = false) {
  return t ? t.includes(e) || s : false;
}
function Jt(t, e, s = false, n = true) {
  let r;
  const o = () => r && clearTimeout(r);
  return function(...f) {
    o(), s && !r && t(...f), r = setTimeout(() => {
      n && t(...f), o();
    }, e);
  };
}
function Kt(t, e, s = true, n = false) {
  let r = false;
  return function(...i) {
    r || (s && t(...i), r = true, setTimeout(() => {
      r = false, n && t(...i);
    }, e));
  };
}
function Gt(t, {
  signal: e,
  headers: s,
  onopen: n,
  onmessage: r,
  onclose: o,
  onerror: i,
  openWhenHidden: f,
  ...l
}) {
  return new Promise((g, c) => {
    let d = 0;
    const v = { ...s };
    v.accept || (v.accept = Se);
    let u;
    function E() {
      u.abort(), document.hidden || b();
    }
    f || document.addEventListener("visibilitychange", E);
    let y = Oe, h = 0;
    function p() {
      document.removeEventListener("visibilitychange", E), window.clearTimeout(h), u.abort();
    }
    e?.addEventListener("abort", () => {
      p(), g();
    });
    const a = n ?? Zt;
    async function b() {
      u = new AbortController;
      try {
        const w = await fetch(t, {
          ...l,
          headers: v,
          signal: u.signal
        });
        await a(w), await Xt(w.body, Qt(es((m) => {
          m ? v[Ie] = m : delete v[Ie];
        }, (m) => {
          y = m;
        }, r))), o?.(), p(), g();
      } catch (w) {
        if (!u.signal.aborted)
          try {
            const m = i?.(w) ?? y;
            window.clearTimeout(h), h = window.setTimeout(b, m), y *= 1.5, y = Math.min(y, Yt), d++, d >= zt ? (p(), c(new Error("Max retries hit, check your server or network connection."))) : console.error(`Error fetching event source, retrying in ${m}ms`);
          } catch (m) {
            p(), c(m);
          }
      }
    }
    y = Oe, b();
  });
}
var Se = "text/event-stream";
var Oe = 100;
var Yt = 1e4;
var zt = 10;
var Ie = "last-event-id";
function Zt(t) {
  const e = t.headers.get("content-type");
  if (!e?.startsWith(Se))
    throw new Error(`Expected content-type to be ${Se}, Actual: ${e}`);
}
async function Xt(t, e) {
  const s = t.getReader();
  for (;; ) {
    const n = await s.read();
    if (n.done)
      break;
    e(n.value);
  }
}
function Qt(t) {
  let e, s, n, r = false;
  return function(i) {
    e === undefined ? (e = i, s = 0, n = -1) : e = ts(e, i);
    const f = e.length;
    let l = 0;
    for (;s < f; ) {
      r && (e[s] === 10 && (l = ++s), r = false);
      let g = -1;
      for (;s < f && g === -1; ++s)
        switch (e[s]) {
          case 58:
            n === -1 && (n = s - l);
            break;
          case 13:
            r = true;
          case 10:
            g = s;
            break;
        }
      if (g === -1)
        break;
      t(e.subarray(l, g), n), l = s, n = -1;
    }
    l === f ? e = undefined : l !== 0 && (e = e.subarray(l), s -= l);
  };
}
function es(t, e, s) {
  let n = Re();
  const r = new TextDecoder;
  return function(i, f) {
    if (i.length === 0)
      s?.(n), n = Re();
    else if (f > 0) {
      const l = r.decode(i.subarray(0, f)), g = f + (i[f + 1] === 32 ? 2 : 1), c = r.decode(i.subarray(g));
      switch (l) {
        case "data":
          n.data = n.data ? n.data + `
` + c : c;
          break;
        case "event":
          n.event = c;
          break;
        case "id":
          t(n.id = c);
          break;
        case "retry":
          const d = parseInt(c, 10);
          isNaN(d) || e(n.retry = d);
          break;
      }
    }
  };
}
function ts(t, e) {
  const s = new Uint8Array(t.length + e.length);
  return s.set(t), s.set(e, t.length), s;
}
function Re() {
  return {
    data: "",
    event: "",
    id: "",
    retry: undefined
  };
}
var ie = /* @__PURE__ */ new WeakSet;
function ss(t, e, s = {}) {
  t instanceof Document && (t = t.documentElement);
  let n;
  typeof e == "string" ? n = as(e) : n = e;
  const r = ls(n), o = rs(t, r, s);
  return ut(t, r, o);
}
function ut(t, e, s) {
  if (s.head.block) {
    const n = t.querySelector("head"), r = e.querySelector("head");
    if (n && r) {
      const o = dt(r, n, s);
      Promise.all(o).then(() => {
        ut(t, e, Object.assign(s, {
          head: {
            block: false,
            ignore: true
          }
        }));
      });
      return;
    }
  }
  if (s.morphStyle === "innerHTML")
    return ft(e, t, s), t.children;
  if (s.morphStyle === "outerHTML" || s.morphStyle == null) {
    const n = us(e, t, s);
    if (!n)
      throw new Error("Could not find best match");
    const r = n?.previousSibling, o = n?.nextSibling, i = ae(t, n, s);
    return n ? cs(r, i, o) : [];
  } else
    throw "Do not understand how to morph style " + s.morphStyle;
}
function ae(t, e, s) {
  if (!(s.ignoreActive && t === document.activeElement))
    if (e == null) {
      if (s.callbacks.beforeNodeRemoved(t) === false)
        return;
      t.remove(), s.callbacks.afterNodeRemoved(t);
      return;
    } else {
      if (ce(t, e))
        return s.callbacks.beforeNodeMorphed(t, e) === false ? undefined : (t instanceof HTMLHeadElement && s.head.ignore || (e instanceof HTMLHeadElement && t instanceof HTMLHeadElement && s.head.style !== "morph" ? dt(e, t, s) : (ns(e, t), ft(e, t, s))), s.callbacks.afterNodeMorphed(t, e), t);
      if (s.callbacks.beforeNodeRemoved(t) === false || s.callbacks.beforeNodeAdded(e) === false)
        return;
      if (!t.parentElement)
        throw new Error("oldNode has no parentElement");
      return t.parentElement.replaceChild(e, t), s.callbacks.afterNodeAdded(e), s.callbacks.afterNodeRemoved(t), e;
    }
}
function ft(t, e, s) {
  let n = t.firstChild, r = e.firstChild, o;
  for (;n; ) {
    if (o = n, n = o.nextSibling, r == null) {
      if (s.callbacks.beforeNodeAdded(o) === false)
        return;
      e.appendChild(o), s.callbacks.afterNodeAdded(o), x(s, o);
      continue;
    }
    if (ht(o, r, s)) {
      ae(r, o, s), r = r.nextSibling, x(s, o);
      continue;
    }
    let i = os(t, e, o, r, s);
    if (i) {
      r = Ce(r, i, s), ae(i, o, s), x(s, o);
      continue;
    }
    let f = is(t, o, r, s);
    if (f) {
      r = Ce(r, f, s), ae(f, o, s), x(s, o);
      continue;
    }
    if (s.callbacks.beforeNodeAdded(o) === false)
      return;
    e.insertBefore(o, r), s.callbacks.afterNodeAdded(o), x(s, o);
  }
  for (;r !== null; ) {
    let i = r;
    r = r.nextSibling, pt(i, s);
  }
}
function ns(t, e) {
  let s = t.nodeType;
  if (s === 1) {
    for (const n of t.attributes)
      e.getAttribute(n.name) !== n.value && e.setAttribute(n.name, n.value);
    for (const n of e.attributes)
      t.hasAttribute(n.name) || e.removeAttribute(n.name);
  }
  if ((s === Node.COMMENT_NODE || s === Node.TEXT_NODE) && e.nodeValue !== t.nodeValue && (e.nodeValue = t.nodeValue), t instanceof HTMLInputElement && e instanceof HTMLInputElement && t.type !== "file")
    e.value = t.value || "", ne(t, e, "value"), ne(t, e, "checked"), ne(t, e, "disabled");
  else if (t instanceof HTMLOptionElement)
    ne(t, e, "selected");
  else if (t instanceof HTMLTextAreaElement && e instanceof HTMLTextAreaElement) {
    const n = t.value, r = e.value;
    n !== r && (e.value = n), e.firstChild && e.firstChild.nodeValue !== n && (e.firstChild.nodeValue = n);
  }
}
function ne(t, e, s) {
  const n = t.getAttribute(s), r = e.getAttribute(s);
  n !== r && (n ? e.setAttribute(s, n) : e.removeAttribute(s));
}
function dt(t, e, s) {
  const n = [], r = [], o = [], i = [], f = s.head.style, l = /* @__PURE__ */ new Map;
  for (const c of t.children)
    l.set(c.outerHTML, c);
  for (const c of e.children) {
    let d = l.has(c.outerHTML), v = s.head.shouldReAppend(c), u = s.head.shouldPreserve(c);
    d || u ? v ? r.push(c) : (l.delete(c.outerHTML), o.push(c)) : f === "append" ? v && (r.push(c), i.push(c)) : s.head.shouldRemove(c) !== false && r.push(c);
  }
  i.push(...l.values());
  const g = [];
  for (const c of i) {
    const d = document.createRange().createContextualFragment(c.outerHTML).firstChild;
    if (!d)
      throw new Error("could not create new element from: " + c.outerHTML);
    if (s.callbacks.beforeNodeAdded(d)) {
      if (d.hasAttribute("href") || d.hasAttribute("src")) {
        let v;
        const u = new Promise((E) => {
          v = E;
        });
        d.addEventListener("load", function() {
          v(undefined);
        }), g.push(u);
      }
      e.appendChild(d), s.callbacks.afterNodeAdded(d), n.push(d);
    }
  }
  for (const c of r)
    s.callbacks.beforeNodeRemoved(c) !== false && (e.removeChild(c), s.callbacks.afterNodeRemoved(c));
  return s.head.afterHeadMorphed(e, {
    added: n,
    kept: o,
    removed: r
  }), g;
}
function F() {
}
function rs(t, e, s) {
  return {
    target: t,
    newContent: e,
    config: s,
    morphStyle: s.morphStyle,
    ignoreActive: s.ignoreActive,
    idMap: ps(t, e),
    deadIds: /* @__PURE__ */ new Set,
    callbacks: Object.assign({
      beforeNodeAdded: F,
      afterNodeAdded: F,
      beforeNodeMorphed: F,
      afterNodeMorphed: F,
      beforeNodeRemoved: F,
      afterNodeRemoved: F
    }, s.callbacks),
    head: Object.assign({
      style: "merge",
      shouldPreserve: (n) => n.getAttribute("im-preserve") === "true",
      shouldReAppend: (n) => n.getAttribute("im-re-append") === "true",
      shouldRemove: F,
      afterHeadMorphed: F
    }, s.head)
  };
}
function ht(t, e, s) {
  return !t || !e ? false : t.nodeType === e.nodeType && t.tagName === e.tagName ? t?.id?.length && t.id === e.id ? true : z(s, t, e) > 0 : false;
}
function ce(t, e) {
  return !t || !e ? false : t.nodeType === e.nodeType && t.tagName === e.tagName;
}
function Ce(t, e, s) {
  for (;t !== e; ) {
    const n = t;
    if (t = t?.nextSibling, !n)
      throw new Error("tempNode is null");
    pt(n, s);
  }
  return x(s, e), e.nextSibling;
}
function os(t, e, s, n, r) {
  const o = z(r, s, e);
  let i = null;
  if (o > 0) {
    i = n;
    let f = 0;
    for (;i != null; ) {
      if (ht(s, i, r))
        return i;
      if (f += z(r, i, t), f > o)
        return null;
      i = i.nextSibling;
    }
  }
  return i;
}
function is(t, e, s, n) {
  let r = s, o = e.nextSibling, i = 0;
  for (;r && o; ) {
    if (z(n, r, t) > 0)
      return null;
    if (ce(e, r))
      return r;
    if (ce(o, r) && (i++, o = o.nextSibling, i >= 2))
      return null;
    r = r.nextSibling;
  }
  return r;
}
var De = new DOMParser;
function as(t) {
  const e = t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "");
  if (e.match(/<\/html>/) || e.match(/<\/head>/) || e.match(/<\/body>/)) {
    const s = De.parseFromString(t, "text/html");
    if (e.match(/<\/html>/))
      return ie.add(s), s;
    {
      let n = s.firstChild;
      return n ? (ie.add(n), n) : null;
    }
  } else {
    const n = De.parseFromString(`<body><template>${t}</template></body>`, "text/html").body.querySelector("template")?.content;
    if (!n)
      throw new Error("content is null");
    return ie.add(n), n;
  }
}
function ls(t) {
  if (t == null)
    return document.createElement("div");
  if (ie.has(t))
    return t;
  if (t instanceof Node) {
    const e = document.createElement("div");
    return e.append(t), e;
  } else {
    const e = document.createElement("div");
    for (const s of [...t])
      e.append(s);
    return e;
  }
}
function cs(t, e, s) {
  const n = [], r = [];
  for (;t; )
    n.push(t), t = t.previousSibling;
  for (;n.length > 0; ) {
    const o = n.pop();
    r.push(o), e?.parentElement?.insertBefore(o, e);
  }
  for (r.push(e);s; )
    n.push(s), r.push(s), s = s.nextSibling;
  for (;n.length; )
    e?.parentElement?.insertBefore(n.pop(), e.nextSibling);
  return r;
}
function us(t, e, s) {
  let n = t.firstChild, r = n, o = 0;
  for (;n; ) {
    let i = fs(n, e, s);
    i > o && (r = n, o = i), n = n.nextSibling;
  }
  return r;
}
function fs(t, e, s) {
  return ce(t, e) ? 0.5 + z(s, t, e) : 0;
}
function pt(t, e) {
  x(e, t), e.callbacks.beforeNodeRemoved(t) !== false && (t.remove(), e.callbacks.afterNodeRemoved(t));
}
function ds(t, e) {
  return !t.deadIds.has(e);
}
function hs(t, e, s) {
  return t.idMap.get(s)?.has(e) || false;
}
function x(t, e) {
  const s = t.idMap.get(e);
  if (s)
    for (const n of s)
      t.deadIds.add(n);
}
function z(t, e, s) {
  const n = t.idMap.get(e);
  if (!n)
    return 0;
  let r = 0;
  for (const o of n)
    ds(t, o) && hs(t, o, s) && ++r;
  return r;
}
function Fe(t, e) {
  const s = t.parentElement, n = t.querySelectorAll("[id]");
  for (const r of n) {
    let o = r;
    for (;o !== s && o; ) {
      let i = e.get(o);
      i == null && (i = /* @__PURE__ */ new Set, e.set(o, i)), i.add(r.id), o = o.parentElement;
    }
  }
}
function ps(t, e) {
  const s = /* @__PURE__ */ new Map;
  return Fe(t, s), Fe(e, s), s;
}
var ge = "display";
var He = "none";
var ve = "important";
var Ve = "duration";
var ms = "show";
var be = `${k}showing`;
var ye = `${k}hiding`;
var xe = `${k}show-transition-style`;
var gs = {
  prefix: ms,
  allowedModifiers: /* @__PURE__ */ new Set([ve, Ve]),
  onLoad: (t) => {
    const { el: e, modifiers: s, expressionFn: n, reactivity: r } = t, i = s.has(ve) ? ve : undefined;
    let f, l;
    const g = t.modifiers.get(Ve);
    if (g) {
      let c = document.getElementById(xe);
      if (!c) {
        c = document.createElement("style"), c.id = xe, document.head.appendChild(c);
        const v = _e(g) || "300";
        c.innerHTML = `
          .${be} {
            visibility: visible;
            transition: opacity ${v}ms linear;
          }
          .${ye} {
            visibility: hidden;
            transition: visibility 0s ${v}ms, opacity ${v}ms linear;
          }
        `;
      }
      const d = (v) => (u) => {
        u.target === e && (e.classList.remove(v), e.removeEventListener("transitionend", d(v)));
      };
      f = () => {
        e.addEventListener("transitionend", d(be)), e.classList.add(be), requestAnimationFrame(() => {
          e.style.setProperty("opacity", "1", i);
        });
      }, l = () => {
        e.addEventListener("transitionend", d(ye)), e.classList.add(ye), requestAnimationFrame(() => {
          e.style.setProperty("opacity", "0", i);
        });
      };
    } else
      f = () => {
        e.style.length === 1 && e.style.display === He ? e.style.removeProperty(ge) : e.style.setProperty(ge, "", i);
      }, l = () => {
        e.style.setProperty(ge, He, i);
      };
    return r.effect(async () => {
      await n(t) ? f() : l();
    });
  }
};
var vs = "intersects";
var je = "once";
var Ue = "half";
var Be = "full";
var bs = {
  prefix: vs,
  allowedModifiers: /* @__PURE__ */ new Set([je, Ue, Be]),
  mustHaveEmptyKey: true,
  onLoad: (t) => {
    const { modifiers: e } = t, s = { threshold: 0 };
    e.has(Be) ? s.threshold = 1 : e.has(Ue) && (s.threshold = 0.5);
    const n = new IntersectionObserver((r) => {
      r.forEach((o) => {
        o.isIntersecting && (t.expressionFn(t), e.has(je) && (n.disconnect(), delete t.el.dataset[t.rawKey]));
      });
    }, s);
    return n.observe(t.el), () => n.disconnect();
  }
};
var We = "prepend";
var qe = "append";
var Je = new Error("Target element must have a parent if using prepend or append");
var ys = {
  prefix: "teleport",
  allowedModifiers: /* @__PURE__ */ new Set([We, qe]),
  allowedTagRegexps: /* @__PURE__ */ new Set(["template"]),
  bypassExpressionFunctionCreation: () => true,
  onLoad: (t) => {
    const { el: e, modifiers: s, expression: n } = t;
    if (!(e instanceof HTMLTemplateElement))
      throw new Error("el must be a template element");
    const r = document.querySelector(n);
    if (!r)
      throw new Error(`Target element not found: ${n}`);
    if (!e.content)
      throw new Error("Template element must have content");
    const o = e.content.cloneNode(true);
    if (ze(o)?.firstElementChild)
      throw new Error("Empty template");
    if (s.has(We)) {
      if (!r.parentNode)
        throw Je;
      r.parentNode.insertBefore(o, r);
    } else if (s.has(qe)) {
      if (!r.parentNode)
        throw Je;
      r.parentNode.insertBefore(o, r.nextSibling);
    } else
      r.appendChild(o);
  }
};
var ws = {
  prefix: "scrollIntoView",
  mustHaveEmptyKey: true,
  mustHaveEmptyExpression: true,
  allowedModifiers: /* @__PURE__ */ new Set([
    "smooth",
    "instant",
    "auto",
    "hstart",
    "hcenter",
    "hend",
    "hnearest",
    "vstart",
    "vcenter",
    "vend",
    "vnearest",
    "focus"
  ]),
  onLoad: ({ el: t, modifiers: e, rawKey: s }) => {
    t.tabIndex || t.setAttribute("tabindex", "0");
    const n = {
      behavior: "smooth",
      block: "center",
      inline: "center"
    };
    return e.has("smooth") && (n.behavior = "smooth"), e.has("instant") && (n.behavior = "instant"), e.has("auto") && (n.behavior = "auto"), e.has("hstart") && (n.inline = "start"), e.has("hcenter") && (n.inline = "center"), e.has("hend") && (n.inline = "end"), e.has("hnearest") && (n.inline = "nearest"), e.has("vstart") && (n.block = "start"), e.has("vcenter") && (n.block = "center"), e.has("vend") && (n.block = "end"), e.has("vnearest") && (n.block = "nearest"), vt(t, n, e.has("focus")), delete t.dataset[s], () => {
    };
  }
};
var mt = document;
var gt = !!mt.startViewTransition;
var Es = {
  prefix: "viewTransition",
  onGlobalInit() {
    let t = false;
    if (document.head.childNodes.forEach((e) => {
      e instanceof HTMLMetaElement && e.name === "view-transition" && (t = true);
    }), !t) {
      const e = document.createElement("meta");
      e.name = "view-transition", e.content = "same-origin", document.head.appendChild(e);
    }
  },
  onLoad: (t) => {
    if (!gt) {
      console.error("Browser does not support view transitions");
      return;
    }
    return t.reactivity.effect(() => {
      const { el: e, expressionFn: s } = t;
      let n = s(t);
      if (!n)
        return;
      const r = e.style;
      r.viewTransitionName = n;
    });
  }
};
var _s = [
  gs,
  bs,
  ys,
  ws,
  Es
];
var Ss = {
  scroll: async (t, e, s) => {
    const n = Object.assign({ behavior: "smooth", vertical: "center", horizontal: "center", shouldFocus: true }, s), r = document.querySelector(e);
    vt(r, n);
  }
};
function vt(t, e, s = true) {
  if (!(t instanceof HTMLElement || t instanceof SVGElement))
    throw new Error("Element not found");
  t.tabIndex || t.setAttribute("tabindex", "0"), t.scrollIntoView(e), s && t.focus();
}
var Ts = 500;
var As = true;
var Ns = "morph";
var Ls = "Content-Type";
var ks = `${U}-request`;
var Ms = "application/json";
var Ps = "true";
var $s = `${k}fragment`;
var Os = `${k}signal`;
var Is = `${k}delete`;
var Rs = `${k}redirect`;
var Cs = `${k}console`;
var Z = `${k}indicator`;
var Te = `${Z}-loading`;
var Ke = `${k}settling`;
var re = `${k}swapping`;
var Ds = "self";
var Fs = "get";
var Hs = "post";
var Vs = "put";
var xs = "patch";
var js = "delete";
var I = {
  MorphElement: "morph",
  InnerElement: "inner",
  OuterElement: "outer",
  PrependElement: "prepend",
  AppendElement: "append",
  BeforeElement: "before",
  AfterElement: "after",
  UpsertAttributes: "upsert_attributes"
};
var Us = {
  prefix: "fetchIndicator",
  mustHaveEmptyKey: true,
  mustNotEmptyExpression: true,
  onGlobalInit: () => {
    const t = document.createElement("style");
    t.innerHTML = `
.${Z}{
 opacity:0;
 transition: opacity 300ms ease-out;
}
.${Te} {
 opacity:1;
 transition: opacity 300ms ease-in;
}
`, document.head.appendChild(t);
  },
  onLoad: (t) => t.reactivity.effect(() => {
    t.upsertIfMissingFromStore("_dsPlugins.fetch.indicatorElements", {}), t.upsertIfMissingFromStore("_dsPlugins.fetch.indicatorsVisible", []);
    const e = t.reactivity.computed(() => `${t.expressionFn(t)}`), s = t.store(), n = document.querySelectorAll(e.value);
    if (n.length === 0)
      throw new Error("No indicator found");
    return n.forEach((r) => {
      r.classList.add(Z);
    }), s._dsPlugins.fetch.indicatorElements[t.el.id] = t.reactivity.signal(n), () => {
      delete s._dsPlugins.fetch.indicatorElements[t.el.id];
    };
  })
};
var Bs = {
  prefix: "header",
  mustNotEmptyKey: true,
  mustNotEmptyExpression: true,
  preprocessors: {
    post: [
      {
        regexp: /(?<whole>.+)/g,
        replacer: (t) => {
          const { whole: e } = t;
          return `'${e}'`;
        }
      }
    ]
  },
  onLoad: (t) => {
    t.upsertIfMissingFromStore("_dsPlugins.fetch.headers", {});
    const e = t.key.replace(/([a-z](?=[A-Z]))/g, "$1-").toUpperCase(), s = t.expressionFn(t);
    return t.store()._dsPlugins.fetch.headers[e] = s, () => {
      delete t.store()._dsPlugins.fetch.headers[e];
    };
  }
};
var Ws = [Us, Bs];
async function qs(t, e, s, n = true) {
  const r = s.store();
  if (!e)
    throw new Error(`No signal for ${t} on ${e}`);
  let o = { ...r.value };
  n && (o = he(o));
  const i = JSON.stringify(o), f = s.el;
  N("plugin", "backend", "fetch_start", f, JSON.stringify({ method: t, urlExpression: e, onlyRemote: n, storeJSON: i }));
  const l = r?._dsPlugins?.fetch?.indicatorElements ? r._dsPlugins.fetch.indicatorElements[f.id]?.value || [] : [], g = r?._dsPlugins.fetch?.indicatorsVisible;
  l?.forEach && l.forEach((u) => {
    if (!u || !g)
      return;
    const E = g.value.findIndex((y) => y ? u.isSameNode(y.el) : false);
    if (E > -1) {
      const y = g.value[E], h = [...g.value];
      delete h[E], g.value = [
        ...h.filter((p) => !!p),
        { el: u, count: y.count + 1 }
      ];
    } else
      u.classList.remove(Z), u.classList.add(Te), g.value = [
        ...g.value,
        {
          el: u,
          count: 1
        }
      ];
  });
  const c = new URL(e, window.location.origin);
  t = t.toUpperCase();
  const d = {
    method: t,
    headers: {
      [Ls]: Ms,
      [ks]: Ps
    },
    onmessage: (u) => {
      if (u.event) {
        if (!u.event.startsWith(k)) {
          console.log(`Unknown event: ${u.event}`);
          debugger;
        }
      } else
        return;
      switch (u.event) {
        case $s:
          const E = u.data.trim().split(`
`), y = ["selector", "merge", "settle", "fragment", "vt"];
          let h = "", p = Ns, a = Ts, b = As, w = false, m = "", S = "";
          for (let L = 0;L < E.length; L++) {
            let A = E[L];
            if (!A?.length)
              continue;
            const M = A.split(" ", 1)[0];
            if (y.includes(M) && M !== S)
              switch (S = M, A = A.slice(M.length + 1), S) {
                case "selector":
                  m = A;
                  break;
                case "merge":
                  if (p = A, w = Object.values(I).includes(p), !w)
                    throw new Error(`Unknown merge option: ${p}`);
                  break;
                case "settle":
                  a = parseInt(A);
                  break;
                case "fragment":
                  break;
                case "vt":
                  b = A === "true";
                  break;
                default:
                  throw new Error("Unknown data type");
              }
            S === "fragment" && (h += A + `
`);
          }
          h?.length || (h = "<div></div>"), Js(s, m, p, h, a, b), N("plugin", "backend", "merge", m, JSON.stringify({ fragment: h, settleTime: a, useViewTransition: b }));
          break;
        case Os:
          let P = false, C = "";
          const D = u.data.trim().split(`
`);
          for (let L = 0;L < D.length; L++) {
            const A = D[L], [M, ...ee] = A.split(" "), me = ee.join(" ");
            switch (M) {
              case "onlyIfMissing":
                P = me.trim() === "true";
                break;
              case "store":
                C += `${me}
`;
                break;
              default:
                throw new Error(`Unknown signal type: ${M}`);
            }
          }
          const V = ` return Object.assign({...ctx.store()}, ${C})`;
          try {
            const A = new Function("ctx", V)(s), M = lt(s.store(), A, P);
            s.mergeStore(M), s.applyPlugins(document.body);
          } catch (L) {
            console.log(V), console.error(L);
            debugger;
          }
          break;
        case Is:
          const [Q, ...$] = u.data.trim().split(" ");
          switch (Q) {
            case "selector":
              const L = $.join(" ");
              document.querySelectorAll(L).forEach((ee) => ee.remove());
              break;
            case "paths":
              const M = $.join(" ").split(" ");
              s.removeFromStore(...M);
              break;
            default:
              throw new Error(`Unknown delete prefix: ${Q}`);
          }
          break;
        case Rs:
          const [j, ...yt] = u.data.trim().split(" ");
          if (j !== "url")
            throw new Error(`Unknown redirect selector: ${j}`);
          const Me = yt.join(" ");
          N("plugin", "backend", "redirect", "WINDOW", Me), window.location.href = Me;
          break;
        case Cs:
          const [pe, ...wt] = u.data.trim().split(" "), Pe = wt.join(" ");
          switch (pe) {
            case "debug":
            case "error":
            case "info":
            case "group":
            case "groupEnd":
            case "log":
            case "warn":
              console[pe](Pe);
              break;
            default:
              throw new Error(`Unknown console mode: '${pe}', message: '${Pe}'`);
          }
      }
    },
    onerror: (u) => {
      console.error(u);
    },
    onclose: () => {
      try {
        const u = s.store(), E = u?._dsPlugins?.fetch?.indicatorsVisible || [], y = u?._dsPlugins?.fetch?.indicatorElements ? u._dsPlugins.fetch.indicatorElements[f.id]?.value || [] : [], h = [];
        y?.forEach && y.forEach((p) => {
          if (!p || !E)
            return;
          const a = E.value, b = a.findIndex((m) => m ? p.isSameNode(m.el) : false), w = a[b];
          w && (w.count < 2 ? (h.push(new Promise(() => setTimeout(() => {
            p.classList.remove(Te), p.classList.add(Z);
          }, 300))), delete a[b]) : b > -1 && (a[b].count = a[b].count - 1), E.value = a.filter((m) => !!m));
        }), Promise.all(h);
      } catch (u) {
        console.error(u);
        debugger;
      } finally {
        N("plugin", "backend", "fetch_end", f, JSON.stringify({ method: t, urlExpression: e }));
      }
    }
  };
  if (t === "GET") {
    const u = new URLSearchParams(c.search);
    u.append("datastar", i), c.search = u.toString();
  } else
    d.body = i;
  const v = r?._dsPlugins?.fetch?.headers || {};
  if (d.headers)
    for (const [u, E] of Object.entries(v))
      u.startsWith("_") || (d.headers[u] = `${E}`);
  Gt(c, d);
}
var Ge = document.createElement("template");
function Js(t, e, s, n, r, o) {
  const { el: i } = t;
  Ge.innerHTML = n.trim(), [...Ge.content.children].forEach((l) => {
    if (!(l instanceof Element))
      throw new Error("No fragment found");
    const g = (u) => {
      for (const E of u) {
        E.classList.add(re);
        const y = E.outerHTML;
        let h = E;
        switch (s) {
          case I.MorphElement:
            const a = ss(h, l, {
              callbacks: {
                beforeNodeRemoved: (w, m) => (t.cleanupElementRemovals(w), true)
              }
            });
            if (!a?.length)
              throw new Error("No morph result");
            h = a[0];
            break;
          case I.InnerElement:
            h.innerHTML = l.innerHTML;
            break;
          case I.OuterElement:
            h.replaceWith(l);
            break;
          case I.PrependElement:
            h.prepend(l);
            break;
          case I.AppendElement:
            h.append(l);
            break;
          case I.BeforeElement:
            h.before(l);
            break;
          case I.AfterElement:
            h.after(l);
            break;
          case I.UpsertAttributes:
            l.getAttributeNames().forEach((w) => {
              const m = l.getAttribute(w);
              h.setAttribute(w, m);
            });
            break;
          default:
            throw new Error(`Unknown merge type: ${s}`);
        }
        t.cleanupElementRemovals(h), h.classList.add(re), t.applyPlugins(document.body), setTimeout(() => {
          E.classList.remove(re), h.classList.remove(re);
        }, r);
        const p = h.outerHTML;
        y !== p && (h.classList.add(Ke), setTimeout(() => {
          h.classList.remove(Ke);
        }, r));
      }
    }, c = e === Ds;
    let d;
    if (c)
      d = [i];
    else {
      const u = e || `#${l.getAttribute("id")}`;
      if (d = document.querySelectorAll(u) || [], !d)
        throw new Error(`No targets found for ${u}`);
    }
    const v = [...d];
    if (!v.length)
      throw new Error(`No targets found for ${e}`);
    gt && o ? mt.startViewTransition(() => g(v)) : g(v);
  });
}
var Ks = [Fs, Hs, Vs, xs, js].reduce((t, e) => (t[e] = (s, n, r) => {
  const o = ["true", true, undefined].includes(r);
  qs(e, n, s, o);
}, t), {
  isFetching: (t, e) => {
    const s = [...document.querySelectorAll(e)], r = t.store()?._dsPlugins?.fetch.indicatorsVisible?.value || [];
    return s.length ? s.some((o) => r.filter((i) => !!i).some((i) => i.el.isSameNode(o) && i.count > 0)) : false;
  }
});
var Ye = "0.19.9";
var ke = (t, e, s, n, r, o) => (e - s) / (n - s) * (o - r) + r;
var Gs = (t, e, s, n, r, o) => Math.round(ke(t, e, s, n, r, o));
var bt = (t, e, s, n, r, o) => Math.max(r, Math.min(o, ke(t, e, s, n, r, o)));
var Ys = (t, e, s, n, r, o) => Math.round(bt(t, e, s, n, r, o));
var zs = {
  setAll: (t, e, s) => {
    const n = new RegExp(e);
    t.walkSignals((r, o) => n.test(r) && (o.value = s));
  },
  toggleAll: (t, e) => {
    const s = new RegExp(e);
    t.walkSignals((n, r) => s.test(n) && (r.value = !r.value));
  },
  clipboard: (t, e) => {
    if (!navigator.clipboard)
      throw new Error("Clipboard API not available");
    navigator.clipboard.writeText(e);
  },
  fit: ke,
  fitInt: Gs,
  clampFit: bt,
  clampFitInt: Ys
};
function Zs(t = {}, ...e) {
  const s = new Dt(t, ...e);
  return s.run(), s;
}
function Xs(t = {}, ...e) {
  const s = Object.assign({}, zs, qt, Ks, Ss, t), n = [...Ws, ..._s, ...Wt, ...e];
  return Zs(s, ...n);
}
var Qs = {
  bubbles: true,
  cancelable: true,
  composed: true
};
var Ae = window;
var N = (t, e, s, n, r, o = Qs) => {
  Ae.dispatchEvent(new CustomEvent(q, Object.assign({
    detail: {
      time: /* @__PURE__ */ new Date,
      category: t,
      subcategory: e,
      type: s,
      target: at(n),
      message: r
    }
  }, o)));
};
Ae.ds || setTimeout(() => {
  N("core", "init", "start", document.body, `Datastar v${Ye} loading`);
  const t = performance.now();
  Ae.ds = Xs();
  const e = performance.now();
  N("core", "init", "end", document.body, `Datastar v${Ye} loaded and attached to all DOM elements in ${(e - t).toFixed(2)}ms`);
  const s = document.createElement("style");
  s.innerHTML = `
.datastar-inspector-highlight {
 border: 2px solid blue;
}
`, document.head.appendChild(s), window.addEventListener("datastar-inspector-event", (n) => {
    if ("detail" in n && typeof n.detail == "object" && n.detail) {
      const { detail: r } = n;
      if ("script" in r && typeof r.script == "string")
        try {
          new Function(r.script)();
        } catch (o) {
          console.error(o);
        }
    }
  });
}, 0);
