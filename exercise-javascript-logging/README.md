# Javascript Logging Exercise

During the big rewrite of the Artisanal Mayonnaise website, [tastymayo.yum](http://tastymayo.yum), you realize there are many different front end components. Tracking their state via `console.log()` is proving to be a large mess of thousands of debug logs being emitted in the console on every page reload. There has to be a better way to log all of these states without littering the console.


You devise a plan. And decide to create a small library to record these logs without printing them to the console.

Initially, it has the following interface available.

```js
MayoLog.log('Mayonnaise bottle 1 displayed ');
// and, optionally with an arbitrary dataset
MayoLog.log('Mayonnaise bottle 3 displayed', {mayoFlavId: 12});
```

As you progress you realize you need to find a way to retrieve items from the log, so you add in the following:

```js
// will print all of the logged events to the console
MayoLog.toConsole();
// in something like the following format:
// (103ms) Mayonnaise bottle 3 displayed {mayoFlavId: 12}
```

Oh yeah, you realized it would be nice to record the time, in milliseconds, from [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) to when this log entry was added. That might help later on when debugging mega-mayonnaise performance concerns.

As you continue to add more logs, you realize that what you really need is a way to filter these logs. So you decide to add the following capabilities to filter on the data attribute.

```js
// This will return all log entries that have the
// attribute 'mayoFlavId' in their dataset
MayoLog.findWithDataAttribute('mayoFlavId');

// returning something like the following
[
  {
   time: 103,
   log: 'Mayonnaise bottle 3 displayed',
   data: {mayoFlavId: 12}
  },
  {
   time: 144,
   log: 'Bottle 5 clicked',
   data: {mayoFlavId: 52, size: 'Largest'}
  }
]
```

Feeling mighty proud of yourself, you begin to get ambitious and wonder about how you might transmit these logs to your server for 1% of your mayonnaise loving traffic?

For this you design a function, that can take a URL, and when called will `POST` the entire log as a `JSON` object to this endpoint. _And remember, this should only be called for 1% of your traffic, we don't want to melt your mayo server._

```js
MayoLog.sendToServer('http://tastymayo.yum/analytics');
```

* * *

As a recap you should now have a nice logging library that has the following interface:

```js
MayoLog.log(<string>)
MayoLog.log(<string>, <object>)
MayoLog.toConsole()
MayoLog.findWithDataAttribute(<string>)
MayoLog.sendToServer(<url>)
```

As a convenience, we've uploaded [a starter file](https://gist.github.com/banderson623/c20d7b3adc023c5ce3404d2efde95bdb)  with a single function to help you generate many log entries.

```js
loadSampleLogEntries(100);
```
