import AssetManager from "../../assetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "玩偶_Luzi",
    Random: false,
    Top: 0,
    Left: 0,
    ParentGroup: null,
    Value: -1,
    Priority: 24,
    PoseMapping: {
        TapedHands: "Hide",
        Yoked: "Hide",
        OverTheHead: "Hide",
        BackBoxTie: "Hide",
        BackElbowTouch: "Hide",
        BackCuffs: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        // 玩具店
        {
            Name: "Saki",
            Top: 0,
            Left: 0,
            AllowTypes: { d: 1 },
        },
        {
            Name: "Luzi",
            Top: 0,
            Left: 0,
            AllowTypes: { d: 2 },
        },

        // 狼窝
        {
            Name: "吉娜",
            Top: 0,
            Left: 0,
            AllowTypes: { s: 1 },
        },
        {
            Name: "Ada",
            Top: 0,
            Left: 0,
            AllowTypes: { s: 2 },
        },
        {
            Name: "Luzi2",
            Top: 0,
            Left: 0,
            AllowTypes: { s: 3 },
        },

        // 芷窝
        {
            Name: "Ttong",
            Top: 0,
            Left: 0,
            AllowTypes: { z: 1 },
        },
        {
            Name: "ZforShort",
            Top: 0,
            Left: 0,
            AllowTypes: { z: 2 },
        },
        {
            Name: "Gin",
            Top: 0,
            Left: 0,
            AllowTypes: { z: 3 },
        },
        {
            Name: "Echo",
            Top: 0,
            Left: 0,
            AllowTypes: { z: 4 },
        },

        // Catnest
        {
            Name: "XinLian",
            Top: 0,
            Left: 0,
            AllowTypes: { c: 1 },
        },
        {
            Name: "Cyäegha",
            Top: 0,
            Left: 0,
            AllowTypes: { c: 2 },
        },
        {
            Name: "PumpkinPie",
            Top: 0,
            Left: 0,
            AllowTypes: { c: 3 },
        },
    ],
};


/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "玩具店玩偶",
            DrawImages: false,
            Key: "d",
            Options: [{}, {}, {}],
        },
        {
            Name: "狼窝玩偶",
            DrawImages: false,
            Key: "s",
            Options: [{}, {}, {}, {}],
        },
        {
            Name: "芷窝玩偶",
            DrawImages: false,
            Key: "z",
            Options: [{}, {}, {}, {}, {}],
        },
        {
            Name: "Catnest玩偶",
            DrawImages: false,
            Key: "c",
            Options: [{}, {}, {}, {}],
        },
    ],
};

/** @type {Translation.Dialog} */
const dialogs = {
    CN: {
        ItemMisc玩偶_LuziSelectBase: "选择房间",
        ItemMisc玩偶_LuziSelect玩具店玩偶: "选择玩具店玩偶",
        ItemMisc玩偶_LuziModule玩具店玩偶: "玩具店玩偶",
        ItemMisc玩偶_LuziOptiond0: "空",
        ItemMisc玩偶_LuziOptiond1: "Saki",
        ItemMisc玩偶_LuziOptiond2: "Luzi",
        ItemMisc玩偶_LuziSetd0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetd1: "SourceCharacter给了DestinationCharacter一只Saki玩偶.",
        ItemMisc玩偶_LuziSetd2: "SourceCharacter给了DestinationCharacter一只Luzi玩偶.",


        ItemMisc玩偶_LuziSelect狼窝玩偶: "选择狼窝玩偶",
        ItemMisc玩偶_LuziModule狼窝玩偶: "狼窝玩偶",
        ItemMisc玩偶_LuziOptions0: "空",
        ItemMisc玩偶_LuziOptions1: "吉娜",
        ItemMisc玩偶_LuziOptions2: "Ada",
        ItemMisc玩偶_LuziOptions3: "Luzi",
        ItemMisc玩偶_LuziSets0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSets1: "SourceCharacter给了DestinationCharacter一只吉娜玩偶.",
        ItemMisc玩偶_LuziSets2: "SourceCharacter给了DestinationCharacter一只Ada玩偶.",
        ItemMisc玩偶_LuziSets3: "SourceCharacter给了DestinationCharacter一只Luzi玩偶.",


        ItemMisc玩偶_LuziSelect芷窝玩偶: "选择芷窝玩偶",
        ItemMisc玩偶_LuziModule芷窝玩偶: "芷窝玩偶",
        ItemMisc玩偶_LuziOptionz0: "空",
        ItemMisc玩偶_LuziOptionz1: "Ttong",
        ItemMisc玩偶_LuziOptionz2: "ZforShort",
        ItemMisc玩偶_LuziOptionz3: "Gin",
        ItemMisc玩偶_LuziOptionz4: "Echo",
        ItemMisc玩偶_LuziSetz0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetz1: "SourceCharacter给了DestinationCharacter一只Ttong玩偶.",
        ItemMisc玩偶_LuziSetz2: "SourceCharacter给了DestinationCharacter一只ZforShort玩偶.",
        ItemMisc玩偶_LuziSetz3: "SourceCharacter给了DestinationCharacter一只Gin玩偶.",
        ItemMisc玩偶_LuziSetz4: "SourceCharacter给了DestinationCharacter一只Echo玩偶.",

        ItemMisc玩偶_LuziSelectCatnest玩偶: "选择Catnest玩偶",
        ItemMisc玩偶_LuziModuleCatnest玩偶: "Catnest玩偶",
        ItemMisc玩偶_LuziOptionc0: "空",
        ItemMisc玩偶_LuziOptionc1: "XinLian",
        ItemMisc玩偶_LuziOptionc2: "Cyäegha",
        ItemMisc玩偶_LuziOptionc3: "PumpkinPie",
        ItemMisc玩偶_LuziSetc0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetc1: "SourceCharacter给了DestinationCharacter一只XinLian玩偶.",
        ItemMisc玩偶_LuziSetc2: "SourceCharacter给了DestinationCharacter一只Cyäegha玩偶.",
        ItemMisc玩偶_LuziSetc3: "SourceCharacter给了DestinationCharacter一只PumpkinPie玩偶.",


    },
    EN: {
        ItemMisc玩偶_LuziSelectBase: "选择房间",
        ItemMisc玩偶_LuziSelect玩具店玩偶: "选择玩具店玩偶",
        ItemMisc玩偶_LuziModule玩具店玩偶: "玩具店玩偶",
        ItemMisc玩偶_LuziOptiond0: "空",
        ItemMisc玩偶_LuziOptiond1: "Saki",
        ItemMisc玩偶_LuziOptiond2: "Luzi",
        ItemMisc玩偶_LuziSetd0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetd1: "SourceCharacter给了DestinationCharacter一只Saki玩偶.",
        ItemMisc玩偶_LuziSetd2: "SourceCharacter给了DestinationCharacter一只Luzi玩偶.",


        ItemMisc玩偶_LuziSelect狼窝玩偶: "选择狼窝玩偶",
        ItemMisc玩偶_LuziModule狼窝玩偶: "狼窝玩偶",
        ItemMisc玩偶_LuziOptions0: "空",
        ItemMisc玩偶_LuziOptions1: "吉娜",
        ItemMisc玩偶_LuziOptions2: "Ada",
        ItemMisc玩偶_LuziOptions3: "Luzi",
        ItemMisc玩偶_LuziSets0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSets1: "SourceCharacter给了DestinationCharacter一只吉娜玩偶.",
        ItemMisc玩偶_LuziSets2: "SourceCharacter给了DestinationCharacter一只Ada玩偶.",
        ItemMisc玩偶_LuziSets3: "SourceCharacter给了DestinationCharacter一只Luzi玩偶.",


        ItemMisc玩偶_LuziSelect芷窝玩偶: "选择芷窝玩偶",
        ItemMisc玩偶_LuziModule芷窝玩偶: "芷窝玩偶",
        ItemMisc玩偶_LuziOptionz0: "空",
        ItemMisc玩偶_LuziOptionz1: "Ttong",
        ItemMisc玩偶_LuziOptionz2: "ZforShort",
        ItemMisc玩偶_LuziOptionz3: "Gin",
        ItemMisc玩偶_LuziOptionz4: "Echo",
        ItemMisc玩偶_LuziSetz0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetz1: "SourceCharacter给了DestinationCharacter一只Ttong玩偶.",
        ItemMisc玩偶_LuziSetz2: "SourceCharacter给了DestinationCharacter一只ZforShort玩偶.",
        ItemMisc玩偶_LuziSetz3: "SourceCharacter给了DestinationCharacter一只Gin玩偶.",
        ItemMisc玩偶_LuziSetz4: "SourceCharacter给了DestinationCharacter一只Echo玩偶.",

        ItemMisc玩偶_LuziSelectCatnest玩偶: "选择Catnest玩偶",
        ItemMisc玩偶_LuziModuleCatnest玩偶: "Catnest玩偶",
        ItemMisc玩偶_LuziOptionc0: "空",
        ItemMisc玩偶_LuziOptionc1: "XinLian",
        ItemMisc玩偶_LuziOptionc2: "Cyäegha",
        ItemMisc玩偶_LuziOptionc3: "PumpkinPie",
        ItemMisc玩偶_LuziSetc0: "SourceCharacter移除了DestinationCharacter手上的玩偶.",
        ItemMisc玩偶_LuziSetc1: "SourceCharacter给了DestinationCharacter一只XinLian玩偶.",
        ItemMisc玩偶_LuziSetc2: "SourceCharacter给了DestinationCharacter一只Cyäegha玩偶.",
        ItemMisc玩偶_LuziSetc3: "SourceCharacter给了DestinationCharacter一只PumpkinPie玩偶.",

    },
};

const translations = { CN: "玩偶", EN: "Doll" };

export default function () {
    AssetManager.addAsset("ItemMisc", asset, extended, translations);
    AssetManager.addCustomDialog(dialogs);
}