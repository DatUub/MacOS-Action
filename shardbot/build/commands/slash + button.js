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
import { ActionRowBuilder, ApplicationCommandOptionType, ButtonBuilder, ButtonStyle, } from "discord.js";
import { ButtonComponent, Discord, Slash, SlashOption } from "discordx";
let Example = class Example {
    async hello(user, interaction) {
        await interaction.deferReply();
        const helloBtn = new ButtonBuilder()
            .setLabel("Hello")
            .setEmoji("👋")
            .setStyle(ButtonStyle.Primary)
            .setCustomId("hello-btn");
        const row = new ActionRowBuilder().addComponents(helloBtn);
        interaction.editReply({
            components: [row],
            content: `${user}, Say hello to bot`,
        });
    }
    helloBtn(interaction) {
        interaction.reply(`👋 ${interaction.member}`);
    }
};
__decorate([
    Slash({ description: "hello", name: "hello-btn" }),
    __param(0, SlashOption({
        description: "user",
        name: "user",
        required: true,
        type: ApplicationCommandOptionType.User,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Function]),
    __metadata("design:returntype", Promise)
], Example.prototype, "hello", null);
__decorate([
    ButtonComponent({ id: "hello-btn" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], Example.prototype, "helloBtn", null);
Example = __decorate([
    Discord()
], Example);
export { Example };
