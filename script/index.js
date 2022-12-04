const mySectin=() => {
    
    var arr = ["1-old.jpg","1.png","2.jpg","2.png","3.png","3.jpg","4.jpg","6.jpg","7.jpg","agent.jpg","agent2.jpg"] 
    
    var obj = [{name: "clinton", gender: "male", height: "175cm"}, {name: "nike", gender: "female", height: "171cm"}, {name: "mike", gender: "male", height: "191cm"}, {name: "frankcess", gender: "female", height: "173cm"},{name: "great", gender: "male", height: "174cm"},{name: "ola", gender: "male", height: "164cm"},{name: "gracious", gender: "female", height: "185cm"},{name: "bunmi", gender: "female", height: "175cm"},{name: "stella", gender: "female", height: "172cm"},{name: "nation", gender: "male", height: "169cm"}]
   obj.forEach((item,index)=>{
    var height = item.height;
    var gender = item.gender;
    var names = item.name;
    document.getElementById("name").innerHTML+=`<li id="${gender}" title="${height}" type="${names}" onclick="loadAll(this)" > ${names} <img src="image/${arr[index]}" width="100" height="100" style="border-radius:100px">           
        </li>`
   // console.log(names)

})
}
    
  console.log("clinton")  
    const url = "https://swapi.dev/api/people/?format=json";
    fetch('https://swapi.dev/api/people/?format=json').then(data=>data.json()).then(data=>mySectin(data)).catch(error=>mySectin())
    var element = document.querySelector("#con");
    var container = document.querySelector(".des");  
        var  loadAll = (x) => {
            var height = x.title
            var gender = x.id
            var names = x.type
                
            container.style.display="flex"
            var val= [`Name:  ${names}`,`Gender: ${gender}`,`Height: ${height}`]
            for (let index = 0; index < val.length; index++) {
                let value_of=val[index];      
                var li = document.createElement("li");
                var node = document.createTextNode(value_of);
                li.className="re";
                li.appendChild(node);
                element.appendChild(li);       
       }
    }
    var remove = document.getElementById("close").addEventListener("click", ()=>{
        container.style.display="none"  

        var child = document.getElementsByClassName("re")[0];
        var child2 = document.getElementsByClassName("re")[1];
        var child3 = document.getElementsByClassName("re")[2];
        element.removeChild(child);
        element.removeChild(child2);
        element.removeChild(child3);





    })


