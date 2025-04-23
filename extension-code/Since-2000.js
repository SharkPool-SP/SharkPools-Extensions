/**!
 * Since 2000
 * @author 0znzw (@link https://scratch.mit.edu/users/0znzw/)
 * @author ION (@link https://scratch.mit.edu/users/ionslayer/)
 * @version 1.4
 * @license MIT AND LGPL-3.0
 */
(function (Scratch) {
  const { BlockType, ArgumentType, Cast } = Scratch;
  if (!Scratch.translate) Scratch.translate = a => a;
  const extId = 'since2000';
  class extension {
    /**
     * @param {PerformanceMark} markerStart The marker that signifies the start timer.
     */
    constructor(markerStart) {
      this.markerStart = markerStart;
      this.markerStart.end = extension.markerEnd;
      this.showLegacy = false;
    }
    getInfo() {
      return {
        id: extId,
        name: Scratch.translate('Since 2000'),
        color1: '#15b9a4',
        color2: '#13a895',
        blocks: [
          ...(Scratch.vm ? [{
            blockType: BlockType.BUTTON,
            func: 'toggleLegacy',
            text: (this.showLegacy ? 'Hide legacy' : 'Show legacy'),
          }] : []),
          {
            opcode: 'Since2000', // All containing reporter via a menu.
            blockType: BlockType.REPORTER, text: Scratch.translate('[menu] since 2000'),
            arguments: { menu: { type: ArgumentType.STRING, menu: 'since2k' } },
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'microsecondsSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('microseconds since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'millisecondsSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('milliseconds since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'secondsSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('seconds since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'minutesSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('minutes since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'hoursSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('hours since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'daysSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('days since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'weeksSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('weeks since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'monthsSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('months since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'yearsSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('years since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'leapYearsSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('leap years since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'decadesSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('decades since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'centuriesSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('centuries since 2000'),
          },
          {
            hideFromPalette: !this.showLegacy,
            opcode: 'millenniumsSince2000', blockType: BlockType.REPORTER,
            text: Scratch.translate('millenniums since 2000'),
          },
        ],
        menus: {
          since2k: {
            acceptReporters: true,
            items: [
              {text: Scratch.translate('(1) microseconds'), value: 'microseconds'},
              {text: Scratch.translate('(2) milliseconds'), value: 'milliseconds'},
              {text: Scratch.translate('(3) seconds'), value: 'seconds'},
              {text: Scratch.translate('(4) minutes'), value: 'minutes'},
              {text: Scratch.translate('(5) hours'), value: 'hours'},
              {text: Scratch.translate('(6) days'), value: 'days'},
              {text: Scratch.translate('(7) weeks'), value: 'weeks'},
              {text: Scratch.translate('(8) months'), value: 'months'},
              {text: Scratch.translate('(9) years'), value: 'years'},
              {text: Scratch.translate('(10) leap years'), value: 'leap years'},
              {text: Scratch.translate('(11) decades'), value: 'decades'},
              {text: Scratch.translate('(12) centuries'), value: 'centuries'},
              {text: Scratch.translate('(13) millenniums'), value: 'millenniums'},
            ],
          },
        },
      };
    }
    toggleLegacy() {
      this.showLegacy = !this.showLegacy;
      Scratch.vm.extensionManager.refreshBlocks(extId);
    }
    static s2kMAGIC = 946684800000 /* Date.UTC(2000, 0, 1) */;
    static magicSeconds = (1000);
    static magicMinutes = (60 * this.magicSeconds);
    static magicHours = (60 * this.magicMinutes);
    static magicDays = (24 * this.magicHours);
    static magicWeeks = (7 * this.magicDays);
    static magicYears = (365.25 * this.magicDays);
    static magicMonths = (this.magicYears / 12);
    static magicLeapYears = (4 * this.magicYears);
    static magicDecades = (10 * this.magicYears);
    static magicCenturies = (100 * this.magicYears);
    static magicMillenniums = (1000 * this.magicYears);
    static markerStart = extId + '_performanceMarkStart';
    static markerEnd = extId + '_performanceMarkEnd';
    microsecondsSince2000() {
      performance.mark(extension.markerEnd, {
        detail: 'ending marker',
        startTime: performance.timeOrigin + performance.now(),
      });
      performance.measure(extId, extension.markerStart, extension.markerEnd);
      const difference = performance.getEntriesByName(extId)[0].duration;
      performance.clearMarks(extension.markerEnd);
      performance.clearMeasures(extId);
      return difference * 10000;
    }
    // Hardcoding the functionality is marginally faster
    millisecondsSince2000() { return (Date.now() - extension.s2kMAGIC); }
    secondsSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicSeconds; }
    minutesSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicMinutes; }
    hoursSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicHours; }
    daysSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicDays; }
    weeksSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicWeeks; }
    monthsSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicMonths; }
    yearsSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicYears; }
    leapYearsSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicLeapYears + 1; }
    decadesSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicDecades; }
    centuriesSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicCenturies; }
    millenniumsSince2000() { return (Date.now() - extension.s2kMAGIC) / extension.magicMillenniums; }
    /**
     * Convert's a translatable menu value to a index or a string.
     * @param {string|number} value Item in valid format.
     * @param {number} [count] Modulo value. this is optional.
     * @returns {string}
     */
    _asValue(value, count) {/**!@see https://surv-is-a-dev.github.io/static/0001tt.txt*/
      if (typeof value === 'number') return ((+value % (1+count || 1)) || 1).toString();
      value = Cast.toString(value).toLowerCase();
      if (value[0] !== '(') return value;
      const match = value.match(/^\([0-9]+\) ?/);
      if (match && match[0]) {
        const v = parseInt(match[0].trim().slice(1, -1));
        if (count) return ((v % (1+count || 1)) || 1).toString();
        return v.toString();
      }
      return value;
    }
    Since2000({ menu }) {
      switch (this._asValue(menu, 13)) {
        case '1': case 'microseconds': return this.microsecondsSince2000();
        case '2': case 'milliseconds': return this.millisecondsSince2000();
        case '3': case 'seconds': return this.secondsSince2000();
        case '4': case 'minutes': return this.minutesSince2000();
        case '5': case 'hours': return this.hoursSince2000();
        case '6': case 'days': return this.daysSince2000();
        case '7': case 'weeks': return this.weeksSince2000();
        case '8': case 'months': return this.monthsSince2000();
        case '9': case 'years': return this.yearsSince2000();
        case '10': case 'leap years': return this.leapYearsSince2000();
        case '11': case 'decades': return this.decadesSince2000();
        case '12': case 'centuries': return this.centuriesSince2000();
        case '13': case 'millenniums': return this.millenniumsSince2000();
        case '0': default: return -1;
      }
    }
  }
  const ext = new extension(performance.mark(extension.markerStart, {
    detail: 'starting marker',
    startTime: extension.s2kMAGIC,
  }));
  if (Scratch.extensions.unsandboxed) Scratch.vm.runtime[`cext_${extId}`] = ext;
  Scratch.extensions.register(ext);
})(Scratch);
