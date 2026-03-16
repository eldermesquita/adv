export function useContato() {
  const whatsappNumber = '5595981083779'
  const defaultMessage = 'Olá, gostaria de mais informações.'

  const getWhatsappLink = (message = defaultMessage) => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  }

  const openWhatsapp = (message = defaultMessage) => {
    window.open(getWhatsappLink(message), '_blank')
  }

  return {
    whatsappNumber,
    getWhatsappLink,
    openWhatsapp
  }
}
