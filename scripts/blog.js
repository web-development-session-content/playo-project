

   
    

    
    
//Working on quotes api call==================>
dfltDisplay();
function dfltDisplay(){
    fetch(`https://newsapi.org/v2/everything?q=sport&from=2023-06-02&sortBy=publishedAt&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`)
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

        console.log("Test")

        }

        function dflt1Display(value,val){
            fetch(`https://newsapi.org/v2/everything?q=${val}&from=2023-06-02&sortBy=publishedAt&page=${value}&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`)
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
        
                console.log("Test")
        
                }
                page();
function page(){
    let div=document.createElement("div");
    div.style.display="flex";
    let b1=document.createElement("button");
    b1.innerText="1";
    b1.addEventListener("click",function(){
        dflt1Display(1);
    })
    let b2=document.createElement("button");
    b2.innerText="2";
    b2.addEventListener("click",function(){
        dflt1Display(2);
    })
    let b3=document.createElement("button");
    b3.innerText="3";
    b3.addEventListener("click",function(){
        dflt1Display(3);
    })
    let b4=document.createElement("button");
    b4.innerText="4";
    b4.addEventListener("click",function(){
        dflt1Display(4);
    })
    let b5=document.createElement("button");
    b5.innerText="5";
    b5.addEventListener("click",function(){
        dflt1Display(5);
    })
    let b6=document.createElement("button");
    b6.innerText="6";
    b6.addEventListener("click",function(){
        dflt1Display(6);
    })
    let b7=document.createElement("button");
    b7.innerText="7";
    b7.addEventListener("click",function(){
        dflt1Display(7);
    })
    let b8=document.createElement("button");
    b8.innerText="8";
    b8.addEventListener("click",function(){
        dflt1Display(8);
    })
    let b9=document.createElement("button");
    b9.innerText="9";
    b9.addEventListener("click",function(){
        dflt1Display(9);
    })
    div.append(b1,b2,b3,b4,b5,b6,b7,b8,b9);
    document.querySelector("#paging").append(div);


}
    
  /*  let quoteUrl = "https://bodybuilding-quotes1.p.rapidapi.com/random-quote";
    fetch(quoteUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
		"x-rapidapi-key": "a867a75115msh062cacb248defc3p1037f9jsnb868cbef939c"
	}
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res);
        let quote = document.querySelector("#quote");
        let value = res.quote;
        quote.textContent = value;
    })
*/




//Done with quotes api quotes api call==================>




// By Clicking static blog content==================>



   /* document.querySelector("#first-blog").addEventListener("click", ()=>{
       
        window.open("https://blog.playo.co/humansofplayo-how-to-submit-a-story/" , '_blank');
    })

    document.querySelector("#sec-blog").addEventListener("click", ()=>{
        
        window.open("https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/" , '_blank');

    })*/


// By Clicking static blog content End==================>





//Api call for Sports news content start==================>

    import appendNews from "../components/appendnews.js";
   // import apiCall from "../components/apicall.js";

//    function fetchNews(){

//      //let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
//     //let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${apiKey_blog}`;
//     // let response = apiCall(bloglink);
//     // response.then((res)=>{
//     //     console.log(res.articles);
//     //     let appendlocation = document.querySelector(".dynamic-news");
//     //     appendNews(res.articles, appendlocation);

//     // })
//     // .catch((e)=>{
//     //     console.log(e);
//     // })

//     }

   

    //Edit 
    function fetchNews(val){
    let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
    let bloglink = `https://newsapi.org/v2/everything?q=${val}&page=1&pageSize=10&from=2023-06-02&sortBy=publishedAt&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
    fetch(bloglink)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        document.querySelector(".dynamic-news").innerHTML=null;
        let appendlocation = document.querySelector(".dynamic-news");
        appendNews(res.articles, appendlocation);
    })
    .catch((e)=>{
        console.log(e);
    })    
   }
   
 //  fetchNews("sport")




    


// Api call for Sports news content end==================>


//Api call for health news start==================>

    document.querySelector("#health-news").addEventListener("click", ()=>{
        console.log("Test")

        document.querySelector("#sports-news").style.backgroundColor ="#F3F3F2";
        document.querySelector("#sports-news").style.borderBottom = "none"
        document.querySelector("#health-news").style.backgroundColor =  "white";
        document.querySelector("#health-news").style.borderBottom = "3px solid #548A2F";
        document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#cricket-news").style.borderBottom = "none";
        document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#football-news").style.borderBottom = "none";
        document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#tennis-news").style.borderBottom = "none";
        document.querySelector("#quiz").style.backgroundColor = "#F3F3F2";
        document.querySelector("#quiz").style.borderBottom = "none";
     


       
        let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
        let bloglink_health = `https://newsapi.org/v2/everything?q=health&from=2023-06-02&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
        
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

    })



//Api call for health news End ========================>



//If user click one sports button start ========================>

    document.querySelector("#sports-news").addEventListener("click", ()=>{

        document.querySelector("#sports-news").style.backgroundColor = "white";
        document.querySelector("#sports-news").style.borderBottom = "3px solid #548A2F"
        document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#health-news").style.borderBottom = "none";
        document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#cricket-news").style.borderBottom = "none";
        document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#football-news").style.borderBottom = "none";
        document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#tennis-news").style.borderBottom = "none";
        document.querySelector("#quiz").style.backgroundColor = "#F3F3F2";
        document.querySelector("#quiz").style.borderBottom = "none";

        //Api work ==>
        let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
        let bloglink = `https://newsapi.org/v2/everything?q=sport&from=2023-06-02&sortBy=publishedAt&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
        fetch(bloglink)
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

        fetchNews()

    })

    document.querySelector("#cricket-news").addEventListener("click", ()=>{

        document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#sports-news").style.borderBottom = "none"
        document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#health-news").style.borderBottom = "none";
        document.querySelector("#cricket-news").style.backgroundColor = "white";
        document.querySelector("#cricket-news").style.borderBottom = "3px solid #548A2F";
        document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#football-news").style.borderBottom = "none";
        document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#tennis-news").style.borderBottom = "none";
        document.querySelector("#quiz").style.backgroundColor = "#F3F3F2";
        document.querySelector("#quiz").style.borderBottom = "none";

        //Api work ==>
        let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
        let bloglink = `https://newsapi.org/v2/everything?q=cricket&from=2023-06-02&sortBy=publishedAt&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
        fetch(bloglink)
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

       // fetchNews()

    })

    document.querySelector("#football-news").addEventListener("click", ()=>{

        document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#sports-news").style.borderBottom = "none"
        document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#health-news").style.borderBottom = "none";
        document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#cricket-news").style.borderBottom = "none";
        document.querySelector("#football-news").style.backgroundColor = "white";
        document.querySelector("#football-news").style.borderBottom = "3px solid #548A2F";
        document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#tennis-news").style.borderBottom = "none";
        document.querySelector("#quiz").style.backgroundColor = "#F3F3F2";
        document.querySelector("#quiz").style.borderBottom = "none";

        //Api work ==>
        let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
        let bloglink = `https://newsapi.org/v2/everything?q=football&from=2023-06-02&sortBy=publishedAt&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
        fetch(bloglink)
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

       // fetchNews()

    })

    document.querySelector("#tennis-news").addEventListener("click", ()=>{

        document.querySelector("#sports-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#sports-news").style.borderBottom = "none"
        document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#health-news").style.borderBottom = "none";
        document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#cricket-news").style.borderBottom = "none";
        document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#football-news").style.borderBottom = "none";
        document.querySelector("#tennis-news").style.backgroundColor = "white";
        document.querySelector("#tennis-news").style.borderBottom = "3px solid #548A2F";
        document.querySelector("#quiz").style.backgroundColor = "#F3F3F2";
        document.querySelector("#quiz").style.borderBottom = "none";

        //Api work ==>
        let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
        let bloglink = `https://newsapi.org/v2/everything?q=tennis&from=2023-06-02&sortBy=publishedAt&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
        fetch(bloglink)
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

        //fetchNews()

    })
    document.querySelector("#quiz").addEventListener("click", ()=>{

        document.querySelector("#sports-news").style.backgroundColor ="#F3F3F2";
        document.querySelector("#sports-news").style.borderBottom = "none"
        document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#health-news").style.borderBottom = "none";
        document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#cricket-news").style.borderBottom = "none";
        document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#football-news").style.borderBottom = "none";
        document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#tennis-news").style.borderBottom = "none";
        document.querySelector("#quiz").style.backgroundColor =  "white";
        document.querySelector("#quiz").style.borderBottom = "3px solid #548A2F";

        //Api work ==>
        let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
        let bloglink = `https://newsapi.org/v2/everything?q=question&from=2023-06-02&sortBy=publishedAt&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
        fetch(bloglink)
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

        fetchNews()

    })


//If user click one sports button end==========================>


//Search Feature in news api start================================>


    document.querySelector("#search").addEventListener('keypress' , (event)=>{
        console.log(event);
        console.log("hii");
        let value = document.querySelector("#search").value;
       
        if(value == "" || value == undefined || value == null){
            //fetchNews("sport");
            return;
        }
        
        if(event.key == "Enter"){
            dflt1Display(value,1);

        //code for search feature
        //https://newsapi.org/v2/everything?q=Apple&from=2022-01-18&sortBy=popularity&apiKey=API_KEY
     
       /* console.log("test")
        let search_key = "b140754e118c4b63a8e580772d4446a1";
        let search_link = `https://newsapi.org/v2/everything?q=${value}&from=2023-06-02&sortBy=publishedAt&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
      

        fetch(search_link)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            let appendlocation = document.querySelector(".dynamic-news");
            appendNews(res.articles, appendlocation);
        })
        .catch((e)=>{
            console.log(e);
        })*/

        console.log("Test")

        }

    });










//Search Feature in news api End================================>







