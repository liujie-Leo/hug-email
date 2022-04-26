module.exports = function (email) {
  let template = `
    <div style="display:flex;justify-content:center;">
      <div style="background-color: #fff; padding:24px 24px;width:500px;border-radius:8px;font-size:24px;display:flex;align-items:center;flex-direction:column;border:1px solid #e4e4e4;">
      <img style="height: 32px;width: 32px;" src="https://www.betterleo.com/images/logo.png" alt="">
      <p>在设备上有新的登录活动</p>
      <div style="font-size:14px;">${email}</div>
      <p style="height: 1px;background-color: #f0f0f0;width: 100%;"></p>
      <p style="font-size: 12px;text-align: center;line-height: 22px;">我们发现您的 Betterleo 帐号在一部 Mac 设备上有新的登录活动。如果这是您本人的操作，那么您无需采取任何行动。如果这不是您本人的操作，我们会帮助您保护您的帐号。</p>
      <a target="_blank" href="https://www.betterleo.com" style="text-decoration: none; margin-top:24px;font-size: 14px; border-radius: 12px;background-color:#303541;color:#fff;padding:8px 28px">查看活动</a>
      <div style="font-size: 12px;color: #ccc;margin-top: 32px;">详情见官网</div>
      <a target="_blank" style="color: #ccc;font-size: 12px;" href="https://www.betterleo.com">https://www.betterleo.com</a>
    </div>
    </div>
  `;
  return template
}