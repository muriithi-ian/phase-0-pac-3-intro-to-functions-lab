function shout(args) {
  return args.toUpperCase();
}

function whisper(args) {
  return args.toLowerCase();
}

function logShout(args) {
  console.log(shout(args));
}

function logWhisper(args) {
  console.log(whisper(args));
}

function sayHiToHeadphonedRoommate(args) {
  if (args.toLowerCase() === args) {
    return "I can't hear you!";
  } else if (args.toUpperCase() === args) {
    return "YES INDEED!";
  } else if (args === "Let's have dinner together!") {
    return "I would love to!";
  }
}
