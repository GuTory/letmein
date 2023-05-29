# Munkaórák

## Első hét

Első héten a demó alkalmazáson a nehézséget a mongoDB bekötése jelentette, ugyanis mindent
úgy csináltam, ahogy a dokumentációban volt, de nem működött. A megoldás az volt, hogy
újrageneráltam a projektet, és már minden jól működött.
A másik nehézséget a frontend bekötése jelentette, mivel a backend és a frontend nem
egy projektben volt, így a frontendnek ismernie kellett a backend url-jét. A megoldás az
volt, hogy a backenden megengedtem a CORS-t, és a így a frontenden nem is kellett proxyt
beállítani.

## Második hét

Ekkorra eldőlt, hogy mi legyen a valós projekt, inicializáltam minden szükséges technológiát,
és elkeztem megírni a backendet. Ehhez ki kellett találnom az alapvető entitásokat, és a gyakori
use-case-eket. A use-case gyűjtemény itt található a Notion oldalamon:
https://kristoth.notion.site/n-ll-laborrat-rium-0ccec40963734a5083d4d0d0449d019a

A hét folyamán sokat böngésztem a neten, Architekturális mintákról, és a Spring Framework
dokumentációját is olvastam. A következő oldalakon jártam legtöbbet:

- https://medium.com/
- https://spring.io/

Alább látható, hogy melyik héten mivel foglalkoztam, a munkaórák hozzávatőlegesek, mivel a
hét folyamán többször dolgoztam a projekten, nem egy huzamban, és nem stoppereltem.

## Harmadik hét

A szorgalmi isőszak harmadik hetében nulladik lépésként elkészítettem az oldalak hozzávetőleges kívánt kinézetét,
amely a következő linken látható:  https://www.figma.com/file/Bf7RQCnOzt670KTEID6SXJ/Let-Me-In?node-id=0%3A1&t=m4s82zSoIjp2yvHg-1
Ezután elkezdtem a kódbázis implementálását. A fejlesztés folyamán törekszem majd a vertikális kivitelezésre, ami alatt azt értem,
hogy egy microservice-t minden rétegen implementálok, nem a rétegeket építem egymás után. Ezelőtt viszont meg kellett teremteni
az alkalmazás gerincét, így először a backenddel kezdtem.

Először definiáltam a Model entitásokat, majd a Repository réteget, amely a Springnek köszönhetően futási időben generálódik.
Utána következett a Szolgáltatási réteg, ami a generált függvényekre épít egy elérhető interfészt az alkalmazás többi részének.
Ezután jöhetett az API végpontok definiálása, azaz a Controller csomag.

Végül implementáltam az alkalmazásban, hogy kívülről is fogadjon hívásokat, jelenleg csak a localhost 4200-as portjáról.

## Negyedik hét

Bekötöttem az alkalmazásba a swaggert, így most már láthatóak és tesztelhetőek az endpointok Front endtől függetlenül.

Elkezdtem a projekt második fő részével, az angular front enddel foglalkozni. Itt is először fel kell építeni az alapokat,
utána jöhet a felület maga. Amint megvan ez a gerinc, utána szeretném a feature-öket bele tenni vertikálisan.

## Ötödik és hatodik hét

Kidolgoztam az applikáció front endjét, a Service-eket komponenseket és modelleket is megcsináltam. 
Működik a http kommunikáció a két vég között.

## Hetedik hét

Implementáltam JWT alapú autentikációt az alkalmazásban, azaz csak bejelentkezéssel lehet használni az alkalmazást.

A front endet továbbra is finomítottam, készítettem további komponenseket és Angular template alapú formokat

## Nyolcadik hét

A formokat összekötöttem a backenddel, már lehet publikálni eseményeket, regisztrálni felhasználókat a kezelőfelületen keresztül,
nem csak postmannel.

Készítem az esemény részleteit megjelenítő felületét, ahol az alkalmazás főbb funkciói már látszódni fognak, jelentkezés becsekkolás stb.

## Kilencedik hét

EventDetails komponens kidolgozása, child route-okkal való ismerkedés

## Tizedik hét

Websocket kommunikáció utánjárás a backend oldalon. Túl sok dokumentáció szól a STOMP-ról, így sok idő jó irányba menni

## Tizenegyedik hét

Websocket kommunikáció megoldása, refaktorálások és kiszervezések. Clean code elvek követése. Stílusok kiszervezése direktívákba

## Tizenkettedik hét

Websocket bug javítás és end to end tesztelés Cypressben

| Hét     | Téma                                                                                   | óraszám |
|---------|----------------------------------------------------------------------------------------|---------|
| 1. hét  | Backend frontend demó                                                                  | ~10     |
| 2. hét  | Valós projekt inicializálás                                                            | ~6      |
| 3. hét  | Figma mocupok és backend építése                                                       | ~12     |
| 5. hét  | Angular alapok                                                                         | ~9      |
| 6. hét  | Angular komponenesek és backend fixek                                                  | ~10     |
| 7. hét  | Formok és JWT autentikáció                                                             | ~15     |
| 8. hét  | Frontend finomítás, további komponensek és formok, kommunikáció és funkciók tesztelése | ~15     |
| 9. hét  | Event details komponens, jelentkezés eventekre                                         | ~15     |
| 10. hét | Websocket kommunikáció, jelentkezés és lemondás                                        | ~10     |
| 11. hét | Websocket kommunikáció                                                                 | ~12     |
| 12. hét | e2e tesztelés                                                                          | ~10     |

