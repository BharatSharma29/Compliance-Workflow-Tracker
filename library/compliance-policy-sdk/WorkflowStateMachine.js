// Handles allowed workflow transitions

export class WorkflowStateMachine {
  constructor() {
    // Define allowed transitions
    this.transitions = {
      Draft: ["Submitted"],
      Submitted: ["Under Review"],
      "Under Review": ["Approved", "Rejected"],
      Approved: [],
      Rejected: []
    };
  }

  // Check if transition is valid
  canTransition(from, to) {
    return this.transitions[from]?.includes(to);
  }
}