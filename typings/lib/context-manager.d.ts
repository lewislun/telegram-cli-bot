/**
 * @typedef {import('node-telegram-bot-api').Message} Message
 * @typedef {import('./telegram-commander.js').default} TelegramCommander
 */
export default class ContextManager {
    /** @type {Map<string, Context>} */ linearContextByConvId: Map<string, Context>;
    /**
     * @private
     * @param {Message} msg
     * @returns {string}
     */
    private getConversationId;
    /**
     * @param {Context} context
     */
    set(context: Context): void;
    /**
     * Cancel the context and remove it from the context manager.
     * @param {Context} context
     */
    delete(context: Context): void;
    /**
     * @param {TelegramCommander} bot
     * @param {types.Command} commandName
     * @param {Message} msg
     * @param {string[]} [args]
     * @returns {Context}
     */
    new(bot: TelegramCommander, command: any, msg: Message, args?: string[]): Context;
}
export type Message = import('node-telegram-bot-api').Message;
export type TelegramCommander = import('./telegram-commander.js').default;
import Context from './context.js';
