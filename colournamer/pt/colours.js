var colours = {
  '#000000': 'Preto',
  '#000080': 'Naval',
  '#00008B': 'Azul escuro',
  '#0000CD': 'Azul médio',
  '#0000DD': 'Azul real',
  '#0000FF': 'Azul',
  '#0014a8': 'Zaffre',
  '#003153': 'Azul Prússia',
  '#0047AB': 'Azul cobalto',
  '#006400': 'Verde escuro',
  '#007FFF': 'Azul celeste brilhante',
  '#008000': 'Verde',
  '#008080': 'Verde azulado',
  '#008B8B': 'Ciano escuro',
  '#00A4CD': 'Azul celeste',
  '#00A86B': 'Jade',
  '#00BDCE': 'Azul brasilis',
  '#00BFFF': 'Azul céu profundo',
  '#00CCEE': 'Azul turquesa',
  '#00CED1': 'Turquesa escura',
  '#00DDFF': 'Azul turquesa brilhante',
  '#00FA9A': 'Verde primavera médio',
  '#00FF00': 'Verde espectro',
  '#00FF7F': 'Verde primavera',
  '#00FFFF': 'Ciano',
  '#054F77': 'Azul camarada',
  '#084D6E': 'Azul petróleo',
  '#09ACDB': 'Azul brasilis brilhante',
  '#111111': 'Quantum',
  '#120A8F': 'Azul marinho',
  '#191970': 'Azul meia-noite',
  '#1981CD': 'Azul Tóquio',
  '#1E90FF': 'Azul furtivo',
  '#20B2AA': 'Verde mar claro',
  '#228B22': 'Jade',
  '#248EFF': 'Azul taparuere',
  '#2E8B57': 'Hortelã',
  '#2F4F4F': 'Cinza ardósia escuro',
  '#32CD32': 'Verde lima',
  '#3CB371': 'Verde mar médio',
  '#3D2B1F': 'Fuligem',
  '#40E0D0': 'Turquesa',
  '#4169E1': 'Azul real',
  '#44D7A8': 'Eucalipto',
  '#44FFFF': 'Água',
  '#4682B4': 'Azul aço',
  '#47BDDF': 'Azul Zima',
  '#483D8B': 'Azul ardósia escuro',
  '#48D1CC': 'Turquesa média',
  '#4B0082': 'Índigo',
  '#4C516D': 'Independência',
  '#50C878': 'Esmeralda',
  '#51484F': 'Quartz',
  '#550000': 'Vermelho enegrecido',
  '#555D50': 'Ébano',
  '#556B2F': 'Oliva escura',
  '#5a4fcf': 'Íris',
  '#5D8AA8': 'Azul força aérea',
  '#5F9EA0': 'Azul cadete',
  '#6495ED': 'Azul flor de milho',
  '#66CDAA': 'Água-marinha média',
  '#696969': 'Cinza fosco',
  '#6A5ACD': 'Azul ardósia',
  '#6B4423': 'Kobicha',
  '#6B8E23': 'Verde-oliva',
  '#6C3082': 'Eminência',
  '#6D351A': 'Rútilo',
  '#705714': 'Sépia',
  '#708090': 'Cinza ardósia',
  '#712F26': 'Carmim',
  '#738678': 'Xanadu',
  '#778899': 'Cinza ardósia claro',
  '#78866B': 'Verde militar',
  '#7B68EE': 'Azul ardósia médio',
  '#7BA05B': 'Aspargo',
  '#7CFC00': 'Verde grama',
  '#7FFF00': 'Verde Paris',
  '#7FFFD4': 'Água-marinha',
  '#800000': 'Bordô',
  '#800020': 'Borgonha',
  '#800080': 'Púrpura',
  '#808000': 'Oliva',
  '#808080': 'Cinza',
  '#831D1C': 'Grená',
  '#8470FF': 'Azul ardósia claro',
  '#87CEEB': 'Azul céu',
  '#87CEFA': 'Azul céu claro',
  '#8878C3': 'Ube',
  '#89cff0': 'Azul bebê',
  '#8A008A': 'Roxo brasilis',
  '#8A2BE2': 'Azul violeta',
  '#8B0000': 'Vermelho escuro',
  '#8B008B': 'Magenta escuro',
  '#8B4513': 'Marrom sela',
  '#8B5742': 'Caramelo',
  '#8C2D19': 'Cor de Engenharia',
  '#8EE53F': 'Kiwi',
  '#8FBC8F': 'Verde mar escuro',
  '#900020': 'Borgonha',
  '#90EE90': 'Verde claro',
  '#9370DB': 'Púrpura média',
  '#9400D3': 'Violeta escuro',
  '#960018': 'Carmim carnáceo',
  '#964b00': 'Marrom',
  '#98FB98': 'Verde pálido',
  '#992244': 'Carmim clássico',
  '#9932CC': 'Orquídea escura',
  '#993399': 'Roxo',
  '#9966CC': 'Ametista',
  '#9ACD32': 'Verde amarelado',
  '#A0522D': 'Ferrugem',
  '#A2006D': 'Flerte',
  '#A52A2A': 'Marrom claro',
  '#A6AA3E': 'Azul manteiga',
  '#A7F432': 'Brasil',
  '#A9A9A9': 'Cinza escuro',
  '#ADD8E6': 'Azul claro',
  '#ADFF2F': 'Amarelo esverdeado',
  '#AFEEEE': 'Turquesa pálida',
  '#B0C4DE': 'Azul aço claro',
  '#B0E0E6': 'Azul pólvora',
  '#B22222': 'Tijolo refratário',
  '#B53389': 'Fandango',
  '#B7410E': 'Ferrugem',
  '#B87333': 'Cobre',
  '#B8860B': 'Dourado escuro',
  '#B8CAD4': 'Azul areado',
  '#BA55D3': 'Orquídea média',
  '#BC8F8F': 'Marrom rosado',
  '#BDB76B': 'Cáqui escuro',
  '#Be5b59': 'Goiaba',
  '#C0C0C0': 'Prata',
  '#C71585': 'Vermelho violeta médio',
  '#C8A2C8': 'Lilás',
  '#CC6600': 'Pardo escuro',
  '#CC7722': 'Ocre',
  '#CCFF33': 'Verde fluorescente',
  '#CD5C5C': 'Vermelho indiano',
  '#CD69CD': 'Rosa amoroso',
  '#CD7F32': 'Bronze',
  '#CD853F': 'Peru',
  '#D02090': 'Vermelho violeta',
  '#D19275': 'Feldspato',
  '#D2691E': 'Chocolate',
  '#D2B48C': 'Castanho claro',
  '#D3D3D3': 'Cinza claro',
  '#D8BFD8': 'Cardo',
  '#DA69A1': 'Rosa danação',
  '#DA70D6': 'Orquídea',
  '#DAA520': 'Dourado',
  '#DB7093': 'Vermelho violeta pálido',
  '#DC143C': 'Carmesim',
  '#DCDCDC': 'Cinza médio',
  '#DDA0DD': 'Ameixa',
  '#DE3163': 'Cereja',
  '#DEB887': 'Madeira',
  '#DF73FF': 'Heliotrópio',
  '#E0B0FF': 'Malva',
  '#E0FFFF': 'Ciano claro',
  '#E2725B': 'Terracota',
  '#E32636': 'Alizarina',
  '#E6E6FA': 'Lavanda',
  '#E6E8FA': 'Glitter',
  '#E79FC4': 'Kobi',
  '#E9967A': 'Salmão escuro',
  '#E9FFDB': 'Nyanza',
  '#EC2300': 'Urucum',
  '#ECD690': 'Amarelo creme',
  '#ECDB00': 'Amarelo brasilis',
  '#ED9121': 'Cenoura',
  '#EE82EE': 'Violeta',
  '#EEAD2D': 'Amarelo queimado',
  '#EEE8AA': 'Dourado pálido',
  '#F08080': 'Coral claro',
  '#F0DC82': 'Couro',
  '#F0E68C': 'Cáqui',
  '#F0F8FF': 'Azul alice',
  '#F0FFF0': 'Maná',
  '#F0FFFF': 'Azul celeste',
  '#F28500': 'Tangerina',
  '#F2B73F': 'Amarelo escuro',
  '#F400A1': 'Cereja Hollywood',
  '#F4A460': 'Marrom amarelado',
  '#F4C430': 'Açafrão',
  '#F5DEB3': 'Trigo',
  '#F5F5DC': 'Bege',
  '#F5F5F5': 'Branco fumaça',
  '#F5FFFA': 'Creme de menta',
  '#F8CBF8': 'Violeta claro',
  '#F8DE7E': 'Jasmine',
  '#F8F8FF': 'Gelo',
  '#FA7F72': 'Salmão',
  '#FA8072': 'Salmão',
  '#FAEBD7': 'Branco antigo',
  '#FAF0E6': 'Linho',
  '#FAFAD2': 'Amarelo ouro claro',
  '#FBEC5D': 'Milho',
  '#FC0FC0': 'Rosa Choque',
  '#FDD5B1': 'Feldspato',
  '#FDE910': 'Lima',
  '#FDF5E6': 'Renda antiga',
  '#FF0000': 'Vermelho',
  '#FF007F': 'Rosa brilhante',
  '#FF00FF': 'Magenta',
  '#FF1493': 'Rosa profundo',
  '#FF2400': 'Escarlate',
  '#FF2401': 'Triássico',
  '#FF4500': 'Jambo',
  '#FF6347': 'Tomate',
  '#FF69B4': 'Rosa forte',
  '#FF77FF': 'Fúcsia',
  '#FF7F50': 'Coral',
  '#FF8247': 'Siena',
  '#FF8C00': 'Laranja escuro',
  '#FFA07A': 'Salmão claro',
  '#FFA500': 'Laranja',
  '#FFB6C1': 'Rosa claro',
  '#FFB84D': 'Laranja claro',
  '#FFBF00': 'Âmbar',
  '#FFC0CB': 'Rosa',
  '#FFCBDB': 'Rosa',
  '#FFD700': 'Ouro',
  '#FFDAB9': 'Pêssego',
  '#FFDB58': 'Mostarda',
  '#FFDEAD': 'Branco navajo',
  '#FFE4B5': 'Mocassim',
  '#FFE4C4': 'Creme de marisco',
  '#FFE4E1': 'Rosa embaçado',
  '#FFEBCD': 'Amêndoa',
  '#FFEFD5': 'Mamão batido',
  '#FFF0F5': 'Lavanda avermelhada',
  '#FFF5EE': 'Concha',
  '#FFF8DC': 'Milho Claro',
  '#FFFACD': 'Seda',
  '#FFFAF0': 'Branco floral',
  '#FFFAFA': 'Neve',
  '#FFFDD0': 'Creme',
  '#FFFF00': 'Amarelo',
  '#FFFFE0': 'Amarelo claro',
  '#FFFFF0': 'Marfim',
  '#FFFFFF': 'Branco',
}
