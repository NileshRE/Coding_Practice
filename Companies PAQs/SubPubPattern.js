// Publisher Subscriber or Observer Pattern

// A subscription model in which an object susbcribes to a host and host notifies the object.

class NotificationCenter {
  constructor() {
    this.subscribers = [];
  }
  subscribe(listener) {
    this.subscribers.push(listener);
  }

  unsubscribe(listener) {
    this.subscribers = this.subscribers.filter((sub) => sub !== listener);
  }

  notify(notification) {
    this.subscribers.forEach((sub) => sub(notification));
  }
}

const showNotificationPopup = (message) => {
  console.log("🔔 Popup:", message);
};

const updateNotificationIcon = (message) => {
  console.log("📬 Bell Icon Updated:", message);
};

const logNotification = (message) => {
  console.log("📝 Logged:", message);
};

const notification = new NotificationCenter();

notification.subscribe(showNotificationPopup); // subscribed to show notifiction
notification.subscribe(updateNotificationIcon); // subscribed to update notification
notification.unsubscribe(updateNotificationIcon); // unsubscribed to update notification
notification.notify("This is how it works"); // This message will go to subscribed functions
