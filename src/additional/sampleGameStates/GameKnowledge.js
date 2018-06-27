
export const read_states = {
    DIDNOTTALK: 0,
    NO: 1,
    YES: 2
};

export const view_states = {
    PEOPLE: 0,
    TALK: 1,
    YES: 2,
    NO: 3,
    INFO: 4,
};

const Weeks = 20;

const Characters = [
    {Name:"Hearther", Func: HeartherConversation},
    {Name:"Treasurer", Func: TreasurerConversation},
    {Name:"Chief Complainer", Func: ChiefComplainerConversation},
    {Name:"Funny Fourth Thing", Func: Funny4thThingConversation},
    {Name:"Exploderer", Func: ExplodererConversation},
    {Name:"Armoury", Func: ArmouryConversation},
    {Name:"Chief Scientist", Func: ChiefScientistConversation},
    {Name:"Very Funny 4th Thing", Func: VeryFunny4thThingConversation},
    {Name:"Union Boss", Func: UnionBossConversation},
    {Name:"Warchest", Func: WarchestConversation},
    {Name:"Chief Miner", Func: ChiefMinerConversation},
    {Name:"Great 4th Joke", Func: Great4thJokeConversation},
    {Name:"High Priestess", Func: HighPriestessConversation},
    {Name:"Dragon Pile", Func: DragonPileConversation},
    {Name:"Mourners", Func: MournersConversation},
    {Name:"Grand Explorer", Func: GrandExplorerConversation}
];

export function initialState() {
    let characters = [];

    for (let i = 0; i < Characters.length; i++){
        characters.push(initCharacter(Characters[i]));
    }
    
    return({
        ViewState: view_states.PEOPLE,
        DescriptionText: "Set to default",
        ConversationText: "Set to default",
        YesText: "Set to Default",
        NoText: "Set to Default",
        Characters: characters,
        CurrentCharacterID: -1
    });
}

function initCharacter(name) {

    let responses = [];

    for (let i = 0; i < Weeks; i++){
        responses.push(read_states.DIDNOTTALK);
    }

    return {
        Name: name.Name,
        Func: name.Func,
        Responses: responses
    };
}

function HeartherConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Hearther"
    });
}

function TreasurerConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Treasurer"
    });
}

function ChiefComplainerConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Chief Complainer"
    });
}

function Funny4thThingConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Funny Fourth Thing"
    });
}

function ExplodererConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Exploderer"
    });
}

function ArmouryConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Armoury"
    });
}

function ChiefScientistConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Chief Scientist"
    });
}

function VeryFunny4thThingConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Very Funny 4th Thing"
    });
}

function UnionBossConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Union Boss"
    });
}

function WarchestConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Warchest"
    });
}

function ChiefMinerConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Chief Miner"
    });
}

function Great4thJokeConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Great 4th Joke"
    });
}

function HighPriestessConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is High Priestess"
    });
}

function DragonPileConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Dragon Pile"
    });
}

function MournersConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Mourners"
    });
}

function GrandExplorerConversation(self, data) {
    return({
        YesReply: "Thanks for saying yes",
        NoReply: "That is mean :(",
        Conversation: "Hello, I'd like a million dollars",
        Description: "This is Grand Explorer"
    });
}

