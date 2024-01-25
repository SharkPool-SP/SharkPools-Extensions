//made by ionslayer
(function (Scratch) {
    'use strict';

    class TimezoneExtension {
        getInfo() {
            return {
                id: 'timezones',
                name: 'Timezones',
                color1: '#e7900d',
                blocks: [
                    {
                        opcode: 'getCurrentTime',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'current time in timezone [TIMEZONE]',
                        arguments: {
                            TIMEZONE: {
                                type: Scratch.ArgumentType.DROPDOWN,
                                menu: 'timezones',
                                defaultValue: 'GMT',
                            },
                        },
                    },
                    {
                        opcode: 'convertTime',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'convert [TIME] in timezone [FROM_TIMEZONE] to timezone [TO_TIMEZONE]',
                        arguments: {
                            TIME: { type: Scratch.ArgumentType.STRING, defaultValue: '00:00' },
                            FROM_TIMEZONE: {
                                type: Scratch.ArgumentType.DROPDOWN,
                                menu: 'timezones',
                                defaultValue: 'GMT',
                            },
                            TO_TIMEZONE: {
                                type: Scratch.ArgumentType.DROPDOWN,
                                menu: 'timezones',
                                defaultValue: 'GMT',
                            },
                        },
                    },
                ],
                menus: {
                    timezones: this.getTimezoneMenu(),
                },
            };
        }

        getTimezoneMenu() {
            const timezones = [
                { text: 'GMT', value: 'GMT' },
                { text: 'EST', value: 'America/New_York' },
                { text: 'PST', value: 'America/Los_Angeles' },
                { text: 'CST', value: 'America/Chicago' },
                { text: 'JST', value: 'Asia/Tokyo' },
                { text: 'IST', value: 'Asia/Kolkata' },
                { text: 'CET', value: 'Europe/Paris' },
                { text: 'UTC', value: 'UTC' },
                { text: 'AEDT', value: 'Australia/Sydney' },
                { text: 'NZST', value: 'Pacific/Auckland' },
                { text: 'AST', value: 'America/Halifax' },
                { text: 'BRST', value: 'America/Sao_Paulo' },
                { text: 'CAT', value: 'Africa/Harare' },
                { text: 'EET', value: 'Europe/Athens' },
                { text: 'HKT', value: 'Asia/Hong_Kong' },
                { text: 'MST', value: 'America/Denver' },
                { text: 'NST', value: 'Pacific/Norfolk' },
                { text: 'SAST', value: 'Africa/Johannesburg' },
                { text: 'WET', value: 'Europe/Lisbon' },
                { text: 'AKST', value: 'America/Anchorage' },
                // Add more unique timezones here...
                { text: 'MSK', value: 'Europe/Moscow' },
                { text: 'PKT', value: 'Asia/Karachi' },
                { text: 'WAT', value: 'Africa/Lagos' },
                { text: 'AEST', value: 'Australia/Melbourne' },
                { text: 'NST', value: 'Asia/Colombo' },
            ];

            return timezones;
        }

        getCurrentTime(args) {
            const timezone = args.TIMEZONE;
            const currentTime = this.getCurrentTimeInTimezone(timezone);
            return currentTime;
        }

        convertTime(args) {
            const fromTimezone = args.FROM_TIMEZONE;
            const toTimezone = args.TO_TIMEZONE;
            const originalTime = args.TIME;

            const originalDateTime = new Date();
            const [hours, minutes] = originalTime.split(':');
            originalDateTime.setHours(parseInt(hours, 10), parseInt(minutes, 10));

            const options = { timeZone: fromTimezone, hour12: false };
            const fromTime = originalDateTime.toLocaleString('en-US', { ...options, hour: 'numeric', minute: 'numeric' });

            options.timeZone = toTimezone;
            const toTime = originalDateTime.toLocaleString('en-US', { ...options, hour: 'numeric', minute: 'numeric' });

            return toTime;
        }

        getCurrentTimeInTimezone(timezone) {
            const options = { timeZone: timezone, hour12: false };
            const currentDateTime = new Date();
            const hours = currentDateTime.toLocaleString('en-US', { ...options, hour: 'numeric' });
            const minutes = currentDateTime.toLocaleString('en-US', { ...options, minute: 'numeric' });

            return `${hours}:${minutes}`;
        }
    }

    Scratch.extensions.register(new TimezoneExtension());

})(Scratch);