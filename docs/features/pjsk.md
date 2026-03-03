# 🎵 PJSK 模块功能

::: warning ⚠️ 账号防丢指南
**在进行账号上传或绑定操作前，请务必保存你的引继码与密码！**
以免因意外情况、网络波动或平台风控导致游戏账号丢失。Bot 无法为您找回丢失的账号。
:::

<p style="font-size: 14px; opacity: 0.8; margin-bottom: 25px; line-height: 1.8;">
  部分特定指令可以通过添加 <code>tw</code> (台服) 或 <code>cn</code> (国服) 后缀来触发对应服务器的功能（部分国/台服功能有独立特性，具体会在功能内说明）。<br>
  <strong>带有 <code>*</code> 号的功能</strong> 表示不需要绑定账号也可以直接在群里通过 <code>@Bot 指令</code> 的方式触发哦！
</p>

---

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #39C5BB; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #39C5BB;">🔗 账号绑定与上传</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">
    通过 <code>绑定 ID</code> 的方式绑定，ID可以在游戏内个人信息页查看。<br>
    <em>绑定后默认为「不给看」模式，无法被其他人 @查询。</em>
  </p>

| 指令 | 说明 |
| :--- | :--- |
| `绑定 [ID]` | 绑定您的 PJSK 游戏 ID |
| `给看` / `不给看` | 开放或关闭其他人 @ 你查数据的权限 (全服通用) |

  <h4 style="color: #39C5BB; margin-top: 25px;">📥 数据上传 (高级查分、排名必备)</h4>
  <p style="font-size: 13px; opacity: 0.9; margin-bottom: 15px;">
    <strong>接下来的大部分高级功能都需要上传数据才可以使用！</strong>
  </p>

| 服务器 | 上传方式说明 |
| :--- | :--- |
| **日服玩家** | 直接将 **引继码和密码** 发给 Bot 即可实现极速上传。（注意：需要重新引继一次） |
| **国/台服/国际服** | 需抓包获取 Token/Session 等信息，或进入 <a href="http://go.mikuware.top" target="_blank" style="color:#39C5BB; font-weight:bold;">👉 数据上传页面</a> 获取 <code>Suite</code>。 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #722ed1; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #722ed1;">📝 个人信息与查分 (需上传数据)</h3>

| 指令 | 说明 |
| :--- | :--- |
| `pjskprofile` | 获取个人信息图，图片类似旧版 profile。 |
| `视奸` | 返回当前队伍综合力及其构成。 |
| `逮捕` | 查询 Expert / Master 难度的 FC / AP 进度。 |
| `rk` | 获取玩家排位信息。 |
| `b39` | 获取 Rating 分数最高的 39 首歌曲和总分（仅供参考）。 |
| `pjsk b30` | 获取 Rating 分数最高的 30 首歌曲和平均分数（与 b39 算法不同，随意参考）。 |
| `pjsk进度(ex/apd)` | 查询 Master 歌曲完成情况 (AP/FC/Clear)。查其他难度可使用 <code>pjsk进度ex</code> 或 <code>pjsk进度apd</code>。 |
| `pjskdetail` | 获取个人详细信息（含金币、水晶、家具练度、每日挑战等，建议私聊使用）。 |
| `pjskevent` | 获取个人 10 次最高排名的活动记录（当期要拿到排名奖励才会记录）。 |
| `pjskcard` | 获取个人卡牌图鉴。可加上角色花名查看单角色图鉴。 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #d4b106; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #d4b106;">🎫 组卡与查卡推荐 (需上传数据)</h3>
  
| 指令 | 说明 | 示例 |
| :--- | :--- | :--- |
| `组卡 [队名] [属性]` | 指定箱活中推荐最佳卡组 top7 (默认嫉妒ex)。队名含(ln/mmj/vbs/ws/25/vs)，属性含(绿/粉/橙/蓝/紫)。 | `组卡 ln 橙` |
| `活动组卡 [歌名] [难度]` | 当前活动推荐最佳卡组 top7。不填默认嫉妒ex。WL活第一参数识别为角色。 | `活动组卡 龙 hard` |
| `挑战组卡 [角色] [歌名] [难度]` | 每日挑战推荐最佳卡组 top7。 | `挑战组卡 ick 10th master` |
| `最强组卡` | 返回您同色同队中分数最高的卡组 top7 (默认嫉妒ex)。 | `最强组卡` |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #FF7A91; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #FF7A91;">📊 公共查询与杂项 (无需传数据)</h3>

| 指令 | 说明 |
| :--- | :--- |
| `id*` | 返回当前 QQ 号绑定的游戏 ID。 |
| `sk*` | 查询活动排名或者指定档线 (WL活动可加角色花名查单榜)。 |
| `sk预测*` | 获取预测线信息 (仅日服单榜，不一定能获取到所有档线，数据源于33)。 |
| `分数线/sk线*` | 获取当前档线分数信息 (数据最大有5分钟延迟，WL活可加花名)。 |
| `ss*` / `wlss*` | 获取当前档线时速 (20分钟速度*3)。`wlss` 为当前角色单榜时速 (暂日服限定)。 |
| `查房` | 获取本人或目标档线最近1小时的活动情况 (无法确认烤森刷周回，请自行判断)。 |
| `查时间*` | 查询注册时间。 |
| `活动*` | 查看当前活动信息。加编号可查指定活动 (例：<code>活动86</code>)。 |
| `findevent*` | 查询满足指定条件的活动 (使用 <code>findevent help</code> 查阅具体用法)。 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
  <h3 style="margin-top: 0; color: #1890ff;">🎶 歌曲、谱面与资料百科</h3>

| 指令 | 说明 |
| :--- | :--- |
| `pinfo*` | 查询歌曲信息。修改花名：<code>pset 新名 to 旧名</code>，删除：<code>pdel 昵称</code>。 |
| `charinfo*` | 查询角色所有花名。修改方式同上 (<code>charset</code> / <code>chardel</code>)。 |
| `难度排行*` | 格式：<code>难度排行 level [难度]</code>。可加 <code>fc/ap</code> 前缀。目前仅支持紫谱及早期红谱。 |
| `[歌名]谱面预览*` | 默认 master 难度。可加 <code>ex</code> 或 <code>apd</code> 前缀查看其他难度。 |
| `[歌名]技能预览*` | 默认 master 难度。返回谱面技能分布及分数占比。 |
| `查卡 / findcard*` | 返回满足指定条件的所有卡牌 (队名/角色/稀有度/属性)。最多3个参数。 |
| `card*` / `cardinfo*` | <code>card [编号]</code> 查卡面图。<code>cardinfo [编号]</code> 查属性、技能等基础信息。 |
| `查bpm*` / `查物量*` | 查询指定 bpm / 物量的歌曲及难度谱面。 |

</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 12px;">
  <h3 style="margin-top: 0; color: #52c41a;">🎮 互动小游戏与 5v5 活动功能</h3>

| 指令 | 说明 |
| :--- | :--- |
| `5v5胜率 / 分数` | (5v5活动限定) 返回双方胜率/分数。 |
| `tf启动` | (5v5活动限定) 送3次无偿火给绑定 ID 的用户。 |
| `pjsk听歌识曲*` | 发送片段猜歌名/花名 (40s限时)。输入 <code>结束猜曲</code> 中断。 |
| `pjsk猜卡面*` | 发送卡面局部截图猜角色 (40s限时)。输入 <code>结束猜卡面</code> 中断。 |
| `pjsk抽卡*` | 格式：<code>pjsk抽卡/pjskXX连/pjsk反抽卡 [当期卡池编号]</code>。模拟抽卡体验。 |
| `pjsk表情制作*` | 自定义 pjsk 小表情文字。使用 <code>pjsk -h</code> 查看详情。 |
| `看 [角色]*` | 返回该角色随机卡图。 |
| `随个 / 葱什么*` | <code>随个 [组合] [level]</code> 返回随机指定等级歌曲。<code>葱什么</code> 随机一首。 |

</div>

<style>
/* 强制表格的第一列（指令）不换行 */
.custom-card table th:nth-child(1),
.custom-card table td:nth-child(1) {
  white-space: nowrap !important;
  word-break: keep-all !important;
}
</style>
