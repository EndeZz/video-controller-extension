import ruLocales from '../../../../_locales/ru/messages.json'

type MessageKey = keyof typeof ruLocales

type MessageProperty = {
  message: string
  description: string
}

type MessageValues = Record<MessageKey, MessageProperty>

type TransformedMessages = {
  [key in MessageKey]: string
}

const transformMessages = (messages: MessageValues): TransformedMessages => {
  return Object.keys(messages).reduce((dict, key) => {
    dict[key as MessageKey] =
      typeof chrome !== 'undefined' ? chrome.i18n.getMessage(key) : `__MSG_${key}__`

    return dict
  }, {} as TransformedMessages)
}

export const getTranslationContent = () => {
  const content = transformMessages(ruLocales)

  return content
}
