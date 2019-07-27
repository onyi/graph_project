// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, p) {
  
  let g = {};
  let seen = {};

  console.log(`p: ${JSON.stringify(p)}`);

  p.forEach(ele => seen[ele[0]+""] ? seen[ele[0]+""].push(ele[1]) : seen[ele[0]+""] = [ele[1]] )


  console.log(`Element seen: ${JSON.stringify(seen)}`);

  for(let i = 1; i <= numCourses; i++){
    console.log(`i: ${i}`)
    let start = i;
    let stack = seen[i+""] || [];
    stack = stack.slice();
    let visited = {};
    console.log(`Seen: ${seen[i]}`)
    console.log(`Stack: ${stack}`);
    while(stack.length !== 0){
      let prereq = stack.pop();
      console.log(`seen[start+""]: ${seen[start + ""]};`);

      if (!seen[start+""].includes(prereq)) seen[start+""].push(prereq);
      // break;
      if (prereq === start) { return false; }
      console.log(`Prereq: ${prereq};`);

      visited[prereq+""] = true;
      let tmp = seen[prereq + ""] || []
      tmp.forEach( el => {
        console.log(`el: ${el}; visited: ${visited[el]}`);
        if(!visited[el+""]) {
          visited[el+""] = true;
          stack.push(el)
          console.log(`Stack: ${stack}`);
        }
      })
    }
  }
  return true;

}


let arr1 = [ [2,1], [3,2], [4,3], [2,4]]
let res = canFinish(4, arr1);

// let arr2 = [ [1,0] ]
// let res = canFinish(2, arr2);

console.log(`Result: ${res}`);