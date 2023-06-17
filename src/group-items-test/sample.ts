export const opportunities = [
  {
    exploresolutionid: "217D2D61-1425-EC11-8115-0050560111DA",
    primarytypename: "Immigration",
    name: "Passive Income Visa (D7)",
    country: "Portugal",
    region: null,
    rules: {
      contact: [
        {
          equator: "and",
          requirements: [
            {
              attribute: "new_dobless1",
              operator: "olderthan-x-years",
              value: "17",
            },
            {
              attribute: "new_hasportugesecitizenship",
              operator: "ne",
              value: "1",
            },
          ],
        },
        {
          equator: "and",
          requirements: [
            {
              attribute: "new_overallworth",
              operator: "gt",
              value: "1000",
            },
          ],
        },
      ],
      dependent: [],
      ancestry: [],
    },
  },
  {
    exploresolutionid: "0570BDA0-F137-EC11-8117-0050560111DA",
    primarytypename: "Immigration",
    name: "British passport",
    country: "Ireland",
    region: null,
    rules: {
      contact: [
        {
          equator: "and",
          requirements: [
            {
              attribute: "new_hasbritishnationality",
              operator: "eq",
              value: "1",
            },
            {
              attribute: "new_hasirishnationality",
              operator: "ne",
              value: "1",
            },
          ],
        },
      ],
      dependent: [],
      ancestry: [],
    },
  },
  {
    exploresolutionid: "1966B63B-0343-EC11-8118-0050560111DA",
    primarytypename: "Immigration",
    name: "British Passport",
    country: "United Kingdom",
    region: null,
    rules: {
      contact: [
        {
          equator: "and",
          requirements: [
            {
              attribute: "new_hasbritishnationality",
              operator: "eq",
              value: "1",
            },
          ],
        },
      ],
      dependent: [],
      ancestry: [],
    },
  },
];

export const response = [
  {
    Destination: "Australia",
    NumberOfDestinations: 4,
    CurrentIncome: "$ 56897",
    AverageSpend: "$ 55899.24",
    TuitionCost: "$ 34614.67",
    ExchangeRate: "1 AUD / 0.53 GBP",
    Remuneration: [
      {
        Expected: "10th percentile",
        Average: "$ 45000.00",
        RatioTolivingCost: 53.53,
      },
      {
        Expected: "Median",
        Average: "$ 59000.00",
        RatioTolivingCost: 70.19,
      },
      {
        Expected: "90th percentile",
        Average: "$ 82000.00",
        RatioTolivingCost: 97.55,
      },
    ],
  },
  {
    Destination: "United Kingdom",
    NumberOfDestinations: 2,
    CurrentIncome: "£ 30000",
    AverageSpend: "£ 18857.83",
    TuitionCost: "£ 16513.50",
    ExchangeRate: "1 GBP / 1.00 GBP",
    Remuneration: [
      {
        Expected: "10th percentile",
        Average: "£ 19000.00",
        RatioTolivingCost: 54.12,
      },
      {
        Expected: "Median",
        Average: "£ 30000.00",
        RatioTolivingCost: 85.46,
      },
      {
        Expected: "90th percentile",
        Average: "£ 49000.00",
        RatioTolivingCost: 139.58,
      },
    ],
  },
];
