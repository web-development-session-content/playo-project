
let id ;

const Debounce = (fun) =>{
    if (id){
        clearTimeout(id)
    }
    id = setTimeout(()=>{
        fun()

    },500)
}



const main = async () =>{
    try{
        let search = document.getElementById("typesearch").value
        let res = await fetch(`https://puce-lazy-lemming.cyclic.app/cities?city=${search}`)
        let data = await res.json()
        console.log(data)
        displayData(data)
    }
    catch(err){
        console.log(err)
    }

}


function displayData(data){
    

    data.map((ele)=>{

	let location = localStorage.setItem("name", JSON.stringify(ele));
    window.location.href = "explore.html";

        

    })
}