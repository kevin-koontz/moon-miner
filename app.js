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
    drawPickaxeBonus()
    drawClickUpgradeBonus()
    drawPickaxePurchased()
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
    drawLaserDrillBonus()
    drawClickUpgradeBonus()
    drawLaserDrillPurchased()
    drawResource()
    startAutoMining()
  }
  else {
    // Hello MICK (or possibly Jake/Jeremy), it was roughly here when everything began to click for me. Had to flex with the `${laserDrill.price}` so you will gain more confidence in me! 😁 Unfortunately, I did not have time to refactor everything. Love, Kevin 😉
    alert(`Not enough resources for: 🔫! Requires 💎: ${laserDrill.price}`)
  }
}

function buyRover() {
  let rover = automaticUpgrades.find(item => item.name === 'rover')

  if (resource >= rover.price) {
    rover.quantity++
    resource -= rover.price
    console.log('Rover purchased!');
    console.log('Total ⛏️: +', rover.quantity);
    // console.log('Total 💎: ', resource);
    drawRoverBonus()
    drawAutoUpgradeBonus()
    drawRoverPurchased()
    drawResource()
    startAutoMining()
  }
  else {
    alert(`Not enough resources for: ⛏️! Requires 💎: ${rover.price}`)
  }
}

function buyOrbitalLaser() {
  let orbitalLaser = automaticUpgrades.find(item => item.name === 'orbitalLaser')

  if (resource >= orbitalLaser.price) {
    orbitalLaser.quantity++
    resource -= orbitalLaser.price
    console.log('Orbital Laser purchased!');
    console.log('Total ⛏️: +', orbitalLaser.quantity);
    // console.log('Total 💎: ', resource);
    drawOrbitalLaserBonus()
    drawAutoUpgradeBonus()
    drawOrbitalLaserPurchased()
    drawResource()
  }
  else {
    alert(`Not enough resources for: ⛏️! Requires 💎: ${orbitalLaser.price}`)
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
function calculatePickaxePurchased() {
  let pickaxe = clickUpgrades.find((item) => item.name === 'pickaxe')

  let pickaxePurchased = 0
  if (pickaxe.quantity >= 1) {
    pickaxePurchased = pickaxe.quantity
    console.log('Pickaxe: +', pickaxePurchased, '💎 per click!');
  }
  return pickaxePurchased
}

function calculateLaserDrillBonus() {
  let laserDrill = clickUpgrades.find((item) => item.name === 'laserDrill')

  let laserDrillBonus = 0
  if (laserDrill.bonus >= 5) {
    laserDrillBonus = (laserDrill.quantity * laserDrill.bonus)
    console.log('LaserDrill: +', laserDrillBonus, '💎 per click!');
  }
  return laserDrillBonus
}

function calculateLaserDrillPurchased() {
  let laserDrill = clickUpgrades.find((item) => item.name === 'laserDrill')

  let laserDrillPurchased = 0
  if (laserDrill.quantity >= 1) {
    laserDrillPurchased = laserDrill.quantity
    console.log(laserDrillPurchased);
  }
  return laserDrillPurchased
}

function calculateRoverBonus() {
  let rover = automaticUpgrades.find((item) => item.name === 'rover')

  let roverBonus = 0
  if (rover.bonus >= 1) {
    roverBonus = (rover.quantity * rover.bonus)
    console.log('Rover: +', roverBonus, '💎 per click!');
  }
  return roverBonus
}
function calculateRoverPurchased() {
  let rover = automaticUpgrades.find((item) => item.name === 'rover')

  let roverPurchased = 0
  if (rover.quantity >= 1) {
    roverPurchased = rover.quantity
    console.log('Rover: +', roverPurchased, '💎 per click!');
  }
  return roverPurchased
}

function calculateOrbitalLaserBonus() {
  let orbitalLaser = automaticUpgrades.find((item) => item.name === 'orbitalLaser')

  let orbitalLaserBonus = 0
  if (orbitalLaser.bonus >= 1) {
    orbitalLaserBonus = (orbitalLaser.quantity * orbitalLaser.bonus)
    console.log('orbitalLaser: +', orbitalLaserBonus, '💎 per click!');
  }
  return orbitalLaserBonus
}
function calculateOrbitalLaserPurchased() {
  let orbitalLaser = automaticUpgrades.find((item) => item.name === 'orbitalLaser')

  let orbitalLaserPurchased = 0
  if (orbitalLaser.quantity >= 1) {
    orbitalLaserPurchased = orbitalLaser.quantity
    console.log('orbitalLaser: +', orbitalLaserPurchased, '💎 per click!');
  }
  return orbitalLaserPurchased
}

//Just realized I could have done all these bonus calculations in fewer functions. I do see the light, it's so BRIGHT! Time is against me for this brief moment. 💖 Kevin
function calculateTotalClickUpgradeBonus() {
  let totalClickUpgradeBonus = calculatePickaxeBonus() + calculateLaserDrillBonus()
  console.log('Total Click Upgrade Bonus: +', totalClickUpgradeBonus, '💎 per click!');
  return totalClickUpgradeBonus
}

function calculateAutoUpgradeBonus() {
  let autoUpgradeBonus = calculateRoverBonus() + calculateOrbitalLaserBonus()
  console.log('Total Auto Upgrade Bonus: +', autoUpgradeBonus, '💎 per click!');
  return autoUpgradeBonus
}

function drawPickaxeBonus() {
  let drawTotalPickaxeBonus = calculatePickaxeBonus()

  let totalPickaxeElm = document.getElementById('pickaxeBonus')
  totalPickaxeElm.innerText = drawTotalPickaxeBonus.toString()

}

function drawLaserDrillBonus() {
  let drawTotalLaserDrillBonus = calculateLaserDrillBonus()

  let totalDrawElm = document.getElementById('laserDrillBonus')
  totalDrawElm.innerText = drawTotalLaserDrillBonus.toString()

}

function drawRoverBonus() {
  let drawTotalRoverBonus = calculateRoverBonus()

  let totalRoverElm = document.getElementById('roverBonus')
  totalRoverElm.innerText = drawTotalRoverBonus.toString()

}

function drawOrbitalLaserBonus() {
  let drawTotalOrbitalLaserBonus = calculateOrbitalLaserBonus()

  let totalDrawElm = document.getElementById('orbitalLaserBonus')
  totalDrawElm.innerText = drawTotalOrbitalLaserBonus.toString()

}

function drawClickUpgradeBonus() {
  let drawTotalClickUpgradeBonus = 1 + calculateTotalClickUpgradeBonus()

  let totalDrawElm = document.getElementById('clickUpgrades')
  totalDrawElm.innerText = drawTotalClickUpgradeBonus.toString()

}

function drawAutoUpgradeBonus() {
  let drawTotalAutoUpgradeBonus = calculateAutoUpgradeBonus()

  let autoDrawElm = document.getElementById('autoUpgrades')
  autoDrawElm.innerText = drawTotalAutoUpgradeBonus.toString()

}

function drawLaserDrillPurchased() {
  let drawLaserDrillPurchased = calculateLaserDrillPurchased()

  let drillPurchasedElm = document.getElementById('laserDrillPurchased')
  drillPurchasedElm.innerText = drawLaserDrillPurchased.toString()

}
function drawPickaxePurchased() {
  let drawPickaxePurchased = calculatePickaxePurchased()

  let purchasedPickaxeElm = document.getElementById('pickaxePurchased')
  purchasedPickaxeElm.innerText = drawPickaxePurchased.toString()

}

function drawRoverPurchased() {
  let drawRoverPurchased = calculateRoverPurchased()

  let roverPurchasedElm = document.getElementById('roverPurchased')
  roverPurchasedElm.innerText = drawRoverPurchased.toString()

}
function drawOrbitalLaserPurchased() {
  let drawOrbitalLaserPurchased = calculateOrbitalLaserPurchased()

  let purchasedOrbitalLaserElm = document.getElementById('orbitalLaserPurchased')
  purchasedOrbitalLaserElm.innerText = drawOrbitalLaserPurchased.toString()

}

function startAutoMining() {
  setInterval(function () {
    resource += calculateAutoUpgradeBonus();
    console.log('Auto mining: +', calculateAutoUpgradeBonus(), '💎 every 3 seconds!');
    drawResource();
  }, 3000);
}



function drawResource() {
  let totalElm = document.getElementById('resource')
  totalElm.innerText = resource.toString()
}





