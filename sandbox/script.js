const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
    '583788700292-llbldi4vai86g3m7bqd4l5mjcsj13u10.apps.googleusercontent.com',
    '5oA6KnN_LbciptOTtxLgUz7L'
);

oAuth2Client.setCredentials({
    refresh_token: '1//040coniO10JTuCgYIARAAGAQSNwF-L9IrIFvoXxfis597Az_PGDBC8UgAmQw8nE-aaG2jh9PfI1LKhfzh8Bq5hlrJVSCuWZB2uJk'
});

const calendar = google.calendar({
    version: 'v3',
    auth: oAuth2Client
});

const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDate() + 1);

const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDate() + 1);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 30);

const event = {
    summary: 'AMQ Match',
    description: 'Anime Music Quiz game w/friends',
    start: {
        dateTime: eventStartTime,
        timeZone: 'America/Sao_Paulo'
    },
    end: {
        dateTime: eventEndTime,
        timeZone: 'America/Sao_Paulo'
    },
    colorId: 1,
};

calendar.freebusy.query({
    resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
        timeZone: 'America/Sao_Paulo',
        items: [{
            id: 'primary'
        }]
    }
}, (err, res) => {
    if (err) {
        return console.log('Free busy query error: ', err);
    }

    const eventsArr = res.data.calendars.primary.busy;
    
    if (eventsArr.length === 0) {
        return calendar.events.insert({
            calendarId: 'primary', 
            resource: event
        }, (err) => {
            if (err) {
                return console.log('Calendar event creation error: ', err);
            }
            return console.log('Calendar event created');
        });
    }

    return console.log('Sorry, I\'m busy');
});