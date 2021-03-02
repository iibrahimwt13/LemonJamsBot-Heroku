import { bot } from '../bot';

import { playHandler } from './oynata';
import { queueHandler } from './queue';
import { pauseHandler } from './dur';
import { skipHandler } from './geç';

export const initHandlers = (): void => {
    bot.use(playHandler);
    bot.use(queueHandler);
    bot.use(pauseHandler);
    bot.use(skipHandler);
};
