var colours = {
  '#000000': 'Black',
  '#000080': 'Navy blue',
  '#00009C': 'Duke blue',
  '#0000CD': 'Medium blue',
  '#0000FF': 'Blue',
  '#000F89': 'Phthalo blue',
  '#0014A8': 'Zaffre',
  '#0018A8': 'Blue (Pantone)',
  '#002147': 'Oxford blue',
  '#002366': 'Royal blue (dark)',
  '#002387': 'Resolution blue',
  '#002FA7': 'International Klein Blue',
  '#003153': 'Prussian blue',
  '#0033AA': 'UA blue',
  '#004040': 'Rich black',
  '#00416A': 'Indigo dye',
  '#004225': 'British racing green',
  '#004242': 'Warm black',
  '#0047AB': 'Cobalt blue',
  '#0048BA': 'Absolute Zero',
  '#004953': 'Midnight green (eagle green)',
  '#004B49': 'Deep jungle green',
  '#004F98': 'USAFA blue',
  '#00563F': 'Castleton green',
  '#006400': 'Dark green (X11)',
  '#006600': 'Pakistan green',
  '#0067A5': 'Sapphire (Crayola)',
  '#0067A5': 'Sapphire blue',
  '#006A4E': 'Bottle green',
  '#006B3C': 'Cadmium green',
  '#006DB0': 'Honolulu blue',
  '#00703C': 'Dartmouth green',
  '#0070B8': 'Spanish blue',
  '#0072BB': 'French blue',
  '#007474': 'Skobeloff',
  '#00755E': 'Tropical rainforest',
  '#007AA5': 'CG blue',
  '#007BA7': 'Celadon blue',
  '#007BA7': 'Cerulean',
  '#007BB8': 'Star command blue',
  '#007F5C': 'Spanish viridian',
  '#007F66': 'Generic viridian',
  '#007FFF': 'Azure',
  '#008000': 'Ao (English)',
  '#008000': 'Green (web)',
  '#008080': 'Teal',
  '#0087BD': 'Blue (NCS)',
  '#008B8B': 'Dark cyan',
  '#009150': 'Spanish green',
  '#0093AF': 'Blue (Munsell)',
  '#009698': 'Viridian green',
  '#009966': 'Green-cyan',
  '#009B7D': 'Paolo Veronese green',
  '#009E60': 'Shamrock green',
  '#009F6B': 'Green (NCS)',
  '#00A550': 'Green (pigment)',
  '#00A693': 'Persian green',
  '#00A86B': 'Jade',
  '#00A877': 'Green (Munsell)',
  '#00AB66': 'GO green',
  '#00AD43': 'Green (Pantone)',
  '#00B7EB': 'Cyan (process)',
  '#00BFFF': 'Capri',
  '#00BFFF': 'Deep sky blue',
  '#00CC99': 'Caribbean green',
  '#00CCCC': 'Robin egg blue',
  '#00CCFF': 'Vivid sky blue',
  '#00CED1': 'Dark turquoise',
  '#00FA9A': 'Medium spring green',
  '#00FF00': 'Electric green',
  '#00FF00': 'Green',
  '#00FF00': 'Lime (web) (X11 green)',
  '#00FF40': 'Erin',
  '#00FF7F': 'Spring green',
  '#00FFCD': 'Sea green (Crayola)',
  '#00FFEF': 'Turquoise blue',
  '#00FFFF': 'Aqua',
  '#00FFFF': 'Cyan',
  '#00FFFF': 'Spanish sky blue',
  '#010203': 'Rich black (FOGRA39)',
  '#010B13': 'Rich black (FOGRA29)',
  '#013220': 'Dark green',
  '#014421': 'Forest green (traditional)',
  '#014421': 'UP Forest green',
  '#01796F': 'Pine green',
  '#0247FE': 'Blue (RYB)',
  '#03C03C': 'Dark pastel green',
  '#043927': 'Sacramento State green',
  '#064E40': 'Blue-green (color wheel)',
  '#0A7E8C': 'Metallic Seaweed',
  '#0ABAB5': 'Tiffany Blue',
  '#0BDA51': 'Malachite',
  '#0D98BA': 'Blue-green',
  '#0F4D92': 'Yale Blue',
  '#0F52BA': 'Sapphire',
  '#100C08': 'Smoky black',
  '#1034A6': 'Egyptian blue',
  '#1164B4': 'Green-blue',
  '#123524': 'Phthalo green',
  '#126180': 'Blue sapphire',
  '#138808': 'India green',
  '#1560BD': 'Denim',
  '#15F4EE': 'Fluorescent blue',
  '#177245': 'Dark spring green',
  '#18453B': 'MSU green',
  '#191970': 'Midnight blue',
  '#195905': 'Lincoln green',
  '#1974D2': 'Bright navy blue',
  '#1974D2': 'Navy blue (Crayola)',
  '#1A2421': 'Dark jungle green',
  '#1B1811': 'Black chocolate',
  '#1B1B1B': 'Eerie black',
  '#1B4D3E': 'Brunswick green',
  '#1B4D3E': 'English green',
  '#1C05B3': 'Trypan Blue',
  '#1C39BB': 'Persian blue',
  '#1CA9C9': 'Pacific blue',
  '#1CAC78': 'Green (Crayola)',
  '#1D2951': 'Space cadet',
  '#1DACD6': 'Cerulean (Crayola)',
  '#1E90FF': 'Dodger blue',
  '#1F75FE': 'Blue (Crayola)',
  '#20B2AA': 'Light sea green',
  '#2243B6': 'Denim blue',
  '#228B22': 'Forest green (web)',
  '#23297A': "St. Patrick's blue",
  '#232B2B': 'Charleston green',
  '#242124': 'Raisin black',
  '#246BCE': 'Celtic blue',
  '#26428B': 'Dark cornflower blue',
  '#26619C': 'Lapis lazuli',
  '#2887C8': 'Green-blue (Crayola)',
  '#299617': 'Slimy green',
  '#29AB87': 'Jungle green',
  '#2A2F23': 'Pine tree',
  '#2a3439': 'Gunmetal',
  '#2A52BE': 'Cerulean blue',
  '#2D383A': 'Outer space (Crayola)',
  '#2D68C4': 'True Blue',
  '#2E2787': 'Picotee blue',
  '#2E2D88': 'Cosmic cobalt',
  '#2E5090': 'YInMn Blue',
  '#2E5894': "B'dazzled blue",
  '#2E8B57': 'Sea green',
  '#2F4F4F': 'Dark slate gray',
  '#2F847C': 'Celadon green',
  '#301934': 'Dark purple',
  '#30B21A': 'Yellow-green (Color Wheel)',
  '#30BA8F': 'Mountain Meadow',
  '#30BFBF': 'Maximum blue green',
  '#317873': 'Myrtle green',
  '#318CE7': 'Bleu de France',
  '#319177': 'Illuminating emerald',
  '#32127A': 'Persian indigo',
  '#32174D': 'Russian violet',
  '#324AB2': 'Violet-blue',
  '#32CD32': 'Lime green',
  '#333399': 'Blue (pigment)',
  '#343434': 'Jet',
  '#353839': 'Onyx',
  '#354230': 'Kombu green',
  '#355E3B': 'Hunter green',
  '#36454F': 'Charcoal',
  '#36747D': 'Ming',
  '#367588': 'Teal blue',
  '#39A78E': 'Zomp',
  '#39FF14': 'Neon green',
  '#3AB09E': 'Keppel',
  '#3B2F2F': 'Black coffee',
  '#3B3C36': 'Black olive',
  '#3B7A57': 'Amazon',
  '#3C1414': 'Dark sienna',
  '#3C341F': 'Olive Drab (#7)',
  '#3C69E7': 'Bluetiful',
  '#3CB371': 'Medium sea green',
  '#3D0C02': 'Black bean',
  '#3D2B1F': 'Bistre',
  '#3E8EDE': 'Tufts blue',
  '#3EB489': 'Mint',
  '#3F00FF': 'Ultramarine',
  '#3FFF00': 'Harlequin',
  '#40826D': 'Viridian',
  '#40E0D0': 'Turquoise',
  '#4166F5': 'Ultramarine blue',
  '#4169E1': 'Royal blue (light)',
  '#43302E': 'Old burgundy',
  '#436B95': 'Queen blue',
  '#43B3AE': 'Verdigris',
  '#444C38': 'Rifle green',
  '#446CCF': 'Han blue',
  '#4666FF': 'Neon blue',
  '#4682B4': 'Steel blue',
  '#47ABCC': 'Maximum blue',
  '#47BDDF': 'Zima blue',
  '#483C32': 'Dark lava',
  '#483C32': 'Taupe',
  '#483D8B': 'Dark slate blue',
  '#48BF91': 'Ocean green',
  '#48D1CC': 'Medium turquoise',
  '#49796B': "Hooker's green",
  '#4A5D23': 'Dark moss green',
  '#4A646C': 'Deep Space Sparkle',
  '#4B0082': 'Indigo',
  '#4B3621': 'Café noir',
  '#4B5320': 'Army green',
  '#4C2882': 'Spanish violet',
  '#4C516D': 'Independence',
  '#4C9141': 'May green',
  '#4CBB17': 'Kelly green',
  '#4D1A7F': 'Blue-violet (color wheel)',
  '#4D5D53': 'Feldgrau',
  '#4D8C57': 'Middle green',
  '#4E5180': 'Purple navy',
  '#4F42B5': 'Ocean Blue',
  '#4F7942': 'Fern green',
  '#5072A7': 'Blue yonder',
  '#507D2A': 'Sap green',
  '#50C878': 'Emerald',
  '#50C878': 'Paris Green',
  '#512888': 'KSU purple',
  '#5218FA': 'Han purple',
  '#534B4F': 'Dark liver',
  '#536872': 'Cadet',
  '#536878': 'Dark electric blue',
  '#536878': "Payne's grey",
  '#543D37': 'Dark liver (horses)',
  '#545AA7': 'Liberty',
  '#54626F': 'Black coral',
  '#555555': "Davy's grey",
  '#555D50': 'Ebony',
  '#556B2F': 'Dark olive green',
  '#563C5C': 'English violet',
  '#568203': 'Avocado',
  '#56887D': 'Wintergreen Dream',
  '#56A0D3': 'Carolina blue',
  '#58427C': 'Cyber grape',
  '#59260B': 'Seal brown',
  '#592720': 'Caput mortuum',
  '#5946B2': 'Plump Purple',
  '#5A4FCF': 'Iris',
  '#5B92E5': 'United Nations blue',
  '#5D3954': 'Dark byzantium',
  '#5DA493': 'Polished Pine',
  '#5DADEC': 'Blue jeans',
  '#5E8C31': 'Maximum green',
  '#5F8A8B': 'Steel Teal',
  '#5F9EA0': 'Cadet blue',
  '#5FA777': 'Forest green (Crayola)',
  '#5FA778': 'Shiny Shamrock',
  '#6050DC': 'Majorelle blue',
  '#6082B6': 'Glaucous',
  '#614051': 'Eggplant',
  '#635147': 'Umber',
  '#644117': 'Pullman Brown (UPS Brown)',
  '#6495ED': 'Cornflower blue',
  '#65000B': 'Rosewood',
  '#654321': 'Dark brown',
  '#660000': 'Blood red',
  '#66023C': 'Tyrian purple',
  '#663399': 'Rebecca Purple',
  '#664228': 'Van Dyke brown',
  '#665D1E': 'Antique bronze',
  '#666699': 'Dark blue-gray',
  '#6699CC': 'Blue-gray',
  '#6699CC': 'Livid',
  '#66B032': 'Green (RYB)',
  '#66DDAA': 'Medium aquamarine',
  '#66FF00': 'Bright green',
  '#66FF66': "Screamin' Green",
  '#673147': 'Old mauve',
  '#673147': 'Wine dregs',
  '#674846': 'Rose ebony',
  '#674C47': 'Liver',
  '#676767': 'Granite gray',
  '#679267': 'Russian green',
  '#682860': 'Palatinate purple',
  '#696969': 'Dim gray',
  '#6A0DAD': 'Purple',
  '#6A5ACD': 'Slate blue',
  '#6B4423': 'Kobicha',
  '#6B8E23': 'Olive Drab (#3)',
  '#6C2E1F': 'Liver (organ)',
  '#6C3082': 'Eminence',
  '#6C541E': 'Field drab',
  '#6CA0DC': 'Little boy blue',
  '#6D9BC3': 'Cerulean frost',
  '#6EAEA1': 'Green Sheen',
  '#6F00FF': 'Electric indigo',
  '#6F4E37': 'Coffee',
  '#6F4E37': 'Tuscan brown',
  '#701C1C': 'Persian plum',
  '#701C1C': 'Prune',
  '#702670': 'Midnight',
  '#702963': 'Byzantium',
  '#703642': 'Catawba',
  '#704214': 'Sepia',
  '#708090': 'Slate gray',
  '#71A6D2': 'Iceberg',
  '#722F37': 'Wine',
  '#727472': 'Nickel',
  '#72A0C1': 'Air superiority blue',
  '#733380': 'Maximum purple',
  '#7366BD': 'Blue-violet (Crayola)',
  '#738678': 'Xanadu',
  '#73C2FB': 'Maya blue',
  '#74C365': 'Mantis',
  '#757575': 'Sonic silver',
  '#766EC8': 'Violet-blue (Crayola)',
  '#76D7EA': 'Sky blue (Crayola)',
  '#777696': 'Rhythm',
  '#778899': 'Light slate gray',
  '#778BA5': 'Shadow blue',
  '#77B5FE': 'French sky blue',
  '#78184A': 'Pansy purple',
  '#7851A9': 'Royal purple',
  '#79443B': 'Bole',
  '#796878': 'Old lavender',
  '#7B1113': 'UP maroon',
  '#7B3F00': 'Chocolate (traditional)',
  '#7B68EE': 'Medium slate blue',
  '#7BB661': 'Bud green',
  '#7C0A02': 'Barn red',
  '#7C4848': 'Tuscan red',
  '#7CB9E8': 'Aero',
  '#7CFC00': 'Lawn green',
  '#7DF9FF': 'Electric blue',
  '#7E5E60': 'Deep taupe',
  '#7ED4E6': 'Middle blue',
  '#7F00FF': 'Violet (color wheel)',
  '#7F1734': 'Claret',
  '#7FFF00': 'Chartreuse (web)',
  '#7FFFD4': 'Aquamarine',
  '#800000': 'Maroon (web)',
  '#800020': 'Burgundy',
  '#800020': 'Oxblood',
  '#800080': 'Patriarch',
  '#800080': 'Purple (web)',
  '#801818': 'Falu red',
  '#80461B': 'Russet',
  '#807532': 'Spanish bistre',
  '#808000': 'Olive',
  '#808080': 'Gray (web)',
  '#81613C': 'Coyote brown',
  '#826644': 'Raw umber',
  '#838996': 'Roman silver',
  '#841617': 'OU Crimson red',
  '#841B2D': 'Antique ruby',
  '#848482': 'Battleship grey',
  '#848482': 'Old silver',
  '#856088': 'Chinese violet',
  '#856D4D': 'French bistre',
  '#85754E': 'Gold Fusion',
  '#8601AF': 'Violet (RYB)',
  '#86608E': 'French lilac',
  '#86608E': 'Pomp and Power',
  '#87413F': 'Brandy',
  '#87421F': 'Fuzzy Wuzzy',
  '#87A96B': 'Asparagus',
  '#87CEEB': 'Sky blue',
  '#87CEFA': 'Light sky blue',
  '#87FF2A': 'Spring Frost',
  '#880085': 'Mardi Gras',
  '#8806CE': 'French violet',
  '#882D17': 'Kobe',
  '#882D17': 'Sienna',
  '#88540B': 'Brown',
  '#893843': 'Solid pink',
  '#893F45': 'Cordovan',
  '#89CFF0': 'Baby blue',
  '#8A2BE2': 'Blue-violet',
  '#8A3324': 'Burnt umber',
  '#8A496B': 'Twilight lavender',
  '#8A795D': 'Shadow',
  '#8A7F80': 'Rocket metallic',
  '#8A9A5B': 'Moss green',
  '#8A9A5B': 'Turtle green',
  '#8B0000': 'Dark red',
  '#8B008B': 'Dark magenta',
  '#8B4513': 'Saddle brown',
  '#8B72BE': 'Middle blue purple',
  '#8B8589': 'Taupe gray',
  '#8B8680': 'Middle grey',
  '#8BA8B7': 'Pewter Blue',
  '#8C92AC': 'Cool grey',
  '#8CBED6': 'Dark sky blue',
  '#8D4E85': 'Razzmic Berry',
  '#8DA399': 'Morning blue',
  '#8DB600': 'Apple green',
  '#8DD9CC': 'Middle blue green',
  '#8E3A59': 'Quinacridone magenta',
  '#8E4585': 'Plum',
  '#8F00FF': 'Electric violet',
  '#8F00FF': 'Violet',
  '#8F9779': 'Artichoke',
  '#8FBC8F': 'Dark sea green',
  '#8FD400': 'Sheen green',
  '#905D5D': 'Rose taupe',
  '#90EE90': 'Light green',
  '#914E75': 'Sugar Plum',
  '#915C83': 'Antique fuchsia',
  '#915F6D': 'Mauve taupe',
  '#915F6D': 'Raspberry glace',
  '#91A3B0': 'Cadet grey',
  '#922B3E': 'Red-violet (Color wheel)',
  '#9370DB': 'Medium purple',
  '#93C572': 'Pistachio',
  '#93CCEA': 'Light cornflower blue',
  '#9400D3': 'Dark violet',
  '#954535': 'Chestnut',
  '#960018': 'Carmine',
  '#963D7F': 'Violet (crayola)',
  '#967117': 'Bistre brown',
  '#967117': 'Drab',
  '#967117': 'Mode beige',
  '#967117': 'Sand dune',
  '#9678B6': 'Purple mountain majesty',
  '#96C8A2': 'Eton blue',
  '#979AAA': 'Manatee',
  '#987456': 'Liver chestnut',
  '#98817B': 'Cinereous',
  '#989898': 'Spanish gray',
  '#98FF98': 'Mint green',
  '#9932CC': 'Dark orchid',
  '#996515': 'Golden brown',
  '#996666': 'Copper rose',
  '#9966CC': 'Amethyst',
  '#997A8D': 'Mountbatten pink',
  '#9A4EAE': 'Purpureus',
  '#9AB973': 'Olivine',
  '#9ACD32': 'Yellow-green',
  '#9B111E': 'Ruby red',
  '#9BC4E2': 'Pale cerulean',
  '#9C2542': 'Big dip o’ruby',
  '#9C51B6': 'Purple Plum',
  '#9C7C38': 'Metallic Sunburst',
  '#9E1B32': 'Crimson (UA)',
  '#9E5E6F': 'Rose Dust',
  '#9EFD38': 'French lime',
  '#9F00C5': 'Purple (Munsell)',
  '#9F00FF': 'Vivid violet',
  '#9F1D35': 'Vivid burgundy',
  '#9F2B68': 'Amaranth (M&P)',
  '#9F4576': 'Magenta haze',
  '#9F8170': 'Beaver',
  '#9FA91F': 'Citron',
  '#A020F0': 'Purple (X11)',
  '#A020F0': 'Veronica',
  '#A0D6B4': 'Turquoise green',
  '#A17A74': 'Burnished brown',
  '#A1CAF1': 'Baby blue eyes',
  '#A2006D': 'Flirt',
  '#A2A2D0': 'Blue bell',
  '#A2ADD0': 'Wild blue yonder',
  '#A3C1AD': 'Cambridge blue',
  '#A45A52': 'Redwood',
  '#A4C639': 'Android green',
  '#A4DDED': 'Non-photo blue',
  '#A50B5E': 'Jazzberry jam',
  '#A52A2A': 'Auburn',
  '#A55353': 'Middle red purple',
  '#A57164': 'Blast-off bronze',
  '#A57C00': 'Gold',
  '#A63A79': 'Maximum red purple',
  '#A67B5B': 'Café au lait',
  '#A67B5B': 'French beige',
  '#A67B5B': 'Tuscan tan',
  '#A6A6A6': 'Quick Silver',
  '#A75502': 'Windsor tan',
  '#A7F432': 'Green Lizard',
  '#A7FC00': 'Spring bud',
  '#A81C07': 'Rufous',
  '#A83731': 'Sweet Brown',
  '#A8516E': 'China rose',
  '#A8C3BC': 'Opal',
  '#A8E4A0': 'Granny Smith apple',
  '#A99A86': 'Grullo',
  '#A9B2C3': 'Cadet blue (Crayola)',
  '#A9BA9D': 'Laurel green',
  '#AA381E': 'Chinese red',
  '#AA98A9': 'Heliotrope gray',
  '#AA98A9': 'Rose quartz',
  '#AAA9AD': 'Silver (Metallic)',
  '#AAF0D1': 'Magic mint',
  '#AB274F': 'Amaranth purple',
  '#AB4B52': 'English red',
  '#AB4E52': 'Rose vale',
  '#AB92B3': 'Glossy grape',
  '#ACACAC': 'Silver chalice',
  '#ACACE6': 'Maximum blue purple',
  '#ACBF60': 'Middle green yellow',
  '#ACE1AF': 'Celadon',
  '#ACE5EE': 'Blizzard blue',
  '#AD4379': 'Mystic maroon',
  '#AD6F69': 'Copper penny',
  '#ADD8E6': 'Light blue',
  '#ADFF2F': 'Green-yellow',
  '#AE2029': 'Upsdell red',
  '#AE98AA': 'Lilac Luster',
  '#AF4035': 'Medium carmine',
  '#AF6E4D': 'Brown sugar',
  '#AFDBF5': 'Uranian blue',
  '#B03060': 'Maroon (X11)',
  '#B0BF1A': 'Acid green',
  '#B0C4DE': 'Light steel blue',
  '#B0E0E6': 'Powder blue',
  '#B22222': 'Firebrick',
  '#B284BE': 'African violet',
  '#B2BEB5': 'Ash gray',
  '#B2EC5D': 'Inchworm',
  '#B2FFFF': 'Celeste',
  '#B2FFFF': 'Italian sky blue',
  '#B31B1B': 'Carnelian',
  '#B3446C': 'Irresistible',
  '#B3446C': 'Raspberry rose',
  '#B48395': 'English lavender',
  '#B53389': 'Fandango',
  '#B57EDC': 'Lavender (floral)',
  '#B5B35C': 'Olive green',
  '#B7410E': 'Rust',
  '#B768A2': 'Pearly purple',
  '#B784A7': 'Opera mauve',
  '#B86D29': 'Liver (dogs)',
  '#B87333': 'Copper',
  '#B8860B': 'Dark goldenrod',
  '#B94E48': 'Deep chestnut',
  '#B9D9EB': 'Columbia Blue',
  '#BA160C': 'International orange (engineering)',
  '#BA55D3': 'Medium orchid',
  '#BBB477': 'Misty moss',
  '#BC8F8F': 'Rosy brown',
  '#BCB88A': 'Sage',
  '#BCD4E6': 'Beau blue',
  '#BCD4E6': 'Pale aqua',
  '#BD33A4': 'Byzantine',
  '#BDB76B': 'Dark khaki',
  '#BDDA57': 'June bud',
  '#BE4F62': 'Popstar',
  '#BEBEBE': 'Gray (X11 gray)',
  '#BF00FF': 'Electric purple',
  '#BF4F51': 'Bittersweet shimmer',
  '#BFAFB2': 'Black Shadows',
  '#BFC1C2': 'Silver sand',
  '#BFFF00': 'Bitter lime',
  '#BFFF00': 'Lime (color wheel)',
  '#C0362C': 'International orange (Golden Gate Bridge)',
  '#C04000': 'Mahogany',
  '#C0448F': 'Red-violet (Crayola)',
  '#C08081': 'Old rose',
  '#C09999': 'Tuscany',
  '#C0C0C0': 'Silver',
  '#C154C1': 'Fuchsia (Crayola)',
  '#C19A6B': 'Camel',
  '#C19A6B': 'Desert',
  '#C19A6B': 'Fallow',
  '#C19A6B': 'Lion',
  '#C19A6B': 'Wood brown',
  '#C21E56': 'Rose red',
  '#C2B280': 'Ecru',
  '#C2B280': 'Sand',
  '#C30B4E': 'Pictorial carmine',
  '#C32148': 'Bright maroon',
  '#C32148': 'Maroon (Crayola)',
  '#C3B091': 'Khaki (web)',
  '#C3CDE6': 'Periwinkle (Crayola)',
  '#C40233': 'Red (NCS)',
  '#C41E3A': 'Cardinal',
  '#C46210': 'Alloy orange',
  '#C4AEAD': 'Silver pink',
  '#C4C3D0': 'Lavender gray',
  '#C54B8C': 'Mulberry',
  '#C5B358': 'Vegas gold',
  '#C5CBE1': 'Light periwinkle',
  '#C5E384': 'Yellow-green (Crayola)',
  '#C71585': 'Medium violet-red',
  '#C71585': 'Red-violet',
  '#C72C48': 'French raspberry',
  '#C74375': 'Fuchsia rose',
  '#C80815': 'Venetian red',
  '#C84186': 'Smitten',
  '#C8509B': 'Mulberry (Crayola)',
  '#C8A2C8': 'Lilac',
  '#C8AD7F': 'Light French beige',
  '#C95A49': 'Cedar Chest',
  '#C9A0DC': 'Wisteria',
  '#C9C0BB': 'Pale silver',
  '#C9C0BB': 'Silver (Crayola)',
  '#C9FFE5': 'Aero blue',
  '#CA1F7B': 'Magenta (dye)',
  '#CAE00D': 'Bitter lemon',
  '#CB410B': 'Sinopia',
  '#CB4154': 'Brick red',
  '#CB6D51': 'Copper red',
  '#CBA135': 'Satin sheen gold',
  '#CC3333': 'Persian red',
  '#CC3336': 'Madder Lake',
  '#CC33CC': 'Steel pink',
  '#CC397B': 'Fuchsia purple',
  '#CC474B': 'English vermillion',
  '#CC5500': 'Burnt orange',
  '#CC7722': 'Ochre',
  '#CC8899': 'Puce',
  '#CCA01D': 'Lemon curry',
  '#CCCCFF': 'Lavender blue',
  '#CCCCFF': 'Periwinkle',
  '#CCFF00': 'Electric lime',
  '#CD5700': 'Tenné (tawny)',
  '#CD5C5C': 'Indian red',
  '#CD607E': 'Cinnamon Satin',
  '#CD7F32': 'Bronze',
  '#CD9575': 'Antique brass',
  '#CE2029': 'Fire engine red',
  '#CE4676': 'Ruber',
  '#CEFF00': 'Volt',
  '#CF1020': 'Lava',
  '#CF3476': 'Telemagenta',
  '#CF6BA9': 'Super pink',
  '#CF71AF': 'Sky magenta',
  '#CFB53B': 'Old gold',
  '#D0417E': 'Magenta (Pantone)',
  '#D0F0C0': 'Tea green',
  '#D0FF14': 'Arctic lime',
  '#D10047': 'Spanish carmine',
  '#D10056': 'Rubine red',
  '#D1E231': 'Pear',
  '#D2691E': 'Chocolate (web)',
  '#D2691E': 'Cocoa brown',
  '#D2B48C': 'Tan',
  '#D3212D': 'Amaranth red',
  '#D3AF37': 'Metallic gold',
  '#D3D3D3': 'Light gray',
  '#D40000': 'Rosso corsa',
  '#D470A2': 'Wild orchid',
  '#D473D4': 'French mauve',
  '#D4AF37': 'Gold (metallic)',
  '#D65282': 'Mystic',
  '#D68A59': 'Raw sienna',
  '#D6CADD': 'Languid lavender',
  '#D70040': 'Carmine (M&P)',
  '#D71868': 'Dogwood rose',
  '#D74894': 'Pink (Pantone)',
  '#D7837F': 'New York pink',
  '#D891EF': 'Bright lilac',
  '#D8B2D1': 'Pink lavender',
  '#D8BFD8': 'Thistle',
  '#D9004C': 'UA red',
  '#D92121': 'Maximum red',
  '#D9381E': 'Vermilion',
  '#D982B5': 'Middle purple',
  '#D98695': 'Shimmering Blush',
  '#D99058': 'Persian orange',
  '#D99A6C': 'Tan (Crayola)',
  '#D9E650': 'Maximum green yellow',
  '#DA1884': 'Barbie Pink',
  '#DA2C43': 'Rusty red',
  '#DA3287': 'Deep cerise',
  '#DA70D6': 'Orchid',
  '#DA8A67': 'Copper (Crayola)',
  '#DA9100': 'Harvest gold',
  '#DAA520': 'Goldenrod',
  '#DBD7D2': 'Timberwolf',
  '#DC143C': 'Crimson',
  '#DCDCDC': 'Gainsboro',
  '#DDA0DD': 'Plum (web)',
  '#DE3163': 'Cerise',
  '#DE5285': 'Fandango pink',
  '#DE5D83': 'Blush',
  '#DE6FA1': 'China pink',
  '#DE6FA1': 'Liseran purple',
  '#DE6FA1': 'Thulian pink',
  '#DEA5A4': 'Pastel pink',
  '#DEAA88': 'Tumbleweed',
  '#DEB887': 'Burlywood',
  '#DF00FF': 'Phlox',
  '#DF00FF': 'Psychedelic purple',
  '#DF73FF': 'Heliotrope',
  '#DFFF00': 'Chartreuse (traditional)',
  '#E0115F': 'Ruby',
  '#E03C31': 'CG red',
  '#E0B0FF': 'Mauve',
  '#E0FFFF': 'Light cyan',
  '#E12C2C': 'Permanent Geranium Lake',
  '#E1A95F': 'Earth yellow',
  '#E2062C': 'Medium candy apple red',
  '#E25822': 'Flame',
  '#E2725B': 'Terra cotta',
  '#E29CD2': 'Orchid (Crayola)',
  '#E30022': 'Cadmium red',
  '#E30B5D': 'Raspberry',
  '#E3256B': 'Razzmatazz',
  '#E32636': 'Rose madder',
  '#E34234': 'Cinnabar',
  '#E34234': 'Vermilion',
  '#E3A857': 'Indian yellow',
  '#E3AB57': 'Sunray',
  '#E3DAC9': 'Bone',
  '#E3F988': 'Mindaro',
  '#E40078': 'Red-purple',
  '#E4007C': 'Mexican pink',
  '#E4717A': 'Candy pink',
  '#E4717A': 'Tango pink',
  '#E48400': 'Fulvous',
  '#E49B0F': 'Gamboge',
  '#E4D00A': 'Citrine',
  '#E4D96F': 'Straw',
  '#E52B50': 'Amaranth',
  '#E58E73': 'Middle red',
  '#E5AA70': 'Fawn',
  '#E5E4E2': 'Platinum',
  '#E60026': 'Spanish red',
  '#E63E62': 'Paradise pink',
  '#E68FAC': 'Charm pink',
  '#E6BE8A': 'Gold (Crayola)',
  '#E6E6FA': 'Lavender (web)',
  '#E79FC4': 'Kobi',
  '#E86100': 'Spanish orange',
  '#E8CCD7': 'Queen pink',
  '#E8F48C': 'Key lime',
  '#E936A7': 'Frostbite',
  '#E95C4B': 'Fire opal',
  '#E97451': 'Burnt sienna',
  '#E9967A': 'Dark salmon',
  '#E9D66B': 'Arylide yellow',
  '#E9D66B': 'Hansa yellow',
  '#E9FFDB': 'Nyanza',
  '#EAA221': 'Marigold',
  '#EC5800': 'Persimmon',
  '#ECB176': 'Middle yellow red',
  '#ECEBBD': 'Pale spring bud',
  '#ECEBBD': 'Spring green (Crayola)',
  '#ED1C24': 'Red (pigment)',
  '#ED2939': 'Imperial red',
  '#ED2939': 'Red (Pantone)',
  '#ED872D': 'Cadmium orange',
  '#ED9121': 'Carrot orange',
  '#EDC9AF': 'Desert sand',
  '#EDEAE0': 'Alabaster',
  '#EE204D': 'Red (Crayola)',
  '#EE82EE': 'Violet (web)',
  '#EED202': 'Safety yellow',
  '#EEDC82': 'Flax',
  '#EEE600': 'Titanium yellow',
  '#EEED09': 'Xanthic',
  '#EF98AA': 'Mauvelous',
  '#EFBBCC': 'Cameo pink',
  '#EFCC00': 'Yellow (Munsell)',
  '#EFDECD': 'Almond',
  '#EFDFBB': 'Dutch white',
  '#F08080': 'Light coral',
  '#F0DC82': 'Buff',
  '#F0E68C': 'Khaki (X11) (Light khaki)',
  '#F0E891': 'Green-yellow (Crayola)',
  '#F0EAD6': 'Eggshell',
  '#F0F8FF': 'Alice blue',
  '#F0FFF0': 'Honeydew',
  '#F0FFFF': 'Azure (X11/web color)',
  '#F19CBB': 'Amaranth pink',
  '#F1DDCF': 'Champagne pink',
  '#F2003C': 'Red (Munsell)',
  '#F28500': 'Tangerine',
  '#F2BA49': 'Maximum yellow red',
  '#F2BDCD': 'Orchid pink',
  '#F2C649': 'Maize (Crayola)',
  '#F2E8D7': 'Magnolia',
  '#F37A48': 'Mandarin',
  '#F38FA9': 'Vanilla ice',
  '#F3E5AB': 'Medium champagne',
  '#F3E5AB': 'Vanilla',
  '#F400A1': 'Fashion fuchsia',
  '#F400A1': 'Hollywood cerise',
  '#F4A460': 'Sandy brown',
  '#F4C2C2': 'Baby pink',
  '#F4C2C2': 'Tea rose',
  '#F4C430': 'Saffron',
  '#F4CA16': 'Jonquil',
  '#F4F0EC': 'Isabelline',
  '#F56FA1': 'Cyclamen',
  '#F58025': 'Princeton orange',
  '#F5BD1F': 'Orange-yellow',
  '#F5DEB3': 'Wheat',
  '#F5E050': 'Minion yellow',
  '#F5F5DC': 'Beige',
  '#F5F5F5': 'Cultured',
  '#F5FFFA': 'Mint cream',
  '#F64A8A': 'French rose',
  '#F653A6': 'Magenta (Crayola)',
  '#F6ADC6': 'Nadeshiko pink',
  '#F6EABE': 'Lemon meringue',
  '#F75394': 'Violet-red',
  '#F77FBE': 'Persian pink',
  '#F78FA7': 'Pink Sherbet',
  '#F7BFBE': 'Spanish pink',
  '#F7E7CE': 'Champagne',
  '#F88379': 'Congo pink',
  '#F88379': 'Coral pink',
  '#F88379': 'Tea rose',
  '#F8B878': 'Mellow apricot',
  '#F8D568': 'Orange-yellow (Crayola)',
  '#F8DE7E': 'Jasmine',
  '#F8DE7E': 'Mellow yellow',
  '#F8F8FF': 'Ghost white',
  '#F9429E': 'Rose bonbon',
  '#FA5B3D': 'Orange soda',
  '#FA8072': 'Salmon',
  '#FAD6A5': 'Deep champagne',
  '#FAD6A5': 'Sunset',
  '#FAD6A5': 'Tuscan',
  '#FADA5E': 'Naples yellow',
  '#FADA5E': 'Royal yellow',
  '#FADA5E': 'Stil de grain yellow',
  '#FADADD': 'Pale pink',
  '#FAE6FA': 'Pale purple (Pantone)',
  '#FAE7B5': 'Banana Mania',
  '#FAEBD7': 'Antique white',
  '#FAF0BE': 'Blond',
  '#FAF0E6': 'Linen',
  '#FAFA37': 'Maximum yellow',
  '#FAFAD2': 'Light goldenrod yellow',
  '#FB4D46': 'Tart Orange',
  '#FB607F': 'Brink pink',
  '#FBAB60': 'Rajah',
  '#FBCEB1': 'Apricot',
  '#FBEC5D': 'Corn',
  '#FBEC5D': 'Maize',
  '#FC0FC0': 'Shocking pink',
  '#FC6C85': 'Ultra red',
  '#FC6C85': 'Wild watermelon',
  '#FC74FD': 'Pink flamingo',
  '#FC89AC': 'Tickle Me Pink',
  '#FCC200': 'Golden poppy',
  '#FCE883': 'Yellow (Crayola)',
  '#FCF75E': 'Icterine',
  '#FD3A4A': 'Red Salsa',
  '#FD3F92': 'French fuchsia',
  '#FD6C9E': 'French pink',
  '#FDBE02': 'Mango',
  '#FDDDE6': 'Piggy pink',
  '#FDEE00': 'Aureolin',
  '#FDF5E6': 'Old lace',
  '#FDFF00': 'Lemon glacier',
  '#FE2712': 'Red (RYB)',
  '#FE28A2': 'Persian rose',
  '#FE4EDA': 'Purple pizzazz',
  '#FE6F5E': 'Bittersweet',
  '#FEBAAD': 'Melon',
  '#FED8B1': 'Light orange',
  '#FEDF00': 'Yellow (Pantone)',
  '#FEFE33': 'Yellow (RYB)',
  '#FEFEFA': 'Baby powder',
  '#FF0000': 'Red',
  '#FF007C': 'Winter Sky',
  '#FF007F': 'Rose',
  '#FF0090': 'Magenta (process)',
  '#FF00FF': 'Fuchsia',
  '#FF00FF': 'Magenta',
  '#FF0800': 'Candy apple red',
  '#FF1493': 'Deep pink',
  '#FF1DCE': 'Hot magenta',
  '#FF2400': 'Scarlet',
  '#FF33CC': 'Razzle dazzle rose',
  '#FF355E': 'Radical Red',
  '#FF3800': 'Coquelicot',
  '#FF3855': 'Sizzling Red',
  '#FF43A4': 'Wild Strawberry',
  '#FF4500': 'Red-orange (Color wheel)',
  '#FF4F00': 'International orange (aerospace)',
  '#FF5349': 'Orange-red (Crayola)',
  '#FF5349': 'Red-orange',
  '#FF5470': 'Fiery rose',
  '#FF55A3': 'Brilliant rose',
  '#FF5800': 'Orange (Pantone)',
  '#FF5A36': 'Portland Orange',
  '#FF6347': 'Tomato',
  '#FF66CC': 'Rose pink',
  '#FF6700': 'Safety orange (blaze orange)',
  '#FF681F': 'Orange-red',
  '#FF681F': 'Red-orange (Crayola)',
  '#FF69B4': 'Hot pink',
  '#FF6E4A': 'Outrageous Orange',
  '#FF6FFF': 'Shocking pink (Crayola)',
  '#FF6FFF': 'Ultra pink',
  '#FF7518': 'Pumpkin',
  '#FF7538': 'Orange (Crayola)',
  '#FF7800': 'Safety orange',
  '#FF7A00': 'Heat Wave',
  '#FF7E00': 'Amber (SAE/ECE)',
  '#FF7F00': 'Orange',
  '#FF7F50': 'Coral',
  '#FF8243': 'Mango Tango',
  '#FF8C00': 'Dark orange',
  '#FF91A4': 'Salmon pink',
  '#FF91AF': 'Baker-Miller pink',
  '#FF91AF': 'Schauss pink',
  '#FF9505': 'Yellow Orange (Color Wheel)',
  '#FF9933': 'Deep saffron',
  '#FF9966': 'Atomic tangerine',
  '#FF9F00': 'Orange peel',
  '#FFA07A': 'Light salmon',
  '#FFA089': 'Vivid tangerine',
  '#FFA500': 'Orange (web)',
  '#FFA6C9': 'Carnation pink',
  '#FFA700': 'Chrome yellow',
  '#FFAA1D': 'Bright yellow (Crayola)',
  '#FFAE42': 'Yellow Orange',
  '#FFB200': 'Chinese yellow',
  '#FFB6C1': 'Light pink',
  '#FFB7C5': 'Cherry blossom pink',
  '#FFBA00': 'Selective yellow',
  '#FFBCD9': 'Cotton candy',
  '#FFBD88': 'Macaroni and Cheese',
  '#FFBF00': 'Amber',
  '#FFC0CB': 'Pink',
  '#FFC40C': 'Mikado yellow',
  '#FFCBA4': 'Peach (Crayola)',
  '#FFCC33': 'Sunglow',
  '#FFD300': 'Cyber yellow',
  '#FFD300': 'Yellow (NCS)',
  '#FFD700': 'Gold (web) (Golden)',
  '#FFD800': 'School bus yellow',
  '#FFDAB9': 'Peach puff',
  '#FFDAE9': 'Mimi pink',
  '#FFDB00': 'Sizzling Sunrise',
  '#FFDB58': 'Mustard',
  '#FFDDCA': 'Unbleached silk',
  '#FFDDF4': 'Pink lace',
  '#FFDEAD': 'Navajo white',
  '#FFDF00': 'Golden yellow',
  '#FFE4C4': 'Bisque',
  '#FFE4E1': 'Misty rose',
  '#FFE5B4': 'Peach',
  '#FFEB00': 'Middle yellow',
  '#FFEBCD': 'Blanched almond',
  '#FFEF00': 'Canary yellow',
  '#FFEF00': 'Yellow (process)',
  '#FFEFD5': 'Papaya whip',
  '#FFF0F5': 'Lavender blush',
  '#FFF44F': 'Lemon yellow',
  '#FFF5EE': 'Seashell',
  '#FFF600': 'Cadmium yellow',
  '#FFF700': 'Lemon',
  '#FFF700': 'Yellow Sunshine',
  '#FFF8DC': 'Cornsilk',
  '#FFF8E7': 'Cosmic latte',
  '#FFFACD': 'Lemon chiffon',
  '#FFFAF0': 'Floral white',
  '#FFFAFA': 'Snow',
  '#FFFDD0': 'Cream',
  '#FFFF00': 'Yellow',
  '#FFFF66': 'Laser lemon',
  '#FFFF66': 'Unmellow yellow',
  '#FFFF99': 'Canary',
  '#FFFF9F': 'Lemon yellow (Crayola)',
  '#FFFFE0': 'Light yellow',
  '#FFFFF0': 'Ivory',
  '#FFFFFF': 'White'
}
