const { Client, GatewayIntentBits } = require("discord.js");

const intents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
];

const client = new Client({
  intents: intents,
  presence: {
    activities: [{ name: "linear algebra", type: 5 }],
    status: "idle",
  },
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is ready`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.toUpperCase().includes("QUIZ")) {
    await message.channel.send("never make a public remark!");
  } else if (message.content.toUpperCase().includes("ARE YOU OK")) {
    await message.channel.send("actually, im a bit muddled");
  } else if (message.content.toUpperCase().includes("TIME")) {
    await message.channel.send("there should be no time pressure whatsoever");
  } else if (
    message.content.toUpperCase().includes("WHO") &&
    message.content.toUpperCase().includes("MADE")
  ) {
    await message.channel.send(
      "i am perfectly capable of making myself. in D-Lang of course"
    );
  } else if (message.content.toUpperCase().includes(`<@1091038234089357432>`)) {
    const options = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes, definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
    ];
    await message.channel.send(
      options[Math.floor(Math.random() * options.length)]
    );
  }
});

client.login(process.env.TOKEN);
