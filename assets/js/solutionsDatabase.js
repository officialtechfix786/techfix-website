/*═══════════════════════════════════════
      TECHFIX SOLUTIONS DATABASE v1
      Founder : MIAN AHMAD
═══════════════════════════════════════*/

"use strict";

const defaultAndroidSolutions=[

"FRP Unlock",
"Firmware",
"Flash File",
"Stock ROM",
"USB Driver",
"ADB Enable",
"Fastboot Guide",
"Bootloader Unlock",
"OEM Unlock",
"Root Guide",
"Magisk Root",
"TWRP Recovery",
"Unlock Tool",
"IMEI Information",
"MDM Remove",
"KG Lock",
"Test Point",
"EDL Mode",
"Emergency Download Mode",
"Factory Reset",
"Pattern Unlock",
"PIN Remove",
"Password Remove",
"Dead Boot Repair",
"Bootloop Fix",
"QCN Backup",
"NVRAM Backup",
"Video Guide",
"Downloads",
"FAQ"

];

const defaultAppleSolutions=[

"Passcode",
"Restore",
"Recovery Mode",
"DFU Mode",
"Activation Lock Information",
"Hello Screen",
"iCloud Information",
"IPSW Firmware",
"3uTools Guide",
"iTunes Restore",
"Battery Health Guide",
"Jailbreak Information",
"Backup & Restore",
"Downloads",
"FAQ"

];

const solutionsDatabase={

};
const androidBrands=[

"samsung",
"xiaomi",
"realme",
"oppo",
"vivo",
"iqoo",
"oneplus",
"google",
"motorola",
"tecno",
"infinix",
"huawei",
"honor",
"nokia",
"nothing",
"sony",
"asus",
"lg",
"zte",
"lenovo",
"meizu"

];

androidBrands.forEach(brand=>{

if(!mobileDatabase[brand]) return;

mobileDatabase[brand].forEach(model=>{

solutionsDatabase[model]=[...defaultAndroidSolutions];

});

});
mobileDatabase.apple.forEach(model=>{

solutionsDatabase[model]=[...defaultAppleSolutions];

});
