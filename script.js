var reviews = [{beerName: 1, category: "Porter", rating: 3}, {beerName: 2, category: "Porter", rating: 5},{beerName: 3, category: "Porter", rating: 1}];

var checker = true;

var addBeer = function addBeer(name, category) {

  var beerName = $('#beer-name').val();
  var category = $('#beer-category').val();
  var rating = $('#rating-category').val();
  $('.beers').append("<p> Beer Name: " + beerName + " Category: " + category + "rating: " + rating + "</p><br>");

    var newBeer = {
    beerName: beerName,
    category: category,
    rating: rating
    }
    reviews.push(newBeer);
    updateBeers();
};

var updateBeers = function updateBeers(){
  $('.beers').find('p').remove();
  for (var i = 0; i < reviews.length; i++) {
    $('.beers').append("<p>Beer: " + reviews[i].beerName + " " + reviews[i].category + " " + reviews[i].rating+ "</p>");
  };
  
};

updateBeers();

$('.post-beer').on('click', function (e) {
  e.preventDefault();
  addBeer();

});

$('.sort-beer').on('click', function (e) {
  e.preventDefault();
    if (checker) {
    reviews.sort(function(obj1, obj2) {
     return obj2.rating - obj1.rating;
}); 
    checker = false;
  } else {
    reviews.sort(function(obj1, obj2) {
     return obj1.rating - obj2.rating;
    
  });
     checker = true;
     
      };
      updateBeers();
});