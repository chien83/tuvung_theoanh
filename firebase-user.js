(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyCX5JkQFwO_CEvBW2rHCTVxl3M6TcjAwCc",
    authDomain: "tienganh247.firebaseapp.com",
    projectId: "tienganh247",
    storageBucket: "tienganh247.firebasestorage.app",
    messagingSenderId: "269544203235",
    appId: "1:269544203235:web:48053647cc466b05f636d6"
  };

  const PROGRESS_COLLECTION = "users_progress_tuvung_theoanh";
  const ADMIN_PERMISSION_KEYS = ["admin", "vocabHotspotAdmin", "tuvungTheoAnhAdmin"];

  const state = {
    ready: false,
    error: null,
    user: null,
    username: null,
    meta: null,
    permissions: {},
    isAdmin: false,
    active: false,
    expired: false,
    progress: {}
  };

  let auth = null;
  let db = null;
  let readyResolve;
  const readyPromise = new Promise(resolve => {
    readyResolve = resolve;
  });
  const listeners = new Set();

  function notify() {
    listeners.forEach(listener => {
      try {
        listener({ ...state });
      } catch (error) {
        console.error("VOCAB_AUTH listener error:", error);
      }
    });
  }

  function usernameFromEmail(email) {
    return String(email || "")
      .split("@")[0]
      .trim()
      .toLowerCase();
  }

  function normalizePermissions(rawPermissions, username) {
    const normalizedName = String(username || "").trim().toLowerCase();
    const permissions = rawPermissions && typeof rawPermissions === "object" && !Array.isArray(rawPermissions)
      ? { ...rawPermissions }
      : {};

    if (normalizedName === "admin") {
      permissions.admin = true;
    }

    return permissions;
  }

  function valueToDate(value) {
    if (!value) return null;
    if (typeof value.toDate === "function") return value.toDate();
    if (value instanceof Date) return value;
    if (typeof value === "string" || typeof value === "number") {
      const date = new Date(value);
      return Number.isNaN(date.getTime()) ? null : date;
    }
    return null;
  }

  function isAccountExpired(meta) {
    const expiry = valueToDate(meta?.expiryDate || meta?.expiry || meta?.expiresAt);
    return expiry ? new Date() > expiry : false;
  }

  function isActiveAccount(meta) {
    if (!meta) return true;
    if (meta.active === false) return false;
    if (String(meta.active || "").trim().toUpperCase() === "FALSE") return false;
    if (meta.disabled === true) return false;
    return true;
  }

  function hasAdminPermission(meta, permissions, username) {
    const normalizedName = String(username || "").trim().toLowerCase();
    if (normalizedName === "admin") return true;
    if (String(meta?.role || "").trim().toLowerCase() === "admin") return true;
    if (meta?.admin === true) return true;
    return ADMIN_PERMISSION_KEYS.some(key => permissions?.[key] === true);
  }

  async function loadUserMeta(username) {
    if (!db || !username) return null;
    const snap = await db.collection("users_meta").doc(username).get();
    return snap.exists ? snap.data() : null;
  }

  async function loadUserProgress(username) {
    if (!db || !username) return {};
    const snap = await db.collection(PROGRESS_COLLECTION).doc(username).get();
    return snap.exists ? snap.data() : {};
  }

  function topicKey(topicId) {
    if (window.VOCAB_UTILS?.normalizeTopicId) {
      return window.VOCAB_UTILS.normalizeTopicId(topicId);
    }
    return String(topicId || "").trim().replace(/_\d+$/g, "");
  }

  function getTopicProgress(topicId) {
    const key = topicKey(topicId);
    return state.progress?.topics?.[key] || {};
  }

  async function saveTopicProgress(topicId, topicProgress) {
    if (!db || !state.username || !topicId) return false;
    const key = topicKey(topicId);
    const payload = {
      topics: {
        [key]: {
          ...getTopicProgress(key),
          ...topicProgress,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }
      },
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    await db.collection(PROGRESS_COLLECTION).doc(state.username).set(payload, { merge: true });
    state.progress = {
      ...(state.progress || {}),
      topics: {
        ...(state.progress?.topics || {}),
        [key]: {
          ...getTopicProgress(key),
          ...topicProgress
        }
      }
    };
    notify();
    return true;
  }

  function updateAuthButtons(root = document) {
    const loginBtn = root.getElementById?.("loginBtn") || document.getElementById("loginBtn");
    const logoutBtn = root.getElementById?.("logoutBtn") || document.getElementById("logoutBtn");
    const userInfo = root.getElementById?.("userInfo") || document.getElementById("userInfo");

    if (loginBtn) loginBtn.hidden = !!state.user;
    if (logoutBtn) logoutBtn.hidden = !state.user;
    if (userInfo) {
      userInfo.textContent = state.user
        ? `${state.isAdmin ? "Admin" : "User"}: ${state.username}`
        : "Chưa đăng nhập";
    }
  }

  async function login() {
    if (!auth) return;
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  }

  async function logout() {
    if (!auth) return;
    await auth.signOut();
  }

  function showGate(message, options = {}) {
    const appSelector = options.appSelector || ".app";
    const app = document.querySelector(appSelector);
    if (app) app.hidden = true;

    let gate = document.getElementById("adminGate");
    if (!gate) {
      gate = document.createElement("main");
      gate.id = "adminGate";
      gate.style.cssText = "max-width:680px;margin:60px auto;padding:24px;font-family:'Segoe UI',Arial,sans-serif;color:#222;";
      document.body.appendChild(gate);
    }

    gate.innerHTML = `
      <div style="background:white;border:1px solid #e8d6e2;border-radius:12px;padding:24px;text-align:center;box-shadow:0 10px 26px rgba(80,0,50,.12);">
        <h2 style="color:#b0006d;margin:0 0 10px;font-size:26px;">Không có quyền truy cập</h2>
        <p style="margin:0 0 16px;line-height:1.5;">${message}</p>
        <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;">
          <button id="gateLoginBtn" type="button" style="min-height:42px;padding:8px 16px;border-radius:8px;border:1px solid #b0006d;background:#b0006d;color:white;font-weight:700;cursor:pointer;">Đăng nhập admin</button>
          <a href="index.html" style="display:inline-flex;align-items:center;justify-content:center;min-height:42px;padding:8px 16px;border-radius:8px;border:1px solid #e8d6e2;color:#b0006d;text-decoration:none;font-weight:700;">Về trang chủ</a>
        </div>
      </div>
    `;

    gate.querySelector("#gateLoginBtn")?.addEventListener("click", login);
  }

  async function requireAdminPage(options = {}) {
    await readyPromise;
    if (state.isAdmin) {
      const app = document.querySelector(options.appSelector || ".app");
      const gate = document.getElementById("adminGate");
      if (gate) gate.remove();
      if (app) app.hidden = false;
      return true;
    }

    const message = state.user
      ? "Tài khoản hiện tại không có quyền chỉnh tọa độ."
      : "Trang chỉnh tọa độ chỉ dành cho quản trị viên. Hãy đăng nhập bằng tài khoản admin.";
    showGate(message, options);
    throw new Error("Admin only");
  }

  function bindAuthControls(root = document) {
    const loginBtn = root.getElementById?.("loginBtn") || document.getElementById("loginBtn");
    const logoutBtn = root.getElementById?.("logoutBtn") || document.getElementById("logoutBtn");
    loginBtn?.addEventListener("click", login);
    logoutBtn?.addEventListener("click", logout);
    updateAuthButtons(root);
  }

  window.VOCAB_AUTH = {
    state,
    ready: readyPromise,
    onChange(listener) {
      listeners.add(listener);
      listener({ ...state });
      return () => listeners.delete(listener);
    },
    bindAuthControls,
    updateAuthButtons,
    login,
    logout,
    getTopicProgress,
    saveTopicProgress,
    requireAdminPage
  };

  function init() {
    if (!window.firebase) {
      state.ready = true;
      state.error = new Error("Firebase SDK chưa được tải.");
      readyResolve({ ...state });
      notify();
      return;
    }

    const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
    auth = firebase.auth(app);
    db = firebase.firestore(app);

    auth.onAuthStateChanged(async user => {
      state.user = user || null;
      state.username = user ? usernameFromEmail(user.email) : null;
      state.meta = null;
      state.permissions = {};
      state.isAdmin = false;
      state.active = false;
      state.expired = false;
      state.progress = {};

      if (user && state.username) {
        try {
          const meta = await loadUserMeta(state.username);
          const permissions = normalizePermissions(meta?.permissions, state.username);
          state.meta = meta;
          state.permissions = permissions;
          state.active = isActiveAccount(meta);
          state.expired = isAccountExpired(meta);
          state.isAdmin = hasAdminPermission(meta, permissions, state.username);
          if (state.active && !state.expired) {
            state.progress = await loadUserProgress(state.username);
          }
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("currentUserId", state.username);
          sessionStorage.setItem("userPermissions", JSON.stringify(permissions));
          localStorage.setItem("userPermissions", JSON.stringify(permissions));
        } catch (error) {
          state.error = error;
          console.error("Lỗi đọc dữ liệu user Firebase:", error);
        }
      } else {
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("currentUserId");
      }

      state.ready = true;
      updateAuthButtons();
      readyResolve({ ...state });
      notify();
      if (document.getElementById("adminGate") && state.isAdmin) {
        window.location.reload();
      }
    });
  }

  init();
})();
