const Command = require("../../structures/Command.js");
const fetch = require("node-fetch");


class bruh extends Command {
  constructor(...args) {
    super(...args, {
      description: "bruh bruh ",
      cooldown: 3,
      cost: 5,
    });
  }

  async run(msg) {
    const { url } = await fetch("https://nekos.life/api/v2/img/bruh")
      .then((res) => res.json());

    const embed = this.client.embed()
      .setTitle("bruh")
      .setImage(url)
      .setFooter(`Requested by: ${msg.author.tag} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }));

    return msg.send("BAKA", { embed: embed });
  }
}

module.exports = bruh;
