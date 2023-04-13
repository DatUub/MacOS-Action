var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { ApplicationCommandOptionType } from "discord.js";
import { Discord, Slash, SlashGroup, SlashOption } from "discordx";
let GroupExample = class GroupExample {
    add(x, y, interaction) {
        interaction.reply(String(x + y));
    }
    multiply(x, y, interaction) {
        interaction.reply(String(x * y));
    }
    root(text, interaction) {
        interaction.reply(text);
    }
};
__decorate([
    Slash({ description: "add" }),
    SlashGroup("maths", "testing"),
    __param(0, SlashOption({
        description: "x value",
        name: "x",
        required: true,
        type: ApplicationCommandOptionType.Number,
    })),
    __param(1, SlashOption({
        description: "y value",
        name: "y",
        required: true,
        type: ApplicationCommandOptionType.Number,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Function]),
    __metadata("design:returntype", void 0)
], GroupExample.prototype, "add", null);
__decorate([
    Slash({ description: "multiply" }),
    SlashGroup("maths", "testing"),
    __param(0, SlashOption({
        description: "x value",
        name: "x",
        required: true,
        type: ApplicationCommandOptionType.Number,
    })),
    __param(1, SlashOption({
        description: "y value",
        name: "y",
        required: true,
        type: ApplicationCommandOptionType.Number,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Function]),
    __metadata("design:returntype", void 0)
], GroupExample.prototype, "multiply", null);
__decorate([
    Slash({ description: "root" }),
    SlashGroup("testing"),
    __param(0, SlashOption({
        description: "text",
        name: "text",
        required: true,
        type: ApplicationCommandOptionType.String,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Function]),
    __metadata("design:returntype", void 0)
], GroupExample.prototype, "root", null);
GroupExample = __decorate([
    Discord(),
    SlashGroup({ description: "testing", name: "testing" }),
    SlashGroup({ description: "maths", name: "maths", root: "testing" })
], GroupExample);
export { GroupExample };
