module.exports = {
  launch: {
    dumpio: true,
    headless: true,
    args: ['--disable-infobars', '--window-size=1200,800', '--disable-gpu'],
    defaultViewport: null,
  },
  browserContext: 'default',
};
