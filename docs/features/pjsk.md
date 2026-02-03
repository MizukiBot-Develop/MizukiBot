# 🎵 PJSK 相关功能 (Project Sekai)

> 包含查分、查榜、组卡计算器、活动预测及各类娱乐功能。
> <br><small>*部分功能支持 `cn` (国服) 或 `tw` (台服) 前缀。*</small>

<br>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #1890ff; padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(24, 144, 255, 0.1);">
  <h3 style="margin-top: 0; color: #1890ff;">📊 玩家数据查询 (需上传数据)</h3>
  <p style="font-size: 13px; opacity: 0.8; margin-bottom: 15px;">
    以下功能需要先上传数据。<br>
    <strong>日/台服上传地址：</strong> <a href="http://go.mikuware.top/" target="_blank" style="color:#1890ff; font-weight:bold;">👉 点击进入数据上传页面</a><br>
    <span style="font-size:12px; opacity:0.6;">(日服玩家可直接复制引继码给Bot上传)</span>
  </p>

  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <div style="flex: 1; min-width: 240px;">
      <ul style="font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
        <li><code>rk</code>：获取玩家排位信息</li>
        <li><code>b39</code>：Rating最高39首 (仅供参考)</li>
        <li><code>pjsk b30</code>：Rating最高30首 (算法不同)</li>
        <li><code>pjsk进度 [ex/apd]</code>：查Master/Expert完成表</li>
        <li><code>pjskdetail</code>：查金币、水晶、练度 (建议私聊)</li>
      </ul>
    </div>
    <div style="flex: 1; min-width: 240px;">
      <ul style="font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
        <li><code>视奸</code>：查看当前队伍综合力构成</li>
        <li><code>逮捕</code>：查询高难谱面 AP/FC 进度</li>
        <li><code>pjskcard</code>：个人卡牌图鉴 (可加角色花名)</li>
        <li><code>pjskevent</code>：查询前10次最高排名活动</li>
        <li><code>最强组卡</code>：同色同队最高分卡组</li>
      </ul>
    </div>
  </div>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #E97EB3; padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(233, 126, 179, 0.1);">
  <h3 style="margin-top: 0; color: #E97EB3;">🎵 查歌与活动 (无需上传)</h3>
  
  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <!-- 基础绑定与查询 -->
    <div style="flex: 1; min-width: 240px;">
      <h4 style="color: #E97EB3; border-bottom: 1px dashed #ffadd2; margin-bottom: 10px;">基础功能</h4>
      <ul style="font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
        <li><code>绑定 [ID]</code>：绑定游戏ID</li>
        <li><code>给看/不给看</code>：开放/关闭被At权限</li>
        <li><code>pjskprofile</code>：获取旧版个人信息卡片</li>
        <li><code>查时间</code>：查询注册时间</li>
        <li><code>id</code>：返回当前QQ绑定ID</li>
      </ul>
    </div>

    <!-- 活动与榜单 -->
    <div style="flex: 1; min-width: 240px;">
      <h4 style="color: #E97EB3; border-bottom: 1px dashed #ffadd2; margin-bottom: 10px;">活动榜单</h4>
      <ul style="font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
        <li><code>sk</code>：查活动排名/档线</li>
        <li><code>分数线/sk线</code>：查当前档线分数 (5分延迟)</li>
        <li><code>ss/wlss</code>：查当前/单榜档线时速</li>
        <li><code>sk预测</code>：(日服) 查预测线</li>
        <li><code>查房</code>：查最近1小时活动情况</li>
        <li><code>活动 [编号]</code> / <code>findevent</code>：查活动信息</li>
      </ul>
    </div>
  </div>

  <div style="margin-top: 15px;">
    <h4 style="color: #E97EB3; border-bottom: 1px dashed #ffadd2; margin-bottom: 10px;">歌曲查询</h4>
    <p style="font-size: 13px; opacity: 0.9;">
      <code>pinfo [曲名]</code> (查详情) / <code>查bpm</code> / <code>查物量</code><br>
      <code>谱面预览 [曲名] [ex/apd]</code> / <code>技能预览</code><br>
      <code>难度排行 [level] [难度]</code> (例: 难度排行 33 master)
    </p>
  </div>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #fa8c16; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #fa8c16;">🧮 组卡计算器</h3>
  <table style="width: 100%; font-size: 13px;">
    <tr>
      <td width="30%"><code>组卡 [队] [色]</code></td>
      <td>
        指定箱活最佳卡组 (例: <code>组卡 ln 橙</code>)<br>
        <span style="opacity:0.6; font-size:12px;">队名: ln/mmj/vbs/ws/25/vs</span>
      </td>
    </tr>
    <tr>
      <td><code>活动组卡 [曲]</code></td>
      <td>
        当前活动最佳卡组 (例: <code>活动组卡 独瑞 hard</code>)<br>
        <span style="opacity:0.6; font-size:12px;">默认歌曲: 独りんぼエンヴィー</span>
      </td>
    </tr>
    <tr>
      <td><code>挑战组卡 [人]</code></td>
      <td>
        每日挑战Live最佳卡组 (例: <code>挑战组卡 miku</code>)
      </td>
    </tr>
  </table>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #722ed1; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
  <h3 style="margin-top: 0; color: #722ed1;">🃏 卡面查询</h3>
  
  <details>
    <summary style="cursor: pointer; color: #722ed1; font-weight: bold; font-size: 13px;">🔎 查卡 (findcard) 详细说明</summary>
    <div style="margin-top: 10px; font-size: 13px; opacity: 0.9; background: var(--vp-c-bg); padding: 10px; border-radius: 8px;">
      <p><strong>指令：</strong><code>findcard/查卡 [参数1] [参数2] ...</code></p>
      <ul>
        <li><strong>1个参数</strong>: 角色名/队名 (例: <code>miku</code>, <code>25</code>)</li>
        <li><strong>2个参数</strong>: +属性/稀有度 (例: <code>miku 4</code>, <code>25 紫</code>)</li>
        <li><strong>3个参数</strong>: +属性+稀有度 (例: <code>miku 4 限定</code>)</li>
      </ul>
      <p><strong>属性关键词</strong>: 红/蓝/绿/黄/紫/橙/粉</p>
    </div>
  </details>

  <p style="font-size: 13px; margin-top: 10px; opacity: 0.9;">
    <code>card [编号]</code> (查大图) / <code>cardinfo [编号]</code> (查数值)<br>
    <code>看 [角色]</code> (随机卡图)
  </p>
</div>

<div class="custom-card" style="background: var(--vp-c-bg-soft); border-left: 5px solid #52c41a; padding: 20px; border-radius: 12px;">
  <h3 style="margin-top: 0; color: #52c41a;">🎉 娱乐功能</h3>
  
  <div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <div style="flex: 1; min-width: 240px;">
      <ul style="font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
        <li><code>pjsk听歌识曲</code> / <code>结束猜曲</code></li>
        <li><code>pjsk猜卡面</code> / <code>结束猜卡面</code></li>
        <li><code>pjsk抽卡</code> (默认10连)</li>
        <li><code>pjsk反抽卡</code> (反转概率)</li>
      </ul>
    </div>
    <div style="flex: 1; min-width: 240px;">
      <ul style="font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
        <li><code>随个 [组合] [等级]</code> (例: 随个 25 33)</li>
        <li><code>葱什么</code> (随机Miku歌)</li>
        <li><a href="/features/meme" style="color:#52c41a; font-weight:bold;">表情制作 -></a></li>
      </ul>
    </div>
  </div>
</div>