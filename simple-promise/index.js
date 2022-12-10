const sub = async () => {
  return 20;
};

const main1 = async () => {
  sub().then((result) => {
    console.log('result->', result);
  });
};

//
const main2 = async () => {
  const result = await sub();
  console.log('result->', result);
};

const main3 = async () => {
  const result = await sub();
  return result;
};

main1(); // 出力：20
main2(); // 出力：20
console.log(main3()); // 出力：Promise{<pending>}
