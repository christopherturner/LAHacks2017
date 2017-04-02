var tstory = [];
function fetchData(){
    var source = ["bbc-news", "bloomberg", "buzzfeed", "cnn", "google-news", "reddit-r-all",
    "the-new-york-times", "the-verge", "national-geographic"];
    var stories = [];

    for(var i = 0; i < source.length; i++){
        var current = source[i];
            $.getJSON(
                "https://newsapi.org/v1/articles?source=" + current + "&apiKey=31cd62ebfe8a4a7c92702cea80681433",
                function (data) {
                    var obj = JSON.parse(JSON.stringify(data)).articles;
                    stories.push(obj);
                    tstory.push(obj);
                });
    }
    return stories;
}

function search(item){
    //tstory = [];
    item = item.toLowerCase();
    var sp = item.split(" ");
    topArticles = [];
    var temp = fetchData();
    console.log(sp);
    
    for(var i = 0; i < sp.length; i++){
        console.log(sp[i]);
        console.log("tstory length: " + tstory.length);
        for(var h = 0; h < tstory.length; h++){
            for(var j = 0; j < tstory[h].length; j++){
                if(tstory[h][i].description.toLowerCase().includes(sp[i])){
                    console.log("poop");
                    console.log(tstory[h][i].title);
                    topArticles.push(tstory[h][j]);
                 }
            }
        }
    }
    tstory = [];
}

/*
function storyExists(s, found){
    for(var i = 0; i < found.length; i++){
        for(var j=0; j< found[i].length; j++){
            if(found[i][j].title == s.title){
                return true;
            }
        }
    }
    return false;
}
*/
