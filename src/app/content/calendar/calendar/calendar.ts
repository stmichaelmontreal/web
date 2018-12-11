export class Calendar {

    public static readonly y2018 = [
        {
            date: '2018-11-12', events: [
                {time: '17:00', text: 'Св. Літургія за Україну.'},
            ]
        },
        {
            date: '2018-11-13', events: [
                {time: '17:00', text: 'Св. Літургія в наміренні Марселя, Шарлотти й Матвія.'},
            ]
        },
        {
            date: '2018-11-14', events: [
                {time: '17:00', text: 'Св. Літургія на всяке прошення.'},
            ]
        },
        {
            date: '2018-11-15', events: [
                {time: '17:00', text: 'Св. Літургія в наміренні жертводавців.'},
            ]
        },
        {
            date: '2018-11-16', events: [
                {time: '17:00', text: 'Св. Літургія в наміренні Юрія.'},
            ]
        },
        {
            date: '2018-11-17', events: [
                {time: '16:00', text: 'Св. Літургія.'},
                {time: '17:00', text: 'Вечірня.'},
            ]
        },
        {
            date: '2018-11-18', events: [
                {time: '10:00', text: 'Св. Літургія за парохіян. Мирування.'},
                {time: '12:00', text: ' ХРАМОВЕ СВЯТО'},
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
