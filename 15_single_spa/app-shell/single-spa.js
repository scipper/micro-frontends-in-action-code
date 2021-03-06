/* single-spa@5.2.1 - UMD - prod */
!(function(t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], n)
    : n(((t = t || self).singleSpa = {}));
})(this, function(t) {
  var n = Object.freeze({
      __proto__: null,
      get start() {
        return Ct;
      },
      get ensureJQuerySupport() {
        return dt;
      },
      get setBootstrapMaxTime() {
        return z;
      },
      get setMountMaxTime() {
        return X;
      },
      get setUnmountMaxTime() {
        return Y;
      },
      get setUnloadMaxTime() {
        return Z;
      },
      get registerApplication() {
        return _t;
      },
      get getMountedApps() {
        return bt;
      },
      get getAppStatus() {
        return At;
      },
      get unloadApplication() {
        return Rt;
      },
      get checkActivityFunctions() {
        return St;
      },
      get getAppNames() {
        return Nt;
      },
      get navigateToUrl() {
        return ut;
      },
      get triggerAppChange() {
        return xt;
      },
      get addErrorHandler() {
        return a;
      },
      get removeErrorHandler() {
        return c;
      },
      get mountRootParcel() {
        return W;
      },
      get NOT_LOADED() {
        return l;
      },
      get LOADING_SOURCE_CODE() {
        return h;
      },
      get NOT_BOOTSTRAPPED() {
        return p;
      },
      get BOOTSTRAPPING() {
        return m;
      },
      get NOT_MOUNTED() {
        return d;
      },
      get MOUNTING() {
        return v;
      },
      get UPDATING() {
        return g;
      },
      get LOAD_ERROR() {
        return y;
      },
      get MOUNTED() {
        return w;
      },
      get UNMOUNTING() {
        return E;
      },
      get SKIP_BECAUSE_BROKEN() {
        return O;
      }
    }),
    e = ("undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {}
    ).CustomEvent,
    r = (function() {
      try {
        var t = new e("cat", { detail: { foo: "bar" } });
        return "cat" === t.type && "bar" === t.detail.foo;
      } catch (t) {}
      return !1;
    })()
      ? e
      : "undefined" != typeof document &&
        "function" == typeof document.createEvent
      ? function(t, n) {
          var e = document.createEvent("CustomEvent");
          return (
            n
              ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail)
              : e.initCustomEvent(t, !1, !1, void 0),
            e
          );
        }
      : function(t, n) {
          var e = document.createEventObject();
          return (
            (e.type = t),
            n
              ? ((e.bubbles = Boolean(n.bubbles)),
                (e.cancelable = Boolean(n.cancelable)),
                (e.detail = n.detail))
              : ((e.bubbles = !1),
                (e.cancelable = !1),
                (e.detail = void 0)),
            e
          );
        };
  function o(t) {
    return (o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(t) {
            return typeof t;
          }
        : function(t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          })(t);
  }
  var i = [];
  function u(t, n, e) {
    var r = f(t, n, e);
    i.length
      ? i.forEach(function(t) {
          return t(r);
        })
      : setTimeout(function() {
          throw r;
        });
  }
  function a(t) {
    if ("function" != typeof t) throw Error(s(28, !1));
    i.push(t);
  }
  function c(t) {
    if ("function" != typeof t) throw Error(s(29, !1));
    var n = !1;
    return (
      (i = i.filter(function(e) {
        var r = e === t;
        return (n = n || r), !r;
      })),
      n
    );
  }
  function s(t, n) {
    for (
      var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2;
      o < e;
      o++
    )
      r[o - 2] = arguments[o];
    return "single-spa minified message #"
      .concat(t, ": ")
      .concat(
        n ? n + " " : "",
        "See https://single-spa.js.org/error/?code="
      )
      .concat(t)
      .concat(r.length ? "&arg=".concat(r.join("&arg=")) : "");
  }
  function f(t, n, e) {
    var r,
      o = ""
        .concat(R(n), " '")
        .concat(M(n), "' died in status ")
        .concat(n.status, ": ");
    if (t instanceof Error) {
      try {
        t.message = o + t.message;
      } catch (t) {}
      r = t;
    } else {
      console.warn(s(30, !1, n.status, M(n)));
      try {
        r = Error(o + JSON.stringify(t));
      } catch (n) {
        r = t;
      }
    }
    return (r.appOrParcelName = M(n)), (n.status = e), r;
  }
  var l = "NOT_LOADED",
    h = "LOADING_SOURCE_CODE",
    p = "NOT_BOOTSTRAPPED",
    m = "BOOTSTRAPPING",
    d = "NOT_MOUNTED",
    v = "MOUNTING",
    w = "MOUNTED",
    g = "UPDATING",
    E = "UNMOUNTING",
    y = "LOAD_ERROR",
    O = "SKIP_BECAUSE_BROKEN";
  function T(t) {
    return t.status === w;
  }
  function P(t) {
    return !T(t);
  }
  function b(t) {
    return t.status !== l && t.status !== h && t.status !== y;
  }
  function N(t) {
    return !b(t);
  }
  function A(t) {
    try {
      return t.activeWhen(window.location);
    } catch (n) {
      u(n, t, O);
    }
  }
  function _(t) {
    try {
      return !t.activeWhen(window.location);
    } catch (n) {
      u(n, t, O);
    }
  }
  function S(t) {
    return t !== O && (!t || t.status !== O);
  }
  function D(t) {
    return t.status !== y || new Date().getTime() - t.loadErrorTime >= 200;
  }
  function M(t) {
    return t.name;
  }
  function U(t) {
    return Boolean(t.unmountThisParcel);
  }
  function R(t) {
    return U(t) ? "parcel" : "application";
  }
  function I() {
    for (var t = arguments.length - 1; t > 0; t--)
      for (var n in arguments[t])
        "__proto__" !== n && (arguments[t - 1][n] = arguments[t][n]);
    return arguments[0];
  }
  function L(t, n) {
    for (var e = 0; e < t.length; e++) if (n(t[e])) return t[e];
    return null;
  }
  function j(t) {
    return (
      t &&
      ("function" == typeof t ||
        ((n = t),
        Array.isArray(n) &&
          !L(n, function(t) {
            return "function" != typeof t;
          })))
    );
    var n;
  }
  function x(t, n) {
    var e = t[n] || [];
    0 === (e = Array.isArray(e) ? e : [e]).length &&
      (e = [
        function() {
          return Promise.resolve();
        }
      ]);
    var r = R(t),
      o = M(t);
    return function(t) {
      return e.reduce(function(e, i, u) {
        return e.then(function() {
          var e = i(t);
          return G(e) ? e : Promise.reject(s(15, !1, r, o, n, u));
        });
      }, Promise.resolve());
    };
  }
  function G(t) {
    return t && "function" == typeof t.then && "function" == typeof t.catch;
  }
  function B(t, n) {
    return Promise.resolve().then(function() {
      return t.status !== p
        ? t
        : ((t.status = m),
          tt(t, "bootstrap")
            .then(function() {
              return (t.status = d), t;
            })
            .catch(function(e) {
              if (n) throw f(e, t, O);
              return u(e, t, O), t;
            }));
    });
  }
  function C(t, n) {
    return Promise.resolve().then(function() {
      if (t.status !== w) return t;
      t.status = E;
      var e = Object.keys(t.parcels).map(function(n) {
        return t.parcels[n].unmountThisParcel();
      });
      return Promise.all(e)
        .then(r, function(e) {
          return r().then(function() {
            var r = Error(e.message);
            if (n) throw f(r, t, O);
            u(r, t, O);
          });
        })
        .then(function() {
          return t;
        });
      function r() {
        return tt(t, "unmount")
          .then(function() {
            t.status = d;
          })
          .catch(function(e) {
            if (n) throw f(e, t, O);
            u(e, t, O);
          });
      }
    });
  }
  var K = !1,
    k = !1;
  function F(t, n) {
    return Promise.resolve().then(function() {
      return t.status !== d
        ? t
        : (K ||
            (window.dispatchEvent(new r("single-spa:before-first-mount")),
            (K = !0)),
          tt(t, "mount")
            .then(function() {
              return (
                (t.status = w),
                k ||
                  (window.dispatchEvent(new r("single-spa:first-mount")),
                  (k = !0)),
                t
              );
            })
            .catch(function(e) {
              return (t.status = w), C(t, !0).then(r, r);
              function r() {
                if (n) throw f(e, t, O);
                return u(e, t, O), t;
              }
            }));
    });
  }
  var H = 0,
    J = { parcels: {} };
  function W() {
    return $.apply(J, arguments);
  }
  function $(t, n) {
    var e = this;
    if (!t || ("object" !== o(t) && "function" != typeof t))
      throw Error(s(2, !1));
    if (t.name && "string" != typeof t.name)
      throw Error(s(3, !1, o(t.name)));
    if ("object" !== o(n)) throw Error(s(4, !1, name, o(n)));
    if (!n.domElement) throw Error(s(5, !1, name));
    var r,
      i = H++,
      u = "function" == typeof t,
      a = u
        ? t
        : function() {
            return Promise.resolve(t);
          },
      c = {
        id: i,
        parcels: {},
        status: u ? h : p,
        customProps: n,
        parentName: M(e),
        unmountThisParcel: function() {
          if (c.status !== w) throw Error(s(6, !1, name, c.status));
          return C(c, !0)
            .then(function(t) {
              return c.parentName && delete e.parcels[c.id], t;
            })
            .then(function(t) {
              return m(t), t;
            })
            .catch(function(t) {
              throw ((c.status = O), v(t), t);
            });
        }
      };
    e.parcels[i] = c;
    var l = a();
    if (!l || "function" != typeof l.then) throw Error(s(7, !1));
    var m,
      v,
      E = (l = l.then(function(t) {
        if (!t) throw Error(s(8, !1));
        var n = t.name || "parcel-".concat(i);
        if (!j(t.bootstrap)) throw Error(s(9, !1, n));
        if (!j(t.mount)) throw Error(s(10, !1, n));
        if (!j(t.unmount)) throw Error(s(11, !1, n));
        if (t.update && !j(t.update)) throw Error(s(12, !1, n));
        var e = x(t, "bootstrap"),
          o = x(t, "mount"),
          u = x(t, "unmount");
        (c.status = p),
          (c.name = n),
          (c.bootstrap = e),
          (c.mount = o),
          (c.unmount = u),
          (c.timeouts = nt(t.timeouts)),
          t.update &&
            ((c.update = x(t, "update")),
            (r.update = function(t) {
              return (
                (c.customProps = t),
                Q(
                  (function(t) {
                    return Promise.resolve().then(function() {
                      if (t.status !== w) throw Error(s(32, !1, M(t)));
                      return (
                        (t.status = g),
                        tt(t, "update")
                          .then(function() {
                            return (t.status = w), t;
                          })
                          .catch(function(n) {
                            throw f(n, t, O);
                          })
                      );
                    });
                  })(c)
                )
              );
            }));
      })).then(function() {
        return B(c, !0);
      }),
      y = E.then(function() {
        return F(c, !0);
      }),
      T = new Promise(function(t, n) {
        (m = t), (v = n);
      });
    return (r = {
      mount: function() {
        return Q(
          Promise.resolve().then(function() {
            if (c.status !== d) throw Error(s(13, !1, name, c.status));
            return (e.parcels[i] = c), F(c);
          })
        );
      },
      unmount: function() {
        return Q(c.unmountThisParcel());
      },
      getStatus: function() {
        return c.status;
      },
      loadPromise: Q(l),
      bootstrapPromise: Q(E),
      mountPromise: Q(y),
      unmountPromise: Q(T)
    });
  }
  function Q(t) {
    return t.then(function() {
      return null;
    });
  }
  function V(t) {
    var e = I({}, t.customProps, {
      name: M(t),
      mountParcel: $.bind(t),
      singleSpa: n
    });
    return U(t) && (e.unmountSelf = t.unmountThisParcel), e;
  }
  var q = {
    bootstrap: { millis: 4e3, dieOnTimeout: !1, warningMillis: 1e3 },
    mount: { millis: 3e3, dieOnTimeout: !1, warningMillis: 1e3 },
    unmount: { millis: 3e3, dieOnTimeout: !1, warningMillis: 1e3 },
    unload: { millis: 3e3, dieOnTimeout: !1, warningMillis: 1e3 },
    update: { millis: 3e3, dieOnTimeout: !1, warningMillis: 1e3 }
  };
  function z(t, n, e) {
    if ("number" != typeof t || t <= 0) throw Error(s(16, !1));
    q.bootstrap = { millis: t, dieOnTimeout: n, warningMillis: e || 1e3 };
  }
  function X(t, n, e) {
    if ("number" != typeof t || t <= 0) throw Error(s(17, !1));
    q.mount = { millis: t, dieOnTimeout: n, warningMillis: e || 1e3 };
  }
  function Y(t, n, e) {
    if ("number" != typeof t || t <= 0) throw Error(s(18, !1));
    q.unmount = { millis: t, dieOnTimeout: n, warningMillis: e || 1e3 };
  }
  function Z(t, n, e) {
    if ("number" != typeof t || t <= 0) throw Error(s(19, !1));
    q.unload = { millis: t, dieOnTimeout: n, warningMillis: e || 1e3 };
  }
  function tt(t, n) {
    var e = t.timeouts[n],
      r = e.warningMillis,
      o = R(t);
    return new Promise(function(i, u) {
      var a = !1,
        c = !1;
      t[n](V(t))
        .then(function(t) {
          (a = !0), i(t);
        })
        .catch(function(t) {
          (a = !0), u(t);
        }),
        setTimeout(function() {
          return l(1);
        }, r),
        setTimeout(function() {
          return l(!0);
        }, e.millis);
      var f = s(31, !1, n, o, M(t), e.millis);
      function l(t) {
        if (!a)
          if (!0 === t)
            (c = !0), e.dieOnTimeout ? u(Error(f)) : console.error(f);
          else if (!c) {
            var n = t,
              o = n * r;
            console.warn(f),
              o + r < e.millis &&
                setTimeout(function() {
                  return l(n + 1);
                }, r);
          }
      }
    });
  }
  function nt(t) {
    var n = {};
    for (var e in q) n[e] = I({}, q[e], (t && t[e]) || {});
    return n;
  }
  function et(t) {
    return Promise.resolve().then(function() {
      return t.loadPromise
        ? t.loadPromise
        : t.status !== l && t.status !== y
        ? t
        : ((t.status = h),
          (t.loadPromise = Promise.resolve()
            .then(function() {
              var r = t.loadImpl(V(t));
              if (!G(r)) throw ((e = !0), Error(s(33, !1, M(t))));
              return r.then(function(e) {
                var r;
                (t.loadErrorTime = null),
                  "object" !== o((n = e)) && (r = 34),
                  j(n.bootstrap) || (r = 35),
                  j(n.mount) || (r = 36),
                  j(n.unmount) || (r = 37);
                var i = R(n);
                if (r) {
                  var a;
                  try {
                    a = JSON.stringify(n);
                  } catch (t) {}
                  return (
                    console.error(s(r, !1, i, M(t), a), n),
                    u(void 0, t, O),
                    t
                  );
                }
                return (
                  n.devtools &&
                    n.devtools.overlays &&
                    (t.devtools.overlays = I(
                      {},
                      t.devtools.overlays,
                      n.devtools.overlays
                    )),
                  (t.status = p),
                  (t.bootstrap = x(n, "bootstrap")),
                  (t.mount = x(n, "mount")),
                  (t.unmount = x(n, "unmount")),
                  (t.unload = x(n, "unload")),
                  (t.timeouts = nt(n.timeouts)),
                  delete t.loadPromise,
                  t
                );
              });
            })
            .catch(function(n) {
              var r;
              return (
                delete t.loadPromise,
                e
                  ? (r = O)
                  : ((r = y), (t.loadErrorTime = new Date().getTime())),
                u(n, t, r),
                t
              );
            })));
      var n, e;
    });
  }
  var rt,
    ot = { hashchange: [], popstate: [] },
    it = ["hashchange", "popstate"];
  function ut(t) {
    var n;
    if ("string" == typeof t) n = t;
    else if (this && this.href) n = this.href;
    else {
      if (
        !(t && t.currentTarget && t.currentTarget.href && t.preventDefault)
      )
        throw Error(s(14, !1));
      (n = t.currentTarget.href), t.preventDefault();
    }
    var e = pt(window.location.href),
      r = pt(n);
    0 === n.indexOf("#")
      ? (window.location.hash = r.hash)
      : e.host !== r.host && r.host
      ? (window.location.href = n)
      : r.pathname === e.pathname && r.search === e.pathname
      ? (window.location.hash = r.hash)
      : window.history.pushState(null, null, n);
  }
  function at(t) {
    var n = this;
    if (t) {
      var e = t[0].type;
      it.indexOf(e) >= 0 &&
        ot[e].forEach(function(e) {
          try {
            e.apply(n, t);
          } catch (t) {
            setTimeout(function() {
              throw t;
            });
          }
        });
    }
  }
  function ct() {
    Gt([], arguments);
  }
  window.addEventListener("hashchange", ct),
    window.addEventListener("popstate", ct);
  var st = window.addEventListener,
    ft = window.removeEventListener;
  function lt(t) {
    return function() {
      var n = window.location.href,
        e = t.apply(this, arguments),
        r = window.location.href;
      return (rt && n === r) || ct(ht(window.history.state)), e;
    };
  }
  function ht(t) {
    try {
      return new PopStateEvent("popstate", { state: t });
    } catch (e) {
      var n = document.createEvent("PopStateEvent");
      return n.initPopStateEvent("popstate", !1, !1, t), n;
    }
  }
  function pt(t) {
    var n = document.createElement("a");
    return (n.href = t), n;
  }
  (window.addEventListener = function(t, n) {
    if (
      !("function" == typeof n && it.indexOf(t) >= 0) ||
      L(ot[t], function(t) {
        return t === n;
      })
    )
      return st.apply(this, arguments);
    ot[t].push(n);
  }),
    (window.removeEventListener = function(t, n) {
      if (!("function" == typeof n && it.indexOf(t) >= 0))
        return ft.apply(this, arguments);
      ot[t] = ot[t].filter(function(t) {
        return t !== n;
      });
    }),
    (window.history.pushState = lt(window.history.pushState)),
    (window.history.replaceState = lt(window.history.replaceState)),
    (window.singleSpaNavigate = ut);
  var mt = !1;
  function dt() {
    var t =
      arguments.length > 0 && void 0 !== arguments[0]
        ? arguments[0]
        : window.jQuery;
    if (
      (t ||
        (window.$ && window.$.fn && window.$.fn.jquery && (t = window.$)),
      t && !mt)
    ) {
      var n = t.fn.on,
        e = t.fn.off;
      (t.fn.on = function(t, e) {
        return vt.call(this, n, window.addEventListener, t, e, arguments);
      }),
        (t.fn.off = function(t, n) {
          return vt.call(
            this,
            e,
            window.removeEventListener,
            t,
            n,
            arguments
          );
        }),
        (mt = !0);
    }
  }
  function vt(t, n, e, r, o) {
    return "string" != typeof e
      ? t.apply(this, o)
      : (e.split(/\s+/).forEach(function(t) {
          it.indexOf(t) >= 0 && (n(t, r), (e = e.replace(t, "")));
        }),
        "" === e.trim() ? this : t.apply(this, o));
  }
  var wt = {};
  function gt(t) {
    return Promise.resolve().then(function() {
      var n = wt[M(t)];
      return n
        ? t.status === l
          ? (Et(t, n), t)
          : "UNLOADING" === t.status
          ? n.promise.then(function() {
              return t;
            })
          : t.status !== d
          ? t
          : ((t.status = "UNLOADING"),
            tt(t, "unload")
              .then(function() {
                return Et(t, n), t;
              })
              .catch(function(e) {
                return (
                  (function(t, n, e) {
                    delete wt[M(t)],
                      delete t.bootstrap,
                      delete t.mount,
                      delete t.unmount,
                      delete t.unload,
                      u(e, t, O),
                      n.reject(e);
                  })(t, n, e),
                  t
                );
              }))
        : t;
    });
  }
  function Et(t, n) {
    delete wt[M(t)],
      delete t.bootstrap,
      delete t.mount,
      delete t.unmount,
      delete t.unload,
      (t.status = l),
      n.resolve();
  }
  function yt(t, n, e, r) {
    (wt[M(t)] = { app: t, resolve: e, reject: r }),
      Object.defineProperty(wt[M(t)], "promise", { get: n });
  }
  function Ot(t) {
    return wt[t];
  }
  function Tt() {
    return Object.keys(wt)
      .map(function(t) {
        return wt[t].app;
      })
      .filter(P);
  }
  var Pt = [];
  function bt() {
    return Pt.filter(T).map(M);
  }
  function Nt() {
    return Pt.map(M);
  }
  function At(t) {
    var n = L(Pt, function(n) {
      return M(n) === t;
    });
    return n ? n.status : null;
  }
  function _t(t, n, e) {
    var r,
      i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if ("string" != typeof t || 0 === t.length) throw Error(s(20, !1));
    if (-1 !== Nt().indexOf(t)) throw Error(s(21, !1, t));
    if ("object" !== o(i) || Array.isArray(i)) throw Error(s(22, !1));
    if (!n) throw Error(s(23, !1));
    if (
      ((r =
        "function" != typeof n
          ? function() {
              return Promise.resolve(n);
            }
          : n),
      "function" != typeof e)
    )
      throw Error(s(24, !1));
    Pt.push({
      loadErrorTime: null,
      name: t,
      loadImpl: r,
      activeWhen: e,
      status: l,
      parcels: {},
      devtools: { overlays: { options: {}, selectors: [] } },
      customProps: i
    }),
      dt(),
      Gt();
  }
  function St(t) {
    return Pt.filter(function(n) {
      return n.activeWhen(t);
    }).map(M);
  }
  function Dt() {
    return Pt.filter(S)
      .filter(D)
      .filter(N)
      .filter(A);
  }
  function Mt() {
    return Pt.filter(S)
      .filter(T)
      .filter(_);
  }
  function Ut() {
    return Pt.filter(S)
      .filter(P)
      .filter(b)
      .filter(A);
  }
  function Rt(t) {
    var n =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { waitForUnmount: !1 };
    if ("string" != typeof t) throw Error(s(26, !1));
    var e = L(Pt, function(n) {
      return M(n) === t;
    });
    if (!e) throw Error(s(27, !1, t));
    var r,
      o = Ot(M(e));
    if (n && n.waitForUnmount) {
      if (o) return o.promise;
      var i = new Promise(function(t, n) {
        yt(
          e,
          function() {
            return i;
          },
          t,
          n
        );
      });
      return i;
    }
    return (
      o
        ? ((r = o.promise), It(e, o.resolve, o.reject))
        : (r = new Promise(function(t, n) {
            yt(
              e,
              function() {
                return r;
              },
              t,
              n
            ),
              It(e, t, n);
          })),
      r
    );
  }
  function It(t, n, e) {
    C(t)
      .then(gt)
      .then(function() {
        n(),
          setTimeout(function() {
            Gt();
          });
      })
      .catch(e);
  }
  var Lt = !1,
    jt = [];
  function xt() {
    return Gt();
  }
  function Gt() {
    var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (Lt)
      return new Promise(function(t, e) {
        jt.push({ resolve: t, reject: e, eventArguments: n });
      });
    var e = !0;
    return Kt() ? ((Lt = !0), i()) : o();
    function o() {
      return Promise.resolve().then(function() {
        var t = Dt().map(et);
        return (
          t.length > 0 && (e = !1),
          Promise.all(t)
            .then(a)
            .then(function() {
              return [];
            })
            .catch(function(t) {
              throw (a(), t);
            })
        );
      });
    }
    function i() {
      return Promise.resolve().then(function() {
        window.dispatchEvent(new r("single-spa:before-routing-event", c()));
        var n = Tt().map(gt),
          o = Mt()
            .map(C)
            .map(function(t) {
              return t.then(gt);
            })
            .concat(n);
        o.length > 0 && (e = !1);
        var i = Promise.all(o),
          s = Dt(),
          f = s.map(function(t) {
            return et(t)
              .then(B)
              .then(function(t) {
                return i.then(function() {
                  return F(t);
                });
              });
          });
        f.length > 0 && (e = !1);
        var l = Ut()
          .filter(function(t) {
            return s.indexOf(t) < 0;
          })
          .map(function(t) {
            return B(t)
              .then(function() {
                return i;
              })
              .then(function() {
                return F(t);
              });
          });
        return (
          l.length > 0 && (e = !1),
          i
            .catch(function(t) {
              throw (a(), t);
            })
            .then(function() {
              return (
                a(),
                Promise.all(f.concat(l))
                  .catch(function(n) {
                    throw (t.forEach(function(t) {
                      return t.reject(n);
                    }),
                    n);
                  })
                  .then(u)
              );
            })
        );
      });
    }
    function u() {
      var n = bt();
      t.forEach(function(t) {
        return t.resolve(n);
      });
      try {
        var o = e ? "single-spa:no-app-change" : "single-spa:app-change";
        window.dispatchEvent(new r(o, c())),
          window.dispatchEvent(new r("single-spa:routing-event", c()));
      } catch (t) {
        setTimeout(function() {
          throw t;
        });
      }
      if (((Lt = !1), jt.length > 0)) {
        var i = jt;
        (jt = []), Gt(i);
      }
      return n;
    }
    function a() {
      t.forEach(function(t) {
        at(t.eventArguments);
      }),
        at(n);
    }
    function c() {
      var t = { detail: {} };
      return n && n[0] && (t.detail.originalEvent = n[0]), t;
    }
  }
  var Bt = !1;
  function Ct(t) {
    var n;
    (Bt = !0),
      t && t.urlRerouteOnly && ((n = t.urlRerouteOnly), (rt = n)),
      Gt();
  }
  function Kt() {
    return Bt;
  }
  setTimeout(function() {
    Bt || console.warn(s(1, !1));
  }, 5e3);
  var kt = {
    getRawAppData: function() {
      return [].concat(Pt);
    },
    reroute: Gt,
    NOT_LOADED: l,
    toLoadPromise: et,
    toBootstrapPromise: B,
    unregisterApplication: function(t) {
      if (
        !Pt.find(function(n) {
          return M(n) === t;
        })
      )
        throw Error(s(25, !1, t));
      return Rt(t).then(function() {
        var n = Pt.findIndex(function(n) {
          return M(n) === t;
        });
        Pt.splice(n, 1);
      });
    }
  };
  window &&
    window.__SINGLE_SPA_DEVTOOLS__ &&
    (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = kt),
    (t.BOOTSTRAPPING = m),
    (t.LOADING_SOURCE_CODE = h),
    (t.LOAD_ERROR = y),
    (t.MOUNTED = w),
    (t.MOUNTING = v),
    (t.NOT_BOOTSTRAPPED = p),
    (t.NOT_LOADED = l),
    (t.NOT_MOUNTED = d),
    (t.SKIP_BECAUSE_BROKEN = O),
    (t.UNMOUNTING = E),
    (t.UPDATING = g),
    (t.addErrorHandler = a),
    (t.checkActivityFunctions = St),
    (t.ensureJQuerySupport = dt),
    (t.getAppNames = Nt),
    (t.getAppStatus = At),
    (t.getMountedApps = bt),
    (t.mountRootParcel = W),
    (t.navigateToUrl = ut),
    (t.registerApplication = _t),
    (t.removeErrorHandler = c),
    (t.setBootstrapMaxTime = z),
    (t.setMountMaxTime = X),
    (t.setUnloadMaxTime = Z),
    (t.setUnmountMaxTime = Y),
    (t.start = Ct),
    (t.triggerAppChange = xt),
    (t.unloadApplication = Rt),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=single-spa.min.js.map
