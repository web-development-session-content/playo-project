

   
    

    
    
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



    // document.querySelector("#first-blog").addEventListener("click", ()=>{
       
    //     window.open("https://blog.playo.co/humansofplayo-how-to-submit-a-story/" , '_blank');
    // })

    // document.querySelector("#sec-blog").addEventListener("click", ()=>{
        
    //     window.open("https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/" , '_blank');

    // })


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
    function fetchNews(){
    let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
    let bloglink = `https://newsapi.org/v2/everything?q=sport&from=2023-06-02&sortBy=publishedAt&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
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
   }
   
   fetchNews()




    


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
    document.querySelector("#quiz-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#quiz-news").style.borderBottom = "none";
 


   
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




document.querySelector("#cricket-news").addEventListener("click", ()=>{
    console.log("Test")

    document.querySelector("#sports-news").style.backgroundColor ="#F3F3F2";
    document.querySelector("#sports-news").style.borderBottom = "none"
    document.querySelector("#cricket-news").style.backgroundColor =  "white";
    document.querySelector("#cricket-news").style.borderBottom = "3px solid #548A2F";
    document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#health-news").style.borderBottom = "none";
    document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#football-news").style.borderBottom = "none";
    document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#tennis-news").style.borderBottom = "none";
    document.querySelector("#quiz-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#quiz-news").style.borderBottom = "none";
 


   
    let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
    let bloglink_cricket= `https://newsapi.org/v2/everything?q=cricket&from=2023-06-02&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
    
    fetch(bloglink_cricket)
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
document.querySelector("#football-news").addEventListener("click", ()=>{
    console.log("Test")

    document.querySelector("#sports-news").style.backgroundColor ="#F3F3F2";
    document.querySelector("#sports-news").style.borderBottom = "none"
    document.querySelector("#football-news").style.backgroundColor =  "white";
    document.querySelector("#football-news").style.borderBottom = "3px solid #548A2F";
    document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#health-news").style.borderBottom = "none";
    document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#cricket-news").style.borderBottom = "none";
    document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#tennis-news").style.borderBottom = "none";
    document.querySelector("#quiz-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#quiz-news").style.borderBottom = "none";
 


   
    let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
    let bloglink_football= `https://newsapi.org/v2/everything?q=football&from=2023-06-02&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
    
    fetch(bloglink_football)
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
document.querySelector("#tennis-news").addEventListener("click", ()=>{
    console.log("Test")

    document.querySelector("#sports-news").style.backgroundColor ="#F3F3F2";
    document.querySelector("#sports-news").style.borderBottom = "none"
    document.querySelector("#tennis-news").style.backgroundColor =  "white";
    document.querySelector("#tennis-news").style.borderBottom = "3px solid #548A2F";
    document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#health-news").style.borderBottom = "none";
    document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#football-news").style.borderBottom = "none";
    document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#cricket-news").style.borderBottom = "none";
    document.querySelector("#quiz-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#quiz-news").style.borderBottom = "none";
 


   
    let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
    let bloglink_tennis= `https://newsapi.org/v2/everything?q=tennis&from=2023-06-02&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
    
    fetch(bloglink_tennis)
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
document.querySelector("#quiz-news").addEventListener("click", ()=>{
    console.log("Test")

    document.querySelector("#sports-news").style.backgroundColor ="#F3F3F2";
    document.querySelector("#sports-news").style.borderBottom = "none"
    document.querySelector("#quiz-news").style.backgroundColor =  "white";
    document.querySelector("#quiz-news").style.borderBottom = "3px solid #548A2F";
    document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#health-news").style.borderBottom = "none";
    document.querySelector("#football-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#football-news").style.borderBottom = "none";
    document.querySelector("#tennis-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#tennis-news").style.borderBottom = "none";
    document.querySelector("#cricket-news").style.backgroundColor = "#F3F3F2";
    document.querySelector("#cricket-news").style.borderBottom = "none";
 


   
    let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
    let bloglink_quiz= `https://newsapi.org/v2/everything?q=qiuz&from=2023-06-02&pageSize=10&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
    
    fetch(bloglink_quiz)
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
        document.querySelector("#quiz-news").style.backgroundColor = "#F3F3F2";
        document.querySelector("#quiz-news").style.borderBottom = "none";

        //Api work ==>
        let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
        let bloglink = `https://newsapi.org/v2/everything?q=sport&from=2023-06-02&sortBy=publishedAt&apiKey=a86b591e0b0b4a8f970ccaf08d872ad0`;
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

       
    })


//If user click one sports button end==========================>


//Search Feature in news api start================================>


    document.querySelector("#search").addEventListener('keypress' , (event)=>{
        //console.log(event);
        let value = document.querySelector("#search").value;

        if(value == "" || value == undefined || value == null){
            fetchNews()
            return false;
        }
        
        if(event.key == "Enter"){
       

        //code for search feature
        //https://newsapi.org/v2/everything?q=Apple&from=2022-01-18&sortBy=popularity&apiKey=API_KEY
     
        console.log("test")
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
        })

        console.log("Test")

        }
        fetchNews()

    });










//Search Feature in news api End================================>







