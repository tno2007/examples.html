import { group } from "group-items";
import currencyJs = require("currency.js");

import { opportunities } from "./sample";

const getCurrencySymbol = (value) => {
  const re = new RegExp(/^[^\d\s]*/);
  return re.exec(value)[0];
};

const formatAsCurrency = (amount: string) => {
  const symbol = getCurrencySymbol(amount);
  const currency = currencyJs(amount, { symbol: symbol });
  return currency.format();
};

//var a = group(data).by("country").asArrays();
//console.log(a);

// its at this point, we group the items
var grouped = group(opportunities).by("country").asObject();

// console.log(grouped);

const destinations1 = Object.keys(grouped).map((item) => {
  return {
    name: item,
    numberOfDestinations: (grouped as any)[item].length,
  };
});

// console.log(destinations1);

const destinations2 = Object.keys(grouped).map((item) => {
  return {
    name: item,
    numberOfDestinations: (grouped as any)[item].length,
  };
});

// prepare solution summary request
var request = {
  destinations: Object.keys(grouped).map((item) => {
    return {
      name: item,
      numberOfDestinations: (grouped as any)[item].length,
    };
  }),
  vocation: "Accountant",
  budgetProfile: 2,
  currencyCode: "gbp",
  income: "30000",
};

// ******************************

const response = [
  {
    Destination: "Portugal",
    NumberOfDestinations: 1,
    CurrentIncome: "€ 5293",
    AverageSpend: "€ 23501.04",
    TuitionCost: null,
    ExchangeRate: "1 EUR / 0.86 GBP",
    Remuneration: [
      {
        Expected: "10th percentile",
        Average: "€ 20000.00",
        RatioTolivingCost: 85.1,
      },
      {
        Expected: "Median",
        Average: "€ 36000.00",
        RatioTolivingCost: 153.18,
      },
      {
        Expected: "90th percentile",
        Average: "€ 58000.00",
        RatioTolivingCost: 246.8,
      },
    ],
  },
  {
    Destination: "Ireland",
    NumberOfDestinations: 1,
    CurrentIncome: "€ 5293",
    AverageSpend: "€ 45127.10",
    TuitionCost: null,
    ExchangeRate: "1 EUR / 0.86 GBP",
    Remuneration: [
      {
        Expected: "10th percentile",
        Average: "€ 39000.00",
        RatioTolivingCost: 86.42,
      },
      {
        Expected: "Median",
        Average: "€ 59000.00",
        RatioTolivingCost: 130.74,
      },
      {
        Expected: "90th percentile",
        Average: "€ 81000.00",
        RatioTolivingCost: 179.49,
      },
    ],
  },
];

const ammended = response.map((item) => {
  return {
    ...item,
    AverageSpend: formatAsCurrency(item.AverageSpend),
    CurrentIncome: formatAsCurrency(item.CurrentIncome),
    Remuneration: item.Remuneration.map((r) => {
      return {
        ...r,
        Average: formatAsCurrency(r.Average),
      };
    }),
  };
});

console.log(ammended);

const amount = "€ 12000.00";

const formatted = formatAsCurrency(amount);

console.log(formatted);
