export const statement = (invoice, plays) => {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
  
    for (let perf of invoice.performances) {  
      // add volume credits
      volumeCredits += volumnCreditFor(perf);
  
      // print line for this order
      result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
      totalAmount += amountFor(perf);
    }
    result += `Amount owed is ${usd(totalAmount)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;

    function volumnCreditFor(perf) {
      let volumnCredits = 0;
      volumnCredits += Math.max(perf.audience - 30, 0);
      if ("comedy" === playFor(perf).type) volumnCredits += Math.floor(perf.audience / 5);
      return volumnCredits;
    }

    function playFor(perf) {
      return plays[perf.playID];
    }
    
    function amountFor(perf) {
      let result = 0;
      switch (playFor(perf).type) {
        case "tragedy":
          result = 40000;
          if (perf.audience > 30) {
            result += 1000 * (perf.audience - 30);
          }
          break;
        case "comedy":
          result = 30000;
          if (perf.audience > 20) {
            result += 10000 + 500 * (perf.audience - 20);
          }
          result += 300 * perf.audience;
          break;
        default:
          throw new Error(`unknown type: ${play.type}`);
      }
      return result;
    }
  }

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD",
    minimumFractionDigits: 2
  }).format(aNumber/100);
}

