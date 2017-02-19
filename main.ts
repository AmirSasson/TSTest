


/**
 * Tester
 */
class Tester { 

    static compareStr(a: string, b: string): number {        
        console.log(`Comparing a:${a} and b:${b}`);
        let minLength = Math.min(b.length, a.length);
        for (var i = 0; i < minLength; i++) {
            let dist = a.charAt(i).toLowerCase().charCodeAt(0) - b.charAt(i).toLowerCase().charCodeAt(0);
            if (dist != 0) {
                return dist;
            }
        }
        return a.length - b.length;

    }
    static checkParentesys(txt: string) {
        console.log(`check str : ${txt}`);
        let stack = [];
        let cur = txt.charAt(0);
        for (var index = 0; index < txt.length; index++) {
            if (txt.charAt(index) == "(") {
                stack.push("(");
            }
            else if (txt.charAt(index) == ")") {
                let open = stack.pop();
                if (open != "(") {
                    return false;
                }
            }
 
        } 
        return stack.length == 0;

    }
}

var t = Tester.compareStr("", "AA");
var res = Tester.checkParentesys(")");
console.log(t); 



