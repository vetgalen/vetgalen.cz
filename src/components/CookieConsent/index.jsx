import CookieConsent from 'react-cookie-consent'

// Remove Google Analytics cookies (_ga, _ga_<id>) that may have been set
// before consent was required, e.g. by an older version of the site.
const removeAnalyticsCookies = () => {
  const host = window.location.hostname
  const domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')]
  document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
    .forEach((name) => {
      domains.forEach((domain) => {
        document.cookie =
          name +
          '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' +
          (domain ? '; domain=' + domain : '')
      })
    })
}

const Cookie = () => (
  <CookieConsent
    location="bottom"
    buttonText="Souhlasím"
    declineButtonText="Odmítnout"
    enableDeclineButton
    onAccept={() => window.loadAnalytics && window.loadAnalytics()}
    onDecline={removeAnalyticsCookies}
    style={{ background: '#2B373B' }}
    buttonStyle={{ color: '#4e503b' }}
  >
    <small>
      Provozovatel jako správce osobních údajů zpracovává na tomto webu cookies
      potřebné pro fungování webových stránek a se souhlasem uživatele také
      cookies pro analytické účely.{' '}
      <a href="/soukromi/">Další informace</a>
    </small>
  </CookieConsent>
)

export default Cookie
