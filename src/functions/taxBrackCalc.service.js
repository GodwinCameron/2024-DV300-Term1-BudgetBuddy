// Tax Brackets for 2024 from https://onlinetax.sagesouthafrica.co.za/Mobi/Home/TaxTables
  // 0 – 237,100	18% of taxable income
  // 237,101 – 370,500	42,678 + 26% of taxable income above 237,100
  // 370,501 – 512,800	77,362 + 31% of taxable income above 370,500
  // 512,801 – 673,000	121,475 + 36% of taxable income above 512,800
  // 673,001 – 857,900	179,147 + 39% of taxable income above 673,000
  // 857,901 – 1,817,000	251,258 + 41% of taxable income above 857,900
  // 1,817,001 and above	644,489 + 45% of taxable income above 1,817,000

export default function findTaxAmountAndPercentage (tax) {
    const taxedAmount = { percent: 0, amount: 0 };
    if (tax) {
      if (tax.salary <= 237100) {
        taxedAmount.percent = 0.18;
        taxedAmount.amount = 0;
      } else if (tax.salary <= 370500) {
        taxedAmount.percent = 0.26;
        taxedAmount.amount = 42678;
      } else if (tax.salary <= 512800) {
        taxedAmount.percent = 0.31;
        taxedAmount.amount = 77362;
      } else if (tax.salary <= 673000) {
        taxedAmount.percent = 0.36;
        taxedAmount.amount = 121475;
      } else if (tax.salary <= 857900) {
        taxedAmount.percent = 0.39;
        taxedAmount.amount = 179147;
      } else if (tax.salary <= 1817000) {
        taxedAmount.percent = 0.41;
        taxedAmount.amount = 251258;
      } else {
        taxedAmount.percent = 0.45;
        taxedAmount.amount = 644489;
      }

      // const finalAmountTaxed = tax.salary * taxedAmount.percent + taxedAmount.amount;

      return {
        percent: taxedAmount.percent,
        amount: taxedAmount.amount,
        finalAmountTaxed: tax.salary * taxedAmount.percent + taxedAmount.amount,
      };
    } else {
      console.log("No data");
    }
  };

