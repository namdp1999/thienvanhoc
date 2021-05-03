/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * From https://github.com/furf/jquery-ui-touch-punch
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function (b) {
  b.support.touch = "ontouchend" in document;
  if (!b.support.touch) {
    return;
  }
  var c = b.ui.mouse.prototype,
    e = c._mouseInit,
    a;
  function d(g, h) {
    if (g.originalEvent.touches.length > 1) {
      return;
    }
    g.preventDefault();
    var i = g.originalEvent.changedTouches[0],
      f = document.createEvent("MouseEvents");
    f.initMouseEvent(
      h,
      true,
      true,
      window,
      1,
      i.screenX,
      i.screenY,
      i.clientX,
      i.clientY,
      false,
      false,
      false,
      false,
      0,
      null
    );
    g.target.dispatchEvent(f);
  }
  c._touchStart = function (g) {
    var f = this;
    if (a || !f._mouseCapture(g.originalEvent.changedTouches[0])) {
      return;
    }
    a = true;
    f._touchMoved = false;
    d(g, "mouseover");
    d(g, "mousemove");
    d(g, "mousedown");
  };
  c._touchMove = function (f) {
    if (!a) {
      return;
    }
    this._touchMoved = true;
    d(f, "mousemove");
  };
  c._touchEnd = function (f) {
    if (!a) {
      return;
    }
    d(f, "mouseup");
    d(f, "mouseout");
    if (!this._touchMoved) {
      d(f, "click");
    }
    a = false;
  };
  c._mouseInit = function () {
    var f = this;
    f.element
      .bind("touchstart", b.proxy(f, "_touchStart"))
      .bind("touchmove", b.proxy(f, "_touchMove"))
      .bind("touchend", b.proxy(f, "_touchEnd"));
    e.call(f);
  };
})(jQuery);

/*
 * How many planets are there in the solar system?
 * Copyright 2015, Stuart Lowe
 */
var data;

$(document).ready(function () {
  data = [
    {
      year: 1600,
      description:
        'Trước khi phát minh ra kính thiên văn, các hành tinh được gọi là "những kẻ lang thang" trên bầu trời. Định nghĩa cổ điển này bao gồm Mặt trời và Mặt trăng.',
      planets: {
        count: 7,
        names: ["Sun", "Mercury", "Venus", "Moon", "Mars", "Jupiter", "Saturn"],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1610,
      description:
        'Việc phát minh ra kính viễn vọng cho phép Galileo tìm thấy thêm bốn "kẻ lang thang" - các mặt trăng của Sao Mộc (mặc dù "các mặt trăng" chưa phải là một thứ).',
      planets: {
        count: 11,
        names: [
          "Sun",
          "Mercury",
          "Venus",
          "Moon",
          "Mars",
          "Jupiter",
          "Io",
          "Europa",
          "Ganymede",
          "Callisto",
          "Saturn",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1655,
      description:
        "Titan được tìm thấy quay quanh Sao Thổ và được thêm vào danh sách các hành tinh.",
      planets: {
        count: 12,
        names: [
          "Sun",
          "Mercury",
          "Venus",
          "Moon",
          "Mars",
          "Jupiter",
          "Io",
          "Europa",
          "Ganymede",
          "Callisto",
          "Saturn",
          "Titan",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1671,
      description: "Iapetus được tìm thấy quay quanh Sao Thổ.",
      planets: {
        count: 13,
        names: [
          "Sun",
          "Mercury",
          "Venus",
          "Moon",
          "Mars",
          "Jupiter",
          "Io",
          "Europa",
          "Ganymede",
          "Callisto",
          "Saturn",
          "Titan",
          "Iapetus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1672,
      description: "Rhea đã được tìm thấy trên quỹ đạo Sao Thổ.",
      planets: {
        count: 14,
        names: [
          "Sun",
          "Mercury",
          "Venus",
          "Moon",
          "Mars",
          "Jupiter",
          "Io",
          "Europa",
          "Ganymede",
          "Callisto",
          "Saturn",
          "Rhea",
          "Titan",
          "Iapetus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1684,
      description: "Tethys và Dione được tìm thấy quay quanh Sao Thổ.",
      planets: {
        count: 16,
        names: [
          "Sun",
          "Mercury",
          "Venus",
          "Moon",
          "Mars",
          "Jupiter",
          "Io",
          "Europa",
          "Ganymede",
          "Callisto",
          "Saturn",
          "Tethys",
          "Dione",
          "Rhea",
          "Titan",
          "Iapetus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1758,
      description:
        'Sự xuất hiện trở lại của Comet Halley khiến "hành tinh" được định nghĩa lại. Mặt trời bây giờ là một ngôi sao. Sao chổi không phải là hành tinh. Trái đất đã được thêm vào danh sách. Những thiên thể quay quanh các hành tinh khác được định nghĩa lại là "mặt trăng".',
      planets: {
        count: 6,
        names: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1779,
      description:
        '"Hành tinh băng khổng lồ" Sao Thiên Vương đã được thêm vào danh sách.',
      planets: {
        count: 7,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn",
          "Uranus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1801,
      description: "Ceres đã được thêm vào danh sách các hành tinh.",
      planets: {
        count: 8,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Ceres",
          "Jupiter",
          "Saturn",
          "Uranus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1802,
      description: "Pallas đã được thêm vào danh sách các hành tinh.",
      planets: {
        count: 9,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Ceres",
          "Pallas",
          "Jupiter",
          "Saturn",
          "Uranus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1804,
      description: "Juno đã được thêm vào danh sách các hành tinh.",
      planets: {
        count: 10,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Juno",
          "Ceres",
          "Pallas",
          "Jupiter",
          "Saturn",
          "Uranus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1807,
      description: "Vesta đã được thêm vào danh sách các hành tinh.",
      planets: {
        count: 11,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Vesta",
          "Juno",
          "Ceres",
          "Pallas",
          "Jupiter",
          "Saturn",
          "Uranus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1845,
      description: "Astraea đã được thêm vào danh sách các hành tinh.",
      planets: {
        count: 12,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Vesta",
          "Astraea",
          "Juno",
          "Ceres",
          "Pallas",
          "Jupiter",
          "Saturn",
          "Uranus",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1846,
      description: "Sao Hải Vương đã được thêm vào danh sách các hành tinh.",
      planets: {
        count: 13,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Vesta",
          "Astraea",
          "Juno",
          "Ceres",
          "Pallas",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptune",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1847,
      description:
        'Với rất nhiều thiên thể nhỏ được tìm thấy tạo thành vành đai giữa Sao Hỏa và Sao Mộc, tất cả chúng đều được định nghĩa lại là "tiểu hành tinh".',
      planets: {
        count: 8,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptune",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 1930,
      description: "Sao Diêm Vương đã được thêm vào danh sách các hành tinh.",
      planets: {
        count: 9,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptune",
          "Pluto",
        ],
      },
      dwarf: {
        count: 0,
        names: [""],
      },
    },
    {
      year: 2006,
      description:
        'Eris được phát hiện là lớn hơn Sao Diêm Vương dẫn đến Sao Diêm Vương được định nghĩa lại là "hành tinh lùn" cùng với Ceres và Eris.',
      planets: {
        count: 8,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptune",
        ],
      },
      dwarf: {
        count: 3,
        names: ["Ceres", "Pluto", "Eris"],
      },
    },
    {
      year: 2008,
      description:
        'Eris được phát hiện là lớn hơn Sao Diêm Vương dẫn đến Sao Diêm Vương được định nghĩa lại là "hành tinh lùn" cùng với Ceres, Haumea, Makemake và Eris.',
      planets: {
        count: 8,
        names: [
          "Mercury",
          "Venus",
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptune",
        ],
      },
      dwarf: {
        count: 5,
        names: ["Ceres", "Pluto", "Haumea", "Makemake", "Eris"],
      },
    },
  ];

  var now = new Date();
  var year = now.getFullYear();

  $("#slider").slider({
    min: 1600,
    max: now.getFullYear(),
    value: now.getFullYear(),
    create: function (event, ui) {
      updateData(now.getFullYear());
    },
    slide: function (event, ui) {
      updateData(ui.value);
    },
  });

  function updateData(year) {
    $(".titleyear").html(" in " + year);
    var i;
    for (i = data.length - 1; i > 0; i--) {
      if (year >= data[i].year) break;
    }
    var output =
      "Số lượng hành tinh năm " +
      year +
      ' là:<div class="count">' +
      data[i].planets.count +
      "</div>";
    //if(data[i].dwarf.count > 0) output += ' and <div class="count">'+data[i].dwarf.count+'<\/div> dwarf planets';
    $("#output").html(output);
    $("#eyear").html(now.getFullYear());
    if (data[i].description) $("#info").html(data[i].description);

    var planets = "";
    for (var p = 0; p < data[i].planets.names.length; p++) {
      planets +=
        '<div class="planet ' +
        data[i].planets.names[p] +
        '"><div class="disc"></div><div class="label">' +
        data[i].planets.names[p] +
        "</div></div>";
    }
    $("#planets").html(planets);
    $(".noscript").hide();
    $(".js-only").removeClass("js-only");
  }
});
