angular.module('sml.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('RoomsCtrl', function($scope) {
  $scope.rooms = [
    { title: '207', id: 1 },
    { title: '210', id: 2 },
    { title: '212', id: 3 },
    { title: '214', id: 4 },
    { title: '215', id: 5 },
    { title: '216', id: 6 }
  ];
})

.controller("ExampleController", ['$scope', '$stateParams', function($scope, $stateParams){

   $scope.images = [{
 'src' : 'img/207/dante_and_virgil.jpg',
 'title': 'Dante and Virgil, from the Divine Comedy',
 'id': 1,
 'room': '207',
 'desc': "In progress",
 'links': '',
 'book': ''
 }, 
 {
 'src' : 'img/207/petrarch.jpg',
 'title': 'Petrarch, Trionfi',
 'id': 2,
 'room': '207',
 'desc': "In progress",
 'links': '',
 'book': ''
 }, 
 {
 'src' : 'img/207/ariosto.jpg',
 'title': 'Ariosto, Orlando Furioso',
 'id': 3,
 'room': '207',
 'desc': "In progress",
 'links': '',
 'book': ''
 }, 
 {
 'src' : 'img/207/decamerone.jpg',
 'title': 'Boccaccio, Decamerone',
 'id': 4,
 'room': '207',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/207/jerusalem_delivered.jpg',
 'title': 'Tasso, Jerusalem Delivered',
 'id': 5,
 'room': '207',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/207/scapino.jpg',
 'title': 'Commedia dell\'arte, Scapino',
 'id': 6,
 'room': '207',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/207/el_cid.jpg',
 'title': 'El Cid',
 'id': 7,
 'room': '207',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/207/st_teresa.jpg',
 'title': 'Santa Teresa, the Mystic',
 'id': 8,
 'room': '207',
 'desc': "Saint Teresa of Avila (1515-1582), also known as Saint Teresa of Jesus, is one of the great mystics and saints of the Roman Catholic church. She is responsible for the Carmelite Reform, which emphasized austerity and poverty over the looser regulations that had developed within the Carmelite order throughout the 14th and 15th centuries. Facing physical illnesses for much of her life, she nonetheless wrote several famous books on the soul's relationship with God, and founded seventeen convents and fifteen monasteries.",
 'links': "http://www.britannica.com/biography/Saint-Teresa-of-Avila"
 },
 {
 'src' : 'img/210/chanson_de_roland.jpg',
 'title': 'Chanson de Roland',
 'id': 9,
 'room': '210',
 'desc': "\"La Chanson de Roland\" (or \"The Song of Roland\") is an Old French epic poem that recounts the story of the Battle of Roncesvalles in 778. In this scene, Roland defends the Emperor Charlemagne (bottom) against Ganelon.",
 'links': "http://www.britannica.com/topic/La-Chanson-de-Roland",
 'book': "http://www.gutenberg.org/cache/epub/391/pg391-images.html"
 },
 {
 'src' : 'img/210/romance_of_the_rose.jpg',
 'title': 'Romance of the Rose',
 'id': 10,
 'room': '210',
 'desc': "The \"Romance of the Rose\" was one of the most popular poems of the Middle Ages. Spanning more than 21,000 lines, the poem tells the story of man wooing a woman (represented by a rose) inside a garden (representing civil society and courtly love). The scene here shows the lover at the end of the poem, attaining the rose; the staff in his hand and sacks around his waist are fully intended to be understood as sexually symbolic.",
 'links': "http://www.britannica.com/topic/Roman-de-la-rose http://romandelarose.org/#rose https://lionsandlilies.files.wordpress.com/2013/05/images2.jpg", 
 'book': "http://www.gutenberg.org/files/16816/16816-h/16816-h.htm"
 },
 {
 'src' : 'img/210/troubadour.jpg',
 'title': 'Troubador',
 'id': 11,
 'room': '210',
 'desc': "The \"Troubadour\" was the name for lyric poets who frequented the royal courts of many Western European countries during the Middle Ages, particularly from the 11th to the 13th century. These poets would often entertain guests with extensive epic poems about courtly love, often accompanied by music on a lyre.",
 'links': "http://www.britannica.com/art/troubadour-lyric-artist https://www.youtube.com/watch?v=M2rnrBtz5bI",
 'book': '' 
 },
 {
 'src' : 'img/210/rabelais.jpg',
 'title': 'Rabelais, Gargantua',
 'id': 12,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/210/moliere.jpg',
 'title': 'Moliere, La Malade Imaginaire',
 'id': 13,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/210/animals_sick_of_the_plague.jpg',
 'title': 'La Fontaine, Animals Sick of the Plague',
 'id': 14,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/210/voltaire.jpg',
 'title': 'Voltaire Crowned at the Theatre',
 'id': 15,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/210/funeral_of_atala.jpg',
 'title': 'Chateaubrand, Funeral of Atala',
 'id': 16,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/210/de_musset.jpg',
 'title': 'De Musset Comforted by his Muse',
 'id': 17,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/210/three_musketeers.jpg',
 'title': 'Dumas, The Three Musketeers',
 'id': 18,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': ''
 },
 {
 'src' : 'img/210/hunchback.jpg',
 'title': 'Victor Hugo, Hunchback of Notre Dame',
 'id': 19,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': "http://www.gutenberg.org/files/2610/2610-h/2610-h.htm"
 },
 {
 'src' : 'img/210/cyrano.jpg',
 'title': 'Cyrano de Bergerac',
 'id': 20,
 'room': '210',
 'desc': "In progress",
 'links': '',
 'book': ''
 }

 ];

  //  $scope.loadImages = function() {
  //   for (var i=0; i<100; i++) {
  //     $scope.images.push({id:i, src:"http://placehold.it/250x250"});
  //   }
  // }

  var windowId = $stateParams.windowId;
  
  $scope.window = $scope.images[windowId - 1];


}]);

