/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  ShoppingBag,
  Search,
  X,
  Plus,
  Minus,
  Trash2,
  Check,
  ArrowRight,
  BookMarked,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  genre: string;
  synopsis: string;
  cover: string;
  source: string;
  price: number;
  pages: number;
  format: string;
  isbn: string;
  acclaim: string;
  excerptChapter: string;
  excerptPages: string[];
  spineBg: string;
  foil: 'gold' | 'silver';
}

export const BOOKS: Book[] = [
  {
    id: "otkan-kunlar",
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    year: 1926,
    genre: "Tarixiy roman",
    synopsis: "Toshkentlik yosh savdogar Otabek va marg'ilonlik Kumushning muhabbati xonliklar davridagi fitna va ziddiyatlar ichida sinovdan o'tadi.",
    cover: "https://images.uzum.uz/d0stitgn274lpu37gvpg/original.jpg",
    source: "https://uzum.uz/uz/product/otkan-kunlar-abdulla-qodiriy-1740177",
    price: 48000,
    pages: 412,
    format: "Qattiq muqova (Klassika)",
    isbn: "978-9943-25-192-6",
    acclaim: "★ ★ ★ ★ ★ \"O'zbek romanchiligining ilk va tengsiz durdonasi.\" — Cho'lpon",
    excerptChapter: "1-fasl: 1264-hijriy, dalv oyining 27-kuni",
    excerptPages: [
      "1264-hijriy, dalv oyining yigirma yettinchi kuni, qishning qahraton bir oqshomida Marg'ilon shahrining O'rdaga yaqin qismidagi xonadonlarning birida chiroq xira yonar edi. Shahar ko'chalarida qor bo'roni uvillar, saroy ahli va savdogarlar o'z hujralariga bekingan edi.",
      "Toshkentlik yosh savdogar Otabek chorsu rastasidagi karvonsaroyga joylashgach, ko'nglidagi g'ashlikni tarqatish uchun Marg'ilon ko'chalariga qadam qo'ydi. Uning qismati bu shahar tuprog'ida Kumushbibi siymosi bilan abadiy bog'lanishini hali bilmas edi."
    ],
    spineBg: "#1C3524",
    foil: "gold"
  },
  {
    id: "mehrobdan-chayon",
    title: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    year: 1929,
    genre: "Tarixiy roman",
    synopsis: "Qo'qon xonligi saroyida kotib Anvar va Ra'noning sevgisi riyokor ulamolar va xon zulmiga qarshi turadi.",
    cover: "https://images.uzum.uz/db8ume1ndubc73ckaqf0/original.jpg",
    source: "https://uzum.uz/uz/product/mehrobdan-chayon-abdulla-3499474",
    price: 44000,
    pages: 320,
    format: "Zarhal hoshiyali muqova",
    isbn: "978-9943-25-192-9",
    acclaim: "★ ★ ★ ★ ★ \"Zulm va riyo saltanatiga qarshi ko'tarilgan sadoqat madhiyasi.\" — Oybek",
    excerptChapter: "1-fasl: Qo'qon o'rdasi sirlari",
    excerptPages: [
      "Qo'qon xonligi devonxonasida patqalamning qog'oz ustidagi shitiqlashidan boshqa tovush eshitilmas edi. Mirzo Anvar yosh bo'lsa-da, xatining ravonligi va aql-idroki bilan saroy mirzalari orasida alohida ajralib turardi.",
      "Lekin mehrob tagida poylab yotgan xufiyona hasad va zaharli chayonlar Anvarning xon huzuridagi e'tiboriga chidash bera olmas, uning sevgilisi Ra'no atrofida ham qora bulutlar quyuqlashib borar edi."
    ],
    spineBg: "#421818",
    foil: "gold"
  },
  {
    id: "kecha-va-kunduz",
    title: "Kecha va kunduz",
    author: "Cho'lpon",
    year: 1936,
    genre: "Roman",
    synopsis: "Yosh Zebining taqdiri orqali chor Rossiyasi davridagi Turkiston hayoti, ayol qismati va jamiyat illatlari ko'rsatiladi.",
    cover: "https://images.uzum.uz/db9g8h67vabc738e6f7g/original.jpg",
    source: "https://uzum.uz/uz/product/kecha-va-kunduz-3499442",
    price: 50000,
    pages: 350,
    format: "Nafis qattiq muqova",
    isbn: "978-9943-27-193-6",
    acclaim: "★ ★ ★ ★ ★ \"Turkiston qismati va ozodlik sog'inchi aks etgan buyuk asar.\" — Fitrat",
    excerptChapter: "1-fasl: Hamal keldi — amal keldi",
    excerptPages: [
      "Hamal keldi — amal keldi. Ko'klamning mayin sabosi vodiy dalalariga yashil gilam yozar, tol novdalari bo'rtib, suv bo'yida qizlar jamoli ochilardi. Zebixon uyining devoridan pastga qararkan, o'zining bo'g'iq qismatidan bexabar qo'shiq xirgoyi qilardi.",
      "Dunyo keng, lekin xotin-qizlar uchun bu keng dunyo qafasdan iborat edi. Akbarali mingboshining saroyiga tushadigan qizning ko'z yoshlari bu ko'klam sevinchini tezda yuvib ketishi hech kimning xayoliga kelmasdi."
    ],
    spineBg: "#142538",
    foil: "silver"
  },
  {
    id: "shum-bola",
    title: "Shum bola",
    author: "G'afur G'ulom",
    year: 1936,
    genre: "Qissa",
    synopsis: "Uydan qochgan sho'x bola eski Toshkent ko'chalarida boshidan kechirgan kulgili va ibratli sarguzashtlar.",
    cover: "https://images.uzum.uz/cqoasccsslomdvnjjpng/original.jpg",
    source: "https://uzum.uz/uz/product/shum-bola-gafur-gulom-1176793",
    price: 36000,
    pages: 192,
    format: "Klassik qissa nashri",
    isbn: "978-9943-30-193-6",
    acclaim: "★ ★ ★ ★ ★ \"O'zbek xalq donishmandligi va betakror kulgusining cho'qqisi.\" — Abdulla Qahhor",
    excerptChapter: "1-fasl: Uydan qochish",
    excerptPages: [
      "Sariq suvarakdek o'ralashib yurganimda bir kuni uyimizga Qoravoy amakim kelib qoldi. Onam tandirda kulcha yopayotgan edi, men esa somonxona tomidan turib xo'rozlarga don sepayotgan edim.",
      "Toshkentning chang ko'chalari meni chorlar, har bir bozor rasta-burchagida kutilmagan sarguzashtlar poylab yotardi. Pichoq qinidan chiqdi degandek, belbog'imni mahkam bog'lab, dunyo kezishga otlandim."
    ],
    spineBg: "#472C15",
    foil: "gold"
  },
  {
    id: "sarob",
    title: "Sarob",
    author: "Abdulla Qahhor",
    year: 1937,
    genre: "Roman",
    synopsis: "Shuhratparast ziyoli Saidiy o'z ambitsiyalari ortidan quvib, oxir-oqibat sarob ortidan yugurganini anglaydi.",
    cover: "https://assets.asaxiy.uz/product/main_image/desktop/62a5cfa779d6d.jpg.webp",
    source: "https://asaxiy.uz/product/abdulla-kahhor-sarob-kattik-mukova",
    price: 46000,
    pages: 384,
    format: "Qattiq muqova",
    isbn: "978-9943-32-193-7",
    acclaim: "★ ★ ★ ★ ★ \"Ruhiy tahlil va insoniy fojeaning qat'iy badiiy ifodasi.\" — Said Ahmad",
    excerptChapter: "1-fasl: Saidiyning xomxayollari",
    excerptPages: [
      "Munisa deraza yonida o'tirar, ko'cha chiroqlarining zaif shu'lasi uning nigohida aks etardi. Saidiy esa stol ustidagi qog'ozlarni titkilar, o'zining yozgan maqolasida butun olamni o'zgartiradigan kuch bor deb ishonardi.",
      "Shuhrat va mansab ortidagi yugurish uning ko'zini ko'r qilgan edi. U bosib o'tayotgan yo'l haqiqat emas, sahrodagi jazirama sarob ekanini tushunib yetgunicha juda ko'p narsani boy beradi."
    ],
    spineBg: "#222224",
    foil: "silver"
  },
  {
    id: "qutlug-qon",
    title: "Qutlug' qon",
    author: "Oybek",
    year: 1940,
    genre: "Roman",
    synopsis: "1916-yil voqealari arafasida kambag'al yigit Yo'lchining adolat izlab o'tgan og'ir hayot yo'li.",
    cover: "https://assets.asaxiy.uz/product/main_image/desktop/660e9d02aeb81.jpg.webp",
    source: "https://asaxiy.uz/product/ojbek-kutlug-kon",
    price: 45000,
    pages: 420,
    format: "Klassik nashr",
    isbn: "978-9943-35-194-0",
    acclaim: "★ ★ ★ ★ ★ \"El dardi va adolat faryodining epik polotnosi.\" — G'afur G'ulom",
    excerptChapter: "1-fasl: Yo'lchining safari",
    excerptPages: [
      "1916-yilning qahraton qishi arafasida Yo'lchi qishloqdagi barcha kulfatlardan qochib, katta shaharga tomon yo'l oldi. Uning yaktagi yirtiq, etigining poshnasi yeyilgan edi, lekin ko'zlarida adolatga intilish o'ti yonardi.",
      "Mirzakarimboyning hashamatli hovlisi kambag'al mehnatkashlar qoni hisobiga barpo bo'lgan edi. Yo'lchi bu hovliga xizmatkor bo'lib kirar ekan, oldinda buyuk xalq qo'zg'oloni pishib yetilayotganini his etardi."
    ],
    spineBg: "#501B20",
    foil: "gold"
  },
  {
    id: "sariq-dev",
    title: "Sariq devni minib",
    author: "Xudoyberdi To'xtaboyev",
    year: 1968,
    genre: "Bolalar romani",
    synopsis: "Dangasa Hoshimjon sehrli qalpoqcha topib, mehnat qilmasdan mashhur bo'lmoqchi bo'ladi — oqibati esa kutilmagan.",
    cover: "https://images.uzum.uz/cul36blht56sc95e2grg/original.jpg",
    source: "https://uzum.uz/uz/product/sariq-devni-minib-xudoyberdi-toxtaboyev-1524189",
    price: 42000,
    pages: 368,
    format: "Rangli bolalar adabiyoti",
    isbn: "978-9943-40-196-8",
    acclaim: "★ ★ ★ ★ ★ \"Dunyodagi eng sevimli o'zbek ertak-romanlaridan biri.\" — Jahon adabiyoti",
    excerptChapter: "1-fasl: Sehrli qalpoqcha",
    excerptPages: [
      "Mening ismim Hoshimjon. Hoshimjon deganim bilan ko'chada ko'rgan odam meni 'Hoshimvoy' deydi. Ochig'ini aytsam, dars tayyorlashni va o'qishni unchalik xush ko'rmasdim.",
      "Kunlardan bir kun eskirib yotgan sandiq orasidan g'alati kigiz qalpoqcha topib oldim. Qalpoqchani boshimga kiygan edim — hayron qolasiz! Butunlay ko'rinmas bo'lib qoldim-ku!"
    ],
    spineBg: "#7B5508",
    foil: "gold"
  },
  {
    id: "ufq",
    title: "Ufq",
    author: "Said Ahmad",
    year: 1974,
    genre: "Roman-trilogiya",
    synopsis: "Urush yillari va undan keyingi davrda o'zbek qishlog'i odamlarining mehnati, sadoqati va sinovlari haqidagi trilogiya.",
    cover: "https://images.uzum.uz/d5j47nbtqdhu87jrsfdg/original.jpg",
    source: "https://uzum.uz/uz/product/ufq-romantrilogiya-said-ahmad-1331306",
    price: 78000,
    pages: 680,
    format: "Qalin muqovali trilogiya",
    isbn: "978-9943-45-197-4",
    acclaim: "★ ★ ★ ★ ★ \"O'zbek xalqining matonati va muhabbatining abadiy obidasi.\" — Ozod Sharafiddinov",
    excerptChapter: "1-kitob: Qirq besh kun",
    excerptPages: [
      "Dala shiyponida chiroq xira yonar, Ikromjon ketmonni burchakka qo'yib, uzoq ufqqa tikildi. Katta Farg'ona kanali qurilishi butun vodiy ahlini oyoqqa turg'izgan, qazuvga chiqqan xalq daryoni yangi o'zanga burmoqda edi.",
      "Keyinchalik urush yillarida front ortida kechgan mashaqqatlar, Jannat xolaning o'g'il kutib o'tgan tunlari har bir o'zbek oilasining qismatiga aylandi."
    ],
    spineBg: "#1B3326",
    foil: "gold"
  },
  {
    id: "ulugbek-xazinasi",
    title: "Ulug'bek xazinasi",
    author: "Odil Yoqubov",
    year: 1974,
    genre: "Tarixiy roman",
    synopsis: "Mirzo Ulug'bekning so'nggi kunlari va olim shogirdlari uning bebaho kutubxonasini saqlab qolish uchun kurashi.",
    cover: "https://images.uzum.uz/cqoaj7nfrr8a72r763eg/original.jpg",
    source: "https://uzum.uz/uz/product/odil-yoqubov-ulugbek-xazinasi--1176732",
    price: 52000,
    pages: 380,
    format: "Zarhal muqova",
    isbn: "978-9943-48-197-4",
    acclaim: "★ ★ ★ ★ ★ \"Ilm va jaholat kurashi haqida yozilgan benazir tarixiy shohasar.\" — Pirimqul Qodirov",
    excerptChapter: "1-fasl: Samarqand osmonidagi yulduzlar",
    excerptPages: [
      "Samarqand osmonida yulduzlar charx urardi. Mirzo Ulug'bek rasadxona ustidagi tosh maydonchada turib, ko'k toqiga boqdi. 'Zij' jadvallari yakunlanib borar, ammo saroyda unga qarshi fitna pichirlashlari tobora avj olar edi.",
      "Ali Qushchi ustozining yonida turib, kitoblarni sandiqlarga joylashtirardi. 'Bu xazina yo'qolsa, insoniyat ming yil orqada qoladi, shogirdim', dedi Ulug'bek mahzun nigoh bilan."
    ],
    spineBg: "#1C2A47",
    foil: "gold"
  },
  {
    id: "yulduzli-tunlar",
    title: "Yulduzli tunlar",
    author: "Pirimqul Qodirov",
    year: 1979,
    genre: "Tarixiy roman",
    synopsis: "Zahiriddin Muhammad Boburning taxt uchun kurashlari, mag'lubiyatlari va shoir sifatidagi qalb dunyosi.",
    cover: "https://assets.asaxiy.uz/product/main_image/desktop/650a9ed842b1e.jpg.webp",
    source: "https://asaxiy.uz/product/pirimkul-kodirov-yulduzli-tunlar-lotin",
    price: 62000,
    pages: 560,
    format: "Zarhal hoshiyali Hardcover",
    isbn: "978-9943-50-197-9",
    acclaim: "★ ★ ★ ★ ★ \"Bobur shaxsiyati va yurt sog'inchining eng yuksak badiiy talqini.\" — Chingiz Aytmatov",
    excerptChapter: "1-fasl: Andijon tongi",
    excerptPages: [
      "Bobur Mirzo tog'lar orasidagi tor yo'ldan borar ekan, qor bo'roni kundan-kunga kuchayardi. O'n ikki yoshida taxtga o'tirgan bu o'smir boshiga tushgan sinovlar bir umrlik doston bo'lishini tarix ko'rsatib turardi.",
      "Vatan tuprog'idan uzoqlashgan sari Boburning ruboiylari yurak qoni bilan bitilar, har bir yulduzli tunda Andijon bog'lari uning tushlariga kirardi."
    ],
    spineBg: "#0E1C38",
    foil: "gold"
  },
  {
    id: "dunyoning-ishlari",
    title: "Dunyoning ishlari",
    author: "O'tkir Hoshimov",
    year: 1982,
    genre: "Qissa",
    synopsis: "Muallif onasi haqidagi xotiralar orqali mehr, sabr va oddiy insonlarning buyukligini hikoya qiladi.",
    cover: "https://images.uzum.uz/d5lq95mojia393mrsdq0/original.jpg",
    source: "https://uzum.uz/uz/product/dunyoning-ishlari-otkir-hoshimov-1310160",
    price: 38000,
    pages: 256,
    format: "Yumshoq/Qattiq tanlangan nashr",
    isbn: "978-9943-55-198-2",
    acclaim: "★ ★ ★ ★ ★ \"Ona muhabbati haqida yozilgan eng samimiy va ko'z yoshlarga to'la asar.\" — Erkin Vohidov",
    excerptChapter: "1-hikoya: Oq o'rik gullari",
    excerptPages: [
      "Onamni eslasam, ko'z o'ngimga oftob tushgan hovlimiz, non isi kelib turgan tandir va hovli burchagidagi oppoq gullagan o'rik daraxti keladi.",
      "U kishi hech qachon o'zi uchun yashamadi. Bolalarim deb yelib-yugurdi, hatto oxirgi luqmasini bizga ilindi. Dunyoning barcha ishlari o'tib ketadi, ammo onaning duosi qoladi."
    ],
    spineBg: "#3A2E24",
    foil: "gold"
  },
  {
    id: "ikki-eshik-orasi",
    title: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    year: 1986,
    genre: "Roman",
    synopsis: "Bir mahalla odamlari taqdiri urush va undan keyingi yillar fonida, har bir qahramon tilidan navbatma-navbat so'zlanadi.",
    cover: "https://images.uzum.uz/cqcls1ksslotj05l3hh0/original.jpg",
    source: "https://uzum.uz/uz/product/otkir-hoshimov-ikki-eshik-orasi-1151291",
    price: 56000,
    pages: 540,
    format: "To'liq qattiq nashr",
    isbn: "978-9943-60-198-6",
    acclaim: "★ ★ ★ ★ ★ \"Inson taqdiri va vijdoni oldidagi javobgarlik romani.\" — Abdulla Oripov",
    excerptChapter: "1-bob: Qora amma hikoyasi",
    excerptPages: [
      "Bu dunyo ikki eshik orasidagi bir yo'lakdir. Bir eshikdan kirib, ikkinchisidan chiqib ketasan. Shu yo'lakda yaxshilik qildingmi yoki birovning dilini og'ritdingmi — hammasi hisob-kitobli.",
      "Urush yillarida bir burda nonni o'n kishi bo'lishib yegan mahalimiz odamlar bir-biriga qardosh edi. Keyin tinchlik keldi-yu, ko'ngillar nega bunchalik sovuqlashdi?"
    ],
    spineBg: "#2A2A2E",
    foil: "silver"
  },
  {
    id: "otamdan-qolgan-dalalar",
    title: "Otamdan qolgan dalalar",
    author: "Tog'ay Murod",
    year: 1994,
    genre: "Roman",
    synopsis: "Paxta dalalarida ulg'aygan Dehqonqul hayoti orqali yer, mehnat va adolatsizlik haqidagi achchiq haqiqat.",
    cover: "https://images.uzum.uz/dal1np84u16t4d1rhh00/original.jpg",
    source: "https://uzum.uz/ru/product/otamdan-kolgan-dalalar-togaj-murod-alyj---266-1165790",
    price: 50000,
    pages: 336,
    format: "Milliy roman Hardcover",
    isbn: "978-9943-65-199-4",
    acclaim: "★ ★ ★ ★ ★ \"O'zbek dehqonining faryodi va dardi singgan vulqondek asar.\" — Ibrohim G'afurov",
    excerptChapter: "1-fasl: Oq oltin azobi",
    excerptPages: [
      "Qurmag'ur yer o'lgur shunaqa: unga mehr bersang, umringni oladi; mehr bermasang, o'zingni yutadi. Mening bobom ham shu dalada ketmon chopgan, otam ham bel bog'lagan.",
      "Paxta deb ko'zimiz qoraydi. Butun umrimiz egat boshida o'tdi. Dehqonqul bo'lib dunyoga keldim, dehqon bo'lib ketmoqdaman."
    ],
    spineBg: "#422818",
    foil: "gold"
  },
  {
    id: "tushda-kechgan-umrlar",
    title: "Tushda kechgan umrlar",
    author: "O'tkir Hoshimov",
    year: 1994,
    genre: "Roman",
    synopsis: "Afg'on urushidan qaytgan Rustamning fojiali taqdiri va tuzum qurboniga aylangan avlod hikoyasi.",
    cover: "https://images.uzum.uz/d6nc3a0s9rf3ubr0nang/original.jpg",
    source: "https://uzum.uz/uz/product/otkir-hoshimov-ikki-616610",
    price: 48000,
    pages: 352,
    format: "Qattiq muqova",
    isbn: "978-9943-70-199-4",
    acclaim: "★ ★ ★ ★ ★ \"Mustabid tuzum jarohatlari va sindirilgan taqdirlar fojiasi.\" — Matnazar Abdulhakim",
    excerptChapter: "1-fasl: Qaytish",
    excerptPages: [
      "Rustam Afg'on tog'larining qora changini yutib qaytgach, o'z uyida ham tinchlik topa olmadi. Tunda quloqlari ostida portlashlar aks-sado berar, jang maydonida qolgan do'stlari ko'z o'ngidan ketmasdi.",
      "Tuzum esa unga faqat bir parcha temir nishon berib, unutilishga mahkum qilgandi. Bu hayot tushdek o'tdimi yoki rostdan ham shuncha azob boshdan kechdimi?"
    ],
    spineBg: "#222D38",
    foil: "silver"
  },
  {
    id: "shaytanat",
    title: "Shaytanat",
    author: "Tohir Malik",
    year: 1994,
    genre: "Detektiv roman",
    synopsis: "Jinoyat olami va uning ichidagi qahramonlar taqdiri orqali yovuzlik insonni qanday yutib yuborishi ko'rsatiladi.",
    cover: "https://images.uzum.uz/d70neq21146ojv98ji8g/original.jpg",
    source: "https://uzum.uz/uz/product/tohir-malik-shaytanat-toliq-nashri-903675",
    price: 88000,
    pages: 720,
    format: "Katta hajmli detektiv roman",
    isbn: "978-9943-75-199-4",
    acclaim: "★ ★ ★ ★ ★ \"O'zbek detektiv janrining eng mashhur va ommabop shohasari.\" — O'zbekiston adabiyoti",
    excerptChapter: "1-kitob: Asadbek saltanati",
    excerptPages: [
      "Asadbek kabinetidagi qalin baxmal pardalarni tushirdi. Shahar shovqini bu yerga yetib kelmasdi. Stol ustidagi telefon jiringladi, bu qo'ng'iroq ortida insonlar hayoti va katta boyliklar yotardi.",
      "Qora bozor, xufiyona o'yinlar va qasos qonunlari. Bu dunyoga bir qadam qo'ygan odam hech qachon ortga qayta olmasdi."
    ],
    spineBg: "#161616",
    foil: "silver"
  },
  {
    id: "jinlar-bazmi",
    title: "Jinlar bazmi",
    author: "Abdulla Qodiriy",
    year: 1928,
    genre: "Hikoyalar to'plami",
    synopsis: "Qodiriyning hajviy va hayotiy hikoyalari: xurofot, johillik va inson tabiatining kulgili tomonlari.",
    cover: "https://assets.asaxiy.uz/product/main_image/desktop/67d810f7ac00a.jpg.webp",
    source: "https://asaxiy.uz/product/abdulla-qodiriy-jinlar-bazmi",
    price: 34000,
    pages: 180,
    format: "Qayta tiklangan sara hikoyalar",
    isbn: "978-9943-80-192-8",
    acclaim: "★ ★ ★ ★ ★ \"Qodiriy kulgusi orqali xalqning uyg'onish jarayoni.\" — Sharafiddinov",
    excerptChapter: "Hikoya: Jinlar bazmi",
    excerptPages: [
      "Kuz kechalarining birida choyxonada to'planganlar g'aroyib voqeani eshitishga intiq edilar. Mulla Do'stmat o'zining eski qoradori xumdonida ko'rgan 'alvastilar' haqida so'z boshladi.",
      "Qodiriyning o'tkir qalami johillik va xurofotga botgan qahramonlarni kulgili holatlarga solar ekan, o'quvchini ham kuldiradi, ham chuqur o'yga toldiradi."
    ],
    spineBg: "#2C1E3C",
    foil: "gold"
  }
];

export interface CartItem {
  book: Book;
  quantity: number;
}

export default function App() {
  const probeRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const playRingRef = useRef<HTMLButtonElement>(null);
  const shelfSectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Caption line refs
  const titleMaskRef = useRef<HTMLDivElement>(null);
  const subMaskRef = useRef<HTMLDivElement>(null);
  const yearMaskRef = useRef<HTMLDivElement>(null);

  // Decade tabs ref
  const tabsNavRef = useRef<HTMLElement>(null);
  const tabIndicatorRef = useRef<HTMLDivElement>(null);

  // Detail dialog refs
  const detailDialogRef = useRef<HTMLDivElement>(null);
  const detailSubRef = useRef<HTMLDivElement>(null);
  const detailTitleRef = useRef<HTMLHeadingElement>(null);
  const detailMetaRef = useRef<HTMLDivElement>(null);
  const detailAcclaimRef = useRef<HTMLParagraphElement>(null);
  const detailSynopsisRef = useRef<HTMLParagraphElement>(null);
  const detailSpecsRef = useRef<HTMLDivElement>(null);
  const detailPosterSvgRef = useRef<SVGSVGElement>(null);
  const detailPosterImgRef = useRef<SVGImageElement>(null);
  const detailMaskedLinesRef = useRef<HTMLDivElement[]>([]);

  // Array of 48 tape elements (16 books * 3 copies)
  const tapeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // State management
  const [activeBook, setActiveBook] = useState<Book>(BOOKS[0]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [readerPageIndex, setReaderPageIndex] = useState(0);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [catalogSearch, setCatalogSearch] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // Mutable animation state
  // Start on index 0 ("O'tkan kunlar"), middle copy: 16 + 0 = 16
  const stateRef = useRef({
    s: 16,
    T: 16,
    hoverVirtualIndex: -1,
    activeBookIndex: 0,
    mx: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    my: typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
    cx: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    cy: typeof window !== 'undefined' ? window.innerHeight / 2 : 400,
    tiltX: 0,
    tiltY: 0,
    onCover: false,
    isOpen: false,
    isDragging: false,
    dragStartX: 0,
    dragStartT: 0,
    hasDragged: false,
    lifts: new Float32Array(48),
    wheelTimeout: null as any,
    prefersReducedMotion: false,
    activeDecadeIndex: 1, // 1920s
    isOverBtn: false
  });

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2800);
  };

  const addToBag = (book: Book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { book, quantity: 1 }];
    });
    triggerToast(`"${book.title}" savatga qo'shildi`);
  };

  const updateCartQty = (bookId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.book.id === bookId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (bookId: string) => {
    setCart((prev) => prev.filter((item) => item.book.id !== bookId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Jump to specific book on the 3D shelf
  const jumpToBook = (bookIndex: number) => {
    const state = stateRef.current;
    const currentBase = Math.round(state.s / 16) * 16;
    const candidates = [
      currentBase + bookIndex,
      currentBase + bookIndex - 16,
      currentBase + bookIndex + 16
    ];
    candidates.sort((a, b) => Math.abs(a - state.s) - Math.abs(b - state.s));
    state.T = candidates[0];
    setIsCatalogOpen(false);
  };

  useEffect(() => {
    // Preload all 16 book cover images as requested
    BOOKS.forEach((b) => {
      const img = new Image();
      img.src = b.cover;
    });

    const state = stateRef.current;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    state.prefersReducedMotion = mediaQuery.matches;
    const onMotionChange = (e: MediaQueryListEvent) => {
      state.prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', onMotionChange);

    // Initial caption setup
    if (titleMaskRef.current && subMaskRef.current && yearMaskRef.current) {
      titleMaskRef.current.innerHTML = `<span class="caption-title-text" style="display:block; text-align:center;">${BOOKS[0].title}</span>`;
      subMaskRef.current.innerHTML = `<span class="caption-sub-text" style="display:block; text-align:center;">${BOOKS[0].author.toUpperCase()} / ${BOOKS[0].genre.toUpperCase()}</span>`;
      yearMaskRef.current.innerHTML = `<span class="caption-year-text" style="display:block; text-align:center;">${BOOKS[0].year} • ${BOOKS[0].price.toLocaleString('uz-UZ')} UZS</span>`;
    }

    // Set initial era indicator
    updateDecadeIndicator(1926, false);

    // Swap caption helper function
    function swapCaption(newIndex: number, dir: number) {
      state.activeBookIndex = newIndex;
      const book = BOOKS[newIndex];
      setActiveBook(book);

      updateDecadeIndicator(book.year, true);

      const masks = [
        { el: titleMaskRef.current, text: book.title, cls: 'caption-title-text' },
        { el: subMaskRef.current, text: `${book.author.toUpperCase()} / ${book.genre.toUpperCase()}`, cls: 'caption-sub-text' },
        { el: yearMaskRef.current, text: `${book.year} • ${book.price.toLocaleString('uz-UZ')} UZS`, cls: 'caption-year-text' }
      ];

      masks.forEach(({ el, text, cls }) => {
        if (!el) return;
        const oldSpans = Array.from(el.querySelectorAll<HTMLSpanElement>('span:not(.exiting)'));
        const newSpan = document.createElement('span');
        newSpan.className = cls;
        newSpan.textContent = text;
        newSpan.style.display = 'block';
        newSpan.style.textAlign = 'center';

        if (oldSpans.length > 0) {
          newSpan.style.position = 'absolute';
          newSpan.style.left = '0';
          newSpan.style.right = '0';
          newSpan.style.top = '0';
        } else {
          newSpan.style.position = 'relative';
        }

        el.appendChild(newSpan);

        if (state.prefersReducedMotion) {
          oldSpans.forEach((s) => s.remove());
          newSpan.style.position = 'relative';
          return;
        }

        newSpan
          .animate(
            [
              { transform: `translateY(${dir * 105}%)` },
              { transform: 'translateY(0%)' }
            ],
            {
              duration: 650,
              easing: 'cubic-bezier(.2,.8,.2,1)',
              fill: 'both'
            }
          )
          .onfinish = () => {
            newSpan.style.position = 'relative';
          };

        oldSpans.forEach((oldSpan) => {
          oldSpan.classList.add('exiting');
          const comp = window.getComputedStyle(oldSpan).transform;
          const anim = oldSpan.animate(
            [
              { transform: comp === 'none' ? 'translateY(0%)' : comp },
              { transform: `translateY(${-dir * 105}%)` }
            ],
            {
              duration: 650,
              easing: 'cubic-bezier(.2,.8,.2,1)',
              fill: 'both'
            }
          );
          anim.onfinish = () => oldSpan.remove();
        });
      });
    }

    function updateDecadeIndicator(year: number, animate: boolean) {
      if (!tabsNavRef.current || !tabIndicatorRef.current) return;
      let targetTabIdx = 1; // 1920-30s
      if (year >= 1990) targetTabIdx = 4;
      else if (year >= 1970) targetTabIdx = 3;
      else if (year >= 1940) targetTabIdx = 2;
      else targetTabIdx = 1;

      state.activeDecadeIndex = targetTabIdx;

      const buttons = tabsNavRef.current.querySelectorAll<HTMLButtonElement>('.tab-btn');
      buttons.forEach((btn, idx) => {
        if (idx === targetTabIdx) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      const activeBtn = buttons[targetTabIdx];
      if (activeBtn) {
        if (!animate) {
          tabIndicatorRef.current.style.transition = 'none';
        }
        tabIndicatorRef.current.style.width = `${activeBtn.offsetWidth}px`;
        tabIndicatorRef.current.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
        if (!animate) {
          void tabIndicatorRef.current.offsetWidth;
          tabIndicatorRef.current.style.transition = '';
        }
      }
    }

    // Geometry calculation from probe
    function getGeometry() {
      let H = 360;
      if (probeRef.current) {
        H = probeRef.current.getBoundingClientRect().height;
      }
      const ws = (H * 142) / 840;
      const d = (H * 474) / 900;
      const gap = H * 0.03;
      return { H, ws, d, gap };
    }

    // Smoothstep function B(r)
    function B(r: number) {
      if (Math.abs(r) < 1) {
        return (r + Math.sin(Math.PI * r) / Math.PI) / 2;
      }
      return r > 0 ? 0.5 : -0.5;
    }

    // Smoothstep helper
    function smoothstep(x: number) {
      const c = Math.max(0, Math.min(1, x));
      return c * c * (3 - 2 * c);
    }

    let inkRafId: number | null = null;
    let currentSheetAnim: Animation | null = null;

    // Open detail
    function openDetail() {
      if (state.isOpen) return;
      state.isOpen = true;
      state.T = Math.round(state.T);
      state.s = state.T;

      const book = BOOKS[state.activeBookIndex];
      setActiveBook(book);

      if (detailSubRef.current) detailSubRef.current.textContent = `${book.author.toUpperCase()} • ${book.genre.toUpperCase()}`;
      if (detailTitleRef.current) detailTitleRef.current.textContent = book.title;
      if (detailMetaRef.current) detailMetaRef.current.textContent = `${book.year} • ${book.format.toUpperCase()} • ${book.pages} BET • ${book.price.toLocaleString('uz-UZ')} UZS`;
      if (detailAcclaimRef.current) detailAcclaimRef.current.textContent = book.acclaim;
      if (detailSynopsisRef.current) detailSynopsisRef.current.textContent = book.synopsis;
      if (detailSpecsRef.current) {
        detailSpecsRef.current.innerHTML = `
          <span>ISBN: <strong>${book.isbn}</strong></span> • 
          <span>Muallif: <strong>${book.author}</strong></span> • 
          <span class="text-[#1F3FB0]"><strong>Sotuvda mavjud (Omborxona)</strong></span>
        `;
      }

      // Point SVG poster to book cover URL
      if (detailPosterImgRef.current) {
        detailPosterImgRef.current.setAttribute('href', book.cover);
        detailPosterImgRef.current.setAttribute('x', '0');
        detailPosterImgRef.current.setAttribute('y', '0');
        detailPosterImgRef.current.setAttribute('width', '474');
        detailPosterImgRef.current.setAttribute('height', '900');
      }

      // Reset ink blobs
      const blobs = detailPosterSvgRef.current?.querySelectorAll<SVGCircleElement>('.ink-blob');
      blobs?.forEach((b) => b.setAttribute('r', '0'));

      // Active cover face screen rect
      const activeTapeIndex = ((Math.round(state.s) % 48) + 48) % 48;
      const activeTapeEl = tapeRefs.current[activeTapeIndex];
      const activeCoverEl = activeTapeEl?.querySelector<HTMLElement>('.cv');
      const rect = activeCoverEl
        ? activeCoverEl.getBoundingClientRect()
        : {
            top: window.innerHeight * 0.3,
            left: window.innerWidth * 0.3,
            right: window.innerWidth * 0.7,
            bottom: window.innerHeight * 0.7,
            width: window.innerWidth * 0.4,
            height: window.innerHeight * 0.4
          };

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (detailDialogRef.current) {
        detailDialogRef.current.style.visibility = 'visible';
        detailDialogRef.current.setAttribute('aria-hidden', 'false');
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;
        detailDialogRef.current.style.transformOrigin = `${originX}px ${originY}px`;

        if (state.prefersReducedMotion) {
          detailDialogRef.current.style.clipPath = 'inset(0px 0px 0px 0px round 0px)';
          detailDialogRef.current.style.transform = 'rotate(0deg)';
          blobs?.forEach((b) => b.setAttribute('r', '720'));
          detailMaskedLinesRef.current.forEach((line) => {
            if (line) line.style.transform = 'translateY(0%)';
          });
          return;
        }

        const startClip = `inset(${rect.top.toFixed(1)}px ${(vw - rect.right).toFixed(1)}px ${(vh - rect.bottom).toFixed(1)}px ${rect.left.toFixed(1)}px round 3px)`;
        const endClip = `inset(0px 0px 0px 0px round 0px)`;

        currentSheetAnim = detailDialogRef.current.animate(
          [
            { clipPath: startClip, transform: 'rotate(-4.5deg)' },
            { clipPath: endClip, transform: 'rotate(0deg)' }
          ],
          {
            duration: 1050,
            easing: 'cubic-bezier(.76,0,.18,1)',
            fill: 'both'
          }
        );

        // Masked lines rise staggered
        detailMaskedLinesRef.current.forEach((line, idx) => {
          if (!line) return;
          line.animate(
            [
              { transform: 'translateY(110%)' },
              { transform: 'translateY(0%)' }
            ],
            {
              duration: 900,
              delay: 620 + idx * 75,
              easing: 'cubic-bezier(.2,.8,.2,1)',
              fill: 'both'
            }
          );
        });

        // Ink bleed loop starting 520ms after open
        const blobDelays = [0, 120, 220, 300, 360, 420, 180];
        const startTime = performance.now() + 520;

        if (inkRafId) cancelAnimationFrame(inkRafId);

        const runInk = (now: number) => {
          if (now < startTime) {
            inkRafId = requestAnimationFrame(runInk);
            return;
          }
          const elapsed = now - startTime;
          blobs?.forEach((blob, i) => {
            const bDelay = blobDelays[i];
            const bTime = elapsed - bDelay;
            if (bTime <= 0) {
              blob.setAttribute('r', '0');
            } else if (bTime >= 1250) {
              blob.setAttribute('r', '720');
            } else {
              const p = bTime / 1250;
              const eased = 1 - Math.pow(1 - p, 3);
              blob.setAttribute('r', (eased * 720).toFixed(1));
            }
          });

          if (elapsed < 2400) {
            inkRafId = requestAnimationFrame(runInk);
          }
        };

        inkRafId = requestAnimationFrame(runInk);
      }
    }

    // Close detail
    function closeDetail() {
      if (!state.isOpen) return;
      state.isOpen = false;
      if (inkRafId) cancelAnimationFrame(inkRafId);

      if (state.prefersReducedMotion) {
        if (detailDialogRef.current) {
          detailDialogRef.current.style.visibility = 'hidden';
          detailDialogRef.current.setAttribute('aria-hidden', 'true');
        }
        return;
      }

      const activeTapeIndex = ((Math.round(state.s) % 48) + 48) % 48;
      const activeTapeEl = tapeRefs.current[activeTapeIndex];
      const activeCoverEl = activeTapeEl?.querySelector<HTMLElement>('.cv');
      const rect = activeCoverEl
        ? activeCoverEl.getBoundingClientRect()
        : {
            top: window.innerHeight * 0.3,
            left: window.innerWidth * 0.3,
            right: window.innerWidth * 0.7,
            bottom: window.innerHeight * 0.7,
            width: window.innerWidth * 0.4,
            height: window.innerHeight * 0.4
          };

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (detailDialogRef.current) {
        const startClip = `inset(0px 0px 0px 0px round 0px)`;
        const endClip = `inset(${rect.top.toFixed(1)}px ${(vw - rect.right).toFixed(1)}px ${(vh - rect.bottom).toFixed(1)}px ${rect.left.toFixed(1)}px round 3px)`;

        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;
        detailDialogRef.current.style.transformOrigin = `${originX}px ${originY}px`;

        const closeAnim = detailDialogRef.current.animate(
          [
            { clipPath: startClip, transform: 'rotate(0deg)' },
            { clipPath: endClip, transform: 'rotate(-4.5deg)' }
          ],
          {
            duration: 850,
            easing: 'cubic-bezier(.76,0,.18,1)',
            fill: 'both'
          }
        );

        closeAnim.onfinish = () => {
          if (detailDialogRef.current) {
            detailDialogRef.current.style.visibility = 'hidden';
            detailDialogRef.current.setAttribute('aria-hidden', 'true');
          }
          if (currentSheetAnim) currentSheetAnim.cancel();
          closeAnim.cancel();
        };
      }
    }

    // Attach open / close triggers
    const onPlayRingClick = () => openDetail();
    playRingRef.current?.addEventListener('click', onPlayRingClick);

    // Keyboard handlers
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isReaderOpen) setIsReaderOpen(false);
        else if (isCartOpen) setIsCartOpen(false);
        else if (isCatalogOpen) setIsCatalogOpen(false);
        else closeDetail();
      } else if (e.key === 'Enter') {
        if (!state.isOpen && !isReaderOpen && !isCartOpen && !isCatalogOpen) openDetail();
      } else if (!state.isOpen && !isReaderOpen && !isCartOpen && !isCatalogOpen) {
        if (e.key === 'ArrowLeft') {
          state.T = Math.round(state.T) - 1;
        } else if (e.key === 'ArrowRight') {
          state.T = Math.round(state.T) + 1;
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);

    // Mouse movement
    const onPointerMove = (e: PointerEvent) => {
      state.mx = e.clientX;
      state.my = e.clientY;

      const target = e.target as HTMLElement | null;
      state.isOverBtn = Boolean(target?.closest('button, a, input, select, textarea, [role="button"]'));

      // Dragging physics
      if (state.dragStartX !== 0 && !state.isDragging) {
        const dx = e.clientX - state.dragStartX;
        if (Math.abs(dx) > 5) {
          state.isDragging = true;
          state.hasDragged = true;
        }
      }
      if (state.isDragging) {
        const { ws, gap } = getGeometry();
        const dx = e.clientX - state.dragStartX;
        state.T = state.dragStartT - dx / (ws + gap);
      }
    };
    window.addEventListener('pointermove', onPointerMove);

    const onPointerDown = (e: PointerEvent) => {
      if (state.isOpen || isReaderOpen || isCartOpen || isCatalogOpen) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('.shelf-section')) {
        state.dragStartX = e.clientX;
        state.dragStartT = state.T;
        state.hasDragged = false;
        state.isDragging = false;
      }
    };
    window.addEventListener('pointerdown', onPointerDown);

    const onPointerUp = () => {
      if (state.isDragging) {
        state.isDragging = false;
        state.T = Math.round(state.T);
      }
      state.dragStartX = 0;
    };
    window.addEventListener('pointerup', onPointerUp);

    // Wheel scrub
    const onWheel = (e: WheelEvent) => {
      if (state.isOpen || isReaderOpen || isCartOpen || isCatalogOpen) return;
      const { ws, gap } = getGeometry();
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      state.T += (delta / (ws + gap)) * 0.5;

      clearTimeout(state.wheelTimeout);
      state.wheelTimeout = setTimeout(() => {
        state.T = Math.round(state.T);
      }, 160);
    };
    window.addEventListener('wheel', onWheel, { passive: true });

    // Handle tab clicks
    const tabsContainer = tabsNavRef.current;
    const onTabClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('.tab-btn');
      if (!btn) return;
      const decade = btn.dataset.decade;
      if (!decade) return;

      let targetBookIdx = 0;
      if (decade === '1940-60s') targetBookIdx = 5; // Qutlug' qon
      else if (decade === '1970-80s') targetBookIdx = 7; // Ufq
      else if (decade === '1990s') targetBookIdx = 12; // Otamdan qolgan dalalar
      else targetBookIdx = 0; // O'tkan kunlar

      const currentBase = Math.round(state.s / 16) * 16;
      const candidates = [
        currentBase + targetBookIdx,
        currentBase + targetBookIdx - 16,
        currentBase + targetBookIdx + 16
      ];
      candidates.sort((a, b) => Math.abs(a - state.s) - Math.abs(b - state.s));
      state.T = candidates[0];
    };
    tabsContainer?.addEventListener('click', onTabClick);

    // Arrow navigation
    const leftArrow = document.querySelector<HTMLButtonElement>('.nav-arrow.left');
    const rightArrow = document.querySelector<HTMLButtonElement>('.nav-arrow.right');
    const onLeftClick = () => {
      state.T = Math.round(state.T) - 1;
    };
    const onRightClick = () => {
      state.T = Math.round(state.T) + 1;
    };
    leftArrow?.addEventListener('click', onLeftClick);
    rightArrow?.addEventListener('click', onRightClick);

    // Close button
    const closeBtn = document.querySelector<HTMLButtonElement>('.detail-close-btn');
    closeBtn?.addEventListener('click', closeDetail);

    // MAIN ANIMATION LOOP
    let lastTime = performance.now();
    let animId: number;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      const W = window.innerWidth;
      const H_viewport = window.innerHeight;
      const cyShelf = H_viewport / 2;

      const { H, ws, d, gap } = getGeometry();

      // Write CSS variables onto stage
      if (stageRef.current) {
        stageRef.current.style.setProperty('--ws', `${ws.toFixed(2)}px`);
        stageRef.current.style.setProperty('--d', `${d.toFixed(2)}px`);
      }

      // Spring physics
      const k = state.isDragging ? 18 : 5.2;
      if (state.prefersReducedMotion) {
        state.s = state.T;
      } else {
        state.s += (state.T - state.s) * (1 - Math.exp(-k * dt));
        if (Math.abs(state.T - state.s) < 1e-4) {
          state.s = state.T;
        }
      }

      // Normalising loops for 16 books (keep s in range 0..32)
      if (state.s > 32) {
        state.s -= 16;
        state.T -= 16;
      } else if (state.s < 0) {
        state.s += 16;
        state.T += 16;
      }

      // Active book check & caption swap (modulo 16)
      const newActiveBook = (((Math.round(state.s) % 16) + 16) % 16);
      if (newActiveBook !== state.activeBookIndex) {
        const dir = Math.sign(state.T - state.s) || 1;
        swapCaption(newActiveBook, dir);
      }

      // Tilt calculation
      const onCover =
        Math.abs(state.mx - W / 2) <= 0.55 * d &&
        Math.abs(state.my - cyShelf) <= 0.55 * H &&
        !state.isOpen &&
        !isReaderOpen &&
        !isCartOpen &&
        !isCatalogOpen &&
        Math.abs(state.T - state.s) < 0.3;
      state.onCover = onCover;

      let targetTiltY = 0;
      let targetTiltX = 0;
      if (onCover) {
        targetTiltY = ((state.mx - W / 2) / (0.55 * d)) * 9;
        targetTiltX = -((state.my - cyShelf) / (H / 2)) * 6;
      } else {
        targetTiltY = ((state.mx - W / 2) / W) * 5;
        targetTiltX = 0;
      }

      state.tiltY += (targetTiltY - state.tiltY) * (1 - Math.exp(-7 * dt));
      state.tiltX += (targetTiltX - state.tiltX) * (1 - Math.exp(-7 * dt));

      // Cursor smoothing
      state.cx += (state.mx - state.cx) * (1 - Math.exp(-16 * dt));
      state.cy += (state.my - state.cy) * (1 - Math.exp(-16 * dt));

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${state.cx.toFixed(1)}px, ${state.cy.toFixed(1)}px, 0)`;

        let cursorClass = 'custom-cursor';
        if (state.isOpen || isReaderOpen || isCartOpen || isCatalogOpen) {
          cursorClass += state.isOverBtn ? ' state-btn' : '';
        } else if (onCover) {
          cursorClass += ' state-open';
        } else if (state.hoverVirtualIndex >= 0) {
          const hoveredR = (((state.hoverVirtualIndex - state.s) % 48) + 72) % 48 - 24;
          if (Math.abs(hoveredR) > 0.5) {
            cursorClass += ' state-spine';
          }
        } else if (state.isOverBtn) {
          cursorClass += ' state-btn';
        }
        if (cursorRef.current.className !== cursorClass) {
          cursorRef.current.className = cursorClass;
        }
      }

      // Play ring update
      if (playRingRef.current) {
        const playRingLeft = W / 2 - 0.5 * d - 6;
        const playRingTop = cyShelf + 0.36 * H;
        const scaleAmount = state.isOpen || isReaderOpen || isCartOpen || isCatalogOpen
          ? 0
          : smoothstep(Math.max(0, 1 - Math.abs(state.T - state.s) * 3));

        playRingRef.current.style.left = `${playRingLeft.toFixed(1)}px`;
        playRingRef.current.style.top = `${playRingTop.toFixed(1)}px`;
        playRingRef.current.style.setProperty('--play-scale', scaleAmount.toFixed(3));
        playRingRef.current.style.pointerEvents =
          state.isOpen || scaleAmount < 0.2 ? 'none' : 'auto';
      }

      // Render 48 tapes (16 books * 3 copies)
      for (let v = 0; v < 48; v++) {
        const tapeEl = tapeRefs.current[v];
        if (!tapeEl) continue;

        let r = (v - state.s) % 48;
        if (r > 24) r -= 48;
        if (r < -24) r += 48;

        // Hover lift easing
        const isHovered = state.hoverVirtualIndex === v && Math.abs(r) > 0.5;
        const targetLift = isHovered ? 1 : 0;
        state.lifts[v] += (targetLift - state.lifts[v]) * (1 - Math.exp(-12 * dt));
        const lift = state.lifts[v];

        const x = r * (ws + gap) + (d - ws + 1.6 * gap) * B(r);

        // Offscreen culling
        if (Math.abs(x) > W / 2 + 1.5 * d) {
          tapeEl.style.visibility = 'hidden';
          continue;
        } else {
          tapeEl.style.visibility = 'visible';
        }

        const o = smoothstep(Math.max(0, 1 - Math.abs(r)));
        const rotY = -90 * o + state.tiltY * o;
        const rotX = state.tiltX * o;
        const rotZ = -4.5 * o;
        const transZ = o * 0.2 * H;
        const transY = -o * 0.025 * H - lift * 0.045 * H;

        tapeEl.style.transform = `translate3d(${x.toFixed(2)}px, ${transY.toFixed(2)}px, ${transZ.toFixed(2)}px) rotateZ(${rotZ.toFixed(3)}deg) rotateX(${rotX.toFixed(3)}deg) rotateY(${rotY.toFixed(3)}deg)`;
        tapeEl.style.zIndex = `${Math.round(100 - Math.abs(r) * 4)}`;
        tapeEl.style.setProperty('--shade-sp', (o * 0.55).toFixed(3));
        tapeEl.style.setProperty('--shade-cv', ((1 - o) * 0.5).toFixed(3));
      }

      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      if (inkRafId) cancelAnimationFrame(inkRafId);
      clearTimeout(state.wheelTimeout);
      mediaQuery.removeEventListener('change', onMotionChange);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('wheel', onWheel);
      playRingRef.current?.removeEventListener('click', onPlayRingClick);
      tabsContainer?.removeEventListener('click', onTabClick);
      leftArrow?.removeEventListener('click', onLeftClick);
      rightArrow?.removeEventListener('click', onRightClick);
      closeBtn?.removeEventListener('click', closeDetail);
    };
  }, [isReaderOpen, isCartOpen, isCatalogOpen]);

  const handleTapeClick = (v: number) => {
    const state = stateRef.current;
    if (state.hasDragged) return;
    let r = (v - state.s) % 48;
    if (r > 24) r -= 48;
    if (r < -24) r += 48;

    if (Math.abs(r) < 0.5) {
      const activeCoverEl = tapeRefs.current[v]?.querySelector<HTMLElement>('.cv');
      activeCoverEl?.click();
    } else {
      state.T = Math.round(state.T + r);
    }
  };

  const handleTapePointerEnter = (v: number) => {
    stateRef.current.hoverVirtualIndex = v;
  };

  const handleTapePointerLeave = (v: number) => {
    if (stateRef.current.hoverVirtualIndex === v) {
      stateRef.current.hoverVirtualIndex = -1;
    }
  };

  const filteredCatalogBooks = BOOKS.filter((b) => {
    const q = catalogSearch.toLowerCase().trim();
    if (!q) return true;
    return (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.genre.toLowerCase().includes(q) ||
      b.year.toString().includes(q) ||
      b.isbn.includes(q)
    );
  });

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none">
      {/* Hidden height probe for real --H measurement */}
      <div
        ref={probeRef}
        id="h-probe"
        style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', height: 'var(--H)' }}
      />

      {/* Fixed Paper Grain Layer */}
      <svg className="grain-overlay" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={3} stitchTiles="stitch" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.45  0 0 0 0 0.42  0 0 0 0 0.38  0 0 0 0.22 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>

      {/* Toast notification */}
      <div className={`bookstore-toast ${toastMessage ? 'show' : ''}`}>
        <Sparkles className="w-3.5 h-3.5 text-[#1F3FB0]" />
        <span>{toastMessage}</span>
      </div>

      {/* 1. Top Bar */}
      <header className="top-bar" role="banner">
        <div className="flex items-center justify-start gap-3">
          <button
            type="button"
            className="box lbl text-[#141414] hover:bg-black/5 transition-colors gap-1.5"
            onClick={() => setIsCatalogOpen(true)}
          >
            <BookMarked className="w-3 h-3 text-[#1F3FB0]" />
            KATALOG / RO'YXAT
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-[#1F3FB0] select-none text-center">
          <span className="serif-font text-xl md:text-2xl font-bold tracking-wide text-[#1F3FB0]">O'ZBEK ADABIYOTI</span>
          <span className="logo-sub mt-[4px]">BESTSELLER KITOBLAR JAVONI • 1926 — 1994</span>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            className="box lbl text-[#141414] hover:bg-black/5 transition-colors gap-2 relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="w-3 h-3 text-[#1F3FB0]" />
            SAVAT ({cartItemCount})
          </button>
        </div>
      </header>

      {/* 2. Decade / Era Tabs */}
      <nav ref={tabsNavRef} className="tabs-nav" aria-label="Book Collections">
        <div className="tabs-container">
          <div ref={tabIndicatorRef} className="tab-indicator" />
          <button type="button" className="tab-btn lbl" data-decade="ALL">
            BARCHASI
          </button>
          <button type="button" className="tab-btn lbl" data-decade="1920-30s">
            1920-30s JADIDLAR
          </button>
          <button type="button" className="tab-btn lbl" data-decade="1940-60s">
            1940-60s KLASSIKA
          </button>
          <button type="button" className="tab-btn lbl" data-decade="1970-80s">
            1970-80s SHOHASARLAR
          </button>
          <button type="button" className="tab-btn lbl" data-decade="1990s">
            1990s ISTIQLOL
          </button>
        </div>
      </nav>

      {/* 3. The Shelf (3D Stage) */}
      <section ref={shelfSectionRef} className="shelf-section" aria-label="Bookshelf display">
        <div ref={stageRef} className="shelf-stage">
          {Array.from({ length: 48 }).map((_, v) => {
            const book = BOOKS[v % 16];

            return (
              <div
                key={v}
                ref={(el) => {
                  tapeRefs.current[v] = el;
                }}
                className="shelf-tape"
                onClick={() => handleTapeClick(v)}
                onPointerEnter={() => handleTapePointerEnter(v)}
                onPointerLeave={() => handleTapePointerLeave(v)}
                aria-label={book.title}
              >
                {/* Book Spine (front face when standing in shelf) */}
                <div
                  className="face sp"
                  style={{ backgroundColor: book.spineBg }}
                >
                  <div className={`spine-content ${book.foil === 'gold' ? 'spine-gold-foil' : 'spine-silver-foil'}`}>
                    <span className="spine-year">{book.year}</span>
                    <span className="spine-title">{book.title}</span>
                    <span className="spine-author">{book.author}</span>
                  </div>
                  <div className="shade-overlay" />
                </div>

                {/* Book Front Cover (right side of cuboid that turns front) */}
                <div
                  className="face cv"
                  style={{ backgroundImage: `url(${book.cover})` }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const r = (((v - stateRef.current.s) % 48) + 72) % 48 - 24;
                    if (Math.abs(r) < 0.5) {
                      const playRing = playRingRef.current;
                      playRing?.click();
                    } else {
                      stateRef.current.T = Math.round(stateRef.current.T + r);
                    }
                  }}
                >
                  <div className="shade-overlay" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Play / Read Ring */}
      <button ref={playRingRef} type="button" className="play-ring" aria-label="Kitob tafsilotlari">
        <BookOpen className="w-4 h-4 text-[#1F3FB0] ml-0.5" />
      </button>

      {/* 5. Caption Stack */}
      <div className="caption-stack" aria-live="polite">
        <div ref={titleMaskRef} className="caption-mask caption-title-mask" />
        <div ref={subMaskRef} className="caption-mask caption-sub-mask" />
        <div ref={yearMaskRef} className="caption-mask caption-year-mask" />
      </div>

      {/* 6. Navigation Arrows */}
      <button type="button" className="nav-arrow left" aria-label="Oldingi kitob">
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 1 L1 5 L5 9" />
          <line x1="1" y1="5" x2="17" y2="5" />
        </svg>
      </button>
      <button type="button" className="nav-arrow right" aria-label="Keyingi kitob">
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 1 L17 5 L13 9" />
          <line x1="1" y1="5" x2="17" y2="5" />
        </svg>
      </button>

      {/* 7. Footer */}
      <footer className="page-footer" role="contentinfo">
        <span className="lbl text-[#141414]">© O'ZBEK ADABIYOTI BESTSELLERLARI — XRONOLOGIK JAVON LOYIHASI</span>
        <div className="flex items-center gap-4">
          <a
            href={activeBook.source}
            target="_blank"
            rel="noopener noreferrer"
            className="lbl text-[#1F3FB0] hover:underline flex items-center gap-1"
          >
            DO'KONDAN OLISH <ExternalLink className="w-3 h-3" />
          </a>
          <span className="lbl text-[#141414]">/</span>
          <button
            type="button"
            className="lbl text-[#141414] hover:underline"
            onClick={() => triggerToast('Barcha muqovalar Uzum va Asaxiy do\'konlaridan tekshirib olingan.')}
          >
            MANBALAR
          </button>
        </div>
      </footer>

      {/* 8. Custom Smooth Cursor */}
      <div ref={cursorRef} className="custom-cursor">
        <div className="cursor-ring" />
        <div className="cursor-dot" />
        <div className="cursor-label">
          <span>O'QISH</span>
          <span>READ</span>
        </div>
      </div>

      {/* Detail Dialog: Paper Sheet & Ragged Ink Bleed Reveal */}
      <div
        ref={detailDialogRef}
        className="detail-dialog"
        role="dialog"
        aria-modal="true"
        aria-hidden="true"
      >
        <div className="detail-top-band">
          <button type="button" className="box lbl detail-close-btn">
            YOPISH / CLOSE
          </button>
          <div className="flex flex-col items-center justify-center text-[#1F3FB0] select-none text-center">
            <span className="serif-font text-xl md:text-2xl font-bold text-[#1F3FB0]">O'ZBEK ADABIYOTI</span>
            <span className="logo-sub mt-[4px]">MILLIY BESTSELLERLAR JAVONI</span>
          </div>
        </div>

        <div className="detail-body">
          {/* Left Column: Book Details */}
          <div className="detail-info">
            <div className="detail-line-mask">
              <div
                ref={(el) => {
                  if (el) detailMaskedLinesRef.current[0] = el;
                }}
                className="detail-sub-line flex items-center gap-2"
              >
                <span ref={detailSubRef}>{activeBook.author.toUpperCase()} • {activeBook.genre.toUpperCase()}</span>
              </div>
            </div>

            <div className="detail-line-mask">
              <h1
                ref={(el) => {
                  if (el) detailMaskedLinesRef.current[1] = el;
                }}
                className="detail-title-line"
              >
                <span ref={detailTitleRef}>{activeBook.title}</span>
              </h1>
            </div>

            <div className="detail-line-mask">
              <div
                ref={(el) => {
                  if (el) detailMaskedLinesRef.current[2] = el;
                }}
                className="detail-meta-line"
              >
                <span ref={detailMetaRef}>
                  {activeBook.year} • {activeBook.format.toUpperCase()} • {activeBook.pages} BET • {activeBook.price.toLocaleString('uz-UZ')} UZS
                </span>
              </div>
            </div>

            <div className="detail-line-mask">
              <p
                ref={(el) => {
                  if (el) detailMaskedLinesRef.current[3] = el;
                }}
                className="text-xs text-[#1F3FB0] font-serif italic border-l-2 border-[#1F3FB0] pl-3 py-0.5"
              >
                <span ref={detailAcclaimRef}>{activeBook.acclaim}</span>
              </p>
            </div>

            <div className="detail-line-mask">
              <p
                ref={(el) => {
                  if (el) detailMaskedLinesRef.current[4] = el;
                }}
                className="detail-synopsis-line"
              >
                <span ref={detailSynopsisRef}>{activeBook.synopsis}</span>
              </p>
            </div>

            <div className="detail-line-mask">
              <div
                ref={(el) => {
                  if (el) {
                    detailMaskedLinesRef.current[5] = el;
                    detailSpecsRef.current = el;
                  }
                }}
                className="text-[11px] text-[#6D6A63] font-mono leading-relaxed"
              >
                <span>ISBN: <strong>{activeBook.isbn}</strong></span> • 
                <span>Muallif: <strong>{activeBook.author}</strong></span> • 
                <span className="text-[#1F3FB0]"><strong>Sotuvda mavjud</strong></span>
              </div>
            </div>

            <div className="detail-line-mask">
              <div
                ref={(el) => {
                  if (el) detailMaskedLinesRef.current[6] = el;
                }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <button
                  type="button"
                  className="box lbl detail-watch-btn gap-2 font-semibold bg-[#1F3FB0] text-white hover:bg-[#18328c] transition-colors"
                  onClick={() => addToBag(activeBook)}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  SAVATGA QO'SHISH — {activeBook.price.toLocaleString('uz-UZ')} UZS
                </button>

                <button
                  type="button"
                  className="box lbl h-[44px] px-4 border border-[#141414] text-[#141414] hover:bg-black/5 transition-colors gap-2 mt-[10px]"
                  onClick={() => {
                    setReaderPageIndex(0);
                    setIsReaderOpen(true);
                  }}
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#1F3FB0]" />
                  PARCHA O'QISH
                </button>

                <a
                  href={activeBook.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box lbl h-[44px] px-4 border border-[#1F3FB0] text-[#1F3FB0] hover:bg-[#1F3FB0]/10 transition-colors gap-2 mt-[10px]"
                >
                  DO'KONDAN OLISH <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Poster SVG with Ink Bleed Mask */}
          <div className="detail-poster-wrapper">
            <svg
              ref={detailPosterSvgRef}
              className="detail-poster-svg"
              viewBox="0 0 474 900"
              aria-hidden="true"
            >
              <defs>
                <clipPath id="poster-clip">
                  <rect x="0" y="0" width="474" height="900" rx="3" ry="3" />
                </clipPath>

                {/* Ink Filter on the group of blobs */}
                <filter id="ink-blot-filter" x="-200" y="-200" width="874" height="1300" filterUnits="userSpaceOnUse">
                  <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves={3} seed={7} result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale={120} xChannelSelector="R" yChannelSelector="G" />
                </filter>

                {/* Ink Mask */}
                <mask id="ink-mask" maskUnits="userSpaceOnUse" x="-200" y="-200" width="874" height="1300">
                  <rect x="-200" y="-200" width="874" height="1300" fill="#000000" />
                  <g filter="url(#ink-blot-filter)">
                    <circle className="ink-blob" cx="150" cy="330" r="0" fill="#ffffff" />
                    <circle className="ink-blob" cx="340" cy="600" r="0" fill="#ffffff" />
                    <circle className="ink-blob" cx="250" cy="120" r="0" fill="#ffffff" />
                    <circle className="ink-blob" cx="90" cy="760" r="0" fill="#ffffff" />
                    <circle className="ink-blob" cx="400" cy="250" r="0" fill="#ffffff" />
                    <circle className="ink-blob" cx="260" cy="860" r="0" fill="#ffffff" />
                    <circle className="ink-blob" cx="230" cy="470" r="0" fill="#ffffff" />
                  </g>
                </mask>
              </defs>

              <g clipPath="url(#poster-clip)" mask="url(#ink-mask)">
                <image
                  ref={detailPosterImgRef}
                  id="detail-poster-img"
                  href={activeBook.cover}
                  x="0"
                  y="0"
                  width="474"
                  height="900"
                  preserveAspectRatio="none"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      <div
        className={`cart-drawer-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`} aria-label="Shopping Bag">
        <div className="cart-header">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#1F3FB0]" />
            <h2 className="lbl text-[#141414] text-xs font-bold">SAVATINGIZ ({cartItemCount})</h2>
          </div>
          <button
            type="button"
            className="box lbl p-1 hover:bg-black/5"
            onClick={() => setIsCartOpen(false)}
            aria-label="Savatni yopish"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="cart-body">
          {checkoutComplete ? (
            <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1F3FB0]/10 flex items-center justify-center text-[#1F3FB0]">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="serif-font text-2xl font-normal text-[#141414]">Buyurtmangiz qabul qilindi!</h3>
              <p className="text-xs text-[#6D6A63] max-w-[280px]">
                Buyurtma #OZB-{Math.floor(1000 + Math.random() * 9000)}-TOSHKENT rasmiylashtirildi. Tez orada siz bilan kuryer bog'lanadi.
              </p>
              <button
                type="button"
                className="box lbl bg-[#1F3FB0] text-white px-5 py-2 mt-4 hover:bg-[#18328c]"
                onClick={() => {
                  setCart([]);
                  setCheckoutComplete(false);
                  setIsCartOpen(false);
                }}
              >
                JAVONGA QAYTISH
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-16 gap-3 text-[#6D6A63]">
              <BookOpen className="w-8 h-8 opacity-40 text-[#1F3FB0]" />
              <p className="serif-font text-lg">Savatingiz hozircha bo'sh.</p>
              <p className="text-xs max-w-[240px]">
                3D javondagi kitoblardan birini tanlab, uning muqovasini oching va buyurtma bering.
              </p>
            </div>
          ) : (
            <>
              {/* Free delivery indicator */}
              <div className="p-3 bg-[var(--paper)] border border-[var(--rule)] text-xs flex flex-col gap-1.5">
                <div className="flex justify-between font-mono text-[10px] text-[#6D6A63]">
                  <span>O'ZBEKISTON BO'YLAB YETKAZISH</span>
                  <span>{cartTotal >= 150000 ? 'BEPUL YETKAZISH FAOL' : `Bepul bo'lishiga yana ${(150000 - cartTotal).toLocaleString('uz-UZ')} UZS`}</span>
                </div>
                <div className="w-full h-1.5 bg-black/10 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-[#1F3FB0] transition-all duration-300"
                    style={{ width: `${Math.min(100, (cartTotal / 150000) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Items */}
              {cart.map(({ book, quantity }) => (
                <div key={book.id} className="cart-item">
                  <div
                    className="cart-thumb bg-cover bg-center"
                    style={{ backgroundImage: `url(${book.cover})` }}
                  />
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <h4 className="serif-font text-base text-[#141414] font-medium leading-tight">
                        {book.title}
                      </h4>
                      <button
                        type="button"
                        className="text-[#6D6A63] hover:text-red-700 p-0.5"
                        onClick={() => removeFromCart(book.id)}
                        aria-label={`Olib tashlash ${book.title}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[10px] text-[#6D6A63] uppercase tracking-wider font-mono">
                      {book.author} • {book.year}
                    </span>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-[var(--rule)] h-6 bg-[var(--paper)]">
                        <button
                          type="button"
                          className="px-2 h-full flex items-center justify-center hover:bg-black/5"
                          onClick={() => updateCartQty(book.id, -1)}
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="px-2 text-xs font-mono">{quantity}</span>
                        <button
                          type="button"
                          className="px-2 h-full flex items-center justify-center hover:bg-black/5"
                          onClick={() => updateCartQty(book.id, 1)}
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#141414]">
                        {(book.price * quantity).toLocaleString('uz-UZ')} UZS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {!checkoutComplete && cart.length > 0 && (
          <div className="cart-footer">
            <div className="flex flex-col gap-1 text-xs">
              <div className="flex justify-between text-[#6D6A63]">
                <span>Kitoblar summasi</span>
                <span className="font-mono text-[#141414]">{cartTotal.toLocaleString('uz-UZ')} UZS</span>
              </div>
              <div className="flex justify-between text-[#6D6A63]">
                <span>Yetkazib berish</span>
                <span className="font-mono text-[#141414]">{cartTotal >= 150000 ? 'BEPUL' : '20 000 UZS'}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold border-t border-[var(--rule)] pt-2 mt-1">
                <span>Jami to'lov</span>
                <span className="font-mono text-[#1F3FB0]">
                  {(cartTotal + (cartTotal >= 150000 ? 0 : 20000)).toLocaleString('uz-UZ')} UZS
                </span>
              </div>
            </div>

            <button
              type="button"
              className="box lbl w-full h-[46px] bg-[#1F3FB0] text-white hover:bg-[#18328c] transition-colors gap-2 font-bold justify-center"
              onClick={() => {
                setCheckoutComplete(true);
                triggerToast('Buyurtmangiz qabul qilindi!');
              }}
            >
              RASMIYLASHTIRISH
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </aside>

      {/* Reader Modal: Sample Excerpt Spread */}
      <div
        className={`reader-modal-overlay ${isReaderOpen ? 'open' : ''}`}
        onClick={() => setIsReaderOpen(false)}
      >
        <div
          className="reader-sheet"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label="Kitobdan parcha"
        >
          <div className="reader-header">
            <div className="flex items-center gap-2 text-[#1F3FB0]">
              <BookOpen className="w-4 h-4" />
              <span className="lbl text-xs">{activeBook.title} — ILK BOBDAN PARCHA</span>
            </div>
            <button
              type="button"
              className="box lbl px-2 hover:bg-black/5"
              onClick={() => setIsReaderOpen(false)}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="reader-content flex flex-col justify-between">
            <div>
              <div className="text-center mb-8 border-b border-[var(--rule)] pb-4">
                <span className="lbl text-[#6D6A63] text-[9.5px]">O'ZBEK ADABIYOTI SHOHASARLARI</span>
                <h2 className="serif-font text-2xl font-normal mt-1">{activeBook.excerptChapter}</h2>
                <span className="text-xs text-[#1F3FB0] font-mono">{activeBook.author} ({activeBook.year})</span>
              </div>

              <div className="relative">
                <span className="reader-drop-cap">
                  {activeBook.excerptPages[readerPageIndex].charAt(0)}
                </span>
                <p>
                  {activeBook.excerptPages[readerPageIndex].slice(1)}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-[var(--rule)] pt-4 mt-8">
              <button
                type="button"
                disabled={readerPageIndex === 0}
                className="box lbl px-3 disabled:opacity-30 disabled:pointer-events-none"
                onClick={() => setReaderPageIndex((p) => Math.max(0, p - 1))}
              >
                OLDINGI BET
              </button>
              <span className="lbl text-[#6D6A63] font-mono">
                {readerPageIndex + 1} / {activeBook.excerptPages.length}
              </span>
              <button
                type="button"
                disabled={readerPageIndex >= activeBook.excerptPages.length - 1}
                className="box lbl px-3 disabled:opacity-30 disabled:pointer-events-none"
                onClick={() => setReaderPageIndex((p) => Math.min(activeBook.excerptPages.length - 1, p + 1))}
              >
                KEYINGI BET
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Browse Drawer / Modal */}
      <div
        className={`catalog-modal-overlay ${isCatalogOpen ? 'open' : ''}`}
        onClick={() => setIsCatalogOpen(false)}
      >
        <div
          className="catalog-card-sheet"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-label="Barcha kitoblar katalogi"
        >
          <div className="p-6 border-b border-[var(--rule)] flex flex-wrap items-center justify-between gap-4 bg-[var(--paper)]">
            <div>
              <span className="lbl text-[#1F3FB0]">MILLIY MEROS RO'YXATI</span>
              <h2 className="serif-font text-2xl font-normal text-[#141414]">Barcha 16 ta Bestseller Kitoblar</h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nom, muallif, yil..."
                  value={catalogSearch}
                  onChange={(e) => setCatalogSearch(e.target.value)}
                  className="catalog-search-input pl-8"
                />
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#6D6A63]" />
              </div>
              <button
                type="button"
                className="box lbl p-2 hover:bg-black/5"
                onClick={() => setIsCatalogOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredCatalogBooks.map((b) => {
              const bookIdx = BOOKS.findIndex((orig) => orig.id === b.id);
              return (
                <div
                  key={b.id}
                  onClick={() => jumpToBook(bookIdx)}
                  className="group flex flex-col cursor-pointer bg-[var(--paper)] border border-[var(--rule)] p-2.5 hover:border-[#1F3FB0] transition-colors"
                >
                  <div className="w-full aspect-[474/900] rounded-sm overflow-hidden border border-black/10 shadow-sm relative">
                    <img
                      src={b.cover}
                      alt={b.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#1F3FB0]/0 group-hover:bg-[#1F3FB0]/20 transition-colors flex items-center justify-center">
                      <span className="box lbl bg-white/95 text-[#1F3FB0] text-[9px] opacity-0 group-hover:opacity-100 transition-opacity">
                        JAVONDA KO'RISH
                      </span>
                    </div>
                  </div>
                  <div className="mt-2.5 flex flex-col flex-1 justify-between">
                    <div>
                      <h4 className="serif-font text-sm font-medium leading-tight text-[#141414] group-hover:text-[#1F3FB0] transition-colors">
                        {b.title}
                      </h4>
                      <p className="text-[10px] text-[#6D6A63] font-mono mt-0.5">{b.author}</p>
                    </div>
                    <div className="flex justify-between items-center pt-2 mt-2 border-t border-[var(--rule)] text-[11px] font-mono">
                      <span>{b.year}</span>
                      <span className="font-semibold text-[#1F3FB0]">{b.price.toLocaleString('uz-UZ')} UZS</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
