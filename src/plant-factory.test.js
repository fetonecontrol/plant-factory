const { TestScheduler } = require("jest");

describe('stateChange', () => {
  test('should return state', () => {
    let template = {soil: 0, water: 0, light: 0};

    const storeState = () => {
      let currentState = {};
      return (stateChangeFunction = state => state) => {
        const newState = stateChangeFunction(currentState);
        currentState = {...newState};
        return newState;
      }
    }
    
    const changeState = (prop) => {
      return (value) => {
        return (state) => ({
          ...state,
          [prop] : (state[prop] || 0) + value
        })
      }
    }
    const monstera = storeState();
    const fern = storeState();

    const blueFood = changeState("soil")(5);
    const whiteFood = changeState("soil")(300);
    const fertilizer = changeState("height")("100 feet");

    const monsteraFed = monstera(blueFood);
    //const blueFood = changeState("soil")(5);
      //const stateControl = storeState();
      // const storeState = () => {
      //   let currentState = {};
      //   return (stateChangeFunction = state => state) => {
      //     const newState = stateChangeFunction(currentState);
      //     currentState = {...newState};
      //     return newState;
      //   }
      // }
    const fatMonstera = monstera(blueFood);
    const superFatMonstera = monstera(whiteFood);
    const reallyFatMonstera = monstera(whiteFood);
    const reallyTallMonstera = monstera(fertilizer);

    const arrogance = changeState("arrogance")(5);
    const shyness = changeState("shyness")(10);
    const arrogantFern = fern(arrogance);
    const shyFern = fern(shyness);


    console.log(monstera.soil + "monstera");
    console.log(fatMonstera.soil + "fatMonstera");
    console.log(superFatMonstera.soil + "superFatMonstera");
    console.log(reallyFatMonstera.soil + "reallyFatMonstera");
    console.log(reallyTallMonstera.height + "reallyTallMonstera");
    console.log(arrogantFern.arrogance + "arrogantFern.arrogance");
    console.log(shyFern.arrogance + "arrogantFern.arrogance");
    console.log(shyFern.shyness + "arrogantFern.shyness");

    expect(monstera.soil).toEqual(1);
    expect(fatMonstera.soil).toEqual(1);
    expect(reallyFatMonstera).toEqual(1);

    
  });
});

  // describe('UserInfo', () => {
  //   test('Should fail if ths.age !== 29', () => {
  //     let newUser = new UserInfo(29, 1, 75);
  //     expect(newUser.age).toEqual(29);
  //     expect(newUser.planetChoice).toEqual(1);
  //     expect(newUser.lifeExp).toEqual(75);
  //   });
  // });
  