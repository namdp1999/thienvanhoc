// stuQuery
var eventcache = {};
function S(g) {
  function a(n, m) {
    var j = false;
    if (m[0] == ".") {
      m = m.substr(1);
      for (var l = 0; l < n.classList.length; l++) {
        if (n.classList[l] == m) {
          return true;
        }
      }
    } else {
      if (m[0] == "#") {
        if (n.id == m.substr(1)) {
          return true;
        }
      } else {
        if (n.tagName == m.toUpperCase()) {
          return true;
        }
      }
    }
    return false;
  }
  function c(p, o) {
    var n = -1;
    var l = new Array();
    if (o.indexOf(":eq") > 0) {
      var j = o.replace(/(.*)\:eq\(([0-9]+)\)/, "$1 $2").split(" ");
      o = j[0];
      n = parseInt(j[1]);
    }
    if (o[0] == ".") {
      els = p.getElementsByClassName(o.substr(1));
    } else {
      if (o[0] == "#") {
        els = p.getElementById(o.substr(1));
      } else {
        els = p.getElementsByTagName(o);
      }
    }
    if (!els) {
      els = [];
    }
    if (els.nodeName && els.nodeName == "SELECT") {
      l.push(els);
    } else {
      if (typeof els.length !== "number") {
        els = [els];
      }
      for (k = 0; k < els.length; k++) {
        l.push(els[k]);
      }
      if (n >= 0 && l.length > 0) {
        if (n < l.length) {
          l = [l[n]];
        } else {
          l = [];
        }
      }
    }
    return l;
  }
  function d(p) {
    if (typeof p === "string") {
      var e, p, q, o, m, l, n;
      e = p.split(" ");
      for (o = 0; o < e.length; o++) {
        if (o == 0) {
          p = c(document, e[o]);
        } else {
          q = new Array();
          for (m = 0; m < p.length; m++) {
            q = q.concat(c(p[m], e[o]));
          }
          p = q.splice(0);
        }
      }
    }
    this.e = [];
    if (!p) {
      return this;
    }
    if (typeof p.length !== "number") {
      p = [p];
    }
    this.e = p;
    return this;
  }
  d.prototype.ready = function (e) {
    /in/.test(document.readyState)
      ? setTimeout("S(document).ready(" + e + ")", 9)
      : e();
  };
  d.prototype.html = function (j) {
    if (typeof j === "number") {
      j = "" + j;
    }
    if (typeof j !== "string" && this.e.length == 1) {
      return this.e[0].innerHTML;
    }
    if (typeof j === "string") {
      for (var e = 0; e < this.e.length; e++) {
        this.e[e].innerHTML = j;
      }
    }
    return this;
  };
  d.prototype.append = function (j) {
    if (!j && this.e.length == 1) {
      return this.e[0].innerHTML;
    }
    if (j) {
      for (var e = 0; e < this.e.length; e++) {
        this.e[e].innerHTML += j;
      }
    }
    return this;
  };
  function h(e, l) {
    if (e && e.length > 0) {
      for (var j = 0; j < e.length; j++) {
        if (e[j].node == l) {
          return { success: true, match: j };
        }
      }
    }
    return { success: false };
  }
  function f(n, l, j, i, m) {
    if (!eventcache[l]) {
      eventcache[l] = new Array();
    }
    eventcache[l].push({ node: n, fn: j, fn2: i, data: m });
  }
  function b(j) {
    if (eventcache[j.type]) {
      var i = h(eventcache[j.type], j.currentTarget);
      if (i.success) {
        if (i.match.data) {
          j.data = eventcache[j.type][i.match].data;
        }
        return { fn: eventcache[j.type][i.match].fn, data: j };
      }
    }
    return function () {
      return { fn: "" };
    };
  }
  d.prototype.off = function (l) {
    if (typeof Element.prototype.removeEventListener !== "function") {
      Element.prototype.removeEventListener = function (r, o) {
        if (!oListeners.hasOwnProperty(r)) {
          return;
        }
        var n = oListeners[r];
        for (var i = -1, m = 0; m < n.aEls.length; m++) {
          if (n.aEls[m] === this) {
            i = m;
            break;
          }
        }
        if (i === -1) {
          return;
        }
        for (var q = 0, p = n.aEvts[i]; q < p.length; q++) {
          if (p[q] === o) {
            p.splice(q, 1);
          }
        }
      };
    }
    for (var j = 0; j < this.e.length; j++) {
      var e = h(eventcache[l], this.e[j]);
      if (e.success) {
        this.e[j].removeEventListener(l, eventcache[l][e.match].fn2, false);
        eventcache[l].splice(e.match, 1);
      }
    }
    return this;
  };
  d.prototype.on = function (m, n, l) {
    m = m || window.event;
    this.cache = [4, 5, 6];
    if (typeof n === "function" && !l) {
      l = n;
      n = "";
    }
    if (typeof l !== "function") {
      return this;
    }
    if (this.e.length > 0) {
      var o = this;
      var e = function (i) {
        var p = b({ currentTarget: this, type: m, data: n, originalEvent: i });
        if (typeof p.fn === "function") {
          return p.fn.call(o, p.data);
        }
      };
      for (var j = 0; j < this.e.length; j++) {
        f(this.e[j], m, l, e, n);
        if (this.e[j].addEventListener) {
          this.e[j].addEventListener(m, e, false);
        } else {
          if (this.e[j].attachEvent) {
            this.e[j].attachEvent(m, e);
          }
        }
      }
    }
    return this;
  };
  d.prototype.trigger = function (m) {
    var l;
    if (document.createEvent) {
      l = document.createEvent("HTMLEvents");
      l.initEvent(m, true, true);
    } else {
      l = document.createEventObject();
      l.eventType = m;
    }
    l.eventName = m;
    for (var j = 0; j < this.e.length; j++) {
      if (document.createEvent) {
        this.e[j].dispatchEvent(l);
      } else {
        this.e[j].fireEvent("on" + l.eventType, l);
      }
    }
    return this;
  };
  d.prototype.focus = function () {
    if (this.e.length == 1) {
      this.e[0].focus();
    }
    return this;
  };
  d.prototype.blur = function () {
    if (this.e.length == 1) {
      this.e[0].blur();
    }
    return this;
  };
  d.prototype.remove = function () {
    if (!this.e) {
      return this;
    }
    for (var e = this.e.length - 1; e >= 0; e--) {
      if (!this.e[e]) {
        return;
      }
      if (typeof this.e[e].remove === "function") {
        this.e[e].remove();
      } else {
        if (typeof this.e[e].parentElement.removeChild === "function") {
          this.e[e].parentElement.removeChild(this.e[e]);
        }
      }
    }
    return S(this.e);
  };
  d.prototype.hasClass = function (j) {
    var e = true;
    for (var l = 0; l < this.e.length; l++) {
      if (!this.e[l].className.match(new RegExp("(\\s|^)" + j + "(\\s|$)"))) {
        e = false;
      }
    }
    return e;
  };
  d.prototype.toggleClass = function (e) {
    for (var j = 0; j < this.e.length; j++) {
      if (this.e[j].className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))) {
        this.e[j].className = this.e[j].className
          .replace(new RegExp("(\\s|^)" + e + "(\\s|$)", "g"), " ")
          .replace(/ $/, "");
      } else {
        this.e[j].className = (this.e[j].className + " " + e).replace(/^ /, "");
      }
    }
    return S(this.e);
  };
  d.prototype.addClass = function (e) {
    for (var j = 0; j < this.e.length; j++) {
      if (!this.e[j].className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))) {
        this.e[j].className = (this.e[j].className + " " + e).replace(/^ /, "");
      }
    }
    return S(this.e);
  };
  d.prototype.removeClass = function (e) {
    for (var j = 0; j < this.e.length; j++) {
      while (this.e[j].className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))) {
        this.e[j].className = this.e[j].className
          .replace(new RegExp("(\\s|^)" + e + "(\\s|$)", "g"), " ")
          .replace(/ $/, "")
          .replace(/^ /, "");
      }
    }
    return S(this.e);
  };
  d.prototype.css = function (m) {
    var o;
    for (var l = 0; l < this.e.length; l++) {
      o = {};
      var n = this.e[l].getAttribute("style");
      if (n) {
        var q = this.e[l].getAttribute("style").split(";");
        for (var j = 0; j < q.length; j++) {
          var p = q[j].split(":");
          if (p.length == 2) {
            o[p[0]] = p[1];
          }
        }
      }
      if (typeof m === "object") {
        for (key in m) {
          o[key] = m[key];
        }
        var e = "";
        for (key in o) {
          if (e) {
            e += ";";
          }
          if (o[key]) {
            e += key + ":" + o[key];
          }
        }
        this.e[l].setAttribute("style", e);
      }
    }
    if (this.e.length == 1 && typeof m === "string") {
      return o[m];
    }
    return S(this.e);
  };
  d.prototype.parent = function () {
    var j = [];
    for (var e = 0; e < this.e.length; e++) {
      j.push(this.e[e].parentElement);
    }
    return S(j);
  };
  d.prototype.children = function (m) {
    if (typeof m === "string") {
      var e = [];
      for (var j = 0; j < this.e.length; j++) {
        for (var l = 0; l < this.e[j].children.length; l++) {
          if (a(this.e[j].children[l], m)) {
            e.push(this.e[j].children[l]);
          }
        }
      }
      return S(e);
    } else {
      for (var j = 0; j < this.e.length; j++) {
        this.e[j] =
          this.e[j].children.length > m ? this.e[j].children[m] : this.e[j];
      }
      return S(this.e);
    }
  };
  d.prototype.find = function (j) {
    var m = [];
    var e = [];
    for (var l = 0; l < this.e.length; l++) {
      m = c(this.e[l], j);
      for (k = 0; k < m.length; k++) {
        e.push(m[k]);
      }
    }
    return S(e);
  };
  d.prototype.attr = function (e, m) {
    var l = [];
    for (var j = 0; j < this.e.length; j++) {
      l.push(this.e[j].getAttribute(e));
      if (typeof m === "string" || typeof m === "number") {
        this.e[j].setAttribute(e, m);
      }
    }
    if (l.length == 1) {
      l = l[0];
    }
    if (typeof m === "undefined") {
      return l;
    } else {
      return S(this.e);
    }
  };
  d.prototype.prop = function (e, m) {
    var l = [];
    for (var j = 0; j < this.e.length; j++) {
      l.push(this.e[j].getAttribute(e));
      if (typeof m === "boolean") {
        if (m) {
          this.e[j].setAttribute(e, e);
        } else {
          this.e[j].removeAttribute(e);
        }
      }
    }
    if (l.length == 1) {
      l = l[0];
    }
    return l;
  };
  d.prototype.clone = function () {
    var e = document.createElement("div");
    e.appendChild(this.e[0].cloneNode(true));
    return e.innerHTML;
  };
  d.prototype.replaceWith = function (j) {
    var l = document.createElement("span");
    l.innerHTML = j;
    var m = S(this.e);
    for (var e = 0; e < this.e.length; e++) {
      m.e[0].parentNode.replaceChild(l, m.e[0]);
    }
    return m;
  };
  d.prototype.ajax = function (l, j) {
    if (typeof l !== "string") {
      return false;
    }
    if (!j) {
      j = {};
    }
    j.url = l;
    var n = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    n.addEventListener("load", e);
    n.addEventListener("error", i);
    function e(o) {
      if (n.status === 200) {
        if (typeof j.complete === "function") {
          j.complete.call(
            j["this"] ? j["this"] : this,
            j.dataType == "json" ? JSON.parse(n.responseText) : n.responseText,
            j
          );
        }
      } else {
        i(o);
      }
    }
    function i(o) {
      if (typeof j.error === "function") {
        j.error.call(j["this"] ? j["this"] : this, o, j);
      }
    }
    try {
      n.open("GET", l);
    } catch (m) {
      i(m);
    }
    try {
      n.send();
    } catch (m) {
      i(m);
    }
    return this;
  };
  d.prototype.loadJSON = function (i, j, e) {
    if (!e) {
      e = {};
    }
    e.dataType = "json";
    e.complete = j;
    this.ajax(i, e);
    return this;
  };
  return new d(g);
}

// Height that can be jumped on Earth (metres)
var jumpers = {
  human: {
    title: "Người",
    jump: 0.5,
    img: "images/person.png",
    "data-jump": "Nhảy!",
  },
  kangaroo: {
    title: "Kangaroo",
    jump: 1.8,
    img: "images/kangaroo.png",
    "data-jump": "Nhảy!",
  },
  //'philae': {'title':'Philae', 'jump': 0.0002617737, 'velocity': 0.07166589146867568, 'img':'philae.png', 'data-jump': 'Bounce!' }	// 7.1 cm/s vertical based on 31.7 cm/s lateral and 32.5 cm/s total velocity after TD1
};
var bodies = {
  "Sao Thủy": { type: "planet", a: -3.7, vesc: 15300 },
  "Sao Kim": { type: "planet", a: -8.87, vesc: 37296 },
  "Trái Đất": { type: "planet", a: -9.81, vesc: 40284 },
  "Sao Hỏa": { type: "planet", a: -3.71, vesc: 18108 },
  Ceres: { type: "dwarfplanet", a: -0.28, vesc: 1855 },
  "Sao Mộc": { type: "planet", a: -24.79, vesc: 216720 },
  "Sao Thổ": { type: "planet", a: -10.4, vesc: 129924 },
  "Sao Thiên Vương": { type: "planet", a: -8.87, vesc: 76968 },
  "Sao Hải Vương": { type: "planet", a: -11.15, vesc: 84816 },
  "Sao Diêm Vương": { type: "dwarfplanet", a: -0.66, vesc: 4428 },
  Haumea: { type: "dwarfplanet", a: -0.63, vesc: 3276 },
  Eris: { type: "dwarfplanet", a: -0.827, vesc: 4982 },
  "Mặt trăng": { type: "moon", a: -1.6307094664, vesc: 8569.7509606789 },
  Phobos: { type: "moon", a: -0.005796226, vesc: 40.8367942199 },
  Io: { type: "moon", a: -1.8034934299, vesc: 9227.8662181845 },
  Ganymede: { type: "moon", a: -1.4340828989, vesc: 9889.6644686216 },
  Mimas: { type: "moon", a: -0.0639682954, vesc: 573.2600967156 },
  Enceladus: { type: "moon", a: -0.1137972172, vesc: 862.3225485323 },
  Titan: { type: "moon", a: -1.3599248882, vesc: 9526.6075787476 },
  Triton: { type: "moon", a: -0.7839929054, vesc: 5242.7392262171 },
  Charon: { type: "moon", a: -0.283, vesc: 6670.6674012822 },
  Vesta: { type: "moon", a: -0.2514516103, vesc: 1308.5030690412 },
  "21 Lutetia": { type: "moon", a: -0.0094132231, vesc: 163.8260718512 },
  "Comet 67P": { type: "moon", a: -0.0000321, vesc: 1 },
};

var u = 3.1320919527; // initial velocity in m/s (allows a jump of 0.5m on Earth)

S(document).ready(function () {
  // We have Javascript so show the jump button
  S("#bottom").css({ display: "block" });
  S("form").css({ display: "block" });
  S("#container").css({ height: "48000px" });
  S("#speech").css({ display: "none" });
  S("table").css({ display: "none" });
  S(".nojs").removeClass("nojs");

  var body = "Trái Đất";
  var el = S("#person").e[0]; // The DOM element for the person
  var person_px = el.offsetWidth * 0.625; // The height of the person in pixels
  var bottom = S("#bottom").e[0].offsetHeight;
  var offy = el.offsetHeight - person_px + bottom;
  var yscale = person_px / 1.8; // The vertical scale in pixels/m
  var h = docHeight();
  var wh = window.innerHeight;
  var jumping = false;
  var jumper;

  S("#person").css({ bottom: bottom + "px" });
  S("#ground").css({ bottom: bottom + "px" });

  // Make scale
  var y = 0;
  var dy = 2;
  var n = 0;
  var str = "";
  // Build height scale
  while (y < h) {
    y = n * dy * yscale + offy;
    str +=
      '<div class="label" style="bottom:' +
      Math.round(y) +
      'px">' +
      n * dy +
      "&thinsp;m</div>";
    n++;
  }
  S("#scale").append(str);

  str = "";
  for (var j in jumpers) {
    str += '<option value="' + j + '">' + jumpers[j].title + "</option>";
  }
  S("#jumper").html(str);
  S("#jumper").on("change", function (e) {
    setJumper(e.currentTarget.options[e.currentTarget.selectedIndex].value);
  });

  str = "";
  for (var b in bodies) {
    str +=
      '<option value="' +
      b +
      '"' +
      (b == body ? ' selected="selected"' : "") +
      ">" +
      b +
      "</option>";
  }
  S("#object").html(str);
  S("#object").on("change", function (e) {
    S("#container").removeClass(bodies[body]["type"]);
    body = e.currentTarget.options[e.currentTarget.selectedIndex].value;
    S("#container").addClass(bodies[body]["type"]);
  });
  S("#container").addClass(bodies[body]["type"]);
  S("#jump").on("click", function (e) {
    if (!jumping) jump(body);
    else endJump();
  });

  updateBodies();

  // Move to bottom of the page
  window.scrollTo(0, h);

  function jump(b) {
    var begin = new Date();
    var t, s;
    jumping = true;
    S("#jump").html(S("#jump").prop("data-reset"));
    var hiddentext = false;
    var threshold = Math.round(h - window.pageYOffset - (wh + person_px) / 2);
    var overthreshold = false;
    var jumpee = S(el);
    jumpee.css({ bottom: "0px" });

    // s = ut +0.5 a t^2
    var tickup = function () {
      t = (new Date() - begin) / 1000;
      s = (u * t + 0.5 * bodies[b].a * Math.pow(t, 2)) * yscale + bottom;
      if (s > h - window.pageYOffset - (wh + person_px) / 2)
        window.scrollTo(0, h - s - (wh + person_px) / 2);
      if (s >= threshold) {
        if (!overthreshold) {
          jumpee.css({
            bottom: threshold + "px",
            position: "fixed",
            left: Math.round(S("body").e[0].offsetWidth / 2 - 80) + "px",
          });
          overthreshold = true;
          S("body").addClass("moving");
        }
      } else jumpee.css({ bottom: Math.round(s) + "px" });
      if (t < bodies[b].time_up)
        jumper =
          (window.requestAnimationFrame && requestAnimationFrame(tickup)) ||
          setTimeout(tickup, 16);
      else {
        begin = new Date();
        tickdown();
      }
    };
    var tickdown = function () {
      t = (new Date() - begin) / 1000;
      s =
        (bodies[b].height - (0 * t - 0.5 * bodies[b].a * Math.pow(t, 2))) *
          yscale +
        bottom;
      if (s < h - window.pageYOffset - (wh + person_px) / 2)
        window.scrollTo(0, h - s - (wh + person_px) / 2);
      if (s <= threshold) {
        if (overthreshold) {
          S("body").removeClass("moving");
          jumpee.css({ position: "", left: "" });
          overthreshold = false;
        }
        jumpee.css({ bottom: Math.round(s) + "px" });
      }
      if (t < bodies[b].time_up)
        jumper =
          (window.requestAnimationFrame && requestAnimationFrame(tickdown)) ||
          setTimeout(tickdown, 16);
      else endJump();
    };

    tickup();
  }
  function endJump() {
    window.cancelAnimationFrame(jumper) || clearTimeout(jumper);
    el.style["bottom"] = bottom + "px";
    // Move to bottom of the page
    window.scrollTo(0, h);
    jumping = false;
    S("#jump").html(S("#jump").prop("data-jump"));
    S("body").removeClass("moving");
  }
});

function setJumper(j) {
  setJumpHeightOnEarth(jumpers[j].jump);
  S("#person img").attr("src", jumpers[j].img);
  S("#jump")
    .attr("data-jump", jumpers[j]["data-jump"])
    .html(jumpers[j]["data-jump"]);
  updateBodies();
}
function setJumpHeightOnEarth(s) {
  // v^2 = u^2 + 2as
  u = Math.sqrt(-2 * bodies["Trái Đất"].a * s);
}

function updateBodies(velocity) {
  if (typeof velocity === "number") u = velocity;
  // Work out properties for the bodies
  // v = u + at
  // s = ((u+v)/2) t
  for (var b in bodies) {
    var t = -u / bodies[b].a;
    var s = (u / 2) * t;
    bodies[b].time_up = t;
    bodies[b].height = s;
  }
}

function docHeight() {
  var body = document.body;
  var html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}
