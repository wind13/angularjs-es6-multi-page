/* Jest setup file to bootstrap tests */
import * as R from "ramda";
import "angular";
import "angular-mocks";
import  * as rxjs from "rxjs";

window.R = R;
window.angular = angular;
window.rxjs = rxjs;