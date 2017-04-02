//global includes article object
//article has img(), text(), and link();
//array has to be sorted
var topArticles = [];
var articles = fetchData();

$(document).ready(function() {
  $("#searchButton").on("click", search);
  $(".card").on("click", function(event){
    expandArticle(this);
  });
});

function search(){
  //update all 3 stories boards
  //headline
  var inputText = $("#search-input").value;
  sort(inputText);
  $("#headline-img").attr("src", topArticles[0].urlToImage);
  $("#headline-text").html(topArticles[0].description);
  //side story 1
  $("#side1-img").attr("src", topArticles[1].urlToImage);
  $("#side1-text").html(topArticles[1].description);
  //side story 2
  $("#side2-img").attr("src", topArticles[2].urlToImage);
  $("#side2-text").html(topArticles[2].description);
}

function expandArticle(obj){
  var id = obj.id;
  //open into new page with article
    window.location = "article.html";
  if(id == "headline-card"){
    updateArticle(topArticles[0]);
  } else if(id = "side1-card"){
    updateArticle(topArticles[1]);
  } else if(id == "side2-card"){
    updateArticle(topArticles[2]);
  }
}


//manages article.html Parameter obj is article type
function updateArticle(obj){

}

//2d array sort PUTS into top 3
function sort(input){
  //mock code
  for(var i=0; i<3; i++){
    topArticles.push(articles[0][i]);
  }
}