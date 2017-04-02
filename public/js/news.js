function fetchDataTest() {
    var temp = [];
    $.getJSON(
        "https://newsapi.org/v1/articles?source=cnn&apiKey=31cd62ebfe8a4a7c92702cea80681433",
        function (data) {
        	var obj = JSON.parse(JSON.stringify(data)).articles;
        	var titles = "";
        	for (var i = 0; i < obj.length; i++) {
        		titles += obj[i].title + ", ";
        	}
            temp.push(obj);
        });
    $.getJSON(
        "https://newsapi.org/v1/articles?source=bloomberg&apiKey=31cd62ebfe8a4a7c92702cea80681433",
        function (data) {
            var obj = JSON.parse(JSON.stringify(data)).articles;
            var titles = "";
            for (var i = 0; i < obj.length; i++) {
                titles += obj[i].title + ", ";
            }
            temp.push(obj);
        });
    return temp;
};

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
                });
    }
    return stories;
}