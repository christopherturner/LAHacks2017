//global includes article object
//article has img(), text(), and link();
//array has to be sorted
var topArticles = [];
//2d array of articles
var articles;

$(document).ready(function() {
  $("#searchButton").on("click", search);
  $(".card").on("click", function(event){
    expandArticle(this);
  });
  articles = fetchData();
});

function search(){
  //update all 3 stories boards
  //headline
  var inputText = $("#search-input").value;
  sort(inputText);
  $("#headline-img").attr("src", topArticles[0].urlToImage);
  $("#headline-text").html(topArticles[0].description);

  for(var i=1; i<=11; i++){
    $("#side" + i + "-img").attr("src", topArticles[i].urlToImage);
    $("#side" + i + "-text").html(topArticles[i].description);
  }
}

function expandArticle(obj){
  var id = obj.id;
  //open into new page with article
  if(id == "headline-card"){
    updateArticle(topArticles[0]);
  } else {
    idNum = id.match(/\d+/)[0];
    updateArticle(topArticles[idNum]);
  }
    window.location = "article.html";
}


//manages article.html Parameter obj is article type
//
function updateArticle(obj){

}

//2d array sort PUTS into top 3
// TODO: input is what the user searches
// sort the 2d array "articles" into the 1d array topArticles. 
// The function search() will take in the top 11 entries in topArticles and output them into the html page.

function sort(input){
  //mock code
  for(var i=0; i<articles.length; i++){
    for(var j=0; j<2; j++){
      topArticles.push(articles[i][j]);
    }
  }
}