// Generated by CoffeeScript 1.10.0
(function() {
  describe('leafletHelpers', function() {
    beforeEach(function() {
      module('leaflet-directive');
      return inject(function(_$compile_, _$rootScope_, _leafletData_, _leafletHelpers_) {
        this.$compile = _$compile_;
        this.$rootScope = _$rootScope_;
        this.leafletData = _leafletData_;
        return this.subject = _leafletHelpers_;
      });
    });

    describe('isTruthy', function() {
      beforeEach(function() {
        return this.subject = this.subject.isTruthy;
      });

      describe('is true', function() {
        it('\'true\'', function() {
          return expect(this.subject('true')).toBeTruthy();
        });

        return it('true', function() {
          return expect(this.subject(true)).toBeTruthy();
        });
      });

      return describe('is false', function() {
        it('\'false\'', function() {
          return expect(this.subject('false')).toBeFalsy();
        });

        it('false', function() {
          return expect(this.subject(false)).toBeFalsy();
        });

        return it('undefined', function() {
          return expect(this.subject(void 0)).toBeFalsy();
        });
      });
    });

    describe('defaultTo', function() {
      beforeEach(function() {
        return this.subject = this.subject.defaultTo;
      });

      it('keeps value', function() {
        it('false', function() {
          return expect(this.subject(false, true)).toBeTruthy();
        });

        it('string', function() {
          return expect(this.subject('hi', 'nope')).toBe('hi');
        });

        return it('{}', function() {
          return expect(this.subject({}, null)).toBe({});
        });
      });

      return describe('gets default', function() {
        it('undefined', function() {
          return expect(this.subject(void 0, '')).toBe('');
        });

        return it('null', function() {
          return expect(this.subject(null, '')).toBe('');
        });
      });
    });

    return describe('Object Helpers', function() {
      return it('should correctly fetch object values using dot-notation', function() {
        var object;
        object = {
          foo: {
            sea: 'hawks',
          },
        };
        expect(this.subject.getObjectValue(object, 'foo.sea')).toEqual('hawks');
        expect(this.subject.getObjectValue(object, 'foo.sea.birds')).toEqual(void 0);
        return expect(this.subject.getObjectValue(object, 'boo.hoo')).toEqual(void 0);
      });
    });
  });

}).call(this);
