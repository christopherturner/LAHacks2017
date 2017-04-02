function fetchData() {
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