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
    { title: '207', oldRoom: 'Romance Languages Study', currentRoom: 'Electronic Collections', id: 207 },
    { title: '210', oldRoom: 'Romance Languages Seminar', currentRoom: 'East Asian Seminar Room', id: 210 },
    { title: '212', oldRoom: 'Special Collection', currentRoom: 'East Asian Collection', id: 212 },
    { title: '213', oldRoom: 'Special Collection', currentRoom: 'East Asian Collection Curator\'s Office', id: 213 },
    { title: '214', oldRoom: 'English Seminar', currentRoom: '', id: 214 },
    { title: '215', oldRoom: 'English Study', currentRoom: 'History Reading Room', id: 215 },
    { title: '216', oldRoom: 'Closet to Room 215', currentRoom: 'Closet to Room 215', id: 216 }
  ];
})

.controller("ExampleController", ['$scope', '$stateParams', function($scope, $stateParams){

   $scope.images = [{
'src' : 'img/207/dante_and_virgil.jpg',
'title': 'Dante and Virgil, from the Divine Comedy',
'id': 1,
'room': '207',
'desc': "Dante's \"The Divine Comedy\" (1308-21) remains one of the most influential works of literature ever written. The long narrative poem is divided into three sections - Inferno, Purgatorio, and Paradiso - and follows Dante's journey with Virgil (who represents human knowledge) through the layers of Hell, Purgatory, and Paradise. In this scene, from Canto I of Inferno, Dante is turned away from climbing the mountain and viewing a glorious light by three beasts - a leopard, a lion, and a wolf. Virgil (bottom), who becomes his guide, offers to show Dante this light, provided he is willing to go through Hell and Purgatory first.",
'links': 'http://www.britannica.com/topic/The-Divine-Comedy',
'book': 'http://www.gutenberg.org/files/8800/8800-h/8800-h.htm'
}, 
{
'src' : 'img/207/petrarch.jpg',
'title': 'Petrarch, Trionfi',
'id': 2,
'room': '207',
'desc': 'Petrarch (1304-74) was an Italian poet best known for his many works centered upon the love of his life, Laura. The poet is also known for popularizing the Italian (also know as the Petrarchan) sonnet, with an octave abbaabba rhyme scheme. "Trionfi," however, breaks from writing directly about Laura and instead focuses on the victories of Love, Chastity, Death, Fame, Time, and Eternity; this window depicts the Triumph of Fame.',
'links': 'http://www.britannica.com/biography/Petrarch http://brbl-archive.library.yale.edu/exhibitions/petrarch/about.html',
'book': 'http://www.gutenberg.org/files/17650/17650-h/17650-h.htm'
}, 
{
'src' : 'img/207/ariosto.jpg',
'title': 'Ariosto, Orlando Furioso',
'id': 3,
'room': '207',
'desc': "Orlando Furioso is considered one of the best depictions of the values and attitudes of the Italian Renaissance. MORE TO BE ADDED",
'links': 'http://www.britannica.com/biography/Ludovico-Ariosto',
'book': 'http://www.gutenberg.org/cache/epub/615/pg615-images.html'
}, 
{
'src' : 'img/207/decamerone.jpg',
'title': 'Boccaccio, Decameron',
'id': 4,
'room': '207',
'desc': "Decameron (c. 1349) is a collection of stories compiled by Giovanni Boccaccio, and is considered an Italian poetic masterpiece. The frame story consists of seven women and three men fleeing a plague in Florence and entertaining each other with various tales. This particular scene, \"Procession to the Garden\", begins on the Third Day of stories when the group enters a fabulous garden to entertain themselves with song and dance.",
'links': 'http://www.britannica.com/topic/Decameron',
'book': 'http://www.gutenberg.org/files/23700/23700-h/23700-h.htm http://www.granger.com/results.asp?inline=true&image=0058539&wwwflag=4&itemx=9&screenwidth=1440'
},
{
'src' : 'img/207/jerusalem_delivered.jpg',
'title': 'Tasso, Jerusalem Delivered',
'id': 5,
'room': '207',
'desc': "Torquatto Tasso's masterpiece \"Gerusalemme liberata\" (\"Jerusalem Delivered\") is an Italian epic poem completed in 1581. It tells the story of a Christian army during hte First Crusade, which took back Jerusalem from Turkish rule in 1099.",
'links': 'http://www.britannica.com/topic/Gerusalemme-liberata',
'book': 'http://www.gutenberg.org/cache/epub/392/pg392-images.html'
},
{
'src' : 'img/207/scapino.jpg',
'title': 'Commedia dell\'arte, Scapino',
'id': 6,
'room': '207',
'desc': "The \"Commedia dell'arte\" was a form of Italian theater popular from the 16th-18th centuries. Largely improvisational, these plays drew upon stock characters, motifs, and stories to create lively comedic scenes. The character, Scapin (shown left, identified by his bearded mask, extending his hand), is known for his cowardice and inclination to flee from battle. This particular scene is likely taken from the French playwright Moliere's \"Les Fourberies de Scapin\"." ,
'links': 'http://www.britannica.com/topic/Scapin http://www.britannica.com/art/commedia-dellarte',
'book': 'http://www.gutenberg.org/files/8776/8776-h/8776-h.htm'
},
{
'src' : 'img/207/el_cid.jpg',
'title': 'El Cid',
'id': 7,
'room': '207',
'desc': "\"El Cid\" (1049 - 1099) was medieval Spain's most famous and powerful ruler. El Cid led the Castilian military to many victories against Muslim and Christian kingdoms alike. After being exiled in 1081, he fought for the Muslim rulers of Zaragoza (located in present day eastern Spain), eventually conquering the kingdom-city of Valencia and gaining the popular support of both the Muslim and Christian populations over which he ruled.",
'links': 'http://www.britannica.com/biography/the-Cid',
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
'desc': "The \"Romance of the Rose\" was one of the most popular poems of the Middle Ages. Spanning more than 21,000 lines, the work tells the story of man wooing a woman (represented by a rose) inside a garden (representing civil society and courtly love). The scene here shows the lover at the end of the poem, attaining the rose; the staff in his hand and sacks around his waist are fully intended to be understood as sexually symbolic.",
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
'desc': "\"Gargantua\" (1564) and \"Pantagruel\" (1532) were the titles of french novelist Francois Rabelais' masterpieces. They are satirical works that use the adventures of the giant Gargantua and his son Pantagruel as commentaries on the styles and fashions of French society. This window depicts Gargantua upon his horse, \"the most hideously great mare\", on his way to Paris to receive an education.",
'links': 'http://www.britannica.com/biography/Francois-Rabelais http://www.britannica.com/topic/Gargantua-and-Pantagruel',
'book': 'http://www.gutenberg.org/files/1200/1200-h/1200-h.htm'
},
{
'src' : 'img/210/moliere.jpg',
'title': 'Moliere, Le Malade Imaginaire',
'id': 13,
'room': '210',
'desc': "\"Le Malade Imaginaire\" (\"The Imaginary Invalid\") is a three-act comedy published in 1674 by the French playwright Moliere about Argan, a hypochondriac who fears death and doctors. NEED TO READ ORIGINAL SOURCE.",
'links': 'http://www.britannica.com/topic/The-Imaginary-Invalid',
'book': 'http://www.gutenberg.org/files/9070/9070-h/9070-h.htm'
},
{
'src' : 'img/210/animals_sick_of_the_plague.jpg',
'title': 'La Fontaine, Animals Sick of the Plague',
'id': 14,
'room': '210',
'desc': "This poem, from the \"Fables\" of French poet Jean de la Fontaine, recounts the story of a group of animals who are made ill by the plague. As the animals - largely drawn from Aesop\'s fables - bicker about who caused the plague to fall upon them, each lying about not committing certain crimes, an honest donkey admits that he ate grass that did not belong to him, and is unjustly convicted and hanged.",
'links': 'http://www.britannica.com/biography/Jean-de-La-Fontaine',
'book': 'http://www.gutenberg.org/files/7241/7241.txt'
},
{
'src' : 'img/210/voltaire.jpg',
'title': 'Voltaire Crowned at the Theatre',
'id': 15,
'room': '210',
'desc': "Voltaire (1694-1778) remains one of the most famous of all French writers. After a long, successful life of writing satirical works, philosophical treatises, and practicing diplomacy, Voltaire returned to Paris in 1778 after being away for 28 years. At the opening of his play \"Irene\", Voltaire was crowned in his box; his excitement on this occassion impaired his health, and he died just three months later.",
'links': 'http://www.britannica.com/biography/Voltaire',
'book': 'https://www.gutenberg.org/files/19942/19942-h/19942-h.htm'
},
{
'src' : 'img/210/funeral_of_atala.jpg',
'title': 'Chateaubriand, Funeral of Atala',
'id': 16,
'room': '210',
'desc': "François-Auguste-René, also known as Chateaubriand, was one of France's first Romantic writers. His epic Atala (1801) tells the story of a Christian girl who has taken a vow of chastity, but falls in love with a Natchez Native American man (the Natchez tribe was located in the Lower Mississippi Valley). She chooses to commit suicide rather than choose between love and religion. Chateaubriand's works on Christian themes earned him the respect of Napoleon, who made him a French ambassador.",
'links': 'http://www.britannica.com/biography/Francois-Auguste-Rene-vicomte-de-Chateaubriand http://www.britannica.com/topic/Atala',
'book': 'http://www.gutenberg.org/files/44427/44427.txt'
},
{
'src' : 'img/210/de_musset.jpg',
'title': 'De Musset Comforted by his Muse',
'id': 17,
'room': '210',
'desc': "NEED TO FIND ORIGINAL SOURCE TO CONFIRM POEM",
'links': 'http://www.britannica.com/biography/Alfred-de-Musset',
'book': ''
},
{
'src' : 'img/210/three_musketeers.jpg',
'title': 'Dumas, The Three Musketeers',
'id': 18,
'room': '210',
'desc': "Alexandre Dumas\' \"The Three Musketeers\" (1844) recounts the escapades of four heroes during the reigns of Louis XIII and Louis XIV. The main character, D'Artagnan, joins the three musketeers - Athos, Porthos, and Aramis - in a variety of adventures, with the powerful Cardinal Richelieu in the background all the while.", 
'links': 'http://www.britannica.com/topic/The-Three-Musketeers',
'book': 'http://www.gutenberg.org/files/1257/1257-h/1257-h.htm'
},
{
'src' : 'img/210/hunchback.jpg',
'title': 'Victor Hugo, Hunchback of Notre Dame',
'id': 19,
'room': '210',
'desc': 'Victor Hugo\'s famous work The Hunchback of Notre Dame (1831) recounts the tale of the deformed outcast Quasimodo, the bell ringer of Paris\' most famous cathedral. In this window\'s scene, Quasimodo falls in love with the gypsy girl Esmeralda when she takes pity on him after he is beaten by an angry mob. The archdeacon Claude Frollo, who also desires Esmeralda, frames the gypsy girl for the murder of the dashing Captain Phoebus; Esmeralda hangs, and Quasimodo throws Claude Frollo from the bell tower. In the end, Quasimodo dies beside Esmeralda.',
'links': 'http://www.britannica.com/topic/The-Hunchback-of-Notre-Dame',
'book': "http://www.gutenberg.org/files/2610/2610-h/2610-h.htm"
},
{
'src' : 'img/210/cyrano.jpg',
'title': 'Cyrano de Bergerac',
'id': 20,
'room': '210',
'desc': "Cyrano de Bergerac (1898) is a play by Edmond Rostand about a gallant, talented man named Cyrano who believes he cannot find love because of his enormous nose. Madly in love with Roxane, Cyrano hatches a plot with his friend Christian to win her heart; Cyrano will use his literary talents to write love poems to Roxane, and Christian will use these words to win her heart. Roxane falls in love with Christian, who later dies in battle. Years later, Cyrano reveals himself as the true author of the poems, and Roxane realizes it is Cyrano she truly loves.",
'links': 'http://www.britannica.com/topic/Cyrano-de-Bergerac-play-by-Rostand',
'book': 'http://www.gutenberg.org/files/1254/1254-h/1254-h.htm'
},
{
'src' : 'img/213/knight_of_the_swan.jpg',
'title': 'Knight of the Swan',
'id': 21,
'room': '213',
'desc': "In the medieval story of the Swan Knight, a mysterious hero in a boat pulled by a swan offers to fight to save a damsel's kingdom provided that she must never ask his name. After the Swan Knight and the girl marry, she forgets her promise and asks him his name, and he departs immediately. While this particular scene is taken from the original French version of the tale, entitled \"Chevalier au Cygne\", a later German version \"Loherangrin\" would be the inspiration for an opera by Richard Wagner, \"Logengrin.\"",
'links': 'http://www.britannica.com/topic/Lohengrin-German-legendary-figure',
'book': 'https://en.wikisource.org/wiki/Curious_Myths_of_the_Middle_Ages/The_Knight_of_the_Swan'
},
{
'src' : 'img/213/tristan.jpg',
'title': 'Tristan and Iseult',
'id': 22,
'room': '213',
'desc': "Tristan and Iseult can be thought of as a kind of medieval-Celtic \"Romeo and Juliet\"; a young man, Tristan, journeys to Ireland to ask if the princess Iseult will marry his uncle King Mark of Cornwall. On the way, Tristan drinks a love potion intended for Iseult and King Mark, and the young man and the princess fall deeply in love. King Mark, in his anger, attempts to trap the lovers into being convicted of crimes; he succeeds, although Tristan and Iseult escape to a forest. Mark, however, finds them, and Tristan decides to hand Iseult over to the king and leave the country. In Brittany, he marries another girl named Iseult, whom he does not love. Later, upon being poisoned in battle, Tristan calls for the Iseult he truly loves to heal him - if she agrees to come to his aid, her ship will have a white sail; if not, it will be black. Tristan's wife Iseult, who is jealous of her husband's true love, tells the dying man that the ship has a black sail. Princess Iseult, upon arrival, sees that she has arrived too late to save her true love, and she dies next to him.",
'links': 'http://www.britannica.com/biography/Tristan-and-Isolde',
'book': 'http://www.gutenberg.org/files/14244/14244-h/14244-h.htm'
},
{
'src' : 'img/213/thor.jpg',
'title': 'Thor',
'id': 23,
'room': '213',
'desc': "This particular story about Thor, the Norse thunder god, comes from the \"Poetic Edda\", a Germanic manuscript from the 13th century. This window depicts a scene from Thor's adventures, Chapter XIV, when the giant Hymer (left) and Thor (with his hammer raised) fish for the serpent Jormungand. Just as Thor is about to strike Jormungand, a scared Hymer cuts the fishing line, allowing the serpent to escape.",
'links': 'http://www.britannica.com/topic/Edda http://norse-mythology.org/gods-and-creatures/giants/jormungand/',
'book': 'http://www.gutenberg.org/files/18947/18947-h/18947-h.htm'
},
{
'src' : 'img/213/russian_folk_story.jpg',
'title': 'Russian Folk Story',
'id': 24,
'room': '213',
'desc': "CANNOT IDENTIFY WITHOUT ORIGINAL SOURCE",
'links': '',
'book': ''
},
{
'src' : 'img/213/reynard.jpg',
'title': 'Reynard the Fox',
'id': 25,
'room': '213',
'desc': "Reynard is well-established character in European literary traditon; the stereotype of the fox as a sly and cunning animal comes partially from tales about Reynard. While Reynard has his beginnings in the medieval bestiaries of the 10th and 11th centuries, the most noteworthy development of the character comes from the 1174 French illuminated manuscripts with chapters (known then as \"branches\") of the Roman de Renart stories. This window depicts perhaps the most famous tale surrounding Reynard, the Nun's Priest Tale from Geoffrey Chaucer's Canterbury Tales. Here, a disguised Reynard convinces the vain rooster Chanticleer to sing - giving the fox the opportunity to strike.",
'links': 'http://www.britannica.com/topic/Reynard-the-Fox-literary-character',
'book': 'http://english.fsu.edu/canterbury/nun.html'
},
{
'src' : 'img/213/st_brendan.jpg',
'title': 'Voyage of St. Brendan',
'id': 26,
'room': '213',
'desc': "The first manuscripts of The Voyage of St. Brendan appeared around the year 900. The overtly Christian legend recounts the maritime travels of St. Brendan, one of Ireland's most venerated saints, as he journeys to an island believed to be Paridise, \"The Promised Land of the Saints\", after encountering a variety of sea monsters and fantastic islands. The epic became well-known across Europe, and maps with St. Brendan's Isle (supposedly located near the Canary Islands) were used during Christopher Columbus' time.",
'links': 'http://www.britannica.com/biography/Saint-Brendan http://www.newadvent.org/cathen/02758c.htm',
'book': ''
},
{
'src' : 'img/213/beowulf.jpg',
'title': 'Beowulf',
'id': 27,
'room': '213',
'desc': "Beowulf is considered the greatest literary achievement in Old English literature. Likely written between 700 and 750, the poem recounts the adventures of a prince named Beowulf. When Beowulf sails to the kingdom of King Hrothgar, he finds the king stricken with fear over the nightly visits of the monster Grendel, who murders many of the kingdom's warriors. Beowulf vows to kill Grendel, which he does later that night; however, Grendel's mother seeks revenge for her son's death, and kills several warriors as well. Beowulf finds Grendel's mother and kills her as well, winning the praise and affection of King Hrothgar. Beowulf returns home and becomes king, ruling over the Geats for many years. When a dragon begins to destroy the kingdom, however, an aged Beowulf becomes mortally wounded while killing the monster.",
'links': 'http://www.britannica.com/topic/Beowulf',
'book': 'http://www.gutenberg.org/files/16328/16328-h/16328-h.htm'
},
{
'src' : 'img/213/charlemagne.jpg',
'title': 'Charlemagne',
'id': 28,
'room': '213',
'desc': "Charlemagne, King of the Franks, also known as Charles the Great or Carolus Magnus, ruled most of Western Europe from 774 to 814 - it was the first time Western Europe had been united since the fall of the Roman empire. This window shows Charlemagne being crowned Holy Roman Emperor by Pope Leo III in St. Peter's Basilica on Christmas Day of 800, demonstrating Charlemagne's commitment to protect Christianity (and the Pope in Rome, who was facing danger from a Germanic group called the Lombards). Charlemagne is also largely responsible for the spread of literacy and manuscript creation throughout Europe in what is now known as the Carolingian Renaissance.",
'links': 'http://www.britannica.com/biography/Charlemagne https://www.khanacademy.org/humanities/history/ancient-medieval/medieval/v/charlemagne-an-introduction',
'book': ''
},
{
'src' : 'img/213A/speculum1.jpg',
'title': 'Speculum Humanae Salvationis',
'id': 29,
'room': '213A',
'desc': "The Speculum Humanae Salvationis (\"Mirror of Human Salvation\") was a bestselling anonymous illustrated work of popular theology in the late Middle Ages. Its contents are based upon the Christian idea that the Old Testament prefigured, or foretold, the events of the New Testament. The original version is in rhyming Latin verse, and contains a series of New Testament events each with three Old Testament ones that prefigure it. It is one of the most common books found as an illuminated manuscript. These particular scenes are taken from a manuscript presented to Elihu Yale in 1814 that remains in Yale's collection today; it is believed to be the first illuminated medieval manuscript in an American collegiate library.",
'links': 'http://brbl-dl.library.yale.edu/vufind/Record/3435732 https://www.wikiwand.com/en/Speculum_Humanae_Salvationis',
'book': ''
},
{
'src' : 'img/213A/speculum2.jpg',
'title': 'Speculum Humanae Salvationis',
'id': 30,
'room': '213A',
'desc': "The Speculum Humanae Salvationis (\"Mirror of Human Salvation\") was a bestselling anonymous illustrated work of popular theology in the late Middle Ages. Its contents are based upon the Christian idea that the Old Testament prefigured, or foretold, the events of the New Testament. The original version is in rhyming Latin verse, and contains a series of New Testament events each with three Old Testament ones that prefigure it. It is one of the most common books found as an illuminated manuscript. These particular scenes are taken from a manuscript presented to Elihu Yale in 1814 that remains in Yale's collection today; it is believed to be the first illuminated medieval manuscript in an American collegiate library.",
'links': 'http://brbl-dl.library.yale.edu/vufind/Record/3435732 https://www.wikiwand.com/en/Speculum_Humanae_Salvationis',
'book': ''
},
{
'src' : 'img/213A/speculum3.jpg',
'title': 'Speculum Humanae Salvationis',
'id': 31,
'room': '213A',
'desc': "The Speculum Humanae Salvationis (\"Mirror of Human Salvation\") was a bestselling anonymous illustrated work of popular theology in the late Middle Ages. Its contents are based upon the Christian idea that the Old Testament prefigured, or foretold, the events of the New Testament. The original version is in rhyming Latin verse, and contains a series of New Testament events each with three Old Testament ones that prefigure it. It is one of the most common books found as an illuminated manuscript. These particular scenes are taken from a manuscript presented to Elihu Yale in 1814 that remains in Yale's collection today; it is believed to be the first illuminated medieval manuscript in an American collegiate library.",
'links': 'http://brbl-dl.library.yale.edu/vufind/Record/3435732 https://www.wikiwand.com/en/Speculum_Humanae_Salvationis',
'book': ''
},
{
'src' : 'img/213A/speculum4.jpg',
'title': 'Speculum Humanae Salvationis',
'id': 32,
'room': '213A',
'desc': "The Speculum Humanae Salvationis (\"Mirror of Human Salvation\") was a bestselling anonymous illustrated work of popular theology in the late Middle Ages. Its contents are based upon the Christian idea that the Old Testament prefigured, or foretold, the events of the New Testament. The original version is in rhyming Latin verse, and contains a series of New Testament events each with three Old Testament ones that prefigure it. It is one of the most common books found as an illuminated manuscript. These particular scenes are taken from a manuscript presented to Elihu Yale in 1814 that remains in Yale's collection today; it is believed to be the first illuminated medieval manuscript in an American collegiate library.",
'links': 'http://brbl-dl.library.yale.edu/vufind/Record/3435732 https://www.wikiwand.com/en/Speculum_Humanae_Salvationis',
'book': ''
},
{
'src' : 'img/213A/speculum5.jpg',
'title': 'Speculum Humanae Salvationis',
'id': 33,
'room': '213A',
'desc': "The Speculum Humanae Salvationis (\"Mirror of Human Salvation\") was a bestselling anonymous illustrated work of popular theology in the late Middle Ages. Its contents are based upon the Christian idea that the Old Testament prefigured, or foretold, the events of the New Testament. The original version is in rhyming Latin verse, and contains a series of New Testament events each with three Old Testament ones that prefigure it. It is one of the most common books found as an illuminated manuscript. These particular scenes are taken from a manuscript presented to Elihu Yale in 1814 that remains in Yale's collection today; it is believed to be the first illuminated medieval manuscript in an American collegiate library.",
'links': 'http://brbl-dl.library.yale.edu/vufind/Record/3435732 https://www.wikiwand.com/en/Speculum_Humanae_Salvationis',
'book': ''
},
{
'src' : 'img/213A/speculum6.jpg',
'title': 'Speculum Humanae Salvationis',
'id': 34,
'room': '213A',
'desc': "The Speculum Humanae Salvationis (\"Mirror of Human Salvation\") was a bestselling anonymous illustrated work of popular theology in the late Middle Ages. Its contents are based upon the Christian idea that the Old Testament prefigured, or foretold, the events of the New Testament. The original version is in rhyming Latin verse, and contains a series of New Testament events each with three Old Testament ones that prefigure it. It is one of the most common books found as an illuminated manuscript. These particular scenes are taken from a manuscript presented to Elihu Yale in 1814 that remains in Yale's collection today; it is believed to be the first illuminated medieval manuscript in an American collegiate library.",
'links': 'http://brbl-dl.library.yale.edu/vufind/Record/3435732 https://www.wikiwand.com/en/Speculum_Humanae_Salvationis',
'book': ''
},
{
'src' : 'img/213A/speculum7.jpg',
'title': 'Speculum Humanae Salvationis',
'id': 35,
'room': '213A',
'desc': "The Speculum Humanae Salvationis (\"Mirror of Human Salvation\") was a bestselling anonymous illustrated work of popular theology in the late Middle Ages. Its contents are based upon the Christian idea that the Old Testament prefigured, or foretold, the events of the New Testament. The original version is in rhyming Latin verse, and contains a series of New Testament events each with three Old Testament ones that prefigure it. It is one of the most common books found as an illuminated manuscript. These particular scenes are taken from a manuscript presented to Elihu Yale in 1814 that remains in Yale's collection today; it is believed to be the first illuminated medieval manuscript in an American collegiate library.",
'links': 'http://brbl-dl.library.yale.edu/vufind/Record/3435732 https://www.wikiwand.com/en/Speculum_Humanae_Salvationis',
'book': ''
},
{
'src' : 'img/213A/speculum8.jpg',
'title': 'Speculum Humanae Salvationis',
'id': 36,
'room': '213A',
'desc': "The Speculum Humanae Salvationis (\"Mirror of Human Salvation\") was a bestselling anonymous illustrated work of popular theology in the late Middle Ages. Its contents are based upon the Christian idea that the Old Testament prefigured, or foretold, the events of the New Testament. The original version is in rhyming Latin verse, and contains a series of New Testament events each with three Old Testament ones that prefigure it. It is one of the most common books found as an illuminated manuscript. These particular scenes are taken from a manuscript presented to Elihu Yale in 1814 that remains in Yale's collection today; it is believed to be the first illuminated medieval manuscript in an American collegiate library.",
'links': 'http://brbl-dl.library.yale.edu/vufind/Record/3435732 https://www.wikiwand.com/en/Speculum_Humanae_Salvationis',
'book': ''
},
{
'src' : 'img/214/king_lear.jpg',
'title': 'Shakespeare - King Lear',
'id': 37,
'room': '214',
'desc': "At this beginning of this tragedy, the vain King Lear requires his three daughters to declare their love for him in order to receive their inheritance of the kingom. The sly Goneril and Regan, secretly plotting to remove their father from power, make elegant speeches, while the honest Cordelia refuses to pronounce such a false statement of love. Cordelia is banished, and shortly afterward Regan and Goneril retract their promised support for King Lear. In this scene, Regan stands beside her husband, the Duke of Cornwall, refuses to give shelter to King Lear (kneeling) and his soldiers.",
'links': 'http://www.britannica.com/topic/King-Lear',
'book': 'http://www.gutenberg.org/cache/epub/1128/pg1128-images.html'
},
{
'src' : 'img/214/lady_macbeth.jpg',
'title': 'Shakespeare - Lady MacBeth',
'id': 38,
'room': '214',
'desc': "Lady MacBeth, one of the central characters in Shakespeare's tragedy MacBeth (1607), goes mad with guilt after driving her husband - a general named Macbeth - to kill King Duncan of Scotland and MacBeth's friend, Banquo. After her famous sleepwalking scene in Act V, during which she recounts the murders of various characters in the play, Lady MacBeth commits suicide offstage.",
'links': 'http://www.britannica.com/topic/Macbeth-by-Shakespeare',
'book': 'http://www.gutenberg.org/cache/epub/2264/pg2264-images.html'
},
{
'src' : 'img/214/hamlet.jpg',
'title': 'Shakespeare - Hamlet',
'id': 39,
'room': '214',
'desc': "Shakespeare's tragedy Hamlet tells the tale of Prince Hamlet as he seeks to avenge his father's death at the hands of his uncle Claudius. In this scene, Hamlet and his friend Horatio visit the gravediggers, who are clearing out old graves to make room for the recently-deceased Ophelia (who goes mad over her father Polonius' death). One of the gravediggers gives Hamlet the skull of the jester Yorick, whom Hamlet remembers from his youth; the resulting speech is a famous and poignant reflection on the equality and inevitability of death for all people.",
'links': 'http://www.britannica.com/topic/Hamlet-by-Shakespeare',
'book': 'http://www.gutenberg.org/cache/epub/1524/pg1524-images.html'
},
{
'src' : 'img/214/merchant_of_venice.jpg',
'title': 'Shakespeare - The Merchant of Venice',
'id': 40,
'room': '214',
'desc': "In this comedy, the protagonist Bassanio hopes to win the hand of the fair Portia, whose father mandates in his will that his daughter's suitors must play a guessing game in order to marry her; the suitor must choose between three chests (one of gold, one of silver, and one of lead), and select the one which contains Portia's Portait. In this scene, Bassanio is about to choose the correct chest - the leaden one.",
'links': 'http://www.britannica.com/topic/The-Merchant-of-Venice',
'book': 'http://www.gutenberg.org/cache/epub/1515/pg1515-images.html'
},
{
'src' : 'img/214/helena.jpg',
'title': 'Midsummer Night\'s Dream',
'id': 41,
'room': '214',
'desc': "Helena is one of the four young lovers in one of Shakespeare's most popular comedies, \"A Midsummer Night's Dream.\" Helena truly loves her fiance Demetrius, but finds herself rejected as Demetrius consistently pursues Hermia. Hermia, in turn, is in love with Lysander. A variety of fairies and elves complicate the situation by accidentally giving Lysander a love potion intended for Demetrius, both young men fall pursue Helena; Helena, shocked by this sudden development, believes that she is being mocked by both men. Ultimately, the forest creatures ensure a happy ending by using the love potion correctly on the sleeping young couples.",
'links': 'http://www.britannica.com/topic/A-Midsummer-Nights-Dream-play-by-Shakespeare',
'book': 'http://www.gutenberg.org/cache/epub/2242/pg2242-images.html'
},
{
'src' : 'img/214/falstaff.jpg',
'title': 'Merry Wives of Windsor',
'id': 42,
'room': '214',
'desc': "This comedy recounts the tricks of two married women - Mistress Page and Mistress Ford - as they toy with both their husbands' emotions and the advances of the fat knight Falstaff. This window is from Act III, Scene III, in which Falstaff hides in a stinky laundry basket to hide from Mistress Ford's husband, Ford, much to the amusement of the two wives. Falstaff is then promptly dumped into the river Thames by servants.",
'links': 'http://www.britannica.com/topic/The-Merry-Wives-of-Windsor',
'book': 'http://www.gutenberg.org/files/23044/23044-h/23044-h.htm'
},
{
'src' : 'img/215/john_silver.jpg',
'title': 'Treasure Island, John Silver',
'id': 43,
'room': '215',
'desc': "Long John Silver is one of the central characters in Robert Louis Stevenson's \"Treasure Island,\" a story about pirates hunting for treasure. While the pirate serves as a father figure to the book's narrator, Jim Hawkins, his villanous deeds and leadership of the mutiny to overthrow Captain Flint become apparent as the story unfolds.",
'links': 'http://www.britannica.com/topic/Treasure-Island',
'book': 'https://www.gutenberg.org/files/120/120-h/120-h.htm'
},
{
'src' : 'img/215/blessed_damozel.jpg',
'title': 'Rossetti, Blessed Damozel',
'id': 44,
'room': '215',
'desc': "Dante Gabriel Rossetti was an English poet and painter who was a founding figure of the Pre-Raphaelite Brotherhood. His poem \"The Blessed Damozel\" was published in 1850 and is perhaps his best known work; inspired in part by Poe's \"The Raven,\" the poem describes a damozel, or damsel, looking down upon her lover from Heaven and hoping for their reunion in the afterlife. The scene in the window is a copy of Rossetti's painting of the same name, finished about twenty years after the poem.",
'links': 'http://www.britannica.com/biography/Dante-Gabriel-Rossetti',
'book': 'http://www.bartleby.com/246/719.html'
},
{
'src' : 'img/215/oliver.jpg',
'title': 'Dickens, Oliver Twist Asking for More',
'id': 45,
'room': '215',
'desc': "Charles Dickens' famous satire of English society recounts the adventures of the orphan Oliver Twist. This scene, from the beginning of the story, depicts Oliver asking the greedy parish official Mr. Bumble for more gruel (\"Please, sir, I want some more\")- an action which results in his getting thrown out of the workhouse. After this encounter, Oliver Twist learns the rules of the street from a group of pickpockets who include famous characters like the Artful Dodger and Fagin.",
'links': 'http://www.britannica.com/topic/Oliver-Twist-novel-by-Dickens',
'book': 'http://www.gutenberg.org/files/730/730-h/730-h.htm'
},
{
'src' : 'img/215/vanity_fair.jpg',
'title': 'Vanity Fair',
'id': 46,
'room': '215',
'desc': "William Makepeace Thankeray's novel Vanity Fair deals mainly with the interwoven fortunes of two women, the wellborn, passive Amelia Sedley and the ambitious, essentially amoral Becky Sharp, the latter perhaps the most memorable character Thackeray created.* In this scene, from Chapter I, Becky is leaving the school for girls run by Miss Pinkerton and heading to Vanity Fair, a world of social climbing and marriages. Becky bids good riddance to the school by throwing a dictionary out of the carriage window: \"But, lo! and just as the coach drove off, Miss Sharp put her pale face out of the window and actually flung the book back into the garden\".",
'links': 'http://www.britannica.com/topic/Vanity-Fair',
'book': 'http://www.bartleby.com/305/1009.html'
},
{
'src' : 'img/215/tam_oshanter.jpg',
'title': 'Burns, Tam o\'Shanter',
'id': 47,
'room': '215',
'desc': "Tam o' Shanter is a wonderful, epic poem in which Robert Burns paints a vivid picture of the drinking classes in the old Scotch town of Ayr in the late 18th century. It is populated by several unforgettable characters, including  Tam himself, his friend Souter Johnnie and his own long-suffering wife Kate, \"Gathering her brows like gathering storm, nursing her wrath to keep it warm\". We are also introduced to Kirkton Jean, the ghostly, \"winsome wench\", Cutty Sark and his gallant horse, Maggie.* The Tam o'Shanter cap, a Scottish hat, is named after the poem.",
'links': 'http://www.robertburns.org.uk/Assets/Poems_Songs/tamoshanter.htm',
'book': 'http://www.robertburns.org.uk/Assets/Poems_Songs/tamoshanter.htm'
},
{
'src' : 'img/215/ivanhoe.jpg',
'title': 'Scott, Ivanhoe, Rowena crowning Ivanhoe',
'id': 48,
'room': '215',
'desc': "Ivanhoe, a chivalrous knight, returns to England after having fought in the Crusades. Disinherited by his father, Cedric, for falling in love with Rowena, who was betrothed to another, Ivanhoe travels in disguise, wins a knightly tournament, and accepts the prize from Rowena. In the end, Ivanhoe and Rowena are united, and they leave England for Spain.*",
'links': 'http://www.britannica.com/topic/Ivanhoe-novel-by-Scott',
'book': 'http://www.gutenberg.org/files/82/82-h/82-h.htm'
},
{
'src' : 'img/215/gullivers_travels.jpg',
'title': 'Swift, Gulliver\'s Travels',
'id': 49,
'room': '215',
'desc': "adventures to four lands. Chapter 5 stealing the fleet glasses protect his eyes",
'links': 'http://www.magnoliabox.com/art/370824/gulliver-stealing-the-blefuscudian-fleet-illustration-from',
'book': 'http://www.gutenberg.org/files/829/829-h/829-h.htm'
},
{
'src' : 'img/215/ancient_mariner.jpg',
'title': 'Coleridge, Rime of the Ancient Mariner',
'id': 50,
'room': '215',
'desc': "On an icebound ship near the South Pole, the mariner and his crew are visited by an albatross, considered a sign of good luck. The ship breaks free of the ice and sails north, followed by the giant bird. Then, inexplicably, the mariner shoots and kills it, bringing a curse upon the vessel. After some confusion, his shipmates vilify him and hang the bird carcass around his neck. The passing of a ghost ship (a bad omen) presages the deaths of all aboard ship except the narrator.* \"Water, water, everywhere,/Nor any drop to drink\".",
'links': 'http://www.britannica.com/topic/The-Rime-of-the-Ancient-Mariner',
'book': 'http://www.poetryfoundation.org/poem/173253'
},
{
'src' : 'img/215/robinson_crusoe.jpg',
'title': 'DeFoe, Robinson Crusoe',
'id': 51,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/pilgrims_progress.jpg',
'title': 'Bunyan, Pilgrim\'s Progress',
'id': 52,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/round_table.jpg',
'title': 'King Arthur and the Knights of the Round Table',
'id': 53,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/everyman.jpg',
'title': 'Everyman',
'id': 54,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/paradise_lost.jpg',
'title': 'Milton, Paradise Lost',
'id': 55,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/fairie_queene.jpg',
'title': 'Spenser, Fairie Queene',
'id': 56,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/amadis_de_gaula.jpg',
'title': 'Amadis de Gaula',
'id': 57,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/218/the_pathfinder.jpg',
'title': 'The Pathfinder',
'id': 58,
'room': '218',
'desc': "In James Fennimore Cooper's The Pathfinder, the protagonist Natty Bumppo is a 40-year-old wilderness scout living near Lake Ontario during the French and Indian War who comes to the aid of a British colonial garrison under attack. He dearly loves Mabel Dunham, daughter of a sergeant. Mabel refuses his offer of marriage because she loves his friend, Jasper Western (under suspicion of being a traitor), in large part because of his fluency in French.",
'links': 'http://www.britannica.com/topic/The-Pathfinder',
'book': 'http://www.gutenberg.org/files/1880/1880-h/1880-h.htm'
},
{
'src' : 'img/218/lionel_lincoln.jpg',
'title': 'Lionel Lincoln',
'id': 59,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/218/homeward_bound.jpg',
'title': 'Homeward Bound',
'id': 60,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/218/mohicans.jpg',
'title': 'Last of the Mohicans',
'id': 61,
'room': '218',
'desc': "The Last of the Mohicans is the most famous novel in The Leatherstocking Tales series, taking place in 1757 during the French and Indian War. Its principal character is Natty Bumppo, also called Hawkeye, now in middle life and at the height of his powers. The story tells of brutal battles with the Iroquois and their French allies, cruel captures, narrow escapes, and revenge. This particular scene is taken from the following quote: \"Placing Alice, then, on the same animal as Cora (Alice and Cora are sisters who are unknowingly being led away astray from their father at Fort William Henry), Magua (the novel's villain)] seized the bridle and commenced his route by plunging deeper into the forest.\" The man on the horse in the far left is Major Duncan Heyward, who is accompanying the two girls.",
'links': 'http://www.britannica.com/topic/The-Last-of-the-Mohicans-novel',
'book': ''
},
{
'src' : 'img/218/the_pioneers.jpg',
'title': 'The Pioneers',
'id': 62,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/218/the_prarie.jpg',
'title': 'The Prarie',
'id': 63,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/218/the_deerslayer.jpg',
'title': 'The Deerslayer',
'id': 64,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/the_virginian.jpg',
'title': 'Owen Wister, The Virginian',
'id': 65,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/silas_lapham.jpg',
'title': 'Howells, Silas Lapham',
'id': 66,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/ramona.jpg',
'title': 'Jackson, Ramona',
'id': 67,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/bachelor.jpg',
'title': 'Reveries of a Bachelor',
'id': 68,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/man_without_a_country.jpg',
'title': 'Hale, Man without a Country',
'id': 69,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/huckleberry_finn.jpg',
'title': 'Clemens, Huckleberry Finn',
'id': 70,
'room': '219',
'desc': "Huckleberry Finn is a novel by Samuel Clemens - better known by his pen name, Mark Twain. Protaganist \"Huck\" runs away from his abusive father and, with his companion, the runaway slave Jim, makes a long and frequently interrupted voyage down the Mississippi River on a raft. During the journey Huck encounters a variety of characters and types in whom the book memorably portrays almost every class living on or along the river. As a result of these experiences, Huck overcomes conventional racial prejudices and learns to respect and love Jim. This image of Huck holding a rabbit is taken from the fronticepiece of the original 1884 book.",
'links': 'http://www.britannica.com/topic/Huckleberry-Finn-novel-by-Twain',
'book': ''
},
{
'src' : 'img/219/innocents_abroad.jpg',
'title': 'Clemens, Innocents Abroad',
'id': 71,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/tar_baby.jpg',
'title': 'Harris, Brer Rabbit and the Tar Baby',
'id': 72,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/hiawatha.jpg',
'title': 'Longfellow, Hiawatha',
'id': 73,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/hester_prynne.jpg',
'title': 'Hawthorne, Hester Prynne',
'id': 74,
'room': '219',
'desc': "The Scarlett Letter is an 1850 novel by Nathaniel Hawthorne, and is one of the greatest works in American literature. The story is set in a village in Puritan New England. The main character is Hester Prynne, a young woman who has borne a child out of wedlock. Hester believes herself a widow, but her husband, Roger Chillingworth, returns to New England very much alive and conceals his identity. He finds his wife forced to wear the scarlet letter "A" on her dress as punishment for her adultery. Chillingworth becomes obsessed with finding the identity of his wife’s former lover. When he learns that the father of Hester’s child is Arthur Dimmesdale, a saintly young minister who is the leader of those exhorting her to name the child’s father, Chillingworth proceeds to torment the guilt-stricken young man. In the end Chillingworth is morally degraded by his pursuit of revenge; Dimmesdale is broken by his own sense of guilt, and he publicly confesses his adultery before dying in Hester’s arms (this scene is shown in the window). Only Hester can face the future bravely as she prepares to begin a new life with her daughter, Pearl, in Europe.",
'links': 'http://www.britannica.com/topic/The-Scarlet-Letter-novel-by-Hawthorne',
'book': ''
},
{
'src' : 'img/219/autocrat.jpg',
'title': '(Missing) Hawthorne, Autocrat of the Breakfast Table',
'id': 75,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/two_years.jpg',
'title': 'Dana, Two Years before the Mast',
'id': 76,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/the_raven.jpg',
'title': 'Poe, The Raven',
'id': 77,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/roaring_camp.jpg',
'title': 'Harte, Luck of Roaring Camp',
'id': 78,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/221/heathen_chinese.jpg',
'title': 'Harte, Heathen Chinee',
'id': 79,
'room': '221',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/uncle_tom.jpg',
'title': 'Stowe, Uncle Tom\'s Cabin',
'id': 80,
'room': '219',
'desc': "Uncle Tom's Cabin is a novel by abolitionist Harriet Beacher Stowe, published in 1851. Dramatizing the plight of slaves, the novel became the best-selling novel of the 19th century and had so great an impact that it is sometimes cited as one of the causes of the American Civil War. While being transported by boat to a slave auction in New Orleans, the protagonist, a saintly, dignified slave named \"Uncle Tom,\" saves the life of Little Eva St. Clare, whose grateful father then purchases Tom. Little Eva and Tom soon become great friends. Always frail, Eva’s health begins to decline rapidly, and on her deathbed she asks her father to free all his slaves. Mr. St. Clare makes plans to set free his slaves but is killed before he can do so, and the brutal Simon Legree, Tom’s new owner, has Tom whipped to death after he refuses to divulge the whereabouts of certain runaway slaves. The books and plays this novel inspired help popularize many common African American stereotypes; thus, what was at one point considered an anti-slavery masterpiece now is felt by some to possess negative connotations.",
'links': 'http://www.britannica.com/topic/Uncle-Toms-Cabin',
'book': ''
},
{
'src' : 'img/219/poor_richard.jpg',
'title': 'Franklin, Poor Richard',
'id': 81,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/ichabod_crane.jpg',
'title': 'Irving, Ichabod Crane and the Headless Horseman',
'id': 82,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/rip_van_winkle.jpg',
'title': 'Rip van Winkle',
'id': 83,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/moby_dick.jpg',
'title': 'Melville, Moby Dick',
'id': 84,
'room': '219',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/221/tom_jones_i.jpg',
'title': 'Fronticepiece, Tom Jones, vol. I.',
'id': 85,
'room': '221',
'desc': "Tom Jones, or \"The History of Tom Jones, a Foundling\" (published 1749), is a multi-volume comic novel by Henry Fielding constructed around a romance plot. Squire Allworthy suspects that the infant whom he adopts and names Tom Jones is the illegitimate child of his servant Jenny Jones. When Tom is a young man, he falls in love with Sophia Western, his beautiful and virtuous neighbour. In the end his true identity is revealed and he wins Sophia’s hand, but numerous obstacles have to be overcome before he achieves this, and in the course of the action the various sets of characters pursue each other from one part of the country to another, giving Fielding an opportunity to paint an incomparably vivid picture of England in the mid-18th century.",
'links': 'http://www.britannica.com/topic/Tom-Jones-novel-by-Fielding',
'book': ''
},
{
'src' : 'img/221/tom_jones_the_wedding.jpg',
'title': 'The Wedding, Joseph Andrews',
'id': 86,
'room': '221',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/tom_jones_vi.jpg',
'title': 'Fronticepiece, Tom Jones, vol. VI.',
'id': 87,
'room': '219',
'desc': "Tom Jones, or \"The History of Tom Jones, a Foundling\" (published 1749), is a multi-volume comic novel by Henry Fielding constructed around a romance plot. Squire Allworthy suspects that the infant whom he adopts and names Tom Jones is the illegitimate child of his servant Jenny Jones. When Tom is a young man, he falls in love with Sophia Western, his beautiful and virtuous neighbour. In the end his true identity is revealed and he wins Sophia’s hand, but numerous obstacles have to be overcome before he achieves this, and in the course of the action the various sets of characters pursue each other from one part of the country to another, giving Fielding an opportunity to paint an incomparably vivid picture of England in the mid-18th century.",
'links': 'http://www.britannica.com/topic/Tom-Jones-novel-by-Fielding',
'book': ''
},
{
'src' : 'img/221/tom_jones_vii.jpg',
'title': 'Fronticepiece, Tom Jones, vol. VII.',
'id': 88,
'room': '221',
'desc': "Tom Jones, or \"The History of Tom Jones, a Foundling\" (published 1749), is a multi-volume comic novel by Henry Fielding constructed around a romance plot. Squire Allworthy suspects that the infant whom he adopts and names Tom Jones is the illegitimate child of his servant Jenny Jones. When Tom is a young man, he falls in love with Sophia Western, his beautiful and virtuous neighbour. In the end his true identity is revealed and he wins Sophia’s hand, but numerous obstacles have to be overcome before he achieves this, and in the course of the action the various sets of characters pursue each other from one part of the country to another, giving Fielding an opportunity to paint an incomparably vivid picture of England in the mid-18th century.",
'links': 'http://www.britannica.com/topic/Tom-Jones-novel-by-Fielding',
'book': ''
},
{
'src' : 'img/215/alice_in_wonderland.jpg',
'title': 'Alice in Wonderland',
'id': 89,
'room': '215',
'desc': "Lewis Carroll's \"Alice's Adventures in Wonderland\" (1865) recounts the fantastic adventures of Alice after she chases the White Rabbit down a rabbit hole. This particular scene is not, as many are led to believe, an illustration of the Queen of Hearts; rather, it depicts the Queen of Heart's enemy, the Duchess, with her family. Like most of Carroll's characters, the Duchess has several strange tendencies; even though her kitchen is filled with pepper, she beats her baby whenever he sneezes, and she enjoys placing her rather pointy chin on Alice's shoulder throughout their conversations. This window is a copy of a drawing by John Tenniel, the most famous illustrator of Carroll's series.",
'links': 'http://www.britannica.com/topic/Alices-Adventures-in-Wonderland',
'book': 'http://www.gutenberg.org/files/11/11-h/11-h.htm'
},
{
'src' : 'img/222/prologue.jpg',
'title': 'The Prologue',
'id': 90,
'room': '222',
'desc': "The Prologue of \"The Canterbury Tales\", also known as the \"General Prologue,\" introduces the ...",
'links': 'http://www.britannica.com/topic/The-Canterbury-Tales',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/chaucer.jpg',
'title': 'Chaucer',
'id': 91,
'room': '222',
'desc': "Geoffrey Chaucer (1342-1400) is one of the most famous poets in the English language and the author of \"The Canterbury Tales.\" Chaucer's work use humor and satire to give modern readers insight into the norms and expectations of the times; as a medieival clerk, he read many books throughout his lifetime, and employed this knowledge in \"The Canterbury Tales.\" The narrator of \"The Canterbury Tales\" is also named Chaucer, although he may be quite different than how Geoffrey Chaucer viewed himself.",
'links': 'http://www.britannica.com/biography/Geoffrey-Chaucer',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/prioress.jpg',
'title': 'Prioress',
'id': 92,
'room': '222',
'desc': "The Prioress is described as a woman who attempts to be fashionable and proper, but ultimately looks silly doing so. The Prioress' tale is based on an anti-Semitic legend of unknown origin that was popular among medieval Christians. The Prioress describes how a widow’s devout young son is abducted by Jews, who are supposedly prompted by Satan to murder the child to stop him from singing a hymn to the Virgin Mary. One of the Jews slits the boy’s throat and casts his body into an open sewer. Miraculously, the boy is still able to sing, and does so until his mother and a group of Christians find him. A provost condemns the guilty Jews to be executed, and before he dies the boy explains how the Virgin enabled him to continue singing after his throat was slit.",
'links': 'http://www.britannica.com/topic/The-Prioresss-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/cook.jpg',
'title': 'Cook',
'id': 93,
'room': '222',
'desc': "In the Prologue, the Cook is described as a knowledgable but disgusting man; a sore on his leg, described in great detail, hints that his kitchen is seldom clean. The Cook's Tale is short and incomplete - the small section that remains tells of a womanizing, gambling apprentice cook who is dismissed from his job. He moves in with a fellow reveler and his wife, a shopkeeper by day and prostitute by night.",
'links': 'http://www.britannica.com/topic/The-Cooks-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/monk.jpg',
'title': 'Monk',
'id': 94,
'room': '222',
'desc': "The brawny, manly, fur-loving Monk relates a series of many tragedies based on the fall from glory of various biblical, classical, and contemporary figures, including Lucifer and Adam; Nero and Julius Caesar; Zenobia, a 3rd-century queen of Palmyra; and several 14th-century kings. After 775 lines of depressing tales, the Knight and the Host interrupt, bored by the list of disasters.",
'links': 'http://www.britannica.com/topic/The-Monks-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/friar.jpg',
'title': 'Friar',
'id': 95,
'room': '222',
'desc': "In the Friar's tale, the summoner (an ecclesiastical court officer) befriends a bailiff, who is the devil in disguise, and the two agree to share the proceeds of their extortions. In one of several humorous scenes, the summoner and devil hear a frustrated man mutter, \"The devil take all, cart, horse, and hay in one!\" The summoner urges the devil to take up the offer, but the devil declines, explaining to his overeager friend that it was not meant as a literal request from the heart, and so he cannot act. Later, when the summoner tries to extract a bribe from a poor widow, and she too asks for the devil to carry him away, the devil asks her if she really means it. When she agrees, he whisks the summoner off to hell - a place that the Friar believes all summoners belong.",
'links': 'http://www.britannica.com/topic/The-Friars-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/merchant.jpg',
'title': 'Merchant',
'id': 96,
'room': '222',
'desc': "This window depicts the wealthy, greedy, and unhappily married Merchant - interestingly, this depiction omits the Merchant's fashionable forked beard, mentioned explicity in the General Prologue. The Merchant's Tale draws on a story of familiar theme, that of an old man whose young wife is unfaithful. Old Januarie is deceived by his young wife, May, and her lover, Damyan, after Januarie suddenly goes blind. The lovers sneak up to the branches of a pear tree above Januarie’s head and begin to make love. An enraged Pluto instantly restores the old man’s sight, but Proserpina allows May to outwit him by explaining that she was fighting with Damyan in the tree because she had been told that doing so would cause Januarie’s sight to be restored.",
'links': 'http://www.britannica.com/topic/The-Merchants-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/clerk.jpg',
'title': 'Clerk',
'id': 97,
'room': '222',
'desc': "The Clerk tells a story taken from Boccaccio\'s \"Decameron\" - an appropriate tale from a character who supposedly loves his books more than his food. In the Clerk's Tale, a marquis marries beautiful low-born Griselde (Griselda) after she agrees to obey his every whim; he then subjects her to a series of cruelties to test her love. He abducts their children, telling Griselde they must die. Years later, he asks her to leave, and later calls her back to decorate his chambers, supposedly for his new wife. Griselde amiably agrees, as she has patiently endured all her previous indignities. At last the marquis relents, proclaiming his love for Griselde; instead of a new wife, the young woman who arrives is Griselde’s grown daughter, and both she and her brother are restored to their mother as a reward for her constancy.",
'links': 'http://www.britannica.com/topic/The-Clerks-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/squire.jpg',
'title': 'Squire',
'id': 98,
'room': '222',
'desc': "The Squire is the young, effeminate son of the Knight with superb singing and dancing skills. The Squire relates an incomplete tale (he is interrupted by the Franklin) of the Tartar king Cambyuskan (Cambuscan), who receives four magical gifts: a brass horse that can fly anywhere safely but at astonishing speed, a sword that can penetrate armour and heal wounds, a mirror that tells of future dangers, and a ring that enables its wearer to understand the speech of birds and to know the medicinal properties of every plant.*",
'links': 'http://www.britannica.com/topic/The-Squires-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/physician.jpg',
'title': 'Physician',
'id': 99,
'room': '222',
'desc': "The Physician (as in Physics and Astronomy, not medicine) tells a tale that is related to both a sotry by the Roman historian Livy and one in the 13th-century Roman de la Rose (\"Romance of the Rose\"). It concerns the lust of the evil judge Appius for the beautiful, chaste Virginia. Plotting a strategy by which he can possess her, the judge instructs his servant to swear in court that Virginia is a slave whom her father abducted. Her father, seeing through the plot, kills her to save her honour and delivers her head to Appius. Although Appius gives an order for the father’s execution, the townspeople rise against the judge and throw him in prison, where he kills himself.*",
'links': 'http://www.britannica.com/topic/The-Physicians-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/wife_of_bath.jpg',
'title': 'Wife of Bath',
'id': 100,
'room': '222',
'desc': "Before the Wife of Bath tells her tale, she offers in a long prologue a condemnation of celibacy and a lusty account of her five marriages. It is for this prologue that her tale is perhaps best known. The tale concerns a knight accused of rape, whose life shall be spared if in one year he discovers what women most desire. He eventually turns to an ugly old witch who promises him the answer that will save his life if he will do the first thing she asks of him. The answer—that it is \"maistrie,\" or sovereignty over men, that women desire—is accepted in court, and the witch then demands that the knight marry her. In bed she asks him if he would wish her ugly yet faithful or beautiful and faithless. He insists the choice must be hers. This concession of her mastery restores her youth and beauty, and they live happily ever after.* ",
'links': 'http://www.britannica.com/topic/The-Wife-of-Baths-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/222/miller.jpg',
'title': 'Miller',
'id': 101,
'room': '222',
'desc': "The drunken, churlish Miller tells a bawdy story of lust and revenge. Alison, the young wife of a carpenter, takes their boarder Nicholas as her lover. When Nicholas convinces the carpenter that Noah’s flood is about to recur, the unwitting husband suspends three tubs from the rafters to serve as lifeboats and uses one for his bed. Alison and Nicholas steal off to her bedroom only to be interrupted the next morning by her admirer Absolon, who stands under the window and begs her for a kiss. Alison offers her backside. Enraged upon discovering the deception, Absolon returns and pleads once more; this time Nicholas assumes the same pose and is rewarded with a scorching branding iron. His cries for water awaken the carpenter, who assumes that the flood is near; he cuts the rope holding his tub and comes crashing through the attic.*",
'links': 'http://www.britannica.com/topic/The-Millers-Tale',
'book': 'http://www.gutenberg.org/cache/epub/2383/pg2383.html'
},
{
'src' : 'img/223/wunderhorn.jpg',
'title': 'Des Knaben Wunderhorn',
'id': 102,
'room': '223',
'desc': "Des Knaben Wunderhorn (\“The Boy’s Magic Horn\”), published in 1805, is an anthology of German folk songs. Its success established its editors, Clemens Brentano and Achim von Arnim, as leaders of the Romantic movement by reviving enthusiasm for the Volkslied (\“folk song,\” or \“peasant song\”) tradition in German lyric poetry. Reputedly genuine folk songs dating from the Middle Ages, many of the poems were, in fact, either anonymously composed by such 17th-century poets as Simon Dach or rewritten by Brentano and Arnim to improve what Arnim called “authentically historical discords.” The work was praised by (and dedicated to) J.W. von Goethe.",
'links': 'http://www.britannica.com/topic/Des-Knaben-Wunderhorn-by-Arnim-and-Brentano',
'book': ''
},
{
'src' : 'img/223/flying_chest.jpg',
'title': 'Anderson\'s Flying Chest',
'id': 103,
'room': '223',
'desc': "\"The Flying Trunk\" is a Danish fairy tale written by Hans Christian Anderson, published in 1839. In the story, a young man squanders his inheritance until he has nothing left but a few shillings, a pair of slippers, and an old dressing-gown. A friend sends him a trunk with directions to pack up and be off. Having nothing to pack, he gets into the trunk himself. The trunk is enchanted and carries him to the land of the Turks. He uses the trunk to visit the sultan's daughter, who is kept in a tower because of a prophecy that her marriage would be unhappy. He persuades her to marry him. When her father and mother visit her tower, he tells them a story. They are impressed and consent to the marriage. To celebrate his upcoming marriage, the young man buys fireworks and flies over the land setting them off. Returning to the earth, a spark incinerates the trunk, and the young man can no longer visit the princess in the tower. Instead, he wanders the world telling stories.",
'links': 'https://www.wikiwand.com/en/The_Flying_Trunk',
'book': ''
},
{
'src' : 'img/223/erlkonig.jpg',
'title': 'Erlkonig',
'id': 104,
'room': '223',
'desc': "The Erlkonig, also called \"The Elf-King,\"  is a dramatic ballad by J.W. von Goethe, written in 1782. The poem is based on the Germanic legend of a malevolent elf who haunts the Black Forest, luring children to destruction. It was translated into English by Sir Walter Scott and set to music in a famous song by Franz Schubert. In the ballad, a father and son are journeying homeward on horseback at night. The son is ill with a fever and believes he sees and hears the Elf King. The father tells him that the form he sees is only the fog and the sound he hears is only the rustling leaves. Nonetheless, the Elf King tries to tempt the boy to come with him. But when the boy again expresses his fear, the Elf King says that if the boy does not come of his own accord, he will be taken forcibly. The father, feeling his son’s fear, spurs his horse on, but when they arrive home, the boy is dead.",
'links': 'http://www.britannica.com/topic/The-Erl-King',
'book': ''
},
{
'src' : 'img/223/vogelweide.jpg',
'title': 'Walther von der Vogelweide',
'id': 105,
'room': '223',
'desc': "Walther von der Vogelweide (1170—1230) was the greatest German lyric poet of the Middle Ages. His poetry emphasized the virtues of a balanced life and reflects his disapproval of those individuals, actions, and beliefs that disturbed this harmony. He was no respecter of persons: whoever came between him and his ideals, even the pope himself, received the full force of his anger. Rather more than half of the 200 or so of Walther’s poems that are extant are political, moral, or religious; the rest are love poems. In his religious poems he preached the need for man actively to meet the claims of his Creator by, for instance, going on pilgrimage or on Crusade; in his moral-didactic poems he praises such human virtues as faithfulness, sincerity, charity, and self-discipline—virtues that were not especially prominent in his own life. As a love poet, he developed a fresh and original treatment of the situations of courtly love and, ultimately, in such poems as the popular “Unter der Linden,” achieved a free, uninhibited style in which the poses of court society gave way before the natural affections of village folk.",
'links': 'http://www.britannica.com/biography/Walther-von-der-Vogelweide',
'book': ''
},
{
'src' : 'img/224/faust_and_gretchen.jpg',
'title': 'Faust and Gretchen',
'id': 106,
'room': '224',
'desc': "Two of the central characters in Goethe's masterwork, Faust and Gretchen enter into a relationship that ultimately spirals into tragedy. With influence from the devil (Mephisto), Faust seduces Gretchen. Later, Gretchen's mother dies from a sleeping potion, administered by Gretchen to obtain privacy so that Faust could visit her. Gretchen discovers she is pregnant. Gretchen's brother condemns Faust, challenges him and falls dead at the hands of Faust and Mephistopheles. Gretchen drowns her illegitimate child and is convicted of the murder. Faust tries to save Gretchen from death by attempting to free her from prison. Finding that she refuses to escape, Faust and the devil flee the dungeon, while voices from Heaven announce that Gretchen shall be saved.",
'links': 'https://www.wikiwand.com/en/Goethe%27s_Faust',
'book': ''
},
{
'src' : 'img/224/mephisto.jpg',
'title': 'Mephisto',
'id': 107,
'room': '224',
'desc': "Mephistopheles, also called Mephisto, is the spirit of the Devil in late settings of the legend of Faust. In Doctor Faustus (published 1604), by the English dramatist Christopher Marlowe, Mephistopheles achieves tragic grandeur as a fallen angel, torn between satanic pride and dark despair. In the drama \"Faust\" by J.W. von Goethe, he is coldhearted, cynical, and witty, always trying to corrupt Faust (God\'s favorite human being). At the end of Goethe’s drama, Faust’s soul escapes from Mephistopheles while he is making improper advances to the angels that have come to rescue it.",
'links': 'http://www.britannica.com/topic/Mephistopheles',
'book': ''
},
{
'src' : 'img/224/gartenhaus.jpg',
'title': 'Goethe\'s Gartenhaus',
'id': 108,
'room': '224',
'desc': "Bought for Goethe by the Duke, the poet lived in this house until moving to the house on Frauenplan. A place of refuge for Goethe, after his death it became a shrine for his admirers. Goethe’s close attachment to the countryside, especially the Ilm valley, is reflected in many of the poems he wrote here, and he often visited the house until shortly before he died. It was in the summerhouse that he crafted famous poems such as ‘Iphigenie’, ‘Egmont’ and ‘Torquato Tasso’.",
'links': 'https://www.weimar.de/en/tourismus/sights/historic-houses/goethes-garden-house/',
'book': ''
},
{
'src' : 'img/224/sorrows_of_werther.jpg',
'title': 'The Sorrows of Werther',
'id': 109,
'room': '224',
'desc': "\"The Sorrows of Young Werther\" (published 1774) by J.W. von Goethe is the story of a sensitive, artistic young man who demonstrates the fatal effects of a preference for absolutes — whether those of love, art, society, or thought. Unable to reconcile his inner, poetic fantasies and ideas with the demands of the everyday world, Werther goes to the country in an attempt to restore his well-being. There he falls in love with Charlotte (Lotte). Werther leaves but later returns, feeling depressed and hopeless no matter where he lives. Torn by unrequited passion and his perception of the emptiness of life, he commits suicide.",
'links': 'http://www.britannica.com/topic/The-Sorrows-of-Young-Werther',
'book': ''
},
{
'src' : 'img/228/tragedy.jpg',
'title': 'Mask of Tragedy',
'id': 110,
'room': '228',
'desc': "Ancient Greek theater masks were made from clay, wood or linen with the attached wig covering the entire head and they had wide open mouths for easier speaking and greater audience visibility. The traditional \"Comedy\" and \"Tragedy\" masks are used now as a universal symbol for drama, and also represent the two sides of Dionysus, as well as the two effects of wine: joyous, Bacchic revelry, and a dark, sorrowful harvest. Wearing a mask pays homage to Dionysus, the god of carnavals and masquerades, and in the earliest days of theater, these masks were offered to the god after performances.",
'links': 'http://www.carnaval.com/mask/birthofmasks.htm',
'book': ''
},
{
'src' : 'img/228/puppet_show.jpg',
'title': 'Puppet Show',
'id': 111,
'room': '228',
'desc': "Marionettes are puppet figures manipulated from above by strings or threads attached to a control. In a simple marionette, the strings are attached in nine places: to each leg, hand, shoulder, and ear and at the base of the spine. By adding strings, more sensitive control of movement is achieved. Among European puppets, marionettes are considered the most delicate and difficult to master; some are capable of imitating almost every human and animal action. This particular scene (origin unknown, likely a creation of the glassmaker G. Owen Bonawit) shows a show of \"Little Red Riding Hood.\"",
'links': 'http://www.britannica.com/art/marionette',
'book': ''
},
{
'src' : 'img/228/comedy.jpg',
'title': 'Mask of Comedy',
'id': 112,
'room': '228',
'desc': "Ancient Greek theater masks were made from clay, wood or linen with the attached wig covering the entire head and they had wide open mouths for easier speaking and greater audience visibility. The traditional \"Comedy\" and \"Tragedy\" masks are used now as a universal symbol for drama, and also represent the two sides of Dionysus, as well as the two effects of wine: joyous, Bacchic revelry, and a dark, sorrowful harvest. Wearing a mask pays homage to Dionysus, the god of carnavals and masquerades, and in the earliest days of theater, these masks were offered to the god after performances.",
'links': 'http://www.carnaval.com/mask/birthofmasks.htm',
'book': ''
},
{
'src' : 'img/229/iphigenia.jpg',
'title': 'Agamemnon sacrificing Iphigenia',
'id': 113,
'room': '229',
'desc': "In this myth, Greek ships on their way to attack Troy were stuck in the port of Aulis because of unfavorable winds; Agamemnon was being punished for killing a sacred deer, which offended the goddess Artemis. Agamemnon was told that the gods would send winds for his ships if he would sacrifice his daughter Iphigenia to Artemis. Knowing that his wife, Clytemnestra, would never agree to the sacrifice, Agamemnon lied and claimed that Iphigenia needed to be send to him at once, as she was to marry the Greek hero Achilles. Achilles, unaware that his name was used in a lie, tried to prevent the sacrifice when he found out what was afoot, but Iphigenia utterly decided to sacrifice herself in honour and of her own volition.",
'links': 'http://www.greekmythology.com/Myths/Mortals/Iphigenia/iphigenia.html http://www.mythencyclopedia.com/Ho-Iv/Iphigenia.html',
'book': ''
},
{
'src' : 'img/229/argonauts.jpg',
'title': 'The Argonauts',
'id': 114,
'room': '229',
'desc': "The Argonauts were a band of 50 heroes in Greek mythology, who in the years before the Trojan War, around 1300 BCE, accompanied Jason to Colchis in his quest to find the Golden Fleece. Their name comes from their ship, Argo, named after its builder, Argus. \"Argonauts\" literally means \"Argo sailors.\"",
'links': 'http://www.britannica.com/topic/Jason-Greek-mythology',
'book': ''
},
{
'src' : 'img/229/proud_frog.jpg',
'title': 'The Proud Frog ("The Frog and the Ox")',
'id': 115,
'room': '229',
'desc': "This window has been moved from its original location in the Benjamin Franklin room. The fable: \"Oh Father,\" said a little Frog to the big one sitting by the side of a pool, \"I have seen such a terrible monster! It was as big as a mountain, with horns on its head, and a long tail, and it had hoofs divided in two.\"  \"Tush, child, tush,\" said the old Frog, \"that was only Farmer White’s Ox. It isn’t so big either; he may be a little bit taller than I, but I could easily make myself quite as broad; just you see.\" So he blew himself out, and blew himself out, and blew himself out. \"Was he as big as that?\" asked he. \"Oh, much bigger than that,\" said the young Frog. Again the old one blew himself out, and asked the young one if the Ox was as big as that. \"Bigger, father, bigger,\" was the reply. So the Frog took a deep breath, and blew and blew and blew, and swelled and swelled and swelled. And then he said: \"I’m sure the Ox is not as big as—\" But at this moment he burst. \"SELF-CONCEIT MAY LEAD TO SELF-DESTRUCTION.\"",
'links': 'http://www.taleswithmorals.com/aesop-fable-the-frog-and-the-ox.htm',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/229/sphinx.jpg',
'title': 'Oedipus and the Sphinx',
'id': 116,
'room': '229',
'desc': "On his way to the city of Thebes, Oedipus encounters a monster called the Sphinx who plagued the region, destroying crops and killing travellers who did not answer its questions. The Sphinx asked Oedipus the same question it asked the rest; what walks on four feet in the morning, two in the afternoon, and three at night? No one had ever answered the question correctly before, and the Sphinx had killed and eaten all of them. Oedipus thought carefully and eventually gave the correct answer; man, who crawls on all fours as a baby; he walks on two legs as an adult; and needs a walking stick when old. The Sphinx, not bearing that its riddle had been answered correctly, killed itself by falling off the rock it was sitting on.",
'links': 'http://www.greekmythology.com/Myths/Mortals/Oedipus/oedipus.html',
'book': ''
},
{
'src' : 'img/230/trojan_horse.jpg',
'title': 'The Trojan Horse',
'id': 117,
'room': '230',
'desc': "The Trojan horse was huge, hollow wooden horse constructed by the Greeks to gain entrance into the city of Troy during the Trojan War. The Greeks, pretending to desert the war, sailed to the nearby island of Tenedos, leaving behind Sinon, who persuaded the Trojans that the horse was an offering to Athena (goddess of war) that would make Troy impregnable. Despite the warnings of some within the gates, the horse was taken inside the city gates. That night Greek warriors emerged from it and opened the gates to let in the returned Greek army. The story is told at length in Book II of the Aeneid and is touched upon in the Odyssey. ",
'links': 'http://www.britannica.com/topic/Trojan-horse',
'book': 'http://www.gutenberg.org/files/228/228-h/228-h.htm'
},
{
'src' : 'img/230/romulus.jpg',
'title': 'Romulus and Remus',
'id': 118,
'room': '230',
'desc': "Romulus and Remus were the legendary founders of Rome. After violating a voy of chastity she was forced to undergo by King Amulius, Rhea gave birth to two children, who were quickly senteced by Amulius to be drowned in the Tiber River. However, the trough in which the boys were placed floated down the river and came to rest at the site of the future Rome; there a she-wolf suckled and fed them until they were found by the herdsman Faustulus. Reared by Faustulus and his wife, the twins became leaders of a band of adventurous youths, eventually killing Amulius and restoring their grandfather (Numitor) to the throne. They subsequently founded a town on the site where they had been saved. However, the twins began to quarrel over who had divine authority to decide which hill of Rome housed a sacred space; when Romulus built a city wall, Remus jumped over it and was killed by his brother.",
'links': 'http://www.britannica.com/biography/Romulus-and-Remus',
'book': ''
},
{
'src' : 'img/230/sirens.jpg',
'title': 'Ulysses and the Sirens',
'id': 119,
'room': '230',
'desc': "In Greek mythology, the Sirens were beautiful but dangerous creatures that lured the sailors with their beautiful voices to their doom, causing the ships to crash on the reefs near their island. In the Odyssey, Odysseus plugged the crew's ears with wax and ordered them to bind him on the mast of the ship. He also told them that no matter how much he begged, they should not untie him. When they passed near the Sirens' island, Odysseus started begging his shipmates to let him go, but none heard him; instead, they tied him even more, and made it past the island safely.",
'links': 'http://www.greekmythology.com/Myths/Creatures/Sirens/sirens.html',
'book': 'http://www.gutenberg.org/ebooks/1727'
},
{
'src' : 'img/232/town_mouse.jpg',
'title': 'The Town Mouse and the Country Mouse',
'id': 120,
'room': '232',
'desc': "A Town Mouse and a Country Mouse were acquaintances, and the Country Mouse one day invited his friend to come and see him at his home in the fields. The Town Mouse came, and they sat down to a dinner of barleycorns and roots, the latter of which had a distinctly earthy flavour. The fare was not much to the taste of the guest, and presently he broke out with \"My poor dear friend, you live here no better than the ants. Now, you should just see how I fare! My larder is a regular horn of plenty. You must come and stay with me, and I promise you you shall live on the fat of the land.\" So when he returned to town he took the Country Mouse with him, and showed him into a larder containing flour and oatmeal and figs and honey and dates. The Country Mouse had never seen anything like it, and sat down to enjoy the luxuries his friend provided: but before they had well begun, the door of the larder opened and some one came in. The two Mice scampered off and hid themselves in a narrow and exceedingly uncomfortable hole. Presently, when all was quiet, they ventured out again; but some one else came in, and off they scuttled again. This was too much for the visitor. \"Good-bye,\" said he, \"I\'m off. You live in the lap of luxury, I can see, but you are surrounded by dangers; whereas at home I can enjoy my simple dinner of roots and corn in peace.\"",
'links': 'http://www.bartleby.com/17/1/7.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/peacock.jpg',
'title': 'The Peacock and the Magpie',
'id': 121,
'room': '232',
'desc': "The birds once met together to choose a king, and among others the Peacock was a candidate. Spreading his showy tail, and stalking up and down with affected grandeur, he caught the eyes of the silly multitude by his brilliant appearance, and was elected with acclamation. Just as they were going to proclaim him, the Magpie stept forth into the midst of the assembly, and thus addressed the new king: \"May it please your majesty elect to permit a humble admirer to propose a question. As our king, we put our lives and fortunes in your hands. If, therefore, the Eagle, the Vulture, and the Kite, our unruly brethren, should in the future, as they have in times past, make a descent upon us, what means would you take for our defence?\" This pithy question opened the eyes of the birds to the weakness of their choice. They cancelled the election, and have ever since regarded the Peacock as a vain pretender, and considered the Magpie to be as good a speaker as any of their number.",
'links': 'http://fablesofaesop.com/peacock-magpie.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/prometheus.jpg',
'title': 'Prometheus Bound',
'id': 122,
'room': '232',
'desc': "This window has been moved from its original location in Room 229 - it would have originally been switched with the \"Proud Frog\" window. In Greek mythology, Zeus was infuriated at being tricked by Prometheus (a Titan) into receiving bones instead of meat as an acceptable form of sacrifice and decided to hide fire from mortals as punishment. Prometheus, in an effort to help humanity again, managed to steal fire back and give it to humans. Zeus punished Prometheus by having him chained to a rock, where an eagle ate his liver during the day, and the liver was regenerated during the night due to Prometheus' immortality. He was later saved by the demigod Hercules.*",
'links': 'http://www.greekmythology.com/Titans/Prometheus/prometheus.html',
'book': 'http://www.gutenberg.org/files/27458/27458-h/27458-h.htm'
},
{
'src' : 'img/232/kid_and_wolf.jpg',
'title': 'The Kid and the Wolf',
'id': 123,
'room': '232',
'desc': "A kid was perched up on the top of a house, and looking down saw a Wolf passing under him. Immediately he began to revile and attack his enemy. \"Murderer and thief,\" he cried, \"what do you here near honest folks\’ houses? How dare you make an appearance where your vile deeds are known?\" \"Curse away, my young friend,\" said the Wolf. \"IT IS EASY TO BE BRAVE FROM A SAFE DISTANCE.\"",
'links': 'http://www.bartleby.com/17/1/16.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/grasshopper.jpg',
'title': 'The Grasshopper and the Ants',
'id': 124,
'room': '232',
'desc': "In a field one summer’s day a Grasshopper was hopping about, chirping and singing to its heart’s content. An Ant passed by, bearing along with great toil an ear of corn he was taking to the nest. \"Why not come and chat with me,\" said the Grasshopper, \"instead of toiling and moiling in that way?\" \"I am helping to lay up food for the winter,\" said the Ant, \"and recommend you to do the same.\" \"Why bother about winter?\" said the Grasshopper; \"we have got plenty of food at present.\" But the Ant went on its way and continued its toil. When the winter came the Grasshopper had no food, and found itself dying of hunger, while it saw the ants distributing every day corn and grain from the stores they had collected in the summer. Then the Grasshopper knew: \"IT IS BEST TO PREPARE FOR THE DAYS OF NECESSITY.\"",
'links': 'http://www.bartleby.com/17/1/36.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/dog_in_manger.jpg',
'title': 'The Dog in the Manger',
'id': 125,
'room': '232',
'desc': "A dog looking out for its afternoon nap jumped into the Manger of an Ox and lay there cosily upon the straw. But soon the Ox, returning from its afternoon work, came up to the Manger and wanted to eat some of the straw. The Dog in a rage, being awakened from its slumber, stood up and barked at the Ox, and whenever it came near attempted to bite it. At last the Ox had to give up the hope of getting at the straw, and went away muttering: \"AH, PEOPLE OFTEN GRUDGE OTHERS WHAT THEY CANNOT ENJOY THEMSELVES.\"",
'links': 'http://www.bartleby.com/17/1/40.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/fox_and_lion.jpg',
'title': 'The Fox and the Lion',
'id': 126,
'room': '232',
'desc': "When first the Fox saw the Lion he was terribly frightened, and ran away and hid himself in the wood. Next time however he came near the King of Beasts he stopped at a safe distance and watched him pass by. The third time they came near one another the Fox went straight up to the Lion and passed the time of day with him, asking him how his family were, and when he should have the pleasure of seeing him again; then turning his tail, he parted from the Lion without much ceremony. \"FAMILIARITY BREEDS CONTEMPT\"",
'links': 'http://www.bartleby.com/17/1/34.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/crow_and_pitcher.jpg',
'title': 'The Crow and the Pitcher',
'id': 127,
'room': '232',
'desc': "A Crow, half-dead with thirst, came upon a Pitcher which had once been full of water; but when the Crow put its beak into the mouth of the Pitcher he found that only very little water was left in it, and that he could not reach far enough down to get at it. He tried, and he tried, but at last had to give up in despair. Then a thought came to him, and he took a pebble and dropped it into the Pitcher. Then he took another pebble and dropped it into the Pitcher. Then he took another pebble and dropped it into the Pitcher. Then he took another pebble and dropped it into the Pitcher. Then he took another pebble and dropped it into the Pitcher. At last, at last, he saw the water mount up near him, and after casting in a few more pebbles he was able to quench his thirst and save his life. \"LITTLE BY LITTLE DOES THE TRICK.\"",
'links': 'http://www.bartleby.com/17/1/55.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/stag.jpg',
'title': 'The Stag looking into the Water',
'id': 128,
'room': '232',
'desc': "A stag saw his shadow reflected in the water, and greatly admired the size of his horns, but felt angry with himself for having such weak feet. While he was thus contemplating himself, a Lion appeared at the pool. The Stag betook himself to flight, and kept himself with ease at a safe distance from the Lion, until he entered a wood and became entangled with his horns. The Lion quickly came up with him and caught him. When too late he thus reproached himself: \"Woe is me! How have I deceived myself! These feet which would have saved me I despised, and I gloried in these antlers which have proved my destruction.\" \"WE OFTEN DESPISE WHAT IS MOST USEFUL TO US.\"",
'links': 'http://www.taleswithmorals.com/the-stag-at-the-pool.htm',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/wolf_and_crane.jpg',
'title': 'The Wolf and the Crane',
'id': 129,
'room': '232',
'desc': "A Wolf had been gorging on an animal he had killed, when suddenly a small bone in the meat stuck in his throat and he could not swallow it. He soon felt terrible pain in his throat, and he ran up and down groaning and groaning and seeking for something to relieve the pain. He tried to induce every one he met to remove the bone. \"I would give anything,\" said he, \"if you would take it out.\" At last the Crane agreed to try, and told the Wolf to lie on his side and open his jaws as wide as he could. Then the Crane put its long neck down the Wolf’s throat, and with its beak loosened the bone, till at last got it out. \"Will you kindly give me the reward you promised?\" said the Crane. The Wolf grinned and showed his teeth and said: \"Be content. You have put your head inside a Wolf’s mouth and taken it out again in safety; that ought to be reward enough for you.\" \"GRATITUDE AND GREED GO NOT TOGETHER.\"",
'links': 'http://www.bartleby.com/17/1/5.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/fighting_cocks.jpg',
'title': 'The Fighting Cocks',
'id': 130,
'room': '232',
'desc': "Two game cocks were fiercely fighting for the mastery of the farmyard.  One at last put the other to flight.  The vanquished Cock skulked away and hid himself in a quiet corner, while the conqueror, flying up to a high wall, flapped his wings and crowed exultingly with all his might.  An Eagle sailing through the air pounced upon him and carried him off in his talons.  The vanquished Cock immediately came out of his corner, and ruled henceforth with undisputed mastery. \"PRIDE GOES BEFORE DESTRUCTION.\"",
'links': 'http://www.aesopfables.com/cgi/aesop1.cgi?2&TheFightingCocksandtheEagle',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/dog_shadow.jpg',
'title': 'The Dog and his Shadow',
'id': 131,
'room': '232',
'desc': "It happened that a Dog had got a piece of meat and was carrying it home in his mouth to eat it in peace. Now on his way home he had to cross a plank lying across a running brook. As he crossed, he looked down and saw his own shadow reflected in the water beneath. Thinking it was another dog with another piece of meat, he made up his mind to have that also. So he made a snap at the shadow in the water, but as he opened his mouth the piece of meat fell out, dropped into the water and was never seen more. \"BEWARE LEST YOU LOSE THE SUBSTANCE BY GRASPING AT THE SHADOW.\"",
'links': 'http://www.bartleby.com/17/1/3.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/fox_and_grapes.jpg',
'title': 'The Fox and the Grapes',
'id': 132,
'room': '232',
'desc': "One hot summer’s day a Fox was strolling through an orchard till he came to a bunch of Grapes just ripening on a vine which had been trained over a lofty branch. \"Just the things to quench my thirst,\" quoth he. Drawing back a few paces, he took a run and a jump, and just missed the bunch. Turning round again with a One, Two, Three, he jumped up, but with no greater success. Again and again he tried after the tempting morsel, but at last had to give it up, and walked away with his nose in the air, saying: \"I am sure they are sour.\" \"IT IS EASY TO DESPISE WHAT YOU CANNOT GET.\"",
'links': 'http://www.bartleby.com/17/1/31.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/dog_and_wolf.jpg',
'title': 'The Dog and the Wolf',
'id': 133,
'room': '232',
'desc': "A gaunt Wolf was almost dead with hunger when he happened to meet a House-dog who was passing by. \"Ah, Cousin,\" said the Dog. \"I knew how it would be; your irregular life will soon be the ruin of you. Why do you not work steadily as I do, and get your food regularly given to you?\" \"I would have no objection,\" said the Wolf, \"if I could only get a place.\" \"I will easily arrange that for you,\" said the Dog; \"come with me to my master and you shall share my work.\" So the Wolf and the Dog went towards the town together. On the way there the Wolf noticed that the hair on a certain part of the Dog’s neck was very much worn away, so he asked him how that had come about. \"Oh, it is nothing,\" said the Dog. \"That is only the place where the collar is put on at night to keep me chained up; it chafes a bit, but one soon gets used to it.\" \"Is that all?\" said the Wolf. \"Then good-bye to you, Master Dog.\" \"BETTER STARVE FREE THAN BE A FAT SLAVE.\"",
'links': 'http://www.bartleby.com/17/1/28.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/lion_and_mouse.jpg',
'title': 'The Lion and the Mouse',
'id': 134,
'room': '232',
'desc': "Once when a Lion was asleep a little Mouse began running up and down upon him; this soon wakened the Lion, who placed his huge paw upon him, and opened his big jaws to swallow him. \"Pardon, O King,\" cried the little Mouse: \"forgive me this time, I shall never forget it: who knows but what I may be able to do you a turn some of these days?\" The Lion was so tickled at the idea of the Mouse being able to help him, that he lifted up his paw and let him go. Some time after the Lion was caught in a trap, and the hunters, who desired to carry him alive to the King, tied him to a tree while they went in search of a waggon to carry him on. Just then the little Mouse happened to pass by, and seeing the sad plight in which the Lion was, sent up to him and soon gnawed away the ropes that bound the King of the Beasts. \"Was I not right?\" said the little Mouse. \"LITTLE FRIENDS MAY PROVE GREAT FRIENDS.\"",
'links': 'http://www.bartleby.com/17/1/11.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/old_man_and_death.jpg',
'title': 'The Old Man and Death',
'id': 135,
'room': '232',
'desc': "An old labourer, bent double with age and toil, was gathering sticks in a forest. At last he grew so tired and hopeless that he threw down the bundle of sticks, and cried out: \"I cannot bear this life any longer. Ah, I wish Death would only come and take me!\" As he spoke, Death, a grisly skeleton, appeared and said to him: \"What wouldst thou, Mortal? I heard thee call me.\" \"Please, sir,\" replied the woodcutter, \"would you kindly help me to lift this bundle of sticks onto my shoulder?\" \"WE WOULD OFTEN BE SORRY IF OUR WISHES WERE GRATIFIED.\"",
'links': 'http://www.bartleby.com/17/1/69.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/tortoise_and_hare.jpg',
'title': 'The Tortoise and the Hare',
'id': 136,
'room': '232',
'desc': "The Hare was once boasting of his speed before the other animals. \"I have never yet been beaten,\" said he, \"when I put forth my full speed. I challenge any one here to race with me.\" The Tortoise said quietly, \"I accept your challenge.\" \"That is a good joke,\" said the Hare; \"I could dance round you all the way.\" \"Keep your boasting till you’ve beaten,\" answered the Tortoise. \"Shall we race?\" So a course was fixed and a start was made. The Hare darted almost out of sight at once, but soon stopped and, to show his contempt for the Tortoise, lay down to have a nap. The Tortoise plodded on and plodded on, and when the Hare awoke from his nap, he saw the Tortoise just near the winning-post and could not run up in time to save the race. Then said the Tortoise: \"SLOW AND STEADY WINS THE RACE.\"",
'links': 'http://www.bartleby.com/17/1/68.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
},
{
'src' : 'img/232/ass_lion.jpg',
'title': 'The Ass in the Lion\'s Skin',
'id': 137,
'room': '232',
'desc': "An Ass once found a Lion’s skin which the hunters had left out in the sun to dry. He put it on and went towards his native village. All fled at his approach, both men and animals, and he was a proud Ass that day. In his delight he lifted up his voice and brayed, but then every one knew him, and his owner came up and gave him a sound cudgelling for the fright he had caused. And shortly afterwards a Fox came up to him and said: \"Ah, I knew you by your voice.\" \"FINE CLOTHES MAY DISGUISE, BUT SILLY WORDS WILL DISCLOSE A FOOL.\"",
'links': 'http://www.bartleby.com/17/1/49.html',
'book': 'http://www.gutenberg.org/files/19994/19994-h/19994-h.htm'
}

];

$scope.rooms = [
    { title: '207', oldRoom: 'Romance Languages Study', currentRoom: 'Electronic Collections', id: 207 },
    { title: '210', oldRoom: 'Romance Languages Seminar', currentRoom: 'East Asian Seminar Room', id: 210 },
    { title: '212', oldRoom: 'Special Collection', currentRoom: 'East Asian Collection', id: 212 },
    { title: '213', oldRoom: 'Special Collection', currentRoom: 'East Asian Collection Curator\'s Office', id: 213 },
    { title: '214', oldRoom: 'English Seminar', currentRoom: '', id: 214 },
    { title: '215', oldRoom: 'English Study', currentRoom: 'History Reading Room', id: 215 },
    { title: '218', oldRoom: 'Cooper Collection', currentRoom: '', id: 218 },
    { title: '219', oldRoom: 'Yale Collection of American Literature', currentRoom: '', id: 219 },
    { title: '221', oldRoom: 'Fielding Collection', currentRoom: '', id: 221 },
    { title: '222', oldRoom: 'English Seminar Room', currentRoom: '', id: 222 },
    { title: '223', oldRoom: 'Germanic Seminar', currentRoom: '', id: 223 },
    { title: '224', oldRoom: 'Speck Collection', currentRoom: '', id: 224 },
    { title: '228', oldRoom: 'Drama Collection', currentRoom: '', id: 228 },
    { title: '229', oldRoom: 'Classics Seminar', currentRoom: '', id: 229 },
    { title: '230', oldRoom: 'Classics Study', currentRoom: '', id: 230 },
    { title: '232', oldRoom: 'Special Collection', currentRoom: 'Benjamin Franklin Collection', id: 232 }
  ];


  var windowId = $stateParams.windowId;
  
  $scope.window = $scope.images[windowId - 1];

  var roomId = $stateParams.roomId;


}]);

