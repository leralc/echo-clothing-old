import AssetManager from "@mod-utils/AssetManager";

/** @type {CustomAssetDefinition} */
const asset = {
    Name: "脚趾戒指_Luzi",
    Random: false,
    Gender: "F",
    Top: {
        BaseUpper: 0,
        LegsClosed: 0,
    },
    Left: {
        BaseUpper: 0,
        LegsClosed: 0,
    },
    DefaultColor: ["#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897", "#9B9897"],
    PoseMapping: {
        Kneel: "Hide",
        KneelingSpread: "Hide",
        LegsClosed: "LegsClosed",
        Spread: "Hide",
        Hogtied: "Hide",
        AllFours: "Hide",
    },
    Layer: [
        {
            Name: "左1", AllowTypes: { L1: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: -62,
            },
        },
        {
            Name: "右1", AllowTypes: { R1: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: 54,
            },
        },

        {
            Name: "左2", AllowTypes: { L2: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: -62,
            },
        },
        {
            Name: "右2", AllowTypes: { R2: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: 54,
            },
        },

        {
            Name: "左3", AllowTypes: { L3: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: -62,
            },
        },
        {
            Name: "右3", AllowTypes: { R3: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: 54,
            },
        },

        {
            Name: "左4", AllowTypes: { L4: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: -62,
            },
        },
        {
            Name: "右4", AllowTypes: { R4: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: 54,
            },
        },

        {
            Name: "左5", AllowTypes: { L5: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: -62,
            },
        },
        {
            Name: "右5", AllowTypes: { R5: 1 },
            Top: {
                BaseUpper: 0,
                LegsClosed: 9,
            },
            Left: {
                BaseUpper: 0,
                LegsClosed: 54,
            },
        },
    ],
};


/** @type {ModularItemConfig} */
const extended = {
    Archetype: ExtendedArchetype.MODULAR,
    ChangeWhenLocked: false,
    Modules: [
        {
            Name: "左1",
            DrawImages: false,
            Key: "L1",
            Options: [{}, {}],
        },
        {
            Name: "右1",
            DrawImages: false,
            Key: "R1",
            Options: [{}, {}],
        },
        {
            Name: "左2",
            DrawImages: false,
            Key: "L2",
            Options: [{}, {}],
        },
        {
            Name: "右2",
            DrawImages: false,
            Key: "R2",
            Options: [{}, {}],
        },
        {
            Name: "左3",
            DrawImages: false,
            Key: "L3",
            Options: [{}, {}],
        },
        {
            Name: "右3",
            DrawImages: false,
            Key: "R3",
            Options: [{}, {}],
        },
        {
            Name: "左4",
            DrawImages: false,
            Key: "L4",
            Options: [{}, {}],
        },
        {
            Name: "右4",
            DrawImages: false,
            Key: "R4",
            Options: [{}, {}],
        },
        {
            Name: "左5",
            DrawImages: false,
            Key: "L5",
            Options: [{}, {}],
        },
        {
            Name: "右5",
            DrawImages: false,
            Key: "R5",
            Options: [{}, {}],
        },
    ],
};


/** @type {Translation.Dialog} */
const dialog = {
    CN: {
        FacialHair脚趾戒指_LuziSelectBase: "选择脚趾戒指配置",
        FacialHair脚趾戒指_LuziSelect左1: "设置左大拇指戒指",
        FacialHair脚趾戒指_LuziModule左1: "左大拇指戒指",
        FacialHair脚趾戒指_LuziOptionL10: "无",
        FacialHair脚趾戒指_LuziOptionL11: "有",
        FacialHair脚趾戒指_LuziSelect右1: "设置右大拇指戒指",
        FacialHair脚趾戒指_LuziModule右1: "右大拇指戒指",
        FacialHair脚趾戒指_LuziOptionR10: "无",
        FacialHair脚趾戒指_LuziOptionR11: "有",

        FacialHair脚趾戒指_LuziSelect左2: "设置左食指戒指",
        FacialHair脚趾戒指_LuziModule左2: "左食指戒指",
        FacialHair脚趾戒指_LuziOptionL20: "无",
        FacialHair脚趾戒指_LuziOptionL21: "有",
        FacialHair脚趾戒指_LuziSelect右2: "设置右食指戒指",
        FacialHair脚趾戒指_LuziModule右2: "右食指戒指",
        FacialHair脚趾戒指_LuziOptionR20: "无",
        FacialHair脚趾戒指_LuziOptionR21: "有",

        FacialHair脚趾戒指_LuziSelect左3: "设置左中指戒指",
        FacialHair脚趾戒指_LuziModule左3: "左中指戒指",
        FacialHair脚趾戒指_LuziOptionL30: "无",
        FacialHair脚趾戒指_LuziOptionL31: "有",
        FacialHair脚趾戒指_LuziSelect右3: "设置右中指戒指",
        FacialHair脚趾戒指_LuziModule右3: "右中指戒指",
        FacialHair脚趾戒指_LuziOptionR30: "无",
        FacialHair脚趾戒指_LuziOptionR31: "有",

        FacialHair脚趾戒指_LuziSelect左4: "设置左无名指戒指",
        FacialHair脚趾戒指_LuziModule左4: "左无名指戒指",
        FacialHair脚趾戒指_LuziOptionL40: "无",
        FacialHair脚趾戒指_LuziOptionL41: "有",
        FacialHair脚趾戒指_LuziSelect右4: "设置右无名指戒指",
        FacialHair脚趾戒指_LuziModule右4: "右无名指戒指",
        FacialHair脚趾戒指_LuziOptionR40: "无",
        FacialHair脚趾戒指_LuziOptionR41: "有",

        FacialHair脚趾戒指_LuziSelect左5: "设置左小指戒指",
        FacialHair脚趾戒指_LuziModule左5: "左小指戒指",
        FacialHair脚趾戒指_LuziOptionL50: "无",
        FacialHair脚趾戒指_LuziOptionL51: "有",
        FacialHair脚趾戒指_LuziSelect右5: "设置右小指戒指",
        FacialHair脚趾戒指_LuziModule右5: "右小指戒指",
        FacialHair脚趾戒指_LuziOptionR50: "无",
        FacialHair脚趾戒指_LuziOptionR51: "有",
    },
    EN: {
        脚趾戒指_Luzi_LuziSelect: "Select toe ring",
        FacialHair脚趾戒指_LuziSelect左1: "Set Left Big Toe Ring",
        FacialHair脚趾戒指_LuziModule左1: "Left Big Toe Ring",
        FacialHair脚趾戒指_LuziOptionL10: "None",
        FacialHair脚趾戒指_LuziOptionL11: "Present",
        FacialHair脚趾戒指_LuziSelect右1: "Set Right Big Toe Ring",
        FacialHair脚趾戒指_LuziModule右1: "Right Big Toe Ring",
        FacialHair脚趾戒指_LuziOptionR10: "None",
        FacialHair脚趾戒指_LuziOptionR11: "Present",

        FacialHair脚趾戒指_LuziSelect左2: "Set Left Second Toe Ring",
        FacialHair脚趾戒指_LuziModule左2: "Left Second Toe Ring",
        FacialHair脚趾戒指_LuziOptionL20: "None",
        FacialHair脚趾戒指_LuziOptionL21: "Present",
        FacialHair脚趾戒指_LuziSelect右2: "Set Right Second Toe Ring",
        FacialHair脚趾戒指_LuziModule右2: "Right Second Toe Ring",
        FacialHair脚趾戒指_LuziOptionR20: "None",
        FacialHair脚趾戒指_LuziOptionR21: "Present",

        FacialHair脚趾戒指_LuziSelect左3: "Set Left Middle Toe Ring",
        FacialHair脚趾戒指_LuziModule左3: "Left Middle Toe Ring",
        FacialHair脚趾戒指_LuziOptionL30: "None",
        FacialHair脚趾戒指_LuziOptionL31: "Present",
        FacialHair脚趾戒指_LuziSelect右3: "Set Right Middle Toe Ring",
        FacialHair脚趾戒指_LuziModule右3: "Right Middle Toe Ring",
        FacialHair脚趾戒指_LuziOptionR30: "None",
        FacialHair脚趾戒指_LuziOptionR31: "Present",

        FacialHair脚趾戒指_LuziSelect左4: "Set Left Fourth Toe Ring",
        FacialHair脚趾戒指_LuziModule左4: "Left Fourth Toe Ring",
        FacialHair脚趾戒指_LuziOptionL40: "None",
        FacialHair脚趾戒指_LuziOptionL41: "Present",
        FacialHair脚趾戒指_LuziSelect右4: "Set Right Fourth Toe Ring",
        FacialHair脚趾戒指_LuziModule右4: "Right Fourth Toe Ring",
        FacialHair脚趾戒指_LuziOptionR40: "None",
        FacialHair脚趾戒指_LuziOptionR41: "Present",

        FacialHair脚趾戒指_LuziSelect左5: "Set Left Little Toe Ring",
        FacialHair脚趾戒指_LuziModule左5: "Left Little Toe Ring",
        FacialHair脚趾戒指_LuziOptionL50: "None",
        FacialHair脚趾戒指_LuziOptionL51: "Present",
        FacialHair脚趾戒指_LuziSelect右5: "Set Right Little Toe Ring",
        FacialHair脚趾戒指_LuziModule右5: "Right Little Toe Ring",
        FacialHair脚趾戒指_LuziOptionR50: "None",
        FacialHair脚趾戒指_LuziOptionR51: "Present",
    },
};

const translations = { CN: "脚趾戒指", EN: "toe ring" };

export default function () {
    AssetManager.addAsset("FacialHair", asset, extended, translations);
    AssetManager.addCustomDialog(dialog);
}
