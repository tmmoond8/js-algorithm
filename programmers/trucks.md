# 다를 지나는 트럭

[코딩테스트 연습 - 다리를 지나는 트럭 | 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript)

## Solution

---

    function solution(bridge_length, weight, truck_weights) {
      function Truck(weight) {
        this.position = 0;
        this.weight = weight;
        this.steping = function() { return ++this.position }
      }
      
      const ing = [];
      let answer = 1;
      let nextTruck = new Truck(truck_weights.shift());
      while(true) {
        answer++;
        const onGoingWeight = ing.reduce((accum, truck) => (accum += truck.weight, accum), 0);
        if (onGoingWeight + nextTruck.weight <= weight) {
          ing.push(nextTruck);
          nextTruck = new Truck(truck_weights.shift());
        }
        ing.forEach(truck => truck.steping());
        if (ing[0].position === bridge_length) ing.shift();
        if (!nextTruck.weight && ing.length === 0) return answer;
      }
    }

### 그리고 객체 지향으로 리팩토링 한 버전

---

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

### **문제 설명**

---

트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

[Untitled](https://www.notion.so/4869fedc95534ae0aa18bfca66f7ed76)

따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

### 제한 조건

- bridge_length는 1 이상 10,000 이하입니다.
- weight는 1 이상 10,000 이하입니다.
- truck_weights의 길이는 1 이상 10,000 이하입니다.
- 모든 트럭의 무게는 1 이상 weight 이하입니다.

### 입출력 예

[Untitled](https://www.notion.so/a41eb54e2afd4458b7b92b246268c690)