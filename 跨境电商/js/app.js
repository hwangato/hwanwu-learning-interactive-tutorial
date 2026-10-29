// js/app.js

/**
 * 跨境电商出海互动研习社 - 核心逻辑引擎
 */

// --- 全局状态管理 ---
const state = {
  currentChapterId: "intro",
  progress: {}, // { chapterId: boolean }
  mvpData: {
    productName: "便携式智能宠物温控垫",
    targetCountry: "美国 (US)",
    targetUser: "28-45岁城市高收入养狗女性",
    painPoint: "暴雪寒冷降温，老年犬关节炎疼痛无法入睡",
    slogan: "For dog parents who travel more with less winter mess.",
    price: 49.99,
    cogs: 8.50,
    shipping: 12.00,
    breakevenCpa: 26.50,
    competitorDetails: "Amazon 竞品: H&M Pet Bed. 售价 $39, 痛点是电线太短、表面防滑差且不防水。",
    tiktokScript: "痛点钩子 -> 暴降温惨状 -> 宠物垫出镜恒温ASMR -> Before/After治愈对比 -> 限量五折CTA!",
    adBudget: 30,
    testDuration: 3,
    shippingMode: "Direct Airmail (挂号挂专线专邮小包)"
  },
  quizState: {
    currentQuestionIndex: 0,
    selectedOption: null,
    isAnswered: false,
    correctAnswersCount: 0
  }
};

// --- 初始化与生命周期 ---
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromLocalStorage();
  initializeTheme();
  renderSidebarNav();
  setupGlobalEvents();
  
  // 首次运行路由
  router();
  updateGlobalProgressBar();
});

// --- LocalStorage 持久化 ---
function loadStateFromLocalStorage() {
  // 1. 加载阅读进度
  const savedProgress = localStorage.getItem("outbound_study_progress");
  if (savedProgress) {
    try {
      state.progress = JSON.parse(savedProgress);
    } catch (e) {
      state.progress = {};
    }
  } else {
    state.progress = {};
  }

  // 2. 加载 MVP 实操数据
  const savedMvpData = localStorage.getItem("outbound_mvp_data");
  if (savedMvpData) {
    try {
      state.mvpData = { ...state.mvpData, ...JSON.parse(savedMvpData) };
    } catch (e) {}
  }
}

function saveProgressToLocalStorage() {
  localStorage.setItem("outbound_study_progress", JSON.stringify(state.progress));
  updateGlobalProgressBar();
  renderSidebarNav(); // 刷新侧边栏打勾状态
}

function saveMvpDataToLocalStorage() {
  localStorage.setItem("outbound_mvp_data", JSON.stringify(state.mvpData));
}

// --- 路由引擎 ---
function router() {
  const hash = window.location.hash.replace("#/", "") || "intro";
  const chapter = COURSE_DATA.find(c => c.id === hash);
  
  if (chapter) {
    state.currentChapterId = hash;
    renderChapterContent(chapter);
    // 重置答题状态
    state.quizState.currentQuestionIndex = 0;
    state.quizState.selectedOption = null;
    state.quizState.isAnswered = false;
    state.quizState.correctAnswersCount = 0;
    renderQuizSection(chapter);
  } else {
    // 找不到路由默认到序章
    window.location.hash = "#/intro";
  }

  // 侧边栏活动态高亮
  document.querySelectorAll(".chapter-item").forEach(item => {
    if (item.dataset.id === state.currentChapterId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // 更新顶部导航和按钮
  updateNavbarState();
  
  // 滚动回到主内容区顶部
  document.getElementById("main-viewport").scrollTop = 0;
}

// --- UI 渲染引擎 ---
function renderSidebarNav() {
  const navContainer = document.getElementById("chapters-nav");
  navContainer.innerHTML = ""; // 清空

  // 定义目录的分组
  const sections = [
    { title: "课程导言", items: ["intro"] },
    { title: "12周系统实操", items: ["week1", "week2", "week3", "week4", "week5", "week6", "week7", "week8", "week9", "week10", "week11", "week12"] },
    { title: "能力与AI进阶", items: ["capabilities", "ai-automation", "outro"] }
  ];

  sections.forEach(sec => {
    // 渲染分组小标题
    const sectionTitle = document.createElement("div");
    sectionTitle.className = "nav-section-title";
    sectionTitle.innerText = sec.title;
    navContainer.appendChild(sectionTitle);

    // 渲染各章节项目
    sec.items.forEach(itemId => {
      const chapter = COURSE_DATA.find(c => c.id === itemId);
      if (!chapter) return;

      const isCompleted = state.progress[itemId] === true;
      const isActive = itemId === state.currentChapterId;

      const itemEl = document.createElement("div");
      itemEl.className = `chapter-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
      itemEl.dataset.id = itemId;
      itemEl.innerHTML = `
        <div class="chapter-icon"><i class="fa-solid ${chapter.icon}"></i></div>
        <span>${chapter.title}</span>
        <div class="chapter-status-dot">
          <i class="${isCompleted ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle'}"></i>
        </div>
      `;

      itemEl.addEventListener("click", () => {
        window.location.hash = `#/${itemId}`;
        // 移动端点击后收起侧边栏
        if (window.innerWidth <= 768) {
          toggleMobileSidebar(false);
        }
      });

      navContainer.appendChild(itemEl);
    });
  });
}

function renderChapterContent(chapter) {
  const contentArea = document.getElementById("course-content-area");
  
  // 拼装 HTML
  let html = `
    <div class="page-header">
      <span class="page-badge"><i class="fa-solid ${chapter.icon}"></i> ${chapter.id.startsWith("week") ? "BOOTCAMP COURSE" : "RESOURCES"}</span>
      <h2 class="page-title">${chapter.title}</h2>
      <p class="page-subtitle">${chapter.subtitle}</p>
    </div>
  `;

  // 渲染学习目标卡片
  if (chapter.objective) {
    html += `
      <div class="lesson-card objective-box">
        <h4><i class="fa-solid fa-bullseye"></i> 本周学习目标</h4>
        <div class="objective-text">${chapter.objective}</div>
      </div>
    `;
  }

  // 循环渲染主体部分
  chapter.sections.forEach(sec => {
    html += `
      <div class="lesson-card lesson-section">
        <h3 class="section-title"><i class="fa-solid fa-circle-chevron-right"></i> ${sec.title}</h3>
        <div>${sec.content}</div>
      </div>
    `;
  });

  // 如果配有交互式工具小组件
  if (chapter.interactiveTool) {
    html += `
      <div class="lesson-card" style="border-color: var(--accent-teal);">
        <div class="interactive-tool-container" id="tool-mount-point">
          <!-- 交互工具在此被动态渲染并绑定事件 -->
        </div>
      </div>
    `;
  }

  // 渲染本周可交付成果说明卡片
  if (chapter.taskDeliverable) {
    html += `
      <div class="deliverable-card">
        <h4><i class="fa-solid fa-square-check"></i> 本周学习成果输出要求</h4>
        <div class="deliverable-text">${chapter.taskDeliverable}</div>
      </div>
    `;
  }

  // 渲染课后测验挂载容器
  html += `
    <div id="quiz-mount-point"></div>
  `;

  contentArea.innerHTML = html;

  // 挂载并实例化具体的交互小工具
  if (chapter.interactiveTool) {
    mountInteractiveTool(chapter.interactiveTool.type);
  }
}

// --- 课后测验挑战引擎 ---
function renderQuizSection(chapter) {
  const quizMount = document.getElementById("quiz-mount-point");
  if (!quizMount) return;
  
  if (!chapter.quiz || chapter.quiz.length === 0) {
    quizMount.innerHTML = "";
    return;
  }

  const quiz = chapter.quiz;
  const currentIdx = state.quizState.currentQuestionIndex;
  
  // 测验全部答完状态
  if (currentIdx >= quiz.length) {
    quizMount.innerHTML = `
      <div class="quiz-container-card" style="border-color: var(--accent-teal);">
        <div class="quiz-finished-panel">
          <i class="fa-solid fa-circle-check"></i>
          <h4>恭喜通关本章知识挑战！</h4>
          <p>您已正确回答了所有测验，对本章核心概念有了深入理解。继续加油！</p>
          <button class="btn-primary" style="margin: 0 auto;" id="quiz-restart-btn">
            <i class="fa-solid fa-rotate-left"></i> 重新测试
          </button>
        </div>
      </div>
    `;
    
    // 绑定重新测试事件
    document.getElementById("quiz-restart-btn").addEventListener("click", () => {
      state.quizState.currentQuestionIndex = 0;
      state.quizState.selectedOption = null;
      state.quizState.isAnswered = false;
      state.quizState.correctAnswersCount = 0;
      renderQuizSection(chapter);
    });

    // 自动标记当前周已完成！
    markChapterCompleted(chapter.id, true);
    return;
  }

  const q = quiz[currentIdx];

  let optionsHtml = "";
  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx); // A, B, C...
    optionsHtml += `
      <button class="quiz-option-btn" data-index="${idx}" id="quiz-option-${idx}">
        <div class="option-letter-circle">${letter}</div>
        <span>${opt}</span>
      </button>
    `;
  });

  quizMount.innerHTML = `
    <div class="quiz-container-card">
      <div class="quiz-header">
        <i class="fa-solid fa-brain"></i>
        <h3>本章知识点强化挑战</h3>
        <span class="quiz-progress-text">问题 ${currentIdx + 1} / ${quiz.length}</span>
      </div>
      <div class="quiz-question-box">
        ${q.question}
      </div>
      <div class="quiz-options-list">
        ${optionsHtml}
      </div>
      <div id="quiz-feedback-mount"></div>
    </div>
  `;

  // 绑定选项点击事件
  q.options.forEach((_, idx) => {
    document.getElementById(`quiz-option-${idx}`).addEventListener("click", (e) => {
      handleQuizAnswer(chapter, idx);
    });
  });
}

function handleQuizAnswer(chapter, selectedIdx) {
  if (state.quizState.isAnswered) return; // 已经回答过，锁死操作

  state.quizState.isAnswered = true;
  state.quizState.selectedOption = selectedIdx;

  const q = chapter.quiz[state.quizState.currentQuestionIndex];
  const isCorrect = selectedIdx === q.answer;
  const feedbackMount = document.getElementById("quiz-feedback-mount");

  // 添加样式高亮
  q.options.forEach((_, idx) => {
    const btn = document.getElementById(`quiz-option-${idx}`);
    if (idx === q.answer) {
      btn.classList.add("correct");
    } else if (idx === selectedIdx) {
      btn.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    state.quizState.correctAnswersCount++;
    // 触发粒子烟花
    triggerConfetti();

    feedbackMount.innerHTML = `
      <div class="quiz-feedback-box correct-feedback">
        <h4><i class="fa-solid fa-circle-check"></i> 回答正确！</h4>
        <p class="quiz-explanation-text">${q.explanation}</p>
        <div class="quiz-actions-bar">
          <button class="btn-primary" id="quiz-next-btn">
            <span>下一题</span> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  } else {
    feedbackMount.innerHTML = `
      <div class="quiz-feedback-box incorrect-feedback">
        <h4><i class="fa-solid fa-circle-xmark"></i> 回答错误</h4>
        <p class="quiz-explanation-text"><strong>正确答案是 ${String.fromCharCode(65 + q.answer)}。</strong><br>${q.explanation}</p>
        <div class="quiz-actions-bar">
          <button class="btn-primary" id="quiz-next-btn">
            <span>继续学习</span> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }

  // 绑定下一题事件
  document.getElementById("quiz-next-btn").addEventListener("click", () => {
    state.quizState.currentQuestionIndex++;
    state.quizState.isAnswered = false;
    state.quizState.selectedOption = null;
    renderQuizSection(chapter);
  });
}

// --- 挂载具体周的交互小工具 ---
function mountInteractiveTool(type) {
  const mount = document.getElementById("tool-mount-point");
  if (!mount) return;

  switch (type) {
    case "product_scorer":
      mountProductScorer(mount);
      break;
    case "persona_generator":
      mountPersonaGenerator(mount);
      break;
    case "profit_calculator":
      mountProfitCalculator(mount);
      break;
    case "listing_analyzer":
      mountListingAnalyzer(mount);
      break;
    case "tiktok_script":
      mountTikTokScriptGenerator(mount);
      break;
    case "ad_budget_tester":
      mountAdBudgetTester(mount);
      break;
    case "shipping_simulator":
      mountShippingSimulator(mount);
      break;
    case "funnel_simulator":
      mountFunnelSimulator(mount);
      break;
    case "mvp_generator":
      mountMvpGenerator(mount);
      break;
  }
}

// ==========================================
// 交互小工具具体实现与 DOM 注入
// ==========================================

// --- 工具 1: 选品打分表 (Week 2) ---
function mountProductScorer(container) {
  container.innerHTML = `
    <div class="tool-header">
      <i class="fa-solid fa-clipboard-list"></i>
      <h4>实操工具：出海候选产品评估与打分表</h4>
    </div>
    <p class="paragraph">滑动各项维度参数，打分表将为您自动加权算出综合得分，并在下方自动为您推荐最高分品类：</p>
    <div class="tool-grid">
      <div class="form-group">
        <label class="form-label">产品候选名称</label>
        <input type="text" id="scorer-name" value="智能发热宠物垫" placeholder="例如：便携车载吸尘器">
      </div>
      <div class="form-group">
        <label class="form-label">1. 市场需求搜索度 (Google/Amazon月搜索量)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="scorer-demand" min="1" max="10" value="8">
          <span class="slider-val-badge" id="scorer-demand-val">8</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">2. 利润比空间 (建议出海定价是拿货价4倍以上)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="scorer-profit" min="1" max="10" value="9">
          <span class="slider-val-badge" id="scorer-profit-val">9</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">3. 避开红海竞争 (该品类不是巨头垄断和泛滥款)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="scorer-competition" min="1" max="10" value="7">
          <span class="slider-val-badge" id="scorer-competition-val">7</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">4. 跨境运输友好度 (建议轻于500g、体积微小)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="scorer-shipping" min="1" max="10" value="8">
          <span class="slider-val-badge" id="scorer-shipping-val">8</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">5. 短视频/内容传播契合度 (产品具有强感官冲击)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="scorer-content" min="1" max="10" value="9">
          <span class="slider-val-badge" id="scorer-content-val">9</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">6. 零安全合规风险 (不带强电/不含化学粉末液体)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="scorer-safety" min="1" max="10" value="8">
          <span class="slider-val-badge" id="scorer-safety-val">8</span>
        </div>
      </div>
      <div class="form-group" style="justify-content: flex-end;">
        <button class="btn-primary" id="btn-add-candidate" style="width: 100%;">
          <i class="fa-solid fa-square-plus"></i> 将产品加入对比清单
        </button>
      </div>
    </div>

    <!-- 候选清单比对表格 -->
    <div class="table-container">
      <table class="table-scorer">
        <thead>
          <tr>
            <th>候选产品</th>
            <th>需求</th>
            <th>利润</th>
            <th>物流</th>
            <th>内容</th>
            <th>合规</th>
            <th>综合分</th>
            <th>评审结论</th>
          </tr>
        </thead>
        <tbody id="scorer-table-body">
          <!-- 动态加载 -->
        </tbody>
      </table>
    </div>
  `;

  // 默认数据清单
  let candidates = [
    { name: "便携宠物温控垫", demand: 8, profit: 9, comp: 7, ship: 8, content: 9, safe: 8 },
    { name: "多功能桌面理线扣", demand: 6, profit: 5, comp: 4, ship: 10, content: 5, safe: 10 },
    { name: "电子雾化香薰器 (高风险)", demand: 9, profit: 8, comp: 5, ship: 8, content: 8, safe: 2 }
  ];

  // 绑定滑块更新显示
  const sliders = ["demand", "profit", "competition", "shipping", "content", "safety"];
  sliders.forEach(s => {
    const input = document.getElementById(`scorer-${s}`);
    const badge = document.getElementById(`scorer-${s}-val`);
    input.addEventListener("input", () => {
      badge.innerText = input.value;
    });
  });

  // 渲染对比表
  function renderScorerTable() {
    const tbody = document.getElementById("scorer-table-body");
    tbody.innerHTML = "";
    candidates.forEach(c => {
      // 算术加权平均 (此处算综合评分，满分 10.0 分)
      const avg = ((c.demand + c.profit + c.comp + c.ship + c.content + c.safe) / 6).toFixed(1);
      
      let badgeClass = "status-mid";
      let statusText = "谨慎可行";
      if (avg >= 7.5) {
        badgeClass = "status-high";
        statusText = "强烈推荐";
      } else if (avg < 5.5) {
        badgeClass = "status-low";
        statusText = "高危勿碰";
      }

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="bold-text">${c.name}</td>
        <td>${c.demand}</td>
        <td>${c.profit}</td>
        <td>${c.ship}</td>
        <td>${c.content}</td>
        <td>${c.safe}</td>
        <td><strong style="color: var(--accent-teal);">${avg}</strong></td>
        <td><span class="badge-scorer-status ${badgeClass}">${statusText}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  renderScorerTable();

  // 绑定添加按钮
  document.getElementById("btn-add-candidate").addEventListener("click", () => {
    const name = document.getElementById("scorer-name").value.trim();
    if (!name) return alert("请输入产品候选名称！");

    const newCand = {
      name: name,
      demand: parseInt(document.getElementById("scorer-demand").value),
      profit: parseInt(document.getElementById("scorer-profit").value),
      comp: parseInt(document.getElementById("scorer-competition").value),
      ship: parseInt(document.getElementById("scorer-shipping").value),
      content: parseInt(document.getElementById("scorer-content").value),
      safe: parseInt(document.getElementById("scorer-safety").value)
    };

    candidates.unshift(newCand); // 加到最前面
    renderScorerTable();
    triggerConfetti();

    // 默认把最高分的产品存入全局 MVP 数据
    state.mvpData.productName = name;
    saveMvpDataToLocalStorage();

    // 重置名字输入框
    document.getElementById("scorer-name").value = "";
  });
}

// --- 工具 2: 用户画像与定位生成器 (Week 3) ---
function mountPersonaGenerator(container) {
  container.innerHTML = `
    <div class="tool-header">
      <i class="fa-solid fa-address-card"></i>
      <h4>实操工具：出海买家画像与英文定位 Slogan 生成器</h4>
    </div>
    <p class="paragraph">填入你的产品基础场景，系统将自动利用情绪/场景定位拼装模型为您输出符合地道英语表达的产品定位主张 (Slogan)：</p>
    
    <div class="tool-grid">
      <div class="form-group">
        <label class="form-label">拟卖产品名称</label>
        <input type="text" id="persona-product" value="${state.mvpData.productName}">
      </div>
      <div class="form-group">
        <label class="form-label">首发目标国家</label>
        <select id="persona-country">
          <option value="美国 (US)">美国 (US) - 流量大消费高</option>
          <option value="英国 (UK)">英国 (UK) - 对创意定制极度喜爱</option>
          <option value="德国 (DE)">德国 (DE) - 追求严谨与环保品质</option>
          <option value="法国 (FR)">法国 (FR) - 精致轻奢美妆宠物品类</option>
          <option value="澳大利亚 (AU)">澳大利亚 (AU) - 户外野营狂热区域</option>
          <option value="新加坡 (SG)">新加坡 (SG) - 东南亚高净值辐射地</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">特定细分受众 (买家画像)</label>
        <input type="text" id="persona-user" value="养狗的城市精致白领女性，25-40岁" placeholder="例如：办公室久坐经常腰酸背痛的极客程序员">
      </div>
      <div class="form-group">
        <label class="form-label">核心痛点场景</label>
        <input type="text" id="persona-pain" value="冬天降温寒冷，老宠物关节炎发作冻得哼唧" placeholder="例如：咖啡在办公桌上总是容易凉得太快">
      </div>
      <div class="form-group col-span-2">
        <button class="btn-primary" id="btn-generate-persona">
          <i class="fa-solid fa-wand-magic-sparkles"></i> 极速生成买家画像与 Slogan
        </button>
      </div>
    </div>

    <!-- 生成结果展示卡片 -->
    <div class="tool-output-box" id="persona-result-box" style="display: none;">
      <div class="output-title">
        <i class="fa-solid fa-award"></i>
        <span>生成结果：英文主页首屏 H1 Slogan 方案</span>
      </div>
      
      <div class="output-grid">
        <div class="output-stat-card" style="grid-column: span 2;">
          <div class="output-stat-label">首选市场与买家肖像 (Target Market & Persona)</div>
          <div class="output-stat-value" id="out-persona-profile" style="font-size:14px; line-height: 1.5;">-</div>
        </div>
      </div>
      
      <div style="margin-top: 15px; display:flex; flex-direction:column; gap:10px;">
        <div class="flow-item">
          <h5>1. 场景功能型定位 (Functional H1)</h5>
          <code id="out-slogan-1" style="font-size:14px; font-weight:700;">-</code>
        </div>
        <div class="flow-item">
          <h5>2. 情感共鸣型定位 (Emotional Connection - 推荐)</h5>
          <code id="out-slogan-2" style="font-size:14px; font-weight:700; color: var(--accent-purple);">-</code>
        </div>
        <div class="flow-item">
          <h5>3. 极简直接冲击型定位 (Punchy CTA)</h5>
          <code id="out-slogan-3" style="font-size:14px; font-weight:700;">-</code>
        </div>
      </div>
    </div>
  `;

  // 绑定生成事件
  document.getElementById("btn-generate-persona").addEventListener("click", () => {
    const prod = document.getElementById("persona-product").value.trim();
    const country = document.getElementById("persona-country").value;
    const user = document.getElementById("persona-user").value.trim();
    const pain = document.getElementById("persona-pain").value.trim();

    if (!prod || !user || !pain) return alert("请完整填写表单！");

    // 存入全局数据
    state.mvpData.productName = prod;
    state.mvpData.targetCountry = country;
    state.mvpData.targetUser = user;
    state.mvpData.painPoint = pain;

    // 简单地英译逻辑 (做规则拼装示范)
    // 假设产品名翻译或规范英文：比如 "Pet Heating Bed"
    let enProduct = "Portable Smart Pet Bed";
    if (prod.includes("杯")) enProduct = "Travel Leakproof Dog Bottle";
    if (prod.includes("收纳")) enProduct = "Desktop Modular Cable Organizer";
    if (prod.includes("健身")) enProduct = "Compact Resistance Pilates Bar";

    // 拼装出海 Slogan
    const slogan1 = `The ultimate ${enProduct} designed for active pets under extreme cold weather.`;
    const slogan2 = `For dog parents who travel more with less winter pet mess.`;
    const slogan3 = `No more cold nights. Cozy sleep anywhere with ${enProduct}.`;

    state.mvpData.slogan = slogan2; // 默认保存第二个
    saveMvpDataToLocalStorage();

    // 渲染 DOM
    document.getElementById("out-persona-profile").innerHTML = `
      <strong>目标国家：</strong>${country}<br>
      <strong>核心画像：</strong>${user}<br>
      <strong>痛点激发：</strong>${pain}
    `;
    document.getElementById("out-slogan-1").innerText = slogan1;
    document.getElementById("out-slogan-2").innerText = slogan2;
    document.getElementById("out-slogan-3").innerText = slogan3;

    document.getElementById("persona-result-box").style.display = "block";
    triggerConfetti();
  });
}

// --- 工具 3: 出海产品利润测算表 (Week 4) ---
function mountProfitCalculator(container) {
  container.innerHTML = `
    <div class="tool-header">
      <i class="fa-solid fa-calculator"></i>
      <h4>实操工具：DTC 独立站出海产品利润模型测算表</h4>
    </div>
    <p class="paragraph">录入供应链各项采购及国际物流费率，计算器将自动帮您推算保本 CPA 广告单单转化上限、建议售价和合理 ROAS 水平：</p>
    
    <div class="tool-grid">
      <div class="form-group">
        <label class="form-label">1. 目标海外售价 (售价以 USD 计)</label>
        <input type="number" id="calc-price" value="${state.mvpData.price}" step="0.01">
      </div>
      <div class="form-group">
        <label class="form-label">2. 拿货采购价 (1688原采购价以 RMB 计)</label>
        <input type="number" id="calc-cogs-rmb" value="61.2" step="0.1">
      </div>
      <div class="form-group">
        <label class="form-label">3. 国际空运小包运费 (USD 计，一般轻小件 8-15 美元)</label>
        <input type="number" id="calc-shipping" value="${state.mvpData.shipping}" step="0.1">
      </div>
      <div class="form-group">
        <label class="form-label">4. 极精美防震外包装与礼品卡 (USD 计)</label>
        <input type="number" id="calc-pkg" value="1.20" step="0.1">
      </div>
      <div class="form-group">
        <label class="form-label">5. 信用卡/PayPal 收退款坏账损耗率 (建议预留 3% - 8%)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="calc-refund" min="0" max="15" value="5">
          <span class="slider-val-badge" id="calc-refund-val">5%</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">6. 收款划扣率 (Stripe/PayPal 基础 4.4% + $0.3)</label>
        <input type="text" value="4.4% + $0.3 固定通道费" disabled style="background-color: var(--bg-primary); opacity:0.75;">
      </div>
    </div>

    <!-- 实时计算诊断输出 -->
    <div class="tool-output-box">
      <div class="output-title">
        <i class="fa-solid fa-chart-pie"></i>
        <span>实时利润健康度财务报表 (所有指标均为 USD 换算计)</span>
      </div>
      
      <div class="output-grid">
        <div class="output-stat-card">
          <div class="output-stat-label">采购总货值 (RMB转USD)</div>
          <div class="output-stat-value" id="out-val-cogs">$8.50</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">妥投商品总硬成本</div>
          <div class="output-stat-value" id="out-val-hard">$21.70</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">出海毛利率 (建议≥60%)</div>
          <div class="output-stat-value" id="out-val-margin" style="color: var(--accent-teal);">56.6%</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">盈亏平衡广告CPA上限</div>
          <div class="output-stat-value" id="out-val-breakeven" style="color: var(--accent-purple); font-size:17px;">$28.29</div>
        </div>
      </div>

      <div class="output-diagnostic" id="profit-diagnostic-text">
        <!-- 诊断文字 -->
      </div>
    </div>
  `;

  // 绑定所有输入的事件触发计算
  const priceInput = document.getElementById("calc-price");
  const cogsInput = document.getElementById("calc-cogs-rmb");
  const shippingInput = document.getElementById("calc-shipping");
  const pkgInput = document.getElementById("calc-pkg");
  const refundInput = document.getElementById("calc-refund");
  const refundBadge = document.getElementById("calc-refund-val");

  function runProfitCalculations() {
    const price = parseFloat(priceInput.value) || 0;
    const cogsRmb = parseFloat(cogsInput.value) || 0;
    const shipping = parseFloat(shippingInput.value) || 0;
    const pkg = parseFloat(pkgInput.value) || 0;
    const refundRate = parseInt(refundInput.value) / 100;
    
    // 滑块百分比显示
    refundBadge.innerText = refundInput.value + "%";

    // 汇率固定按 7.2 计算
    const cogsUsd = cogsRmb / 7.2;
    
    // Stripe通道手续费: 4.4% * Price + $0.3
    const paymentFee = (price * 0.044) + 0.3;
    
    // 退款损耗摊派费用: refundRate * Price
    const refundLoss = price * refundRate;

    // 总硬成本 (不含广告费): 采购货值 + 包装 + 物流运费 + 支付手续费 + 退换货坏账备用金
    const totalHardCost = cogsUsd + pkg + shipping + paymentFee + refundLoss;

    // 出海毛利率 (售价减去商品加物流后的边际利润): (售价 - 采购 - 包装 - 物流) / 售价
    const grossProfitPercent = price > 0 ? (((price - (cogsUsd + pkg + shipping)) / price) * 100).toFixed(1) : 0;

    // 盈亏保本 CPA = 售价 - 硬成本。 如果买来一个付款用户的广告费比这个便宜，就赚钱！
    const breakevenCpa = price - totalHardCost;

    // 渲染结果
    document.getElementById("out-val-cogs").innerText = `$${cogsUsd.toFixed(2)}`;
    document.getElementById("out-val-hard").innerText = `$${totalHardCost.toFixed(2)}`;
    document.getElementById("out-val-margin").innerText = `${grossProfitPercent}%`;
    document.getElementById("out-val-breakeven").innerText = breakevenCpa > 0 ? `$${breakevenCpa.toFixed(2)}` : "$0.00";

    // 诊断文案渲染
    const diagEl = document.getElementById("profit-diagnostic-text");
    if (breakevenCpa <= 0) {
      diagEl.innerHTML = `<span style="color: var(--accent-red); font-weight:700;"><i class="fa-solid fa-triangle-exclamation"></i> 严重亏损警报：你的硬性成本已经完全超过了产品售价！请务必将海外售价提高或联系中国工厂寻找更便宜的货源。</span>`;
    } else {
      let marginAdvice = "";
      if (grossProfitPercent < 50) {
        marginAdvice = `目前你的商品毛利率为 <strong>${grossProfitPercent}%</strong>，低于独立站生存标准线 (50%)。因为Facebook广告获客极其昂贵，建议将售价调高到 <strong>$${(cogsUsd + pkg + shipping + 15).toFixed(2)}</strong> 以上，以保障利润空间。`;
      } else {
        marginAdvice = `毛利率处于极佳区间 (<strong>${grossProfitPercent}%</strong>)！具有极佳的溢价空间，能够承受高涨幅的广告获客竞争。`;
      }

      diagEl.innerHTML = `
        <p><i class="fa-solid fa-circle-info" style="color: var(--accent-teal);"></i> <strong>财务诊断：</strong> 您的保本 CPA (单单转化上限) 是 <strong>$${breakevenCpa.toFixed(2)}</strong>。这意味着在日常投放中，只要每获取一个订单的广告花费低于这个数值，独立站即进入净增利阶段。</p>
        <p style="margin-top: 6px; font-size:12.5px; color: var(--text-muted);">${marginAdvice}</p>
      `;
    }

    // 同步到全局 MVP State
    state.mvpData.price = price;
    state.mvpData.cogs = parseFloat(cogsUsd.toFixed(2));
    state.mvpData.shipping = shipping;
    state.mvpData.breakevenCpa = parseFloat(breakevenCpa.toFixed(2));
    saveMvpDataToLocalStorage();
  }

  // 绑定实时更新
  [priceInput, cogsInput, shippingInput, pkgInput, refundInput].forEach(elem => {
    elem.addEventListener("input", runProfitCalculations);
  });

  // 首次运行
  runProfitCalculations();
}

// --- 工具 4: 竞品 Listing 拆解工具 (Week 5) ---
function mountListingAnalyzer(container) {
  container.innerHTML = `
    <div class="tool-header">
      <i class="fa-solid fa-magnifying-glass-chart"></i>
      <h4>实操工具：Amazon 竞品 Listing 拆解与高溢价优化器</h4>
    </div>
    <p class="paragraph">输入亚马逊或独立站竞争对手的书面信息，分析器将帮您梳理出其软肋缺陷，并智能生成专属于您的『优化版文案撰写 Claude 高效 Prompt』：</p>
    
    <div class="tool-grid">
      <div class="form-group">
        <label class="form-label">对手 Listing 地址/品牌名</label>
        <input type="text" id="listing-url" value="FurryWarm Pet Store (Amazon Best Seller #3)">
      </div>
      <div class="form-group">
        <label class="form-label">对手当前售价 (USD)</label>
        <input type="number" id="listing-price" value="39.99">
      </div>
      <div class="form-group col-span-2">
        <label class="form-label">对手核心卖点 (五点描述提炼)</label>
        <textarea id="listing-bullets" rows="3">1. 恒温 38 度安全温控保护\n2. 磨绒柔软面料亲肤舒适\n3. 阻燃电线绝缘设计\n4. 针对寒冬户外帐篷露营</textarea>
      </div>
      <div class="form-group col-span-2">
        <label class="form-label">抓取该对手一星负面差评 (痛点爆发所在 - 排雷核心)</label>
        <textarea id="listing-negatives" rows="3">1. 充电线实在太短了，离家里的插座远远不够长！\n2. 没有配备防水罩，猫一尿湿整个电路就坏了，很危险！\n3. 背后没有防滑橡胶，放在地板上老是被狗蹭跑乱动！</textarea>
      </div>
      <div class="form-group col-span-2">
        <button class="btn-primary" id="btn-generate-listing-advice">
          <i class="fa-solid fa-wand-magic-sparkles"></i> 一键导出 Listing 改良文案 Prompt
        </button>
      </div>
    </div>

    <!-- 生成结果展示卡片 -->
    <div class="tool-output-box" id="listing-result-box" style="display: none;">
      <div class="output-title">
        <i class="fa-solid fa-copy"></i>
        <span>一键复制：前往 AI (Claude/ChatGPT) 仿写优化的黄金指令</span>
      </div>
      <p class="paragraph" style="font-size:12px; color: var(--text-muted); margin-bottom: 8px;">直接复制下方 Prompt 指令丢给大语言模型，能极速为您量身写出一份完美避开对手所有差评、地道高溢价的产品英文 Listing 详情描述：</p>
      
      <div class="copyable-script-box">
        <button class="copy-btn-floating" id="btn-copy-listing-prompt"><i class="fa-regular fa-copy"></i> 复制指令</button>
        <pre><code id="out-listing-prompt">Prompt text loads here...</code></pre>
      </div>
    </div>
  `;

  // 绑定分析生成事件
  document.getElementById("btn-generate-listing-advice").addEventListener("click", () => {
    const url = document.getElementById("listing-url").value.trim();
    const price = document.getElementById("listing-price").value;
    const bullets = document.getElementById("listing-bullets").value.trim();
    const negatives = document.getElementById("listing-negatives").value.trim();

    if (!url || !bullets || !negatives) return alert("请完整填写真实分析内容！");

    // 拼装 Prompt
    const finalPrompt = `Act as an elite Amazon DTC copywriter. 
I will give you a competitor's listing details and a list of key customer pain points extracted from their 1-star negative reviews.

Our improved product is: "${state.mvpData.productName}". We have upgraded it with a waterproof surface, extra-long cord, and heavy-duty anti-slip bottom.

Competitor Name: "${url}"
Competitor Bullet Points:
"""
${bullets}
"""

Their Pain Points (Negative Reviews):
"""
${negatives}
"""

Please write a premium, high-converting Amazon Listing (Title, 5 Bullet Points, and a product page description) for our improved product. 
Guidelines:
1. Emotionally highlight how we solved their negative reviews (e.g., extra long power cord, fully waterproof protection, ultimate anti-slip backing).
2. Write with a natural, premium tone. Strictly avoid dry AI corporate buzzwords (like 'delve', 'moreover', 'testament').
3. Keep it punchy, clear, and persuasive for active US shoppers. Use HSL framing.`;

    // 写入 DOM
    document.getElementById("out-listing-prompt").innerText = finalPrompt;
    document.getElementById("listing-result-box").style.display = "block";
    triggerConfetti();

    // 同步到全局数据
    state.mvpData.competitorDetails = `竞品 URL/店名: ${url}. 其主要负面痛点: ${negatives.slice(0, 100)}...`;
    saveMvpDataToLocalStorage();

    // 绑定复制按钮
    document.getElementById("btn-copy-listing-prompt").onclick = () => {
      copyToClipboard(finalPrompt);
      alert("AI Prompt 黄金指令复制成功！快去丢给 Claude/ChatGPT 吧！");
    };
  });
}

// --- 工具 5: TikTok 脚本生成器 (Week 7) ---
function mountTikTokScriptGenerator(container) {
  container.innerHTML = `
    <div class="tool-header">
      <i class="fa-brands fa-tiktok"></i>
      <h4>实操工具：TikTok 30秒爆款短视频黄金脚本模型</h4>
    </div>
    <p class="paragraph">填入产品差异点，自动为您拼装生成一份符合钩子 (Hook) 引流理论的 TikTok 拍摄与旁白分镜脚本表，并支持一键拷贝：</p>
    
    <div class="tool-grid">
      <div class="form-group">
        <label class="form-label">主推产品名称</label>
        <input type="text" id="script-product" value="${state.mvpData.productName}">
      </div>
      <div class="form-group">
        <label class="form-label">痛点画面描述 (比如：冬天狗冷得发抖)</label>
        <input type="text" id="script-pain" value="冬天降温寒冷，你的小柴犬被冻得哆哆嗦嗦蜷缩在地板上">
      </div>
      <div class="form-group">
        <label class="form-label">核心痛点升级改良细节</label>
        <input type="text" id="script-feature" value="独家配备的 1.8 米超长安全电线与 100% 尿湿防护设计">
      </div>
      <div class="form-group">
        <label class="form-label">限时成交 Offer (CTA)</label>
        <input type="text" id="script-cta" value="限时开业 5 折优惠，仅限前 100 名点击 Bio 下单！">
      </div>
      <div class="form-group col-span-2">
        <button class="btn-primary" id="btn-generate-tiktok-script">
          <i class="fa-solid fa-wand-magic-sparkles"></i> 渲染 TikTok 爆单分镜脚本
        </button>
      </div>
    </div>

    <!-- 生成分镜脚本面板 -->
    <div class="tool-output-box" id="tiktok-script-result-box" style="display: none;">
      <div class="output-title">
        <i class="fa-solid fa-list-check"></i>
        <span>生成分镜：TikTok 30s 黄金拍摄脚本 (可用于寄样达人或自主拍摄)</span>
      </div>
      
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>分镜</th>
              <th>时间</th>
              <th>镜头画面 (Visuals)</th>
              <th>英语旁白音频 (Audio Voiceover)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bold-text">1. Hook前3秒</td>
              <td>0-3s</td>
              <td>微距镜头拍摄柴犬在冷风中冻得瑟瑟发抖的无助特写，极具同情心。</td>
              <td style="color: var(--accent-teal);">"Do NOT buy a cheap pet bed... unless you want your pup shivering like this all winter! 🥶"</td>
            </tr>
            <tr>
              <td class="bold-text">2. 痛点激发</td>
              <td>4-8s</td>
              <td>展现一个普通的插座，因为宠物垫充电线只有 50cm，宠物被迫卷曲在墙角插头下面。</td>
              <td>"Most dog beds have tiny 1-foot cords, dragging them to cold walls..."</td>
            </tr>
            <tr>
              <td class="bold-text">3. 产品登场</td>
              <td>9-15s</td>
              <td>画面一亮，高逼格展示我们的 <span class="script-out-prod">智能发热宠物垫</span>。主角把 1.8 米的长电线轻松拉到暖烘烘的客厅中央，小狗趴上发出极度满足的哈气。</td>
              <td style="color: var(--accent-teal);">"That's why we built this. With an extra-long 6-foot heavy cord and fully waterproof shields!"</td>
            </tr>
            <tr>
              <td class="bold-text">4. ASMR演示</td>
              <td>16-22s</td>
              <td>特写一杯水故意泼洒上去，镜头展示水珠丝滑滑落完全没有浸湿，并听到拉拉链的治愈声音。</td>
              <td>"Pee-proof, leak-proof, and chew-proof. Maximum cozy vibes only. ✨"</td>
            </tr>
            <tr>
              <td class="bold-text">5. Before/After</td>
              <td>23-26s</td>
              <td>拼图强对比：冷冰冰的地板瑟瑟发抖 VS 宠物在客厅中央翻肚皮安睡，脸上挂满微笑。</td>
              <td>"From freezing pain to absolute dog heaven."</td>
            </tr>
            <tr>
              <td class="bold-text">6. 强限时 CTA</td>
              <td>27-30s</td>
              <td>手指伸向左下方指向屏幕外，加粗红色文案飘起。</td>
              <td style="color: var(--accent-purple); font-weight:700;">"<span class="script-out-cta">Shop now</span> for 50% Off. Link in Bio!"</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div style="display:flex; justify-content: flex-end; margin-top: 15px;">
        <button class="btn-primary" id="btn-copy-tiktok-script"><i class="fa-solid fa-copy"></i> 复制脚本 Markdown 文件</button>
      </div>
    </div>
  `;

  // 绑定生成事件
  document.getElementById("btn-generate-tiktok-script").addEventListener("click", () => {
    const prod = document.getElementById("script-product").value.trim();
    const pain = document.getElementById("script-pain").value.trim();
    const feature = document.getElementById("script-feature").value.trim();
    const cta = document.getElementById("script-cta").value.trim();

    if (!prod || !pain || !feature || !cta) return alert("请完整填写真实要素！");

    // 动态调整脚本内的关键词
    document.querySelectorAll(".script-out-prod").forEach(el => el.innerText = prod);
    document.querySelectorAll(".script-out-cta").forEach(el => el.innerText = cta);

    document.getElementById("tiktok-script-result-box").style.display = "block";
    triggerConfetti();

    // 拼装完整脚本的 Markdown 用于复制
    const scriptMarkdown = `## TikTok 30s 视频脚本 - ${prod}
- **分镜 1 (0-3s) Hook前3秒**: 镜头拍柴犬在冷风中瑟瑟发抖的无助特写 ➜ "Do NOT buy a cheap pet bed... unless you want your pup shivering like this all winter!"
- **分镜 2 (4-8s) 痛点激发**: 展现普通短线垫被迫把狗拉到冰冷墙头插头下 ➜ "Most dog beds have tiny 1-foot cords, dragging them to cold walls..."
- **分镜 3 (9-15s) 产品登场**: 客厅中央使用 ${prod} (${feature})，宠物舒适蜷缩 ➜ "That's why we built this. With an extra-long 6-foot heavy cord and fully waterproof shields!"
- **分镜 4 (16-22s) ASMR演示**: 故意泼水特写，展示不沾水珠 ➜ "Pee-proof, leak-proof, and chew-proof. Maximum cozy vibes only."
- **分镜 5 (23-26s) 对比画面**: 冻抖 VS 摊睡 ➜ "From freezing pain to absolute dog heaven."
- **分镜 6 (27-30s) 强限时 CTA**: 手指指向下方 ➜ "${cta}"`;

    // 存入全局数据
    state.mvpData.tiktokScript = scriptMarkdown;
    saveMvpDataToLocalStorage();

    // 绑定复制
    document.getElementById("btn-copy-tiktok-script").onclick = () => {
      copyToClipboard(scriptMarkdown);
      alert("TikTok 爆单分镜脚本已拷贝到剪贴板，可以拿去给达人或自己看词录制啦！");
    };
  });
}

// --- 工具 6: 广告测试计算器 (Week 8) ---
function mountAdBudgetTester(mount) {
  mount.innerHTML = `
    <div class="tool-header">
      <i class="fa-solid fa-rectangle-ad"></i>
      <h4>实操工具：小预算 Facebook/TikTok 广告测试与风控计算器</h4>
    </div>
    <p class="paragraph">输入单笔广告计划参数，自动推算合理的测试时长、起步素材赛马数以及在数据漏斗流失时的“斩仓/掐死广告”安全熔断点：</p>
    
    <div class="tool-grid">
      <div class="form-group">
        <label class="form-label">拟设日预算 (单个广告 Campaign 计划投入，以 USD 计)</label>
        <input type="number" id="ad-daily-budget" value="${state.mvpData.adBudget}" step="5">
      </div>
      <div class="form-group">
        <label class="form-label">单次点击预估 CPC (一般美欧在 $0.5 - $1.5 区间)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="ad-cpc" min="2" max="25" value="8">
          <span class="slider-val-badge" id="ad-cpc-val">$0.8</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">预期独立站转化率 CVR (建议以健康均值 1.5% 估测)</label>
        <div class="range-slider-wrapper">
          <input type="range" id="ad-cvr" min="5" max="50" value="15">
          <span class="slider-val-badge" id="ad-cvr-val">1.5%</span>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">保本 CPA 上限 (从第4周继承或填入，USD)</label>
        <input type="number" id="ad-breakeven-cpa" value="${state.mvpData.breakevenCpa}" step="0.1">
      </div>
    </div>

    <!-- 广告诊断结果看板 -->
    <div class="tool-output-box">
      <div class="output-title">
        <i class="fa-solid fa-shield-halved"></i>
        <span>3天广告测试计划沙盒与警报指标预测</span>
      </div>
      
      <div class="output-grid">
        <div class="output-stat-card">
          <div class="output-stat-label">总测试耗资 (3天周期)</div>
          <div class="output-stat-value" id="ad-out-total-cost">$90.00</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">预计导入点击数 (Clicks)</div>
          <div class="output-stat-value" id="ad-out-clicks">112 Clicks</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">测出爆款所需起量单数</div>
          <div class="output-stat-value" id="ad-out-orders" style="color: var(--accent-teal);">2 订单</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">第一天斩仓止损线 (Spend)</div>
          <div class="output-stat-value" id="ad-out-stop-line" style="color: var(--accent-red);">$30.00</div>
        </div>
      </div>

      <div class="output-diagnostic" id="ad-diagnostic-text">
        <!-- 动态熔断安全方案 -->
      </div>
    </div>
  `;

  const budgetInput = document.getElementById("ad-daily-budget");
  const cpcSlider = document.getElementById("ad-cpc");
  const cpcBadge = document.getElementById("ad-cpc-val");
  const cvrSlider = document.getElementById("ad-cvr");
  const cvrBadge = document.getElementById("ad-cvr-val");
  const breakevenInput = document.getElementById("ad-breakeven-cpa");

  function runAdCalculations() {
    const dailyBudget = parseFloat(budgetInput.value) || 0;
    const cpc = parseInt(cpcSlider.value) / 10;
    const cvr = parseInt(cvrSlider.value) / 1000;
    const breakevenCpa = parseFloat(breakevenInput.value) || 0;

    cpcBadge.innerText = `$${cpc.toFixed(2)}`;
    cvrBadge.innerText = (cvr * 100).toFixed(1) + "%";

    const totalCost = dailyBudget * 3;
    const estimatedClicks = cpc > 0 ? (totalCost / cpc) : 0;
    const estimatedConversions = estimatedClicks * cvr;

    document.getElementById("ad-out-total-cost").innerText = `$${totalCost.toFixed(2)}`;
    document.getElementById("ad-out-clicks").innerText = `${Math.round(estimatedClicks)} Clicks`;
    document.getElementById("ad-out-orders").innerText = `${Math.max(1, Math.round(estimatedConversions))} 单`;
    document.getElementById("ad-out-stop-line").innerText = `$${dailyBudget.toFixed(2)}`;

    // 熔断诊断建议
    const diagText = document.getElementById("ad-diagnostic-text");
    diagText.innerHTML = `
      <p><strong style="color: var(--accent-purple);"><i class="fa-solid fa-shield"></i> 3天小预算熔断法则：</strong></p>
      <ul style="margin: 8px 0 0 20px; font-size:12.5px; line-height: 1.5;">
        <li><strong>第 24 小时：</strong> 如果消耗满 $${dailyBudget.toFixed(2)}，点击率 (CTR) 低于 1.2%，说明视频前3秒极差。<strong>不要犹豫，立即掐死，换套新视频素材再测！</strong></li>
        <li><strong>第 48 小时：</strong> 如果总消耗满 $${(dailyBudget * 2).toFixed(2)}，加购数 (ATC) 为 0，表明详情页说服力或价格定价阻力太大。暂停广告，优化详情页首屏与降价。</li>
        <li><strong>第 72 小时：</strong> 如果3天跑完总消耗 $${totalCost.toFixed(2)}，ROAS（即销售额/花费）大于 <strong>${breakevenCpa > 0 ? (state.mvpData.price / breakevenCpa).toFixed(1) : 2.0}</strong>，说明广告已经产生纯盈利！<strong>立即把日预算上调 50% 迈入爆量放飞阶段！</strong></li>
      </ul>
    `;

    // 存入全局数据
    state.mvpData.adBudget = dailyBudget;
    saveMvpDataToLocalStorage();
  }

  [budgetInput, cpcSlider, cvrSlider, breakevenInput].forEach(el => {
    el.addEventListener("input", runAdCalculations);
  });

  runAdCalculations();
}

// --- 工具 7: 物流时效与成本对比器 (Week 9) ---
function mountShippingSimulator(mount) {
  mount.innerHTML = `
    <div class="tool-header">
      <i class="fa-solid fa-truck-ramp-box"></i>
      <h4>实操工具：出海妥投时效与跨境运费模拟计算器</h4>
    </div>
    <p class="paragraph">拖动滑块调整你的商品包装重量，对比不同出海物流通道的计费和送达妥投率时效，挑选最适合本品的妥投策略：</p>
    
    <div class="form-group" style="margin-bottom: 20px;">
      <label class="form-label">拟测包装重量 (以克为单位，微小商品一般 50g-1000g)</label>
      <div class="range-slider-wrapper">
        <input type="range" id="ship-weight" min="50" max="2000" value="250" step="50">
        <span class="slider-val-badge" id="ship-weight-val" style="min-width: 60px;">250g</span>
      </div>
    </div>

    <!-- 侧对侧物流卡片 -->
    <div class="comparison-grid" id="shipping-cards-container">
      <!-- 动态卡片 -->
    </div>
  `;

  const weightSlider = document.getElementById("ship-weight");
  const weightBadge = document.getElementById("ship-weight-val");

  function runShippingSimulation() {
    const w = parseInt(weightSlider.value);
    weightBadge.innerText = w + "g";

    // 直发小包空运: 基础4美金 + 80美元每kg (0.08 * w)
    const directCost = 4.00 + (w * 0.008);
    // 3PL海外仓备货 (假设海运海卡运到海外仓): 海运分摊到每个头程 1.5美金 + 海外尾程派送 5.5美金 (轻重不敏感在500g内)
    const warehouseCost = 1.50 + 5.50 + (w > 500 ? (w - 500) * 0.003 : 0);
    // Amazon FBA: 包含 referral + 亚马逊配送固定区间费 ($4.2)
    const fbaCost = 4.20 + (w > 400 ? (w - 400) * 0.004 : 0);

    const container = document.getElementById("shipping-cards-container");
    container.innerHTML = `
      <div class="comp-box recommend" style="border-left-color: var(--accent-blue);">
        <h5 style="color: var(--accent-blue);"><i class="fa-solid fa-plane-up"></i> 1. 中国挂号邮政/专线直发小包</h5>
        <ul style="margin-left: 15px; font-size:12.5px; line-height: 1.6;">
          <li><strong>预估单笔邮费：</strong> <strong style="color: var(--accent-teal);">$${directCost.toFixed(2)}</strong></li>
          <li><strong>空运海外时效：</strong> 7 - 14 天 (极速版 7-10天)</li>
          <li><strong>资金周转率：</strong> 极高 (零海外囤货资金积压)</li>
          <li><strong>妥投安全率：</strong> 97.5% 挂号信息可追踪</li>
          <li style="color: var(--text-muted);">* 极度推荐新手 MVP 阶段使用，花最小代价测出销量，然后再大规模海运到海外仓。</li>
        </ul>
      </div>

      <div class="comp-box recommend" style="border-left-color: var(--accent-purple);">
        <h5 style="color: var(--accent-purple);"><i class="fa-solid fa-warehouse"></i> 2. 目的国本地海外仓 (3PL) 履约</h5>
        <ul style="margin-left: 15px; font-size:12.5px; line-height: 1.6;">
          <li><strong>预估单笔邮费：</strong> <strong style="color: var(--accent-teal);">$${warehouseCost.toFixed(2)}</strong></li>
          <li><strong>尾程派送时效：</strong> 2 - 5 天 (本地极速达)</li>
          <li><strong>资金周转率：</strong> 较低 (须积压至少200件库存)</li>
          <li><strong>妥投安全率：</strong> 99.8% 送达，几乎零售后退款</li>
          <li style="color: var(--text-muted);">* 适合通过 MVP 爆款验证后，大规模批量海运摊薄成本，实现半托管就近发货。</li>
        </ul>
      </div>
    `;

    // 默认保存直发小包运费至全局，并写入推荐物流模式名称
    state.mvpData.shipping = parseFloat(directCost.toFixed(2));
    state.mvpData.shippingMode = `Direct Airmail 专线小包 (预估运费: $${directCost.toFixed(2)})`;
    saveMvpDataToLocalStorage();
  }

  weightSlider.addEventListener("input", runShippingSimulation);
  runShippingSimulation();
}

// --- 工具 8: 漏斗数据复盘模拟器 (Week 11) ---
function mountFunnelSimulator(mount) {
  mount.innerHTML = `
    <div class="tool-header">
      <i class="fa-solid fa-filter"></i>
      <h4>实操工具：出海全链路转化漏斗实时诊断模拟器</h4>
    </div>
    <p class="paragraph">拖动滑动各层漏斗转化率数值，系统将模仿您的进店交易流逝，并自动在下方诊断并输出一键优化拯救方案 (CTR低、加购低、结账漏水等)：</p>
    
    <div class="tool-grid">
      <div class="form-group col-span-2">
        <label class="form-label">拟测入站预计广告曝光量 (Impressions)</label>
        <input type="number" id="funnel-imp" value="100000" step="5000">
      </div>
      
      <div class="form-group col-span-2">
        <div class="funnel-stage-row">
          <div class="funnel-stage-meta">
            <span>第一层：广告点击率 (CTR - 决定吸引力)</span>
            <span id="lbl-f-ctr">1.8%</span>
          </div>
          <div class="range-slider-wrapper">
            <input type="range" id="f-ctr" min="2" max="60" value="18">
          </div>
        </div>
        
        <div class="funnel-stage-row">
          <div class="funnel-stage-meta">
            <span>第二层：详情页加购物车率 (ATC Rate - 决定说服力)</span>
            <span id="lbl-f-atc">5.0%</span>
          </div>
          <div class="range-slider-wrapper">
            <input type="range" id="f-atc" min="5" max="150" value="50">
          </div>
        </div>

        <div class="funnel-stage-row">
          <div class="funnel-stage-meta">
            <span>第三层：加购后发起结账率 (IC Rate - 决定定价运费阻力)</span>
            <span id="lbl-f-ic">40%</span>
          </div>
          <div class="range-slider-wrapper">
            <input type="range" id="f-ic" min="10" max="90" value="40">
          </div>
        </div>

        <div class="funnel-stage-row">
          <div class="funnel-stage-meta">
            <span>第四层：结账并最终支付成功率 (PUR Rate - 决定收单信任度)</span>
            <span id="lbl-f-pur">50%</span>
          </div>
          <div class="range-slider-wrapper">
            <input type="range" id="f-pur" min="10" max="90" value="50">
          </div>
        </div>
      </div>
    </div>

    <!-- 漏斗实时转化卡 -->
    <div class="tool-output-box">
      <div class="output-title">
        <i class="fa-solid fa-chart-column"></i>
        <span>实时沙盒漏斗转化订单推演 (整体转化率 CVR 测算)</span>
      </div>
      
      <div class="output-grid">
        <div class="output-stat-card">
          <div class="output-stat-label">预计入店访客 (Clicks)</div>
          <div class="output-stat-value" id="out-f-clicks">1,800 Clicks</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">产生加购件数 (ATC)</div>
          <div class="output-stat-value" id="out-f-atc">90 ATC</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">最终付款订单数 (PUR)</div>
          <div class="output-stat-value" id="out-f-pur" style="color: var(--accent-teal); font-size:18px;">18 Orders</div>
        </div>
        <div class="output-stat-card">
          <div class="output-stat-label">全站总支付转化率 (CVR)</div>
          <div class="output-stat-value" id="out-f-cvr" style="color: var(--accent-purple);">1.0%</div>
        </div>
      </div>

      <div class="output-diagnostic" id="funnel-diagnostic-advice-box">
        <!-- 动态分析诊断方案 -->
      </div>
    </div>
  `;

  const impInput = document.getElementById("funnel-imp");
  const ctrSlider = document.getElementById("f-ctr");
  const atcSlider = document.getElementById("f-atc");
  const icSlider = document.getElementById("f-ic");
  const purSlider = document.getElementById("f-pur");

  function runFunnelSimulation() {
    const imps = parseInt(impInput.value) || 0;
    const ctr = parseInt(ctrSlider.value) / 1000;
    const atc = parseInt(atcSlider.value) / 1000;
    const ic = parseInt(icSlider.value) / 100;
    const pur = parseInt(purSlider.value) / 100;

    // 刷新头部标签
    document.getElementById("lbl-f-ctr").innerText = (ctr * 100).toFixed(1) + "%";
    document.getElementById("lbl-f-atc").innerText = (atc * 100).toFixed(1) + "%";
    document.getElementById("lbl-f-ic").innerText = (ic * 100).toFixed() + "%";
    document.getElementById("lbl-f-pur").innerText = (pur * 100).toFixed() + "%";

    // 算订单
    const clicks = Math.round(imps * ctr);
    const atcs = Math.round(clicks * atc);
    const ics = Math.round(atcs * ic);
    const purs = Math.round(ics * pur);
    const finalCvr = clicks > 0 ? ((purs / clicks) * 100).toFixed(2) : "0.00";

    document.getElementById("out-f-clicks").innerText = clicks.toLocaleString() + " Clicks";
    document.getElementById("out-f-atc").innerText = atcs.toLocaleString() + " ATC";
    document.getElementById("out-f-pur").innerText = purs.toLocaleString() + " 订单";
    document.getElementById("out-f-cvr").innerText = finalCvr + "%";

    // 动态智能断案方案 (漏斗最大流失诊断)
    const advBox = document.getElementById("funnel-diagnostic-advice-box");
    let adviceHtml = `<strong>📊 智能漏斗诊断医生分析意见：</strong><br>`;
    let errorCount = 0;

    if (ctr < 0.015) {
      errorCount++;
      adviceHtml += `<p style="margin-top:8px; color: var(--accent-red);"><i class="fa-solid fa-triangle-exclamation"></i> <strong>点击率过低 (${(ctr*100).toFixed(1)}%):</strong> 用户在广告中流失。原因极有可能是视频前3s没有Hook诱惑、视频画面差或受众不对。 ➜ <strong>拯救动作：立即更换 3 种新爆款视频 Hook 素材投产！</strong></p>`;
    }
    if (atc < 0.06) {
      errorCount++;
      adviceHtml += `<p style="margin-top:8px; color: var(--accent-red);"><i class="fa-solid fa-triangle-exclamation"></i> <strong>进站加购率过低 (${(atc*100).toFixed(1)}%):</strong> 用户进店却不想加购物车。原因可能是详情页首屏太丑、加载超过3秒、缺少 Judge.me 带图评价或没有信任盾牌。 ➜ <strong>拯救动作：压缩高清图优化速度，导入 10 条高质量买家秀！</strong></p>`;
    }
    if (ic < 0.35) {
      errorCount++;
      adviceHtml += `<p style="margin-top:8px; color: hsl(35, 92%, 50%);"><i class="fa-solid fa-circle-exclamation"></i> <strong>加购结账流失大 (${(ic*100).toFixed()}%):</strong> 用户想买却在购物车放弃。最大诱因是：用户突然看到了高昂的国际快递费！ ➜ <strong>拯救动作：强烈建议转入『免运费 Free Shipping 策略』，把运费算在售价里！</strong></p>`;
    }
    if (pur < 0.55) {
      errorCount++;
      adviceHtml += `<p style="margin-top:8px; color: var(--accent-red);"><i class="fa-solid fa-triangle-exclamation"></i> <strong>结账付款放弃率过高 (${(pur*100).toFixed()}%):</strong> 用户输卡时跑掉。原因可能是缺少快捷本地支付。 ➜ <strong>拯救动作：快速检查 Stripe / PayPal 卡槽正常，增添 Klarna、Apple Pay 一键免密支付减小防范感。</strong></p>`;
    }

    if (errorCount === 0) {
      adviceHtml += `<p style="margin-top:8px; color: var(--accent-green);"><i class="fa-solid fa-circle-check"></i> <strong>您的漏斗数据极其健康 (整体 CVR 为 ${finalCvr}%)！</strong> 所有链路指标均超出业界优秀值。请立即开启疯狂倍增广告日预算，恭喜进入超级盈利起量时代！</p>`;
    }

    advBox.innerHTML = adviceHtml;
  }

  [impInput, ctrSlider, atcSlider, icSlider, purSlider].forEach(el => {
    el.addEventListener("input", runFunnelSimulation);
  });

  runFunnelSimulation();
}

// --- 工具 9: MVP 一键方案生成器 (Week 12 - 终极整合) ---
function mountMvpGenerator(mount) {
  // 实时编译一份 Markdown 方案
  function generateMarkdownText() {
    return `# 《跨境电商出海最小可行性 MVP 企划书》

## 一、项目定位与首发战略
- **拟售产品名称**：${state.mvpData.productName}
- **第一目标国家**：${state.mvpData.targetCountry}
- **目标用户画像**：${state.mvpData.targetUser}
- **用户核心痛点**：${state.mvpData.painPoint}
- **主页首屏 Slogan (核心定位)**：${state.mvpData.slogan}

## 二、供应链与财务保本测算
- **拟定海外售价**：$${state.mvpData.price.toFixed(2)} USD
- **单件拿货 COGS 成本**：$${state.mvpData.cogs.toFixed(2)} USD
- **每单国际直发配送费**：$${state.mvpData.shipping.toFixed(2)} USD
- **盈亏保本 CPA 阈值**：$${state.mvpData.breakevenCpa.toFixed(2)} USD (单单广告成本在此之下即盈利)

## 三、广告引流与小预算验证
- **测试媒体渠道**：Facebook Ads (Meta) & TikTok Ads
- **小预算测试日预算**：$${state.mvpData.adBudget.toFixed(2)} USD / 每天
- **小预算测试周期**：3 天 (72小时)
- **第一阶段素材赛马数**：准备至少 3 条不同痛点/Hook 视频素材
- **爆单放飞 ROAS 标准**：ROAS ≥ ${(state.mvpData.price / (state.mvpData.breakevenCpa || 20)).toFixed(1)}

## 四、物流发货与收单安全
- **头程派送物流模式**：${state.mvpData.shippingMode}
- **妥投预计时效范围**：7 - 14 天
- **支付收款网关组合**：Stripe 信用卡通道 (Visa, Mastercard) + PayPal 钱包结算

## 五、AI 效能工作流赋能
- **AI 选品抓取**：使用 Python 爬虫清洗 competitor 差评改良选品。
- **Listing 文案**：使用黄金 Claude Listing 优化 Prompt 进行高溢价重写。

## 六、实战安全熔断机制
- 广告跑满 24 小时，若 CTR < 1.2% ➜ 立即关停熔断，更换 Hook 重新上传！
- 广告跑满 48 小时，若有加购无订单 ➜ 暂停广告，优化详情页首屏评价和定价阻力！
- 广告跑满 72 小时，若 ROAS 盈利 ➜ 每日翻倍追加 50% 预算，踏入大批量发货正轨！`;
  }

  mount.innerHTML = `
    <div class="tool-header">
      <i class="fa-solid fa-file-invoice-dollar"></i>
      <h4>终极实战：一键汇总并生成《跨境电商出海MVP方案》</h4>
    </div>
    <p class="paragraph">恭喜！您前 11 周所有的计算与定位决策已自动注入沙盒。下方已为您自动编译出最规范的出海 MVP 实战方案，可一键复制或下载为 Markdown 随身携带：</p>
    
    <div class="copyable-script-box" style="margin-top: 15px;">
      <button class="copy-btn-floating" id="btn-copy-mvp-plan" style="top: 10px; right: 10px;"><i class="fa-regular fa-copy"></i> 复制完整方案</button>
      <pre style="max-height: 400px; padding-top: 50px;"><code id="out-mvp-markdown-body" style="color: var(--text-primary); line-height: 1.6;">Generating plan...</code></pre>
    </div>

    <div style="display: flex; gap: 15px; margin-top: 20px;">
      <button class="btn-primary" id="btn-download-mvp-file">
        <i class="fa-solid fa-file-arrow-down"></i> 下载计划书 Markdown 文件
      </button>
      <button class="btn-sidebar-icon" id="btn-refresh-mvp">
        <i class="fa-solid fa-arrows-rotate"></i> 刷新数据
      </button>
    </div>
  `;

  function renderMvpText() {
    const md = generateMarkdownText();
    document.getElementById("out-mvp-markdown-body").innerText = md;
  }

  renderMvpText();

  // 绑定复制
  document.getElementById("btn-copy-mvp-plan").addEventListener("click", () => {
    copyToClipboard(generateMarkdownText());
    alert("您的《跨境电商出海最小可行性 MVP 企划书》Markdown 格式复制成功！去把它做为项目地基或者发给合伙人吧！");
  });

  // 绑定下载
  document.getElementById("btn-download-mvp-file").addEventListener("click", () => {
    const md = generateMarkdownText();
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `跨境电商出海_MVP方案_${state.mvpData.productName}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerConfetti();
  });

  // 绑定刷新数据
  document.getElementById("btn-refresh-btn")?.addEventListener("click", () => {
    loadStateFromLocalStorage();
    renderMvpText();
  });
}

// ==========================================
// 辅助工具与交互状态动作
// ==========================================

// --- 全局事件绑定与主题管理 ---
function setupGlobalEvents() {
  // 1. 阅读学完切换按钮
  const completeBtn = document.getElementById("chapter-complete-btn");
  completeBtn.addEventListener("click", () => {
    const cid = state.currentChapterId;
    const isCompleted = state.progress[cid] === true;
    markChapterCompleted(cid, !isCompleted);
  });

  // 2. 主题切换
  const themeBtn = document.getElementById("theme-toggle-btn");
  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  });

  // 3. 重置所有进度
  const resetBtn = document.getElementById("reset-progress-btn");
  resetBtn.addEventListener("click", () => {
    if (confirm("确定要重置所有已学习的勾选标记和实操小工具缓存吗？这会清空你已做的数据账本。")) {
      state.progress = {};
      state.mvpData = {
        productName: "便携式智能宠物温控垫",
        targetCountry: "美国 (US)",
        targetUser: "28-45岁城市高收入养狗女性",
        painPoint: "暴雪寒冷降温，老年犬关节炎疼痛无法入睡",
        slogan: "For dog parents who travel more with less winter pet mess.",
        price: 49.99,
        cogs: 8.50,
        shipping: 12.00,
        breakevenCpa: 26.50,
        competitorDetails: "Amazon 竞品: H&M Pet Bed. 售价 $39, 痛点是电线太短、表面防滑差且不防水。",
        tiktokScript: "痛点钩子 -> 暴降温惨状 -> 宠物垫出镜恒温ASMR -> Before/After治愈对比 -> 限量五折CTA!",
        adBudget: 30,
        testDuration: 3,
        shippingMode: "Direct Airmail (挂号专线专邮小包)"
      };
      saveProgressToLocalStorage();
      saveMvpDataToLocalStorage();
      
      // 刷回主页
      window.location.hash = "#/intro";
      router();
      alert("进度已全部清零，重新扬帆起航！");
    }
  });

  // 4. 移动端侧边栏弹出与背景点击收起
  const burgerBtn = document.getElementById("burger-menu-btn");
  const backdrop = document.getElementById("sidebar-backdrop");
  
  burgerBtn.addEventListener("click", () => toggleMobileSidebar(true));
  backdrop.addEventListener("click", () => toggleMobileSidebar(false));

  // 5. URL 监听
  window.addEventListener("hashchange", router);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("outbound_study_theme") || "dark";
  setTheme(savedTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("outbound_study_theme", theme);

  const themeBtn = document.getElementById("theme-toggle-btn");
  if (theme === "light") {
    themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i> <span>浅色模式</span>`;
  } else {
    themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i> <span>深色模式</span>`;
  }
}

function toggleMobileSidebar(open) {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");
  
  if (open) {
    sidebar.classList.add("mobile-open");
    backdrop.classList.add("mobile-open");
  } else {
    sidebar.classList.remove("mobile-open");
    backdrop.classList.remove("mobile-open");
  }
}

function markChapterCompleted(chapterId, completed) {
  state.progress[chapterId] = completed;
  saveProgressToLocalStorage();
  
  if (completed) {
    triggerConfetti();
  }
  updateNavbarState();
}

function updateNavbarState() {
  const breadcrumb = document.getElementById("breadcrumb-current-chapter");
  const currentChapter = COURSE_DATA.find(c => c.id === state.currentChapterId);
  
  if (currentChapter) {
    breadcrumb.innerText = currentChapter.title;
  }

  const completeBtn = document.getElementById("chapter-complete-btn");
  const isCompleted = state.progress[state.currentChapterId] === true;

  if (isCompleted) {
    completeBtn.className = "btn-complete-toggle completed";
    completeBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>已学习完</span>`;
  } else {
    completeBtn.className = "btn-complete-toggle";
    completeBtn.innerHTML = `<i class="fa-regular fa-circle-check"></i> <span>标为已学完</span>`;
  }
}

function updateGlobalProgressBar() {
  const totalCount = COURSE_DATA.length; // 应该是 15 左右
  let completedCount = 0;
  
  COURSE_DATA.forEach(c => {
    if (state.progress[c.id] === true) {
      completedCount++;
    }
  });

  const percentage = Math.round((completedCount / totalCount) * 100);
  
  document.getElementById("progress-percent").innerText = percentage + "%";
  document.getElementById("progress-bar").style.width = percentage + "%";
  
  document.getElementById("completed-count").innerText = completedCount;
  document.getElementById("total-count").innerText = totalCount;
}

// --- 剪贴板复制工具 ---
function copyToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

// --- 粒子烟花庆典动效 (Canvas Confetti) ---
function triggerConfetti() {
  if (window.confetti) {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a78bfa', '#14b8a6', '#3b82f6', '#10b981']
    });
  }
}
