//Working on quotes api call==================>
const quoteGetter = async () => {
    try {
        let response = await fetch("https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
                "x-rapidapi-key": "4c728394cemsh9899c2d2c969e91p183542jsn4c715c0f2194"
            }
        });
        let data = await response.json()
        // console.log(data)

        let quote = document.querySelector("#quote");
        let value = data.text;
        quote.textContent = value;
    } catch (e) {
        console.log(e)
    }
}
quoteGetter()

//Done with quotes api quotes api call==================>




// By Clicking static blog content==================>



document.querySelector("#first-blog").addEventListener("click", () => {
    window.open("https://blog.playo.co/humansofplayo-how-to-submit-a-story/", '_blank');
})

document.querySelector("#sec-blog").addEventListener("click", () => {

    window.open("https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/", '_blank');

})


// By Clicking static blog content End==================>





//Api call for Sports news content start==================>
const apiKey_blog = "042129d3ee9d454bbfc437cf0700c698";
import appendNews from "../components/appendnews.js";
// import apiCall from "../components/apicall.js";

//    let fetchNews = () =>{

//         let apiKey_blog = "b140754e118c4b63a8e580772d4446a1";
//         let bloglink = `https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=${apiKey_blog}`;
//         let response = apiCall(bloglink);
//         response.then((res)=>{
//             console.log(res.articles);
//             let appendlocation = document.querySelector(".dynamic-news");
//             // appendNews(res.articles, appendlocation);
//             console.log(appendlocation)

//         })
//         .catch((e)=>{
//             console.log(e);
//         })

//     }



//Edit 
const fetchNews = async (url,page) => {
    try {
        let response = await fetch(`https://newsapi.org/v2/${url}&apiKey=${apiKey_blog}&pageSize=10&page=${page}`);
        let data = await response.json();
        let appendlocation = document.querySelector(".dynamic-news");
        // console.log(data)
        appendNews(data.articles, appendlocation);
        // console.log(data.articles,appendlocation)
    } catch (error) {
        console.log(error)
    }
}
let setPagination = async(url,page) =>{
    try{
        let sample_response = await fetch(`https://newsapi.org/v2/${url}&apiKey=${apiKey_blog}&limit=100`);
        let sample_data = await sample_response.json();
        let pages = sample_data.totalResults/10 <= 8 ? sample_data.totalResults/10 : 8
        document.querySelector(".pagination").innerHTML = ""
        for(let x=1;x<=pages;x++){
            let div = document.createElement("div")
            div.textContent = x
            div.addEventListener("click",()=>{
                document.querySelectorAll(`.pagination>div`).forEach((ele)=>{
                    ele.removeAttribute("class")
                })
                document.querySelector(`.pagination>div:nth-child(${x})`).classList = 'active'
                fetchNews(url,x)
            })
            document.querySelector(".pagination").append(div)
        }
        document.querySelector(`.pagination>div:nth-child(${page})`).classList = 'active'
    }catch(error){
        console.log(error)
    }
}
setPagination("top-headlines?country=in&category=sports",1)
fetchNews("top-headlines?country=in&category=sports",1)
// fetchNews("",1)

// Api call for navbar's element news content end==================>
let date = new Date()
const req = date.getFullYear()+"-"+(date.getMonth())+"-"+(date.getDate() + 1)

document.querySelectorAll(".navbar>div>div").forEach((ele, idx) => {
    ele.addEventListener("click", () => {
        document.querySelectorAll(".navbar>div>div").forEach((e) => {
            e.removeAttribute("class")
        })
        ele.classList = 'active'
        
        // console.log(req)
        if (idx < 2) fetchNews("top-headlines?country=in&category="+ele.id,1)
        else if (idx < 5) fetchNews(`everything?sortBy=popularity&from=${req}&q=${ele.id}&language=en`,1)
        else location.href = "faq.html"
    })
})
// document.querySelector("#health-news").addEventListener("click", ()=>{

//     let apiKey_health = "b140754e118c4b63a8e580772d4446a1";
//     let bloglink_health = `https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=12&apiKey=${apiKey_health}`;

//     fetch(bloglink_health)
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

// })



//Api call for health news End ========================>

// pagination


//If user click one sports button start ========================>

// document.querySelector("#sports-news").addEventListener("click", ()=>{

//     // document.querySelector("#sports-news").style.backgroundColor = "white";
//     // document.querySelector("#sports-news").style.borderBottom = "3px solid #548A2F"
//     // document.querySelector("#health-news").style.backgroundColor = "#F3F3F2";
//     // document.querySelector("#health-news").style.borderBottom = "none";

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

let id;
document.querySelector("#search").addEventListener('keypress', (event) => {
    //console.log(event);
    let value = document.querySelector("#search").value;

    if (value == "" || value == undefined || value == null) {
        fetchNews("top-headlines?country=in&category=sports")
        return false;
    }

    if (event.key == "Enter") {
        //code for search feature
        //https://newsapi.org/v2/everything?q=Apple&from=2022-01-18&sortBy=popularity&apiKey=API_KEY

        // let search_key = "b140754e118c4b63a8e580772d4446a1";
        // let search_link = `everything?q=${value}&from=2022-01-18&sortBy=popularity&pageSize=10&language=en&apiKey=${apiKey_blog}`;
        if(id) clearTimeout(id)
        id = setTimeout(()=>{
            console.log("here")
            fetchNews(`everything?sortBy=popularity&from=${req}&q=${value}&language=en`)
        },1500)
        // fetch(search_link)
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((res) => {
        //         let appendlocation = document.querySelector(".dynamic-news");
        //         appendNews(res.articles, appendlocation);
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     })

    }

});


//Search Feature in news api End================================>