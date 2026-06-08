import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIssue, State } from '../../interfaces';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'issue-item',
  imports: [RouterLink, CommonModule],
  templateUrl: './issue-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItem {
  issueSvc = inject(IssueService);
  issue = input.required<GithubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }

  get since() {
    return 'hoy';
  }

  prefetchData() {
    this.issueSvc.setIssueData(this.issue());
    // this.issueSvc.prefetchIssue(this.issue().number.toString());
  }
}
