class Reminder {
  constructor(id, title, timeframe, active) {
    this.id = id
    this.title = title
    this.timeframe = timeframe
    this.active = active
  }
}

export default [
  new Reminder(1, "I am loved", "4:00pm - 6:00pm", true),
  new Reminder(2, "I am Groot", "6:00am - 12:00pm", true),
  new Reminder(3, "You're the coolest", "9:00am - 5:00pm", true),
  new Reminder(4, "You Thiccc", "Always", false),
  new Reminder(
    5,
    "Hello, i love you won't you tell me your name",
    "Always",
    false
  ),
  new Reminder(6, "I am loved", "4:00pm - 6:00pm", true),
  new Reminder(7, "I am Groot", "6:00am - 12:00pm", true),
  new Reminder(8, "You're the coolest", "9:00am - 5:00pm", true),
  new Reminder(9, "You Thiccc", "Always", false),
  new Reminder(
    10,
    "Hello, i love you won't you tell me your name",
    "Always",
    false
  ),
]
