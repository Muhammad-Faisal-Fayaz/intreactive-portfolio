VANTA.NET({
  el: "#vbg",
  THREE: THREE,
  mouseControls: true,
  touchControls: true,
  color: 0xc8892a,
  backgroundColor: 0x07080d,
  points: 6,
  maxDistance: 20,
  spacing: 20,
  showDots: true,
});

// Cursor
var cur = document.getElementById("cur"),
  curR = document.getElementById("cur-ring");
document.addEventListener("mousemove", function (e) {
  cur.style.left = e.clientX + "px";
  cur.style.top = e.clientY + "px";
  setTimeout(function () {
    curR.style.left = e.clientX + "px";
    curR.style.top = e.clientY + "px";
  }, 80);
});
document
  .querySelectorAll("a,button,.proj-row,.sk-card,.stat-b")
  .forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      cur.style.transform = "translate(-50%,-50%) scale(2.5)";
      curR.style.width = "52px";
      curR.style.height = "52px";
      curR.style.opacity = ".9";
    });
    el.addEventListener("mouseleave", function () {
      cur.style.transform = "translate(-50%,-50%) scale(1)";
      curR.style.width = "38px";
      curR.style.height = "38px";
      curR.style.opacity = ".55";
    });
  });

// Reveal
var ro = new IntersectionObserver(
  function (ents) {
    ents.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add("vis");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach(function (r) {
  ro.observe(r);
});

// Skill bars
var bo = new IntersectionObserver(
  function (ents) {
    ents.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add("loaded");
    });
  },
  { threshold: 0.3 },
);
document.querySelectorAll(".sk-bar").forEach(function (b) {
  bo.observe(b);
});

// Typewriter
(function () {
  var titles = [
    "Frontend Developer",
    "React Engineer",
    "CSS Architect",
    "UI Craftsman",
    "ML Explorer",
  ];
  var ti = 0,
    ci = 0,
    del = false;
  var el = document.getElementById("heroName");
  function type() {
    var t = titles[ti];
    if (!del) {
      el.textContent = t.slice(0, ci + 1);
      el.setAttribute("data-text", el.textContent);
      ci++;
      if (ci === t.length) {
        del = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = t.slice(0, ci - 1);
      el.setAttribute("data-text", el.textContent);
      ci--;
      if (ci === 0) {
        del = false;
        ti = (ti + 1) % titles.length;
      }
    }
    setTimeout(type, del ? 60 : 100);
  }
  setTimeout(type, 1200);
})();

// Rube Goldberg
var STEPS = [
  { fid: "f1", snid: "sn1", pid: "m1", aid: "a1" },
  { fid: "f2", snid: "sn2", pid: "m2", aid: "a2" },
  { fid: "f3", snid: "sn3", pid: "m3", aid: "a3" },
  { fid: "f4", snid: "sn4", pid: "m4", aid: "a4" },
  { fid: "f5", snid: "sn5", pid: "m5", aid: "a5" },
  { fid: "f6", snid: "sn6", pid: "m6", aid: "a6" },
  { fid: "f7", snid: "sn7", pid: "m7", aid: "a7" },
];
function isDone(i) {
  var el = document.getElementById(STEPS[i].fid);
  if (!el) return false;
  if (el.type === "checkbox") return el.checked;
  if (el.tagName === "SELECT") return el.value !== "";
  return el.value.trim().length > 0;
}
function activate(i) {
  var s = STEPS[i];
  var part = document.getElementById(s.pid);
  if (part) {
    part.classList.add("on");
    part
      .querySelectorAll(".gcw,.gccw,.gp,.gl,.gwt,.gsp,.gps,.gfn,.gcv,.gbb")
      .forEach(function (e) {
        e.classList.add("go");
      });
  }
  var sn = document.getElementById(s.snid);
  if (sn) sn.classList.add("on");
}
function deactivate(i) {
  var s = STEPS[i];
  var part = document.getElementById(s.pid);
  if (part) {
    part.classList.remove("on");
    part
      .querySelectorAll(".gcw,.gccw,.gp,.gl,.gwt,.gsp,.gps,.gfn,.gcv,.gbb")
      .forEach(function (e) {
        e.classList.remove("go");
      });
  }
  var sn = document.getElementById(s.snid);
  if (sn) sn.classList.remove("on");
}
function evaluate() {
  var count = 0;
  for (var i = 0; i < STEPS.length; i++) {
    var ok = isDone(i);
    if (ok) {
      activate(i);
      count++;
    } else {
      deactivate(i);
    }
    var arr = document.getElementById(STEPS[i].aid);
    if (arr)
      arr.classList.toggle(
        "on",
        ok && (i + 1 < STEPS.length ? isDone(i + 1) : false),
      );
  }
  var pct = Math.round((count / STEPS.length) * 100);
  document.getElementById("rgpf").style.width = pct + "%";
  document.getElementById("rgpp").textContent = pct + "%";
  var all = count === STEPS.length;
  var m8 = document.getElementById("m8");
  if (m8) m8.classList.toggle("on", all);
  var fg8 = document.getElementById("fg8");
  if (fg8) fg8.classList.toggle("go", all);
  var a7 = document.getElementById("a7");
  if (a7) a7.classList.toggle("on", all);
}
STEPS.forEach(function (s) {
  var el = document.getElementById(s.fid);
  if (!el) return;
  var ev =
    el.type === "checkbox" || el.tagName === "SELECT" ? "change" : "input";
  el.addEventListener(ev, evaluate);
});

document.getElementById("eyeBtn").addEventListener("click", function () {
  var inp = document.getElementById("f5");
  var eo = document.getElementById("eyeOpen");
  var ec = document.getElementById("eyeClose");
  if (inp.type === "password") {
    inp.type = "text";
    eo.style.display = "none";
    ec.style.display = "block";
  } else {
    inp.type = "password";
    eo.style.display = "block";
    ec.style.display = "none";
  }
});

document.getElementById("f5").addEventListener("input", function () {
  var v = this.value,
    s = 0;
  if (v.length >= 6) s++;
  if (v.length >= 10) s++;
  if (/[A-Z]/.test(v)) s++;
  if (/[0-9]/.test(v)) s++;
  if (/[^A-Za-z0-9]/.test(v)) s++;
  var pcts = [0, 20, 45, 65, 85, 100];
  var clrs = ["", "#c8422a", "#c8892a", "#e8c56a", "#27ae60", "#00e676"];
  var bar = document.getElementById("pwBar");
  bar.style.width = pcts[s] + "%";
  bar.style.background = clrs[s] || "#c8892a";
});

function setOk(gid) {
  var g = document.getElementById(gid);
  if (g) {
    g.classList.remove("has-error");
    g.classList.add("has-ok");
  }
}
function setErr(gid) {
  var g = document.getElementById(gid);
  if (g) {
    g.classList.remove("has-ok");
    g.classList.add("has-error");
  }
}
function clrState(gid) {
  var g = document.getElementById(gid);
  if (g) {
    g.classList.remove("has-ok", "has-error");
  }
}
function validate(fid) {
  var el = document.getElementById(fid);
  var v = el ? el.value : "";
  if (fid === "f2") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  if (fid === "f3") return v.trim() === "" || v.trim().startsWith("http");
  if (fid === "f5") return v.length >= 6;
  if (el && el.tagName === "SELECT") return v !== "";
  return v.trim().length > 0;
}
[
  ["f1", "fg1"],
  ["f2", "fg2"],
  ["f3", "fg3"],
  ["f5", "fg5"],
].forEach(function (p) {
  var el = document.getElementById(p[0]);
  if (!el) return;
  el.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      clrState(p[1]);
      return;
    }
    if (validate(p[0])) setOk(p[1]);
    else setErr(p[1]);
  });
  el.addEventListener("input", function () {
    var g = document.getElementById(p[1]);
    if (g && g.classList.contains("has-error")) {
      if (validate(p[0])) setOk(p[1]);
    }
  });
});
var sel = document.getElementById("f4");
if (sel)
  sel.addEventListener("change", function () {
    if (this.value !== "") setOk("fg4");
    else clrState("fg4");
  });

document.getElementById("rgBtn").addEventListener("click", function () {
  var allOk = true;
  if (!validate("f1")) {
    setErr("fg1");
    allOk = false;
  } else setOk("fg1");
  if (!validate("f2")) {
    setErr("fg2");
    allOk = false;
  } else setOk("fg2");
  if (document.getElementById("f4").value === "") {
    setErr("fg4");
    allOk = false;
  } else setOk("fg4");
  if (!validate("f5")) {
    setErr("fg5");
    allOk = false;
  } else setOk("fg5");
  var chk = document.getElementById("f7"),
    chkRow = document.getElementById("chk7");
  if (!chk.checked) {
    chkRow.classList.add("has-error", "shake");
    setTimeout(function () {
      chkRow.classList.remove("shake");
    }, 500);
    allOk = false;
  } else {
    chkRow.classList.remove("has-error");
  }
  if (!allOk) return;
  ["d1", "d2", "d3"].forEach(function (id, i) {
    setTimeout(function () {
      var d = document.getElementById(id);
      if (d) d.classList.add("go");
    }, i * 220);
  });
  setTimeout(function () {
    document.getElementById("rgSuccess").classList.add("show");
    confetti();
  }, 800);
});

function confetti() {
  var clrs = ["#c8892a", "#e8c56a", "#27ae60", "#2980b9", "#8e44ad", "#f2ead8"];
  for (var i = 0; i < 65; i++) {
    (function () {
      var d = document.createElement("div");
      d.className = "cfp";
      d.style.left = Math.random() * 94 + 3 + "%";
      d.style.top = Math.random() * 40 + "%";
      d.style.width = 7 + Math.random() * 9 + "px";
      d.style.height = 7 + Math.random() * 9 + "px";
      d.style.background = clrs[Math.floor(Math.random() * clrs.length)];
      d.style.borderRadius = Math.random() > 0.5 ? "50%" : "3px";
      d.style.animationDelay = Math.random() * 0.9 + "s";
      d.style.animationDuration = 1 + Math.random() * 0.9 + "s";
      document.body.appendChild(d);
      setTimeout(function () {
        d.remove();
      }, 3000);
    })();
  }
}
