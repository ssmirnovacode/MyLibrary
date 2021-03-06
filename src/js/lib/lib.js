//this file will enrich the $ function with different secondary methods
import $ from './core';
import './modules/display';
import './modules/classes';
import './modules/actions';
import './modules/handlers';
import './modules/effects';
import './components/dropdown';
import './components/modal';
import './components/tab';
import './components/accordion';
import './components/carousel';
import './services/requests';

export default $; // the $ func will be now enriched with imported modules functionality