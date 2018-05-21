 //document.addEventListener("deviceready", onDeviceReady, false);
    var db = window.openDatabase("Test_Database11", "3.0", "Test DB2", 200000);
    var globalQrID;
    var globalDate;
    //function will be called when device ready
    function onEventsActivityReady(){
        var d = new Date();
        var day = ("0" + d.getDate()).slice(-2)
        var month = ("0" + (d.getMonth() + 1)).slice(-2)
        var year = d.getFullYear();
        var dateToDisplay = day+'-'+month+'-'+year;
        var date = year+'-'+month+'-'+day;
        globalDate = date;
        $('#date').empty();
        $('#date').append(dateToDisplay);
        db.transaction(populateDB, errorCB, successCB);
    }
 
    //create table and insert some record
    function populateDB(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Event (id INTEGER PRIMARY KEY AUTOINCREMENT, EventPhoto TEXT NOT NULL, EventName TEXT NOT NULL, EventDate TEXT NOT NULL, EventDesc TEXT NOT NULL, EventEndDate DATE, UNIQUE(EventName))');
        
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "Bylo", "23 kwiecień", "bylo", "2017-04-23")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "Prawie Kino - Kino Samochodowe", "24 maja 2017", "Kino Samochodowe jest organizowane w ramach projektu Prawie Kino, który jest cyklem darmowych pokazów filmowych dla studentów. W ramach kina samochodowego zostaną wyświetlone dwa filmy na terenie parkingu koło pawilonu H. Głównym celem organizacji wydarzenia jest promocja edukacji filmowej wśród społeczności akademickiej.", "2017-05-24")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "Trippin Day", "25 maja 2017", "Trippin’ Day to wydarzenie organizowane już kolejny raz na Kampusie UEK-u. Wydarzenie to ma na celu pokazanie obcych kultur studentom i zachęcenie ich do podróżowania.", "2017-05-25")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "Dzień Uniwersytetu Ekonomicznego w Krakowie", "29 maja 2017", "Brak", "2017-05-29")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "AZS UEK CUP", "31 maja 2017", "AZS UEK CUP to turniej futsalu skierowany do uczniów szkół średnich mający na celu nie tylko promowanie aktywności fizycznej i sportowego trybu życia, ale również promocję Uniwersytetu Ekonomicznego oraz zaprezentowanie struktur działania Akademickiego Związku Sportowego. Do udziału w turnieju zamierzamy zaprosić reprezentacje sześciu szkół średnich z województwa małopolskiego. Podczas turnieju uczniowie będą mieli możliwość rywalizować z rówieśnikami oraz studentami. Najlepsi zawodnicy turnieju wezmą udział w „Meczu Gwiazd”,w którym zmierzą się z drużyną Kadry GAP Prof. dr hab. Jerzego Hausnera, złożonej głównie z absolwentów, pracowników oraz studentów Uniwersytetu Ekonomicznego w Krakowie. Ambasadorem turnieju będzie uznany komentator sportowy, były zawodników trzech największych krakowskich klubów, Pan Kazimierz Węgrzyn.", "2017-05-31")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "Bezpieczna Uczelnia UEK", "1 czerwca 2017", "Happening realizowany w ramach Zintegrowanej Polityki Bezpieczeństwa, mający na celu uświadomienie jak i ograniczenie zagrożeń, z którymi na co dzień mają do czynienia studenci. Tematem 11 edycji wydarzenia jest terroryzm.", "2017-06-01")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "SOS - Społeczna Odpowiedzialność Studentów", "3 czerwca 2017", "SOS - Społeczna Odpowiedzialność Studentów to inicjatywa skierowana do studentów specjalności i kierunku prowadzonych przez Katedrę Zarządzania Międzynarodowego przy współpracy ze świetlicami środowiskowymi będącymi pod patronatem krakowskiego Ośrodka Adopcyjno-Opiekuńczego Towarzystwa Przyjaciół Dzieci przy ul. Lenartowicza 14. Celem naszego projektu jest zaangażowanie studentów w działalność pozauczelnianą, pokazanie, że ważne jest to, jak pomagamy innym i jak dzięki temu rozwijamy swoją wrażliwość i umiejętności. Ma on uzmysłowić studentom potrzebę pomocy drugiemu człowiekowi oraz umożliwić zaangażowanie się w społeczne aspekty życia. Dzięki licznym mini programom edukacyjnym, zajęciom profilowanym, grom i zabawom, studenci pokazują dzieciom, że warto być wrażliwym na potrzeby innych, rozwijać siebie i dążyć do spełnienia marzeń.", "2017-06-03")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "Zaangażowanie organizacyjne - aspekty psychospołeczne", "8 czerwca 2017", "Obszarem zainteresowania podjętym na konferencji będzie szeroko rozumiana problematyka zaangażowania w organizacji. Interesuje nas wielość spojrzeń z punktu widzenia różnych dyscyplin naukowych: psychologicznej, socjologicznej i nauk o zarządzaniu. Uważamy, że warto odnajdywać związki, badać i porównywać perspektywy badawcze w kontekście zaangażowania organizacyjnego w powiązaniu z kwestiami zaufania, przywództwa, poczucia wpływu, komunikowania, motywacji, wartości, czy też z problematyką rekrutacji i kariery zawodowej. Podane tu sfery związane z zaangażowaniem stanowią tylko propozycję wystąpień, nie zaś zamkniętą pulę tematów. Stoimy na stanowisku, iż zaangażowanie organizacyjne (jego poziom, charakter, specyfika) stanowi jeden z kluczowych składników kultury organizacyjnej, nierozerwalnie łącząc się z podmiotowością pracowników stanowiąc warunek pomyślności ekonomicznej racjonalnie prowadzonego biznesu oraz konkurencyjności organizacji na rynku.", "2017-06-08")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "XIII Pożegnanie Absolwentów", "24 czerwca 2017", "Gala Pożegnania Absolwentów specjalności zarządzanie międzynarodowe i logistyka międzynarodowa prowadzonych przez Katedrę Zarządzania Międzynarodowego. W uroczystości biorą udział absolwenci, zaproszeni goście, Władze uczelni oraz pracownicy Katedry.", "2017-04-05")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "Konferencja Naukowa pt. Polityka rozwoju społeczno-ekonomicznego wobec nowych wyzwań", "22–23 września 2017", "Konferencja naukowa wpisuje się w cykl organi zowanych corocznie spotkań Katedr zajmujących się problematyką polityki gospodarczej, społecznej i regionalnej. Tegoroczna konferencja powiązana jest z obchodami jubileuszu 70-lecia urodzin Profesora Andrzeja Pruska.", "2017-09-24")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "8th International Conference on Small and medium-sized enterprises in the globalized world", "28–30 września 2017", "The main objective of the present conference is to encourage researches concerning SMEs in a globalized world through networking and collaboration between academics and practitioners. The conference also aims to serve as a forum between entrepreneurs, managers, academics and researchers who are invited to exchange information, knowledge and experience in the broad filed of SMEs matters.", "2017-10-01")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "XIV Targi Pracy UEK", "12 października 2017", " Studenci i absolwenci UEK oraz studenci pozostałych Uczelni będą mieli okazję spotkać się z wieloma pracodawcami (głównie z woj. małopolskiego) i poznać ich aktualne oferty pracy, praktyk i staży. Uczestnicy będą mogli również skorzystać z CV Point i skonsultować swoje dokumenty aplikacyjne. W programie wydarzenia przewidziano również prezentacje i warsztaty prowadzone przez firmy-Wystawców.", "2017-10-12")');
        tx.executeSql('INSERT INTO Event(EventPhoto, EventName,EventDate, EventDesc, EventEndDate) VALUES ("<img id=theImg src=img/event.png />", "Andrzej Malawski Memorial Session", "23 października 2017", "Sesja naukowa poświęcona pamięci Profesora Andrzeja Malawskiego. W jej ramach przewidziane są referaty prof. Odeda Starka (Georgetown University, Bonn Universitat, Uniwersytet Warszawski), prof. Jana Wernera (Minnesota University) oraz prof. Jacka Osiewalskiego (UEK)", "2017-10-24")');
    }
 
    function errorCB(err) {
        db.transaction(queryDB,errorCB);
    }
 
    function successCB() {
        db.transaction(queryDB,errorCB);
    }
 
    function queryDB(tx){
        var checkDate = globalDate;
        tx.executeSql('SELECT * FROM Event WHERE date(EventEndDate) > date(?)',[checkDate],querySuccess,errorCB);
    }
 
    function querySuccess(tx,result){
      //  $('#news').empty();
        $.each(result.rows,function(index){
            var row = result.rows.item(index);
            var dataEvent = row['EventDate'];
            var replacedDataEvent = dataEvent.split(' ').join('%20');
            var titleEvent = row['EventName'];
            var replacedTitleEvent = titleEvent.split(' ').join('%20');
            var descEvent = row['EventDesc'];
            var replacedDescEvent = descEvent.split(' ').join('%20');
            $('#news').append('<li><div class="photo">'+row['EventPhoto']+'</div><div class="dropdown"><input type="checkbox" id="checkbox_'+index+'"><label class="event-item" for="checkbox_'+index+'"><h3>'+row['EventName']+'</h3><h3>'+row['EventDate']+'</h3></label><ul class="event"><li>Opis: '+row['EventDesc']+'<br><b>Wyslij wydarzenie sms-em: <a href=sms:?body='+replacedTitleEvent+'-'+replacedDataEvent+'-'+replacedDescEvent+'>Wyslij</a><br/>Wyslij wydarzenie e-mailem: <a href=mailto:?subject=Notatka%20z%20aplikacji%20Visit%20UEK&body='+replacedTitleEvent+'-'+replacedDataEvent+'-'+replacedDescEvent+'>Wyslij</a></b></li></ul><br></div></li>');
        });
 
        $('#news').listview();
    }

        //function will be called when device ready
    function onContactsActivityReady(){
        db.transaction(populateContactsDB, errorContactsCB, successContactsCB);
    }
 
    //create table and insert some record
    function populateContactsDB(tx1) {
        tx1.executeSql('CREATE TABLE IF NOT EXISTS Contact (id INTEGER PRIMARY KEY AUTOINCREMENT, ContactName TEXT NOT NULL, ContactNumber TEXT NOT NULL, ContactMail TEXT NOT NULL, UNIQUE(ContactName))');
        
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Parlament Studencki Uniwersytetu Ekonomicznego w Krakowie", "12 2935585", "biuro@psuek.pl")'); 
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Biblioteka Główna Uniwersytetu Ekonomicznego w Krakowie", "12 2935009", "bguek@uek.krakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Kierownik Dziekanatu Zarządzania", "12 2935724", "bienk@uek.krakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Kierownik Dziekanatu Towaroznawstwa", "12 2935608", "nosalh@uek.krakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Kierownik Dziekanatu Gospodarki i Administracji Publicznej", "12 2935920", "smolinsd@uek.krakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Kierownik Dzienakatu Finansów i Prawa ", "12 2935843", "okreglig@uek.krakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Dyrektor Kancelarii Rektora", "12 2935608", "kancelaria@uek.krakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Kierownik Działu Spraw Bytowych", "12 2935130", "krupat@uek.krakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Biuro ds. Osób Niepełnosprawnych", "12 2935120", "bon@uek.krakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Sekretariat Studium WF", "12 2935070", "swfis@uek.krakow.pl ")');
        }
 
    function errorContactsCB(err) {
        db.transaction(queryContactsDB,errorContactsCB);
    }
 
    function successContactsCB() {
        db.transaction(queryContactsDB,errorContactsCB);
    }
 
    function queryContactsDB(tx1){
        tx1.executeSql('SELECT * FROM Contact',[],queryContactsSuccess,errorContactsCB); 
    }
 
    function queryContactsSuccess(tx1,result1){

        $('#contacts').empty();
        $.each(result1.rows,function(index){
            var row = result1.rows.item(index);

            $('#contacts').append('<li class="ui-li-static ui-body-inherit"><h3 class="ui-li-heading">'+row['ContactName']+'</h3><p class="ui-li-desc">Telefon: <a href="tel:'+row['ContactNumber']+'">'+row['ContactNumber']+'</a></p><p class="ui-li-desc">E-Mail: <a href="mailto:'+row['ContactMail']+'">'+row['ContactMail']+'</a></p></li>');
        });
 
        $('#contacts').listview();
                        
    }

    function onBuildingActivityReady(){

        window.location.href = "#buildingInformationActivity";
        db.transaction(populateBuildingDB, errorBuildingCB, successBuildingCB);

    }
 
    //create table and insert some record
    function populateBuildingDB(tx2) {
        tx2.executeSql('CREATE TABLE IF NOT EXISTS Building (id INTEGER PRIMARY KEY AUTOINCREMENT, BuildingName TEXT NOT NULL, BuildingPhoto TEXT NOT NULL, BuildingLocalization TEXT NOT NULL, BuildingUsefulPlaces TEXT NOT NULL, BuildingRooms TEXT NOT NULL, UNIQUE(BuildingName))');   
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Wawel", "<img id=theImg src=img/wawel.jpg />", "<img id=theImg src=img/wawelloc.png />", "Dziekanaty:<br> Godziny otwarcia: <br>poniedziałek, wtorek, czwartek w godzinach: 11.00-14.00<br>piątek w godzinach: 11.00-14.00 i 15:00-17:00<br>środa - dziekanat nieczynny <br> sobota  w godzinach: 8.00-12.00 ", "-Piwnica: 1 (sala obron), 2 (sala obron), 3, 4, 5, 6 <br>-1 piętro: 7, 8, Stara Aula")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Smocza Jama", "<img id=theImg src=img/smoczajama.jpg />", "<img id=theImg src=img/bibloc.png />", "Wypożyczalnia ogólna - 1 piętro (p.102):<br> Godziny otwarcia: <br>Pn. 10:00 - 18:00<br>Wt. - Pt. 9:00 - 18:00<br>Sob. 9:00 - 15:00<br>Nd. 9:00 - 14:00", "-4 piętro: 440, 441, 442, 443")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Kościół św. Apostołów Piotra i Pawła", "<img id=theImg src=img/kosciolpiotrpawel.jpg />", "<img id=theImg src=img/aloc.png />", "Sale pracy samodzielnej - parter (07, 09, 013, 014)<br>Godziny pracy samodzielnej pod adresem <a onclick=loadPage(http://uek.krakow.pl/pl/uczelnia/administracja-i-inne-jednostki/pion-kanclerza/jednostki-bezposrednio-podlegle-kanclerzowi/centrum-informatyki/laboratoria/praca-indywidualna.html);>http://uek.krakow.pl/pl/uczelnia/administracja-i-inne-jednostki/pion-kanclerza/jednostki-bezposrednio-podlegle-kanclerzowi/centrum-informatyki/laboratoria/praca-indywidualna.html</a>", "-Parter: 07, 09, 013, 014 <br>-1 piętro: 115, 116, 117, 118, 121, 122<br>-2 piętro: 201 <br>-3 piętro: 301a, 301b <br>-4 piętro: 410, 413")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Rynek Główny", "<img id=theImg src=img/rynekglowny.jpg />", "<img id=theImg src=img/bloc.png />", "-460(sekretariat katedry przedsiębiorczości i innowacji)<br>-469(sekretariat katedry nauk politycznych)", "-Parter: 052, 053, 054, 055, 056, 057, 058, 059 <br> 1 piętro: 151, 152, 153 <br>-2 piętro: 251 <br>-3 piętro: 351 <br>-4 piętro: 451")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Sukiennice", "<img id=theImg src=img/sukienice.jpg />", "<img id=theImg src=img/cloc.png />", "-Siłownia (piwnica)<br>-Chór Dominanta (p.01a - parter)", "-Parter: A, B, C, D <br>-1 piętro: Nowa Aula, E, F")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Wieża Ratuszowa", "<img id=theImg src=img/wiezaratuszowa.jpg />", "<img id=theImg src=img/dloc.png />", "-Gabinet psychologa (p.18)<br>-Zrzeszenie studentów niepełnosprawnych (p.19)<br>-Biuro ds. osób niepełnosprawnych (p.20)", "-Parter: 3, 4, 5, 6, Prac. Mikrob. 1, Prac. Mikrob. 2")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Kościół Mariacki", "<img id=theImg src=img/kosciolmariacki.jpg />", "<img id=theImg src=img/eloc.png />", "-Klub Studencki ZaUEK - wejście od pola<br>Więcej informacji pod adresem <a onclick=loadPage(https://www.facebook.com/zauek/);>https://www.facebook.com/zauek/</a>", "-Parter: G, H <br>-1 piętro: J")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Brama Floriańska", "<img id=theImg src=img/bramaflorianska.jpg />", "<img id=theImg src=img/floc.png />", "-Restauracja Bułka z makiem - parter<br>-Bankomat Euronet - parter", "-Parter: 011(SJO), 012(SJO) <br>-1 piętro: 102, 104, 106, 107, 109, 111<br>-2 piętro: 210(SJO)<br>-3 piętro: 301(SJO), 302(SJO), 303(SJO), 309(SJO), 310(SJO), 311(SJO), 312(SJO), 313(SJO), 314(SJO)<br>-4 piętro: 413, 414, 415, 416<br>-5 piętro: 513, 514, 515, 516<br>-6 piętro: 613, 614, 615, 616<br>-7 piętro: 713, 715, 717")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Planty", "<img id=theImg src=img/planty.jpg />", "<img id=theImg src=img/gloc.png />", "---", "-Piwnica: 1, 2, 3 <br>-Parter: 4, 5, 6, 7 <br>-1 piętro: 8, 9, 10, 11<br>-2 piętro: 12, 14, 15")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Teatr im. Juliusza Słowackiego", "<img id=theImg src=img/teatrslowackiego.jpg />", "<img id=theImg src=img/uloc.png />", "-Stołówka UEK<br>Godziny otwarcia:<br>poniedziałek–piątek: 10:00–16:30<br> do godziny 11:30 dania barowe, po godzinie 11:30 obiady", "-1 piętro: K, L, M, N <br>-2 piętro: O, P, S <br>-3 piętro: T, Lab. Fiz. 1, Lab. Fiz. 2 <br>-4 piętro: Lab. Prz. 1, Lab. Opakowań 1")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Okno Papieskie", "<img id=theImg src=img/oknopapieskie.jpg />", "<img id=theImg src=img/sloc.png />", "Restauracja Dobre smaki<br>Godziny otwarcia: <br>poniedziałek–sobota: 8:00–19:00<br> niedziela: 8:00–16:00", "-Piwnica: Szatnie, Wejście na halę sportową <br>-1 piętro: 1, 2, 3, 4, 5 <br>-2 piętro: 6, 7, 8, 9")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Universitet Jagieloński", "<img id=theImg src=img/uj.jpg />", "<img id=theImg src=img/kloc.png />", "Klub studencki Grota 2 <br>Godziny otwarcia: <br>poniedziałek–piątek:  9:00–22:00<br> sobota: 9:00–17:00<br> niedziela: 9:00–15:00", "-Parter: Sala seminaryjna")'); 
        }
 
    function errorBuildingCB(err) {
        db.transaction(queryBuildingDB,errorBuildingCB);
    }
 
    function successBuildingCB() {
        db.transaction(queryBuildingDB,errorBuildingCB);
    }
 
    function queryBuildingDB(tx2){
        var idd = document.getElementById("select-native-4").selectedIndex;

        tx2.executeSql('SELECT * FROM Building WHERE id='+idd+'',[],queryBuildingSuccess,errorBuildingCB); 
    }
 
    function queryBuildingSuccess(tx2,result2){

        $('#buildingName').empty();
        $('#buildingDesc').empty();
        $('#buildingPhoto').empty();
        $('#buildingLocalization').empty();
        $('#buildingRooms').empty();
        $('#buildingUsefulPlaces').empty();
        $.each(result2.rows,function(index){
            var row = result2.rows.item(index);

            $('#buildingName').append(row['BuildingName']);
            $('#buildingDesc').append(row['BuildingDesc']);
            $('#buildingPhoto').prepend(row['BuildingPhoto'])
            $('#buildingLocalization').prepend(row['BuildingLocalization'])
            $('#buildingRooms').append(row['BuildingRooms']);
            $('#buildingUsefulPlaces').append(row['BuildingUsefulPlaces']);
        });
                        
    }

    function onQrActivityReady(qrID){
        globalQrID = qrID;
        window.location.href = "#buildingInformationActivity";
        db.transaction(populateBuildingDB, errorQrCB, successQrCB);

    }
    function errorQrCB(err) {
        db.transaction(queryQrDB,errorQrCB);
    }
 
    function successQrCB() {
        db.transaction(queryQrDB,errorQrCB);
    }
 
    function queryQrDB(tx2){
        var localQrID = globalQrID;
        tx2.executeSql('SELECT * FROM Building WHERE id='+localQrID+'',[],queryQrSuccess,errorQrCB); 
    }
 
    function queryQrSuccess(tx2,result2){

        $('#buildingName').empty();
        $('#buildingDesc').empty();
        $('#buildingPhoto').empty();
        $('#buildingLocalization').empty();
        $('#buildingRooms').empty();
        $('#buildingUsefulPlaces').empty();
        $.each(result2.rows,function(index){
            var row = result2.rows.item(index);

            $('#buildingName').append(row['BuildingName']);
            $('#buildingDesc').append(row['BuildingDesc']);
            $('#buildingPhoto').prepend(row['BuildingPhoto'])
            $('#buildingLocalization').prepend(row['BuildingLocalization'])
            $('#buildingRooms').append(row['BuildingRooms']);
            $('#buildingUsefulPlaces').append(row['BuildingUsefulPlaces']);
        });
                        
    }