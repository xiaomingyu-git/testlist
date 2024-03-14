const lx = {
  biz: {},
  ui: {},
  media: {},
  device: {},
  config: {},
  error: {}
};


lx.biz.getAuthCode = function ({success}) {
  setTimeout(function () {
    success({ authCode: '[_e]??r!,K![x#2d]+b?ULKm@NvQ[A@#ss$438' });
  }, 3000);
};

lx.ui.closeWindow = function () {
  close();
};

lx.media.chooseImage = function () {};
lx.config = function () {};
lx.error = function () {};