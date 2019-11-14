function printAllPairs(n)    {
    for(let i  = 0; i <= n; i++)   {
        for(let j = 0; j <= 0; j++)   {
            console.log(`${i},${j}`);
        }
    }
}

let t1 = performance.now();
printAllPairs(10);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);