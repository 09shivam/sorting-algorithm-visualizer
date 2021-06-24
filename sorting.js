function main(){
    let array = [];
    let a = [];
    let auxArr = [] ;
    let narray = document.querySelector("#narray");
    let sortbtn = document.querySelector("#bubblesort");
    let iSortBtn = document.querySelector("#insertionsort");
    let mergeSortBtn = document.querySelector("#mergesort");

    //to display bar and generate array with random numbers
    narray.addEventListener("click",function(){
        
        for(let i=0;i<80;i++){
            array[i]=randomNumberGenerator(10,750);
        }
        
        function randomNumberGenerator(max,min){
            x = Math.round(Math.random() * (max - min) + min);
            return x
        }
        console.log(array);
        
    
         
        let element = document.getElementById("new");
        for(let i =0;i<80;i++){
            let divElement = document.createElement("div");
            divElement.id = "bar" + (i);
            
            divElement.classList.add("mystyle");   
            element.append(divElement);
        }
        for (let i =0;i<80;i++){
            document.getElementById("bar"+i).style.color = "white";
            document.getElementById("bar"+i).style.backgroundColor = "#30336b"
            document.getElementById("bar"+i).style.width = "12px"
            document.getElementById("bar"+i).style.margin = "1px"
            document.getElementById("bar"+i).style.height = Math.round(array[i]*0.6) + "px";
        }

        divArray = document.querySelectorAll(".mystyle");
    
        for(let i =0;i<divArray.length;i++){
            a.push(divArray[i]);
            auxArr.push(divArray);
        }
        
    });

    //bubble sort
    sortbtn.addEventListener("click", async function(){
        console.log(a);
        
        for(let i=1;i<=array.length;i++){
            let flag=0;
            for(let j=0;j<array.length-i;j++){
                if(isSmaller(array,j+1,j)==true){
                    
                    let p = new Promise(function(resolve,reject){
                        setTimeout(resolve, 35);
                    })
                    await p;
                    swap(array,j+1,j,a);
                    
                 }
                 flag++;
            }
            let p1 = new Promise(function(resolve,reject){
                    setTimeout(resolve, 30);
                })
                await p1
                a[flag].style.background="#00CED1";
         }

       async function swap(array, i, j,a) {
            
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            const style1 = window.getComputedStyle(a[j]);
            const style2 = window.getComputedStyle(a[i]);

            const transform1 = style1.getPropertyValue("height");
            const transform2 = style2.getPropertyValue("height");
            a[j].style.height = transform2;
            a[i].style.height = transform1;
            a[j].style.background="red";
            a[i].style.background="red";
            let p = new Promise(function(resolve,reject){
                setTimeout(resolve, 30);
            })
            await p;
            a[j].style.background="#30336b";
            a[j+1].style.background="#30336b";   
         }

          function isSmaller(array, i, j) {
            
            if (array[i] < array[j]) {
              return true;
            } else {
              return false;
            }
          }
    });

    //#### insertion sort ######

    iSortBtn.addEventListener("click",async function(){
        for(let it=1;it<array.length;it++){
            flag = -1;
            for(let i=it;i>=1;i--){
                flag = -1;
                if(isGreater(array,i-1,i)==true){
                    flag++;
                    let p = new Promise(function(resolve,reject){
                        setTimeout(resolve,35 );
                    })
                    await p;
                    swap(array,i-1,i,a);   
                    let p1 = new Promise(function(resolve,reject){
                        setTimeout(resolve, 30);
                    })
                    await p1
                    a[i].style.background="#00CED1";
                    a[i-1].style.background="#00CED1"               
                }
                else{
                    let p1 = new Promise(function(resolve,reject){
                        setTimeout(resolve, 30);
                    })
                    await p1
                    a[i].style.background="#00CED1";
                    //a[i-1].style.background="#00CED1"
                    break;
                    
                }
                
            }
           
            
            
          }


         async function swap(array, i, j,a) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            const style1 = window.getComputedStyle(a[j]);
            const style2 = window.getComputedStyle(a[i]);

            const transform1 = style1.getPropertyValue("height");
            const transform2 = style2.getPropertyValue("height");
            a[j].style.height = transform2;
            a[i].style.height = transform1;
            a[j].style.background="red";
            a[i].style.background="red";
            let p = new Promise(function(resolve,reject){
                setTimeout(resolve, 30);
            })
            await p;
            a[j].style.background="#30336b";
            a[i].style.background="#30336b";   
         }
         function isGreater(array, j, i) {

            if (array[i] < array[j]) {
              return true;
            } else {
              return false;
            }
        }
        
    });

    //###### merge sort #######
    mergeSortBtn.addEventListener("click",  function(){
        
        let sortedArray = mergeSort(array,0,array.length - 1,auxArr);
        
        function timeout(ms) {
            return new Promise(function(resolve,reject) { setTimeout(resolve, ms)});
        }
        async function mergeSort(array, lo, hi, auxArr){
            if(lo == hi){
                let ba = [];
                ba.push(array[lo]);
                return ba;
            }


            let mid = Math.floor((lo+hi)/2);
    
            let left = [];
             left = await mergeSort(array,lo,mid,auxArr);
             await timeout(30);             
            let right = []; 
             right = await mergeSort(array,mid+1,hi,auxArr);
             await timeout(30);
               
            
            
            let merged = await mergeTwoSortedArrays(left,right,auxArr,lo,hi);
            

            return merged;

        }
        async function mergeTwoSortedArrays(left,right,auxArr,lo,hi){
            let i = 0; 
            let j =0; 
            let k = 0;
            let ans = [];
            
            while(i < left.length && j < right.length){
                    console.log("in first while loop"); 
                  if(left[i] <= right[j]){
                  ans[k] = left[i];
                  i++;
                  k++;
                }
                else{
                  ans[k] = right[j];
                  j++;
                  k++;
                }

                let x = lo+k-1;
                let ht = Math.round(ans[k-1]*0.6);
                console.log(ht);
                auxArr[x] = document.getElementById("bar"+x).style.height = ht+ "px";
                await timeout(25);
                document.getElementById("bar"+x).style.backgroundColor =  "red";
                await timeout(25);
                document.getElementById("bar"+x).style.backgroundColor =  "#00CED1"; 
            }
        
            while(i < left.length){
              console.log("in second loop");
              ans[k] = left[i];
              k++;
              i++;
              let x = lo+k-1;
                let ht = Math.round(ans[k-1]*0.6);
                console.log(ht);
                auxArr[x] = document.getElementById("bar"+x).style.height = ht+ "px";
                await timeout(25);
                document.getElementById("bar"+x).style.backgroundColor =  "red";
                await timeout(25);
                document.getElementById("bar"+x).style.backgroundColor =  "#00CED1";
            }
        
            while(j < right.length){
                console.log("in third loop");
              ans[k] = right[j];
              k++;
              j++;
              let x = lo+k-1;
                let ht = Math.round(ans[k-1]*0.6);
                console.log(ht);
                auxArr[x] = document.getElementById("bar"+x).style.height = ht+ "px";
                await timeout(25);
                document.getElementById("bar"+x).style.backgroundColor =  "red";
                await timeout(25);
                document.getElementById("bar"+x).style.backgroundColor =  "#00CED1";
            }
            
            return ans;
        }
       

    });
  
}
main();
