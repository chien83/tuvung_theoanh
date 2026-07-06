// Dán link Apps Script Web App /exec vào đây để đọc dữ liệu từ Google Sheets.
// Để trống thì web dùng dữ liệu offline bên dưới.
window.GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbwxYUiqZfvUaY9uyQGELvooF4ZnYVg5nQkuOTJDsOSyWig2p-HLrSjlX3Hr0YqcGrmv/exec";

window.VOCAB_TOPICS = [
  {
    topic_id: "living_room_13",
    title: "In the living room",
    vi_title: "Trong phòng khách",
    image: "images/living_room_13.png",
    level: "A1",
    order: 13,
    active: true
  },
  {
    topic_id: "kitchen_11",
    title: "In the kitchen",
    vi_title: "Trong nhà bếp",
    image: "images/kitchen_11.png",
    level: "A1",
    order: 11,
    active: true
  }
];

window.VOCAB_HOTSPOTS = [
  { topic_id: "living_room_13", word: "books", display_text: "books", vi: "sách", pronunciation_text: "books", ipa: "/bʊks/", x: 8.0, y: 29.0, w: 11.5, h: 8.0 },
  { topic_id: "living_room_13", word: "bookshelf", display_text: "bookshelf / bookshelves", vi: "kệ sách", pronunciation_text: "bookshelf", ipa: "/ˈbʊkʃelf/", x: 13.5, y: 29.0, w: 16.5, h: 41.0 },
  { topic_id: "living_room_13", word: "bookshelves", display_text: "bookshelves", vi: "các kệ sách", pronunciation_text: "bookshelves", ipa: "/ˈbʊkʃelvz/", x: 13.5, y: 29.0, w: 16.5, h: 41.0 },
  { topic_id: "living_room_13", word: "light", display_text: "light", vi: "đèn trần", pronunciation_text: "light", ipa: "/laɪt/", x: 39.0, y: 28.0, w: 14.5, h: 8.0 },
  { topic_id: "living_room_13", word: "light switch", display_text: "light switch", vi: "công tắc đèn", pronunciation_text: "light switch", ipa: "/ˈlaɪt swɪtʃ/", x: 30.8, y: 39.5, w: 4.4, h: 5.2 },
  { topic_id: "living_room_13", word: "TV", display_text: "TV", vi: "ti vi", pronunciation_text: "TV", ipa: "/ˌtiː ˈviː/", x: 31.0, y: 48.0, w: 17.0, h: 14.5 },
  { topic_id: "living_room_13", word: "picture", display_text: "picture", vi: "bức tranh", pronunciation_text: "picture", ipa: "/ˈpɪktʃə/", x: 48.0, y: 37.5, w: 11.8, h: 9.0 },
  { topic_id: "living_room_13", word: "lamp", display_text: "lamp", vi: "đèn bàn / đèn cây", pronunciation_text: "lamp", ipa: "/læmp/", x: 61.5, y: 32.5, w: 8.5, h: 19.0 },
  { topic_id: "living_room_13", word: "window", display_text: "window", vi: "cửa sổ", pronunciation_text: "window", ipa: "/ˈwɪndəʊ/", x: 75.0, y: 28.5, w: 12.5, h: 29.0 },
  { topic_id: "living_room_13", word: "curtains", display_text: "curtains", vi: "rèm cửa", pronunciation_text: "curtains", ipa: "/ˈkɜːtnz/", x: 68.5, y: 28.5, w: 26.5, h: 33.5 },
  { topic_id: "living_room_13", word: "hi-fi", display_text: "hi-fi", vi: "dàn âm thanh", pronunciation_text: "hi-fi", ipa: "/ˈhaɪ faɪ/", x: 51.0, y: 55.5, w: 12.0, h: 11.5 },
  { topic_id: "living_room_13", word: "socket", display_text: "socket", vi: "ổ cắm điện", pronunciation_text: "socket", ipa: "/ˈsɒkɪt/", x: 54.8, y: 69.0, w: 6.0, h: 6.5 },
  { topic_id: "living_room_13", word: "sofa", display_text: "sofa", vi: "ghế sofa", pronunciation_text: "sofa", ipa: "/ˈsəʊfə/", x: 65.0, y: 55.0, w: 28.0, h: 20.0 },
  { topic_id: "living_room_13", word: "table", display_text: "table", vi: "cái bàn", pronunciation_text: "table", ipa: "/ˈteɪbəl/", x: 61.0, y: 70.0, w: 25.0, h: 17.5 },
  { topic_id: "living_room_13", word: "chair", display_text: "chair", vi: "cái ghế", pronunciation_text: "chair", ipa: "/tʃeə/", x: 74.0, y: 74.5, w: 12.5, h: 19.5 },
  { topic_id: "living_room_13", word: "carpet", display_text: "carpet", vi: "tấm thảm trải sàn", pronunciation_text: "carpet", ipa: "/ˈkɑːpɪt/", x: 35.0, y: 72.0, w: 41.0, h: 15.0 },
  { topic_id: "living_room_13", word: "rug", display_text: "rug", vi: "tấm thảm nhỏ", pronunciation_text: "rug", ipa: "/rʌɡ/", x: 36.0, y: 71.0, w: 34.0, h: 10.0 },
  { topic_id: "living_room_13", word: "remote control", display_text: "remote control", vi: "điều khiển từ xa", pronunciation_text: "remote control", ipa: "/rɪˌməʊt kənˈtrəʊl/", x: 46.0, y: 70.5, w: 11.0, h: 5.5 },
  { topic_id: "living_room_13", word: "phone", display_text: "phone", vi: "điện thoại", pronunciation_text: "phone", ipa: "/fəʊn/", x: 39.0, y: 68.5, w: 8.0, h: 6.5 },
  { topic_id: "living_room_13", word: "coffee table", display_text: "coffee table", vi: "bàn cà phê", pronunciation_text: "coffee table", ipa: "/ˈkɒfi ˌteɪbəl/", x: 38.5, y: 68.0, w: 18.0, h: 19.0 },
  { topic_id: "living_room_13", word: "armchair", display_text: "armchair", vi: "ghế bành", pronunciation_text: "armchair", ipa: "/ˈɑːmtʃeə/", x: 11.0, y: 58.0, w: 25.0, h: 30.0 },
  { topic_id: "kitchen_11", word: "fridge", display_text: "fridge", vi: "tủ lạnh", pronunciation_text: "fridge", ipa: "/frɪdʒ/", x: 14.6, y: 14.3, w: 8.5, h: 25.8 },
  { topic_id: "kitchen_11", word: "freezer", display_text: "freezer", vi: "ngăn đá / tủ đông", pronunciation_text: "freezer", ipa: "/ˈfriːzə/", x: 23.1, y: 14.2, w: 5.7, h: 25.8 },
  { topic_id: "kitchen_11", word: "cupboard", display_text: "cupboard", vi: "tủ bếp", pronunciation_text: "cupboard", ipa: "/ˈkʌbəd/", x: 58.8, y: 15.8, w: 14.5, h: 8.8 },
  { topic_id: "kitchen_11", word: "shelf", display_text: "shelf", vi: "kệ", pronunciation_text: "shelf", ipa: "/ʃelf/", x: 74.6, y: 15.8, w: 7.4, h: 5.3 },
  { topic_id: "kitchen_11", word: "microwave", display_text: "microwave", vi: "lò vi sóng", pronunciation_text: "microwave", ipa: "/ˈmaɪkrəweɪv/", x: 44.3, y: 20.5, w: 5.6, h: 3.5 },
  { topic_id: "kitchen_11", word: "tap", display_text: "tap", vi: "vòi nước", pronunciation_text: "tap", ipa: "/tæp/", x: 40.2, y: 24.7, w: 3.8, h: 2.7 },
  { topic_id: "kitchen_11", word: "sink", display_text: "sink", vi: "bồn rửa", pronunciation_text: "sink", ipa: "/sɪŋk/", x: 38.8, y: 27.1, w: 6.8, h: 3.2 },
  { topic_id: "kitchen_11", word: "cooker", display_text: "cooker", vi: "bếp nấu", pronunciation_text: "cooker", ipa: "/ˈkʊkə/", x: 56.0, y: 28.3, w: 8.3, h: 10.4 },
  { topic_id: "kitchen_11", word: "dishwasher", display_text: "dishwasher", vi: "máy rửa bát", pronunciation_text: "dishwasher", ipa: "/ˈdɪʃwɒʃə/", x: 67.6, y: 28.0, w: 10.1, h: 12.0 },
  { topic_id: "kitchen_11", word: "worktop", display_text: "worktop", vi: "mặt bàn bếp", pronunciation_text: "worktop", ipa: "/ˈwɜːktɒp/", x: 76.0, y: 23.0, w: 15.4, h: 3.9 },
  { topic_id: "kitchen_11", word: "bin", display_text: "bin", vi: "thùng rác", pronunciation_text: "bin", ipa: "/bɪn/", x: 24.6, y: 33.1, w: 4.9, h: 7.2 },
  { topic_id: "kitchen_11", word: "washing machine", display_text: "washing machine", vi: "máy giặt", pronunciation_text: "washing machine", ipa: "/ˈwɒʃɪŋ məˌʃiːn/", x: 30.6, y: 28.7, w: 7.5, h: 10.8 },
  { topic_id: "kitchen_11", word: "washing-up liquid", display_text: "washing-up liquid", vi: "nước rửa bát", pronunciation_text: "washing-up liquid", ipa: "/ˌwɒʃɪŋ ˈʌp ˌlɪkwɪd/", x: 12.8, y: 49.0, w: 8.6, h: 15.4 },
  { topic_id: "kitchen_11", word: "tea towel", display_text: "tea towel", vi: "khăn lau bát", pronunciation_text: "tea towel", ipa: "/ˈtiː taʊəl/", x: 21.9, y: 51.8, w: 10.5, h: 12.0 },
  { topic_id: "kitchen_11", word: "saucepan", display_text: "saucepan", vi: "nồi có tay cầm", pronunciation_text: "saucepan", ipa: "/ˈsɔːspən/", x: 33.1, y: 48.3, w: 14.5, h: 9.6 },
  { topic_id: "kitchen_11", word: "teapot", display_text: "teapot", vi: "ấm trà", pronunciation_text: "teapot", ipa: "/ˈtiːpɒt/", x: 50.7, y: 48.6, w: 15.2, h: 10.1 },
  { topic_id: "kitchen_11", word: "coffee maker", display_text: "coffee maker", vi: "bình pha cà phê", pronunciation_text: "coffee maker", ipa: "/ˈkɒfi ˌmeɪkə/", x: 70.5, y: 47.8, w: 9.0, h: 15.9 },
  { topic_id: "kitchen_11", word: "kitchen roll", display_text: "kitchen roll", vi: "giấy cuộn nhà bếp", pronunciation_text: "kitchen roll", ipa: "/ˈkɪtʃɪn rəʊl/", x: 83.1, y: 50.7, w: 9.8, h: 14.1 },
  { topic_id: "kitchen_11", word: "frying pan", display_text: "frying pan", vi: "chảo rán", pronunciation_text: "frying pan", ipa: "/ˈfraɪɪŋ pæn/", x: 37.2, y: 58.7, w: 17.8, h: 6.9 },
  { topic_id: "kitchen_11", word: "cloth", display_text: "cloth", vi: "khăn lau", pronunciation_text: "cloth", ipa: "/klɒθ/", x: 63.5, y: 58.7, w: 10.8, h: 7.8 },
  { topic_id: "kitchen_11", word: "cup", display_text: "cup", vi: "cốc", pronunciation_text: "cup", ipa: "/kʌp/", x: 13.9, y: 76.8, w: 12.8, h: 10.4 },
  { topic_id: "kitchen_11", word: "bowl", display_text: "bowl", vi: "bát", pronunciation_text: "bowl", ipa: "/bəʊl/", x: 32.7, y: 77.7, w: 13.5, h: 7.7 },
  { topic_id: "kitchen_11", word: "plate", display_text: "plate", vi: "đĩa", pronunciation_text: "plate", ipa: "/pleɪt/", x: 20.5, y: 86.2, w: 19.8, h: 7.6 },
  { topic_id: "kitchen_11", word: "fork", display_text: "fork", vi: "nĩa", pronunciation_text: "fork", ipa: "/fɔːk/", shape: "rotated", angle: -36, x: 42.5, y: 82.0, w: 15.8, h: 4.0 },
  { topic_id: "kitchen_11", word: "knife", display_text: "knife", vi: "dao", pronunciation_text: "knife", ipa: "/naɪf/", shape: "rotated", angle: -42, x: 51.8, y: 82.6, w: 14.8, h: 3.6 },
  { topic_id: "kitchen_11", word: "chopsticks", display_text: "chopsticks", vi: "đũa", pronunciation_text: "chopsticks", ipa: "/ˈtʃɒpstɪks/", shape: "polygon", angle: 0, points: "55.7,92.2 59.7,88.7 72.2,76.9 74.4,78.1 62.3,91.0 58.0,94.2", x: 55.7, y: 76.9, w: 18.7, h: 17.3 },
  { topic_id: "kitchen_11", word: "spoon", display_text: "spoon", vi: "thìa", pronunciation_text: "spoon", ipa: "/spuːn/", shape: "rotated", angle: -27, x: 67.3, y: 84.0, w: 14.0, h: 4.5 },
  { topic_id: "kitchen_11", word: "glass", display_text: "glass", vi: "ly / cốc thủy tinh", pronunciation_text: "glass", ipa: "/ɡlɑːs/", x: 83.5, y: 78.4, w: 8.9, h: 16.7 },
  { topic_id: "kitchen_11", word: "mug", display_text: "mug", vi: "cốc có quai", pronunciation_text: "mug", ipa: "/mʌɡ/", x: 72.5, y: 86.2, w: 11.7, h: 10.8 }
];

window.VOCAB_HEADERS = {
  topics: ["topic_id", "title", "vi_title", "image", "level", "order", "active"],
  hotspots: ["topic_id", "word", "display_text", "vi", "pronunciation_text", "ipa", "shape", "angle", "points", "x", "y", "w", "h"]
};

window.VOCAB_UTILS = {
  getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  },
  getActiveTopics() {
    return [...window.VOCAB_TOPICS]
      .filter(topic => topic.active !== false && String(topic.active).toUpperCase() !== "FALSE")
      .sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
  },
  getTopic(topicId) {
    return window.VOCAB_TOPICS.find(topic => topic.topic_id === topicId) || window.VOCAB_TOPICS[0];
  },
  getHotspots(topicId) {
    return window.VOCAB_HOTSPOTS
      .filter(item => item.topic_id === topicId)
      .map((item, index) => ({ ...item, id: index + 1 }));
  },
  csvCell(value) {
    const text = String(value ?? "");
    return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  },
  toCsv(headers, rows) {
    return [
      headers.join(","),
      ...rows.map(row => headers.map(key => window.VOCAB_UTILS.csvCell(row[key])).join(","))
    ].join("\n");
  },
  normalizeTopic(topic) {
    const activeValue = topic.active;
    return {
      ...topic,
      topic_id: String(topic.topic_id || "").trim(),
      title: String(topic.title || "").trim(),
      vi_title: String(topic.vi_title || "").trim(),
      image: String(topic.image || "").trim(),
      level: String(topic.level || "A1").trim(),
      order: Number(topic.order || 0),
      active: !(activeValue === false || String(activeValue).trim().toUpperCase() === "FALSE" || String(activeValue).trim() === "0")
    };
  },
  normalizeHotspot(item) {
    const numberKeys = ["x", "y", "w", "h", "angle"];
    const out = { ...item };
    ["topic_id", "word", "display_text", "vi", "pronunciation_text", "ipa", "shape", "points"].forEach(key => {
      out[key] = String(out[key] ?? "").trim();
    });
    numberKeys.forEach(key => {
      const value = Number(String(out[key] ?? "").replace(",", "."));
      if (Number.isFinite(value)) out[key] = value;
      else delete out[key];
    });
    if (!out.shape) delete out.shape;
    if (!out.points) delete out.points;
    if (!out.display_text) out.display_text = out.word;
    if (!out.pronunciation_text) out.pronunciation_text = out.word;
    return out;
  },
  applyRemoteData(data) {
    const topics = Array.isArray(data?.topics) ? data.topics : [];
    const hotspots = Array.isArray(data?.hotspots) ? data.hotspots : [];
    if (!topics.length || !hotspots.length) {
      console.warn("Google Sheets trả dữ liệu rỗng, web dùng data.js offline.");
      return false;
    }
    window.VOCAB_TOPICS = topics.map(topic => window.VOCAB_UTILS.normalizeTopic(topic)).filter(topic => topic.topic_id);
    window.VOCAB_HOTSPOTS = hotspots.map(item => window.VOCAB_UTILS.normalizeHotspot(item)).filter(item => item.topic_id && item.word);
    return true;
  },
  loadData() {
    const url = String(window.GOOGLE_SHEET_API_URL || "").trim();
    if (!url || url.includes("DAN_LINK") || url.includes("PASTE")) {
      return Promise.resolve({ source: "offline" });
    }

    // Dùng JSONP để tránh lỗi CORS khi web chạy trên GitHub Pages.
    return new Promise(resolve => {
      const callbackName = `__VOCAB_SHEETS_CB_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      const separator = url.includes("?") ? "&" : "?";
      const script = document.createElement("script");
      const cleanup = () => {
        clearTimeout(timer);
        delete window[callbackName];
        script.remove();
      };
      const fallback = (reason) => {
        console.warn("Không đọc được Google Sheets, web dùng data.js offline.", reason || "");
        cleanup();
        resolve({ source: "offline" });
      };
      const timer = setTimeout(() => fallback("timeout"), 12000);

      window[callbackName] = data => {
        const ok = window.VOCAB_UTILS.applyRemoteData(data);
        cleanup();
        resolve({ source: ok ? "sheets" : "offline" });
      };

      script.onerror = () => fallback("script-error");
      script.src = `${url}${separator}callback=${encodeURIComponent(callbackName)}&v=${Date.now()}`;
      document.head.appendChild(script);
    });
  }
};
