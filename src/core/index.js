import core from './core';
import dom from './dom';
import domRange from './domrange';
import wrappedRange from './wrappedrange';
import wrappedSelection from './wrappedselection';

dom(core);
domRange(core);
wrappedRange(core);
wrappedSelection(core);

export default core;
