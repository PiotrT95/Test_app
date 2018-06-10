 //document.addEventListener("deviceready", onDeviceReady, false);
    var db = window.openDatabase("Test_Database14", "6.0", "Test DB5", 200000);
    var globalQrID;
    var globalDate;
 
        //function will be called when device ready
    function onContactsActivityReady(){
        db.transaction(populateContactsDB, errorContactsCB, successContactsCB);
    }
 
    //create table and insert some record
    function populateContactsDB(tx1) {
        tx1.executeSql('CREATE TABLE IF NOT EXISTS Contact (id INTEGER PRIMARY KEY AUTOINCREMENT, ContactName TEXT NOT NULL, ContactNumber TEXT NOT NULL, ContactMail TEXT NOT NULL, UNIQUE(ContactName))');
        
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Mega Taxi", "12 19625", "biuro@megataxi.pl")'); 
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("InfoKraków, Sukiennice", "12 3542716", "sukiennice@infokrakow.pl")');
        tx1.executeSql('INSERT INTO Contact(ContactName,ContactNumber, ContactMail) VALUES ("Centrum Informacji Turystycznej i Zakwaterowania", "12 4226091", "it@jordan.pl")');

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
        tx2.executeSql('CREATE TABLE IF NOT EXISTS Building (id INTEGER PRIMARY KEY AUTOINCREMENT, BuildingName TEXT NOT NULL, BuildingPhoto TEXT NOT NULL, BuildingLocalization TEXT NOT NULL, UNIQUE(BuildingName))');   
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Wawel", "<img id=theImg src=img/wawel.jpg />", "<img id=theImg src=img/wawelloc.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Smocza Jama", "<img id=theImg src=img/smoczajama.jpg />", "<img id=theImg src=img/jamaloc.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Kościół św. Apostołów Piotra i Pawła", "<img id=theImg src=img/kosciolpiotrpawel.jpg />", "<img id=theImg src=img/piotrpawel.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Rynek Główny", "<img id=theImg src=img/rynekglowny.jpg />", "<img id=theImg src=img/rynekloc.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Sukiennice", "<img id=theImg src=img/sukienice.jpg />", "<img id=theImg src=img/sukieniceloc.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Wieża Ratuszowa", "<img id=theImg src=img/wiezaratuszowa.jpg />", "<img id=theImg src=img/wiezaloc.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Kościół Mariacki", "<img id=theImg src=img/kosciolmariacki.jpg />", "<img id=theImg src=img/mariackiloc.jpg />",)'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Brama Floriańska", "<img id=theImg src=img/bramaflorianska.jpg />", "<img id=theImg src=img/bramaloc.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Planty", "<img id=theImg src=img/planty.jpg />", "<img id=theImg src=img/barbakanloc.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Teatr im. Juliusza Słowackiego", "<img id=theImg src=img/teatrslowackiego.jpg />", "<img id=theImg src=img/plantyloc.jpg />", )'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Okno Papieskie", "<img id=theImg src=img/placszczepanski.jpg />", "<img id=theImg src=img/placloc.jpg />")');
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Okno Papieskie", "<img id=theImg src=img/oknopapieskie.jpg />", "<img id=theImg src=img/oknoloc.jpg />")'); 
        tx2.executeSql('INSERT INTO Building(BuildingName,BuildingPhoto,BuildingLocalization) VALUES ("Universitet Jagieloński", "<img id=theImg src=img/uj.jpg />", "<img id=theImg src=img/ujloc.jpg />")'); 
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

        $.each(result2.rows,function(index){
            var row = result2.rows.item(index);

            $('#buildingName').append(row['BuildingName']);
            $('#buildingDesc').append(row['BuildingDesc']);
            $('#buildingPhoto').prepend(row['BuildingPhoto'])
            $('#buildingLocalization').prepend(row['BuildingLocalization'])

        });
                        
    }