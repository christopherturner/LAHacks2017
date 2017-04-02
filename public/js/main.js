//global includes article object
//article has img(), text(), and link();
//array has to be sorted
var articles = [];

class article{
  constructor(img, text, link){
    this.img = img;
    this.text = text;
    this.link = link;
  }
}

for(var i=0; i<3; i++){
  articles.push(new article("images/logo.png", "Sample text", "Sample link"));
}

$(document).ready(function() {
  $("#searchButton").on("click", search);
  $(".card").on("click", function(event){
    expandArticle(this);
  });
});

function search(){
  //update all 3 stories boards
  //headline
  console.log(articles[0].img);
  $("#headline-img").attr("src", articles[0].img);
  $("#headline-text").html(articles[0].text);
  //side story 1
  $("#side1-img").attr("src", articles[1].img);
  $("#side1-text").html(articles[1].text);
  //side story 2
  $("#side2-img").attr("src", articles[2].img);
  $("#side2-text").html(articles[2].text);
}

function expandArticle(obj){
  var id = obj.id;
  //open into new page with article
    window.location = "article.html";
  if(id == "headline-card"){
    updateArticle(articles[0]);
  } else if(id = "side1-card"){
    updateArticle(articles[1]);
  } else if(id == "side2-card"){
    updateArticle(articles[2]);
  }
}


//manages article.html Parameter obj is article type
function updateArticle(obj){

}