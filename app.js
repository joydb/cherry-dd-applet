App({
  onLaunch(opt) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(opt) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    dd.getAuthCode({
      success:function(res){
        console.log(res)
      },
      fail:function(err){
      }
    });
  },
});
