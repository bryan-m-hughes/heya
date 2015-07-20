"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var types = Object.freeze({
  CONTROLLER: "CONTROLLER",
  DRIVER: "DRIVER",
  CONTROLLER_FILTER: "CONTROLLER_FILTER",
  INTERMEDIATE_FILTER: "INTERMEDIATE_FILTER",
  DRIVER_FILTER: "DRIVER_FILTER",
  DIGITAL: "DIGITAL",
  ANALOG: "ANALOG"
});

exports.types = types;
var inputTypes = Object.freeze({
  DIGITAL_2D_DIRECTION: "DIGITAL_2D_DIRECTION"
});

exports.inputTypes = inputTypes;
var outputTypes = Object.freeze({
  ANALOG_2D_DIFFERENTIAL: "ANALOG_2D_DIFFERENTIAL"
});

exports.outputTypes = outputTypes;
var directions = Object.freeze({
  UP: "UP",
  UPRIGHT: "UPRIGHT",
  RIGHT: "RIGHT",
  DOWNRIGHT: "DOWNRIGHT",
  DOWN: "DOWN",
  DOWNLEFT: "DOWNLEFT",
  LEFT: "LEFT",
  UPLEFT: "UPLEFT"
});
exports.directions = directions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCTyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2pDLFlBQVUsRUFBRSxZQUFZO0FBQ3hCLFFBQU0sRUFBRSxRQUFRO0FBQ2hCLG1CQUFpQixFQUFFLG1CQUFtQjtBQUN0QyxxQkFBbUIsRUFBRSxxQkFBcUI7QUFDMUMsZUFBYSxFQUFFLGVBQWU7QUFDOUIsU0FBTyxFQUFFLFNBQVM7QUFDbEIsUUFBTSxFQUFFLFFBQVE7Q0FDakIsQ0FBQyxDQUFDOztRQVJVLEtBQUssR0FBTCxLQUFLO0FBVVgsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUN0QyxzQkFBb0IsRUFBRSxzQkFBc0I7Q0FDN0MsQ0FBQyxDQUFDOztRQUZVLFVBQVUsR0FBVixVQUFVO0FBSWhCLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDdkMsd0JBQXNCLEVBQUUsd0JBQXdCO0NBQ2pELENBQUMsQ0FBQzs7UUFGVSxXQUFXLEdBQVgsV0FBVztBQUlqQixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3RDLElBQUUsRUFBRSxJQUFJO0FBQ1IsU0FBTyxFQUFFLFNBQVM7QUFDbEIsT0FBSyxFQUFFLE9BQU87QUFDZCxXQUFTLEVBQUUsV0FBVztBQUN0QixNQUFJLEVBQUUsTUFBTTtBQUNaLFVBQVEsRUFBRSxVQUFVO0FBQ3BCLE1BQUksRUFBRSxNQUFNO0FBQ1osUUFBTSxFQUFFLFFBQVE7Q0FDakIsQ0FBQyxDQUFDO1FBVFUsVUFBVSxHQUFWLFVBQVUiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5Db3B5cmlnaHQgKGMpIDIwMTUgQnJ5YW4gSHVnaGVzIDxicnlhbkB0aGVvcmV0aWNhbGlkZWF0aW9ucy5jb20+XG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cbiovXG5cbmV4cG9ydCBjb25zdCB0eXBlcyA9IE9iamVjdC5mcmVlemUoe1xuICBDT05UUk9MTEVSOiAnQ09OVFJPTExFUicsXG4gIERSSVZFUjogJ0RSSVZFUicsXG4gIENPTlRST0xMRVJfRklMVEVSOiAnQ09OVFJPTExFUl9GSUxURVInLFxuICBJTlRFUk1FRElBVEVfRklMVEVSOiAnSU5URVJNRURJQVRFX0ZJTFRFUicsXG4gIERSSVZFUl9GSUxURVI6ICdEUklWRVJfRklMVEVSJyxcbiAgRElHSVRBTDogJ0RJR0lUQUwnLFxuICBBTkFMT0c6ICdBTkFMT0cnXG59KTtcblxuZXhwb3J0IGNvbnN0IGlucHV0VHlwZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgRElHSVRBTF8yRF9ESVJFQ1RJT046ICdESUdJVEFMXzJEX0RJUkVDVElPTidcbn0pO1xuXG5leHBvcnQgY29uc3Qgb3V0cHV0VHlwZXMgPSBPYmplY3QuZnJlZXplKHtcbiAgQU5BTE9HXzJEX0RJRkZFUkVOVElBTDogJ0FOQUxPR18yRF9ESUZGRVJFTlRJQUwnXG59KTtcblxuZXhwb3J0IGNvbnN0IGRpcmVjdGlvbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgVVA6ICdVUCcsXG4gIFVQUklHSFQ6ICdVUFJJR0hUJyxcbiAgUklHSFQ6ICdSSUdIVCcsXG4gIERPV05SSUdIVDogJ0RPV05SSUdIVCcsXG4gIERPV046ICdET1dOJyxcbiAgRE9XTkxFRlQ6ICdET1dOTEVGVCcsXG4gIExFRlQ6ICdMRUZUJyxcbiAgVVBMRUZUOiAnVVBMRUZUJ1xufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=