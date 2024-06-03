// Input  = "Hello World"   -> OP --> "World Hello";

// split the element on the space store the splitted element in the array 

// ["Hello", "World"]

// take a new stack and we will copy each and every element 

// [hello , world]  --> world + " " + hello --> "World hello"

function reverse(s) {
    const splits = s.split(" ");
    const stack = [];

    for(i of splits){
        stack.push(i)
    }

    let answer  = "";

    while(stack.length>0){
        const current = stack.pop();   // we will get the last element here 
        if(current){
            answer +=" "+current;
        }
    }
    return answer;
}

console.log(reverse("Hello World"));