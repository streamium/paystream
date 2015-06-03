'use strict';

var config = {
  network: 'testnet',
  appPrefix: '', // For testnet, set to '/testnet'
  otherNetwork: 'livenet',
  linkToOther: '/livenet',
  BLOCKCYPHERTX: 'https://api.blockcypher.com/v1/btc/'
    + 'test3' // For testnet, use: 'test3'
    + '/txs/',
  peerServers: [
    {
      key: 'peerjs',
      host: 'localhost',
      port: 9000,
    },
    {
      key: 'peerjs',
      host: 'localhost',
      port: 9000,
    },
  ],
  peerJS: {
    debug: 0,
    config: {
      'iceServers': [
        {url:'stun:stun.l.google.com:19302'},
        {url:'stun:stun1.l.google.com:19302'},
        {url:'stun:stun2.l.google.com:19302'},
        {url:'stun:stun3.l.google.com:19302'},
        {url:'stun:stun4.l.google.com:19302'},
        {url:'stun:stun01.sipphone.com'},
        {url:'stun:stun.ekiga.net'},
        {url:'stun:stun.fwdnet.net'},
        {url:'stun:stun.ideasip.com'},
        {url:'stun:stun.iptel.org'},
        {url:'stun:stun.rixtelecom.se'},
        {url:'stun:stun.schlund.de'},
        {url:'stun:stunserver.org'},
        {url:'stun:stun.softjoys.com'},
        {url:'stun:stun.voiparound.com'},
        {url:'stun:stun.voipbuster.com'},
        {url:'stun:stun.voipstunt.com'},
        {url:'stun:stun.voxgratia.org'},
        {url:'stun:stun.xten.com'},
      ]
    }
  },
  confidenceDelay: 5000,
  confidenceTarget: 0.85,
  confidenceRetry: 15,
  analytics: true,
  DEBUG: false,
  defaults: {
    providerStream: 'sexybabe69',
    providerPrivkey: '75d79298ce12ea86863794f0080a14b424d9169f7e325fad52f60753eb072afc',
    providerAddress: 'n2Py6DKziqwmSWMxN8vdz7tAV6aabK9LCR',
    providerRate: 0.001,
    clinetPrivkey: 'a831f26d457a5e7edc0cef0eac6fc02dd6a2c032c9e3da8a622f3a26b9aa5fe4',
    clientChange: 'n3pNMEeVec5sMMhMoUseojUTSHw3LDAY3a'
  }
};
