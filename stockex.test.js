const func = require('./stockex.js');

//------------------2.1------------------------
test('Checking empty initialization', () => {
    const result = func.createstocks();
    expect(result.length).toBe(0);
  }
);

test('Checking add functionality', () => {
    const arr = func.createstocks();
    const result = func.addstocks(arr, "Har", 3);
    expect(result["Har"]).toBe(3);
  }
);

//-----------------2.2------------------------
test('Checking if is not empty returns right', () => {
    const arr = func.createstocks();
    const arra = func.addstocks(arr, "Har", 3);
    let result = func.isEmpty(arra);
    expect(result).toBe(true);
  }
);

test('Checking if is empty returns right', () => {
    const arra = func.createstocks();
    let result = func.isEmpty(arra)
    expect(result).toBe(true);
  }
);

//=================2.3==========================
test('Checking unique counter with 3 diff stocks', () => {
    const arr = func.createstocks();
    const arra = func.addstocks(arr, "Har", 3);
    const array = func.addstocks(arra, "Fat", 3);
    const arrayy = func.addstocks(array, "Hum", 3);
    let result = func.uniqueTicker(arrayy);
    expect(result).toBe(3);
  }
);
test('Checking unique counter with 0 diff stocks', () => {
    const arr = func.createstocks();
    let result = func.uniqueTicker(arr);
    expect(result).toBe(0);
  }
);
//===================2.4======================
test('Making a purhcase of stock (add to existing)', () => {
    const arr = func.createstocks();
    const arra = func.addstocks(arr, "Har", 3);
    const result = func.purchaseStock(arra, "Har", 3);
    expect(result["Har"]).toBe(6);
  }
);
//===================2.5======================
test('Selling off existing stock (legal amt))', () => {
    const arr = func.createstocks();
    const arra = func.addstocks(arr, "Har", 3);
    const result = func.sellStock(arra, "Har", 2);
    expect(result["Har"]).toBe(1);
  }
);
test('Selling off existing stock (illegal amt))', () => {
    const arr = func.createstocks();
    const arra = func.addstocks(arr, "Har", 3);
    expect(() => {func.sellStock(arra, "Har", 5);}).toThrow(Error); 
    //Found online that is has to be wrapped in an expect???? worked
    //After I implemtned it tho
  }
); //Just sell off as much as can???
//===================2.6======================
test('Reach for stock amount', () => {
    const arr = func.createstocks();
    const arra = func.addstocks(arr, "Har", 3);
    expect(func.existingStocks(arra, "Har")).toBe(3);
  }
);
//===================2.7======================
test('Remove unowned stock', () => {
    const arr = func.createstocks();
    const arra = func.addstocks(arr, "Har", 3);
    const array = func.sellStock(arra, "Har", 3);
    const arrayy = func.removeUnowned(array);
    expect(Object.keys(arrayy).length).toBe(0);
  }
);