var EmployeeService = function () {

    this.initialize = function() {
        var deferred = $.Deferred();
        // Store sample data in Local Storage
        // window.localStorage.setItem("employees", JSON.stringify(
        //     [
        //         {"id": 1, "firstName": "James", "lastName": "King", "managerId": 0, "managerName": "", "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
        //         {"id": 2, "firstName": "Julie", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
        //         {"id": 3, "firstName": "Eugene", "lastName": "Lee", "managerId": 1, "managerName": "James King", "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
        //         {"id": 4, "firstName": "John", "lastName": "Williams", "managerId": 1, "managerName": "James King", "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
        //         {"id": 5, "firstName": "Ray", "lastName": "Moore", "managerId": 1, "managerName": "James King", "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
        //         {"id": 6, "firstName": "Paul", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
        //         {"id": 7, "firstName": "Paula", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
        //         {"id": 8, "firstName": "Lisa", "lastName": "Wong", "managerId": 2, "managerName": "Julie Taylor", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
        //         {"id": 9, "firstName": "Gary", "lastName": "Donovan", "managerId": 2, "managerName": "Julie Taylor", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
        //         {"id": 10, "firstName": "Kathleen", "lastName": "Byrne", "managerId": 5, "managerName": "Ray Moore", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
        //         {"id": 11, "firstName": "Amy", "lastName": "Jones", "managerId": 5, "managerName": "Ray Moore", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
        //         {"id": 12, "firstName": "Steven", "lastName": "Wells", "managerId": 4, "managerName": "John Williams", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
        //     ]
        // ));

        window.localStorage.setItem("employees", JSON.stringify(
            [
                {"id": 1, "Name": "Сад Смольного Собора", "address": "Смольный проезд, 1Г", "category": "Парки", "comment": "Тихое спокойное место для прогулок", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "smolnuy_park.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "website": "http://www.rusmuseum.ru/museum/complex/let_sad/", 'gallery': ["smolnuy_park.jpg", "smoln-1.jpg", "smoln-2.jpeg"]},

                {"id": 2, "Name": "6-я линия Васильевского острова", "address": "6-я и 7-я линии Васильевского острова", "category": "Пешеходные улицы", "comment": "Оживленная зеленая длинная улочка со множеством магазинов и кафешек", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "vas_ul.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "website": "http://www.rusmuseum.ru/museum/complex/let_sad/", 'gallery': ["vas-1.jpg", "vas-2.jpg", "vas_ul.jpg"]},
                {"id": 3, "Name": "Кафе Тепло", "address": "Bolshaya Morskaya ul., 45, St Petersburg", "category": "Кафе", "comment": "Уютное кафе с интересным интерьером, вкусной домашней едой и мягкими зонами", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "teplo.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "website": "http://www.rusmuseum.ru/museum/complex/let_sad/", 'gallery': ["teplo.jpg", "mindal-1.jpg", "mindal-2.jpeg"]},
                {"id": 4, "Name": "Колонада Исакиевского Собора", "address": "St Isaac's Square, 4, St Petersburg, 190000", "category": "Соборы", "comment": "Хороший вид на весь город", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "isak.jpeg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "website": "http://www.rusmuseum.ru/museum/complex/let_sad/", "gallery": ["isak.jpeg", "isak-1.jpg", "isak-2.jpg"]},
                {"id": 5, "Name": "Эрмитаж", "address": "Palace Square, 2, Санкт-Петербург, 190000", "category": "Музеи", "comment": "Множество известных произведений искусства в одном месте", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "hermitage.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "gallery": ["hermitage.jpg", "herm-1.jpg", "herm-2.jpg"]},
                {"id": 6, "Name": "Ресторан Миндаль", "address": "Смольный проезд, 1Г", "category": "Рестораны", "comment": "Ресторан с живой музыкой, отличным обслуживанием и вкусной едой", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "minfdal.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
                {"id": 7, "Name": "Летний Сад", "address": "Kutuzov embankment, 2, St Petersburg", "category": "Парки", "comment": "Сад со скульптуроами, зелеными арками, хорошее место для отдыха", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "letnuy.jpeg", "twitterId": "@fakejking", "blog": "http://coenraets.org",  "gallery": ["letn-1.jpeg", "letn-2.jpg", "letnuy.jpeg"]},
                 {"id": 8, "Name": "Сад Смольного Собора", "address": "Смольный проезд, 1Г", "category": "Парки", "comment": "Тихое спокойное место для прогулок", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "smolnuy_park.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "website": "http://www.rusmuseum.ru/museum/complex/let_sad/", 'gallery': ["smolnuy_park.jpg", "smoln-1.jpg", "smoln-2.jpeg"]},
                {"id": 9, "Name": "6-я линия Васильевского острова", "address": "6-я и 7-я линии Васильевского острова", "category": "Пешеходные улицы", "comment": "Оживленная зеленая длинная улочка со множеством магазинов и кафешек", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "vas_ul.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "website": "http://www.rusmuseum.ru/museum/complex/let_sad/", 'gallery': ["vas-1.jpg", "vas-2.jpg", "vas_ul.jpg"]},
                {"id": 10, "Name": "Кафе Тепло", "address": "Bolshaya Morskaya ul., 45, St Petersburg", "category": "Кафе", "comment": "Уютное кафе с интересным интерьером, вкусной домашней едой и мягкими зонами", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "teplo.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "website": "http://www.rusmuseum.ru/museum/complex/let_sad/", 'gallery': ["teplo.jpg", "mindal-1.jpg", "mindal-2.jpeg"]},
                {"id": 11, "Name": "Колонада Исакиевского Собора", "address": "St Isaac's Square, 4, St Petersburg, 190000", "category": "Соборы", "comment": "Хороший вид на весь город", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "isak.jpeg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "website": "http://www.rusmuseum.ru/museum/complex/let_sad/", "gallery": ["isak.jpeg", "isak-1.jpg", "isak-2.jpg"]},
                {"id": 12, "Name": "Эрмитаж", "address": "Palace Square, 2, Санкт-Петербург, 190000", "category": "Музеи", "comment": "Множество известных произведений искусства в одном месте", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "hermitage.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org", "gallery": ["hermitage.jpg", "herm-1.jpg", "herm-2.jpg"]},
                {"id": 13, "Name": "Ресторан Миндаль", "address": "Смольный проезд, 1Г", "category": "Рестораны", "comment": "Ресторан с живой музыкой, отличным обслуживанием и вкусной едой", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "minfdal.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
                {"id": 14, "Name": "Летний Сад", "address": "Kutuzov embankment, 2, St Petersburg", "category": "Парки", "comment": "Сад со скульптуроами, зелеными арками, хорошее место для отдыха", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "letnuy.jpeg", "twitterId": "@fakejking", "blog": "http://coenraets.org",  "gallery": ["letn-1.jpeg", "letn-2.jpg", "letnuy.jpeg"]},
            ]
        ));
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function (id) {

        var deferred = $.Deferred(),
            employees = JSON.parse(window.localStorage.getItem("employees")),
            employee = null,
            l = employees.length;

        for (var i = 0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }

        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function (searchKey) {
        var deferred = $.Deferred(),
            employees = JSON.parse(window.localStorage.getItem("employees")),
            results = employees.filter(function (element) {
                var fullName = element.Name;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
        deferred.resolve(results);
        return deferred.promise();
    }

}