export default function ship(length) {
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hits++;
    setSunk();
  };

  const setSunk = () => {
    if (hits >= length) {
      sunk = true;
    }
  };

  return {
    hit,
    setSunk,
    get sunk() {
      return sunk;
    },
    get length(){
      return length;
    }
  };
}
