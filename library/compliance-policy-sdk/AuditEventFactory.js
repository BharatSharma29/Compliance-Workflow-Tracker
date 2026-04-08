// Creates standardized audit events

export class AuditEventFactory {
  createEvent(action, entityId, user) {
    return {
      eventId: Date.now().toString(),
      action,
      entityId,
      user,
      timestamp: new Date().toISOString()
    };
  }
}