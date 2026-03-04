// 全局交互逻辑 - 无后端依赖，纯前端模拟
$(function() {
  // 1. 多语言切换模拟
  $('.lang-switch a').click(function(e) {
    e.preventDefault();
    const lang = $(this).data('lang');
    $('.lang-switch a').removeClass('active');
    $(this).addClass('active');
    alert(`已切换为【${lang === 'zh' ? '中文' : 'English'}】版本（纯前端模拟）`);
  });

  // 2. 登录/注册标签切换
  $('.login-tab').click(function() {
    $('.login-tab').removeClass('active');
    $(this).addClass('active');
    const tab = $(this).data('tab');
    $('.login-form').hide();
    $(`#${tab}-form`).show();
  });

  // 3. 登录/注册按钮点击模拟
  $('#login-btn, #register-btn').click(function(e) {
    e.preventDefault();
    const type = $(this).attr('id') === 'login-btn' ? '登录' : '注册';
    const username = $(`#${type === 'login' ? 'login' : 'register'}-username`).val();
    const password = $(`#${type === 'login' ? 'login' : 'register'}-password`).val();
    if (!username || !password) {
      alert('请输入账号和密码！');
      return;
    }
    alert(`${type}成功！（纯前端模拟，即将跳转到首页）`);
    window.location.href = 'index.html';
  });

  // 4. AR扫描按钮点击模拟
  $('.ar-scan-btn').click(function() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      alert('已启动摄像头，开始AR扫描识别汉字！（纯前端模拟）');
      $(this).text('扫描中...').prop('disabled', true);
      setTimeout(() => {
        alert('AR识别成功！已触发汉字动画展示');
        $(this).text('重新扫描').prop('disabled', false);
      }, 2000);
    } else {
      alert('你的设备不支持摄像头，无法使用AR功能！');
    }
  });

  // 5. 创作者入驻申请模拟
  $('#creator-apply-btn').click(function(e) {
    e.preventDefault();
    const hsk = $('#hsk-level').val();
    const name = $('#real-name').val();
    const idCard = $('#id-card').val();
    if (!hsk || !name || !idCard) {
      alert('请填写完整的入驻信息！');
      return;
    }
    if (hsk < 6) {
      alert('入驻要求HSK等级6级及以上，请确认！');
      return;
    }
    alert('入驻申请提交成功！平台将在1-3个工作日内审核（纯前端模拟）');
    $(this).text('申请已提交').prop('disabled', true);
  });

  // 6. 购物车添加模拟
  $('.add-cart').click(function() {
    const product = $(this).data('product');
    const price = $(this).data('price');
    alert(`已将【${product}】¥${price} 添加到购物车！（纯前端模拟）`);
  });

  // 7. 下单按钮点击模拟
  $('#order-submit').click(function(e) {
    e.preventDefault();
    alert('下单成功！订单已生成，将为你跳转至支付页面（纯前端模拟）');
  });

  // 8. 学习进度追踪模拟
  $('.learn-progress-btn').click(function() {
    alert('你的学习进度：已完成HSK1级（80%），HSK2级（30%）（纯前端模拟）');
  });

  // 9. 错题本查看模拟
  $('.wrong-question-btn').click(function() {
    alert('错题本：共12道错题，其中汉字认知6道，AR互动练习6道（纯前端模拟）');
  });

  // 10. 管理后台审核操作模拟
  $('.admin-audit').click(function() {
    const type = $(this).data('type');
    const id = $(this).data('id');
    alert(`已${type === 'pass' ? '通过' : '驳回'}ID为${id}的${$(this).data('obj')}申请（纯前端模拟）`);
    $(this).parents('tr').remove();
  });

  // 11. 导航栏滚动效果
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar-custom').addClass('shadow-sm');
    } else {
      $('.navbar-custom').removeClass('shadow-sm');
    }
  });

  // 12. 回到顶部按钮
  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
});