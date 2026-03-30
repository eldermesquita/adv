export function useContato() {
  const whatsappNumber = '5595981083779'
  const defaultMessage = 'Olá, gostaria de mais informações.'

  const getWhatsappLink = (message = defaultMessage) => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  }

  const getCompartilharWhatsapp = (url, titulo) => {
    const texto = encodeURIComponent(`${titulo}\n\n${url}`)
    return `https://wa.me/?text=${texto}`
  }

  const getCompartilharFacebook = (url) => {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  }

  const getCompartilharTwitter = (url, titulo) => {
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(titulo)}`
  }

  const getCompartilharInstagram = () => {
    return `https://www.instagram.com/`
  }

  const openWhatsapp = (message = defaultMessage) => {
    window.open(getWhatsappLink(message), '_blank')
  }

  return {
    whatsappNumber,
    getWhatsappLink,
    getCompartilharWhatsapp,
    getCompartilharFacebook,
    getCompartilharTwitter,
    getCompartilharInstagram,
    openWhatsapp
  }
}
