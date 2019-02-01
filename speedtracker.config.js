const config = {
  profiles: {
    test: {
      name: 'Hawksworx',
      parameters: {
        connectivity: 'Cable',
        location: 'London_EC2',
        runs: 5,
        url: 'https://www.hawksworx.com'
      },
      budgets: [
        {
          metric: 'TTFB',
          max: 1000
        }
      ]
    },
    testkr: {
      name: 'Hawksworx (Korea)',
      parameters: {
        connectivity: 'Cable',
        location: 'ec2-ap-northeast-2',
        runs: 5,
        url: 'https://www.hawksworx.com'
      },
      budgets: [
        {
          metric: 'TTFB',
          max: 1000
        }
      ]
    }
  }
}

if (typeof window === 'object') {
  window.__SPEEDTRACKER_CONFIG = config
} else if (typeof module !== 'undefined') {
  module.exports = config
}
