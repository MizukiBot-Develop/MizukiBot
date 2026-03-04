# 🎵 PJSK 模块功能

::: warning ⚠️ 账号防丢指南
**在进行账号上传或绑定操作前，请务必保存你的引继码与密码！**
以免因意外情况、网络波动或平台风控导致游戏账号丢失。Bot 无法为您找回丢失的账号。
:::

<p style="font-size: 14px; opacity: 0.8; margin-bottom: 25px; line-height: 1.8;">
  <strong>🌐 多服务器前缀支持：</strong><br>
  在大部分查分、查榜、绑定指令前添加特定前缀，即可跨服查询：<br>
  <code>cn</code> (国服) | <code>tw</code> (台服) | <code>en</code> (国际服) | <code>kr</code> (韩服) | 不加前缀默认日服<br>
  <em>(例如：<code>cn绑定</code>、<code>twsk</code>、<code>en逮捕</code>、<code>cnpjskprofile</code>)</em>
</p>

---

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #39C5BB; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #39C5BB;">🔗 账号绑定与数据上传</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">
    通过游戏 UID 进行绑定。绑定后默认为「不给看」模式，无法被其他人 @ 查询。
  </p>

| 指令 | 说明 |
| :--- | :--- |
| `[前缀]绑定 [ID]` | 绑定指定服务器的 PJSK 游戏 ID |
| `给看` / `不给看` | 开放或关闭他人逮捕/查询自己的权限 |

  <h4 style="color: #39C5BB; margin-top: 25px;">📥 高级数据上传 (查榜/MySekai必备)</h4>
  <p style="font-size: 13px; opacity: 0.9; margin-bottom: 15px;">部分进阶功能需上传数据至数据库才可使用。</p>

| 数据类型 | 上传说明 |
| :--- | :--- |
| **基础数据 (日/台等)** | 访问 <a href="http://go.mikuware.top" target="_blank" style="color:#39C5BB; font-weight:bold;">👉 数据上传页面</a> 获取 Suite。 |
| **MySekai 数据** | 访问 <a href="https://haruki.seiunx.com/upload-data" target="_blank" style="color:#39C5BB; font-weight:bold;">👉 MySekai 数据上传页</a>。Android 推荐「Haruki工具箱」；iOS 推荐 MitM 代理模块。 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #722ed1; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #722ed1;">📝 玩家信息、查分与 MySekai</h3>

| 指令 | 说明 |
| :--- | :--- |
| `[前缀]pjskprofile` | 生成绑定 ID 的个人信息卡片图 |
| `[前缀]逮捕 [@/ID]` | 查询目标 Ex/Ma/Apd 难度的 FC、AP 进度 |
| `b39` | 获取 Rating 最高的 39 首歌与总分 (需上传数据，仅供参考) |
| `pjsk b30` | 获取 Rating 最高的 30 首歌与平均分 (需上传数据，算法不同) |
| `ms分析` / `msa2` | (MySekai) 分析现存材料情况 (msa2 为新版 UI) |
| `ms地图 [1-4]` | (MySekai) 生成资源分布图 (1草原/2花田/3沙滩/4废墟) |
| `ms照片 [序号]` | (MySekai) 下载用户在游戏内拍摄的照片 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #1890ff;">📈 高阶查榜与 PT 追踪</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">
    <strong>WL 活动特供：</strong> 在查榜指令前加 <code>wl</code>，并在末尾加 <code>-c [角色]</code> 可查单榜 (如：<code>wlsk 100 -c haruka</code>)。
  </p>

| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `sk [排名/ID]` | 查指定排名/玩家分数 (支持同时查最多7人) | `sk 100` |
| `查房 [排名]` | 查询特定排名最近 1 小时的活动情况 | `查房 50` |
| `分数线 [排名]` | 查看本期活动中特定排名的分数趋势 | `分数线 1000` |
| `时速 [分钟]` | 查各榜线特定时间内 PT 增长时速 (最大1440) | `时速 10` |
| `半日速` / `日速` | 查看近半天 / 近一天各榜线的 PT 增长速度 | `日速` |
| `追踪 [排1] [排2]` | 追踪目前特定排名在本期的 PT 与排名趋势 | `追踪 1 2` |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #f5222d; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #f5222d;">🎶 歌曲谱面与别名设置</h3>
  <p style="font-size: 13px; color: #f5222d; opacity: 0.8; margin-bottom: 15px;">⚠️ 别名设置日志按日公示，违规乱设别名将被删词或封禁 Bot 使用权！</p>

| 指令 | 说明 |
| :--- | :--- |
| `pjskinfo [曲名]` | 查看当前歌曲详细信息 |
| `pjskbpm [曲名]` | 查看当前歌曲的 BPM |
| `查bpm [数字]` | 查询对应 BPM 的所有歌曲 |
| `谱面预览 [曲名] [难度]` | 查阅谱面。难度支持简写 (ez/nm/hd/ex/ma/apd)，查 ma 可省略 |
| `musicset [新] to [旧]` | 设置歌曲全局昵称 (删除用 `musicdel [昵称]`) |
| `charaset [新] to [旧]` | 设置角色全局昵称 (如: `charaset knd to 宵崎奏`) |
| `grcharaset [新] to [旧]` | 设置**仅当前群可用**的角色昵称 |
| `charalias [昵称]` | 查看特定角色的所有已绑定昵称 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #d4b106; padding: 20px; border-radius: 12px;">
  <h3 style="margin-top: 0; color: #d4b106;">🎫 卡牌与活动全能图鉴</h3>
  
| 指令 | 说明 |
| :--- | :--- |
| `查卡 [角色/卡面ID]` | 查角色所有卡牌，或查特定 ID 卡牌的详细信息 |
| `活动总览` | 返回当前所有活动的概要 (因图片较大，部分频道不可用) |
| `查活动 [ID/关键字]` | 查指定活动。支持**多关键字精细筛选**👇 |

  <h4 style="color: #d4b106; margin-top: 15px; font-size: 14px;">🔎 查活动·多关键字筛选秘籍：</h4>
  <ul style="margin:5px 0 0 20px; font-size:13px; opacity:0.9;">
    <li><strong>单属性：</strong> <code>查活动 5v5</code> (查类型)、<code>查活动 紫月</code> (查属性)、<code>查活动 25h</code> (查25箱活)</li>
    <li><strong>多条件：</strong> <code>查活动 草 5v5</code> (绿草属+5v5活)、<code>查活动 knd 蓝</code> (蓝星属+出卡含knd)</li>
    <li><strong>终极筛选：</strong> <code>查活动 普活 紫月 knd</code> (马拉松+紫月+含knd，无视报酬卡属性)</li>
  </ul>
</div>

<style>
/* 强制表格的第一列（指令）不换行 */
.custom-card table th:nth-child(1),
.custom-card table td:nth-child(1) {
  white-space: nowrap !important;
  word-break: keep-all !important;
}
</style>
