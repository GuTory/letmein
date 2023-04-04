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

| Hét    | Téma                             | Munkaóra |
|--------|----------------------------------|----------|
| 1. hét | Backend frontend demó            | ~10      |
| 2. hét | Valós projekt inicializálás      | ~6       |
| 3. hét | Figma mocupok és backend építése | ~12      |
| 4. hét | Angular alapok                   | ~9       |

