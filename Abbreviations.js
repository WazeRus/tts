/**
* @customfunction
*/
function Abbreviations(text) {

  text = text.replace(/()()Дерябиной/g, 'Деря́бинай'); // row: 2
  text = text.replace(/()()Либкнехта/g, 'Ли́бкньехта'); // row: 3
//text = text.replace(/()()(\d+)(К)(-\d+)/g, '$3.кa.$5'); // row: 4
//text = text.replace(/()()(\d+)(Н)(-\d+)/g, '$3.н.$5'); // row: 5
//text = text.replace(/()()(\d+)(А)(-\d+)/g, '$3.аа.$5'); // row: 6
  text = text.replace(/()()Сивкова/g, 'Сивко́ва'); // row: 7
  text = text.replace(/()()Воровского/g, 'Вар овского'); // row: 8
  text = text.replace(/()()Лихвинцева/g, 'Льихвьинцева'); // row: 9
  text = text.replace(/()()[Пп]утепровод/g, 'путеправо́д'); // row: 10
  text = text.replace(/()()Карбышева/g, 'Ка́рбышыва'); // row: 11
  text = text.replace(/()()Одоевский/g, 'Адо́ эвский'); // row: 12
  text = text.replace(/()()обл\./g, 'область'); // row: 13
  text = text.replace(/()()р-н/g, 'район'); // row: 14
  text = text.replace(/()()Курчатова/g, 'Курча́атова'); // row: 15
  text = text.replace(/()()Никонова/g, 'Ни́конова'); // row: 16
  text = text.replace(/()()\bр\./g, 'река'); // row: 17
//text = text.replace(/()()8 марта/g, 'восьмого марта'); // row: 18
//text = text.replace(/()()1 мая /g, 'первого мая'); // row: 19
  text = text.replace(/()()Пастухова/g, 'Пастухо́ва'); // row: 20
  text = text.replace(/()()Толмачева/g, 'Толмачо́ва'); // row: 21
  text = text.replace(/()()Толмачёва/g, 'Толмачо́ва'); // row: 22
  text = text.replace(/()()Лобачева/g, 'Лобачо́ва'); // row: 23
  text = text.replace(/()()Лобачёва/g, 'Лобачо́ва'); // row: 24
  text = text.replace(/()()Алабяна/g, 'Алабя́на'); // row: 25
  text = text.replace(/()()Вернова/g, 'Верно́ва'); // row: 26
//text = text.replace(/()()Дубна/g, 'Дубна́'); // row: 27
  text = text.replace(/()()Понтекорво/g, 'Пон текорво'); // row: 28
  text = text.replace(/()()Кадыкова/g, 'Кады:ко́ва'); // row: 29
  text = text.replace(/()()Маслюкова/g, 'Масълюко́ва'); // row: 30
  text = text.replace(/()()Мархлевского/g, 'Мархле́вскава'); // row: 31
  text = text.replace(/()()Меньшиковский/g, 'Ме́ньщиковский'); // row: 32
  text = text.replace(/()()Чугуевского/g, 'Чугуйе́вского'); // row: 33
  text = text.replace(/()()Мезенцева/g, 'Ме́зенцева'); // row: 34
  text = text.replace(/()()Одоевск/g, 'Адо́ эвск'); // row: 35
  text = text.replace(/()()Лежневск/g, 'Ле́жневск'); // row: 36
  text = text.replace(/()()Бубнова/g, 'Бу́бнава'); // row: 37
  text = text.replace(/()()Куконковых/g, 'Куко́нковых'); // row: 38
  text = text.replace(/()()Постышева/g, 'По́стышива'); // row: 39
  text = text.replace(/()()Ермака/g, 'Ермака́'); // row: 40
  text = text.replace(/()()Кохомское/g, 'К о́хамскае:'); // row: 41
  text = text.replace(/()()Багаева/g, 'Бага́эва'); // row: 42
  text = text.replace(/()()Красной Армии/g, 'Красной  {google:say pause="0.15" /}А́рмии'); // row: 43
  text = text.replace(/()()[Пп]олка/g, 'Полка́'); // row: 44
  text = text.replace(/()()Страконицкий/g, 'Стракони́цкий'); // row: 45
  text = text.replace(/()()Рыжкова/g, 'Рыжко́ва'); // row: 46
  text = text.replace(/()()Котловца/g, 'Котлавца́'); // row: 47
  text = text.replace(/()()Шубиных/g, 'Шу́биных'); // row: 48
  text = text.replace(/()()Кожуховск/g, 'Кожу́хавск'); // row: 49
  text = text.replace(/()()Двинск/g, 'Дви́нск'); // row: 50
  text = text.replace(/()()Александровск/g, 'Алекса́ндровск'); // row: 51
  text = text.replace(/()()Маштакова/g, 'Маштако́ва'); // row: 52
  text = text.replace(/()()Войкова/g, ':Войкова'); // row: 53
  text = text.replace(/()()Братьев Жабровых/g, 'Братьев Жа́бравых'); // row: 54
  text = text.replace(/()()Тишинский/g, 'Тиши́нский'); // row: 55
  text = text.replace(/()()Рупасова/g, 'Рупа́сова'); // row: 56
  text = text.replace(/()()Планерн/g, 'Пла́ннирн'); // row: 57
  text = text.replace(/()()Ростсельмаш/g, 'Рост-сельмаш'); // row: 58
  text = text.replace(/()()Болотова/g, 'Бо́латова'); // row: 59
  text = text.replace(/()()Демешковск/g, 'Демешко́вск'); // row: 60
  text = text.replace(/()()Давыдовск/g, 'Давы́дов ск'); // row: 61
  text = text.replace(/()()Люблинск/g, 'Любли́нск'); // row: 62
  text = text.replace(/()()Ядринское/g, 'йа́дринское'); // row: 63
  text = text.replace(/()()Ловина/g, 'Ло́вина'); // row: 64
  text = text.replace(/()()Косарева/g, ':Ко́сарева'); // row: 65
  text = text.replace(/()()Сосневск/g, 'Со́сневск'); // row: 66
  text = text.replace(/()()Челышева/g, 'Че́лышева'); // row: 67
  text = text.replace(/()()Сарментовой/g, 'Сарме́нтавой'); // row: 68
  text = text.replace(/()()Жиделёва/g, 'Жидельова'); // row: 69
  text = text.replace(/()()Кусимовск/g, 'Куси́мовск'); // row: 70
  text = text.replace(/()()Борзова/g, 'Борзо́ва'); // row: 71
  text = text.replace(/()()Меньшениной/g, 'Меньше́ниной'); // row: 72
  text = text.replace(/()()Селигер/g, 'Селиге́р'); // row: 73
  text = text.replace(/()()Васильевского острова/g, 'Васи́льевского о́строва'); // row: 74
  text = text.replace(/()()Волоха/g, 'Во́лоха'); // row: 75
  text = text.replace(/()()Профи/g, 'Про́фи'); // row: 76
  text = text.replace(/()()Огарёва/g, 'Огарьо́ва'); // row: 77
  text = text.replace(/()()Берша/g, 'Бе́р-ша'); // row: 78
  text = text.replace(/()()Тернопольск/g, 'Терно́пальск'); // row: 79
  text = text.replace(/()()Штахановского/g, 'Штахано́вского'); // row: 80
  text = text.replace(/()()В\.\s?О\./g, 'Васи́льевского о́строва'); // row: 81
  text = text.replace(/()()П\.\s?С\./g, 'Петроградской стороны'); // row: 82
  text = text.replace(/()()ЗСД/g, 'За́падный скоростно́й диа́метр'); // row: 83
  text = text.replace(/()()Лапшенкова/g, 'Лапшенко́ва'); // row: 84
  text = text.replace(/()()Богаткова/g, 'Богатко́ва'); // row: 85
  text = text.replace(/()()Кожова/g, 'Кажова'); // row: 86
  text = text.replace(/()()Беляницы/g, 'Беляни́цы'); // row: 87
  text = text.replace(/()()Вараксинский/g, 'Вара́ксинский'); // row: 88
  text = text.replace(/()()Козлов/g, 'Козло́в'); // row: 89
  text = text.replace(/()()тупик/g, 'тупи́к'); // row: 90
  text = text.replace(/()()Текучёва/g, 'Текучо́ва'); // row: 91
  text = text.replace(/()()Шаранговича/g, 'Шаранго́вича'); // row: 92
  text = text.replace(/()()Куйбышев/g, 'Ку́йбышыв'); // row: 93
  text = text.replace(/()()Кузьмина/g, 'Кузьмина́'); // row: 94
  text = text.replace(/()()Баязита/g, ':Баязита'); // row: 95
  text = text.replace(/()()Кушнар[её]ва/g, 'Кушнарьо́ва'); // row: 96
  text = text.replace(/()()Хрущёва/g, 'Хрущова'); // row: 97
  text = text.replace(/()()Лобанка/g, 'Лобанка́'); // row: 98
  text = text.replace(/()()Обводное/g, 'Обвадно́е'); // row: 99
  text = text.replace(/()()Обводного/g, 'Обводно́во'); // row: 100
  text = text.replace(/()()Прошлякова/g, 'Прошляко́ва'); // row: 101
  text = text.replace(/()()Транспорт/g, 'Тра́нспорт'); // row: 102
  text = text.replace(/()()Макаро-/g, 'Макаро '); // row: 103
  text = text.replace(/()()Карастояновой/g, 'Карастоя́новай'); // row: 104
  text = text.replace(/()()Одоевское/g, 'Одо́эвское'); // row: 105
  text = text.replace(/()()Одоевскую/g, 'Одо́эвскую'); // row: 106
  text = text.replace(/()()Blvd/g, 'Boulevard'); // row: 107
  text = text.replace(/()()Dr/g, 'Drive'); // row: 108
  text = text.replace(/()()Степанца/g, 'Степанца́'); // row: 109
  text = text.replace(/()()Дунина-Марцинкевича/g, 'Ду́нина-Марцинке́вича'); // row: 110
  text = text.replace(/()()Кнорина/g, 'Кно́рина'); // row: 111
  text = text.replace(/()()Железня/g, 'Железня́'); // row: 112
  text = text.replace(/()()Алексин/g, 'Але́ксин'); // row: 113
//text = text.replace(/()()на (\d+[AB]*)(, \d+[AB]*)*: на/g, 'номер $3$4: на'); // row: 114
  text = text.replace(/()() на\s+([^\s]+\d+)( |$)/g, ' на; $3;$4'); // row: 115
  text = text.replace(/()()([^\s])\/(\d)/g, '$3;дробь;$4'); // row: 116
  text = text.replace(/()()(\d)к([^\s])/g, '$3;корпус;$4'); // row: 117
  text = text.replace(/()()(\d)([КХ])(-| |$)/g, '$3$4а$5'); // row: 118
  text = text.replace(/()()(\d)([АН])(-| |$)/g, '$3;$4$5'); // row: 119
  text = text.replace(/()()(\d)([БВРФ])(-| |$)/g, '$3$4э$5'); // row: 120
  text = text.replace(/()()(\d)([С])(-| |$)/g, '$3э$4$5'); // row: 121
  text = text.replace(/()()\sна\s+(на|в|к|под|с|от|во|из|по|об|у|о|над|около|при|перед|про|до|без|за|через)\s/g, '; $3 '); // row: 122
  text = text.replace(/()()на улицу (.*)/g, 'на улицу: $3'); // row: 123
  text = text.replace(/()()\sну\s/g, ' на '); // row: 124
  text = text.replace(/()()(\d)Р(\d)/g, '$3:Р:$4'); // row: 125
  text = text.replace(/()()\[P\]\$/g, 'Платная парковка'); // row: 126
  text = text.replace(/()()Ванеева/g, 'Ване́йева'); // row: 127
  text = text.replace(/()()\bТЦ\b/g, 'торговый центр'); // row: 128
  text = text.replace(/()()\bТРК\b/g, 'торгово-развлекательный комплекс'); // row: 129
  text = text.replace(/()()\bРК\b/g, 'развлекательный комплекс'); // row: 130
  text = text.replace(/()()\bРЦ\b/g, 'развлекательный центр'); // row: 131
  text = text.replace(/()()\bТК\b/g, 'торговый комплекс'); // row: 132
  text = text.replace(/()()\bP\b/g, 'парковка'); // row: 133
  text = text.replace(/()()\bP \(₽\)/g, 'платная парковка'); // row: 134
  text = text.replace(/()()автостоянка \(₽\)/g, 'платная автостоянка'); // row: 135
  text = text.replace(/()()\bТВЦ\b/g, 'торгово-выставочный центр'); // row: 136
  text = text.replace(/()()Маши/g, 'Ма́ши'); // row: 137
  text = text.replace(/()()Чайкиной/g, 'Ча́йкиной'); // row: 138
  text = text.replace(/()()Хоружей/g, 'Хору́жей'); // row: 139
  text = text.replace(/()()Мазурова/g, 'Ма́зурова'); // row: 140
  text = text.replace(/()()Кохма/g, 'Ко́хма'); // row: 141
  text = text.replace(/()()Казачьи Луга/g, 'Казачьи Лууга́'); // row: 142
  text = text.replace(/()()Вересков/g, 'Ве́рескав'); // row: 143
  text = text.replace(/()()Речицкий/g, 'Ре́чицкий'); // row: 144
  text = text.replace(/()()\bP \(карман\)/g, 'Парковочный карман'); // row: 145
  text = text.replace(/()()Жаворонкова/g, 'Жа́варан.кова'); // row: 146
  text = text.replace(/()()Еремеева/g, 'Ереме́еева'); // row: 147
  text = text.replace(/()()Рафиева/g, 'Рафи́ева'); // row: 148
  text = text.replace(/()()Жудро/g, 'Жудро́'); // row: 149
  text = text.replace(/()()Нововиленский/g, 'Новови́линский'); // row: 150
  text = text.replace(/()()Козыревская/g, 'Ко́зыревская'); // row: 151
  text = text.replace(/()()Роменская/g, 'Ро́минскаяя'); // row: 152
  text = text.replace(/()()Кожара/g, 'Ко́жара'); // row: 153
  text = text.replace(/()()Берсона/g, 'Бе́рсона'); // row: 154
  text = text.replace(/()()Шишкова/g, 'Шишко́ва'); // row: 155
  text = text.replace(/()()Маши\b/g, 'Ма́ши '); // row: 156
  text = text.replace(/()()Жебрунова/g, 'Жебру-но́ва'); // row: 157
  text = text.replace(/()()Лукьяновича/g, 'Лукьяно́вича'); // row: 158
  text = text.replace(/()()Берута/g, 'Бе́ру-та'); // row: 159
  text = text.replace(/()()Ахтунг/g, 'а́х-тунг'); // row: 160
  text = text.replace(/()()Полевской/g, 'Полевско́й'); // row: 161
  text = text.replace(/()()Берёзовский/g, ''); // row: 162
  text = text.replace(/()()Алабяно/g, 'Алабя́но'); // row: 163
  text = text.replace(/()()(\d+)\s(([^\s]+\s){0,2})(улица|набережная|дорога|линия|аллея|площадь|просека|автодорога|эстакада|магистраль|дамба|хорда|коса|деревня|переправа|площадка|дорожка|трасса|Ферма|Авеню|Пристань|Рота|Слобода)( |$)/g, '$3-я $4$6$7'); // row: 164
  text = text.replace(/()()(\d+)\s(([^\s]+\s){0,2})(проспект|переулок|проезд|тупик|бульвар|тракт|просек|взвоз|спуск|разъезд|переезд|квартал|путепровод|мост|сад|сквер|тоннель|туннель|парк|проток|канал|остров|микрорайон|район|городок|посёлок|поселок|вал|проулок|Дивизии|Бригады|Армии|Интернационал)( |$)/g, '$3-й $4$6$7'); // row: 165
  text = text.replace(/()()(\d+)\s(([^\s]+\s){0,2})(шоссе|кольцо|село)( |$)/g, '$3-е $4$6$7'); // row: 166
  text = text.replace(/()()(\d+)\s(Партсъезда|Съезда)( |$)/g, '$3-го $4$5'); // row: 167
  text = text.replace(/()()(\d+)\s+([^\s]+(?:лка|ель|аза))( |$)/g, '$3-я $4$5'); // row: 168
  text = text.replace(/()()3 Коммунистов/g, 'Трёх Коммунистов'); // row: 169
  text = text.replace(/()()Сухоложск/g, 'Сухоло́жск'); // row: 170
  text = text.replace(/()()Вторчермет/g, 'Вто́р-черме́т'); // row: 171
  text = text.replace(/()() (до|на) СКАД/g, '; $3 СКАД'); // row: 172
  text = text.replace(/()()(\d)с([^\s])/g, '$3;строение;$4'); // row: 173
  text = text.replace(/()()прибытие к пункту назначения (\d[^\s]*)$/g, 'прибытие к дому номер $3'); // row: 174
  text = text.replace(/()()\sдо\s+(на|в|к|под|с|от|во|из|по|об|у|о|над|около|при|перед|про|до|без|за|через)\s/g, '; до поворота $3 '); // row: 175
  text = text.replace(/()()съезд(.+) на\s+(\d+[AB]*)(, \d+[AB]*)*:/g, 'съезд$3 номер $4$5:'); // row: 176
  text = text.replace(/()()поверните(.+) на\s+(\d+[AB]*)(, \d+[AB]*)*:(.*)/g, 'поверните$3 на$6 съезд номер $4$5'); // row: 177
  text = text.replace(/()()держитесь(.+) на\s+(\d+[AB]*)(, \d+[AB]*)*:(.+)/g, 'держитесь$3 на$6 съезд номер $4$5'); // row: 178
  text = text.replace(/()()продолжайте движение(.+) до\s+(\d+[AB]*)(, \d+[AB]*)*:/g, 'продолжайте движение$3 до съезда номер $4$5:'); // row: 179
  text = text.replace(/()()на\s+выезд/g, 'в сторону выезда'); // row: 180
  text = text.replace(/()()Владимир/g, 'Влади́мир'); // row: 181
  return text;

}
