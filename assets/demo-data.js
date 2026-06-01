const DEMO_USER = {
  name: 'Priya Mehta',
  company: 'NeoCredit Financial',
  email: 'priya@neocredit.in',
  role: 'Head of Risk',
  memberSince: 'January 2025',
  accountId: 'NC-2025-0041'
};

const DEMO_PROVIDER = {
  name: 'Rahul Sharma',
  company: 'Bureau ID',
  email: 'rahul@bureauId.in',
  role: 'Data Partnerships Lead'
};

const PROVIDERS = [
  {
    id: 'hdfc-data',
    name: 'HDFC Data Services',
    category: 'banks',
    logo: 'B',
    logoColor: '#1a56db',
    tagline: 'Transaction intelligence from 80M+ account holders',
    coverage: '80M users',
    agreementStatus: 'active',
    contractRef: 'DSA-2025-017',
    enrichments: [
      { id: 'income-band', name: 'Monthly Income Band', desc: 'Salary credit pattern segmented into bands', icon: '₹', coverage: '80M', example: '<10k / 10k–25k / 25k–50k / >50k' },
      { id: 'top-categories', name: 'Top 5 Transaction Categories', desc: 'Dominant spending categories over last 90 days', icon: '📊', coverage: '78M', example: 'Food, Travel, Utilities, Shopping, Healthcare' },
      { id: 'emi-flag', name: 'EMI Obligation Detection', desc: 'Flags users with active recurring EMI debits', icon: '🔁', coverage: '65M', example: 'EMI Active / No EMI Detected' },
      { id: 'avg-balance', name: 'Avg Monthly Balance Band', desc: 'Average end-of-month balance over last 6 months', icon: '💰', coverage: '80M', example: '<5k / 5k–25k / 25k–100k / >100k' }
    ]
  },
  {
    id: 'icici-insights',
    name: 'ICICI Insights',
    category: 'banks',
    logo: 'B',
    logoColor: '#b45309',
    tagline: 'Behavioural signals from retail and corporate banking',
    coverage: '65M users',
    agreementStatus: 'pending',
    contractRef: null,
    enrichments: [
      { id: 'spend-velocity', name: 'Spend Velocity Score', desc: 'Month-on-month transaction growth rate', icon: '📈', coverage: '60M', example: 'Declining / Stable / Growing' },
      { id: 'savings-pattern', name: 'Savings Pattern', desc: 'Regularity of savings transfers', icon: '🏦', coverage: '55M', example: 'Irregular / Monthly / Disciplined' }
    ]
  },
  {
    id: 'axis-analytics',
    name: 'Axis Analytics',
    category: 'banks',
    logo: 'B',
    logoColor: '#7c3aed',
    tagline: 'Credit and debit behaviour from 50M+ accounts',
    coverage: '50M users',
    agreementStatus: 'request_access',
    contractRef: null,
    enrichments: [
      { id: 'credit-utilisation', name: 'Credit Utilisation Band', desc: 'Average credit card utilisation %', icon: '💳', coverage: '30M', example: '<30% / 30–60% / >60%' }
    ]
  },
  {
    id: 'bureau-id',
    name: 'Bureau ID',
    category: 'telecom',
    logo: 'T',
    logoColor: '#0891b2',
    tagline: 'Mobile behaviour signals across 120M+ subscribers',
    coverage: '120M users',
    agreementStatus: 'active',
    contractRef: 'DSA-2025-009',
    enrichments: [
      { id: 'pre-post-paid', name: 'Pre / Post-Paid Status', desc: 'Current connection type of the subscriber', icon: '📱', coverage: '120M', example: 'Pre-paid / Post-paid' },
      { id: 'arpu-band', name: 'Monthly Recharge Band (ARPU)', desc: 'Average monthly spend on mobile recharge', icon: '📶', coverage: '115M', example: '<200 / 200–500 / >500' },
      { id: 'tenure', name: 'Network Tenure', desc: 'Duration of active subscription with current operator', icon: '⏱', coverage: '120M', example: '<6m / 6–12m / >1yr' },
      { id: 'data-usage', name: 'Data Usage Tier', desc: 'Average monthly data consumption', icon: '📡', coverage: '110M', example: 'Light (<2GB) / Medium (2–10GB) / Heavy (>10GB)' }
    ]
  },
  {
    id: 'airtel-signals',
    name: 'Airtel Signals',
    category: 'telecom',
    logo: 'T',
    logoColor: '#dc2626',
    tagline: 'Network and usage data from 300M+ Airtel subscribers',
    coverage: '300M users',
    agreementStatus: 'pending',
    contractRef: null,
    enrichments: [
      { id: 'location-stability', name: 'Location Stability', desc: 'Frequency of SIM location changes', icon: '📍', coverage: '280M', example: 'Stable / Moderate / High Mobility' }
    ]
  },
  {
    id: 'payu-insights',
    name: 'PayU Insights',
    category: 'payment_aggregators',
    logo: 'P',
    logoColor: '#059669',
    tagline: 'Payment behaviour across 450M+ transactions per month',
    coverage: '85M users',
    agreementStatus: 'active',
    contractRef: 'DSA-2025-023',
    enrichments: [
      { id: 'spend-by-category', name: 'Spend by Category', desc: 'Monthly spend breakdown across merchant categories', icon: '🛒', coverage: '85M', example: 'Food / Travel / Shopping / Utilities / Entertainment' },
      { id: 'monthly-spend-band', name: 'Monthly Online Spend Band', desc: 'Total monthly digital payment volume', icon: '💸', coverage: '85M', example: '<2k / 2k–10k / 10k–50k / >50k' },
      { id: 'txn-frequency', name: 'Transaction Frequency', desc: 'Average number of transactions per month', icon: '🔢', coverage: '82M', example: '<5 / 5–20 / >20' },
      { id: 'merchant-diversity', name: 'Merchant Diversity Score', desc: 'Breadth of unique merchants transacted with', icon: '🗂', coverage: '80M', example: 'Narrow / Moderate / Broad' }
    ]
  },
  {
    id: 'razorpay-analytics',
    name: 'Razorpay Analytics',
    category: 'payment_aggregators',
    logo: 'P',
    logoColor: '#2563eb',
    tagline: 'B2B and B2C payment signals from 5M+ businesses',
    coverage: '60M users',
    agreementStatus: 'request_access',
    contractRef: null,
    enrichments: [
      { id: 'payment-success', name: 'Payment Success Rate', desc: 'Historical rate of successful payment attempts', icon: '✅', coverage: '55M', example: '<70% / 70–90% / >90%' }
    ]
  }
];

const PAST_RUNS = [
  {
    id: 'run-001',
    date: '2026-05-22',
    provider: 'Bureau ID',
    category: 'Telecom',
    enrichments: ['Pre / Post-Paid Status', 'Monthly Recharge Band'],
    inputRecords: 5000,
    matchedRecords: 2847,
    status: 'completed',
    downloadAvailable: true,
    results: {
      'Pre / Post-Paid Status': { 'Post-paid': 1203, 'Pre-paid': 1644 },
      'Monthly Recharge Band': { '<200': 812, '200–500': 1104, '>500': 931 }
    }
  },
  {
    id: 'run-002',
    date: '2026-05-15',
    provider: 'HDFC Data Services',
    category: 'Banks',
    enrichments: ['Monthly Income Band', 'EMI Obligation Detection'],
    inputRecords: 8200,
    matchedRecords: 5614,
    status: 'completed',
    downloadAvailable: true,
    results: {
      'Monthly Income Band': { '<10k': 1124, '10k–25k': 2203, '25k–50k': 1681, '>50k': 606 },
      'EMI Obligation Detection': { 'EMI Active': 2891, 'No EMI Detected': 2723 }
    }
  },
  {
    id: 'run-003',
    date: '2026-05-08',
    provider: 'PayU Insights',
    category: 'Payment Aggregators',
    enrichments: ['Spend by Category', 'Monthly Online Spend Band', 'Transaction Frequency'],
    inputRecords: 3500,
    matchedRecords: 2190,
    status: 'completed',
    downloadAvailable: true,
    results: {
      'Spend by Category': { 'Food': 890, 'Shopping': 654, 'Travel': 312, 'Utilities': 220, 'Entertainment': 114 },
      'Monthly Online Spend Band': { '<2k': 438, '2k–10k': 985, '10k–50k': 614, '>50k': 153 },
      'Transaction Frequency': { '<5': 612, '5–20': 1034, '>20': 544 }
    }
  }
];

const AGREEMENT_REQUESTS = [
  { provider: 'ICICI Insights', submittedDate: '2026-05-10', status: 'In Review', eta: '~2 weeks' },
  { provider: 'Airtel Signals', submittedDate: '2026-05-18', status: 'In Review', eta: '~1 week' }
];
