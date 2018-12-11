export class Translation {
    constructor(public ua: string,
                public en: string,
                public fr: string) {
    }
}

export class Translations {
    menu = new Translation('Меню', 'Menu', 'Menu');
    main = new Translation('Головна', 'Main', 'Principale');
    calendar = new Translation('Календар', 'Calendar', 'Calendar');
    contact = new Translation('Контакти', 'Contacts', 'Nous joindre');
    events = new Translation('Події', 'Events', 'Events');
    bulletin = new Translation('Бюлетень', 'Bulletin', 'Bulletin');
    about = new Translation('Про нас', 'About us', 'à propos de nous');
    history = new Translation('Історія', 'History', 'Histoire');

    stmichael = new Translation('церква святого михаїла', 'St. Michael church', 'L’Église St-Michel');
    stmichaelfull = new Translation(
        'Уkрaїнська Греко-Католицька парофія Святого Архистратига Михаїла',
        'St. Michael the Archangel Ukrainian Catholic Church of Montréal',
        'L’Église catholique ukrainienne St-Michel Archange de Montréal');
    stmichaelwelcome = new Translation(
        'Церква святого Михаїла вітає Вас!',
        'The Church of St. Michael congratulates you!',
        'L’église de Saint-Michel vous félicite');
    ourphone = new Translation('Наш телефон:', 'Our phone:', 'Notre téléphone:');
    ouraddress = new Translation('Наша адреса:', 'Our address:', 'Notre adresse:');
    ourlocation = new Translation(
        'Ми знаходимося на перехресті вулиць: d’Iberville і Hochelaga не далеко від метро Frontenac, також до нас їде автобус № 94 sud.',
        'We are at the crossroads of the streets: d’Iberville and Hochelaga are not far from the Frontenac subway, we also have bus number 94 sud.',
        'Nous sommes au carrefour des rues: d’Iberville et Hochelaga ne sont pas loin du métro Frontenac, nous avons aussi le bus numéro 94 sud.'
    );
    direction = new Translation('Напрямок', 'Direction', 'Direction');
    viewlargermap = new Translation('Переглянути збільшену карту', 'View large map', 'Voir la grande carte');
    reviews = new Translation('відгуків', 'reviews', 'avis');
    address = new Translation(
        '2388 Rue d’Iberville, Montréal, QC H2K 3C6, Canada',
        '2388 Rue d’Iberville, Montréal, QC H2K 3C6, Canada',
        '2388 Rue d’Iberville, Montréal, QC H2K 3C6, Canada');
    phone = new Translation('+1 (514) 521-2234', '+1 (514) 521-2234', '+1 (514) 521-2234');
}
