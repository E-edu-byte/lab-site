// 学生専用ページのログイン欄（準備中：認証はまだ行わない。入力値はどこにも送らない）
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var msg = document.getElementById('login-msg');
  msg.textContent = 'ただいま準備中です。学生専用ページは、公開までしばらくお待ちください。';
  msg.hidden = false;
});
