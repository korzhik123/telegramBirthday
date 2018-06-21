const TelegramBot = require('node-telegram-bot-api');
var schedule = require('node-schedule');

const token = '564178328:AAFuVbWjQc59YwIbe4JQBw0ySgONeSPW7mU';
const bot = new TelegramBot(token, {polling: true});

const birthday = [
    {name: 'Мади', bday: new Date('June 22, 1995')},
    {name: 'Дарика', bday: new Date('June 21, 1996')},
    {name: 'Мираса', bday: new Date('June 23, 1995')},
    {name: 'Адиля', bday: new Date('August 21, 1992')},
    {name: 'Арай', bday: new Date('October 3, 1995')},
    {name: 'Нурикось', bday: new Date('October 12, 1995')},
    {name: 'Зарины', bday: new Date('November 4, 1995')},
    {name: 'Рустема', bday: new Date('November 23, 1995')},
    {name: 'Елдана', bday: new Date('December 13, 1995')},
    {name: 'Нолика', bday: new Date('December 16, 1995')},
    {name: 'Мусы', bday: new Date('February 12, 1996')},
    {name: 'Коржика', bday: new Date('May 9, 1996')}
];

var j = schedule.scheduleJob('30 17 * * *', function(){
    checkBirthday();
});

function checkBirthday(){
    var datetime = new Date();

    birthday.forEach((person) => {
        if(person.bday.getMonth() === datetime.getMonth() && person.bday.getDate() === datetime.getDate()) {
            bot.sendMessage(369098323, `День рождения у ${person.name}, исполнилось ${datetime.getFullYear() - person.bday.getFullYear()}!`);
        }
    });
}

