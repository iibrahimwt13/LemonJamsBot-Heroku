import { Composer } from 'telegraf';
import { pause } from '../tgcalls';

export const pauseHandler = Composer.command(['duraklat', 'devamet'], async ctx => {
    const { chat } = ctx.message;

    if (chat.type !== 'supergroup') {
        return;
    }

    const paused = await pause(chat.id);
    const message = paused === null ? "Burada çalınan hiçbir şey yok." : duraklatıldı ? 'duraklatıldı.' : 'Devam ettirildi.';

    await ctx.reply(message);
});
