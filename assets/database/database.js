/*==================================================
            TECHFIX SOFTWARE EXP v2.0
==================================================

Project  : TechFix Software EXP
File     : database.js
Version  : 2.0.0

Developer:
ChatGPT (Lead Developer)
MIAN AHMAD (Founder & CEO)

==================================================*/


/*==================================================
                COMPANY INFO
==================================================*/

const COMPANY = {

    name: "TechFix Software EXP",

    slogan: "Professional Mobile Software Solutions",

    founder: "MIAN AHMAD",

    email: "officialtechfix786@gmail.com",

    phone: "+966568152404",

    website: "https://officialtechfix786.github.io/techfix-website/"

};


/*==================================================
                SOCIAL LINKS
==================================================*/

const SOCIAL = {

    whatsapp: "https://wa.me/966568152404",

    youtube: "https://youtube.com/@techfixsoftwareexp?si=QeBHjqg9Ex9oiRvm",

    facebook: "https://www.facebook.com/share/1DWcAfU5Hk/",

    tiktok: "https://www.tiktok.com/@mianking7236?_r=1&_t=ZP-97yFIQfXH2N",

    github: "https://github.com/officialtechfix786/techfix-website",

    email: "mailto:officialtechfix786@gmail.com"

};


/*==================================================
                MOBILE BRANDS
==================================================*/

const BRANDS = [

{
    id:1,
    name:"Apple",
    logo:"assets/images/apple.png",
    page:"apple.html"
},

{
    id:2,
    name:"Samsung",
    logo:"assets/images/samsung.png",
    page:"mobiles.html"
},

{
    id:3,
    name:"Google Pixel",
    logo:"assets/images/google.png",
    page:"mobiles.html"
},

{
    id:4,
    name:"Xiaomi",
    logo:"assets/images/xiaomi.png",
    page:"mobiles.html"
},

{
    id:5,
    name:"Redmi",
    logo:"assets/images/redmi.png",
    page:"mobiles.html"
},

{
    id:6,
    name:"POCO",
    logo:"assets/images/poco.png",
    page:"mobiles.html"
},

{
    id:7,
    name:"OnePlus",
    logo:"assets/images/oneplus.png",
    page:"mobiles.html"
},

{
    id:8,
    name:"Vivo",
    logo:"assets/images/vivo.png",
    page:"mobiles.html"
},

{
    id:9,
    name:"Oppo",
    logo:"assets/images/oppo.png",
    page:"mobiles.html"
},

{
    id:10,
    name:"Realme",
    logo:"assets/images/realme.png",
    page:"mobiles.html"
},

{
    id:11,
    name:"Tecno",
    logo:"assets/images/tecno.png",
    page:"mobiles.html"
},

{
    id:12,
    name:"Infinix",
    logo:"assets/images/infinix.png",
    page:"mobiles.html"
},

{
    id:13,
    name:"Motorola",
    logo:"assets/images/motorola.png",
    page:"mobiles.html"
},

{
    id:14,
    name:"Huawei",
    logo:"assets/images/huawei.png",
    page:"mobiles.html"
},

{
    id:15,
    name:"Honor",
    logo:"assets/images/honor.png",
    page:"mobiles.html"
},

{
    id:16,
    name:"Nokia",
    logo:"assets/images/nokia.png",
    page:"mobiles.html"
},

{
    id:17,
    name:"Nothing",
    logo:"assets/images/nothing.png",
    page:"mobiles.html"
},

{
    id:18,
    name:"LG",
    logo:"assets/images/lg.png",
    page:"mobiles.html"
];
/*==================================================
                MOBILE MODELS
==================================================*/

const MOBILE_MODELS = [

/*================ APPLE ================*/

{
    brand: "Apple",
    models: [
        "iPhone X",
        "iPhone XR",
        "iPhone XS",
        "iPhone XS Max",
        "iPhone 11",
        "iPhone 11 Pro",
        "iPhone 11 Pro Max",
        "iPhone SE 2020",
        "iPhone 12",
        "iPhone 12 Mini",
        "iPhone 12 Pro",
        "iPhone 12 Pro Max",
        "iPhone 13",
        "iPhone 13 Mini",
        "iPhone 13 Pro",
        "iPhone 13 Pro Max",
        "iPhone SE 2022",
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
    ]
},

/*================ SAMSUNG ================*/

{
    brand: "Samsung",
    models: [

        "Galaxy A04",
        "Galaxy A05",
        "Galaxy A05s",
        "Galaxy A06",
        "Galaxy A12",
        "Galaxy A13",
        "Galaxy A14",
        "Galaxy A15",
        "Galaxy A16",
        "Galaxy A22",
        "Galaxy A23",
        "Galaxy A24",
        "Galaxy A25",
        "Galaxy A32",
        "Galaxy A33",
        "Galaxy A34",
        "Galaxy A35",
        "Galaxy A52",
        "Galaxy A53",
        "Galaxy A54",
        "Galaxy A55",

        "Galaxy S21",
        "Galaxy S22",
        "Galaxy S23",
        "Galaxy S24",
        "Galaxy S24 Ultra",
        "Galaxy S25",
        "Galaxy S25 Ultra",

        "Galaxy Z Flip 5",
        "Galaxy Z Flip 6",
        "Galaxy Z Fold 5",
        "Galaxy Z Fold 6"

    ]
},

/*================ XIAOMI ================*/

{
    brand: "Xiaomi",
    models: [

        "Xiaomi 11T",
        "Xiaomi 11T Pro",
        "Xiaomi 12",
        "Xiaomi 12 Pro",
        "Xiaomi 13",
        "Xiaomi 13 Pro",
        "Xiaomi 14",
        "Xiaomi 14 Ultra",
        "Xiaomi 15"

    ]
},

/*================ REDMI ================*/

{
    brand: "Redmi",
    models: [

        "Redmi Note 10",
        "Redmi Note 11",
        "Redmi Note 12",
        "Redmi Note 13",
        "Redmi Note 14",

        "Redmi 10",
        "Redmi 12",
        "Redmi 13",
        "Redmi 14C"

    ]
},

/*================ POCO ================*/

{
    brand: "POCO",
    models: [

        "POCO M4",
        "POCO M5",
        "POCO M6",

        "POCO X5",
        "POCO X6",

        "POCO F5",
        "POCO F6"

    ]
},

];
/*================ VIVO ================*/

{
    brand: "Vivo",
    models: [
        "Vivo Y02",
        "Vivo Y03",
        "Vivo Y16",
        "Vivo Y17s",
        "Vivo Y20",
        "Vivo Y21",
        "Vivo Y22",
        "Vivo Y27",
        "Vivo Y28",
        "Vivo Y36",
        "Vivo Y100",
        "Vivo V25",
        "Vivo V27",
        "Vivo V29",
        "Vivo V30",
        "Vivo X90",
        "Vivo X100"
    ]
},

/*================ OPPO ================*/

{
    brand: "Oppo",
    models: [
        "Oppo A16",
        "Oppo A17",
        "Oppo A18",
        "Oppo A38",
        "Oppo A57",
        "Oppo A58",
        "Oppo A60",
        "Oppo A78",
        "Oppo A79",
        "Oppo Reno 8",
        "Oppo Reno 10",
        "Oppo Reno 11",
        "Oppo Reno 12",
        "Oppo Find X5",
        "Oppo Find X6",
        "Oppo Find X7"
    ]
},

/*================ REALME ================*/

{
    brand: "Realme",
    models: [
        "Realme C21",
        "Realme C25",
        "Realme C30",
        "Realme C35",
        "Realme C51",
        "Realme C53",
        "Realme C55",
        "Realme Narzo 50",
        "Realme Narzo 60",
        "Realme 9",
        "Realme 10",
        "Realme 11",
        "Realme 12",
        "Realme GT Neo 5",
        "Realme GT 6"
    ]
},

/*================ TECNO ================*/

{
    brand: "Tecno",
    models: [
        "Tecno Spark 8",
        "Tecno Spark 10",
        "Tecno Spark 20",
        "Tecno Spark Go",
        "Tecno Pop 7",
        "Tecno Pop 8",
        "Tecno Camon 18",
        "Tecno Camon 20",
        "Tecno Camon 30",
        "Tecno Phantom V Fold"
    ]
},

/*================ INFINIX ================*/

{
    brand: "Infinix",
    models: [
        "Infinix Smart 7",
        "Infinix Smart 8",
        "Infinix Hot 10",
        "Infinix Hot 11",
        "Infinix Hot 12",
        "Infinix Hot 20",
        "Infinix Hot 30",
        "Infinix Note 11",
        "Infinix Note 12",
        "Infinix Note 30",
        "Infinix Zero 30"
    ]
},
/*================ HUAWEI ================*/

{
    brand: "Huawei",
    models: [
        "Huawei Y6p",
        "Huawei Y7a",
        "Huawei Y9a",
        "Huawei Nova 7i",
        "Huawei Nova 9",
        "Huawei Nova 10",
        "Huawei Nova 11",
        "Huawei P40 Pro",
        "Huawei P50 Pro",
        "Huawei Mate 40 Pro",
        "Huawei Mate 50 Pro",
        "Huawei Mate 60 Pro"
    ]
},

/*================ HONOR ================*/

{
    brand: "Honor",
    models: [
        "Honor X5",
        "Honor X6",
        "Honor X7",
        "Honor X8",
        "Honor X9",
        "Honor 70",
        "Honor 90",
        "Honor 200",
        "Honor Magic 5 Pro",
        "Honor Magic 6 Pro"
    ]
},

/*================ MOTOROLA ================*/

{
    brand: "Motorola",
    models: [
        "Moto E13",
        "Moto E22",
        "Moto G22",
        "Moto G32",
        "Moto G54",
        "Moto G84",
        "Moto Edge 30",
        "Moto Edge 40",
        "Moto Edge 50",
        "Moto Razr 40"
    ]
},

/*================ NOKIA ================*/

{
    brand: "Nokia",
    models: [
        "Nokia C12",
        "Nokia C22",
        "Nokia G21",
        "Nokia G42",
        "Nokia X20",
        "Nokia X30",
        "Nokia XR21"
    ]
},

/*================ GOOGLE PIXEL ================*/

{
    brand: "Google Pixel",
    models: [
        "Pixel 6",
        "Pixel 6 Pro",
        "Pixel 7",
        "Pixel 7 Pro",
        "Pixel 8",
        "Pixel 8 Pro",
        "Pixel 9",
        "Pixel 9 Pro",
        "Pixel Fold"
    ]
},

/*================ ONEPLUS ================*/

{
    brand: "OnePlus",
    models: [
        "OnePlus Nord CE 3",
        "OnePlus Nord CE 4",
        "OnePlus Nord 3",
        "OnePlus 10 Pro",
        "OnePlus 11",
        "OnePlus 12",
        "OnePlus 13",
        "OnePlus Open"
    ]
},

/*================ NOTHING ================*/

{
    brand: "Nothing",
    models: [
        "Nothing Phone (1)",
        "Nothing Phone (2)",
        "Nothing Phone (2a)",
        "Nothing Phone (3)"
    ]
},

/*================ LG ================*/

{
    brand: "LG",
    models: [
        "LG Velvet",
        "LG Wing",
        "LG V60 ThinQ",
        "LG G8X",
        "LG K52",
        "LG K62"
    ]
}

];
/*==================================================
                SOFTWARE TOOLS
==================================================*/

const TOOLS = [

    /* Android Tools */

    {
        name: "UnlockTool",
        category: "Android",
        page: "downloads.html"
    },

    {
        name: "Hydra Tool",
        category: "Android",
        page: "downloads.html"
    },

    {
        name: "Chimera Tool",
        category: "Android",
        page: "downloads.html"
    },

    {
        name: "Pandora Box",
        category: "Android",
        page: "downloads.html"
    },

    {
        name: "EFT Pro",
        category: "Android",
        page: "downloads.html"
    },

    {
        name: "UMT Pro",
        category: "Android",
        page: "downloads.html"
    },

    {
        name: "CM2 Dongle",
        category: "Android",
        page: "downloads.html"
    },

    {
        name: "DFT Pro",
        category: "Android",
        page: "downloads.html"
    },

    {
        name: "TFM Tool Pro",
        category: "Android",
        page: "downloads.html"
    },

    /* Flash Tools */

    {
        name: "SP Flash Tool",
        category: "Flash Tool",
        page: "downloads.html"
    },

    {
        name: "Odin Flash Tool",
        category: "Flash Tool",
        page: "downloads.html"
    },

    {
        name: "Mi Flash Tool",
        category: "Flash Tool",
        page: "downloads.html"
    },

    {
        name: "QFIL",
        category: "Qualcomm",
        page: "downloads.html"
    },

    {
        name: "QPST",
        category: "Qualcomm",
        page: "downloads.html"
    },

    {
        name: "Fastboot",
        category: "Android",
        page: "android.html"
    },

    {
        name: "ADB Platform Tools",
        category: "Android",
        page: "android.html"
    },

    /* Apple */

    {
        name: "3uTools",
        category: "Apple",
        page: "apple.html"
    },

    {
        name: "iTunes",
        category: "Apple",
        page: "apple.html"
    },

    {
        name: "Apple Configurator",
        category: "Apple",
        page: "apple.html"
    },

    /* Drivers */

    {
        name: "Samsung USB Driver",
        category: "Driver",
        page: "downloads.html"
    },

    {
        name: "Qualcomm USB Driver",
        category: "Driver",
        page: "downloads.html"
    },

    {
        name: "MTK USB Driver",
        category: "Driver",
        page: "downloads.html"
    },

    {
        name: "SPD USB Driver",
        category: "Driver",
        page: "downloads.html"
    },

    {
        name: "Huawei USB Driver",
        category: "Driver",
        page: "downloads.html"
    }

];
/*==================================================
                    DOWNLOADS
==================================================*/

const DOWNLOADS = [

    {
        name: "UnlockTool",
        category: "Android",
        version: "Latest",
        page: "downloads.html"
    },

    {
        name: "Hydra Tool",
        category: "Android",
        version: "Latest",
        page: "downloads.html"
    },

    {
        name: "Chimera Tool",
        category: "Android",
        version: "Latest",
        page: "downloads.html"
    },

    {
        name: "Pandora Box",
        category: "Android",
        version: "Latest",
        page: "downloads.html"
    },

    {
        name: "EFT Pro",
        category: "Android",
        version: "Latest",
        page: "downloads.html"
    },

    {
        name: "UMT Pro",
        category: "Android",
        version: "Latest",
        page: "downloads.html"
    },

    {
        name: "3uTools",
        category: "Apple",
        version: "Latest",
        page: "apple.html"
    },

    {
        name: "iTunes",
        category: "Apple",
        version: "Latest",
        page: "apple.html"
    },

    {
        name: "Odin Flash Tool",
        category: "Samsung",
        version: "Latest",
        page: "downloads.html"
    },

    {
        name: "SP Flash Tool",
        category: "MediaTek",
        version: "Latest",
        page: "downloads.html"
    },

    {
        name: "QFIL",
        category: "Qualcomm",
        version: "Latest",
        page: "downloads.html"
    }

];

/*==================================================
                    WEBSITE PAGES
==================================================*/

const PAGES = [

    {
        title: "Home",
        page: "index.html"
    },

    {
        title: "Mobiles",
        page: "mobiles.html"
    },

    {
        title: "Android",
        page: "android.html"
    },

    {
        title: "Apple",
        page: "apple.html"
    },

    {
        title: "Downloads",
        page: "downloads.html"
    },

    {
        title: "Cyber Security",
        page: "cyber.html"
    },

    {
        title: "Laptop",
        page: "laptop.html"
    },

    {
        title: "Contact",
        page: "contact.html"
    }

];

/*==================================================
                MASTER DATABASE
==================================================*/

const DATABASE = {

    company: COMPANY,

    social: SOCIAL,

    brands: BRANDS,

    mobileModels: MOBILE_MODELS,

    tools: TOOLS,

    downloads: DOWNLOADS,

    pages: PAGES

};

/*==================================================
                END OF FILE
==================================================*/

/*

    Project   : TechFix Software EXP v2.0
    File      : database.js
    Version   : 2.0.0

    Developer : ChatGPT
    Founder & CEO : MIAN AHMAD

    Website :
    https://officialtechfix786.github.io/techfix-website/

    © 2026 TechFix Software EXP
    All Rights Reserved.

*/
