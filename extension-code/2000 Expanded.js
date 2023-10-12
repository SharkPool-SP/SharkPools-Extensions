//Made by ION, Based on improving scratches days since 2000 block.
class Since2000 {
    constructor() {}
  
    getInfo() {
      return {
        id: 'since2000',
        name: '_ Since 2000',
        color1: '#15b9a4',
        color2: '#0f80dd',
        blocks: [
          {
            opcode: 'millisecondsSince2000',
            blockType: 'reporter',
            text: 'milliseconds since 2000',
          },
          {
            opcode: 'microsecondsSince2000',
            blockType: 'reporter',
            text: 'microseconds since 2000',
          },
          {
            opcode: 'secondsSince2000',
            blockType: 'reporter',
            text: 'seconds since 2000',
          },
          {
            opcode: 'minutesSince2000',
            blockType: 'reporter',
            text: 'minutes since 2000',
          },
          {
            opcode: 'hoursSince2000',
            blockType: 'reporter',
            text: 'hours since 2000',
          },
          {
            opcode: 'daysSince2000',
            blockType: 'reporter',
            text: 'days since 2000',
          },
          {
            opcode: 'weeksSince2000',
            blockType: 'reporter',
            text: 'weeks since 2000',
          },
          {
            opcode: 'monthsSince2000',
            blockType: 'reporter',
            text: 'months since 2000',
          },
          {
            opcode: 'yearsSince2000',
            blockType: 'reporter',
            text: 'years since 2000',
          },
          {
            opcode: 'decadesSince2000',
            blockType: 'reporter',
            text: 'decades since 2000',
          },
          {
            opcode: 'centuriesSince2000',
            blockType: 'reporter',
            text: 'centuries since 2000',
          },
          {
            opcode: 'millenniumsSince2000',
            blockType: 'reporter',
            text: 'millenniums since 2000',
          },
        ],
      };
    }
  
    millisecondsSince2000() {
      const now = new Date();
      const since2000 = now - new Date('2000-01-01');
      return since2000;
    }
  
    microsecondsSince2000() {
      return this.millisecondsSince2000() * 1000;
    }
  
    secondsSince2000() {
      return Math.floor(this.millisecondsSince2000() / 1000);
    }
  
    minutesSince2000() {
      return Math.floor(this.secondsSince2000() / 60);
    }
  
    hoursSince2000() {
      return Math.floor(this.minutesSince2000() / 60);
    }
  
    daysSince2000() {
      const now = new Date();
      const startDate = new Date('2000-01-01');
      const days = (now - startDate) / (1000 * 60 * 60 * 24);
      return Math.floor(days);
    }
  
    weeksSince2000() {
      return Math.floor(this.daysSince2000() / 7);
    }
  
    monthsSince2000() {
      const now = new Date();
      const startDate = new Date('2000-01-01');
      let months = 0;
  
      while (startDate < now) {
        months++;
        startDate.setMonth(startDate.getMonth() + 1);
      }
  
      return months - 1;
    }
  
    yearsSince2000() {
      return Math.floor(this.monthsSince2000() / 12);
    }
  
    decadesSince2000() {
      return Math.floor(this.yearsSince2000() / 10);
    }
  
    centuriesSince2000() {
      return Math.floor(this.yearsSince2000() / 100);
    }
  
    millenniumsSince2000() {
      return Math.floor(this.yearsSince2000() / 1000);
    }
  }
  
  Scratch.extensions.register(new Since2000());