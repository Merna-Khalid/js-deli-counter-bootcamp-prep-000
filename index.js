function takeANumber(line, name) {
  line.push(name)
  return "Welcome, " + name + ". You are number " + (line.length) + " in line."
}

function nowServing(line) {
  if(line.length > 0) {
    return line.shift()
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length > 0) {
    var s = "The line is currently:"
    for(var i = 0; i < line.length; i++) {
      s += " " + (i + 1) + ". " + line[i] + ","
    }
    s.pop()
    return s
  }
  else {
    return "The line is currently empty."
  }
}