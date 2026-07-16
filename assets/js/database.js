"use strict";

/*=====================================================
            TECHFIX DATABASE
            Founder : MIAN AHMAD
=====================================================*/

const mobileDatabase = {

apple:[
"iPhone 6",
"iPhone 6 Plus",
"iPhone 6s",
"iPhone 6s Plus",
"iPhone SE (1st Gen)",
"iPhone 7",
"iPhone 7 Plus",
"iPhone 8",
"iPhone 8 Plus",
"iPhone X",
"iPhone XR",
"iPhone XS",
"iPhone XS Max",
"iPhone 11",
"iPhone 11 Pro",
"iPhone 11 Pro Max",
"iPhone SE (2020)",
"iPhone 12",
"iPhone 12 Mini",
"iPhone 12 Pro",
"iPhone 12 Pro Max",
"iPhone 13",
"iPhone 13 Mini",
"iPhone 13 Pro",
"iPhone 13 Pro Max",
"iPhone SE (2022)",
"iPhone 14",
"iPhone 14 Plus",
"iPhone 14 Pro",
"iPhone 14 Pro Max",
"iPhone 15",
"iPhone 15 Plus",
"iPhone 15 Pro",
"iPhone 15 Pro Max",
"iPhone 16",
"iPhone 16 Plus",
"iPhone 16 Pro",
"iPhone 16 Pro Max"
],

samsung:[
"Galaxy A01",
"Galaxy A02",
"Galaxy A02s",
"Galaxy A03",
"Galaxy A03 Core",
"Galaxy A03s",
"Galaxy A04",
"Galaxy A04e",
"Galaxy A04s",
"Galaxy A05",
"Galaxy A05s",
"Galaxy A06",
"Galaxy A10",
"Galaxy A10s",
"Galaxy A11",
"Galaxy A12",
"Galaxy A13",
"Galaxy A14",
"Galaxy A15",
"Galaxy A16",
"Galaxy A20",
"Galaxy A20s",
"Galaxy A21",
"Galaxy A21s",
"Galaxy A22",
"Galaxy A23",
"Galaxy A24",
"Galaxy A25",
"Galaxy A30",
"Galaxy A30s",
"Galaxy A31",
"Galaxy A32",
"Galaxy A33",
"Galaxy A34",
"Galaxy A35",
"Galaxy A50",
"Galaxy A51",
"Galaxy A52",
"Galaxy A52s",
"Galaxy A53",
"Galaxy A54",
"Galaxy A55",
"Galaxy A70",
"Galaxy A71",
"Galaxy A72",
"Galaxy A73",
"Galaxy S20",
"Galaxy S21",
"Galaxy S22",
"Galaxy S23",
"Galaxy S24",
"Galaxy S25"
],

xiaomi:[
"Redmi 7",
"Redmi 7A",
"Redmi 8",
"Redmi 8A",
"Redmi 9",
"Redmi 9A",
"Redmi 9C",
"Redmi 10",
"Redmi 10A",
"Redmi 10C",
"Redmi 11 Prime",
"Redmi 12",
"Redmi 12C",
"Redmi 13",
"Redmi 13C",
"Redmi 14C",
"Redmi Note 7",
"Redmi Note 8",
"Redmi Note 9",
"Redmi Note 10",
"Redmi Note 11",
"Redmi Note 12",
"Redmi Note 13",
"Redmi Note 14",
"POCO C31",
"POCO C40",
"POCO C50",
"POCO C55",
"POCO X3",
"POCO X4 Pro",
"POCO X5",
"POCO X6",
"POCO X7",
"POCO F3",
"POCO F4",
"POCO F5",
"POCO F6",
"Xiaomi 11",
"Xiaomi 12",
"Xiaomi 13",
"Xiaomi 14",
"Xiaomi 15"
],

realme:[
"C11",
"C21",
"C25",
"C30",
"C33",
"C35",
"C51",
"C53",
"C55",
"C61",
"C63",
"Narzo 30",
"Narzo 50",
"Narzo 60",
"Narzo 70",
"Narzo N53",
"Narzo N55",
"Realme 8",
"Realme 9",
"Realme 10",
"Realme 11",
"Realme 12",
"GT Neo 3",
"GT Neo 5",
"GT 6"
],

oneplus:[
"OnePlus 7",
"OnePlus 7 Pro",
"OnePlus 8",
"OnePlus 8 Pro",
"OnePlus 9",
"OnePlus 9 Pro",
"OnePlus 10 Pro",
"OnePlus 11",
"OnePlus 12",
"OnePlus Nord",
"OnePlus Nord CE",
"OnePlus Nord CE 2",
"OnePlus Nord CE 3",
"OnePlus Nord 2",
"OnePlus Nord 3"
],

google:[
"Pixel 4",
"Pixel 4 XL",
"Pixel 4a",
"Pixel 5",
"Pixel 5a",
"Pixel 6",
"Pixel 6 Pro",
"Pixel 6a",
"Pixel 7",
"Pixel 7 Pro",
"Pixel 7a",
"Pixel 8",
"Pixel 8 Pro",
"Pixel 8a",
"Pixel 9",
"Pixel 9 Pro",
"Pixel Fold"
],

motorola:[
"Moto G22",
"Moto G23",
"Moto G24",
"Moto G31",
"Moto G32",
"Moto G34",
"Moto G42",
"Moto G52",
"Moto G54",
"Moto G62",
"Moto G64",
"Moto G72",
"Moto G73",
"Moto G84",
"Moto G85",
"Edge 20",
"Edge 30",
"Edge 40",
"Edge 50",
"Edge 50 Pro",
"Razr 40",
"Razr 50"
],

oppo:[
"A15",
"A16",
"A17",
"A18",
"A31",
"A38",
"A53",
"A54",
"A55",
"A57",
"A58",
"A59",
"A60",
"A74",
"A76",
"A77",
"A78",
"A79",
"Reno 7",
"Reno 8",
"Reno 9",
"Reno 10",
"Reno 11",
"Reno 12",
"Reno 13",
"Find X5",
"Find X6",
"Find X7",
"Find X8"
],

vivo:[
"Y01",
"Y02",
"Y03",
"Y11",
"Y12",
"Y15",
"Y16",
"Y17",
"Y19",
"Y20",
"Y21",
"Y22",
"Y27",
"Y28",
"Y30",
"Y31",
"Y33",
"Y35",
"Y36",
"Y38",
"Y73",
"Y75",
"Y100",
"V20",
"V21",
"V23",
"V25",
"V27",
"V29",
"V30",
"V40",
"X60",
"X70",
"X80",
"X90",
"X100",
"X200"
],

tecno:[
"Spark 8","Spark 8C","Spark 9","Spark 9T","Spark 10","Spark 10C",
"Spark Go 2023","Spark 20","Spark 20C","Spark 20 Pro",
"Camon 17","Camon 18","Camon 19","Camon 20","Camon 20 Pro",
"Camon 30","Camon 30 Pro","Pova 3","Pova 4","Pova 5","Pova 6",
"Phantom X2","Phantom V Fold"
],

infinix:[
"Hot 10","Hot 11","Hot 12","Hot 20","Hot 30","Hot 40",
"Smart 6","Smart 7","Smart 8",
"Note 10","Note 11","Note 12","Note 30","Note 40",
"Zero 20","Zero 30","GT 10 Pro"
],

huawei:[
"P30","P30 Pro","P40","P40 Pro","P50","P50 Pro",
"P60","P60 Pro","Mate 20","Mate 30","Mate 40","Mate 50",
"Mate 60","Nova 7","Nova 8","Nova 9","Nova 10","Nova 11"
],

honor:[
"Honor 50","Honor 70","Honor 90","Honor 100","Honor 200",
"Magic 4","Magic 5","Magic 6","X5","X6","X7","X8","X9","X9b"
],

nokia:[
"C10","C20","C21","C30",
"G10","G11","G20","G21","G22","G42","G60",
"X10","X20","XR20"
],

nothing:[
"Phone (1)",
"Phone (2)",
"Phone (2a)",
"Phone (3)",
"Phone (3a)"
],

sony:[
"Xperia 1 III","Xperia 1 IV","Xperia 1 V",
"Xperia 5 III","Xperia 5 IV","Xperia 5 V",
"Xperia 10 IV","Xperia 10 V"
],

asus:[
"ROG Phone 5","ROG Phone 6","ROG Phone 7","ROG Phone 8",
"Zenfone 8","Zenfone 9","Zenfone 10"
],

lg:[
"LG G8",
"LG V50",
"LG V60",
"LG Velvet",
"LG Wing"
],

iqoo:[
"iQOO 7","iQOO 8","iQOO 9","iQOO 10","iQOO 11","iQOO 12",
"Neo 6","Neo 7","Neo 9",
"Z6","Z7","Z9"
],

zte:[
"Blade A31",
"Blade A52",
"Blade V40",
"Axon 30",
"Axon 40"
],

lenovo:[
"Legion Phone Duel",
"Legion Y70",
"K13",
"K14"
],

meizu:[
"Meizu 18",
"Meizu 18 Pro",
"Meizu 20",
"Meizu 20 Pro",
"Meizu 21"
]

};

/*=====================================================
                DATABASE INFO
=====================================================*/

const totalBrands = Object.keys(mobileDatabase).length;

const totalModels = Object.values(mobileDatabase)
.reduce((sum, models) => sum + models.length, 0);

console.log("✅ TechFix Database Loaded");
console.log("📱 Brands :", totalBrands);
console.log("📦 Models :", totalModels);
