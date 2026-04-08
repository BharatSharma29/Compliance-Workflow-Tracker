// Calculates risk based on deadlines and status

export class RiskScorer {
  calculate(request) {
    let score = 0;

    const now = new Date();
    const due = new Date(request.dueDate);

    // Overdue = high risk
    if (due < now) {
      score += 50;
    }

    // Not submitted = risk
    if (request.status === "Draft") {
      score += 20;
    }

    // Under review too long
    if (request.status === "Under Review") {
      score += 10;
    }

    return score;
  }
}