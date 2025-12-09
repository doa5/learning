export class Car {
  brand
  model
  speed = 0
  isTrunkOpen = false

  constructor(carDetails) {
    this.brand = carDetails.brand
    this.model = carDetails.model
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h Trunk open: ${this.isTrunkOpen}`)
  }

  go() {
    if (this.isTrunkOpen) {
      console.log('Cant drive while trunk is open')
    } else {
      this.speed +=5
      this.checkSpeed(this.speed)
    }
    
  }

  brake() {
    this.speed-=5
    this.checkSpeed(this.speed)
  }

  checkSpeed(speed) {
    if (speed >= 200) {
      this.speed = 200
    } 
    
    if (speed <= 0) {
      this.speed = 0
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true
    } else {
      console.log('Car cannot be in motion when opening trunk')
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false
  }
}

export class RaceCar extends Car {
  acceleration = 0

  constructor(carDetails) {
    super(carDetails)
    this.acceleration = carDetails.acceleration
  }

  go() {
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
}

