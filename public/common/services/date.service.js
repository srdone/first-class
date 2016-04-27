import angular from 'angular';

var app = angular.module('firstClass');

app.factory('dateService', function() {

  // Source for convert, compare, inRange functions: http://stackoverflow.com/questions/497790
  var dateUtil = {
    convert: function(d) {
        // Converts the date in d to a date-object. The input can be:
        //   a date object: returned without modification
        //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
        //   a number     : Interpreted as number of milliseconds
        //                  since 1 Jan 1970 (a timestamp) 
        //   a string     : Any format supported by the javascript engine, like
        //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
        //  an object     : Interpreted as an object with year, month and date
        //                  attributes.  **NOTE** month is 0-11.
        return (
            d.constructor === Date ? d :
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
            typeof d === 'object' ? new Date(d.year,d.month,d.date) :
            NaN
        );
    },
    compare: function(a,b) {
        // Compare two dates (could be of any type supported by the convert
        // function above) and returns:
        //  -1 : if a < b
        //   0 : if a = b
        //   1 : if a > b
        // NaN : if a or b is an illegal date
        // NOTE: The code inside isFinite does an assignment (=).
        return (
            isFinite(a=this.convert(a).valueOf()) &&
            isFinite(b=this.convert(b).valueOf()) ?
            (a>b)-(a<b) :
            NaN
        );
    },
    inRange: function(d,start,end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
       return (
            isFinite(d=this.convert(d).valueOf()) &&
            isFinite(start=this.convert(start).valueOf()) &&
            isFinite(end=this.convert(end).valueOf()) ?
            start <= d && d <= end :
            NaN
        );
    },
    diff: function(a, b) {
      // Counts the number of consecutive nights between two dates
      // Allows the dates to be entered in any order - gives positive all the time
      var dDiff = (this.convert(a) - this.convert(b)) / (1000 * 60 * 60 * 24);
      var nights = Math.abs(Math.floor(dDiff));
      return nights;
    }
  };
// This may no longer be necessary --- commenting out for now
//     totalMonths: function(arr) {
//       console.log(arr);
//       arr.sort(function (a, b) {
//         if (this.compare(a.start, b.start) === -1 ||
//             (this.compare(a.start, b.start) === 0 &&
//             this.compare(a.end, b.end) === -1)) {
//           return -1;     
//         } else if ((this.compare(a.start, b.start) === 0 &&
//                     this.compare(a.end, b.end) === 1) ||
//                     this.compare(a.start, b.start) === 1)  {
//           return 1;
//         } else {
//           return 0;
//         }
//       });
//       var total = arr.reduce(function (prior, current) {
//         if (prior.firstDate >= current.start) {
//           prior.secondDate = current.end;
//         } else {
//           prior.total += (prior.secondDate - prior.firstDate);
//           prior.firstDate = current.start;
//           prior.secondDate = current.end;
//         }
//         return prior;
//       }, {firstDate: arr[0].start, secondDate: arr[0].end, total: 0});
//       return total.total;
//     }
//   };
  
  return dateUtil;
});