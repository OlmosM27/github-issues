import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GithubIssue, State } from '../../interfaces';

@Component({
  selector: 'issue-item',
  imports: [RouterLink, CommonModule],
  templateUrl: './issue-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItem {
  issue = input.required<GithubIssue>();

  get isOpen() {
    return this.issue().state === State.Open;
  }

  get since() {
    return 'hoy';
  }
}
