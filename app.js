console.log('Time to mine resources');


let resource = 0


let activeUpgrades = [
  {
    name: 'pickaxe',
    price: 100,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'laser',
    price: 200,
    quantity: 0,
    bonus: 2
  }
];

let passiveUpgrades = [
  {
    name: 'rover',
    price: 600,
    quantity: 0,
    bonus: 20
  }
];

// draw locations
const totalResourcesElm = document.getElementById('resource')
const pickaxeCountElm = document.getElementById('pickaxeCount')
const activeUpgradeCountElm = document.getElementById('activeUpgradeCount')



//fn runs onclick moon image, player resources increase +1 per click
function activeResource() {
  let totalActiveResource = resource += 10
  console.log('activeResource collected: ', totalActiveResource)

  let activeResourceElm = document.getElementById('resource')
  activeResourceElm.innerText = totalActiveResource.toString()

  return totalActiveResource
}
// console.log(activeResource());

//fn calculate total resources, update on game console playerStats
function drawTotalResources() {
  let totalResources = activeResource() + passiveResource()
  totalResourcesElm.innerText = totalResources.toString()
  console.log(totalResources);
}

//fn find pickaxe data from array, check if player has 100 resources then reduce resources by price in array, increase quantity +1, else alert player not enough resources
function buyPickaxe() {
  let pickaxe = activeUpgrades.find(item => item.name === 'pickaxe')

  if (resource >= pickaxe.price) {
    console.log('Pickaxe purchased!');

    resource -= pickaxe.price
    // console.log(resource);
    pickaxe.quantity += 1
    // console.log(pickaxe.quantity);

    activeUpgradeCountElm.innerText = pickaxe.quantity.toString()
    pickaxeCountElm.innerText = pickaxe.quantity.toString()
    totalResourcesElm.innerText = resource.toString()
  }
  else {
    alert('Not enough resources! Requires 💎 100')
  }
}


function passiveResource() {
  let totalPassiveResource = resource += (1 + (10 * 1))
  console.log('passiveResource collected: ', totalPassiveResource);

  let passiveResourceElm = document.getElementById('passiveUpgradeCount')
  passiveResourceElm.innerText = totalPassiveResource.toString()

  return totalPassiveResource
}





// setInterval(passiveResource, 3000);