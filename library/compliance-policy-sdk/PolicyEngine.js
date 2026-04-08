// Main orchestrator combining all logic

import { WorkflowStateMachine } from "./WorkflowStateMachine.js";
import { RiskScorer } from "./RiskScorer.js";
import { AuditEventFactory } from "./AuditEventFactory.js";

export class PolicyEngine {
  constructor() {
    this.workflow = new WorkflowStateMachine();
    this.risk = new RiskScorer();
    this.audit = new AuditEventFactory();
  }

  // Validate workflow transition
  validateTransition(from, to) {
    if (!this.workflow.canTransition(from, to)) {
      throw new Error(`Invalid transition from ${from} to ${to}`);
    }
  }

  // Calculate risk score
  calculateRisk(request) {
    return this.risk.calculate(request);
  }

  // Generate audit event
  createAudit(action, entityId, user) {
    return this.audit.createEvent(action, entityId, user);
  }
}