aclass GarbageUtilities {
    getInfo() {
        return {
            id: 'lbgpixelutilities',
            name: 'Pixel Utilities',
            color1: "#0085ff",
            color2: "#0069cb",
            color3: "#004d94",
            blocks: [
                {
                    opcode: 'percentChance',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[percent] chance of returning true',
                    arguments: {
                        percent: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50,
                        },
                    },
                },
                {
                    opcode: 'percentOfNumber',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[percent]% of [number]',
                    arguments: {
                        percent: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50,
                        },
                        number: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                    },
                },
                {
                    opcode: 'reverseString',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'reverse [text]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'roltycore 2',
                        },
                    },
                },
                {
                    opcode: 'getPercentageOfSteps',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'from [stepOrigin], get [percentageInput]% of the steps to [stepLocation]',
                    arguments: {
                        stepOrigin: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        percentageInput: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 50,
                        },
                        stepLocation: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                    },
                },
            ],
        };
    }

    percentChance(args) {
        return Math.random() < args.percent / 100;
    }
    percentOfNumber(args) {
        return (args.percent / 100) * args.number;
    }
    reverseString(args) {
        return args.text.split('').reverse().join('');
    }
    getPercentageOfSteps(args) {
        const origin = args.stepOrigin;
        const percentage = args.percentageInput / 100;
        const distance = args.stepLocation - origin;
        return distance * percentage;
    }
}

Scratch.extensions.register(new GarbageUtilities());
