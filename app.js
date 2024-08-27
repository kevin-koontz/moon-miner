console.log('Time to mine resources!');

let resource = 0

let clickUpgrades = [
  {
    name: 'pickaxe',
    price: 50,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'laserDrill',
    price: 250,
    quantity: 0,
    bonus: 5
  }
];

let automaticUpgrades = [
  {
    name: 'rover',
    price: 1000,
    quantity: 0,
    bonus: 10
  },
  {
    name: 'orbitalLaser',
    price: 50000,
    quantity: 0,
    bonus: 100
  }
];


function mine() {
  resource += 1 + calculateTotalClickUpgradeBonus()
  console.log('Base: +1 💎 per click!');
  drawResource()
}

function buyPickaxe() {
  let pickaxe = clickUpgrades.find(item => item.name === 'pickaxe')

  if (resource >= pickaxe.price) {
    pickaxe.quantity++
    resource -= pickaxe.price
    console.log('Pickaxe purchased!');
    console.log('Total ⛏️: +', pickaxe.quantity);
    // console.log('Total 💎: ', resource);
    drawClickUpgradeBonus()
    drawResource()
  }
  else {
    alert(`Not enough resources for: ⛏️! Requires 💎: ${pickaxe.price}`)
  }
}

function buyLaserDrill() {
  let laserDrill = clickUpgrades.find(item => item.name === 'laserDrill')

  if (resource >= laserDrill.price) {
    laserDrill.quantity++
    resource -= laserDrill.price
    console.log('LaserDrill purchased!');
    console.log('Total 🔫: +', laserDrill.quantity);
    // console.log('Total 💎: ', resource);
    drawPickaxeBonus()
    drawClickUpgradeBonus()
    drawResource()
  }
  else {
    // Hello MICK (or possibly Jake/Jeremy), it was roughly here when everything began to click for me. Had to flex with the `${laserDrill.price}` so you will gain more confidence in me however I did not have time to refactor everything. Love, Kevin 😉
    alert(`Not enough resources for: 🔫! Requires 💎: ${laserDrill.price}`)
  }
}

function calculatePickaxeBonus() {
  let pickaxe = clickUpgrades.find((item) => item.name === 'pickaxe')

  let pickaxeBonus = 0
  if (pickaxe.bonus >= 1) {
    pickaxeBonus = (pickaxe.quantity * pickaxe.bonus)
    console.log('Pickaxe: +', pickaxeBonus, '💎 per click!');
  }
  return pickaxeBonus
}

function calculateLaserDrillBonus() {
  let laserDrill = clickUpgrades.find((item) => item.name === 'laserDrill')

  let laserDrillBonus = 0
  if (laserDrill.bonus >= 5) {
    laserDrillBonus = (laserDrill.quantity * laserDrill.bonus)
    console.log('LaserDrill: +', laserDrillBonus, '💎 per click!');
  }
  else {
    laserDrillBonus = 0
  }
  return laserDrillBonus
}

//Just realized I could have done all these bonus calculations in fewer functions. I swear, I do see the light! Time is against me for this brief moment. 💖 Kevin
function calculateTotalClickUpgradeBonus() {
  let totalClickUpgradeBonus = calculatePickaxeBonus() + calculateLaserDrillBonus()
  console.log('Total Click Upgrade Bonus: +', totalClickUpgradeBonus, '💎 per click!');
  return totalClickUpgradeBonus
}

function drawPickaxeBonus() {
  let drawTotalPickaxeBonus = calculatePickaxeBonus()

  let totalPickaxeElm = document.getElementById('pickaxeUpgrades')
  totalPickaxeElm.innerText = drawTotalPickaxeBonus.toString()

}

function drawClickUpgradeBonus() {
  let drawTotalClickUpgradeBonus = calculateTotalClickUpgradeBonus()

  let totalDrawElm = document.getElementById('clickUpgrades')
  totalDrawElm.innerText = drawTotalClickUpgradeBonus.toString()

}

function drawClickUpgradeBonus() {
  let drawTotalClickUpgradeBonus = 1 + calculateTotalClickUpgradeBonus()

  let totalDrawElm = document.getElementById('clickUpgrades')
  totalDrawElm.innerText = drawTotalClickUpgradeBonus.toString()

}


function drawResource() {
  let totalElm = document.getElementById('resource')
  totalElm.innerText = resource.toString()
}





