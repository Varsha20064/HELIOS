export interface CountryData {
  id: string; // Alpha-3
  numericId?: string; // Numeric ISO
  name: string;
  alternateNames?: string[];
  flag: string;
  description: string;
  economy: {
    gdp: string;
    currencyName: string;
    currencySymbol: string;
    rateVsUsd: number;
    stockIndex: string;
    stockValue: string;
    stockTrend: 'up' | 'down';
  };
  education: {
    literacyRate: string;
    topUniversity: string;
    policyFocus: string;
  };
  technology: {
    rdSpending: string;
    techExports: string;
    focusArea: string;
  };
  tourism: {
    annualVisitors: string;
    revenue: string;
    topDestination: string;
  };
  startupEcosystem: {
    unicorns: number;
    mainHub: string;
    keyIncentive: string;
  };
}

export const countryData: Record<string, CountryData> = {
  IND: {
    id: 'IND',
    numericId: '356',
    name: 'India',
    flag: '🇮🇳',
    description: 'A rapidly growing major economy known for its massive tech sector and demographic dividend.',
    economy: {
      gdp: '$3.73 Trillion',
      currencyName: 'Indian Rupee',
      currencySymbol: '₹',
      rateVsUsd: 83.45,
      stockIndex: 'NIFTY 50',
      stockValue: '22,450.20',
      stockTrend: 'up',
    },
    education: {
      literacyRate: '77.7%',
      topUniversity: 'IIT Bombay',
      policyFocus: 'New Education Policy (NEP) 2020',
    },
    technology: {
      rdSpending: '0.7% of GDP',
      techExports: '$180 Billion',
      focusArea: 'Software Services & Space Tech',
    },
    tourism: {
      annualVisitors: '10.9 Million',
      revenue: '$30 Billion',
      topDestination: 'Taj Mahal, Agra',
    },
    startupEcosystem: {
      unicorns: 111,
      mainHub: 'Bengaluru',
      keyIncentive: 'Startup India Tax Holiday',
    },
  },
  USA: {
    id: 'USA',
    numericId: '840',
    name: 'United States',
    alternateNames: ['United States of America', 'USA'],
    flag: '🇺🇸',
    description: 'The world\'s largest economy, a global hub for innovation, technology, and finance.',
    economy: {
      gdp: '$27.36 Trillion',
      currencyName: 'US Dollar',
      currencySymbol: '$',
      rateVsUsd: 1.00,
      stockIndex: 'S&P 500',
      stockValue: '5,123.40',
      stockTrend: 'up',
    },
    education: {
      literacyRate: '99%',
      topUniversity: 'MIT / Harvard',
      policyFocus: 'STEM Education Grants',
    },
    technology: {
      rdSpending: '3.4% of GDP',
      techExports: '$200 Billion',
      focusArea: 'AI, Semiconductors & Biotech',
    },
    tourism: {
      annualVisitors: '79 Million',
      revenue: '$210 Billion',
      topDestination: 'New York City',
    },
    startupEcosystem: {
      unicorns: 650,
      mainHub: 'Silicon Valley',
      keyIncentive: 'Section 1202 Stock Exclusion',
    },
  },
  JPN: {
    id: 'JPN',
    numericId: '392',
    name: 'Japan',
    flag: '🇯🇵',
    description: 'A leading tech hub known for precision engineering, robotics, and a unique cultural heritage.',
    economy: {
      gdp: '$4.21 Trillion',
      currencyName: 'Japanese Yen',
      currencySymbol: '¥',
      rateVsUsd: 154.20,
      stockIndex: 'Nikkei 225',
      stockValue: '38,210.50',
      stockTrend: 'down',
    },
    education: {
      literacyRate: '99%',
      topUniversity: 'University of Tokyo',
      policyFocus: 'Super Global University Project',
    },
    technology: {
      rdSpending: '3.3% of GDP',
      techExports: '$150 Billion',
      focusArea: 'Robotics & Advanced Materials',
    },
    tourism: {
      annualVisitors: '31 Million',
      revenue: '$45 Billion',
      topDestination: 'Kyoto / Tokyo',
    },
    startupEcosystem: {
      unicorns: 11,
      mainHub: 'Tokyo',
      keyIncentive: 'J-Startup Global Support',
    },
  },
  DEU: {
    id: 'DEU',
    numericId: '276',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'The economic powerhouse of Europe, renowned for its engineering excellence and manufacturing.',
    economy: {
      gdp: '$4.45 Trillion',
      currencyName: 'Euro',
      currencySymbol: '€',
      rateVsUsd: 0.93,
      stockIndex: 'DAX 40',
      stockValue: '18,150.80',
      stockTrend: 'up',
    },
    education: {
      literacyRate: '99%',
      topUniversity: 'TU Munich',
      policyFocus: 'Excellence Strategy',
    },
    technology: {
      rdSpending: '3.1% of GDP',
      techExports: '$190 Billion',
      focusArea: 'Automotive & Industrial IoT',
    },
    tourism: {
      annualVisitors: '39 Million',
      revenue: '$40 Billion',
      topDestination: 'Berlin / Bavarian Alps',
    },
    startupEcosystem: {
      unicorns: 30,
      mainHub: 'Berlin',
      keyIncentive: 'EXIST Scholarship',
    },
  },
  BRA: {
    id: 'BRA',
    numericId: '076',
    name: 'Brazil',
    flag: '🇧🇷',
    description: 'The largest economy in Latin America, with rich natural resources and a vibrant fintech scene.',
    economy: {
      gdp: '$2.13 Trillion',
      currencyName: 'Brazilian Real',
      currencySymbol: 'R$',
      rateVsUsd: 5.15,
      stockIndex: 'IBOVESPA',
      stockValue: '128,450.00',
      stockTrend: 'down',
    },
    education: {
      literacyRate: '94.3%',
      topUniversity: 'University of São Paulo',
      policyFocus: 'Science Without Borders',
    },
    technology: {
      rdSpending: '1.2% of GDP',
      techExports: '$15 Billion',
      focusArea: 'AgroTech & FinTech',
    },
    tourism: {
      annualVisitors: '6.6 Million',
      revenue: '$6 Billion',
      topDestination: 'Rio de Janeiro',
    },
    startupEcosystem: {
      unicorns: 22,
      mainHub: 'São Paulo',
      keyIncentive: 'Legal Framework for Startups',
    },
  },
  GBR: {
    id: 'GBR',
    numericId: '826',
    name: 'United Kingdom',
    alternateNames: ['UK', 'Great Britain'],
    flag: '🇬🇧',
    description: 'A global financial hub with a strong focus on services, technology, and creative industries.',
    economy: {
      gdp: '$3.34 Trillion',
      currencyName: 'British Pound',
      currencySymbol: '£',
      rateVsUsd: 0.80,
      stockIndex: 'FTSE 100',
      stockValue: '8,200.50',
      stockTrend: 'up',
    },
    education: {
      literacyRate: '99%',
      topUniversity: 'Oxford / Cambridge',
      policyFocus: 'Lifelong Learning Entitlement',
    },
    technology: {
      rdSpending: '2.4% of GDP',
      techExports: '$85 Billion',
      focusArea: 'FinTech & Life Sciences',
    },
    tourism: {
      annualVisitors: '38 Million',
      revenue: '$35 Billion',
      topDestination: 'London / Edinburgh',
    },
    startupEcosystem: {
      unicorns: 50,
      mainHub: 'London',
      keyIncentive: 'SEIS/EIS Tax Relief',
    },
  },
  FRA: {
    id: 'FRA',
    numericId: '250',
    name: 'France',
    flag: '🇫🇷',
    description: 'A major European economy known for luxury goods, aerospace, and a thriving startup ecosystem.',
    economy: {
      gdp: '$3.03 Trillion',
      currencyName: 'Euro',
      currencySymbol: '€',
      rateVsUsd: 0.93,
      stockIndex: 'CAC 40',
      stockValue: '8,100.20',
      stockTrend: 'up',
    },
    education: {
      literacyRate: '99%',
      topUniversity: 'Sorbonne / PSL',
      policyFocus: 'Plan Étudiants',
    },
    technology: {
      rdSpending: '2.2% of GDP',
      techExports: '$75 Billion',
      focusArea: 'Aerospace & Luxury Tech',
    },
    tourism: {
      annualVisitors: '89 Million',
      revenue: '$65 Billion',
      topDestination: 'Paris / French Riviera',
    },
    startupEcosystem: {
      unicorns: 27,
      mainHub: 'Paris (Station F)',
      keyIncentive: 'French Tech Visa',
    },
  },
  CHN: {
    id: 'CHN',
    numericId: '156',
    name: 'China',
    flag: '🇨🇳',
    description: 'The world\'s second-largest economy, a global leader in manufacturing and digital innovation.',
    economy: {
      gdp: '$18.53 Trillion',
      currencyName: 'Chinese Yuan',
      currencySymbol: '¥',
      rateVsUsd: 7.24,
      stockIndex: 'Shanghai Composite',
      stockValue: '3,100.45',
      stockTrend: 'down',
    },
    education: {
      literacyRate: '96.8%',
      topUniversity: 'Tsinghua / Peking',
      policyFocus: 'Double First Class Plan',
    },
    technology: {
      rdSpending: '2.5% of GDP',
      techExports: '$900 Billion',
      focusArea: '5G, EV & AI',
    },
    tourism: {
      annualVisitors: '65 Million',
      revenue: '$120 Billion',
      topDestination: 'Great Wall / Shanghai',
    },
    startupEcosystem: {
      unicorns: 170,
      mainHub: 'Beijing / Shenzhen',
      keyIncentive: 'High-Tech Enterprise Tax Break',
    },
  },
  AUS: {
    id: 'AUS',
    numericId: '036',
    name: 'Australia',
    flag: '🇦🇺',
    description: 'A stable, resource-rich economy with a growing focus on fintech and renewable energy.',
    economy: {
      gdp: '$1.72 Trillion',
      currencyName: 'Australian Dollar',
      currencySymbol: 'A$',
      rateVsUsd: 1.52,
      stockIndex: 'S&P/ASX 200',
      stockValue: '7,700.80',
      stockTrend: 'up',
    },
    education: {
      literacyRate: '99%',
      topUniversity: 'University of Melbourne',
      policyFocus: 'National Collaborative Research',
    },
    technology: {
      rdSpending: '1.8% of GDP',
      techExports: '$10 Billion',
      focusArea: 'Mining Tech & Green Energy',
    },
    tourism: {
      annualVisitors: '9.4 Million',
      revenue: '$45 Billion',
      topDestination: 'Great Barrier Reef / Sydney',
    },
    startupEcosystem: {
      unicorns: 9,
      mainHub: 'Sydney / Melbourne',
      keyIncentive: 'R&D Tax Incentive',
    },
  },
  CAN: {
    id: 'CAN',
    numericId: '124',
    name: 'Canada',
    flag: '🇨🇦',
    description: 'A diverse economy with strong ties to the US, known for its natural resources and tech hubs.',
    economy: {
      gdp: '$2.14 Trillion',
      currencyName: 'Canadian Dollar',
      currencySymbol: 'C$',
      rateVsUsd: 1.37,
      stockIndex: 'S&P/TSX Composite',
      stockValue: '22,100.50',
      stockTrend: 'down',
    },
    education: {
      literacyRate: '99%',
      topUniversity: 'University of Toronto',
      policyFocus: 'Post-Graduation Work Permit',
    },
    technology: {
      rdSpending: '1.6% of GDP',
      techExports: '$40 Billion',
      focusArea: 'AI & Clean Tech',
    },
    tourism: {
      annualVisitors: '22 Million',
      revenue: '$20 Billion',
      topDestination: 'Niagara Falls / Banff',
    },
    startupEcosystem: {
      unicorns: 20,
      mainHub: 'Toronto / Vancouver',
      keyIncentive: 'Scientific Research (SR&ED)',
    },
  },
};
