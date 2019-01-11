export class Calendar {

    public static readonly y2019 = [
        {
            date: '2018-12-31', events: [
                {time: '18:00', text: 'Св. Літургія в подяку Господу Богу за прожитий 2018 рік.'},
            ]
        },
        {
            date: '2019-01-01', events: [
                {time: '18:00', text: 'Св. Літургія за Божі ласки в Новому, вже 2019-му, році.'},
            ]
        },
        {
            date: '2019-01-02', events: [
                {time: '18:00', text: 'Св. Літургія за упокій бл.п. о. Мечислава, Марії і Марійки Кордубів.'},
            ]
        },
        {
            date: '2019-01-03', events: [
                {time: '18:00', text: 'Св. Літургія за упокій бл.п. Marcel-Bernard Marceau.'},
            ]
        },
        {
            date: '2019-01-04', events: [
                {time: '18:00', text: 'Св. Літургія  за упокій бл.п. Anna Chromiak.'},
            ]
        },
        {
            date: '2019-01-05', events: [
                {time: '16:00', text: 'Св. Літургія.'},
                {time: '17:00', text: 'Вечірня.'},
            ]
        },
        {
            date: '2019-01-06', events: [
                {time: '10:00', text: 'Літургія св. Івана Золотоустого.'},
                {time: '21:00', text: 'Велике Повечір’я із Литією.'},
            ]
        },
        {
            date: '2019-01-07', events: [
                {time: '10:00', text: 'Урочиста Літургія св. Василія Великого. Мирування.'},
                {time: '18:00', text: 'Свята Літургія'},
            ]
        },
        {
            date: '2019-01-08', events: [
                {time: '10:00', text: 'Св. Літургія.'},
                {time: '18:00', text: 'Св. Літургія за упокій бл.п. Стефанії (Гарун) Король і бл.п. Івана Омеляна Король. Жертвує дочка.'},
            ]
        },
        {
            date: '2019-01-09', events: [
                {time: '10:00', text: 'Св. Літургія.'},
                {time: '18:00', text: 'Св. Літургія за упокій бл.п. Мирона Мончака.'},
            ]
        },
        {
            date: '2019-01-10', events: [
                {time: '10:00', text: 'Св. Літургія.'},
                {time: '18:00', text: 'Св. Літургія за упокій бл.п. Петра Зендрана – 1-ша річниця.'},
            ]
        },
        {
            date: '2019-01-11', events: [
                {time: '10:00', text: 'Св. Літургія.'},
                {time: '18:00', text: 'Св. Літургія в наміренні Анн-Марі та інших приятелів. Офірує п. Б. Мончак.'},
            ]
        },
        {
            date: '2019-01-12', events: [
                {time: '10:00', text: 'Св. Літургія за упокій бл.п. Тараса Кушнірика.'},
                {time: '16:00', text: 'Вечірня.'},
                {time: '17:00', text: 'Св. Літургія за упокій бл.п. о. Івана й Дарії Гаврилюків.'},
            ]
        },
        {
            date: '2019-01-13', events: [
                {time: '10:00', text: 'Св. Літургія за парохіян.'},
            ]
        },
        {
            date: '2019-01-14', events: [
                {time: '10:00', text: 'Св. Літургія Василія Великого.'},
            ]
        },
        {
            date: '2019-01-18', events: [
                {time: '10:00', text: 'Вечірня з Літургією cв. В. Великого. Освячення  води.'},
            ]
        },
        {
            date: '2019-01-19', events: [
                {time: '10:00', text: 'Літургія св. Івана Золотоустого. Освячення  води.'},
            ]
        },
        {
            date: '2019-01-20', events: [
                {time: '10:00', text: 'Літургія св. Івана Золотоустого.'},
                {time: '11:00', text: 'Після Літургії - Різдвяний концерт з участю о. Василя Брони.'}
            ]
        }
    ];

    public static getDayOfWeek(date: string) {
        switch (new Date(Date.parse(date)).getDay()) {
            case 0:
                return 'Понеділок';
            case 1:
                return 'Вівторок';
            case 2:
                return 'Середа';
            case 3:
                return 'Четверг';
            case 4:
                return 'Пятниця';
            case 5:
                return 'Субота';
            case 6:
                return 'Неделя';
        }
    }
}
