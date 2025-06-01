// Given a list of timestamps and commodity prices, find out highest commodity price at given timestamp.
// timestamps are not necessarily in sorted order, there can be multiple entries for a timestamp as well.
// Followup: after each timestamp, commodity price entry, we are putting a checkpoint,
// given a timestamp and checkpoint find maximum commodity prices till then.

const Store = function () {
  this.store = new Map();

  this.add = (timestamp, price, checkpoint) => {
    if (this.store.has(timestamp)) {
      const prices = this.store.get(timestamp);
      this.store.set(timestamp, [...prices, price]); // I was having issue because I was appending price at the beginning instead of last, so at different checkpoint was returning same Max values
    } else {
      this.store.set(timestamp, [price]);
    }

    if (checkpoint) {
      const prices = this.store.get(timestamp);
      this.store.set(timestamp, [...prices, checkpoint]);
    }
  };

  this.highestPrice = (timestamp, checkpoint) => {
    let prices = this.store.get(timestamp) ?? [];

    if (checkpoint) {
      let checkpointIndex = prices.findIndex((e) => e === checkpoint);
      prices = prices.slice(0, checkpointIndex);
    }

    return this.getMax(prices);
  };

  this.lowestPrice = (timestamp) => {
    const prices = this.store.get(timestamp) ?? [];
    return Math.min(...prices) ?? 0;
  };

  this.getMax = (pricesList) => {
    const prices = pricesList.filter((e) => Number(e));
    return Math.max(...prices) ?? 0;
  };

  this.getStoreValues = () => {
    console.log(this.store);
  };
};

const s = new Store();

s.add(1, 1);
s.add(1, 4);
s.add(1, 2);
s.add(1, 3, "a");
s.add(1, 6);
s.add(1, 7);
s.add(1, 12, "b");

s.getStoreValues();
console.log(s.highestPrice(1, "a"));
console.log(s.highestPrice(1, "b"));
