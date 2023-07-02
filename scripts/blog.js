

   
    

    
    
//Working on quotes api call==================>





    
    // let quoteUrl = "https://bodybuilding-quotes1.p.rapidapi.com/random-quote";
    // fetch(quoteUrl, {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
	// 	"x-rapidapi-key": "a867a75115msh062cacb248defc3p1037f9jsnb868cbef939c"
	// }
    // })
    // .then((res)=>{
    //     return res.json()
    // })
    // .then((res)=>{
    //     console.log(res);
    //     let quote = document.querySelector("#quote");
    //     let value = res.quote;
    //     quote.textContent = value;
    // })





//Done with quotes api quotes api call==================>




// By Clicking static blog content==================>



    document.querySelector("#first-blog").addEventListener("click", ()=>{

   
        window.open("https://blog.playo.co/humansofplayo-how-to-submit-a-story/" , '_blank');
    })

    document.querySelector("#sec-blog").addEventListener("click", ()=>{
        
        window.open("https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/" , '_blank');

    })


// By Clicking static blog content End==================>





//Api call for Sports news content start==================>

    import appendNews from "../components/appendnews.js";
   import apiCall from "../components/apicall.js";

   function fetchNews(){

     let apiKey_blog = "f1e386e609754803ac12e5449af5a32f";
    let bloglink = `https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey_blog}&pageSize=10`;
    if(page_no){
        bloglink+=`&page=${page_no}`;
      }

    let response = apiCall(bloglink);
    response.then((res)=>{
        console.log(res.articles);
        let appendlocation = document.querySelector(".dynamic-news");
        appendNews(res.articles, appendlocation);

    })
    .catch((e)=>{
        console.log(e);
    })

    }

    document.getElementById("sports-news").addEventListener("click",function(){
        fetchNews();
       })

//     Edit 
//     function fetchNews(){
//     let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
//     let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${process.env.BLOG_API_KEY}`;
//     fetch(bloglink)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((res)=>{
//         let appendlocation = document.querySelector(".dynamic-news");
//         appendNews(res.articles, appendlocation);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })    
//    }

 
   
   




    


// Api call for Sports news content end==================>


//Api call for health news start==================>

    document.querySelector("#health-news").addEventListener("click", ()=>{

        healthFun(page_no);
    })
        // console.log("Test")

        function healthFun(page_no){
            document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
            document.querySelector("#sports-news").style.borderBottom = "none";
            document.querySelector("#health-news").style.backgroundColor = "white";
            document.querySelector("#health-news").style.borderBottom = "3px solid #548A2F"
         
    
    
           
            let apiKey_health = "f1e386e609754803ac12e5449af5a32f";
            let bloglink_health = `https://newsapi.org/v2/everything?q=health&apiKey=${apiKey_health}&pageSize=10`;
            if(page_no){
                bloglink_health+=`&page=${page_no}`;
              }
    
            fetch(bloglink_health)
            .then((res)=>{
                return res.json();
            })
            .then((res)=>{
                let appendlocation = document.querySelector(".dynamic-news");
                appendNews(res.articles, appendlocation);
            })
            .catch((e)=>{
                console.log(e);
                
            })
    
        }

       
    



//Api call for health news End ========================>



//If user click one sports button start ========================>

    // document.querySelector("#sports-news").addEventListener("click", ()=>{

    //     document.querySelector("#sports-news").style.backgroundColor = "white";
    //     document.querySelector("#sports-news").style.borderBottom = "3px solid #548A2F"
    //     document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
    //     document.querySelector("#health-news").style.borderBottom = "none";

    //     //Api work ==>
    //     let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
    //     let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${process.env.BLOG_API_KEY}`;
    //     fetch(bloglink)
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then((res)=>{
    //         let appendlocation = document.querySelector(".dynamic-news");
    //         appendNews(res.articles, appendlocation);
    //     })
    //     .catch((e)=>{
    //         console.log(e);
    //     })

    //     fetchNews()

    // })


//If user click one sports button end==========================>


//Search Feature in news api start================================>


    // document.querySelector("#search").addEventListener('keypress' , (event)=>{
    //     //console.log(event);
    //     let value = document.querySelector("#search").value;

    //     if(value == "" || value == undefined || value == null){
    //         fetchNews()
    //         return false;
    //     }
        
    //     if(event.key == "Enter"){
       

        //code for search feature
        //https://newsapi.org/v2/everything?q=Apple&from=2022-01-18&sortBy=popularity&apiKey=API_KEY
     
    //     console.log("test")
    //     let search_key = "b140754e118c4b63a8e580772d4446a1";
    //     let search_link = `https://newsapi.org/v2/everything?q=${value}&from=2022-01-18&sortBy=popularity&pageSize=10&language=en&apiKey=${process.env.BLOG_API_KEY}`;
      

    //     fetch(search_link)
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then((res)=>{
    //         let appendlocation = document.querySelector(".dynamic-news");
    //         appendNews(res.articles, appendlocation);
    //     })
    //     .catch((e)=>{
    //         console.log(e);
    //     })

    //     console.log("Test")

    //     }

    // });




   

// showUsers(page_no);

// async function showUsers(page_no){
// let url = `https://newsapi.org/v2/everything?q=health&apiKey=${api}&pageSize=10`;

//   if(page_no){
//     url+=`&page=${page_no}`;
//   }
//   let response = await fetch(url);
//   let data = await response.json();
//   displayData(data.articles);
// }









//Search Feature in news api End================================>

let  page_no=1;
let total_page;

let api = "f1e386e609754803ac12e5449af5a32f";
async function fetching(page_no){
    let query =  document.getElementById("search").value;
    
    try{
    let url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${api}&pageSize=10`;

    if(page_no){
        url+=`&page=${page_no}`;
      }
    var response = await fetch(url);
    let data =await response.json();

    console.log(data.articles);
    displayData(data.articles);
    }
    catch(error){
        // console.log(error);
    }
}

// fetching();

document.getElementById("search").addEventListener("keyup",()=>{
	debounce(fetching);
});

let id;
function debounce(func){
    if(id){
		clearTimeout(id);
	}
   id =	setTimeout(() => {
		func();
	},500)
};

let container = document.querySelector(".dynamic-news");
function displayData(data){
   container.innerHTML = "";

   data.forEach(function(elem){
    
    let title = document.createElement("h3");
    let image = document.createElement("img");
    // let source = document.createElement("href");

    //  source.innerHTML = elem.url;
    //  elem.addEventListener("click",()=>{
    //      location.href = elem.url;
    //  })
     
     image.src = elem.urlToImage;
     image.addEventListener("click",function(){
        location.href = elem.url;
     })
     title.innerText = elem.title;

     container.append(image,title);

   })
  
}


// pagination function





// function showUserDetails(data){
//   container.innerHTML = "";
//   let cardListDiv = document.createElement("div");
//   cardListDiv.setAttribute("class","card-list");

//   data.forEach(function(elem){
//     let cardDiv = document.createElement("div");
//     cardDiv.setAttribute("class","card")

//     let cardImg = document.createElement("div");
//     cardImg.setAttribute("class","card_img")

//     let image = document.createElement("img");
//     image.src = elem.avatar;

//     cardImg.append(image);

//     let cardBodyDiv = document.createElement("div");
//     cardBodyDiv.setAttribute("class","card_body");

//     let h3 = document.createElement("h3");
//     h3.setAttribute("class","card_item card_title");
//     h3.innerHTML = elem.firstname+" "+elem.lastname;

//     let cardItemDiv = document.createElement("div");
//     cardItemDiv.setAttribute("class","card_item card_description");
//     cardItemDiv.innerHTML = elem.email;

//     cardBodyDiv.append(h3,cardItemDiv);
//     cardDiv.append(cardImg,cardBodyDiv);

//     cardListDiv.append(cardDiv);

//   })

//   mainSection.append(cardListDiv);
// }


let button1 = document.createElement("button");
button1.innerHTML = 1;
button1.addEventListener("click",function(){
    fetching(1);
    healthFun(1);
})
let button2 = document.createElement("button");
button2.innerHTML = 2;
button2.addEventListener("click",function(){
    fetching(2);
    healthFun(2);
})
let button3 = document.createElement("button");
button3.innerHTML = 3;
button3.addEventListener("click",function(){
    fetching(3);
    healthFun(3);
})
let button4 = document.createElement("button");
button4.innerHTML = 4;
button4.addEventListener("click",function(){
    fetching(4);
    healthFun(4);
})
let button5 = document.createElement("button");
button5.innerHTML = 5;
button5.addEventListener("click",function(){
    fetching(5);
    healthFun(5);
})
let button6 = document.createElement("button");
button6.innerHTML = 6;
button6.addEventListener("click",function(){
    fetching(6);
    healthFun(6);
})

let mainContainer = document.getElementById("Container");

mainContainer.append(button1,button2,button3,button4,button5,button6);







