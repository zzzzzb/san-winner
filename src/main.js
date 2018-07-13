import san from 'san';

import Hello from './components/Hello.san'

import {router} from 'san-router'

router.add({rule: '/', Component: Hello, target: '#app'});

// start
router.start();
