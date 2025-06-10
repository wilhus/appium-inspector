function getEvent(type, args) {
  return new CustomEvent('notificationEvent', {
    detail: {
      type,
      args,
    },
  });
}

export const notification = {
  info: (args) => {
    document.dispatchEvent(getEvent('info', args));
  },
  error: (args) => {
    document.dispatchEvent(getEvent('error', args));
  },
  success: (args) => {
    document.dispatchEvent(getEvent('success', args));
  },
  warning: (args) => {
    document.dispatchEvent(getEvent('warning', args));
  },
};
