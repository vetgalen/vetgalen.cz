import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Row, Col, Container } from 'reactstrap'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const PrivacyPage = ({ data, location }) => {
  const { logo, gdpr, cookie, icon, site } = data
  const gdprImage = get(gdpr, 'childImageSharp.resolutions')
  const cookieImage = get(cookie, 'childImageSharp.resolutions')

  return (
    <Layout location={location} logo={logo} icon={icon}>
      <Meta site={get(site, 'meta')} />
      <Container>
        <Row>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 2, size: 5 }}
            md={{ order: 2, size: 4 }}
            className="text-center">
            <Img resolutions={cookieImage} />
          </Col>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1, size: 7 }}
            md={{ order: 1, size: 8 }}>
            <h3 id="cookies">SOUBORY COOKIES</h3>
            <p>
              Cookies jsou krátké textové soubory, které si internetové stránky
              ukládají do paměti internetového prohlížeče zařízení uživatele, za
              účelem usnadnění používání stránek. Některé funkce není možné bez
              cookies využívat.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <p>
              <strong>
                Na stránce vetgalen.cz nepoužíváme cookies za účelem osobní
                identifikace uživatelů ani za účelem reklamy.
              </strong>
            </p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Ukládáme následující druhy cookies:</p>
            <ul>
              <li>
                Cookie sloužící ke zjištění, zda uživatel potvrdil dialog
                ohledně cookies, abychom ho nezobrazovali znovu ;-)
              </li>
              <li>
                Cookies třetích stran určené pro měření anonymních dat o chování
                uživatelů a sledování návštěvnosti pomocí Google Analytics za
                účelem lepšího přizpůsobení stránek pro uživatele
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Pravidla pro používání nebo zablokování cookies si může každý
              uživatel nastavit ve svém internetovém prohlížeči. Uživatel si
              může nastavit povolení nebo odmítnutí veškerých nebo pouze
              některých souborů cookies. Uživatel může svou volbu ohledně
              nastavení cookies kdykoliv změnit. Uživatel může již uložené
              soubory cookies vymazat ve svém internetovém prohlížeči.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Detailní informace o nastavení ukládání souborů cookies v
              prohlížeči lze nalézt v nápovědě konkrétního internetového
              prohlížeče.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 1, size: 5 }}
            md={{ order: 1, size: 4 }}
            className="text-center">
            <Img resolutions={gdprImage} />
          </Col>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 2, size: 7 }}
            md={{ order: 2, size: 8 }}>
            <h3>INFORMACE O ZPRACOVÁNÍ OSOBNÍCH ÚDAJŮ</h3>
            <p>
              poskytované v souladu s nařízením Evropského parlamentu a Rady
              (EU) č. 2016/679 (dále jen „Nařízení GDPR“)
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Veterinární ordinace Galen (MVDr. Pavla Alexandrová, IČ 723 39
              527; MVDr. Zuzana Piwková, IČ 047 83 123) tímto v souladu
              s ustanovením článku 12 a 13 Nařízení GDPR svým zákazníkům –
              fyzickým osobám, kteří jsou ve smyslu článku 4 odst. 1 Nařízení
              subjekty údajů a jejichž osobním údajům je tak ve smyslu a
              v režimu Nařízení poskytována ochrana, poskytuje následující
              informace, sdělení a poučení.
            </p>
            <p>
              Uvedené osoby jsou oprávněny shromažďovat osobní údaje. V případě
              dotazu ohledně osobních údajů jej můžete kontaktovat
              prostřednictvím e-mailu.
            </p>
            <ol>
              <li>
                <strong>ÚČEL A ROZSAH ZPRACOVÁNÍ</strong>
                <p>
                  Ve veterinární ordinaci jsou osobní údaje zákazníků
                  zpracovávány v těchto případech:
                </p>
                <ol className="lower-roman">
                  <li>
                    <p>
                      <strong>
                        potřebujeme osobní údaje pro plnění smlouvy o poskytnutí
                        veterinární péče
                      </strong>
                      &nbsp;–&nbsp;pro možnost efektivně se zákazníkem při
                      poskytování veterinární péče komunikovat a informovat jej
                      například o stavu zvířete, výsledcích vyšetření apod.,
                      potřebujeme zpravidla
                      <u>&nbsp;telefonní číslo a e-mailovou adresu zákazníka</u>
                      . Pokud jsme poskytli veterinární péči, považujeme
                      majitele zvířete za našeho zákazníka a veškeré informace o
                      průběhu poskytování veterinární péče pak vedeme v naší
                      evidenci, neboť tyto údaje jsou naprosto nezbytné
                      v případě jakékoliv veterinární péče poskytované námi u
                      daného zvířete v budoucnu.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        zpracování osobních údajů nám ukládá přímo právní úprava
                      </strong>
                      &nbsp;–&nbsp;protože jsme povinni vést dokumentaci o
                      poskytované veterinární péči, jejíž součástí musí být
                      rovněž identifikace majitele ošetřeného zvířete, jsou námi
                      zpracovávány{' '}
                      <u>
                        jméno, příjmení, bydliště a příp. datum narození
                        zákazníka (nikoli rodné číslo)
                      </u>
                      ; protože nám právní úprava ukládá předávat{' '}
                      <u>osobní údaje o zákazníkovi uvedené v petpasu</u>, jsou
                      tyto údaje o chovateli, pro kterého vystavujeme petpas,
                      zpracovávány a předávány Komoře veterinárních lékařů ČR;
                      protože nám právní úprava ukládá, abychom veterinární
                      služby řádně vyúčtovali a evidovali, zpracováváme{' '}
                      <u>
                        údaje nezbytné pro splnění náležitostí účetních a
                        daňových dokladů
                      </u>{' '}
                      apod.;
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        zpracování je nezbytné pro zajištění podstatného zájmu
                        ordinace
                      </strong>
                      &nbsp;–&nbsp;jsme oprávněni využívat získané kontaktní
                      údaje stálých zákazníků pro zasílání obchodních sdělení
                      ohledně našich služeb a produktů, naším podstatným zájmem
                      je pak rovněž využití osobních údajů při uplatňování
                      nároku ordinace ze smlouvy apod.;
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>zákazník se zpracováním souhlasí</strong>
                      &nbsp;–&nbsp; v případě, že nám k tomu zákazník udělí
                      souhlas, může dojít ke zpracování rovněž dalších osobních
                      údajů –souhlas zákazníka je vždy informovaný a konkrétní
                      co do účelu, rozsahu a doby zpracování osobních údajů,
                      zákazník má právo jej kdykoliv odvolat. Osobní údaje jsou
                      námi zpracovány v rozsahu, v jakém nám je zákazník
                      poskytl. Osobní údaje, které od zákazníka požadujeme, může
                      zákazník vždy odmítnout poskytnout. Pokud jde ale o takové
                      údaje, jejichž poskytnutí jsme povinni vyžadovat, nemůžeme
                      v takovém případě související službu poskytnout.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <strong>SOUHLAS SE ZPRACOVÁNÍM OSOBNÍCH ÚDAJŮ</strong>
                <p>
                  Pokud veterinární ordinace zpracovává osobní údaje zákazníka
                  na základě jeho souhlasu,  poskytovatel je oprávněn po
                  zákazníkovi požadovat, aby poskytnutí souhlasu písemně
                  potvrdil. Poskytne-li zákazník poskytovateli takový souhlas,
                  může jej kdykoli, jakoukoli formou a bez jakékoli sankce
                  odvolat. Odvoláním souhlasu není dotčeno oprávnění
                  poskytovatele tyto osobní údaje zákazníka v nezbytném rozsahu
                  nadále zpracovávat k účelům, k nimž poskytovateli svědčí jiný
                  ze zákonných důvodů zpracování. Pro samotné poskytnutí
                  veterinárních služeb není souhlas se zpracováním osobních
                  údajů nutný, poskytovatel poskytnutím souhlasu zákazníka ke
                  zpracování jeho osobních údajů nepodmiňuje poskytnutí služeb
                  veterinární péče.
                </p>
              </li>
              <li>
                <strong>OBCHODNÍ SDĚLENÍ</strong>
                <p>
                  Zákazníky, kteří navštívili veterinární ordinaci poskytovatele
                  opakovaně, považuje poskytovatel za stálé zákazníky,
                  nesdělí-li mu zákazník výslovně jinak. Poskytovatel je
                  oprávněn zpracovávat osobní údaje zákazníka, které od
                  zákazníka v souvislosti s poskytováním veterinárních služeb
                  obdržel, rovněž i za účelem přímého marketingu vlastních
                  produktů a služeb (např. pozvánka k očkování zvířete
                  zákazníka). Zákazník je oprávněn kdykoli vznést námitku proti
                  zpracování jeho osobních údajů pro účely přímého marketingu
                  poskytovatele a kdykoli může jednoduchým způsobem umožněným
                  poskytovatelem zasílání dalších nabídek odmítnout.
                </p>
              </li>
              <li>
                <strong>UCHOVÁVÁNÍ OSOBNÍCH ÚDAJŮ</strong>
                <p>
                  Osobní údaje zákazníka uchovává poskytovatel po dobu nezbytně
                  nutnou a v rozsahu nezbytně nutném k dosažení daného účelu
                  zpracování, tj. po dobu trvání smluvního vztahu mezi
                  poskytovatelem a zákazníkem a následně pak po dobu, kterou je
                  poskytovatel povinen tyto údaje uchovávat dle obecně závazných
                  právních předpisů, a to vždy právě v rozsahu nezbytném pro
                  splnění povinností poskytovatele. Kromě toho je poskytovatel
                  oprávněn osobní údaje zákazníka v nezbytném rozsahu uchovávat
                  i pro účely ochrany a/nebo uplatňování případných práv a
                  nároků poskytovatele vyplývajících ze smluvního vztahu mezi
                  poskytovatelem a zákazníkem, a to po dobu, dokud nedojde
                  k promlčení případných nároků podle příslušných ustanovení
                  občanského zákoníku.
                </p>
              </li>
              <li>
                <strong>ZPRACOVATELÉ A PŘÍJEMCI OSOBNÍCH ÚDAJŮ</strong>
                <p>
                  Osobní údaje zákazníka mohou být poskytnuty třetím osobám,
                  které poskytovateli poskytují odborné veterinární, účetní,
                  právní či IT služby v zájmu zajištění řádného plnění
                  povinností ordinace stanovených jí obecně závaznými právními
                  předpisy či v zájmu uplatnění a/nebo ochrany nároků a práv
                  poskytovatele vůči zákazníkovi. Před předáním osobních údajů
                  třetí osobě je vždy poskytovatelem s touto osobou uzavřena
                  písemná smlouva upravující zpracování osobních údajů, která
                  obsahuje příslušné záruky pro zpracování osobních údajů.
                  Osobní údaje mohou být zpřístupněny i dalším subjektům, ale
                  vždy pouze tehdy, pokud jim bude svědčit zákonný důvod pro
                  přístup k těmto osobním údajům (např. orgány činné v trestním
                  řízení, jiné kontrolní orgány se zákonným zmocněním pro
                  přístup k informacím).
                </p>
              </li>
              <li>
                <strong>POUČENÍ O PRÁVECH ZÁKAZNÍKA</strong>
                <p>
                  Zákazník má právo požadovat od poskytovatele přístup ke
                  svým osobním údajům, jejich opravu nebo výmaz, popřípadě
                  omezení zpracování, a vznést námitku proti zpracování, za
                  podmínek stanovených Nařízením GDPR má právo na přenositelnost
                  těchto údajů k jinému správci, a to ve smyslu článků 15 až 21
                  Nařízení GDPR. Zákazník má dále právo být bezodkladně
                  informován o jakémkoli případu porušení zabezpečení osobních
                  údajů, které může mít za následek vysoké riziko pro práva a
                  svobody fyzických osob. Zákazník má rovněž právo podat
                  stížnost u Úřadu pro ochranu osobních údajů (resp. jiného
                  dozorového úřadu s působností v oblasti ochrany osobních
                  údajů, bude-li zřízen), má-li za to, že poskytovatel při
                  zpracování osobních údajů (vč. případných vyřizování žádostí
                  zákazníků) postupuje v rozporu s Nařízením. Informace o
                  opatřeních přijatých na základě žádosti zákazníka dle čl. 15
                  až 22 Nařízení budou zákazníkovi poskytnuty bez zbytečného
                  odkladu, nejpozději do 1 měsíce od obdržení žádosti. Při
                  zpracování osobních údajů zákazníka nebude docházet
                  k automatizovanému rozhodování ani profilování ve smyslu čl.
                  22 odst. 1 a 4 Nařízení.
                </p>
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  query PrivacyPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    logo: file(name: { eq: "vetgalen-logo" }) {
      childImageSharp {
        fixed(width: 246, height: 119) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    icon: file(name: { eq: "icon" }) {
      childImageSharp {
        fixed(width: 80, height: 30) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    gdpr: file(name: { eq: "gdpr" }) {
      childImageSharp {
        resolutions(quality: 100, width: 200) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
    cookie: file(name: { eq: "cookie" }) {
      childImageSharp {
        resolutions(quality: 100, width: 107) {
          ...GatsbyImageSharpResolutions_withWebp
        }
      }
    }
  }
`
