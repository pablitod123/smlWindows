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
'desc': "Tristan and Iseult can be thought of as a kind of medieval-Celtic \"Romeo and Juliet\"; a young man, Tristan, journeys to Ireland to ask if the princess Iseult will marry his uncle King Mark of Cornwall. On the way, Tristan drinks a love potion intended for Iseult and King Mark, and the young man and the princess fall deeply in love. King Mark, in his anger, attempts to trap the lovers into being convicted of crimes; he succeeds, although Tristan and Iseult escape to a forest. Mark, however, finds them, and Tristan decides to hand Iseult over to the king and leave the country. In Brittany, he marries another girl named Iseult, whom he does not love. Later, upon being poisoned in battle, Tristan calls for the Iseult he loves to heal him - if she agrees to come to his aid, her ship will have a white sail; if not, it will be black. Tristan's wife Iseult, who is jealous of her husband's true love, tells the dying man that the ship has a black sail. Princess Iseult, upon arrival, sees that she has arrived too late to save her true love, and she dies next to him.",
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
'src' : 'img/213A/_.jpg',
'title': 'Humanae 1',
'id': 29,
'room': '213A',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/213A/_.jpg',
'title': 'Humanae 2',
'id': 30,
'room': '213A',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/213A/_.jpg',
'title': 'Humanae 3',
'id': 31,
'room': '213A',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/213A/_.jpg',
'title': 'Humanae 4',
'id': 32,
'room': '213A',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/213A/_.jpg',
'title': 'Humanae 5',
'id': 33,
'room': '213A',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/213A/_.jpg',
'title': 'Humanae 6',
'id': 34,
'room': '213A',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/213A/_.jpg',
'title': 'Humanae 7',
'id': 35,
'room': '213A',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/213A/_.jpg',
'title': 'Humanae 8',
'id': 36,
'room': '214',
'desc': "",
'links': '',
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
'desc': "Helena is a primary character in one of Shakespeare's most popular comedies, \"A Midsummer Night's Dream.\" Helena truly loves her fiance Demetrius, but finds herself rejected as Demetrius consistently pursues Hermia. Hermia, in turn, is in love with ____.",
'links': 'http://www.britannica.com/topic/A-Midsummer-Nights-Dream-play-by-Shakespeare',
'book': 'http://www.gutenberg.org/cache/epub/2242/pg2242-images.html'
},
{
'src' : 'img/214/falstaff.jpg',
'title': 'Merry Wives of Windsor',
'id': 42,
'room': '214',
'desc': "",
'links': 'http://www.britannica.com/topic/The-Merry-Wives-of-Windsor',
'book': 'http://www.gutenberg.org/files/23044/23044-h/23044-h.htm'
},
{
'src' : 'img/215/john_silver.jpg',
'title': 'Treasure Island, John Silver',
'id': 43,
'room': '215',
'desc': "",
'links': 'http://www.britannica.com/topic/Treasure-Island',
'book': 'https://www.gutenberg.org/files/120/120-h/120-h.htm'
},
{
'src' : 'img/215/blessed_damozel.jpg',
'title': 'Rossetti, Blessed Damozel',
'id': 44,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/oliver.jpg',
'title': 'Dickens, Oliver Twist Asking for More',
'id': 45,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/vanity_fair.jpg',
'title': 'Vanity Fair',
'id': 46,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/alice_in_wonderland.jpg',
'title': 'Alice in Wonderland',
'id': 100,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/tam_oshanter.jpg',
'title': 'Burns, Tam o\'Shanter',
'id': 47,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/ivanhoe.jpg',
'title': 'Scott, Ivanhoe, Rowena crowning Ivanhoe',
'id': 48,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/gullivers_travels.jpg',
'title': 'Swift, Gulliver\'s Travels',
'id': 49,
'room': '215',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/215/ancient_mariner.jpg',
'title': 'Coleridge, Rhyme of the Ancient Mariner',
'id': 50,
'room': '215',
'desc': "",
'links': '',
'book': ''
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
'desc': "",
'links': '',
'book': ''
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
'desc': "",
'links': '',
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
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
},
{
'src' : 'img/219/.jpg',
'title': '',
'id': 65,
'room': '218',
'desc': "",
'links': '',
'book': ''
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

