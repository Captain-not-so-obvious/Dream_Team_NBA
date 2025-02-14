// Lista de jogadores com suas respectivas posições
const players = [
  //Armadores
    { name: "Nate Archibald", positions: ["Armador"], image: "img/Nate Archibald.jpeg" },
    { name: "Dave Bing", positions: ["Armador", "Ala-Armador"], image: "img/Dave Bing.JPG" },
    { name: "Bob Cousy", positions: ["Armador"], image: "img/Bob Cousy.jpeg" },
    { name: "Stephen Curry", positions: ["Armador"], image: "img/Stephen Curry.png" },
    { name: "Walt Frazier", positions: ["Armador"], image: "img/Walt Frazier.jpg" },
    { name: "Hal Greer", positions: ["Armador", "Ala-Armador"], image: "img/Hal Greer.jpg" },
    { name: "James Harden", positions: ["Armador", "Ala-Armador"], image: "img/James Harden.png" },
    { name: "Allen Iverson", positions: ["Armador", "Ala-Armador"], image: "img/Allen Iverson.jpg" },
    { name: "Magic Johnson", positions: ["Armador"], image: "img/Magic Johnson.jpg" },
    { name: "Jason Kidd", positions: ["Armador"], image: "img/Jason Kidd.png" },
    { name: "Damian Lillard", positions: ["Armador"], image: "img/Damian Lillard.jpg" },
    { name: "Pete Maravich", positions: ["Armador", "Ala-armador"], image: "img/Pete Maravich.jpeg" },
    { name: "Earl Monroe", positions: ["Armador", "Ala-Armador"], image: "img/Earl Monroe.jpg" },
    { name: "Steve Nash", positions: ["Armador"], image: "img/Steve Nash.png" },
    { name: "Chris Paul", positions: ["Armador"], image: "img/Chris Paul.jpg" },
    { name: "Gary Payton", positions: ["Armador"], image: "img/Gary Payton.jpg" },
    { name: "Oscar Robertson", positions: ["Armador"], image: "img/Oscar Robertson.jpeg" },
    { name: "John Stockton", positions: ["Armador"], image: "img/John Stockton.jpg" },
    { name: "Isiah Thomas", positions: ["Armador"], image: "img/Isiah Thomas.jpg" },
    { name: "Dwyane Wade", positions: ["Armador", "Ala-Armador"], image: "img/Dwyane Wade.jpg" },
    { name: "Jerry West", positions: ["Armador", "Ala-Armador"], image: "img/Jerry West.jpg" },
    { name: "Russel Westbrook", positions: ["Armador"], image: "img/Russel Westbrook.jpg" },
    { name: "Lenny Wilkens", positions: ["Armador"], image: "img/Lenny Wilkens.jpg" },
    //Ala-armadores
    { name: "Ray Allen", positions: ["Ala-Armador"], image: "img/Ray Allen.png" },
    { name: "Kobe Bryant", positions: ["Ala-Armador", "Ala"], image: "img/Kobe Bryant.jpg" },
    { name: "Clyde Drexler", positions: ["Ala-Armador", "Ala"], image: "img/Clyde Drexler.jpg" },
    { name: "George Gervin", positions: ["Ala-Armador", "Ala"], image: "img/George Gervin.jpeg"},
    { name: "Sam Jones", positions: ["Ala-Armador",], image: "img/Sam Jones.jpg" },
    { name: "Michael Jordan", positions: ["Ala-Armador", "Ala"], image: "img/Michael Jordan.png" },
    { name: "Reggie Miller", positions: ["Ala-Armador"], image: "img/Reggie Miller.jpg" },
    { name: "Paul Pierce", positions: ["Ala-Armador", "Ala"], image: "img/Paul Pierce.jpg" },
    { name: "Bill Sharman", positions: ["Ala-Armador"], image: "img/Bill Sharman.jpg" },
    //Alas
    { name: "Giannis Antetokounmpo", positions: ["Ala", "Ala-Pivô", "Pivô"], image: "img/Giannis Antetokounmpo.png" },
    { name: "Carmelo Anthony", positions: ["Ala", "Ala-Pivô"], image: "img/Carmelo Anthony.jpg" },
    { name: "Paul Arizin", positions: ["Ala"], image: "img/Paul Arizin.JPG" },
    { name: "Rick Barry", positions: ["Ala"], image: "img/Rick Barry.jpeg" },
    { name: "Elgin Baylor", positions: ["Ala"], image: "img/Elgin Baylor.jpg" },
    { name: "Larry Bird", positions: ["Ala", "Ala-Pivô"], image: "img/Larry Bird.jpg" },
    { name: "Billy Cunningham", positions: ["Ala"], image: "img/Billy Cuningham.jpg" },
    { name: "Dave DeBusschere", positions: ["Ala", "Ala-Pivô"], image: "img/Dave DeBusschere.jpeg" },
    { name: "Kevin Durant", positions: ["Ala", "Ala-Pivô"], image: "img/Kevin Durant.png" },
    { name: "Julius Erving", positions: ["Ala"], image: "img/Julius Erving.jpg" },
    { name: "Kevin Garnett", positions: ["Ala", "Ala-Pivô", "Pivô"], image: "img/Kevin Garnett.jpg" },
    { name: "John Havlicek", positions: ["Ala", "Ala-Pivô"], image: "img/John Havlicek.jpg" },
    { name: "Lebron James", positions: ["Ala", "Ala-Pivô"], image: "img/Lebron James.jpg" },
    { name: "Kawhi Leonard", positions: ["Ala", "Ala-Pivô"], image: "img/Kawhi Leonard.png" },
    { name: "Jerry Lucas", positions: ["Ala", "Ala-Pivô", "Pivô"], image: "img/Jerry Lucas.jpeg" },
    { name: "Bob McAdoo", positions: ["Ala", "Ala-Pivô", "Pivô"], image: "img/Bob McAdoo.jpg" },
    { name: "Scottie Pippen", positions: ["Ala"], image: "img/Scottie Pippen.png" },
    { name: "Dennis Rodman", positions: ["Ala", "Ala-Pivô"], image: "img/Dennis Rodman.jpg" },
    { name: "Wes Unseld", positions: ["Ala", "Ala-Pivô", "Pivô"], image: "img/Wes Unseld.jpeg" },
    { name: "Dominique Wilkins", positions: ["Ala"], image: "img/Dominique Wilkins.jpg" },
    { name: "James Worthy", positions: ["Ala"], image: "img/James Worthy.jpg" },	
    //Ala-Pivôs
    { name: "Charles Barkley", positions: ["Ala-Pivô"], image: "img/Charles Barkley.jpg" },
    { name: "Dave Cowens", positions: ["Ala-Pivô", "Pivô"], image: "img/Dave Cowens.jpeg" },
    { name: "Anthony Davis", positions: ["Ala-Pivô", "Pivô"], image: "img/Anthony Davis.jpg" },
    { name: "Tim Duncan", positions: ["Ala-Pivô", "Pivô"], image: "img/Tim Duncan.jpg" },
    { name: "Patrick Ewing", positions: ["Ala-Pivô", "Pivô"], image: "img/Patrick Ewing.jpg" },
    { name: "Elvin Hayes", positions: ["Ala-Pivô", "Pivô"], image: "img/Elvin Hayes.jpeg" },
    { name: "Karl Malone", positions: ["Ala-Pivô"], image: "img/Karl Malone.jpg" },
    { name: "Moses Malone", positions: ["Ala-Pivô", "Pivô"], image: "img/Moses Malone.jpg" },
    { name: "Kevin McHale", positions: ["Ala-Pivô", "Pivô"], image: "img/Kevin McHale.jpg" },
    { name: "Dirk Nowitzki", positions: ["Ala-Pivô", "Pivô"], image: "img/Dirk Nowitzki.jpg" },
    { name: "Bob Pettit", positions: ["Ala-Pivô", "Pivô"], image: "img/Bob Pettit.jpeg" },
    { name: "Willis Reed", positions: ["Ala-Pivô", "Pivô"], image: "img/Willis Reed.jpg" },
    { name: "Dolph Schayes", positions: ["Ala-Pivô", "Pivô"], image: "img/Dolph Schayes.jpeg"},
    { name: "Nate Thurmond", positions: ["Ala-Pivô", "Pivô"], image: "img/Nate Thurmond.jpeg" },
    //Pivôs
    { name: "Kareem Abdul-Jabbar", positions: ["Pivô"], image: "img/Kareem Abdul-Jabbar.jpg" },
    { name: "Wilt Chamberlain", positions: ["Pivô"], image: "img/Wilt Chamberlain.jpg" },
    { name: "George Mikan", positions: ["Pivô"], image: "img/George Mikan.jpg" },
    { name: "Hakeem Olajuwon", positions: ["Pivô"], image: "img/Hakeem Olajuwon.jpg" },
    { name: "Shaquille O'Neal", positions: ["Pivô"], image: "img/Shaquille O'Neal.png" },
    { name: "Robert Parish", positions: ["Pivô"], image: "img/Robert Parish.jpg" },
    { name: "David Robinson", positions: ["Pivô"], image: "img/David Robinson.jpg" },
    { name: "Bill Russell", positions: ["Pivô"], image: "img/Bill Russel.jpg" },
    { name: "Bill Walton", positions: ["Pivô"], image: "img/Bill Walton.jpg" },
  ];

  function generateTeam() {
    const positions = {
        "Armador": "armador",
        "Ala-Armador": "ala-armador",
        "Ala": "ala",
        "Ala-Pivô": "ala-pivo",
        "Pivô": "pivo"
    };

    const selectedPlayers = {};
    const usedPlayers = new Set();

    for (const position in positions) {
        const availablePlayers = players.filter(player => player.positions.includes(position) && !usedPlayers.has(player.name));
        const randomPlayer = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
        selectedPlayers[position] = randomPlayer;
        usedPlayers.add(randomPlayer.name);
    }

    for (const position in selectedPlayers) {
        const player = selectedPlayers[position];
        const elementId = positions[position];
        document.getElementById(elementId).innerHTML = `<img src="${player.image}" alt="${player.name}"><br>${player.name}`;
    }
}
