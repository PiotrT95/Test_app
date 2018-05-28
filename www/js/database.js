 //document.addEventListener("deviceready", onDeviceReady, false);
    var db = window.openDatabase("Test_Database13", "5.0", "Test DB4", 200000);
    var globalQrID;
    var globalDate;
 
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
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Wawel", "<img id=theImg src=img/wawel.jpg />", "<img id=theImg src=img/wawelloc.jpg />", "Test1", "Test2")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Smocza Jama", "<img id=theImg src=img/smoczajama.jpg />", "<img id=theImg src=img/jamaloc.jpg />", "Test3", "Test4")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Kościół św. Apostołów Piotra i Pawła", "<img id=theImg src=img/kosciolpiotrpawel.jpg />", "<img id=theImg src=img/piotrpawel.jpg />", "Test5", "Test6")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Rynek Główny", "<img id=theImg src=img/rynekglowny.jpg />", "<img id=theImg src=img/rynekloc.jpg />", "Test7", "Test8")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Sukiennice", "<img id=theImg src=img/sukienice.jpg />", "<img id=theImg src=img/sukieniceloc.jpg />", "Test9", "Test10")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Wieża Ratuszowa", "<img id=theImg src=img/wiezaratuszowa.jpg />", "<img id=theImg src=img/wiezaloc.jpg />", "Test11", "Test12")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Kościół Mariacki", "<img id=theImg src=img/kosciolmariacki.jpg />", "<img id=theImg src=img/mariackiloc.jpg />", "Test13", "Test14")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Brama Floriańska", "<img id=theImg src=img/bramaflorianska.jpg />", "<img id=theImg src=img/bramaloc.jpg />", "Test15", "Test16")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Planty", "<img id=theImg src=img/planty.jpg />", "<img id=theImg src=img/barbakanloc.jpg />", "Test17", "Test18")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Teatr im. Juliusza Słowackiego", "<img id=theImg src=img/teatrslowackiego.jpg />", "<img id=theImg src=img/plantyloc.jpg />", "Test19", "Test20")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Okno Papieskie", "<img id=theImg src=img/placszczepanski.jpg />", "<img id=theImg src=img/placloc.jpg />", "Test21", "Test22")');
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Okno Papieskie", "<img id=theImg src=img/oknopapieskie.jpg />", "<img id=theImg src=img/oknoloc.jpg />", "Test23", "Test24")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization,BuildingUsefulPlaces,BuildingRooms) VALUES ("Universitet Jagieloński", "<img id=theImg src=img/uj.jpg />", "<img id=theImg src=img/ujloc.jpg />", "Test25", "Test26")'); 
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