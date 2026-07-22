enum TColors {
  Red = "red",
  Green = "green",
  Yellow = "yellow",
}

type TeeShirt = {
  size: number;
  color: TColors;
};

const t1: TeeShirt = {
  size: 42,
  color: TColors.Red,
};

const t2: TeeShirt = {
  size: 39,
  color: TColors.Yellow,
};

const t3: TeeShirt = {
  size: 40,
  color: TColors.Green,
};

console.log(t1);
console.log(t3);
