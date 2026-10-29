// js/content-data.js

const COURSE_DATA = [
  {
    id: "intro",
    title: "学习目标与三条路线定位",
    icon: "fa-compass",
    subtitle: "找到最适合你的出海路线",
    objective: "从全局理解跨境电商出海的三条核心路径，明确自身的竞争优势，进行科学的角色定位。",
    sections: [
      {
        title: "跨境电商大背景（2026年最新动态）",
        content: `
          <p class="paragraph">跨境电商行业正处于深刻的范式转移中。根据 <strong>Coherent Market Insights</strong> 的预测，出海市场依然是高增长的黄金赛道，但竞争的底层逻辑已经发生了彻底改变：</p>
          <div class="alert-box info-alert">
            <i class="fa-solid fa-circle-info"></i>
            <span><strong>核心转移：</strong> 从早期的<strong>“铺货 + 低价砸流量”</strong>模式，全面转向以<strong>“品牌化、内容化、AI运营、履约效率、合规能力”</strong>为核心的新航海时代。</span>
          </div>
          <p class="paragraph">2026年，社交电商的大爆发、AI购物代理 (AI Shopping Agents) 的初露端倪、各主流平台费用的频繁波动，以及全球物流与地缘关税合规的变化，都在重塑卖家的实操策略。作为具有技术背景的开发者，我们必须以“技术思维”去构建自动化的出海飞轮，而非传统卖家的体力消耗战。</p>
        `
      },
      {
        title: "三条出海主流路线深度对比",
        content: `
          <p class="paragraph">在启动第一步之前，你需要清晰了解跨境电商的三大主战场：</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>路线</th>
                  <th>适合人群</th>
                  <th>优点</th>
                  <th>缺点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-text">Amazon / Walmart / eBay 平台型</td>
                  <td>想快速接触真实订单、有资金基础的卖家</td>
                  <td>流量成熟且庞大、规则明确、转化率高</td>
                  <td>竞争极度激烈、平台费用高、封号风险大、规则复杂度极高</td>
                </tr>
                <tr>
                  <td class="bold-text">Shopify / 独立站 DTC</td>
                  <td>想做品牌、积累长期数字资产的“极客型”卖家</td>
                  <td>用户数据100%沉淀、品牌溢价空间大、无封店扣款之忧</td>
                  <td>没有天然流量，强依赖广告投放、内容营销及页面转化率优化能力</td>
                </tr>
                <tr>
                  <td class="bold-text">TikTok Shop / 内容电商</td>
                  <td>擅长短视频创作、达人资源对接、爆发型爆品卖家</td>
                  <td>起量极快、天然自带裂变流量、非常适合低成本爆品起家</td>
                  <td>生命周期极短、价格竞争激烈、仓储物流运营强度极高</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "技术与 AI 背景学习者的推荐路线",
        content: `
          <div class="card-highlight">
            <h4>💡 黄金组合推荐路线：</h4>
            <blockquote><strong>AI 选品 + 独立站 (Shopify) + TikTok/Meta 内容投放 + 自动化运营工具</strong></blockquote>
            <p>这条路线能够最大限度发挥你在<strong>数据抓取、自动化脚本、AI 生成内容 (AIGC)、以及SaaS软件使用</strong>上的技术优势，避开普通卖家的体力内卷，形成深厚的技术与效率壁垒。</p>
          </div>
        `
      }
    ],
    quiz: [
      {
        question: "对于有技术和AI背景的卖家，以下哪种出海路线最能发挥其差异化优势？",
        options: [
          "在拼多多海外版 Temu 疯狂铺货，跟工厂硬拼底价",
          "AI选品 + 独立站/Shopify + TikTok/Meta内容投放 + 自动化运营工具",
          "纯粹在 Amazon 上买通用贴牌商品，依靠人肉刷评获取流量"
        ],
        answer: 1,
        explanation: "利用AI工具进行精准选品和文案创作，结合独立站沉淀用户数据，能发挥技术人员的自动化和数据分析优势，形成效率红利。"
      },
      {
        question: "根据 2026 年最新趋势，跨境电商市场的竞争核心发生了什么变化？",
        options: [
          "继续进行铺货+低价竞争",
          "全面转向品牌化、内容化、AI运营、高履约效率和合规能力",
          "完全不需要关注物流与关税合规，直接虚拟仓直发即可"
        ],
        answer: 1,
        explanation: "随着平台费率变化和多国税法合规收紧，靠粗暴的铺货和擦边直发已难以生存，品牌、履约稳定、合规及AI高效运营是2026年及以后的核心赛道。"
      }
    ]
  },
  {
    id: "week1",
    title: "第1周：理解跨境电商全局",
    icon: "fa-map",
    subtitle: "建立出海知识地图与底层逻辑",
    objective: "建立完整的出海商业模式与指标体系概念，搞清楚钱是如何通过跨境网络流转的，画出第一张业务流程图。",
    sections: [
      {
        title: "1. 跨境电商商业模式大合集",
        content: `
          <ul>
            <li><strong>B2C (Business to Consumer):</strong> 商家直接向海外零售消费者销售。</li>
            <li><strong>DTC (Direct to Consumer):</strong> 品牌直面消费者。以独立站为载体，砍掉中间商，自主掌控品牌与用户。</li>
            <li><strong>Dropshipping (无货源代发):</strong> 零库存起步模式。客户下单后，你向供应商采购，由供应商直邮给买家。</li>
            <li><strong>全托管 (Full-Managed):</strong> 平台（如 Temu/SHEIN）全面接管定价、运营、物流和售后，卖家只需向国内仓库送货。</li>
            <li><strong>半托管 (Semi-Managed):</strong> 平台负责前台营销和客诉，卖家负责海外仓储、发货及履约（适合有海外仓备货能力的卖家）。</li>
          </ul>
        `
      },
      {
        title: "2. 主流平台生态与运作特点",
        content: `
          <p class="paragraph">在选择主战场前，必须对各个巨头的商业法则熟记于心：</p>
          <div class="flow-list">
            <div class="flow-item"><h5>Amazon：</h5>全球电商巨无霸。流量极高、FBA履约标准极好，但封号严格、跟卖竞争大。</div>
            <div class="flow-item"><h5>Shopify：</h5>建站工具系统。赋能DTC品牌，全球销售体系完备，掌控一切数据。</div>
            <div class="flow-item"><h5>TikTok Shop：</h5>社交兴趣电商。流量爆发力惊人，靠短视频与达人带货，发展神速。</div>
            <div class="flow-item"><h5>Temu / AliExpress / SHEIN：</h5>高效率供应链托管平台。追求极致性价比，主打全/半托管。</div>
            <div class="flow-item"><h5>Etsy：</h5>手工艺品、定制礼品的垂直高毛利天堂，拒绝工业量产。</div>
          </div>
        `
      },
      {
        title: "3. 跨境电商的 8 大核心链路",
        content: `
          <p class="paragraph">每一个出海订单都必须闭环通过这 8 个关卡：</p>
          <blockquote class="steps-blockquote">
            <strong>选品 (Product)</strong> ➜ <strong>供应链采购 (Sourcing)</strong> ➜ <strong>上架建站 (Listing)</strong> ➜ <strong>引流获客 (Traffic)</strong> ➜ <strong>转化付款 (Conversion)</strong> ➜ <strong>物流妥投 (Logistics)</strong> ➜ <strong>售后关怀 (Support)</strong> ➜ <strong>复购留存 (Retention)</strong>
          </blockquote>
        `
      },
      {
        title: "4. 核心运营指标与计算公式",
        content: `
          <p class="paragraph">数据是做所有决策唯一的准绳：</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>指标</th>
                  <th>含义</th>
                  <th>核心计算公式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-text">GMV (商品交易总额)</td>
                  <td>销售总规模，包含未付、退款订单</td>
                  <td>GMV = 订单总数 × 商品售价</td>
                </tr>
                <tr>
                  <td class="bold-text">AOV (平均客单价)</td>
                  <td>每个支付订单的平均消费额</td>
                  <td>AOV = 总销售额 / 总支付订单数</td>
                </tr>
                <tr>
                  <td class="bold-text">CVR (转化率)</td>
                  <td>进站访客中完成支付的比例</td>
                  <td>CVR = 支付订单数 / 网站总访客数 × 100%</td>
                </tr>
                <tr>
                  <td class="bold-text">ROAS (广告支出回报率)</td>
                  <td>衡量广告投产效率的直接指标</td>
                  <td>ROAS = 广告带来的总销售额 / 总广告花费</td>
                </tr>
                <tr>
                  <td class="bold-text">CAC (用户获取成本)</td>
                  <td>获取一个真正付款客户所花的营销费用</td>
                  <td>CAC = 总营销花费 / 新增支付用户数</td>
                </tr>
                <tr>
                  <td class="bold-text">LTV (生命周期价值)</td>
                  <td>一个客户终身能为您带来的净销售额</td>
                  <td>LTV = AOV × 年复购频次 × 平均生命周期年数</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      }
    ],
    taskDeliverable: "画一张属于自己的『跨境电商业务流程图』，搞清楚供应商、你的店铺、广告平台、收款通道以及消费者的流转关系。",
    quiz: [
      {
        question: "哪个指标最适合衡量独立站广告投放效果的直接ROI？",
        options: [
          "CVR (转化率)",
          "ROAS (广告支出回报率)",
          "AOV (客单价)"
        ],
        answer: 1,
        explanation: "ROAS (Return on Ad Spend) = 广告带来的总销售额 / 广告花费，是直接衡量线上广告烧钱效果的核心指标。"
      },
      {
        question: "如果你不想承担前期囤货的资金压力，希望零库存测试市场，应优先选择哪种商业模式？",
        options: [
          "Amazon FBA 模式",
          "Dropshipping (无货源一件代发) 模式",
          "半托管仓储发货模式"
        ],
        answer: 1,
        explanation: "Dropshipping 模式在客户付款前无需进货，由供应商直接代发，能够实现极低资金占用的零库存启动。"
      }
    ]
  },
  {
    id: "week2",
    title: "第2周：市场与选品方法",
    icon: "fa-search",
    subtitle: "学会用数据发掘爆款",
    objective: "掌握评估市场空间的7大选品维度，明确避坑品类，并使用打分模型交互工具挑选出高胜率的初始产品。",
    sections: [
      {
        title: "1. 决定产品成败的 7 大选品维度",
        content: `
          <p class="paragraph">优质的选品必须完美兼顾以下要素：</p>
          <ul>
            <li><strong>真实硬需求：</strong> 解决具体痛点（如“便携”），非伪需求。</li>
            <li><strong>足够搜索量：</strong> 在 Google / Amazon / TikTok 有明确的月度查询基础。</li>
            <li><strong>极强内容传播属性：</strong> 产品有视觉冲击力、Before/After 效果（如解压视频、奇特玩具）。</li>
            <li><strong>充沛利润空间：</strong> 出海零售定价一般为采购价的 <strong>4~8倍</strong> 才能覆盖广告费。</li>
            <li><strong>物流极致友好：</strong> 轻、小、不易碎，重量建议在 500g 以下，节省高昂空运费。</li>
            <li><strong>合规风险低：</strong> 无专利侵权风险、不含液体粉末、不带强电和食品安全问题。</li>
            <li><strong>复购潜力强：</strong> 属于消耗品或可搭配套装购买，提升 LTV。</li>
          </ul>
        `
      },
      {
        title: "2. 建议新手的选品方向 VS 坚决不碰的雷区",
        content: `
          <div class="comparison-grid">
            <div class="comp-box recommend">
              <h5>🟢 建议新手深挖方向：</h5>
              <ul>
                <li>宠物出行与智能小硬件</li>
                <li>家居精致收纳与美化工具</li>
                <li>桌面多功能效率小配件</li>
                <li>轻量级居家健身小器材</li>
                <li>小众兴趣爱好定制化礼品</li>
              </ul>
            </div>
            <div class="comp-box avoid">
              <h5>🔴 坚决避开的死亡雷区：</h5>
              <ul>
                <li><strong>强认证电子产品：</strong> 需要昂贵的 FCC/CE 强认证。</li>
                <li><strong>食品、药品、保健品：</strong> FDA 监管极其严厉，客诉风险极高。</li>
                <li><strong>高退货易碎品：</strong> 玻璃陶瓷等易碎品、超重及服装尺码强退货品。</li>
                <li><strong>侵权IP产品：</strong> 碰迪士尼、漫威、各大知名品牌必被封号和告封收款账号。</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "3. 顶级选品神器与工具清单",
        content: `
          <p class="paragraph">优秀的猎手不凭直觉，只用数据武器：</p>
          <div class="flow-list">
            <div class="flow-item"><strong>Amazon Best Sellers / Movers & Shakers:</strong> 看真正的金钱在往哪个品类堆积。</div>
            <div class="flow-item"><strong>Google Trends:</strong> 判断需求是处于爆发期、稳定期还是衰退期。</div>
            <div class="flow-item"><strong>TikTok Creative Center:</strong> 监控时下爆单的热门短视频和带货达人素材。</div>
            <div class="flow-item"><strong>Meta Ads Library (广告档案库):</strong> 查看竞品正在高频烧广告的常青素材。</div>
            <div class="flow-item"><strong>Similarweb & Ahrefs:</strong> 深度抓取竞品独立站的真实自然流量源。</div>
          </div>
        `
      }
    ],
    taskDeliverable: "找出20个候选产品，并利用下方交互小工具对每个产品进行打分，筛选出最终排名前3的产品作为下一步实验目标。",
    interactiveTool: {
      type: "product_scorer"
    },
    quiz: [
      {
        question: "出海直邮起步阶段，为什么不建议新手选择“玻璃陶瓷等易碎花瓶”或“重达3kg的哑铃”？",
        options: [
          "国际物流运费高昂、易碎导致客诉和退款退货率飙升",
          "外国人不喜欢这两种产品",
          "关税极其高昂"
        ],
        answer: 0,
        explanation: "跨境物流主要按重量和体积计算费用，超重商品运费远超采购价；而易碎品在国际颠簸中破损率极高，退款损耗足以吞没所有利润。"
      },
      {
        question: "以下哪一个工具最适合用来查看竞品竞争对手当前正在投放的在线Facebook广告？",
        options: [
          "Google Trends",
          "AliExpress",
          "Meta Ads Library (广告档案库)"
        ],
        answer: 2,
        explanation: "Meta Ads Library 是 Meta 官方提供的广告公开透明查询库，输入任何竞争对手的 Page 名字，都可以查到其目前投放的所有广告素材。"
      }
    ]
  },
  {
    id: "week3",
    title: "第3周：用户、国家与定位",
    icon: "fa-users",
    subtitle: "做垂直定位，只卖精细人群",
    objective: "学会从消费力、物流、关税等多维度选择第一目标国家，运用场景化定位模型，写出高转化率的用户画像和英文定位语。",
    sections: [
      {
        title: "1. 目标国家选择的四个金字塔梯队",
        content: `
          <p class="paragraph">出海切忌一开始就面向全球推广，必须以核心国家作为跳板：</p>
          <ul>
            <li><strong>第一梯队（美国、加拿大）：</strong> 市场无比庞大、消费力极强、对新事物接受度最高，但竞争最烈，流量成本高。</li>
            <li><strong>第二梯队（英国、德国、法国、澳大利亚）：</strong> 流量费相对温和、购买力强，但受制于高额的增值税 (VAT) 以及复杂的碳税绿点认证。</li>
            <li><strong>第三梯队（新加坡、中东沙特）：</strong> 高客单价新蓝海，但需要应对不同的本土地缘、宗教及支付习惯（如中东货到付款 COD 模式）。</li>
          </ul>
        `
      },
      {
        title: "2. 用户精准画像的 6 个关键维度",
        content: `
          <p class="paragraph">你的产品是卖给谁的？在什么场景下用？必须刻画到毛孔级别：</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>画像维度</th>
                  <th>画像提问</th>
                  <th>示例：智能发热宠物垫</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-text">基本属性</td>
                  <td>年龄、性别、地理位置、收入？</td>
                  <td>28-45岁，美国中产中西部的养狗女性</td>
                </tr>
                <tr>
                  <td class="bold-text">核心痛点</td>
                  <td>他们目前在忍受什么烦恼？</td>
                  <td>冬天寒冷，老龄狗关节炎发作疼痛，无法安睡</td>
                </tr>
                <tr>
                  <td class="bold-text">购买场景</td>
                  <td>在什么特定瞬间会疯狂寻找该产品？</td>
                  <td>暴雪降温来袭时，或者老狗痛苦哼唧时</td>
                </tr>
                <tr>
                  <td class="bold-text">内容偏好</td>
                  <td>他们活跃于什么社交平台？喜欢什么风格？</td>
                  <td>活跃于 TikTok 和 Instagram，爱看温馨治愈的宠物Vlog</td>
                </tr>
                <tr>
                  <td class="bold-text">价格敏感度</td>
                  <td>对价格在意程度？更看重便宜还是价值？</td>
                  <td>中等敏感，为了爱宠健康甘愿支付 40-70 美元</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "3. 情绪与场景差异化定位法",
        content: `
          <p class="paragraph">如何让同一个白牌卖出几倍溢价？这就需要依靠<strong>定位包装 (Positioning)</strong>：</p>
          <div class="flow-list">
            <div class="flow-item"><strong>功能性定位：</strong> 专注解决实际问题。“超轻量发热宠物垫”。</div>
            <div class="flow-item"><strong>情绪/情绪价值定位：</strong> “给爱宠一个冬日母亲般的恒温怀抱”。</div>
            <div class="flow-item"><strong>特定人群场景定位：</strong> “专门为户外露营家庭设计的便携车载宠物保温垫”。</div>
          </div>
        `
      }
    ],
    taskDeliverable: "为您的核心产品设计精准的用户画像，并使用下方生成器制定一句英文定位标语 (Slogan) 作为主页核心价值主张 (H1)。",
    interactiveTool: {
      type: "persona_generator"
    },
    quiz: [
      {
        question: "下列哪种定位句式，最能直接击中“爱去露营的爱犬人士”这一特定细分人群？",
        options: [
          "Simply the best dog bed on the planet.",
          "For dog parents who travel more with less mess.",
          "A cheap soft blanket for your dog."
        ],
        answer: 1,
        explanation: "“For dog parents who travel more with less mess” 包含了核心受众 (dog parents)、特定场景 (travel) 和痛点利益 (less mess)，是一句非常经典的细分场景定位。"
      },
      {
        question: "欧洲第二梯队国家（如德、法）相比于美国，在运营合规上有什么典型痛点？",
        options: [
          "不支持信用卡支付",
          "强制要求缴纳极高的增值税 (VAT)、绿点包装环保回收等严格合规认证",
          "没有电商物流承运商"
        ],
        answer: 1,
        explanation: "欧洲各国具有非常严苛的税务（如IOSS/VAT申报）和环保合规审查（如EPR包装合规、WEEE电子垃圾法案），这是合规化出海必须迈过的门槛。"
      }
    ]
  },
  {
    id: "week4",
    title: "第4周：供应链与成本模型",
    icon: "fa-calculator",
    subtitle: "做一份不亏钱的财务账本",
    objective: "透彻剖析出海产品的9项核心成本要素，掌握平台型与独立站型差异化的定价法则，跑通毛利测算公式。",
    sections: [
      {
        title: "1. 跨境电商的完整成本拼图",
        content: `
          <p class="paragraph">很多新手“看单赚了，年底亏了”，原因就是漏算了隐形成本：</p>
          <ul>
            <li><strong>产品采购成本 (COGS)：</strong> 货品的原始拿货价。</li>
            <li><strong>外包装与贴标费：</strong> 快递箱、防撞泡泡膜、英文售后卡。</li>
            <li><strong>头程国际物流：</strong> 从中国到目的国仓库的空运/海运费。</li>
            <li><strong>尾程派送费：</strong> 目的国本地寄给客户的快递费（如 USPS/DHL）。</li>
            <li><strong>支付手续费：</strong> PayPal/Stripe 划扣的 <strong>2.9% ~ 4.4% + $0.3</strong> 交易手续费。</li>
            <li><strong>推广获客成本 (CAC)：</strong> 核心变量。把货卖出去所烧的单笔广告费。</li>
            <li><strong>坏账与退换货损耗：</strong> 国际退货无法退回国内，基本做全额退款销毁，损耗必须摊入日常成本。</li>
          </ul>
        `
      },
      {
        title: "2. 经典毛利定价公式",
        content: `
          <div class="card-highlight">
            <h4 style="margin-top:0;">💰 科学出海定价公式：</h4>
            <blockquote><strong>售价 = 采购成本 + 物流费用 + 支付手续费 + 推广CAC + 目标退款退货准备金 + 目标净利润</strong></blockquote>
            <p class="paragraph">在跨境电商中，<strong>毛利率</strong> 是一切生存的基础：</p>
            <ul>
              <li><strong>平台精细化精品 (Amazon等)：</strong> 建议售价毛利率至少 <strong>≥ 30%</strong>。</li>
              <li><strong>DTC 品牌独立站 (Shopify等)：</strong> 建议售价毛利率至少 <strong>≥ 50%</strong>。</li>
              <li><strong>单品爆款引流产品 (广告驱动)：</strong> 建议售价毛利率至少 <strong>≥ 60%</strong>，因为需要承受波动的广告竞价。</li>
            </ul>
          </div>
        `
      },
      {
        title: "3. 优质供应链渠道对比",
        content: `
          <div class="comparison-grid">
            <div class="comp-box recommend">
              <h5>🏢 小微起步拿货渠道：</h5>
              <ul>
                <li><strong>1688：</strong> 中国货源工厂之王，支持一件代发。</li>
                <li><strong>阿里巴巴国际站：</strong> 寻找支持轻定制的优质工厂。</li>
                <li><strong>义乌购/华强北：</strong> 实体批发源头，现场拿样。</li>
              </ul>
            </div>
            <div class="comp-box avoid" style="border-left-color: hsl(200, 70%, 50%);">
              <h5>🌎 海外仓配履约：</h5>
              <ul>
                <li><strong>拼多多半托管源：</strong> 采购国内工厂大货预备入海外仓。</li>
                <li><strong>第三方海外仓 (3PL)：</strong> 租用海外当地仓库，实现就近发货。</li>
              </ul>
            </div>
          </div>
        `
      }
    ],
    taskDeliverable: "利用下方的交互式利润测算工具，至少录入 3-5 款候选产品的报价，测算出能够保本的临界广告单单转化成本 (Breakeven CPA) 与健康毛利售价。",
    interactiveTool: {
      type: "profit_calculator"
    },
    quiz: [
      {
        question: "为什么广告驱动的独立站产品建议毛利率至少要达到 60% 以上？",
        options: [
          "因为独立站运费特别贵",
          "为了留出极其充裕的预算去覆盖波动的广告获客成本 (CAC) 以及支付通道划扣手续费",
          "因为独立站建站月租费高"
        ],
        answer: 1,
        explanation: "独立站没有天然流量，需要用广告引流。流量成本（广告费）在客单价中常占 30%-40%。若没有 60% 以上的毛利，一旦广告费稍有波动，全盘就会直接转入亏损。"
      },
      {
        question: "出海交易中，Stripe / PayPal 等收款工具的每笔交易手续费大约在什么区间？",
        options: [
          "0.5% 左右",
          "15% 佣金",
          "3% - 4.5% 左右 + 固定单笔 $0.3 费用"
        ],
        answer: 2,
        explanation: "国际信用卡收单服务商（Stripe, PayPal, Shopify Payments）每笔交易通常收取 2.9% - 4.4% 不等的跨境刷卡手续费，并加上一笔固定笔数处理费（如 $0.3）。"
      }
    ]
  },
  {
    id: "week5",
    title: "第5周：平台电商：Amazon / Etsy / eBay",
    icon: "fa-store",
    subtitle: "掌握货架电商的流量与规则体系",
    objective: "理解货架电商的平台搜索排名算法、FBA 物流计费结构、Etsy 独特的手艺人运营机制，并学会拆解竞品 Listing。",
    sections: [
      {
        title: "1. 货架平台霸主：Amazon 运营底层逻辑",
        content: `
          <p class="paragraph">在亚马逊上做生意，就是做<strong>“精准关键词流量的捕手”</strong>：</p>
          <ul>
            <li><strong>FBA (Fulfillment by Amazon)：</strong> 亚马逊的灵魂。卖家把货批量海运备到亚马逊仓库，平台提供极速物流与客服。有 FBA 才有 Buy Box (购物车) 的最高权重。</li>
            <li><strong>Listing 五要素：</strong> 决定转化率的阵地。包括标题 (Title)、五点描述 (Bullet Points)、主图/A+详情图、后台搜索词 (Search Terms) 以及客户评价 (Reviews)。</li>
            <li><strong>排名算法核心：</strong> 销量速度 (Sales Velocity) + 关键词转化率 (CVR) + 稳定库存。</li>
          </ul>
        `
      },
      {
        title: "2. 2026 最新亚马逊平台费用变迁",
        content: `
          <div class="alert-box info-alert">
            <i class="fa-solid fa-circle-info"></i>
            <span><strong>最新动态：</strong> 2026年，亚马逊在欧洲与北美多次微调卖家资费。例如，在服装服饰品类下调了部分销售佣金，并针对轻小件下调了 FBA 配送费，以应对 Temu/SHEIN 的竞争。卖家必须动态查看 Seller Central 后台的实时资费卡，拒绝死记硬背陈旧教程。</span>
          </div>
        `
      },
      {
        title: "3. Etsy 差异化高毛利蓝海",
        content: `
          <p class="paragraph">如果你不想在亚马逊上拼红海白牌，Etsy 是极其精美的替代方案：</p>
          <blockquote><strong>Etsy 招牌属性：</strong> 纯原创手工艺、古董、数字定制海报等。避开工业化大厂批量生产，强调设计师温度，可卖出超高溢价。</blockquote>
        `
      }
    ],
    taskDeliverable: "找到你的 3 个亚马逊竞争对手 Listing，通过下方小工具拆解并记录他们的核心卖点、价格与差评痛点，完成竞品拆解档案。",
    interactiveTool: {
      type: "listing_analyzer"
    },
    quiz: [
      {
        question: "在亚马逊生态中，为什么建议卖家一定要发 FBA (亚马逊配送) 而非 FBM (自发货)？",
        options: [
          "自发货是违法行为",
          "FBA 有天然的黄金购物车 (Buy Box) 流量倾斜，能极大提升排名转化率及履约速度",
          "FBA 是完全免费的"
        ],
        answer: 1,
        explanation: "亚马逊会优先给使用其官方物流 (FBA) 履约的 Listing 配送 Prime 徽章，并在购物车抢夺、关键词搜索排名中给予核心加权。"
      },
      {
        question: "Etsy 平台最鲜明的定位和对卖家的核心政策要求是什么？",
        options: [
          "必须是纯工厂批量出货的低价工业品",
          "必须是手工艺品、原创设计、个性化定制或者老旧古董产品",
          "只允许销售强认证大型电子家电"
        ],
        answer: 1,
        explanation: "Etsy 定位为一个独特的全球手艺人集市，严禁销售普通工厂批量工业化产品。原创性、手作温度、定制化是其高客单价的核心源泉。"
      }
    ]
  },
  {
    id: "week6",
    title: "第6周：独立站 Shopify / DTC",
    icon: "fa-laptop",
    subtitle: "从零构建高转化率品牌独立站",
    objective: "理清独立站的建站闭环，掌握高转化率详情页 (Landing Page) 的首屏结构设计以及核心基础设施配置。",
    sections: [
      {
        title: "1. 独立站的核心灵魂：Shopify 生态",
        content: `
          <p class="paragraph">对于出海品牌，Shopify 是无可替代的数字总部：</p>
          <ul>
            <li><strong>高稳定性：</strong> 能承受全球多地极速访问，自带极简结账流程。</li>
            <li><strong>2026年全球化基建升级：</strong> Shopify 近年大力推出了国际化多货币本地税率、跨境一站式配置，支持全球买家以本地最信赖的方式支付（如欧洲的 Klarna 分期，美国的 Apple Pay）。</li>
          </ul>
        `
      },
      {
        title: "2. 独立站高转化率详情页的「万能黄金结构」",
        content: `
          <p class="paragraph">用户在独立站的跳出率极高。一个打单转化率在 3% 以上的产品详情页，必须包含以下积木结构：</p>
          <div class="flow-list">
            <div class="flow-item"><strong>1. 震撼首屏 (Hero Block)：</strong> 高清实拍图/精美GIF + 一句加粗的细分场景定位语 (H1) + 醒目星级评价评分 + 高对比度加购按钮 (CTA)。</div>
            <div class="flow-item"><strong>2. 痛点深度唤醒：</strong> 痛点对比图。向用户提问：“你是否正在忍受这个煎熬？”。</div>
            <div class="flow-item"><strong>3. 产品多维演示：</strong> 高清 GIF 展现产品在现实中如何解决上述痛点。</div>
            <div class="flow-item"><strong>4. 信任与权威背书：</strong> 收集真实的带图买家秀评价 (用 Judge.me 等导入) + 各类认证证书。</div>
            <div class="flow-item"><strong>5. 无忧安全保障：</strong> 醒目标注“30天无理由退换货”+“安全支付盾牌”，彻底消除防范心。</div>
          </div>
        `
      },
      {
        title: "3. 独立站核心装机应用 (App) 推荐",
        content: `
          <ul>
            <li><strong>Klaviyo / Omnisend:</strong> 邮件营销 (EDM) 霸主，专门负责挽单召回。</li>
            <li><strong>Judge.me:</strong> 导入美观且带图的评价，建立社交认同。</li>
            <li><strong>PageFly:</strong> 拖拽式网页构建器，设计极其自由的个性化着陆页。</li>
            <li><strong>Google Analytics 4 & Pixel:</strong> 精准捕捉用户点击及转化足迹。</li>
          </ul>
        `
      }
    ],
    taskDeliverable: "使用 Shopify 搭建一个您的 Demo 店铺，完成域名绑定与货币配置，并完成至少一个包含“首屏、卖点、评价、信任保障”的完整商品详情页。",
    quiz: [
      {
        question: "独立站详情页的“CTA”按钮指的是什么？",
        options: [
          "公司联系地址",
          "呼吁用户立即采取行动的加购/结账按钮 (Call to Action)",
          "后台广告代码"
        ],
        answer: 1,
        explanation: "CTA (Call to Action) 指的是“加购物车”、“立即购买”等按钮。CTA 的颜色设计、文案、所处位置对用户付款决策有极强的引导性。"
      },
      {
        question: "独立站相比平台最大的优势在于什么？",
        options: [
          "平台不要月租费",
          "完全自主掌控用户数据、无惧恶意降价竞争、拥有长线品牌溢价资产",
          "不需要自己寻找流量，建好站就能自动爆单"
        ],
        answer: 1,
        explanation: "独立站没有平台中同行的直接比价，且能100%沉淀买家的邮箱、电话等私域资产，为后期的邮件再营销 (EDM) 与品牌沉淀提供最高自由度。"
      }
    ]
  },
  {
    id: "week7",
    title: "第7周：内容电商与TikTok Shop",
    icon: "fa-video",
    subtitle: "用内容撬动免费与裂变流量",
    objective: "掌握 TikTok 爆款视频的前3秒钩子法则，学习高转化短视频脚本的黄金六段式结构，掌握 TikTok Shop 的达人建联分销法则。",
    sections: [
      {
        title: "1. 2026年出海关键命脉：社交电商",
        content: `
          <p class="paragraph">社交电商不仅是流量的入口，更是改变全球消费者发现商品的主要阵地：</p>
          <div class="alert-box info-alert" style="background-color: hsl(150, 40%, 12%); border-left-color: hsl(150, 60%, 50%);">
            <i class="fa-solid fa-square-poll-vertical"></i>
            <span><strong>行业趋势 (Credilinq)：</strong> TikTok, Reels, YouTube Shorts 等短视频加达人分销带货，已经成为2026年出海爆品增长速度最快、起盘资金门槛最低的流量驱动器。</span>
          </div>
        `
      },
      {
        title: "2. TikTok 爆款短视频脚本「黄金六段式」结构",
        content: `
          <p class="paragraph">一条能在 TikTok 上带货十万单的短视频，绝不是随意拍摄，必须严格遵循以下精细脚本结构：</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>步骤</th>
                  <th>核心任务</th>
                  <th>秒数</th>
                  <th>实操手段</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-text">1. 前 3 秒 Hook (钩子)</td>
                  <td>阻止用户滑走</td>
                  <td>1-3s</td>
                  <td>发出惊悚疑问、巨大视觉反差（如“不要买这个，除非你...”）</td>
                </tr>
                <tr>
                  <td class="bold-text">2. 痛点场景唤醒</td>
                  <td>激发共情</td>
                  <td>4-8s</td>
                  <td>展现生活中的尴尬瞬间或麻烦场景</td>
                </tr>
                <tr>
                  <td class="bold-text">3. 产品横空出世</td>
                  <td>解救主角</td>
                  <td>9-12s</td>
                  <td>产品高颜值出场，一键解决刚才的痛点</td>
                </tr>
                <tr>
                  <td class="bold-text">4. 丝滑使用过程</td>
                  <td>建立信心</td>
                  <td>13-20s</td>
                  <td>微距特写、治愈的ASMR使用声效</td>
                </tr>
                <tr>
                  <td class="bold-text">5. 前后强反差结果</td>
                  <td>形成震撼</td>
                  <td>21-25s</td>
                  <td>Before 与 After 极其强烈的对比画面</td>
                </tr>
                <tr>
                  <td class="bold-text">6. 强 CTA 引导</td>
                  <td>呼吁购买</td>
                  <td>26-30s</td>
                  <td>限时折扣、点击左下角/Bio链接下单</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "3. TikTok Shop 达人联盟 (Affiliate) 裂变法",
        content: `
          <p class="paragraph">自己拍视频精力有限，如何让成百上千的海外小网红帮你疯狂发视频卖货？</p>
          <ul>
            <li><strong>第一步：商品上架 TikTok Shop，设置佣金。</strong> 通常设置 <strong>15% - 25%</strong> 佣金比例吸引达人。</li>
            <li><strong>第二步：精细化建联。</strong> 用自动化脚本或后台群发，寻找垂直类目的小达人（1万-5万粉丝），免费赠送样品，要求其出一期带货视频。</li>
            <li><strong>第三步：爆款视频投流放大。</strong> 筛选出转化率极高的达人视频，利用 <strong>Spark Ads</strong> 广告加热，放大销量。</li>
          </ul>
        `
      }
    ],
    taskDeliverable: "选择一款你的主推产品，利用下方的脚本生成工具一键拟写出 1 条 TikTok 黄金带货视频脚本，并尝试用手机进行模拟拍摄拍摄。",
    interactiveTool: {
      type: "tiktok_script"
    },
    quiz: [
      {
        question: "TikTok 短视频带货中，前 3 秒的最核心任务是什么？",
        options: [
          "详细介绍公司发展历史",
          "抛出视觉或言语“钩子” (Hook)，留住注意力，阻止用户的手指往下滑走",
          "展示完整的售后退换货说明"
        ],
        answer: 1,
        explanation: "TikTok 是极其快节奏的短视频流，前3秒若不能用视觉张力、音效或痛点结论抓住眼球，用户就会无情滑走。这3秒决定了整条视频的完播率与曝光权重。"
      },
      {
        question: "什么是 TikTok Shop 达人联盟 (Affiliate) 玩法？",
        options: [
          "花几十万巨资请大明星做全球代言人",
          "在后台设置分销比例，给成百上千的中小网红寄样，让他们制作带货视频赚取佣金，实现以低门槛撬动大量免费流量的裂变",
          "自己掏钱买粉丝"
        ],
        answer: 1,
        explanation: "达人联盟是社交电商的经典利器。通过给予达人销售佣金提成，小品牌可用样品成本换来数万甚至数百万的精准曝光和真实带货转化。"
      }
    ]
  },
  {
    id: "week8",
    title: "第8周：广告投放入门",
    icon: "fa-ad",
    subtitle: "用科学的数据漏斗测试与放大产品",
    objective: "掌握主流付费渠道特点，熟记CPM、CTR、ROAS等底层广告指标，运用科学的小预算广告测试模型，在3天内低成本验证一个品有没有希望。",
    sections: [
      {
        title: "1. 两大主流广告出海渠道深度剖析",
        content: `
          <div class="comparison-grid">
            <div class="comp-box recommend">
              <h5>🔵 Meta Ads (Facebook & Instagram)：</h5>
              <ul>
                <li><strong>流量特征：</strong> 精准的兴趣主动推荐算法。</li>
                <li><strong>最适合品类：</strong> 强视觉感、高情绪溢价、新奇特家居、定制礼品。</li>
                <li><strong>核心关键：</strong> 素材就是定向，素材决定成败。</li>
              </ul>
            </div>
            <div class="comp-box avoid" style="border-left-color: hsl(330, 80%, 50%);">
              <h5>🟢 TikTok Ads：</h5>
              <ul>
                <li><strong>流量特征：</strong> 极其年轻、容易冲动性消费。</li>
                <li><strong>最适合品类：</strong> $15-$30 的低客单价奇趣爆款、美妆个护。</li>
                <li><strong>核心关键：</strong> 素材消耗速度极快，需要源源不断更新。</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. 必须烂熟于心的广告数学指标",
        content: `
          <ul>
            <li><strong>CPM (千次展示成本):</strong> 广告展示给一千个人看你付给平台的钱。衡量流量贵贱。</li>
            <li><strong>CPC (单次点击成本):</strong> 访客点一下广告所花的钱。<code>CPC = 广告总花费 / 点击数</code>。</li>
            <li><strong>CTR (点击率):</strong> 看到广告的人里有多少点击。<code>CTR = 点击数 / 曝光数 × 100%</code>。优秀线通常 <strong>≥ 2%</strong>。</li>
            <li><strong>CPA (单次转化成本):</strong> 获得一个付款订单所花的广告费。</li>
            <li><strong>ROAS (广告投产比):</strong> <code>ROAS = 销售总额 / 广告花费</code>。如果 ROAS 超过你的保本线，代表你在赚钱！</li>
          </ul>
        `
      },
      {
        title: "3. 科学的「小预算广告测试法」",
        content: `
          <p class="paragraph">绝不盲目烧钱。用最严谨的小预算沙盒法则，快速找出有潜力的爆款：</p>
          <div class="card-highlight">
            <h4 style="margin-top:0;">📊 50美金小预算快速测试法：</h4>
            <ol>
              <li><strong>低成本日预算：</strong> 针对单个产品，每天只设 <strong>$20 ~ $50</strong> 广告预算。</li>
              <li><strong>多素材赛马：</strong> 准备 3 条完全不同痛点角度/Hook 的视频素材放在同一个广告组里。</li>
              <li><strong>限时观察：</strong> 持续跑满 <strong>3天 (72小时)</strong> 积累足够数据。</li>
              <li><strong>数据漏斗研判：</strong>
                <ul>
                  <li>若 <strong>CTR < 1%</strong>，说明素材差，直接关停。</li>
                  <li>若 <strong>有加购无支付</strong>，说明详情页转化或运费/信任有问题，优化页面。</li>
                  <li>若 <strong>ROAS ≥ 保本 ROAS</strong>，果断加预算，开始翻倍放大流量！</li>
                </ul>
              </li>
            </ol>
          </div>
        `
      }
    ],
    taskDeliverable: "使用下方的小预算测试计算器，输入你的产品成本与预期价格，生成一份完整的广告测试预警方案与停投标准。",
    interactiveTool: {
      type: "ad_budget_tester"
    },
    quiz: [
      {
        question: "如果一个独立站广告在 Facebook 上跑了3天，千次展示成本 (CPM) 正常，但点击率 (CTR) 只有 0.4%，你该怎么做？",
        options: [
          "认为这个产品一定没人买，直接换品",
          "说明广告素材的首屏前3s钩子或封面文案完全没有吸引力，必须重新制作广告视频素材进行测试",
          "强行加大 10 倍广告预算再测试 1 周"
        ],
        answer: 1,
        explanation: "CTR (点击率) 极低说明人们在信息流中看到你的广告却没有点击欲望。这说明视频前3秒、文案或主图卖点极差，并不是产品本身没人买，而是广告素材没做好。"
      },
      {
        question: "什么是保本 ROAS (Breakeven ROAS)？",
        options: [
          "你开始发大财时的那个 ROAS 数值",
          "当你的净利润为 0 时的广告支出回报率临界点，ROAS 必须大于此值广告才开始真正盈利",
          "平台的广告费打折活动"
        ],
        answer: 1,
        explanation: "保本 ROAS 是由公式 <code>1 / 毛利率</code> 算出的临界点。例如产品毛利率为 50%，则保本 ROAS = 1/0.5 = 2.0。广告投放中 ROAS 高于 2.0 才能确保每单不亏损。"
      }
    ]
  },
  {
    id: "week9",
    title: "第9周：物流、支付与履约",
    icon: "fa-truck",
    subtitle: "搞定跨境出海的「水下基建」",
    objective: "搞清楚国内直发与海外仓等主流物理通道的时效成本差异，搭建高安全性的多币种支付结账网络，提供高妥投率的履约服务。",
    sections: [
      {
        title: "1. 三大跨境物流派送流派对比",
        content: `
          <p class="paragraph">根据产品的体积和客单价，选择最匹配的国际快递方案：</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>物流模式</th>
                  <th>运输路径</th>
                  <th>时效区级</th>
                  <th>适合类型</th>
                  <th>优缺点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-text">中国邮政小包 / 直发虚拟仓</td>
                  <td>中国仓库发货 ➜ 空运 ➜ 目的国派送</td>
                  <td>7 - 14 天</td>
                  <td>轻小件、Dropshipping、低货值</td>
                  <td><strong>优：</strong>零库存积压，资金安全。 <strong>缺：</strong>时效较慢，大促期易延误。</td>
                </tr>
                <tr>
                  <td class="bold-text">第三方海外仓 (3PL)</td>
                  <td>提前海运备货至海外仓 ➜ 本地极速快递派送</td>
                  <td>2 - 5 天</td>
                  <td>中大件、半托管大货、爆款复购品</td>
                  <td><strong>优：</strong>极速送达，用户体验极佳。 <strong>缺：</strong>仓储费高，有压货死库存风险。</td>
                </tr>
                <tr>
                  <td class="bold-text">Amazon FBA</td>
                  <td>海/空运入亚马逊仓库 ➜ Amazon Prime 极速配送</td>
                  <td>1 - 2 天</td>
                  <td>亚马逊精品卖家</td>
                  <td><strong>优：</strong>获得最高排名加权，体验无敌。 <strong>缺：</strong>费用名目多，库容受平台限制。</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "2. 2026 履约新态势：稳定性为王",
        content: `
          <p class="paragraph">在2026年，跨境物流不仅是把货运出去，更是一场信息战与精细化运营：</p>
          <div class="alert-box info-alert" style="background-color: hsl(200, 47%, 10%);">
            <i class="fa-solid fa-circle-info"></i>
            <span><strong>行业趋势：</strong> 物流链条的妥投率、末端派送信息透明度（追踪链路）以及退换货在本地的逆向履约处理，已成为影响回购率和结账跳出率的核心。</span>
          </div>
        `
      },
      {
        title: "3. 独立站的多币种支付收款拼图",
        content: `
          <p class="paragraph">给海外买家提供他们最熟悉、最放心的结账网关：</p>
          <ul>
            <li><strong>PayPal：</strong> 全球第一大钱包，欧美老牌主流，争议期长，对买家保护极其严格。</li>
            <li><strong>Stripe / Shopify Payments：</strong> 强悍的国际信用卡收单网络，支持主流的 Visa、Mastercard、AMEX 极速刷卡。</li>
            <li><strong>BNPL (先买后付):</strong> 如 <strong>Klarna, Afterpay</strong>，2026 年在欧洲和澳洲极大刺激了高客单价商品的转化率。</li>
          </ul>
        `
      }
    ],
    taskDeliverable: "利用下方的物理成本时效对比器，录入你的货品重量，对比不同物理渠道的时效与预估支出，制定第一版履约策略。",
    interactiveTool: {
      type: "shipping_simulator"
    },
    quiz: [
      {
        question: "如果你目前主要通过国内一件代发直邮测试新奇特饰品，重量仅 80g，应选择哪种高性价比物流？",
        options: [
          "空运货机直接走海外仓发货",
          "海运集装箱慢慢运到洛杉矶",
          "国内直发空运挂号专线小包（如邮政特快或云途专线）"
        ],
        answer: 2,
        explanation: "挂号专线小包非常适合 500g 以下的轻小高利润产品，挂号能提供全程追踪，时效通常 7-12 天，成本非常低廉，适合测试期。"
      },
      {
        question: "什么是逆向物流 (Reverse Logistics)？",
        options: [
          "飞机反方向飞的物理路线",
          "退换货流程：消费者把不满意的商品寄回海外本地仓储中心或销毁站的履约通路",
          "把货物私自从国外偷运回国内"
        ],
        answer: 1,
        explanation: "逆向物流指解决售后退换货的通路。因为跨境包裹退回国内邮费远超货值，优秀的卖家会配合海外仓，在本地做重新上架、贴标转售或统一低成本销毁处理。"
      }
    ]
  },
  {
    id: "week10",
    title: "第10周：合规、税务与风险控制",
    icon: "fa-shield-halved",
    subtitle: "做合法合规的长线生意",
    objective: "全面理清出口商品在知识产权（商标/专利/版权）、各主要市场进口环保认证、当地销售增值税（VAT）以及资金风控合规的红线底线。",
    sections: [
      {
        title: "1. 知识产权出海三道高压红线",
        content: `
          <p class="paragraph">在海外，知识产权保护受到最高规格监管，一旦越界必死无疑：</p>
          <ul>
            <li><strong>商标 (Trademark) 侵权：</strong> 严禁在你的 Listing 标题、五点或独立站文案中出现他人品牌词（如“Compatible with Apple Watch”中如果直接写“Apple Watch Charger”就会被系统检测侵权封店）。</li>
            <li><strong>专利 (Patent) 侵权：</strong> 特别是外观专利。选品时必须在 Google Patent 检索，查看类似款是否已被大公司申请外观排他保护。</li>
            <li><strong>版权 (Copyright) 侵权：</strong> 严禁直接盗取亚马逊竞品图片、品牌宣传片，哪怕背景音乐使用侵权都会被直接下架广告。</li>
          </ul>
        `
      },
      {
        title: "2. 欧美核心物理合规认证",
        content: `
          <p class="paragraph">产品如果缺少以下强制认证，一旦海关查扣或出事故，将面临巨额罚单：</p>
          <div class="flow-list">
            <div class="flow-item"><strong>CE (欧洲统一) / FCC (美国联邦通讯)：</strong> 电子产品、带电带蓝牙产品进入对应市场强制要求的安全电磁认证。</div>
            <div class="flow-item"><strong>FDA (美国食品药品监管)：</strong> 凡是直接接触人体黏膜、皮肤、食品容器以及儿童奶嘴的产品（包括美容仪）都必须走FDA注册登记。</div>
            <div class="flow-item"><strong>RoHS & REACH (欧盟化学环保)：</strong> 约束商品原材料中有毒有害化学物质含量的环境友好认证。</div>
          </div>
        `
      },
      {
        title: "3. 跨境税务 (VAT / IOSS / Sales Tax)",
        content: `
          <p class="paragraph">2026年，跨境税务合规漏洞已被全球政府合围死堵：</p>
          <ul>
            <li><strong>欧盟 VAT 与 IOSS：</strong> 销往欧洲的每一笔小于 150 欧元的包裹，都必须在 IOSS 注册后在线代扣 20% 左右的消费增值税，否则过海关必被扣货或向买家加征罚款。</li>
            <li><strong>美国销售税 (Sales Tax)：</strong> 遵循 Marketplace Facilitator 法案，亚马逊等平台会自动计算代扣；但如果是独立站，你需要借助 Shopify Tax 自动配置各州税起征点，合规申报。</li>
          </ul>
        `
      }
    ],
    taskDeliverable: "为你的拟定选品，完成一份“出海合规自查排雷清单”，逐一对应查询：商标保护词、所需安全认证、目标国家税负成本。",
    quiz: [
      {
        question: "如果要在美国站销售一款带蓝牙连接的智能电子宠物猫玩具，你需要强制办理哪两项合规要求？",
        options: [
          "完全不需要，直接用无字白盒快递过去",
          "FCC认证 (带无线蓝牙设备) 与 EPR包装回收法案登记",
          "欧洲CE认证与IOSS申报"
        ],
        answer: 1,
        explanation: "美国对无线通信与电磁干扰设备有强监管，带蓝牙/WiFi设备必须通过 FCC (Federal Communications Commission) 认证；同时随着环保法规收紧，EPR包装登记也成为了出海标配。"
      },
      {
        question: "在拟写独立站商品详情页的图片和文案时，以下哪项行为是完全安全的？",
        options: [
          "直接去亚马逊竞品店里下载原图，用拼图软件去水印后当成自己店里的图片",
          "用 AI 工具或自己购买样品拍摄高清原创图，并用 LLM 辅助撰写原创描述文案",
          "在 YouTube 截取小网红的开箱视频，做成 GIF 直接放详情页展示"
        ],
        answer: 1,
        explanation: "盗图和截取他人视频属于严重的版权侵权，随时会收到 DMCA 下架通知或被 Stripe 冻结资金通道。只有原创图片、原创文案或有授权的网红视频才是100%安全长线的。"
      }
    ]
  },
  {
    id: "week11",
    title: "第11周：数据分析与复盘",
    icon: "fa-chart-line",
    subtitle: "做数据驱动的决策捕手",
    objective: "理解出海全链路转化漏斗（曝光-点击-结账-支付），学会通过各层漏斗异常指标动态诊断业务瓶颈并执行快速调整预案。",
    sections: [
      {
        title: "1. 跨境电商的完整数字漏斗",
        content: `
          <p class="paragraph">用户在你的网站上每推进一步，就是一层漏斗的筛选。我们需要精细监控每一层的损耗：</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>漏斗层级</th>
                  <th>常规优秀数值</th>
                  <th>若数值极低：说明哪里坏了？</th>
                  <th>优化拯救动作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-text">广告点击率 (CTR)</td>
                  <td><strong>≥ 2.0%</strong></td>
                  <td>广告视频开头不够抓人、主图卖点模糊、受众偏离</td>
                  <td>更换视频前3秒Hook、更换主图、重新做受众画像定位</td>
                </tr>
                <tr>
                  <td class="bold-text">加购物车率 (ATC)</td>
                  <td><strong>≥ 6.0% ~ 8.0%</strong></td>
                  <td>详情页加载巨慢、首屏价值定位不清、图文没有说服力、缺少评价</td>
                  <td>压缩高清图提升网页打开速度、重新润色H1主图、用Judge.me速导评价</td>
                </tr>
                <tr>
                  <td class="bold-text">发起结账率 (IC)</td>
                  <td><strong>≥ 50% (加购者中)</strong></td>
                  <td>产品售价偏高、突然冒出高额运费、缺少信赖感背书</td>
                  <td>将运费直接打包进售价实现“Free Shipping”、增加安全结账网关盾牌</td>
                </tr>
                <tr>
                  <td class="bold-text">支付成功率 (PUR)</td>
                  <td><strong>≥ 60% ~ 70% (发起结账中)</strong></td>
                  <td>支付通道损坏、拒付信用卡率高、缺少本地化支付手段</td>
                  <td>检查Stripe/PayPal状态、开启 Klarna / Apple Pay 等便捷付款渠道</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "2. 漏斗指标异常的「诊断金三角」",
        content: `
          <div class="card-highlight">
            <h4 style="margin-top:0;">🔍 诊断金三角法则：</h4>
            <blockquote><strong>广告数据不行 ➜ 治标（改素材）<br>进站后加购不行 ➜ 治本（优化着陆页）<br>结账到支付不行 ➜ 治根（改定价与运费策略）</strong></blockquote>
          </div>
        `
      }
    ],
    taskDeliverable: "利用下方的可交互式漏斗数据诊断模拟器，自由拖动你测试出的数字，系统会自动帮你诊断哪一步出了故障并给出一键改进方案。",
    interactiveTool: {
      type: "funnel_simulator"
    },
    quiz: [
      {
        question: "如果你的独立站点击率 (CTR) 高达 3.5%，但用户进站后加购率 (ATC) 只有 0.8%，主要说明出了什么问题？",
        options: [
          "说明广告视频做得不够好",
          "说明产品没有需求",
          "说明着陆页（详情页）的说服力、打开速度、图文视觉或价格定位极其糟糕，没能留住点击进来的精准访客"
        ],
        answer: 2,
        explanation: "CTR高说明人们点进来了，广告很好地完成了带流量的任务。但加购率极低说明进站后访客感觉被欺骗或者详情页极其简陋、缺乏评价和信任背书，因此优化核心在网站落地页本身。"
      },
      {
        question: "为了解决独立站“发起结账后，却在添加信用卡那一步流失了 70% 访客”的痛点，以下哪种方案最有效？",
        options: [
          "继续更换广告视频素材",
          "在购物车显示“Stripe Verified Safe Checkout”安全认证印章，并添加 Visa / Apple Pay 等海外买家最信赖的本地快捷结算通道",
          "直接把商品价格降低 80%"
        ],
        answer: 1,
        explanation: "用户在输入信用卡界面流失，通常是出于对资金安全的防备或结账繁琐。增加快捷本地支付方式（一键免密）和国际知名安全认证图标，能直接提升支付终极转化率。"
      }
    ]
  },
  {
    id: "week12",
    title: "第12周：实战项目：MVP方案验证",
    icon: "fa-rocket",
    subtitle: "跑通属于你的第一份跨境MVP闭环",
    objective: "整合前11周所学的全部底层知识，亲自整理输出一份能够被拉到现实中直接落地的《跨境电商出海MVP方案》，并一键导出。",
    sections: [
      {
        title: "1. 什么是跨境出海的 MVP 闭环？",
        content: `
          <p class="paragraph"><strong>MVP (Minimum Viable Product，最小可行性产品)：</strong> 用最低的资金与时间成本，把产品抛入国际真实市场中去经受实战检验。对于有技术背景的你：</p>
          <div class="flow-list">
            <div class="flow-item"><strong>不要盲目投资：</strong> 不要一开始就找工厂备货几千件，也不要花半年去写个商城系统。</div>
            <div class="flow-item"><strong>快速启动方案：</strong> 选定 1 款轻小高利润产品，搭 1 页 Shopify 着陆页，用 AI 拟好短视频脚本和 Meta 广告测试计划，准备 3000 元广告费，在 1 周内直接上线测试。</div>
            <div class="flow-item"><strong>数据最终裁判：</strong> 跑完 3 天广告，根据真实的漏斗 ROAS 决定这个品是继续发力爆单、修改页面，还是果断放弃换下一个品。</div>
          </div>
        `
      },
      {
        title: "2. 《跨境电商出海MVP方案》的骨架结构",
        content: `
          <p class="paragraph">一份合格的出海决策人方案，应该由这几大板块咬合而成：</p>
          <blockquote>
            <strong>1. 产品与国家：</strong> 精准的目标国家与用户画像。<br>
            <strong>2. 核心价值主张：</strong> 痛点描述与英文场景定位标语。<br>
            <strong>3. 定价与成本表：</strong> 采购、国际国内物流、Breakeven CPA 测算。<br>
            <strong>4. 推广与测试：</strong> TikTok 脚本创意、3天日预算与起投停投 ROAS 阈值。<br>
            <strong>5. 物流与合规：</strong> 直发时效方案、所需基础环保及安全认证排查清单。
          </blockquote>
        `
      }
    ],
    taskDeliverable: "利用下方的一键 MVP 方案生成器，将你在前几个星期里通过交互工具测算并拟定出的各项决策（产品名、受众、定价、广告预算等）融为一体，生成一份专业的出海MVP企划书，并支持一键拷贝与 Markdown 导出。",
    interactiveTool: {
      type: "mvp_generator"
    },
    quiz: [
      {
        question: "出海 MVP 闭环最核心的目的和意义是什么？",
        options: [
          "在第一周就强行获得几百万人民币的暴利",
          "用最低的资金、时间损耗，在真实国际广告与建站环境下，测试出市场的真实接受度与购买转化率，为下一步科学放大决策提供客观依据",
          "纯粹为了给广告平台捐赠广告费"
        ],
        answer: 1,
        explanation: "跨境市场瞬息万变，消费习惯各异。MVP 可以在极小投资下通过真实用户点击和购买决策收集第一手漏斗数据，是避开重资产备货亏损的最科学方法。"
      },
      {
        question: "如果你的 MVP 测试完成了，3天广告总 ROAS 为 0.5（保本线为 2.0），且换了 3 次素材依旧没有改善，你下一步最应该采取的理性行动是什么？",
        options: [
          "坚定不移地继续往该产品投放 10 万美金广告，大力出奇迹",
          "彻底关闭该品，根据后台漏斗数据总结教训（是价格太贵还是受众太窄），并在选品打分表里挑选得分第 2 的备选品重新启动 MVP 闭环",
          "认为跨境电商是彻头彻尾的骗局，彻底放弃出海"
        ],
        answer: 1,
        explanation: "连续更换高CTR素材且ROAS极低说明产品没有市场强需求，或者受众买单意愿极差。做MVP的精髓就是快速测试、低成本认输。果断切入下一个得分高的备选产品，能极快增加你碰撞出超级爆款的概率。"
      }
    ]
  },
  {
    id: "capabilities",
    title: "三、建议你重点掌握的五大核心能力",
    icon: "fa-award",
    subtitle: "做复合型出海操盘手",
    objective: "拆解跨境电商的核心技能金字塔，明确每一个出海操盘手不可或缺的技术与营销能力杠杆。",
    sections: [
      {
        title: "1. 选品判断力（出海第一命脉）",
        content: `
          <p class="paragraph">跨境电商最重要的不是你多会开店或多会剪辑，而是看商品的<strong>“市场敏感度”</strong>。要训练自己看一眼产品，脑海里就能瞬间自动计算：</p>
          <blockquote><strong>“这个东西在 1688 卖 15 元，加上国际挂号邮包 30 元成本 45 元。在国外独立站我能否卖到 39 美元？它有没有新奇好玩可以拍视频的卖点？它在美国市场会不会侵权？”</strong></blockquote>
        `
      },
      {
        title: "2. 内容把控力（未来流量的核心）",
        content: `
          <p class="paragraph">未来电商是<strong>内容发现式电商</strong>。你需要掌握把冰冷的产品卖点转化为令人心动的情绪痛点：</p>
          <ul>
            <li><strong>短视频微观脚本设计：</strong> 怎么在第1秒用夸张的前后对比震撼住滑过屏幕的访客？</li>
            <li><strong>UGC (用户原创内容) 拆解：</strong> 怎么利用大厂红人最真实的真实开箱，快速切片拼接高转化广告片？</li>
          </ul>
        `
      },
      {
        title: "3. 广告数据投放力（规模化放大器的本质）",
        content: `
          <p class="paragraph">广告绝对不是烧钱赌博，而是一门<strong>“数字赛马科学”</strong>：</p>
          <ul>
            <li>不要为烂素材买单，用数字逻辑进行AB测试。</li>
            <li>用像素 (Pixel) 追踪多渠道的点击足迹，通过 CVR 与 CPA 判定什么时候该翻倍追加预算，什么时候该狠心斩仓。</li>
          </ul>
        `
      },
      {
        title: "4. 独立站极速说服力（流量落地的收割机）",
        content: `
          <p class="paragraph">独立站详情页就像一个 24 小时不知疲倦的精英导购员：</p>
          <ul>
            <li>你的首屏加载速度是否跑在 2.5 秒内？</li>
            <li>你的用户评价是否看起来非常真实可靠？</li>
            <li>你设置的“30天包退”图标是否在结账按钮正下方消除最后疑虑？</li>
          </ul>
        `
      }
    ],
    quiz: [
      {
        question: "出海的核心思维是什么？",
        options: [
          "人肉铺货，不管三七二十一先上架 1 万件产品",
          "数据选品 + 精细内容展示 + 像素追踪科学广告AB测试 + 独立站极致体验",
          "疯狂刷评，投机取巧"
        ],
        answer: 1,
        explanation: "跨境出海的成功来自于每个细节的系统化精细运作：选品是地基，内容是引线，广告是放大，独立站是收割，四者环环相扣。"
      }
    ]
  },
  {
    id: "ai-automation",
    title: "四、AI 与自动化工具赋能区",
    icon: "fa-robot",
    subtitle: "极客级出海的降维武器",
    objective: "发挥开发者的技术红利，利用大语言模型与自动化脚本，将繁琐的人工工作流压缩 10 倍时间。",
    sections: [
      {
        title: "1. 你的专属 AI 跨境助手",
        content: `
          <p class="paragraph">作为有代码背景的极客，我们绝不用人工去低效撰写几百个产品的 Listing。以下是黄金 AI 赋能指南：</p>
          <div class="card-highlight">
            <h4 style="margin-top:0;"><i class="fa-solid fa-code"></i> Python 竞品抓取分析（极速选品）</h4>
            <p>你可以编写简单的 Scrapy / Selenium 爬虫，自动抓取 AliExpress 或 Amazon 某细分品类月销量飙升前 100 且差评率高于 15% 的产品。用 Python 清洗差评核心诉求（比如：外壳太脆，线太短），这正是你的爆款改良机会！</p>
          </div>
          <div class="card-highlight" style="margin-top: 15px; border-left-color: hsl(172, 66%, 50%);">
            <h4 style="margin-top:0;"><i class="fa-solid fa-wand-magic-sparkles"></i> 黄金 Claude 仿写 Prompt（ Listing 爆款优化）</h4>
            <p class="paragraph">输入以下指令给大语言模型，直接生成符合外国本土地道表达的高溢价 Listing：</p>
            <pre><code>Act as an elite Amazon copywriter. I will give you a competitor's listing copy and a list of customer pain points from their negative reviews. 
Please rewrite a premium, conversion-optimized Amazon Listing (Title & 5 Bullet Points) for my improved product.
Ensure it uses emotional HSL framing, highlights the solution to those negative pain points, and flows naturally with highly searched SEO keywords.
Strictly avoid dry, artificial AI corporate terms. Make it punchy, human, and persuasive.</code></pre>
          </div>
        `
      },
      {
        title: "2. 自动化运营链条规划 (SaaS API)",
        content: `
          <p class="paragraph">利用 Zapier 或 Webhook，构建你的半自动化发货通知与关怀链条：</p>
          <blockquote>
            <strong>Shopify 支付触发 ➜ 自动调用 OpenAI 撰写温馨的个性化答谢邮件 ➜ Klaviyo 延时发送 ➜ 客户收到包裹后触发自动追踪索评</strong>
          </blockquote>
        `
      }
    ],
    quiz: [
      {
        question: "怎么利用爬虫和 AI 进行科学的“差评改良选品”？",
        options: [
          "自动爬取竞争对手商品并无脑复制所有差评",
          "用爬虫抓取同类产品高频差评，利用 AI 提炼出核心改良痛点，然后向1688工厂采购改良款，在独立站针对痛点宣传爆单",
          "不需要关注竞品差评，自己拍脑袋随便改良"
        ],
        answer: 1,
        explanation: "竞争对手商品的大量差评，代表了市场中未被满足的痛点。谁能低成本改良这些痛点并针对性宣传，谁就能在市场上脱颖而出。"
      }
    ]
  },
  {
    id: "outro",
    title: "五、每日学习安排与终极建议",
    icon: "fa-calendar-days",
    subtitle: "持之以恒，从模拟走向实战",
    objective: "制定可持续的每日2小时精细化日程，搞懂从模拟盘到真实低成本MVP起盘的核心资金规划。",
    sections: [
      {
        title: "1. 每日 2 小时黄金实战日程表",
        content: `
          <div class="comparison-grid">
            <div class="comp-box recommend" style="border-left-color: hsl(263, 90%, 65%);">
              <h5>⏰ 第 1 小时：理论与脑暴输入</h5>
              <ul>
                <li>拆解 Amazon 头部Listing的图片细节与A+排版</li>
                <li>在 TikTok Creative Center 观察今天最火的 5 条前置Hook视频</li>
                <li>学习目标国家的最新税务及海关法规规定</li>
              </ul>
            </div>
            <div class="comp-box recommend" style="border-left-color: hsl(172, 66%, 50%);">
              <h5>⏰ 第 2 小时：高强度实操输出</h5>
              <ul>
                <li>计算 5 款候选产品的真实净利润，更新表格</li>
                <li>利用 AI 为主打产品生成 30 条原创短视频脚本</li>
                <li>在 Figma 中手工临摹、设计 3 张详情页主图</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        title: "2. 从零起盘的资金投入安全沙盒",
        content: `
          <p class="paragraph">我们强烈反对一上来就举债备货，推荐<strong>阶梯式小预算试错法</strong>：</p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>实验阶段</th>
                  <th>测试周期</th>
                  <th>预估预算 (RMB)</th>
                  <th>核心交付与验证标准</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-text">第一阶段：无货源模拟盘</td>
                  <td>2 周</td>
                  <td><strong>0 元</strong></td>
                  <td>完成20款产品测算、3份用户画像定位标语、搭建好Shopify店铺骨架</td>
                </tr>
                <tr>
                  <td class="bold-text">第二阶段：低成本MVP实战盘</td>
                  <td>4 周</td>
                  <td><strong>3,000 - 6,000 元</strong></td>
                  <td>采购10款小样品拍摄，搭建精品详情页，每天$30广告测试跑满3天判定转化率</td>
                </tr>
                <tr>
                  <td class="bold-text">第三阶段：选择主战场深挖</td>
                  <td>长线</td>
                  <td>根据数据滚动追加</td>
                  <td>判定出核心胜率品类，选择走向精品 FBA 备货还是独立站长线品牌化</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "3. 推荐必备出海极客软件栈",
        content: `
          <p class="paragraph">磨刀不误砍柴工，将这些业界顶尖工具加入你的日常武器库：</p>
          <ul>
            <li><strong>建站生态：</strong> Shopify + Shopify Payments (Stripe) + Klaviyo (EDM)。</li>
            <li><strong>设计美学：</strong> Figma (详情页板式设计) + Midjourney / GPT Image (生成超写实商品渲染场景图)。</li>
            <li><strong>视频剪辑：</strong> CapCut (剪映海外版，内置丰富的外国本土 trending 音效与自动英文字幕生成)。</li>
            <li><strong>AI 效能组合：</strong> ChatGPT / Claude (撰写英文详情页文案与网红沟通联络开发信) + Perplexity (调研目标国家本土消费者特定习惯)。</li>
          </ul>
        `
      }
    ],
    quiz: [
      {
        question: "关于起步阶段的出海实操，以下哪个心态是正确的？",
        options: [
          "只管买课看视频，从不动手写一个表格，指望看懂概念就能发财",
          "每周都必须有真实可交付的成果（如利润表、产品页、测试脚本），通过小预算快速跑完闭环，在实践中磨练真实的判断力与对数字的敏感度",
          "一开始就备货 20 万人民币海运发到美国仓库"
        ],
        answer: 1,
        explanation: "跨境出海是一门强实操的生存手艺，只停留在概念无法真正理解流量与转化率的残酷。在资金安全的前提下，通过每周输出交付件和低成本测试，能最快练出你的爆单敏感度。"
      }
    ]
  }
];

// Ensure this is accessible globally on browser, and also compatible with module export if needed.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COURSE_DATA };
} else {
  window.COURSE_DATA = COURSE_DATA;
}
