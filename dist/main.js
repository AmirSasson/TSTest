/**
 * Tester
 */
var Tester = (function () {
    function Tester() {
    }
    Tester.compareStr = function (a, b) {
        console.log("Comparing a:" + a + " and b:" + b);
        var minLength = Math.min(b.length, a.length);
        for (var i = 0; i < minLength; i++) {
            var dist = a.charAt(i).toLowerCase().charCodeAt(0) - b.charAt(i).toLowerCase().charCodeAt(0);
            if (dist != 0) {
                return dist;
            }
        }
        return a.length - b.length;
    };
    Tester.checkParentesys = function (txt) {
        console.log("check str : " + txt);
        var stack = [];
        var cur = txt.charAt(0);
        for (var index = 0; index < txt.length; index++) {
            if (txt.charAt(index) == "(") {
                stack.push("(");
            }
            else if (txt.charAt(index) == ")") {
                var open_1 = stack.pop();
                if (open_1 != "(") {
                    return false;
                }
            }
        }
        return stack.length == 0;
    };
    return Tester;
}());
var t = Tester.compareStr("", "AA");
var res = Tester.checkParentesys(")");
console.log(t);
//# sourceMappingURL=main.js.map