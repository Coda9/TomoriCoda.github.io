// title变换
document.addEventListener('visibilitychange', function() {
 var isHidden = document.hidden;
 if (isHidden) {
  document.title = '内容1111';
 } else {
  document.title = '内容2222';
 }
});