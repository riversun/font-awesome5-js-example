import { dom, library} from '@fortawesome/fontawesome-svg-core';
import {faDog} from '@fortawesome/free-solid-svg-icons/faDog';
import {faCat} from '@fortawesome/free-solid-svg-icons/faCat';
import {faComments} from '@fortawesome/free-regular-svg-icons/faComments';
library.add(faDog,faComments,faCat);
dom.i2svg();
