"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/*
The MIT License (MIT)

Copyright (c) 2015 Bryan Hughes <bryan@theoreticalideations.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var request = _interopRequire(require("request"));

var states = {};

module.exports = PawelBot;

function PawelBot(options) {
  this._options = options || {};
}

PawelBot.prototype.connect = function (cb) {
  console.log("Connecting to remote Pawel Bot...");
  var tryRequest = (function tryRequest() {
    console.log(this._options.url + "/isReady");
    request({
      method: "get",
      json: true,
      url: this._options.url + "/isReady"
    }, function (error, response, body) {
      if (!error) {
        cb();
      } else {
        console.log("Could not connect to remote Pawel Bot, retrying...");
        setTimeout(tryRequest, 500);
      }
    });
  }).bind(this);
  tryRequest();
};

PawelBot.prototype.move = function move(x, y) {
  request({
    method: "post",
    json: true,
    url: this._options.url + "/update",
    body: {
      x: x,
      y: y
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaXZlcnMvcmVtb3ZlX2RyaXZlci9yZW1vdGVfZHJpdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3Qk8sT0FBTywyQkFBTSxTQUFTOztBQUU3QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDOztBQUUxQixTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUU7QUFDekIsTUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0NBQy9COztBQUVELFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsRUFBRSxFQUFFO0FBQ3hDLFNBQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztBQUNqRCxNQUFJLFVBQVUsR0FBRyxDQUFBLFNBQVMsVUFBVSxHQUFHO0FBQ3JDLFdBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUM7QUFDNUMsV0FBTyxDQUFDO0FBQ04sWUFBTSxFQUFFLEtBQUs7QUFDYixVQUFJLEVBQUUsSUFBSTtBQUNWLFNBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxVQUFVO0tBQ3BDLEVBQUUsVUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtBQUNsQyxVQUFJLENBQUMsS0FBSyxFQUFFO0FBQ1YsVUFBRSxFQUFFLENBQUM7T0FDTixNQUFNO0FBQ0wsZUFBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0FBQ2xFLGtCQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO09BQzdCO0tBQ0YsQ0FBQyxDQUFDO0dBQ0osQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNiLFlBQVUsRUFBRSxDQUFDO0NBQ2QsQ0FBQzs7QUFFRixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzVDLFNBQU8sQ0FBQztBQUNOLFVBQU0sRUFBRSxNQUFNO0FBQ2QsUUFBSSxFQUFFLElBQUk7QUFDVixPQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsU0FBUztBQUNsQyxRQUFJLEVBQUU7QUFDSixPQUFDLEVBQUUsQ0FBQztBQUNKLE9BQUMsRUFBRSxDQUFDO0tBQ0w7R0FDRixDQUFDLENBQUM7Q0FDSixDQUFDIiwiZmlsZSI6ImRyaXZlcnMvcmVtb3ZlX2RyaXZlci9yZW1vdGVfZHJpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTUgQnJ5YW4gSHVnaGVzIDxicnlhbkB0aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20+XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG5cbmltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xuXG5sZXQgc3RhdGVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUGF3ZWxCb3Q7XG5cbmZ1bmN0aW9uIFBhd2VsQm90KG9wdGlvbnMpIHtcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG59XG5cblBhd2VsQm90LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24oY2IpIHtcbiAgY29uc29sZS5sb2coJ0Nvbm5lY3RpbmcgdG8gcmVtb3RlIFBhd2VsIEJvdC4uLicpO1xuICBsZXQgdHJ5UmVxdWVzdCA9IGZ1bmN0aW9uIHRyeVJlcXVlc3QoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5fb3B0aW9ucy51cmwgKyAnL2lzUmVhZHknKTtcbiAgICByZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBqc29uOiB0cnVlLFxuICAgICAgdXJsOiB0aGlzLl9vcHRpb25zLnVybCArICcvaXNSZWFkeSdcbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnQ291bGQgbm90IGNvbm5lY3QgdG8gcmVtb3RlIFBhd2VsIEJvdCwgcmV0cnlpbmcuLi4nKTtcbiAgICAgICAgc2V0VGltZW91dCh0cnlSZXF1ZXN0LCA1MDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9LmJpbmQodGhpcyk7XG4gIHRyeVJlcXVlc3QoKTtcbn07XG5cblBhd2VsQm90LnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gbW92ZSh4LCB5KSB7XG4gIHJlcXVlc3Qoe1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGpzb246IHRydWUsXG4gICAgdXJsOiB0aGlzLl9vcHRpb25zLnVybCArICcvdXBkYXRlJyxcbiAgICBib2R5OiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH1cbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9