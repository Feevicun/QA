function checkProbabilityTheory(count) {
  if (typeof count !== 'number' || count <= 0 || !Number.isInteger(count)) {
    console.log('Error: count має бути додатнім цілим числом');
    return;
  }

  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    const randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; 
    if (randomNum % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  const evenPercentage = ((evenCount / count) * 100).toFixed(2);
  const oddPercentage = ((oddCount / count) * 100).toFixed(2);

  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${evenCount}`);
  console.log(`Непарних чисел: ${oddCount}`);
  console.log(`Відсоток парних: ${evenPercentage}%`);
  console.log(`Відсоток непарних: ${oddPercentage}%`);
}

checkProbabilityTheory(1000);
