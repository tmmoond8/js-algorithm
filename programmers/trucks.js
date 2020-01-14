function solution(bridge_length, weight, truck_weights) {
  function Truck(weight) {
    this.position = 0;
    this.weight = weight;
    this.steping = function() { return ++this.position }
  }

  function Bridge(length, weight) {
    this.ing = [];

    this.isAccepable = (truck) => weight >= this.ing.reduce(
      (accum, truck) => (
        accum += truck.weight, 
        accum
      ), truck.weight
    )

    this.enter = (truck) => this.ing.push(truck);
    this.stepping = () => {
      this.ing.forEach(truck => truck.steping());
      if (this.ing[0].position === length) this.ing.shift();
    }
    this.isEmpty = () => this.ing.length === 0;
  }

  let answer = 1;
  const bridge = new Bridge(bridge_length, weight);
  let nextTruck = new Truck(truck_weights.shift());
  
  while(true) {
    answer++;
    if (bridge.isAccepable(nextTruck)) {
      bridge.enter(nextTruck);
      nextTruck = new Truck(truck_weights.shift());
    }
    
    bridge.stepping();
    if (!nextTruck.weight && bridge.isEmpty()) return answer;
  }
}

console.log(8 === solution(2, 10, [ 7, 4, 5, 6]));