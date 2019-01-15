import {config, dom, library} from '@fortawesome/fontawesome-svg-core';
import {faDog, faCat} from '@fortawesome/free-solid-svg-icons';
import {faComments} from '@fortawesome/free-regular-svg-icons';

config.showMissingIcons = false;

//Add whole set of solid icons and regular icons as fas/far.
library.add(faDog,faComments,faCat);

//Automatically find any <i> tags in the page and replace those with <svg> elements when calling #i2svg
dom.i2svg();
