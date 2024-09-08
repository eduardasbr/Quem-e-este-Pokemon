let dados = [
    {
        titulo : "Bulbasaur",
        descricao : "Bulbasaur é um Pokémon do tipo Grama e Venenoso, conhecido por ter uma planta nas costas que cresce à medida que ele evolui. Amigável e equilibrado, ele pode absorver energia solar para aumentar seus ataques, como o famoso 'RazorLeaf' e 'SolarBeam'. É versátil tanto em combate quanto fora dele, sendo um dos Pokémon iniciais mais queridos da primeira geração.",
        link : "https://www.pokemon.com/br/pokedex/bulbasaur",
    },
    {
        titulo : "Ivysaur",
        descricao : "Ivysaur é a evolução de Bulbasaur, do tipo Grama e Venenoso. Sua planta nas costas cresce em uma flor em desenvolvimento, sinalizando sua força crescente. Ivysaur é mais robusto e poderoso que sua forma anterior, usando ataques como 'Vine Whip' e 'SolarBeam' com maior eficácia. Ele começa a se preparar para sua evolução final à medida que sua flor se aproxima de florescer completamente.",
        link : "https://www.pokemon.com/br/pokedex/ivysaur",
    },
    {
        titulo : "Venusaur",
        descricao : "Venusaur é a forma final de Bulbasaur, do tipo Grama e Venenoso. Possui uma enorme flor em suas costas, que exala um aroma doce e pode liberar esporos venenosos. Venusaur é um Pokémon imponente e poderoso, capaz de usar ataques como 'SolarBeam' e 'Earthquake'. Sua flor ajuda a absorver energia solar para aumentar sua força em batalha.",
        link : "https://www.pokemon.com/br/pokedex/ivysaur",
    },
    {
            titulo: "Charmander",
            descricao: "Charmander é um Pokémon do tipo Fogo, com aparência de lagarto. É conhecido por sua chama na ponta da cauda, que representa sua força e saúde. Charmander é um dos Pokémon iniciais da primeira geração, com habilidades de fogo poderosas como 'Ember' e 'Flamethrower'.",
            link: "https://www.pokemon.com/br/pokedex/charmander",
        },
        {
            titulo: "Charmeleon",
            descricao: "Charmeleon é a evolução de Charmander, do tipo Fogo. Com uma chama mais intensa e uma atitude mais agressiva, Charmeleon é um lutador feroz. Seus ataques como 'Fire Fang' e 'Flamethrower' são muito eficazes em batalha.",
            link: "https://www.pokemon.com/br/pokedex/charmeleon",
        },
        {
            titulo: "Charizard",
            descricao: "Charizard é a forma final de Charmander, um poderoso Pokémon do tipo Fogo e Voador. Com asas imensas e uma chama capaz de derreter quase qualquer coisa, Charizard é um dos Pokémon mais icônicos e temidos, usando ataques como 'Fire Blast' e 'Fly'.",
            link: "https://www.pokemon.com/br/pokedex/charizard",
        },
        {
            titulo: "Squirtle",
            descricao: "Squirtle é um Pokémon do tipo Água, com a aparência de uma tartaruga. É conhecido por sua carapaça dura e habilidades aquáticas. Squirtle pode usar ataques como 'Water Gun' e 'Hydro Pump' para dominar batalhas aquáticas.",
            link: "https://www.pokemon.com/br/pokedex/squirtle",
        },
        {
            titulo: "Wartortle",
            descricao: "Wartortle é a evolução de Squirtle, mais forte e com uma cauda espessa. Com habilidades aprimoradas, Wartortle é capaz de usar ataques como 'Water Pulse' e 'Surf' de maneira eficaz.",
            link: "https://www.pokemon.com/br/pokedex/wartortle",
        },
        {
            titulo: "Blastoise",
            descricao: "Blastoise é a forma final de Squirtle, um Pokémon do tipo Água imponente com grandes canhões d'água em suas costas. Seus ataques poderosos como 'Hydro Cannon' e 'Ice Beam' fazem dele um adversário formidável.",
            link: "https://www.pokemon.com/br/pokedex/blastoise",
        },
        {
            titulo: "Caterpie",
            descricao: "Caterpie é um Pokémon do tipo Inseto, semelhante a uma lagarta. É conhecido por sua aparência verde e sua habilidade de se transformar rapidamente em formas mais poderosas. Usa ataques como 'String Shot' e 'Tackle'.",
            link: "https://www.pokemon.com/br/pokedex/caterpie",
        },
        {
            titulo: "Metapod",
            descricao: "Metapod é a fase de casulo de Caterpie, do tipo Inseto. É uma forma defensiva que aguarda sua transformação em uma borboleta. Embora não possa atacar, possui uma grande defesa natural.",
            link: "https://www.pokemon.com/br/pokedex/metapod",
        },
        {
            titulo: "Butterfree",
            descricao: "Butterfree é a forma final de Caterpie, uma borboleta do tipo Inseto e Voador. Com habilidades como 'Sleep Powder' e 'Hurricane', Butterfree é conhecido por suas técnicas de controle e ataque aéreo.",
            link: "https://www.pokemon.com/br/pokedex/butterfree",
        },
        {
            titulo: "Weedle",
            descricao: "Weedle é um Pokémon do tipo Inseto e Venenoso, com aparência de uma pequena larva. Possui um ferrão venenoso na cabeça e é conhecido por ataques como 'Poison Sting' e 'String Shot'.",
            link: "https://www.pokemon.com/br/pokedex/weedle",
        },
        {
            titulo: "Kakuna",
            descricao: "Kakuna é a fase de casulo de Weedle, do tipo Inseto e Venenoso. Como Metapod, é uma forma defensiva e espera sua transformação em uma forma mais poderosa.",
            link: "https://www.pokemon.com/br/pokedex/kakuna",
        },
        {
            titulo: "Beedrill",
            descricao: "Beedrill é a forma final de Weedle, uma vespa do tipo Inseto e Venenoso. Com ferrões afiados e habilidades como 'Twineedle' e 'Toxic', Beedrill é conhecido por seu ataque venenoso rápido e letal.",
            link: "https://www.pokemon.com/br/pokedex/beedrill",
        },
        {
            titulo: "Pidgey",
            descricao: "Pidgey é um Pokémon do tipo Normal e Voador, com aparência de pássaro pequeno. É conhecido por suas habilidades de voo e ataques básicos como 'Quick Attack' e 'Gust'.",
            link: "https://www.pokemon.com/br/pokedex/pidgey",
        },
        {
            titulo: "Pidgeotto",
            descricao: "Pidgeotto é a evolução de Pidgey, maior e mais forte. Com habilidades aéreas aprimoradas, pode usar ataques como 'Wing Attack' e 'Hurricane'.",
            link: "https://www.pokemon.com/br/pokedex/pidgeotto",
        },
        {
            titulo: "Pidgeot",
            descricao: "Pidgeot é a forma final de Pidgey, um pássaro majestoso e poderoso. Com sua velocidade e força aérea, Pidgeot usa ataques como 'Air Slash' e 'Brave Bird' com grande eficácia.",
            link: "https://www.pokemon.com/br/pokedex/pidgeot",
        },
        {
            titulo: "Rattata",
            descricao: "Rattata é um Pokémon do tipo Normal, semelhante a um pequeno roedor. É conhecido por sua rapidez e habilidades de ataque rápido como 'Quick Attack' e 'Hyper Fang'.",
            link: "https://www.pokemon.com/br/pokedex/rattata",
        },
        {
            titulo: "Raticate",
            descricao: "Raticate é a evolução de Rattata, um roedor mais forte com dentes afiados e ataques poderosos como 'Crunch' e 'Super Fang'.",
            link: "https://www.pokemon.com/br/pokedex/raticate",
        },
        {
            titulo: "Spearow",
            descricao: "Spearow é um Pokémon do tipo Normal e Voador, com aparência de pássaro pequeno. Conhecido por sua natureza agressiva, usa ataques como 'Peck' e 'Brave Bird'.",
            link: "https://www.pokemon.com/br/pokedex/spearow",
        },
        {
            titulo: "Fearow",
            descricao: "Fearow é a evolução de Spearow, um pássaro maior e mais feroz. Com suas habilidades de voo aprimoradas, pode usar ataques como 'Hyper Beam' e 'Air Slash'.",
            link: "https://www.pokemon.com/br/pokedex/fearow",
        },
        {
            titulo: "Ekans",
            descricao: "Ekans é um Pokémon do tipo Venenoso, semelhante a uma cobra. Possui habilidades de veneno e ataques como 'Wrap' e 'Poison Sting'.",
            link: "https://www.pokemon.com/br/pokedex/ekans",
        },
        {
            titulo: "Arbok",
            descricao: "Arbok é a evolução de Ekans, uma cobra maior e mais temível. Com padrões aterrorizantes em seu corpo, usa ataques como 'Glare' e 'Giga Impact'.",
            link: "https://www.pokemon.com/br/pokedex/arbok",
        },
        {
            titulo: "Pikachu",
            descricao: "Pikachu é um Pokémon do tipo Elétrico, conhecido por suas descargas elétricas e sua aparência adorável. Utiliza ataques como 'Thunderbolt' e 'Quick Attack'.",
            link: "https://www.pokemon.com/br/pokedex/pikachu",
        },
        {
            titulo: "Raichu",
            descricao: "Raichu é a evolução de Pikachu, mais poderoso e com maior capacidade elétrica. Seus ataques incluem 'Thunder' e 'Volt Tackle'.",
            link: "https://www.pokemon.com/br/pokedex/raichu",
        },
        {
            titulo: "Sandshrew",
            descricao: "Sandshrew é um Pokémon do tipo Terra, semelhante a um pequeno tatu. Com sua pele dura, é conhecido por sua habilidade defensiva e ataques como 'Scratch' e 'Sand Attack'.",
            link: "https://www.pokemon.com/br/pokedex/sandshrew",
        },
        {
            titulo: "Sandslash",
            descricao: "Sandslash é a evolução de Sandshrew, com espinhos afiados e habilidades de ataque aprimoradas. Utiliza ataques como 'Fury Swipes' e 'Earthquake'.",
            link: "https://www.pokemon.com/br/pokedex/sandslash",
        },
        {
            titulo: "Nidoran♀",
            descricao: "Nidoran♀ é um Pokémon do tipo Venenoso, com aparência de pequeno roedor. Conhecido por seu veneno e ataques como 'Poison Sting' e 'Scratch'.",
            link: "https://www.pokemon.com/br/pokedex/nidoran-f",
        },
        {
            titulo: "Nidorina",
            descricao: "Nidorina é a evolução de Nidoran♀, mais forte e com habilidades de veneno aprimoradas. Usa ataques como 'Body Slam' e 'Toxic'.",
            link: "https://www.pokemon.com/br/pokedex/nidorina",
        },
        {
            titulo: "Nidoqueen",
            descricao: "Nidoqueen é a forma final de Nidoran♀, uma poderosa Pokémon do tipo Venenoso e Terra. Com habilidades como 'Earth Power' e 'Moonblast', Nidoqueen é um adversário formidável.",
            link: "https://www.pokemon.com/br/pokedex/nidoqueen",
        },
        {
            titulo: "Nidoran♂",
            descricao: "Nidoran♂ é um Pokémon do tipo Venenoso, com aparência de pequeno roedor. Conhecido por seus espinhos venenosos e ataques como 'Leer' e 'Poison Sting'.",
            link: "https://www.pokemon.com/br/pokedex/nidoran-m",
        },
        {
            titulo: "Nidorino",
            descricao: "Nidorino é a evolução de Nidoran♂, mais forte e com habilidades de veneno mais intensas. Utiliza ataques como 'Horn Attack' e 'Toxic Spikes'.",
            link: "https://www.pokemon.com/br/pokedex/nidorino",
        },
        {
            titulo: "Nidoking",
            descricao: "Nidoking é a forma final de Nidoran♂, um Pokémon do tipo Venenoso e Terra com grande poder. Usa ataques devastadores como 'Earthquake' e 'Megahorn'.",
            link: "https://www.pokemon.com/br/pokedex/nidoking",
        },
        {
            titulo: "Clefairy",
            descricao: "Clefairy é um Pokémon do tipo Fada, conhecido por sua aparência adorável e habilidades mágicas. Utiliza ataques como 'Moonblast' e 'Metronome'.",
            link: "https://www.pokemon.com/br/pokedex/clefairy",
        },
        {
            titulo: "Clefable",
            descricao: "Clefable é a evolução de Clefairy, com um poder mágico ainda maior. É conhecido por sua capacidade de aprender uma ampla gama de movimentos, incluindo 'Cosmic Power' e 'Dazzling Gleam'.",
            link: "https://www.pokemon.com/br/pokedex/clefable",
        },
        {
            titulo: "Vulpix",
            descricao: "Vulpix é um Pokémon do tipo Fogo, semelhante a uma pequena raposa com seis caudas. É conhecido por suas habilidades de fogo e ataques como 'Ember' e 'Will-O-Wisp'.",
            link: "https://www.pokemon.com/br/pokedex/vulpix",
        },
        {
            titulo: "Ninetales",
            descricao: "Ninetales é a evolução de Vulpix, uma raposa majestosa com nove caudas. Seus ataques de fogo são devastadores, incluindo 'Flamethrower' e 'Fire Blast'.",
            link: "https://www.pokemon.com/br/pokedex/ninetales",
        },
        {
            titulo: "Jigglypuff",
            descricao: "Jigglypuff é um Pokémon do tipo Normal e Fada, conhecido por sua habilidade de cantar e fazer outros Pokémon adormecerem com 'Sing'.",
            link: "https://www.pokemon.com/br/pokedex/jigglypuff",
        },
        {
            titulo: "Wigglytuff",
            descricao: "Wigglytuff é a evolução de Jigglypuff, com uma grande capacidade de cantar e usar 'Hyper Voice'. Seu corpo elástico também o torna resistente a ataques físicos.",
            link: "https://www.pokemon.com/br/pokedex/wigglytuff",
        },
        {
            titulo: "Zubat",
            descricao: "Zubat é um Pokémon do tipo Venenoso e Voador, semelhante a um morcego. Utiliza ataques como 'Bite' e 'Confuse Ray' para confundir seus adversários.",
            link: "https://www.pokemon.com/br/pokedex/zubat",
        },
        {
            titulo: "Golbat",
            descricao: "Golbat é a evolução de Zubat, um morcego maior e mais perigoso. Com habilidades aprimoradas, usa ataques como 'Air Cutter' e 'Leech Life'.",
            link: "https://www.pokemon.com/br/pokedex/golbat",
        },
        {
            titulo: "Diglett",
            descricao: "Diglett é um Pokémon do tipo Terra, com aparência de um pequeno buraco. Ele se move rapidamente sob o solo e usa ataques como 'Dig' e 'Sandstorm'.",
            link: "https://www.pokemon.com/br/pokedex/diglett",
        },
        {
            titulo: "Dugtrio",
            descricao: "Dugtrio é a evolução de Diglett, com três cabeças saindo do solo. Com uma velocidade impressionante, utiliza ataques como 'Earthquake' e 'Magnitude'.",
            link: "https://www.pokemon.com/br/pokedex/dugtrio",
        },
        {
            titulo: "Meowth",
            descricao: "Meowth é um Pokémon do tipo Normal, com aparência de gato. Conhecido por sua habilidade de andar sobre duas patas e usar ataques como 'Scratch' e 'Pay Day'.",
            link: "https://www.pokemon.com/br/pokedex/meowth",
        },
        {
            titulo: "Persian",
            descricao: "Persian é a evolução de Meowth, uma grande e elegante felina. Com sua velocidade e agilidade, usa ataques como 'Fury Swipes' e 'Hyper Beam'.",
            link: "https://www.pokemon.com/br/pokedex/persian",
        },
        {
            titulo: "Psyduck",
            descricao: "Psyduck é um Pokémon do tipo Água, com aparência de pato e propenso a dores de cabeça. Seus ataques incluem 'Confusion' e 'Water Gun'.",
            link: "https://www.pokemon.com/br/pokedex/psyduck",
        },
        {
            titulo: "Golduck",
            descricao: "Golduck é a evolução de Psyduck, com aparência de pato e habilidades aquáticas avançadas. Usa ataques como 'Hydro Pump' e 'Psychic'.",
            link: "https://www.pokemon.com/br/pokedex/golduck",
        },
        {
            titulo: "Mankey",
            descricao: "Mankey é um Pokémon do tipo Lutador, com aparência de macaco. Conhecido por sua natureza agressiva e ataques como 'Karate Chop' e 'Low Kick'.",
            link: "https://www.pokemon.com/br/pokedex/mankey",
        },
        {
            titulo: "Primeape",
            descricao: "Primeape é a evolução de Mankey, mais furioso e com maior poder de ataque. Usa habilidades como 'Cross Chop' e 'Rage' com grande eficácia.",
            link: "https://www.pokemon.com/br/pokedex/primeape",
        },
        {
            titulo: "Growlithe",
            descricao: "Growlithe é um Pokémon do tipo Fogo, semelhante a um filhote de cachorro. Com sua lealdade e habilidades de fogo, usa ataques como 'Roar' e 'Flame Wheel'.",
            link: "https://www.pokemon.com/br/pokedex/growlithe",
        },
        {
            titulo: "Arcanine",
            descricao: "Arcanine é a evolução de Growlithe, um majestoso Pokémon do tipo Fogo com grande força e velocidade. Utiliza ataques poderosos como 'Flamethrower' e 'Extreme Speed'.",
            link: "https://www.pokemon.com/br/pokedex/arcanine",
        },
        {
            titulo: "Poliwag",
            descricao: "Poliwag é um Pokémon do tipo Água, semelhante a um girino. É conhecido por sua habilidade de nadar e usar ataques como 'Bubble' e 'Water Gun'.",
            link: "https://www.pokemon.com/br/pokedex/poliwag",
        },
        {
            titulo: "Poliwhirl",
            descricao: "Poliwhirl é a evolução de Poliwag, mais robusto e com habilidades aquáticas aprimoradas. Usa ataques como 'Water Gun' e 'Hypnosis'.",
            link: "https://www.pokemon.com/br/pokedex/poliwhirl",
        },
        {
            titulo: "Poliwrath",
            descricao: "Poliwrath é a forma final de Poliwag, um poderoso Pokémon do tipo Água e Lutador. Com habilidades como 'Hydro Pump' e 'Dynamic Punch', é um adversário formidável.",
            link: "https://www.pokemon.com/br/pokedex/poliwrath",
        },
        {
            titulo: "Abra",
            descricao: "Abra é um Pokémon do tipo Psíquico, conhecido por sua habilidade de teletransporte e poderes psíquicos. Utiliza ataques como 'Confusion' e 'Teleport'.",
            link: "https://www.pokemon.com/br/pokedex/abra",
        },
        {
            titulo: "Kadabra",
            descricao: "Kadabra é a evolução de Abra, com poderes psíquicos mais avançados. Usa ataques como 'Psybeam' e 'Psychic' para dominar batalhas.",
            link: "https://www.pokemon.com/br/pokedex/kadabra",
        },
        {
            titulo: "Alakazam",
            descricao: "Alakazam é a forma final de Abra, um Pokémon do tipo Psíquico com uma inteligência extraordinária. Utiliza ataques poderosos como 'Psychic' e 'Shadow Ball'.",
            link: "https://www.pokemon.com/br/pokedex/alakazam",
        },
        {
            titulo: "Machop",
            descricao: "Machop é um Pokémon do tipo Lutador, semelhante a um pequeno atleta. Conhecido por sua força e ataques físicos como 'Karate Chop' e 'Low Kick'.",
            link: "https://www.pokemon.com/br/pokedex/machop",
        },
        {
            titulo: "Machoke",
            descricao: "Machoke é a evolução de Machop, mais musculoso e com habilidades de luta aprimoradas. Usa ataques como 'Rock Slide' e 'Cross Chop'.",
            link: "https://www.pokemon.com/br/pokedex/machoke",
        },
        {
            titulo: "Machamp",
            descricao: "Machamp é a forma final de Machop, um Pokémon do tipo Lutador com quatro braços poderosos. Utiliza ataques devastadores como 'Dynamic Punch' e 'Stone Edge'.",
            link: "https://www.pokemon.com/br/pokedex/machamp",
        },
        {
            titulo: "Bellsprout",
            descricao: "Bellsprout é um Pokémon do tipo Grama e Venenoso, com aparência de uma planta. Usa ataques como 'Vine Whip' e 'Growth' para batalhar.",
            link: "https://www.pokemon.com/br/pokedex/bellsprout",
        },
        {
            titulo: "Weepinbell",
            descricao: "Weepinbell é a evolução de Bellsprout, com uma forma mais robusta e habilidades de planta mais fortes. Utiliza ataques como 'Razor Leaf' e 'Sleep Powder'.",
            link: "https://www.pokemon.com/br/pokedex/weepinbell",
        },
        {
            titulo: "Victreebel",
            descricao: "Victreebel é a forma final de Bellsprout, uma planta carnívora do tipo Grama e Venenoso. Usa ataques como 'Solar Beam' e 'Acid'.",
            link: "https://www.pokemon.com/br/pokedex/victreebel",
        },
        {
            titulo: "Tentacool",
            descricao: "Tentacool é um Pokémon do tipo Água e Venenoso, com aparência de medusa. Utiliza ataques como 'Bubble Beam' e 'Toxic' para batalha.",
            link: "https://www.pokemon.com/br/pokedex/tentacool",
        },
        {
            titulo: "Tentacruel",
            descricao: "Tentacruel é a evolução de Tentacool, uma medusa maior e mais perigosa. Seus tentáculos podem envenenar e usar ataques como 'Hydro Pump' e 'Wrap'.",
            link: "https://www.pokemon.com/br/pokedex/tentacruel",
        },
        {
            titulo: "Geodude",
            descricao: "Geodude é um Pokémon do tipo Pedra e Terra, com aparência de uma pedra com braços. Usa ataques como 'Rock Throw' e 'Magnitude'.",
            link: "https://www.pokemon.com/br/pokedex/geodude",
        },
        {
            titulo: "Graveler",
            descricao: "Graveler é a evolução de Geodude, mais robusto e com habilidades de ataque aprimoradas. Utiliza ataques como 'Rock Slide' e 'Earthquake'.",
            link: "https://www.pokemon.com/br/pokedex/graveler",
        },
        {
            titulo: "Golem",
            descricao: "Golem é a forma final de Geodude, um Pokémon do tipo Pedra e Terra com um corpo esférico e rochoso. Usa ataques devastadores como 'Explosion' e 'Rock Blast'.",
            link: "https://www.pokemon.com/br/pokedex/golem",
        },
        {
            titulo: "Ponyta",
            descricao: "Ponyta é um Pokémon do tipo Fogo, com aparência de um cavalo com chamas na crina. Utiliza ataques como 'Quick Attack' e 'Flame Wheel'.",
            link: "https://www.pokemon.com/br/pokedex/ponyta",
        },
        {
            titulo: "Rapidash",
            descricao: "Rapidash é a evolução de Ponyta, um cavalo de fogo majestoso e rápido. Seus ataques incluem 'Flare Blitz' e 'Fire Spin'.",
            link: "https://www.pokemon.com/br/pokedex/rapidash",
        },
        {
            titulo: "Slowpoke",
            descricao: "Slowpoke é um Pokémon do tipo Água e Psíquico, conhecido por sua lentidão e natureza tranquila. Utiliza ataques como 'Water Gun' e 'Confusion'.",
            link: "https://www.pokemon.com/br/pokedex/slowpoke",
        },
        {
            titulo: "Slowbro",
            descricao: "Slowbro é a evolução de Slowpoke, com uma concha presa em sua cauda. Usa ataques como 'Surf' e 'Psychic' para dominar batalhas.",
            link: "https://www.pokemon.com/br/pokedex/slowbro",
        },
        {
            titulo: "Magnemite",
            descricao: "Magnemite é um Pokémon do tipo Elétrico e Aço, com a aparência de um ímã. Utiliza ataques como 'Thunder Shock' e 'Magnet Bomb'.",
            link: "https://www.pokemon.com/br/pokedex/magnemite",
        },
        {
            titulo: "Magneton",
            descricao: "Magneton é a evolução de Magnemite, formado por três Magnemites unidos. Usa ataques como 'Thunderbolt' e 'Steel Beam' com grande eficácia.",
            link: "https://www.pokemon.com/br/pokedex/magneton",
        },
        {
            titulo: "Farfetch'd",
            descricao: "Farfetch'd é um Pokémon do tipo Normal e Voador, conhecido por carregar um alho-poró como arma. Utiliza ataques como 'Aerial Ace' e 'Fury Cutter'.",
            link: "https://www.pokemon.com/br/pokedex/farfetchd",
        },
        {
            titulo: "Doduo",
            descricao: "Doduo é um Pokémon do tipo Normal e Voador, com duas cabeças e uma velocidade impressionante. Usa ataques como 'Tri Attack' e 'Double Hit'.",
            link: "https://www.pokemon.com/br/pokedex/doduo",
        },
        {
            titulo: "Dodrio",
            descricao: "Dodrio é a evolução de Doduo, com três cabeças e ainda mais velocidade. Utiliza ataques como 'Triple Kick' e 'Brave Bird'.",
            link: "https://www.pokemon.com/br/pokedex/dodrio",
        },
        {
            titulo: "Seel",
            descricao: "Seel é um Pokémon do tipo Água, com aparência de foca. Conhecido por sua habilidade de nadar e usar ataques como 'Icy Wind' e 'Aurora Beam'.",
            link: "https://www.pokemon.com/br/pokedex/seel",
        },
        {
            titulo: "Dewgong",
            descricao: "Dewgong é a evolução de Seel, uma foca maior com habilidades de gelo e água. Usa ataques como 'Ice Beam' e 'Hydro Pump'.",
            link: "https://www.pokemon.com/br/pokedex/dewgong",
        },
        {
            titulo: "Grimer",
            descricao: "Grimer é um Pokémon do tipo Venenoso, com a aparência de uma massa de sujeira. Utiliza ataques como 'Sludge' e 'Toxic'.",
            link: "https://www.pokemon.com/br/pokedex/grimer",
        },
        {
            titulo: "Muk",
            descricao: "Muk é a evolução de Grimer, uma massa de sujeira ainda maior e mais venenosa. Usa ataques como 'Sludge Bomb' e 'Gunk Shot'.",
            link: "https://www.pokemon.com/br/pokedex/muk",
        },
        {
            titulo: "Shellder",
            descricao: "Shellder é um Pokémon do tipo Água, com aparência de concha. Usa ataques como 'Clamp' e 'Icy Wind' para batalha.",
            link: "https://www.pokemon.com/br/pokedex/shellder",
        },
        {
            titulo: "Cloyster",
            descricao: "Cloyster é a evolução de Shellder, com uma concha espinhosa e habilidades de gelo. Utiliza ataques como 'Ice Beam' e 'Hydro Pump'.",
            link: "https://www.pokemon.com/br/pokedex/cloyster",
        },
        {
            titulo: "Gastly",
            descricao: "Gastly é um Pokémon do tipo Fantasma e Venenoso, com aparência de uma esfera de gás. Usa ataques como 'Lick' e 'Shadow Ball'.",
            link: "https://www.pokemon.com/br/pokedex/gastly",
        },
        {
            titulo: "Haunter",
            descricao: "Haunter é a evolução de Gastly, uma entidade fantasmagórica com habilidades avançadas de fantasma. Usa ataques como 'Night Shade' e 'Dream Eater'.",
            link: "https://www.pokemon.com/br/pokedex/haunter",
        },
        {
            titulo: "Gengar",
            descricao: "Gengar é a forma final de Gastly, um Pokémon do tipo Fantasma e Venenoso com habilidades psíquicas. Utiliza ataques poderosos como 'Shadow Ball' e 'Sludge Bomb'.",
            link: "https://www.pokemon.com/br/pokedex/gengar",
        },
        {
            titulo: "Onix",
            descricao: "Onix é um Pokémon do tipo Pedra e Terra, com aparência de um grande serpente de rocha. Usa ataques como 'Rock Throw' e 'Earthquake'.",
            link: "https://www.pokemon.com/br/pokedex/onix",
        },
        {
            titulo: "Steelix",
            descricao: "Steelix é a evolução de Onix, uma serpente de aço muito mais poderosa. Utiliza ataques como 'Iron Tail' e 'Metal Claw'.",
            link: "https://www.pokemon.com/br/pokedex/steelix",
        },
        {
            titulo: "Drowzee",
            descricao: "Drowzee é um Pokémon do tipo Psíquico, conhecido por induzir o sono em seus adversários. Usa ataques como 'Hypnosis' e 'Dream Eater'.",
            link: "https://www.pokemon.com/br/pokedex/drowzee",
        },
        {
            titulo: "Hypno",
            descricao: "Hypno é a evolução de Drowzee, com habilidades psíquicas aprimoradas e um grande poder de induzir sono. Utiliza ataques como 'Psychic' e 'Dream Eater'.",
            link: "https://www.pokemon.com/br/pokedex/hypno",
        },
        {
            titulo: "Krabby",
            descricao: "Krabby é um Pokémon do tipo Água, com aparência de caranguejo. Usa ataques como 'Vice Grip' e 'Bubble Beam' para batalha.",
            link: "https://www.pokemon.com/br/pokedex/krabby",
        },
        {
            titulo: "Kingler",
            descricao: "Kingler é a evolução de Krabby, um caranguejo maior e mais poderoso. Utiliza ataques como 'Crabhammer' e 'Hyper Beam'.",
            link: "https://www.pokemon.com/br/pokedex/kingler",
        },
        {
            titulo: "Voltorb",
            descricao: "Voltorb é um Pokémon do tipo Elétrico com aparência de esfera. Conhecido por seu potencial explosivo, usa ataques como 'Spark' e 'Self-Destruct'.",
            link: "https://www.pokemon.com/br/pokedex/voltorb",
        },
        {
            titulo: "Electrode",
            descricao: "Electrode é a evolução de Voltorb, uma esfera elétrica com grande velocidade. Utiliza ataques como 'Thunder' e 'Explosion'.",
            link: "https://www.pokemon.com/br/pokedex/electrode",
        },
        {
            titulo: "Exeggcute",
            descricao: "Exeggcute é um Pokémon do tipo Grama e Psíquico, com aparência de uma cesta de ovos. Usa ataques como 'Confusion' e 'Seed Bomb'.",
            link: "https://www.pokemon.com/br/pokedex/exeggcute",
        },
        {
            titulo: "Exeggutor",
            descricao: "Exeggutor é a evolução de Exeggcute, com uma aparência de palmeira e habilidades avançadas de grama e psíquico. Utiliza ataques como 'Solar Beam' e 'Psychic'.",
            link: "https://www.pokemon.com/br/pokedex/exeggutor",
        },
        {
            titulo: "Cubone",
            descricao: "Cubone é um Pokémon do tipo Terra, conhecido por usar um osso como arma e por sua aparência triste. Usa ataques como 'Bone Club' e 'Rock Tomb'.",
            link: "https://www.pokemon.com/br/pokedex/cubone",
        },
        {
            titulo: "Marowak",
            descricao: "Marowak é a evolução de Cubone, um Pokémon do tipo Terra com um osso maior e mais forte. Usa ataques como 'Bonemerang' e 'Earthquake'.",
            link: "https://www.pokemon.com/br/pokedex/marowak",
        },
        {
            titulo: "Hitmonlee",
            descricao: "Hitmonlee é um Pokémon do tipo Lutador, conhecido por seus poderosos chutes. Utiliza ataques como 'High Jump Kick' e 'Rolling Kick'.",
            link: "https://www.pokemon.com/br/pokedex/hitmonlee",
        },
        {
            titulo: "Hitmonchan",
            descricao: "Hitmonchan é um Pokémon do tipo Lutador, especializado em ataques de soco. Usa habilidades como 'Mach Punch' e 'Sky Uppercut'.",
            link: "https://www.pokemon.com/br/pokedex/hitmonchan",
        },
        {
            titulo: "Lickitung",
            descricao: "Lickitung é um Pokémon do tipo Normal, conhecido por sua língua longa e pegajosa. Utiliza ataques como 'Lick' e 'Body Slam'.",
            link: "https://www.pokemon.com/br/pokedex/lickitung",
        },
        {
            titulo: "Lickilicky",
            descricao: "Lickilicky é a evolução de Lickitung, com uma língua ainda mais longa e habilidades aprimoradas. Usa ataques como 'Giga Impact' e 'Power Whip'.",
            link: "https://www.pokemon.com/br/pokedex/lickilicky",
        },
        {
            titulo: "Koffing",
            descricao: "Koffing é um Pokémon do tipo Venenoso, com aparência de uma nuvem de fumaça. Usa ataques como 'Smog' e 'Clear Smog'.",
            link: "https://www.pokemon.com/br/pokedex/koffing",
        },
        {
            titulo: "Weezing",
            descricao: "Weezing é a evolução de Koffing, uma nuvem de fumaça maior com habilidades mais fortes de veneno. Utiliza ataques como 'Sludge Bomb' e 'Toxic'.",
            link: "https://www.pokemon.com/br/pokedex/weezing",
        },
        {
            titulo: "Rhyhorn",
            descricao: "Rhyhorn é um Pokémon do tipo Pedra e Terra, com aparência de um rinoceronte. Usa ataques como 'Horn Attack' e 'Rock Blast'.",
            link: "https://www.pokemon.com/br/pokedex/rhyhorn",
        },
        {
            titulo: "Rhydon",
            descricao: "Rhydon é a evolução de Rhyhorn, um rinoceronte mais poderoso e robusto. Utiliza ataques como 'Rock Slide' e 'Earthquake'.",
            link: "https://www.pokemon.com/br/pokedex/rhydon",
        },
        {
            titulo: "Rhyperior",
            descricao: "Rhyperior é a forma final de Rhyhorn, uma grande criatura do tipo Pedra e Terra. Usa ataques devastadores como 'Stone Edge' e 'Earth Power'.",
            link: "https://www.pokemon.com/br/pokedex/rhyperior",
        },
        {
            titulo: "Chansey",
            descricao: "Chansey é um Pokémon do tipo Normal, conhecido por sua aparência fofa e habilidades de cura. Usa ataques como 'Soft-Boiled' e 'Egg Bomb'.",
            link: "https://www.pokemon.com/br/pokedex/chansey",
        },
        {
            titulo: "Blissey",
            descricao: "Blissey é a evolução de Chansey, com habilidades de cura ainda mais poderosas. Utiliza ataques como 'Aromatherapy' e 'Dazzling Gleam'.",
            link: "https://www.pokemon.com/br/pokedex/blissey",
        },
        {
            titulo: "Tangela",
            descricao: "Tangela é um Pokémon do tipo Grama, com aparência de uma planta coberta de vinhas. Usa ataques como 'Vine Whip' e 'Constrict'.",
            link: "https://www.pokemon.com/br/pokedex/tangela",
        },
        {
            titulo: "Tangrowth",
            descricao: "Tangrowth é a evolução de Tangela, com uma aparência ainda mais densa de vinhas. Utiliza ataques como 'Power Whip' e 'Giga Drain'.",
            link: "https://www.pokemon.com/br/pokedex/tangrowth",
        },
        {
            titulo: "Kangaskhan",
            descricao: "Kangaskhan é um Pokémon do tipo Normal, conhecido por carregar um filhote em sua bolsa. Usa ataques como 'Double-Edge' e 'Crunch'.",
            link: "https://www.pokemon.com/br/pokedex/kangaskhan",
        },
        {
            titulo: "Horsea",
            descricao: "Horsea é um Pokémon do tipo Água, com aparência de um pequeno cavalo-marinho. Utiliza ataques como 'Water Gun' e 'Bubble'.",
            link: "https://www.pokemon.com/br/pokedex/horsea",
        },
        {
            titulo: "Seadra",
            descricao: "Seadra é a evolução de Horsea, um cavalo-marinho mais robusto com habilidades aquáticas aprimoradas. Usa ataques como 'Hydro Pump' e 'Twister'.",
            link: "https://www.pokemon.com/br/pokedex/seadra",
        },
        {
            titulo: "Kingdra",
            descricao: "Kingdra é a forma final de Horsea, um poderoso Pokémon do tipo Água e Dragão. Utiliza ataques como 'Hydro Pump' e 'Dragon Pulse'.",
            link: "https://www.pokemon.com/br/pokedex/kingdra",
        },
        {
            titulo: "Goldeen",
            descricao: "Goldeen é um Pokémon do tipo Água, com aparência de um peixe dourado. Usa ataques como 'Peck' e 'Horn Attack'.",
            link: "https://www.pokemon.com/br/pokedex/goldeen",
        },
        {
            titulo: "Seaking",
            descricao: "Seaking é a evolução de Goldeen, um peixe maior e mais poderoso. Utiliza ataques como 'Megahorn' e 'Waterfall'.",
            link: "https://www.pokemon.com/br/pokedex/seaking",
        },
        {
            titulo: "Staryu",
            descricao: "Staryu é um Pokémon do tipo Água, com aparência de uma estrela do mar. Usa ataques como 'Water Gun' e 'Rapid Spin'.",
            link: "https://www.pokemon.com/br/pokedex/staryu",
        },
        {
            titulo: "Starmie",
            descricao: "Starmie é a evolução de Staryu, com habilidades aprimoradas de água e psíquico. Utiliza ataques como 'Hydro Pump' e 'Cosmic Power'.",
            link: "https://www.pokemon.com/br/pokedex/starmie",
        },
        {
            titulo: "Mr. Mime",
            descricao: "Mr. Mime é um Pokémon do tipo Psíquico e Fada, conhecido por suas habilidades de ilusão e mímica. Usa ataques como 'Reflect' e 'Psychic'.",
            link: "https://www.pokemon.com/br/pokedex/mr-mime",
        },
        {
            titulo: "Scyther",
            descricao: "Scyther é um Pokémon do tipo Inseto e Voador, com lâminas afiadas nas patas. Utiliza ataques como 'Night Slash' e 'X-Scissor'.",
            link: "https://www.pokemon.com/br/pokedex/scyther",
        },
        {
            titulo: "Scizor",
            descricao: "Scizor é a evolução de Scyther, com um corpo de aço e habilidades de ataque aprimoradas. Usa ataques como 'Bullet Punch' e 'Iron Head'.",
            link: "https://www.pokemon.com/br/pokedex/scizor",
        },
        {
            titulo: "Smoochum",
            descricao: "Smoochum é um Pokémon do tipo Gelo e Psíquico, com aparência de um bebê. Utiliza ataques como 'Ice Punch' e 'Confusion'.",
            link: "https://www.pokemon.com/br/pokedex/smoochum",
        },
        {
            titulo: "Jynx",
            descricao: "Jynx é a evolução de Smoochum, com habilidades de gelo e psíquico. Usa ataques como 'Ice Beam' e 'Psychic'.",
            link: "https://www.pokemon.com/br/pokedex/jynx",
        },
        {
            titulo: "Electabuzz",
            descricao: "Electabuzz é um Pokémon do tipo Elétrico, conhecido por seu potencial de eletricidade. Utiliza ataques como 'Thunder Punch' e 'Thunderbolt'.",
            link: "https://www.pokemon.com/br/pokedex/electabuzz",
        },
        {
            titulo: "Electivire",
            descricao: "Electivire é a evolução de Electabuzz, com uma grande capacidade de gerar eletricidade. Usa ataques como 'Thunderbolt' e 'Wild Charge'.",
            link: "https://www.pokemon.com/br/pokedex/electivire",
        },
        {
            titulo: "Magmar",
            descricao: "Magmar é um Pokémon do tipo Fogo, com aparência de um dinossauro flamejante. Utiliza ataques como 'Fire Punch' e 'Flamethrower'.",
            link: "https://www.pokemon.com/br/pokedex/magmar",
        },
        {
            titulo: "Magmortar",
            descricao: "Magmortar é a evolução de Magmar, um Pokémon de fogo com ataques mais fortes. Usa ataques como 'Fire Blast' e 'Lava Plume'.",
            link: "https://www.pokemon.com/br/pokedex/magmortar",
        },
        {
            titulo: "Pinsir",
            descricao: "Pinsir é um Pokémon do tipo Inseto, com pinças afiadas e grande força. Utiliza ataques como 'X-Scissor' e 'Horn Attack'.",
            link: "https://www.pokemon.com/br/pokedex/pinsir",
        },
        {
            titulo: "Tauros",
            descricao: "Tauros é um Pokémon do tipo Normal, com aparência de um touro. Usa ataques como 'Horn Attack' e 'Double-Edge'.",
            link: "https://www.pokemon.com/br/pokedex/tauros",
        },
        {
            titulo: "Magikarp",
            descricao: "Magikarp é um Pokémon do tipo Água, conhecido por sua aparência de peixe pequeno e fraco. Utiliza ataques como 'Splash' e 'Tackle'.",
            link: "https://www.pokemon.com/br/pokedex/magikarp",
        },
        {
            titulo: "Gyarados",
            descricao: "Gyarados é a evolução de Magikarp, um poderoso Pokémon do tipo Água e Dragão. Usa ataques devastadores como 'Hydro Pump' e 'Dragon Rage'.",
            link: "https://www.pokemon.com/br/pokedex/gyarados",
        },
        {
            titulo: "Lapras",
            descricao: "Lapras é um Pokémon do tipo Água e Gelo, com aparência de uma grande tartaruga marinha. Utiliza ataques como 'Surf' e 'Ice Beam'.",
            link: "https://www.pokemon.com/br/pokedex/lapras",
        },
        {
            titulo: "Ditto",
            descricao: "Ditto é um Pokémon do tipo Normal, conhecido por sua habilidade de transformar-se em qualquer outro Pokémon. Usa ataques como 'Transform' e 'Mirror Move'.",
            link: "https://www.pokemon.com/br/pokedex/ditto",
        },
        {
            titulo: "Eevee",
            descricao: "Eevee é um Pokémon do tipo Normal, conhecido por sua capacidade de evoluir para várias formas diferentes. Utiliza ataques como 'Quick Attack' e 'Bite'.",
            link: "https://www.pokemon.com/br/pokedex/eevee",
        },
        {
            titulo: "Vaporeon",
            descricao: "Vaporeon é uma das evoluções de Eevee, do tipo Água. Usa ataques como 'Water Gun' e 'Hydro Pump'.",
            link: "https://www.pokemon.com/br/pokedex/vaporeon",
        },
        {
            titulo: "Jolteon",
            descricao: "Jolteon é uma das evoluções de Eevee, do tipo Elétrico. Utiliza ataques como 'Thunderbolt' e 'Thunder'.",
            link: "https://www.pokemon.com/br/pokedex/jolteon",
        },
        {
            titulo: "Flareon",
            descricao: "Flareon é uma das evoluções de Eevee, do tipo Fogo. Usa ataques como 'Ember' e 'Flamethrower'.",
            link: "https://www.pokemon.com/br/pokedex/flareon",
        },
        {
            titulo: "Porygon",
            descricao: "Porygon é um Pokémon do tipo Normal, com aparência de um programa de computador. Utiliza ataques como 'Psybeam' e 'Recover'.",
            link: "https://www.pokemon.com/br/pokedex/porygon",
        },
        {
            titulo: "Porygon2",
            descricao: "Porygon2 é a evolução de Porygon, com uma aparência mais avançada e habilidades aprimoradas. Usa ataques como 'Tri Attack' e 'Zap Cannon'.",
            link: "https://www.pokemon.com/br/pokedex/porygon2",
        },
        {
            titulo: "Porygon-Z",
            descricao: "Porygon-Z é a forma final de Porygon, com capacidades de computação ainda mais avançadas. Utiliza ataques como 'Hyper Beam' e 'Tri Attack'.",
            link: "https://www.pokemon.com/br/pokedex/porygon-z",
        },
        {
            titulo: "Omanyte",
            descricao: "Omanyte é um Pokémon do tipo Rocha e Água, com aparência de um nautilus pré-histórico. Usa ataques como 'Rock Throw' e 'Water Gun'.",
            link: "https://www.pokemon.com/br/pokedex/omanyte",
        },
        {
            titulo: "Omastar",
            descricao: "Omastar é a evolução de Omanyte, uma criatura do tipo Rocha e Água mais poderosa. Utiliza ataques como 'Hydro Pump' e 'Ancient Power'.",
            link: "https://www.pokemon.com/br/pokedex/omastar",
        },
        {
            titulo: "Kabuto",
            descricao: "Kabuto é um Pokémon do tipo Rocha e Água, com aparência de um fóssil de caranguejo. Usa ataques como 'Scratch' e 'Leer'.",
            link: "https://www.pokemon.com/br/pokedex/kabuto",
        },
        {
            titulo: "Kabutops",
            descricao: "Kabutops é a evolução de Kabuto, uma criatura mais feroz e adaptada ao combate. Utiliza ataques como 'Waterfall' e 'Night Slash'.",
            link: "https://www.pokemon.com/br/pokedex/kabutops",
        },
        {
            titulo: "Aerodactyl",
            descricao: "Aerodactyl é um Pokémon do tipo Pedra e Voador, com aparência de um pterossauro. Usa ataques como 'Rock Slide' e 'Hyper Beam'.",
            link: "https://www.pokemon.com/br/pokedex/aerodactyl",
        },
        {
            titulo: "Snorlax",
            descricao: "Snorlax é um Pokémon do tipo Normal, conhecido por sua grande quantidade de sono e força. Utiliza ataques como 'Body Slam' e 'Sleep Talk'.",
            link: "https://www.pokemon.com/br/pokedex/snorlax",
        },
        {
            titulo: "Articuno",
            descricao: "Articuno é um Pokémon lendário do tipo Gelo e Voador, com aparência de uma grande ave azul. Usa ataques como 'Ice Beam' e 'Blizzard'.",
            link: "https://www.pokemon.com/br/pokedex/articuno",
        },
        {
            titulo: "Zapdos",
            descricao: "Zapdos é um Pokémon lendário do tipo Elétrico e Voador, conhecido por seu poder elétrico. Utiliza ataques como 'Thunder' e 'Thunderbolt'.",
            link: "https://www.pokemon.com/br/pokedex/zapdos",
        },
        {
            titulo: "Moltres",
            descricao: "Moltres é um Pokémon lendário do tipo Fogo e Voador, com aparência de uma ave flamejante. Usa ataques como 'Flamethrower' e 'Fire Blast'.",
            link: "https://www.pokemon.com/br/pokedex/moltres",
        },
        {
            titulo: "Dratini",
            descricao: "Dratini é um Pokémon do tipo Dragão, com aparência de uma pequena serpente. Utiliza ataques como 'Dragon Rage' e 'Wrap'.",
            link: "https://www.pokemon.com/br/pokedex/dratini",
        },
        {
            titulo: "Dragonair",
            descricao: "Dragonair é a evolução de Dratini, uma serpente do tipo Dragão mais elegante. Usa ataques como 'Dragon Tail' e 'Safeguard'.",
            link: "https://www.pokemon.com/br/pokedex/dragonair",
        },
        {
            titulo: "Dragonite",
            descricao: "Dragonite é a forma final de Dratini, um poderoso Pokémon do tipo Dragão e Voador. Utiliza ataques como 'Dragon Claw' e 'Outrage'.",
            link: "https://www.pokemon.com/br/pokedex/dragonite",
        },
        {
            titulo: "Mewtwo",
            descricao: "Mewtwo é um Pokémon lendário do tipo Psíquico, criado artificialmente com grande poder psíquico. Usa ataques como 'Psychic' e 'Shadow Ball'.",
            link: "https://www.pokemon.com/br/pokedex/mewtwo",
        },
        {
            titulo: "Mew",
            descricao: "Mew é um Pokémon lendário do tipo Psíquico, conhecido por sua grande habilidade de aprender qualquer ataque. Utiliza ataques como 'Psychic' e 'Transform'.",
            link: "https://www.pokemon.com/br/pokedex/mew",
        },
        {
            titulo: "Chikorita",
            descricao: "Chikorita é um Pokémon do tipo Grama, com aparência de uma pequena folha. Usa ataques como 'Vine Whip' e 'Razor Leaf'.",
            link: "https://www.pokemon.com/br/pokedex/chikorita",
        },
        {
            titulo: "Bayleef",
            descricao: "Bayleef é a evolução de Chikorita, com uma aparência mais desenvolvida e habilidades aprimoradas. Utiliza ataques como 'Razor Leaf' e 'Synthesis'.",
            link: "https://www.pokemon.com/br/pokedex/bayleef",
        },
        {
            titulo: "Meganium",
            descricao: "Meganium é a forma final de Chikorita, um Pokémon do tipo Grama com habilidades de cura poderosas. Usa ataques como 'Solar Beam' e 'Synthesis'.",
            link: "https://www.pokemon.com/br/pokedex/meganium",
        },
        {
            titulo: "Cyndaquil",
            descricao: "Cyndaquil é um Pokémon do tipo Fogo, com aparência de um pequeno furão em chamas. Utiliza ataques como 'Ember' e 'Flamethrower'.",
            link: "https://www.pokemon.com/br/pokedex/cyndaquil",
        },
        {
            titulo: "Quilava",
            descricao: "Quilava é a evolução de Cyndaquil, um Pokémon de fogo com habilidades aprimoradas. Usa ataques como 'Flame Wheel' e 'Flamethrower'.",
            link: "https://www.pokemon.com/br/pokedex/quilava",
        },
        {
            titulo: "Typhlosion",
            descricao: "Typhlosion é a forma final de Cyndaquil, um poderoso Pokémon de fogo. Utiliza ataques como 'Eruption' e 'Lava Plume'.",
            link: "https://www.pokemon.com/br/pokedex/typhlosion",
        },
        {
            titulo: "Totodile",
            descricao: "Totodile é um Pokémon do tipo Água, com aparência de um pequeno crocodilo. Usa ataques como 'Water Gun' e 'Bite'.",
            link: "https://www.pokemon.com/br/pokedex/totodile",
        },
        {
            titulo: "Croconaw",
            descricao: "Croconaw é a evolução de Totodile, um crocodilo maior e mais forte. Utiliza ataques como 'Rage' e 'Waterfall'.",
            link: "https://www.pokemon.com/br/pokedex/croconaw",
        },
        {
            titulo: "Feraligatr",
            descricao: "Feraligatr é a forma final de Totodile, um poderoso Pokémon do tipo Água. Usa ataques como 'Hydro Pump' e 'Crunch'.",
            link: "https://www.pokemon.com/br/pokedex/feraligatr",
        },
        {
            titulo: "Sentret",
            descricao: "Sentret é um Pokémon do tipo Normal, com aparência de um pequeno mamífero. Usa ataques como 'Tackle' e 'Foresight'.",
            link: "https://www.pokemon.com/br/pokedex/sentret",
        },
        {
            titulo: "Furret",
            descricao: "Furret é a evolução de Sentret, com um corpo alongado e habilidades mais aprimoradas. Utiliza ataques como 'Quick Attack' e 'Hyper Beam'.",
            link: "https://www.pokemon.com/br/pokedex/furret",
        },
        {
            titulo: "Hoothoot",
            descricao: "Hoothoot é um Pokémon do tipo Normal e Voador, com aparência de uma coruja. Usa ataques como 'Peck' e 'Hypnosis'.",
            link: "https://www.pokemon.com/br/pokedex/hoothoot",
        },
        {
            titulo: "Noctowl",
            descricao: "Noctowl é a evolução de Hoothoot, uma coruja mais poderosa e com habilidades de voo aprimoradas. Utiliza ataques como 'Air Slash' e 'Psychic'.",
            link: "https://www.pokemon.com/br/pokedex/noctowl",
        },
        {
            titulo: "Ledyba",
            descricao: "Ledyba é um Pokémon do tipo Inseto e Voador, com aparência de uma joaninha. Usa ataques como 'Tackle' e 'Supersonic'.",
            link: "https://www.pokemon.com/br/pokedex/ledyba",
        },
        {
            titulo: "Ledian",
            descricao: "Ledian é a evolução de Ledyba, com habilidades de inseto e voo aprimoradas. Utiliza ataques como 'Silver Wind' e 'Hyper Beam'.",
            link: "https://www.pokemon.com/br/pokedex/ledian",
        },
        {
            titulo: "Spinarak",
            descricao: "Spinarak é um Pokémon do tipo Inseto e Veneno, com aparência de uma aranha. Usa ataques como 'String Shot' e 'Poison Sting'.",
            link: "https://www.pokemon.com/br/pokedex/spinarak",
        },
        {
            titulo: "Ariados",
            descricao: "Ariados é a evolução de Spinarak, com habilidades de aranha mais fortes. Utiliza ataques como 'Shadow Ball' e 'Toxic'.",
            link: "https://www.pokemon.com/br/pokedex/ariados",
        },
        {
            titulo: "Crobat",
            descricao: "Crobat é a evolução de Golbat, com quatro asas e uma grande capacidade de voo. Usa ataques como 'Sludge Bomb' e 'Air Slash'.",
            link: "https://www.pokemon.com/br/pokedex/crobat",
        },
        {
            titulo: "Chinchou",
            descricao: "Chinchou é um Pokémon do tipo Água e Elétrico, com aparência de uma pequena lanterninha. Usa ataques como 'Water Gun' e 'Thunder Wave'.",
            link: "https://www.pokemon.com/br/pokedex/chinchou",
        },
        {
            titulo: "Lanturn",
            descricao: "Lanturn é a evolução de Chinchou, uma lanterninha aquática mais poderosa. Utiliza ataques como 'Hydro Pump' e 'Thunderbolt'.",
            link: "https://www.pokemon.com/br/pokedex/lanturn",
        },
        {
            titulo: "Pichu",
            descricao: "Pichu é um Pokémon do tipo Elétrico, conhecido por ser a forma pré-evolutiva de Pikachu. Usa ataques como 'Thunder Shock' e 'Charm'.",
            link: "https://www.pokemon.com/br/pokedex/pichu",
        },
        {
            titulo: "Pikachu",
            descricao: "Pikachu é um Pokémon do tipo Elétrico, conhecido por sua popularidade e poder de eletricidade. Utiliza ataques como 'Thunderbolt' e 'Quick Attack'.",
            link: "https://www.pokemon.com/br/pokedex/pikachu",
        },
        {
            titulo: "Raichu",
            descricao: "Raichu é a evolução de Pikachu, com uma maior capacidade elétrica. Usa ataques como 'Thunder' e 'Thunderbolt'.",
            link: "https://www.pokemon.com/br/pokedex/raichu",
        },
        {
            titulo: "Cleffa",
            descricao: "Cleffa é um Pokémon do tipo Fada, conhecido por ser a forma pré-evolutiva de Clefairy. Utiliza ataques como 'Sing' e 'Charm'.",
            link: "https://www.pokemon.com/br/pokedex/cleffa",
        },
        {
            titulo: "Clefairy",
            descricao: "Clefairy é um Pokémon do tipo Fada, com habilidades de cura e encantamento. Usa ataques como 'Moonlight' e 'Dazzling Gleam'.",
            link: "https://www.pokemon.com/br/pokedex/clefairy",
        },
        {
            titulo: "Clefable",
            descricao: "Clefable é a evolução de Clefairy, com poderes mágicos mais fortes. Utiliza ataques como 'Cosmic Power' e 'Moonblast'.",
            link: "https://www.pokemon.com/br/pokedex/clefable",
        },
        {
            titulo: "Igglybuff",
            descricao: "Igglybuff é um Pokémon do tipo Fada, conhecido por sua aparência de bolha. Usa ataques como 'Pound' e 'Sing'.",
            link: "https://www.pokemon.com/br/pokedex/igglybuff",
        },
        {
            titulo : "Jigglypuff",
            descricao: "Jigglypuff é a evolução de Igglybuff, com habilidades de canto e encantamento. Utiliza ataques como 'Sing' e 'Dazzling Gleam'.",
            link: "https://www.pokemon.com/br/pokedex/jigglypuff",
        },
        {
            titulo : "Wigglytuff",
            descricao: "Wigglytuff é a forma final de Igglybuff, com um grande poder de canto e encantamento. Usa ataques como 'Hyper Voice' e 'Play Rough'.",
            link: "https://www.pokemon.com/br/pokedex/wigglytuff",
        },
        {
            titulo : "Togepi",
            descricao: "Togepi é um Pokémon do tipo Fada, conhecido por sua aparência de ovo. Usa ataques como 'Metronome' e 'Extrasensory'.",
            link: "https://www.pokemon.com/br/pokedex/togepi",
        },
        {
            titulo : "Togetic",
            descricao: "Togetic é a evolução de Togepi, com habilidades de voo e encantamento aprimoradas. Utiliza ataques como 'Air Slash' e 'Dazzling Gleam'.",
            link: "https://www.pokemon.com/br/pokedex/togetic",
        },
        {
            titulo : "Togekiss",
            descricao: "Togekiss é a forma final de Togepi, um Pokémon do tipo Fada e Voador com grandes habilidades encantadoras. Usa ataques como 'Air Slash' e 'Aura Sphere'.",
            link: "https://www.pokemon.com/br/pokedex/togekiss",
        },
        {
            titulo : "Natu",
            descricao: "Natu é um Pokémon do tipo Psíquico e Voador, com aparência de um pequeno pássaro. Usa ataques como 'Peck' e 'Psychic'.",
            link: "https://www.pokemon.com/br/pokedex/natu",
        },
        {
            titulo : "Xatu",
            descricao: "Xatu é a evolução de Natu, com habilidades psíquicas e de voo mais avançadas. Utiliza ataques como 'Future Sight' e 'Air Slash'.",
            link: "https://www.pokemon.com/br/pokedex/xatu"
        },

    
    
]